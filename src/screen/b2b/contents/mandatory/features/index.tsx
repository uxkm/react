'use client'

import { Page, PageLoading } from '@/comp'
import { PublishingPlaceholder } from '@/screen/pub/widgets/publishing/PublishingPlaceholder'
import { resolveSkeletonMode } from '@/config/skeleton'
import FeaturesSkeleton from './skeleton/indexSkeleton'

export const pageTitle = "서비스 특징"

/** IA publishing scaffold. Replace this screen body with the approved markup. */
export default function B2bContentsMandatoryFeaturesPage () {
  const links = [
    {
      "to": "/b2b/contents/mandatory/courses",
      "label": "대표 과정",
      "screenId": "B2B-CONTENTS-MANDATORY-COURSES"
    },
    {
      "to": "/b2b/contents/mandatory/estimate",
      "label": "간편 견적받기",
      "screenId": "B2B-CONTENTS-MANDATORY-ESTIMATE"
    }
  ]
  const skeletonId = 'b2b/contents/mandatory/features'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="contents-mandatory-features" title={pageTitle}  className="project-content" />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <FeaturesSkeleton /> : undefined}
        className="page-container"
      >
        <PublishingPlaceholder
          device="B2B"
          folderId="contents"
          folderName="기업교육"
          screenName={pageTitle}
          screenType="Page"
          screenId="B2B-CONTENTS-MANDATORY-FEATURES"
          pageUrl="/b2b/contents/mandatory/features"
          links={links}
        />

      </PageLoading>
    </>
  )
}
