import { Navigate, useLocation, useParams } from 'react-router-dom'
import {
  findHtmlPage,
  findUniqueHtmlPageBySlugPrefix,
} from '../../../data/htmlMigrationMap.js'
import Doc404Page from '../../404.jsx'
import HtmlPlaceholderPage from './HtmlPlaceholderPage.jsx'

/**
 * `/publishing/html/:category/:slug` 전용.
 * 정식 slug는 정적·자동 라우트가 먼저 매칭되고, 여기는 그렇지 않은 경우만 옵니다.
 * - GNB에 있는 미이관 문서 → HtmlPlaceholderPage
 * - slug 접두가 유일하게 좁혀지면 해당 문서로 복구 (잘린 URL·오타)
 * - 그 외 → 404
 */
function PublishingHtmlSlugRedirect() {
  const { category, slug } = useParams()
  const location = useLocation()

  if (!category || !slug) {
    return <Doc404Page />
  }

  if (findHtmlPage(category, slug)) {
    return <HtmlPlaceholderPage />
  }

  const fuzzy = findUniqueHtmlPageBySlugPrefix(category, slug)
  if (fuzzy) {
    return (
      <Navigate
        to={{
          pathname: `/publishing/html/${category}/${fuzzy.page.slug}`,
          search: location.search,
          hash: location.hash,
        }}
        replace
      />
    )
  }

  return <Doc404Page />
}

export default PublishingHtmlSlugRedirect
