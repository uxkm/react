import { Suspense, lazy } from "react";
import CodeBlock from "@/components/code/CodeBlock";
import { usePageMeta } from "@/components/common/PageMeta";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "pre_element",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
  bottomEditor: true,
};

const PAGE_DATA = {
  title: "pre element",
  description:
    "pre 요소는 HTML 문서에서 공백, 줄바꿈, 들여쓰기 등 작성된 그대로의 서식을 유지한 텍스트를 표시하기 위한 태그로, 고정폭 글꼴로 렌더링되며 코드 블록, 시, ASCII 아트 등 형식이 중요한 콘텐츠를 표현할 때 유용하게 사용됩니다. 이 페이지에서는 pre 요소의 주요 역할 및 특징을 설명하고, pre 요소의 용도와 구조적 위치에 따른 사용 예시를 소개합니다.",
  keyword: "Markup, HTML, tag, elements, pre",
};

const UkEditorTarget = lazy(() => import("@/components/code/UkEditorTarget"));

function EditorFallback() {
  return <div className="uk_editor min_height_300" aria-hidden />;
}

function PreElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>&lt;pre&gt;</code> 요소는{" "}
          <strong>사전 서식(preformatted text)</strong>
          <b>을 유지하여 텍스트를 표시하는 시맨틱 태그</b>로,{" "}
          <b>
            공백, 줄바꿈, 들여쓰기 등 작성된 그대로의 형식을 반영하여
            출력됩니다.
          </b>
          <br />
          코드 블록, ASCII 아트, 시 구조 등{" "}
          <b>형식을 유지해야 하는 콘텐츠에 적합</b>하며, 내부 텍스트는
          기본적으로 고정폭 글꼴로 렌더링됩니다. HTML에서 자동 줄바꿈이 적용되지
          않고, 작성된 그대로의 레이아웃을 보여주고자 할 때 사용됩니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <ol className="mt_l ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>공백과 줄바꿈 유지</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;pre&gt;</code>는 입력된 텍스트의 공백과 줄바꿈을
                그대로 렌더링합니다.
              </li>
              <li>
                일반 HTML에서는 공백이 하나로 처리되지만,{" "}
                <code>&lt;pre&gt;</code>는 공백과 줄바꿈을 중요한 요소로
                간주합니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>고정폭 글꼴 사용</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;pre&gt;</code>는 브라우저에서 기본적으로 고정폭
                글꼴(예: Courier, Monospace)로 렌더링됩니다.
              </li>
              <li>코드나 데이터 출력처럼 공백이 중요한 콘텐츠에 적합합니다.</li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>내부 콘텐츠 포함 가능</strong>
            <p>
              <code>&lt;pre&gt;</code> 내부에는 텍스트와 함께{" "}
              <code>&lt;code&gt;</code>, <code>&lt;kbd&gt;</code>,{" "}
              <code>&lt;span&gt;</code> 같은 인라인 요소를 포함할 수 있지만,
              블록 요소는 포함할 수 없습니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>주요 사용 사례</strong>
            <p>
              코드 블록, 텍스트 파일 출력, ASCII 아트 등 공백과 줄바꿈이 중요한
              콘텐츠.
            </p>
          </li>
        </ol>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          CSS 기본 값
        </h2>
        <p className="mt_l">
          <code>&lt;pre&gt;</code> 요소는 기본적으로 블록 레벨 요소이며, 별도의
          CSS를 지정하지 않아도 아래와 같은 기본값이 적용됩니다.
        </p>
        <CodeBlock title="pre element CSS" className="mt_m" language="css">
          {`pre {
  display: block;
  font-family: monospace; /* 고정폭 글꼴 적용 */
  white-space: pre; /* 공백과 줄바꿈을 그대로 유지 */
}`}
        </CodeBlock>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          기본 문법
        </h2>
        <CodeBlock title="pre element syntax" className="mt_l" language="html">
          {`<pre>
  console.log("Hello, World!");
</pre>`}
        </CodeBlock>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          속성
        </h2>
        <p className="mt_l">
          <code>&lt;pre&gt;</code> 요소는 <b className="t_black">고유 속성</b>을
          가지지 않으며, <mark>글로벌 속성</mark>(<code>class</code>,{" "}
          <code>id</code>, <code>style</code>, <code>aria-*</code>,{" "}
          <code>data-*</code> 등)만 사용할 수 있습니다.
        </p>
        <CodeBlock title="pre element attr" className="mt_m" language="html">
          {`<!-- 속성 -->
<pre id="example-pre" class="pre-block">
  console.log('Hello, World!');
</pre>`}
        </CodeBlock>
      </section>
      <section className="view_editor indent mt_xxl">
        <h2 className="ml_mn ve_tit">예제</h2>
        <article className="mt_l indent">
          <h3 className="ml_mn">기본 서식 지정 텍스트</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/04-grouping/4.12.pre_element/4.12.pre_element_basic.html"
                className="min_height_300 mb_result_height_200"
                mode="htmlmixed"
                browser="default"
                theme="ayu-mirage"
                title="기본 서식 지정 텍스트"
                minHeight="300px"
                result
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">코드 블록</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/04-grouping/4.12.pre_element/4.12.pre_element_code.html"
                className="min_height_300 mb_result_height_200"
                mode="htmlmixed"
                browser="default"
                theme="ayu-mirage"
                title="코드 블록"
                minHeight="300px"
                result
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">HTML 코드 표시</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/04-grouping/4.12.pre_element/4.12.pre_element_html.html"
                className="min_height_300 mb_result_height_230"
                mode="htmlmixed"
                browser="default"
                theme="ayu-mirage"
                title="HTML 코드 표시"
                minHeight="300px"
                result
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">ASCII 아트 예시</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/04-grouping/4.12.pre_element/4.12.pre_element_ASCII.html"
                className="min_height_300 mb_result_height_230"
                mode="htmlmixed"
                browser="default"
                theme="ayu-mirage"
                title="ASCII 아트 예시"
                minHeight="300px"
                result
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">접근성을 고려한 코드 블록</h3>
          <CodeBlock
            title="접근성을 고려한 코드 블록"
            className="mt_m"
            language="html"
          >
            {`<pre aria-label="박스 모델 CSS 코드 예제">
  .box {
    width: 100px;
    height: 100px;
    border: 1px solid #000;
  }
</pre>`}
          </CodeBlock>
        </article>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주의사항
        </h2>
        <ul className="dot_lst mt_l">
          <li>
            <code>&lt;pre&gt;</code>는 기본적으로 <code>white-space: pre</code>{" "}
            스타일을 사용하므로 텍스트가 길 경우 줄바꿈이 자동으로 되지
            않습니다. <code>overflow-x: auto</code>와 같은 CSS를 사용해 긴
            텍스트를 스크롤 가능하도록 설정하세요.
          </li>
          <li>
            <code>&lt;</code>, <code>&gt;</code>와 같은 특수 문자를 표현하려면
            반드시 HTML 엔티티(<code>&amp;lt;</code>, <code>&amp;gt;</code>)를
            사용해야 합니다. 그렇지 않으면 브라우저에서 태그로 인식할 수
            있습니다.
          </li>
        </ul>
      </section>

      <aside className="browser_support mt_xxl" data-tit="pre">
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
        <img src={IMG.HTML + "/04_html_12.png"} alt="pre 요소" />
        <figcaption>pre 요소</figcaption>
      </figure>
    </>
  );
}

export default PreElementPage;
