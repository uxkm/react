// 자동 생성된 B2B 정보입니다. B2B 화면 소스가 없으면 null입니다.
import { b2b } from '@/generated/b2b' // b2b
// 클라이언트에서 지정한 주소로 이동하는 공통 컴포넌트입니다.
import RouteRedirect from '@/comp/providers/RouteRedirect' // Route Redirect 컴포넌트

// 루트 주소(/)에 접속했을 때 보여 줄 시작 화면을 결정합니다.
export default function HomePage () {
  // B2B 정보가 있으면 메인(/b2b), 없으면 퍼블리시 목록(/pub)으로 이동합니다.
  return <RouteRedirect href={b2b ? '/b2b' : '/pub'} />
}
