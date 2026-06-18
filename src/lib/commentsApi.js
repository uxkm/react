import {
  removePendingCommentSnapshot,
  syncPendingCommentsWithApproved,
} from '@/lib/commentOwnership'
import {
  COMMENT_ERROR_MESSAGES,
  COMMENT_MIN_SUBMIT_MS,
  TURNSTILE_SITE_KEY,
} from '@/lib/commentsConfig'
import { isValidCommentPassword } from '@/lib/commentPassword'
import { validateCommentContent } from '@/lib/commentContentFilter'
import {
  getCommentsAdminPassword,
  isCommentsAdminLoggedIn,
} from '@/lib/commentsAdminApi'
import {
  addDevPageComment,
  deleteDevPageComment,
  getDevPageComments,
  isDevCommentStorageActive,
} from '@/lib/commentsDevStorage'
import { isCommentsConfigured, supabase } from '@/lib/supabase'

function shouldUseCommentEdgeFunction() {
  if (!isCommentsConfigured() || !supabase) return false
  const flag = import.meta.env.VITE_COMMENTS_USE_EDGE_FUNCTION
  if (flag === 'false') return false
  if (flag === 'true') return true
  return import.meta.env.PROD
}

function isSubmitTooFast(formOpenedAt) {
  if (!formOpenedAt) return false
  const openedAt = Number(formOpenedAt)
  if (!Number.isFinite(openedAt)) return false
  return Date.now() - openedAt < COMMENT_MIN_SUBMIT_MS
}

export function isCommentsEnabled() {
  return isCommentsConfigured() || isDevCommentStorageActive()
}

export function usesDevCommentStorage() {
  return isDevCommentStorageActive()
}

export async function fetchPageComments(pagePath) {
  if (usesDevCommentStorage()) {
    return {
      comments: getDevPageComments(pagePath).map((comment) => ({
        ...comment,
        is_pending: false,
      })),
      error: null,
    }
  }

  if (isCommentsConfigured() && supabase) {
    const { data, error } = await supabase
      .from('comments')
      .select('id, body, author_name, created_at, parent_id')
      .eq('page_path', pagePath)
      .eq('status', 'approved')
      .order('created_at', { ascending: true })

    if (error) {
      return { comments: [], error: '댓글을 불러오지 못했습니다.' }
    }

    const approved = (data ?? []).map((comment) => ({
      ...comment,
      is_pending: false,
    }))
    syncPendingCommentsWithApproved(approved.map((comment) => comment.id))

    return {
      comments: approved,
      error: null,
    }
  }

  return { comments: [], error: null }
}

export async function submitPageComment({
  pagePath,
  authorName,
  body,
  password,
  website,
  turnstileToken,
  parentId = null,
  formOpenedAt = null,
}) {
  if (!isCommentsEnabled()) {
    return { ok: false, error: COMMENT_ERROR_MESSAGES.not_configured }
  }

  const contentCheck = validateCommentContent({ authorName, body })
  if (!contentCheck.ok) {
    return { ok: false, error: COMMENT_ERROR_MESSAGES.prohibited }
  }

  const adminPassword = isCommentsAdminLoggedIn()
    ? getCommentsAdminPassword()
    : null

  if (!adminPassword && !isValidCommentPassword(password)) {
    return { ok: false, error: COMMENT_ERROR_MESSAGES.invalid_password }
  }

  if (!adminPassword && isSubmitTooFast(formOpenedAt)) {
    return { ok: false, error: COMMENT_ERROR_MESSAGES.spam }
  }

  if (
    TURNSTILE_SITE_KEY &&
    isCommentsConfigured() &&
    !turnstileToken &&
    !adminPassword
  ) {
    return { ok: false, error: COMMENT_ERROR_MESSAGES.turnstile_required }
  }

  if (usesDevCommentStorage()) {
    if (website?.trim()) {
      return { ok: false, error: COMMENT_ERROR_MESSAGES.spam }
    }

    const result = await addDevPageComment(pagePath, {
      authorName,
      body,
      password,
      parentId,
      isAdmin: Boolean(adminPassword),
    })

    if (result.error) {
      return {
        ok: false,
        error:
          COMMENT_ERROR_MESSAGES[result.error] ??
          COMMENT_ERROR_MESSAGES.invalid,
      }
    }

    return { ok: true, pendingReview: !adminPassword, commentId: result.comment?.id }
  }

  if (!supabase) {
    return { ok: false, error: COMMENT_ERROR_MESSAGES.not_configured }
  }

  if (adminPassword) {
    return submitAdminCommentWithFallback(supabase, adminPassword, {
      pagePath,
      authorName,
      body,
      website,
      parentId,
    })
  }

  const useEdgeFunction = shouldUseCommentEdgeFunction()

  if (useEdgeFunction) {
    const { data, error } = await supabase.functions.invoke('post-comment', {
      body: {
        page_path: pagePath,
        author_name: authorName,
        body,
        password,
        turnstile_token: turnstileToken,
        website,
        parent_id: parentId,
        form_opened_at: formOpenedAt
          ? new Date(formOpenedAt).toISOString()
          : null,
      },
    })

    if (error) {
      return { ok: false, error: COMMENT_ERROR_MESSAGES.server_error }
    }

    if (data?.error) {
      return {
        ok: false,
        error:
          COMMENT_ERROR_MESSAGES[data.error] ??
          COMMENT_ERROR_MESSAGES.server_error,
      }
    }

    return {
      ok: true,
      pendingReview: data?.status === 'pending',
      commentId: data?.id,
    }
  }

  const { data, error } = await supabase.rpc('submit_page_comment', {
    p_page_path: pagePath,
    p_author_name: authorName,
    p_body: body,
    p_password: password,
    p_website: website ?? '',
    p_parent_id: parentId,
    p_ip_hash: null,
    p_form_opened_at: formOpenedAt
      ? new Date(formOpenedAt).toISOString()
      : null,
  })

  if (error) {
    const message = import.meta.env.DEV ? error.message : null
    return {
      ok: false,
      error: message
        ? `서버 오류: ${message}`
        : COMMENT_ERROR_MESSAGES.server_error,
    }
  }

  if (data?.error) {
    return {
      ok: false,
      error:
        COMMENT_ERROR_MESSAGES[data.error] ?? COMMENT_ERROR_MESSAGES.server_error,
    }
  }

  return {
    ok: true,
    pendingReview: data?.status === 'pending',
    commentId: data?.id,
  }
}

