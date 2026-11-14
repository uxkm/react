'use client'

import { useRef } from 'react'
import { Snackbar, type SnackbarProps } from '@/comp/ui/Snackbar'
import { useLayoutSlotSync } from './LayoutContext'
import { classNames } from '@/utils/style/classNames'

export interface PageSnackbarProps extends SnackbarProps {
  /** 하단 중앙 고정 영역의 추가 클래스. */
  regionClassName?: string
}

/** 어느 페이지에서든 호출하는 하단 중앙 스낵바. DOM·탭 순서는 레이아웃 마지막이다. */
export function PageSnackbar ({ regionClassName, onFocusCapture, onClose, ...props }: PageSnackbarProps) {
  const rootRef = useRef<HTMLDivElement | null>(null)
  const previousFocus = useRef<HTMLElement | null>(null)

  useLayoutSlotSync((setSlot) => {
    setSlot('snackbar', (
      <div className={classNames('snackbar_region', 'snackbar_region-bottom-center', 'page-snackbar', regionClassName)} data-page-snackbar="">
        <Snackbar
          {...props}
          onFocusCapture={(event) => {
            rootRef.current = event.currentTarget
            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
              previousFocus.current = event.relatedTarget instanceof HTMLElement ? event.relatedTarget : null
            }
            onFocusCapture?.(event)
          }}
          onClose={() => {
            // 자동 닫힘·외부 제어 시 사용자의 현재 초점은 유지한다.
            if (rootRef.current?.contains(document.activeElement)) {
              const destination = previousFocus.current?.isConnected ? previousFocus.current : document.querySelector<HTMLElement>('main')
              destination?.focus({ preventScroll: true })
            }
            onClose?.()
          }}
        />
      </div>
    ))
  }, ['snackbar'])
  return null
}

export default PageSnackbar
