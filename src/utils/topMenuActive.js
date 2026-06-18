/**
 * GNB / footer 1depth 활성 판정.
 * `useLocation().pathname` 기준이라 POP(뒤로가기·앞으로가기)에도 NavLink와 동일하게 갱신된다.
 */
export function isTopMenuDepth1Active(menu, pathname) {
  if (!menu?.to || !pathname) return false

  const base = menu.to.replace(/\/+$/, '')
  if (pathname === base) return true
  if (pathname.startsWith(`${base}/`)) return true

  return (menu.matchPrefixes ?? []).some((prefix) => pathname.startsWith(prefix))
}

/** Publishing / A11Y GNB·sub top nav 2depth 섹션 prefix (`/publishing/css` 등) */
export function getTopMenuDepth2SectionPrefix(to) {
  const segments = String(to ?? '').split('/').filter(Boolean)
  if (segments.length >= 2) return `/${segments[0]}/${segments[1]}`
  return String(to ?? '').replace(/\/+$/, '')
}

export function isTopMenuDepth2Active(item, pathname) {
  if (!item?.to || !pathname) return false

  const base = item.to.replace(/\/+$/, '')
  if (pathname === base || pathname.startsWith(`${base}/`)) return true

  const sectionPrefix = getTopMenuDepth2SectionPrefix(item.to)
  if (!sectionPrefix) return false

  return pathname === sectionPrefix || pathname.startsWith(`${sectionPrefix}/`)
}
