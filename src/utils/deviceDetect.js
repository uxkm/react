/**
 * deviceDetect
 *
 * Modern, dependency-free port of `src/assets/lib/ukDetect-1.0.0.js`.
 *
 * Detects the user's device class (`device` / `desktop`), OS (e.g. `macos`,
 * `winos`, `ios`, `android`) and browser (e.g. `chrome`, `safari`, `edge`,
 * `whale`) once per page load and exposes helpers that mirror the original
 * jQuery plugin so existing SCSS selectors (`.device`, `.desktop`, `.chrome`,
 * `.ios apple_os` ...) keep working unchanged.
 *
 * Usage:
 *   import { applyDetectClassesToHtml, applyDetectClassesTo } from '.../deviceDetect.js'
 *   applyDetectClassesToHtml()        // apply to <html>
 *   applyDetectClassesTo(el, { deviceCheck: true })
 */

const IE_NO = 'ie_no'
const NEW_B = 'new_b'
const OLD_B = 'old_b'

let cached = null

function isDeviceUserAgent(ua) {
  return ua.indexOf('Mobile') !== -1
}

function detectBrowser(ua) {
  const lower = ua.toLowerCase()

  if (lower.indexOf('msie') > -1 || lower.indexOf('trident') > -1) {
    let version = 11
    const match = /msie ([0-9]{1,}[.0-9]{0,})/.exec(lower)
    if (match) version = parseInt(match[1], 10)
    const ieClasses = [`ie${version}`, version < 10 ? OLD_B : NEW_B]
    for (let i = version + 1; i <= 11; i += 1) ieClasses.push(`lt-ie${i}`)
    return { name: 'ie', classes: ['ie', ...ieClasses], ieVersion: version, ieClass: ieClasses.join(' ') }
  }
  if (lower.indexOf('edg/') > -1 || lower.indexOf('edge') > -1) {
    return { name: 'edge', classes: ['edge', 'ie', NEW_B], ieVersion: null, ieClass: '' }
  }
  if (lower.indexOf('whale') > -1) {
    return { name: 'whale', classes: ['whale', IE_NO, NEW_B], ieVersion: null, ieClass: '' }
  }
  if (lower.indexOf('firefox') > -1) {
    return { name: 'firefox', classes: ['firefox', IE_NO, NEW_B], ieVersion: null, ieClass: '' }
  }
  if (lower.indexOf('opr') > -1) {
    return { name: 'opera', classes: ['opera', IE_NO, NEW_B], ieVersion: null, ieClass: '' }
  }
  if (lower.indexOf('chrome') > -1) {
    return { name: 'chrome', classes: ['chrome', IE_NO, NEW_B], ieVersion: null, ieClass: '' }
  }
  if (lower.indexOf('safari') > -1) {
    return { name: 'safari', classes: ['safari', IE_NO, NEW_B], ieVersion: null, ieClass: '' }
  }
  if (lower.indexOf('netscape') > -1) {
    return { name: 'netscape', classes: ['netscape', IE_NO], ieVersion: null, ieClass: '' }
  }
  if (lower.indexOf('skipstone') > -1) {
    return { name: 'skipstone', classes: ['skipstone', IE_NO, NEW_B], ieVersion: null, ieClass: '' }
  }
  return { name: 'etc_browser', classes: ['etc_browser', IE_NO], ieVersion: null, ieClass: '' }
}

function detectDesktopOs(ua) {
  if (ua.indexOf('Mac OS X') !== -1) return { name: 'macos', classes: ['macos', 'apple_os'] }
  return { name: 'winos', classes: ['winos'] }
}

function detectDeviceOs(ua) {
  if (/iPhone|iPod|iPad/i.test(ua)) return { name: 'ios', classes: ['ios', 'apple_os'] }
  if (/Android/i.test(ua)) return { name: 'android', classes: ['android'] }
  if (/Windows CE/i.test(ua)) return { name: 'wince', classes: ['wince'] }
  if (/Windows Phone/i.test(ua)) return { name: 'winphone', classes: ['winphone'] }
  if (/Windows NT/i.test(ua)) return { name: 'winnt', classes: ['winnt'] }
  if (/BlackBerry/i.test(ua)) return { name: 'blackberry', classes: ['blackberry'] }
  if (/Symbian/i.test(ua)) return { name: 'symbian', classes: ['symbian'] }
  if (/MeeGo/i.test(ua)) return { name: 'meego', classes: ['meego'] }
  if (/PlayBook/i.test(ua)) return { name: 'playbook', classes: ['playbook'] }
  return { name: 'etc_os', classes: ['etc_os'] }
}

