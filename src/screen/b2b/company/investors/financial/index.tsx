'use client'

import { Page, PageLoading } from '@/comp' // comp
import { PublishingPlaceholder } from '@/screen/pub/widgets/publishing/PublishingPlaceholder' // Publishing Placeholder 컴포넌트
import { resolveSkeletonMode } from '@/config/skeleton' // resolve Skeleton Mode
import FinancialSkeleton from './skeleton/indexSkeleton' // Financial Skeleton 컴포넌트

export const pageTitle = "재무정보"

/** IA publishing scaffold. Replace this screen body with the approved markup. */
export default function B2bCompanyInvestorsFinancialPage () {
  const links = [
    {
      "to": "/b2b/company/investors/shareholders",
      "label": "주주정보",
      "screenId": "B2B-COMPANY-INVESTORS-STOCK"
    },
    {
      "to": "/b2b/company/investors/disclosure",
      "label": "공시정보",
      "screenId": "B2B-COMPANY-INVESTORS-DISCLOSURE"
    },
    {
      "to": "/b2b/company/investors/ir",
      "label": "IR 자료실",
      "screenId": "B2B-COMPANY-INVESTORS-IR"
    },
    {
      "to": "/b2b/company/investors/stock-price",
      "label": "주가정보",
      "screenId": "B2B-COMPANY-INVESTORS-STOCK-PRICE"
    }
  ]
  const skeletonId = 'b2b/company/investors/financial'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="company-investors-financial" title={pageTitle}  className="project-content" />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <FinancialSkeleton /> : undefined}
        className="page-container"
      >
        <PublishingPlaceholder
          device="B2B"
          folderId="company"
          folderName="회사소개"
          screenName={pageTitle}
          screenType="Page"
          screenId="B2B-ABOUT-006"
          pageUrl="/b2b/company/investors/financial"
          links={links}
        />

      </PageLoading>
    </>
  )
}
