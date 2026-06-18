import { Suspense, lazy } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { ACCESSIBILITY_HOME_HREF } from '../data/accessibilityNavigation.js'
import RouteLoadingFallback from './RouteLoadingFallback.jsx'

/**
 * 개발용(비활성): 라우트 `lazy()` 청크가 빨리 로드되면 Suspense fallback이 순간만 보여
 * `RouteLoadingFallback` 스타일을 화면에서 오래 확인하기 어렵다. 그때만 아래 주석을 해제해
 * 앱 대신 로딩 UI만 렌더하면 된다. 확인 후에는 다시 주석 처리할 것.
 *
 * const __DEV_FORCE_ROUTE_LOADING_UI__ = true
 * if (__DEV_FORCE_ROUTE_LOADING_UI__) {
 *   return (
 *     <BrowserRouter>
 *       <RouteLoadingFallback />
 *     </BrowserRouter>
 *   )
 * }
 */

const AppLayout = lazy(() => import('../layouts/AppLayout.jsx'))
const MainPage = lazy(() => import('../pages/MainPage.jsx'))
const Doc404Page = lazy(() => import('../pages/404.jsx'))
const PublishingHtmlSlugRedirect = lazy(
  () => import('../pages/publishing/html/PublishingHtmlSlugRedirect.jsx'),
)

const HtmlStartPage = lazy(() => import('../pages/publishing/html/01-htmlStart/01-html_start.jsx'))
const HtmlBasicPage = lazy(() => import('../pages/publishing/html/01-htmlStart/02-html_basic.jsx'))
const HtmlElementPage = lazy(() => import('../pages/publishing/html/01-htmlStart/03-html_element.jsx'))
const BlockElementPage = lazy(() => import('../pages/publishing/html/02-blockInline/01-block_element.jsx'))
const DivBlockPage = lazy(() => import('../pages/publishing/html/02-blockInline/02-div_block.jsx'))
const InlineElementPage = lazy(() => import('../pages/publishing/html/02-blockInline/03-inline_element.jsx'))
const SpanInlinePage = lazy(() => import('../pages/publishing/html/02-blockInline/04-span_inline.jsx'))
const ElementNestingPage = lazy(() => import('../pages/publishing/html/02-blockInline/05-element_nesting.jsx'))
const OnlyEmptyPage = lazy(() => import('../pages/publishing/html/02-blockInline/06-only_empty.jsx'))
const HeaderElementPage = lazy(() => import('../pages/publishing/html/03-sections/01-header_element.jsx'))
const HeadingElementPage = lazy(() => import('../pages/publishing/html/03-sections/02-heading_element.jsx'))
const SectionElementPage = lazy(() => import('../pages/publishing/html/03-sections/03-section_element.jsx'))
const NavElementPage = lazy(() => import('../pages/publishing/html/03-sections/04-nav_element.jsx'))
const ArticleElementPage = lazy(() => import('../pages/publishing/html/03-sections/05-article_element.jsx'))
const FooterElementPage = lazy(() => import('../pages/publishing/html/03-sections/06-footer_element.jsx'))
const AsideElementPage = lazy(() => import('../pages/publishing/html/03-sections/07-aside_element.jsx'))
const HgroupElementPage = lazy(() => import('../pages/publishing/html/03-sections/08-hgroup_element.jsx'))

const CssPlaceholderPage = lazy(() => import('../pages/publishing/css/CssPlaceholderPage.jsx'))
const CssBookmarkPage = lazy(
  () => import('../pages/publishing/css/05-bookmark/bookmark.jsx'),
)
const HtmlBookmarkPage = lazy(
  () => import('../pages/publishing/html/12-bookmark/bookmark.jsx'),
)
const ScssPlaceholderPage = lazy(() => import('../pages/publishing/scss/ScssPlaceholderPage.jsx'))

