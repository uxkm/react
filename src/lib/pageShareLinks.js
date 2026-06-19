import { getSiteOrigin } from '@/config/site'

function encodeShareParam(value) {
  return encodeURIComponent(String(value ?? '').trim())
}

export function buildPageShareUrl(pathname) {
  const origin = getSiteOrigin()
  const path = String(pathname ?? '').trim()
  if (!path || path === '/') return origin
  return `${origin}${path.startsWith('/') ? path : `/${path}`}`
}

export function getPageShareTitle() {
  if (typeof document === 'undefined') return 'UXKM'
  return document.title?.trim() || 'UXKM'
}

export function buildTwitterShareUrl({ url, title }) {
  const params = new URLSearchParams({
    url,
    text: title,
  })
  return `https://twitter.com/intent/tweet?${params.toString()}`
}

export function buildFacebookShareUrl({ url }) {
  return `https://www.facebook.com/sharer/sharer.php?u=${encodeShareParam(url)}`
}

export function buildNaverShareUrl({ url, title }) {
  const params = new URLSearchParams({
    url,
    title,
  })
  return `https://share.naver.com/web/shareView?${params.toString()}`
}

export async function copyPageShareUrl(url) {
  if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(url)
    return
  }

  if (typeof document === 'undefined') {
    throw new Error('clipboard_unavailable')
  }

  const textarea = document.createElement('textarea')
  textarea.value = url
  textarea.setAttribute('readonly', '')
  textarea.style.position = 'fixed'
  textarea.style.opacity = '0'
  document.body.appendChild(textarea)
  textarea.select()
  const copied = document.execCommand('copy')
  document.body.removeChild(textarea)

  if (!copied) throw new Error('clipboard_unavailable')
}
