'use client'

/**
 * 키워드 목록.
 * 가로 1행 + (넘칠 때만) 우측 펼침/접기. 접힌 채 넘치면 가로 스크롤.
 * 펼치면 아이템이 아래로 줄바꿈된다.
 * Keyword 아이템은 tag(span) · button · link(a) 로 쓸 수 있다.
 */

import {
  createElement,
  useId,
  useLayoutEffect,
  useRef,
  useState,
  type HTMLAttributes,
  type MouseEvent,
  type ReactNode
} from 'react'
import { classNames } from '@/utils/classNames'
import { hasNodes } from '@/utils/react'
import { Icon } from './Icon'

/** Keyword 시맨틱 역할 */
export type KeywordAs = 'tag' | 'button' | 'link'
/** 키워드 색 */
export type KeywordColor = 'primary' | 'default' | 'success' | 'warning' | 'danger' | 'info' | 'muted'
/** 키워드 스킨 */
export type KeywordVariant = 'filled' | 'solid' | 'outline' | 'borderless'
/** 펼침/접기 버튼 형태 */
export type KeywordsToggleShape = 'default' | 'round' | 'circle'

const VALID_VARIANTS = new Set(['filled', 'solid', 'outline', 'borderless'])
const VALID_SIZES = new Set(['sm', 'md', 'lg'])

/** 키워드 칩 한 개 */
export interface KeywordProps
  extends Omit<HTMLAttributes<HTMLElement>, 'color' | 'onClick'> {
  /** tag(기본·span) · button · link(a) */
  as?: KeywordAs
  /** as="link" 일 때 */
  href?: string
  color?: KeywordColor | ''
  variant?: KeywordVariant
  size?: 'sm' | 'md' | 'lg'
  /** pill 모서리(keyword_round) */
  round?: boolean
  label?: ReactNode
  selected?: boolean
  disabled?: boolean
  children?: ReactNode
  onClick?: (event: MouseEvent<HTMLElement>) => void
}

/** renderToggle 에 전달되는 상태 */
export interface KeywordsToggleRenderState {
  /** 실제 펼침(넘침일 때만 true 가능) */
  expanded: boolean
  /** 1행 기준 부모 초과 여부 */
  overflowing: boolean
  /** keywords_list id (aria-controls) */
  listId: string
  /** 기본 토글에 쓰는 클래스(keywords_toggle + shape + toggleClassName) */
  toggleClassName: string
  /** 펼침/접힘 토글 */
  toggle: () => void
  expand: () => void
  collapse: () => void
}

/** 키워드 목록 컨테이너 */
export interface KeywordsProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** 펼침 제어 */
  expanded?: boolean
  /** 비제어 초기 펼침. 기본 false(1행) */
  defaultExpanded?: boolean
  /** 펼침이 바뀔 때 */
  onExpandedChange?: (expanded: boolean) => void
  /** false 이면 토글 숨기고 항상 wrap. 기본 true */
  collapsible?: boolean
  /** 아이템 간격(px). 기본 8 → --keywords-gap */
  gap?: number
  /** 하위 Keyword 기본 pill(keywords_round) */
  round?: boolean
  /**
   * true 이면 접힘·넘침일 때 펼침/접기 버튼 왼쪽에 가장자리 딤(페이드)을 표시한다.
   * 기본 false.
   */
  toggleDim?: boolean
  /**
   * 펼침/접기 버튼 형태.
   * default(기본 radius) · round(pill) · circle(원형).
   */
  toggleShape?: KeywordsToggleShape
  /** 기본/슬롯 토글에 추가할 클래스 */
  toggleClassName?: string
  /**
   * 기본 토글 버튼 안 콘텐츠. 생략 시 chevron 아이콘.
   * renderToggle 이 있으면 무시된다.
   */
  toggle?: ReactNode
  /**
   * 펼침/접기 영역 슬롯. 반환 노드로 기본 버튼을 대체한다.
   * collapsible 일 때 호출되며 overflowing 으로 표시 여부를 직접 제어할 수 있다.
   */
  renderToggle?: (state: KeywordsToggleRenderState) => ReactNode
  /** 목록 aria-label */
  ariaLabel?: string
  children?: ReactNode
}

/**
 * 키워드 칩.
 * as 로 span / button / a 를 고른다. 겉모습은 keyword 공통 스킨.
 */
export function Keyword ({
  as = 'tag',
  href = '',
  color = 'default',
  variant = 'filled',
  size = 'md',
  round = false,
  label,
  selected = false,
  disabled = false,
  children,
  className,
  onClick,
  ...rest
}: KeywordProps) {
  const text = hasNodes(children) ? children : label
  const rootTag = as === 'button' ? 'button' : as === 'link' ? 'a' : 'span'
  const resolvedVariant = VALID_VARIANTS.has(variant) ? variant : 'filled'
  const resolvedSize = VALID_SIZES.has(size) ? size : 'md'
  const resolvedColor = color || 'default'

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    if (disabled) {
      event.preventDefault()
      event.stopPropagation()
      return
    }
    onClick?.(event)
  }

  return createElement(
    rootTag,
    {
      ...rest,
      className: classNames(
        'keyword',
        resolvedColor && 'color_' + resolvedColor,
        resolvedVariant !== 'filled' && 'keyword_' + resolvedVariant,
        resolvedSize !== 'md' && 'keyword_' + resolvedSize,
        round && 'keyword_round',
        selected && 'is-selected',
        disabled && 'is-disabled',
        className
      ),
      type: rootTag === 'button' ? 'button' : undefined,
      href: rootTag === 'a' && !disabled ? (href || undefined) : undefined,
      disabled: rootTag === 'button' ? disabled : undefined,
      'aria-disabled': rootTag !== 'button' && disabled ? true : undefined,
      'aria-pressed': as === 'button' ? selected : undefined,
      tabIndex: rootTag === 'a' && disabled ? -1 : undefined,
      onClick: handleClick
    },
    text
  )
}

