'use client';

/**
 * URL 해시(#cases 등)로 해당 id 요소까지 스크롤한다.
 * 다른 경로에서 /b2b#cases 로 들어온 뒤 App Router 가 스크롤하지 않는 경우를 보완한다.
 */
import { useEffect } from 'react'; // effect 훅

export function useScrollToHash() {
  useEffect(() => {
    const scroll = () => {
      const id = window.location.hash.replace(/^#/, '');
      if (!id) return;
      const el = document.getElementById(id);
      if (!el) return;
      el.scrollIntoView({
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
        block: 'start',
      });
      if (!el.hasAttribute('tabindex')) {
        el.setAttribute('tabindex', '-1');
        el.addEventListener('blur', () => el.removeAttribute('tabindex'), { once: true });
      }
      el.focus({ preventScroll: true });
      return el;
    };

    // 레이아웃이 변한 뒤 위치를 보정하되 사용자가 옮긴 초점은 그대로 둔다.
    let initialTarget: HTMLElement | undefined;
    const t0 = window.setTimeout(() => {
      initialTarget = scroll();
    }, 0);
    const t1 = window.setTimeout(() => {
      if (document.activeElement === (initialTarget ?? document.body)) scroll();
    }, 120);
    window.addEventListener('hashchange', scroll);
    return () => {
      window.clearTimeout(t0);
      window.clearTimeout(t1);
      window.removeEventListener('hashchange', scroll);
    };
  }, []);
}

export default useScrollToHash;
