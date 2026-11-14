'use client'

/**
 * 프로젝트 template.
 * 헤더·푸터는 HeaderSlot 이 아니라 AppProviders AppShell 의
 * AppLayout header/footer prop 으로 SSR 첫 페인트부터 포함한다.
 * (슬롯 등록은 useLayoutEffect 라 새로고침 시 본문 레이아웃 점프가 난다.)
 */
export default function Template ({ children }) {
  return children
}