/** 1행 기준 아이템 총 너비(gap 포함)가 부모보다 큰지 */
function measureOverflow (root: HTMLElement, list: HTMLElement, gapPx: number) {
  const items = list.children
  let total = 0
  for (let i = 0; i < items.length; i += 1) {
    total += (items[i] as HTMLElement).offsetWidth
    if (i > 0) total += gapPx
  }
  return total > root.clientWidth + 1
}

/**
 * 키워드 목록.
 * collapsible 이면 접힌 상태 1행(가로 스크롤) · 넘칠 때만 펼침 토글 · 펼치면 wrap.
 */
export function Keywords ({
  expanded: expandedProp,
  defaultExpanded = false,
  onExpandedChange,
  collapsible = true,
  gap = 8,
  round = false,
  toggleDim = false,
  toggleShape = 'default',
  toggleClassName,
  toggle,
  renderToggle,
  ariaLabel = '',
  className,
  children,
  style,
  ...rest
}: KeywordsProps) {
  const listId = useId()
  const rootRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLDivElement>(null)
  const controlled = expandedProp !== undefined
  const [innerExpanded, setInnerExpanded] = useState(defaultExpanded)
  const [overflowing, setOverflowing] = useState(false)
  const expanded = collapsible ? (controlled ? !!expandedProp : innerExpanded) : true
  const gapValue = Number.isFinite(gap) && gap >= 0 ? gap : 8
  /** 넘칠 때만 기본 토글·펼침 UI 적용 (커스텀 슬롯은 overflowing 으로 직접 제어) */
  const showDefaultToggle = collapsible && overflowing && !renderToggle
  const effectivelyExpanded = !collapsible || (overflowing && expanded)
  const resolvedToggleShape = toggleShape === 'round' || toggleShape === 'circle'
    ? toggleShape
    : 'default'
  const resolvedToggleClassName = classNames(
    'keywords_toggle',
    resolvedToggleShape === 'round' && 'keywords_toggle-round',
    resolvedToggleShape === 'circle' && 'keywords_toggle-circle',
    toggleClassName
  )

  const setExpanded = (next: boolean) => {
    if (!controlled) setInnerExpanded(next)
    onExpandedChange?.(next)
  }

  const toggleExpanded = () => setExpanded(!expanded)

  useLayoutEffect(() => {
    if (!collapsible) {
      setOverflowing(false)
      return
    }
    const root = rootRef.current
    const list = listRef.current
    if (!root || !list) return

    const update = () => {
      setOverflowing(measureOverflow(root, list, gapValue))
    }

    update()
    const observer = new ResizeObserver(update)
    observer.observe(root)
    observer.observe(list)
    for (const child of list.children) {
      if (child instanceof HTMLElement) observer.observe(child)
    }
    return () => observer.disconnect()
  }, [collapsible, gapValue, children, effectivelyExpanded])

  const toggleState: KeywordsToggleRenderState = {
    expanded: effectivelyExpanded,
    overflowing,
    listId,
    toggleClassName: resolvedToggleClassName,
    toggle: toggleExpanded,
    expand: () => setExpanded(true),
    collapse: () => setExpanded(false)
  }

  const customToggle = collapsible && renderToggle ? renderToggle(toggleState) : null

  return (
    <div
      {...rest}
      ref={rootRef}
      className={classNames(
        'keywords',
        collapsible && 'keywords_collapsible',
        round && 'keywords_round',
        toggleDim && 'keywords_toggle-dim',
        resolvedToggleShape !== 'default' && `keywords_toggle-shape-${resolvedToggleShape}`,
        overflowing && 'is-overflowing',
        effectivelyExpanded && 'is-expanded',
        !effectivelyExpanded && collapsible && 'is-collapsed',
        className
      )}
      style={{
        ...style,
        ['--keywords-gap' as string]: `${gapValue}px`
      }}
      role="group"
      aria-label={ariaLabel || undefined}
    >
      <div
        ref={listRef}
        id={listId}
        className="keywords_list"
      >
        {children}
      </div>
      {customToggle}
      {showDefaultToggle && (
        <button
          type="button"
          className={resolvedToggleClassName}
          aria-expanded={effectivelyExpanded}
          aria-controls={listId}
          aria-label={effectivelyExpanded ? '키워드 접기' : '키워드 펼침'}
          onClick={toggleExpanded}
        >
          {hasNodes(toggle) ? toggle : <Icon name="chevron-down" size="sm" />}
        </button>
      )}
    </div>
  )
}

export default Keywords
