import Viewer from 'viewerjs' // Viewer 컴포넌트
import 'viewerjs/dist/viewer.css' // viewerjs 패키지

/** viewerjs — 이미지 컨테이너에 Viewer 연결 */
export function createViewer (element, options = {}) {
  if (!element) return null
  return new Viewer(element, {
    toolbar: true,
    navbar: true,
    title: true,
    ...options
  })
}

export { Viewer }
export default createViewer
