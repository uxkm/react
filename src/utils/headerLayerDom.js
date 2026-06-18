const HD_LAYER_OPEN = 'hd_layer_open'

export function lockHeaderLayerDom() {
  if (typeof document === 'undefined') return
  const html = document.documentElement
  const wrap = document.querySelector('.uk_wrap')
  const header = document.querySelector('.uk_header')
  if (!wrap || !header) return
  const width = document.documentElement.clientWidth
  html.classList.add(HD_LAYER_OPEN)
  html.style.overflow = 'hidden'
  wrap.style.width = `${width}px`
  header.style.width = `${width}px`
}

export function unlockHeaderLayerDom() {
  if (typeof document === 'undefined') return
  const html = document.documentElement
  html.classList.remove(HD_LAYER_OPEN)
  html.style.removeProperty('overflow')
  for (const selector of ['.uk_wrap', '.uk_header']) {
    const el = document.querySelector(selector)
    if (el) el.style.removeProperty('width')
  }
}
