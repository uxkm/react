import { useEffect } from 'react'

/**
 * useFixedTopLink
 *
 * Mirrors the previous `_top_link` scroll handler from
 * `src/assets/js/uk_sub.js`:
 *
 *     let top_link_offset = _top_link.find('ul').offset().top - 1
 *     sct > top_link_offset - _ukHeader.height()
 *       ? _top_link.addClass('fixed')
 *       : _top_link.removeClass('fixed')
 *
 * Adds/removes the `.fixed` class on the first visible `.top_link` element
 * once the user scrolls past it. Also toggles `.uk_header.title_show` on the
 * `.side_menu_area` (when present) to mirror `uk_sub.js` line 525-529.
 *
 * 모바일(폭 ≤ `$screen-md-max`)에서는 `.top_link.fixed` 가 본문 위에
 * 떠 있는 형태(상단 고정 오버레이)가 되어 `.sub_top` / `.uk_note` 영역과
 * 겹쳐 보이므로, 이 폭 대역에서는 `.fixed` 클래스를 부여하지 않는다.
 *
 * Mounted exactly once in `AppLayout`, so it is safe to call without args.
 */
// `_variable.scss` 의 `$screen-md-max` 와 동기화. 이 값 이하에서는 모바일 레이아웃.
const TOP_LINK_FIXED_MIN_WIDTH = 994

function useFixedTopLink() {
  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return undefined

    let topLinkStartY = null

    const measureTopLinkStartY = () => {
      const topLink = document.querySelector('.top_link')
      if (!topLink) {
        topLinkStartY = null
        return
      }

      const hadFixedClass = topLink.classList.contains('fixed')
      if (hadFixedClass) topLink.classList.remove('fixed')

      const list = topLink.querySelector('ul')
      const target = list ?? topLink
      topLinkStartY = target.getBoundingClientRect().top + window.scrollY - 1

      if (hadFixedClass) topLink.classList.add('fixed')
    }

    const apply = () => {
      const header = document.querySelector('.uk_header')
      const headerHeight = header ? header.offsetHeight : 0
      const scrollTop = window.scrollY
      const isMobileViewport = window.innerWidth < TOP_LINK_FIXED_MIN_WIDTH

      const topLink = document.querySelector('.top_link')
      if (topLink) {
        if (isMobileViewport) {
          // 모바일 폭에서는 `.top_link.fixed` 오버레이가 `.sub_top` 와 겹쳐
          // 보이므로 항상 일반 흐름(non-fixed) 상태를 유지한다.
          topLink.classList.remove('fixed')
        } else {
          if (topLinkStartY == null) measureTopLinkStartY()
          const threshold = Math.max(0, (topLinkStartY ?? 0) - headerHeight)
          if (scrollTop > threshold) topLink.classList.add('fixed')
          else topLink.classList.remove('fixed')
        }
      }

      const sideMenuArea = document.querySelector('.side_menu_area')
      const subContent = document.querySelector('.sub_content')
      const contentTitle = document.getElementById('content_title')
      if (sideMenuArea && subContent && contentTitle) {
        const paddingTop = parseFloat(window.getComputedStyle(subContent).paddingTop) || 0
        const subTop =
          subContent.getBoundingClientRect().top +
          scrollTop +
          paddingTop +
          contentTitle.offsetHeight / 2 -
          headerHeight
        if (scrollTop > subTop) sideMenuArea.classList.add('title_show')
        else sideMenuArea.classList.remove('title_show')
      }
    }

    const handleResize = () => {
      measureTopLinkStartY()
      apply()
    }

    measureTopLinkStartY()
    apply()
    window.addEventListener('scroll', apply, { passive: true })
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('scroll', apply)
      window.removeEventListener('resize', handleResize)
    }
  }, [])
}

export default useFixedTopLink
