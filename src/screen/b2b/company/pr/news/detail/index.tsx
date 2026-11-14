'use client'

import { Page, PageLoading } from '@/comp' // comp
import ComingSoon from '@/widgets/b2b/common/ComingSoon' // Coming Soon 컴포넌트
import { resolveSkeletonMode } from '@/config/skeleton' // resolve Skeleton Mode
import NewsDetailSkeleton from './skeleton/indexSkeleton' // News Detail Skeleton 컴포넌트

export const pageTitle = "언론보도 상세"

/** 미작업 화면 — ComingSoon. 시안 반영 시 본문을 교체한다. */
export default function B2bCompanyPrNewsDetailPage () {
  const skeletonId = 'b2b/company/pr/news/detail'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="company-pr-news-detail" title={pageTitle}  className="p-content" />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <NewsDetailSkeleton /> : undefined}
        className="page-container"
      >
        <h1 className="visually-hidden">{pageTitle}</h1>
        <ComingSoon />

      </PageLoading>
    </>
  )
}
