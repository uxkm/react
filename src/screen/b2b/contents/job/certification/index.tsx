'use client'

import { Page, PageLoading } from '@/comp'
import { PublishingPlaceholder } from '@/screen/pub/widgets/publishing/PublishingPlaceholder'
import { resolveSkeletonMode } from '@/config/skeleton'
import CertificationSkeleton from './skeleton/indexSkeleton'

export const pageTitle = "자격대비"

/** IA publishing scaffold. Replace this screen body with the approved markup. */
export default function B2bContentsJobCertificationPage () {
  const links = [
    {
      "to": "/b2b/contents/job/professional",
      "label": "직무 전문 역량",
      "screenId": "B2B-CONTENTS-JOB-PROFESSIONAL"
    },
    {
      "to": "/b2b/contents/job/industry",
      "label": "산업 전문 역량",
      "screenId": "B2B-CONTENTS-JOB-INDUSTRY"
    }
  ]
  const skeletonId = 'b2b/contents/job/certification'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="contents-job-certification" title={pageTitle}  className="project-content" />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <CertificationSkeleton /> : undefined}
        className="page-container"
      >
        <PublishingPlaceholder
          device="B2B"
          folderId="contents"
          folderName="기업교육"
          screenName={pageTitle}
          screenType="Page"
          screenId="B2B-CONTENTS-JOB-CERTIFICATION"
          pageUrl="/b2b/contents/job/certification"
          links={links}
        />

      </PageLoading>
    </>
  )
}
