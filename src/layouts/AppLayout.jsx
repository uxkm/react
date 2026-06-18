import {
  Suspense,
  lazy,
  useEffect,
  useLayoutEffect,
  useState,
  useSyncExternalStore,
} from "react";
import { Outlet, useLocation } from "react-router-dom";
import SiteFooter from "../components/layout/SiteFooter.jsx";
import SiteHeader from "../components/layout/SiteHeader.jsx";
import A11yAnimation from "../components/accessibility/A11yAnimation.jsx";
import AccessibilityTopNav from "../components/layout/AccessibilityTopNav.jsx";
import PublishingTopNav from "../components/layout/PublishingTopNav.jsx";
import {
  footerDepth1Menus,
  topMenus,
} from "../data/siteNavigation.js";
import { htmlMigrationMap } from "../data/htmlMigrationMap.js";
import useFixedTopLink from "../hooks/useFixedTopLink.js";
import useGlobalEscClose from "../hooks/useGlobalEscClose.js";
import useHeaderFixedOnScroll from "../hooks/useHeaderFixedOnScroll.js";
import useIframeAutoHeight from "../hooks/useIframeAutoHeight.js";
import useResponsiveHtmlClass from "../hooks/useResponsiveHtmlClass.js";
import useScrollToTopOnRouteChange from "../hooks/useScrollToTopOnRouteChange.js";
import { useSuppressTopNavActive } from "../hooks/useSuppressTopNavActive.js";
import useTabMenuScrollAdjust from "../hooks/useTabMenuScrollAdjust.js";
import { getAccessibilityGroupFromPath } from "../data/accessibilityNavigation.js";
import { isCommentsEligiblePath } from "../lib/pageLayoutFlags.js";
import sassLogoUrl from "../assets/images/scss/Sass_Logo_Color.svg";

const ContentList = lazy(() => import("../components/docs/ContentList.jsx"));
const FolderCommonIncludes = lazy(
  () => import("../components/docs/FolderCommonIncludes.jsx"),
);
const PageSideMenu = lazy(() => import("../components/docs/PageSideMenu.jsx"));
const UkEditorTarget = lazy(() => import("../components/code/UkEditorTarget"));
const PageComments = lazy(() => import("../components/comments/PageComments.jsx"));
const CssPublishingInfo = lazy(
  () => import("../pages/publishing/css/_info.jsx"),
);

function readBodyDatasetFlag(key, fallback = false) {
  if (typeof document === "undefined") return fallback;
  const value = document.body.dataset[key];
  if (value === "true") return true;
  if (value === "false") return false;
  return fallback;
}

function subscribePageMeta(onStoreChange) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("page-meta-change", onStoreChange);
  return () => window.removeEventListener("page-meta-change", onStoreChange);
}

function readPageCommentsEnabled() {
  if (typeof document === "undefined") return false;
  const value = document.body.dataset.pageComments;
  if (value === "true") return true;
  if (value === "false") return false;
  return isCommentsEligiblePath(window.location.pathname);
}

const DEFAULT_PAGE_LAYOUT_STATE = {
  mainClass: "",
  note: true,
  reference: true,
  sideMenu: false,
  contentList: true,
  info: false,
  depth3Last: false,
  bottomEditor: false,
  comments: false,
  topAnimation: false,
};

const LAYOUT_DATASET_KEYS = [
  "pageMainClass",
  "pageType",
  "pageInfo",
  "pageNote",
  "pageSideMenu",
  "pageReference",
  "pageContentList",
  "pageDepth3Last",
  "pageBottomEditor",
  "pageComments",
  "pageTopAnimation",
];

/** 등록된 문서 라우트(4 depth) — 404·잘못된 URL과 구분 */
function isKnownDocPath(pathname) {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) return true;
  if (segments[0] === "updates") return true;
  if (segments[0] === "admin") return true;
  if (segments[0] === "publishing" && segments.length === 4) return true;
  if (segments[0] === "accessibility" && segments.length === 4) return true;
  if (
    segments[0] === "build-system" &&
    segments[1] === "gulp" &&
    segments.length === 4
  ) {
    return true;
  }
  return false;
}

