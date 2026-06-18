import { Suspense, lazy } from "react";
import CodeBlock from "@/components/code/CodeBlock";
import { usePageMeta } from "@/components/common/PageMeta";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "dl_element",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
  bottomEditor: true,
};

const PAGE_DATA = {
  title: "dl element",
  description:
    "dl 요소는 HTML 문서에서 용어와 그에 대한 설명을 짝지어 나열하는 정의 목록(description list)을 나타내는 태그로, 내부에는 용어를 나타내는 dt 요소와 해당 용어의 설명을 담는 dd 요소가 쌍을 이루어 배치됩니다. 이 페이지에서는 dl 요소의 주요 역할 및 특징을 설명하고, dl 요소의 용도와 구조적 위치에 따른 사용 예시를 소개합니다.",
  keyword: "Markup, HTML, tag, elements, dl, definition list, 정의 목록",
};

const UkEditorTarget = lazy(() => import("@/components/code/UkEditorTarget"));

function EditorFallback() {
  return <div className="uk_editor min_height_300" aria-hidden />;
}

function DlElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>&lt;dl&gt;</code> 요소는{" "}
          <strong>정의 목록(description list)</strong>
          을 나타내는 시맨틱 태그로, 용어와 그에 대한 설명 쌍을 나열할 때
          사용됩니다.
          <br />
          <code>&lt;dt&gt;</code> 요소로 용어를 정의하고,{" "}
          <code>&lt;dd&gt;</code> 요소로 해당 용어의 설명을 제공합니다.
          <br />
          일반적인 목록(<code>&lt;ul&gt;</code>, <code>&lt;ol&gt;</code>)과 달리{" "}
          <b>용어(key)-설명(value) 구조를 표현할 때 적합</b>하며, 사전, FAQ,
          용어 설명 등의 콘텐츠에 자주 활용됩니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <ol className="mt_l ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>정의 목록 표현</strong>
            <ul className="dot_lst">
              <li>용어와 그에 대한 설명을 구조적으로 나열할 때 사용됩니다.</li>
              <li>예: 용어 사전, FAQ, 키-값 쌍 등.</li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>유연한 목록 구성</strong>
            <ul className="dot_lst">
              <li>
                하나의 <code>&lt;dt&gt;</code>에 여러 <code>&lt;dd&gt;</code>를
                매칭하거나, 여러 <code>&lt;dt&gt;</code>를 하나의{" "}
                <code>&lt;dd&gt;</code>에 연결할 수 있습니다.
                <br />
                예: 용어 하나에 여러 설명이 필요한 경우 또는 여러 용어가 동일한
                설명을 공유하는 경우.
              </li>
              <li>
                <code>&lt;dd&gt;</code>에는 텍스트뿐 아니라 이미지, 리스트,
                링크도 포함할 수 있습니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>다른 목록 요소와의 차이</strong>
            <p>
              <code>&lt;ul&gt;</code>과 <code>&lt;ol&gt;</code>은 항목 나열에
              사용되지만, <code>&lt;dl&gt;</code>은 용어와 그 설명을 정의하는 데
              특화되어 있습니다.
            </p>
          </li>
        </ol>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          CSS 기본 값
        </h2>
        <p className="mt_l">
          <code>&lt;dl&gt;</code> 요소는 기본적으로 블록 레벨 요소이며 아래와
          같은 기본값이 적용됩니다.
        </p>
        <CodeBlock title="dl element CSS" className="mt_m" language="css">
          {`dl {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
}`}
        </CodeBlock>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          기본 문법
        </h2>
        <CodeBlock title="dl element syntax" className="mt_l" language="html">
          {`<dl>
  <dt>용어 1</dt>
  <dd>용어 1에 대한 설명</dd>
  <dt>용어 2</dt>
  <dd>용어 2에 대한 설명</dd>
</dl>`}
        </CodeBlock>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          속성
        </h2>
        <p className="mt_l">
          <code>&lt;dl&gt;</code> 요소는 <b className="t_black">고유 속성</b>을
          가지지 않으며, <mark>글로벌 속성</mark>(<code>class</code>,{" "}
          <code>id</code>, <code>style</code>, <code>aria-*</code>,{" "}
          <code>data-*</code> 등)만 사용할 수 있습니다.
        </p>
        <CodeBlock title="dl element attr" className="mt_m" language="html">
          {`<!-- 속성 -->
<dl id="description-list" class="description-list" aria-labelledby="용어에 대한 설명">
  <dt>용어</dt>
  <dd>용어에 대한 설명</dd>
</dl>`}
        </CodeBlock>
      </section>

      <section className="view_editor indent mt_xxl">
        <h2 className="ml_mn ve_tit">예제</h2>
        <article className="mt_l indent">
          <h3 className="ml_mn">기본 정의 목록</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/04-grouping/4.6.dl_element/4.6.dl_element.html"
                className="min_height_300 mb_result_height_260"
                mode="htmlmixed"
                browser="default"
                theme="ayu-mirage"
                title="기본 정의 목록"
                minHeight="300px"
                result
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">하나의 용어에 여러 설명</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/04-grouping/4.6.dl_element/4.6.dl_element2.html"
                className="min_height_300 mb_result_height_230"
                mode="htmlmixed"
                browser="default"
                theme="ayu-mirage"
                title="하나의 용어에 여러 설명"
                minHeight="300px"
                result
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">여러 용어에 하나의 설명</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/04-grouping/4.6.dl_element/4.6.dl_element3.html"
                className="min_height_300 mb_result_height_230"
                mode="htmlmixed"
                browser="default"
                theme="ayu-mirage"
                title="여러 용어에 하나의 설명"
                minHeight="300px"
                result
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">중첩된 설명 목록</h3>
          <CodeBlock title="중첩된 설명 목록" className="mt_m" language="html">
            {`<dl>
  <dt>웹 기술</dt>
  <dd>
    <dl>
      <dt>HTML</dt>
      <dd>구조를 정의하는 언어</dd>
      <dt>CSS</dt>
      <dd>스타일을 정의하는 언어</dd>
    </dl>
  </dd>
</dl>`}
          </CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">설명에 이미지와 링크 포함</h3>
          <CodeBlock
            title="설명에 이미지와 링크 포함"
            className="mt_m"
            language="html"
          >
            {`<dl>
  <dt>React</dt>
  <dd>
    React는 사용자 인터페이스를 구축하기 위한 JavaScript 라이브러리입니다.<br>
    <a href="https://reactjs.org/">공식 웹사이트</a>
  </dd>
  <!-- // React -->

  <dt>Vue</dt>
  <dd>
    Vue는 점진적으로 채택할 수 있는 JavaScript 프레임워크입니다.<br>
    <img src="vue-logo.png" alt="Vue 로고">
  </dd>
  <!-- // Vue -->
</dl>`}
          </CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">dl을 활용한 FAQ</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/04-grouping/4.6.dl_element/4.6.dl_element_faq.html"
                className="min_height_500 mb_result_height_440"
                mode="htmlmixed"
                browser="default"
                theme="ayu-mirage"
                title="dl을 활용한 FAQ"
                minHeight="500px"
                result
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">접근성을 고려한 정의 목록</h3>
          <CodeBlock
            title="접근성을 고려한 정의 목록"
            className="mt_m"
            language="html"
          >
            {`<section aria-labelledby="glossary-title">
  <h2 id="glossary-title">용어 사전</h2>
  <dl>
    <dt>ARIA</dt>
    <dd>웹 접근성을 개선하기 위한 스펙입니다.</dd>
    <dt>WCAG</dt>
    <dd>웹 콘텐츠 접근성 지침을 의미합니다.</dd>
  </dl>
</section>`}
          </CodeBlock>
        </article>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주의사항
        </h2>
        <ul className="dot_lst mt_l">
          <li>
            <code>&lt;dl&gt;</code> 요소의 직계 자식으로는 반드시{" "}
            <code>&lt;dt&gt;</code>와 <code>&lt;dd&gt;</code>만 포함해야 합니다.
          </li>
          <li>
            <code>&lt;dt&gt;</code>와 <code>&lt;dd&gt;</code>는 반드시 짝을
            이루어야 하며, 단독으로 사용해서는 안 됩니다.
          </li>
        </ul>
      </section>

      <aside className="browser_support mt_xxl" data-tit="dl">
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
        <img src={IMG.HTML + "/04_html_06.png"} alt="dl 요소" />
        <figcaption>dl 요소</figcaption>
      </figure>
    </>
  );
}

export default DlElementPage;
