'use client'

import { Page, PageLoading } from '@/comp' // comp
import { PublishingPlaceholder } from '@/screen/pub/widgets/publishing/PublishingPlaceholder' // Publishing Placeholder 컴포넌트
import { resolveSkeletonMode } from '@/config/skeleton' // resolve Skeleton Mode
import IndexSkeleton from './skeleton/indexSkeleton' // Index Skeleton 컴포넌트

export const pageTitle = "BPO 서비스"

/** IA publishing scaffold. Replace this screen body with the approved markup. */
export default function B2bServiceBpoPage () {
  const links = [
    {
      "to": "/b2b/service/platform",
      "label": "러닝플랫폼",
      "screenId": "B2B-SERVIC-001"
    },
    {
      "to": "/b2b/service/learning",
      "label": "러닝 서비스",
      "screenId": "B2B-SERVIC-002"
    },
    {
      "to": "/b2b/service/diagnosis",
      "label": "진단 서비스",
      "screenId": "B2B-SERVIC-003"
    },
    {
      "to": "/b2b/service/consulting",
      "label": "컨설팅 서비스",
      "screenId": "B2B-SERVIC-004"
    }
  ]
  const skeletonId = 'b2b/service/bpo'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="service-bpo" title={pageTitle}  className="project-content" />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <IndexSkeleton /> : undefined}
        className="page-container"
      >
        <PublishingPlaceholder
          device="B2B"
          folderId="service"
          folderName="서비스"
          screenName={pageTitle}
          screenType="Page"
          screenId="B2B-SERVIC-005"
          pageUrl="/b2b/service/bpo"
          links={links}
        />

      </PageLoading>
    </>
  )
}
