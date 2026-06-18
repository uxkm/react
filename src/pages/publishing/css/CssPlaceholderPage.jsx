import { Link, useParams } from "react-router-dom";
import {
  findPublishingPage,
  getPublishingPageTitle,
  getPublishingSectionTitle,
} from "../../../data/publishingTitles.js";
import PageMeta from "../../../components/common/PageMeta";
import Doc404Page from "../../404.jsx";
const migratedModules = import.meta.glob("./*/*.jsx", { eager: true });

function toComponentFile(slug) {
  const componentName = slug
    .replace(/^[0-9]+-/, "")
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");

  return `${componentName || "Page"}Page`;
}

function CssPlaceholderPage() {
  const { category, slug } = useParams();

  if (!category || !slug) {
    return <Doc404Page />;
  }

  const slugPath = `./${category}/${slug}.jsx`;
  const componentPath = `./${category}/${toComponentFile(slug)}.jsx`;
  const migratedModule =
    migratedModules[slugPath] ?? migratedModules[componentPath];

  if (migratedModule?.default) {
    const MigratedComponent = migratedModule.default;
    return <MigratedComponent />;
  }

  if (!findPublishingPage("css", category, slug)) {
    return <Doc404Page />;
  }

  return (
    <>
      <PageMeta
        title={getPublishingPageTitle("css", category, slug)}
        description={`${getPublishingSectionTitle("css", category)} 문서 페이지입니다. React 구조로 변환 진행 상태를 안내합니다.`}
        keyword={`${getPublishingSectionTitle("css", category)}, CSS, ${slug}`}
        layout={{ mainClass: "css_page", type: "publishing" }}
      />
      <>
        <blockquote className="uk_note mt_xxl" role="note">
          <p>이 페이지는 React 구조로 변환 예정입니다.</p>
        </blockquote>

        <section>
          <h2>소스 기준 경로</h2>
          <pre>
            <code>{`src/html/publishing/css/${category}/${slug}.njk`}</code>
          </pre>
        </section>

        <p>
          <Link to="/publishing/css">CSS 목록으로 돌아가기</Link>
        </p>
      </>
    </>
  );
}

export default CssPlaceholderPage;
