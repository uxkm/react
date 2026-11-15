'use client'

import { useEffect, useState } from 'react'
import { formatExampleCode } from '@/screen/pub/lib/formatExampleCode'

/** 코드·언어가 바뀌거나 화면을 떠난 경우 이전 비동기 결과를 무시합니다. */
export function useFormattedExampleCode (code, fileName, enabled = true) {
  const source = String(code ?? '')
  const [result, setResult] = useState(null)
  useEffect(() => {
    if (!enabled) return
    let active = true
    formatExampleCode(source, fileName).then(value => {
      if (active) setResult({ source, fileName, value })
    })
    return () => { active = false }
  }, [source, fileName, enabled])
  const ready = result?.source === source && result?.fileName === fileName
  return { ready, value: ready ? result.value : source }
}
