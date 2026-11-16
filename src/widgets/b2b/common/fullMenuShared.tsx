'use client'

import Image from 'next/image'
import { Link } from '@/lib/router'
import { Icon } from '@/comp/ui/Icon'
import { type B2bMenuGroup, type B2bMenuLink } from './menuData'

export function B2bLogo ({ adaptive = false }: { adaptive?: boolean }) {
  return (
    <Link to="/b2b" className="logo" aria-label="멀티캠퍼스 홈">
      <Image
        className="logo_dark"
        src="/images/common/logo_black.png"
        alt="multicampus"
        width={152}
        height={26}
        // LCP(헤더 로고): lazy 금지. 동일 src 가 푸터에도 있어 eager 로 맞춰 경고 방지
        loading="eager"
        fetchPriority="high"
      />
      {adaptive && (
        <Image className="logo_light" src="/images/common/logo.png" alt="" aria-hidden="true" width={152} height={26} loading="eager" />
      )}
    </Link>
  )
}

export function MenuLink ({ label, href }: Readonly<B2bMenuLink>) {
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

export function MenuGroup ({ group }: Readonly<{ group: B2bMenuGroup }>) {
  return (
    <div className="full-menu-content_group">
      <h3>{group.href ? <MenuLink label={group.label} href={group.href} /> : group.label}</h3>
      {group.links.length > 0 && (
        <ul>
          {group.links.map((item) => (
            <li key={`${item.href}-${item.label}`}>
              <MenuLink {...item} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
