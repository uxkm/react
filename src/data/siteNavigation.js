import { ACCESSIBILITY_HOME_HREF, firstAccessibilityGroupHref } from './accessibilityNavigation.js'
import { GULP_HOME_HREF } from './gulpNavigation.js'
import { isTopMenuDepth1Active } from '../utils/topMenuActive.js'

export const topMenus = [
  {
    label: 'Publishing',
    to: '/publishing/html/01-htmlStart/01-html_start',
    matchPrefixes: ['/publishing/'],
    depth2: [
      { label: 'HTML', to: '/publishing/html/01-htmlStart/01-html_start' },
      { label: 'CSS', to: '/publishing/css/01-cssStart/01-css_intro' },
      { label: 'SCSS', to: '/publishing/scss/01-scssStart/01-scss_intro' },
    ],
  },
  {
    label: 'A11Y',
    to: ACCESSIBILITY_HOME_HREF,
    matchPrefixes: ['/accessibility'],
    depth2: [
      { label: 'A11Y', to: firstAccessibilityGroupHref('a11y') },
      { label: 'WAI-ARIA', to: firstAccessibilityGroupHref('waiAria') },
      {
        label: 'A11y Creation Tech',
        to: firstAccessibilityGroupHref('a11yCreationTech'),
      },
    ],
  },
  {
    label: 'Gulp',
    to: GULP_HOME_HREF,
    matchPrefixes: ['/build-system/'],
  },
  {
    label: 'Updates',
    to: '/updates/updates_info',
    matchPrefixes: ['/updates/'],
  },
]

export const footerDepth1Menus = topMenus

/** 현재 경로와 매칭되는 1뎁스 메뉴 (Publishing / A11Y / Gulp / Updates) */
export function getActiveTopMenu(pathname) {
  return topMenus.find((menu) => isTopMenuDepth1Active(menu, pathname)) ?? null
}

/** 활성 1뎁스에 속한 푸터 2뎁스 메뉴. 2뎁스가 없는 구간(Gulp·Updates 등)은 빈 배열 */
export function getFooterDepth2Menus(pathname) {
  return getActiveTopMenu(pathname)?.depth2 ?? []
}
