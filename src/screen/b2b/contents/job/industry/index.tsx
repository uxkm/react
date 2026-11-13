'use client'

import { Page, PageLoading } from '@/comp'
import { PublishingPlaceholder } from '@/screen/pub/widgets/publishing/PublishingPlaceholder'
import { resolveSkeletonMode } from '@/config/skeleton'
import IndustrySkeleton from './skeleton/indexSkeleton'

export const pageTitle = "산업 전문 역량"

/** IA publishing scaffold. Replace this screen body with the approved markup. */
export default function B2bContentsJobIndustryPage () {
  const links = [
    {
      "to": "/b2b/contents/job/professional",
      "label": "직무 전문 역량",
      "screenId": "B2B-CONTENTS-JOB-PROFESSIONAL"
    },
    {
      "to": "/b2b/contents/job/certification",
      "label": "자격대비",
      "screenId": "B2B-CONTENTS-JOB-CERTIFICATION"
    }
  ]
  const skeletonId = 'b2b/contents/job/industry'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="contents-job-industry" title={pageTitle}  className="project-content" />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <IndustrySkeleton /> : undefined}
        className="page-container"
      >
        <PublishingPlaceholder
          device="B2B"
          folderId="contents"
          folderName="기업교육"
          screenName={pageTitle}
          screenType="Page"
          screenId="B2B-CONTENTS-JOB-INDUSTRY"
          pageUrl="/b2b/contents/job/industry"
          links={links}
        />

      </PageLoading>
    </>
  )
}
