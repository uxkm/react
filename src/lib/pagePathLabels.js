import { findAccessibilityPage } from '@/data/accessibilityNavigation'
import { findGulpPage } from '@/data/gulpNavigation'
import { findHtmlPage } from '@/data/htmlMigrationMap'
import {
  getPublishingPageTitle,
  getPublishingSectionTitle,
} from '@/data/publishingTitles'

function joinBreadcrumbs(crumbs) {
  return {
    breadcrumbs: crumbs,
    label: crumbs.join(' > '),
  }
}

/**
 * 문서 URL을 사이트 breadcrumb 라벨로 변환합니다.
 * @returns {{ breadcrumbs: string[], label: string } | null}
 */
export function getPagePathBreadcrumbs(pagePath) {
  const pathname = String(pagePath ?? '').trim()
  if (!pathname.startsWith('/')) return null

  const segments = pathname.split('/').filter(Boolean)

  if (segments[0] === 'publishing' && segments.length === 4) {
    const [, type, category, slug] = segments

    if (type === 'html') {
      const info = findHtmlPage(category, slug)
      if (info) {
        return joinBreadcrumbs([
          'Publishing',
          'HTML',
          info.section.title,
          info.page.title,
        ])
      }
    }

    if (type === 'css' || type === 'scss') {
      return joinBreadcrumbs([
        'Publishing',
        type.toUpperCase(),
        getPublishingSectionTitle(type, category),
        getPublishingPageTitle(type, category, slug),
      ])
    }
  }

  if (segments[0] === 'accessibility' && segments.length === 4) {
    const [, group, section, slug] = segments
    const info = findAccessibilityPage(group, section, slug)
    if (info) {
      return joinBreadcrumbs([
        'Accessibility',
        info.groupInfo.title,
        info.sectionInfo.title,
        info.pageInfo.title,
      ])
    }
  }

  if (
    segments[0] === 'build-system' &&
    segments[1] === 'gulp' &&
    segments.length === 4
  ) {
    const [, , section, slug] = segments
    const info = findGulpPage(section, slug)
    if (info) {
      return joinBreadcrumbs([
        'Build System',
        'Gulp',
        info.sectionInfo.title,
        info.pageInfo.title,
      ])
    }
  }

  return null
}
