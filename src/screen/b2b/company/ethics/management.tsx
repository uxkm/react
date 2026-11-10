'use client'

import { Page, PageLoading, PublishScreenStub } from '@/comp'
import { resolveSkeletonMode } from '@/config/skeleton'
import ManagementSkeleton from './skeleton/managementSkeleton'

export const pageTitle = "경영원칙"

/** IA publishing scaffold. Replace this screen body with the approved markup. */
export default function B2bCompanyEthicsManagementPage () {
  const links = [
    {
      "to": "/b2b/company/ethics/compliance",
      "label": "준법경영",
      "screenId": "B2B-COMPANY-ETHICS-COMPLIANCE"
    }
  ]
  const skeletonId = 'b2b/company/ethics/management'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="b2b-company-ethics-management" title={pageTitle} />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <ManagementSkeleton /> : undefined}
        className="page-container"
      >
        <PublishScreenStub
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
