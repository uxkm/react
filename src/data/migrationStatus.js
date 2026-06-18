import gnbLite from './gnbLite.json'

function normalizePath(value) {
  return String(value ?? '').replace(/^\//, '')
}

function toComponentFile(slug) {
  const componentName = slug
    .replace(/^[0-9]+-/, '')
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('')

  return `${componentName || 'Page'}Page`
}

function getPublishingDepth2(link) {
  const publishing = gnbLite.publishing
  return publishing?.depth2?.find((item) => item.d2_link === link)
}

function getPublishingPages(link) {
  const depth2 = getPublishingDepth2(link)
  if (!depth2) return []

  return (depth2.depth3 ?? [])
    .filter((depth3) => Array.isArray(depth3.depth4))
    .flatMap((depth3) => {
      const category = normalizePath(depth3.d3_link)
      return (depth3.depth4 ?? []).map((depth4) => ({
        category,
        slug: normalizePath(depth4.d4_link),
      }))
    })
}

function getAccessibilityPages() {
  const accessibility = gnbLite.accessibility
  if (!accessibility) return []

  return (accessibility.depth2 ?? []).flatMap((depth2) => {
    const group = normalizePath(depth2.d2_link)

    return (depth2.depth3 ?? []).flatMap((depth3) => {
      const segments = normalizePath(depth3.d3_link).split('/').filter(Boolean)
      if (segments.length === 0) return []

      if (depth3.depth4?.length) {
        const section = segments[0]
        return depth3.depth4.map((depth4) => ({
          group,
          section,
          slug: normalizePath(depth4.d4_link),
        }))
      }

      const [section, slug] = segments
      if (!section || !slug) return []

      return [{ group, section, slug }]
    })
  })
}

const htmlModules = import.meta.glob('../pages/publishing/html/*/*Page.jsx', { eager: true })
const cssModules = import.meta.glob('../pages/publishing/css/*/*Page.jsx', { eager: true })
const scssModules = import.meta.glob('../pages/publishing/scss/*/*Page.jsx', { eager: true })
const accessibilityModules = import.meta.glob('../pages/accessibility/*/*/*Page.jsx', { eager: true })

function countConverted(items, toModulePath) {
  return items.reduce((acc, item) => {
    const modulePath = toModulePath(item)
    return acc + (modulePath ? 1 : 0)
  }, 0)
}

const htmlItems = getPublishingPages('/html')
const cssItems = getPublishingPages('/css')
const scssItems = getPublishingPages('/scss')
const accessibilityItems = getAccessibilityPages()

const htmlConverted = countConverted(
  htmlItems,
  (item) => htmlModules[`../pages/publishing/html/${item.category}/${toComponentFile(item.slug)}.jsx`],
)
const cssConverted = countConverted(
  cssItems,
  (item) => cssModules[`../pages/publishing/css/${item.category}/${toComponentFile(item.slug)}.jsx`],
)
const scssConverted = countConverted(
  scssItems,
  (item) => scssModules[`../pages/publishing/scss/${item.category}/${toComponentFile(item.slug)}.jsx`],
)
const accessibilityConverted = countConverted(
  accessibilityItems,
  (item) =>
    accessibilityModules[
      `../pages/accessibility/${item.group}/${item.section}/${toComponentFile(item.slug)}.jsx`
    ],
)

function toStatus(key, label, to, total, converted) {
  return {
    key,
    label,
    to,
    total,
    converted,
    pending: Math.max(total - converted, 0),
    ratio: total > 0 ? Math.round((converted / total) * 100) : 0,
  }
}

export const migrationStatus = [
  toStatus('html', 'HTML', '/publishing/html', htmlItems.length, htmlConverted),
  toStatus('css', 'CSS', '/publishing/css', cssItems.length, cssConverted),
  toStatus('scss', 'SCSS', '/publishing/scss', scssItems.length, scssConverted),
  toStatus(
    'accessibility',
    'ACCESSIBILITY',
    '/accessibility',
    accessibilityItems.length,
    accessibilityConverted,
  ),
]
