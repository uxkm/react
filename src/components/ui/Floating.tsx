'use client'

/**
 * 플로팅(Floating).
 * 우측(또는 지정 모서리)에 고정되는 액션 스택.
 * BackTop · 커스텀 버튼을 담으며, order 로 순서를 바꾼다.
 * BackTop 이 안에 있으면 고정 기준·배치는 Floating 이 된다.
 */

import {
  Children,
  Fragment,
  createContext,
  isValidElement,
  useContext,
  useId,
  useMemo,
  useRef,
  type CSSProperties,
  type HTMLAttributes,
  type ReactElement,
  type ReactNode
} from 'react'
import { classNames } from '@/utils/classNames'
import { hasNodes } from '@/utils/react'
import { useHydrated } from '@/hooks/useHydrated'
import { useLayoutSlots } from '@/comp/layout/LayoutContext'
import type { FloatingVisibilityMeta } from '@/comp/shared/page-meta'
import { useFloatingPosition } from '@/hooks/useFloatingPosition'
import type { FloatingBoundary, FloatingPlacement, FloatingPositionResolver } from '@/comp/shared/floating-position'

export type { FloatingBoundary, FloatingPlacement, FloatingPositionContext, FloatingPositionResolver } from '@/comp/shared/floating-position'
export type FloatingSlots = Record<string, ReactNode>

/** 스택 방향 */
export type FloatingDirection =
  | 'column'
  | 'column-reverse'
  | 'row'
  | 'row-reverse'

/** Floating context — BackTop 등 자식이 중첩 여부를 알 때 사용 */
export interface FloatingContextValue {
  inside: boolean
  placement: FloatingPlacement
  itemVisibility: Record<string, boolean>
}

export const FloatingContext = createContext<FloatingContextValue>({
  inside: false,
  placement: 'bottom-right',
  itemVisibility: {}
})

/** Floating 안에 있는지 */
export function useFloatingContext () {
  return useContext(FloatingContext)
}

/** Floating props */
export interface FloatingProps extends HTMLAttributes<HTMLDivElement> {
  /** 플로팅 기본 표시 설정. 페이지 meta의 항목별 설정이 우선한다. */
  meta?: FloatingVisibilityMeta
  /** 모서리. 기본 bottom-right(우측 하단) */
  placement?: FloatingPlacement
  /** 하단 여백(px). top-* 이면 상단 여백으로 쓴다 */
  offsetBottom?: number
  /** 우측 여백(px). *-left 이면 좌측 여백으로 쓴다 */
  offsetRight?: number
  /** 아이템 간격(px). 기본 12 */
  gap?: number
  /** flex 방향. 기본 column(위→아래, 마지막이 하단) */
  direction?: FloatingDirection
  /**
   * Floating.Item name 배열(위→아래 또는 direction 기준 시작→끝).
   * 지정하면 해당 이름 순으로 재배치하고, 나머지 name 없는 아이템은 뒤에 붙인다.
   */
  order?: string[]
  /** 이름별 커스텀 UI. 이름은 order와 meta.floatingItems에도 사용한다. */
  slots?: FloatingSlots
  /** 기본 viewport 고정. footer 또는 선택자·요소·함수로 경계 위에서 멈춘다. */
  boundary?: FloatingBoundary
  /** 경계 상단과 플로팅 사이 간격(px). */
  boundaryGap?: number
  /** 기본 좌표를 사용자 정의 CSS 좌표로 보정한다. */
  getPosition?: FloatingPositionResolver
  children?: ReactNode
}

/** Floating.Item props */
export interface FloatingItemProps extends HTMLAttributes<HTMLDivElement> {
  /** order 배열·정렬에 쓰는 이름 */
  name?: string
  /** CSS order. 작을수록 direction 시작쪽에 가깝다 */
  order?: number
  /**
   * true 면 렌더하지 않아 스택 자리·gap 을 비우지 않는다.
   * BackTop 미표시와 같이, 숨긴 버튼 영역이 비어 보이지 않게 할 때 쓴다.
   */
  hidden?: boolean
  children?: ReactNode
}

