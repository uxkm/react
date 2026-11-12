'use client'

import { Page, PageLoading } from '@/comp'
import { PublishingPlaceholder } from '@/screen/pub/widgets/publishing/PublishingPlaceholder'
import { resolveSkeletonMode } from '@/config/skeleton'
import NoticeDetailSkeleton from './skeleton/indexSkeleton'

export const pageTitle = "공지사항 상세"

/** IA publishing scaffold. Replace this screen body with the approved markup. */
export default function B2bCommonNoticeDetailPage () {
  const links = []
  const skeletonId = 'b2b/common/notice-detail'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="b2b-common-notice-detail" title={pageTitle} />
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
