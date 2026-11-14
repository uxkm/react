'use client'

/**
 * 퍼블리싱 가이드 접근성 — /pub/guide/a11y
 * KWCAG 2.2 검사기준·체크리스트.
 */
import { GuideLayout } from '@/screen/pub/layout' // Guide Layout 컴포넌트
import { MarkdownDoc } from '@/screen/pub/widgets/docs/MarkdownDoc' // Markdown Doc 컴포넌트
import {
  a11yBody, // a11y Body
  a11ySummary // a11y Summary
} from '@/screen/pub/data/a11yDoc' // 퍼블리싱 · a11y Doc

export const guideLabel = '접근성'
export const routeId = 'a11y'

export default function GuideA11y () {
  return (
    <GuideLayout
      category="시작"
      title="접근성"
      description={a11ySummary}
    >
      <MarkdownDoc source={a11yBody} />
      <p><a href="/data/pub/docs/a11y/site-review-2026-11-14.md">전체 페이지·컴포넌트·위젯·모듈 접근성 검토 결과 (2026-11-14)</a></p>
    </GuideLayout>
  )
}
