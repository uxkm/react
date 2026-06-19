const PENDING_KEY = 'uxkm:comment-pending'

function readJson(key, fallback) {
  try {
    const raw = localStorage.getItem(key)
    if (!raw) return fallback
    const parsed = JSON.parse(raw)
    return parsed ?? fallback
  } catch {
    return fallback
  }
}

function writeJson(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
    return true
  } catch {
    return false
  }
}

export function savePendingCommentSnapshot(comment) {
  if (!comment?.id) return false
  const pending = readJson(PENDING_KEY, {})
  pending[comment.id] = comment
  return writeJson(PENDING_KEY, pending)
}

export function getPendingCommentsForPage(pagePath) {
  const pending = readJson(PENDING_KEY, {})
  return Object.values(pending).filter((comment) => comment.page_path === pagePath)
}

export function getAllPendingCommentSnapshots() {
  const pending = readJson(PENDING_KEY, {})
  return Object.values(pending)
}

/**
 * @param {string | string[]} commentIds
 * @param {{ includeReplySnapshots?: boolean }} options
 * includeReplySnapshots: 부모 삭제 시 pending 답글 스냅샷도 함께 제거
 */
export function removePendingCommentSnapshots(
  commentIds,
  { includeReplySnapshots = false } = {},
) {
  const targetIds = new Set(
    (Array.isArray(commentIds) ? commentIds : [commentIds]).filter(Boolean),
  )
  if (targetIds.size === 0) return

  const pending = readJson(PENDING_KEY, {})
  let changed = false

  for (const id of Object.keys(pending)) {
    const snapshot = pending[id]
    const isTarget = targetIds.has(id)
    const isReplyOfTarget =
      includeReplySnapshots &&
      snapshot?.parent_id &&
      targetIds.has(snapshot.parent_id)

    if (isTarget || isReplyOfTarget) {
      delete pending[id]
      changed = true
    }
  }

  if (changed) {
    writeJson(PENDING_KEY, pending)
  }
}

export function removePendingCommentSnapshot(commentId, options) {
  removePendingCommentSnapshots([commentId], options)
}

export function syncPendingCommentsWithApproved(approvedIds) {
  const approved = new Set(approvedIds)
  const pending = readJson(PENDING_KEY, {})
  let changed = false

  for (const id of Object.keys(pending)) {
    if (approved.has(id)) {
      delete pending[id]
      changed = true
    }
  }

  if (changed) {
    writeJson(PENDING_KEY, pending)
  }
}
