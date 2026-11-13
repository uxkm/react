'use client'

import { Page, PageLoading } from '@/comp'
import { PublishingPlaceholder } from '@/screen/pub/widgets/publishing/PublishingPlaceholder'
import { resolveSkeletonMode } from '@/config/skeleton'
import IndexSkeleton from './skeleton/indexSkeleton'

export const pageTitle = "주가정보"

/** IA publishing scaffold. Replace this screen body with the approved markup. */
export default function B2bCompanyInvestorsStockPricePage () {
  const links = []
  const skeletonId = 'b2b/company/investors/stock-price'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="company-investors-stock-price" title={pageTitle}  className="project-content" />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <IndexSkeleton /> : undefined}
        className="page-container"
      >
        <PublishingPlaceholder
          device="B2B"
          folderId="company"
          folderName="회사소개"
          screenName={pageTitle}
          screenType="Page"
          screenId="B2B-COMPANY-INVESTORS-STOCK-PRICE"
          pageUrl="/b2b/company/investors/stock-price"
          links={links}
        />

      </PageLoading>
    </>
  )
}
