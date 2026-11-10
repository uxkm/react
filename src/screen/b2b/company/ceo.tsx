'use client'

import { Page, PageLoading, PublishScreenStub } from '@/comp'
import { resolveSkeletonMode } from '@/config/skeleton'
import CeoSkeleton from './skeleton/ceoSkeleton'

export const pageTitle = "CEO 인사말"

/** IA publishing scaffold. Replace this screen body with the approved markup. */
export default function B2bCompanyCeoPage () {
  const links = [
    {
      "to": "/b2b/company/intro",
      "label": "멀티캠퍼스 소개",
      "screenId": "B2B-ABOUT-001"
    },
    {
      "to": "/b2b/company/history",
      "label": "연혁",
      "screenId": "B2B-ABOUT-003"
    }
  ]
  const skeletonId = 'b2b/company/ceo'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="b2b-company-ceo" title={pageTitle} />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <CeoSkeleton /> : undefined}
        className="page-container"
      >
        <PublishScreenStub
          device="B2B"
          folderId="company"
          folderName="회사소개"
          screenName={pageTitle}
          screenType="Page"
          screenId="B2B-ABOUT-002"
          pageUrl="/b2b/company/ceo"
          links={links}
        />

      </PageLoading>
    </>
  )
}
