import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * useTabMenuScrollAdjust
 *
 * Port of `tab_menu_scroll_adjust()` and the matching click delegate in
 * `src/assets/js/uk_sub.js`. Behaviour:
 *
 *   1. Tab links pass `location.state.tabMenuScroll = true` on navigation and
 *      save click-time `window.scrollY`.
 *   2. On route change, only when this state exists, restore the saved scrollY.
 *
 * When the next page is shorter than the saved position, scroll is clamped or
 * aligned to the tab menu so the viewport does not land on blank space.
 */
const TAB_SCROLL_STATE_KEY = 'tabMenuScroll'
const TAB_SCROLL_Y_KEY = 'tabMenuScrollY'

function getMaxScrollY() {
  return Math.max(0, document.documentElement.scrollHeight - window.innerHeight)
}

function getTabMenuScrollTarget() {
  const maxScroll = getMaxScrollY()
  const tabMenu = document.querySelector('.content_area .tab_menu')
  if (!tabMenu) return 0

  const header = document.querySelector('.uk_header')
  const headerHeight = header ? header.offsetHeight : 0
  const tabTop = tabMenu.getBoundingClientRect().top + window.scrollY - headerHeight - 12
  return Math.min(Math.max(0, tabTop), maxScroll)
}

function applyTabMenuScroll(savedY) {
  const maxScroll = getMaxScrollY()

  if (savedY == null) {
    window.scrollTo({ top: getTabMenuScrollTarget(), behavior: 'auto' })
    return
  }

  const clampedY = Math.min(Math.max(0, savedY), maxScroll)
  if (savedY > maxScroll + 8) {
    window.scrollTo({ top: getTabMenuScrollTarget(), behavior: 'auto' })
    return
  }

  window.scrollTo({ top: clampedY, behavior: 'auto' })
}

function useTabMenuScrollAdjust() {
  const { pathname, state } = useLocation()

  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return undefined
    if (!state || state[TAB_SCROLL_STATE_KEY] !== true) return undefined

    const getSavedScrollY = () => {
      try {
        const raw = window.sessionStorage.getItem(TAB_SCROLL_Y_KEY)
        if (raw == null) return null
        const parsed = Number(raw)
        return Number.isNaN(parsed) ? null : parsed
      } catch {
        return null
      }
    }

    let raf = 0
    let timeout = 0
    let cleared = false

    const run = () => {
      applyTabMenuScroll(getSavedScrollY())
      if (cleared) return
      cleared = true
      try {
        window.sessionStorage.removeItem(TAB_SCROLL_Y_KEY)
      } catch {
        // ignore
      }
    }

    raf = requestAnimationFrame(() => {
      raf = requestAnimationFrame(run)
    })
    timeout = window.setTimeout(run, 150)

    return () => {
      if (raf) cancelAnimationFrame(raf)
      if (timeout) window.clearTimeout(timeout)
    }
  }, [pathname, state])
}

export default useTabMenuScrollAdjust
