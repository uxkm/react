'use client'

import { useSyncExternalStore } from 'react' // 외부 스토어 구독 훅

const subscribe = () => () => {}
const clientSnapshot = () => true
const serverSnapshot = () => false

/** 서버 HTML과 첫 hydration을 맞추고 클라이언트 전용 UI를 활성화한다. */
export function useHydrated () {
  return useSyncExternalStore(subscribe, clientSnapshot, serverSnapshot)
}
