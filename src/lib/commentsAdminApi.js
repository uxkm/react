import {
  adminDeleteDevComment,
  adminUpdateDevCommentStatus,
  getAllDevComments,
  isDevCommentStorageActive,
} from '@/lib/commentsDevStorage'
import { mergeAdminCommentsWithPendingSnapshots } from '@/lib/commentsAdminUtils'
import { removePendingCommentSnapshot } from '@/lib/commentOwnership'
import { ADMIN_COMMENT_AUTHOR_NAME, COMMENT_ERROR_MESSAGES } from '@/lib/commentsConfig'
import { isCommentsConfigured, supabase } from '@/lib/supabase'

const ADMIN_SESSION_KEY = 'uxkm:comments-admin-session'
export const ADMIN_SESSION_CHANGED_EVENT = 'uxkm:comments-admin-changed'
const SESSION_MS = 8 * 60 * 60 * 1000

function notifyAdminSessionChanged() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event(ADMIN_SESSION_CHANGED_EVENT))
  }
}

function readAdminSessionRaw() {
  try {
    return (
      localStorage.getItem(ADMIN_SESSION_KEY) ??
      sessionStorage.getItem(ADMIN_SESSION_KEY)
    )
  } catch {
    return null
  }
}

function writeAdminSession(session) {
  try {
    localStorage.setItem(ADMIN_SESSION_KEY, JSON.stringify(session))
    sessionStorage.removeItem(ADMIN_SESSION_KEY)
    notifyAdminSessionChanged()
    return true
  } catch {
    return false
  }
}

function removeAdminSession() {
  try {
    localStorage.removeItem(ADMIN_SESSION_KEY)
    sessionStorage.removeItem(ADMIN_SESSION_KEY)
    notifyAdminSessionChanged()
  } catch {
    // ignore
  }
}

function getDevAdminPassword() {
  return import.meta.env.VITE_COMMENTS_DEV_ADMIN_PASSWORD?.trim() || 'uxkm-admin'
}

export function isCommentsAdminAvailable() {
  return isCommentsConfigured() || isDevCommentStorageActive()
}

export function getAdminSession() {
  try {
    const raw = readAdminSessionRaw()
    if (!raw) return null
    const parsed = JSON.parse(raw)
    if (!parsed?.verifiedAt) return null
    if (Date.now() - parsed.verifiedAt > SESSION_MS) {
      removeAdminSession()
      return null
    }
    if (
      !localStorage.getItem(ADMIN_SESSION_KEY) &&
      sessionStorage.getItem(ADMIN_SESSION_KEY)
    ) {
      try {
        localStorage.setItem(ADMIN_SESSION_KEY, raw)
        sessionStorage.removeItem(ADMIN_SESSION_KEY)
      } catch {
        // ignore migration failure
      }
    }
    return parsed
  } catch {
    return null
  }
}

export function getAdminCommentAuthorName() {
  const session = getAdminSession()
  if (!session) return null
  return session.authorName?.trim() || ADMIN_COMMENT_AUTHOR_NAME
}

export function isCommentsAdminLoggedIn() {
  return isAdminSessionValid()
}

export function getCommentsAdminPassword() {
  return resolveAdminPassword('')
}

function usesDevAdminAuth() {
  return isDevCommentStorageActive() && !isCommentsConfigured()
}

function usesSupabaseAdminAuth() {
  return isCommentsConfigured() && Boolean(supabase)
}

export function isAdminSessionValid() {
  const session = getAdminSession()
  if (!session) return false

  if (usesDevAdminAuth()) {
    return session.mode === 'dev'
  }

  if (usesSupabaseAdminAuth()) {
    return session.mode === 'supabase' && Boolean(session.password?.trim())
  }

  return false
}

function resolveAdminPassword(adminPassword) {
  const session = getAdminSession()
  if (!session) return null

  const provided = adminPassword?.trim()
  if (provided) return provided

  if (usesDevAdminAuth() && session.mode === 'dev') {
    return getDevAdminPassword()
  }

  if (usesSupabaseAdminAuth() && session.mode === 'supabase' && session.password?.trim()) {
    return session.password.trim()
  }

  return null
}

function parseAdminCommentsPayload(comments) {
  if (Array.isArray(comments)) return comments
  if (typeof comments === 'string') {
    try {
      const parsed = JSON.parse(comments)
      return Array.isArray(parsed) ? parsed : []
    } catch {
      return []
    }
  }
  return []
}

function extractCommentsFromRpcData(data) {
  if (Array.isArray(data)) return data
  if (data && typeof data === 'object') {
    return parseAdminCommentsPayload(data.comments)
  }
  return []
}

function finalizeAdminComments(comments) {
  return mergeAdminCommentsWithPendingSnapshots(parseAdminCommentsPayload(comments))
}

function requireAdminPassword(adminPassword) {
  if (!getAdminSession()) {
    return { ok: false, error: COMMENT_ERROR_MESSAGES.admin_forbidden }
  }

  const password = resolveAdminPassword(adminPassword)
  if (!password) {
    return { ok: false, error: COMMENT_ERROR_MESSAGES.admin_forbidden }
  }

  return { ok: true, password }
}

export function getCommentsStorageMode() {
  if (isCommentsConfigured()) return 'supabase'
  if (isDevCommentStorageActive()) return 'dev'
  return 'none'
}

export function clearAdminSession() {
  removeAdminSession()
}

