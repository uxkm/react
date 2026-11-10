'use client'

import { Page, PageLoading, PublishScreenStub } from '@/comp'
import { resolveSkeletonMode } from '@/config/skeleton'
import IntegratedSearchSkeleton from './skeleton/integrated-searchSkeleton'

export const pageTitle = "통합검색"

/** IA publishing scaffold. Replace this screen body with the approved markup. */
export default function B2bCommonIntegratedSearchPage () {
  const links = []
  const skeletonId = 'b2b/common/integrated-search'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="b2b-common-integrated-search" title={pageTitle} />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <IntegratedSearchSkeleton /> : undefined}
        className="page-container"
      >
        <PublishScreenStub
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
