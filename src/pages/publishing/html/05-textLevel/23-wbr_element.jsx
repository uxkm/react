import { Suspense, lazy } from "react";
import CodeBlock from "@/components/code/CodeBlock";
import { usePageMeta } from "@/components/common/PageMeta";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "wbr_element",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
  bottomEditor: true,
};

const PAGE_DATA = {
  title: "wbr element",
  description:
    "wbr 요소는 HTML 문서에서 긴 단어나 문자열 중 적절한 줄바꿈 가능 지점을 명시적으로 지정할 때 사용하는 빈 태그로, 실제 줄바꿈이 발생하지는 않지만 화면 너비가 좁아질 경우 브라우저는 wbr이 있는 위치에서 줄을 바꿀 수 있는 후보 지점으로 인식합니다. 이 페이지에서는 wbr 요소의 주요 역할 및 특징을 설명하고, wbr 요소의 용도와 구조적 위치에 따른 사용 예시를 소개합니다.",
  keyword:
    "Markup, HTML, HTML5, tag, elements, wbr, Word Break Opportunity, 행바꿈",
};

const UkEditorTarget = lazy(() => import("@/components/code/UkEditorTarget"));

function EditorFallback() {
  return <div className="uk_editor min_height_400" aria-hidden />;
}

function WbrElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>&lt;wbr&gt;</code> 요소는 단어 중간에 줄바꿈이 가능함을
          명시적으로 지정하는 비시맨틱 태그로, 브라우저가 자동으로 줄을 바꾸지
          못하는 긴 단어, URL, 코드 문자열 등에 사용됩니다.
          <br />
          실제 줄바꿈을 강제하지는 않고, 화면이 좁아질 때 해당 위치를 줄바꿈
          후보 지점으로 제공합니다.
        </p>
      </blockquote>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          <code className="font-24-important weight-600">&lt;br&gt;</code>
          <span className="t_666">vs</span>
          <code className="font-24-important t_darkblue weight-600">
            &lt;wbr&gt;
          </code>
        </h2>
        <ol className="mt_l ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>주요 차이점</strong>
            <p>
              <code>&lt;br&gt;</code>은 즉시 줄바꿈을 발생시키고,{" "}
              <code>&lt;wbr&gt;</code>은 필요할 때만 줄바꿈 가능한 위치를
              제시합니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>사용 목적</strong>
            <p>
              긴 단어/URL 등 자동 줄바꿈이 어려운 문자열의 오버플로우 완화에
              적합합니다.
            </p>
          </li>
        </ol>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <ol className="mt_l ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>자동 줄 바꿈 위치 지정</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;wbr&gt;</code> 위치에서 줄바꿈이 가능하지만 항상
                줄바꿈되는 것은 아닙니다.
              </li>
              <li>브라우저가 필요하다고 판단할 때만 줄바꿈이 발생합니다.</li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>보이지 않는 요소</strong>
            <p>화면에 시각적 변화는 없고 줄바꿈 제어 힌트만 제공합니다.</p>
          </li>
        </ol>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          CSS 기본 값
        </h2>
        <p className="mt_l">
          <code>&lt;wbr&gt;</code> 요소는 기본적으로 인라인 레벨 요소입니다.
        </p>
        <CodeBlock title="wbr element CSS" className="mt_m" language="css">
          {`wbr {
  display: inline;
}`}
        </CodeBlock>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          기본 문법
        </h2>
        <CodeBlock title="wbr element syntax" className="mt_l" language="html">
          {`긴단어<wbr>긴단어<wbr>긴단어`}
        </CodeBlock>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn">속성</h2>
        <p className="mt_l">
          <code>&lt;wbr&gt;</code> 요소는 고유 속성을 가지지 않으며 글로벌 속성(
          <code>class</code>, <code>id</code>, <code>style</code>,{" "}
          <code>aria-*</code>, <code>data-*</code> 등)만 사용할 수 있습니다.
        </p>
      </section>
      <section className="view_editor indent mt_xxl">
        <h2 className="ml_mn ve_tit">예제</h2>
        <article className="mt_l indent">
          <h3 className="ml_mn">
            <code className="font-21-important weight-600">&lt;wbr&gt;</code>{" "}
            적용과 미적용
          </h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/05-textLevel/5.23.wbr_element_1.html"
                className="min_height_400 mb_result_height_350"
                mode="htmlmixed"
                browser="default"
                theme="moxer"
                title="wbr 적용과 미적용"
                minHeight="400px"
                result
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">긴 단어 줄바꿈 허용</h3>
          <CodeBlock
            title="긴 단어 줄바꿈 허용"
            className="mt_m"
            language="html"
          >
            {`<p>초장문 단어: pneumono<wbr>ultra<wbr>microscopic<wbr>silicovolcanoconiosis</p>`}
          </CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">이메일 주소에 사용</h3>
          <CodeBlock
            title="이메일 주소에 사용"
            className="mt_m"
            language="html"
          >
            {`<p>이메일 주소: longemailaddress<wbr>@example<wbr>.com</p>`}
          </CodeBlock>
        </article>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주의사항
        </h2>
        <ul className="dot_lst mt_l">
          <li>
            <code>&lt;wbr&gt;</code>는 강제 줄바꿈이 아니라 "가능한 위치"를
            제시하는 역할이므로, 필요하지 않으면 무시됩니다.
          </li>
          <li>
            실제로 텍스트 넘침 문제가 있을 때만 최소한으로 사용해야 합니다.
          </li>
        </ul>
      </section>
      <aside className="browser_support mt_xxl" data-tit="wbr">
        <ul>
          <li className="ie false">지원안함</li>
          <li className="edge">지원</li>
          <li className="chrome">1.0</li>
          <li className="firefox">1.0</li>
          <li className="opera">11.6</li>
          <li className="safari">4.0</li>
        </ul>
      </aside>
      <figure className="img_figure mt_l">
        <img src={`${IMG.HTML}/05_html_23.png`} alt="wbr 요소" />
        <figcaption>wbr 요소</figcaption>
      </figure>
    </>
  );
}

export default WbrElementPage;