function AppLayout() {
  const formatH1DataTitleAttr = (h1DataNumber, rawTitle) =>
    `${h1DataNumber}${String(rawTitle ?? "").replace(/\s+-\s+/g, " ")}`;

  const { pathname } = useLocation();
  const suppressTopNavActive = useSuppressTopNavActive();
  const topRoute = pathname.split("/").filter(Boolean)[0] ?? "";
  const isMainPage = pathname === "/";
  const isUpdatesPage = topRoute === "updates";
  const [pageHeader, setPageHeader] = useState(null);
  const [pageLayoutState, setPageLayoutState] = useState(DEFAULT_PAGE_LAYOUT_STATE);
  const commentsEnabled = useSyncExternalStore(
    subscribePageMeta,
    readPageCommentsEnabled,
    () => false,
  );
  const isUnknownDocPath = !isKnownDocPath(pathname);
  const activePageHeader = isUnknownDocPath ? null : pageHeader;
  const activePageLayoutState = isUnknownDocPath
    ? DEFAULT_PAGE_LAYOUT_STATE
    : pageLayoutState;
  const is404Page = activePageLayoutState.mainClass === "page_404";

  useResponsiveHtmlClass();
  useHeaderFixedOnScroll();
  useFixedTopLink();
  useTabMenuScrollAdjust();
  useScrollToTopOnRouteChange();
  useIframeAutoHeight();
  useGlobalEscClose();

  useEffect(() => {
    let cancelled = false;
    const segments = pathname.split("/").filter(Boolean);

    const resolvePageHeader = async () => {
      if (segments.length === 0) {
        if (!cancelled) setPageHeader(null);
        return;
      }

      if (segments[0] === "publishing" && segments.length === 4) {
        const [, type, category, slug] = segments;
        if (type === "html") {
          const { findHtmlPage } = await import("../data/htmlMigrationMap.js");
          const info = findHtmlPage(category, slug);
          if (!cancelled) {
            if (!info) {
              setPageHeader(null);
              return;
            }
            const sectionIdx = htmlMigrationMap.findIndex(
              (s) => s.category === category,
            );
            const pageIdx = info.section.pages.findIndex(
              (p) => p.slug === slug,
            );
            const sIdx = sectionIdx >= 0 ? sectionIdx + 1 : 1;
            const isInputSeriesInForms =
              category === "09-forms" &&
              (slug.startsWith("03-input_element_part") ||
                slug === "03-input_common");
            const pIdx = isInputSeriesInForms
              ? 3
              : pageIdx >= 0
                ? pageIdx + 1
                : 1;
            const h1DataNumber = `${sIdx}.${pIdx}. `;
            const sectionDataNumber = `${sIdx}. `;
            setPageHeader({
              path: `Publishing > HTML > ${info.section.title}`,
              title: info.page.title,
              sectionTitle: info.section.title,
              sectionDataNumber,
              h1DataNumber,
              h1DataTitleAttr: formatH1DataTitleAttr(
                h1DataNumber,
                info.page.title,
              ),
              breadcrumbs: [
                { key: "bc-d1", html: "Publishing" },
                { key: "bc-d2", html: "HTML" },
                { key: "bc-d3", html: info.section.title },
                { key: "bc-d4", html: info.page.title },
              ],
            });
          }
          return;
        }
        if (type === "css" || type === "scss") {
          const {
            getPublishingPageTitle,
            getPublishingSectionTitle,
            getPublishingPageNumbering,
          } = await import("../data/publishingTitles.js");
          if (!cancelled) {
            const sectionTitle = getPublishingSectionTitle(type, category);
            const pageTitle = getPublishingPageTitle(type, category, slug);
            const { sectionDataNumber, h1DataNumber } =
              getPublishingPageNumbering(type, category, slug);
            setPageHeader({
              path: `Publishing > ${type.toUpperCase()} > ${sectionTitle}`,
              title: pageTitle,
              sectionTitle,
              sectionDataNumber,
              h1DataNumber,
              h1DataTitleAttr: formatH1DataTitleAttr(h1DataNumber, pageTitle),
              breadcrumbs: [
                { key: "bc-d1", html: "Publishing" },
                { key: "bc-d2", html: type.toUpperCase() },
                { key: "bc-d3", html: sectionTitle },
                { key: "bc-d4", html: pageTitle },
              ],
            });
          }
          return;
        }
      }

      if (segments[0] === "accessibility" && segments.length === 4) {
        const [, group, section, slug] = segments;
        const {
          findAccessibilityPage,
          getAccessibilityPageNumbering,
          getAccessibilityTechSubTitle,
        } = await import("../data/accessibilityNavigation.js");
        const info = findAccessibilityPage(group, section, slug);
        if (!cancelled) {
          if (!info) {
            setPageHeader(null);
            return;
          }
          const { groupInfo, sectionInfo, pageInfo } = info;
          const { sectionDataNumber, h1DataNumber } =
            getAccessibilityPageNumbering(group, section, slug);
          setPageHeader({
            path: `Accessibility > ${groupInfo.title} > ${sectionInfo.title}`,
            title: pageInfo.title,
            sectionTitle: sectionInfo.title,
            sideMenuTitle: groupInfo.title,
            sectionSubTitle: getAccessibilityTechSubTitle(group, section, slug),
            sectionDataNumber,
            h1DataNumber,
            h1DataTitleAttr: formatH1DataTitleAttr(
              h1DataNumber,
              pageInfo.title,
            ),
            breadcrumbs: [
              { key: "bc-a1", html: "Accessibility" },
              { key: "bc-a2", html: groupInfo.title },
              { key: "bc-a3", html: sectionInfo.title },
              { key: "bc-a4", html: pageInfo.title },
            ],
          });
        }
        return;
      }

      if (
        segments[0] === "build-system" &&
        segments[1] === "gulp" &&
        segments.length === 4
      ) {
        const [, , section, slug] = segments;
        const { findGulpPage, getGulpPageNumbering } =
          await import("../data/gulpNavigation.js");
        const info = findGulpPage(section, slug);
        if (!cancelled) {
          if (!info) {
            setPageHeader(null);
            return;
          }
          const { sectionInfo, pageInfo } = info;
          const { sectionDataNumber, h1DataNumber } = getGulpPageNumbering(
            section,
            slug,
          );
          setPageHeader({
            path: `Build System > Gulp > ${sectionInfo.title}`,
            title: pageInfo.title,
            sectionTitle: sectionInfo.title,
            sectionDataNumber,
            h1DataNumber,
            h1DataTitleAttr: formatH1DataTitleAttr(
              h1DataNumber,
              pageInfo.title,
            ),
            breadcrumbs: [
              { key: "bc-g1", html: "Build System" },
              { key: "bc-g2", html: "Gulp" },
              { key: "bc-g3", html: sectionInfo.title },
              { key: "bc-g4", html: pageInfo.title },
            ],
          });
        }
        return;
      }

      if (!cancelled) setPageHeader(null);
    };

    void resolvePageHeader();
    return () => {
      cancelled = true;
    };
  }, [pathname]);

  useLayoutEffect(() => {
    // 404·비정상 URL만 이전 페이지 dataset을 제거 (뒤로가기 시 문서 페이지 layout 복원 유지)
    if (!isKnownDocPath(pathname)) {
      LAYOUT_DATASET_KEYS.forEach((key) => {
        delete document.body.dataset[key];
      });
    }

    const readLayoutFlag = (datasetKey, defaultWhenCssDoc) => {
      const value = document.body.dataset[datasetKey];
      if (value === "true") return true;
      if (value === "false") return false;
      return defaultWhenCssDoc;
    };

    const syncLayoutState = () => {
      const segments = pathname.split("/").filter(Boolean);
      const isCssDocPage =
        segments[0] === "publishing" &&
        segments[1] === "css" &&
        segments.length >= 4;
      const accessibilityGroup = getAccessibilityGroupFromPath(pathname);
      const isAccessibilityPage = segments[0] === "accessibility";

      const contentList = readLayoutFlag("pageContentList", isCssDocPage);

      setPageLayoutState({
        mainClass: document.body.dataset.pageMainClass ?? "",
        note: readLayoutFlag(
          "pageNote",
          isAccessibilityPage && accessibilityGroup === "a11yCreationTech",
        ),
        reference: readLayoutFlag("pageReference", isCssDocPage),
        sideMenu: readLayoutFlag("pageSideMenu", isCssDocPage),
        contentList,
        info: readLayoutFlag("pageInfo", isCssDocPage),
        depth3Last: document.body.dataset.pageDepth3Last === "true",
        bottomEditor: document.body.dataset.pageBottomEditor === "true",
        comments: readLayoutFlag(
          "pageComments",
          isCommentsEligiblePath(pathname),
        ),
        topAnimation: readLayoutFlag(
          "pageTopAnimation",
          isAccessibilityPage &&
            (accessibilityGroup === "a11y" ||
              accessibilityGroup === "waiAria"),
        ),
      });
      // 레거시 `_layout.njk` 호환: contentList === false 일 때 body 클래스 부착
      document.body.classList.toggle("content_lst_none", !contentList);
    };

    syncLayoutState();
    window.addEventListener("page-meta-change", syncLayoutState);
    return () =>
      window.removeEventListener("page-meta-change", syncLayoutState);
  }, [pathname]);

  const subTopTypeClass =
    topRoute === "publishing"
      ? "publishing"
      : topRoute === "accessibility"
        ? "accessibility"
        : topRoute === "build-system"
          ? "build_system"
          : "";

  const showPublishingSubChrome =
    (topRoute === "publishing" ||
      topRoute === "accessibility" ||
      topRoute === "build-system") &&
    activePageHeader != null;

  const showGulpInfoBlock =
    showPublishingSubChrome &&
    topRoute === "build-system" &&
    pathname.startsWith("/build-system/gulp/") &&
    activePageLayoutState.info;

  const showSubTopInfoBlock =
    showPublishingSubChrome &&
    activePageLayoutState.info &&
    !activePageLayoutState.note;

  const showHtmlStartSectionNote =
    showSubTopInfoBlock &&
    [
      "/publishing/html/01-htmlStart/01-html_start",
      "/publishing/html/01-htmlStart/02-html_basic",
      "/publishing/html/01-htmlStart/03-html_element",
    ].includes(pathname);

  const showCssPublishingInfo =
    showSubTopInfoBlock && pathname.startsWith("/publishing/css/");

  const showFolderTopCommonNote =
    showPublishingSubChrome &&
    [
      "/publishing/html/02-blockInline/",
      "/publishing/html/03-sections/",
      "/publishing/html/04-grouping/",
      "/publishing/html/05-textLevel/",
      "/publishing/html/06-embedded/",
      "/publishing/html/07-edits/",
      "/publishing/html/08-table/",
      "/publishing/html/09-forms/",
      "/publishing/html/10-structure/",
      "/publishing/html/11-models/",
      "/publishing/html/12-bookmark/",
      "/publishing/css/02-cssBeginner/",
      "/publishing/css/03-cssMiddleclass/",
      "/publishing/css/04-cssAdvanced/",
    ].some((prefix) => pathname.startsWith(prefix));

  const accessibilityGroup = getAccessibilityGroupFromPath(pathname);
  const isA11yCreationTechGroup = accessibilityGroup === "a11yCreationTech";

  const pageNoteActive =
    activePageLayoutState.note ||
    readBodyDatasetFlag("pageNote", isA11yCreationTechGroup);

  // as-is: A11Y·WAI-ARIA → 상단 애니메이션 / Creation Tech → tech_sub_tit + 폴더 노트
  const showAccessibilityTopNote =
    showPublishingSubChrome && isA11yCreationTechGroup;

  const showTopFolderCommonNote =
    showFolderTopCommonNote || showAccessibilityTopNote;

  const showA11yTopAnimation =
    showPublishingSubChrome && activePageLayoutState.topAnimation;

  const renderPageTitle = (title, mainClass = "") => {
    const [mainTitle, subTitle] = String(title ?? "").split(" - ");
    const elementMatch = mainTitle.match(/^(.*)\s+element$/i);

    const mainTitleNode = elementMatch ? (
      <>
        {elementMatch[1]} <span className="t_bbb">element</span>
      </>
    ) : (
      mainTitle
    );

    const standardTitle = !subTitle ? (
      mainTitleNode
    ) : (
      <>
        {mainTitleNode} <span className="part_name t_blue">{subTitle}</span>
      </>
    );

    if (mainClass === "css_transition") {
      return (
        <>
          {standardTitle}
          <span className="electrocardiogram">electrocardiogram</span>
        </>
      );
    }

    if (mainClass === "css_animation") {
      return (
        <>
          {[...mainTitle].map((char, index) => (
            <i key={`${char}-${index}`}>{char}</i>
          ))}
          {subTitle ? (
            <>
              {" "}
              <span className="part_name t_blue">{subTitle}</span>
            </>
          ) : null}
        </>
      );
    }

    return standardTitle;
  };

  return (
    <div
      className={[
        "uk_wrap",
        isMainPage ? "main_page" : "sub_page",
        topRoute === "build-system" ? "layout_build" : "",
        activePageLayoutState.mainClass,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <nav className="uk_skip">
        <a href={isMainPage ? "#content" : "#content_title"}>
          본문내용으로 건너띄기
        </a>
      </nav>

      <SiteHeader isMainPage={isMainPage} topMenus={topMenus} />

      {isMainPage ? (
        <main id="content" className="uk_container main_content_area">
          <Outlet />
        </main>
      ) : isUpdatesPage ? (
        <main
          id="content"
          className="uk_container content_area updates_area"
          role="main"
        >
          <Outlet />
        </main>
      ) : is404Page ? (
        <div className="uk_container">
          <Outlet key={pathname} />
        </div>
      ) : (
        <div className="uk_container sub_content_area">
          {topRoute === "publishing" && !suppressTopNavActive ? (
            <PublishingTopNav />
          ) : null}
          {topRoute === "accessibility" && !suppressTopNavActive ? (
            <AccessibilityTopNav />
          ) : null}

          {showPublishingSubChrome ? (
            <div
              className={[
                "sub_top",
                topRoute === "accessibility"
                  ? "publishing_sub_top"
                  : `${subTopTypeClass}_sub_top`,
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <div className="tit">
                <strong
                  className="tit_d3"
                  data-number={activePageHeader.sectionDataNumber}
                >
                  {activePageHeader.sectionTitle}
                </strong>
                {isA11yCreationTechGroup && activePageHeader.sectionSubTitle ? (
                  <p className="tech_sub_tit">
                    <i>{activePageHeader.sectionSubTitle}</i>
                  </p>
                ) : null}
              </div>
              {showTopFolderCommonNote ? (
                <Suspense fallback={null}>
                  <FolderCommonIncludes showNote showReference={false} />
                </Suspense>
              ) : null}
              {showA11yTopAnimation ? <A11yAnimation key={pathname} /> : null}
              {showHtmlStartSectionNote ? (
                <blockquote className="uk_note" cite="https://uxkm.io">
                  <strong className="sound_only">
                    {activePageHeader.sectionTitle} 요약설명
                  </strong>
                  <ul>
                    <li>
                      HTML5 기준으로 작성하며, Deprecated(더 이상 사용되지 않는)
                      요소나 속성은 제외합니다.
                    </li>
                    <li>의미론적(Semantic)인 내용 위주로 작성합니다.</li>
                    <li>
                      각 요소들이 문서의 구조를 어떻게 정의하고 의미를
                      부여하는지에 중점을 두고 있습니다.
                    </li>
                  </ul>
                </blockquote>
              ) : null}
              {showCssPublishingInfo ? (
                <Suspense fallback={null}>
                  <blockquote className="uk_note" cite="https://uxkm.io">
                    <strong className="sound_only">
                      {activePageHeader.sectionTitle} 요약설명
                    </strong>
                    <CssPublishingInfo />
                  </blockquote>
                </Suspense>
              ) : null}
              {pathname.startsWith("/publishing/scss") ? (
                <p className="mt_ms dp_pc">
                  <img
                    src={sassLogoUrl}
                    width="200"
                    height="auto"
                    alt="SCSS"
                  />
                </p>
              ) : null}
              {showGulpInfoBlock ? (
                <div className="gulp_info mt_s">
                  <img
                    src="/images/gulp/gulp_logo.svg"
                    width="100%"
                    alt="gulp.js - a toolkit to automate & enhance your workflow"
                  />
                </div>
              ) : null}
            </div>
          ) : null}

          <div
            className={[
              "sub_content",
              "inner",
              activePageLayoutState.depth3Last ? "depth3_last" : "",
              topRoute === "accessibility" ? "titleSticky" : "",
            ]
              .filter(Boolean)
              .join(" ")}
            id="sub_content"
          >
            <main id="content" className="content_area" role="main">
              {activePageHeader ? (
                <header>
                  <h1
                    id="content_title"
                    data-number={activePageHeader.h1DataNumber}
                    data-title={activePageHeader.h1DataTitleAttr}
                  >
                    {renderPageTitle(
                      activePageHeader.title,
                      activePageLayoutState.mainClass,
                    )}
                    <em className="sound_only">- by. UXKM</em>
                  </h1>
                  <ul className="page_path">
                    {activePageHeader.breadcrumbs.map((item) => (
                      <li
                        key={item.key}
                        dangerouslySetInnerHTML={{ __html: item.html }}
                      />
                    ))}
                  </ul>
                </header>
              ) : null}
              <Outlet key={pathname} />
              <Suspense fallback={null}>
                <FolderCommonIncludes
                  showNote={pageNoteActive && !showTopFolderCommonNote}
                  showReference={activePageLayoutState.reference}
                />
              </Suspense>
              {commentsEnabled ? (
                <Suspense fallback={null}>
                  <PageComments />
                </Suspense>
              ) : null}
            </main>

            <Suspense fallback={null}>
              <PageSideMenu
                enabled={activePageLayoutState.sideMenu}
                sideMenuTitle={
                  activePageHeader?.sideMenuTitle ??
                  activePageHeader?.sectionTitle
                }
              />
            </Suspense>
          </div>

          <Suspense fallback={null}>
            <ContentList
              enabled={activePageLayoutState.contentList}
              contentSelector=".content_area"
              title={activePageHeader?.title}
            />
          </Suspense>

          {activePageLayoutState.bottomEditor ? (
            <div className="content_bottom_editor dp_pc">
              <div className="inner">
                <div className="title_box">
                  <strong className="editor_title fas">
                    <span>
                      UXKM <i>Editor</i>
                    </span>
                  </strong>
                  <p className="editor_text">
                    <b>UXKM Editor</b>로 자유롭게 코드를 연습하세요. 전체 화면
                    코드 작성 및 코드 다운로드가 가능합니다.
                  </p>
                </div>
                <div className="view_editor edit_code">
                  <Suspense fallback={null}>
                    <UkEditorTarget
                      target="code_test.html"
                      className="btm_editor min_height_400 mb_result_height_400"
                      mode="htmlmixed"
                      browser="default"
                      theme="ayu-mirage"
                      title="코드 연습"
                      minHeight="400px"
                      result
                    />
                  </Suspense>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      )}

      {is404Page ? null : (
        <SiteFooter
          footerDepth1Menus={footerDepth1Menus}
        />
      )}
    </div>
  );
}

export default AppLayout;
