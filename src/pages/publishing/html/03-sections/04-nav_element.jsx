import { Suspense, lazy } from "react";
import CodeBlock from "@/components/code/CodeBlock";
import { usePageMeta } from "@/components/common/PageMeta";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "nav_element",
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
  title: "nav element",
  description:
    "nav 요소는 문서 내에서 주요 탐색 링크 영역을 정의하는 HTML 태그로, 사이트 내 주요 메뉴, 목차, 페이지 내 이동 링크 등 내비게이션 목적의 링크 그룹을 포함하며 헤더, 사이드바, 푸터 등 다양한 위치에 사용됩니다. 이 페이지에서는 nav 요소의 주요 역할 및 특징을 설명하고, nav 요소의 용도와 구조적 위치에 따른 사용 예시를 소개합니다.",
  keyword: "Markup, HTML, HTML5, tag, elements, nav, navigation",
};

const UkEditorTarget = lazy(() => import("@/components/code/UkEditorTarget"));

function EditorFallback() {
  return <div className="uk_editor min_height_400" aria-hidden />;
}

function NavElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>&lt;nav&gt;</code> 요소는{" "}
          <b>문서 내에서 주요 탐색 링크 영역을 나타내는 시맨틱 태그</b>로,{" "}
          <b>
            사용자에게 페이지 간 이동 또는 섹션 내 이동 경로를 안내하는 역할
          </b>
          을 합니다.
          <br />
          보통 사이트 메뉴, 목차, 페이지 내 목차(jump link) 등에 사용되며,
          문서의 다른 링크들과 구분되는 내비게이션 목적의 링크 묶음을
          정의합니다.
          <br />
          문서 안에 여러 개의 <code>&lt;nav&gt;</code>를 사용할 수 있지만, 각
          영역은 명확한 탐색 목적을 가져야 합니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <ol className="mt_l ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>탐색 링크 그룹화</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;nav&gt;</code>는 페이지의 주요 탐색 영역(예: 헤더
                메뉴, 푸터 링크)을 나타냅니다.
              </li>
              <li>
                관련 없는 링크 모음(예: 콘텐츠 내부의 단순 참조 링크)에는
                사용하지 않습니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>접근성과 SEO</strong>
            <ul className="dot_lst">
              <li>
                스크린 리더와 검색 엔진은 <code>&lt;nav&gt;</code> 요소를 통해
                탐색 구조를 이해합니다.
              </li>
              <li>
                여러 탐색 영역이 있는 경우, <code>&lt;aria-label&gt;</code>이나{" "}
                <code>&lt;aria-labelledby&gt;</code>를 사용하여 탐색 영역의
                목적을 명확히 할 수 있습니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>다른 요소와의 관계</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>와 함께
                사용되어 구조적이고 의미론적인 웹 페이지를 구성합니다.
              </li>
              <li>
                <code>&lt;nav&gt;</code>는 <code>&lt;header&gt;</code> 밖에서
                독립적으로 사용될 수 있습니다.
              </li>
            </ul>
          </li>
        </ol>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          CSS 기본 값
        </h2>
        <p className="mt_l">
          <code>&lt;nav&gt;</code> 요소는 기본적으로 블록 레벨 요소입니다.
        </p>
        <CodeBlock title="nav element CSS" className="mt_m" language="css">
          {`nav {
  display: block;
}`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          기본 문법
        </h2>
        <CodeBlock title="nav element syntax" className="mt_l" language="html">
          {`<nav>
  <!-- 네비게이션 링크들 -->
</nav>`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          속성
        </h2>
        <p className="mt_l">
          <code>&lt;nav&gt;</code> 요소는 <b className="t_black">고유 속성</b>을
          가지지 않으며,{" "}
          <mark>
            글로벌 속성(<code>class</code>, <code>id</code>, <code>style</code>,{" "}
            <code>aria-*</code>, <code>data-*</code> 등)만 사용할 수 있습니다.
          </mark>
        </p>
        <CodeBlock title="nav element attr" className="mt_m" language="html">
          {`<nav id="main-navigation" class="navigation-menu" role="navigation">
  <!-- 네비게이션 링크들 -->
</nav>`}
        </CodeBlock>
      </section>

      <section className="view_editor indent mt_xxl">
        <h2 className="ml_mn ve_tit">예제</h2>

        <article className="mt_l indent">
          <h3 className="ml_mn">기본 네비게이션 메뉴</h3>
          <CodeBlock title="default nav" className="mt_m" language="html">
            {`<nav>
  <ul>
    <li><a href="#home">홈</a></li>
    <li><a href="#about">소개</a></li>
    <li><a href="#services">서비스</a></li>
    <li><a href="#contact">연락처</a></li>
  </ul>
</nav>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">푸터 네비게이션 메뉴</h3>
          <CodeBlock title="footer nav" className="mt_m" language="html">
            {`<footer>
  <nav>
    <ul>
      <li><a href="#privacy">개인정보 보호정책</a></li>
      <li><a href="#terms">이용 약관</a></li>
      <li><a href="#faq">자주 묻는 질문</a></li>
    </ul>
  </nav>
</footer>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">페이지 내 링크 네비게이션 (앵커 링크)</h3>
          <CodeBlock title="anchor links" className="mt_m" language="html">
            {`<nav>
  <ul>
    <li><a href="#section1">섹션 1</a></li>
    <li><a href="#section2">섹션 2</a></li>
    <li><a href="#section3">섹션 3</a></li>
  </ul>
</nav>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">모바일 네비게이션 (햄버거 메뉴)</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/03-sections/3.4.nav_element.html"
                className="min_height_400"
                mode="htmlmixed"
                browser="default"
                theme="ayu-mirage"
                title="mobile hamburger nav"
                minHeight="400px"
                result
              />
            </Suspense>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">접근성을 고려한 탐색 메뉴</h3>
          <p className="mt_m">
            <code>aria-labelledby</code>를 사용해 탐색 영역의 제목을 명확히
            지정하여 스크린 리더 사용자가 탐색 영역을 빠르게 식별할 수 있습니다.
          </p>
          <CodeBlock title="a11y nav" className="mt_m" language="html">
            {`<nav aria-labelledby="main-menu">
  <h2 id="main-menu">주요 메뉴</h2>
  <ul>
    <li><a href="/">홈</a></li>
    <li><a href="/services">서비스</a></li>
    <li><a href="/about">회사 소개</a></li>
    <li><a href="/contact">문의하기</a></li>
  </ul>
</nav>`}
          </CodeBlock>
        </article>
      </section>

      <aside className="browser_support mt_xxl" data-tit="nav">
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
        <img src={`${IMG.HTML}/03_html_04.png`} alt="nav 요소" />
        <figcaption>nav 요소</figcaption>
      </figure>
    </>
  );
}

export default NavElementPage;
