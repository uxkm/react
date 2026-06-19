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
 * `.top_link_wrap` 이 흐름 높이를 유지하고, on/off 임계값에 히스테리시스를
 * 두어 `position:fixed` 전환 시 레이아웃 시프트로 인한 떨림을 줄인다.
 *
 * Mounted exactly once in `AppLayout`, so it is safe to call without args.
 */
// `_variable.scss` 의 `$screen-md-max` 와 동기화. 이 값 이하에서는 모바일 레이아웃.
const TOP_LINK_FIXED_MIN_WIDTH = 994
// fixed on/off 임계값 차이 — 경계에서 class 토글이 연속 발생하는 것을 방지
const FIXED_ON_EXTRA_PX = 4
const FIXED_OFF_EXTRA_PX = 12

function useFixedTopLink() {
  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return undefined

    let topLinkStartY = null
    let isTopLinkFixed = false
    let rafId = 0

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

    const setTopLinkFixed = (topLink, nextFixed) => {
      if (nextFixed === isTopLinkFixed) return
      isTopLinkFixed = nextFixed
      topLink.classList.toggle('fixed', nextFixed)
      topLink.closest('.top_link_wrap')?.classList.toggle('is_fixed', nextFixed)
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
          setTopLinkFixed(topLink, false)
        } else {
          if (topLinkStartY == null) measureTopLinkStartY()
          const threshold = Math.max(0, (topLinkStartY ?? 0) - headerHeight)
          if (!isTopLinkFixed && scrollTop > threshold + FIXED_ON_EXTRA_PX) {
            setTopLinkFixed(topLink, true)
          } else if (isTopLinkFixed && scrollTop <= threshold - FIXED_OFF_EXTRA_PX) {
            setTopLinkFixed(topLink, false)
          }
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

    const scheduleApply = () => {
      if (rafId) return
      rafId = window.requestAnimationFrame(() => {
        rafId = 0
        apply()
      })
    }

    const handleResize = () => {
      measureTopLinkStartY()
      scheduleApply()
    }

    measureTopLinkStartY()
    apply()
    window.addEventListener('scroll', scheduleApply, { passive: true })
    window.addEventListener('resize', handleResize)
    return () => {
      if (rafId) window.cancelAnimationFrame(rafId)
      window.removeEventListener('scroll', scheduleApply)
      window.removeEventListener('resize', handleResize)
    }
  }, [])
}

export default useFixedTopLink
