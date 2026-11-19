import { routeMetadata } from '@/lib/page/routeMetadata' // route Metadata
import GuideIndex from '@/screen/pub/guide/index.jsx' // Guide Index 컴포넌트
import { PageLayoutVisibility } from '@/comp/layout/PageLayoutVisibility'

/**
 * /pub/guide — 퍼블리싱 가이드 소개(홈)
 */
export default function GuidePage () {
  return (
    <>
      <PageLayoutVisibility meta={{ footer: false }} />
      <GuideIndex />
    </>
  )
}

export const metadata = routeMetadata('/pub/guide')
