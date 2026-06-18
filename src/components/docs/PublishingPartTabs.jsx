import { NavLink, useLocation, useParams } from 'react-router-dom'
import { getPublishingPartGroup } from '../../data/publishingTitles.js'

const TAB_SCROLL_STATE = { tabMenuScroll: true }
const TAB_SCROLL_Y_KEY = 'tabMenuScrollY'

function PublishingPartTabs({ sectionType, category, slug, ariaLabel }) {
  const { pathname } = useLocation()
  const params = useParams()
  const resolvedType = sectionType ?? params.type ?? pathname.split('/').filter(Boolean)[1]
  const resolvedCategory = category ?? params.category ?? pathname.split('/').filter(Boolean)[2]
  const resolvedSlug = slug ?? params.slug ?? pathname.split('/').filter(Boolean)[3]

  const partGroup = getPublishingPartGroup(
    resolvedType,
    resolvedCategory,
    resolvedSlug,
  )

  if (!partGroup?.tabs?.length) return null

  const handleTabClick = () => {
    try {
      window.sessionStorage.setItem(TAB_SCROLL_Y_KEY, String(window.scrollY))
    } catch {
      // ignore
    }
  }

  const label =
    ariaLabel ?? `${partGroup.baseTitle} 파트 탭 메뉴`

  return (
    <nav className="tab_menu mt_xxl" aria-label={label}>
      <ul className={partGroup.partClass || undefined}>
        {partGroup.tabs.map((tab) => (
          <li key={tab.key} className={pathname === tab.href ? 'active' : ''}>
            <NavLink
              to={tab.href}
              state={TAB_SCROLL_STATE}
              style={{ textDecoration: 'none' }}
              onClick={handleTabClick}
            >
              {tab.prefix ? (
                <>
                  <span>{tab.prefix}</span>
                  <em>{tab.suffix}</em>
                </>
              ) : (
                <>
                  <em>{tab.suffix}</em>
                  {tab.partNameAdd ? (
                    <i className="part_name_add">{tab.partNameAdd}</i>
                  ) : null}
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default PublishingPartTabs
