'use client'

import { Page, PageLoading } from '@/comp'
import { PublishingPlaceholder } from '@/screen/pub/widgets/publishing/PublishingPlaceholder'
import { resolveSkeletonMode } from '@/config/skeleton'
import IntegratedSearchResultsSkeleton from './skeleton/indexSkeleton'

export const pageTitle = "통합검색 결과"

/** IA publishing scaffold. Replace this screen body with the approved markup. */
export default function B2bCommonIntegratedSearchResultsPage () {
  const links = []
  const skeletonId = 'b2b/common/integrated-search-results'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="common-integrated-search-results" title={pageTitle}  className="project-content" />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <IntegratedSearchResultsSkeleton /> : undefined}
        className="page-container"
      >
        <PublishingPlaceholder
          device="B2B"
          folderId="common"
          folderName="공통"
          screenName={pageTitle}
          screenType="Page"
          screenId="B2B-COMMON-INTEGRATED-SEARCH-RESULTS"
          pageUrl="/b2b/common/integrated-search-results"
          links={links}
        />

      </PageLoading>
    </>
  )
}
