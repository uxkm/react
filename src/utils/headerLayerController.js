/**
 * Lets `useGlobalEscClose` ask `SiteHeader` to clear modal state without
 * reaching into React internals from outside the component tree.
 */
let closeHandler = () => {}

export function registerHeaderLayerCloseHandler(handler) {
  closeHandler = typeof handler === 'function' ? handler : () => {}
  return () => {
    closeHandler = () => {}
  }
}

export function requestCloseHeaderLayers() {
  closeHandler()
}
