'use client'

import { Page, PageLoading } from '@/comp'
import { PublishingPlaceholder } from '@/screen/pub/widgets/publishing/PublishingPlaceholder'
import { resolveSkeletonMode } from '@/config/skeleton'
import AiLanguageSkeleton from './skeleton/indexSkeleton'

export const pageTitle = "AI 외국어"

/** IA publishing scaffold. Replace this screen body with the approved markup. */
export default function B2bContentsLanguageAiLanguagePage () {
  const links = [
    {
      "to": "/b2b/contents/language/language-life",
      "label": "외국어생활관",
      "screenId": "B2B-CONTENTS-LANGUAGE-LANGUAGE-LIFE"
    }
  ]
  const skeletonId = 'b2b/contents/language/ai-language'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="contents-language-ai-language" title={pageTitle}  className="project-content" />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <AiLanguageSkeleton /> : undefined}
        className="page-container"
      >
        <PublishingPlaceholder
          device="B2B"
          folderId="contents"
          folderName="기업교육"
          screenName={pageTitle}
          screenType="Page"
          screenId="B2B-CONTENTS-LANGUAGE-AI-LANGUAGE"
          pageUrl="/b2b/contents/language/ai-language"
          links={links}
        />

      </PageLoading>
    </>
  )
}
