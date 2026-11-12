'use client'

import { Page, PageLoading } from '@/comp'
import { PublishingPlaceholder } from '@/screen/pub/widgets/publishing/PublishingPlaceholder'
import { resolveSkeletonMode } from '@/config/skeleton'
import IndexSkeleton from './skeleton/indexSkeleton'

export const pageTitle = "리더십 교육"

/** IA publishing scaffold. Replace this screen body with the approved markup. */
export default function B2bContentsLeadershipPage () {
  const links = [
    {
      "to": "/b2b/contents/it",
      "label": "IT교육",
      "screenId": "B2B-CORPED-002"
    },
    {
      "to": "/b2b/contents/job",
      "label": "직무교육",
      "screenId": "B2B-CORPED-003"
    },
    {
      "to": "/b2b/contents/mandatory",
      "label": "법정필수교육",
      "screenId": "B2B-CORPED-005"
    },
    {
      "to": "/b2b/contents/language",
      "label": "외국어 교육",
      "screenId": "B2B-CORPED-006"
    },
    {
      "to": "/b2b/contents/small-business",
      "label": "중소기업 인재키움 프리미엄",
      "screenId": "B2B-CONTENTS-SMALL-BUSINESS"
    }
  ]
  const skeletonId = 'b2b/contents/leadership'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="b2b-contents-leadership" title={pageTitle} />
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
          screenId="B2B-CORPED-004"
          pageUrl="/b2b/contents/leadership"
          links={links}
        />

      </PageLoading>
    </>
  )
}
