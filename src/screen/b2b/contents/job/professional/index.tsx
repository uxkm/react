'use client'

import { Page, PageLoading } from '@/comp' // comp
import ComingSoon from '@/widgets/b2b/common/ComingSoon' // Coming Soon 컴포넌트
import { resolveSkeletonMode } from '@/config/skeleton' // resolve Skeleton Mode
import ProfessionalSkeleton from './skeleton/indexSkeleton' // Professional Skeleton 컴포넌트

export const pageTitle = "직무 전문 역량"

/** 미작업 화면 — ComingSoon. 시안 반영 시 본문을 교체한다. */
export default function B2bContentsJobProfessionalPage () {
  const skeletonId = 'b2b/contents/job/professional'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="contents-job-professional" title={pageTitle}  className="p-content" />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <ProfessionalSkeleton /> : undefined}
        className="page-container"
      >
        <ComingSoon />

      </PageLoading>
    </>
  )
}
