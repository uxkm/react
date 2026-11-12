'use client'

import { Page, PageLoading } from '@/comp'
import { PublishingPlaceholder } from '@/screen/pub/widgets/publishing/PublishingPlaceholder'
import { resolveSkeletonMode } from '@/config/skeleton'
import EducationDiagnosisSkeleton from './skeleton/indexSkeleton'

export const pageTitle = "간편 진단 모달"

/** IA publishing scaffold. Replace this screen body with the approved markup. */
export default function B2bCommonEducationDiagnosisPage () {
  const links = []
  const skeletonId = 'b2b/common/education-diagnosis'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="b2b-common-education-diagnosis" title={pageTitle} />
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
