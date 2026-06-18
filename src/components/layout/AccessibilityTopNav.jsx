import { NavLink, useLocation } from 'react-router-dom'
import { topMenus } from '../../data/siteNavigation.js'
import { useSuppressTopNavActive } from '../../hooks/useSuppressTopNavActive.js'
import { isTopMenuDepth2Active } from '../../utils/topMenuActive.js'

const accessibilityMenu = topMenus.find((m) => m.label === 'A11Y')

function AccessibilityTopNav() {
  const { pathname } = useLocation()
  const suppressTopNavActive = useSuppressTopNavActive()
  const depth2 = accessibilityMenu?.depth2 ?? []

  if (depth2.length === 0) return null

  return (
    <nav className="top_link inner" aria-label="Accessibility 하위 메뉴">
      <ul>
        {depth2.map((item) => {
          const isActive = suppressTopNavActive
            ? false
            : isTopMenuDepth2Active(item, pathname)
          return (
            <li key={item.to} className={isActive ? 'active' : undefined}>
              <NavLink to={item.to}>
                <i>{item.label}</i>
              </NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default AccessibilityTopNav
