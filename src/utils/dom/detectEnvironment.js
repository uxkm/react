/**
 * OS·브라우저·디바이스를 감지해 <html>에 class를 붙인다.
 * 예: is-desktop is-chrome is-macos is-touch-device
 */
let initialization = null;

/** document.documentElement 에 감지 class 적용. 중복 호출 안전 */
export async function initDetectEnvironment() {
  if (typeof window === 'undefined') return null;
  // 패키지는 import 시 navigator를 참조하므로 서버에서는 로드하지 않습니다.
  // Strict Mode에서 호출이 겹쳐도 같은 초기화 작업을 공유합니다.
  if (!initialization) {
    initialization = import('detecctio')
      .then(
        ({ DetecctioJS }) =>
          new DetecctioJS({
            windowObject: true,
            documentClasses: 'html',
          }),
      )
      .catch((error) => {
        initialization = null;
        throw error;
      });
  }
  return initialization;
}
