import { Suspense, lazy } from "react";
import CodeBlock from "@/components/code/CodeBlock";
import { usePageMeta } from "@/components/common/PageMeta";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "samp_element",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
  bottomEditor: true,
};

const PAGE_DATA = {
  title: "samp element",
  description:
    "samp 요소는 HTML 문서에서 시스템 출력값이나 프로그램의 응답 결과를 나타낼 때 사용하는 인라인 태그로, 브라우저는 기본적으로 고정폭 글꼴로 렌더링하며 사용자 입력(kbd)이나 코드(code)와 함께 사용되어 입력과 출력의 의미적 차이를 명확히 전달하는 데 도움을 줍니다. 이 페이지에서는 samp 요소의 주요 역할 및 특징을 설명하고, samp 요소의 용도와 구조적 위치에 따른 사용 예시를 소개합니다.",
  keyword: "Markup, HTML, tag, elements, samp, 인용 출력",
};

const UkEditorTarget = lazy(() => import("@/components/code/UkEditorTarget"));

function EditorFallback() {
  return <div className="uk_editor min_height_300" aria-hidden />;
}

function SampElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>&lt;samp&gt;</code> 요소는 컴퓨터 시스템의 출력 결과(sample
          output)를 나타내는 시맨틱 태그로, 콘솔 출력, 에러 메시지, 시스템 응답
          같은 텍스트를 표현할 때 사용됩니다.
          <br />
          브라우저에서 기본적으로 고정폭 글꼴로 렌더링되며,{" "}
          <code>&lt;code&gt;</code>, <code>&lt;kbd&gt;</code>와 함께 쓰면 입력과
          출력 맥락을 구분하기 좋습니다.
        </p>
      </blockquote>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <ol className="mt_l ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>프로그램 출력 텍스트 표현</strong>
            <ul className="dot_lst">
              <li>
                콘솔 출력, 오류 메시지, 시스템 로그 등 출력 결과 표현에
                적합합니다.
              </li>
              <li>
                예: <code>Error: file not found</code>,{" "}
                <code>Build completed</code>.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>고정폭 글꼴 사용</strong>
            <p>
              기본 monospace 렌더링으로 출력 텍스트의 가독성과 구조를 명확하게
              합니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>다른 요소와의 조합</strong>
            <p>
              <code>&lt;pre&gt;</code>와 함께 사용하면 긴 출력 결과의
              줄바꿈/공백 유지가 쉽습니다.
            </p>
          </li>
        </ol>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          CSS 기본 값
        </h2>
        <p className="mt_l">
          <code>&lt;samp&gt;</code> 요소는 기본적으로 인라인 레벨 요소입니다.
        </p>
        <CodeBlock title="samp element CSS" className="mt_m" language="css">
          {`samp {
  display: inline;
  font-family: monospace;
}`}
        </CodeBlock>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          기본 문법
        </h2>
        <CodeBlock title="samp element syntax" className="mt_l" language="html">
          {`<samp>출력 내용</samp>`}
        </CodeBlock>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn">속성</h2>
        <p className="mt_l">
          <code>&lt;samp&gt;</code> 요소는 고유 속성이 없으며 글로벌 속성(
          <code>class</code>, <code>id</code>, <code>style</code>,{" "}
          <code>aria-*</code>, <code>data-*</code>)만 사용할 수 있습니다.
        </p>
      </section>
      <section className="view_editor indent mt_xxl">
        <h2 className="ml_mn ve_tit">예제</h2>
        <article className="mt_l indent">
          <h3 className="ml_mn">상황별 예제</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/05-textLevel/5.19.samp_element_1.html"
                className="min_height_300 mb_result_height_260"
                mode="htmlmixed"
                browser="default"
                theme="moxer"
                title="상황별 samp 예제"
                minHeight="300px"
                result
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">긴 출력 예제</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/05-textLevel/5.19.samp_element_2.html"
                className="min_height_300 mb_result_height_260"
                mode="htmlmixed"
                browser="default"
                theme="moxer"
                title="긴 출력 예제"
                minHeight="300px"
                result
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">접근성을 고려한 샘플 출력</h3>
          <CodeBlock
            title="접근성을 고려한 샘플 출력"
            className="mt_m"
            language="html"
          >
            {`<p>
  오류 메시지: <samp aria-label="파일이 존재하지 않습니다">File not found</samp>
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
            <code>&lt;samp&gt;</code>는 시스템 출력 의미로만 사용하고 단순
            스타일 용도 사용은 피하세요.
          </li>
          <li>
            긴 출력 결과의 줄바꿈/공백 유지가 필요하면 <code>&lt;pre&gt;</code>
            와 함께 사용하는 것이 적합합니다.
          </li>
        </ul>
      </section>
      <aside className="browser_support mt_xxl" data-tit="samp">
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
        <img src={`${IMG.HTML}/05_html_19.png`} alt="samp 요소" />
        <figcaption>samp 요소</figcaption>
      </figure>
    </>
  );
}

export default SampElementPage;
