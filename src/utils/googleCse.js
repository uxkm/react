const CSE_SCRIPT_ID = 'uxkm-google-cse'
const GCSE_CX = '2f82e6208e7e1bdd0'

export const GCSE_CONTAINER_ID = 'uxkm-gcse-search'
export const GCSE_GNAME = 'uxkm-search'

const renderWaiters = []

function notifyRenderWaiters() {
  const waiters = renderWaiters.splice(0, renderWaiters.length)
  for (const waiter of waiters) {
    try {
      waiter()
    } catch {
      // CSE 후처리 실패는 검색 UI 전체를 막지 않음
    }
  }
}

function setupGcseConfig() {
  if (typeof window === 'undefined') return

  window.__gcse = window.__gcse || {}
  if (window.__gcse.__uxkmExplicit) return

  window.__gcse.__uxkmExplicit = true
  window.__gcse.parsetags = 'explicit'

  const previousCallback = window.__gcse.callback
  window.__gcse.callback = () => {
    if (typeof previousCallback === 'function') previousCallback()
    notifyRenderWaiters()
  }
}

export function renderGoogleCseSearch() {
  if (typeof document === 'undefined') return false

  const container = document.getElementById(GCSE_CONTAINER_ID)
  if (!container) return false
  if (container.dataset.rendered === 'true') return true

  const render = window.google?.search?.cse?.element?.render
  if (typeof render !== 'function') return false

  render({
    div: GCSE_CONTAINER_ID,
    tag: 'search',
    gname: GCSE_GNAME,
  })
  container.dataset.rendered = 'true'
  return true
}

export function getGoogleCseElement() {
  return window.google?.search?.cse?.element?.getElement?.(GCSE_GNAME) ?? null
}

export function clearGoogleCseSearchResults() {
  getGoogleCseElement()?.clearAllResults?.()
}

export function runGoogleCseSearch(searchRoot, query) {
  const trimmed = (query ?? '').trim()
  if (!trimmed) return false

  const cseElement = getGoogleCseElement()
  if (!cseElement?.execute) return false

  cseElement.execute(trimmed)
  if (searchRoot) {
    searchRoot.dataset.userSearchPending = 'true'
    searchRoot.dataset.hadSearchQuery = 'true'
  }
  return true
}

/** 입력 삭제 후 검색 전 상태(입력폼만)로 복귀 */
export function resetSearchResultsChrome(searchRoot) {
  if (!searchRoot || searchRoot.dataset.resetPending === 'true') return false

  searchRoot.dataset.resetPending = 'true'
  searchRoot.dataset.userSearchPending = 'false'
  searchRoot.dataset.hadSearchQuery = 'false'
  searchRoot.scrollTo({ top: 0, behavior: 'smooth' })

  window.setTimeout(() => {
    clearGoogleCseSearchResults()
    searchRoot.removeAttribute('data-reset-pending')
  }, 250)

  return true
}

export function bindGoogleCseSearchHandlers(searchRoot) {
  if (!searchRoot || searchRoot.dataset.searchHandlersBound === 'true') return false

  const input = searchRoot.querySelector('input.gsc-input')
  if (!input) return false

  const submitSearch = (event) => {
    if (event.type === 'keydown') {
      if (event.key !== 'Enter') return
      event.preventDefault()
    }
    runGoogleCseSearch(searchRoot, input.value)
  }

  input.addEventListener('keydown', submitSearch)
  searchRoot.dataset.searchHandlersBound = 'true'
  return true
}

export function bindGoogleCseClearHandler(searchRoot) {
  if (!searchRoot || searchRoot.dataset.clearHandlersBound === 'true') return false

  const input = searchRoot.querySelector('input.gsc-input')
  if (!input) return false

  let resetTimer = null
  const scheduleReset = () => {
    if (resetTimer) window.clearTimeout(resetTimer)
    resetTimer = window.setTimeout(() => {
      resetTimer = null
      if (input.value.trim()) return
      if (searchRoot.dataset.hadSearchQuery !== 'true') return
      resetSearchResultsChrome(searchRoot)
    }, 100)
  }

  searchRoot.addEventListener('click', (event) => {
    if (event.target.closest('a.gsst_a, .gsc-clear-button, .gsc-clear-button button')) {
      scheduleReset()
    }
  })

  input.addEventListener('input', scheduleReset)
  searchRoot.dataset.clearHandlersBound = 'true'
  return true
}

