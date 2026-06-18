import { Link, useParams } from "react-router-dom";
import { findHtmlPage } from "../../../data/htmlMigrationMap.js";
import PageMeta from "../../../components/common/PageMeta";
import Doc404Page from "../../404.jsx";
const migratedModules = import.meta.glob("./**/*.jsx", { eager: true });

function toComponentFile(slug) {
  const componentName = slug
    .replace(/^[0-9]+-/, "")
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");

  return `${componentName || "Page"}Page`;
}

function HtmlPlaceholderPage() {
  const { category, slug } = useParams();
  const pageInfo = findHtmlPage(category, slug);

  if (!pageInfo) {
    return <Doc404Page />;
  }

  const { section, page } = pageInfo;
  const slugPath = `./${category}/${slug}.jsx`;
  const componentPath = `./${category}/${toComponentFile(slug)}.jsx`;
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
        description={`${section.title} 문서 페이지입니다. React 구조로 변환 진행 상태를 안내합니다.`}
        keyword={`${section.title}, ${page.title}, HTML, UXKM`}
        layout={{ mainClass: "publishing_html", type: "publishing" }}
      />
      <>
        <blockquote className="uk_note mt_xxl" role="note">
          <p>
            이 페이지는 React 구조로 변환 예정입니다. (다음 순서로 개별 마크업
            이관)
          </p>
        </blockquote>

        <section>
          <h2>소스 기준 경로</h2>
          <pre>
            <code>{`src/html/publishing/html/${category}/${slug}.njk`}</code>
          </pre>
        </section>

        <section>
          <h2>작업 상태</h2>
          <p>{page.converted ? "변환 완료" : "변환 대기"}</p>
        </section>
        <section className="indent mt_xxl">
          <h2 className="ml_mn" data-conlist="false">
            주의사항
          </h2>
          <ul className="dot_lst mt_l">
            <li>
              placeholder 상태 페이지는 배포 전에 실제 콘텐츠 컴포넌트로
              교체되어야 합니다.
            </li>
          </ul>
        </section>
        <aside className="browser_support mt_xxl" data-tit="placeholder">
          <ul>
            <li className="ie">지원</li>
            <li className="edge">지원</li>
            <li className="chrome">지원</li>
            <li className="firefox">지원</li>
            <li className="opera">지원</li>
            <li className="safari">지원</li>
          </ul>
        </aside>
        <figure className="img_figure mt_l">
          <img
            src="/images/html/html_placeholder.png"
            alt="HTML placeholder 페이지"
          />
          <figcaption>HTML placeholder 페이지</figcaption>
        </figure>

        <p>
          <Link to="/publishing/html">HTML 폴더 목록으로 돌아가기</Link>
        </p>
      </>
    </>
  );
}

export default HtmlPlaceholderPage;
