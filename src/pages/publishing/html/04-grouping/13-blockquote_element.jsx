import CodeBlock from "@/components/code/CodeBlock";
import { usePageMeta } from "@/components/common/PageMeta";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "blockquote_element",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
  bottomEditor: true,
};

const PAGE_DATA = {
  title: "blockquote element",
  description:
    "blockquote 요소는 HTML 문서에서 다른 사람의 말이나 글 등 외부 출처에서 인용한 긴 텍스트를 표시할 때 사용하는 태그로, 브라우저는 기본적으로 들여쓰기를 적용해 인용문임을 시각적으로 구분하며 cite 속성을 통해 인용 출처를 명시할 수도 있습니다. 이 페이지에서는 blockquote 요소의 주요 역할 및 특징을 설명하고, blockquote 요소의 용도와 구조적 위치에 따른 사용 예시를 소개합니다.",
  keyword:
    "Markup, HTML, tag, elements, header, blockquote, block quotation, 인용문",
};

function BlockquoteElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>&lt;blockquote&gt;</code> 요소는{" "}
          <b>
            다른 사람의 말이나 글 등 인용문을 표시할 때 사용하는 시맨틱 태그
          </b>
          로,{" "}
          <b>문서 외부에서 가져온 긴 인용 콘텐츠를 구분하는 데 사용됩니다.</b>
          <br />
          기본적으로 들여쓰기가 적용되어 시각적으로 인용이라는 의미를 강조하며,
          출처가 명확할 경우 <code>cite</code> 속성을 통해 원본 링크를 명시할
          수도 있습니다. 짧은 인라인 인용에는 <code>&lt;q&gt;</code> 요소가
          적합하며, <code>&lt;blockquote&gt;</code>는 일반적으로{" "}
          <b>단락 수준의 인용에 사용</b>됩니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <ol className="mt_l ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>긴 인용문 표현</strong>
            <ul className="dot_lst">
              <li>
                문서에서 긴 인용문을 강조하거나 독립적으로 표현할 때 사용합니다.
              </li>
              <li>
                짧은 인용문에는 <code>&lt;q&gt;</code> 요소를 사용하는 것이 더
                적합합니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>독립적인 블록 요소</strong>
            <p>
              <code>&lt;blockquote&gt;</code>는 블록 레벨 요소로, 인용된
              콘텐츠를 문서의 다른 텍스트와 시각적으로 구분합니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>출처 정보 제공</strong>
            <ul className="dot_lst">
              <li>
                cite 속성을 사용해 인용문의 출처를 URL로 지정할 수 있습니다.
              </li>
              <li>
                출처를 명확히 하기 위해 <code>&lt;footer&gt;</code>와 함께
                사용할 수도 있습니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>기본 스타일</strong>
            <p>브라우저에서 기본적으로 들여쓰기가 적용됩니다.</p>
          </li>
        </ol>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          CSS 기본 값
        </h2>
        <p className="mt_l">
          <code>&lt;blockquote&gt;</code> 요소는 기본적으로 블록 레벨 요소이며,
          별도의 CSS를 지정하지 않아도 아래와 같은 기본값이 적용됩니다.
        </p>
        <CodeBlock
          title="blockquote element CSS"
          className="mt_m"
          language="css"
        >
          {`blockquote {
  display: block;
  margin-left: 40px; /* 기본적으로 들여쓰기가 적용됩니다. */
  margin-right: 40px; /* 기본적으로 들여쓰기가 적용됩니다. */
}`}
        </CodeBlock>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          기본 문법
        </h2>
        <CodeBlock
          title="blockquote element syntax"
          className="mt_l"
          language="html"
        >
          {`<blockquote>
  이 문장은 긴 인용문을 나타냅니다.
</blockquote>`}
        </CodeBlock>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          속성
        </h2>
        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [cite]
            <i className="attr_optional">선택 사항</i>
            <span className="t_blue el_inline_block">
              &lt;blockquote cite="URL"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            인용문의 출처를 URL로 지정합니다. 브라우저에는 표시되지 않지만
            메타데이터로 사용됩니다.
          </p>
          <CodeBlock
            title="blockquote attr [cite]"
            className="mt_m"
            language="html"
          >
            {`<blockquote cite="https://example.com">
  이 문장은 긴 인용문을 나타냅니다.
</blockquote>`}
          </CodeBlock>
        </article>
      </section>
      <section className="view_editor indent mt_xxl">
        <h2 className="ml_mn ve_tit">예제</h2>
        <article className="mt_l indent">
          <h3 className="ml_mn">기본 인용문</h3>
          <CodeBlock title="기본 인용문" className="mt_m" language="html">
            {`<blockquote>
  "웹 개발은 현대 사회의 중요한 기술 중 하나입니다."
</blockquote>`}
          </CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">출처가 포함된 인용문</h3>
          <CodeBlock
            title="출처가 포함된 인용문"
            className="mt_m"
            language="html"
          >
            {`<blockquote cite="https://example.com">
  "HTML은 웹 페이지의 구조를 정의합니다."
</blockquote>`}
          </CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">출처를 명시한 인용문</h3>
          <CodeBlock
            title="출처를 명시한 인용문"
            className="mt_m"
            language="html"
          >
            {`<blockquote>
  "CSS는 웹 페이지의 스타일을 지정하는 언어입니다."
  <footer>- 출처: <cite><a href="https://example.com">example.com</a></cite></footer>
</blockquote>`}
          </CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">접근성을 고려한 인용문</h3>
          <CodeBlock
            title="접근성을 고려한 인용문"
            className="mt_m"
            language="html"
          >
            {`<blockquote aria-label="웹 개발에 대한 중요한 문구">
  "웹 기술은 우리의 일상과 사회를 변화시키는 핵심 요소입니다."
</blockquote>`}
          </CodeBlock>
        </article>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주의사항
        </h2>
        <ul className="dot_lst mt_l">
          <li>
            <code>cite</code> 속성은 선택적이지만, 출처를 명확히 제공하는 것이
            좋습니다. 이는 인용의 정확성을 높이며, 신뢰성을 부여합니다.
          </li>
          <li>
            인용문을 작성할 때, 다른 사람의 말을 그대로 가져오는 경우에는 반드시
            출처를 명시하는 것이 중요합니다.
          </li>
        </ul>
      </section>

      <aside className="browser_support mt_xxl" data-tit="blockquote">
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
        <img src={IMG.HTML + "/04_html_13.png"} alt="blockquote 요소" />
        <figcaption>blockquote 요소</figcaption>
      </figure>
    </>
  );
}

export default BlockquoteElementPage;
