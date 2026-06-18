import { usePageMeta } from "@/components/common/PageMeta";
import { IMG } from "@/config/path";
import CodeBlock from "@/components/code/CodeBlock";

const PAGE_LAYOUT = {
  mainClass: "section_element",
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
  title: "section element",
  description:
    "section 요소는 문서 내에서 독립적인 주제나 콘텐츠 묶음을 나타내는 HTML 태그로, 보통 제목 요소와 함께 사용되어 문서의 의미 구조를 구분하고 논리적인 콘텐츠 흐름을 구성하는 데 사용됩니다. 이 페이지에서는 section 요소의 주요 역할 및 특징을 설명하고, section 요소의 용도와 구조적 위치에 따른 사용 예시를 소개합니다.",
  keyword: "Markup, HTML, HTML5, tag, elements, section",
};

function SectionElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>&lt;section&gt;</code> 요소는 HTML에서{" "}
          <b>문서의 특정 주제나 내용을 그룹화하는 시맨틱 태그</b>로 독립적인
          구획을 나타냅니다.
          <br />
          일반적으로 제목(<code>&lt;h1&gt;</code> ~ <code>&lt;h6&gt;</code>)과
          함께 사용되며 문서의 논리적 구조를 구성하고 주제별 내용을 명확히
          정의하는 데 도움을 줍니다. 또한 콘텐츠를 논리적으로 묶어 접근성을
          높이고 문서의 의미를 보다 체계적으로 전달하는 역할을 합니다.
        </p>
        <p className="mt_s">
          의미 없이 단순한 구획을 나눌 때는 <code>&lt;div&gt;</code>를 사용하는
          것이 더 적절합니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <ol className="mt_l ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>문서 구조화</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;section&gt;</code>은 관련된 콘텐츠를 하나의 섹션으로
                그룹화하여 문서 구조를 명확히 나타냅니다.
              </li>
              <li>
                각 <code>&lt;section&gt;</code>은 보통 제목(
                <code>&lt;h1~h6&gt;</code>)을 포함하며 독립 단위로 간주됩니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>시맨틱 의미 제공</strong>
            <p>
              검색 엔진과 보조 기술은 <code>&lt;section&gt;</code>을 통해 문서의
              주제나 내용을 더 잘 이해할 수 있습니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>중첩 가능</strong>
            <p>
              필요에 따라 <code>&lt;section&gt;</code> 안에 다른{" "}
              <code>&lt;section&gt;</code>을 중첩하여 사용할 수 있습니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>사용 시 주의점</strong>
            <ul className="dot_lst">
              <li>
                논리적인 그룹화가 필요하지 않은 경우, <code>&lt;div&gt;</code>를
                대신 사용할 수 있습니다.
              </li>
              <li>단순한 스타일링 목적으로는 사용하지 않는 것이 좋습니다.</li>
            </ul>
          </li>
        </ol>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          CSS 기본 값
        </h2>
        <p className="mt_l">
          <code>&lt;section&gt;</code> 요소는 기본적으로 블록 레벨 요소입니다.
        </p>
        <CodeBlock title="section element CSS" className="mt_m" language="css">
          {`section {
  display: block;
}`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          기본 문법
        </h2>
        <CodeBlock
          title="section element syntax"
          className="mt_l"
          language="html"
        >
          {`<section>
  <!-- 섹션 콘텐츠 -->
</section>`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          속성
        </h2>
        <p className="mt_l">
          <code>&lt;section&gt;</code> 요소는{" "}
          <b className="t_black">고유 속성</b>을 가지지 않으며,{" "}
          <mark>
            글로벌 속성(<code>class</code>, <code>id</code>, <code>style</code>,{" "}
            <code>aria-*</code>, <code>data-*</code> 등)만 사용할 수 있습니다.
          </mark>
        </p>
        <CodeBlock
          title="section element attr"
          className="mt_m"
          language="html"
        >
          {`<section id="about-us" class="section-highlight" role="region">
  <!-- 섹션 콘텐츠 -->
</section>`}
        </CodeBlock>
      </section>

      <section className="view_editor indent mt_xxl">
        <h2 className="ml_mn ve_tit">예제</h2>
        <article className="mt_l indent">
          <h3 className="ml_mn">기사에서 주제별 섹션</h3>
          <CodeBlock title="article section" className="mt_m" language="html">
            {`<section>
  <h2>회사 소개</h2>
  <p>우리는 고객 중심의 혁신적인 기술을 제공합니다.</p>
</section>`}
          </CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">블로그 포스트에서 섹션 나누기</h3>
          <CodeBlock title="blog section" className="mt_m" language="html">
            {`<section>
  <h2>서론</h2>
  <p>이 글에서는 HTML 섹션 요소에 대해 설명합니다.</p>
</section>
<section>
  <h2>본론</h2>
  <p>섹션 요소는 문서의 구조를 논리적으로 나눕니다.</p>
</section>
<section>
  <h2>결론</h2>
  <p>섹션 요소를 사용하면 SEO와 접근성이 개선됩니다.</p>
</section>`}
          </CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">FAQ 섹션</h3>
          <CodeBlock title="FAQ section" className="mt_m" language="html">
            {`<section>
  <h2>자주 묻는 질문</h2>
  <p><strong>Q:</strong> 섹션 요소는 어디에 사용하나요?</p>
  <p><strong>A:</strong> 문서의 주제를 그룹화할 때 사용합니다.</p>
</section>`}
          </CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">중첩된 섹션 구조</h3>
          <CodeBlock
            title="nested section structure"
            className="mt_m"
            language="html"
          >
            {`<section>
  <h2>회사 소개</h2>
  <p>우리 회사는 혁신적인 기술을 제공합니다.</p>
  <section>
    <h3>우리의 사명</h3>
    <p>지속 가능한 기술로 더 나은 미래를 만듭니다.</p>
  </section>
</section>`}
          </CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">접근성을 고려한 섹션 사용</h3>
          <CodeBlock title="a11y section" className="mt_m" language="html">
            {`<section id="main-content" aria-labelledby="main-title">
  <h1 id="main-title">주요 콘텐츠</h1>
  <p>이 섹션은 페이지의 주요 콘텐츠를 포함합니다.</p>
</section>`}
          </CodeBlock>
        </article>
      </section>

      <aside className="browser_support mt_xxl" data-tit="section">
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
        <img src={`${IMG.HTML}/03_html_03.png`} alt="section 요소" />
        <figcaption>section 요소</figcaption>
      </figure>
    </>
  );
}

export default SectionElementPage;