const AccessibilityPlaceholderPage = lazy(
  () => import('../pages/accessibility/AccessibilityPlaceholderPage.jsx'),
)
const CommentsAdminPage = lazy(
  () => import('../pages/admin/CommentsAdminPage.jsx'),
)

function BuildSystemLegacyRedirect() {
  const { pathname } = useLocation()
  return (
    <Navigate to={pathname.replace(/^\/buildSystem/, '/build-system')} replace />
  )
}

const pageModules = import.meta.glob('../pages/**/*.jsx')

const explicitRouteEntries = [
  ['/', MainPage],
  ['/publishing/html', () => <Navigate to="/publishing/html/01-htmlStart/01-html_start" replace />],
  ['/publishing/html/01-htmlStart/01-html_start', HtmlStartPage],
  ['/publishing/html/01-htmlStart/02-html_basic', HtmlBasicPage],
  ['/publishing/html/01-htmlStart/03-html_element', HtmlElementPage],
  ['/publishing/html/02-blockInline/01-block_element', BlockElementPage],
  ['/publishing/html/02-blockInline/02-div_block', DivBlockPage],
  ['/publishing/html/02-blockInline/03-inline_element', InlineElementPage],
  ['/publishing/html/02-blockInline/04-span_inline', SpanInlinePage],
  ['/publishing/html/02-blockInline/05-element_nesting', ElementNestingPage],
  ['/publishing/html/02-blockInline/06-only_empty', OnlyEmptyPage],
  ['/publishing/html/03-sections/01-header_element', HeaderElementPage],
  ['/publishing/html/03-sections/02-heading_element', HeadingElementPage],
  ['/publishing/html/03-sections/03-section_element', SectionElementPage],
  ['/publishing/html/03-sections/04-nav_element', NavElementPage],
  ['/publishing/html/03-sections/05-article_element', ArticleElementPage],
  ['/publishing/html/03-sections/06-footer_element', FooterElementPage],
  ['/publishing/html/03-sections/07-aside_element', AsideElementPage],
  ['/publishing/html/03-sections/08-hgroup_element', HgroupElementPage],
  ['/publishing/html/12-bookmark/bookmark', HtmlBookmarkPage],
  ['/publishing/html/:category/:slug', PublishingHtmlSlugRedirect],
  ['/publishing/css', () => <Navigate to="/publishing/css/01-cssStart/01-css_intro" replace />],
  ['/publishing/css/05-bookmark/bookmark', CssBookmarkPage],
  ['/publishing/css/:category/:slug', CssPlaceholderPage],
  ['/publishing/scss', () => <Navigate to="/publishing/scss/01-scssStart/01-scss_intro" replace />],
  ['/publishing/scss/:category/:slug', ScssPlaceholderPage],
  ['/accessibility', () => <Navigate to={ACCESSIBILITY_HOME_HREF} replace />],
  ['/accessibility/:group/:section/:slug', AccessibilityPlaceholderPage],
  ['/buildSystem/*', BuildSystemLegacyRedirect],
  ['/admin/comments', CommentsAdminPage],
  ['*', Doc404Page],
]

