'use client'

/**
 * 퍼블리싱 가이드 접근성 — /pub/guide/accessibility
 * KWCAG 2.2 검사기준·체크리스트.
 */
import { GuideLayout } from '@/screen/pub/layout' // Guide Layout 컴포넌트
import { MarkdownDoc } from '@/screen/pub/widgets/docs/MarkdownDoc' // Markdown Doc 컴포넌트
import {
  accessibilityBody, // accessibility Body
  accessibilitySummary // accessibility Summary
} from '@/screen/pub/data/accessibilityDoc' // 퍼블리싱 · accessibility Doc

export const guideLabel = '접근성'
export const routeId = 'accessibility'

export default function GuideAccessibility () {
  return (
    <GuideLayout
      category="시작"
      title="접근성"
      description={accessibilitySummary}
    >
      <MarkdownDoc source={accessibilityBody} />
    </GuideLayout>
  )
}
