import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

/** Google CSE 등이 쓰는 해시(`#gsc.tab=0`)는 문서 앵커가 아니므로 스크롤 처리에서 제외 */
function isDocumentAnchorHash(hash) {
  if (!hash) return false
  const frag = hash.startsWith('#') ? hash.slice(1) : hash
  if (frag.startsWith('gsc.')) return false
  return true
}

/**
 * useScrollToTopOnRouteChange
 *
 * Replaces the sessionStorage-based scroll restoration block in
 * `src/assets/js/uk_dom_before.js` and `uk_sub.js`. The
 * previous code preserved the previous scroll position across reloads via
 * `sessionStorage.loading_scroll_top`; in a single-page app the equivalent
 * behaviour is "scroll to top on route change, jump to hash anchor when one
 * is provided".
 *
 * - When the URL has a document anchor hash (not Google CSE `#gsc.*`), scroll
 *   the matching element into view, taking the fixed header height into account.
 * - When the navigation carries `state.tabMenuScroll === true`, leave
 *   scrolling to `useTabMenuScrollAdjust` (it restores the saved position).
 * - Otherwise, jump to the top of the page on every route change so each
 *   menu click starts reading from the beginning.
 * - Skips scrolling on the very first mount so browser-restored scroll on a
 *   hard reload is preserved.
 */
function useScrollToTopOnRouteChange() {
  const { pathname, hash, state } = useLocation()
  const isFirstRunRef = useRef(true)

  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return undefined

    if (isFirstRunRef.current) {
      isFirstRunRef.current = false
      return undefined
    }

    const scrollToHash = () => {
      const target = document.getElementById(hash.slice(1))
      if (!target) {
        window.scrollTo({ top: 0, behavior: 'auto' })
        return
      }
      const header = document.querySelector('.uk_header')
      const headerHeight = header ? header.offsetHeight : 0
      const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 20
      window.scrollTo({ top: Math.max(0, top), behavior: 'auto' })
    }

    if (hash && !isDocumentAnchorHash(hash)) {
      // Google CSE 검색 시 URL 해시(#gsc.*)만 바뀌는 경우 — 페이지 스크롤 건드리지 않음
      return undefined
    }

    if (hash && isDocumentAnchorHash(hash)) {
      // Defer one frame so the new route has mounted before we look up the id.
      const raf = requestAnimationFrame(scrollToHash)
      return () => cancelAnimationFrame(raf)
    }

    if (state && state.tabMenuScroll === true) {
      // Tab navigation handled by useTabMenuScrollAdjust.
      return undefined
    }

    window.scrollTo({ top: 0, behavior: 'auto' })
    return undefined
  }, [pathname, hash, state])
}

export default useScrollToTopOnRouteChange
