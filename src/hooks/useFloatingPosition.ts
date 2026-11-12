'use client'

import { useLayoutEffect, useState, type CSSProperties, type RefObject } from 'react'
import type { FloatingBoundary, FloatingPlacement, FloatingPositionResolver } from '@/comp/shared/floating-position'

interface FloatingPositionOptions {
  enabled: boolean
  placement: FloatingPlacement
  offsetBottom: number
  offsetRight: number
  boundary: FloatingBoundary
  boundaryGap: number
  getPosition?: FloatingPositionResolver
}

function placementStyle (placement: FloatingPlacement, y: number, x: number): CSSProperties {
  return {
    top: placement.startsWith('top') ? y : 'auto',
    bottom: placement.startsWith('bottom') ? y : 'auto',
    left: placement.endsWith('left') ? x : 'auto',
    right: placement.endsWith('right') ? x : 'auto'
  }
}

function boundaryElement (boundary: FloatingBoundary, floating: HTMLElement): HTMLElement | null {
  if (!boundary || boundary === 'viewport') return null
  if (typeof boundary === 'function') return boundary()
  if (typeof boundary !== 'string') return boundary
  if (boundary === 'footer') {
    const layout = floating.closest('.app-layout')
    return (layout?.querySelector<HTMLElement>('.app-footer') ||
      layout?.querySelector<HTMLElement>(':scope > .app-layout__tree > footer') ||
      document.querySelector<HTMLElement>('.app-footer, footer')) ?? null
  }
  try { return document.querySelector<HTMLElement>(boundary) } catch { return null }
}

function sameStyle (a: CSSProperties, b: CSSProperties) {
  const keys = Object.keys(a) as Array<keyof CSSProperties>
  return keys.length === Object.keys(b).length && keys.every((key) => a[key] === b[key])
}

/** 푸터·사용자 경계와 겹치지 않는 플로팅 좌표. 스크롤·리사이즈·동적 콘텐츠를 함께 추적한다. */
export function useFloatingPosition (ref: RefObject<HTMLDivElement | null>, {
  enabled, placement, offsetBottom, offsetRight, boundary, boundaryGap, getPosition
}: FloatingPositionOptions) {
  const [position, setPosition] = useState<CSSProperties>({})
  useLayoutEffect(() => {
    const element = ref.current
    if (!enabled || !element) return
    let frame = 0
    let observedBoundary: HTMLElement | null = null
    const resizeObserver = typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(schedule)
    function update () {
      frame = 0
      const target = boundaryElement(boundary, element!)
      if (target !== observedBoundary) {
        if (observedBoundary) resizeObserver?.unobserve(observedBoundary)
        observedBoundary = target
        if (target) resizeObserver?.observe(target)
      }
      const visibleBoundary = target?.isConnected && target.getClientRects().length && getComputedStyle(target).visibility !== 'hidden'
      const boundaryRect = visibleBoundary ? target.getBoundingClientRect() : null
      const floatingRect = element!.getBoundingClientRect()
      const viewport = { width: window.innerWidth, height: window.innerHeight }
      const defaultStyle = placementStyle(placement, offsetBottom, offsetRight)
      // absolute 등은 좌표계가 다르므로 자동 경계 회피는 fixed 배치에만 적용한다.
      if (boundaryRect && getComputedStyle(element!).position === 'fixed') {
        if (placement.startsWith('bottom')) {
          defaultStyle.bottom = Math.max(offsetBottom, viewport.height - boundaryRect.top + boundaryGap)
        } else {
          defaultStyle.top = Math.min(offsetBottom, boundaryRect.top - boundaryGap - floatingRect.height)
        }
      }
      const next = {
        ...defaultStyle,
        ...getPosition?.({ placement, viewport, floatingRect, boundaryRect, defaultStyle })
      }
      setPosition((previous) => sameStyle(previous, next) ? previous : next)
    }
    function schedule () {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    if ((!boundary || boundary === 'viewport') && !getPosition) return
    resizeObserver?.observe(element)
    resizeObserver?.observe(document.body)
    const mutations = new MutationObserver(schedule)
    mutations.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['class', 'style', 'hidden'] })
    document.addEventListener('scroll', schedule, { passive: true, capture: true })
    window.addEventListener('resize', schedule)
    return () => {
      cancelAnimationFrame(frame)
      resizeObserver?.disconnect()
      mutations.disconnect()
      document.removeEventListener('scroll', schedule, true)
      window.removeEventListener('resize', schedule)
    }
  }, [ref, enabled, placement, offsetBottom, offsetRight, boundary, boundaryGap, getPosition])
  return { ...placementStyle(placement, offsetBottom, offsetRight), ...position }
}
