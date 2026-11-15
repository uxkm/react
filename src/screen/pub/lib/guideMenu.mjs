/** Keep authored labels/order, remove missing routes, and expose newly created screens. */
export function mergeGuideGroups (groups, pages, { exclude = [] } = {}) {
  const available = new Map(pages.map((page) => [page.id, page]))
  const used = new Set(exclude)
  const result = (groups || []).map((group) => ({
    ...group,
    items: (group.items || []).filter((item) => {
      if (!available.has(item.id) || used.has(item.id)) return false
      used.add(item.id)
      return true
    })
  })).filter((group) => group.items.length)
  const additions = pages.filter((page) => !used.has(page.id))
  if (additions.length) result.push({ id: 'auto-generated', label: '추가 화면', items: additions })
  return result
}

/** 프로젝트 미리보기는 가이드 위젯 메뉴에서 새 창으로 엽니다. */
export function projectPreviewGroups (pages = []) {
  const mainSections = [
    ['hero', '메인 타이틀'],
    ['cards', '추천 및 상담 카드'],
    ['insights', '멀캠ON'],
    ['cases', '고객사례'],
    ['callouts', '상담 및 구독'],
    ['newsletter', '뉴스레터 구독 카드']
  ]
  return [
    {
      id: 'preview-common',
      label: '공통 위젯·레이어',
      items: pages.filter(({ id }) => id !== 'main-section').map(({ id, label }) => ({ id, label, href: '/pub/preview/b2b/' + id }))
    },
    {
      id: 'preview-main',
      label: '메인 섹션·모듈',
      items: pages.some(({ id }) => id === 'main-section') ? mainSections.map(([id, label]) => ({ id, label, href: '/pub/preview/b2b/main-section?section=' + id })) : []
    }
  ].filter(({ items }) => items.length)
}

/** The separately rendered a11y entry must follow source deletion too. */
export function resolveGuideMenu (data, pages, defaults) {
  const a11y = data.a11y || defaults.a11y
  const available = new Set(pages.guide.map((page) => page.id))
  const widgetIds = new Set()
  const guideWidgetItems = (data.widgetItems || []).filter((item) => {
    if (!available.has(item.id) || widgetIds.has(item.id)) return false
    widgetIds.add(item.id)
    return true
  })
  return {
    intro: data.intro || defaults.intro,
    a11y: pages.guide.some((page) => page.id === a11y.id) ? a11y : null,
    guideMenu: mergeGuideGroups(data.componentGroups, pages.guide, { exclude: [a11y.id, ...widgetIds] }),
    guideWidgetItems,
    guidePreviewMenu: projectPreviewGroups(pages.preview),
    guideDemoMenu: mergeGuideGroups(data.demoGroups, pages.demo)
  }
}
