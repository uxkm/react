/**
 * codeSamples
 *
 * React port of the previous `$.get('/_code_samples/'+target, ...)` calls in
 * `uk_common.js` / `uk_editor.js`. Code samples now live under
 * `public/code_samples/` so they are served as static assets at
 * `/code_samples/...`, identical to the previous folder layout but namespaced
 * without the leading underscore.
 *
 * `loadCodeSample(target)` accepts the same relative path the previous
 * `data-target` attribute used (`html/02-blockInline/2.1.block_element_1.html`)
 * and returns a Promise of the raw file contents. Results are cached so
 * repeated reads inside a single page hit the network only once.
 */

const cache = new Map()

function normalizeTarget(target) {
  if (!target) return ''
  return String(target).replace(/^\/+/, '').replace(/^code_samples\//, '')
}

export function getCodeSampleUrl(target) {
  const path = normalizeTarget(target)
  if (!path) return ''
  const base = (typeof import.meta !== 'undefined' && import.meta.env?.BASE_URL) || '/'
  return `${base.replace(/\/+$/, '')}/code_samples/${path}`
}

export async function loadCodeSample(target, options = {}) {
  const { signal } = options
  const path = normalizeTarget(target)
  if (!path) return ''

  if (cache.has(path)) return cache.get(path)

  const url = getCodeSampleUrl(target)
  const response = await fetch(url, { signal })
  if (!response.ok) {
    throw new Error(`Failed to load code sample: ${path} (${response.status})`)
  }
  const text = await response.text()
  cache.set(path, text)
  return text
}

export function clearCodeSampleCache() {
  cache.clear()
}
