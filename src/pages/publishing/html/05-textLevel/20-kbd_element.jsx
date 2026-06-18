import { Suspense, lazy } from "react";
import CodeBlock from "@/components/code/CodeBlock";
import { usePageMeta } from "@/components/common/PageMeta";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "kbd_element",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
  bottomEditor: true,
};

const PAGE_DATA = {
  title: "kbd element",
  description:
    "kbd 요소는 HTML 문서에서 사용자가 키보드, 음성 명령, 리모컨 등을 통해 입력하는 텍스트를 나타낼 때 사용하는 인라인 태그로, 브라우저는 기본적으로 고정폭 글꼴로 렌더링하며 입력값과 출력값을 구분하기 위해 samp, code 등과 함께 사용되기도 합니다. 이 페이지에서는 kbd 요소의 주요 역할 및 특징을 설명하고, kbd 요소의 용도와 구조적 위치에 따른 사용 예시를 소개합니다.",
  keyword: "Markup, HTML, tag, elements, kbd, keyboard, 키보드",
};

const UkEditorTarget = lazy(() => import("@/components/code/UkEditorTarget"));

function EditorFallback() {
  return <div className="uk_editor min_height_300" aria-hidden />;
}

function KbdElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>&lt;kbd&gt;</code> 요소는 사용자가 입력하는 키보드 입력을
          나타내는 시맨틱 태그로, 명령어나 키 조합, 단축키를 문서에서 명확히
          구분할 때 사용됩니다.
          <br />
          브라우저에서는 기본적으로 고정폭 글꼴로 표시되며{" "}
          <code>&lt;code&gt;</code>, <code>&lt;samp&gt;</code>와 함께 사용하면
          입력과 출력의 역할을 구분할 수 있습니다.
        </p>
      </blockquote>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <ol className="mt_l ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>키보드 입력 표현</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;kbd&gt;</code>는 사용자가 직접 입력해야 하는 키/명령을
                나타냅니다.
              </li>
              <li>예: Ctrl + C, Enter, npm start 등.</li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>고정폭 글꼴 렌더링</strong>
            <p>
              기본적으로 monospace로 렌더링되어 입력값을 본문과 시각적으로
              구분합니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>다른 요소와의 조합</strong>
            <p>
              <code>&lt;samp&gt;</code>와 함께 사용하면 사용자 입력과 시스템
              출력을 명확히 분리할 수 있습니다.
            </p>
          </li>
        </ol>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          CSS 기본 값
        </h2>
        <p className="mt_l">
          <code>&lt;kbd&gt;</code> 요소는 기본적으로 인라인 레벨 요소입니다.
        </p>
        <CodeBlock title="kbd element CSS" className="mt_m" language="css">
          {`kbd {
  display: inline;
  font-family: monospace;
}`}
        </CodeBlock>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          기본 문법
        </h2>
        <CodeBlock title="kbd element syntax" className="mt_l" language="html">
          {`<kbd>키 입력</kbd>`}
        </CodeBlock>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn">속성</h2>
        <p className="mt_l">
          <code>&lt;kbd&gt;</code> 요소는 고유 속성이 없으며 글로벌 속성(
          <code>class</code>, <code>id</code>, <code>style</code>,{" "}
          <code>aria-*</code>, <code>data-*</code>)만 사용할 수 있습니다.
        </p>
      </section>
      <section className="view_editor indent mt_xxl">
        <h2 className="ml_mn ve_tit">예제</h2>
        <article className="mt_l indent">
          <h3 className="ml_mn">단축키 표시</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/05-textLevel/5.20.kbd_element_1.html"
                className="min_height_300 mb_result_height_200"
                mode="htmlmixed"
                browser="default"
                theme="moxer"
                title="단축키 표시"
                minHeight="300px"
                result
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">터미널 명령어 입력</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/05-textLevel/5.20.kbd_element_2.html"
                className="min_height_300 mb_result_height_200"
                mode="htmlmixed"
                browser="default"
                theme="moxer"
                title="터미널 명령어 입력"
                minHeight="300px"
                result
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <code className="font-21-important">&lt;samp&gt;</code>와의 조합
          </h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/05-textLevel/5.20.kbd_element_3.html"
                className="min_height_300 mb_result_height_200"
                mode="htmlmixed"
                browser="default"
                theme="moxer"
                title="kbd와 samp 조합"
                minHeight="300px"
                result
              />
            </Suspense>
          </div>
        </article>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주의사항
        </h2>
        <ul className="dot_lst mt_l">
          <li>
            <code>&lt;kbd&gt;</code>는 키보드 입력 의미로만 사용하고, 단순
            스타일 목적 사용은 피하세요.
          </li>
          <li>
            사용자 입력(<code>&lt;kbd&gt;</code>), 시스템 응답(
            <code>&lt;samp&gt;</code>), 코드(<code>&lt;code&gt;</code>)를 용도에
            맞게 구분해 사용하세요.
          </li>
        </ul>
      </section>
      <aside className="browser_support mt_xxl" data-tit="kbd">
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
        <img src={`${IMG.HTML}/05_html_20.png`} alt="kbd 요소" />
        <figcaption>kbd 요소</figcaption>
      </figure>
    </>
  );
}

export default KbdElementPage;
