'use client'

import { Page, PageLoading, PublishScreenStub } from '@/comp'
import { resolveSkeletonMode } from '@/config/skeleton'
import EsgSkeleton from './skeleton/esgSkeleton'

export const pageTitle = "ESG경영체계"

/** IA publishing scaffold. Replace this screen body with the approved markup. */
export default function B2bCompanySustainabilityEsgPage () {
  const links = [
    {
      "to": "/b2b/company/sustainability/environment",
      "label": "환경경영",
      "screenId": "B2B-COMPANY-SUSTAINABILITY-ENVIRONMENT"
    },
    {
      "to": "/b2b/company/sustainability/diversity",
      "label": "다양성/노사",
      "screenId": "B2B-COMPANY-SUSTAINABILITY-DIVERSITY"
    },
    {
      "to": "/b2b/company/sustainability/human-rights",
      "label": "인권경영",
      "screenId": "B2B-COMPANY-SUSTAINABILITY-HUMAN-RIGHTS"
    },
    {
      "to": "/b2b/company/sustainability/safety",
      "label": "안전보건",
      "screenId": "B2B-COMPANY-SUSTAINABILITY-SAFETY"
    },
    {
      "to": "/b2b/company/sustainability/information",
      "label": "정보보호",
      "screenId": "B2B-COMPANY-SUSTAINABILITY-INFORMATION"
    },
    {
      "to": "/b2b/company/sustainability/consumer",
      "label": "소비자보호",
      "screenId": "B2B-COMPANY-SUSTAINABILITY-CONSUMER"
    },
    {
      "to": "/b2b/company/sustainability/contribution",
      "label": "사회공헌",
      "screenId": "B2B-COMPANY-SUSTAINABILITY-CONTRIBUTION"
    },
    {
      "to": "/b2b/company/sustainability/esg-data",
      "label": "ESG Data",
      "screenId": "B2B-COMPANY-SUSTAINABILITY-ESG-DATA"
    }
  ]
  const skeletonId = 'b2b/company/sustainability/esg'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="b2b-company-sustainability-esg" title={pageTitle} />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <EsgSkeleton /> : undefined}
        className="page-container"
      >
        <PublishScreenStub
          device="B2B"
          folderId="company"
          folderName="회사소개"
          screenName={pageTitle}
          screenType="Page"
          screenId="B2B-ABOUT-005"
          pageUrl="/b2b/company/sustainability/esg"
          links={links}
        />

      </PageLoading>
    </>
  )
}
