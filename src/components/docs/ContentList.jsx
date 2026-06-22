import { useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import useScrollSpy from '../../hooks/useScrollSpy.js'

/**
 * <ContentList />
 *
 * React port of the `.content_bottom > nav.content_list` block built up
 * imperatively in `src/assets/js/uk_sub.js`. Replaces the
 * jQuery code that:
 *   - walked `_content_area.children('section, article')` and inserted nested
 *     `cl_d1 > cl_d2 > cl_d3` lists for h2 / h3 / h4 headings,
 *   - attached scroll handlers to flip the active item via
 *     `content_list_active(sct)`,
 *   - wired the `.skip_content_btn` (open) / `.content_list_close` (close)
 *     buttons that toggle `.content_bottom.list_active` on small screens,
 *   - rendered the `.go_top_btn` "scroll to top" button.
 *
 * The component renders nothing when `enabled` is false or when the page has
 * no headings, matching the previous behaviour for pages that opt out via
 * `body.content_lst_none`.
 *
 * Props:
 *   - enabled         turn the entire panel on/off (default: true)
 *   - showList        목차·바로가기 버튼 표시 여부 (기본 true). 예전 코드/번들에서
 *                     `showList`만 참조하는 경우 ReferenceError를 막기 위한 호환용.
 *   - contentSelector CSS selector for the article whose headings should be
 *                     listed (default: `.content_area`)
 *   - title           h1 / page title shown above the list (when given)
 *   - className       extra class names appended to the root <aside>
 *
 * NOTE: The legacy `pageLayout.contentList === false` flag only added the
 * `body.content_lst_none` class (which had no CSS rules in the source). The
 * floating `.go_top_btn` / `.skip_content_btn` and the TOC nav are always
 * rendered when there are headings on the page, regardless of that flag.
 */
function slugify(text) {
  return String(text ?? '')
    .toLowerCase()
    .replace(/[^a-z0-9가-힣\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
}

function getHeadingText(heading) {
  const clone = heading.cloneNode(true)
  clone.querySelectorAll('.toggleButton, button').forEach((el) => el.remove())
  return clone.textContent?.replace(/\s+/g, ' ').trim() || ''
}

function isConlistExcludedH2(heading) {
  return heading.tagName.toLowerCase() === 'h2' && heading.dataset.conlist === 'false'
}

function isConlistChildrenExcludedH2(heading) {
  // `data-conlist="false"` h2는 목차에 노출하되, 하위 h3/h4만 제외한다.
  return isConlistExcludedH2(heading)
}

function isConlistExcludedH3(heading) {
  return heading.tagName.toLowerCase() === 'h3' && heading.dataset.conlistH4 === 'false'
}

function isConlistH3AsH4(heading) {
  return heading.tagName.toLowerCase() === 'h3' && heading.dataset.conlistH4 === 'true'
}

function ensureHeadingId(heading, index) {
  if (heading.id) return heading.id
  const baseId = slugify(getHeadingText(heading)) || `section-${index + 1}`
  const id = `${baseId}-${index + 1}`
  heading.id = id
  return id
}

function buildTreeFromHeadings(headings) {
  const tree = []
  let currentH2 = null
  let currentH3 = null
  let skipChildrenForCurrentH2 = false
  let counter = 0

  for (const heading of headings) {
    const tag = heading.tagName.toLowerCase()

    if (tag === 'h2') {
      skipChildrenForCurrentH2 = isConlistChildrenExcludedH2(heading)
      currentH2 = null
      currentH3 = null

      counter += 1
      const id = ensureHeadingId(heading, counter)
      const node = { id, text: getHeadingText(heading), level: tag, children: [] }
      if (!skipChildrenForCurrentH2) currentH2 = node
      tree.push(node)
      continue
    }

    if (skipChildrenForCurrentH2 || isConlistExcludedH3(heading)) continue

    counter += 1
    const id = ensureHeadingId(heading, counter)
    const text = getHeadingText(heading)
    const node = { id, text, level: tag, children: [] }

    if (tag === 'h3') {
      if (isConlistH3AsH4(heading)) {
        if (!currentH2) continue
        currentH3 = { ...node, level: 'h4', promotedFromH3: true }
        currentH2.children.push(currentH3)
        continue
      }

      if (!currentH2) {
        currentH2 = { id, text, level: 'h2', children: [] }
        tree.push(currentH2)
      }
      currentH3 = node
      currentH2.children.push(currentH3)
    } else if (tag === 'h4') {
      if (!currentH3) {
        if (!currentH2) continue
        currentH3 = { id, text, level: 'h3', children: [] }
        currentH2.children.push(currentH3)
      }
      currentH3.children.push(node)
    }
  }

  return tree
}

function flattenTree(tree) {
  const flat = []
  for (const h2 of tree) {
    flat.push(h2)
    for (const h3 of h2.children) {
      flat.push(h3)
      for (const h4 of h3.children) flat.push(h4)
    }
  }
  return flat
}

function renderContentListLink(item, activeId, onClick) {
  return (
    <a
      href={`#${item.id}`}
      className={activeId === item.id ? 'active' : undefined}
      onClick={(event) => onClick(event, item.id)}
    >
      {item.text}
    </a>
  )
}

function renderDepth3Children(items, activeId, onClick) {
  if (!items.length) return null
  return (
    <ul className="cl_d3">
      {items.map((h4) => (
        <li key={h4.id}>{renderContentListLink(h4, activeId, onClick)}</li>
      ))}
    </ul>
  )
}

function renderDepth2Children(items, activeId, onClick) {
  if (!items.length) return null
  return (
    <ul className="cl_d2">
      {items.map((child) => {
        if (child.promotedFromH3) {
          return (
            <li key={child.id}>
              <ul className="cl_d3">
                <li>
                  {renderContentListLink(child, activeId, onClick)}
                  {renderDepth3Children(child.children, activeId, onClick)}
                </li>
              </ul>
            </li>
          )
        }

        return (
          <li key={child.id}>
            {renderContentListLink(child, activeId, onClick)}
            {renderDepth3Children(child.children, activeId, onClick)}
          </li>
        )
      })}
    </ul>
  )
}

function scrollToHeading(id) {
  if (typeof window === 'undefined') return
  const el = document.getElementById(id)
  if (!el) return
  const header = document.querySelector('.uk_header')
  const headerHeight = header ? header.offsetHeight : 0
  const top = el.getBoundingClientRect().top + window.scrollY - headerHeight - 40
  window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' })
  if (typeof window.history?.replaceState === 'function') {
    window.history.replaceState(null, '', `#${id}`)
  }
}

function ContentList({
  enabled = true,
  /** 레거시 호출부·HMR 잔여 참조 호환. `false`면 목차만 숨기고 맨위로 버튼은 유지하지 않음(현재 AppLayout에서는 전달하지 않음). */
  showList = true,
  contentSelector = '.content_area',
  title,
  className = '',
}) {
  const { pathname } = useLocation()
  const [tree, setTree] = useState([])
  const [open, setOpen] = useState(false)
  const [showGoTop, setShowGoTop] = useState(false)
  const [trackedPathname, setTrackedPathname] = useState(pathname)

  // 라우트 변경 시 열려 있던 패널을 닫아 두 페이지 상태가 섞이지 않게 한다.
  // useEffect 대신 "이전 렌더 정보 보관" 패턴(React 공식 권장)을 사용.
  if (trackedPathname !== pathname) {
    setTrackedPathname(pathname)
    if (open) setOpen(false)
  }

  useEffect(() => {
    if (typeof document === 'undefined') return undefined
    if (!enabled) return undefined

    let cancelled = false
    let observer = null
    let rafId = 0

    const rescan = () => {
      if (cancelled) return
      const root = document.querySelector(contentSelector)
      if (!root) {
        setTree([])
        return
      }
      const headings = Array.from(root.querySelectorAll('h2, h3, h4')).filter(
        (heading) => !heading.closest('.page_comments'),
      )
      setTree(buildTreeFromHeadings(headings))
    }

    // 1) 라우트 변경 직후 새 페이지가 마운트되도록 한 프레임 양보 후 스캔.
    rafId = requestAnimationFrame(rescan)

    // 2) lazy-loaded 페이지 / 동적으로 추가되는 섹션을 따라가기 위해
    //    `.content_area` 의 자식 변화를 감지해 다시 스캔한다.
    const root = document.querySelector(contentSelector)
    if (root && typeof MutationObserver !== 'undefined') {
      observer = new MutationObserver(() => {
        if (rafId) cancelAnimationFrame(rafId)
        rafId = requestAnimationFrame(rescan)
      })
      observer.observe(root, { childList: true, subtree: true })
    }

    return () => {
      cancelled = true
      if (rafId) cancelAnimationFrame(rafId)
      if (observer) observer.disconnect()
    }
  }, [enabled, contentSelector, pathname])

  // Mirror `_go_top_btn` opacity toggle from the previous script.
  useEffect(() => {
    if (typeof window === 'undefined') return undefined
    const onScroll = () => setShowGoTop(window.scrollY > 200)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const flat = useMemo(() => flattenTree(tree), [tree])
  const spyItems = useMemo(() => flat.map((item) => ({ id: item.id })), [flat])
  const activeId = useScrollSpy(spyItems)

  const handleAnchorClick = (event, id) => {
    event.preventDefault()
    scrollToHeading(id)
  }

  const handleSkipOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const handleGoTop = () => {
    if (typeof window === 'undefined') return
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  const handleListTitleClick = (event) => {
    event.preventDefault()
    if (typeof window === 'undefined') return
    const subContent = document.querySelector('.sub_content')
    if (!subContent) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    const header = document.querySelector('.uk_header')
    const headerHeight = header ? header.offsetHeight : 0
    const top = subContent.getBoundingClientRect().top + window.scrollY - headerHeight
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' })
  }

  if (!enabled) return null

  const hasItems = showList && tree.length > 0
  const wrapperClassName = [
    'content_bottom',
    'inner',
    hasItems ? 'list_show' : '',
    open ? 'list_active info_none' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <aside className={wrapperClassName} data-nosnippet>
      <button
        type="button"
        className="go_top_btn"
        onClick={handleGoTop}
        title="맨위로"
        style={{ opacity: showGoTop ? 1 : 0 }}
        aria-hidden={!showGoTop}
        tabIndex={showGoTop ? 0 : -1}
      >
        <i>맨위로</i>
      </button>

      {hasItems ? (
        <button
          type="button"
          className={`skip_content_btn${open ? ' info_none' : ''}`}
          onClick={handleSkipOpen}
          title="Skip Content Menu"
          aria-expanded={open}
        >
          <span>
            <b>컨텐츠 바로가기 메뉴</b>로 편리하게 내용을 탐색하세요.
          </span>
          <i>목차 열기</i>
        </button>
      ) : null}

      {hasItems ? (
        <nav className="content_list" aria-label="페이지 콘텐츠 목차">
          {title ? (
            <strong className="list_title">
              <a href="#sub_content" onClick={handleListTitleClick}>
                {title}
              </a>
            </strong>
          ) : null}

          <ul className="cl_d1">
            {tree.map((h2) => (
              <li key={h2.id}>
                <a
                  href={`#${h2.id}`}
                  className={activeId === h2.id ? 'active' : undefined}
                  onClick={(event) => handleAnchorClick(event, h2.id)}
                >
                  {h2.text}
                </a>
                {h2.children.length > 0
                  ? renderDepth2Children(h2.children, activeId, handleAnchorClick)
                  : null}
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="content_list_close"
            onClick={handleClose}
            aria-label="목차 닫기"
          >
            <i>목차 닫기</i>
          </button>
        </nav>
      ) : null}
    </aside>
  )
}

export default ContentList
