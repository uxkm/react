'use client'

import { Page, PageLoading } from '@/comp'
import { PublishingPlaceholder } from '@/screen/pub/widgets/publishing/PublishingPlaceholder'
import { resolveSkeletonMode } from '@/config/skeleton'
import IndexSkeleton from './skeleton/indexSkeleton'

export const pageTitle = "플랫폼도입문의"

/** IA publishing scaffold. Replace this screen body with the approved markup. */
export default function B2bContactPlatformPage () {
  const links = []
  const skeletonId = 'b2b/contact/platform'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="contact-platform" title={pageTitle}  className="project-content" />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <IndexSkeleton /> : undefined}
        className="page-container"
      >
        <PublishingPlaceholder
          device="B2B"
          folderId="contact"
          folderName="문의하기"
          screenName={pageTitle}
          screenType="Page"
          screenId="B2B-CONTACT-PLATFORM"
          pageUrl="/b2b/contact/platform"
          links={links}
        />

      </PageLoading>
    </>
  )
}
