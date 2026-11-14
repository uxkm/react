'use client'

/**
 * 드롭다운 메뉴.
 * 트리거 클릭 시 items 목록을 펼친다. placement · 선택값 · 스크롤 · 바깥 클릭 닫기를 지원한다.
 */

import {
  useEffect, // effect 훅
  useId, // 고유 id 훅
  useRef, // ref 훅
  useState, // 상태 훅
  type CSSProperties, // CSSProperties 타입
  type HTMLAttributes, // HTMLAttributes 타입
  type KeyboardEvent as ReactKeyboardEvent, // 키보드 메뉴 탐색
  type ReactNode // ReactNode 타입
} from 'react' // React
import { classNames } from '@/utils/style/classNames' // 조건부 className 조합
import { hasNodes } from '@/utils/react' // has Nodes
import { Button, type ButtonSize, type ButtonVariant } from './Button' // Button · ButtonSize 타입 · ButtonVariant 타입

/** 드롭다운 항목 · 구분선 */
export interface DropdownItem {
  key: string
  label?: ReactNode
  disabled?: boolean
  /** menu_link.color_danger */
  danger?: boolean
  icon?: ReactNode
  type?: 'item' | 'divider'
  onSelect?: () => void
}

/** 메뉴 패널 배치. left/right 기본은 세로 center, *-top · *-bottom 은 상·하 정렬 */
export type DropdownPlacement =
  | 'bottom'
  | 'bottom-end'
  | 'bottom-center'
  | 'top'
  | 'top-end'
  | 'top-center'
  | 'left'
  | 'left-top'
  | 'left-bottom'
  | 'right'
  | 'right-top'
  | 'right-bottom'

/** 트리거 ↔ 패널 간격. md 는 기본(--dropdown-offset)이라 클래스 없음 */
export type DropdownOffset = 'none' | 'sm' | 'md' | 'lg'

/** 드롭다운이 받는 값 */
export interface DropdownProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style' | 'onChange' | 'onSelect'> {
  /** 트리거 버튼 라벨. 선택 모드에서 미선택 시 placeholder 가 없으면 이 값을 쓴다 */
  label?: ReactNode
  items?: DropdownItem[]
  open?: boolean
  onOpenChange?: (open: boolean) => void
  /**
   * 선택 모드(셀렉트 역할). 넘기면 제어 모드로 선택된 item.key 를 부모가 관리한다.
   * 선택되면 트리거 라벨이 해당 item.label 로 바뀐다.
   */
  value?: string | null
  /** 비제어 선택 모드 초기값 */
  defaultValue?: string
  /**
   * 항목 선택 시 호출. value · defaultValue · onChange 중 하나라도 있으면 선택 모드로 동작한다.
   */
  onChange?: (key: string, item: DropdownItem) => void
  /**
   * 메뉴 항목 클릭 시 호출. 선택 모드와 무관하게 동작하며, 페이지에서 액션을 제어할 때 쓴다.
   * onChange 와 달리 넘겨도 셀렉트 모드로 바뀌지 않는다.
   */
  onSelect?: (key: string, item: DropdownItem) => void
  /** 선택 모드에서 값이 없을 때 트리거에 보이는 문구. 없으면 label */
  placeholder?: ReactNode
  /**
   * 패널 위치.
   * bottom-end → dropdown_placement-end, top → dropdown_placement-top,
   * left/right → dropdown_placement-left/right 등.
   */
  placement?: DropdownPlacement
  /**
   * 트리거와 패널 사이 간격.
   * none · sm · lg → dropdown_offset-* . md(기본)는 토큰 그대로.
   * 임의 값은 style 의 --dropdown-offset 으로 덮어쓴다.
   */
  offset?: DropdownOffset
  /** dropdown_block — 트리거·메뉴 가로 100% */
  block?: boolean
  /** dropdown_fit — select 트리거 최소 너비 */
  fit?: boolean
  disabled?: boolean
  /** 넘기면 dropdown_menu-scrollable 과 --dropdown-max-visible-items */
  maxVisibleItems?: number
  /** true 이면 바깥 클릭 시 닫힘. 기본 true */
  closeOnOutsideClick?: boolean
  /** 트리거 Button variant. 기본 outline. 선택 모드면 select 권장 */
  triggerVariant?: ButtonVariant
  size?: ButtonSize
  style?: CSSProperties
}

