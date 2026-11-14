'use client'

import { useId } from 'react'
import { useModalDialog } from '@/hooks/interaction/useModalDialog'

/**
 * PubFilterSheet
 * - 모바일/좁은 화면용 화면명(폴더) 필터 버텀시트
 * - 전체 또는 특정 폴더 선택
 */
import { classNames } from '@/utils/style/classNames' // 조건부 className 조합

export default function PubFilterSheet ({
  title,
  ariaLabel,
  closeLabel,
  allLabel,
  folders,
  activeId,
  countOf,
  labelOf,
  onClose,
  onPick,
  panelRef
}) {
  const titleId = useId()
  const handleKeyDown = useModalDialog(panelRef, true)
  return (
    <dialog
      ref={panelRef}
      className="wbs-bottom-sheet"
      aria-labelledby={titleId}
      onKeyDown={handleKeyDown}
      onCancel={event => { event.preventDefault(); onClose() }}
    >
      <div className="wbs-bottom-sheet_backdrop" aria-hidden="true" onClick={onClose} />
      <div
        className="wbs-bottom-sheet_panel"
        data-dialog-panel=""
        tabIndex={-1}
      >
        <header className="wbs-bottom-sheet_header">
          <div className="wbs-bottom-sheet_handle" aria-hidden="true" />
          <h2 data-dialog-title="" tabIndex={-1} id={titleId} className="wbs-bottom-sheet_title">{title}</h2>
          <button
            type="button"
            className="wbs-btn is-ghost wbs-bottom-sheet_close"
            aria-label={closeLabel}
            onClick={onClose}
          >×</button>
        </header>
        <ul className="wbs-bottom-sheet_list" aria-label={ariaLabel}>
          <li>
            <button
              type="button"
              className={classNames('wbs-bottom-sheet_item', { 'is-active': !activeId })}
              aria-pressed={!activeId}
              onClick={() => onPick(null)}
            >
              <span>{allLabel}</span>
              <span className="wbs-bottom-sheet_count">{folders.length}</span>
            </button>
          </li>
          {folders.map((folder) => (
            <li
              key={'filter-' + folder.id}
            >
              <button
                type="button"
                className={classNames('wbs-bottom-sheet_item', { 'is-active': activeId === folder.id })}
                aria-pressed={activeId === folder.id}
                onClick={() => onPick(folder.id)}
              >
                <span>{labelOf(folder)}</span>
                <span className="wbs-bottom-sheet_count">{countOf(folder)}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </dialog>
  )
}
