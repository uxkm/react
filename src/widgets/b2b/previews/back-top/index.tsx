'use client'

import { Page, PageLoading } from '@/comp'
import { PublishingPlaceholder } from '@/screen/pub/widgets/publishing/PublishingPlaceholder'
import { resolveSkeletonMode } from '@/config/skeleton'
import BackTopSkeleton from './skeleton/indexSkeleton'

export const pageTitle = "TOP 버튼"

/** IA publishing scaffold. Replace this screen body with the approved markup. */
export default function B2bCommonBackTopPage () {
  const links = []
  const skeletonId = 'b2b/common/back-top'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="b2b-common-back-top" title={pageTitle} />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <BackTopSkeleton /> : undefined}
        className="page-container"
      >
        <PublishingPlaceholder
          device="B2B"
          folderId="common"
          folderName="공통"
          screenName={pageTitle}
          screenType="Widget"
          screenId="B2B-COMMON-BACK-TOP"
          pageUrl="/b2b/common/back-top"
          links={links}
        />

      </PageLoading>
    </>
  )
}
