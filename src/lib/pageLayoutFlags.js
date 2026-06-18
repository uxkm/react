/** 댓글을 기본으로 켤 4-depth 문서 페이지인지 판별합니다. */
export function isCommentsEligiblePath(pathname) {
  const segments = String(pathname ?? '')
    .split('/')
    .filter(Boolean)

  if (segments.length < 4) return false
  if (segments[0] === 'admin' || segments[0] === 'updates') return false
  if (segments.includes('bookmark')) return false

  if (segments[0] === 'publishing') return true
  if (segments[0] === 'accessibility') return true
  if (segments[0] === 'build-system' && segments[1] === 'gulp') return true

  return false
}
