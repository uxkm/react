'use client'

import { useEscapeKey } from '@/hooks/useEscapeKey' // Escape Key 훅

/**
 * PubFilterSheet
 * - 모바일/좁은 화면용 화면명(폴더) 필터 버텀시트
 * - 전체 또는 특정 폴더 선택
 */
import { classNames } from '@/utils/classNames' // 조건부 className 조합

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
  useEscapeKey(panelRef, onClose)
  return (
    <div
      className="wbs-bottom-sheet"
    >
      <div className="wbs-bottom-sheet_backdrop" aria-hidden="true" onClick={onClose} />
      <div
        ref={panelRef}
        className="wbs-bottom-sheet_panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="wbs-filter-sheet-title"
        tabIndex={-1}
      >
        <header className="wbs-bottom-sheet_header">
          <div className="wbs-bottom-sheet_handle" aria-hidden="true" />
          <h2 id="wbs-filter-sheet-title" className="wbs-bottom-sheet_title">{title}</h2>
          <button
            type="button"
            className="wbs-btn is-ghost wbs-bottom-sheet_close"
            aria-label={closeLabel}
            onClick={onClose}
          >×</button>
        </header>
        <ul className="wbs-bottom-sheet_list" role="listbox" aria-label={ariaLabel}>
          <li role="option" aria-selected={!activeId ? 'true' : 'false'}>
            <button
              type="button"
              className={classNames('wbs-bottom-sheet_item', { 'is-active': !activeId })}
              onClick={() => onPick(null)}
            >
              <span>{allLabel}</span>
              <span className="wbs-bottom-sheet_count">{folders.length}</span>
            </button>
          </li>
          {folders.map((folder) => (
            <li
              key={'filter-' + folder.id}
              role="option"
              aria-selected={activeId === folder.id ? 'true' : 'false'}
            >
              <button
                type="button"
                className={classNames('wbs-bottom-sheet_item', { 'is-active': activeId === folder.id })}
                onClick={() => onPick(folder.id)}
              >
                <span>{labelOf(folder)}</span>
                <span className="wbs-bottom-sheet_count">{countOf(folder)}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
