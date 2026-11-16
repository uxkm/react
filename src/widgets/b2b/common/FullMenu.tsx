'use client'

import { useRef } from 'react'
import { useModalDialog } from '@/hooks/interaction/useModalDialog'
import { Icon } from '@/comp/ui/Icon'
import { B2bLogo } from './fullMenuShared'
import FullMenuTypeA from './FullMenuTypeA'
import FullMenuTypeB from './FullMenuTypeB'

export { B2bLogo } from './fullMenuShared'

/** 전체메뉴·회사소개 프리뷰와 헤더 레이어에서 같은 메뉴 구성을 사용합니다. */
export function FullMenuContent ({
  designType = 'typeB',
  initialSection = 'business',
  onNavigate
}: Readonly<{
  designType?: 'typeA' | 'typeB'
  initialSection?: 'business' | 'company'
  onNavigate?: () => void
}>) {
  if (designType === 'typeA') {
    return <FullMenuTypeA initialSection={initialSection} onNavigate={onNavigate} />
  }

  return <FullMenuTypeB onNavigate={onNavigate} />
}

/**
 * 네이티브 모달로 초점 이동·Tab 순환·Escape 닫기를 제공합니다.
 * 기존 원본은 typeA(아코디언), 현재 시안은 typeB(3단 메가메뉴)입니다.
 */
export function FullMenu ({
  open,
  onClose,
  designType = 'typeB',
  initialSection = 'business'
}: Readonly<{
  open: boolean
  onClose: () => void
  designType?: 'typeA' | 'typeB'
  initialSection?: 'business' | 'company'
}>) {
  const dialog = useRef<HTMLDialogElement>(null)

  const handleKeyDown = useModalDialog(dialog, open)

  return (
    <dialog
      ref={dialog}
      className={`full-menu full-menu_default full-menu_${designType}`}
      aria-label="전체메뉴"
      onKeyDown={handleKeyDown}
      onCancel={(event) => {
        event.preventDefault()
        onClose()
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div className="full-menu_surface" data-dialog-panel="" tabIndex={-1}>
        <div className="full-menu_header">
          <div
            onClick={(event) => {
              if ((event.target as HTMLElement).closest('a')) onClose()
            }}
          >
            <B2bLogo />
          </div>
          <div className="header_actions">
            {designType === 'typeA' && (
              <button
                type="button"
                className="icon-button"
                aria-label="통합검색"
                disabled
              >
                <Icon name="search" size={24} />
              </button>
            )}
            <button
              className="icon-button"
              type="button"
              aria-label="전체메뉴 닫기"
              onClick={onClose}
            >
              <Icon name="close" size={24} />
            </button>
          </div>
        </div>
        {open && (
          <FullMenuContent
            designType={designType}
            initialSection={initialSection}
            onNavigate={onClose}
          />
        )}
      </div>
    </dialog>
  )
}
