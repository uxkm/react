import { Suspense, lazy } from "react";
import CodeBlock from "@/components/code/CodeBlock";
import { usePageMeta } from "@/components/common/PageMeta";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "code_element",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
  bottomEditor: true,
};

const PAGE_DATA = {
  title: "code element",
  description:
    "code 요소는 HTML 문서에서 프로그래밍 코드나 명령어, 함수명 등 컴퓨터 관련 텍스트를 나타낼 때 사용하는 인라인 태그로, 브라우저는 기본적으로 고정폭 글꼴로 렌더링하여 일반 텍스트와 구분되도록 하며 pre 요소와 함께 사용하면 형식을 유지한 코드 블록을 구성할 수 있습니다. 이 페이지에서는 code 요소의 주요 역할 및 특징을 설명하고, code 요소의 용도와 구조적 위치에 따른 사용 예시를 소개합니다.",
  keyword: "Markup, HTML, tag, elements, code",
};

const UkEditorTarget = lazy(() => import("@/components/code/UkEditorTarget"));

function EditorFallback() {
  return <div className="uk_editor min_height_300" aria-hidden />;
}

function CodeElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>&lt;code&gt;</code> 요소는 컴퓨터 코드나 명령어를 나타내는
          시맨틱 태그로, 기본적으로 고정폭 글꼴로 표시되어 일반 텍스트와
          구분됩니다.
        </p>
      </blockquote>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <ol className="mt_l ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>코드 콘텐츠 표현</strong>
            <ul className="dot_lst">
              <li>함수명, 변수명, CLI 명령어 같은 기술 텍스트를 표시합니다.</li>
              <li>
                예: <code>console.log()</code>, <code>int a = 10;</code>
              </li>
              <li>
                긴 코드 블록은 pre 요소와 조합해 공백/줄바꿈을 보존합니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>의미론적 사용</strong>
            <p>단순 스타일링이 아닌 코드 의미 전달이 목적일 때 사용합니다.</p>
          </li>
        </ol>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          CSS 기본 값
        </h2>
        <CodeBlock title="code element CSS" className="mt_l" language="css">
          {`code {
  display: inline;
  font-family: monospace;
}`}
        </CodeBlock>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          기본 문법
        </h2>
        <CodeBlock title="code element syntax" className="mt_l" language="html">
          {`<code>코드 내용</code>`}
        </CodeBlock>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          속성
        </h2>
        <p className="mt_l">
          <code>&lt;code&gt;</code> 요소는 고유 속성이 없으며 글로벌 속성만
          사용합니다.
        </p>
      </section>
      <section className="view_editor indent mt_xxl">
        <h2 className="ml_mn ve_tit">예제</h2>
        <article className="mt_l indent">
          <h3 className="ml_mn">간단한 코드 표시</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/05-textLevel/5.14.code_element_1.html"
                className="min_height_300 mb_result_height_260"
                mode="htmlmixed"
                browser="default"
                theme="moxer"
                title="간단한 코드 표시"
                minHeight="300px"
                result
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <code className="font-21-important">&lt;pre&gt;</code>와 함께 사용
          </h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/05-textLevel/5.14.code_element_2.html"
                className="min_height_300 mb_result_height_260"
                mode="htmlmixed"
                browser="default"
                theme="moxer"
                title="pre와 함께 사용"
                minHeight="300px"
                result
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">CSS로 스타일 변경</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/05-textLevel/5.14.code_element_3.html"
                className="min_height_300 mb_result_height_200"
                mode="htmlmixed"
                browser="default"
                theme="moxer"
                title="CSS로 스타일 변경"
                minHeight="300px"
                result
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">접근성을 고려한 코드</h3>
          <CodeBlock
            title="접근성을 고려한 코드"
            className="mt_m"
            language="html"
          >
            {`<p>
  이 함수는 다음과 같이 작동합니다: <code aria-label="Console 로그 출력 함수">console.log('Hello');</code>.
</p>`}
          </CodeBlock>
        </article>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주의사항
        </h2>
        <ul className="dot_lst mt_l">
          <li>
            코드가 아닌 텍스트 강조에는 <code>&lt;em&gt;</code>,{" "}
            <code>&lt;strong&gt;</code>을 사용하세요.
          </li>
          <li>
            코드 관련 텍스트에만 <code>&lt;code&gt;</code>를 사용하고, 단순
            스타일링 목적 사용은 피하세요.
          </li>
          <li>
            HTML 코드 출력 시 <code>&amp;lt;</code>, <code>&amp;gt;</code>처럼
            이스케이프가 필요합니다.
          </li>
        </ul>
      </section>
      <aside className="browser_support mt_xxl" data-tit="code">
        <ul>
          <li className="ie">지원</li>
          <li className="edge">지원</li>
          <li className="chrome">1.0</li>
          <li className="firefox">1.0</li>
          <li className="opera">지원</li>
          <li className="safari">지원</li>
        </ul>
      </aside>
      <figure className="img_figure mt_l">
        <img src={`${IMG.HTML}/05_html_14.png`} alt="code 요소" />
        <figcaption>code 요소</figcaption>
      </figure>
    </>
  );
}

export default CodeElementPage;
