'use client'

import { Page, PageLoading, PublishScreenStub } from '@/comp'
import { resolveSkeletonMode } from '@/config/skeleton'
import ConsultingSkeleton from './skeleton/consultingSkeleton'

export const pageTitle = "플랫폼 활용 컨설팅"

/** IA publishing scaffold. Replace this screen body with the approved markup. */
export default function B2bServicePlatformConsultingPage () {
  const links = []
  const skeletonId = 'b2b/service/platform/consulting'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="b2b-service-platform-consulting" title={pageTitle} />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <ConsultingSkeleton /> : undefined}
        className="page-container"
      >
        <PublishScreenStub
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
