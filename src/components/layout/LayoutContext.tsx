'use client'

/**
 * 레이아웃 슬롯 Context.
 * Header/Footer/Page 등이 등록한 슬롯을 AppLayout이 읽어 헤더·본문·푸터·플로팅을 구성한다.
 */
import {
  createContext, // 컨텍스트 생성
  useCallback, // 콜백 메모 훅
  useContext, // 컨텍스트 훅
  useLayoutEffect, // 레이아웃 effect 훅
  useState, // 상태 훅
  type ReactNode // ReactNode 타입
} from 'react' // React
import type { FloatingProps } from '@/comp/ui/Floating' // Floating Props 타입
import { usePathname } from 'next/navigation' // 경로명 훅
import { hasNodes } from '@/utils/react' // has Nodes
import {
  LAYOUT_SLOT_HIDDEN, // LAYOUT SLOT HIDDEN 컴포넌트
  isLayoutSlotHidden, // is Layout Slot Hidden
  type LayoutSlotHidden // LayoutSlotHidden 타입
} from '@/comp/shared/layout-slot' // 공유 모듈 · layout slot

/**
 * pageSlots 값: 렌더할 노드 | 숨김 마커
 * 지원 name: meta-banner, meta-header, meta-footer, meta-floating, meta-floating-items, banner, floating-items, header, header-layout, header-hide-nav-on-scroll, header-back, header-brand, header-nav, header-actions, footer, footer-content, main-page, main-class
 */
/** 슬롯 하나. 그릴 노드이거나 숨김 표시 */
export type LayoutSlotValue = ReactNode | LayoutSlotHidden
/** 이름별 슬롯 */
export type PageSlots = Record<string, LayoutSlotValue>
/** 슬롯을 넣거나 지우는 함수. null 이면 그 슬롯을 비운다 */
export type SetPageSlot = (name: string, nodes: LayoutSlotValue | null | undefined) => void

/** setPageSlot — 참조가 안정적이라 등록 컴포넌트(Header 등)가 슬롯 변경으로 재렌더되지 않음 */
const LayoutSetSlotContext = createContext<SetPageSlot | null>(null)
/** 현재 페이지 슬롯 — AppLayout 만 구독 */
const LayoutSlotsContext = createContext<PageSlots>({})
export type PageFloatingOptions = Omit<FloatingProps, 'children' | 'slots'>
const FloatingOptionsContext = createContext<PageFloatingOptions | undefined>(undefined)
const SetFloatingOptionsContext = createContext<((options: PageFloatingOptions | undefined) => void) | null>(null)

/** 슬롯 저장소. 경로가 바뀌면 이전 화면의 헤더·푸터를 비운다 */
export function LayoutProvider ({ children }: { children?: ReactNode }) {
  const pathname = usePathname()
  const [pageSlots, setPageSlots] = useState<PageSlots>({})
  const [floatingOptions, setFloatingOptions] = useState<PageFloatingOptions>()
  const [prevPathname, setPrevPathname] = useState(pathname)

  // pathname 변경 시 슬롯 초기화. 쿼리 변경만으로는 레이아웃 슬롯을 비우지 않는다.
  // 렌더 단계에서 처리해야 새 페이지의 Header 등록(layout effect)이 지워지지 않음
  if (pathname !== prevPathname) {
    setPrevPathname(pathname)
    setPageSlots({})
    setFloatingOptions(undefined)
  }

  const setPageSlot = useCallback<SetPageSlot>((name, nodes) => {
    setPageSlots((prev) => {
      if (isLayoutSlotHidden(nodes)) {
        if (prev[name] === LAYOUT_SLOT_HIDDEN) return prev
        return { ...prev, [name]: LAYOUT_SLOT_HIDDEN }
      }
      if (!hasNodes(nodes)) {
        if (!Object.prototype.hasOwnProperty.call(prev, name)) return prev
        const next = { ...prev }
        delete next[name]
        return next
      }
      return { ...prev, [name]: nodes }
    })
  }, [])

  return (
    <LayoutSetSlotContext.Provider value={setPageSlot}>
      <LayoutSlotsContext.Provider value={pageSlots}>
        <SetFloatingOptionsContext.Provider value={setFloatingOptions}>
          <FloatingOptionsContext.Provider value={floatingOptions}>
            {children}
          </FloatingOptionsContext.Provider>
        </SetFloatingOptionsContext.Provider>
      </LayoutSlotsContext.Provider>
    </LayoutSetSlotContext.Provider>
  )
}

/** AppLayout이 읽는 페이지 전용 플로팅 배치 설정 */
export function usePageFloatingOptions () {
  return useContext(FloatingOptionsContext)
}

/** PageFloating이 배치 설정을 등록할 때 사용 */
export function useSetPageFloatingOptions () {
  return useContext(SetFloatingOptionsContext)
}

/** AppLayout 용: 현재 페이지 슬롯 */
export function useLayoutSlots (): PageSlots {
  return useContext(LayoutSlotsContext)
}

/** Header / Footer / LayoutSlot 용: Provider 밖이면 null */
export function useLayoutSetSlot (): SetPageSlot | null {
  return useContext(LayoutSetSlotContext)
}

/**
 * 슬롯 등록 헬퍼 — 매 렌더 후 동기화, 언마운트 시 정리
 *
 * @param sync   현재 props 기준으로 setSlot 호출
 * @param names  언마운트 시 비울 슬롯 이름
 */
export function useLayoutSlotSync (
  sync: (setSlot: SetPageSlot) => void,
  names: string[]
): void {
  const setSlot = useLayoutSetSlot()

  useLayoutEffect(() => {
    if (!setSlot) return
    sync(setSlot)
  })

  const namesKey = names.join('|')
  useLayoutEffect(() => {
    if (!setSlot) return undefined
    return () => {
      namesKey.split('|').forEach((name) => setSlot(name, null))
    }
  }, [setSlot, namesKey])
}

/** @deprecated 슬롯 등록은 hook만으로 충분 — DOM 호스트 없음 */
export function LayoutHiddenHost (_props: { className: string }) {
  return null
}

export { LAYOUT_SLOT_HIDDEN }