const explicitRoutePaths = new Set(explicitRouteEntries.map(([path]) => path))
const explicitPageFiles = new Set([
  '../pages/MainPage.jsx',
  '../pages/publishing/html/01-htmlStart/01-html_start.jsx',
  '../pages/publishing/html/01-htmlStart/02-html_basic.jsx',
  '../pages/publishing/html/01-htmlStart/03-html_element.jsx',
  '../pages/publishing/html/02-blockInline/01-block_element.jsx',
  '../pages/publishing/html/02-blockInline/02-div_block.jsx',
  '../pages/publishing/html/02-blockInline/03-inline_element.jsx',
  '../pages/publishing/html/02-blockInline/04-span_inline.jsx',
  '../pages/publishing/html/02-blockInline/05-element_nesting.jsx',
  '../pages/publishing/html/02-blockInline/06-only_empty.jsx',
  '../pages/publishing/html/03-sections/01-header_element.jsx',
  '../pages/publishing/html/03-sections/02-heading_element.jsx',
  '../pages/publishing/html/03-sections/03-section_element.jsx',
  '../pages/publishing/html/03-sections/04-nav_element.jsx',
  '../pages/publishing/html/03-sections/05-article_element.jsx',
  '../pages/publishing/html/03-sections/06-footer_element.jsx',
  '../pages/publishing/html/03-sections/07-aside_element.jsx',
  '../pages/publishing/html/03-sections/08-hgroup_element.jsx',
  '../pages/publishing/css/CssPlaceholderPage.jsx',
  '../pages/publishing/css/05-bookmark/bookmark.jsx',
  '../pages/publishing/html/12-bookmark/bookmark.jsx',
  '../pages/publishing/scss/ScssPlaceholderPage.jsx',
  '../pages/accessibility/AccessibilityPlaceholderPage.jsx',
  '../pages/404.jsx',
  '../pages/publishing/html/PublishingHtmlSlugRedirect.jsx',
])

function isIgnoredRouteModule(modulePath) {
  const relativePath = modulePath.replace('../pages/', '')
  const segments = relativePath.split('/')

  // Accessibility 문서는 `AccessibilityPlaceholderPage` 단일 라우트로만 진입한다.
  // (자동 라우트가 정적 경로로 먼저 매칭되면 sideMenu·PageMeta가 빠진다.)
  if (segments[0] === 'accessibility') return true

  // Ignore convention-based utility/test/draft areas under pages.
  if (segments.some((segment) => segment.startsWith('_'))) return true
  if (segments.some((segment) => /^__.*__$/.test(segment))) return true
  if (segments.some((segment) => segment === '__tests__' || segment === 'tests')) return true
  if (segments.some((segment) => segment.toLowerCase() === 'drafts')) return true

  // 본문 part 탭 UI 전용 모듈 (페이지 라우트로 등록하지 않음)
  if (/PartTabs\.jsx$/.test(modulePath)) return true
  // part 공통 안내 전용 (GNB·좌측 메뉴에 없음)
  if (/_common\.jsx$/.test(modulePath)) return true

  return false
}

function normalizeRouteSegment(segment) {
  const withoutPageSuffix = segment.replace(/Page$/, '')

  // Preserve existing naming style when users intentionally include symbols
  // or numeric prefixes (e.g. 01-htmlStart, 02_html_basic).
  if (/[-_]/.test(withoutPageSuffix) || /^\d/.test(withoutPageSuffix)) {
    return withoutPageSuffix
  }

  return withoutPageSuffix.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
}

function modulePathToRoutePath(modulePath) {
  const relativePath = modulePath.replace('../pages/', '').replace(/\.jsx$/, '')
  if (relativePath === '404') return '*'

  const normalizedPath = relativePath
    .replace(/\/index$/i, '')
    .split('/')
    .filter(Boolean)
    .map((segment) => normalizeRouteSegment(segment))
    .join('/')

  return normalizedPath ? `/${normalizedPath}` : '/'
}

const autoRouteEntries = Object.entries(pageModules)
  .filter(([modulePath]) => !explicitPageFiles.has(modulePath))
  .filter(([modulePath]) => !isIgnoredRouteModule(modulePath))
  .map(([modulePath, importer]) => {
    const routePath = modulePathToRoutePath(modulePath)
    if (explicitRoutePaths.has(routePath)) return null
    return {
      path: routePath,
      Component: lazy(importer),
    }
  })
  .filter(Boolean)
  .sort((a, b) => a.path.localeCompare(b.path))

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<RouteLoadingFallback />}>
        <Routes>
          <Route element={<AppLayout />}>
            {explicitRouteEntries.map(([path, Component]) => (
              <Route key={`explicit:${path}`} path={path} element={<Component />} />
            ))}
            {autoRouteEntries.map(({ path, Component }) => (
              <Route key={`auto:${path}`} path={path} element={<Component />} />
            ))}
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
