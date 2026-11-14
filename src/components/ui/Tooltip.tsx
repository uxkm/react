'use client'

/**
 * 툴팁.
 * 대상 위·아래·좌·우에 짧은 도움말을 띄운다. 말풍선 화살표·방향을 지원한다.
 */

import {
  useState, // 상태 훅
  useId, // 설명 ID
  useRef, // 트리거 참조
  useLayoutEffect, // 실제 초점 대상에 설명 연결
  type CSSProperties, // CSSProperties 타입
  type FocusEvent, // FocusEvent 타입
  type HTMLAttributes, // HTMLAttributes 타입
  type MouseEvent, // MouseEvent 타입
  type ReactNode // ReactNode 타입
} from 'react' // React
import { useAutoClose } from '@/hooks/interaction/useAutoClose' // Auto Close 훅
import { useEscapeKey } from '@/hooks/interaction/useEscapeKey' // 툴팁 닫기
import { classNames } from '@/utils/style/classNames' // 조건부 className 조합

/** 툴팁 방향 */
export type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right'

/** 툴팁이 받는 값 */
export interface TooltipProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'content' | 'style'> {
  content: ReactNode
  placement?: TooltipPlacement
  trigger?: ReactNode
  /** true 이면 tooltip_arrow 를 표시한다. 기본 true. false 이면 tooltip_no-arrow */
  arrow?: boolean
  /**
   * 화살표 위치(가장자리 기준 %). 넘기면 tooltip_arrow-anchor-mixed 와
   * --tooltip-arrow-position 이 적용된다. 예: '25%' · 50
   */
  arrowPosition?: string | number
  /** 넘기면 열림 상태를 페이지가 제어한다 */
  open?: boolean
  /** 비제어 초기 열림 */
  defaultOpen?: boolean
  /** 마운트 시 열림. open 이 없을 때 defaultOpen 보다 우선한다 */
  openOnLoad?: boolean
  /** 열린 후 자동 닫힘 시간(ms). 생략하거나 0 이하이면 사용하지 않는다 */
  autoCloseDelay?: number
  /** 열림 상태가 바뀔 때 호출 */
  onOpenChange?: (open: boolean) => void
  style?: CSSProperties
}

/**
 * 대상 위에 잠깐 뜨는 도움말.
 * content 문구, placement 방향, arrow 화살표.
 * open · onOpenChange 로 페이지에서 표시를 제어한다.
 */
export function Tooltip ({
  content,
  placement = 'bottom',
  trigger,
  arrow = true,
  arrowPosition,
  open,
  defaultOpen = false,
  openOnLoad,
  autoCloseDelay,
  className,
  style,
  children,
  onOpenChange,
  onMouseEnter,
  onMouseLeave,
  onFocus,
  onBlur,
  ...rest
}: TooltipProps) {
  const id = useId()
  const rootRef = useRef<HTMLSpanElement>(null)
  const triggerRef = useRef<HTMLSpanElement>(null)
  const controlled = open !== undefined
  const [innerOpen, setInnerOpen] = useState(openOnLoad ?? defaultOpen)
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  const shown = controlled ? open : innerOpen

  const setShown = (next: boolean) => {
    if (!controlled) setInnerOpen(next)
    onOpenChange?.(next)
  }

  useAutoClose(shown, autoCloseDelay, () => setShown(false))
  useEscapeKey(rootRef, () => setShown(false), shown)

  useLayoutEffect(() => {
    const container = triggerRef.current
    if (!container) return
    const target = container.querySelector<HTMLElement>('button, a[href], input, select, textarea, [tabindex]') ?? container
    const original = target.getAttribute('aria-describedby')
    target.setAttribute('aria-describedby', [original, id].filter(Boolean).join(' '))
    if (target === container) container.tabIndex = 0
    return () => {
      if (original === null) target.removeAttribute('aria-describedby')
      else target.setAttribute('aria-describedby', original)
    }
  }, [id, trigger, children])

  /** hover · focus 중 하나라도 있으면 열림 유지 */
  const syncPointerOpen = (nextHovered: boolean, nextFocused: boolean) => {
    setHovered(nextHovered)
    setFocused(nextFocused)
    setShown(nextHovered || nextFocused)
  }

  const arrowPos = arrowPosition == null || arrowPosition === ''
    ? null
    : (typeof arrowPosition === 'number' ? `${arrowPosition}%` : String(arrowPosition))

  return (
    <span
      {...rest}
      role={rest.role ?? (rest['aria-label'] ? 'group' : undefined)}
      ref={rootRef}
      className={classNames(
        'tooltip',
        shown && 'is-open',
        placement !== 'bottom' && 'tooltip_placement-' + placement,
        !arrow && 'tooltip_no-arrow',
        arrowPos && 'tooltip_arrow-anchor-mixed',
        className
      )}
      style={{
        ...style,
        ...(arrowPos ? { ['--tooltip-arrow-position' as string]: arrowPos } : null)
      }}
      onMouseEnter={(event: MouseEvent<HTMLSpanElement>) => {
        syncPointerOpen(true, focused)
        onMouseEnter?.(event)
      }}
      onMouseLeave={(event: MouseEvent<HTMLSpanElement>) => {
        syncPointerOpen(false, focused)
        onMouseLeave?.(event)
      }}
      onFocus={(event: FocusEvent<HTMLSpanElement>) => {
        syncPointerOpen(hovered, true)
        onFocus?.(event)
      }}
      onBlur={(event: FocusEvent<HTMLSpanElement>) => {
        syncPointerOpen(hovered, false)
        onBlur?.(event)
      }}
    >
      <span ref={triggerRef} className="tooltip_trigger">{trigger ?? children}</span>
      <span id={id} className="tooltip_bubble" role="tooltip" aria-hidden={!shown && !className?.split(' ').includes('is-open')}>
        {arrow && <span className="tooltip_arrow" aria-hidden="true" />}
        {content}
      </span>
    </span>
  )
}

export default Tooltip
