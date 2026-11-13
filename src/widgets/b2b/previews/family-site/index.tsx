'use client'

import { Page, PageLoading } from '@/comp' // comp
import { PublishingPlaceholder } from '@/screen/pub/widgets/publishing/PublishingPlaceholder' // Publishing Placeholder 컴포넌트
import { resolveSkeletonMode } from '@/config/skeleton' // resolve Skeleton Mode
import FamilySiteSkeleton from './skeleton/indexSkeleton' // Family Site Skeleton 컴포넌트

export const pageTitle = "Family Site"

/** IA publishing scaffold. Replace this screen body with the approved markup. */
export default function B2bCommonFamilySitePage () {
  const links = []
  const skeletonId = 'b2b/common/family-site'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="common-family-site" title={pageTitle}  className="project-content" />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <FamilySiteSkeleton /> : undefined}
        className="page-container"
      >
        <PublishingPlaceholder
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
