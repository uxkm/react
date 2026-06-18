import { useEffect, useMemo, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import {
  SIDE_TOGGLE_HTML_CLASS,
  SIDE_TOGGLE_STORAGE_KEY,
} from '../../utils/appInit.js'
import gnbLite from '../../data/gnbLite.json'
import { accessibilityNavigation, ACCESSIBILITY_HOME_HREF } from '../../data/accessibilityNavigation.js'
import { gulpNavigation } from '../../data/gulpNavigation.js'

function readCollapsedFromStorage() {
  if (typeof window === 'undefined') return false
  try {
    return window.sessionStorage.getItem(SIDE_TOGGLE_STORAGE_KEY) === 'true'
  } catch {
    return false
  }
}

function writeCollapsedToStorage(collapsed) {
  if (typeof window === 'undefined') return
  try {
    if (collapsed) window.sessionStorage.setItem(SIDE_TOGGLE_STORAGE_KEY, 'true')
    else window.sessionStorage.removeItem(SIDE_TOGGLE_STORAGE_KEY)
  } catch {
    // sessionStorage unavailable
  }
}

function stripTags(value) {
  return String(value ?? '').replace(/<[^>]*>/g, '').trim()
}

function normalizePath(value) {
  return String(value ?? '').replace(/^\/+|\/+$/g, '')
}

/** 사이트맵 `SiteSitemapNav`와 동일: element 표기를 `<i class="el">`로 통일 */
function formatD4Name(name) {
  return String(name ?? '').replace(/element/gi, '<i class="el">element</i>')
}

/** `_gnb.njk` / `_gnb.json`의 `html5` 플래그와 동일 */
const HTML5_NEW_IN_HTML5_BADGE =
  ' <span class="html5 fab fa-html5">HTML5에서 새롭게 추가</span>'

function formatD4SideMenuHtml(name, html5) {
  return formatD4Name(name) + (html5 ? HTML5_NEW_IN_HTML5_BADGE : '')
}

/** GNB `d3_name`이 "CSS 시작" 형태일 때 좌측 메뉴 타이틀에서는 접미 ` 시작`만 제거 */
function formatSideMenuSectionTitle(title) {
  const s = String(title ?? '').trim()
  if (!s) return ''
  const next = s.replace(/\s*시작\s*$/u, '').trim()
  return next || s
}

const SIDE_MENU_MOBILE_MQ = '(max-width: 993px)'

function isMobileSideMenuViewport() {
  if (typeof window === 'undefined') return false
  return window.matchMedia(SIDE_MENU_MOBILE_MQ).matches
}

function closedSectionKey(itemKey) {
  return `!${itemKey}`
}

function isItemDepth4Open(item, expandedKey, mobile = isMobileSideMenuViewport()) {
  if (expandedKey === closedSectionKey(item.key)) return false
  if (expandedKey === item.key) return true
  if (expandedKey === null && item.isActive && !mobile) return true
  return false
}

function getPublishingDepth4ClassNames(type, category) {
  if (type !== 'html') return []

  const map = {
    '02-blockInline': ['depth4_mb_short'],
    '05-textLevel': ['depth4_short', 'depth4_textLevel'],
    '06-embedded': ['depth4_mb_short'],
    '08-table': ['depth4_mb_short'],
    '09-forms': ['depth4_short', 'depth4_forms'],
  }

  return map[category] ?? []
}

function buildPublishingSideMenu(pathname) {
  const segments = pathname.split('/').filter(Boolean)
  if (segments[0] !== 'publishing') return null

  const type = segments[1]
  const currentCategory = segments[2]
  const currentSlug = segments[3]
  if (!type) return null

  const d2Link = `/${type}`
  const depth2Node = (gnbLite.publishing?.depth2 ?? []).find((d2) => d2.d2_link === d2Link)
  if (!depth2Node) return null

  const depth3 = (depth2Node.depth3 ?? []).map((d3, d3Index) => {
    const d3Parts = normalizePath(d3.d3_link).split('/').filter(Boolean)
    const d3Category = d3Parts[0] ?? ''
    const d3Leaf = d3Parts[1] ?? ''
    const d4List = d3.depth4 ?? []
    // 모바일에서 활성 d3 항목 `<a data-tit>`에 표시할 번호 prefix 용도.
    const sectionNumber = d3Index + 1

    const pages = d4List
      .filter((d4) => {
        const slug = normalizePath(d4.d4_link)
        // input 파트는 part1만 depth4에 남기고, part2~5는 하위 part로 렌더링
        if (
          d3Category === '09-forms' &&
          slug.startsWith('03-input_element_part') &&
          slug !== '03-input_element_part1'
        ) {
          return false
        }
        return true
      })
      .map((d4, filteredIndex) => {
      const slug = normalizePath(d4.d4_link)
      const pageNumber = filteredIndex + 1
      const isInputPartGroup =
        type === 'html' && d3Category === '09-forms' && slug === '03-input_element_part1'

      const inputParts = isInputPartGroup
        ? [
            {
              key: 'part1',
              href: `/publishing/${type}/${d3Category}/03-input_element_part1`,
              titleText: '주요 역할 및 특징',
              isActive: currentSlug === '03-input_element_part1',
            },
            {
              key: 'part2',
              href: `/publishing/${type}/${d3Category}/03-input_element_part2`,
              titleText: '기본 입력 필드',
              isActive: currentSlug === '03-input_element_part2',
            },
            {
              key: 'part3',
              href: `/publishing/${type}/${d3Category}/03-input_element_part3`,
              titleText: '선택 및 조작 요소',
              isActive: currentSlug === '03-input_element_part3',
            },
            {
              key: 'part4',
              href: `/publishing/${type}/${d3Category}/03-input_element_part4`,
              titleText: '숫자 및 범위',
              isActive: currentSlug === '03-input_element_part4',
            },
            {
              key: 'part5',
              href: `/publishing/${type}/${d3Category}/03-input_element_part5`,
              titleText: '날짜 및 시간',
              isActive: currentSlug === '03-input_element_part5',
            },
          ]
        : []

      const gnbPartList = Array.isArray(d4.part) ? d4.part : []
      const partClass =
        typeof d4.part_class === 'string' && d4.part_class.trim() ? d4.part_class.trim() : ''
      const gnbParts =
        !isInputPartGroup && gnbPartList.length > 0
          ? gnbPartList.map((p) => {
              const pSlug = normalizePath(p.part_link)
              return {
                key: pSlug,
                href: `/publishing/${type}/${d3Category}/${pSlug}`,
                titleText: String(p.part_name ?? pSlug),
                isActive: currentCategory === d3Category && currentSlug === pSlug,
              }
            })
          : []

      const parts = isInputPartGroup ? inputParts : gnbParts
      const isPartVisible = parts.length > 0

      return {
        slug,
        href: `/publishing/${type}/${d3Category}/${slug}`,
        titleHtml: formatD4SideMenuHtml(d4.d4_name, d4.html5 === true),
        titleText: stripTags(d4.d4_name),
        rawTitle: stripTags(d4.d4_name),
        pageNumber,
        partClass,
        isPartVisible,
        parts,
        isActive:
          (currentCategory === d3Category && currentSlug === slug) ||
          (isPartVisible && parts.some((p) => p.isActive)),
      }
    })

    const href = d3Leaf
      ? `/publishing/${type}/${d3Category}/${d3Leaf}`
      : pages[0]?.href ?? `/publishing/${type}/${d3Category}`
    const isLeafActive = Boolean(d3Leaf) && currentCategory === d3Category && currentSlug === d3Leaf

    return {
      key: `${type}-${d3Category || d3Leaf}`,
      href,
      titleHtml: d3.d3_name,
      titleText: stripTags(d3.d3_name),
      sectionNumber,
      depth4ClassNames: [
        ...(d3.depth4_style ? [String(d3.depth4_style)] : []),
        ...(d3.depth4_class ? [String(d3.depth4_class)] : []),
        ...getPublishingDepth4ClassNames(type, d3Category),
      ],
      pages,
      isActive: isLeafActive || pages.some((page) => page.isActive),
    }
  })

  return depth3
}

/**
 * 레거시 `_gnb.njk`의 `data-tit` 값과 동일한 형식으로 만든다.
 * 예: `1.1. HTML이란?`, `3.1. header `(끝의 ' element' 제거).
 * 모바일 사이드 메뉴는 `.depth3 > li.active > a:before { content:attr(data-tit); }`
 * 로 이 값만 큰 글씨로 노출한다.
 */
function buildSectionDataTit(item) {
  if (!item || item.sectionNumber == null || !Array.isArray(item.pages)) return ''
  const activePage = item.pages.find((p) => p.isActive)
  if (!activePage) return ''
  const rawTitle = activePage.rawTitle ?? activePage.titleText ?? ''
  // _gnb.njk: replace('element', '') — element 단어만 제거하고 trim 하지 않는다.
  const stripped = rawTitle.replace(/element/gi, '')
  return `${item.sectionNumber}.${activePage.pageNumber}. ${stripped}`
}

function formatAccessibilityLeafD3TitleHtml(d3) {
  const name = String(d3.d3_name ?? '')
  if (name.includes('<')) return name
  return `<i>${stripTags(name)}</i>`
}

function formatAccessibilityD3TitleHtml(d3, routeGroupKey) {
  if (routeGroupKey === 'a11yCreationTech') {
    const baseName = stripTags(d3.d3_name)
    const subName = typeof d3.d3_sub_name === 'string' ? d3.d3_sub_name.trim() : ''
    if (subName) {
      return `<p><i>${baseName}</i></p><mark>${subName}</mark>`
    }
    return `<i>${baseName}</i>`
  }

  return formatAccessibilityLeafD3TitleHtml(d3)
}

function getAccessibilityDepth4ClassNames(d3, routeGroupKey) {
  if (routeGroupKey !== 'a11yCreationTech') return []
  return [
    ...(d3.depth4_style ? [String(d3.depth4_style)] : []),
    ...(d3.depth4_class ? [String(d3.depth4_class)] : []),
  ]
}

function hasAccessibilityD3Badge(d3, routeGroupKey) {
  return routeGroupKey === 'a11yCreationTech' && Boolean(d3.d3_sub_name?.trim())
}

function buildAccessibilitySideMenuFromGnb(d2Link, routeGroupKey, currentSection, currentSlug) {
  const d2 = (gnbLite.accessibility?.depth2 ?? []).find((node) => node.d2_link === d2Link)
  if (!d2) return []

  return (d2.depth3 ?? []).map((d3, d3Index) => {
    const d3Parts = normalizePath(d3.d3_link).split('/').filter(Boolean)
    const sectionKey = d3Parts[0] ?? ''
    const leafSlug = d3Parts[1] ?? ''
    const sectionNumber = d3Index + 1
    const d4List = d3.depth4 ?? []

    if (d4List.length === 0) {
      const href = `/accessibility/${routeGroupKey}/${sectionKey}/${leafSlug}`
      const isLeafActive = currentSection === sectionKey && currentSlug === leafSlug

      return {
        key: `${routeGroupKey}-${sectionKey}-${leafSlug}-${d3Index}`,
        href,
        titleHtml: formatAccessibilityD3TitleHtml(d3, routeGroupKey),
        titleText: stripTags(d3.d3_name),
        sectionNumber,
        d3NameAdd: hasAccessibilityD3Badge(d3, routeGroupKey),
        depth4ClassNames: [],
        pages: [],
        isActive: isLeafActive,
      }
    }

    const pages = d4List.map((d4, pageIndex) => {
      const slug = normalizePath(d4.d4_link)
      const pageNumber = pageIndex + 1
      const gnbPartList = Array.isArray(d4.part) ? d4.part : []
      const partClass =
        typeof d4.part_class === 'string' && d4.part_class.trim() ? d4.part_class.trim() : ''
      const parts = gnbPartList.map((part) => {
        const partSlug = normalizePath(part.part_link)
        return {
          key: partSlug,
          href: `/accessibility/${routeGroupKey}/${sectionKey}/${partSlug}`,
          titleText: String(part.part_name ?? partSlug),
          isActive: currentSection === sectionKey && currentSlug === partSlug,
        }
      })
      const isPartVisible = parts.length > 0

      return {
        slug,
        href: `/accessibility/${routeGroupKey}/${sectionKey}/${slug}`,
        titleHtml: d4.d4_name,
        titleText: stripTags(d4.d4_name),
        rawTitle: stripTags(d4.d4_name),
        pageNumber,
        partClass,
        isPartVisible,
        parts,
        isActive:
          (currentSection === sectionKey && currentSlug === slug) ||
          (isPartVisible && parts.some((part) => part.isActive)),
      }
    })

    return {
      key: `${routeGroupKey}-${sectionKey}-${d3Index}`,
      href: pages[0]?.href ?? `/accessibility/${routeGroupKey}/${sectionKey}`,
      titleHtml: formatAccessibilityD3TitleHtml(d3, routeGroupKey),
      titleText: stripTags(d3.d3_name),
      sectionNumber,
      d3NameAdd: hasAccessibilityD3Badge(d3, routeGroupKey),
      depth4ClassNames: getAccessibilityDepth4ClassNames(d3, routeGroupKey),
      pages,
      isActive: currentSection === sectionKey && pages.some((page) => page.isActive),
    }
  })
}

function buildA11ySideMenuFromGnb(currentSection, currentSlug) {
  return buildAccessibilitySideMenuFromGnb('/a11y', 'a11y', currentSection, currentSlug)
}

function buildAccessibilitySideMenu(pathname) {
  const segments = pathname.split('/').filter(Boolean)
  if (segments[0] !== 'accessibility') return null

  const currentGroup = segments[1]
  const currentSection = segments[2]
  const currentSlug = segments[3]
  if (!currentGroup) return null

  if (currentGroup === 'a11y') {
    return buildA11ySideMenuFromGnb(currentSection, currentSlug)
  }

  if (currentGroup === 'a11yCreationTech') {
    return buildAccessibilitySideMenuFromGnb(
      '/a11yCreationTech',
      'a11yCreationTech',
      currentSection,
      currentSlug,
    )
  }

  const group = accessibilityNavigation.find((item) => item.key === currentGroup)
  if (!group) return null

  return (group.sections ?? []).map((section, sectionIndex) => {
    const pages = (section.pages ?? []).map((page, pageIndex) => ({
      slug: page.slug,
      href: `/accessibility/${group.key}/${section.key}/${page.slug}`,
      titleHtml: page.title,
      titleText: stripTags(page.title),
      rawTitle: stripTags(page.title),
      pageNumber: pageIndex + 1,
      partClass: '',
      isPartVisible: false,
      parts: [],
      isActive:
        currentGroup === group.key && currentSection === section.key && currentSlug === page.slug,
    }))

    return {
      key: `${group.key}-${section.key}-${sectionIndex}`,
      href: pages[0]?.href ?? ACCESSIBILITY_HOME_HREF,
      titleHtml: section.title,
      titleText: stripTags(section.title),
      sectionNumber: sectionIndex + 1,
      pages,
      isActive: currentSection === section.key && pages.some((page) => page.isActive),
    }
  })
}

function buildGulpSideMenu(pathname) {
  const segments = pathname.split('/').filter(Boolean)
  if (segments[0] !== 'build-system' || segments[1] !== 'gulp') return null

  const currentSection = segments[2]
  const currentSlug = segments[3]
  if (!currentSection) return null

  return gulpNavigation.map((section, sectionIndex) => {
    const pages = section.pages.map((page, pageIndex) => ({
      slug: page.slug,
      href: `/build-system/gulp/${section.key}/${page.slug}`,
      titleHtml: page.title,
      titleText: stripTags(page.title),
      rawTitle: stripTags(page.title),
      pageNumber: pageIndex + 1,
      isActive: currentSection === section.key && currentSlug === page.slug,
    }))

    return {
      key: section.key,
      href: pages[0]?.href ?? '/build-system/gulp/01-gulp_start/01-intro',
      titleHtml: section.title,
      titleText: stripTags(section.title),
      sectionNumber: sectionIndex + 1,
      pages,
      isActive: currentSection === section.key || pages.some((page) => page.isActive),
    }
  })
}

function PageSideMenu({ enabled, sideMenuTitle }) {
  const { pathname } = useLocation()
  const [collapsed, setCollapsed] = useState(readCollapsedFromStorage)

  // Keep <html> in sync with the React-owned `collapsed` state. `appInit`
  // pre-applies the class before mount to avoid first-paint flicker; this
  // effect just owns the runtime updates.
  useEffect(() => {
    if (typeof document === 'undefined') return
    const html = document.documentElement
    if (collapsed) html.classList.add(SIDE_TOGGLE_HTML_CLASS)
    else html.classList.remove(SIDE_TOGGLE_HTML_CLASS)
    writeCollapsedToStorage(collapsed)
  }, [collapsed])

  const items = useMemo(
    () =>
      buildPublishingSideMenu(pathname) ??
      buildAccessibilitySideMenu(pathname) ??
      buildGulpSideMenu(pathname) ??
      [],
    [pathname],
  )
  const currentItem = useMemo(() => items.find((item) => item.isActive) ?? items[0], [items])

  // 라우트가 바뀌면 사용자가 직접 토글한 펼침 상태를 초기화한다.
  // 활성 섹션 자동 펼침은 React state가 아닌 CSS 규칙
  //   `.toggle_box.active .depth4 {display:block;}` (데스크탑) 에 위임한다.
  //   - 모바일은 `.toggle_box.opened .depth4 {display:block;}` 만 펼치므로
  //     사용자가 depth3를 탭해야 펼쳐진다.
  // useEffect + setState 대신 React 공식 권장 패턴인
  // "이전 렌더 정보 보관"을 사용해 cascading render를 피한다.
  // https://react.dev/reference/react/useState#storing-information-from-previous-renders
  const [expandedKey, setExpandedKey] = useState(null)
  const [trackedPathname, setTrackedPathname] = useState(pathname)
  if (trackedPathname !== pathname) {
    setTrackedPathname(pathname)
    setExpandedKey(null)
  }

  const handleToggleClick = () => {
    setCollapsed((prev) => {
      const next = !prev
      if (typeof document !== 'undefined') {
        document.documentElement.classList.toggle(SIDE_TOGGLE_HTML_CLASS, next)
      }
      writeCollapsedToStorage(next)
      return next
    })
  }

  if (!enabled || items.length === 0) {
    return null
  }

  const mobileSideMenu = isMobileSideMenuViewport()
  const isManuallyExpanded = (item) => expandedKey === item.key
  const isDepth4Open = (item) => isItemDepth4Open(item, expandedKey, mobileSideMenu)

  const depth3LiClassName = (item) =>
    [
      item.pages.length > 0 ? 'toggle_box' : '',
      item.d3NameAdd ? 'd3_name_add' : '',
      item.isActive ? 'active' : '',
      // 모바일: 사용자가 탭해서 연 섹션만 `.opened`
      item.pages.length > 0 && isManuallyExpanded(item) ? 'opened' : '',
      // 화살표(tg_on): 실제로 depth4가 보이는 상태
      item.pages.length > 0 && isDepth4Open(item) ? 'tg_on' : '',
    ]
      .filter(Boolean)
      .join(' ')

  const handleDepth3Toggle = (event, item) => {
    event.preventDefault()
    const mobile = isMobileSideMenuViewport()
    const closed = closedSectionKey(item.key)

    setExpandedKey((prev) => {
      if (isItemDepth4Open(item, prev, mobile)) {
        return closed
      }
      if (prev === closed) {
        return mobile ? item.key : null
      }
      return item.key
    })
  }

  const getDepth4PanelStyle = (item) => {
    if (expandedKey === closedSectionKey(item.key)) {
      return { maxHeight: '0px', opacity: 0 }
    }

    if (expandedKey === item.key) {
      const partCount = item.pages.reduce((sum, page) => sum + (page.parts?.length ?? 0), 0)
      const estimated = item.pages.length * 44 + partCount * 28 + 48
      return { maxHeight: `${Math.max(estimated, 320)}px`, opacity: 1 }
    }

    if (expandedKey === null && item.isActive && !mobileSideMenu) {
      return undefined
    }

    return { maxHeight: '0px', opacity: 0 }
  }

  return (
    <aside className="side_menu_area" data-nosnippet>
      <strong className="tit">
        <b>{formatSideMenuSectionTitle(sideMenuTitle) || '콘텐츠 목차'}</b>{' '}
        <i>Table of Contents</i>
      </strong>
      <nav className="side_menu pub_side_menu">
        <ul className="depth3">
          {items.map((item) => {
            const dataTit = item.isActive
              ? buildSectionDataTit(item) || item.titleText
              : item.titleText
            return (
              <li key={item.key} className={depth3LiClassName(item) || undefined}>
                <NavLink
                  to={item.href}
                  data-tit={dataTit}
                  onClick={item.pages.length > 0 ? (event) => handleDepth3Toggle(event, item) : undefined}
                  dangerouslySetInnerHTML={{ __html: item.titleHtml }}
                />
                {item.pages.length > 0 ? (
                  <ul
                    className={['depth4', ...(item.depth4ClassNames ?? [])]
                      .filter(Boolean)
                      .join(' ')}
                    aria-hidden={!isDepth4Open(item)}
                    style={getDepth4PanelStyle(item)}
                  >
                    {item.pages.map((page) => (
                      <li
                        key={page.href}
                        className={[
                          page.isActive ? 'active' : '',
                          page.isPartVisible ? 'part_visible' : '',
                        ]
                          .filter(Boolean)
                          .join(' ') || undefined}
                      >
                        {page.isPartVisible ? (
                          <>
                            <NavLink
                              to={page.href}
                              className="d4_link part_title"
                              dangerouslySetInnerHTML={{ __html: page.titleHtml }}
                            />
                            <div
                              className={['part_wrap', page.partClass].filter(Boolean).join(' ')}
                            >
                              {page.parts.map((part) => (
                                <p key={part.key} className={part.isActive ? 'active' : undefined}>
                                  <NavLink
                                    to={part.href}
                                    className="part_link"
                                    onClick={() => {
                                      try {
                                        window.sessionStorage.removeItem('tabMenuScrollY')
                                      } catch {
                                        // ignore
                                      }
                                    }}
                                  >
                                    <em>{part.titleText}</em>
                                  </NavLink>
                                </p>
                              ))}
                            </div>
                          </>
                        ) : (
                          <NavLink
                            to={page.href}
                            className="d4_link"
                            dangerouslySetInnerHTML={{ __html: page.titleHtml }}
                          />
                        )}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            )
          })}
        </ul>
      </nav>
      <button
        type="button"
        className="side_menu_toggle"
        title={collapsed ? '사이드 메뉴 열기' : '사이드 메뉴 닫기'}
        aria-expanded={!collapsed}
        onClick={handleToggleClick}
      >
        <span>
          <i data-page-title={currentItem?.titleText ?? ''}>
            SIDE MENU <b>{collapsed ? 'OPEN' : 'CLOSE'}</b>
          </i>
        </span>
      </button>
    </aside>
  )
}

export default PageSideMenu
