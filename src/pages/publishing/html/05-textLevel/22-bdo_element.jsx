import { Suspense, lazy } from "react";
import CodeBlock from "@/components/code/CodeBlock";
import { usePageMeta } from "@/components/common/PageMeta";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "bdo_element",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
  bottomEditor: true,
};

const PAGE_DATA = {
  title: "bdo element",
  description:
    "bdo(Bi-Directional Override) 요소는 HTML 문서에서 텍스트의 읽기 방향을 명시적으로 지정할 때 사용하는 인라인 태그로, dir 속성과 함께 사용하여 해당 텍스트가 왼쪽에서 오른쪽(ltr) 또는 오른쪽에서 왼쪽(rtl)으로 표시되도록 강제할 수 있으며 다국어 콘텐츠나 혼합 언어 환경에서 시각적 정렬을 제어할 때 유용합니다. 이 페이지에서는 bdo 요소의 주요 역할 및 특징을 설명하고, bdo 요소의 용도와 구조적 위치에 따른 사용 예시를 소개합니다.",
  keyword: "Markup, HTML, tag, elements, bdo, bidirectional override element",
};

const UkEditorTarget = lazy(() => import("@/components/code/UkEditorTarget"));

function EditorFallback() {
  return <div className="uk_editor min_height_350" aria-hidden />;
}

function BdoElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>&lt;bdo&gt;</code> 요소는 텍스트의 방향(direction)을 명시적으로
          지정하는 시맨틱 태그로, HTML 문서 내에서 글자의 표시 방향을 강제로
          변경할 때 사용됩니다.
          <br />
          <code>dir</code> 속성과 함께 사용되며 <code>dir="rtl"</code>이면
          오른쪽에서 왼쪽, <code>dir="ltr"</code>이면 왼쪽에서 오른쪽으로
          출력됩니다.
        </p>
      </blockquote>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <ol className="mt_l ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>텍스트 방향 강제 설정</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;bdo&gt;</code>는 <code>dir</code> 속성으로 내부
                텍스트의 방향을 강제합니다.
              </li>
              <li>
                <code>dir="ltr"</code>, <code>dir="rtl"</code> 값을 사용합니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>혼합 언어 환경에서 유용</strong>
            <p>
              아랍어/히브리어(RTL)와 영어(LTR)가 섞인 문장에서 방향을 명시적으로
              제어할 수 있습니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>bdi와의 차이</strong>
            <p>
              <code>&lt;bdi&gt;</code>는 자동 감지, <code>&lt;bdo&gt;</code>는
              개발자가 직접 방향을 지정합니다.
            </p>
          </li>
        </ol>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          CSS 기본 값
        </h2>
        <p className="mt_l">
          <code>&lt;bdo&gt;</code> 요소는 기본적으로 인라인 레벨 요소입니다.
        </p>
        <CodeBlock title="bdo element CSS" className="mt_m" language="css">
          {`bdo {
  display: inline;
  unicode-bidi: bidi-override;
}`}
        </CodeBlock>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          기본 문법
        </h2>
        <CodeBlock title="bdo element syntax" className="mt_l" language="html">
          {`<bdo dir="rtl or ltr">텍스트</bdo>`}
        </CodeBlock>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn">속성</h2>
        <article className="mt_l indent">
          <h3 className="ml_mn">
            [dir]
            <i className="attr_required">필수</i>
            <span className="t_blue el_inline_block">&lt;bdo dir="값"&gt;</span>
          </h3>
          <p className="mt_ms">
            <code>ltr</code> 또는 <code>rtl</code>로 텍스트 방향을 강제합니다.
          </p>
          <dl className="dl_dot_lst mt_s">
            <dt>값 :</dt>
            <dd>
              <code>ltr</code> : 왼쪽에서 오른쪽(LTR)
            </dd>
            <dd>
              <code>rtl</code> : 오른쪽에서 왼쪽(RTL)
            </dd>
          </dl>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/05-textLevel/5.21.bdi_element_1.html"
                className="min_height_350 mb_result_height_200"
                mode="htmlmixed"
                browser="default"
                theme="moxer"
                title="bdo dir 속성"
                minHeight="350px"
                result
              />
            </Suspense>
          </div>
        </article>
      </section>
      <section className="view_editor indent mt_xxl">
        <h2 className="ml_mn ve_tit">예제</h2>
        <article className="mt_l indent">
          <h3 className="ml_mn">기본 사용법 (강제 방향 지정)</h3>
          <CodeBlock
            title="기본 사용법 (강제 방향 지정)"
            className="mt_m"
            language="html"
          >
            {`<p>
  이 텍스트는 <bdo dir="rtl">مرحبا</bdo>로 표시됩니다.
</p>`}
          </CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">혼합 언어 텍스트에서 방향 조정</h3>
          <CodeBlock
            title="혼합 언어 텍스트에서 방향 조정"
            className="mt_m"
            language="html"
          >
            {`<p>
  이 문장은 <bdo dir="ltr">hello</bdo>와 <bdo dir="rtl">שלום</bdo>를 포함하고 있습니다.
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
            <code>&lt;bdo&gt;</code> 사용 시 반드시 <code>dir</code> 속성을
            지정해야 하며 생략하면 방향 변경이 적용되지 않습니다.
          </li>
          <li>
            전체 문서 방향 제어는 <code>html</code> 또는 <code>body</code>의{" "}
            <code>dir</code>을 우선 사용하고, <code>&lt;bdo&gt;</code>는
            국소적인 강제 제어에만 사용하세요.
          </li>
        </ul>
      </section>
      <aside className="browser_support mt_xxl" data-tit="bdo">
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
        <img src={`${IMG.HTML}/05_html_22.png`} alt="bdo 요소" />
        <figcaption>bdo 요소</figcaption>
      </figure>
    </>
  );
}

export default BdoElementPage;
