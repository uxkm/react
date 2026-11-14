'use client'

import NextLink from 'next/link' // Next Link 컴포넌트
import { usePathname } from 'next/navigation' // 경로명 훅
import {
  forwardRef, // ref 전달
  type AnchorHTMLAttributes, // AnchorHTMLAttributes 타입
  type ReactNode // ReactNode 타입
} from 'react' // React
import { classNames } from '@/utils/style/classNames' // 조건부 className 조합

/**
 * 앱 내부 경로 정규화.
 * - `#/b2b` → `/b2b` (구 해시 라우터)
 * - `#cases` → `#cases` (페이지 내 앵커 유지)
 * - `b2b#cases` → `/b2b#cases` (선행 / 보정)
 * - `/b2b#cases` → 그대로
 */
export function toAppHref (url?: string | null) {
  if (url == null || url === '') return url as any
  const s = String(url).trim()
  if (s.startsWith('#/')) return s.slice(1)
  if (s.startsWith('#')) return s
  // 스킴·프로토콜 상대(//)가 아니고 / 로 시작하지 않으면 앱 경로로 본다
  if (!s.startsWith('/') && !s.includes(':') && !s.startsWith('//')) {
    return `/${s}`
  }
  return s
}

/**
 * pathname 과 hash 분리. Next Link UrlObject 용.
 * `#cases` 만 있으면 pathname 은 비워 두고, Link 가 현재 경로를 쓴다.
 */
export function splitAppHref (url?: string | null): { pathname?: string, hash?: string, href?: string } {
  const raw = toAppHref(url) || '/'
  if (raw.startsWith('#') && !raw.startsWith('#/')) {
    return { hash: raw.slice(1) }
  }
  const i = raw.indexOf('#')
  if (i < 0) return { pathname: raw || '/' }
  const pathname = raw.slice(0, i) || '/'
  const hash = raw.slice(i + 1)
  return hash ? { pathname, hash } : { pathname }
}

/** 링크 class. 문자이거나 활성 여부를 받는 함수 */
export type LinkClassName =
  | string
  | ((state: { isActive: boolean, isPending: boolean }) => string | undefined)

/** 앱 링크가 받는 값. to 는 내부 경로 */
export interface AppLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'className'> {
  to?: string
  href?: string
  end?: boolean
  className?: LinkClassName
  children?: ReactNode
  replace?: boolean
  prefetch?: boolean
}

/**
 * react-router-dom `<Link to>` 호환 (Next.js).
 * `/b2b#cases` 처럼 path+hash 는 UrlObject 로 넘겨 해시 이동이 유지되게 한다.
 */
export const Link = forwardRef<HTMLAnchorElement, AppLinkProps>(function Link (
  { to, href, className, end, children, replace, prefetch, onClick, ...rest },
  ref
) {
  const pathname = usePathname() || '/'
  const parts = splitAppHref(to ?? href ?? '/')
  const targetPath = parts.pathname ?? pathname
  const hash = parts.hash
  const nextHref = hash ? { pathname: targetPath, hash } : (parts.pathname || '/')

  const active = end
    ? pathname === targetPath
    : pathname === targetPath || (targetPath !== '/' && pathname.startsWith(`${targetPath}/`))

  const resolvedClass =
    typeof className === 'function'
      ? className({ isActive: active, isPending: false })
      : className

  return (
    <NextLink
      ref={ref}
      href={nextHref}
      replace={replace}
      prefetch={prefetch}
      className={classNames(resolvedClass)}
      {...rest}
      title={rest.target === '_blank' ? '새 창 열림' : rest.title}
      onClick={(event) => {
        onClick?.(event)
        // 같은 경로의 해시만 바뀔 때 App Router 가 스크롤을 생략하는 경우 보완
        if (
          !hash ||
          event.defaultPrevented ||
          event.metaKey ||
          event.ctrlKey ||
          event.shiftKey ||
          event.altKey ||
          rest.target === '_blank' ||
          pathname !== targetPath
        ) {
          return
        }
        const el = document.getElementById(hash)
        if (!el) return
        event.preventDefault()
        el.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' })
        if (!el.hasAttribute('tabindex')) {
          el.setAttribute('tabindex', '-1')
          el.addEventListener('blur', () => el.removeAttribute('tabindex'), { once: true })
        }
        // 메뉴 dialog의 같은 클릭에서 닫힘이 반영된 뒤 목적지로 이동합니다.
        requestAnimationFrame(() => { if (el.isConnected) el.focus({ preventScroll: true }) })
        const next = `${targetPath}#${hash}`
        if (`${window.location.pathname}${window.location.hash}` !== next) {
          window.history.pushState(null, '', next)
        }
      }}
    >
      {children}
    </NextLink>
  )
})

/** 현재 경로의 시각적 활성 표시와 보조기기에 제공하는 현재 페이지 상태를 일치시킵니다. */
export const NavLink = forwardRef<HTMLAnchorElement, AppLinkProps>(function NavLink (props, ref) {
  const pathname = usePathname() || '/'
  const target = splitAppHref(props.to ?? props.href)
  return <Link {...props} ref={ref} aria-current={props['aria-current'] ??
    (!target.hash && pathname === target.pathname ? 'page' : undefined)} />
})

export default Link
