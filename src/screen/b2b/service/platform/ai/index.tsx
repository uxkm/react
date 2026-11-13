'use client'

import { Page, PageLoading } from '@/comp'
import { PublishingPlaceholder } from '@/screen/pub/widgets/publishing/PublishingPlaceholder'
import { resolveSkeletonMode } from '@/config/skeleton'
import IndexSkeleton from './skeleton/indexSkeleton'

export const pageTitle = "AI 서비스"

/** IA publishing scaffold. Replace this screen body with the approved markup. */
export default function B2bServicePlatformAiPage () {
  const links = []
  const skeletonId = 'b2b/service/platform/ai'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="service-platform-ai" title={pageTitle}  className="project-content" />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <IndexSkeleton /> : undefined}
        className="page-container"
      >
        <PublishingPlaceholder
          device="B2B"
          folderId="service"
          folderName="서비스"
          screenName={pageTitle}
          screenType="Page"
          screenId="B2B-SERVICE-PLATFORM-AI"
          pageUrl="/b2b/service/platform/ai"
          links={links}
        />

      </PageLoading>
    </>
  )
}
