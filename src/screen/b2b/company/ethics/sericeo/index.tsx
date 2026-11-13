'use client'

import { Page, PageLoading } from '@/comp' // comp
import { PublishingPlaceholder } from '@/screen/pub/widgets/publishing/PublishingPlaceholder' // Publishing Placeholder 컴포넌트
import { resolveSkeletonMode } from '@/config/skeleton' // resolve Skeleton Mode
import IndexSkeleton from './skeleton/indexSkeleton' // Index Skeleton 컴포넌트

export const pageTitle = "SERICEO"

/** IA publishing scaffold. Replace this screen body with the approved markup. */
export default function B2bCompanyEthicsSericeoPage () {
  const links = []
  const skeletonId = 'b2b/company/ethics/sericeo'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="company-ethics-sericeo" title={pageTitle}  className="project-content" />
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
          screenId="B2B-COMPANY-ETHICS-SERICEO"
          pageUrl="/b2b/company/ethics/sericeo"
          links={links}
        />

      </PageLoading>
    </>
  )
}
