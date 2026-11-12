import { routeMetadata } from '@/lib/routeMetadata'
import GuideIndex from '@/screen/pub/guide/index.jsx'

/**
 * /pub/guide — 퍼블리싱 가이드 소개(홈)
 */
export default function GuidePage () {
  return <GuideIndex />
}

export const metadata = routeMetadata('/pub/guide')
