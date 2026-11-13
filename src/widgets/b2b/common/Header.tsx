'use client'

import { useState, type HTMLAttributes } from 'react' // React
import { Link } from '@/lib/router' // 클라이언트 링크
import { Icon } from '@/comp/ui/Icon' // Icon 컴포넌트
import { B2bLogo, FullMenu } from './FullMenu' // Full Menu 컴포넌트

/** B2B 공통 헤더. Header 슬롯을 통해 모든 프로젝트 화면에서 사용합니다. */
export default function Header ({ className, ...rest }: Readonly<HTMLAttributes<HTMLElement>>) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header
      {...rest}
      data-header-scroll="fixed"
      className={`app-header header header_default ${className ?? ''}`}
    >
      <div className="header_inner">
        <B2bLogo />
        <nav className="header_nav" aria-label="주요 메뉴">
          <Link to="/b2b/contents/ax/overview">AX교육</Link>
          <Link to="/b2b/contents/job">직무교육</Link>
          <Link to="/b2b/contents/leadership">리더십</Link>
          <Link to="/b2b#cases">고객사례</Link>
          <Link to="/b2b/insight/on/list" className="header_on" aria-label="멀캠ON">
            멀캠
            <span className="header_on-badge" aria-hidden="true">ON</span>
          </Link>
        </nav>
        <div className="header_actions">
          <Link className="header_company" to="/b2b/company/intro">회사소개</Link>
          <Link className="header_inquiry" to="/b2b/contact/education">
            기업교육문의
            <Icon name="chevron-right" size={18} />
          </Link>
          <Link
            className="icon-button"
            to="/b2b/common/integrated-search"
            aria-label="통합검색"
          >
            <Icon name="search" size={24} />
          </Link>
          <button
            type="button"
            className="icon-button"
            aria-label="전체메뉴 열기"
            aria-haspopup="dialog"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <Icon name="menu" size={24} />
          </button>
        </div>
      </div>
      <FullMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  )
}
