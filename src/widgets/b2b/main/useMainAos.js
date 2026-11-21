'use client';

import { useEffect } from 'react';
import { loadAos } from '@/lib/vendor/aos';

/** 메인의 본문 섹션만 AOS로 표시합니다. 프리뷰·헤더·푸터에는 적용하지 않습니다. */
export function useMainAos(loading) {
  useEffect(() => {
    if (loading) return undefined;
    const root = document.querySelector('[data-main-reveal]');
    if (!root) return undefined;

    const sections = Array.from(root.querySelectorAll(':scope > section:not(.main-hero_typeB)'));
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let cancelled = false;
    let aos;
    let frame = 0;

    const clear = () => {
      sections.forEach((section) => {
        for (const attribute of [
          'data-aos',
          'data-aos-once',
          'data-aos-duration',
          'data-aos-offset',
          'data-aos-easing',
        ]) {
          section.removeAttribute(attribute);
        }
        section.classList.remove('aos-init', 'aos-animate');
      });
    };
    const refresh = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (!cancelled && !motion.matches) aos?.refresh();
      });
    };
    const apply = async () => {
      if (motion.matches) {
        clear();
        aos?.refreshHard();
        return;
      }
      try {
        const instance = await loadAos();
        if (cancelled || motion.matches) return;
        aos = instance;
        sections.forEach((section) => {
          section.setAttribute('data-aos', 'fade-up');
          section.setAttribute('data-aos-once', 'false');
          section.setAttribute('data-aos-duration', '800');
          section.setAttribute('data-aos-offset', '80');
          section.setAttribute('data-aos-easing', 'ease-out-cubic');
          // 첫 화면·해시 이동으로 이미 지나온 콘텐츠를 다시 숨기지 않습니다.
          if (section.getBoundingClientRect().top < window.innerHeight)
            section.classList.add('aos-animate');
        });
        aos.refreshHard();
      } catch {
        // 라이브러리를 불러오지 못해도 본문은 항상 읽을 수 있습니다.
        clear();
      }
    };
    const revealFocus = (event) => {
      const section = event.target.closest('[data-aos]');
      if (section && root.contains(section)) section.classList.add('aos-animate');
    };

    void apply();
    motion.addEventListener('change', apply);
    root.addEventListener('focusin', revealFocus);
    root.addEventListener('load', refresh, true);
    const observer = new ResizeObserver(refresh);
    observer.observe(root);
    document.fonts.ready.then(() => {
      if (!cancelled) refresh();
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
      motion.removeEventListener('change', apply);
      root.removeEventListener('focusin', revealFocus);
      root.removeEventListener('load', refresh, true);
      clear();
      aos?.refreshHard();
    };
  }, [loading]);
}
