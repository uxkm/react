'use client'

import { useEffect } from 'react' // effect 훅
import { useLatestRef } from '../react/useLatestRef' // Latest Ref 훅

/** 열린 동안만 타이머를 유지한다. 콜백 변경은 경과 시간을 초기화하지 않는다. */
export function useAutoClose (open: boolean, delay: number | undefined, onClose: () => void) {
  const closeRef = useLatestRef(onClose)

  useEffect(() => {
    if (!open || delay === undefined || !Number.isFinite(delay) || delay <= 0) return

    const deadline = Date.now() + delay
    let timer: ReturnType<typeof setTimeout>
    const schedule = () => {
      const remaining = deadline - Date.now()
      if (remaining <= 0) closeRef.current()
      else timer = setTimeout(schedule, Math.min(remaining, 2147483647))
    }
    schedule()
    return () => clearTimeout(timer)
  }, [open, delay, closeRef])
}
