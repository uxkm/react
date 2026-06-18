import { Suspense, lazy } from "react";
import CodeBlock from "@/components/code/CodeBlock";
import { usePageMeta } from "@/components/common/PageMeta";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "ol_element",
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
  title: "ol element",
  description:
    "ol 요소는 HTML 문서에서 순서가 있는 항목 목록(ordered list)을 나타내는 태그로, 항목 간의 순서나 단계가 중요한 경우에 사용되며 내부에는 하나 이상의 li 요소를 포함하고 브라우저는 기본적으로 각 항목 앞에 숫자나 문자 등으로 자동 번호를 부여합니다. 이 페이지에서는 ol 요소의 주요 역할 및 특징을 설명하고, ol 요소의 용도와 구조적 위치에 따른 사용 예시를 소개합니다.",
  keyword: "Markup, HTML, tag, elements, ol, ordered list, 순서가 있는 목록",
};

const UkEditorTarget = lazy(() => import("@/components/code/UkEditorTarget"));

function EditorFallback() {
  return <div className="uk_editor min_height_550" aria-hidden />;
}

function OlElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>&lt;ol&gt;</code> 요소는{" "}
          <b>
            <strong>순서가 있는 목록(ordered list)</strong>을 나타내는 시맨틱
            태그
          </b>
          로,
          <b>항목의 순서가 의미를 갖는 경우에 사용됩니다.</b>
          <br />
          내부에는 <code>&lt;li&gt;</code> 요소들이 포함되며, 브라우저는
          기본적으로 숫자나 로마자 등으로 항목 앞에 순번을 표시합니다. 절차,
          단계, 순위 등 <b>순차적인 정보를 표현할 때 적합</b>하며,
          <code>type</code>, <code>start</code>, <code>reversed</code> 등의
          속성을 통해 표시 방식과 순서를 조절할 수 있습니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <ol className="mt_l ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>순서가 중요한 목록</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;ol&gt;</code> 요소는 항목 간의 순서가 중요한 경우에
                사용됩니다.
              </li>
              <li>예: 단계별 지침, 우선순위가 있는 항목, 시간 순서 등.</li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>항목 표시 방식</strong>
            <ul className="dot_lst">
              <li>
                기본적으로 숫자(1, 2, 3...)로 항목이 표시되며, <code>type</code>{" "}
                속성을 사용해 로마 숫자, 알파벳 등으로 변경할 수 있습니다.
              </li>
              <li>CSS로도 스타일을 커스터마이징할 수 있습니다.</li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>구조적 의미 부여</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;ol&gt;</code>은 문서의 구조를 명확히 하고, 목록이
                순서가 있음을 나타냅니다.
              </li>
              <li>
                검색 엔진은 <code>&lt;ol&gt;</code>의 의미를 인식하여 콘텐츠를
                분석합니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>다른 요소와의 관계</strong>
            <ul className="dot_lst">
              <li>
                <mark>
                  <code>&lt;ol&gt;</code> 요소의 직계 자식으로는 반드시{" "}
                  <code>&lt;li&gt;</code> 요소만 포함해야 합니다.
                </mark>
              </li>
              <li>
                중첩된 <code>&lt;ol&gt;</code> 또는 <code>&lt;ul&gt;</code>을
                사용하여 서브 목록을 만들 수 있습니다.
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
          <code>&lt;ol&gt;</code> 요소는 기본적으로 블록 레벨 요소이며, 별도의
          CSS를 지정하지 않아도 아래와 같은 기본값이 적용됩니다.
        </p>
        <CodeBlock title="ol element CSS" className="mt_m" language="css">
          {`ol {
  display: block;
  list-style-type: decimal;  (숫자 목록으로 기본 설정)
  margin-top: 1em;
  margin-bottom: 1em;
}`}
        </CodeBlock>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          기본 문법
        </h2>
        <CodeBlock title="ol element syntax" className="mt_l" language="html">
          {`<ol>
  <li>항목 1</li>
  <li>항목 2</li>
  <li>항목 3</li>
</ol>`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn">속성</h2>

        <article className="mt_l indent">
          <h3 className="ml_mn">
            [type]
            <i className="attr_optional">선택 사항</i>
            <span className="t_blue el_inline_block">&lt;ol type="값"&gt;</span>
          </h3>
          <p className="mt_m">목록 항목의 번호 스타일을 설정합니다.</p>
          <dl className="dl_dot_lst mt_s">
            <dt>값 :</dt>
            <dd>
              <b className="t_black">1</b> : <mark>기본값(생략 가능)</mark>,
              숫자(1, 2, 3...)
            </dd>
            <dd>
              <b className="t_black">a</b> : 소문자 알파벳(a, b, c...)
            </dd>
            <dd>
              <b className="t_black">A</b> : 대문자 알파벳(A, B, C...)
            </dd>
            <dd>
              <b className="t_black">i</b> : 소문자 로마 숫자(i, ii, iii...)
            </dd>
            <dd>
              <b className="t_black">I</b> : 대문자 로마 숫자(I, II, III...)
            </dd>
          </dl>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/04-grouping/4.3.ol_element/4.3.ol_element_type.html"
                className="min_height_550 mb_result_height_400"
                mode="htmlmixed"
                browser="default"
                theme="moxer"
                title="ol type"
                minHeight="550px"
                result
              />
            </Suspense>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [start]
            <i className="attr_optional">선택 사항</i>
            <span className="t_blue el_inline_block">
              &lt;ol start="항목의 시작 값"&gt;
            </span>
          </h3>
          <p className="mt_ms">목록 번호의 시작 값을 지정합니다.</p>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/04-grouping/4.3.ol_element/4.3.ol_element_start.html"
                className="min_height_550 mb_result_height_400"
                mode="htmlmixed"
                browser="default"
                theme="moxer"
                title="ol start"
                minHeight="550px"
                result
              />
            </Suspense>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [reversed]
            <i className="attr_optional">선택 사항</i>
            <span className="t_blue el_inline_block">&lt;ol reversed&gt;</span>
          </h3>
          <p className="mt_ms">목록 항목을 역순으로 표시합니다.</p>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/04-grouping/4.3.ol_element/4.3.ol_element_reversed.html"
                className="min_height_550 mb_result_height_400"
                mode="htmlmixed"
                browser="default"
                theme="moxer"
                title="ol reversed"
                minHeight="550px"
                result
              />
            </Suspense>
          </div>
        </article>
      </section>

      <section className="view_editor indent mt_xxl">
        <h2 className="ml_mn ve_tit">예제</h2>

        <article className="mt_l indent">
          <h3 className="ml_mn">
            <code className="font-21-important weight-600">&lt;ol&gt;</code>{" "}
            중첩(css counter 활용)
          </h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/04-grouping/4.3.ol_element/4.3.ol_element_type_ol_nesting.html"
                className="min_height_450 mb_result_height_280"
                mode="htmlmixed"
                browser="default"
                theme="moxer"
                title="ol nesting"
                minHeight="450px"
                result
              />
            </Suspense>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <code className="font-21-important weight-600">&lt;ul&gt;</code>{" "}
            중첩
          </h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/04-grouping/4.3.ol_element/4.3.ol_element_type_ul_nesting.html"
                className="min_height_450 mb_result_height_280"
                mode="htmlmixed"
                browser="default"
                theme="moxer"
                title="ul nesting in ol"
                minHeight="450px"
                result
              />
            </Suspense>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">접근성을 고려한 예제</h3>
          <CodeBlock title="a11y ol" className="mt_m" language="html">
            {`<ol aria-label="웹 개발 학습 단계">
  <li>HTML 기초</li>
  <li>CSS 기초</li>
  <li>JavaScript 기초</li>
</ol>`}
          </CodeBlock>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주의사항
        </h2>
        <ul className="dot_lst mt_l">
          <li>
            <code>&lt;ol&gt;</code> 요소의 직계 자식으로는 반드시{" "}
            <code>&lt;li&gt;</code> 요소만 포함해야 하며,
            <code>&lt;li&gt;</code> 요소와 같은 계층에는 <code>&lt;li&gt;</code>{" "}
            외의 다른 요소를 포함할 수 없습니다.
          </li>
          <li>
            순서가 중요하지 않은 경우에는 <code>&lt;ul&gt;</code>을 사용하세요.
          </li>
        </ul>
      </section>

      <aside className="browser_support mt_xxl" data-tit="ol">
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
        <img src={`${IMG.HTML}/04_html_03.png`} alt="ol 요소" />
        <figcaption>ol 요소</figcaption>
      </figure>
    </>
  );
}

export default OlElementPage;
