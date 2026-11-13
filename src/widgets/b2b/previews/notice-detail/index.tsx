'use client'

import { Page, PageLoading } from '@/comp' // comp
import { PublishingPlaceholder } from '@/screen/pub/widgets/publishing/PublishingPlaceholder' // Publishing Placeholder 컴포넌트
import { resolveSkeletonMode } from '@/config/skeleton' // resolve Skeleton Mode
import NoticeDetailSkeleton from './skeleton/indexSkeleton' // Notice Detail Skeleton 컴포넌트

export const pageTitle = "공지사항 상세"

/** IA publishing scaffold. Replace this screen body with the approved markup. */
export default function B2bCommonNoticeDetailPage () {
  const links = []
  const skeletonId = 'b2b/common/notice-detail'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="common-notice-detail" title={pageTitle}  className="project-content" />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <NoticeDetailSkeleton /> : undefined}
        className="page-container"
      >
        <PublishingPlaceholder
          device="B2B"
          folderId="common"
          folderName="공통"
          screenName={pageTitle}
          screenType="Page"
          screenId="B2B-COMMON-NOTICE-DETAIL"
          pageUrl="/b2b/common/notice-detail"
          links={links}
        />

      </PageLoading>
    </>
  )
}
