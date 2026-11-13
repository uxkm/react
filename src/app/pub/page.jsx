import { routeMetadata } from '@/lib/routeMetadata' // route Metadata
import '@/styles/pub.scss' // pub 스타일
import PubIndex from '@/screen/pub/index' // Pub Index 컴포넌트

/**
 * 라우트 셸만. 화면 본문은 src/screen/pub (app → screens 분리).
 * /pub — 퍼블리시 목록
 */
export default function PubListPage () {
  return <PubIndex />
}

export const metadata = routeMetadata('/pub')
