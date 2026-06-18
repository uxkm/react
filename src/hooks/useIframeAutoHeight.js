import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * useIframeAutoHeight
 *
 * Port of `uk_kmTemp_resize()` from `uk_common.js`. Walks every
 * `.kmtemp_resize_iframe` wrapper and sets its height to the inner
 * `iframe.contentDocument.body` height once the frame finishes loading. Adds
 * the `resize_ok` class so existing SCSS can reveal the wrapper after sizing.
 *
 * Same-origin iframes only — cross-origin frames will throw on
 * `contentDocument` access; those errors are swallowed and the wrapper keeps
 * the placeholder height the caller provided.
 *
 * Re-runs on every route change because each lazy page may bring its own
 * embedded iframes.
 */
function useIframeAutoHeight() {
  const { pathname } = useLocation()

  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return undefined

    const wrappers = Array.from(document.querySelectorAll('.kmtemp_resize_iframe'))
    if (wrappers.length === 0) return undefined

    const cleanups = []

    const sizeOne = (wrapper) => {
      const iframe = wrapper.querySelector('iframe')
      if (!iframe) return
      try {
        const innerDoc = iframe.contentDocument || iframe.contentWindow?.document
        const innerBody = innerDoc?.body
        if (!innerBody) return
        wrapper.style.height = `${innerBody.scrollHeight}px`
        wrapper.classList.add('resize_ok')
      } catch {
        // cross-origin: cannot measure
      }
    }

    for (const wrapper of wrappers) {
      const iframe = wrapper.querySelector('iframe')
      if (!iframe) continue
      const handler = () => sizeOne(wrapper)
      iframe.addEventListener('load', handler)
      cleanups.push(() => iframe.removeEventListener('load', handler))
      // Iframe may already be loaded when we get here (cached, srcdoc, ...)
      sizeOne(wrapper)
    }

    const onResize = () => {
      for (const wrapper of wrappers) sizeOne(wrapper)
    }
    window.addEventListener('resize', onResize)
    cleanups.push(() => window.removeEventListener('resize', onResize))

    return () => {
      for (const fn of cleanups) fn()
    }
  }, [pathname])
}

export default useIframeAutoHeight