export async function loginCommentsAdmin(password) {
  if (!password?.trim()) {
    return { ok: false, error: COMMENT_ERROR_MESSAGES.admin_forbidden }
  }

  if (isDevCommentStorageActive() && !isCommentsConfigured()) {
    if (password !== getDevAdminPassword()) {
      return { ok: false, error: COMMENT_ERROR_MESSAGES.admin_forbidden }
    }

    writeAdminSession({
      verifiedAt: Date.now(),
      mode: 'dev',
      authorName: ADMIN_COMMENT_AUTHOR_NAME,
    })
    return { ok: true }
  }

  if (!supabase) {
    return { ok: false, error: COMMENT_ERROR_MESSAGES.not_configured }
  }

  const { data, error } = await supabase.rpc('admin_list_comments', {
    p_admin_password: password,
    p_status: null,
    p_page_path: null,
  })

  if (error) {
    return { ok: false, error: COMMENT_ERROR_MESSAGES.server_error }
  }

  if (data?.error) {
    return { ok: false, error: COMMENT_ERROR_MESSAGES.admin_forbidden }
  }

  writeAdminSession({
    verifiedAt: Date.now(),
    mode: 'supabase',
    password,
    authorName: ADMIN_COMMENT_AUTHOR_NAME,
  })

  return { ok: true }
}

export async function fetchAdminComments({
  adminPassword,
  status = '',
  pagePath = '',
}) {
  const auth = requireAdminPassword(adminPassword)
  if (!auth.ok) return auth

  const password = auth.password

  if (usesDevAdminAuth()) {
    if (password !== getDevAdminPassword()) {
      return { ok: false, error: COMMENT_ERROR_MESSAGES.admin_forbidden }
    }

    let comments = finalizeAdminComments(getAllDevComments())
    if (status) {
      comments = comments.filter((comment) =>
        status === 'pending'
          ? comment.status === 'pending'
          : comment.status === status,
      )
    }
    if (pagePath) comments = comments.filter((comment) => comment.page_path === pagePath)
    return { ok: true, comments }
  }

  if (!supabase) {
    return { ok: false, error: COMMENT_ERROR_MESSAGES.not_configured }
  }

  const { data, error } = await supabase.rpc('admin_list_comments', {
    p_admin_password: password,
    p_status: null,
    p_page_path: null,
  })

  if (error) {
    return { ok: false, error: COMMENT_ERROR_MESSAGES.server_error }
  }

  if (data?.error) {
    return { ok: false, error: COMMENT_ERROR_MESSAGES.admin_forbidden }
  }

  let comments = finalizeAdminComments(extractCommentsFromRpcData(data))
  if (status) {
    comments = comments.filter((comment) =>
      status === 'pending'
        ? comment.status === 'pending'
        : comment.status === status,
    )
  }
  if (pagePath) {
    comments = comments.filter((comment) => comment.page_path === pagePath)
  }

  return { ok: true, comments }
}

export async function updateAdminCommentStatus({
  adminPassword,
  commentId,
  status,
}) {
  const auth = requireAdminPassword(adminPassword)
  if (!auth.ok) return auth

  const password = auth.password

  if (isDevCommentStorageActive() && !isCommentsConfigured()) {
    if (password !== getDevAdminPassword()) {
      return { ok: false, error: COMMENT_ERROR_MESSAGES.admin_forbidden }
    }

    const result = adminUpdateDevCommentStatus(commentId, status)
    return result.error
      ? { ok: false, error: COMMENT_ERROR_MESSAGES.invalid }
      : { ok: true }
  }

  if (!supabase) {
    return { ok: false, error: COMMENT_ERROR_MESSAGES.not_configured }
  }

  const { data, error } = await supabase.rpc('admin_update_comment_status', {
    p_admin_password: password,
    p_comment_id: commentId,
    p_status: status,
  })

  if (error) {
    return { ok: false, error: COMMENT_ERROR_MESSAGES.server_error }
  }

  if (data?.error) {
    return { ok: false, error: COMMENT_ERROR_MESSAGES.invalid }
  }

  return { ok: true }
}

export async function deleteAdminComment({ adminPassword, commentId }) {
  const auth = requireAdminPassword(adminPassword)
  if (!auth.ok) return auth

  const password = auth.password

  if (isDevCommentStorageActive() && !isCommentsConfigured()) {
    if (password !== getDevAdminPassword()) {
      return { ok: false, error: COMMENT_ERROR_MESSAGES.admin_forbidden }
    }

    const result = adminDeleteDevComment(commentId)
    if (result.error) {
      return { ok: false, error: COMMENT_ERROR_MESSAGES.delete_failed }
    }

    for (const removedId of result.removedIds ?? [commentId]) {
      removePendingCommentSnapshot(removedId)
    }

    return { ok: true }
  }

  if (!supabase) {
    return { ok: false, error: COMMENT_ERROR_MESSAGES.not_configured }
  }

  const { data, error } = await supabase.rpc('admin_delete_comment', {
    p_admin_password: password,
    p_comment_id: commentId,
  })

  if (error) {
    return { ok: false, error: COMMENT_ERROR_MESSAGES.server_error }
  }

  if (data?.error) {
    return { ok: false, error: COMMENT_ERROR_MESSAGES.delete_failed }
  }

  removePendingCommentSnapshot(commentId)
  return { ok: true }
}
