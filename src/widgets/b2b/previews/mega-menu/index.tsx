'use client'

import { Page, PageLoading } from '@/comp'
import { PublishingPlaceholder } from '@/screen/pub/widgets/publishing/PublishingPlaceholder'
import { resolveSkeletonMode } from '@/config/skeleton'
import MegaMenuSkeleton from './skeleton/indexSkeleton'

export const pageTitle = "메가메뉴"

/** IA publishing scaffold. Replace this screen body with the approved markup. */
export default function B2bCommonMegaMenuPage () {
  const links = []
  const skeletonId = 'b2b/common/mega-menu'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="b2b-common-mega-menu" title={pageTitle} />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <MegaMenuSkeleton /> : undefined}
        className="page-container"
      >
        <PublishingPlaceholder
          device="B2B"
          folderId="common"
          folderName="공통"
          screenName={pageTitle}
          screenType="Layer"
          screenId="B2B-COMMON-MEGA-MENU"
          pageUrl="/b2b/common/mega-menu"
          links={links}
        />

      </PageLoading>
    </>
  )
}
