'use client'

import { Page, PageLoading } from '@/comp'
import { PublishingPlaceholder } from '@/screen/pub/widgets/publishing/PublishingPlaceholder'
import { resolveSkeletonMode } from '@/config/skeleton'
import CoursesSkeleton from './skeleton/indexSkeleton'

export const pageTitle = "대표 과정"

/** IA publishing scaffold. Replace this screen body with the approved markup. */
export default function B2bContentsMandatoryCoursesPage () {
  const links = [
    {
      "to": "/b2b/contents/mandatory/features",
      "label": "서비스 특징",
      "screenId": "B2B-CONTENTS-MANDATORY-FEATURES"
    },
    {
      "to": "/b2b/contents/mandatory/estimate",
      "label": "간편 견적받기",
      "screenId": "B2B-CONTENTS-MANDATORY-ESTIMATE"
    }
  ]
  const skeletonId = 'b2b/contents/mandatory/courses'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="contents-mandatory-courses" title={pageTitle}  className="project-content" />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <CoursesSkeleton /> : undefined}
        className="page-container"
      >
        <PublishingPlaceholder
          device="B2B"
          folderId="contents"
          folderName="기업교육"
          screenName={pageTitle}
          screenType="Page"
          screenId="B2B-CONTENTS-MANDATORY-COURSES"
          pageUrl="/b2b/contents/mandatory/courses"
          links={links}
        />

      </PageLoading>
    </>
  )
}
