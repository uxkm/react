import { routeMetadata } from '@/lib/page/routeMetadata' // route Metadata
import GuideIndex from '@/screen/pub/guide/index.jsx' // Guide Index 컴포넌트

/**
 * /pub/guide — 퍼블리싱 가이드 소개(홈)
 */
export default function GuidePage () {
  return <GuideIndex />
}

export const metadata = routeMetadata('/pub/guide')
