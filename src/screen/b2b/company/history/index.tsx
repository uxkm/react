'use client'

import { Page, PageLoading } from '@/comp'
import { PublishingPlaceholder } from '@/screen/pub/widgets/publishing/PublishingPlaceholder'
import { resolveSkeletonMode } from '@/config/skeleton'
import HistorySkeleton from './skeleton/indexSkeleton'

export const pageTitle = "연혁"

/** IA publishing scaffold. Replace this screen body with the approved markup. */
export default function B2bCompanyHistoryPage () {
  const links = [
    {
      "to": "/b2b/company/intro",
      "label": "멀티캠퍼스 소개",
      "screenId": "B2B-ABOUT-001"
    },
    {
      "to": "/b2b/company/ceo",
      "label": "CEO인사말",
      "screenId": "B2B-ABOUT-002"
    }
  ]
  const skeletonId = 'b2b/company/history'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="company-history" title={pageTitle}  className="project-content" />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <HistorySkeleton /> : undefined}
        className="page-container"
      >
        <PublishingPlaceholder
          device="B2B"
          folderId="company"
          folderName="회사소개"
          screenName={pageTitle}
          screenType="Page"
          screenId="B2B-ABOUT-003"
          pageUrl="/b2b/company/history"
          links={links}
        />

      </PageLoading>
    </>
  )
}
