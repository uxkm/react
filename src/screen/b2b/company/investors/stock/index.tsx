'use client'

import { Page, PageLoading } from '@/comp'
import { PublishingPlaceholder } from '@/screen/pub/widgets/publishing/PublishingPlaceholder'
import { resolveSkeletonMode } from '@/config/skeleton'
import StockSkeleton from './skeleton/indexSkeleton'

export const pageTitle = "주주정보"

/** IA publishing scaffold. Replace this screen body with the approved markup. */
export default function B2bCompanyInvestorsStockPage () {
  const links = [
    {
      "to": "/b2b/company/investors/financial",
      "label": "재무정보",
      "screenId": "B2B-ABOUT-006"
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
    }
  ]
  const skeletonId = 'b2b/company/investors/stock'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="b2b-company-investors-stock" title={pageTitle} />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <StockSkeleton /> : undefined}
        className="page-container"
      >
        <PublishingPlaceholder
          device="B2B"
          folderId="company"
          folderName="회사소개"
          screenName={pageTitle}
          screenType="Page"
          screenId="B2B-COMPANY-INVESTORS-STOCK"
          pageUrl="/b2b/company/investors/stock"
          links={links}
        />

      </PageLoading>
    </>
  )
}
