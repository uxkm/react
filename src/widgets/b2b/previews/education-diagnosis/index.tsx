'use client'

import { Page, PageLoading } from '@/comp' // comp
import { PublishingPlaceholder } from '@/screen/pub/widgets/publishing/PublishingPlaceholder' // Publishing Placeholder 컴포넌트
import { resolveSkeletonMode } from '@/config/skeleton' // resolve Skeleton Mode
import EducationDiagnosisSkeleton from './skeleton/indexSkeleton' // Education Diagnosis Skeleton 컴포넌트

export const pageTitle = "진단&맞춤추천"

/** IA publishing scaffold. Replace this screen body with the approved markup. */
export default function B2bCommonEducationDiagnosisPage () {
  const links = []
  const skeletonId = 'b2b/common/education-diagnosis'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="common-education-diagnosis" title={pageTitle}  className="project-content" />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <EducationDiagnosisSkeleton /> : undefined}
        className="page-container"
      >
        <PublishingPlaceholder
          device="B2B"
          folderId="common"
          folderName="공통"
          screenName={pageTitle}
          screenType="Layer"
          screenId="B2B-INSIGH-002"
          pageUrl="/b2b/common/education-diagnosis"
          links={links}
        />

      </PageLoading>
    </>
  )
}
