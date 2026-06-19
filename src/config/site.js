export function getSiteOrigin() {
  const configured = import.meta.env.VITE_SITE_ORIGIN?.trim()
  if (configured) return configured.replace(/\/$/, '')

  if (typeof window !== 'undefined' && window.location?.origin) {
    return window.location.origin
  }

  return 'https://doc.uxkm.io'
}

export const DEFAULT_OG_IMAGE_PATH = '/images/og_image.png'

export function getDefaultOgImageUrl() {
  return `${getSiteOrigin()}${DEFAULT_OG_IMAGE_PATH}`
}
