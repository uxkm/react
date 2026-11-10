'use client'

import { Page, PageLoading, PublishScreenStub } from '@/comp'
import { resolveSkeletonMode } from '@/config/skeleton'
import FullMenuSkeleton from './skeleton/full-menuSkeleton'

export const pageTitle = "전체 사이트맵"

/** IA publishing scaffold. Replace this screen body with the approved markup. */
export default function B2bCommonFullMenuPage () {
  const links = []
  const skeletonId = 'b2b/common/full-menu'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="b2b-common-full-menu" title={pageTitle} />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <FullMenuSkeleton /> : undefined}
        className="page-container"
      >
        <PublishScreenStub
          device="B2B"
          folderId="common"
          folderName="공통"
          screenName={pageTitle}
          screenType="Layer"
          screenId="B2B-COMMON-002"
          pageUrl="/b2b/common/full-menu"
          links={links}
        />

      </PageLoading>
    </>
  )
}
