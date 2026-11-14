'use client'

import { useLayoutEffect, type KeyboardEvent, type RefObject } from 'react' // React

const dialogs = new Set<HTMLDialogElement>()
let bodyOverflow = ''

/** 명시한 대상 → 자신의 제목 → 전체 패널 순서로 초기 초점을 둡니다. */
export function focusDialogContent (root: HTMLElement, preferred?: HTMLElement | null) {
  const usable = (element: HTMLElement | null | undefined): element is HTMLElement => Boolean(
    element && root.contains(element) && !element.matches(':disabled') &&
    !element.closest('[hidden], [inert]') && element.getClientRects().length &&
    getComputedStyle(element).visibility === 'visible')
  const owned = (selector: string) => Array.from(root.querySelectorAll<HTMLElement>(selector))
    .find(element => element.closest('dialog, [role="dialog"]') === root && usable(element) &&
      (selector !== '[data-dialog-title]' || Boolean(element.textContent?.trim() || element.getAttribute('aria-label'))))
  const target = usable(preferred) ? preferred : owned('[data-dialog-title]') ?? owned('[data-dialog-panel]') ?? root
  target.focus({ preventScroll: true })
}

/** 숨김·비활성·접힌 영역을 제외하고 실제 Tab 이동 순서로 정렬합니다. */
function tabStops (dialog: HTMLDialogElement) {
  const items = Array.from(dialog.querySelectorAll<HTMLElement>(
    'a[href], area[href], button, input, select, textarea, iframe, [tabindex], [contenteditable="true"], audio[controls], video[controls]'
  )).filter((item) => item.tabIndex >= 0 && !item.matches(':disabled') &&
    !item.closest('[inert], [hidden]') && item.getClientRects().length > 0 &&
    getComputedStyle(item).visibility === 'visible')

  return items.filter((item) => {
    if (!(item instanceof HTMLInputElement) || item.type !== 'radio' || !item.name) return true
    const group = items.filter((other): other is HTMLInputElement =>
      other instanceof HTMLInputElement && other.type === 'radio' &&
      other.name === item.name && other.form === item.form)
    return item === (group.find((radio) => radio.checked) ?? group[0])
  }).sort((a, b) => (a.tabIndex || Infinity) - (b.tabIndex || Infinity))
}

/** 네이티브 dialog의 배경 차단·초점 복귀를 사용하고, Tab 경계 이동을 보완합니다. */
export function useModalDialog (
  ref: RefObject<HTMLDialogElement | null>,
  active: boolean,
  initialFocusRef?: RefObject<HTMLElement | null>
) {
  useLayoutEffect(() => {
    const node = ref.current
    if (!active || !node) return
    const opener = document.activeElement

    if (dialogs.size === 0) {
      bodyOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
    }
    dialogs.add(node)
    node.showModal()
    focusDialogContent(node, initialFocusRef?.current)

    return () => {
      // Drawer는 닫힘 애니메이션이 끝날 때까지 모달·초점·스크롤 잠금을 유지합니다.
      node.close()
      dialogs.delete(node)
      if (dialogs.size === 0) document.body.style.overflow = bodyOverflow
      // React가 DOM을 제거한 뒤에는 브라우저의 기본 초점 복귀가 생략될 수 있습니다.
      // 중첩 해제와 DOM 커밋이 끝난 후 살아 있는 열기 요소로 복귀합니다.
      queueMicrotask(() => {
        if (node.open) return // StrictMode 재설정·즉시 재열림의 초점을 빼앗지 않습니다.
        const top = Array.from(dialogs).at(-1)
        if (opener instanceof HTMLElement && opener.isConnected && !opener.matches(':disabled') &&
          (!top || top.contains(opener))) opener.focus({ preventScroll: true })
      })
    }
  }, [active, ref, initialFocusRef])

  return (event: KeyboardEvent<HTMLDialogElement>) => {
    if (!active || event.defaultPrevented || event.key !== 'Tab' ||
      event.altKey || event.ctrlKey || event.metaKey ||
      (event.target as Element).closest('dialog') !== ref.current) return
    const node = ref.current
    if (!node) return
    const items = tabStops(node)
    const first = items[0]
    const last = items[items.length - 1]
    const focused = document.activeElement
    if (first && last && (!items.includes(focused as HTMLElement) ||
      (event.shiftKey ? focused === first : focused === last))) {
      event.preventDefault()
      // tabindex=-1인 제목에서도 DOM상 다음/이전 조작 요소로 자연스럽게 이동합니다.
      const adjacent = focused instanceof HTMLElement && node.contains(focused) && !items.includes(focused)
        ? (event.shiftKey
            ? items.findLast(item => Boolean(focused.compareDocumentPosition(item) & Node.DOCUMENT_POSITION_PRECEDING))
            : items.find(item => Boolean(focused.compareDocumentPosition(item) & Node.DOCUMENT_POSITION_FOLLOWING)))
        : undefined
      const target = adjacent ?? (event.shiftKey ? last : first)
      target.focus()
    }
  }
}
