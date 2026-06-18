import CodeBlock from "@/components/code/CodeBlock";
import { usePageMeta } from "@/components/common/PageMeta";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "html4_document",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
};

const PAGE_DATA = {
  title: "HTML4에서의 문서 구조",
  description:
    "HTML4에서는 문서 구조를 구성할 때 시맨틱(의미 중심) 요소가 거의 없으며, 대부분의 구획을 div, table, span 등과 같은 비시맨틱 요소를 조합해 설계했고 문서의 의미보다는 레이아웃 중심의 구조로 작성되며 콘텐츠 구분을 위한 명확한 의미 전달이 어려워 접근성과 유지 보수 측면에서 한계가 있었습니다. 이 페이지에서는 HTML4 기본 구조, HTML4 문서 구조의 한계에 대해 설명합니다.",
  keyword: "Markup, HTML, HTML4 tag, elements, document, 문서 구조",
};

function Html4DocumentPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <b>HTML4는 1997년 W3C에 의해 정식 권고안으로 채택된 마크업 언어</b>로,
          HTML5가 등장하기 전까지 <b>웹 표준으로 가장 널리 사용</b>되었습니다.
          <br />이 버전에서는 시맨틱 구조를 명확하게 나타낼 수 있는 전용 태그가
          부족했기 때문에, 웹 개발자들은 주로 <code>div</code>,{" "}
          <code>span</code>, <code>table</code> 등의 비시맨틱 요소와{" "}
          <code>id</code>, <code>class</code> 속성을 통해 문서의 구조를
          표현했습니다. 그 결과 <b>구조보다는 표현과 레이아웃 중심의 마크업</b>
          이 주류를 이루었습니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn">HTML4 DTD 및 문서 선언</h2>
        <p className="mt_ml">
          HTML4 문서는 DTD(Document Type Definition)를 통해 문서의 형식을
          명시합니다. 이 선언은 브라우저에게 문서가 어떤 HTML 규격을 따르고
          있는지를 알려줍니다.
          <br />
          HTML4에서는 다음과 같이 3가지 유형이 존재합니다.
        </p>

        <article className="mt_l indent">
          <h3 className="ml_mn">Strict</h3>
          <p className="mt_ms">
            최신 표준에만 부합하는 태그와 속성만을 허용합니다. 표현을 위한
            오래된 태그(<code>font</code>, <code>center</code>, <code>u</code>{" "}
            등)는 사용할 수 없습니다.
          </p>
          <CodeBlock
            title="DTD 및 문서 선언 [Strict]"
            className="mt_m"
            language="html"
          >
            {`<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">Transitional</h3>
          <p className="mt_ms">
            기존의 레거시 코드와의 호환성을 고려한 선언 방식입니다. 표현 중심의
            태그도 사용할 수 있어, 과거 웹사이트의 대부분이 이 방식으로
            작성되었습니다.
          </p>
          <CodeBlock
            title="DTD 및 문서 선언 [Transitional]"
            className="mt_m"
            language="html"
          >
            {`<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">Frameset</h3>
          <p className="mt_ms">
            프레임 기반 레이아웃을 사용하는 경우에 필요한 선언입니다.{" "}
            <code>&lt;frameset&gt;</code> 요소를 사용하는 페이지에서만
            사용됩니다.
          </p>
          <CodeBlock
            title="DTD 및 문서 선언 [Frameset]"
            className="mt_m"
            language="html"
          >
            {`<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">`}
          </CodeBlock>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          HTML4 기본 구조
        </h2>
        <p className="mt_ml">
          HTML4 문서의 구조는 <code>&lt;html&gt;</code>,{" "}
          <code>&lt;head&gt;</code>, <code>&lt;body&gt;</code> 요소로 구성되며,{" "}
          <code>&lt;head&gt;</code>에는 메타데이터와 리소스,{" "}
          <code>&lt;body&gt;</code>에는 사용자에게 보여지는 콘텐츠가 포함됩니다.
        </p>
        <CodeBlock title="HTML4 기본 구조" className="mt_m" language="html">
          {`<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
  <head>
    <title>문서 제목</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="description" content="페이지 설명">
    <link rel="stylesheet" href="style.css">
    <script src="script.js"></script>
  </head>
  <body>
    <!-- 본문 내용이 여기에 위치 -->
  </body>
</html>`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          시맨틱 부족과 div 레이아웃
        </h2>
        <p className="mt_ml">
          HTML4에서는 콘텐츠를 구획화하기 위한 시맨틱 태그가 존재하지 않아, 모든
          구조를 <code>&lt;div&gt;</code> 요소로 나누는 방식이 일반적이었고,
          구조적 표현을 위해 <code>&lt;div&gt;</code> 요소를 다용도로
          활용되었습니다.
          <br />이 때문에 CSS에서 <code>#header</code>, <code>#footer</code>,{" "}
          <code>#content</code> 같은 <code>id</code>를 설정해 의미를
          대체했습니다.
        </p>
        <CodeBlock title="레이아웃 예시" className="mt_m" language="html">
          {`<div id="wrapper">
  <div id="header">
    <h1>웹사이트 제목</h1>
  </div>
  <div id="nav">
    <ul>
      <li>메뉴1</li>
      <li>메뉴2</li>
    </ul>
  </div>
  <div id="content">
    <p>본문 콘텐츠</p>
  </div>
  <div id="footer">
    <p>&copy; 회사명</p>
  </div>
</div>`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          문서 아웃라인 구성 방식
        </h2>
        <p className="mt_ml">
          HTML4에서는 시맨틱 섹션 요소가 존재하지 않기 때문에, 문서의 구조는
          전적으로 <code>&lt;h1&gt;</code> ~ <code>&lt;h6&gt;</code> 태그의 계층
          구조에 따라 표현됩니다.
          <br />각 제목 태그는 시각적 크기뿐 아니라 문서 내의{" "}
          <strong>논리적 수준(hierarchy)</strong>을 나타냅니다.
        </p>
        <CodeBlock title="레이아웃 예시" className="mt_m" language="html">
          {`<h1>사이트 제목</h1>
  <h2>소개</h2>
    <h3>회사 개요</h3>
    <h3>연혁</h3>
  <h2>서비스</h2>
    <h3>웹 개발</h3>

<!-- 아웃라인 트리 구조 -->
1. 사이트 제목
├─ 1.1. 소개
│   ├─ 1.1.1. 회사 개요
│   └─ 1.1.2. 연혁
└─ 1.2. 서비스
    └─ 1.2.1. 웹 개발`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          HTML4 문서 구조의 한계
        </h2>
        <p className="mt_ml">
          HTML4는 시맨틱 웹이라는 개념이 없던 시절의 표준이기 때문에 다음과 같은
          한계가 존재합니다.
        </p>
        <ol className="mt_l ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>시맨틱 태그 부재</strong>
            <p>
              <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>,{" "}
              <code>&lt;article&gt;</code> 같은 시맨틱 요소가 없어 의미 중심의
              구조 표현이 어렵습니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>접근성 문제</strong>
            <p>스크린 리더가 문서의 구조나 의미를 인식하기 어렵습니다.</p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>SEO 최적화 부족</strong>
            <p>검색 엔진이 페이지의 섹션 구분을 파악하기 힘듭니다.</p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>구조 해석의 어려움</strong>
            <p>
              유지 보수 시 코드 분석이 어렵고 의도가 명확히 드러나지 않습니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>표현 중심 마크업</strong>
            <p>
              시각적 표현을 위해 HTML에 스타일 정보가 포함되는 경향이 강합니다.
            </p>
          </li>
        </ol>
      </section>

      <figure className="img_figure mt_l">
        <img src={IMG.HTML + "/10_html_01.png"} alt="HTML4 문서 구조" />
        <figcaption>HTML4 문서 구조</figcaption>
      </figure>
    </>
  );
}

export default Html4DocumentPage;
