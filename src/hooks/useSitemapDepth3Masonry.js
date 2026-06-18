import { useEffect } from 'react'

/**
 * useSitemapDepth3Masonry
 *
 * Port of `depth3_masonry()` in `src/assets/js/uk_common.js`
 * (invoked from `hd_common` on scroll). The jQuery plugin is replaced with
 * the official `masonry-layout` package (no jQuery).
 *
 * The module is loaded only while the sitemap layer is open so the main
 * bundle stays smaller.
 *
 * Targets every `ul.depth3` under the sitemap layer, with `.item` cells and
 * `percentPosition: true`, matching the previous options.
 */
function getTargetDepth3Lists(root, viewType) {
  if (viewType === 'type_tab') {
    return root.querySelectorAll('.depth2 > li.active > .depth3_wrap ul.depth3')
  }
  return root.querySelectorAll('ul.depth3')
}

function useSitemapDepth3Masonry(containerRef, active, viewType, layoutEpoch) {
  useEffect(() => {
    if (!active || typeof window === 'undefined') return undefined

    let cancelled = false
    let instances = []
    const rafIds = { a: 0, b: 0 }
    let MasonryCtor = null

    const onResize = () => {
      instances.forEach((m) => m.layout())
    }

    window.addEventListener('resize', onResize)

    let ro
    const rootEl = containerRef.current
    if (typeof ResizeObserver !== 'undefined' && rootEl) {
      ro = new ResizeObserver(() => {
        instances.forEach((m) => m.layout())
      })
      ro.observe(rootEl)
    }

    const setup = () => {
      const root = containerRef.current
      if (cancelled || !root || !MasonryCtor) return
      const depth3List = getTargetDepth3Lists(root, viewType)
      if (depth3List.length === 0) return
      instances.forEach((m) => {
        try {
          m.destroy()
        } catch {
          /* noop */
        }
      })
      instances = []
      depth3List.forEach((el) => {
        instances.push(
          new MasonryCtor(el, {
            itemSelector: '.item',
            percentPosition: true,
          }),
        )
      })
    }

    import('masonry-layout')
      .then(({ default: Masonry }) => {
        if (cancelled) return
        MasonryCtor = Masonry
        rafIds.a = requestAnimationFrame(() => {
          rafIds.b = requestAnimationFrame(() => setup())
        })
      })
      .catch(() => {
        /* optional dependency failed — grid still works via floats in SCSS */
      })

    // `SiteSitemapNav` is lazy-loaded, so the first setup can run before
    // `.depth3` lists mount. Observe DOM changes and retry initialization.
    let mo
    if (rootEl && typeof MutationObserver !== 'undefined') {
      mo = new MutationObserver(() => {
        if (!MasonryCtor) return
        setup()
      })
      mo.observe(rootEl, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['class'],
      })
    }

    return () => {
      cancelled = true
      cancelAnimationFrame(rafIds.a)
      cancelAnimationFrame(rafIds.b)
      window.removeEventListener('resize', onResize)
      ro?.disconnect()
      mo?.disconnect()
      instances.forEach((m) => {
        try {
          m.destroy()
        } catch {
          /* noop */
        }
      })
      instances = []
    }
  }, [active, viewType, layoutEpoch, containerRef])
}

export default useSitemapDepth3Masonry
