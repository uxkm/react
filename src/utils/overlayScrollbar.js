/**
 * Classic(윈도우 등) 환경에서 네이티브 스크롤바를 숨기고
 * macOS 같은 오버레이 썸을 그린다. 내용 너비에 영향을 주지 않는다.
 *
 * overlay OS(맥 기본)에서는 네이티브를 그대로 둔다.
 * data-native-scrollbar / [data-simplebar] 은 제외.
 */

const HOST_ID = 'osb-host'
const HIDE_MS = 900
const MIN_THUMB = 24

/** @type {WeakMap<Element, { vertical: HTMLElement, horizontal: HTMLElement, hideTimer: number }>} */
const controllers = new WeakMap()

/** @type {Set<Element>} */
const activeElements = new Set()

/** @type {WeakSet<Element>} */
const listening = new WeakSet()

let host = null
let started = false
let dragging = null

function prefersReducedMotion () {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function scrollbarSizePx () {
  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue('--scrollbar-size')
    .trim()
  const n = Number.parseFloat(raw)
  return Number.isFinite(n) ? n : 9
}

/** 스크롤바가 레이아웃 폭을 차지하는지 측정 */
export function isScrollbarObtrusive () {
  const outer = document.createElement('div')
  outer.style.cssText =
    'position:absolute;top:-9999px;width:100px;height:100px;overflow:scroll;visibility:hidden'
  document.documentElement.appendChild(outer)
  const obtrusive = outer.offsetWidth - outer.clientWidth > 0
  outer.remove()
  return obtrusive
}

/** html[data-scrollbar] 동기화 — FOUC 방지용 인라인 스크립트와 동일 로직 */
export function syncScrollbarMode () {
  const mode = isScrollbarObtrusive() ? 'classic' : 'overlay'
  document.documentElement.dataset.scrollbar = mode
  return mode
}

function ensureHost () {
  if (host?.isConnected) return host
  host = document.getElementById(HOST_ID)
  if (!host) {
    host = document.createElement('div')
    host.id = HOST_ID
    host.className = 'osb-host'
    host.setAttribute('aria-hidden', 'true')
    document.body.appendChild(host)
  }
  return host
}

function isViewportScroller (el) {
  return el === document.documentElement || el === document.body
}

function canScroll (el, axis) {
  if (!(el instanceof Element)) return false
  if (el.closest('[data-simplebar], [data-native-scrollbar]')) return false

  const style = getComputedStyle(el)
  // 의도적으로 스크롤바를 숨긴 영역 (--osb-skip: 1)
  if (style.getPropertyValue('--osb-skip').trim() === '1') return false


  // 문서 뷰포트는 overflow:visible 이어도 스크롤된다
  if (isViewportScroller(el)) {
    if (axis === 'y') {
      return document.documentElement.scrollHeight - window.innerHeight > 1
    }
    return document.documentElement.scrollWidth - window.innerWidth > 1
  }

  if (axis === 'y') {
    const overflowY = style.overflowY
    if (overflowY !== 'auto' && overflowY !== 'scroll' && overflowY !== 'overlay') {
      return false
    }
    return el.scrollHeight - el.clientHeight > 1
  }

  const overflowX = style.overflowX
  if (overflowX !== 'auto' && overflowX !== 'scroll' && overflowX !== 'overlay') {
    return false
  }
  return el.scrollWidth - el.clientWidth > 1
}

function findScrollable (start, axis) {
  let node = start instanceof Element ? start : null
  while (node && node !== document.documentElement) {
    if (node !== document.body && canScroll(node, axis)) return node
    node = node.parentElement
  }
  if (canScroll(document.documentElement, axis)) return document.documentElement
  return null
}

function createRail (axis) {
  const rail = document.createElement('div')
  rail.className = `osb osb_${axis === 'y' ? 'vertical' : 'horizontal'}`
  rail.style.display = 'none'
  const thumb = document.createElement('div')
  thumb.className = 'osb_thumb'
  thumb.dataset.axis = axis
  rail.appendChild(thumb)
  ensureHost().appendChild(rail)
  return rail
}

function getController (el) {
  let ctrl = controllers.get(el)
  if (ctrl) return ctrl

  ctrl = {
    vertical: createRail('y'),
    horizontal: createRail('x'),
    hideTimer: 0
  }
  controllers.set(el, ctrl)
  activeElements.add(el)

  ctrl.vertical.querySelector('.osb_thumb').addEventListener('pointerdown', (event) => {
    startDrag(event, el, 'y')
  })
  ctrl.horizontal.querySelector('.osb_thumb').addEventListener('pointerdown', (event) => {
    startDrag(event, el, 'x')
  })

  return ctrl
}

function clearHide (ctrl) {
  if (ctrl.hideTimer) {
    window.clearTimeout(ctrl.hideTimer)
    ctrl.hideTimer = 0
  }
}

function scheduleHide (ctrl) {
  clearHide(ctrl)
  if (dragging) return
  const delay = prefersReducedMotion() ? 0 : HIDE_MS
  ctrl.hideTimer = window.setTimeout(() => {
    ctrl.vertical.classList.remove('is-visible')
    ctrl.horizontal.classList.remove('is-visible')
    ctrl.hideTimer = 0
  }, delay)
}

function metrics (el) {
  const isRoot = isViewportScroller(el)
  const rect = isRoot
    ? {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
        right: window.innerWidth,
        bottom: window.innerHeight
      }
    : el.getBoundingClientRect()

  return {
    rect,
    scrollTop: isRoot ? window.scrollY : el.scrollTop,
    scrollLeft: isRoot ? window.scrollX : el.scrollLeft,
    scrollHeight: isRoot ? document.documentElement.scrollHeight : el.scrollHeight,
    scrollWidth: isRoot ? document.documentElement.scrollWidth : el.scrollWidth,
    clientHeight: isRoot ? window.innerHeight : el.clientHeight,
    clientWidth: isRoot ? window.innerWidth : el.clientWidth
  }
}

function updateRail (el, axis) {
  const ctrl = getController(el)
  const rail = axis === 'y' ? ctrl.vertical : ctrl.horizontal
  const thumb = rail.querySelector('.osb_thumb')
  const m = metrics(el)
  const size = scrollbarSizePx()

  const overflow =
    axis === 'y' ? m.scrollHeight - m.clientHeight : m.scrollWidth - m.clientWidth

  if (overflow <= 1) {
    rail.classList.remove('is-visible')
    rail.style.display = 'none'
    return rail
  }

  rail.style.display = ''

  if (axis === 'y') {
    rail.style.top = `${m.rect.top}px`
    rail.style.left = `${m.rect.right - size}px`
    rail.style.height = `${Math.max(0, m.rect.height)}px`
    rail.style.width = `${size}px`

    const track = m.clientHeight
    const thumbSize = Math.max(MIN_THUMB, (m.clientHeight / m.scrollHeight) * track)
    const maxTop = Math.max(0, track - thumbSize)
    const top = maxTop === 0 ? 0 : (m.scrollTop / overflow) * maxTop
    thumb.style.height = `${thumbSize}px`
    thumb.style.width = ''
    thumb.style.transform = `translateY(${top}px)`
  } else {
    rail.style.left = `${m.rect.left}px`
    rail.style.top = `${m.rect.bottom - size}px`
    rail.style.width = `${Math.max(0, m.rect.width)}px`
    rail.style.height = `${size}px`

    const track = m.clientWidth
    const thumbSize = Math.max(MIN_THUMB, (m.clientWidth / m.scrollWidth) * track)
    const maxLeft = Math.max(0, track - thumbSize)
    const left = maxLeft === 0 ? 0 : (m.scrollLeft / overflow) * maxLeft
    thumb.style.width = `${thumbSize}px`
    thumb.style.height = ''
    thumb.style.transform = `translateX(${left}px)`
  }

  return rail
}

function ensureScrollListener (el) {
  if (listening.has(el)) return
  listening.add(el)
  const onScroll = () => showFor(el)
  if (isViewportScroller(el)) {
    window.addEventListener('scroll', onScroll, { passive: true })
  } else {
    el.addEventListener('scroll', onScroll, { passive: true })
  }
}

function showFor (el) {
  if (!(el instanceof Element) || !el.isConnected) return

  const ctrl = getController(el)
  clearHide(ctrl)
  ensureScrollListener(el)

  const y = canScroll(el, 'y')
  const x = canScroll(el, 'x')

  if (y) {
    updateRail(el, 'y').classList.add('is-visible')
  } else {
    ctrl.vertical.style.display = 'none'
    ctrl.vertical.classList.remove('is-visible')
  }

  if (x) {
    updateRail(el, 'x').classList.add('is-visible')
  } else {
    ctrl.horizontal.style.display = 'none'
    ctrl.horizontal.classList.remove('is-visible')
  }

  scheduleHide(ctrl)
}

function startDrag (event, el, axis) {
  if (event.button !== 0) return
  event.preventDefault()
  event.stopPropagation()

  const ctrl = getController(el)
  const rail = axis === 'y' ? ctrl.vertical : ctrl.horizontal
  const m = metrics(el)
  const overflow =
    axis === 'y' ? m.scrollHeight - m.clientHeight : m.scrollWidth - m.clientWidth
  const track = axis === 'y' ? m.clientHeight : m.clientWidth
  const thumbSize =
    axis === 'y'
      ? Math.max(MIN_THUMB, (m.clientHeight / m.scrollHeight) * track)
      : Math.max(MIN_THUMB, (m.clientWidth / m.scrollWidth) * track)
  const maxPos = Math.max(0, track - thumbSize)
  const startPointer = axis === 'y' ? event.clientY : event.clientX
  const startScroll = axis === 'y' ? m.scrollTop : m.scrollLeft

  dragging = { el, axis }
  clearHide(ctrl)
  rail.classList.add('is-visible', 'is-dragging')

  const onMove = (moveEvent) => {
    if (!dragging) return
    const delta =
      (axis === 'y' ? moveEvent.clientY : moveEvent.clientX) - startPointer
    const scrollDelta = maxPos <= 0 ? 0 : (delta / maxPos) * overflow
    const next = startScroll + scrollDelta
    if (isViewportScroller(el)) {
      if (axis === 'y') window.scrollTo({ top: next })
      else window.scrollTo({ left: next })
    } else if (axis === 'y') {
      el.scrollTop = next
    } else {
      el.scrollLeft = next
    }
    updateRail(el, axis)
  }

  const onUp = () => {
    dragging = null
    rail.classList.remove('is-dragging')
    window.removeEventListener('pointermove', onMove)
    window.removeEventListener('pointerup', onUp)
    window.removeEventListener('pointercancel', onUp)
    scheduleHide(ctrl)
  }

  window.addEventListener('pointermove', onMove)
  window.addEventListener('pointerup', onUp)
  window.addEventListener('pointercancel', onUp)
}

function onScrollCapture (event) {
  const el = event.target
  if (el instanceof Element && (canScroll(el, 'y') || canScroll(el, 'x'))) {
    showFor(el)
    return
  }
  if (canScroll(document.documentElement, 'y') || canScroll(document.documentElement, 'x')) {
    showFor(document.documentElement)
  }
}

function onPointerOver (event) {
  const y = findScrollable(event.target, 'y')
  const x = findScrollable(event.target, 'x')
  if (y) showFor(y)
  if (x && x !== y) showFor(x)
}

function onResize () {
  for (const el of [...activeElements]) {
    if (!el.isConnected) {
      activeElements.delete(el)
      continue
    }
    const ctrl = controllers.get(el)
    if (!ctrl) continue
    if (ctrl.vertical.classList.contains('is-visible') || ctrl.horizontal.classList.contains('is-visible')) {
      showFor(el)
    } else {
      updateRail(el, 'y')
      updateRail(el, 'x')
    }
  }
}

/** classic 환경에서만 오버레이 스크롤바를 켠다 */
export function initOverlayScrollbar () {
  if (started || typeof window === 'undefined') return () => {}
  started = true

  const mode = syncScrollbarMode()
  if (mode !== 'classic') {
    return () => {
      started = false
    }
  }

  ensureHost()

  document.addEventListener('scroll', onScrollCapture, { capture: true, passive: true })
  document.addEventListener('pointerover', onPointerOver, { passive: true })
  window.addEventListener('resize', onResize, { passive: true })

  return () => {
    document.removeEventListener('scroll', onScrollCapture, { capture: true })
    document.removeEventListener('pointerover', onPointerOver)
    window.removeEventListener('resize', onResize)
    host?.remove()
    host = null
    activeElements.clear()
    started = false
    dragging = null
  }
}
