'use client'

import { Page, PageLoading } from '@/comp'
import { PublishingPlaceholder } from '@/screen/pub/widgets/publishing/PublishingPlaceholder'
import { resolveSkeletonMode } from '@/config/skeleton'
import ConsultingSkeleton from './skeleton/indexSkeleton'

export const pageTitle = "플랫폼 활용 컨설팅"

/** IA publishing scaffold. Replace this screen body with the approved markup. */
export default function B2bServicePlatformConsultingPage () {
  const links = []
  const skeletonId = 'b2b/service/platform/consulting'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="service-platform-consulting" title={pageTitle}  className="project-content" />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <ConsultingSkeleton /> : undefined}
        className="page-container"
      >
        <PublishingPlaceholder
          device="B2B"
          folderId="service"
          folderName="서비스"
          screenName={pageTitle}
          screenType="Page"
          screenId="B2B-SERVICE-PLATFORM-CONSULTING"
          pageUrl="/b2b/service/platform/consulting"
          links={links}
        />

      </PageLoading>
    </>
  )
}
