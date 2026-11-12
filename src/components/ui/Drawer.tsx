'use client'

/**
 * 서랍(Drawer) 패널.
 * 화면 가장자리(left/right/top/bottom)에서 슬라이드로 열리는 오버레이.
 * bottom + draggable 이면 상단 핸들 바로 드래그(닫기·확장)한다.
 * adaptive 이면 ≥BP 가운데 모달형, <BP 하단 시트로 전환한다.
 */
import {
  useEffect,
  useRef,
  useState,
  type HTMLAttributes,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
  type TransitionEvent
} from 'react'
import { useAutoClose } from '@/hooks/useAutoClose'
import { useMinWidth } from '@/hooks/useMediaQuery'
import {
  ADAPTIVE_BREAKPOINT_DEFAULT,
  resolveAdaptiveBreakpoint,
  type AdaptiveBreakpoint
} from '@/lib/breakpoints'
import { classNames } from '@/utils/classNames'
import { hasNodes } from '@/utils/react'
import { Icon } from './Icon'

/** 서랍이 붙는 방향 */
export type DrawerPlacement = 'left' | 'right' | 'top' | 'bottom'

/** 실제 렌더·애니메에 쓰는 배치 (adaptive center 포함) */
export type DrawerActivePlacement = DrawerPlacement | 'center'

/** 열림/닫힘 슬라이드 단계 */
type Phase = 'hidden' | 'enter-start' | 'enter' | 'shown' | 'leave'

/** 가로·세로·센터 패널 전환 시간(ms). CSS 토큰보다 약간 여유 */
const PANEL_MS: Record<DrawerActivePlacement, number> = {
  left: 360,
  right: 360,
  top: 400,
  bottom: 400,
  center: 320
}

const DISMISS_DISTANCE = 0.35
const DISMISS_VELOCITY = 0.5
const EXPAND_DISTANCE = 72

/** 서랍이 받는 값 */
export interface DrawerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  open?: boolean
  /** 비제어 초기 열림 */
  defaultOpen?: boolean
  /** 마운트 시 열림. open 이 없을 때 defaultOpen 보다 우선한다 */
  openOnLoad?: boolean
  /** 열린 후 자동 닫힘 시간(ms). 생략하거나 0 이하이면 사용하지 않는다 */
  autoCloseDelay?: number
  title?: ReactNode
  footer?: ReactNode
  placement?: DrawerPlacement
  /**
   * true 이면 viewport ≥ adaptiveBreakpoint 에서 가운데 모달형 패널,
   * 미만에서 placement 를 무시하고 하단 시트로 전환한다.
   */
  adaptive?: boolean
  /**
   * adaptive 전환 기준. 숫자(px) 또는 pc-sm|pc-md|pc-lg|pc-xl.
   * 기본 'pc-md'(1440).
   */
  adaptiveBreakpoint?: AdaptiveBreakpoint
  /** bottom 전용. true 이면 상단 핸들 바를 보여주고 드래그로 닫기·확장 */
  draggable?: boolean
  /** bottom + draggable 확장 상태(제어) */
  expanded?: boolean
  /** 비제어 초기 확장 */
  defaultExpanded?: boolean
  /** 확장 상태가 바뀔 때 호출 */
  onExpandedChange?: (expanded: boolean) => void
  /** 열림이 바뀔 때 호출(닫힐 때 false). onClose 와 함께 쓸 수 있다 */
  onOpenChange?: (open: boolean) => void
  /** 배경 dim 표시 및 배경 클릭 닫기. 기본 true */
  backdrop?: boolean
  staticDemo?: boolean
  onClose?: () => void
}

/**
 * 화면 가장자리에서 나오는 패널.
 * open 표시 여부, placement 방향, title 제목, footer 아래 버튼.
 * bottom 에서 draggable 이면 핸들 바로 드래그한다.
 * adaptive 이면 넓은 뷰포트에서 가운데 모달형으로 바뀐다.
 */
