'use client'

/**
 * 퍼블리싱 가이드 좌측 메뉴.
 * GuideLayout에서 호출한다. 소개 / 접근성 / 컴포넌트 / 위젯 / 데모 네비.
 * 접힘 시 카테고리 아이콘 레일 + 우측 Tooltip.
 */
import { useMemo, useState } from 'react' // 접힘 상태·메뉴 로드
import { usePathname } from 'next/navigation' // 현재 경로 (활성 메뉴 표시)
import { Link } from '@/lib/router' // 앱 라우터 Link
import { Icon } from '@/comp/ui/Icon' // 접힘 레일·토글 아이콘
import { Switch } from '@/comp/ui/Switch' // 하위 뎁스 모두 펼침/접힘
import { Tooltip } from '@/comp/ui/Tooltip' // 접힘 시 카테고리 툴팁
import { classNames } from '@/utils/classNames' // className 결합
import {
  guideAccessibilityPath, // guide Accessibility Path
  guideHomePath, // guide Home Path
  useGuideMenu // Guide Menu 훅
} from '@/screen/pub/hooks/useGuideMenu' // 홈·접근성 경로·메뉴 JSON 훅

/** 컴포넌트 그룹 id → 접힘 레일 아이콘 */
const GROUP_ICONS = {
  basic: 'layers',
  layout: 'layout',
  data: 'table',
  form: 'edit',
  feedback: 'message-circle',
  navigation: 'compass',
  misc: 'more-horizontal'
}

/** pathname 이 `/pub/guide/{item.id}` 인 컴포넌트 그룹 id (예: /pub/guide/Button) */
function findComponentGroupId (pathname, guideMenu) {
  for (const group of guideMenu) {
    if (group.items.some((item) => pathname === '/pub/guide/' + item.id)) {
      return group.id
    }
  }
  return null
}

/** pathname 이 `/pub/demo/{item.id}` 인 데모 그룹 id */
function findDemoGroupId (pathname, guideDemoMenu) {
  for (const group of guideDemoMenu) {
    if (group.items.some((item) => pathname === '/pub/demo/' + item.id)) {
      return group.id
    }
  }
  return null
}

/** 활성 컴포넌트/데모 그룹만 true */
function buildOpenMap (pathname, guideMenu, guideDemoMenu) {
  const map = {}
  const componentId = findComponentGroupId(pathname, guideMenu)
  const demoId = findDemoGroupId(pathname, guideDemoMenu)
  if (componentId) map[componentId] = true
  if (demoId) map[demoId] = true
  return map
}

/**
 * 가이드 좌측 aside 메뉴.
 * - navOpen     : 목록 전체 표시/숨김
 * - openGroups  : 그룹 아코디언 `{ [groupId]: boolean }`
 */
