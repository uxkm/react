'use client'

import { useCallback, useEffect, useRef } from 'react'

/** PC 첫 화면만 다음 섹션으로 전환합니다. 태블릿·모바일(1099px 이하)은 기본 스크롤을 사용합니다. */
export function useHeroSectionScroll () {
  const move = useRef<(focus?: boolean) => void>(() => {})
  const scrollToNext = useCallback(() => move.current(true), [])

  useEffect(() => {
    const hero = document.querySelector<HTMLElement>('.main-hero_typeB')
    const next = document.getElementById('card-grid')
    if (!hero || !next) return
    let frame = 0
    let moving = false
    let lastInput = 0
    let touchY: number | null = null
    const mobile = window.matchMedia('(max-width: 1099px)')
    const headerHeight = () => document.querySelector('header.header')?.getBoundingClientRect().height ?? 0
    const inHero = () => hero.getBoundingClientRect().bottom > headerHeight() + 8
    const blocked = () => Boolean(document.querySelector('dialog[open], [aria-modal="true"]'))
    const interactive = (target: EventTarget | null) => target instanceof Element && Boolean(target.closest('a, button, input, textarea, select, [contenteditable="true"], [role="slider"]'))
    const layout = hero.closest<HTMLElement>('.app-layout')
    let observer: IntersectionObserver
    const observeHero = () => {
      observer?.disconnect()
      observer = new IntersectionObserver(([entry]) => {
        if (layout) layout.dataset.heroActive = String(entry.isIntersecting)
      }, { rootMargin: `-${headerHeight()}px 0px 0px 0px` })
      observer.observe(hero)
    }
    observeHero()
    const headerObserver = new ResizeObserver(observeHero)
    const header = document.querySelector('header.header')
    if (header) headerObserver.observe(header)

    const advance = (focus = false) => {
      if (mobile.matches || moving || blocked()) return
      moving = true
      lastInput = performance.now()
      const start = window.scrollY
      // AOS의 표시 전 translateY는 섹션의 실제 문서 위치에서 제외합니다.
      const transformY = new DOMMatrixReadOnly(getComputedStyle(next).transform).m42
      const destination = Math.max(0, next.getBoundingClientRect().top - transformY + start - headerHeight() - 32)
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const started = performance.now()
      const duration = reduced ? 0 : 720
      const tick = (now: number) => {
        const progress = duration ? Math.min(1, (now - started) / duration) : 1
        const eased = 1 - Math.pow(1 - progress, 4)
        window.scrollTo({ top: start + (destination - start) * eased, behavior: 'instant' })
        if (progress < 1) frame = requestAnimationFrame(tick)
        else {
          if (focus) {
            next.setAttribute('tabindex', '-1')
            next.focus({ preventScroll: true })
          }
          const release = (time: number) => {
            if (time - lastInput < 180) frame = requestAnimationFrame(release)
            else moving = false
          }
          frame = requestAnimationFrame(release)
        }
      }
      frame = requestAnimationFrame(tick)
    }
    move.current = advance
    const wheel = (event: WheelEvent) => {
      if (event.ctrlKey || event.defaultPrevented || blocked()) return
      if (moving) { event.preventDefault(); lastInput = performance.now(); return }
      if (event.deltaY > 0 && Math.abs(event.deltaY) > Math.abs(event.deltaX) && inHero()) {
        event.preventDefault()
        advance()
      }
    }
    const touchStart = (event: TouchEvent) => { touchY = event.touches.length === 1 ? event.touches[0].clientY : null }
    const touchMove = (event: TouchEvent) => {
      if (event.touches.length !== 1 || blocked()) return
      if (moving) { event.preventDefault(); return }
      if (touchY !== null && touchY - event.touches[0].clientY > 35 && inHero() && !interactive(event.target)) {
        event.preventDefault()
        touchY = null
        advance()
      }
    }
    const keyDown = (event: KeyboardEvent) => {
      if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey || interactive(event.target) || blocked()) return
      if (['ArrowDown', 'PageDown', ' '].includes(event.key) && (moving || inHero())) {
        event.preventDefault()
        advance(true)
      }
    }
    const removeInputListeners = () => {
      window.removeEventListener('wheel', wheel)
      window.removeEventListener('touchstart', touchStart)
      window.removeEventListener('touchmove', touchMove)
      window.removeEventListener('keydown', keyDown)
    }
    const syncInputListeners = () => {
      removeInputListeners()
      cancelAnimationFrame(frame)
      moving = false
      touchY = null
      if (mobile.matches) return
      window.addEventListener('wheel', wheel, { passive: false })
      window.addEventListener('touchstart', touchStart, { passive: true })
      window.addEventListener('touchmove', touchMove, { passive: false })
      window.addEventListener('keydown', keyDown)
    }
    syncInputListeners()
    mobile.addEventListener('change', syncInputListeners)
    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
      headerObserver.disconnect()
      if (layout) delete layout.dataset.heroActive
      move.current = () => {}
      mobile.removeEventListener('change', syncInputListeners)
      removeInputListeners()
    }
  }, [])

  return scrollToNext
}
