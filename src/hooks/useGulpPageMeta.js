import { useLocation } from 'react-router-dom'
import { usePageMeta } from '@/components/common/PageMeta'
import { findGulpPage, GULP_DEFAULT_LAYOUT } from '@/data/gulpNavigation.js'

export function useGulpPageMeta(overrides = {}) {
  const { pathname } = useLocation()
  const segments = pathname.split('/').filter(Boolean)
  const sectionKey = segments[2]
  const slug = segments[3]
  const info = findGulpPage(sectionKey, slug)
  const pageInfo = info?.pageInfo
  const { layout: layoutOverrides, ...metaOverrides } = overrides

  usePageMeta({
    title: pageInfo?.title ?? 'Gulp',
    description: pageInfo?.description,
    keyword: pageInfo?.keyword,
    layout: {
      ...GULP_DEFAULT_LAYOUT,
      mainClass: pageInfo?.mainClass ?? '',
      ...(pageInfo?.contentList === false ? { contentList: false } : {}),
      ...layoutOverrides,
    },
    ...metaOverrides,
  })
}
