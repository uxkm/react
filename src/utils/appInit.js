/**
 * appInit
 *
 * One-shot helpers that run before React mounts. They mirror the bits of
 * `src/assets/js/uk_dom_before.js` whose effects need to be
 * applied to `<html>` before the first paint to avoid layout flicker.
 */

const SIDE_TOGGLE_KEY = 'sideToggle'
const SIDE_CLOSE_CLASS = 'side_close'

/**
 * Restore the sidebar collapsed state when the user previously closed it.
 * Mirrors `uk_dom_before.js`:
 *   if (sessionStorage.getItem('sideToggle')) $('html').addClass('side_close')
 */
export function restoreSidebarCollapsedState() {
  if (typeof window === 'undefined' || typeof document === 'undefined') return
  try {
    if (window.sessionStorage.getItem(SIDE_TOGGLE_KEY) === 'true') {
      document.documentElement.classList.add(SIDE_CLOSE_CLASS)
    }
  } catch {
    // sessionStorage may be unavailable (e.g. private mode); ignore silently.
  }
}

export const SIDE_TOGGLE_STORAGE_KEY = SIDE_TOGGLE_KEY
export const SIDE_TOGGLE_HTML_CLASS = SIDE_CLOSE_CLASS
