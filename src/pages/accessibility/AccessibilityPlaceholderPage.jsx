import { Link, useParams } from "react-router-dom";
import {
  ACCESSIBILITY_HOME_HREF,
  findAccessibilityPage,
} from "../../data/accessibilityNavigation.js";
import PageMeta from "../../components/common/PageMeta";
import { useAccessibilityPageMeta } from "../../hooks/useAccessibilityPageMeta.js";
import Doc404Page from "../404.jsx";

const migratedModules = import.meta.glob("./*/*/*.jsx", { eager: true });

function toComponentFile(slug) {
  const componentName = slug
    .replace(/^[0-9]+-/, "")
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");

  return `${componentName || "Page"}Page`;
}

function AccessibilityResolvedPage() {
  const { group, section, slug } = useParams();
  const pageInfo = findAccessibilityPage(group, section, slug);
  useAccessibilityPageMeta();

  if (!pageInfo) {
    return <Doc404Page />;
  }

  const { groupInfo, sectionInfo, pageInfo: page } = pageInfo;
  const slugPath = `./${group}/${section}/${slug}.jsx`;
  const componentPath = `./${group}/${section}/${toComponentFile(slug)}.jsx`;
  const migratedModule =
    migratedModules[slugPath] ?? migratedModules[componentPath];

  if (migratedModule?.default) {
    const MigratedComponent = migratedModule.default;
    return <MigratedComponent />;
  }

  return (
    <>
      <PageMeta
        title={page.title}
        description={`${sectionInfo.title} 접근성 문서 페이지입니다. React 구조로 변환 진행 상태를 안내합니다.`}
        keyword={`${groupInfo.title}, ${sectionInfo.title}, ${page.title}, 접근성`}
        layout={{ mainClass: "a11y_page", type: "accessibility" }}
      />
      <>
        <blockquote className="uk_note mt_xxl" role="note">
          <p>이 페이지는 React 구조로 변환 예정입니다.</p>
        </blockquote>

        <section>
          <h2>소스 기준 경로</h2>
          <pre>
            <code>{`src/html/accessibility/${group}/${section}/${slug}.njk`}</code>
          </pre>
        </section>

        <p>
          <Link to={ACCESSIBILITY_HOME_HREF}>접근성 시작으로 돌아가기</Link>
        </p>
      </>
    </>
  );
}

function AccessibilityPlaceholderPage() {
  const { group, section, slug } = useParams();
  const pageInfo = findAccessibilityPage(group, section, slug);

  if (!group || !section || !slug || !pageInfo) {
    return <Doc404Page />;
  }

  return <AccessibilityResolvedPage />;
}

export default AccessibilityPlaceholderPage;
