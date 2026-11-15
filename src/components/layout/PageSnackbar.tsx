'use client'

import { useLayoutEffect, useRef, type ReactNode } from 'react'
import { Snackbar, type SnackbarProps } from '@/comp/ui/Snackbar'
import { useLayoutSlotSync } from './LayoutContext'
import { classNames } from '@/utils/style/classNames'

export interface PageSnackbarProps extends SnackbarProps {
  /** 하단 중앙 고정 영역의 추가 클래스. */
  regionClassName?: string
  /** 표시 중 스낵바 높이와 하단 간격만큼 푸터 아래 공간을 확보한다. 기본 false. */
  reserveFooterSpace?: boolean
}

function SnackbarRegion ({ reserveFooterSpace, className, children }: {
  reserveFooterSpace: boolean
  className?: string
  children: ReactNode
}) {
  const regionRef = useRef<HTMLDivElement | null>(null)

  useLayoutEffect(() => {
    const region = regionRef.current
    const layout = region?.closest<HTMLElement>('.app-layout_tree')
    if (!reserveFooterSpace || !region || !layout) return

    const measure = () => {
      const height = region.getBoundingClientRect().height
      const bottom = Number.parseFloat(getComputedStyle(region).bottom) || 0
      layout.style.setProperty('--page-snackbar-footer-space', `${height > 0 ? height + bottom : 0}px`)
    }
    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(region)
    window.addEventListener('resize', measure)
    return () => {
      observer.disconnect()
      window.removeEventListener('resize', measure)
      layout.style.removeProperty('--page-snackbar-footer-space')
    }
  }, [reserveFooterSpace])

  return (
    <div
      ref={regionRef}
      className={classNames('snackbar_region', 'snackbar_region-bottom-center', 'page-snackbar', className)}
      data-page-snackbar=""
      data-reserve-footer-space={reserveFooterSpace || undefined}
    >
      {children}
    </div>
  )
}

/** 어느 페이지에서든 호출하는 하단 중앙 스낵바. DOM·탭 순서는 레이아웃 마지막이다. */
export function PageSnackbar ({ regionClassName, reserveFooterSpace = false, onFocusCapture, onClose, ...props }: PageSnackbarProps) {
  const rootRef = useRef<HTMLDivElement | null>(null)
  const previousFocus = useRef<HTMLElement | null>(null)

  useLayoutSlotSync((setSlot) => {
    setSlot('snackbar', (
      <SnackbarRegion className={regionClassName} reserveFooterSpace={reserveFooterSpace}>
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
      </SnackbarRegion>
    ))
  }, ['snackbar'])
  return null
}

export default PageSnackbar
