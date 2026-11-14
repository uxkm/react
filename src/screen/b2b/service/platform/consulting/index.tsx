'use client'

import { Page, PageLoading } from '@/comp' // comp
import ComingSoon from '@/widgets/b2b/common/ComingSoon' // Coming Soon 컴포넌트
import { resolveSkeletonMode } from '@/config/skeleton' // resolve Skeleton Mode
import ConsultingSkeleton from './skeleton/indexSkeleton' // Consulting Skeleton 컴포넌트

export const pageTitle = "플랫폼 활용 컨설팅"

/** 미작업 화면 — ComingSoon. 시안 반영 시 본문을 교체한다. */
export default function B2bServicePlatformConsultingPage () {
  const skeletonId = 'b2b/service/platform/consulting'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="service-platform-consulting" title={pageTitle}  className="p-content" />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <ConsultingSkeleton /> : undefined}
        className="page-container"
      >
        <ComingSoon />

      </PageLoading>
    </>
  )
}
