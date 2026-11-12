/**
 * 페이지 레이아웃 표시(meta) 공통 계약.
 *
 * 화면 파일의 `export const meta` 형태. registry 가 읽어
 * 로딩(RouteLoading)·본문(PageLayoutVisibility)이 같은 배너·헤더·푸터·플로팅 표시를 맞춘다.
 *
 * true  : 공통 영역 표시 / false : 숨김 / 생략 : true 와 동일
 * 숨김은 meta 의 true/false 만 사용한다. (`<Header hidden />` 등 prop 숨김 없음)
 * 로고·메뉴 교체는 meta 가 아니라 화면의 Header. header 가 true 일 때만 보임.
 */
export interface FloatingVisibilityMeta {
  /** 플로팅 전체. false만 숨기고 생략하면 표시한다. */
  floating?: boolean
  /** Floating.Item의 name별 표시 여부. 생략한 이름은 표시한다. */
  floatingItems?: Record<string, boolean>
}

export interface PageMeta extends FloatingVisibilityMeta {
  /** 헤더 위 배너. false면 숨기고 생략하면 등록된 배너를 표시한다. */
  banner?: boolean
  /**
   * 상단 공통 헤더(AppHeader).
   * true 표시, false 숨김. 생략하면 표시.
   * 본문에 화면 전용 header 가 있으면 false.
   */
  header?: boolean
  /**
   * 하단 공통 푸터(AppFooter).
   * true 표시, false 숨김. 생략하면 표시.
   */
  footer?: boolean
}

/**
 * 헤더·푸터 등 레이아웃 영역을 표시할지 판단한다. (공통 규칙)
 * false 만 숨긴다. 값이 없으면 표시한다.
 */
export function isLayoutSectionVisible (value: boolean | undefined): boolean {
  return value !== false
}
