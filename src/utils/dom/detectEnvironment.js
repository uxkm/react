/**
 * OS·브라우저·디바이스를 감지해 <html>에 class를 붙인다.
 * 예: is-desktop is-chrome is-macos is-touch-device
 */
import { DetecctioJS } from 'detecctio' // Detecctio JS 컴포넌트

let instance = null

/** document.documentElement 에 감지 class 적용. 중복 호출 안전 */
export function initDetectEnvironment () {
  if (typeof window === 'undefined') return null
  if (instance) return instance

  instance = new DetecctioJS({
    windowObject: true,
    documentClasses: 'html'
  })

  return instance
}
