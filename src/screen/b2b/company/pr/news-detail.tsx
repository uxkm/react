'use client'

import { Page, PageLoading, PublishScreenStub } from '@/comp'
import { resolveSkeletonMode } from '@/config/skeleton'
import NewsDetailSkeleton from './skeleton/news-detailSkeleton'

export const pageTitle = "언론보도 상세"

/** IA publishing scaffold. Replace this screen body with the approved markup. */
export default function B2bCompanyPrNewsDetailPage () {
  const links = [
    {
      "to": "/b2b/company/pr/news-list",
      "label": "언론보도 목록",
      "screenId": "B2B-ABOUT-007"
    },
    {
      "to": "/b2b/company/pr/awards",
      "label": "수상실적",
      "screenId": "B2B-COMPANY-PR-AWARDS"
    }
  ]
  const skeletonId = 'b2b/company/pr/news-detail'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="b2b-company-pr-news-detail" title={pageTitle} />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <NewsDetailSkeleton /> : undefined}
        className="page-container"
      >
        <PublishScreenStub
          device="B2B"
          folderId="company"
          folderName="회사소개"
          screenName={pageTitle}
          screenType="Page"
          screenId="B2B-COMPANY-PR-NEWS-DETAIL"
          pageUrl="/b2b/company/pr/news-detail"
          links={links}
        />

      </PageLoading>
    </>
  )
}
