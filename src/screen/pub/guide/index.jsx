'use client'

/**
 * 퍼블리싱 가이드 홈 — /pub/guide
 * 소개 본문은 루트 README.md 내용.
 */
import { GuideLayout } from '@/screen/pub/layout' // Guide Layout 컴포넌트
import { MarkdownDoc } from '@/screen/pub/widgets/docs/MarkdownDoc' // Markdown Doc 컴포넌트
import { projectReadmeBody, projectReadmeSummary } from '@/screen/pub/data/projectReadme' // 퍼블리싱 · project Readme

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
