'use client'

import { Page, PageLoading } from '@/comp' // comp
import { PublishingPlaceholder } from '@/screen/pub/widgets/publishing/PublishingPlaceholder' // Publishing Placeholder 컴포넌트
import { resolveSkeletonMode } from '@/config/skeleton' // resolve Skeleton Mode
import TermsSkeleton from './skeleton/indexSkeleton' // Terms Skeleton 컴포넌트

export const pageTitle = "이용약관"

/** IA publishing scaffold. Replace this screen body with the approved markup. */
export default function B2bCommonTermsPage () {
  const links = []
  const skeletonId = 'b2b/common/terms'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="common-terms" title={pageTitle}  className="project-content" />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <TermsSkeleton /> : undefined}
        className="page-container"
      >
        <PublishingPlaceholder
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