function isRpcNotFound(error) {
  return (
    error?.code === 'PGRST202' ||
    (typeof error?.message === 'string' &&
      error.message.includes('Could not find the function'))
  )
}

async function submitAdminCommentWithFallback(
  supabaseClient,
  adminPassword,
  { pagePath, authorName, body, website, parentId },
) {
  const { data, error } = await supabaseClient.rpc('admin_submit_page_comment', {
    p_admin_password: adminPassword,
    p_page_path: pagePath,
    p_author_name: authorName,
    p_body: body,
    p_website: website ?? '',
    p_parent_id: parentId,
  })

  if (!error) {
    if (data?.error) {
      return {
        ok: false,
        error:
          COMMENT_ERROR_MESSAGES[data.error] ??
          COMMENT_ERROR_MESSAGES.server_error,
      }
    }
    return {
      ok: true,
      pendingReview: data?.status === 'pending',
      commentId: data?.id,
    }
  }

  if (!isRpcNotFound(error)) {
    const message = import.meta.env.DEV ? error.message : null
    return {
      ok: false,
      error: message
        ? `서버 오류: ${message}`
        : COMMENT_ERROR_MESSAGES.server_error,
    }
  }

  const submit = await supabaseClient.rpc('submit_page_comment', {
    p_page_path: pagePath,
    p_author_name: authorName,
    p_body: body,
    p_password: adminPassword,
    p_website: website ?? '',
    p_parent_id: parentId,
    p_ip_hash: null,
    p_form_opened_at: null,
  })

  if (submit.error) {
    const message = import.meta.env.DEV ? submit.error.message : null
    return {
      ok: false,
      error: message
        ? `서버 오류: ${message}`
        : COMMENT_ERROR_MESSAGES.server_error,
    }
  }

  if (submit.data?.error) {
    return {
      ok: false,
      error:
        COMMENT_ERROR_MESSAGES[submit.data.error] ??
        COMMENT_ERROR_MESSAGES.server_error,
    }
  }

  if (submit.data?.status === 'pending' && submit.data?.id) {
    const approve = await supabaseClient.rpc('admin_update_comment_status', {
      p_admin_password: adminPassword,
      p_comment_id: submit.data.id,
      p_status: 'approved',
    })

    if (approve.error || approve.data?.error) {
      return {
        ok: true,
        pendingReview: true,
        commentId: submit.data.id,
      }
    }

    return {
      ok: true,
      pendingReview: false,
      commentId: submit.data.id,
    }
  }

  return {
    ok: true,
    pendingReview: submit.data?.status === 'pending',
    commentId: submit.data?.id,
  }
}

export async function deletePageComment({ pagePath, commentId, password }) {
  if (!isCommentsEnabled()) {
    return { ok: false, error: COMMENT_ERROR_MESSAGES.not_configured }
  }

  if (!password?.trim()) {
    return { ok: false, error: COMMENT_ERROR_MESSAGES.wrong_password }
  }

  if (usesDevCommentStorage()) {
    const result = await deleteDevPageComment(pagePath, commentId, password)
    if (result.error) {
      return {
        ok: false,
        error:
          COMMENT_ERROR_MESSAGES[result.error] ??
          COMMENT_ERROR_MESSAGES.delete_failed,
      }
    }

    return { ok: true }
  }

  if (!supabase) {
    return { ok: false, error: COMMENT_ERROR_MESSAGES.not_configured }
  }

  const { data, error } = await supabase.rpc('delete_page_comment', {
    p_comment_id: commentId,
    p_password: password,
  })

  if (error) {
    const message = import.meta.env.DEV ? error.message : null
    return {
      ok: false,
      error: message
        ? `서버 오류: ${message}`
        : COMMENT_ERROR_MESSAGES.delete_failed,
    }
  }

  if (data?.error) {
    return {
      ok: false,
      error:
        COMMENT_ERROR_MESSAGES[data.error] ??
        COMMENT_ERROR_MESSAGES.delete_failed,
    }
  }

  removePendingCommentSnapshot(commentId)
  return { ok: true }
}
