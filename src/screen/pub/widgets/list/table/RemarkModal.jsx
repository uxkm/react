'use client'

import { useEscapeKey } from '@/hooks/useEscapeKey' // Escape Key 훅

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
  useEscapeKey(dialogRef, onClose)
  return (
    <div
      className="remark-modal"
    >
      <div className="remark-modal_backdrop" aria-hidden="true" onClick={onClose} />
      <div
        ref={dialogRef}
        className="remark-modal_dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="remark-modal-title"
        tabIndex={-1}
      >
        <header className="remark-modal_header">
          <div>
            <p className="remark-modal_eyebrow">{historyLabel}</p>
            <h2 id="remark-modal-title" className="remark-modal_title">
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
    </div>
  )
}