export function ensureGoogleCseSearch(onReady) {
  if (typeof document === 'undefined') return

  setupGcseConfig()

  if (typeof onReady === 'function') {
    renderWaiters.push(onReady)
  }

  if (renderGoogleCseSearch()) {
    notifyRenderWaiters()
    return
  }

  if (document.getElementById(CSE_SCRIPT_ID)) return

  const script = document.createElement('script')
  script.id = CSE_SCRIPT_ID
  script.async = true
  script.src = `https://cse.google.com/cse.js?cx=${GCSE_CX}`
  document.body.appendChild(script)
}

export function scrollSearchLayerToResults(searchRoot) {
  if (!searchRoot) return

  const results = searchRoot.querySelector('.gsc-results-wrapper-visible')
  if (!results) return

  const anchor = searchRoot.querySelector('.gsc-refinementsArea, .gsc-above-wrapper-area')
  const target = anchor ?? results
  const offsetTop =
    target.getBoundingClientRect().top -
    searchRoot.getBoundingClientRect().top +
    searchRoot.scrollTop

  searchRoot.scrollTo({
    top: Math.max(0, offsetTop - 8),
    behavior: 'smooth',
  })
}

const AUTOCOMPLETE_LAYER_SELECTOR = 'table.gssb_c, .gssb_c'

function getGoogleCseAutocompleteLayers() {
  if (typeof document === 'undefined') return []
  return document.querySelectorAll(AUTOCOMPLETE_LAYER_SELECTOR)
}

/** Google CSE 자동완성 레이어 숨김 (검색 레이어 닫을 때) */
export function hideGoogleCseAutocomplete() {
  for (const layer of getGoogleCseAutocompleteLayers()) {
    layer.style.setProperty('display', 'none', 'important')
  }
}

/**
 * Google CSE 자동완성(.gssb_c)은 body에 붙으며 offset 계산이
 * fixed/transform 검색 레이어 안의 입력과 어긋날 수 있어 viewport 기준으로 재배치한다.
 */
export function repositionGoogleCseAutocomplete(searchRoot) {
  const input = searchRoot?.querySelector('input.gsc-input')
  if (!input) return

  const rect = input.getBoundingClientRect()
  if (rect.width <= 0 && rect.height <= 0) return

  const top = Math.round(rect.bottom)
  const left = Math.round(rect.left)
  const width = Math.round(rect.width)

  for (const layer of getGoogleCseAutocompleteLayers()) {
    const computed = window.getComputedStyle(layer)
    if (computed.display === 'none' || computed.visibility === 'hidden') continue

    layer.style.setProperty('position', 'fixed', 'important')
    layer.style.setProperty('top', `${top}px`, 'important')
    layer.style.setProperty('left', `${left}px`, 'important')
    layer.style.setProperty('width', `${width}px`, 'important')
  }
}

export function bindGoogleCseAutocompletePosition(searchRoot, { signal } = {}) {
  if (!searchRoot) return false

  const input = searchRoot.querySelector('input.gsc-input')
  if (!input) return false

  const scheduleReposition = () => {
    window.requestAnimationFrame(() => repositionGoogleCseAutocomplete(searchRoot))
  }

  const on = (target, type, handler, options) => {
    target.addEventListener(type, handler, options)
    signal?.addEventListener('abort', () => target.removeEventListener(type, handler, options))
  }

  on(input, 'focus', scheduleReposition)
  on(input, 'input', scheduleReposition)
  on(input, 'keydown', scheduleReposition)
  on(searchRoot, 'scroll', scheduleReposition, { passive: true })
  on(window, 'resize', scheduleReposition)

  const inner = searchRoot.querySelector('.inner')
  if (inner) {
    on(inner, 'transitionend', scheduleReposition)
  }

  const bodyObserver = new MutationObserver((mutations) => {
    const autocompleteAdded = mutations.some((mutation) =>
      [...mutation.addedNodes].some(
        (node) =>
          node.nodeType === 1 &&
          (node.matches?.(AUTOCOMPLETE_LAYER_SELECTOR) ||
            node.querySelector?.(AUTOCOMPLETE_LAYER_SELECTOR)),
      ),
    )
    if (autocompleteAdded) scheduleReposition()
  })
  bodyObserver.observe(document.body, { childList: true })
  signal?.addEventListener('abort', () => bodyObserver.disconnect())

  const openTimer = window.setTimeout(scheduleReposition, 450)
  signal?.addEventListener('abort', () => window.clearTimeout(openTimer))

  scheduleReposition()
  return true
}
