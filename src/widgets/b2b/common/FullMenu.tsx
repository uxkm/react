'use client'

import { useRef } from 'react' // React
import { useModalDialog } from '@/hooks/interaction/useModalDialog'
import Image from 'next/image' // 이미지 최적화
import { Link } from '@/lib/router' // 클라이언트 링크
import { Icon } from '@/comp/ui/Icon' // Icon 컴포넌트
import { Accordion, AccordionItem, AccordionPanel } from '@/comp/ui/Accordion' // UI 컴포넌트 · Accordion 컴포넌트
import { b2bMenu, type B2bMenuGroup, type B2bMenuLink } from './menuData' // menu Data

export function B2bLogo () {
  return (
    <Link to="/b2b" className="logo" aria-label="멀티캠퍼스 홈">
      <Image
        src="/images/common/logo_black.png"
        alt="multicampus"
        width={152}
        height={26}
        // LCP(헤더 로고): lazy 금지. 동일 src 가 푸터에도 있어 eager 로 맞춰 경고 방지
        loading="eager"
        fetchPriority="high"
      />
    </Link>
  )
}

function MenuLink ({ label, href }: Readonly<B2bMenuLink>) {
  const external = /^https?:\/\//.test(href)

  return (
    <Link
      to={href}
      target={external ? '_blank' : undefined}
      title={external ? '새 창 열림' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
    >
      {label}
      {external && (
        <Icon
          name="external"
          size={14}
          className="full-menu-content_external"
          aria-hidden
        />
      )}
    </Link>
  )
}

function MenuGroup ({ group }: Readonly<{ group: B2bMenuGroup }>) {
  return (
    <div className="full-menu-content_group">
      <h3>{group.href ? <MenuLink label={group.label} href={group.href} /> : group.label}</h3>
      {group.links.length > 0 && (
        <ul>
          {group.links.map((item) => (
            <li key={item.href}>
              <MenuLink {...item} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

/** 전체메뉴·회사소개 프리뷰와 헤더 레이어에서 같은 메뉴 구성을 사용합니다. */
export function FullMenuContent ({
  initialSection = 'business',
  onNavigate
}: Readonly<{
  initialSection?: 'business' | 'company'
  onNavigate?: () => void
}>) {
  return (
    <nav
      className="full-menu-content full-menu-content_default"
      aria-label="전체메뉴"
      onClick={(event) => {
        if ((event.target as HTMLElement).closest('a')) onNavigate?.()
      }}
    >
      <Accordion
        headingLevel={2}
        className="full-menu-content_accordion"
        defaultValue={initialSection}
        skin="flush"
        effect="none"
        collapsible
        renderItem={(item) => (
          <>
            <span>{item.label}</span>
            <Icon name="chevron-down" size={20} />
          </>
        )}
      >
        <AccordionItem
          value="business"
          className="full-menu-content_panel"
          label={
            <>
              기업교육
              <span aria-hidden="true">/</span>
              <span>서비스</span>
              <span aria-hidden="true">/</span>
              <span>HR인사이트</span>
              <span aria-hidden="true">/</span>
              <span>문의하기</span>
            </>
          }
        />
        <AccordionPanel value="business">
          <div className="full-menu-content_education">
            <h2>기업교육</h2>
            {b2bMenu.education.map((group) => (
              <MenuGroup key={group.label} group={group} />
            ))}
          </div>
          <div className="full-menu-content_secondary">
            <div className="full-menu-content_services">
              <h2>서비스</h2>
              <MenuGroup group={b2bMenu.services[0]} />
              <div className="full-menu-content_service-links">
                {b2bMenu.services.slice(1).map((group) => (
                  <MenuGroup key={group.label} group={group} />
                ))}
              </div>
            </div>
            <div className="full-menu-content_insights">
              <h2>HR인사이트</h2>
              <div>
                {b2bMenu.insights.map((group) => (
                  <MenuGroup key={group.label} group={group} />
                ))}
              </div>
            </div>
            <div className="full-menu-content_contact">
              <h2>문의하기</h2>
              <MenuGroup group={b2bMenu.contact} />
            </div>
          </div>
        </AccordionPanel>
        <AccordionItem value="company" label="회사소개" className="full-menu-content_panel" />
        <AccordionPanel value="company">
          <div className="full-menu-content_company">
            <h2>회사소개</h2>
            {b2bMenu.company.map((group) => (
              <MenuGroup key={group.label} group={group} />
            ))}
          </div>
        </AccordionPanel>
      </Accordion>
    </nav>
  )
}

/** 네이티브 모달로 초점 이동·Tab 순환·Escape 닫기를 제공합니다. */
export function FullMenu ({
  open,
  onClose,
  initialSection = 'business'
}: Readonly<{
  open: boolean
  onClose: () => void
  initialSection?: 'business' | 'company'
}>) {
  const dialog = useRef<HTMLDialogElement>(null)

  const handleKeyDown = useModalDialog(dialog, open)

  return (
    <dialog
      ref={dialog}
      className="full-menu full-menu_default"
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
            <Link
              className="icon-button"
              to="/b2b/common/integrated-search"
              aria-label="통합검색"
              onClick={onClose}
            >
              <Icon name="search" size={24} />
            </Link>
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
        {open && <FullMenuContent initialSection={initialSection} onNavigate={onClose} />}
      </div>
    </dialog>
  )
}
