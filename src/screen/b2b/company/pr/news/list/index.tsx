'use client'

import { Page, PageLoading } from '@/comp'
import { PublishingPlaceholder } from '@/screen/pub/widgets/publishing/PublishingPlaceholder'
import { resolveSkeletonMode } from '@/config/skeleton'
import NewsListSkeleton from './skeleton/indexSkeleton'

export const pageTitle = "언론보도 목록"

/** IA publishing scaffold. Replace this screen body with the approved markup. */
export default function B2bCompanyPrNewsListPage () {
  const links = [
    {
      "to": "/b2b/company/pr/news/detail",
      "label": "언론보도 상세",
      "screenId": "B2B-COMPANY-PR-NEWS-DETAIL"
    },
    {
      "to": "/b2b/company/pr/awards",
      "label": "수상실적",
      "screenId": "B2B-COMPANY-PR-AWARDS"
    }
  ]
  const skeletonId = 'b2b/company/pr/news/list'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="company-pr-news-list" title={pageTitle}  className="project-content" />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <NewsListSkeleton /> : undefined}
        className="page-container"
      >
        <PublishingPlaceholder
          device="B2B"
          folderId="company"
          folderName="회사소개"
          screenName={pageTitle}
          screenType="Page"
          screenId="B2B-ABOUT-007"
          pageUrl="/b2b/company/pr/news/list"
          links={links}
        />

      </PageLoading>
    </>
  )
}
