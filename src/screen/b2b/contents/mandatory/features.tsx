'use client'

import { Page, PageLoading, PublishScreenStub } from '@/comp'
import { resolveSkeletonMode } from '@/config/skeleton'
import FeaturesSkeleton from './skeleton/featuresSkeleton'

export const pageTitle = "법정필수교육 서비스 특징"

/** IA publishing scaffold. Replace this screen body with the approved markup. */
export default function B2bContentsMandatoryFeaturesPage () {
  const links = [
    {
      "to": "/b2b/contents/mandatory/courses",
      "label": "법정필수교육 대표 과정",
      "screenId": "B2B-CONTENTS-MANDATORY-COURSES"
    },
    {
      "to": "/b2b/contents/mandatory/estimate",
      "label": "법정교육 간편견적",
      "screenId": "B2B-CONTENTS-MANDATORY-ESTIMATE"
    }
  ]
  const skeletonId = 'b2b/contents/mandatory/features'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="b2b-contents-mandatory-features" title={pageTitle} />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <FeaturesSkeleton /> : undefined}
        className="page-container"
      >
        <PublishScreenStub
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
