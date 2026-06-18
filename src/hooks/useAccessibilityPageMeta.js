import { useLocation } from 'react-router-dom'
import { usePageMeta } from '@/components/common/PageMeta'
import {
  ACCESSIBILITY_DEFAULT_LAYOUT,
  findAccessibilityPage,
  getAccessibilityGroupLayoutDefaults,
} from '@/data/accessibilityNavigation.js'

export function useAccessibilityPageMeta(overrides = {}) {
  const { pathname } = useLocation()
  const segments = pathname.split('/').filter(Boolean)
  const groupKey = segments[1]
  const sectionKey = segments[2]
  const slug = segments[3]
  const info = findAccessibilityPage(groupKey, sectionKey, slug)
  const { groupInfo, sectionInfo, pageInfo } = info ?? {}
  const {
    layout: layoutOverrides,
    title,
    description,
    keyword,
    ...restMeta
  } = overrides

  const fallbackDescription = pageInfo
    ? `${sectionInfo?.title ?? groupInfo?.title ?? '접근성'} — ${pageInfo.title} 문서입니다.`
    : undefined
  const fallbackKeyword = [groupInfo?.title, sectionInfo?.title, pageInfo?.title, '접근성']
    .filter(Boolean)
    .join(', ')

  usePageMeta({
    title: title ?? pageInfo?.title ?? 'Accessibility',
    description: description ?? fallbackDescription,
    keyword: keyword ?? fallbackKeyword,
    layout: {
      ...ACCESSIBILITY_DEFAULT_LAYOUT,
      ...getAccessibilityGroupLayoutDefaults(groupKey),
      ...layoutOverrides,
    },
    ...restMeta,
  })
}
