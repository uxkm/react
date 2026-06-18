import { Suspense, lazy } from "react";
import { usePageMeta } from "@/components/common/PageMeta";
import { IMG } from "@/config/path";
import CodeBlock from "@/components/code/CodeBlock";

const PAGE_LAYOUT = {
  mainClass: "heading_element",
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
  title: "heading(h1~h6) element",
  description:
    "heading 요소는 문서나 섹션의 제목을 나타내는 HTML 태그로, h1부터 h6까지 총 6단계의 계층 구조를 가지며 h1이 가장 높은 수준의 제목이고 숫자가 커질수록 중요도는 낮아집니다. 이 페이지에서는 heading 요소의 주요 역할 및 특징을 설명하고, h1부터 h6까지의 용도와 올바른 구조적 사용 예시를 소개합니다.",
  keyword: "Markup, HTML, tag, elements, heading, h1, h2, h3, h4, h5, h6",
};

const UkEditorTarget = lazy(() => import("@/components/code/UkEditorTarget"));

function EditorFallback({ minHeightClass = "min_height_400" }) {
  return <div className={`uk_editor ${minHeightClass}`} aria-hidden />;
}

function HeadingElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <b>heading 요소는 문서나 섹션의 제목을 나타내는 시맨틱 태그</b>로,
          <b>
            <code className="weight-600">&lt;h1&gt;</code>이 가장 높은 수준의
            제목이며 <code className="weight-600">&lt;h6&gt;</code>로 갈수록
            단계가 낮아집니다.
          </b>
          <br />
          heading 요소는 문서의 구조를 계층적으로 표현하며, 검색 엔진과
          보조기기에서도 중요한 의미를 갖습니다. 시각적인 크기보다 문서의 의미와
          구조를 정의하는 용도로 사용해야 하며, 제목의 순서는 논리적 구조에 따라
          계층적으로 구성하는 것이 좋습니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <p className="mt_l">
          헤딩 요소는 웹 페이지의 콘텐츠를 논리적으로 구분하고, 사용자가 정보를
          쉽게 이해할 수 있도록 돕는 중요한 역할을 합니다. 웹 페이지에서 헤딩은
          문서 구조를 계층적으로 정의하며, 콘텐츠의 중요도에 따라 다양한 수준의
          제목을 제공합니다.
        </p>
        <ol className="mt_m ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>중요도</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;h1&gt;</code>: 가장 중요한 제목으로, 페이지의 주제를
                나타냅니다. 일반적으로 한 페이지에 하나만 사용하며, 페이지의
                핵심 주제를 설명합니다.
              </li>
              <li>
                <code>&lt;h2&gt;</code>: 두 번째로 중요한 제목으로, 페이지 내
                주요 섹션을 나타냅니다.
              </li>
              <li>
                <code>&lt;h3&gt;</code> ~ <code>&lt;h6&gt;</code>: 점차적으로 덜
                중요한 제목으로, <code>&lt;h2&gt;</code>나 그 이상의 제목 밑에
                존재하는 하위 섹션들을 정의합니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>사용 규칙</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;h1&gt;</code>은 한 문서에서{" "}
                <mark>하나만 사용하는 것이 권장</mark>됩니다.
              </li>
              <li>
                <mark>
                  헤딩의 순서는 논리적이어야 하며, 순서를 건너뛰지 않도록
                  주의해야 합니다.
                </mark>
                <br />
                예를 들어, <code>&lt;h1&gt;</code> 뒤에 <code>&lt;h3&gt;</code>
                를 바로 사용하지 않도록 합니다.
              </li>
              <li>
                각 헤딩의 역할을 명확히 하여, 페이지의 주제나 섹션을 효과적으로
                전달할 수 있도록 합니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>SEO(검색 엔진 최적화) 효과</strong>
            <p>
              검색 엔진은 헤딩 구조를 통해 페이지의 주요 내용을 분석하고
              인덱싱합니다. 올바른 헤딩 구조는 검색 엔진 최적화(SEO)에 긍정적인
              영향을 주며, 페이지의 핵심 정보를 효과적으로 전달하여 검색
              결과에서 더 높은 노출을 가능하게 합니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>접근성 강화</strong>
            <p>
              스크린 리더 등 보조 기술은 헤딩을 통해 문서 구조를 파악하고 개요를
              제공합니다. 논리적인 헤딩 사용은 시각적 접근이 어려운 사용자도
              콘텐츠를 쉽게 탐색할 수 있도록 돕고, 올바른 헤딩 계층은 중요한
              정보에 빠르게 접근할 수 있게 합니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>가독성 향상</strong>
            <p>
              헤딩은 시각적으로 강조되어 가독성을 향상시키며, 사용자가 페이지의
              주요 부분을 빠르게 파악해 콘텐츠를 효과적으로 소비할 수 있도록
              돕습니다.
            </p>
          </li>
        </ol>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          CSS 기본 값
        </h2>
        <p className="mt_l">
          헤딩 요소는 기본적으로 블록 레벨 요소로, 별도의 CSS를 지정하지 않아도{" "}
          <code>display: block;</code>이 적용되며,
          <br />
          크롬 브라우저 기준 <code>&lt;h1~3&gt;</code>까지 기본 스타일(User
          Agent Stylesheet)은 다음과 같습니다. (<code>&lt;h4~6&gt;</code> 생략)
        </p>
        <CodeBlock title="heading element CSS" className="mt_m" language="css">
          {`h1 {
  display: block;
  font-size: 2em;
  font-weight: bold;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
}

h2 {
  display: block;
  font-size: 1.5em;
  font-weight: bold;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
}

h3 {
  display: block;
  font-size: 1.17em;
  font-weight: bold;
  margin-block-start: 1em;
  margin-block-end: 1em;
}`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          기본 문법
        </h2>
        <Suspense fallback={<EditorFallback />}>
          <UkEditorTarget
            target="html/03-sections/3.2.heading_element1.html"
            className="mt_l min_height_400 mb_result_height_400"
            mode="htmlmixed"
            browser="default"
            theme="moxer"
            title="heading element 기본 문법"
            minHeight="400px"
            result
          />
        </Suspense>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          속성
        </h2>
        <p className="mt_l">
          헤딩 요소는 <b className="t_black">고유 속성</b>을 가지지 않으며,{" "}
          <mark>
            글로벌 속성(<code>class</code>, <code>id</code>, <code>style</code>,{" "}
            <code>aria-*</code>, <code>data-*</code> 등)만 사용할 수 있습니다.
          </mark>
        </p>
        <CodeBlock
          title="heading element attr"
          className="mt_m"
          language="html"
        >
          {`<h1 id="main-title" class="highlight" aria-label="페이지 주요 제목">
  <!-- 페이지 주요 제목 -->
</h1>`}
        </CodeBlock>
      </section>

      <section className="view_editor indent mt_xxl">
        <h2 className="ml_mn ve_tit">예제</h2>

        <article className="mt_l indent">
          <h3 className="ml_mn">문서의 주요 제목으로 사용</h3>
          <CodeBlock title="main heading" className="mt_m" language="html">
            {`<h1>Welcome to My Blog</h1>
<p>This is a blog about web development and design.</p>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">섹션별 헤딩 사용</h3>
          <CodeBlock title="section heading" className="mt_m" language="html">
            {`<section>
  <h2>About Me</h2>
  <p>I am a web developer with a passion for design and coding.</p>
</section>
<section>
  <h2>Projects</h2>
  <h3>Portfolio Website</h3>
  <p>A personal portfolio showcasing my work.</p>
  <h3>E-commerce Site</h3>
  <p>An online store built with modern web technologies.</p>
</section>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">스타일링이 적용된 헤딩</h3>
          <Suspense fallback={<EditorFallback />}>
            <UkEditorTarget
              target="html/03-sections/3.2.heading_element2.html"
              className="mt_m min_height_400"
              mode="htmlmixed"
              browser="default"
              theme="moxer"
              title="스타일링이 적용된 헤딩"
              minHeight="400px"
              result
            />
          </Suspense>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">블로그 포스트의 제목과 부제목</h3>
          <CodeBlock title="blog heading" className="mt_m" language="html">
            {`<article>
  <h1>Understanding JavaScript Closures</h1>
  <h2>What is a Closure?</h2>
  <p>A closure is a function that has access to its own scope...</p>
</article>`}
          </CodeBlock>
        </article>
      </section>

      <aside className="browser_support mt_xxl" data-tit="h1~h6">
        <ul>
          <li className="ie">지원</li>
          <li className="edge">지원</li>
          <li className="chrome">지원</li>
          <li className="firefox">1.0</li>
          <li className="opera">지원</li>
          <li className="safari">지원</li>
        </ul>
      </aside>
      <figure className="img_figure mt_l">
        <img src={`${IMG.HTML}/03_html_02.png`} alt="heading 요소" />
        <figcaption>heading 요소</figcaption>
      </figure>
    </>
  );
}

export default HeadingElementPage;
