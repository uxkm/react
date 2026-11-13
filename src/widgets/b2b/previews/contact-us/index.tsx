'use client'

import { Page, PageLoading } from '@/comp' // comp
import { PublishingPlaceholder } from '@/screen/pub/widgets/publishing/PublishingPlaceholder' // Publishing Placeholder 컴포넌트
import { resolveSkeletonMode } from '@/config/skeleton' // resolve Skeleton Mode
import ContactUsSkeleton from './skeleton/indexSkeleton' // Contact Us Skeleton 컴포넌트

export const pageTitle = "Contact us"

/** IA publishing scaffold. Replace this screen body with the approved markup. */
export default function B2bCommonContactUsPage () {
  const links = []
  const skeletonId = 'b2b/common/contact-us'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="common-contact-us" title={pageTitle}  className="project-content" />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <ContactUsSkeleton /> : undefined}
        className="page-container"
      >
        <PublishingPlaceholder
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
