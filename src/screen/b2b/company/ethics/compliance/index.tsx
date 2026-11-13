'use client'

import { Page, PageLoading } from '@/comp' // comp
import { PublishingPlaceholder } from '@/screen/pub/widgets/publishing/PublishingPlaceholder' // Publishing Placeholder 컴포넌트
import { resolveSkeletonMode } from '@/config/skeleton' // resolve Skeleton Mode
import ComplianceSkeleton from './skeleton/indexSkeleton' // Compliance Skeleton 컴포넌트

export const pageTitle = "준법경영"

/** IA publishing scaffold. Replace this screen body with the approved markup. */
export default function B2bCompanyEthicsCompliancePage () {
  const links = [
    {
      "to": "/b2b/company/ethics/management",
      "label": "경영원칙",
      "screenId": "B2B-ABOUT-004"
    }
  ]
  const skeletonId = 'b2b/company/ethics/compliance'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="company-ethics-compliance" title={pageTitle}  className="project-content" />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <ComplianceSkeleton /> : undefined}
        className="page-container"
      >
        <PublishingPlaceholder
          device="B2B"
          folderId="company"
          folderName="회사소개"
          screenName={pageTitle}
          screenType="Page"
          screenId="B2B-COMPANY-ETHICS-COMPLIANCE"
          pageUrl="/b2b/company/ethics/compliance"
          links={links}
        />

      </PageLoading>
    </>
  )
}
