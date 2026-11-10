'use client'

import { Page, PageLoading, PublishScreenStub } from '@/comp'
import { resolveSkeletonMode } from '@/config/skeleton'
import IndexSkeleton from './skeleton/indexSkeleton'

export const pageTitle = "러닝플랫폼"

/** IA publishing scaffold. Replace this screen body with the approved markup. */
export default function B2bServicePlatformPage () {
  const links = [
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
    },
    {
      "to": "/b2b/service/bpo",
      "label": "BPO 서비스",
      "screenId": "B2B-SERVIC-005"
    }
  ]
  const skeletonId = 'b2b/service/platform'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="b2b-service-platform" title={pageTitle} />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <IndexSkeleton /> : undefined}
        className="page-container"
      >
        <PublishScreenStub
          device="B2B"
          folderId="service"
          folderName="서비스"
          screenName={pageTitle}
          screenType="Page"
          screenId="B2B-SERVIC-001"
          pageUrl="/b2b/service/platform"
          links={links}
        />

      </PageLoading>
    </>
  )
}
