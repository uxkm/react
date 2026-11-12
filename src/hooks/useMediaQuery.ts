'use client'

import { useSyncExternalStore } from 'react'

function subscribeMediaQuery (query: string, onStoreChange: () => void) {
  const mql = window.matchMedia(query)
  mql.addEventListener('change', onStoreChange)
  return () => mql.removeEventListener('change', onStoreChange)
}

/**
 * matchMedia 구독. 서버·첫 hydration 은 false.
 * @param query 예: '(min-width: 1440px)'
 */
export function useMediaQuery (query: string): boolean {
  return useSyncExternalStore(
    (onStoreChange) => subscribeMediaQuery(query, onStoreChange),
    () => window.matchMedia(query).matches,
    () => false
  )
}

/** viewport 최소 너비(px) 이상인지 */
export function useMinWidth (px: number): boolean {
  return useMediaQuery(`(min-width: ${Math.max(0, Math.round(px))}px)`)
}
