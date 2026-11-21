import 'aos/dist/aos.css';

let aosReady;

/** AOS는 destroy API가 없으므로 앱에서 이벤트·MutationObserver를 한 번만 등록합니다. */
export function loadAos() {
  if (!aosReady) {
    aosReady = import('aos')
      .then(({ default: AOS }) => {
        AOS.init({
          duration: 700,
          once: false,
          easing: 'ease-out-cubic',
        });
        return AOS;
      })
      .catch((error) => {
        aosReady = undefined;
        throw error;
      });
  }
  return aosReady;
}
