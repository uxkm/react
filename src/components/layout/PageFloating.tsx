'use client'

import { useLayoutEffect, type ReactNode } from 'react'
import { useLayoutSlotSync, useSetPageFloatingOptions, type PageFloatingOptions } from './LayoutContext'
import { FloatingItem, type FloatingSlots } from '@/comp/ui/Floating'

export interface PageFloatingProps {
  /** 공통 플로팅 뒤에 추가할 페이지 전용 Floating.Item 목록 */
  children?: ReactNode
  /** 페이지 전용 커스텀 UI. key가 meta.floatingItems와 order의 항목 이름이다. */
  slots?: FloatingSlots
  /** 이 페이지에서만 사용할 경계·여백·정렬·좌표 콜백. 공통 설정보다 우선한다. */
  floatingProps?: PageFloatingOptions
}

/** 페이지 전용 버튼·UI를 AppLayout의 공통 플로팅에 추가한다. */
export function PageFloating ({ children, slots, floatingProps }: PageFloatingProps) {
  const setOptions = useSetPageFloatingOptions()
  useLayoutEffect(() => {
    setOptions?.(floatingProps)
    return () => setOptions?.(undefined)
  }, [setOptions, floatingProps])
  useLayoutSlotSync((setSlot) => {
    setSlot('floating-items', children || slots ? <>{children}{Object.entries(slots || {}).map(([name, node]) => (
      <FloatingItem key={name} name={name} data-floating-slot={name}>{node}</FloatingItem>
    ))}</> : null)
  }, ['floating-items'])
  return null
}

export default PageFloating
