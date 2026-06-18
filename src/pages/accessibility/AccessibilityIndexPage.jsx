import { Link } from 'react-router-dom'
import { usePageMeta } from '../../components/common/PageMeta'
import { accessibilityNavigation } from '../../data/accessibilityNavigation.js'

function toComponentFile(slug) {
  const componentName = slug
    .replace(/^[0-9]+-/, '')
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('')

  return `${componentName || 'Page'}Page`
}

const migratedModules = import.meta.glob('./*/*/*.jsx', { eager: true })

function hasMigratedPage(group, section, slug) {
  const slugPath = `./${group}/${section}/${slug}.jsx`
  const componentPath = `./${group}/${section}/${toComponentFile(slug)}.jsx`
  return Boolean(migratedModules[slugPath]?.default ?? migratedModules[componentPath]?.default)
}

function AccessibilityIndexPage() {
  usePageMeta({
    title: 'Accessibility',
    description: 'UXKM 접근성(A11Y, WAI-ARIA, A11y Creation Tech) 문서 목록입니다.',
    keyword: 'Accessibility, A11Y, WAI-ARIA, 접근성',
    layout: {
      mainClass: 'a11y_page',
      type: 'accessibility',
      sideMenu: false,
      contentList: false,
      reference: false,
      note: false,
      info: false,
    },
  })

  return (
    <section className="indent html-index-page">
      <header>
        <p className="sound_only">Accessibility</p>
        <h1>접근성 문서 목록</h1>
      </header>

      <div className="html-category-grid">
        {accessibilityNavigation.map((group) => (
          <article key={group.key} className="html-category-card">
            <h2>{group.title}</h2>
            <ul>
              {group.sections.map((section) =>
                section.pages.map((page) => {
                  const converted = hasMigratedPage(group.key, section.key, page.slug)

                  return (
                    <li key={`${section.key}-${page.slug}`}>
                      <Link to={`/accessibility/${group.key}/${section.key}/${page.slug}`}>
                        {page.title}
                        {converted ? ' (완료)' : ' (대기)'}
                      </Link>
                    </li>
                  )
                }),
              )}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default AccessibilityIndexPage
