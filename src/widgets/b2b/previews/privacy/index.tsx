'use client'

import { Page, PageLoading } from '@/comp' // comp
import { PublishingPlaceholder } from '@/screen/pub/widgets/publishing/PublishingPlaceholder' // Publishing Placeholder 컴포넌트
import { resolveSkeletonMode } from '@/config/skeleton' // resolve Skeleton Mode
import PrivacySkeleton from './skeleton/indexSkeleton' // Privacy Skeleton 컴포넌트

export const pageTitle = "개인정보처리방침"

/** IA publishing scaffold. Replace this screen body with the approved markup. */
export default function B2bCommonPrivacyPage () {
  const links = []
  const skeletonId = 'b2b/common/privacy'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="common-privacy" title={pageTitle}  className="project-content" />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <PrivacySkeleton /> : undefined}
        className="page-container"
      >
        <PublishingPlaceholder
          device="B2B"
          folderId="common"
          folderName="공통"
          screenName={pageTitle}
          screenType="Layer"
          screenId="B2B-COMMON-PRIVACY"
          pageUrl="/b2b/common/privacy"
          links={links}
        />

      </PageLoading>
    </>
  )
}
