'use client'

import { Page, PageLoading, PublishScreenStub } from '@/comp'
import { resolveSkeletonMode } from '@/config/skeleton'
import ContactUsSkeleton from './skeleton/contact-usSkeleton'

export const pageTitle = "Contact us"

/** IA publishing scaffold. Replace this screen body with the approved markup. */
export default function B2bCommonContactUsPage () {
  const links = []
  const skeletonId = 'b2b/common/contact-us'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="b2b-common-contact-us" title={pageTitle} />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <ContactUsSkeleton /> : undefined}
        className="page-container"
      >
        <PublishScreenStub
          device="B2B"
          folderId="common"
          folderName="공통"
          screenName={pageTitle}
          screenType="Layer"
          screenId="B2B-COMMON-CONTACT-US"
          pageUrl="/b2b/common/contact-us"
          links={links}
        />

      </PageLoading>
    </>
  )
}
