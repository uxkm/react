'use client'

import { Page, PageLoading } from '@/comp'
import { PublishingPlaceholder } from '@/screen/pub/widgets/publishing/PublishingPlaceholder'
import { resolveSkeletonMode } from '@/config/skeleton'
import AssessmentSkeleton from './skeleton/indexSkeleton'

export const pageTitle = "리더십 진단"

/** IA publishing scaffold. Replace this screen body with the approved markup. */
export default function B2bContentsLeadershipAssessmentPage () {
  const links = [
    {
      "to": "/b2b/contents/leadership/executive",
      "label": "임원 리더십",
      "screenId": "B2B-CONTENTS-LEADERSHIP-EXECUTIVE"
    },
    {
      "to": "/b2b/contents/leadership/mba",
      "label": "MBA 프로그램",
      "screenId": "B2B-CONTENTS-LEADERSHIP-MBA"
    }
  ]
  const skeletonId = 'b2b/contents/leadership/assessment'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="contents-leadership-assessment" title={pageTitle}  className="project-content" />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <AssessmentSkeleton /> : undefined}
        className="page-container"
      >
        <PublishingPlaceholder
          device="B2B"
          folderId="contents"
          folderName="기업교육"
          screenName={pageTitle}
          screenType="Page"
          screenId="B2B-CONTENTS-LEADERSHIP-ASSESSMENT"
          pageUrl="/b2b/contents/leadership/assessment"
          links={links}
        />

      </PageLoading>
    </>
  )
}
