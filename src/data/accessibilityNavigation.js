import gnbLite from './gnbLite.json'

function stripTags(value) {
  return String(value ?? '')
    .replace(/<[^>]*>/g, '')
    .trim()
}

function normalizePath(value) {
  return String(value ?? '').replace(/^\//, '')
}

function parsePathSegments(value) {
  return normalizePath(value).split('/').filter(Boolean)
}

function buildAccessibilityMap() {
  const d1 = gnbLite.accessibility
  if (!d1?.depth2) return []

  return (d1.depth2 ?? []).map((depth2) => {
    const group = normalizePath(depth2.d2_link)
    const sections = []

    ;(depth2.depth3 ?? []).forEach((depth3) => {
      const d3Segments = parsePathSegments(depth3.d3_link)
      if (d3Segments.length === 0) return

      if (depth3.depth4?.length) {
        const sectionKey = d3Segments[0]
        const pages = depth3.depth4.map((depth4) => ({
          slug: normalizePath(depth4.d4_link),
          title: stripTags(depth4.d4_name),
        }))

        sections.push({
          key: sectionKey,
          title: stripTags(depth3.d3_name),
          pages,
        })
        return
      }

      const [sectionKey, pageSlug] = d3Segments
      if (!sectionKey || !pageSlug) return

      sections.push({
        key: sectionKey,
        title: stripTags(depth3.d3_name),
        pages: [{ slug: pageSlug, title: stripTags(depth3.d3_name) }],
      })
    })

    return {
      key: group,
      title: stripTags(depth2.d2_name),
      sections,
    }
  })
}

export const accessibilityNavigation = buildAccessibilityMap()

export const ACCESSIBILITY_DEFAULT_LAYOUT = {
  mainClass: 'a11y_page',
  type: 'accessibility',
  titleSticky: true,
  info: false,
  note: false,
  topAnimation: false,
  sideMenu: true,
  reference: true,
  contentList: true,
  depth3Last: true,
  bottomEditor: false,
}

/** depth2 그룹별 sub_top 기본값 (as-is pageLayout 패턴) */
export function getAccessibilityGroupLayoutDefaults(groupKey) {
  if (groupKey === 'a11y' || groupKey === 'waiAria') {
    return { note: false, topAnimation: true }
  }
  if (groupKey === 'a11yCreationTech') {
    return { note: true, topAnimation: false }
  }
  return {}
}

export function getAccessibilityGroupFromPath(pathname) {
  const segments = String(pathname ?? '').split('/').filter(Boolean)
  if (segments[0] !== 'accessibility') return ''
  return segments[1] ?? ''
}

/** A11Y GNB 1뎁스·`/accessibility` 리다이렉트 대상 (uxkm.io와 동일: 첫 A11Y 문서) */
const ACCESSIBILITY_HOME_FALLBACK = '/accessibility/a11y/01-a11yStart/a11yStart'

/** GNB·사이트맵과 동일: 그룹의 첫 문서 URL */
export function firstAccessibilityGroupHref(groupKey) {
  const group = accessibilityNavigation.find((item) => item.key === groupKey)
  if (!group) return ACCESSIBILITY_HOME_FALLBACK
  const section = group.sections?.[0]
  if (!section) return ACCESSIBILITY_HOME_FALLBACK
  const page = section.pages?.[0]
  if (!page) return ACCESSIBILITY_HOME_FALLBACK
  return `/accessibility/${group.key}/${section.key}/${page.slug}`
}

export const ACCESSIBILITY_HOME_HREF = firstAccessibilityGroupHref('a11y')

export function findAccessibilityPage(group, section, slug) {
  const groupInfo = accessibilityNavigation.find((item) => item.key === group)
  if (!groupInfo) return null

  for (const sectionInfo of groupInfo.sections) {
    if (sectionInfo.key !== section) continue
    const pageInfo = sectionInfo.pages.find((item) => item.slug === slug)
    if (pageInfo) return { groupInfo, sectionInfo, pageInfo }
  }

  return null
}

/** a11yCreationTech 등 GNB `d3_sub_name` (예: 인식의 용이성) — 동일 section 내 WCAG 그룹 구분용 */
export function getAccessibilityTechSubTitle(group, section, slug) {
  const d2 = (gnbLite.accessibility?.depth2 ?? []).find(
    (node) => normalizePath(node.d2_link) === group,
  )
  if (!d2) return ''

  const normalizedSlug = normalizePath(slug)

  for (const d3 of d2.depth3 ?? []) {
    const d3Parts = parsePathSegments(d3.d3_link)
    const sectionKey = d3Parts[0] ?? ''
    if (sectionKey !== section) continue

    const d4List = d3.depth4 ?? []
    if (d4List.length > 0) {
      const pageSlugs = d4List.map((d4) => normalizePath(d4.d4_link))
      if (pageSlugs.includes(normalizedSlug)) {
        return String(d3.d3_sub_name ?? '').trim()
      }

      for (const d4 of d4List) {
        const parts = Array.isArray(d4.part) ? d4.part : []
        for (const part of parts) {
          if (normalizePath(part.part_link) === normalizedSlug) {
            return String(d3.d3_sub_name ?? '').trim()
          }
        }
      }
      continue
    }

    const leafSlug = d3Parts[1] ?? ''
    if (leafSlug && leafSlug === normalizedSlug) {
      return String(d3.d3_sub_name ?? '').trim()
    }
  }

  return ''
}

/** GNB 순서 기준 depth3·depth4 번호 (1-based). Publishing HTML과 동일한 `s.p.` 형식. */
export function getAccessibilityPageNumbering(group, section, slug) {
  const groupInfo = accessibilityNavigation.find((item) => item.key === group)
  if (!groupInfo?.sections?.length) {
    return {
      sectionDataNumber: '1. ',
      h1DataNumber: '1.1. ',
    }
  }

  for (let sectionIndex = 0; sectionIndex < groupInfo.sections.length; sectionIndex++) {
    const sectionInfo = groupInfo.sections[sectionIndex]
    if (sectionInfo.key !== section) continue
    const pageIdx = sectionInfo.pages.findIndex((item) => item.slug === slug)
    if (pageIdx < 0) continue

    return {
      sectionDataNumber: `${sectionIndex + 1}. `,
      h1DataNumber: `${sectionIndex + 1}.${pageIdx + 1}. `,
    }
  }

  return {
    sectionDataNumber: '1. ',
    h1DataNumber: '1.1. ',
  }
}
