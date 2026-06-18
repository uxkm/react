import CodeBlock from "@/components/code/CodeBlock";
import { usePageMeta } from "@/components/common/PageMeta";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "main_element",
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
  title: "main element",
  description:
    "main 요소는 문서에서 고유하고 중심이 되는 주요 콘텐츠 영역을 정의하는 HTML 태그로, 헤더, 내비게이션, 사이드바, 푸터 등 반복되는 레이아웃 요소를 제외한 페이지의 핵심 내용을 담는 영역에 사용되며 문서 내에서 한 번만 사용해야 합니다. 이 페이지에서는 main 요소의 주요 역할 및 특징을 설명하고, main 요소의 용도와 구조적 위치에 따른 사용 예시를 소개합니다.",
  keyword: "Markup, HTML, HTML5, tag, elements, main",
};

function MainElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>&lt;main&gt;</code> 요소는{" "}
          <b>문서에서 핵심적인 주요 콘텐츠 영역을 나타내는 시맨틱 태그</b>로,
          <b>해당 페이지에서 고유하고 중심이 되는 내용을 포함합니다.</b>
          <br />
          헤더, 내비게이션, 사이드바, 푸터 등을 제외한 콘텐츠 영역에 해당하며,
          문서 안에 단 한 번만 사용해야 합니다.
          <code>&lt;main&gt;</code> 내부에는 여러 개의
          <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>,{" "}
          <code>&lt;aside&gt;</code>등을 포함할 수 있으며, 보조 정보가 아닌
          페이지 목적에 부합하는 콘텐츠를 담는 데 사용됩니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <ol className="mt_l ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>문서의 핵심 콘텐츠 표시</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;main&gt;</code>은 문서의 가장 중요한 콘텐츠를 담는
                영역으로, 문서의 주된 목적을 나타냅니다.
              </li>
              <li>
                예를 들어 블로그 게시물, 제품 설명, 뉴스 기사 등이 포함됩니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>SEO 및 접근성</strong>
            <ul className="dot_lst">
              <li>
                검색 엔진은 <code>&lt;main&gt;</code>을 통해 주요 콘텐츠를
                구분하며, SEO에 긍정적인 영향을 미칩니다.
              </li>
              <li>
                스크린 리더는 <code>&lt;main&gt;</code>을 통해 사용자가 주요
                콘텐츠를 빠르게 탐색할 수 있도록 지원합니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>페이지 내 한 번만 사용</strong>
            <p>
              <code>&lt;main&gt;</code>은 문서 내에서 중복 사용할 수 없으며,
              페이지당 하나만 사용해야 합니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>다른 의미론적 태그와의 관계</strong>
            <p>
              <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>,{" "}
              <code>&lt;aside&gt;</code>, <code>&lt;nav&gt;</code>와 같은
              반복적인 콘텐츠와는 분리되어야 하며, 문서 구조의 명확성을
              강화합니다.
            </p>
          </li>
        </ol>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          CSS 기본 값
        </h2>
        <p className="mt_l">
          <code>&lt;main&gt;</code> 요소는 기본적으로 블록 레벨 요소입니다.
        </p>
        <CodeBlock title="main element CSS" className="mt_m" language="css">
          {`main {
  display: block;
}`}
        </CodeBlock>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          기본 문법
        </h2>
        <CodeBlock title="main element syntax" className="mt_l" language="html">
          {`<main>
  <!-- 주요 콘텐츠 -->
</main>`}
        </CodeBlock>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          속성
        </h2>
        <p className="mt_l">
          <code>&lt;main&gt;</code> 요소는 <b className="t_black">고유 속성</b>
          을 가지지 않으며,
          <mark>
            글로벌 속성(<code>class</code>, <code>id</code>, <code>style</code>,{" "}
            <code>aria-*</code>, <code>data-*</code> 등)만 사용할 수 있습니다.
          </mark>
        </p>
        <CodeBlock title="main element attr" className="mt_m" language="html">
          {`<main id="main-content" class="content-area" role="main">
  <!-- 주요 콘텐츠 -->
</main>`}
        </CodeBlock>
      </section>
      <section className="view_editor indent mt_xxl">
        <h2 className="ml_mn ve_tit">예제</h2>
        <article className="mt_l indent">
          <h3 className="ml_mn">단일 페이지의 주요 콘텐츠</h3>
          <CodeBlock title="main ex" className="mt_m" language="html">
            {`<main>
  <h1>회사 소개</h1>
  <p>우리는 혁신적인 기술로 세상을 변화시키고 있습니다.</p>
</main>`}
          </CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">블로그 게시물</h3>
          <CodeBlock title="blog main" className="mt_m" language="html">
            {`<main>
  <article>
    <h1>HTML5의 장점</h1>
    <p>HTML5는 풍부한 의미론적 태그와 새로운 기능을 제공합니다.</p>
  </article>
</main>`}
          </CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">쇼핑몰 웹사이트의 주요 상품 목록</h3>
          <CodeBlock title="shopping main" className="mt_m" language="html">
            {`<main>
  <section>
    <h2>인기 상품</h2>
    <ul>
      <li>상품 1</li>
      <li>상품 2</li>
      <li>상품 3</li>
    </ul>
  </section>
</main>`}
          </CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">접근성을 고려한 주요 콘텐츠</h3>
          <CodeBlock title="a11y main" className="mt_m" language="html">
            {`<main aria-labelledby="main-title">
  <h1 id="main-title">주요 콘텐츠</h1>
  <p>이 페이지는 HTML5의 주요 기능과 태그를 다룹니다.</p>
</main>`}
          </CodeBlock>
        </article>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주의사항
        </h2>
        <p className="mt_l">
          <code>&lt;main&gt;</code> 요소는 문서의 주된 내용을 정의하기 위해
          사용되며, 다른 영역(헤더, 푸터, 사이드바 등)과 중복되지 않도록 한 번만
          사용해야 합니다.
          <br />
          또한, 주요 콘텐츠를 나타내지 않는 경우 <code>&lt;main&gt;</code>{" "}
          요소를 사용하지 말고, 다른 적절한 의미론적 태그나{" "}
          <code>&lt;div&gt;</code>를 사용하세요.
        </p>
      </section>

      <aside className="browser_support mt_xxl" data-tit="main">
        <ul>
          <li className="ie false">지원안함</li>
          <li className="edge">12.0</li>
          <li className="chrome">26.0</li>
          <li className="firefox">21.0</li>
          <li className="opera">16.0</li>
          <li className="safari">7.0</li>
        </ul>
      </aside>
      <figure className="img_figure mt_l">
        <img src={`${IMG.HTML}/04_html_01.png`} alt="main 요소" />
        <figcaption>main 요소</figcaption>
      </figure>
    </>
  );
}

export default MainElementPage;
