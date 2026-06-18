import { useEffect } from 'react'

/**
 * useResponsiveHtmlClass
 *
 * Mirrors `pc_mb_class()` from `src/assets/js/uk_common.js`:
 * keeps the `pc` / `mb` class on `<html>` in sync with the viewport width,
 * using the same `screen_sm_max` breakpoint (767px minus the vertical
 * scrollbar width).
 *
 * Many SCSS rules under `src/assets/css/` rely on `html.pc` / `html.mb`, so
 * this hook should be mounted exactly once in the layout tree.
 */
function getScreenSmMax() {
  if (typeof window === 'undefined' || typeof document === 'undefined') return 767
  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
  return 767 - Math.max(0, scrollbarWidth)
}

function applyClass(width) {
  const html = document.documentElement
  const breakpoint = getScreenSmMax()
  if (width > breakpoint) {
    html.classList.add('pc')
    html.classList.remove('mb')
  } else {
    html.classList.add('mb')
    html.classList.remove('pc')
  }
}

function useResponsiveHtmlClass() {
  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return undefined

    const sync = () => applyClass(document.documentElement.clientWidth)
    sync()

    window.addEventListener('resize', sync)
    return () => {
      window.removeEventListener('resize', sync)
    }
  }, [])
}

export default useResponsiveHtmlClass
