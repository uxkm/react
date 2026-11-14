'use client'

import { Page, PageLoading } from '@/comp' // comp
import ComingSoon from '@/widgets/b2b/common/ComingSoon' // Coming Soon 컴포넌트
import { resolveSkeletonMode } from '@/config/skeleton' // resolve Skeleton Mode
import IndexSkeleton from './skeleton/indexSkeleton' // Index Skeleton 컴포넌트

export const pageTitle = "러닝플랫폼"

/** 미작업 화면 — ComingSoon. 시안 반영 시 본문을 교체한다. */
export default function B2bServicePlatformPage () {
  const skeletonId = 'b2b/service/platform'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="service-platform" title={pageTitle}  className="p-content" />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <IndexSkeleton /> : undefined}
        className="page-container"
      >
        <ComingSoon />

      </PageLoading>
    </>
  )
}
