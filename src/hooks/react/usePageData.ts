'use client'

import { useEffect, useRef, useState } from 'react' // 훅
import { usePageLoading } from './usePageLoading' // 페이지 로딩 훅

export type UsePageDataOptions = {
  /**
   * 페이지 폴더에서 추가로 불러올 로컬 작업.
   * 예) () => import('./data').then((m) => m.default)
   * 생략 시: 페이지가 이미 import 한 모듈 기준으로 마운트 완료만 반영
   */
  load?: () => Promise<unknown>
  /** false 이면 로딩 없이 바로 본문 */
  enabled?: boolean
}

/**
 * 페이지 로컬 모듈 준비 상태 (API 없음).
 * 페이지 폴더에서 호출(import)한 내용을 기준으로 loading 을 내려준다.
 *
 * @example
 * const { loading } = usePageData()
 *
 * @example
 * const { loading, data } = usePageData({
 *   load: () => import('./data').then((m) => m.default)
 * })
 */
export function usePageData (options: UsePageDataOptions = {}) {
  const enabled = options.enabled !== false
  const { loading, run, setLoading } = usePageLoading(enabled)
  const [data, setData] = useState<unknown>(null)
  const [error, setError] = useState<unknown>(null)
  const loadRef = useRef(options.load)
  loadRef.current = options.load

  useEffect(() => {
    if (!enabled) {
      setLoading(false)
      return undefined
    }

    let cancelled = false

    run(async () => {
      // 추가 로컬 로드가 있으면 실행, 없으면 페이지 import 모듈 준비(마운트)만 반영
      if (loadRef.current) return loadRef.current()
      return null
    })
      .then((json) => {
        if (cancelled) return null
        setData(json)
        setError(null)
        return json
      })
      .catch((err) => {
        if (cancelled) return null
        setError(err)
        console.error(err)
        return null
      })

    return () => {
      cancelled = true
    }
  }, [enabled, run, setLoading])

  return { loading, data, error }
}

export default usePageData
