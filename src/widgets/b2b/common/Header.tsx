'use client'

import { useId, useState, type HTMLAttributes } from 'react' // React
import { Link } from '@/lib/router' // 클라이언트 링크
import { Icon } from '@/comp/ui/Icon' // Icon 컴포넌트
import { B2bLogo, FullMenu } from './FullMenu' // Full Menu 컴포넌트
import { b2bMenu } from './menuData'
import { useMainDesignType } from '../main/useMainDesignType'
import { usePathname } from 'next/navigation'
import MainTopBanner from '../main/MainTopBanner'

const headerMenus = [
  { label: 'AX교육', href: '/b2b/contents/ax/overview', description: '조직의 AI 전환을 이끄는 통합 교육 로드맵을 제공합니다.', links: b2bMenu.education[0].links },
  { label: '직무교육', href: '/b2b/contents/job', description: '직무와 산업에 맞는 전문 역량 교육을 만나보세요.', links: b2bMenu.education[2].links },
  { label: '리더십', href: '/b2b/contents/leadership', description: '조직의 성장을 이끄는 리더십 교육을 제공합니다.', links: b2bMenu.education[3].links },
  { label: '고객사례', href: '/b2b#cases', description: '멀티캠퍼스와 함께한 기업의 교육 사례를 만나보세요.', links: [{ label: '고객사례', href: '/b2b#cases' }] },
  { label: '멀캠ON', href: '/b2b/insight/on/list', description: '기업교육과 HR의 새로운 인사이트를 만나보세요.', links: [{ label: '멀캠ON', href: '/b2b/insight/on/list' }, { label: '자료실', href: '/b2b/insight/resources/list' }] }
]

const typeBMenus = [
  ...headerMenus.slice(0, 2),
  { label: '외국어', href: '/b2b/contents/language', description: '글로벌 비즈니스를 위한 외국어 교육을 만나보세요.', links: b2bMenu.education.find(group => group.label === '외국어')?.links ?? [] },
  ...headerMenus.slice(2)
]

/** B2B 공통 헤더. Header 슬롯을 통해 모든 프로젝트 화면에서 사용합니다. */
export default function Header ({ className, ...rest }: Readonly<HTMLAttributes<HTMLElement>>) {
  const designType = useMainDesignType()
  const pathname = usePathname()
  const isMain = /^\/b2b\/?$/.test(pathname ?? '')
  const menus = designType === 'typeA' ? headerMenus : typeBMenus
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const menuId = useId()

  return (
    <header
      {...rest}
      data-header-scroll="fixed"
      className={`app-header header header_default header_${designType} ${className ?? ''}`}
    >
      <div className="header_inner">
        <B2bLogo adaptive={isMain && designType === 'typeB'} />
        <nav
          className="header_nav"
          aria-label="주요 메뉴"
          onMouseLeave={() => setActiveMenu(null)}
        >
          {menus.map((item, index) => {
            const expanded = activeMenu === item.label
            const triggerId = `${menuId}-trigger-${index}`
            const panelId = `${menuId}-panel-${index}`
            return (
              <div
                key={item.label}
                className="header_nav-item"
                onMouseEnter={() => setActiveMenu(item.label)}
                onBlur={(event) => {
                  const next = event.relatedTarget as Node | null
                  if (next && event.currentTarget.parentElement?.contains(next)) return
                  setActiveMenu(null)
                }}
                onKeyDown={(event) => {
                  if (event.key === 'Escape') {
                    event.preventDefault()
                    event.currentTarget.querySelector<HTMLAnchorElement>('.header_nav-link')?.focus()
                    setActiveMenu(null)
                  }
                  if (event.key === 'ArrowDown' && event.target === event.currentTarget.firstElementChild) {
                    event.preventDefault()
                    setActiveMenu(item.label)
                    const menu = event.currentTarget
                    requestAnimationFrame(() => menu.querySelector<HTMLAnchorElement>('.header_submenu a')?.focus())
                  }
                }}
              >
                <Link
                  id={triggerId}
                  to={item.href}
                  className={`header_nav-link${item.label === '멀캠ON' ? ' header_on' : ''}`}
                  aria-label={item.label}
                  aria-expanded={expanded}
                  aria-controls={panelId}
                  onFocus={() => setActiveMenu(item.label)}
                  onClick={() => setActiveMenu(null)}
                >
                  {item.label === '멀캠ON' ? <>멀캠<span className="header_on-badge" aria-hidden="true">ON</span></> : item.label}
                </Link>
                <div
                  id={panelId}
                  className="header_submenu"
                  aria-labelledby={triggerId}
                  hidden={!expanded}
                  onClick={(event) => {
                    if ((event.target as HTMLElement).closest('a')) setActiveMenu(null)
                  }}
                >
                  <div className="header_submenu-inner">
                    <div className="header_submenu-intro">
                      <strong>{item.label}</strong>
                      <p>{item.description}</p>
                      <Link className="header_submenu-more" to={item.href}>자세히보기 <Icon name="arrow-right" size={16} /></Link>
                    </div>
                    <ul className="header_submenu-links">
                      {item.links.map((link) => {
                        const external = /^https?:\/\//.test(link.href)
                        return (
                          <li key={link.href}>
                            <Link to={link.href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}>
                              {link.label}
                              {external && <Icon name="external" size={14} aria-hidden />}
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </nav>
        <div className="header_actions">
          <Link className="header_company" to="/b2b/company/intro">회사소개</Link>
          <Link className="header_inquiry" to="/b2b/contact/education">
            기업교육문의
            <Icon name="chevron-right" size={18} />
          </Link>
          <button
            type="button"
            className="icon-button"
            aria-label="통합검색"
            disabled
          >
            <Icon name="search" size={24} />
          </button>
          <button
            type="button"
            className="icon-button"
            aria-label="전체메뉴 열기"
            aria-haspopup="dialog"
            aria-expanded={menuOpen}
            onClick={() => { setActiveMenu(null); setMenuOpen(true) }}
          >
            <Icon name="menu" size={24} />
          </button>
        </div>
      </div>
      {isMain && designType === 'typeB' && <MainTopBanner />}
      <FullMenu
        designType={designType}
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </header>
  )
}
