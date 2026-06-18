import { Suspense, lazy } from "react";
import CodeBlock from "@/components/code/CodeBlock";
import { usePageMeta } from "@/components/common/PageMeta";
const UkEditorTarget = lazy(() => import("@/components/code/UkEditorTarget"));

const PAGE_LAYOUT = {
  mainClass: "css_formatting",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
  depth3Last: false,
  bottomEditor: false,
};

const IMG_CSS = "/images/css";

function EditorFallback({ className = "uk_editor min_height_400" }) {
  return <div className={className} aria-hidden />;
}

function CssFormattingPage() {
  usePageMeta({
    title: "위치 속성",
    description:
      "CSS의 위치 속성은 HTML 요소를 문서 상에 배치하는 방법을 제어하는 속성들로 구성됩니다. 이 페이지에서는 요소의 표시 방식(display), 위치 지정(position), 좌표 설정(top, right, bottom, left), 흐름 제어(float, clear), 넘침 처리(overflow), 스크롤 스냅(scroll-snap) 등을 함께 소개합니다.",
    keyword: "style, css, Cascading Style Sheets, display, position, float",
    layout: PAGE_LAYOUT,
  });
  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          CSS의 <b>위치 속성</b>은 HTML 요소를 문서 상에 배치하는 방법을
          제어하는 속성들로 구성됩니다.
          <br />
          요소의 표시 방식(<code>display</code>), 위치 지정(
          <code>position</code>), 좌표 설정(<code>top</code>, <code>right</code>
          , <code>bottom</code>, <code>left</code>), 흐름 제어(
          <code>float</code>, <code>clear</code>), 넘침 처리(
          <code>overflow</code>), 스크롤 스냅(<code>scroll-snap</code>) 등을
          설정하여 레이아웃을 구성할 수 있습니다.
        </p>
      </blockquote>

      <section className="txt_ex indent mt_xxl">
        <h2 className="ml_mn">표시 관련 속성</h2>

        <article className="indent mt_l">
          <h3 className="ml_mn">
            <i className="t_blue">display</i> 속성
          </h3>
          <p className="mt_m">
            <b className="t_blue">
              <code className="t_blue">display</code> 속성은 웹 페이지의
              레이아웃을 결정하는 중요한 CSS 속성입니다.
              <br />
            </b>
            이 속성은 HTML 요소가 브라우저에 어떻게 표시되는지를 결정합니다.
            <br />
            모든 HTML 요소는 각각의 기본 <code>display</code> 속성값을 가지고
            있으며, 이 값을 변경하여 요소의 표시 방식을 바꿀 수 있습니다.
            <br />
            <code>display</code> 속성값을 변경해도 요소의 본질적인 특성은 변하지
            않습니다.
            <br />
            예를 들어, <code>display</code> 속성값을 인라인에서 블록으로
            변경해도, 원래 블록 요소가 아니었다면 내부에 다른 요소를 포함할 수
            없습니다.
          </p>
          <div className="ol_lst indent mt_m">
            <strong className="font-16 t_black ml_mn">
              대표적인 <code>display</code> 속성의 기본 4가지 값은 다음과
              같습니다.
            </strong>
            <CodeBlock
              title={"display"}
              language="css"
              className="uk_gist_code_box mt_ms"
            >
              {`div {
							display: none | block | inline | inline-block;
						}`}
            </CodeBlock>
            <ol className="mt_ms">
              <li className="line_code font14">
                <strong>
                  <code>none</code>
                </strong>
                <div className="line_code">
                  <p>
                    <strong className="t_black">CSS Level 1</strong>
                  </p>
                  <p>
                    요소를 숨깁니다. 마치 존재하지 않는 것처럼 페이지가
                    렌더링됩니다.
                  </p>
                  <p>
                    <code>visibility: hidden</code>으로 설정하면 요소가 보이지
                    않지만 여전히 공간을 차지합니다.
                  </p>
                </div>
              </li>
              <li className="line_code font14 mt_s">
                <strong>
                  <code>block</code>
                </strong>
                <div className="line_code">
                  <p>
                    <strong className="t_black">CSS Level 1</strong>
                  </p>
                  <p>
                    <code>display</code> 속성값이 <code>block</code>인 요소는
                    항상 새로운 줄에서 시작하며, 해당 줄의 전체 너비를
                    차지합니다.
                  </p>
                </div>
              </li>
              <li className="line_code font14 mt_s">
                <strong>
                  <code>inline</code>
                </strong>
                <div className="line_code">
                  <p>
                    <strong className="t_black">CSS Level 1</strong>
                  </p>
                  <p>
                    <code>display</code> 속성값이 <code>inline</code>인 요소는
                    새로운 줄에서 시작하지 않으며, 요소의 내용만큼만 너비를
                    차지합니다.
                  </p>
                </div>
              </li>
              <li className="line_code font14 mt_s">
                <strong>
                  <code>inline-block</code>
                </strong>
                <div className="line_code">
                  <p>
                    <strong className="t_black">CSS Level 2</strong>
                  </p>
                  <p>
                    요소 자체는 인라인 요소처럼 동작하지만, 내부에서는 블록
                    요소처럼 동작합니다.
                  </p>
                  <p>
                    인라인 요소와 비슷하지만 너비와 높이를 설정할 수 있으며,{" "}
                    <code>margin</code>을 이용하여 여백을 지정할 수 있습니다.
                  </p>
                </div>
              </li>
            </ol>
          </div>

          <p className="font-16 t_black mt_ml">
            <strong>
              위에서 설명한 속성값 외에{" "}
              <strong className="t_black">CSS Display Module Level 3</strong>,{" "}
              <strong className="t_black">CSS Grid Layout</strong>,{" "}
              <strong className="t_black">
                CSS Flexible Box Layout Module
              </strong>
              에 명시된 다음과 같은 값들도 있습니다.
            </strong>
          </p>
          <div className="ol_lst indent mt_m">
            <ol>
              <li className="line_code font14">
                <strong>
                  <code>&lt;display-outside&gt;</code> 값
                </strong>
                <CodeBlock
                  title={"[display-outside]"}
                  language="css"
                  className="uk_gist_code_box mt_sm"
                >
                  {`div {
									display: block;
									display: inline;
									display: run-in;
								}`}
                </CodeBlock>
              </li>

              <li className="line_code font14 mt_ms">
                <strong>
                  <code>&lt;display-inside&gt;</code> 값
                </strong>
                <CodeBlock
                  title={"[display-inside]"}
                  language="css"
                  className="uk_gist_code_box mt_sm"
                >
                  {`div {
									display: flow;
									display: flow-root;
									display: table;
									display: flex;
									display: grid;
									display: ruby;
								}`}
                </CodeBlock>
              </li>

              <li className="line_code font14 mt_ms">
                <strong>
                  <code>&lt;display-outside&gt; + &lt;display-inside&gt;</code>{" "}
                  값
                </strong>
                <CodeBlock
                  title={"[display-outside] + [display-inside]"}
                  language="css"
                  className="uk_gist_code_box mt_sm"
                >
                  {`div {
									display: block flow;
									display: inline table;
									display: flex run-in;
								}`}
                </CodeBlock>
              </li>

              <li className="line_code font14 mt_ms">
                <strong>
                  <code>&lt;display-listitem&gt;</code> 값
                </strong>
                <CodeBlock
                  title={"[display-listitem]"}
                  language="css"
                  className="uk_gist_code_box mt_sm"
                >
                  {`div {
									display: list-item;
									display: list-item block;
									display: list-item inline;
									display: list-item flow;
									display: list-item flow-root;
									display: list-item block flow;
									display: list-item block flow-root;
									display: flow list-item block;
								}`}
                </CodeBlock>
              </li>

              <li className="line_code font14 mt_ms">
                <strong>
                  <code>&lt;display-internal&gt;</code> 값
                </strong>
                <CodeBlock
                  title={"[display-internal]"}
                  language="css"
                  className="uk_gist_code_box mt_sm"
                >
                  {`div {
									display: table-row-group;
									display: table-header-group;
									display: table-footer-group;
									display: table-row;
									display: table-cell;
									display: table-column-group;
									display: table-column;
									display: table-caption;
									display: ruby-base;
									display: ruby-text;
									display: ruby-base-container;
									display: ruby-text-container;
								}`}
                </CodeBlock>
              </li>

              <li className="line_code font14 mt_ms">
                <strong>
                  <code>&lt;display-box&gt;</code> 값
                </strong>
                <CodeBlock
                  title={"[display-box]"}
                  language="css"
                  className="uk_gist_code_box mt_sm"
                >
                  {`div {
									display: contents;
									display: none;
								}`}
                </CodeBlock>
              </li>

              <li className="line_code font14 mt_ms">
                <strong>
                  <code>&lt;display-legacy&gt;</code> 값
                </strong>
                <CodeBlock
                  title={"[display-legacy]"}
                  language="css"
                  className="uk_gist_code_box mt_sm"
                >
                  {`div {
									display: inline-block;
									display: inline-table;
									display: inline-flex;
									display: inline-grid;
								}`}
                </CodeBlock>
              </li>

              <li className="line_code font14 mt_ms">
                <strong>전역 값</strong>
                <CodeBlock
                  title={"display global value"}
                  language="css"
                  className="uk_gist_code_box mt_sm"
                >
                  {`div {
									display: inherit;
									display: initial;
									display: unset;
								}`}
                </CodeBlock>
              </li>
            </ol>
          </div>
        </article>
        <aside className="browser_support mt_m" data-tit="display">
          <ul>
            <li className="ie">4+</li>
            <li className="edge">12.0</li>
            <li className="chrome">1.0</li>
            <li className="firefox">1.0</li>
            <li className="opera">7.0</li>
            <li className="safari">1.0</li>
          </ul>
        </aside>
        <aside className="reference_box mt_m">
          <h2 className="tit">display 참조</h2>
          <ul className="link_lst">
            <li className="reference">
              <a
                href="https://www.w3.org/TR/CSS2/visuren.html#display-prop"
                target="_blank"
                className="fas"
                title="새창열림"
              >
                W3C CSS display
              </a>
            </li>
            <li className="reference">
              <a
                href="https://developer.mozilla.org/ko/docs/Web/CSS/display"
                target="_blank"
                className="fas"
                title="새창열림"
              >
                MDN CSS display
              </a>
            </li>
          </ul>
        </aside>
      </section>

      <section className="txt_ex indent mt_xxl">
        <h2 className="ml_mn">위치 및 정렬 관련 속성</h2>
        <p className="mt_l">
          문서 상에 요소를 배치하는 방법을 지정합니다.
          <br />
          <code>top</code>, <code>right</code>, <code>bottom</code>,{" "}
          <code>left</code> 속성이 요소를 배치할 최종 위치를 결정하며,{" "}
          <code>z-index</code> 속성으로 보이는 순서를 결정합니다.
        </p>

        <article className="indent mt_xl">
          <h3 className="ml_mn" data-conlist-h4="true">
            <i className="t_blue">position</i> 속성
          </h3>
          <p className="mt_m">
            <code>position</code> 속성은 HTML 요소의 위치를 결정하는 방식을
            설정합니다.
          </p>
          <CodeBlock
            title={"position"}
            language="css"
            className="uk_gist_code_box mt_ms"
          >
            {`div {
						position: static | relative | absolute | fixed | sticky;
					}`}
          </CodeBlock>

          <div className="indent mt_l">
            <strong className="font-16 t_black ml_mn">
              CSS에서 요소의 위치를 결정하는 방식에는 다음과 같이 대표적인 4가지
              방식이 있습니다.
            </strong>
          </div>

          <div className="indent_max mt_m">
            <h4 className="ml_mn">
              정적 위치(<i className="t_blue">static position</i>) 지정 방식
            </h4>
            <CodeBlock
              title={"static position"}
              language="css"
              className="uk_gist_code_box mt_ms"
            >
              {`div {
							position: static;
						}`}
            </CodeBlock>
            <div className="line_code mt_ms">
              <p>
                모든 HTML 요소의 <code>position</code> 속성의 기본값은{" "}
                <code>static</code>입니다.
              </p>
              <p>
                <code>static</code>이 지정된 요소는 문서의 일반적인 흐름(normal
                flow)을 따라 배치됩니다.
              </p>
              <p>
                <code>top</code>, <code>right</code>, <code>bottom</code>,{" "}
                <code>left</code>, <code>z-index</code> 속성들이{" "}
                <code>static</code>에서는 효과가 없습니다.
              </p>
              <p>
                즉, <code>position</code>을 초기화할 때 많이 사용됩니다.
              </p>
            </div>
            <div className="view_editor edit_code mt_m">
              <Suspense
                fallback={
                  <EditorFallback className={`uk_editor min_height_500`} />
                }
              >
                <UkEditorTarget
                  target="css/step01/2.11.visual-formatting-model/2.11.2.position-static.html"
                  className={`uk_editor min_height_500`}
                  mode="htmlmixed"
                  browser="default"
                  title={"2.11.2.position-static"}
                  minHeight="500px"
                  result
                />
              </Suspense>
            </div>
          </div>

          <div className="indent_max mt_l">
            <h4 className="ml_mn">
              상대 위치(<i className="t_blue">relative position</i>) 지정 방식
            </h4>
            <CodeBlock
              title={"relative position"}
              language="css"
              className="uk_gist_code_box mt_ms"
            >
              {`div {
							position: relative;
						}`}
            </CodeBlock>
            <div className="line_code mt_ms">
              <p>
                <code>relative</code>가 지정된 요소 역시 문서의 일반적인
                흐름(normal flow)을 따라 배치됩니다.
              </p>
              <p>
                해당 요소가 정적 위치 지정 방식일 때의 위치에 상대적으로
                위치합니다.
              </p>
              <p>
                <code>table-*-group</code>, <code>table-row</code>,{" "}
                <code>table-column</code>, <code>table-cell</code>,{" "}
                <code>table-caption</code> 요소에 <code>relative</code>가 주는
                효과는 정의되지 않았습니다.
              </p>
            </div>
            <div className="view_editor edit_code mt_m">
              <Suspense
                fallback={
                  <EditorFallback className={`uk_editor min_height_500`} />
                }
              >
                <UkEditorTarget
                  target="css/step01/2.11.visual-formatting-model/2.11.2.position-relative.html"
                  className={`uk_editor min_height_500`}
                  mode="htmlmixed"
                  browser="default"
                  title={"2.11.2.position-relative"}
                  minHeight="500px"
                  result
                />
              </Suspense>
            </div>
          </div>

          <div className="indent_max mt_l">
            <h4 className="ml_mn">
              절대 위치(<i className="t_blue">absolute position</i>) 지정 방식
            </h4>
            <CodeBlock
              title={"absolute position"}
              language="css"
              className="uk_gist_code_box mt_ms"
            >
              {`div {
							position: absolute;
						}`}
            </CodeBlock>
            <div className="line_code mt_ms">
              <p>
                절대 위치(absolute position) 지정 방식은 고정 위치가 뷰포트를
                기준으로 위치를 결정하는 것과 비슷하게 동작합니다.
              </p>
              <p>
                하지만 뷰포트를 기준으로 하는 것이 아닌 위치가 설정된
                조상(ancestor) 요소를 기준으로 위치를 설정하게 됩니다.
              </p>
              <p>
                위치가 설정된 조상 요소를 가지지 않는다면, HTML 문서의{" "}
                <code>body</code> 요소를 기준으로 위치를 설정하게 됩니다.
              </p>
              <p>
                위치가 설정된 요소라는 것은 정적 위치(<code>static</code>) 지정
                방식을 제외한 다른 방식(<code>relative</code>,{" "}
                <code>fixed</code>, <code>absolute</code>)으로 위치가 설정된
                요소를 의미합니다.
              </p>
            </div>
            <div className="view_editor edit_code mt_m">
              <Suspense
                fallback={
                  <EditorFallback className={`uk_editor min_height_500`} />
                }
              >
                <UkEditorTarget
                  target="css/step01/2.11.visual-formatting-model/2.11.2.position-absolute.html"
                  className={`uk_editor min_height_500`}
                  mode="htmlmixed"
                  browser="default"
                  title={"2.11.2.position-absolute"}
                  minHeight="500px"
                  result
                />
              </Suspense>
            </div>
          </div>

          <div className="indent_max mt_l">
            <h4 className="ml_mn">
              고정 위치(<i className="t_blue">fixed position</i>) 지정 방식
            </h4>
            <CodeBlock
              title={"fixed position"}
              language="css"
              className="uk_gist_code_box mt_ms"
            >
              {`div {
							position: fixed;
						}`}
            </CodeBlock>
            <div className="line_code mt_ms">
              <p>
                고정 위치(fixed position) 지정 방식은 뷰포트(viewport)를
                기준으로 위치를 설정하는 방식입니다.
              </p>
              <p>
                웹 페이지가 스크롤되어도 고정 위치로 지정된 요소는 항상 같은
                곳에 위치하게 됩니다.
              </p>
            </div>
            <div className="view_editor edit_code mt_m">
              <Suspense
                fallback={
                  <EditorFallback className={`uk_editor min_height_500`} />
                }
              >
                <UkEditorTarget
                  target="css/step01/2.11.visual-formatting-model/2.11.2.position-fixed.html"
                  className={`uk_editor min_height_500`}
                  mode="htmlmixed"
                  browser="default"
                  title={"2.11.2.position-fixed"}
                  minHeight="500px"
                  result
                />
              </Suspense>
            </div>
          </div>
        </article>

        <article className="indent mt_xl">
          <h3 className="ml_mn">
            <i className="t_blue">top</i> 속성
          </h3>
          <p className="mt_m">
            위치가 설정된 조상 요소의 위에서부터의 좌표값을 설정합니다.
          </p>
          <CodeBlock
            title={"position top"}
            language="css"
            className="uk_gist_code_box mt_ms"
          >
            {`div {
						position: [relative | absolute | fixed];
						top: length | %;
					}`}
          </CodeBlock>
        </article>

        <article className="indent mt_xl">
          <h3 className="ml_mn">
            <i className="t_blue">right</i> 속성
          </h3>
          <p className="mt_m">
            위치가 설정된 조상 요소의 오른쪽으로부터의 좌표값을 설정합니다.
          </p>
          <CodeBlock
            title={"position right"}
            language="css"
            className="uk_gist_code_box mt_ms"
          >
            {`div {
						position: [relative | absolute | fixed];
						right: length | %;
					}`}
          </CodeBlock>
        </article>

        <article className="indent mt_xl">
          <h3 className="ml_mn">
            <i className="t_blue">bottom</i> 속성
          </h3>
          <p className="mt_m">
            위치가 설정된 조상 요소의 아래로부터의 좌표값을 설정합니다.
          </p>
          <CodeBlock
            title={"position bottom"}
            language="css"
            className="uk_gist_code_box mt_ms"
          >
            {`div {
						position: [relative | absolute | fixed];
						bottom: length | %;
					}`}
          </CodeBlock>
        </article>

        <article className="indent mt_xl">
          <h3 className="ml_mn">
            <i className="t_blue">left</i> 속성
          </h3>
          <p className="mt_m">
            위치가 설정된 조상 요소의 왼쪽으로부터의 좌표값을 설정합니다.
          </p>
          <CodeBlock
            title={"position left"}
            language="css"
            className="uk_gist_code_box mt_ms"
          >
            {`div {
						position: [relative | absolute | fixed];
						left: length | %;
					}`}
          </CodeBlock>
        </article>

        <article className="indent mt_xl">
          <h3 className="ml_mn">
            <i className="t_blue">z-index</i> 속성
          </h3>
          <p className="mt_m">
            HTML 요소의 위치를 설정하면 어떤 요소들은 설정된 위치 및 방식에 따라
            서로 겹칠 수 있습니다.
            <br />
            <code>z-index</code> 속성은 이렇게 겹쳐지는 요소들이 쌓이는
            스택(stack)의 순서를 설정합니다.
            <br />
            스택의 순서는 양수나 음수 모두 설정할 수 있으며, 크기가 클수록
            앞쪽에 위치하고 작을수록 뒤쪽에 위치하게 됩니다.
          </p>
          <CodeBlock
            title={"z-index"}
            language="css"
            className="uk_gist_code_box mt_ms"
          >
            {`div {
						position: [relative | absolute | fixed];
						z-index: length;
					}`}
          </CodeBlock>
        </article>

        <article className="view_editor edit_code mt_l">
          <h3 className="ve_tit">position 속성 예제</h3>
          <Suspense
            fallback={
              <EditorFallback className={`uk_editor indent min_height_600`} />
            }
          >
            <UkEditorTarget
              target="css/step01/2.11.visual-formatting-model/2.11.2.position.html"
              className={`uk_editor indent min_height_600`}
              mode="htmlmixed"
              browser="default"
              title={"2.11.2.position"}
              minHeight="600px"
              result
            />
          </Suspense>
        </article>
        <aside className="browser_support mt_l" data-tit="position">
          <ul>
            <li className="ie">4+</li>
            <li className="edge">12.0</li>
            <li className="chrome">1.0</li>
            <li className="firefox">1.0</li>
            <li className="opera">4.0</li>
            <li className="safari">1.0</li>
          </ul>
        </aside>
        <aside className="reference_box mt_m">
          <h2 className="tit">position 참조</h2>
          <ul className="link_lst">
            <li className="reference">
              <a
                href="https://www.w3.org/TR/CSS2/visuren.html#propdef-position"
                target="_blank"
                className="fas"
                title="새창열림"
              >
                W3C CSS position
              </a>
            </li>
            <li className="reference">
              <a
                href="https://developer.mozilla.org/ko/docs/Web/CSS/position"
                target="_blank"
                className="fas"
                title="새창열림"
              >
                MDN CSS position
              </a>
            </li>
          </ul>
        </aside>
      </section>

      <section className="txt_ex indent mt_xxl">
        <h2 className="ml_mn">흐름 관련 속성</h2>

        <article className="indent mt_xl">
          <h3 className="ml_mn">
            <i className="t_blue">float</i> 속성
          </h3>
          <p className="mt_m">
            <code>float</code> 속성은 HTML 요소가 주변의 다른 요소들과
            자연스럽게 어울리도록 만들어 줍니다.
            <br />
            <code>float</code>은 본래 위와 같은 목적으로 만들어졌지만, 과거에는
            레이아웃을 작성할 때 주로 사용되었습니다.
            <br />
            현재는 <b>Flexbox</b>나 <b>Grid</b> 같은 속성이 레이아웃 작성 용도로
            주로 사용됩니다.
          </p>
          <CodeBlock
            title={"float"}
            language="css"
            className="uk_gist_code_box mt_ms"
          >
            {`div {
						float: none | left | right;
					}`}
          </CodeBlock>
          <div className="ol_lst mt_ms">
            <ol>
              <li>
                <strong className="t_black">
                  <code>none</code>
                </strong>{" "}
                : 요소가 부동하지 않아야 함을 나타내는 키워드입니다.
              </li>
              <li>
                <strong className="t_black">
                  <code>left</code>
                </strong>{" "}
                : 좌측 정렬. 요소가 자신의 포함(containing) 블록의 좌측에
                부동(float, 떠움직여)해야 함을 나타내는 키워드입니다.
              </li>
              <li>
                <strong className="t_black">
                  <code>right</code>
                </strong>{" "}
                : 우측 정렬. 요소가 자신의 포함 블록의 우측에 부동해야 함을
                나타내는 키워드입니다.
              </li>
            </ol>
          </div>
        </article>

        <article className="indent mt_xl">
          <h3 className="ml_mn">
            <i className="t_blue">clear</i> 속성
          </h3>
          <p className="mt_m">
            <code>clear</code> 속성은 <code>float</code> 속성이 적용된 이후
            나타나는 요소들의 동작을 조절해 줍니다.
            <br />
            컨테이너 요소에 <code>float</code> 속성이 적용되면 그 이후에
            등장하는 모든 요소들은 정확한 위치를 설정하기가 매우 힘들어집니다.
            <br />
            따라서 <code>float</code> 속성을 적용하고자 하는 요소가 모두 등장한
            이후에는 <code>clear</code> 속성을 사용하여, 이후에 등장하는
            요소들이 더는 <code>float</code> 속성에 영향을 받지 않도록
            설정해줘야 합니다.
          </p>
          <CodeBlock
            title={"clear"}
            language="css"
            className="uk_gist_code_box mt_ms"
          >
            {`div {
						clear: both | left | right | none;
					}`}
          </CodeBlock>
          <div className="ol_lst mt_ms">
            <ol>
              <li>
                <strong className="t_black">
                  <code>both</code>
                </strong>{" "}
                : 전체 해제. 요소가 지난 both left 및 right 부동체를 해제하기
                위해 아래로 이동됨을 나타내는 키워드입니다.
              </li>
              <li>
                <strong className="t_black">
                  <code>left</code>
                </strong>{" "}
                : 좌측 해제. 요소가 지난 left 부동체를 해제하기 위해 아래로
                이동됨을 나타내는 키워드입니다.
              </li>
              <li>
                <strong className="t_black">
                  <code>right</code>
                </strong>{" "}
                : 우측 해제. 요소가 지난 right 부동체를 해제하기 위해 아래로
                이동됨을 나타내는 키워드입니다.
              </li>
              <li>
                <strong className="t_black">
                  <code>none</code>
                </strong>{" "}
                : 요소가 지난 부동 요소를 해제하기 위해 아래로 이동되지 않음을
                나타내는 키워드입니다.
              </li>
            </ol>
          </div>
        </article>

        <article className="indent mt_xl">
          <h3 className="ml_mn">
            <i className="t_blue">float을 해제하는 3가지 방법</i>
          </h3>
          <p className="mt_m">
            <code>float</code> 속성을 해제하는 방법은 여러 가지가 있습니다.
            <br />각 방법의 장단점을 이해하고 상황에 맞게 선택하는 것이
            중요합니다.
          </p>
          <div className="ol_lst mt_ms">
            <ol>
              <li>
                <strong className="t_black">
                  float을 사용한 부모요소 하단에 빈 요소 삽입
                </strong>
                <div className="line_code mt_sm">
                  <p>
                    빈 요소를 삽입하지만 추후에 유지보수할 때마다 빈 요소를
                    삽입해야 하는 단점이 있습니다.
                  </p>
                </div>
                <CodeBlock
                  title={"clear type1"}
                  language="css"
                  className="uk_gist_code_box mt_s"
                >
                  {`
								<div className="wrap">
									<div className="left">left content</div>
									<div className="right">right content</div>
									<div className="clear"></div>
								</div>

								
								<style>
									.left {float: left;}
									.right {float: right;}
									.clear {clear: both;}
								</style>`}
                </CodeBlock>
              </li>
              <li className="mt_ms">
                <strong className="t_black">
                  float을 사용한 부모요소에 overflow 속성 사용
                </strong>
                <div className="line_code mt_sm">
                  <p>
                    빈 요소를 삽입하는 방법보다 유용하지만{" "}
                    <code>overflow: hidden</code>을 사용할 경우 자식요소가
                    부모요소를 벗어났을 경우 해당요소는 보이지 않게 됩니다.
                  </p>
                  <p>
                    <code>overflow: auto</code> 방식을 사용할 경우 자식요소가
                    부모요소를 벗어났을 경우 해당요소는 보이게 되지만 잘못하면
                    스크롤이 발생합니다.
                  </p>
                  <p>해당 디자인에 맞추어 적절하게 사용해야 합니다.</p>
                </div>
                <CodeBlock
                  title={"clear type2"}
                  language="css"
                  className="uk_gist_code_box mt_s"
                >
                  {`
								<div className="wrap">
									<div className="left">left content</div>
									<div className="right">right content</div>
								</div>

								
								<style>
									.wrap {overflow: hidden;}
									.left {float: left;}
									.right {float: right;}
								</style>`}
                </CodeBlock>
              </li>
              <li className="mt_ms">
                <strong className="t_black">
                  float을 사용한 부모요소에 가상요소(::after)를 사용
                </strong>
                <div className="line_code mt_sm">
                  <p>
                    가장 많이 사용하면서 빈 요소를 삽입하는 방식과 동일하지만
                    불필요하게 마크업을 수정할 필요없이 CSS로만 수정 가능합니다.
                  </p>
                </div>
                <CodeBlock
                  title={"clear type3"}
                  language="css"
                  className="uk_gist_code_box mt_s"
                >
                  {`
								<div className="wrap">
									<div className="left">left content</div>
									<div className="right">right content</div>
								</div>

								
								<style>
									.wrap {zoom: 1;}
									.wrap:after {display: block; clear: both; content: "";}
									.left {float: left;}
									.right {float: right;}
								</style>`}
                </CodeBlock>
              </li>
            </ol>
          </div>
        </article>

        <article className="view_editor edit_code mt_l">
          <h3 className="ve_tit">float, clear 속성 예제</h3>
          <Suspense
            fallback={
              <EditorFallback className={`uk_editor indent min_height_550`} />
            }
          >
            <UkEditorTarget
              target="css/step01/2.11.visual-formatting-model/2.11.3.float.html"
              className={`uk_editor indent min_height_550`}
              mode="htmlmixed"
              browser="default"
              title={"2.11.3.float"}
              minHeight="550px"
              result
            />
          </Suspense>
        </article>
        <aside className="browser_support mt_m" data-tit="float">
          <ul>
            <li className="ie">4+</li>
            <li className="edge">12.0</li>
            <li className="chrome">1.0</li>
            <li className="firefox">1.0</li>
            <li className="opera">7.0</li>
            <li className="safari">1.0</li>
          </ul>
        </aside>
        <aside className="browser_support mt_m" data-tit="clear">
          <ul>
            <li className="ie">4+</li>
            <li className="edge">12.0</li>
            <li className="chrome">1.0</li>
            <li className="firefox">1.0</li>
            <li className="opera">3.5</li>
            <li className="safari">1.0</li>
          </ul>
        </aside>
        <aside className="reference_box mt_m">
          <strong className="tit">float, clear 참조</strong>
          <ul className="link_lst">
            <li className="reference">
              <a
                href="https://www.w3.org/TR/CSS2/visuren.html#float-position"
                target="_blank"
                className="fas"
                title="새창열림"
              >
                W3C CSS float
              </a>
            </li>
            <li className="reference">
              <a
                href="https://developer.mozilla.org/ko/docs/Web/CSS/float"
                target="_blank"
                className="fas"
                title="새창열림"
              >
                MDN CSS float
              </a>
            </li>
            <li className="reference">
              <a
                href="https://www.w3.org/TR/CSS2/visuren.html#flow-control"
                target="_blank"
                className="fas"
                title="새창열림"
              >
                W3C CSS clear
              </a>
            </li>
            <li className="reference">
              <a
                href="https://developer.mozilla.org/ko/docs/Web/CSS/clear"
                target="_blank"
                className="fas"
                title="새창열림"
              >
                MDN CSS clear
              </a>
            </li>
          </ul>
        </aside>
      </section>

      <section className="txt_ex indent mt_xxl">
        <h2 className="ml_mn">스크롤 스냅(Scroll Snap)</h2>
        <p className="mt_l">
          스크롤 스냅은 스크롤 컨테이너가 스크롤할 때 자식 요소들이 특정 지점에
          자동으로 정렬되도록 하는 기능입니다.
          <br />
          캐러셀, 이미지 갤러리, 가로 스크롤 UI 등을 구현할 때 JavaScript 없이도
          부드럽고 정확한 스크롤 동작을 만들 수 있습니다.
        </p>
        <p className="mt_s">
          스크롤 스냅은{" "}
          <strong className="t_black">CSS Scroll Snap Module Level 1</strong>에
          정의되어 있으며, 최신 브라우저에서 지원됩니다.
        </p>

        <article className="indent mt_xl">
          <h3 className="ml_mn t_blue">scroll-snap-type</h3>
          <p className="mt_m">
            <code>scroll-snap-type</code>은 스크롤 컨테이너에 스냅 동작을
            활성화하고 스냅 축을 지정합니다.
          </p>
          <CodeBlock
            title={"scroll-snap-type"}
            language="css"
            className="uk_gist_code_box mt_ms"
          >
            {`.container {
						scroll-snap-type: none | x | y | block | inline | both;
						scroll-snap-type: x mandatory;
						scroll-snap-type: y proximity;
					}`}
          </CodeBlock>
          <p className="mt_ms">
            <code>scroll-snap-type</code> 속성 값:
          </p>
          <ul className="dot_lst indent mt_s">
            <li>
              <code>none</code>: 스크롤 스냅 없음 (기본값)
            </li>
            <li>
              <code>x</code> / <code>inline</code>: 가로(인라인) 방향 스냅
            </li>
            <li>
              <code>y</code> / <code>block</code>: 세로(블록) 방향 스냅
            </li>
            <li>
              <code>both</code>: 가로와 세로 모두 스냅
            </li>
            <li>
              <code>mandatory</code>: 항상 스냅 포인트에 정렬 (기본값)
            </li>
            <li>
              <code>proximity</code>: 스냅 포인트 근처에서만 정렬
            </li>
          </ul>
        </article>

        <article className="indent mt_xl">
          <h3 className="ml_mn t_blue">scroll-snap-align</h3>
          <p className="mt_m">
            <code>scroll-snap-align</code>은 스크롤 컨테이너 내의 자식 요소에
            적용하여 스냅 정렬 위치를 지정합니다.
          </p>
          <CodeBlock
            title={"scroll-snap-align"}
            language="css"
            className="uk_gist_code_box mt_ms"
          >
            {`.item {
						scroll-snap-align: none | start | end | center;
					}

					/* 가로 스크롤 예제 */
					.container {
						scroll-snap-type: x mandatory;
						overflow-x: auto;
					}

					.item {
						scroll-snap-align: start;
					}`}
          </CodeBlock>
          <p className="mt_ms">
            <code>scroll-snap-align</code> 속성 값:
          </p>
          <ul className="dot_lst indent mt_s">
            <li>
              <code>none</code>: 스냅 정렬 없음
            </li>
            <li>
              <code>start</code>: 요소의 시작 지점에 정렬
            </li>
            <li>
              <code>end</code>: 요소의 끝 지점에 정렬
            </li>
            <li>
              <code>center</code>: 요소의 중앙에 정렬
            </li>
          </ul>
        </article>

        <article className="indent mt_xl">
          <h3 className="ml_mn t_blue">scroll-snap-stop</h3>
          <p className="mt_m">
            <code>scroll-snap-stop</code>은 스크롤할 때 모든 스냅 포인트를
            거쳐야 하는지, 일부를 건너뛸 수 있는지 지정합니다.
          </p>
          <CodeBlock
            title={"scroll-snap-stop"}
            language="css"
            className="uk_gist_code_box mt_ms"
          >
            {`.item {
						scroll-snap-stop: normal | always;
					}

					/* 모든 스냅 포인트를 거쳐야 함 */
					.item {
						scroll-snap-align: start;
						scroll-snap-stop: always;
					}`}
          </CodeBlock>
          <ul className="dot_lst indent mt_s">
            <li>
              <code>normal</code>: 스크롤 시 일부 스냅 포인트를 건너뛸 수 있음
              (기본값)
            </li>
            <li>
              <code>always</code>: 모든 스냅 포인트를 반드시 거쳐야 함
            </li>
          </ul>
        </article>

        <article className="indent mt_xl">
          <h3 className="ml_mn t_blue">scroll-padding</h3>
          <p className="mt_m">
            <code>scroll-padding</code>은 스크롤 스냅 영역의 패딩을 설정합니다.
            컨테이너의 가장자리에서 스냅 포인트까지의 거리를 조절할 수 있습니다.
          </p>
          <CodeBlock
            title={"scroll-padding"}
            language="css"
            className="uk_gist_code_box mt_ms"
          >
            {`.container {
						scroll-snap-type: y mandatory;
						scroll-padding: 20px;  /* 모든 방향 */
						scroll-padding-top: 50px;  /* 상단만 */
						scroll-padding-inline: 1rem;  /* 인라인 방향 */
					}`}
          </CodeBlock>
        </article>

        <article className="indent mt_xl">
          <h3 className="ml_mn t_blue">scroll-margin</h3>
          <p className="mt_m">
            <code>scroll-margin</code>은 각 스냅 항목의 마진을 설정합니다. 스냅
            정렬 시 요소 주변의 여백을 조절할 수 있습니다.
          </p>
          <CodeBlock
            title={"scroll-margin"}
            language="css"
            className="uk_gist_code_box mt_ms"
          >
            {`.item {
						scroll-snap-align: start;
						scroll-margin: 20px;  /* 모든 방향 */
						scroll-margin-top: 50px;  /* 상단만 */
						scroll-margin-inline-start: 1rem;  /* 인라인 시작 */
					}`}
          </CodeBlock>
        </article>

        <article className="mt_xl">
          <h3 className="ml_mn">스크롤 캐러셀 예제</h3>

          <div className="indent mt_ml">
            <h4 className="ml_mn t_blue">가로 스크롤 캐러셀 예제</h4>
            <p className="mt_ms">
              가로로 스크롤하면 각 카드가 시작 지점에 자동으로 정렬됩니다.
              <br />
              <code>scroll-snap-type: x mandatory</code>와{" "}
              <code>scroll-snap-align: start</code>를 사용했습니다.
            </p>
            <div className="view_editor edit_code mt_m">
              <Suspense
                fallback={
                  <EditorFallback
                    className={`uk_editor min_height_460 mb_result_height_480`}
                  />
                }
              >
                <UkEditorTarget
                  target="css/step01/2.11.visual-formatting-model/2.11.4.scroll-snap-horizontal.html"
                  className={`uk_editor min_height_460 mb_result_height_480`}
                  mode="htmlmixed"
                  browser="default"
                  title={"2.11.4.scroll-snap-horizontal"}
                  minHeight="460px"
                  result
                />
              </Suspense>
            </div>
          </div>

          <div className="indent mt_l">
            <h4 className="ml_mn t_blue">세로 스크롤 갤러리 예제</h4>
            <p className="mt_ms">
              세로로 스크롤하면 각 항목이 시작 지점에 자동으로 정렬됩니다.
              <br />
              <code>scroll-snap-type: y mandatory</code>와{" "}
              <code>scroll-snap-align: start</code>를 사용했습니다.
            </p>
            <div className="view_editor edit_code mt_m">
              <Suspense
                fallback={
                  <EditorFallback
                    className={`uk_editor min_height_660 mb_result_height_680`}
                  />
                }
              >
                <UkEditorTarget
                  target="css/step01/2.11.visual-formatting-model/2.11.4.scroll-snap-vertical.html"
                  className={`uk_editor min_height_660 mb_result_height_680`}
                  mode="htmlmixed"
                  browser="default"
                  title={"2.11.4.scroll-snap-vertical"}
                  minHeight="660px"
                  result
                />
              </Suspense>
            </div>
          </div>
        </article>

        <aside className="browser_support mt_xxl" data-tit="scroll snap">
          <ul>
            <li className="edge">79.0</li>
            <li className="chrome">69.0</li>
            <li className="firefox">68.0</li>
            <li className="opera">56.0</li>
            <li className="safari">11.0</li>
          </ul>
        </aside>
      </section>

      <figure className="img_figure indent mt_l">
        <img src={`${IMG_CSS}/02_css_11.png`} alt="CSS 위치 속성" />
        <figcaption className="reference">CSS 위치 속성</figcaption>
      </figure>

      <aside className="reference_box mt_xxl">
        <strong className="tit">위치 속성 참조</strong>
        <ul className="link_lst">
          <li className="reference">
            <a
              href="https://www.w3.org/TR/2011/REC-CSS2-20110607/visuren.html"
              target="_blank"
              className="fas"
              title="새창열림"
            >
              W3C Visual formatting model
            </a>
          </li>
          <li className="reference">
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/Visual_formatting_model"
              target="_blank"
              className="fas"
              title="새창열림"
            >
              MDN Visual formatting model
            </a>
          </li>
          <li className="reference">
            <a
              href="https://www.w3.org/TR/css-scroll-snap-1/"
              target="_blank"
              className="fas"
              title="새창열림"
            >
              W3C CSS Scroll Snap Module Level 1
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
}
export default CssFormattingPage;
