'use client'

/**
 * 모달 대화상자.
 * open 시 오버레이와 제목·본문·푸터를 중앙에 띄운다. 닫기 버튼은 Icon 을 쓴다.
 * adaptive 이면 브레이크포인트 미만에서 하단 바텀시트로 전환한다.
 */

import { useId, useRef, useState, type DialogHTMLAttributes, type ReactNode, type RefObject } from 'react' // React
import { useAutoClose } from '@/hooks/interaction/useAutoClose' // Auto Close 훅
import { useModalDialog } from '@/hooks/interaction/useModalDialog' // 모달 초점·스크롤 관리
import { useMinWidth } from '@/hooks/layout/useMediaQuery' // Min Width 훅
import {
  ADAPTIVE_BREAKPOINT_DEFAULT, // ADAPTIVE BREAKPOINT DEFAULT 컴포넌트
  resolveAdaptiveBreakpoint, // resolve Adaptive Breakpoint
  type AdaptiveBreakpoint // AdaptiveBreakpoint 타입
} from '@/lib/layout/breakpoints' // 라이브러리/유틸 · breakpoints
import { classNames } from '@/utils/style/classNames' // 조건부 className 조합
import { hasNodes } from '@/utils/react' // has Nodes
import { Icon } from './Icon' // Icon 컴포넌트

/** 모달이 받는 값. open 일 때만 보인다 */
export interface ModalProps extends Omit<DialogHTMLAttributes<HTMLDialogElement>, 'title'> {
  open?: boolean
  /** 비제어 초기 열림 */
  defaultOpen?: boolean
  /** 마운트 시 열림. open 이 없을 때 defaultOpen 보다 우선한다 */
  openOnLoad?: boolean
  /** 열린 후 자동 닫힘 시간(ms). 생략하거나 0 이하이면 사용하지 않는다 */
  autoCloseDelay?: number
  title?: ReactNode
  /** 초기 초점 대상. 생략하면 제목, 제목이 없으면 전체 패널에 초점을 둡니다. */
  initialFocusRef?: RefObject<HTMLElement | null>
  footer?: ReactNode
  size?: 'sm' | 'md' | 'lg'
  /**
   * true 이면 viewport ≥ adaptiveBreakpoint 에서 가운데 모달,
   * 미만에서 하단 바텀시트로 전환한다. 생략 시 기존 가운데 모달만 유지.
   */
  adaptive?: boolean
  /**
   * adaptive 전환 기준. 숫자(px) 또는 pc-sm|pc-md|pc-lg|pc-xl.
   * 기본 'pc-md'(1440).
   */
  adaptiveBreakpoint?: AdaptiveBreakpoint
  /** 배경 dim 표시 및 배경 클릭 닫기. 기본 true */
  backdrop?: boolean
  staticDemo?: boolean
  /** 열림이 바뀔 때 호출(닫힐 때 false). onClose 와 함께 쓸 수 있다 */
  onOpenChange?: (open: boolean) => void
  onClose?: () => void
}

/**
 * 화면 가운데 대화상자.
 * open 이 참일 때 보여 준다. title 제목, footer 아래 버튼, size 로 너비를 고른다.
 * adaptive 이면 좁은 뷰포트에서 바텀시트로 바뀐다.
 * 오버레이나 닫기 버튼(Icon close)을 누르면 onOpenChange(false) · onClose 가 호출된다.
 */
export function Modal ({
  open: openProp,
  defaultOpen = false,
  openOnLoad,
  autoCloseDelay,
  title,
  initialFocusRef,
  footer,
  size = 'md',
  adaptive = false,
  adaptiveBreakpoint = ADAPTIVE_BREAKPOINT_DEFAULT,
  backdrop = true,
  staticDemo = false,
  className,
  children,
  onOpenChange,
  onClose,
  onKeyDown,
  onCancel,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  ...rest
}: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const titleId = useId()
  const controlled = openProp !== undefined
  const [innerOpen, setInnerOpen] = useState(openOnLoad ?? defaultOpen)
  const open = controlled ? openProp : innerOpen

  const bpPx = resolveAdaptiveBreakpoint(adaptiveBreakpoint)
  const isWide = useMinWidth(bpPx)
  const sheetMode = adaptive && !isWide

  const requestClose = () => {
    if (!controlled) setInnerOpen(false)
    onOpenChange?.(false)
    onClose?.()
  }

  useAutoClose(open, autoCloseDelay, requestClose)
  const handleKeyDown = useModalDialog(dialogRef, open && !staticDemo, initialFocusRef)

  if (!open) return null

  return (
    <dialog
      {...rest}
      ref={dialogRef}
      open={staticDemo || undefined}
      className={classNames(
        'modal',
        'is-open',
        staticDemo && 'modal_demo-static',
        size === 'sm' && 'modal_sm',
        size === 'lg' && 'modal_lg',
        adaptive && 'modal_adaptive',
        sheetMode && 'is-adaptive-sheet',
        className
      )}
      role="dialog"
      aria-modal={staticDemo ? undefined : true}
      aria-labelledby={ariaLabelledBy || (!ariaLabel && hasNodes(title) ? titleId : undefined)}
      aria-label={ariaLabel || (!ariaLabelledBy && !hasNodes(title) ? '대화상자' : undefined)}
      onKeyDown={(event) => {
        onKeyDown?.(event)
        handleKeyDown(event)
      }}
      onCancel={(event) => {
        if (event.target !== event.currentTarget) return
        onCancel?.(event)
        if (event.defaultPrevented) return
        event.preventDefault()
        requestClose()
      }}
      data-modal-backdrop={backdrop}
      data-adaptive={adaptive || undefined}
      data-adaptive-breakpoint={adaptive ? String(bpPx) : undefined}
    >
      {backdrop && <div className="modal_backdrop" aria-hidden="true" onClick={requestClose} />}
      <div className="modal_dialog" data-dialog-panel="" tabIndex={-1}>
        <div className="modal_header">
          {hasNodes(title)
            ? <h2 id={titleId} className="modal_title" data-dialog-title="" tabIndex={-1}>{title}</h2>
            : <span className="modal_title" />}
          <button type="button" className="modal_close" aria-label="닫기" onClick={requestClose}>
            <Icon name="close" size="var(--modal-close-icon-size)" />
          </button>
        </div>
        <div className="modal_body" tabIndex={0}>{children}</div>
        {hasNodes(footer) && <div className="modal_footer modal_footer-end">{footer}</div>}
      </div>
    </dialog>
  )
}

export default Modal
