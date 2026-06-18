import { Suspense, lazy } from "react";
import CodeBlock from "@/components/code/CodeBlock";
import { usePageMeta } from "@/components/common/PageMeta";
import PublishingPartTabs from "@/components/docs/PublishingPartTabs";
const UkEditorTarget = lazy(() => import("@/components/code/UkEditorTarget"));

const PAGE_LAYOUT = {
  mainClass: "css_boxmodel_part2",
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
const IMG_CSS_BEGINNER = "/images/css/cssBeginner";

function BoxmodelCommonIntro() {
  return (
    <blockquote className="uk_note common_note mt_xxl" role="note">
      <strong className="sound_only">요약 설명</strong>
      <p>
        박스 모델(Box Model)은 CSS가 모든 HTML 요소를 사각형 박스로 취급하여
        배치하는 기본 개념입니다.
        <br />각 요소는 <b>내용(content)</b>, <b>내부 여백(padding)</b>,{" "}
        <b>테두리(border)</b>, <b>외부 여백(margin)</b> 영역으로 구성되며, 이
        영역들을 조합하여 요소의 최종 크기와 위치를 결정합니다.
      </p>
      <p className="mt_ms">
        박스 모델을 이해하면 요소의 크기(<code>width</code>, <code>height</code>
        ), 여백(<code>margin</code>, <code>padding</code>), 테두리(
        <code>border</code>) 등을 정확하게 제어할 수 있으며, 레이아웃을 구성하는
        데 필수적인 개념입니다.
      </p>
    </blockquote>
  );
}

function EditorFallback({ className = "uk_editor min_height_400" }) {
  return <div className={className} aria-hidden />;
}

function CssBoxmodelPart2Page() {
  usePageMeta({
    title: "박스 모델 속성 part-2",
    description:
      "CSS의 박스 모델(Box Model)은 모든 HTML 요소를 사각형 박스로 취급하여 배치하는 기본 개념으로, 각 요소는 내용(content), 내부 여백(padding), 테두리(border), 외부 여백(margin) 영역으로 구성됩니다. 이 페이지에서는 박스의 테두리 스타일, 두께, 색상을 설정하는 border 속성, 테두리의 모서리를 둥글게 만드는 border-radius 속성, 박스의 크기 계산 방식을 제어하는 box-sizing 속성, 박스에 그림자 효과를 추가하는 box-shadow 속성을 함께 소개합니다.",
    keyword:
      "style, css, Cascading Style Sheets, 테두리, 라운드, 모델 크기, 그림자, border, radius, box-sizing, box-shadow",
    layout: PAGE_LAYOUT,
  });
  return (
    <>
      <BoxmodelCommonIntro />
      <PublishingPartTabs sectionType="css" />
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <b className="t_blue">박스 모델 속성 part-2</b>에서는
          <br />
        </p>
        <ul className="dot_lst indent_small">
          <li className="before_note">
            <b>
              박스 테두리(<code>border</code>) 속성
            </b>
          </li>
          <li className="before_note">
            <b>
              박스 라운드(<code>radius</code>) 속성
            </b>
          </li>
          <li className="before_note">
            <b>
              박스 모델 크기(<code>box-sizing</code>) 제어 속성
            </b>
          </li>
          <li className="before_note">
            <b>
              박스 그림자(<code>box-shadow</code>) 속성
            </b>
            에 대한 내용을 다룹니다.
          </li>
        </ul>
      </blockquote>

      <section className="txt_ex indent mt_xxl">
        <h2 className="ml_mn">
          박스 테두리(<i className="t_blue">border</i>)를 제어하는 속성
        </h2>
        <p className="mt_l">
          요소의 테두리 스타일, 두께, 색상을 설정하는 속성입니다.
          <br />
          <code>border</code> 속성을 설정하기 위해서는 반드시{" "}
          <code>border-style</code> 속성이 먼저 설정되어 있어야 합니다.
        </p>
        <figure className="img_figure mt_m">
          <img
            src={`${IMG_CSS_BEGINNER}/uxkm_boxmodel_border.svg`}
            alt="border boxmodel"
          />
          <figcaption>[border boxmodel 다이어그램]</figcaption>
        </figure>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <i className="t_blue">border</i> 축약형(shorthand) 속성
          </h3>
          <p className="mt_m">
            모든 <code>border</code> 속성을 한 줄에 축약형으로 설정할 수
            있습니다.
          </p>
          <CodeBlock
            title={"border shorthand"}
            language="css"
            className="uk_gist_code_box mt_ms"
          >
            {`div {
							border: <border-width> <border-style> <border-color>;
						}`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <i className="t_blue">border-style</i> 속성
          </h3>
          <p className="mt_m">테두리 선의 스타일을 지정하는 속성입니다.</p>
          <div className="ol_lst indent">
            <p className="t_black ml_mn">
              <b>border-style의 기본 키워드 값은 다음과 같습니다.</b>
            </p>
            <ol className="mt_sm">
              <li>
                <strong className="t_black">dotted</strong> : 테두리를 점선으로
                설정합니다.
              </li>
              <li>
                <strong className="t_black">dashed</strong> : 테두리를 약간 긴
                점선으로 설정합니다.
              </li>
              <li>
                <strong className="t_black">solid</strong> : 테두리를 실선으로
                설정합니다.
              </li>
              <li>
                <strong className="t_black">double</strong> : 테두리를 이중
                실선으로 설정합니다.
              </li>
              <li>
                <strong className="t_black">groove</strong> : 테두리를 3차원인
                입체적인 선으로 설정하며, border-color 속성값에 영향을 받습니다.
              </li>
              <li>
                <strong className="t_black">ridge</strong> : 테두리를 3차원인
                능선효과가 있는 선으로 설정하며, border-color 속성값에 영향을
                받습니다.
              </li>
              <li>
                <strong className="t_black">inset</strong> : 테두리를 3차원인
                내지로 끼운 선으로 설정하며, border-color 속성값에 영향을
                받습니다.
              </li>
              <li>
                <strong className="t_black">outset</strong> : 테두리를 3차원인
                외지로 끼운 선으로 설정하며, border-color 속성값에 영향을
                받습니다.
              </li>
              <li>
                <strong className="t_black">none</strong> : 테두리를 없앱니다.
              </li>
              <li>
                <strong className="t_black">hidden</strong> : 테두리가
                존재하기는 하지만 표현되지는 않습니다.
              </li>
            </ol>
          </div>

          <p className="mt_m">
            속성값의 개수에 따라 4개 방향(top, right, bottom, left)에 대하여
            지정할 수 있습니다.
          </p>
          <div className="ol_lst indent">
            <ol>
              <li className="line_code font14 mt_s">
                <strong>
                  4개의 border-style 속성값을 지정할 때 top, right, bottom, left
                  순으로 설정합니다.
                </strong>
                <CodeBlock
                  title={"border-style"}
                  language="css"
                  className="uk_gist_code_box mt_s"
                >
                  {`div {
										border-style: dotted dashed solid double;
										/* 위의 예제는 아래 4줄의 코드와 같은 의미를 가지고 있습니다. */
										border-top-style: dotted;
										border-right-style: dashed;
										border-bottom-style: solid;
										border-left-style: double;
									}`}
                </CodeBlock>
              </li>
              <li className="line_code font14 mt_m">
                <strong>
                  3개의 border-style 속성값을 지정할 때 top, right/left, bottom
                  순으로 설정합니다.
                </strong>
                <CodeBlock
                  title={"border-style"}
                  language="css"
                  className="uk_gist_code_box mt_s"
                >
                  {`div {
										border-style: dotted dashed solid;
										/* 위의 예제는 아래 4줄의 코드와 같은 의미를 가지고 있습니다. */
										border-top-style: dotted;
										border-right-style: dashed;
										border-left-style: dashed;
										border-bottom-style: solid;
									}`}
                </CodeBlock>
              </li>
              <li className="line_code font14 mt_m">
                <strong>
                  2개의 border-style 속성값을 지정할 때 top/bottom, right/left
                  순으로 설정합니다.
                </strong>
                <CodeBlock
                  title={"border-style"}
                  language="css"
                  className="uk_gist_code_box mt_s"
                >
                  {`div {
										border-style: dotted dashed;
										/* 위의 예제는 아래 4줄의 코드와 같은 의미를 가지고 있습니다. */
										border-top-style: dotted;
										border-bottom-style: dotted;
										border-right-style: dashed;
										border-left-style: dashed;
									}`}
                </CodeBlock>
              </li>
              <li className="line_code font14 mt_m">
                <strong>
                  1개의 border-style 속성값을 지정할 때 모든 테두리의 스타일을
                  같게 설정합니다.
                </strong>
                <CodeBlock
                  title={"border-style"}
                  language="css"
                  className="uk_gist_code_box mt_s"
                >
                  {`div {
										border-style: dotted;
										/* 위의 예제는 아래 4줄의 코드와 같은 의미를 가지고 있습니다. */
										border-top-style: dotted;
										border-right-style: dotted;
										border-bottom-style: dotted;
										border-left-style: dotted;
									}`}
                </CodeBlock>
              </li>
            </ol>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <i className="t_blue">border-width</i> 속성
          </h3>
          <p className="mt_m">
            테두리의 두께를 지정하는 속성입니다.
            <br />
            속성값의 개수에 따라 4개 방향(top, right, bottom, left)에 대하여
            지정할 수 있습니다.
            <br />
            <code>border-width</code> 속성은 <code>border-style</code>과 함께
            사용하지 않으면 적용되지 않습니다.
            <br />
            <code>px</code>, <code>em</code>, <code>cm</code> 등과 같은 CSS 크기
            단위를 이용하여 두께를 직접 설정할 수 있으며, 예약어인{" "}
            <code>thin</code>, <code>medium</code>, <code>thick</code>을 사용할
            수도 있습니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <i className="t_blue">border-color</i> 속성
          </h3>
          <p className="mt_m">
            테두리의 색상을 지정하는 속성입니다.
            <br />
            속성값의 개수에 따라 4개 방향(top, right, bottom, left)에 대하여
            지정할 수 있습니다.
            <br />
            <code>border-color</code> 속성은 <code>border-style</code>과 함께
            사용하지 않으면 적용되지 않습니다.
            <br />
            기본적인 <code>color</code> 속성값들뿐만 아니라 투명한 선을 나타내는{" "}
            <code>transparent</code> 속성값을 사용할 수도 있습니다.
            <br />
            <code>border-color</code> 속성값이 설정되지 않으면 해당 요소의{" "}
            <code>color</code> 속성값을 그대로 물려받습니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <i className="t_blue">border-top</i> 속성
          </h3>
          <p className="mt_m">
            상단 테두리를 설정하는 속성입니다.
            <br />
            축약형으로 <code>border-style</code>, <code>border-width</code>,{" "}
            <code>border-color</code>를 한 번에 설정하거나, 각각 따로 설정할 수
            있습니다.
          </p>

          <section className="ol_lst mt_ms">
            <h4>축약형</h4>
            <CodeBlock
              title={"border-top shorthand"}
              language="css"
              className="uk_gist_code_box indent mt_ms"
            >
              {`div {
								border-top: <border-width> <border-style> <border-color>;
							}`}
            </CodeBlock>
          </section>
          <section className="ol_lst mt_m">
            <h4>style, width, color</h4>
            <CodeBlock
              title={"border-top style, width, color"}
              language="css"
              className="uk_gist_code_box indent mt_ms"
            >
              {`div {
								border-top-style: <border-style>;
								border-top-width: <border-width>;
								border-top-color: <border-color>;
							}`}
            </CodeBlock>
          </section>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <i className="t_blue">border-right</i> 속성
          </h3>
          <p className="mt_m">
            오른쪽 테두리를 설정하는 속성입니다.
            <br />
            축약형으로 <code>border-style</code>, <code>border-width</code>,{" "}
            <code>border-color</code>를 한 번에 설정하거나, 각각 따로 설정할 수
            있습니다.
          </p>

          <section className="ol_lst mt_ms">
            <h4>축약형</h4>
            <CodeBlock
              title={"border-right shorthand"}
              language="css"
              className="uk_gist_code_box indent mt_ms"
            >
              {`div {
								border-right: <border-width> <border-style> <border-color>;
							}`}
            </CodeBlock>
          </section>
          <section className="ol_lst mt_m">
            <h4>style, width, color</h4>
            <CodeBlock
              title={"border-right style, width, color"}
              language="css"
              className="uk_gist_code_box indent mt_ms"
            >
              {`div {
								border-right-style: <border-style>;
								border-right-width: <border-width>;
								border-right-color: <border-color>;
							}`}
            </CodeBlock>
          </section>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <i className="t_blue">border-bottom</i> 속성
          </h3>
          <p className="mt_m">
            하단 테두리를 설정하는 속성입니다.
            <br />
            축약형으로 <code>border-style</code>, <code>border-width</code>,{" "}
            <code>border-color</code>를 한 번에 설정하거나, 각각 따로 설정할 수
            있습니다.
          </p>

          <section className="ol_lst mt_ms">
            <h4>축약형</h4>
            <CodeBlock
              title={"border-bottom shorthand"}
              language="css"
              className="uk_gist_code_box indent mt_ms"
            >
              {`div {
								border-bottom: <border-width> <border-style> <border-color>;
							}`}
            </CodeBlock>
          </section>
          <section className="ol_lst mt_m">
            <h4>style, width, color</h4>
            <CodeBlock
              title={"border-bottom style, width, color"}
              language="css"
              className="uk_gist_code_box indent mt_ms"
            >
              {`div {
								border-bottom-style: <border-style>;
								border-bottom-width: <border-width>;
								border-bottom-color: <border-color>;
							}`}
            </CodeBlock>
          </section>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <i className="t_blue">border-left</i> 속성
          </h3>
          <p className="mt_m">
            왼쪽 테두리를 설정하는 속성입니다.
            <br />
            축약형으로 <code>border-style</code>, <code>border-width</code>,{" "}
            <code>border-color</code>를 한 번에 설정하거나, 각각 따로 설정할 수
            있습니다.
          </p>

          <section className="ol_lst mt_ms">
            <h4>축약형</h4>
            <CodeBlock
              title={"border-left shorthand"}
              language="css"
              className="uk_gist_code_box indent mt_ms"
            >
              {`div {
								border-left: <border-width> <border-style> <border-color>;
							}`}
            </CodeBlock>
          </section>
          <section className="ol_lst mt_m">
            <h4>style, width, color</h4>
            <CodeBlock
              title={"border-left style, width, color"}
              language="css"
              className="uk_gist_code_box indent mt_ms"
            >
              {`div {
								border-left-style: <border-style>;
								border-left-width: <border-width>;
								border-left-color: <border-color>;
							}`}
            </CodeBlock>
          </section>
        </article>

        <aside className="browser_support mt_l" data-tit="border">
          <ul>
            <li className="ie">4+</li>
            <li className="edge">12.0</li>
            <li className="chrome">1.0</li>
            <li className="firefox">1.0</li>
            <li className="opera">3.5</li>
            <li className="safari">1.0</li>
          </ul>
        </aside>
      </section>

      <section className="txt_ex indent mt_xxl">
        <h2 className="ml_mn css3">
          박스 라운드(<i className="t_blue">radius</i>)를 제어하는 속성
        </h2>
        <p className="mt_l">
          <strong className="t_black">CSS3</strong>에 추가된 속성으로, 테두리
          모서리를 둥글게 표현하는 속성입니다.
          <br />
          속성값은 길이를 나타내는 단위(<code>px</code>, <code>em</code> 등)와{" "}
          <code>%</code>를 사용합니다.
          <br />
          각각의 모서리를 개별적으로 지정할 수도 있고, 4개의 모서리를 축약형으로
          한 번에 지정할 수도 있습니다.
        </p>
        <CodeBlock
          title={"border-radius"}
          language="css"
          className="uk_gist_code_box mt_ms"
        >
          {`div {
						border-radius: border-radius-width | inherit;
					}`}
        </CodeBlock>

        <figure className="img_figure mt_m">
          <img
            src={`${IMG_CSS_BEGINNER}/uxkm_border-radius.svg`}
            alt="border-radius"
          />
          <figcaption>[border-radius 다이어그램]</figcaption>
        </figure>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <i className="t_blue">border-radius</i> 축약형(shorthand) 속성
          </h3>
          <p className="mt_m">
            상단 좌측, 상단 우측, 하단 우측, 하단 좌측의 속성을 한 번에 축약하여
            지정할 수 있습니다.
          </p>
          <CodeBlock
            title={"border-radius shorthand"}
            language="css"
            className="uk_gist_code_box mt_ms"
          >
            {`div {
							/* 아래의 예제는 모두 같은 결과를 나타냅니다. */
							/* border-radius: [top-left-width top-right-width bottom-left-width bottom-right-width]; */
							border-radius: 20px;

							/* border-radius: top-left-width top-right-width bottom-left-width bottom-right-width; */
							border-radius: 20px 20px 20px 20px;

							/* border-[상|하]-[좌|우]-radius: border-width; */
							border-top-left-radius: 20px;
							border-top-right-radius: 20px;
							border-bottom-left-radius: 20px;
							border-bottom-right-radius: 20px;
						}`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <i className="t_blue">border-top-left-radius</i> 속성
          </h3>
          <p className="mt_m">상단 좌측 라운드만 지정합니다.</p>
          <p className="mt_s">
            <code>ex) border-top-left-radius: 20px</code>
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <i className="t_blue">border-top-right-radius</i> 속성
          </h3>
          <p className="mt_m">상단 우측 라운드만 지정합니다.</p>
          <p className="mt_s">
            <code>ex) border-top-right-radius: 20px</code>
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <i className="t_blue">border-bottom-right-radius</i> 속성
          </h3>
          <p className="mt_m">하단 우측 라운드만 지정합니다.</p>
          <p className="mt_s">
            <code>ex) border-bottom-right-radius: 20px</code>
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <i className="t_blue">border-bottom-left-radius</i> 속성
          </h3>
          <p className="mt_m">하단 좌측 라운드만 지정합니다.</p>
          <p className="mt_s">
            <code>ex) border-bottom-left-radius: 20px</code>
          </p>
        </article>

        <article className="view_editor edit_code mt_l">
          <h3 className="ve_tit">박스 라운드(radius) 예제</h3>
          <Suspense
            fallback={
              <EditorFallback
                className={`uk_editor indent mt_m min_height_650 mb_result_height_500`}
              />
            }
          >
            <UkEditorTarget
              target="css/step01/2.9.box-model/2.9.6.border-radius.html"
              className={`uk_editor indent mt_m min_height_650 mb_result_height_500`}
              mode="htmlmixed"
              browser="default"
              title={"2.9.6.border-radius"}
              minHeight="650px"
              result
            />
          </Suspense>
        </article>

        <aside className="browser_support mt_l" data-tit="border-radius">
          <ul>
            <li className="ie">9+</li>
            <li className="edge">12.0</li>
            <li className="chrome">5.0</li>
            <li className="firefox">4.5</li>
            <li className="opera">10.5</li>
            <li className="safari">5.0</li>
          </ul>
        </aside>
      </section>

      <section className="txt_ex indent mt_xxl">
        <h2 className="ml_mn css3">
          박스모델 크기(<i className="t_blue">box-sizing</i>) 제어
        </h2>
        <p className="mt_l">
          <strong className="t_black">CSS3</strong>에 추가된 속성으로, 요소의
          너비와 높이를 계산하는 방법을 지정하는 속성입니다.
          <br />
          기본값인 <code>content-box</code>는 <code>width</code>와{" "}
          <code>height</code>가 콘텐츠 영역만을 의미하지만,{" "}
          <code>border-box</code>로 설정하면 <code>width</code>와{" "}
          <code>height</code>가 패딩과 테두리를 포함한 전체 크기를 의미합니다.
        </p>

        <article className="mt_l indent">
          <h3 className="ml_mn">
            <i className="t_blue">box-sizing</i> 속성
          </h3>
          <p className="mt_m">
            요소의 너비와 높이를 계산하는 방법을 지정하는 속성입니다.
            <br />
            <code>box-sizing</code> 속성은 상속되지 않으므로, 모든 요소에
            적용하려면 아래와 같이 초기화합니다.
          </p>
          <CodeBlock
            title={"box-sizing"}
            language="css"
            className="uk_gist_code_box mt_ms"
          >
            {`html {box-sizing: border-box;}
						*, *::before, *::after {box-sizing: inherit;}

						div {
							box-sizing: content-box | border-box;
						}`}
          </CodeBlock>
          <div className="ol_lst indent mt_ms">
            <ol>
              <li>
                <strong className="t_black">content-box</strong> : 기본값으로{" "}
                <code>width</code>, <code>height</code> 속성값은 콘텐츠 영역만을
                의미합니다.
              </li>
              <li>
                <strong className="t_black">border-box</strong> :{" "}
                <code>width</code>, <code>height</code> 속성값은 콘텐츠 영역,{" "}
                <code>padding</code>, <code>border</code>가 포함된 값을
                의미합니다.
              </li>
            </ol>
          </div>

          <div className="view_editor edit_code mt_m">
            <Suspense
              fallback={
                <EditorFallback
                  className={`uk_editor min_height_450 mb_result_height_500`}
                />
              }
            >
              <UkEditorTarget
                target="css/step01/2.9.box-model/2.9.boxmodel.html"
                className={`uk_editor min_height_450 mb_result_height_500`}
                mode="htmlmixed"
                browser="default"
                title={"2.9.boxmodel"}
                minHeight="450px"
                result
              />
            </Suspense>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <i className="t_blue">box-sizing</i> 테스트
          </h3>
          <p className="mt_m">
            위에 설명된 속성(<i className="t_blue">width</i>,{" "}
            <i className="t_blue">height</i>, <i className="t_blue">margin</i>,{" "}
            <i className="t_blue">padding</i>, <i className="t_blue">border</i>,{" "}
            <i className="t_blue">border-radius</i>)이
            <i className="t_blue">box-sizing</i>의 속성 기준으로 어떤 차이점이
            있는지 확인할 수 있습니다.
            <br />
            각 속성을 좌·우로 드래그하여 테스트해보세요.
            <br />
            <span className="reference mt_l">
              테스트기 출처 :{" "}
              <a
                href="http://921430km.com/_temp/transform/box_model.php"
                target="_blank"
                title="새창열림"
              >
                http://921430km.com/box_model
              </a>
            </span>
          </p>
          <div className="iframe_con box_model_iframe mt_m">
            <iframe
              src="/_code_samples/kmtemp/transform/box_model.html"
              width="100%"
              height="100%"
              scrolling="no"
            ></iframe>
          </div>
        </article>

        <aside className="browser_support mt_l" data-tit="box-sizing">
          <ul>
            <li className="ie">8+</li>
            <li className="edge">12.0</li>
            <li className="chrome">10.0</li>
            <li className="firefox">29.0</li>
            <li className="opera">7.0</li>
            <li className="safari">5.1</li>
          </ul>
        </aside>
      </section>

      <section className="txt_ex indent mt_xxl">
        <h2 className="ml_mn css3">
          박스 그림자(<i className="t_blue">box-shadow</i>)를 제어하는 속성
        </h2>
        <p className="mt_l">
          <strong className="t_black">CSS3</strong>에 추가된 속성으로, 요소에
          그림자 효과를 적용하는 속성입니다.
          <br />
          콤마(<code>,</code>)로 구분하여 여러 개의 그림자를 지정할 수 있습니다.
        </p>
        <CodeBlock
          title={"box-shadow"}
          language="css"
          className="uk_gist_code_box mt_m"
        >
          {`div {
						box-shadow: none | [ inset | position-x | position-y | blur | spread | color ] | inherit;
					}`}
        </CodeBlock>
        <div className="ol_lst indent mt_m">
          <ol>
            <li>
              <strong className="t_black">none</strong> : 기본값으로 그림자
              효과를 없앱니다.
            </li>
            <li>
              <strong className="t_black">inset</strong> : 그림자가 요소 안쪽에
              위치합니다. 생략 가능합니다.
            </li>
            <li>
              <strong className="t_black">position-x</strong> : 그림자의 가로
              위치입니다. 양수는 오른쪽, 음수는 왼쪽으로 이동합니다.
            </li>
            <li>
              <strong className="t_black">position-y</strong> : 그림자의 세로
              위치입니다. 양수는 아래쪽, 음수는 위쪽으로 이동합니다.
            </li>
            <li>
              <strong className="t_black">blur</strong> : 그림자의 흐림
              정도입니다. 값이 클수록 더 흐려집니다. 생략 가능합니다.
            </li>
            <li>
              <strong className="t_black">spread</strong> : 그림자의 확장
              여부입니다. 양수는 확대, 음수는 축소합니다. 생략 가능합니다.
            </li>
            <li>
              <strong className="t_black">color</strong> : 그림자의 색상입니다.
              생략 가능합니다.
            </li>
          </ol>
        </div>

        <article className="view_editor edit_code mt_m">
          <Suspense
            fallback={
              <EditorFallback
                className={`uk_editor min_height_450 mb_result_height_500`}
              />
            }
          >
            <UkEditorTarget
              target="css/step01/2.9.box-model/2.9.7.box-shadow.html"
              className={`uk_editor min_height_450 mb_result_height_500`}
              mode="htmlmixed"
              browser="default"
              title={"2.9.7.box-shadow"}
              minHeight="450px"
              result
            />
          </Suspense>
        </article>

        <aside className="browser_support mt_l" data-tit="box-shadow">
          <ul>
            <li className="ie">9+</li>
            <li className="edge">12.0</li>
            <li className="chrome">10.0</li>
            <li className="firefox">4.0</li>
            <li className="opera">10.5</li>
            <li className="safari">5.1</li>
          </ul>
        </aside>
      </section>

      <figure className="img_figure indent mt_l">
        <img src={`${IMG_CSS}/02_css_09_2.png`} alt="CSS 박스 모델" />
        <figcaption className="reference">CSS 박스 모델</figcaption>
      </figure>

      <aside className="reference_box mt_xxl">
        <strong className="tit">박스 모델 속성 참조</strong>
        <ul className="link_lst">
          <li className="reference">
            <a
              href="https://www.w3.org/TR/2011/REC-CSS2-20110607/box.html#box-model"
              target="_blank"
              className="fas"
              title="새창열림"
            >
              W3C Box Model
            </a>
          </li>
          <li className="reference">
            <a
              href="https://drafts.csswg.org/css-box-3"
              target="_blank"
              className="fas"
              title="새창열림"
            >
              Draft, CSS Box Model Module Level 3
            </a>
          </li>
          <li className="reference">
            <a
              href="https://drafts.csswg.org/css-ui-3/#box-sizing"
              target="_blank"
              className="fas"
              title="새창열림"
            >
              CSS Basic User Interface Module Level 3
            </a>
          </li>
          <li className="reference">
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model"
              target="_blank"
              className="fas"
              title="새창열림"
            >
              MDN Box Model
            </a>
          </li>
          <li className="reference">
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius"
              target="_blank"
              className="fas"
              title="새창열림"
            >
              MDN border-radius
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
}
export default CssBoxmodelPart2Page;
