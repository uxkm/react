'use client'

import { Page, PageLoading, PublishScreenStub } from '@/comp'
import { resolveSkeletonMode } from '@/config/skeleton'
import IrSkeleton from './skeleton/irSkeleton'

export const pageTitle = "IR 자료실"

/** IA publishing scaffold. Replace this screen body with the approved markup. */
export default function B2bCompanyInvestorsIrPage () {
  const links = [
    {
      "to": "/b2b/company/investors/financial",
      "label": "재무정보",
      "screenId": "B2B-ABOUT-006"
    },
    {
      "to": "/b2b/company/investors/stock",
      "label": "주주정보",
      "screenId": "B2B-COMPANY-INVESTORS-STOCK"
    },
    {
      "to": "/b2b/company/investors/disclosure",
      "label": "공시정보",
      "screenId": "B2B-COMPANY-INVESTORS-DISCLOSURE"
    }
  ]
  const skeletonId = 'b2b/company/investors/ir'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="b2b-company-investors-ir" title={pageTitle} />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <IrSkeleton /> : undefined}
        className="page-container"
      >
        <PublishScreenStub
          device="B2B"
          folderId="company"
          folderName="회사소개"
          screenName={pageTitle}
          screenType="Page"
          screenId="B2B-COMPANY-INVESTORS-IR"
          pageUrl="/b2b/company/investors/ir"
          links={links}
        />

      </PageLoading>
    </>
  )
}
