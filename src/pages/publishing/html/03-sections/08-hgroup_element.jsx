import CodeBlock from "@/components/code/CodeBlock";
import { usePageMeta } from "@/components/common/PageMeta";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "hgroup_element",
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
  title: "hgroup element",
  description:
    "hgroup 요소는 제목과 부제목을 함께 묶어 하나의 논리적인 제목 그룹을 구성하는 HTML 태그로, h1부터 h6까지의 heading 요소를 그룹화하여 주제와 그에 대한 설명을 함께 표현할 때 사용됩니다. 이 페이지에서는 hgroup 요소의 주요 역할 및 특징을 설명하고, hgroup 요소의 용도와 구조적 위치에 따른 사용 예시를 소개합니다.",
  keyword: "Markup, HTML, HTML5, tag, elements, hgroup",
};

function HgroupElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>&lt;hgroup&gt;</code> 요소는{" "}
          <b>
            하나의 제목 그룹을 나타내는 시맨틱 태그로, 주제의 제목과 그에 대한
            부제목을 논리적으로 묶어줄 때 사용
          </b>
          됩니다.
          <br />
          <code>&lt;h1&gt; ~ &lt;h6&gt;</code> 요소들을 포함하며, 이들을 단일한
          헤딩 구조로 인식하게 해줍니다. 예를 들어 메인 제목과 설명 또는 보조
          제목을 묶을 때 사용되며, 이 그룹은 가장 높은 수준의 제목으로
          간주됩니다.
        </p>
        <p className="mt_s">
          <mark>
            이 요소는 HTML5에서 소개되었으나, 현재는 사용이 권장되지 않으며 대신
            의미론적 마크업과 스타일링으로 대체하는 것이 일반적입니다.
            <br />
            또한 일부 스크린 리더나 브라우저에서는 완벽하게 지원되지 않을 수
            있어 사용 시 주의가 필요합니다.
          </mark>
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <ol className="mt_l ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>여러 제목을 하나의 논리적 단위로 묶기</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;hgroup&gt;</code>은 주요 제목과 부제목을 포함하는
                그룹을 정의합니다.
              </li>
              <li>
                <code>&lt;hgroup&gt;</code> 내의 제목들은 하나의 제목처럼
                간주됩니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>HTML5 의미론적 구조</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;hgroup&gt;</code>은 문서의 계층적 구조를 더 명확히
                하기 위해 도입되었습니다.
              </li>
              <li>
                <mark>
                  하지만 실제로는 사용 빈도가 낮고, 접근성과 브라우저 호환성
                  문제로 권장되지 않습니다.
                </mark>
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>대체 방법</strong>
            <p>
              <code>&lt;div&gt;</code>나 <code>&lt;header&gt;</code> 요소를
              사용하고 제목과 부제목을 개별적으로 정의하는 것이 현재 표준 접근
              방식입니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>지원 및 접근성 문제</strong>
            <ul className="dot_lst">
              <li>
                <mark>
                  스크린 리더와 일부 브라우저에서 <code>&lt;hgroup&gt;</code>의
                  의미를 올바르게 해석하지 못할 수 있습니다.
                </mark>
              </li>
              <li>
                <mark>
                  W3C는 <code>&lt;hgroup&gt;</code> 요소의 사용을 권장하지
                  않습니다.
                </mark>
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
          <code>&lt;hgroup&gt;</code> 요소는 기본적으로 블록 레벨 요소입니다.
        </p>
        <CodeBlock title="hgroup element CSS" className="mt_m" language="css">
          {`hgroup {
  display: block;
}`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          기본 문법
        </h2>
        <CodeBlock
          title="hgroup element syntax"
          className="mt_l"
          language="html"
        >
          {`<hgroup>
  <h1>주제목</h1>
  <h2>부제목</h2>
</hgroup>`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          속성
        </h2>
        <p className="mt_l">
          <code>&lt;hgroup&gt;</code> 요소는{" "}
          <b className="t_black">고유 속성</b>을 가지지 않으며,{" "}
          <mark>
            글로벌 속성(<code>class</code>, <code>id</code>, <code>style</code>,{" "}
            <code>aria-*</code>, <code>data-*</code> 등)만 사용할 수 있습니다.
          </mark>
        </p>
        <CodeBlock title="hgroup element attr" className="mt_m" language="html">
          {`<!-- hgroup -->
<hgroup id="main-heading" class="heading-group">
  <h1>주제목</h1>
  <h2>부제목</h2>
</hgroup>`}
        </CodeBlock>
      </section>

      <section className="view_editor indent mt_xxl">
        <h2 className="ml_mn ve_tit">예제</h2>

        <article className="mt_l indent">
          <h3 className="ml_mn">간단한 제목 그룹화 (권장하지 않음)</h3>
          <CodeBlock title="hgroup ex" className="mt_m" language="html">
            {`<hgroup>
  <h1>웹 개발 가이드</h1>
  <h2>HTML, CSS, 그리고 JavaScript 배우기</h2>
</hgroup>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">접근성을 고려하지 않은 예제 (권장하지 않음)</h3>
          <p className="mt_m">
            이 예제는 첫 번째 예제와 마찬가지로 스크린 리더에서 부적절하게
            처리될 수 있습니다.
          </p>
          <CodeBlock title="not a11y" className="mt_m" language="html">
            {`<hgroup>
  <h1>제품 소개</h1>
  <h2>최신 기술을 탑재한 스마트폰</h2>
</hgroup>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">접근성을 고려한 대체 방식</h3>
          <p className="mt_m">
            <code>&lt;header&gt;</code>와 함께 부제목을 <code>&lt;p&gt;</code>{" "}
            태그로 처리하여 의미를 명확히 합니다. 또한, 부제목에 스타일을
            지정하여 시각적으로 구분할 수 있게 합니다.
          </p>
          <CodeBlock title="a11y methods" className="mt_m" language="html">
            {`<header>
  <h1>제품 소개</h1>
  <p class="subtitle">최신 기술을 탑재한 스마트폰</p>
</header>`}
          </CodeBlock>
        </article>
      </section>

      <aside className="browser_support mt_xxl" data-tit="hgroup">
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
        <img src={`${IMG.HTML}/03_html_08.png`} alt="hgroup 요소" />
        <figcaption>hgroup 요소</figcaption>
      </figure>
    </>
  );
}

export default HgroupElementPage;
