'use client'

import { Page, PageLoading } from '@/comp'
import { PublishingPlaceholder } from '@/screen/pub/widgets/publishing/PublishingPlaceholder'
import { resolveSkeletonMode } from '@/config/skeleton'
import CompetencySkeleton from './skeleton/indexSkeleton'

export const pageTitle = "AX 역량수준 진단"

/** IA publishing scaffold. Replace this screen body with the approved markup. */
export default function B2bContentsAxCompetencyPage () {
  const links = [
    {
      "to": "/b2b/contents/ax/overview",
      "label": "AX교육 Overview",
      "screenId": "B2B-CORPED-001"
    },
    {
      "to": "/b2b/contents/ax/ai-search",
      "label": "AI 교육 탐색",
      "screenId": "B2B-CONTENTS-AX-AI-SEARCH"
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
  const skeletonId = 'b2b/contents/ax/competency'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="b2b-contents-ax-competency" title={pageTitle} />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <CompetencySkeleton /> : undefined}
        className="page-container"
      >
        <PublishingPlaceholder
          device="B2B"
          folderId="contents"
          folderName="기업교육"
          screenName={pageTitle}
          screenType="Page"
          screenId="B2B-CONTENTS-AX-COMPETENCY"
          pageUrl="/b2b/contents/ax/competency"
          links={links}
        />

      </PageLoading>
    </>
  )
}
