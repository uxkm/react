'use client'

import { Page, PageLoading } from '@/comp'
import { PublishingPlaceholder } from '@/screen/pub/widgets/publishing/PublishingPlaceholder'
import { resolveSkeletonMode } from '@/config/skeleton'
import QuickLinksSkeleton from './skeleton/indexSkeleton'

export const pageTitle = "퀵링크"

/** IA publishing scaffold. Replace this screen body with the approved markup. */
export default function B2bCommonQuickLinksPage () {
  const links = []
  const skeletonId = 'b2b/common/quick-links'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="b2b-common-quick-links" title={pageTitle} />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <QuickLinksSkeleton /> : undefined}
        className="page-container"
      >
        <PublishingPlaceholder
          device="B2B"
          folderId="common"
          folderName="공통"
          screenName={pageTitle}
          screenType="Widget"
          screenId="B2B-COMMON-QUICK-LINKS"
          pageUrl="/b2b/common/quick-links"
          links={links}
        />

      </PageLoading>
    </>
  )
}
