'use client'

import { useHydrated } from '@/hooks/react/useHydrated' // Hydrated 훅

import { useLatestRef } from '@/hooks/react/useLatestRef' // Latest Ref 훅

/**
 * 앱 공통 레이아웃 셸.
 * 헤더·본문·푸터 배치, 슬롯 병합, 스크롤 시 헤더 숨김, GlobalTranslator 연결.
 */
import { Fragment, cloneElement, isValidElement, useCallback, useEffect, useLayoutEffect, useMemo, useRef, type HTMLAttributes, type ReactElement, type ReactNode } from 'react' // React
import { classNames } from '@/utils/style/classNames' // 조건부 className 조합
import { hasNodes } from '@/utils/react' // has Nodes
import { useLocaleStore } from '@/lib/i18n/localeStore' // 언어(locale) 전역 상태
import { DEFAULT_LOCALE, normalizeLocale } from '@/lib/i18n/i18n' // 라이브러리/유틸 · i18n
import { AppFooter } from './AppFooter' // App Footer 컴포넌트
import { AppHeader, isAppHeaderLayout, type AppHeaderLayout } from './AppHeader' // AppHeader · isAppHeaderLayout · AppHeaderLayout 타입
import { GlobalTranslator } from './GlobalTranslator' // Global Translator 컴포넌트
import { LayoutProvider, useLayoutSlots, usePageFloatingOptions } from '@/comp/layout/LayoutContext' // 레이아웃 · Layout Context 컴포넌트
import { isLayoutSlotHidden } from '@/comp/shared/layout-slot' // is Layout Slot Hidden
import { Floating, type FloatingProps } from '@/comp/ui/Floating' // Floating · FloatingProps 타입
import { headerAppearanceStyle, type HeaderAppearance, type HeaderStyle } from '@/comp/shared/header-appearance' // 공유 모듈 · header appearance

/** 같은 방향으로 이만큼 누적되면 헤더 show/hide (느린 스크롤도 감지) */
const SCROLL_TRIGGER = 8
/** 이 스크롤 위치 위에서는 헤더를 항상 보여 준다 */
const SHOW_AT_TOP = 24

/** 앱 레이아웃이 받는 값. 헤더·본문·푸터를 감싼다 */
export interface AppLayoutProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  /** 헤더 위 공통 배너. TopBanner 또는 커스텀 UI를 전달한다. */
  banner?: ReactNode
  /** 헤더 전체 교체 */
  header?: ReactNode
  headerBack?: ReactNode
  headerBrand?: ReactNode
  headerNav?: ReactNode
  headerActions?: ReactNode
  /** stacked: 상단 브랜드 + 하단 네비 (스크롤 시 상단만 숨김) */
  headerLayout?: AppHeaderLayout
  /** 공통 헤더의 기본·스크롤 배경과 클래스·CSS 변수 */
  headerAppearance?: HeaderAppearance
  /**
   * stacked 전용: 스크롤 시 하단 네비까지 함께 숨김
   * (Header hideNavOnScroll 슬롯이 있으면 그쪽 우선)
   */
  hideNavOnScroll?: boolean
  /** 푸터 전체 교체 */
  footer?: ReactNode
  /** 기본 AppFooter 내용 */
  footerContent?: ReactNode
  /** 공통 플로팅 항목(Floating.Item). 페이지 전용 항목은 PageFloating으로 추가한다. */
  floating?: ReactNode
  /** 공통 플로팅의 위치·정렬·기본 표시 설정 */
  floatingProps?: Omit<FloatingProps, 'children'>
  children?: ReactNode
}

/**
 * 헤더·본문·푸터를 한 화면에 배치한다.
 * 페이지의 Header/Footer/meta 가 슬롯을 채우기 전에는 기본 크롬을 쓴다.
 */