export function GuideMenu ({ className }) {
  const pathname = usePathname() || ''
  const menu = useGuideMenu()
  const [navOpen, setNavOpen] = useState(true)
  const [openGroups, setOpenGroups] = useState(() => menu
    ? buildOpenMap(pathname, menu.guideMenu || [], menu.guideDemoMenu || [])
    : {})

  const guideIntroItem = menu?.intro || { id: 'intro', label: '소개' }
  const guideA11yItem = menu?.accessibility || { id: 'accessibility', label: '접근성' }
  const guideMenu = useMemo(() => menu?.guideMenu || [], [menu])
  const guideWidgetItems = useMemo(() => menu?.guideWidgetItems || [], [menu])
  const guideDemoMenu = useMemo(() => menu?.guideDemoMenu || [], [menu])
  /** 아코디언으로 접히는 모든 그룹 id (컴포넌트 + 데모) */
  const allGroupIds = useMemo(
    () => [...guideMenu.map((group) => group.id), ...guideDemoMenu.map((group) => group.id)],
    [guideMenu, guideDemoMenu]
  )
  const allExpanded = allGroupIds.length > 0 && allGroupIds.every((id) => !!openGroups[id])
  const introHref = guideHomePath
  const introActive = pathname === guideHomePath || pathname === '/pub/guide/'
  const a11yHref = guideAccessibilityPath
  const a11yActive = pathname === guideAccessibilityPath
  const activeGroupId = findComponentGroupId(pathname, guideMenu)
  const widgetActive = guideWidgetItems.some((item) => pathname === '/pub/guide/' + item.id)

  const [previousRoute, setPreviousRoute] = useState({ pathname, menu })
  if (previousRoute.pathname !== pathname || previousRoute.menu !== menu) {
    setPreviousRoute({ pathname, menu })
    if (menu) {
      const next = buildOpenMap(pathname, guideMenu, guideDemoMenu)
      if (Object.keys(next).length) setOpenGroups((prev) => ({ ...prev, ...next }))
    }
  }

  const toggleGroup = (id) => {
    setOpenGroups((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  /** 하위 뎁스(컴포넌트·데모 그룹) 전부 펼침 또는 접힘 */
  const setAllGroupsExpanded = (expanded) => {
    setOpenGroups((prev) => {
      const next = { ...prev }
      for (const id of allGroupIds) next[id] = expanded
      return next
    })
  }

  /** 접힘 레일에서 그룹 선택 → 메뉴 펼치고 해당 그룹 연다 */
  const openGroupFromRail = (groupId) => {
    setNavOpen(true)
    setOpenGroups((prev) => ({ ...prev, [groupId]: true }))
  }

  const componentTotal = guideMenu.reduce((sum, group) => sum + group.items.length, 0)

  return (
    <aside
      className={classNames('comp-guide_nav', { 'is-collapsed': !navOpen }, className)}
      aria-label="가이드 목록"
    >
      <div className="comp-guide_nav-body">
        {navOpen
          ? (
            <>
              <div className="comp-guide_nav-head">
                <p className="comp-guide_nav-title">가이드</p>
                <Switch
                  className="comp-guide_nav-expand"
                  size="sm"
                  labelEnd
                  checked={allExpanded}
                  disabled={allGroupIds.length === 0}
                  ariaLabel="하위 메뉴 모두 펼침"
                  label={allExpanded ? '모두 접기' : '모두 펼침'}
                  onChange={(event) => setAllGroupsExpanded(event.target.checked)}
                />
              </div>

              <nav id="comp-guide-list" className="comp-guide_list">
                <div className="comp-guide_top">
                  <Link
                    className={classNames('comp-guide_top-link', { 'is-active': introActive })}
                    to={introHref}
                    aria-current={introActive ? 'page' : undefined}
                  >
                    {guideIntroItem.label}
                  </Link>
                  {menu?.accessibility && <Link
                    className={classNames('comp-guide_top-link', { 'is-active': a11yActive })}
                    to={a11yHref}
                    aria-current={a11yActive ? 'page' : undefined}
                  >
                    {guideA11yItem.label}
                  </Link>}
                </div>

                <div className="comp-guide_section" data-guide-section="components">
                  <p className="comp-guide_section-label">
                    <span>컴포넌트</span>
                    <span className="comp-guide_count" aria-label={`하위 ${componentTotal}개`}>
                      {componentTotal}
                    </span>
                  </p>
                  {guideMenu.map((group) => {
                    const expanded = !!openGroups[group.id]
                    const panelId = 'comp-guide-group-' + group.id
                    const count = group.items.length
                    return (
                      <div
                        key={group.id}
                        className={classNames('comp-guide_group', { 'is-open': expanded })}
                      >
                        <button
                          type="button"
                          className="comp-guide_group-toggle"
                          aria-expanded={expanded ? 'true' : 'false'}
                          aria-controls={panelId}
                          onClick={() => toggleGroup(group.id)}
                        >
                          <span className="comp-guide_toggle-label">
                            <span>{group.label}</span>
                            <span className="comp-guide_count" aria-label={`하위 ${count}개`}>
                              {count}
                            </span>
                          </span>
                          <span className="comp-guide_chevron" aria-hidden="true" />
                        </button>
                        <ul id={panelId} hidden={!expanded}>
                          {group.items.map((item) => {
                            const href = '/pub/guide/' + item.id
                            const active = pathname === href
                            return (
                              <li key={item.id}>
                                <Link
                                  className={classNames('comp-guide_link', { 'is-active': active })}
                                  to={href}
                                  aria-current={active ? 'page' : undefined}
                                >
                                  {item.label}
                                </Link>
                              </li>
                            )
                          })}
                        </ul>
                      </div>
                    )
                  })}
                </div>

                {guideWidgetItems.length > 0 && <div className="comp-guide_section" data-guide-section="widgets">
                  <p className="comp-guide_section-label">
                    <span>위젯</span>
                    <span className="comp-guide_count" aria-label={`하위 ${guideWidgetItems.length}개`}>{guideWidgetItems.length}</span>
                  </p>
                  <ul className="comp-guide_section-list">
                    {guideWidgetItems.map((item) => {
                      const href = '/pub/guide/' + item.id
                      const active = pathname === href
                      return <li key={item.id}>
                        <Link className={classNames('comp-guide_link', { 'is-active': active })} to={href} aria-current={active ? 'page' : undefined}>
                          {item.label}
                        </Link>
                      </li>
                    })}
                  </ul>
                </div>}

                {guideDemoMenu.map((group) => {
                  const expanded = !!openGroups[group.id]
                  const panelId = 'comp-guide-demo-' + group.id
                  const count = group.items.length
                  return (
                    <div
                      key={group.id}
                      className={classNames(
                        'comp-guide_section',
                        'comp-guide_section_demo',
                        { 'is-open': expanded }
                      )}
                    >
                      <button
                        type="button"
                        className="comp-guide_section-toggle"
                        aria-expanded={expanded ? 'true' : 'false'}
                        aria-controls={panelId}
                        onClick={() => toggleGroup(group.id)}
                      >
                        <span className="comp-guide_toggle-label">
                          <span>{group.label}</span>
                          <span className="comp-guide_count" aria-label={`하위 ${count}개`}>
                            {count}
                          </span>
                        </span>
                        <span className="comp-guide_chevron" aria-hidden="true" />
                      </button>
                      <ul
                        id={panelId}
                        className="comp-guide_section-list"
                        hidden={!expanded}
                      >
                        {group.items.map((item) => {
                          const href = '/pub/demo/' + item.id
                          const active = pathname === href
                          return (
                            <li key={item.id}>
                              <Link
                                className={classNames('comp-guide_link', { 'is-active': active })}
                                to={href}
                                aria-current={active ? 'page' : undefined}
                              >
                                {item.label}
                              </Link>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  )
                })}
              </nav>
            </>
            )
          : (
            <nav id="comp-guide-list" className="comp-guide_rail" aria-label="가이드 카테고리">
              <Tooltip
                className="tooltip_inverse"
                placement="right"
                content={guideIntroItem.label}
              >
                <Link
                  className={classNames('comp-guide_rail-btn', { 'is-active': introActive })}
                  to={introHref}
                  aria-label={guideIntroItem.label}
                  aria-current={introActive ? 'page' : undefined}
                >
                  <Icon name="info" size="sm" />
                </Link>
              </Tooltip>

              <Tooltip
                className="tooltip_inverse"
                placement="right"
                content={guideA11yItem.label}
              >
                <Link
                  className={classNames('comp-guide_rail-btn', { 'is-active': a11yActive })}
                  to={a11yHref}
                  aria-label={guideA11yItem.label}
                  aria-current={a11yActive ? 'page' : undefined}
                >
                  <Icon name="check-circle" size="sm" />
                </Link>
              </Tooltip>

              {guideMenu.map((group) => {
                const iconName = GROUP_ICONS[group.id] || 'more-horizontal'
                const active = activeGroupId === group.id
                return (
                  <Tooltip
                    key={group.id}
                    className="tooltip_inverse"
                    placement="right"
                    content={group.label}
                  >
                    <button
                      type="button"
                      className={classNames('comp-guide_rail-btn', { 'is-active': active })}
                      aria-label={group.label}
                      onClick={() => openGroupFromRail(group.id)}
                    >
                      <Icon name={iconName} size="sm" />
                    </button>
                  </Tooltip>
                )
              })}
              {guideWidgetItems.length > 0 && <Tooltip className="tooltip_inverse" placement="right" content="위젯">
                <button type="button" className={classNames('comp-guide_rail-btn', { 'is-active': widgetActive })} aria-label="위젯" onClick={() => setNavOpen(true)}>
                  <Icon name="layout" size="sm" />
                </button>
              </Tooltip>}
            </nav>
            )}
      </div>

      <button
        type="button"
        className="comp-guide_toggle"
        aria-expanded={navOpen ? 'true' : 'false'}
        aria-controls="comp-guide-list"
        aria-label={navOpen ? '메뉴 접기' : '메뉴 펼치기'}
        onClick={() => setNavOpen((value) => !value)}
      >
        <Icon name={navOpen ? 'chevron-left' : 'chevron-right'} size="sm" />
      </button>
    </aside>
  )
}

export default GuideMenu
