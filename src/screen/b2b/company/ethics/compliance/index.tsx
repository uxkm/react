'use client'

import { Page, PageLoading } from '@/comp' // comp
import ComingSoon from '@/widgets/b2b/common/ComingSoon' // Coming Soon 컴포넌트
import { resolveSkeletonMode } from '@/config/skeleton' // resolve Skeleton Mode
import ComplianceSkeleton from './skeleton/indexSkeleton' // Compliance Skeleton 컴포넌트

export const pageTitle = "준법경영"

/** 미작업 화면 — ComingSoon. 시안 반영 시 본문을 교체한다. */
export default function B2bCompanyEthicsCompliancePage () {
  const skeletonId = 'b2b/company/ethics/compliance'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="company-ethics-compliance" title={pageTitle}  className="p-content" />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <ComplianceSkeleton /> : undefined}
        className="page-container"
      >
        <ComingSoon />

      </PageLoading>
    </>
  )
}
