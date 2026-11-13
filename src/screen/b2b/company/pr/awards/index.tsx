'use client'

import { Page, PageLoading } from '@/comp'
import { PublishingPlaceholder } from '@/screen/pub/widgets/publishing/PublishingPlaceholder'
import { resolveSkeletonMode } from '@/config/skeleton'
import AwardsSkeleton from './skeleton/indexSkeleton'

export const pageTitle = "수상실적"

/** IA publishing scaffold. Replace this screen body with the approved markup. */
export default function B2bCompanyPrAwardsPage () {
  const links = [
    {
      "to": "/b2b/company/pr/news/list",
      "label": "언론보도 목록",
      "screenId": "B2B-ABOUT-007"
    },
    {
      "to": "/b2b/company/pr/news/detail",
      "label": "언론보도 상세",
      "screenId": "B2B-COMPANY-PR-NEWS-DETAIL"
    }
  ]
  const skeletonId = 'b2b/company/pr/awards'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="company-pr-awards" title={pageTitle}  className="project-content" />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <AwardsSkeleton /> : undefined}
        className="page-container"
      >
        <PublishingPlaceholder
          device="B2B"
          folderId="company"
          folderName="회사소개"
          screenName={pageTitle}
          screenType="Page"
          screenId="B2B-COMPANY-PR-AWARDS"
          pageUrl="/b2b/company/pr/awards"
          links={links}
        />

      </PageLoading>
    </>
  )
}
