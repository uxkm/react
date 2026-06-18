import { useEffect } from 'react'
import { requestCloseHeaderLayers } from '../utils/headerLayerController.js'

/**
 * useGlobalEscClose
 *
 * Reproduces the Escape branch of `focus_controll()` in
 * `src/assets/js/uk_common.js`. Actual DOM cleanup and button
 * state live in `SiteHeader` via `registerHeaderLayerCloseHandler`.
 */
const HD_LAYER_OPEN_CLASS = 'hd_layer_open'

function useGlobalEscClose() {
  useEffect(() => {
    if (typeof document === 'undefined') return undefined

    const onKeyDown = (event) => {
      if (event.key !== 'Escape' && event.keyCode !== 27) return
      const html = document.documentElement
      if (html.classList.contains(HD_LAYER_OPEN_CLASS)) {
        requestCloseHeaderLayers()
        event.preventDefault()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [])
}

export default useGlobalEscClose
