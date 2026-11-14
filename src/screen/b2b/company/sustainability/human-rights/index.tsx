'use client'

import { Page, PageLoading } from '@/comp' // comp
import ComingSoon from '@/widgets/b2b/common/ComingSoon' // Coming Soon 컴포넌트
import { resolveSkeletonMode } from '@/config/skeleton' // resolve Skeleton Mode
import HumanRightsSkeleton from './skeleton/indexSkeleton' // Human Rights Skeleton 컴포넌트

export const pageTitle = "인권경영"

/** 미작업 화면 — ComingSoon. 시안 반영 시 본문을 교체한다. */
export default function B2bCompanySustainabilityHumanRightsPage () {
  const skeletonId = 'b2b/company/sustainability/human-rights'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="company-sustainability-human-rights" title={pageTitle}  className="p-content" />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <HumanRightsSkeleton /> : undefined}
        className="page-container"
      >
        <ComingSoon />

      </PageLoading>
    </>
  )
}
