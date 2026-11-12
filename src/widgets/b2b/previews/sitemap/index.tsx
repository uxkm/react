'use client'

import { Page, PageLoading } from '@/comp'
import { PublishingPlaceholder } from '@/screen/pub/widgets/publishing/PublishingPlaceholder'
import { resolveSkeletonMode } from '@/config/skeleton'
import SitemapSkeleton from './skeleton/indexSkeleton'

export const pageTitle = "About 사이트맵"

/** IA publishing scaffold. Replace this screen body with the approved markup. */
export default function B2bCommonSitemapPage () {
  const links = []
  const skeletonId = 'b2b/common/sitemap'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="b2b-common-sitemap" title={pageTitle} />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <SitemapSkeleton /> : undefined}
        className="page-container"
      >
        <PublishingPlaceholder
          device="B2B"
          folderId="common"
          folderName="공통"
          screenName={pageTitle}
          screenType="Layer"
          screenId="B2B-COMMON-004"
          pageUrl="/b2b/common/sitemap"
          links={links}
        />

      </PageLoading>
    </>
  )
}
