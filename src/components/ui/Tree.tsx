'use client'

/**
 * 트리.
 * Tree · TreeNode로 계층 노드를 접고 펼치며 선택·메타를 표시한다.
 */

import {
  useState, // 상태 훅
  useEffect, // 초기 roving 초점
  useRef, // 트리 루트
  useId, // 노드 이름
  createContext, // 단일 선택 상태
  useContext, // 트리 선택 계약
  type HTMLAttributes, // HTMLAttributes 타입
  type LiHTMLAttributes, // LiHTMLAttributes 타입
  type MouseEvent, // MouseEvent 타입
  type ReactNode // ReactNode 타입
} from 'react' // React
import { classNames } from '@/utils/style/classNames' // 조건부 className 조합

const TreeSelection = createContext<{
  selected: string | null
  select: (id: string) => void
  multiple: boolean
} | null>(null)

/** Tree 루트 props */
export interface TreeProps extends HTMLAttributes<HTMLUListElement> {
  bordered?: boolean
  lines?: boolean
  compact?: boolean
  ariaLabel?: string
  multiselectable?: boolean
  children?: ReactNode
}

/**
 * 계층 목록 루트.
 * bordered · lines · compact 스킨과 다중 선택 상태를 연결한다.
 */
export function Tree ({
  children,
  bordered = false,
  lines = false,
  compact = false,
  ariaLabel,
  multiselectable = false,
  className,
  onKeyDown,
  onFocus,
  ...rest
}: TreeProps) {
  const ref = useRef<HTMLUListElement>(null)
  const [selectedNode, selectNode] = useState<string | null>(null)
  useEffect(() => {
    const first = ref.current?.querySelector<HTMLElement>('[role="treeitem"][aria-selected="true"]') ?? ref.current?.querySelector<HTMLElement>('[role="treeitem"]')
    if (first) first.tabIndex = 0
  }, [])
  return (
    <TreeSelection.Provider value={{ selected: selectedNode, select: selectNode, multiple: multiselectable }}>
    <ul
      {...rest}
      ref={ref}
      className={classNames(
        'tree',
        bordered && 'tree_bordered',
        lines && 'tree_lines',
        compact && 'tree_compact',
        className
      )}
      role="tree"
      aria-label={ariaLabel ?? rest['aria-label'] ?? '트리 목록'}
      aria-multiselectable={multiselectable || undefined}
      onFocus={(event) => {
        onFocus?.(event)
        const item = (event.target as HTMLElement).closest<HTMLElement>('[role="treeitem"]')
        if (!item) return
        for (const node of event.currentTarget.querySelectorAll<HTMLElement>('[role="treeitem"]')) node.tabIndex = node === item ? 0 : -1
      }}
      onKeyDown={(event) => {
        onKeyDown?.(event)
        if (event.defaultPrevented) return
        const item = (event.target as HTMLElement).closest<HTMLElement>('[role="treeitem"]')
        if (!item) return
        const nodes = Array.from(event.currentTarget.querySelectorAll<HTMLElement>('[role="treeitem"]'))
          .filter((node) => node.getClientRects().length > 0 && !node.closest('[hidden]'))
        const index = nodes.indexOf(item)
        const toggle = item.querySelector<HTMLButtonElement>(':scope > .tree_toggle')
        let target: HTMLElement | undefined
        if (event.key === 'ArrowDown') target = nodes[Math.min(index + 1, nodes.length - 1)]
        else if (event.key === 'ArrowUp') target = nodes[Math.max(0, index - 1)]
        else if (event.key === 'Home') target = nodes[0]
        else if (event.key === 'End') target = nodes[nodes.length - 1]
        else if (event.key === 'ArrowRight') {
          if (item.getAttribute('aria-expanded') === 'false') toggle?.click()
          else target = item.nextElementSibling?.querySelector<HTMLElement>('[role="treeitem"]') ?? undefined
        } else if (event.key === 'ArrowLeft') {
          if (item.getAttribute('aria-expanded') === 'true') toggle?.click()
          else target = item.parentElement?.parentElement?.closest('li')?.querySelector<HTMLElement>(':scope > [role="treeitem"]') ?? undefined
        } else if ((event.key === 'Enter' || event.key === ' ') && event.target === item) {
          item.querySelector<HTMLButtonElement>(':scope > .tree_link')?.click()
          if (!item.querySelector(':scope > .tree_link')) toggle?.click()
        } else if (event.key.length === 1 && event.key !== ' ' && !event.ctrlKey && !event.metaKey) {
          target = [...nodes.slice(index + 1), ...nodes.slice(0, index + 1)].find((node) =>
            node.querySelector('.tree_label')?.textContent?.trim().toLocaleLowerCase().startsWith(event.key.toLocaleLowerCase()))
        } else return
        event.preventDefault()
        target?.focus()
      }}
    >
      {children}
    </ul>
    </TreeSelection.Provider>
  )
}