export function Drawer ({
  open: openProp,
  defaultOpen = false,
  openOnLoad,
  autoCloseDelay,
  title,
  footer,
  placement = 'right',
  adaptive = false,
  adaptiveBreakpoint = ADAPTIVE_BREAKPOINT_DEFAULT,
  draggable = false,
  expanded: expandedProp,
  defaultExpanded = false,
  onExpandedChange,
  onOpenChange,
  backdrop = true,
  staticDemo = false,
  className,
  children,
  onClose,
  ...rest
}: DrawerProps) {
  const panelRef = useRef<HTMLDivElement>(null)
  /** 닫힘 애니메이션 동안 placement 가 기본값으로 바뀌어도 열렸던 방향 유지 */
  const [retainedPlacement, setRetainedPlacement] = useState<DrawerActivePlacement>(placement)
  /** 드래그로 닫을 때 현재 offset → 100% 로 이어서 애니메이트 */
  const dragDismissRef = useRef(false)
  const dragRef = useRef({
    active: false,
    pointerId: -1,
    startY: 0,
    lastY: 0,
    lastT: 0,
    dy: 0,
    vel: 0,
    height: 0
  })

  const openControlled = openProp !== undefined
  const [innerOpen, setInnerOpen] = useState(openOnLoad ?? defaultOpen)
  const open = openControlled ? openProp : innerOpen

  const bpPx = resolveAdaptiveBreakpoint(adaptiveBreakpoint)
  const isWide = useMinWidth(bpPx)
  const effectivePlacement: DrawerActivePlacement = adaptive
    ? (isWide ? 'center' : 'bottom')
    : placement

  const [phase, setPhase] = useState<Phase>(() => (
    open ? (staticDemo ? 'shown' : 'enter-start') : 'hidden'
  ))
  const expandedControlled = expandedProp !== undefined
  const [innerExpanded, setInnerExpanded] = useState(defaultExpanded)
  const expanded = expandedControlled ? expandedProp : innerExpanded
  const expandedRef = useRef(expanded)
  const [dragging, setDragging] = useState(false)
  const wasOpenRef = useRef(open)

  const setExpanded = (next: boolean) => {
    if (!expandedControlled) setInnerExpanded(next)
    onExpandedChange?.(next)
  }

  const requestClose = () => {
    if (!openControlled) setInnerOpen(false)
    onOpenChange?.(false)
    onClose?.()
  }

  useAutoClose(open, autoCloseDelay, requestClose)

  // adaptive 리사이즈·placement 변경 시 즉시 전환 (열림 중 포함)
  if ((open || phase === 'hidden') && retainedPlacement !== effectivePlacement) {
    setRetainedPlacement(effectivePlacement)
  }
  const activePlacement = open || phase === 'hidden' ? effectivePlacement : retainedPlacement
  const showHandle = draggable && activePlacement === 'bottom'
  const canDrag = showHandle && !staticDemo

  // props에서 파생한 애니메이션 단계는 렌더가 커밋되기 전에 맞춘다.
  const [observed, setObserved] = useState({ open, staticDemo })
  if (observed.open !== open || observed.staticDemo !== staticDemo) {
    setObserved({ open, staticDemo })
    if (staticDemo) setPhase(open ? 'shown' : 'hidden')
    else if (open) setPhase('enter-start')
    else if (phase !== 'hidden') setPhase('leave')
    if (!staticDemo && observed.open && !open && !expandedControlled) setInnerExpanded(false)
  }

  useEffect(() => {
    if (open) dragDismissRef.current = false
    else if (!staticDemo && wasOpenRef.current && expandedRef.current) onExpandedChange?.(false)
    wasOpenRef.current = open
    expandedRef.current = expanded
  }, [open, staticDemo, expanded, onExpandedChange])

  // enter-start → 다음 프레임에 is-open 을 붙여 슬라이드 인
  useEffect(() => {
    if (phase !== 'enter-start') return
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => setPhase('enter'))
    })
    return () => cancelAnimationFrame(id)
  }, [phase])

  // leave: 드래그 닫기는 현재 위치에서 translateY(100%) 로 이어 그림 (0으로 리셋하면 깜빡임)
  useEffect(() => {
    if (phase !== 'leave') return
    const panel = panelRef.current
    if (!panel) return

    if (dragDismissRef.current && activePlacement === 'bottom') {
      const from = Math.max(0, dragRef.current.dy)
      panel.style.transform = `translateY(${from}px)`
      void panel.offsetHeight
      const id = requestAnimationFrame(() => {
        panel.style.transform = 'translateY(100%)'
      })
      return () => cancelAnimationFrame(id)
    }

    panel.style.transform = ''
  }, [phase, activePlacement])

  // transitionend 누락 대비 타임아웃
  useEffect(() => {
    if (phase !== 'enter' && phase !== 'leave') return
    const timer = window.setTimeout(() => {
      setPhase((current) => {
        if (current === 'enter') return 'shown'
        if (current === 'leave') return 'hidden'
        return current
      })
    }, PANEL_MS[activePlacement])
    return () => window.clearTimeout(timer)
  }, [phase, activePlacement])

  // 완전히 숨긴 뒤 인라인 transform 정리
  useEffect(() => {
    if (phase !== 'hidden') return
    dragDismissRef.current = false
    const panel = panelRef.current
    if (panel) panel.style.transform = ''
  }, [phase])

  const snapPanelTo = (next: string) => {
    const panel = panelRef.current
    if (!panel) return
    const from = `translateY(${Math.max(0, dragRef.current.dy)}px)`
    panel.style.transform = from
    void panel.offsetHeight
    requestAnimationFrame(() => {
      panel.style.transform = next
    })
  }

  const endDrag = (options: { dismiss?: boolean; expand?: boolean; collapse?: boolean }) => {
    const drag = dragRef.current
    drag.active = false
    setDragging(false)

    if (options.dismiss) {
      // transform 을 0 으로 지우지 않음 — leave 에서 현재 offset → 100% 이어감
      dragDismissRef.current = true
      requestClose()
      return
    }
    if (options.expand) setExpanded(true)
    if (options.collapse) setExpanded(false)
    snapPanelTo('translateY(0px)')
  }

  const capturePointer = (target: HTMLElement, pointerId: number) => {
    try {
      target.setPointerCapture(pointerId)
      return true
    } catch {
      // 이미 끝난 포인터·비활성 id — 캡처 없이 드래그 진행
      return false
    }
  }

  const releasePointer = (target: HTMLElement, pointerId: number) => {
    try {
      if (target.hasPointerCapture(pointerId)) {
        target.releasePointerCapture(pointerId)
      }
    } catch {
      // 포인터가 이미 해제된 경우 무시
    }
  }

  const handlePointerDown = (event: ReactPointerEvent<HTMLElement>) => {
    if (!canDrag || phase === 'leave' || phase === 'enter-start') return
    if (event.pointerType === 'mouse' && event.button !== 0) return
    // 마우스인데 버튼이 이미 떼어진 합성/지연 이벤트는 캡처 불가
    if (event.pointerType === 'mouse' && event.buttons === 0) return
    // 닫기·링크 등 인터랙티브 요소에서는 드래그 시작하지 않음
    if ((event.target as Element | null)?.closest?.('.drawer_close, .drawer_extra, a, button:not(.drawer_handle)')) {
      return
    }
    const panel = panelRef.current
    if (!panel) return

    capturePointer(event.currentTarget, event.pointerId)
    dragRef.current = {
      active: true,
      pointerId: event.pointerId,
      startY: event.clientY,
      lastY: event.clientY,
      lastT: event.timeStamp,
      dy: 0,
      vel: 0,
      height: panel.offsetHeight
    }
    setDragging(true)
  }

  const handlePointerMove = (event: ReactPointerEvent<HTMLElement>) => {
    const drag = dragRef.current
    if (!drag.active || drag.pointerId !== event.pointerId) return
    const panel = panelRef.current
    if (!panel) return

    let dy = event.clientY - drag.startY
    // 축소 상태에서의 위로 드래그는 저항, 확장 상태에서는 아래로만 추적
    if (!expanded && dy < 0) dy *= 0.25
    if (expanded && dy < 0) dy = 0
    dy = Math.min(Math.max(dy, expanded ? 0 : -EXPAND_DISTANCE), drag.height)

    drag.vel = (event.clientY - drag.lastY) / Math.max(1, event.timeStamp - drag.lastT)
    drag.lastY = event.clientY
    drag.lastT = event.timeStamp
    drag.dy = dy
    panel.style.transform = `translateY(${Math.max(0, dy)}px)`
  }

  const handlePointerUp = (event: ReactPointerEvent<HTMLElement>) => {
    const drag = dragRef.current
    if (!drag.active || drag.pointerId !== event.pointerId) return

    releasePointer(event.currentTarget, event.pointerId)

    const dy = drag.dy
    const vel = drag.vel
    const height = drag.height || 1

    if (dy > height * DISMISS_DISTANCE || vel > DISMISS_VELOCITY) {
      endDrag({ dismiss: true })
      return
    }
    if (expanded && dy > EXPAND_DISTANCE) {
      endDrag({ collapse: true })
      return
    }
    if (!expanded && (dy < -EXPAND_DISTANCE * 0.6 || vel < -DISMISS_VELOCITY)) {
      endDrag({ expand: true })
      return
    }
    endDrag({})
  }

  const handlePanelTransitionEnd = (event: TransitionEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget) return
    const prop = event.propertyName
    if (prop !== 'transform' && prop !== 'height' && prop !== 'opacity') return
    if (phase === 'enter' && (prop === 'transform' || prop === 'opacity')) setPhase('shown')
    if (phase === 'leave' && (prop === 'transform' || prop === 'opacity')) {
      dragDismissRef.current = false
      const panel = panelRef.current
      if (panel) panel.style.transform = ''
      setPhase('hidden')
    }
    // 드래그 스냅백 후 인라인 스타일 제거 → 이후 CSS 전환과 충돌 방지
    if ((phase === 'shown' || phase === 'enter') && prop === 'transform') {
      const panel = panelRef.current
      if (panel && !dragRef.current.active && !dragDismissRef.current) {
        panel.style.transform = ''
      }
    }
  }

  if (phase === 'hidden') return null

  const dragHandlers = canDrag
    ? {
        onPointerDown: handlePointerDown,
        onPointerMove: handlePointerMove,
        onPointerUp: handlePointerUp,
        onPointerCancel: handlePointerUp
      }
    : undefined

  return (
    <div
      {...rest}
      className={classNames(
        'drawer',
        (phase === 'enter' || phase === 'shown') && 'is-open',
        (phase === 'enter-start' || phase === 'enter') && 'is-opening',
        phase === 'leave' && 'is-closing',
        staticDemo && 'drawer_demo-static',
        adaptive && 'drawer_adaptive',
        adaptive && activePlacement === 'center' && 'drawer_adaptive-center',
        className
      )}
      data-drawer-backdrop={backdrop}
      data-adaptive={adaptive || undefined}
      data-adaptive-breakpoint={adaptive ? String(bpPx) : undefined}
      role="dialog"
      aria-modal="true"
    >
      {backdrop && <div className="drawer_backdrop" aria-hidden="true" onClick={requestClose} />}
      <div
        ref={panelRef}
        className={classNames(
          'drawer_panel',
          'drawer_placement-' + activePlacement,
          showHandle && 'drawer_draggable',
          expanded && 'is-expanded',
          dragging && 'is-dragging'
        )}
        onTransitionEnd={handlePanelTransitionEnd}
      >
        {showHandle && (
          <button
            type="button"
            className="drawer_handle"
            aria-label="서랍 끌어 조절"
            aria-expanded={expanded}
            {...dragHandlers}
          >
            <span className="drawer_handle-bar" />
          </button>
        )}
        <div className="drawer_header" {...(canDrag ? dragHandlers : undefined)}>
          {hasNodes(title)
            ? <strong className="drawer_title">{title}</strong>
            : <span className="drawer_title" />}
          <button type="button" className="drawer_close" aria-label="닫기" onClick={requestClose}>
            <Icon name="close" size="var(--drawer-close-icon-size)" />
          </button>
        </div>
        <div className="drawer_body">{children}</div>
        {hasNodes(footer) && <div className="drawer_footer drawer_footer-end">{footer}</div>}
      </div>
    </div>
  )
}

export default Drawer
