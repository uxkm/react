import { Suspense, lazy, useCallback, useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import {
  isTopMenuDepth1Active,
  isTopMenuDepth2Active,
} from '../../utils/topMenuActive.js'
import { useSuppressTopNavActive } from '../../hooks/useSuppressTopNavActive.js'
import { FocusTrap } from 'focus-trap-react'
import useSitemapDepth3Masonry from '../../hooks/useSitemapDepth3Masonry.js'
import { registerHeaderLayerCloseHandler } from '../../utils/headerLayerController.js'
import { lockHeaderLayerDom, unlockHeaderLayerDom } from '../../utils/headerLayerDom.js'

const SiteSitemapNav = lazy(() => import('./SiteSitemapNav.jsx'))

const CSE_SCRIPT_ID = 'uxkm-google-cse'

function ensureGoogleCseScript() {
  if (typeof document === 'undefined') return
  if (document.getElementById(CSE_SCRIPT_ID)) return
  const s = document.createElement('script')
  s.id = CSE_SCRIPT_ID
  s.async = true
  s.src = 'https://cse.google.com/cse.js?cx=2f82e6208e7e1bdd0'
  document.body.appendChild(s)
}

function SiteHeader({ isMainPage, topMenus }) {
  const { pathname } = useLocation()
  const suppressTopNavActive = useSuppressTopNavActive()
  const prefix = isMainPage ? 'main' : 'sub'
  const [openLayer, setOpenLayer] = useState(null)
  const [sitemapViewType, setSitemapViewType] = useState('type_tab')
  const [searchAfter, setSearchAfter] = useState(false)
  const [sitemapAfter, setSitemapAfter] = useState(false)
  const [sitemapNavKey, setSitemapNavKey] = useState(0)
  const [sitemapPanelKey, setSitemapPanelKey] = useState('0-0')

  const searchTitleRef = useRef(null)
  const sitemapTitleRef = useRef(null)
  const searchAreaRef = useRef(null)
  const sitemapAreaRef = useRef(null)
  const searchBtnRef = useRef(null)
  const sitemapBtnRef = useRef(null)

  const openLayerRef = useRef(openLayer)

  useEffect(() => {
    openLayerRef.current = openLayer
  }, [openLayer])

  const closeLayers = useCallback(() => {
    const prev = openLayerRef.current
    if (prev === 'search') setSearchAfter(true)
    if (prev === 'sitemap') setSitemapAfter(true)
    setOpenLayer(null)
    unlockHeaderLayerDom()
  }, [])

  useEffect(() => {
    return registerHeaderLayerCloseHandler(closeLayers)
  }, [closeLayers])

  useEffect(() => {
    if (openLayer) {
      lockHeaderLayerDom()
    } else {
      unlockHeaderLayerDom()
    }
  }, [openLayer])

  useEffect(() => {
    if (!openLayer) return undefined
    const onResize = () => {
      lockHeaderLayerDom()
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [openLayer])

  const searchOpen = openLayer === 'search'
  const sitemapOpen = openLayer === 'sitemap'

  useEffect(() => {
    if (!searchOpen) return
    ensureGoogleCseScript()
  }, [searchOpen])

  useEffect(() => {
    if (!searchOpen) return undefined

    let n = 0
    const id = window.setInterval(() => {
      n += 1
      const root = searchAreaRef.current
      if (!root) return

      const input = root.querySelector('input.gsc-input')
      if (input) {
        input.setAttribute('placeholder', 'Search...')
        input.setAttribute('required', 'required')
      }

      // Google CSE 신/구 마크업 모두 대응:
      //   - 구버전: `<td class="gsc-search-button"><button class="gsc-search-button">`
      //   - 신버전(v2): `<div class="gsc-search-button gsc-search-button-v2">`
      //                `<button class="gsc-search-button gsc-search-button-v2">`
      //                또는 `<input type="image" class="gsc-search-button gsc-search-button-v2">`
      const container = root.querySelector('td.gsc-search-button, div.gsc-search-button')
      let btn = root.querySelector(
        'button.gsc-search-button-v2, button.gsc-search-button',
      )
      const inputBtn = container?.querySelector(
        'input.gsc-search-button-v2, input.gsc-search-button',
      )

      if (!btn && inputBtn && container) {
        btn = document.createElement('button')
        btn.type = 'submit'
        btn.className = inputBtn.className
        btn.title = inputBtn.title || 'search'
        inputBtn.replaceWith(btn)
      }

      if (btn && !btn.querySelector('i')) {
        btn.appendChild(document.createElement('i'))
      }

      if ((input && btn) || n > 100) {
        window.clearInterval(id)
      }
    }, 120)
    return () => window.clearInterval(id)
  }, [searchOpen])

  const toggleSearch = () => {
    setOpenLayer((prev) => {
      if (prev === 'search') {
        setSearchAfter(true)
        return null
      }
      setSearchAfter(false)
      return 'search'
    })
  }

  const toggleSitemap = () => {
    setOpenLayer((prev) => {
      if (prev === 'sitemap') {
        setSitemapAfter(true)
        return null
      }
      setSitemapAfter(false)
      setSitemapPanelKey('0-0')
      setSitemapNavKey((k) => k + 1)
      return 'sitemap'
    })
  }

  useSitemapDepth3Masonry(
    sitemapAreaRef,
    sitemapOpen,
    sitemapViewType,
    `${sitemapNavKey}-${sitemapPanelKey}`,
  )

  const isRouteActive = useCallback(
    (to) => {
      if (suppressTopNavActive) return false
      return isTopMenuDepth2Active({ to }, pathname)
    },
    [pathname, suppressTopNavActive],
  )

  const isDepth1Active = useCallback(
    (menu) => {
      if (suppressTopNavActive) return false
      return isTopMenuDepth1Active(menu, pathname)
    },
    [pathname, suppressTopNavActive],
  )

  // focus-trap-react replaces the manual `Tab` / `Shift+Tab` cycling that the
  // previous `focus_controll()` jQuery routine wired up between the search /
  // sitemap buttons, the modal title, the close button and the inner focus
  // chain. Anchoring `initialFocus` to the modal title element preserves the
  // previous behaviour of immediately focusing the heading on open, while
  // `setReturnFocus` returns focus to the originating button on close.
  const trapOptions = {
    initialFocus: () =>
      searchOpen
        ? searchTitleRef.current
        : sitemapOpen
          ? sitemapTitleRef.current
          : false,
    setReturnFocus: () =>
      openLayerRef.current === 'search'
        ? searchBtnRef.current
        : openLayerRef.current === 'sitemap'
          ? sitemapBtnRef.current
          : false,
    escapeDeactivates: true,
    onDeactivate: closeLayers,
    fallbackFocus: () =>
      searchOpen
        ? searchAreaRef.current
        : sitemapOpen
          ? sitemapAreaRef.current
          : document.body,
    clickOutsideDeactivates: false,
    allowOutsideClick: true,
  }

  return (
    <header className={`uk_header ${isMainPage ? 'main_header' : 'sub_header'}`} role="banner">
      <FocusTrap active={searchOpen || sitemapOpen} focusTrapOptions={trapOptions}>
        <div className="inner">
          <strong className="hd_logo uk_logo">
            <NavLink to="/" className="uk_link version" data-tit="UXKM" data-version="v2.2">
              UXKM
            </NavLink>
          </strong>

          <div
            className={[
              'hd_nav_area',
              searchOpen ? 'search_open' : '',
              sitemapOpen ? 'sitemap_open' : '',
            ]
              .filter(Boolean)
              .join(' ')}
            data-nosnippet
          >
            <nav className="hd_nav" aria-label="global menu">
              <strong className="sound_only">global menu</strong>
              <ul className="depth1">
                {topMenus.map((menu) => (
                  <li
                    key={menu.to}
                    className={
                      isDepth1Active(menu)
                        ? 'active'
                        : undefined
                    }
                  >
                    <NavLink
                      to={menu.to}
                      className={() => 'depth1_link'}
                      aria-haspopup={
                        Array.isArray(menu.depth2) && menu.depth2.length > 0 ? 'menu' : undefined
                      }
                    >
                      <i>{menu.label}</i>
                    </NavLink>
                    {Array.isArray(menu.depth2) && menu.depth2.length > 0 ? (
                      <ul className="depth2">
                        {menu.depth2.map((submenu) => (
                          <li key={submenu.to} className={isRouteActive(submenu.to) ? 'active' : undefined}>
                            <NavLink to={submenu.to} className="depth2_link">
                              <i>{submenu.label}</i>
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                ))}
              </ul>
            </nav>

            <div className="hd_search">
              <button
                ref={searchBtnRef}
                type="button"
                className={[
                  'ly_btn',
                  `${prefix}_ly_btn`,
                  'search_btn',
                  searchOpen ? 'active' : '',
                  !searchOpen && searchAfter ? 'after' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
                data-modal-button="search_modal"
                aria-expanded={searchOpen}
                aria-controls="uk-search-layer"
                aria-haspopup="dialog"
                onClick={toggleSearch}
              >
                <i>Search</i>
              </button>
              <div
                ref={searchAreaRef}
                id="uk-search-layer"
                role="dialog"
                aria-modal={searchOpen ? 'true' : undefined}
                aria-labelledby="uk-search-title"
                className={['hd_layer_box', 'search_area', searchOpen ? 'active' : '']
                  .filter(Boolean)
                  .join(' ')}
                data-modal-layer="search_modal"
              >
                <div className="inner">
                  <div className="tit">
                    <strong
                      id="uk-search-title"
                      ref={searchTitleRef}
                      className="tit_txt"
                      tabIndex={-1}
                    >
                      <i>UXKM</i> Search
                    </strong>
                  </div>
                  <div className="form">
                    <div className="gcse-search" />
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="search_close"
                onClick={(e) => {
                  e.stopPropagation()
                  closeLayers()
                }}
                aria-label="검색 닫기"
              >
                <i>검색 닫기</i>
              </button>
            </div>

            <div className="hd_sitemap">
              <button
                ref={sitemapBtnRef}
                type="button"
                className={[
                  'ly_btn',
                  `${prefix}_ly_btn`,
                  'sitemap_btn',
                  sitemapOpen ? 'active' : '',
                  !sitemapOpen && sitemapAfter ? 'after' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
                data-modal-button="sitemap_modal"
                aria-expanded={sitemapOpen}
                aria-controls="uk-sitemap-layer"
                aria-haspopup="dialog"
                onClick={toggleSitemap}
              >
                <i>Site map</i>
              </button>
              <div
                ref={sitemapAreaRef}
                id="uk-sitemap-layer"
                role="dialog"
                aria-modal={sitemapOpen ? 'true' : undefined}
                aria-labelledby="uk-sitemap-title"
                className={['hd_layer_box', 'sitemap_area', sitemapOpen ? 'active' : '']
                  .filter(Boolean)
                  .join(' ')}
                data-modal-layer="sitemap_modal"
              >
                <div className="inner">
                  <div className="tit">
                    <strong
                      id="uk-sitemap-title"
                      ref={sitemapTitleRef}
                      className="tit_txt"
                      tabIndex={-1}
                    >
                      <i>UXKM</i> Site map
                    </strong>
                    <div className="map_type">
                      <button
                        type="button"
                        data-txt="type_tab"
                        className={sitemapViewType === 'type_tab' ? 'active' : undefined}
                        onClick={() => setSitemapViewType('type_tab')}
                      >
                        <i>Tab view</i>
                      </button>
                      <button
                        type="button"
                        data-txt="type_all"
                        className={sitemapViewType === 'type_all' ? 'active' : undefined}
                        onClick={() => setSitemapViewType('type_all')}
                      >
                        <i>All view</i>
                      </button>
                    </div>
                  </div>
                  {sitemapOpen ? (
                    <Suspense fallback={null}>
                      <SiteSitemapNav
                        key={sitemapNavKey}
                        viewType={sitemapViewType}
                        siteVariant={prefix}
                        onNavigate={closeLayers}
                        onPanelChange={setSitemapPanelKey}
                      />
                    </Suspense>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </FocusTrap>
      <span className="hd_progress">스크롤 진행상태</span>
    </header>
  )
}

export default SiteHeader
