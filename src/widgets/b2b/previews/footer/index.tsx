'use client'

import { Page, PageLoading } from '@/comp'
import { PublishingPlaceholder } from '@/screen/pub/widgets/publishing/PublishingPlaceholder'
import { resolveSkeletonMode } from '@/config/skeleton'
import FooterSkeleton from './skeleton/indexSkeleton'

export const pageTitle = "Footer"

/** IA publishing scaffold. Replace this screen body with the approved markup. */
export default function B2bCommonFooterPage () {
  const links = []
  const skeletonId = 'b2b/common/footer'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="b2b-common-footer" title={pageTitle} />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <FooterSkeleton /> : undefined}
        className="page-container"
      >
        <PublishingPlaceholder
          device="B2B"
          folderId="common"
          folderName="공통"
          screenName={pageTitle}
          screenType="Widget"
          screenId="B2B-COMMON-005"
          pageUrl="/b2b/common/footer"
          links={links}
        />

      </PageLoading>
    </>
  )
}
