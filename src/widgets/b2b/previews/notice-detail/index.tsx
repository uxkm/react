'use client'

import { Page, PageLoading } from '@/comp' // comp
import ComingSoon from '@/widgets/b2b/common/ComingSoon' // Coming Soon 컴포넌트
import { resolveSkeletonMode } from '@/config/skeleton' // resolve Skeleton Mode
import NoticeDetailSkeleton from './skeleton/indexSkeleton' // Notice Detail Skeleton 컴포넌트

export const pageTitle = "공지사항 상세"

/** 미작업 화면 — ComingSoon. 시안 반영 시 본문을 교체한다. */
export default function B2bCommonNoticeDetailPage () {
  const skeletonId = 'b2b/common/notice-detail'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="common-notice-detail" title={pageTitle}  className="p-content" />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <NoticeDetailSkeleton /> : undefined}
        className="page-container"
      >
        <ComingSoon />

      </PageLoading>
    </>
  )
}
