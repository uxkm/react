'use client'

import { useCallback, useEffect, useRef, useState } from 'react' // 훅

/**
 * 페이지 로딩 상태.
 * - loading: PageLoading 에 그대로 전달
 * - run(task): 비동기 작업 동안 자동으로 loading true → false
 *
 * @example
 * const { loading, run } = usePageLoading(true)
 * useEffect(() => {
 *   run(async () => {
 *     const res = await fetch('/api/b2b/main')
 *     if (!res.ok) throw new Error('fetch failed')
 *     return res.json()
 *   })
 * }, [run])
 */
export function usePageLoading (initialLoading = false) {
  const [loading, setLoading] = useState(initialLoading)
  const seqRef = useRef(0)
  const mountedRef = useRef(true)

  useEffect(() => {
    mountedRef.current = true
    return () => {
      mountedRef.current = false
    }
  }, [])

  const run = useCallback(async <T,>(task: () => Promise<T>) => {
    const seq = ++seqRef.current
    setLoading(true)
    try {
      return await task()
    } finally {
      if (mountedRef.current && seqRef.current === seq) setLoading(false)
    }
  }, [])

  return { loading, setLoading, run }
}

export default usePageLoading
