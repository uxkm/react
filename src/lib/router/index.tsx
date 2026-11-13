'use client'

import NextLink from 'next/link' // Next Link 컴포넌트
import { usePathname } from 'next/navigation' // 경로명 훅
import {
  forwardRef, // ref 전달
  type AnchorHTMLAttributes, // AnchorHTMLAttributes 타입
  type ReactNode // ReactNode 타입
} from 'react' // React
import { classNames } from '@/utils/classNames' // 조건부 className 조합

/** `#/b2b/login` → `/b2b/login` */
export function toAppHref (url?: string | null) {
  if (url == null || url === '') return url as any
  const s = String(url)
  if (s.startsWith('#/')) return s.slice(1)
  if (s.startsWith('#')) return '/' + s.slice(1)
  return s
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
 * react-router-dom `<Link to>` 호환 (Next.js)
 */
export const Link = forwardRef<HTMLAnchorElement, AppLinkProps>(function Link (
  { to, href, className, end, children, replace, prefetch, ...rest },
  ref
) {
  const pathname = usePathname() || '/'
  const target = toAppHref(to ?? href ?? '/') || '/'
  const active = end
    ? pathname === target
    : pathname === target || (target !== '/' && pathname.startsWith(String(target) + '/'))

  const resolvedClass =
    typeof className === 'function'
      ? className({ isActive: active, isPending: false })
      : className

  return (
    <NextLink
      ref={ref}
      href={target}
      replace={replace}
      prefetch={prefetch}
      className={classNames(resolvedClass)}
      {...rest}
      title={rest.target === '_blank' ? '새 창 열림' : rest.title}
    >
      {children}
    </NextLink>
  )
})

/** NavLink 별칭 */
export const NavLink = Link

export default Link
