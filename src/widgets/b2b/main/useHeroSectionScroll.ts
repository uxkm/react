'use client';

import { useCallback, useEffect, useRef } from 'react';

/** PC에서 첫 번째와 두 번째 섹션 사이를 전환합니다. 태블릿·모바일(1099px 이하)은 기본 스크롤을 사용합니다. */
export function useHeroSectionScroll() {
  const move = useRef<(focus?: boolean) => void>(() => {});
  const scrollToNext = useCallback(() => move.current(true), []);

  useEffect(() => {
    const hero = document.querySelector<HTMLElement>('.main-hero_typeB');
    const next = document.getElementById('card-grid');
    if (!hero || !next) return;
    let frame = 0;
    let movingTo: HTMLElement | null = null;
    let lastInput = 0;
    let touchY: number | null = null;
    const mobile = window.matchMedia('(max-width: 1099px)');
    const headerHeight = () =>
      document.querySelector('header.header')?.getBoundingClientRect().height ?? 0;
    const inHero = () => hero.getBoundingClientRect().bottom > headerHeight() + 8;
    const nextSectionOffset = () => {
      // AOS의 표시 전 translateY는 섹션의 실제 문서 위치에서 제외합니다.
      const transformY = new DOMMatrixReadOnly(getComputedStyle(next).transform).m42;
      return next.getBoundingClientRect().top - transformY - headerHeight() - 32;
    };
    const canMoveTo = (target: HTMLElement) => {
      if (movingTo) return movingTo !== target;
      return target === next ? inHero() : window.scrollY > 0 && nextSectionOffset() >= -2;
    };
    const blocked = () => Boolean(document.querySelector('dialog[open], [aria-modal="true"]'));
    const interactive = (target: EventTarget | null) =>
      target instanceof Element &&
      Boolean(
        target.closest(
          'a, button, input, textarea, select, [contenteditable="true"], [role="slider"]',
        ),
      );
    const layout = hero.closest<HTMLElement>('.app-layout');
    let observer: IntersectionObserver;
    const observeHero = () => {
      observer?.disconnect();
      observer = new IntersectionObserver(
        ([entry]) => {
          if (layout) layout.dataset.heroActive = String(entry.isIntersecting);
        },
        { rootMargin: `-${headerHeight()}px 0px 0px 0px` },
      );
      observer.observe(hero);
    };
    observeHero();
    const headerObserver = new ResizeObserver(observeHero);
    const header = document.querySelector('header.header');
    if (header) headerObserver.observe(header);

    const moveTo = (target: HTMLElement, focus = false) => {
      if (mobile.matches || movingTo === target || blocked()) return;
      cancelAnimationFrame(frame);
      movingTo = target;
      lastInput = performance.now();
      const start = window.scrollY;
      const destination = target === next ? Math.max(0, start + nextSectionOffset()) : 0;
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const started = performance.now();
      const duration = reduced ? 0 : 720;
      const tick = (now: number) => {
        const progress = duration ? Math.min(1, (now - started) / duration) : 1;
        const eased = 1 - Math.pow(1 - progress, 4);
        window.scrollTo({ top: start + (destination - start) * eased, behavior: 'instant' });
        if (progress < 1) frame = requestAnimationFrame(tick);
        else {
          if (focus) {
            target.setAttribute('tabindex', '-1');
            target.focus({ preventScroll: true });
          }
          const release = (time: number) => {
            if (time - lastInput < 180) frame = requestAnimationFrame(release);
            else movingTo = null;
          };
          frame = requestAnimationFrame(release);
        }
      };
      frame = requestAnimationFrame(tick);
    };
    move.current = (focus) => moveTo(next, focus);
    const wheel = (event: WheelEvent) => {
      if (event.ctrlKey || event.defaultPrevented || blocked()) return;
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
      const target = event.deltaY > 0 ? next : hero;
      if (canMoveTo(target)) {
        event.preventDefault();
        moveTo(target);
      } else if (movingTo) {
        event.preventDefault();
        lastInput = performance.now();
      }
    };
    const touchStart = (event: TouchEvent) => {
      touchY = event.touches.length === 1 ? event.touches[0].clientY : null;
    };
    const touchMove = (event: TouchEvent) => {
      if (event.touches.length !== 1 || blocked()) return;
      if (touchY !== null && !interactive(event.target)) {
        const delta = touchY - event.touches[0].clientY;
        const target = delta > 0 ? next : hero;
        if (Math.abs(delta) > 35 && canMoveTo(target)) {
          event.preventDefault();
          touchY = null;
          moveTo(target);
          return;
        }
      }
      if (movingTo) event.preventDefault();
    };
    const keyDown = (event: KeyboardEvent) => {
      if (
        event.defaultPrevented ||
        event.altKey ||
        event.ctrlKey ||
        event.metaKey ||
        (event.shiftKey && event.key !== ' ') ||
        interactive(event.target) ||
        blocked()
      )
        return;
      const up = ['ArrowUp', 'PageUp'].includes(event.key) || (event.shiftKey && event.key === ' ');
      const down = !event.shiftKey && ['ArrowDown', 'PageDown', ' '].includes(event.key);
      if (!up && !down) return;
      const target = up ? hero : next;
      if (canMoveTo(target)) {
        event.preventDefault();
        moveTo(target, true);
      } else if (movingTo) event.preventDefault();
    };
    const removeInputListeners = () => {
      window.removeEventListener('wheel', wheel);
      window.removeEventListener('touchstart', touchStart);
      window.removeEventListener('touchmove', touchMove);
      window.removeEventListener('keydown', keyDown);
    };
    const syncInputListeners = () => {
      removeInputListeners();
      cancelAnimationFrame(frame);
      movingTo = null;
      touchY = null;
      if (mobile.matches) return;
      window.addEventListener('wheel', wheel, { passive: false });
      window.addEventListener('touchstart', touchStart, { passive: true });
      window.addEventListener('touchmove', touchMove, { passive: false });
      window.addEventListener('keydown', keyDown);
    };
    syncInputListeners();
    mobile.addEventListener('change', syncInputListeners);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      headerObserver.disconnect();
      if (layout) delete layout.dataset.heroActive;
      move.current = () => {};
      mobile.removeEventListener('change', syncInputListeners);
      removeInputListeners();
    };
  }, []);

  return scrollToNext;
}
