import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import gnbLite from '../../data/gnbLite.json'
import { accessibilityNavigation, ACCESSIBILITY_HOME_HREF } from '../../data/accessibilityNavigation.js'
import { gulpNavigation, GULP_HOME_HREF } from '../../data/gulpNavigation.js'

function normalizePath(value) {
  return String(value ?? '').replace(/^\//, '')
}

function publishingTypeKey(d2Link) {
  if (d2Link === '/html') return 'html'
  if (d2Link === '/css') return 'css'
  if (d2Link === '/scss') return 'scss'
  // `gnbLite.publishing.depth2`에 HTML/CSS/SCSS 외 항목이 있어도 기본값을 `html`로 두면
  // 사이트맵 등에서 React key가 중복된다. 경로 기반으로 구분한다.
  const slug = normalizePath(d2Link).replace(/\/+/g, '-')
  return slug || 'publishing-extra'
}

/** 사이트맵「Publishing」탭에는 퍼블리싱 문서(HTML/CSS/SCSS)만 노출 */
const PUBLISHING_SITEMAP_D2_LINKS = new Set(['/html', '/css', '/scss'])

function publishingPageHref(typeKey, d3Link, d4Link) {
  return `/publishing/${typeKey}/${normalizePath(d3Link)}/${normalizePath(d4Link)}`
}

function publishingLeafHref(typeKey, d3) {
  const d4List = d3.depth4 ?? []
  if (d4List.length > 0) {
    return publishingPageHref(typeKey, d3.d3_link, d4List[0].d4_link)
  }
  const parts = normalizePath(d3.d3_link).split('/').filter(Boolean)
  if (parts.length >= 2) {
    return `/publishing/${typeKey}/${parts[0]}/${parts[1]}`
  }
  if (parts.length === 1) {
    return `/publishing/${typeKey}/${parts[0]}`
  }
  return `/publishing/${typeKey}`
}

function formatD4Name(name) {
  return String(name ?? '').replace(/element/gi, '<i class="el">element</i>')
}

function firstAccessibilityHref(group) {
  const section = group.sections?.[0]
  if (!section) return ACCESSIBILITY_HOME_HREF
  const page = section.pages?.[0]
  if (!page) return ACCESSIBILITY_HOME_HREF
  return `/accessibility/${group.key}/${section.key}/${page.slug}`
}

function buildGulpSitemapDepth2() {
  return [
    {
      key: 'gulp',
      title: 'Gulp',
      href: GULP_HOME_HREF,
      depth3: gulpNavigation.map((section) => ({
        key: section.key,
        title: section.title,
        href: `/build-system/gulp/${section.key}/${section.pages[0].slug}`,
        depth4: section.pages.map((page) => ({
          title: page.title,
          href: `/build-system/gulp/${section.key}/${page.slug}`,
        })),
      })),
    },
  ]
}

function buildUpdatesSitemapDepth2() {
  return [
    {
      key: 'updates-info',
      title: 'Updates info',
      href: '/updates/updates_info',
      depth3: [],
    },
  ]
}

function buildSitemapTree() {
  const publishingDepth2 = (gnbLite.publishing?.depth2 ?? [])
    .filter((d2) => PUBLISHING_SITEMAP_D2_LINKS.has(d2.d2_link))
    .map((d2) => {
    const typeKey = publishingTypeKey(d2.d2_link)
    const d3List = d2.depth3 ?? []
    const firstD3 = d3List[0]
    const d2Href = firstD3 ? publishingLeafHref(typeKey, firstD3) : `/publishing/${typeKey}`

    return {
      key: typeKey,
      title: d2.d2_name,
      href: d2Href,
      depth3: d3List.map((d3, i3) => ({
        key: `${typeKey}-d3-${i3}`,
        title: d3.d3_name,
        href: publishingLeafHref(typeKey, d3),
        depth4: (d3.depth4 ?? []).map((d4) => ({
          title: d4.d4_name,
          href: publishingPageHref(typeKey, d3.d3_link, d4.d4_link),
        })),
      })),
    }
  })

  const a11yDepth2 = accessibilityNavigation.map((group) => ({
    key: group.key,
    title: group.title,
    href: firstAccessibilityHref(group),
    depth3: (group.sections ?? []).map((section, si) => ({
      key: `${group.key}-s${si}`,
      title: section.title,
      href:
        section.pages?.[0] != null
          ? `/accessibility/${group.key}/${section.key}/${section.pages[0].slug}`
          : ACCESSIBILITY_HOME_HREF,
      depth4: (section.pages ?? []).map((page) => ({
        title: page.title,
        href: `/accessibility/${group.key}/${section.key}/${page.slug}`,
      })),
    })),
  }))

  return [
    {
      key: 'publishing',
      title: 'Publishing',
      href: publishingDepth2[0]?.href ?? '/publishing/html',
      depth2: publishingDepth2,
    },
    {
      key: 'a11y',
      title: 'A11Y',
      href: ACCESSIBILITY_HOME_HREF,
      depth2: a11yDepth2,
    },
    {
      key: 'gulp',
      title: 'Gulp',
      href: GULP_HOME_HREF,
      depth2: buildGulpSitemapDepth2(),
    },
    {
      key: 'updates',
      title: 'Updates',
      href: '/updates/updates_info',
      depth2: buildUpdatesSitemapDepth2(),
    },
  ]
}

/**
 * Mirrors `_gnb.njk` / `all_gnb` markup under `.sitemap_in` for SCSS hooks.
 */
function SiteSitemapNav({ viewType, siteVariant, onNavigate, onPanelChange }) {
  const tree = useMemo(() => buildSitemapTree(), [])
  const depth1Length = tree.length

  const [activeD1, setActiveD1] = useState(0)
  const [activeD2, setActiveD2] = useState(0)
  const [expandedD1, setExpandedD1] = useState(() => {
    const openIndexes = []
    tree.forEach((d1, index) => {
      if (Array.isArray(d1.depth2) && d1.depth2.length > 0) openIndexes.push(index)
    })
    return openIndexes
  })

  const handleD1Toggle = (d1Index) => {
    if (viewType === 'type_tab') {
      setActiveD1((prev) => {
        if (prev === d1Index) return -1
        setActiveD2(0)
        if (d1Index === depth1Length - 1) return depth1Length - 1
        return d1Index
      })
      return
    }

    setExpandedD1((prev) =>
      prev.includes(d1Index) ? prev.filter((index) => index !== d1Index) : [...prev, d1Index],
    )
  }

  const handleD2Click = (event, d1Index, d2Index) => {
    if (viewType !== 'type_tab') return
    event.preventDefault()
    setActiveD1(d1Index)
    setActiveD2(d2Index)
  }

  useEffect(() => {
    onPanelChange?.(`${activeD1}-${activeD2}`)
  }, [activeD1, activeD2, onPanelChange])

  const navClass = `sitemap_in ${viewType} ${siteVariant}_sitemap`

  return (
    <nav className={navClass} data-type={viewType} aria-label="UXKM site map">
      <ul className="depth1">
        {tree.map((d1, d1Index) => {
          const hasDepth2 = Array.isArray(d1.depth2) && d1.depth2.length > 0
          const d1Active =
            viewType === 'type_tab' ? d1Index === activeD1 : expandedD1.includes(d1Index)
          const showDepth2 =
            hasDepth2 &&
            (viewType === 'type_tab' ? d1Active : expandedD1.includes(d1Index))
          return (
            <li key={d1.key} className={d1Active ? 'active' : undefined}>
              {hasDepth2 ? (
                <Link
                  to={d1.href}
                  className="depth1_link"
                  onClick={(e) => {
                    e.preventDefault()
                    handleD1Toggle(d1Index)
                  }}
                >
                  {d1.title}
                </Link>
              ) : (
                <Link to={d1.href} className="depth1_link" onClick={() => onNavigate?.()}>
                  {d1.title}
                </Link>
              )}
              {showDepth2 ? (
                <ul className="depth2">
                  {d1.depth2.map((d2, d2Index) => {
                    const d2Active =
                      viewType === 'type_tab' && d1Index === activeD1 && d2Index === activeD2
                    return (
                      <li key={`${d1.key}-${d2.key}`} className={d2Active ? 'active' : undefined}>
                        <Link
                          to={d2.href}
                          data-depth1={d1.title}
                          className="depth2_link"
                          onClick={(e) => {
                            handleD2Click(e, d1Index, d2Index)
                            if (!e.defaultPrevented) onNavigate?.()
                          }}
                        >
                          <i>{d2.title}</i>
                        </Link>
                        {(d2.depth3 ?? []).length > 0 ? (
                        <div className="depth3_wrap">
                          <ul className="depth3">
                            {(d2.depth3 ?? []).map((d3) => (
                              <li key={d3.key} className="item">
                                <Link
                                  to={d3.href}
                                  onClick={() => onNavigate?.()}
                                  dangerouslySetInnerHTML={{ __html: d3.title }}
                                />
                                {(d3.depth4 ?? []).length > 0 ? (
                                  <ul className="depth4">
                                    {d3.depth4.map((d4) => (
                                      <li key={d4.href}>
                                        <Link
                                          to={d4.href}
                                          className="d4_link"
                                          onClick={() => onNavigate?.()}
                                          dangerouslySetInnerHTML={{
                                            __html: formatD4Name(d4.title),
                                          }}
                                        />
                                      </li>
                                    ))}
                                  </ul>
                                ) : null}
                              </li>
                            ))}
                          </ul>
                        </div>
                        ) : null}
                      </li>
                    )
                  })}
                </ul>
              ) : null}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default SiteSitemapNav
