import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

function readSuppressFromBody() {
  return (
    document.body.dataset.pageMainClass === 'page_404' ||
    document.body.classList.contains('page_404')
  )
}

/**
 * 전역 404(`mainClass: page_404`, `*` 라우트)에서 상단 GNB·Publishing 탭의 `active` 표시를 끕니다.
 * HTML 문서에만 국한되지 않고, 미등록 경로 어디서든 동일하게 적용됩니다.
 * `PageMeta` / `usePageMeta`의 `dataset`·`page-meta-change`에 맞춥니다.
 */
export function useSuppressTopNavActive() {
  const { pathname } = useLocation()
  const [suppress, setSuppress] = useState(readSuppressFromBody)

  useEffect(() => {
    const sync = () => setSuppress(readSuppressFromBody())
    sync()
    window.addEventListener('page-meta-change', sync)
    return () => window.removeEventListener('page-meta-change', sync)
  }, [pathname])

  return suppress
}
