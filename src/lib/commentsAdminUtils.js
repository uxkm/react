import { getAllPendingCommentSnapshots } from '@/lib/commentOwnership'
import { getPagePathBreadcrumbs } from '@/lib/pagePathLabels'

export function getPagePathLabel(pagePath) {
  return getPagePathBreadcrumbs(pagePath)?.label ?? pagePath
}

export function isPendingComment(comment) {
  const status = String(comment?.status ?? '').trim().toLowerCase()
  if (status === 'pending') return true
  return Boolean(comment?.is_pending)
}

export function normalizeAdminComment(comment) {
  const pagePath = String(comment?.page_path ?? comment?.pagePath ?? '').trim()
  const status = isPendingComment(comment) ? 'pending' : String(comment?.status ?? 'approved').trim().toLowerCase()

  return {
    ...comment,
    page_path: pagePath,
    status,
    author_name: String(comment?.author_name ?? '').trim(),
    body: String(comment?.body ?? '').trim(),
    created_at: comment?.created_at ?? new Date().toISOString(),
  }
}

export function mergeAdminCommentsWithPendingSnapshots(comments) {
  const byId = new Map()

  for (const comment of comments ?? []) {
    if (!comment?.id) continue
    byId.set(comment.id, normalizeAdminComment(comment))
  }

  for (const snapshot of getAllPendingCommentSnapshots()) {
    if (!snapshot?.id) continue
    const normalized = normalizeAdminComment({
      ...snapshot,
      status: 'pending',
      is_pending: true,
    })
    const existing = byId.get(snapshot.id)
    byId.set(snapshot.id, existing ? { ...existing, ...normalized, status: 'pending' } : normalized)
  }

  return [...byId.values()].sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at),
  )
}

export function countCommentsByStatus(comments, status) {
  if (status === 'pending') {
    return comments.filter((comment) => isPendingComment(comment)).length
  }
  return comments.filter((comment) => comment.status === status).length
}

/** page_path 기준으로 댓글을 묶고, 대기 건수·최신순으로 정렬합니다. */
export function groupCommentsByPage(comments) {
  const groups = new Map()

  for (const comment of comments) {
    const pagePath = comment.page_path
    if (!groups.has(pagePath)) {
      groups.set(pagePath, [])
    }
    groups.get(pagePath).push(comment)
  }

  return [...groups.entries()]
    .map(([pagePath, pageComments]) => {
      const sorted = [...pageComments].sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at),
      )
      const pendingCount = countCommentsByStatus(sorted, 'pending')

      return {
        pagePath,
        label: getPagePathLabel(pagePath),
        comments: sorted,
        pendingCount,
        totalCount: sorted.length,
        latestAt: sorted[0]?.created_at ?? null,
      }
    })
    .sort((a, b) => {
      if (a.pendingCount !== b.pendingCount) {
        return b.pendingCount - a.pendingCount
      }
      return new Date(b.latestAt) - new Date(a.latestAt)
    })
}

/** 댓글이 있는 page_path에서 섹션(prefix) 필터 옵션을 만듭니다. */
export function buildSectionFilterOptions(comments) {
  const prefixes = new Set()

  for (const comment of comments) {
    const segments = comment.page_path.split('/').filter(Boolean)
    if (segments.length >= 2) {
      prefixes.add(`/${segments.slice(0, 2).join('/')}/`)
    }
    if (segments.length >= 3) {
      prefixes.add(`/${segments.slice(0, 3).join('/')}/`)
    }
  }

  return [...prefixes]
    .sort()
    .map((prefix) => ({
      value: prefix,
      label: prefix,
    }))
}

export function buildPageFilterOptions(comments) {
  const paths = [...new Set(comments.map((comment) => comment.page_path))]

  return paths
    .sort((a, b) => getPagePathLabel(a).localeCompare(getPagePathLabel(b), 'ko'))
    .map((pagePath) => ({
      value: pagePath,
      label: getPagePathLabel(pagePath),
    }))
}

export function filterComments(comments, { sectionPrefix, pagePath }) {
  let filtered = comments

  if (sectionPrefix) {
    filtered = filtered.filter((comment) =>
      comment.page_path.startsWith(sectionPrefix),
    )
  }

  if (pagePath) {
    filtered = filtered.filter((comment) => comment.page_path === pagePath)
  }

  return filtered
}

export const ADMIN_COMMENTS_PAGE_SIZE = 20

export function paginateList(items, page, pageSize = ADMIN_COMMENTS_PAGE_SIZE) {
  const totalCount = items.length
  const totalPages = Math.max(1, Math.ceil(totalCount / pageSize) || 1)
  const safePage = Math.min(Math.max(1, page), totalPages)
  const start = (safePage - 1) * pageSize

  return {
    items: items.slice(start, start + pageSize),
    totalCount,
    totalPages,
    page: safePage,
    pageSize,
    hasPrev: safePage > 1,
    hasNext: safePage < totalPages,
    rangeStart: totalCount === 0 ? 0 : start + 1,
    rangeEnd: Math.min(start + pageSize, totalCount),
  }
}
