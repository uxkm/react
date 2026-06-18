import { NavLink, useLocation } from 'react-router-dom'
import { getFooterDepth2Menus } from '../../data/siteNavigation.js'
import {
  isTopMenuDepth1Active,
  isTopMenuDepth2Active,
} from '../../utils/topMenuActive.js'

function SiteFooter({ footerDepth1Menus }) {
  const { pathname } = useLocation()
  const footerDepth2Menus = getFooterDepth2Menus(pathname)

  return (
    <footer className="uk_footer">
      <div className="ft_nav inner" data-nosnippet>
        <nav className="depth1_menu" aria-label="footer main menu">
          <ul className="depth1">
            {footerDepth1Menus.map((menu) => (
              <li
                key={menu.to}
                className={isTopMenuDepth1Active(menu, pathname) ? 'active' : undefined}
              >
                <NavLink to={menu.to} className={() => 'depth1_link'}>
                  <i>{menu.label}</i>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {footerDepth2Menus.length > 0 ? (
          <nav className="depth2_menu" aria-label="footer category menu">
            <ul className="depth2">
              {footerDepth2Menus.map((menu) => (
                <li
                  key={menu.to}
                  className={isTopMenuDepth2Active(menu, pathname) ? 'active' : undefined}
                >
                  <NavLink to={menu.to} className={() => 'depth2_link'}>
                    <i>{menu.label}</i>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
      </div>

      <div className="btm">
        <strong className="uk_logo">
          <NavLink to="/" className="uk_link">
            uxkm
          </NavLink>
        </strong>
        <address>
          Creator :
          <br className="dp_mb" />
          추교성<i>(Chu Kyo-sung)</i>,
          <br className="dp_mb" />
          김대민<i>(Kim Dae-min)</i>
          <br />
          Email : <a href="mailto:uxkm.io@gmail.com">uxkm.io@gmail.com</a>
        </address>
        <p className="copy">&copy; 2019 All Right Reserved. By UXKM.</p>
      </div>
    </footer>
  )
}

export default SiteFooter
