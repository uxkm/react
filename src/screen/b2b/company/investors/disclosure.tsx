'use client'

import { Page, PageLoading, PublishScreenStub } from '@/comp'
import { resolveSkeletonMode } from '@/config/skeleton'
import DisclosureSkeleton from './skeleton/disclosureSkeleton'

export const pageTitle = "공시정보"

/** IA publishing scaffold. Replace this screen body with the approved markup. */
export default function B2bCompanyInvestorsDisclosurePage () {
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
      "to": "/b2b/company/investors/ir",
      "label": "IR 자료실",
      "screenId": "B2B-COMPANY-INVESTORS-IR"
    }
  ]
  const skeletonId = 'b2b/company/investors/disclosure'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="b2b-company-investors-disclosure" title={pageTitle} />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <DisclosureSkeleton /> : undefined}
        className="page-container"
      >
        <PublishScreenStub
          device="B2B"
          folderId="company"
          folderName="회사소개"
          screenName={pageTitle}
          screenType="Page"
          screenId="B2B-COMPANY-INVESTORS-DISCLOSURE"
          pageUrl="/b2b/company/investors/disclosure"
          links={links}
        />

      </PageLoading>
    </>
  )
}
