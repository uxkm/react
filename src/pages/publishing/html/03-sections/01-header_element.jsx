import CodeBlock from "@/components/code/CodeBlock";
import { usePageMeta } from "@/components/common/PageMeta";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "header_element",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
  depth3Last: false,
  bottomEditor: true,
};

const PAGE_DATA = {
  title: "header element",
  description:
    "header 요소는 문서나 섹션의 머리말 역할을 하는 HTML 태그로, 주로 제목, 로고, 내비게이션 링크 등 소개나 탐색을 위한 콘텐츠를 포함하며 페이지 전체 또는 개별 섹션의 시작 부분에 사용됩니다. 이 페이지에서는 header 요소의 주요 역할 및 특징을 설명하고, header 요소의 용도와 구조적 위치에 따른 사용 예시를 소개합니다.",
  keyword: "Markup, HTML, HTML5, tag, elements, header",
};

function HeaderElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>&lt;header&gt;</code> 요소는{" "}
          <b>문서나 섹션의 머리말을 나타내는 시맨틱 태그</b>로,{" "}
          <b>
            보통 제목, 로고, 내비게이션 메뉴 같은 소개 또는 탐색 요소들을
            담습니다.
          </b>
          <br />
          페이지 전체뿐만 아니라 개별 섹션이나 아티클 안에서도 사용할 수 있으며,
          시각적인 상단 디자인이 아닌 구조적인 의미를 갖는 요소입니다. 한 문서에
          여러 개의 <code>&lt;header&gt;</code>를 사용할 수 있지만,{" "}
          <code>&lt;header&gt;</code> 안에는 <code>&lt;footer&gt;</code>를
          포함할 수 없습니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <ol className="mt_l ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>시맨틱 구조 제공</strong>
            <p>
              문서의 구조를 명확히 하여 검색 엔진 최적화(SEO)와 접근성
              (Accessibility)을 향상시킵니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>다양한 위치에서 사용 가능</strong>
            <p>
              문서 전체를 위한 헤더(<code>&lt;body&gt;</code> 안)와 개별 섹션(
              <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code> 등)마다
              별도로 사용할 수 있습니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>포함 가능한 콘텐츠</strong>
            <p>
              제목(<code>&lt;h1~h6&gt;</code>), 로고, 탐색(
              <code>&lt;nav&gt;</code>), 검색창, 기타 소개 정보가 주로
              포함됩니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>포함하지 않는 콘텐츠</strong>
            <p>
              일반 본문 텍스트나 하위 콘텐츠, <code>&lt;footer&gt;</code> 관련
              요소는 포함하지 않는 것이 권장됩니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>중복 사용 가능</strong>
            <p>
              같은 페이지에서 문맥에 따라 여러 개의 <code>&lt;header&gt;</code>
              를 사용할 수 있습니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>레이아웃에 영향 없음</strong>
            <p>스타일링은 기본적으로 제공되지 않으며, CSS로 정의해야 합니다.</p>
          </li>
        </ol>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          CSS 기본 값
        </h2>
        <p className="mt_l">
          <code>&lt;header&gt;</code> 요소는 기본적으로 블록 레벨 요소입니다.
        </p>
        <CodeBlock title="header element CSS" language="css">
          {`header {
  display: block;
}`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          기본 문법
        </h2>
        <CodeBlock title="header element syntax" language="html">
          {`<header>
  <!-- 헤더 콘텐츠 -->
</header>`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          속성
        </h2>
        <p className="mt_l">
          <code>&lt;header&gt;</code> 요소는{" "}
          <b className="t_black">고유 속성</b>을 가지지 않으며,
          <mark>
            글로벌 속성(<code>class</code>, <code>id</code>, <code>style</code>,{" "}
            <code>aria-*</code>, <code>data-*</code> 등)만 사용할 수 있습니다.
          </mark>
        </p>
        <CodeBlock title="header element attr" language="html">
          {`<header id="main-header" class="header-container" role="banner">
  <!-- 헤더 콘텐츠 -->
</header>`}
        </CodeBlock>
      </section>

      <section className="view_editor indent mt_xxl">
        <h2 className="ml_mn ve_tit">예제</h2>

        <article className="mt_l indent">
          <h3 className="ml_mn">네비게이션이 포함된 웹 페이지의 메인 헤더</h3>
          <CodeBlock title="main header" language="html">
            {`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Header Example</title>
</head>
<body>
  <header>
    <h1>My Website</h1>
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main>
    ...content...
  </main>
</body>
</html>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">섹션 내 헤더</h3>
          <CodeBlock title="section header" language="html">
            {`<section>
  <header>
    <h2>Project Highlights</h2>
    <p>An overview of key projects completed this year.</p>
  </header>
  <p>This section contains detailed information about various projects...</p>
</section>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">스타일링이 적용된 헤더</h3>
          <CodeBlock title="style header" language="html">
            {`<header style="background-color: #1a1a1a; color: white; padding: 20px; text-align: center;">
  <h1>Developer's Blog</h1>
  <p>Sharing insights and tutorials on web development</p>
</header>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">기사나 블로그 포스트의 헤더</h3>
          <CodeBlock title="article header" language="html">
            {`<article>
  <header>
    <h2>Understanding CSS Flexbox</h2>
    <p>By Alex Smith | Published on January 7, 2025</p>
  </header>
  <p>Flexbox is a powerful layout module in CSS...</p>
</article>`}
          </CodeBlock>
        </article>
      </section>

      <aside className="browser_support mt_xxl" data-tit="header">
        <ul>
          <li className="ie">9+</li>
          <li className="edge">지원</li>
          <li className="chrome">5.0</li>
          <li className="firefox">4.0</li>
          <li className="opera">11.1</li>
          <li className="safari">4.1</li>
        </ul>
      </aside>

      <figure className="img_figure mt_l">
        <img src={`${IMG.HTML}/03_html_01.png`} alt="header 요소" />
        <figcaption>header 요소</figcaption>
      </figure>
    </>
  );
}

export default HeaderElementPage;
