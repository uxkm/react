import { isCommentsConfigured } from '@/lib/supabase'
import { validateCommentContent } from '@/lib/commentContentFilter'
import { hashCommentIp } from '@/lib/commentIpHash'
import { COMMENT_ERROR_MESSAGES } from '@/lib/commentsConfig'
import { hashCommentPassword } from '@/lib/commentPassword'

const STORAGE_KEY = 'uxkm:page-comments'
export const COMMENTS_CHANGED_EVENT = 'uxkm:comments-changed'

function notifyCommentsChanged() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event(COMMENTS_CHANGED_EVENT))
  }
}

function readStore() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return {}
    const parsed = JSON.parse(raw)
    return parsed && typeof parsed === 'object' ? parsed : {}
  } catch {
    return {}
  }
}

function writeStore(store) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(store))
    return true
  } catch {
    return false
  }
}

export function isDevCommentStorageActive() {
  if (isCommentsConfigured()) return false
  if (import.meta.env.VITE_COMMENTS_DEV_STORAGE === 'true') return true
  if (import.meta.env.DEV) return true
  return false
}

export function getDevPageComments(pagePath) {
  const store = readStore()
  const pageComments = Array.isArray(store[pagePath]) ? store[pagePath] : []
  return pageComments.filter((comment) => comment.status === 'approved')
}

export function getAllDevComments() {
  const store = readStore()
  const rows = []

  for (const [pagePath, pageComments] of Object.entries(store)) {
    if (!Array.isArray(pageComments)) continue
    for (const comment of pageComments) {
      rows.push({
        ...comment,
        page_path: pagePath,
        status: comment.status ?? 'pending',
      })
    }
  }

  return rows.sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at),
  )
}

export async function addDevPageComment(
  pagePath,
  { authorName, body, password, parentId = null, isAdmin = false },
) {
  const contentCheck = validateCommentContent({ authorName, body })
  if (!contentCheck.ok) {
    return { error: 'prohibited' }
  }

  const store = readStore()
  const pageComments = Array.isArray(store[pagePath]) ? store[pagePath] : []

  if (parentId) {
    const parent = pageComments.find(
      (comment) =>
        comment.id === parentId &&
        !comment.parent_id &&
        comment.status === 'approved',
    )
    if (!parent) {
      return { error: 'invalid' }
    }
  }

  const passwordHash = isAdmin ? null : await hashCommentPassword(password)
  const ipHash = await hashCommentIp('127.0.0.1')
  const nextComment = {
    id: crypto.randomUUID(),
    parent_id: parentId,
    author_name: authorName,
    body,
    created_at: new Date().toISOString(),
    password_hash: passwordHash,
    ip_hash: ipHash,
    status: isAdmin ? 'approved' : 'pending',
    is_pending: !isAdmin,
  }

  store[pagePath] = [...pageComments, nextComment]

  if (!writeStore(store)) {
    return { error: 'storage' }
  }

  notifyCommentsChanged()
  return { comment: nextComment }
}

export async function deleteDevPageComment(pagePath, commentId, password) {
  const store = readStore()
  const pageComments = Array.isArray(store[pagePath]) ? store[pagePath] : []
  const target = pageComments.find((comment) => comment.id === commentId)

  if (!target) {
    return { error: 'invalid' }
  }

  if (target.password_hash == null) {
    const adminPassword =
      import.meta.env.VITE_COMMENTS_DEV_ADMIN_PASSWORD?.trim() || 'uxkm-admin'
    if (password !== adminPassword) {
      return { error: 'wrong_password' }
    }
  } else {
    const passwordHash = await hashCommentPassword(password)
    if (target.password_hash !== passwordHash) {
      return { error: 'wrong_password' }
    }
  }

  const childIds = pageComments
    .filter((comment) => comment.parent_id === commentId)
    .map((comment) => comment.id)

  store[pagePath] = pageComments.filter(
    (comment) => comment.id !== commentId && comment.parent_id !== commentId,
  )

  if (!writeStore(store)) {
    return { error: 'storage' }
  }

  notifyCommentsChanged()
  return { ok: true, removedIds: [commentId, ...childIds] }
}

export function adminDeleteDevComment(commentId) {
  const store = readStore()

  for (const [pagePath, pageComments] of Object.entries(store)) {
    if (!Array.isArray(pageComments)) continue
    if (!pageComments.some((comment) => comment.id === commentId)) continue

    const childIds = pageComments
      .filter((comment) => comment.parent_id === commentId)
      .map((comment) => comment.id)

    store[pagePath] = pageComments.filter(
      (comment) => comment.id !== commentId && comment.parent_id !== commentId,
    )
    if (!writeStore(store)) {
      return { error: 'storage' }
    }
    notifyCommentsChanged()
    return { ok: true, removedIds: [commentId, ...childIds] }
  }

  return { error: 'invalid' }
}

export function adminUpdateDevCommentStatus(commentId, status) {
  const store = readStore()

  for (const pagePath of Object.keys(store)) {
    const pageComments = store[pagePath]
    if (!Array.isArray(pageComments)) continue

    const index = pageComments.findIndex((comment) => comment.id === commentId)
    if (index < 0) continue

    pageComments[index] = {
      ...pageComments[index],
      status,
      is_pending: status !== 'approved',
    }
    store[pagePath] = pageComments
    if (!writeStore(store)) {
      return { error: 'storage' }
    }
    notifyCommentsChanged()
    return { ok: true }
  }

  return { error: 'invalid' }
}
