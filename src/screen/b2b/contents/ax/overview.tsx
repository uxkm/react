'use client'

import { Page, PageLoading, PublishScreenStub } from '@/comp'
import { resolveSkeletonMode } from '@/config/skeleton'
import OverviewSkeleton from './skeleton/overviewSkeleton'

export const pageTitle = "AX교육 Overview"

/** IA publishing scaffold. Replace this screen body with the approved markup. */
export default function B2bContentsAxOverviewPage () {
  const links = [
    {
      "to": "/b2b/contents/ax/ai-search",
      "label": "AI 교육 탐색",
      "screenId": "B2B-CONTENTS-AX-AI-SEARCH"
    },
    {
      "to": "/b2b/contents/ax/competency",
      "label": "AX 역량수준 진단",
      "screenId": "B2B-CONTENTS-AX-COMPETENCY"
    },
    {
      "to": "/b2b/contents/ax/ai-studio",
      "label": "AI Studio",
      "screenId": "B2B-CONTENTS-AX-AI-STUDIO"
    },
    {
      "to": "/b2b/contents/ax/workshop",
      "label": "AX 워크숍",
      "screenId": "B2B-CONTENTS-AX-WORKSHOP"
    },
    {
      "to": "/b2b/contents/ax/hackathon",
      "label": "AX 해커톤",
      "screenId": "B2B-CONTENTS-AX-HACKATHON"
    }
  ]
  const skeletonId = 'b2b/contents/ax/overview'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="b2b-contents-ax-overview" title={pageTitle} />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <OverviewSkeleton /> : undefined}
        className="page-container"
      >
        <PublishScreenStub
          device="B2B"
          folderId="contents"
          folderName="기업교육"
          screenName={pageTitle}
          screenType="Page"
          screenId="B2B-CORPED-001"
          pageUrl="/b2b/contents/ax/overview"
          links={links}
        />

      </PageLoading>
    </>
  )
}
