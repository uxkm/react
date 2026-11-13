'use client'

import { useCallback, useState, useSyncExternalStore } from 'react' // React

const DISMISSAL_EVENT = 'app:daily-dismissal'
const serverSnapshot = () => 0

function readUntil (key: string) {
  try {
    const until = Number(window.localStorage.getItem(key))
    return Number.isFinite(until) && until > Date.now() ? until : 0
  } catch { return 0 }
}

/** 현재 닫기 또는 브라우저 현지 시간의 다음 자정까지 숨김. 탭 간 변경·자정 만료도 반영한다. */
export function useDailyDismissal (storageKey: string) {
  const [closedKey, setClosedKey] = useState<string | null>(null)
  const getSnapshot = useCallback(() => readUntil(storageKey), [storageKey])
  const subscribe = useCallback((listener: () => void) => {
    let timer: ReturnType<typeof setTimeout>
    function refresh () {
      clearTimeout(timer)
      listener()
      const until = readUntil(storageKey)
      if (until) timer = setTimeout(refresh, Math.min(2147483647, Math.max(1, until - Date.now() + 25)))
    }
    function storageChanged (event: StorageEvent) {
      if (event.key == null || event.key === storageKey) refresh()
    }
    refresh()
    window.addEventListener('storage', storageChanged)
    window.addEventListener(DISMISSAL_EVENT, refresh)
    return () => {
      clearTimeout(timer)
      window.removeEventListener('storage', storageChanged)
      window.removeEventListener(DISMISSAL_EVENT, refresh)
    }
  }, [storageKey])
  const hiddenUntil = useSyncExternalStore(subscribe, getSnapshot, serverSnapshot)
  const dismiss = useCallback((forToday: boolean) => {
    if (forToday) {
      const now = new Date()
      const until = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1).getTime()
      try {
        window.localStorage.setItem(storageKey, String(until))
        window.dispatchEvent(new Event(DISMISSAL_EVENT))
        return
      } catch { /* 저장이 제한된 환경에서도 현재 화면은 닫는다. */ }
    }
    setClosedKey(storageKey)
  }, [storageKey])
  return { isHidden: hiddenUntil > 0 || closedKey === storageKey, dismiss }
}
