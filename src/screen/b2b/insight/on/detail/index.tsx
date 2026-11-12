'use client'

import { Page, PageLoading } from '@/comp'
import { PublishingPlaceholder } from '@/screen/pub/widgets/publishing/PublishingPlaceholder'
import { resolveSkeletonMode } from '@/config/skeleton'
import DetailSkeleton from './skeleton/indexSkeleton'

export const pageTitle = "멀캠ON 상세"

/** IA publishing scaffold. Replace this screen body with the approved markup. */
export default function B2bInsightOnDetailPage () {
  const links = [
    {
      "to": "/b2b/insight/on/list",
      "label": "멀캠ON 목록",
      "screenId": "B2B-INSIGHT-ON-LIST"
    }
  ]
  const skeletonId = 'b2b/insight/on/detail'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="b2b-insight-on-detail" title={pageTitle} />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <DetailSkeleton /> : undefined}
        className="page-container"
      >
        <PublishingPlaceholder
          device="B2B"
          folderId="insight"
          folderName="HR인사이트"
          screenName={pageTitle}
          screenType="Page"
          screenId="B2B-INSIGHT-ON-DETAIL"
          pageUrl="/b2b/insight/on/detail"
          links={links}
        />

      </PageLoading>
    </>
  )
}
