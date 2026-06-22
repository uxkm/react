import { useEffect, useState } from 'react'

/**
 * useScrollSpy
 *
 * Lightweight port of the `content_list_active(sct)` block from
 * `src/assets/js/uk_sub.js`.
 *
 * Given an ordered list of `{ id }` items (document order) it returns the id
 * of the active heading:
 *   - position:sticky 헤딩(h2 등) → 상단에 고정(stuck)되는 순간 활성
 *   - 일반 헤딩(h3/h4) → 기준선(header + extraOffset)을 지나면 활성
 *
 * titleSticky 페이지에서 sticky h2는 getBoundingClientRect().top 이
 * sticky top(예: hdHeight + pc_padding)에 고정되므로, stuck 여부를
 * 우선 판별해야 섹션 전환 시 활성 표시가 한 템포 늦지 않는다.
 *
 * @param {Array<{ id: string }>} items
 * @param {{ extraOffset?: number }} [options]
 *   - extraOffset: extra pixels added to the header height when computing the
 *                  trigger line (matches the previous `content_list_empty`
 *                  values per breakpoint, default: 40)
 * @returns {string | null} id of the active item, or the first item before any
 *                          heading has been entered.
 */
const STUCK_TOLERANCE_PX = 6

function isStickyPositioned(el) {
  const style = window.getComputedStyle(el)
  return style.position === 'sticky' || style.position === '-webkit-sticky'
}

function parseStickyTop(el) {
  const top = parseFloat(window.getComputedStyle(el).top)
  return Number.isNaN(top) ? null : top
}

/** sticky 헤딩이 CSS top 값에 고정( stuck )되어 있는지 판별 */
function isStuckAtTop(el) {
  if (!isStickyPositioned(el)) return false
  const stickyTop = parseStickyTop(el)
  if (stickyTop == null) return false
  const rectTop = el.getBoundingClientRect().top
  return Math.abs(rectTop - stickyTop) <= STUCK_TOLERANCE_PX
}

function isHeadingActive(el, line) {
  if (isStuckAtTop(el)) return true

  // sticky 헤딩은 stuck 되기 전·후에는 활성 판정하지 않음
  // (다음 섹션이 stuck 될 때까지 이전 활성을 유지)
  if (isStickyPositioned(el)) return false

  return el.getBoundingClientRect().top <= line + 2
}

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

      let current = items[0]?.id ?? null
      for (const item of items) {
        const el = document.getElementById(item.id)
        if (!el) continue
        if (isHeadingActive(el, line)) current = item.id
      }

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
