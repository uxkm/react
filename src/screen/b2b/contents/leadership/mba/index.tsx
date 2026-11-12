'use client'

import { Page, PageLoading } from '@/comp'
import { PublishingPlaceholder } from '@/screen/pub/widgets/publishing/PublishingPlaceholder'
import { resolveSkeletonMode } from '@/config/skeleton'
import MbaSkeleton from './skeleton/indexSkeleton'

export const pageTitle = "MBA 프로그램"

/** IA publishing scaffold. Replace this screen body with the approved markup. */
export default function B2bContentsLeadershipMbaPage () {
  const links = [
    {
      "to": "/b2b/contents/leadership/assessment",
      "label": "리더십 진단",
      "screenId": "B2B-CONTENTS-LEADERSHIP-ASSESSMENT"
    },
    {
      "to": "/b2b/contents/leadership/executive",
      "label": "임원 리더십",
      "screenId": "B2B-CONTENTS-LEADERSHIP-EXECUTIVE"
    }
  ]
  const skeletonId = 'b2b/contents/leadership/mba'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="b2b-contents-leadership-mba" title={pageTitle} />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <MbaSkeleton /> : undefined}
        className="page-container"
      >
        <PublishingPlaceholder
          device="B2B"
          folderId="contents"
          folderName="기업교육"
          screenName={pageTitle}
          screenType="Page"
          screenId="B2B-CONTENTS-LEADERSHIP-MBA"
          pageUrl="/b2b/contents/leadership/mba"
          links={links}
        />

      </PageLoading>
    </>
  )
}
