'use client'

import { Page, PageLoading } from '@/comp' // comp
import { PublishingPlaceholder } from '@/screen/pub/widgets/publishing/PublishingPlaceholder' // Publishing Placeholder 컴포넌트
import { resolveSkeletonMode } from '@/config/skeleton' // resolve Skeleton Mode
import IntegratedSearchSkeleton from './skeleton/indexSkeleton' // Integrated Search Skeleton 컴포넌트

export const pageTitle = "통합검색"

/** IA publishing scaffold. Replace this screen body with the approved markup. */
export default function B2bCommonIntegratedSearchPage () {
  const links = []
  const skeletonId = 'b2b/common/integrated-search'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="common-integrated-search" title={pageTitle}  className="project-content" />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <IntegratedSearchSkeleton /> : undefined}
        className="page-container"
      >
        <PublishingPlaceholder
          device="B2B"
          folderId="common"
          folderName="공통"
          screenName={pageTitle}
          screenType="Page"
          screenId="B2B-COMMON-003"
          pageUrl="/b2b/common/integrated-search"
          links={links}
        />

      </PageLoading>
    </>
  )
}
