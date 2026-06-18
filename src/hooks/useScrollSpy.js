import { useEffect, useState } from 'react'

/**
 * useScrollSpy
 *
 * Lightweight port of the `content_list_active(sct)` block from
 * `src/assets/js/uk_sub.js`.
 *
 * Given an ordered list of `{ id }` items (document order) it returns the id
 * of the active heading: the last one whose top edge has crossed the reference
 * line just below the fixed `.uk_header` (header height + extra offset). This
 * viewport-based rule stays aligned with `scrollToHeading` in `ContentList`
 * and avoids parent-only activation when smooth scroll ends a pixel short.
 *
 * The hook re-computes on scroll / resize / item change. Listeners are
 * passive, registration is idempotent across StrictMode double-mounts.
 *
 * @param {Array<{ id: string }>} items
 * @param {{ extraOffset?: number }} [options]
 *   - extraOffset: extra pixels added to the header height when computing the
 *                  trigger line (matches the previous `content_list_empty`
 *                  values per breakpoint, default: 40)
 * @returns {string | null} id of the active item, or `null` before any has
 *                          been entered.
 */
function useScrollSpy(items, options) {
  const extraOffset = options?.extraOffset ?? 40
  const [activeId, setActiveId] = useState(null)

  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return undefined
    if (!Array.isArray(items) || items.length === 0) {
      return undefined
    }

    const compute = () => {
      const header = document.querySelector('.uk_header')
      const line = (header ? header.offsetHeight : 0) + extraOffset
      const scrollTop = window.scrollY
      // 서브픽셀·smooth scroll 종료 위치가 기준선과 1px 어긋나면 자식 헤딩이
      // 조건에서 빠지고 부모만 활성으로 남는 경우가 있어 소량 허용한다.
      const tolerancePx = 2

      let current = null
      // 문서 순서(flat list)대로, 뷰포트 상단에서 `line` 이하로 올라온(지나간)
      // 헤딩을 누적해 마지막 것을 활성으로 한다. scrollY와의 대수 비교보다
      // getBoundingClientRect 기준이 클릭 이동 후에도 부모/자식 구분이 안정적이다.
      for (const item of items) {
        const el = document.getElementById(item.id)
        if (!el) continue
        const top = el.getBoundingClientRect().top
        if (top <= line + tolerancePx) current = item.id
      }

      // When the page is scrolled all the way to the bottom, the previous code
      // pins the last entry as active even if its threshold has not been
      // reached. Replicate that here.
      const atBottom =
        Math.ceil(scrollTop + window.innerHeight) >= document.documentElement.scrollHeight
      if (atBottom) current = items[items.length - 1]?.id ?? current

      setActiveId(current)
    }

    compute()
    window.addEventListener('scroll', compute, { passive: true })
    window.addEventListener('resize', compute)
    return () => {
      window.removeEventListener('scroll', compute)
      window.removeEventListener('resize', compute)
    }
  }, [items, extraOffset])

  if (!Array.isArray(items) || items.length === 0) {
    return null
  }

  return activeId
}

export default useScrollSpy
