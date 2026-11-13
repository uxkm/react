import type { CSSProperties } from 'react' // CSSProperties 타입

export type HeaderStyle = CSSProperties & { [key: `--${string}`]: string | number | undefined }

export interface HeaderAppearance {
  /** 기본 배경. transparent·색상·그라디언트 등 CSS background 값 */
  background?: CSSProperties['background']
  /** 스크롤 후 헤더가 상단에 도달했을 때의 배경. 생략하면 기본 배경 유지 */
  scrolledBackground?: CSSProperties['background']
  className?: string
  style?: HeaderStyle
}

/** props는 CSS 변수로 전달해 페이지 클래스·인라인 변수와 같은 스타일 경로를 사용한다. */
export function headerAppearanceStyle ({ background, scrolledBackground, style }: HeaderAppearance): HeaderStyle {
  return {
    ...(background !== undefined ? { '--app-header-bg': background } : {}),
    ...(scrolledBackground !== undefined ? { '--app-header-bg-scrolled': scrolledBackground } : {}),
    ...style
  }
}
