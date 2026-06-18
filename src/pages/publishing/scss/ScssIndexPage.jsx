import { Link } from 'react-router-dom'
import { getPublishingPageTitle, getPublishingSectionTitle } from '../../../data/publishingTitles.js'

const modules = import.meta.glob('./*/*Page.jsx', { eager: true })

function buildCategoryMap() {
  const map = new Map()

  Object.keys(modules).forEach((modulePath) => {
    const match = modulePath.match(/^\.\/([^/]+)\/(.+?)Page\.jsx$/)
    if (!match) return

    const [, category, fileBase] = match
    const slug = fileBase
      .replace(/([a-z0-9])([A-Z])/g, '$1_$2')
      .toLowerCase()

    if (!map.has(category)) {
      map.set(category, [])
    }

    map.get(category).push({
      slug,
      title: getPublishingPageTitle('scss', category, slug),
      to: `/publishing/scss/${category}/${slug}`,
    })
  })

  return Array.from(map.entries())
    .map(([category, pages]) => ({
      category,
      pages: pages.sort((a, b) => a.slug.localeCompare(b.slug)),
    }))
    .sort((a, b) => a.category.localeCompare(b.category))
}

function ScssIndexPage() {
  const categories = buildCategoryMap()

  return (
    <section className="indent html-index-page">
      <header>
        <p>Publishing &gt; SCSS</p>
        <h1>SCSS 문서 목록</h1>
      </header>

      <div className="html-category-grid">
        {categories.map((section) => (
          <article key={section.category} className="html-category-card">
            <h2>{getPublishingSectionTitle('scss', section.category)}</h2>
            <ul>
              {section.pages.map((page) => (
                <li key={page.slug}>
                  <Link to={page.to}>{page.title}</Link>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ScssIndexPage
