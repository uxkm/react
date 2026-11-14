/**
 * PathLinkCell
 * - PageUrl / 파일 경로 / 기획·디자인 칸용 링크 셀
 * - toAppHref·resolveLinkField·linkFieldSearchText 헬퍼도 함께 제공
 */
import { b2b } from '@/generated/b2b' // B2B 프로젝트 메타 (urlBase)
import { ellipsisAttr } from './useEllipsisTooltip.jsx' // ellipsis Attr

/** `#/b2b/login` → `/b2b/login` */
function stripHashRoute (url) {
  if (url == null || url === '') return url
  const s = String(url)
  if (s.startsWith('#/')) return s.slice(1)
  if (s.startsWith('#')) return '/' + s.slice(1)
  return s
}

/**
 * 퍼블 목록 pageUrl → 실제 앱 href
 * - http(s)·프로토콜 URL 은 그대로
 * - 이미 urlBase(/b2b 또는 /b2b/kr) 또는 레거시 /b2b 로 시작하면 그대로
 * - 페이지 경로만 있으면 urlBase 를 앞에 붙임 (예: contents/ax → /b2b/contents/ax)
 */
export function toAppHref (url, urlBase = b2b?.urlBase) {
  const raw = stripHashRoute(url)
  if (raw == null || raw === '') return raw
  if (/^[a-z][a-z0-9+.-]*:/i.test(raw) || raw.startsWith('//')) return raw

  const base = String(urlBase || '').replace(/\/+$/, '')
  if (!base) return raw

  if (
    raw === base ||
    raw.startsWith(base + '/') ||
    raw.startsWith(base + '?') ||
    raw.startsWith(base + '#')
  ) {
    return raw
  }

  // 기존 목록 JSON 의 절대 /b2b 경로 (urlBase 를 /b2b/kr 로 바꾸기 전 호환)
  if (
    raw === '/b2b' ||
    raw.startsWith('/b2b/') ||
    raw.startsWith('/b2b?') ||
    raw.startsWith('/b2b#')
  ) {
    return raw
  }

  const path = raw.replace(/^\/+/, '')
  return path ? base + '/' + path : base
}

/**
 * 기획/디자인 등 링크 필드 정규화
 * - 문자열: URL만
 * - 객체: { label, url|href }
 */
export function resolveLinkField (value) {
  if (value == null || value === '') return { href: '', label: '' }
  if (typeof value === 'object') {
    return {
      href: String(value.url || value.href || ''),
      label: String(value.label || value.name || '')
    }
  }
  return { href: String(value), label: '' }
}

/** 검색용 텍스트 (라벨 + URL) */
export function linkFieldSearchText (value) {
  const { href, label } = resolveLinkField(value)
  return [label, href].filter(Boolean).join(' ')
}

export default function PathLinkCell ({ href, label }) {
  const appHref = toAppHref(href)
  if (!appHref) return <span className="path-empty">-</span>

  const text = label || appHref
  return (
    <a
      className="path-link"
      href={appHref}
      target="_blank"
      title="새 창 열림"
      rel="noopener noreferrer"
    >
      {label
        ? <span className="path-link_label" {...ellipsisAttr}>{text}</span>
        : <code {...ellipsisAttr}>{text}</code>}
    </a>
  )
}
