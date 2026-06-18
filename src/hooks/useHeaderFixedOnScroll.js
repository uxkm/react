import { useEffect } from 'react'

/**
 * useHeaderFixedOnScroll
 *
 * Mirrors the `hd_common(sct)` part of
 * `src/assets/js/uk_common.js` that toggles the
 * `.fixed` class on `.uk_header` once the page is scrolled past 10px.
 *
 * Implementation notes:
 * - Uses passive scroll listener for performance.
 * - Re-runs on route changes so the very first paint of a navigated page
 *   reflects the current scroll position (browser may restore scrollTop
 *   before the new component mounts).
 */
const FIXED_THRESHOLD = 10

function useHeaderFixedOnScroll() {
  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return undefined

    const apply = () => {
      const header = document.querySelector('.uk_header')
      if (!header) return
      if (window.scrollY > FIXED_THRESHOLD) header.classList.add('fixed')
      else header.classList.remove('fixed')
    }

    apply()
    window.addEventListener('scroll', apply, { passive: true })
    return () => {
      window.removeEventListener('scroll', apply)
    }
  }, [])
}

export default useHeaderFixedOnScroll
