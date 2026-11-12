'use client'

import { Page, PageLoading } from '@/comp'
import { PublishingPlaceholder } from '@/screen/pub/widgets/publishing/PublishingPlaceholder'
import { resolveSkeletonMode } from '@/config/skeleton'
import NoticeListSkeleton from './skeleton/indexSkeleton'

export const pageTitle = "공지사항 목록"

/** IA publishing scaffold. Replace this screen body with the approved markup. */
export default function B2bCommonNoticeListPage () {
  const links = []
  const skeletonId = 'b2b/common/notice-list'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="b2b-common-notice-list" title={pageTitle} />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <NoticeListSkeleton /> : undefined}
        className="page-container"
      >
        <PublishingPlaceholder
          device="B2B"
          folderId="common"
          folderName="공통"
          screenName={pageTitle}
          screenType="Page"
          screenId="B2B-COMMON-NOTICE-LIST"
          pageUrl="/b2b/common/notice-list"
          links={links}
        />

      </PageLoading>
    </>
  )
}
