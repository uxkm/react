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

/** The separately rendered accessibility entry must follow source deletion too. */
export function resolveGuideMenu (data, pages, defaults) {
  const accessibility = data.accessibility || defaults.accessibility
  return {
    intro: data.intro || defaults.intro,
    accessibility: pages.guide.some((page) => page.id === accessibility.id) ? accessibility : null,
    guideMenu: mergeGuideGroups(data.componentGroups, pages.guide, { exclude: [accessibility.id] }),
    guideDemoMenu: mergeGuideGroups(data.demoGroups, pages.demo)
  }
}
