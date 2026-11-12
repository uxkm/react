'use client'

import { Page, PageLoading } from '@/comp'
import { PublishingPlaceholder } from '@/screen/pub/widgets/publishing/PublishingPlaceholder'
import { resolveSkeletonMode } from '@/config/skeleton'
import IntroSkeleton from './skeleton/indexSkeleton'

export const pageTitle = "멀티캠퍼스 소개"

/** IA publishing scaffold. Replace this screen body with the approved markup. */
export default function B2bCompanyIntroPage () {
  const links = [
    {
      "to": "/b2b/company/ceo",
      "label": "CEO 인사말",
      "screenId": "B2B-ABOUT-002"
    },
    {
      "to": "/b2b/company/history",
      "label": "연혁",
      "screenId": "B2B-ABOUT-003"
    }
  ]
  const skeletonId = 'b2b/company/intro'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="b2b-company-intro" title={pageTitle} />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <IntroSkeleton /> : undefined}
        className="page-container"
      >
        <PublishingPlaceholder
          device="B2B"
          folderId="company"
          folderName="회사소개"
          screenName={pageTitle}
          screenType="Page"
          screenId="B2B-ABOUT-001"
          pageUrl="/b2b/company/intro"
          links={links}
        />

      </PageLoading>
    </>
  )
}
