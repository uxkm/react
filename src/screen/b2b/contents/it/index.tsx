'use client'

import { Page, PageLoading } from '@/comp'
import { PublishingPlaceholder } from '@/screen/pub/widgets/publishing/PublishingPlaceholder'
import { resolveSkeletonMode } from '@/config/skeleton'
import IndexSkeleton from './skeleton/indexSkeleton'

export const pageTitle = "IT교육"

/** IA publishing scaffold. Replace this screen body with the approved markup. */
export default function B2bContentsItPage () {
  const links = [
    {
      "to": "/b2b/contents/job",
      "label": "직무교육",
      "screenId": "B2B-CORPED-003"
    },
    {
      "to": "/b2b/contents/leadership",
      "label": "리더십 교육",
      "screenId": "B2B-CORPED-004"
    },
    {
      "to": "/b2b/contents/mandatory",
      "label": "법정필수교육",
      "screenId": "B2B-CORPED-005"
    },
    {
      "to": "/b2b/contents/language",
      "label": "외국어교육",
      "screenId": "B2B-CORPED-006"
    },
    {
      "to": "/b2b/contents/small-business",
      "label": "[상생협력] 중소기업 인재키움 프리미엄",
      "screenId": "B2B-CONTENTS-SMALL-BUSINESS"
    }
  ]
  const skeletonId = 'b2b/contents/it'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="contents-it" title={pageTitle}  className="project-content" />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <IndexSkeleton /> : undefined}
        className="page-container"
      >
        <PublishingPlaceholder
          device="B2B"
          folderId="contents"
          folderName="기업교육"
          screenName={pageTitle}
          screenType="Page"
          screenId="B2B-CORPED-002"
          pageUrl="/b2b/contents/it"
          links={links}
        />

      </PageLoading>
    </>
  )
}
