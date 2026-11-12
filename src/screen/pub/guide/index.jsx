'use client'

/**
 * 퍼블리싱 가이드 홈 — /pub/guide
 * 소개 본문은 루트 README.md 내용.
 */
import { GuideLayout, MarkdownDoc } from '@/screen/pub/widgets/guide'
import { projectReadmeBody, projectReadmeSummary } from '@/screen/pub/data/projectReadme'

export default function GuideIndex () {
  return (
    <GuideLayout
      category="시작"
      title="소개"
      description={projectReadmeSummary()}
    >
      <MarkdownDoc source={projectReadmeBody()} />
    </GuideLayout>
  )
}
