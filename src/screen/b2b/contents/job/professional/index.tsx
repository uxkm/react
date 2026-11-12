'use client'

import { Page, PageLoading } from '@/comp'
import { PublishingPlaceholder } from '@/screen/pub/widgets/publishing/PublishingPlaceholder'
import { resolveSkeletonMode } from '@/config/skeleton'
import ProfessionalSkeleton from './skeleton/indexSkeleton'

export const pageTitle = "직무 전문 역량"

/** IA publishing scaffold. Replace this screen body with the approved markup. */
export default function B2bContentsJobProfessionalPage () {
  const links = [
    {
      "to": "/b2b/contents/job/industry",
      "label": "산업 전문 역량",
      "screenId": "B2B-CONTENTS-JOB-INDUSTRY"
    },
    {
      "to": "/b2b/contents/job/certification",
      "label": "자격대비",
      "screenId": "B2B-CONTENTS-JOB-CERTIFICATION"
    }
  ]
  const skeletonId = 'b2b/contents/job/professional'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="b2b-contents-job-professional" title={pageTitle} />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <ProfessionalSkeleton /> : undefined}
        className="page-container"
      >
        <PublishingPlaceholder
          device="B2B"
          folderId="contents"
          folderName="기업교육"
          screenName={pageTitle}
          screenType="Page"
          screenId="B2B-CONTENTS-JOB-PROFESSIONAL"
          pageUrl="/b2b/contents/job/professional"
          links={links}
        />

      </PageLoading>
    </>
  )
}