/** placement → OOCSS 클래스 목록 */
function placementClasses (placement: DropdownPlacement): string[] {
  switch (placement) {
    case 'bottom-end':
      return ['dropdown_placement-end']
    case 'bottom-center':
      return ['dropdown_placement-bottom-center']
    case 'top':
      return ['dropdown_placement-top']
    case 'top-end':
      return ['dropdown_placement-top', 'dropdown_placement-end']
    case 'top-center':
      return ['dropdown_placement-top-center']
    case 'left':
      return ['dropdown_placement-left']
    case 'left-top':
      return ['dropdown_placement-left-top']
    case 'left-bottom':
      return ['dropdown_placement-left-bottom']
    case 'right':
      return ['dropdown_placement-right']
    case 'right-top':
      return ['dropdown_placement-right-top']
    case 'right-bottom':
      return ['dropdown_placement-right-bottom']
    default:
      return []
  }
}

function offsetClass (offset: DropdownOffset) {
  if (offset === 'none') return 'dropdown_offset-none'
  if (offset === 'sm') return 'dropdown_offset-sm'
  if (offset === 'lg') return 'dropdown_offset-lg'
  return undefined
}

function findItem (items: DropdownItem[], key: string | null | undefined) {
  if (key == null || key === '') return undefined
  return items.find((item) => item.type !== 'divider' && item.key === key)
}

/**
 * 버튼을 누르면 아래로 열리는 메뉴.
 * items 가 메뉴 줄. onSelect 로 페이지에서 클릭 액션을 제어하고,
 * value · onChange 를 쓰면 셀렉트처럼 트리거 라벨이 선택값으로 바뀐다.
 */
