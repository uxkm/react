export function getSiteOrigin() {
  const configured = import.meta.env.VITE_SITE_ORIGIN?.trim()
  if (configured) return configured.replace(/\/$/, '')

  if (typeof window !== 'undefined' && window.location?.origin) {
    return window.location.origin
  }

  return 'https://uxkm.io'
}
