'use client'

import { Page, PageLoading } from '@/comp'
import { PublishingPlaceholder } from '@/screen/pub/widgets/publishing/PublishingPlaceholder'
import { resolveSkeletonMode } from '@/config/skeleton'
import ContributionSkeleton from './skeleton/indexSkeleton'

export const pageTitle = "사회공헌"

/** IA publishing scaffold. Replace this screen body with the approved markup. */
export default function B2bCompanySustainabilityContributionPage () {
  const links = [
    {
      "to": "/b2b/company/sustainability/esg",
      "label": "ESG경영체계",
      "screenId": "B2B-ABOUT-005"
    },
    {
      "to": "/b2b/company/sustainability/environment",
      "label": "환경경영",
      "screenId": "B2B-COMPANY-SUSTAINABILITY-ENVIRONMENT"
    },
    {
      "to": "/b2b/company/sustainability/diversity",
      "label": "다양성 / 노사",
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
      "to": "/b2b/company/sustainability/esg-data",
      "label": "ESG Data",
      "screenId": "B2B-COMPANY-SUSTAINABILITY-ESG-DATA"
    }
  ]
  const skeletonId = 'b2b/company/sustainability/contribution'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="company-sustainability-contribution" title={pageTitle}  className="project-content" />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <ContributionSkeleton /> : undefined}
        className="page-container"
      >
        <PublishingPlaceholder
          device="B2B"
          folderId="company"
          folderName="회사소개"
          screenName={pageTitle}
          screenType="Page"
          screenId="B2B-COMPANY-SUSTAINABILITY-CONTRIBUTION"
          pageUrl="/b2b/company/sustainability/contribution"
          links={links}
        />

      </PageLoading>
    </>
  )
}
