import { Suspense, lazy } from "react";
import CodeBlock from "@/components/code/CodeBlock";
import { usePageMeta } from "@/components/common/PageMeta";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "ul_element",
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
  title: "ul element",
  description:
    "ul 요소는 HTML 문서에서 순서가 없는 항목 목록(unordered list)을 나타내는 태그로, 항목 간의 우선순위나 순서가 중요하지 않은 경우에 사용되며 내부에는 하나 이상의 li 요소를 포함하고 브라우저는 각 항목 앞에 기본적으로 불릿 기호를 표시합니다. 이 페이지에서는 ul 요소의 주요 역할 및 특징을 설명하고, ul 요소의 용도와 구조적 위치에 따른 사용 예시를 소개합니다.",
  keyword: "Markup, HTML, tag, elements, ul, unordered list, 순서가 없는 목록",
};

const UkEditorTarget = lazy(() => import("@/components/code/UkEditorTarget"));

function EditorFallback({ minHeightClass = "min_height_400" }) {
  return <div className={`uk_editor ${minHeightClass}`} aria-hidden />;
}

function UlElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>&lt;ul&gt;</code> 요소는{" "}
          <b>
            <strong>순서가 없는 목록(unordered list)</strong>을 나타내는 시맨틱
            태그
          </b>
          로,
          <b>항목 간에 우선순위나 순서가 중요하지 않은 경우에 사용됩니다.</b>
          <br />
          내부에는 <code>&lt;li&gt;</code> 요소들을 포함하며, 브라우저는
          기본적으로 항목 앞에 점(bullet)을 표시합니다. 메뉴, 특성 나열,
          체크리스트 등 <b>같은 수준의 정보들을 나열할 때</b> 적합하며, 시각적
          스타일은 CSS로 자유롭게 조정할 수 있습니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <ol className="mt_l ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>순서가 중요하지 않은 항목 나열</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;ul&gt;</code> 요소는 항목 간의 순서가 중요하지 않을 때
                사용됩니다.
              </li>
              <li>예: 기능 목록, 항목 리스트, 옵션 목록 등.</li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>기본 불릿 스타일 제공</strong>
            <p>
              항목은 기본적으로 원형 불릿으로 표시되며, CSS를 사용해 스타일을
              변경할 수 있습니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>구조적 의미 부여</strong>
            <ul className="dot_lst">
              <li>
                의미론적으로 항목을 그룹화하여 콘텐츠 구조를 명확히 표현합니다.
              </li>
              <li>
                검색 엔진과 스크린 리더가 목록의 구조를 더 잘 이해하도록
                돕습니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>다른 요소와의 관계</strong>
            <ul className="dot_lst">
              <li>
                <mark>
                  <code>&lt;ul&gt;</code> 요소의 직계 자식으로는 반드시{" "}
                  <code>&lt;li&gt;</code> 요소만 포함해야 합니다.
                </mark>
              </li>
              <li>
                중첩된 <code>&lt;ul&gt;</code> 또는 <code>&lt;ol&gt;</code>을
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
          <code>&lt;ul&gt;</code> 요소는 기본적으로 블록 레벨 요소이며, 별도의
          CSS를 지정하지 않아도 아래와 같은 기본값이 적용됩니다.
        </p>
        <CodeBlock title="ul element CSS" className="mt_m" language="css">
          {`ul {
  display: block;
  list-style-type: disc; (불릿 기호)
  margin-top: 1em;
  margin-bottom: 1em;
  padding-left: 40px;
}`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          기본 문법
        </h2>
        <CodeBlock title="ul element syntax" className="mt_l" language="html">
          {`<ul>
  <li>항목 1</li>
  <li>항목 2</li>
  <li>항목 3</li>
</ul>`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          속성
        </h2>
        <p className="mt_l">
          <code>&lt;ul&gt;</code> 요소는 <b className="t_black">고유 속성</b>을
          가지지 않으며,
          <mark>
            글로벌 속성(<code>class</code>, <code>id</code>, <code>style</code>,{" "}
            <code>aria-*</code>, <code>data-*</code> 등)만 사용할 수 있습니다.
          </mark>
        </p>
        <CodeBlock title="ul element attr" className="mt_m" language="html">
          {`<ul id="unordered-list" class="unordered-list" aria-label="순서 없는 목록">
  <!-- 순서 없는 목록 -->
</ul>`}
        </CodeBlock>
      </section>

      <section className="view_editor indent mt_xxl">
        <h2 className="ml_mn ve_tit">예제</h2>
        <article className="mt_l indent">
          <h3 className="ml_mn">기본 순서 없는 목록</h3>
          <CodeBlock title="ul ex" className="mt_m" language="html">
            {`<ul>
  <li>사과</li>
  <li>바나나</li>
  <li>포도</li>
</ul>`}
          </CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">중첩된 목록</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense
              fallback={<EditorFallback minHeightClass="min_height_400" />}
            >
              <UkEditorTarget
                target="html/04-grouping/4.4.ul_element/4.4.ul_element_nesting.html"
                className="min_height_400 mb_result_height_350"
                mode="htmlmixed"
                browser="default"
                theme="moxer"
                title="nested ul"
                minHeight="400px"
                result
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">사용자 정의 불릿 1</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense
              fallback={<EditorFallback minHeightClass="min_height_500" />}
            >
              <UkEditorTarget
                target="html/04-grouping/4.4.ul_element/4.4.ul_element_style1.html"
                className="min_height_500 mb_result_height_490"
                mode="htmlmixed"
                browser="default"
                theme="moxer"
                title="custom bullet 1"
                minHeight="500px"
                result
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">사용자 정의 불릿 2</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense
              fallback={<EditorFallback minHeightClass="min_height_500" />}
            >
              <UkEditorTarget
                target="html/04-grouping/4.4.ul_element/4.4.ul_element_style2.html"
                className="min_height_500 mb_result_height_490"
                mode="htmlmixed"
                browser="default"
                theme="moxer"
                title="custom bullet 2"
                minHeight="500px"
                result
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">접근성을 고려한 목록</h3>
          <CodeBlock title="a11y ul" className="mt_m" language="html">
            {`<ul aria-label="과일 목록">
  <li>사과</li>
  <li>바나나</li>
  <li>포도</li>
</ul>`}
          </CodeBlock>
        </article>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주의사항
        </h2>
        <ul className="dot_lst mt_l">
          <li>
            <code>&lt;ul&gt;</code> 요소의 직계 자식으로는 반드시{" "}
            <code>&lt;li&gt;</code> 요소만 포함해야 하며,
            <code>&lt;li&gt;</code> 요소와 같은 계층에는 <code>&lt;li&gt;</code>{" "}
            외의 다른 요소를 포함할 수 없습니다.
          </li>
          <li>
            순서가 중요한 경우에는 <code>&lt;ol&gt;</code>을 사용하세요.
          </li>
        </ul>
      </section>

      <aside className="browser_support mt_xxl" data-tit="ul">
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
        <img src={`${IMG.HTML}/04_html_04.png`} alt="ul 요소" />
        <figcaption>ul 요소</figcaption>
      </figure>
    </>
  );
}

export default UlElementPage;
