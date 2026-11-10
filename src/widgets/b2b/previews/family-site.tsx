'use client'

import { Page, PageLoading, PublishScreenStub } from '@/comp'
import { resolveSkeletonMode } from '@/config/skeleton'
import FamilySiteSkeleton from './skeleton/family-siteSkeleton'

export const pageTitle = "Family Site"

/** IA publishing scaffold. Replace this screen body with the approved markup. */
export default function B2bCommonFamilySitePage () {
  const links = []
  const skeletonId = 'b2b/common/family-site'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="b2b-common-family-site" title={pageTitle} />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <FamilySiteSkeleton /> : undefined}
        className="page-container"
      >
        <PublishScreenStub
          device="B2B"
          folderId="common"
          folderName="공통"
          screenName={pageTitle}
          screenType="Layer"
          screenId="B2B-COMMON-FAMILY-SITE"
          pageUrl="/b2b/common/family-site"
          links={links}
        />

      </PageLoading>
    </>
  )
}
