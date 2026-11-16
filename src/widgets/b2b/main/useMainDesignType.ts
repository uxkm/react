'use client'

import { useSyncExternalStore } from 'react'
import { usePathname } from 'next/navigation'

const subscribe = (notify: () => void) => {
  window.addEventListener('popstate', notify)
  return () => window.removeEventListener('popstate', notify)
}
const snapshot = () => new URLSearchParams(window.location.search).get('type') === 'typeA' ? 'typeA' : 'typeB'
const serverSnapshot = () => 'typeB' as const

/** 기존 시안은 /b2b?type=typeA, 기본 화면은 typeB로 표시합니다. */
export function useMainDesignType () {
  usePathname()
  return useSyncExternalStore(subscribe, snapshot, serverSnapshot)
}
