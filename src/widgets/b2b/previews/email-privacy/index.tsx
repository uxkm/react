'use client'

import { Page, PageLoading } from '@/comp' // comp
import { PublishingPlaceholder } from '@/screen/pub/widgets/publishing/PublishingPlaceholder' // Publishing Placeholder 컴포넌트
import { resolveSkeletonMode } from '@/config/skeleton' // resolve Skeleton Mode
import EmailPrivacySkeleton from './skeleton/indexSkeleton' // Email Privacy Skeleton 컴포넌트

export const pageTitle = "알기쉬운 개인정보처리방침"

/** IA publishing scaffold. Replace this screen body with the approved markup. */
export default function B2bCommonEmailPrivacyPage () {
  const links = []
  const skeletonId = 'b2b/common/email-privacy'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="common-email-privacy" title={pageTitle}  className="project-content" />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <EmailPrivacySkeleton /> : undefined}
        className="page-container"
      >
        <PublishingPlaceholder
          device="B2B"
          folderId="common"
          folderName="공통"
          screenName={pageTitle}
          screenType="Layer"
          screenId="B2B-COMMON-EMAIL-PRIVACY"
          pageUrl="/b2b/common/email-privacy"
          links={links}
        />

      </PageLoading>
    </>
  )
}
