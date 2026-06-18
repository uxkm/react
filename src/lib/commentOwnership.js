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

export function removePendingCommentSnapshot(commentId) {
  const pending = readJson(PENDING_KEY, {})
  if (!pending[commentId]) return
  delete pending[commentId]
  writeJson(PENDING_KEY, pending)
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
