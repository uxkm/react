'use client'

import { Page, PageLoading } from '@/comp'
import { PublishingPlaceholder } from '@/screen/pub/widgets/publishing/PublishingPlaceholder'
import { resolveSkeletonMode } from '@/config/skeleton'
import HackathonSkeleton from './skeleton/indexSkeleton'

export const pageTitle = "AX 해커톤"

/** IA publishing scaffold. Replace this screen body with the approved markup. */
export default function B2bContentsAxHackathonPage () {
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
    }
  ]
  const skeletonId = 'b2b/contents/ax/hackathon'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="b2b-contents-ax-hackathon" title={pageTitle} />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <HackathonSkeleton /> : undefined}
        className="page-container"
      >
        <PublishingPlaceholder
          device="B2B"
          folderId="contents"
          folderName="기업교육"
          screenName={pageTitle}
          screenType="Page"
          screenId="B2B-CONTENTS-AX-HACKATHON"
          pageUrl="/b2b/contents/ax/hackathon"
          links={links}
        />

      </PageLoading>
    </>
  )
}
