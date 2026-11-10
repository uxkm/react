'use client'

import { Page, PageLoading, PublishScreenStub } from '@/comp'
import { resolveSkeletonMode } from '@/config/skeleton'
import LanguageLifeSkeleton from './skeleton/language-lifeSkeleton'

export const pageTitle = "외국어생활관"

/** IA publishing scaffold. Replace this screen body with the approved markup. */
export default function B2bContentsLanguageLanguageLifePage () {
  const links = [
    {
      "to": "/b2b/contents/language/ai-language",
      "label": "AI 외국어",
      "screenId": "B2B-CONTENTS-LANGUAGE-AI-LANGUAGE"
    }
  ]
  const skeletonId = 'b2b/contents/language/language-life'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="b2b-contents-language-language-life" title={pageTitle} />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <LanguageLifeSkeleton /> : undefined}
        className="page-container"
      >
        <PublishScreenStub
          device="B2B"
          folderId="contents"
          folderName="기업교육"
          screenName={pageTitle}
          screenType="Page"
          screenId="B2B-CONTENTS-LANGUAGE-LANGUAGE-LIFE"
          pageUrl="/b2b/contents/language/language-life"
          links={links}
        />

      </PageLoading>
    </>
  )
}
