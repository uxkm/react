'use client'

import { Page, PageLoading } from '@/comp'
import { PublishingPlaceholder } from '@/screen/pub/widgets/publishing/PublishingPlaceholder'
import { resolveSkeletonMode } from '@/config/skeleton'
import GnbSkeleton from './skeleton/indexSkeleton'

export const pageTitle = "GNB"

/** IA publishing scaffold. Replace this screen body with the approved markup. */
export default function B2bCommonGnbPage () {
  const links = []
  const skeletonId = 'b2b/common/gnb'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="b2b-common-gnb" title={pageTitle} />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <GnbSkeleton /> : undefined}
        className="page-container"
      >
        <PublishingPlaceholder
          device="B2B"
          folderId="common"
          folderName="공통"
          screenName={pageTitle}
          screenType="Widget"
          screenId="B2B-COMMON-001"
          pageUrl="/b2b/common/gnb"
          links={links}
        />

      </PageLoading>
    </>
  )
}
