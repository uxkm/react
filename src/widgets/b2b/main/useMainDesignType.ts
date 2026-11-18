'use client'

import { useSyncExternalStore } from 'react'
import { usePathname } from 'next/navigation'

const subscribe = (notify: () => void) => {
  window.addEventListener('popstate', notify)
  return () => window.removeEventListener('popstate', notify)
}
const snapshot = () => {
  const type = new URLSearchParams(window.location.search).get('type')
  return type === 'typeA' || type === 'typeB' ? type : 'typeVideo'
}
const serverSnapshot = () => 'typeVideo' as const

/** 메인은 기본 영상 배경을 사용하고, typeA와 typeB는 쿼리로 선택합니다. */
export function useMainPageType () {
  usePathname()
  return useSyncExternalStore(subscribe, snapshot, serverSnapshot)
}

/** 공통 헤더·푸터와 본문은 typeVideo에서도 typeB 디자인을 사용합니다. */
export function useMainDesignType () {
  return useMainPageType() === 'typeA' ? 'typeA' : 'typeB'
}
