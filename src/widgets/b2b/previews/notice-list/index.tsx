'use client'

import { Page, PageLoading } from '@/comp' // comp
import { PublishingPlaceholder } from '@/screen/pub/widgets/publishing/PublishingPlaceholder' // Publishing Placeholder 컴포넌트
import { resolveSkeletonMode } from '@/config/skeleton' // resolve Skeleton Mode
import NoticeListSkeleton from './skeleton/indexSkeleton' // Notice List Skeleton 컴포넌트

export const pageTitle = "공지사항 목록"

/** IA publishing scaffold. Replace this screen body with the approved markup. */
export default function B2bCommonNoticeListPage () {
  const links = []
  const skeletonId = 'b2b/common/notice-list'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="common-notice-list" title={pageTitle}  className="project-content" />
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
