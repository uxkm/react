'use client'

import { Page, PageLoading } from '@/comp' // comp
import ComingSoon from '@/widgets/b2b/common/ComingSoon' // Coming Soon 컴포넌트
import { resolveSkeletonMode } from '@/config/skeleton' // resolve Skeleton Mode
import ListSkeleton from './skeleton/indexSkeleton' // List Skeleton 컴포넌트

export const pageTitle = "멀캠ON 목록"

/** 미작업 화면 — ComingSoon. 시안 반영 시 본문을 교체한다. */
export default function B2bInsightOnListPage () {
  const skeletonId = 'b2b/insight/on/list'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="insight-on-list" title={pageTitle}  className="p-content" />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <ListSkeleton /> : undefined}
        className="page-container"
      >
        <h1 className="visually-hidden">{pageTitle}</h1>
        <ComingSoon />

      </PageLoading>
    </>
  )
}