/** TreeNode props */
export interface TreeNodeProps extends Omit<LiHTMLAttributes<HTMLLIElement>, 'onSelect' | 'prefix'> {
  /** 노드 식별 값. onSelect 에 전달 */
  value?: string
  label?: ReactNode
  expanded?: boolean
  /** 비제어 초기 펼침 */
  defaultExpanded?: boolean
  selected?: boolean
  /** 비제어 초기 선택 */
  defaultSelected?: boolean
  disabled?: boolean
  expandable?: boolean
  plusToggle?: boolean
  toggleLabel?: string
  link?: boolean
  meta?: ReactNode
  prefix?: ReactNode
  icon?: ReactNode
  labelSlot?: ReactNode
  metaSlot?: ReactNode
  children?: ReactNode
  onExpandedChange?: (expanded: boolean) => void
  /** 선택 상태가 바뀔 때 호출(다음 선택 여부) */
  onSelectedChange?: (selected: boolean, event: MouseEvent<HTMLElement>) => void
  /** 노드 선택 시 호출. 페이지에서 선택 상태를 제어한다 */
  onSelect?: (value: string | undefined, event: MouseEvent<HTMLElement>) => void
}

/**
 * 트리 한 노드.
 * 토글 · 아이콘 · 라벨 · 메타와 자식 그룹을 구성한다.
 */
export function TreeNode ({
  value,
  label,
  expanded,
  defaultExpanded,
  selected: selectedProp,
  defaultSelected = false,
  disabled = false,
  expandable = false,
  plusToggle = false,
  toggleLabel,
  link = false,
  meta,
  prefix,
  icon,
  labelSlot,
  metaSlot,
  children,
  className,
  onExpandedChange,
  onSelectedChange,
  onSelect,
  ...rest
}: TreeNodeProps) {
  const labelId = useId()
  const groupId = useId()
  const metaId = useId()
  const tree = useContext(TreeSelection)
  const hasChildren = Boolean(children)
  const showToggle = expandable || hasChildren
  const controlledExpand = expanded !== undefined
  const [innerExpanded, setInnerExpanded] = useState(
    () => defaultExpanded ?? expanded ?? true
  )
  const isExpanded = controlledExpand ? expanded !== false : innerExpanded
  const selectedControlled = selectedProp !== undefined
  const [innerSelected, setInnerSelected] = useState(defaultSelected)
  const selected = selectedControlled ? !!selectedProp
    : tree && !tree.multiple && tree.selected !== null ? tree.selected === labelId : innerSelected

  const toggle = () => {
    const next = !isExpanded
    if (!controlledExpand) setInnerExpanded(next)
    onExpandedChange?.(next)
  }

  const handleSelect = (event: MouseEvent<HTMLElement>) => {
    if (disabled) return
    const next = !selected
    if (!selectedControlled) setInnerSelected(next)
    if (!selectedControlled && tree && !tree.multiple) tree.select(next ? labelId : '')
    onSelectedChange?.(next, event)
    onSelect?.(value, event)
  }

  const labelContent = <span id={labelId} className="tree_label">{labelSlot ?? label}</span>
  const metaContent = metaSlot ?? meta
  const selectable = link || onSelect != null || onSelectedChange != null

  return (
    <li
      {...rest}
      className={classNames('tree_item', className)}
      role="none"
      data-expanded={showToggle ? isExpanded : undefined}
    >
      <div className={classNames('tree_row', selected && 'is-selected', disabled && 'is-disabled')}
        role="treeitem" tabIndex={-1}
        aria-labelledby={`${labelId}${metaContent != null && metaContent !== '' ? ` ${metaId}` : ''}`}
        aria-owns={hasChildren ? groupId : undefined}
        aria-disabled={disabled || undefined}
        aria-expanded={showToggle ? isExpanded : undefined}
        aria-selected={selectable ? selected : undefined}>
        {showToggle
          ? (
            <button
              type="button"
              className={classNames('tree_toggle', plusToggle && 'tree_toggle-plus')}
              aria-expanded={isExpanded}
              aria-label={toggleLabel || (isExpanded ? '하위 항목 접기' : '하위 항목 펼치기')}
              tabIndex={-1}
              disabled={disabled || undefined}
              onClick={toggle}
            />
            )
          : (
            <span className="tree_toggle tree_toggle_placeholder" aria-hidden="true" />
            )}
        {prefix}
        {icon
          ? (
            <span className="tree_icon" aria-hidden="true">
              {icon}
            </span>
            )
          : null}
        {selectable
          ? (
            <button
              type="button"
              className="tree_link"
              tabIndex={-1}
              disabled={disabled || undefined}
              onClick={handleSelect}
            >
              {labelContent}
            </button>
            )
          : labelContent}
        {metaContent != null && metaContent !== ''
          ? (
            <span id={metaId} className="tree_meta">{' '}{metaContent}</span>
            )
          : null}
      </div>
      {hasChildren
        ? (
          <ul id={groupId} className="tree" role="group" hidden={!isExpanded}>
            {children}
          </ul>
          )
        : null}
    </li>
  )
}

export default Tree