function AppLayoutInner ({
  banner,
  header,
  headerBack,
  headerBrand,
  headerNav,
  headerActions,
  headerLayout = 'stacked',
  headerAppearance,
  hideNavOnScroll = false,
  footer,
  footerContent,
  floating,
  floatingProps,
  children,
  className,
  ...rest
}: AppLayoutProps) {
  const pageSlots = useLayoutSlots()
  const headerSlot = pageSlots.header
  const appearanceSlot = pageSlots['header-appearance']
  const pageHeaderAppearance: HeaderAppearance = useMemo(() => typeof appearanceSlot === 'string' ? JSON.parse(appearanceSlot) : {}, [appearanceSlot])
  const resolvedHeaderAppearance: HeaderAppearance = {
    ...headerAppearance,
    ...pageHeaderAppearance,
    className: classNames(headerAppearance?.className, pageHeaderAppearance.className),
    style: { ...headerAppearance?.style, ...pageHeaderAppearance.style }
  }
  const pageFloatingOptions = usePageFloatingOptions()
  const mergedFloatingProps = { ...floatingProps, ...pageFloatingOptions }
  const hasFloatingSlots = Object.values(mergedFloatingProps.slots || {}).some(hasNodes)
  const layoutRef = useRef<HTMLDivElement>(null)
  const headerAnchorRef = useRef<HTMLSpanElement>(null)
  /** 원문(ko) 복귀 시 React 트리를 리마운트해 한글 원문을 다시 그림 */
  const locale = useLocaleStore((s) => normalizeLocale(s.locale || DEFAULT_LOCALE))
  const treeKey = locale === 'ko' ? 'ko' : 'xlate'
  /**
   * 기본 AppHeader/AppFooter 표시 시기.
   * false: SSR·하이드레이션 직전 — 슬롯 전에 기본 헤더가 잠깐 보이는 깜빡임 방지
   * true: 슬롯이 없을 때만 기본 헤더/푸터 사용
   * 슬롯은 useLayoutEffect 등록이라 SSR HTML 에 없음.
   * 새로고침 시 본문 점프를 막으려면 header/footer prop 으로 첫 렌더부터 넘긴다.
   */
  const defaultsReady = useHydrated()

  /** 그 슬롯이 숨김 표시인지 */
  const isSlotHidden = (name: string) => isLayoutSlotHidden(pageSlots[name])
  /** 숨김이면 null, 아니면 슬롯 노드 */
  const slotNodes = (name: string): ReactNode =>
    isSlotHidden(name) ? null : (pageSlots[name] as ReactNode)
  const mainPage =
    typeof pageSlots['main-page'] === 'string' ? pageSlots['main-page'] : undefined
  const mainClass =
    typeof pageSlots['main-class'] === 'string' ? pageSlots['main-class'] : undefined
  /** 슬롯에 그릴 노드가 있는지 */
  const hasSlotNodes = (name: string) => hasNodes(slotNodes(name))
  const hasPageContent = hasNodes(children)
  /**
   * 페이지 슬롯 우선, 없으면 AppLayout prop.
   * LAYOUT_SLOT_HIDDEN 이면 null (의도적 비움 — AppHeader 기본 메뉴 억제).
   */
  const pick = (name: string, prop: ReactNode): ReactNode => {
    if (Object.prototype.hasOwnProperty.call(pageSlots, name)) {
      if (isSlotHidden(name)) return null
      if (hasSlotNodes(name)) return slotNodes(name)
    }
    return prop
  }

  const resolvedLayout: AppHeaderLayout = isAppHeaderLayout(pageSlots['header-layout'])
    ? pageSlots['header-layout']
    : headerLayout

  const resolvedHideNavOnScroll =
    pageSlots['header-hide-nav-on-scroll'] === 'true' || hideNavOnScroll === true

  /** PageLayoutVisibility meta.header / meta.footer — 'false' 만 숨김, 없거나 'true' 면 표시 */
  const metaHeaderVisible = pageSlots['meta-header'] !== 'false'
  const metaFooterVisible = pageSlots['meta-footer'] !== 'false'

  /*
   * 헤더 결정 우선순위
   * 1) header prop — SSR부터 DOM 포함, 레이아웃 점프 없음
   * 2) header 슬롯 — useLayoutEffect 등록, SSR엔 비어 있음
   * 3) defaultsReady 후 AppHeader — 슬롯·prop 없을 때 기본 헤더
   */
  let headerNode: ReactNode = null
  if (header !== undefined && header !== null && header !== false) {
    headerNode = header
  } else if (hasPageContent && metaHeaderVisible && !isSlotHidden('header')) {
    if (hasSlotNodes('header')) {
      headerNode = slotNodes('header')
    } else if (defaultsReady) {
      headerNode = (
        <AppHeader
          {...resolvedHeaderAppearance}
          layout={resolvedLayout}
          hideNavOnScroll={resolvedHideNavOnScroll}
          back={pick('header-back', headerBack)}
          brand={pick('header-brand', headerBrand)}
          nav={pick('header-nav', headerNav)}
          actions={pick('header-actions', headerActions)}
        />
      )
    }
  }

  // 커스텀 헤더는 루트가 className·style을 전달해야 페이지별 외형 설정이 적용된다.
  if ((header != null && header !== false || hasSlotNodes('header')) && isValidElement(headerNode) && headerNode.type !== Fragment) {
    const customHeader = headerNode as ReactElement<{ className?: string; style?: HeaderStyle }>
    headerNode = cloneElement(customHeader, {
      className: classNames(resolvedHeaderAppearance.className, customHeader.props.className),
      style: { ...headerAppearanceStyle(resolvedHeaderAppearance), ...customHeader.props.style }
    })
  }

  /** 푸터: prop(SSR 포함) > 슬롯 > defaultsReady 후 기본 AppFooter */
  let footerNode: ReactNode = null
  if (footer !== undefined && footer !== null && footer !== false) {
    footerNode = footer
  } else if (hasPageContent && metaFooterVisible && !isSlotHidden('footer')) {
    if (hasSlotNodes('footer')) {
      footerNode = slotNodes('footer')
    } else if (hasSlotNodes('footer-content')) {
      footerNode = <AppFooter>{slotNodes('footer-content')}</AppFooter>
    } else if (hasNodes(footerContent)) {
      footerNode = <AppFooter>{footerContent}</AppFooter>
    } else if (defaultsReady) {
      footerNode = <AppFooter />
    }
  }

  const hasHeader = headerNode != null
  const headerHiddenRef = useRef(false)
  const hideNavOnScrollRef = useLatestRef(resolvedHideNavOnScroll)
  const syncHeaderScrolled = useCallback((headerEl: HTMLElement) => {
    const anchor = headerAnchorRef.current
    const scrollY = window.scrollY || window.pageYOffset || 0
    const computed = getComputedStyle(headerEl)
    const stickyTop = Number.parseFloat(computed.top) || 0
    const scrolled = scrollY > 0 && (computed.position === 'fixed' || (anchor?.getBoundingClientRect().top ?? 0) < stickyTop)
    headerEl.classList.toggle('is-scrolled', scrolled)
    if (scrolled) headerEl.dataset.scrolled = 'true'
    else delete headerEl.dataset.scrolled
  }, [])

  // 페이지 클래스가 바뀌면 React가 class 속성을 갱신하므로 스크롤 상태 클래스를 다시 맞춘다.
  useLayoutEffect(() => {
    const main = layoutRef.current?.querySelector('.app-layout_main')
    const headerEl = main?.previousElementSibling as HTMLElement | null
    if (!hasHeader || !headerEl) return
    headerEl.classList.toggle('is-scroll-hidden', headerHiddenRef.current)
    syncHeaderScrolled(headerEl)
  })

  /** 헤더 높이를 CSS 변수로 남긴다. 숨김이면 메뉴 높이를 뺀다 */
  const measureHeader = useCallback((headerEl: HTMLElement, hidden: boolean) => {
    const topEl = headerEl.querySelector('.app-header_top') as HTMLElement | null
    const navBar = headerEl.querySelector('.app-header_nav-bar') as HTMLElement | null
    const topH = topEl?.offsetHeight ?? 0
    headerEl.style.setProperty('--app-header-top-height', `${topH}px`)

    const hideAll =
      hideNavOnScrollRef.current ||
      headerEl.classList.contains('app-header_hide-nav-on-scroll') ||
      headerEl.dataset.hideNavOnScroll === 'true'

    // hideNavOnScroll / inline 숨김: 0 / stacked 기본 숨김: 네비만 / 그 외: 전체
    if (hidden && hideAll) return 0
    if (hidden && navBar) return Math.max(0, navBar.offsetHeight)
    if (hidden) return 0
    return Math.max(0, headerEl.offsetHeight)
  }, [hideNavOnScrollRef])

  // 헤더 높이를 --app-header-height 로 노출 → 페이지 sticky 가 헤더 아래에 붙도록
  useLayoutEffect(() => {
    const layout = layoutRef.current
    if (!layout) return

    /** --app-header-height. sticky 가 헤더 아래에 붙는다 */
    const setHeight = (px: number) => {
      layout.style.setProperty('--app-header-height', `${Math.max(0, px)}px`)
    }

    if (!hasHeader) {
      setHeight(0)
      return
    }

    const main = layout.querySelector('.app-layout_main')
    const headerEl = main?.previousElementSibling as HTMLElement | null
    if (!headerEl) {
      setHeight(0)
      return
    }

    // 커스텀 헤더 슬롯에도 옵션 반영
    headerEl.classList.toggle('app-header_hide-nav-on-scroll', resolvedHideNavOnScroll)
    if (resolvedHideNavOnScroll) headerEl.dataset.hideNavOnScroll = 'true'
    else delete headerEl.dataset.hideNavOnScroll

    /** 지금 헤더 높이로 CSS 변수를 다시 맞춘다 */
    const update = () => {
      syncHeaderScrolled(headerEl)
      setHeight(measureHeader(headerEl, headerHiddenRef.current))
    }
    update()

    const ro = new ResizeObserver(update)
    ro.observe(headerEl)
    ro.observe(layout)
    const bannerEl = headerAnchorRef.current?.previousElementSibling
    if (bannerEl) ro.observe(bannerEl)
    const topEl = headerEl.querySelector('.app-header_top')
    const navBar = headerEl.querySelector('.app-header_nav-bar')
    if (topEl) ro.observe(topEl)
    if (navBar) ro.observe(navBar)
    return () => ro.disconnect()
  }, [hasHeader, header, headerSlot, resolvedLayout, resolvedHideNavOnScroll, measureHeader, syncHeaderScrolled])

  // 아래로 스크롤 → 상단(또는 전체) 숨김, 위로 스크롤 → 복귀
  useEffect(() => {
    if (!hasHeader) return

    const layout = layoutRef.current
    if (!layout) return

    const main = layout.querySelector('.app-layout_main')
    const headerEl = main?.previousElementSibling as HTMLElement | null
    if (!headerEl) return
    syncHeaderScrolled(headerEl)

    let lastY = window.scrollY || window.pageYOffset || 0
    let pendingY = lastY
    let acc = 0
    let ticking = false

    /** 스크롤로 헤더를 접거나 편다 */
    const applyHidden = (hidden: boolean) => {
      // 고정 헤더는 스크롤 방향과 무관하게 표시하고 높이도 유지합니다.
      hidden = hidden && headerEl.dataset.headerScroll !== 'fixed'
      if (headerHiddenRef.current === hidden) return
      headerHiddenRef.current = hidden
      headerEl.classList.toggle('is-scroll-hidden', hidden)
      layout.style.setProperty(
        '--app-header-height',
        `${measureHeader(headerEl, hidden)}px`
      )
    }

    if (headerEl.dataset.headerScroll === 'fixed') applyHidden(false)

    /** 스크롤 방향을 모아 한 프레임에 한 번 헤더를 접는다 */
    const onScroll = () => {
      pendingY = window.scrollY || window.pageYOffset || 0
      if (ticking) return
      ticking = true
      window.requestAnimationFrame(() => {
        ticking = false
        syncHeaderScrolled(headerEl)
        const y = pendingY
        const delta = y - lastY
        lastY = y

        if (y <= SHOW_AT_TOP) {
          acc = 0
          applyHidden(false)
          return
        }

        if (delta === 0) return

        // 방향이 바뀌면 누적 리셋 후 다시 쌓기
        if ((acc > 0 && delta < 0) || (acc < 0 && delta > 0)) {
          acc = delta
        } else {
          acc += delta
        }

        if (acc >= SCROLL_TRIGGER) {
          applyHidden(true)
          acc = 0
        } else if (acc <= -SCROLL_TRIGGER) {
          applyHidden(false)
          acc = 0
        }
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      applyHidden(false)
    }
  }, [hasHeader, header, headerSlot, resolvedLayout, resolvedHideNavOnScroll, measureHeader, syncHeaderScrolled])

  return (
    <div
      {...rest}
      ref={layoutRef}
      className={classNames('app-layout', hasHeader && 'app-layout_has-header', className)}
    >
      {/* 헤더·본문·푸터 전체 DOM 을 선택 언어로 번역 (locales 폴더 불필요) */}
      <GlobalTranslator rootRef={layoutRef} />
      <div key={treeKey} className="app-layout_tree">
        {defaultsReady && pageSlots['meta-banner'] !== 'false' && pick('banner', banner)}
        {/*
          <span class="app-header-anchor" aria-hidden="true" />
          sticky 헤더 바로 앞의 높이 0 기준점.
          - 앵커 top 과 헤더 sticky top 을 비교해 is-scrolled 판별
          - previousElementSibling 로 TopBanner 를 찾아 헤더 높이 재측정
        */}
        {hasHeader && <span ref={headerAnchorRef} className="app-header-anchor" aria-hidden="true" />}
        {headerNode}
        <main
          className={classNames('app-layout_main', mainClass)}
          data-page={mainPage || undefined}
        >
          {children}
        </main>
        {footerNode}
        {defaultsReady && (hasNodes(floating) || hasSlotNodes('floating-items') || hasFloatingSlots) && (
          <Floating {...mergedFloatingProps}>
            {floating}
            {slotNodes('floating-items')}
          </Floating>
        )}
      </div>
    </div>
  )
}

/** 슬롯 저장소를 감싼 공통 레이아웃. 화면은 이 컴포넌트 안에서 헤더·푸터를 바꾼다 */
export function AppLayout (props: AppLayoutProps) {
  return (
    <LayoutProvider>
      <AppLayoutInner {...props} />
    </LayoutProvider>
  )
}

export default AppLayout
