import gnbLite from './gnbLite.json'

function stripTags(value) {
  return String(value ?? '')
    .replace(/<[^>]*>/g, '')
    .trim()
}

function toKey(value) {
  return String(value ?? '').replace(/^\//, '')
}

function normalizePath(value) {
  return toKey(value)
}

/** GNB depth3 링크가 `/05-bookmark/bookmark`처럼 category/slug를 함께 담는 경우 */
function splitDepth3Link(d3Link) {
  const parts = normalizePath(d3Link).split('/').filter(Boolean)
  return {
    category: parts[0] ?? '',
    slug: parts[1] ?? '',
  }
}

function depth3MatchesCategory(d3, category) {
  const cat = normalizePath(category)
  if (normalizePath(d3?.d3_link) === cat) return true
  return splitDepth3Link(d3?.d3_link).category === cat
}

/** depth4 항목의 본문 slug 또는 `part[].part_link` slug와 일치하는지 */
function depth4EntryMatchesSlug(d4, slugKey) {
  if (!d4 || !slugKey) return false
  if (normalizePath(d4.d4_link) === slugKey) return true
  const parts = d4.part
  if (!Array.isArray(parts)) return false
  return parts.some((p) => normalizePath(p.part_link) === slugKey)
}

const PUBLISHING_DEPTH2_LINK = {
  html: '/html',
  css: '/css',
  scss: '/scss',
}

/**
 * GNB(`gnbLite.publishing`)의 depth3(카테고리)·depth4(페이지) 순서 기준 번호 (1-based).
 * `tit_d3`의 data-number와 h1의 data-number에 동일 규칙으로 사용합니다.
 */
export function getPublishingPageNumbering(sectionType, category, slug) {
  const d2Link = PUBLISHING_DEPTH2_LINK[sectionType]
  let sectionIndex = 1
  let pageIndex = 1

  if (!d2Link) {
    return {
      sectionDataNumber: `${sectionIndex}. `,
      h1DataNumber: `${sectionIndex}.${pageIndex}. `,
    }
  }

  const publishingNode = gnbLite.publishing
  const depth2 = publishingNode?.depth2?.find((item) => item.d2_link === d2Link)
  const cat = normalizePath(category)
  const sl = normalizePath(slug)

  if (!depth2?.depth3?.length) {
    return {
      sectionDataNumber: `${sectionIndex}. `,
      h1DataNumber: `${sectionIndex}.${pageIndex}. `,
    }
  }

  const d3Index = depth2.depth3.findIndex((d3) => depth3MatchesCategory(d3, cat))
  if (d3Index < 0) {
    return {
      sectionDataNumber: `${sectionIndex}. `,
      h1DataNumber: `${sectionIndex}.${pageIndex}. `,
    }
  }

  sectionIndex = d3Index + 1
  const depth3 = depth2.depth3[d3Index]
  const d4List = depth3.depth4 ?? []
  const d3Leaf = splitDepth3Link(depth3.d3_link)
  const d4Index = d4List.findIndex((d4) => depth4EntryMatchesSlug(d4, sl))
  if (d4Index >= 0) {
    pageIndex = d4Index + 1
  } else if (d4List.length === 0 && d3Leaf.slug === sl) {
    pageIndex = 1
  }

  return {
    sectionDataNumber: `${sectionIndex}. `,
    h1DataNumber: `${sectionIndex}.${pageIndex}. `,
  }
}

function createTitleMaps() {
  const publishingNode = gnbLite.publishing
  const bySection = { html: {}, css: {}, scss: {} }
  const byPage = { html: {}, css: {}, scss: {} }

  const targets = [
    { link: '/html', key: 'html' },
    { link: '/css', key: 'css' },
    { link: '/scss', key: 'scss' },
  ]

  targets.forEach(({ link, key }) => {
    const depth2 = publishingNode?.depth2?.find((item) => item.d2_link === link)
    if (!depth2) return

    depth2.depth3?.forEach((depth3) => {
      const { category, slug: d3Slug } = splitDepth3Link(depth3.d3_link)
      const legacyCategory = toKey(depth3.d3_link)
      const sectionKey = category || legacyCategory
      if (!sectionKey) return

      bySection[key][sectionKey] = stripTags(depth3.d3_name)
      if (legacyCategory && legacyCategory !== sectionKey) {
        bySection[key][legacyCategory] = stripTags(depth3.d3_name)
      }

      const d4List = depth3.depth4 ?? []
      if (d4List.length === 0 && category && d3Slug) {
        byPage[key][`${category}/${d3Slug}`] = '참조 사이트'
      }

      d4List.forEach((depth4) => {
        const slug = toKey(depth4.d4_link)
        if (!slug) return
        const baseTitle = stripTags(depth4.d4_name)
        byPage[key][`${category}/${slug}`] = baseTitle
        const parts = depth4.part
        if (!Array.isArray(parts)) return
        parts.forEach((p) => {
          const partSlug = toKey(p.part_link)
          if (!partSlug || partSlug === slug) return
          byPage[key][`${category}/${partSlug}`] = baseTitle
        })
      })
    })
  })

  return { bySection, byPage }
}

const { bySection, byPage } = createTitleMaps()

export function getPublishingSectionTitle(sectionType, category) {
  return bySection[sectionType]?.[category] ?? category
}

/** GNB에 등록된 Publishing(HTML/CSS/SCSS) 문서인지 확인. 없으면 404 대상 */
export function findPublishingPage(sectionType, category, slug) {
  const cat = normalizePath(category)
  const sl = normalizePath(slug)
  if (!cat || !sl || !PUBLISHING_DEPTH2_LINK[sectionType]) return null

  const pageTitle = byPage[sectionType]?.[`${cat}/${sl}`]
  if (!pageTitle) return null

  return {
    sectionTitle: bySection[sectionType]?.[cat] ?? cat,
    pageTitle,
  }
}

/** GNB `part[]`에 등록된 페이지면 `part_name`을 반환 (예: part1) */
function findPublishingPartName(sectionType, category, slug) {
  const d2Link = PUBLISHING_DEPTH2_LINK[sectionType]
  const depth2 = gnbLite.publishing?.depth2?.find((item) => item.d2_link === d2Link)
  const depth3 = depth2?.depth3?.find((d3) => depth3MatchesCategory(d3, category))
  if (!depth3) return null

  const slugKey = normalizePath(slug)
  for (const depth4 of depth3.depth4 ?? []) {
    const parts = depth4.part
    if (!Array.isArray(parts)) continue
    const match = parts.find((p) => normalizePath(p.part_link) === slugKey)
    if (match?.part_name) {
      return String(match.part_name)
    }
  }

  return null
}

export function getPublishingPageTitle(sectionType, category, slug) {
  const baseTitle =
    byPage[sectionType]?.[`${category}/${slug}`] ?? slug.replace(/_/g, ' ')
  const partName = findPublishingPartName(sectionType, category, slug)
  return partName ? `${baseTitle} - ${partName}` : baseTitle
}

/**
 * 레거시 `_gnb.njk` `start_part` 탭 라벨 규칙:
 * - `name_length === 'short'` → part_name만 표시 (플렉스·그리드 등)
 * - 그 외 → d4_name + part_name (예: Transform + 2D → Transform 2D)
 */
function buildPartTabDisplay(baseTitle, part) {
  const name = String(part?.part_name ?? '').trim()
  const nameLength = part?.name_length
  const partNameAdd = part?.part_name_add ? String(part.part_name_add) : null

  if (!name) {
    return { label: baseTitle, prefix: null, suffix: baseTitle, partNameAdd: null }
  }

  if (nameLength === 'short') {
    return { label: name, prefix: null, suffix: name, partNameAdd }
  }

  const label = `${baseTitle} ${name}`.trim()
  return { label, prefix: baseTitle, suffix: name, partNameAdd: null }
}

/**
 * GNB `part[]`가 있는 현재 페이지의 파트 탭 그룹 (본문 tab_menu·좌측 메뉴와 동일 출처).
 * @returns {null | { baseTitle: string, partClass: string, tabs: Array<{ key: string, label: string, href: string }> }}
 */
export function getPublishingPartGroup(sectionType, category, slug) {
  const d2Link = PUBLISHING_DEPTH2_LINK[sectionType]
  const depth2 = gnbLite.publishing?.depth2?.find((item) => item.d2_link === d2Link)
  const depth3 = depth2?.depth3?.find((d3) => depth3MatchesCategory(d3, category))
  if (!depth3) return null

  const slugKey = normalizePath(slug)
  for (const depth4 of depth3.depth4 ?? []) {
    const parts = depth4.part
    if (!Array.isArray(parts) || parts.length === 0) continue
    const inGroup = parts.some((p) => normalizePath(p.part_link) === slugKey)
    if (!inGroup) continue

    const baseTitle = stripTags(depth4.d4_name)
    const partClass =
      typeof depth4.part_class === 'string' && depth4.part_class.trim()
        ? depth4.part_class.trim()
        : ''

    return {
      baseTitle,
      partClass,
      tabs: parts.map((p) => {
        const pSlug = normalizePath(p.part_link)
        const display = buildPartTabDisplay(baseTitle, p)
        return {
          key: pSlug,
          href: `/publishing/${sectionType}/${normalizePath(category)}/${pSlug}`,
          ...display,
        }
      }),
    }
  }

  return null
}
