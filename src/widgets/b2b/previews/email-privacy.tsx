'use client'

import { Page, PageLoading, PublishScreenStub } from '@/comp'
import { resolveSkeletonMode } from '@/config/skeleton'
import EmailPrivacySkeleton from './skeleton/email-privacySkeleton'

export const pageTitle = "알기쉬운 개인정보처리방침"

/** IA publishing scaffold. Replace this screen body with the approved markup. */
export default function B2bCommonEmailPrivacyPage () {
  const links = []
  const skeletonId = 'b2b/common/email-privacy'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="b2b-common-email-privacy" title={pageTitle} />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <EmailPrivacySkeleton /> : undefined}
        className="page-container"
      >
        <PublishScreenStub
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
