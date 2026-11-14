'use client'

import { Page, PageLoading } from '@/comp' // comp
import ComingSoon from '@/widgets/b2b/common/ComingSoon' // Coming Soon 컴포넌트
import { resolveSkeletonMode } from '@/config/skeleton' // resolve Skeleton Mode
import CertificationSkeleton from './skeleton/indexSkeleton' // Certification Skeleton 컴포넌트

export const pageTitle = "자격대비"

/** 미작업 화면 — ComingSoon. 시안 반영 시 본문을 교체한다. */
export default function B2bContentsJobCertificationPage () {
  const skeletonId = 'b2b/contents/job/certification'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="contents-job-certification" title={pageTitle}  className="p-content" />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <CertificationSkeleton /> : undefined}
        className="page-container"
      >
        <h1 className="visually-hidden">{pageTitle}</h1>
        <ComingSoon />

      </PageLoading>
    </>
  )
}