function compute() {
  if (typeof navigator === 'undefined') {
    return {
      deviceType: 'desktop',
      desktopOs: 'winos',
      desktopOsClasses: ['winos'],
      deviceOs: 'etc_os',
      deviceOsClasses: ['etc_os'],
      browser: 'chrome',
      browserClasses: ['chrome', IE_NO, NEW_B],
      ieVersion: null,
      ieClass: '',
      allClasses: [],
    }
  }

  const ua = navigator.userAgent
  const isDevice = isDeviceUserAgent(ua)
  const all = []

  let deviceOs = { name: 'etc_os', classes: [] }
  let desktopOs = { name: 'winos', classes: [] }
  let browser = {
    name: 'etc_browser',
    classes: ['etc_browser', IE_NO],
    ieVersion: null,
    ieClass: '',
  }

  if (isDevice) {
    all.push('device')
    deviceOs = detectDeviceOs(ua)
    // ukDetect adds `${os} ie_no new_b` when the browser was not separately detected
    all.push(...deviceOs.classes, IE_NO, NEW_B)
  } else {
    all.push('desktop')
    desktopOs = detectDesktopOs(ua)
    browser = detectBrowser(ua)
    all.push(...desktopOs.classes)
    all.push(...browser.classes)
  }

  return {
    deviceType: isDevice ? 'device' : 'desktop',
    desktopOs: desktopOs.name,
    desktopOsClasses: desktopOs.classes,
    deviceOs: deviceOs.name,
    deviceOsClasses: deviceOs.classes,
    browser: browser.name,
    browserClasses: browser.classes,
    ieVersion: browser.ieVersion ?? null,
    ieClass: browser.ieClass ?? '',
    allClasses: dedupe(all),
  }
}

function dedupe(list) {
  return Array.from(new Set(list.filter(Boolean)))
}

export function getDetect() {
  if (!cached) cached = compute()
  return cached
}

/**
 * Applies the full detection class string to <html>, mirroring the original
 * `root_html.className += detectAdd` behaviour from `ukDetect-1.0.0.js`.
 * Idempotent: safe to call multiple times.
 */
export function applyDetectClassesToHtml() {
  if (typeof document === 'undefined') return
  const html = document.documentElement
  if (html.dataset.ukDetectApplied === 'true') return
  const result = getDetect()
  html.classList.add(...result.allClasses)
  html.dataset.ukDetectApplied = 'true'
}

/**
 * Applies detection classes to a specific element using the same option shape
 * as the previous jQuery plugin (`$.fn.ukDetect`).
 *
 * Options:
 *   - allCheck (default true): apply every detected class. Ignored when one of
 *     the granular flags is enabled.
 *   - deviceCheck: add only the device-vs-desktop class.
 *   - osCheck: add the OS class (with `ie_no new_b` suffix on devices, like the
 *     original plugin).
 *   - browserCheck: add the browser class (and IE version classes when needed).
 */
export function applyDetectClassesTo(element, options = {}) {
  if (!element || typeof document === 'undefined') return
  const result = getDetect()
  const allCheck = options.allCheck ?? options.all_check ?? true
  const deviceCheck = options.deviceCheck ?? options.device_check ?? false
  const osCheck = options.osCheck ?? options.os_check ?? false
  const browserCheck = options.browserCheck ?? options.browser_check ?? false

  // previous semantics: all_check is ignored when any granular check is set
  if (allCheck && !deviceCheck && !osCheck && !browserCheck) {
    element.classList.add(...result.allClasses)
    return
  }

  if (deviceCheck) {
    element.classList.add(result.deviceType)
  }
  if (osCheck) {
    if (result.deviceType === 'device') {
      element.classList.add(...result.deviceOsClasses, IE_NO, NEW_B)
    } else {
      element.classList.add(...result.desktopOsClasses)
    }
  }
  if (browserCheck) {
    element.classList.add(...result.browserClasses)
  }
}

export default {
  getDetect,
  applyDetectClassesToHtml,
  applyDetectClassesTo,
}