function collectItems (children: ReactNode, keyPrefix = '') {
  const items: Array<{
    key: string
    name?: string
    node: ReactElement
  }> = []
  let index = 0
  Children.forEach(children, (child) => {
    if (!isValidElement(child)) return
    if (child.type === Fragment) {
      items.push(...collectItems((child.props as { children?: ReactNode }).children, `${keyPrefix}${child.key ?? index}/`))
      index += 1
      return
    }
    const props = child.props as FloatingItemProps
    const isItem = child.type === FloatingItem || (child.type as { displayName?: string })?.displayName === 'FloatingItem'
    if (isItem) {
      items.push({
        key: keyPrefix + String(child.key ?? props.name ?? index),
        name: props.name,
        node: child
      })
    } else {
      // 임의 자식도 아이템으로 래핑해 순서에 포함
      items.push({
        key: keyPrefix + String(child.key ?? `anon-${index}`),
        name: undefined,
        node: (
          <FloatingItem key={`anon-${index}`}>
            {child}
          </FloatingItem>
        )
      })
    }
    index += 1
  })
  return items
}

function sortItems (
  items: ReturnType<typeof collectItems>,
  order?: string[]
) {
  if (!order?.length) return items
  const rank = new Map(order.map((name, index) => [name, index]))
  return [...items].sort((a, b) => {
    const aRank = a.name != null && rank.has(a.name) ? rank.get(a.name)! : Number.POSITIVE_INFINITY
    const bRank = b.name != null && rank.has(b.name) ? rank.get(b.name)! : Number.POSITIVE_INFINITY
    if (aRank !== bRank) return aRank - bRank
    return 0
  })
}

/**
 * 모서리에 고정되는 플로팅 액션 스택.
 * BackTop · 버튼 등을 Floating.Item 으로 넣고 order · direction 으로 순서를 맞춘다.
 */
export function Floating ({
  meta,
  placement = 'bottom-right',
  offsetBottom = 24,
  offsetRight = 24,
  gap = 12,
  direction = 'column',
  order,
  slots,
  boundary = 'viewport',
  boundaryGap = 16,
  getPosition,
  className,
  style,
  children,
  ...rest
}: FloatingProps) {
  const hydrated = useHydrated()
  const rootRef = useRef<HTMLDivElement>(null)
  const pageSlots = useLayoutSlots()
  const pageItemSettings = pageSlots['meta-floating-items']
  const itemVisibility = useMemo(() => ({
    ...meta?.floatingItems,
    ...(typeof pageItemSettings === 'string' ? JSON.parse(pageItemSettings) as Record<string, boolean> : {})
  }), [meta?.floatingItems, pageItemSettings])
  const uid = useId().replace(/:/g, '')
  const ctx = useMemo(
    () => ({ inside: true as const, placement, itemVisibility }),
    [placement, itemVisibility]
  )

  const content = <>{children}{Object.entries(slots || {}).map(([name, node]) => (
    <FloatingItem key={`slot-${name}`} name={name} data-floating-slot={name}>{node}</FloatingItem>
  ))}</>
  const items = sortItems(collectItems(content).filter((item) => {
    const props = item.node.props as FloatingItemProps
    return !props.hidden && hasNodes(props.children) && (item.name == null || itemVisibility[item.name] !== false)
  }), order)
  const enabled = hydrated && meta?.floating !== false && pageSlots['meta-floating'] !== 'false' && items.length > 0
  const place = useFloatingPosition(rootRef, { enabled, placement, offsetBottom, offsetRight, boundary, boundaryGap, getPosition })

  // 헤더·푸터와 같이 페이지 meta가 등록된 후 표시해 숨김 항목의 첫 화면 노출을 막는다.
  if (!enabled) return null

  return (
    <FloatingContext.Provider value={ctx}>
      <div
        {...rest}
        ref={rootRef}
        id={rest.id || `floating-${uid}`}
        className={classNames('floating', className)}
        style={{
          ...place,
          gap,
          flexDirection: direction,
          ...style
        }}
        data-floating=""
        data-placement={placement}
        data-direction={direction}
        data-order={order?.length ? order.join(',') : undefined}
        data-boundary={typeof boundary === 'string' ? boundary : 'custom'}
      >
        {items.map((item) => <Fragment key={item.key}>{item.node}</Fragment>)}
      </div>
    </FloatingContext.Provider>
  )
}

/**
 * Floating 스택의 한 칸.
 * name 으로 order 배열에 매칭하고, order 숫자로 CSS order 를 준다.
 */
export function FloatingItem ({
  name,
  order,
  hidden = false,
  className,
  style,
  children,
  ...rest
}: FloatingItemProps) {
  const { itemVisibility } = useFloatingContext()
  if (hidden || !hasNodes(children) || (name != null && itemVisibility[name] === false)) return null

  return (
    <div
      {...rest}
      className={classNames('floating_item', className)}
      style={order != null ? { order, ...style } : style}
      data-floating-item=""
      data-name={name}
      data-order={order}
    >
      {children}
    </div>
  )
}

FloatingItem.displayName = 'FloatingItem'
Floating.Item = FloatingItem

export default Floating
