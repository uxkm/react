'use client'

import { Page, PageLoading } from '@/comp' // comp
import ComingSoon from '@/widgets/b2b/common/ComingSoon' // Coming Soon 컴포넌트
import { resolveSkeletonMode } from '@/config/skeleton' // resolve Skeleton Mode
import CompetencySkeleton from './skeleton/indexSkeleton' // Competency Skeleton 컴포넌트

export const pageTitle = "AX역량수준 진단"

/** 미작업 화면 — ComingSoon. 시안 반영 시 본문을 교체한다. */
export default function B2bContentsAxCompetencyPage () {
  const skeletonId = 'b2b/contents/ax/competency'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="contents-ax-competency" title={pageTitle}  className="p-content" />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <CompetencySkeleton /> : undefined}
        className="page-container"
      >
        <h1 className="visually-hidden">{pageTitle}</h1>
        <ComingSoon />

      </PageLoading>
    </>
  )
}
