'use client'

import { Page, PageLoading } from '@/comp' // comp
import { PublishingPlaceholder } from '@/screen/pub/widgets/publishing/PublishingPlaceholder' // Publishing Placeholder 컴포넌트
import { resolveSkeletonMode } from '@/config/skeleton' // resolve Skeleton Mode
import BackTopSkeleton from './skeleton/indexSkeleton' // Back Top Skeleton 컴포넌트

export const pageTitle = "TOP 버튼"

/** IA publishing scaffold. Replace this screen body with the approved markup. */
export default function B2bCommonBackTopPage () {
  const links = []
  const skeletonId = 'b2b/common/back-top'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="common-back-top" title={pageTitle}  className="project-content" />
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
