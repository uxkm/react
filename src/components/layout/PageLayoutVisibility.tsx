'use client'

/**
 * 페이지 배너·헤더·푸터·플로팅 표시 여부 제어.
 * meta.banner / meta.header / meta.footer / meta.floating과 floatingItems로 표시를 제어한다.
 * AppLayout과 Floating이 레이아웃 슬롯의 표시 설정을 반영한다.
 */
import { isLayoutSectionVisible, type PageMeta } from '@/comp/shared/page-meta' // 공유 모듈 · page meta
import { useLayoutSlotSync } from '@/comp/layout/LayoutContext' // Layout Slot Sync 훅

/** PageLayoutVisibility ↔ AppLayout/Floating 표시 슬롯 */
export const META_HEADER_SLOT = 'meta-header'
export const META_BANNER_SLOT = 'meta-banner'
export const META_FOOTER_SLOT = 'meta-footer'
export const META_FLOATING_SLOT = 'meta-floating'
export const META_FLOATING_ITEMS_SLOT = 'meta-floating-items'

/** 페이지 레이아웃·플로팅 표시 설정. false면 숨긴다 */
export interface PageLayoutVisibilityProps {
  /**
   * 이 페이지의 헤더·푸터·플로팅 표시 설정. (공통 PageMeta)
   * 필수 아님. 없으면 전체 영역과 등록된 플로팅 항목을 표시한다.
   */
  meta?: PageMeta | null
}

/**
 * 공통. meta를 헤더·푸터·플로팅 표시에 적용한다.
 * false 만 숨긴다. true 이거나 없으면 표시.
 * 로고·메뉴 교체는 하지 않는다. 그건 화면의 Header / Footer.
 *
 * 레지스트리 라우트는 RegistryPage 가 붙인다.
 * 404·에러처럼 레지스트리 밖 화면은 이 컴포넌트를 직접 렌더해야 한다.
 *
 * @example
 * export const meta = { header: false, footer: true }
 */
export function PageLayoutVisibility ({ meta }: PageLayoutVisibilityProps) {
  const showHeader = isLayoutSectionVisible(meta?.header)
  const showFooter = isLayoutSectionVisible(meta?.footer)
  const showFloating = isLayoutSectionVisible(meta?.floating)
  // 슬롯은 렌더 가능한 값만 저장하므로 항목별 설정은 JSON 문자열로 전달한다.
  const floatingItems = JSON.stringify(meta?.floatingItems || {})

  useLayoutSlotSync((setSlot) => {
    // 'true' | 'false' 문자열 — AppLayout 이 false 일 때만 숨김
    setSlot(META_HEADER_SLOT, showHeader ? 'true' : 'false')
    setSlot(META_BANNER_SLOT, isLayoutSectionVisible(meta?.banner) ? 'true' : 'false')
    setSlot(META_FOOTER_SLOT, showFooter ? 'true' : 'false')
    setSlot(META_FLOATING_SLOT, showFloating ? 'true' : 'false')
    setSlot(META_FLOATING_ITEMS_SLOT, floatingItems)
  }, [META_BANNER_SLOT, META_HEADER_SLOT, META_FOOTER_SLOT, META_FLOATING_SLOT, META_FLOATING_ITEMS_SLOT])

  return null
}

export default PageLayoutVisibility
