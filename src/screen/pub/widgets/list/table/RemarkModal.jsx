'use client'

import { useId } from 'react'
import { useModalDialog } from '@/hooks/interaction/useModalDialog'

/**
 * RemarkModal
 * - depth 항목 비고(히스토리) 상세 모달. Escape / 배경 클릭으로 닫기
 */
export default function RemarkModal ({
  itemName,
  itemId,
  items,
  historyLabel,
  detailLabel,
  closeLabel,
  emptyLabel,
  onClose,
  dialogRef
}) {
  const titleId = useId()
  const handleKeyDown = useModalDialog(dialogRef, true)
  return (
    <dialog
      ref={dialogRef}
      className="remark-modal"
      aria-labelledby={titleId}
      onKeyDown={handleKeyDown}
      onCancel={event => { event.preventDefault(); onClose() }}
    >
      <div className="remark-modal_backdrop" aria-hidden="true" onClick={onClose} />
      <div
        className="remark-modal_dialog"
        data-dialog-panel=""
        tabIndex={-1}
      >
        <header className="remark-modal_header">
          <div>
            <p className="remark-modal_eyebrow">{historyLabel}</p>
            <h2 data-dialog-title="" tabIndex={-1} id={titleId} className="remark-modal_title">
              {itemName || detailLabel}
            </h2>
            {itemId && (
              <p className="remark-modal_meta">{itemId}</p>
            )}
          </div>
          <button
            type="button"
            className="wbs-btn is-ghost remark-modal_close"
            aria-label={closeLabel}
            onClick={onClose}
          >×</button>
        </header>
        <div className="remark-modal_body">
          {items.length
            ? (
              <ul className="remark-history">
                {items.map((item, index) => (
                  <li key={index} className="remark-history_item">
                    <div className="remark-history_head">
                      <span className="remark-history_date">{item.date || '-'}</span>
                      {item.author && (
                        <span className="remark-history_author">{item.author}</span>
                      )}
                    </div>
                    <p className="remark-history_text">{item.text}</p>
                  </li>
                ))}
              </ul>
            )
            : <div className="remark-modal_empty">{emptyLabel}</div>}
        </div>
      </div>
    </dialog>
  )
}
