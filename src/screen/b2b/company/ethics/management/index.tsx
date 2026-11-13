'use client'

import { Page, PageLoading } from '@/comp'
import { PublishingPlaceholder } from '@/screen/pub/widgets/publishing/PublishingPlaceholder'
import { resolveSkeletonMode } from '@/config/skeleton'
import ManagementSkeleton from './skeleton/indexSkeleton'

export const pageTitle = "경영원칙"

/** IA publishing scaffold. Replace this screen body with the approved markup. */
export default function B2bCompanyEthicsManagementPage () {
  const links = [
    {
      "to": "/b2b/company/ethics/compliance",
      "label": "준법경영",
      "screenId": "B2B-COMPANY-ETHICS-COMPLIANCE"
    },
    {
      "to": "/b2b/company/ethics/sericeo",
      "label": "SERICEO",
      "screenId": "B2B-COMPANY-ETHICS-SERICEO"
    }
  ]
  const skeletonId = 'b2b/company/ethics/management'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="company-ethics-management" title={pageTitle}  className="project-content" />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <ManagementSkeleton /> : undefined}
        className="page-container"
      >
        <PublishingPlaceholder
          device="B2B"
          folderId="company"
          folderName="회사소개"
          screenName={pageTitle}
          screenType="Page"
          screenId="B2B-ABOUT-004"
          pageUrl="/b2b/company/ethics/management"
          links={links}
        />

      </PageLoading>
    </>
  )
}
