import type { CSSProperties } from 'react' // CSSProperties 타입

export type FloatingPlacement = 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left'

/** viewport: 화면 고정 / footer: 공통 푸터 / 나머지: 지정한 요소 위에서 멈춤 */
export type FloatingBoundary = 'viewport' | 'footer' | string | HTMLElement | null | (() => HTMLElement | null)

export interface FloatingPositionContext {
  placement: FloatingPlacement
  viewport: { width: number; height: number }
  floatingRect: DOMRect
  boundaryRect: DOMRect | null
  /** 배치·여백·경계 계산을 마친 기본 좌표 */
  defaultStyle: CSSProperties
}

/** 기본 좌표에 덧붙일 CSS. undefined 또는 null이면 기본 좌표를 사용한다. */
export type FloatingPositionResolver = (context: FloatingPositionContext) => CSSProperties | null | undefined