export function Dropdown ({
  label = '메뉴',
  items = [],
  open,
  value,
  defaultValue,
  placeholder,
  placement = 'bottom',
  offset = 'md',
  block = false,
  fit = false,
  disabled = false,
  maxVisibleItems,
  closeOnOutsideClick = true,
  triggerVariant = 'outline',
  size = 'md',
  className,
  style,
  onOpenChange,
  onChange,
  onSelect,
  ...rest
}: DropdownProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const edgeRef = useRef<'first' | 'last'>('first')
  const autoId = useId()
  const triggerId = `dropdown-trigger-${autoId}`
  const menuId = `dropdown-menu-${autoId}`
  const [innerOpen, setInnerOpen] = useState(false)
  const [innerValue, setInnerValue] = useState<string | null>(defaultValue ?? null)

  const selectable = value !== undefined || defaultValue !== undefined || onChange != null
  const shown = open ?? innerOpen
  const selectedKey = selectable ? (value !== undefined ? value : innerValue) : null
  const selectedItem = findItem(items, selectedKey)
  const triggerLabel = selectable
    ? (hasNodes(selectedItem?.label) ? selectedItem!.label : (placeholder ?? label))
    : label
  const isPlaceholder = selectable && !hasNodes(selectedItem?.label)

  const setShown = (next: boolean) => {
    if (disabled) return
    if (open === undefined) setInnerOpen(next)
    onOpenChange?.(next)
  }

  const toggle = () => setShown(!shown)
  const close = () => setShown(false)

  /** 메뉴 항목 클릭 — 페이지 onSelect · 항목 onSelect · (선택 모드면) onChange */
  const handleItemClick = (item: DropdownItem) => {
    if (item.disabled || item.type === 'divider') return
    if (selectable) {
      if (value === undefined) setInnerValue(item.key)
      onChange?.(item.key, item)
    }
    onSelect?.(item.key, item)
    item.onSelect?.()
    close()
    rootRef.current?.querySelector<HTMLElement>('.dropdown_trigger')?.focus()
  }

  // 바깥 클릭 시 닫기
  useEffect(() => {
    if (!shown || !closeOnOutsideClick) return
    const onPointerDown = (event: PointerEvent) => {
      if (rootRef.current?.contains(event.target as Node)) return
      if (open === undefined) setInnerOpen(false)
      onOpenChange?.(false)
    }
    document.addEventListener('pointerdown', onPointerDown, true)
    return () => document.removeEventListener('pointerdown', onPointerDown, true)
  }, [shown, closeOnOutsideClick, open, onOpenChange])

  // 메뉴가 열리면 선택 항목 또는 키보드로 요청한 끝 항목으로 초점을 옮깁니다.
  useEffect(() => {
    if (!shown) return
    const choices = rootRef.current?.querySelectorAll<HTMLElement>('.menu_link:not(:disabled)')
    const selected = rootRef.current?.querySelector<HTMLElement>('[aria-checked="true"]:not(:disabled)')
    const target = edgeRef.current === 'last' ? choices?.[choices.length - 1] : selected ?? choices?.[0]
    target?.focus()
  }, [shown])

  const handleMenuKey = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    const choices = Array.from(event.currentTarget.querySelectorAll<HTMLElement>('.menu_link:not(:disabled)'))
    const index = choices.indexOf(document.activeElement as HTMLElement)
    let next = index
    if (event.key === 'ArrowDown') next = (index + 1) % choices.length
    else if (event.key === 'ArrowUp') next = (index - 1 + choices.length) % choices.length
    else if (event.key === 'Home') next = 0
    else if (event.key === 'End') next = choices.length - 1
    else if (event.key === 'Escape' || event.key === 'Tab') {
      if (event.key === 'Escape') {
        event.preventDefault()
        event.stopPropagation()
      }
      close()
      rootRef.current?.querySelector<HTMLElement>('.dropdown_trigger')?.focus()
      return
    } else if (event.key.length === 1 && !event.ctrlKey && !event.metaKey && event.key !== ' ') {
      const ordered = [...choices.slice(index + 1), ...choices.slice(0, index + 1)]
      const match = ordered.find((item) => item.textContent?.trim().toLocaleLowerCase().startsWith(event.key.toLocaleLowerCase()))
      if (match) { event.preventDefault(); match.focus() }
      return
    } else return
    event.preventDefault()
    choices[next]?.focus()
  }

  const scrollable = typeof maxVisibleItems === 'number' && maxVisibleItems > 0

  return (
    <div
      {...rest}
      ref={rootRef}
      className={classNames(
        'dropdown',
        shown && 'is-open',
        disabled && 'is-disabled',
        selectable && 'dropdown_selectable',
        isPlaceholder && 'is-placeholder',
        ...placementClasses(placement),
        offsetClass(offset),
        block && 'dropdown_block',
        fit && 'dropdown_fit',
        className
      )}
      style={{
        ...style,
        ...(scrollable
          ? { ['--dropdown-max-visible-items' as string]: String(maxVisibleItems) }
          : null)
      }}
    >
      <Button
        id={triggerId}
        type="button"
        variant={triggerVariant}
        color="default"
        size={size}
        className={classNames(
          'dropdown_trigger',
          isPlaceholder && triggerVariant === 'select' && 'btn_select-placeholder'
        )}
        open={shown}
        haspopup="menu"
        expanded={shown}
        disabled={disabled}
        placeholder={isPlaceholder}
        aria-controls={shown ? menuId : undefined}
        label={typeof triggerLabel === 'string' ? triggerLabel : undefined}
        onClick={toggle}
        onKeyDown={(event) => {
          if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
            event.preventDefault()
            edgeRef.current = event.key === 'ArrowUp' ? 'last' : 'first'
            setShown(true)
          } else if (event.key === 'Escape' && shown) {
            event.preventDefault()
            event.stopPropagation()
            close()
          }
        }}
      >
        {typeof triggerLabel === 'string' ? undefined : triggerLabel}
      </Button>
      {shown && (
        <div
          id={menuId}
          className={classNames('dropdown_menu', scrollable && 'dropdown_menu-scrollable')}
          role="menu"
          aria-labelledby={triggerId}
          onKeyDown={handleMenuKey}
        >
          <div className="menu menu_vertical menu_compact" role="none">
            <ul className="menu_list" role="none">
              {items.map((item) => {
                if (item.type === 'divider') {
                  return <li key={item.key} className="menu_divider" role="separator" />
                }

                const active = selectable && item.key === selectedKey

                return (
                  <li
                    role="none"
                    key={item.key}
                    className={classNames('menu_item', item.disabled && 'is-disabled')}
                  >
                    <button
                      type="button"
                      className={classNames(
                        'menu_link',
                        active && 'is-active',
                        item.danger && 'color_danger',
                        item.disabled && 'is-disabled'
                      )}
                      role={selectable ? 'menuitemradio' : 'menuitem'}
                      aria-checked={selectable ? active : undefined}
                      disabled={item.disabled}
                      tabIndex={-1}
                      onClick={() => handleItemClick(item)}
                    >
                      {hasNodes(item.icon) && (
                        <span className="menu_icon">{item.icon}</span>
                      )}
                      {hasNodes(item.label) && (
                        <span className="menu_label">{item.label}</span>
                      )}
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export default Dropdown
