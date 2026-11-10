'use client'

import { Page, PageLoading, PublishScreenStub } from '@/comp'
import { resolveSkeletonMode } from '@/config/skeleton'
import TermsSkeleton from './skeleton/termsSkeleton'

export const pageTitle = "이용약관"

/** IA publishing scaffold. Replace this screen body with the approved markup. */
export default function B2bCommonTermsPage () {
  const links = []
  const skeletonId = 'b2b/common/terms'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="b2b-common-terms" title={pageTitle} />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <TermsSkeleton /> : undefined}
        className="page-container"
      >
        <PublishScreenStub
          device="B2B"
          folderId="common"
          folderName="공통"
          screenName={pageTitle}
          screenType="Layer"
          screenId="B2B-COMMON-TERMS"
          pageUrl="/b2b/common/terms"
          links={links}
        />

      </PageLoading>
    </>
  )
}
