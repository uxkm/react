'use client'

import { Page, PageLoading, PublishScreenStub } from '@/comp'
import { resolveSkeletonMode } from '@/config/skeleton'
import DetailSkeleton from './skeleton/detailSkeleton'

export const pageTitle = "자료실 상세"

/** IA publishing scaffold. Replace this screen body with the approved markup. */
export default function B2bInsightResourcesDetailPage () {
  const links = [
    {
      "to": "/b2b/insight/resources/list",
      "label": "자료실 목록",
      "screenId": "B2B-INSIGHT-RESOURCES-LIST"
    }
  ]
  const skeletonId = 'b2b/insight/resources/detail'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="b2b-insight-resources-detail" title={pageTitle} />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <DetailSkeleton /> : undefined}
        className="page-container"
      >
        <PublishScreenStub
          device="B2B"
          folderId="insight"
          folderName="HR인사이트"
          screenName={pageTitle}
          screenType="Page"
          screenId="B2B-INSIGHT-RESOURCES-DETAIL"
          pageUrl="/b2b/insight/resources/detail"
          links={links}
        />

      </PageLoading>
    </>
  )
}
