'use client'

/**
 * URL 해시(#cases 등)로 해당 id 요소까지 스크롤한다.
 * 다른 경로에서 /b2b#cases 로 들어온 뒤 App Router 가 스크롤하지 않는 경우를 보완한다.
 */
import { useEffect } from 'react' // effect 훅

export function useScrollToHash () {
  useEffect(() => {
    const scroll = () => {
      const id = window.location.hash.replace(/^#/, '')
      if (!id) return
      const el = document.getElementById(id)
      if (!el) return
      el.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' })
      if (!el.hasAttribute('tabindex')) {
        el.setAttribute('tabindex', '-1')
        el.addEventListener('blur', () => el.removeAttribute('tabindex'), { once: true })
      }
      el.focus({ preventScroll: true })
    }

    // 레이아웃·이미지 직후 한 번 더 맞춰 헤더 sticky 와 높이 변화를 흡수한다
    const t0 = window.setTimeout(scroll, 0)
    const t1 = window.setTimeout(scroll, 120)
    window.addEventListener('hashchange', scroll)
    return () => {
      window.clearTimeout(t0)
      window.clearTimeout(t1)
      window.removeEventListener('hashchange', scroll)
    }
  }, [])
}

export default useScrollToHash
