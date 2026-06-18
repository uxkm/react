import CodeBlock from "@/components/code/CodeBlock";
import { usePageMeta } from "@/components/common/PageMeta";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "p_element",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: false,
  bottomEditor: true,
};

const PAGE_DATA = {
  title: "p element",
  description:
    "p 요소는 HTML 문서에서 문단(단락)을 표현하기 위한 태그로, 하나의 주제나 생각을 담은 문장의 묶음을 구조적으로 구분할 때 사용되며 기본적으로 앞뒤에 줄바꿈이 적용되어 문서의 흐름을 시각적으로 정리합니다. 이 페이지에서는 p 요소의 주요 역할 및 특징을 설명하고, p 요소의 용도와 구조적 위치에 따른 사용 예시를 소개합니다.",
  keyword: "Markup, HTML, HTML5, tag, elements, p, 단락, 문단",
};

function PElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>&lt;p&gt;</code> 요소는{" "}
          <b>
            <strong>단락(paragraph)</strong>을 나타내는 시맨틱 태그
          </b>
          로,
          <b>하나의 주제나 생각을 표현하는 문장의 집합을 의미합니다.</b>
          <br />
          주로 본문 텍스트를 구성할 때 사용되며, 브라우저는{" "}
          <code>&lt;p&gt;</code> 요소를 기준으로 자동 줄바꿈과 여백을
          적용합니다. 또한, 텍스트를 논리적으로 그룹화하여 문서의 가독성을
          높이고, 자연스러운 텍스트 흐름을 형성하는 데 중요한 역할을 합니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <ol className="mt_l ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>단락 표현</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;p&gt;</code> 요소는 텍스트를 단락으로 구분하여 문서를
                체계적으로 구성합니다.
              </li>
              <li>일반적으로 문장이나 문장 그룹을 포함합니다.</li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>텍스트 콘텐츠의 기본 구성 요소</strong>
            <ul className="dot_lst">
              <li>문서에서 가장 기본적인 텍스트 블록으로 사용됩니다.</li>
              <li>
                여러 단락으로 구성된 글에서 각 단락을 구분하는 데 적합합니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>의미론적 태그</strong>
            <ul className="dot_lst">
              <li>
                텍스트를 의미론적으로 그룹화하여 브라우저와 검색 엔진이 콘텐츠
                구조를 이해하도록 돕습니다.
              </li>
              <li>
                스타일링 목적으로만 사용하지 말고, 문맥적으로 단락에 적합한
                곳에만 사용해야 합니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>기타 요소와의 관계</strong>
            <p>
              보통 헤딩 요소(<code>&lt;h1~h6&gt;</code>), 목록 요소(
              <code>&lt;ul&gt;</code>, <code>&lt;ol&gt;</code>,{" "}
              <code>&lt;li&gt;</code>), 링크 요소(<code>&lt;a&gt;</code>) 등과
              함께 사용됩니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>내부 요소 사용 제한</strong>
            <p className="notice_red mt_sm">중요합니다!</p>
            <ul className="dot_lst mt_sm">
              <li>
                <code>&lt;p&gt;</code> 요소는 블록 레벨 요소이지만, 그 안에 다른
                블록 레벨 요소(예: <code>&lt;div&gt;</code>,{" "}
                <code>&lt;header&gt;</code>,<code>&lt;footer&gt;</code>,{" "}
                <code>&lt;section&gt;</code> 등)를 포함할 수 없습니다.
              </li>
              <li>
                <code>&lt;p&gt;</code> 요소 내에는 인라인 요소(예:{" "}
                <code>&lt;a&gt;</code>, <code>&lt;span&gt;</code>,
                <code>&lt;b&gt;</code>, <code>&lt;strong&gt;</code> 등)만
                포함하는 것이 규칙입니다.
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
          <code>&lt;p&gt;</code> 요소는 기본적으로 블록 레벨 요소로, 별도의
          CSS를 지정하지 않아도 아래와 같은 기본값이 적용됩니다.
        </p>
        <CodeBlock title="p element CSS" className="mt_m" language="css">
          {`p {
  display: block;
  margin-top: 1em;
  margin-bottom: 1em;
}`}
        </CodeBlock>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          기본 문법
        </h2>
        <CodeBlock title="p element syntax" className="mt_l" language="html">
          {`<p>
  <!-- 문단 내용 -->
</p>`}
        </CodeBlock>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          속성
        </h2>
        <p className="mt_l">
          <code>&lt;p&gt;</code> 요소는 <b className="t_black">고유 속성</b>을
          가지지 않으며,
          <mark>
            글로벌 속성(<code>class</code>, <code>id</code>, <code>style</code>,{" "}
            <code>aria-*</code>, <code>data-*</code> 등)만 사용할 수 있습니다.
          </mark>
        </p>
        <CodeBlock title="p element attr" className="mt_m" language="html">
          {`<p id="intro" class="text-paragraph" style="color: gray;">
  <!-- 문단 내용 -->
</p>`}
        </CodeBlock>
      </section>
      <section className="view_editor indent mt_xxl">
        <h2 className="ml_mn ve_tit">예제</h2>
        <article className="mt_l indent">
          <h3 className="ml_mn">기본 단락 사용</h3>
          <CodeBlock title="p ex" className="mt_m" language="html">
            {`<p>HTML은 웹 문서의 구조를 정의하는 마크업 언어입니다.</p>
<p>CSS는 스타일을 지정하고, JavaScript는 동작을 추가합니다.</p>`}
          </CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">강조와 링크가 포함된 단락</h3>
          <CodeBlock
            title="with emphasis and a link"
            className="mt_m"
            language="html"
          >
            {`<p>
  HTML5는 <strong>의미론적 태그</strong>와 같은 새로운 기능을 도입했습니다.
  자세한 내용은 <a href="https://developer.mozilla.org">MDN 웹 문서</a>를 참조하세요.
</p>`}
          </CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">접근성을 고려한 단락</h3>
          <p className="mt_ms">
            <code>aria-live</code> 속성을 추가하여 이 단락의 콘텐츠가 변경될 때
            스크린 리더가 알림을 제공합니다. 동적으로 업데이트되는 텍스트에
            적합합니다.
          </p>
          <CodeBlock title="a11y p" className="mt_m" language="html">
            {`<p aria-live="polite">
  현재 페이지는 최신 정보로 자동 업데이트됩니다.
</p>`}
          </CodeBlock>
        </article>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주의사항
        </h2>
        <p className="mt_l">
          <mark>
            <code>&lt;p&gt;</code> 요소는 블록 레벨 요소이지만, 가장 기본적인
            텍스트 블록으로 문단을 구분하는 데 사용되어야 하며, 페이지의 구조적
            레이아웃을 위한 용도로 사용해서는 안 됩니다.
          </mark>
          <br />
          따라서 전체 레이아웃을 구성하는 용도로는 적합하지 않으며, 구조적
          의미를 가지는 다른 요소들(예: <code>&lt;div&gt;</code>,{" "}
          <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code> 등)을
          사용해야 합니다.
        </p>
      </section>

      <aside className="browser_support mt_xxl" data-tit="p">
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
        <img src={`${IMG.HTML}/04_html_02.png`} alt="p 요소" />
        <figcaption>p 요소</figcaption>
      </figure>
    </>
  );
}

export default PElementPage;
