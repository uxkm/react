import { Suspense, lazy } from "react";
import CodeBlock from "@/components/code/CodeBlock";
import { usePageMeta } from "@/components/common/PageMeta";
import PublishingPartTabs from "@/components/docs/PublishingPartTabs";
const UkEditorTarget = lazy(() => import("@/components/code/UkEditorTarget"));

const PAGE_LAYOUT = {
  mainClass: "css_boxmodel_part1",
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

function CssBoxmodelPart1Page() {
  usePageMeta({
    title: "박스 모델 속성 part-1",
    description:
      "CSS의 박스 모델(Box Model)은 모든 HTML 요소를 사각형 박스로 취급하여 배치하는 기본 개념으로, 각 요소는 내용(content), 내부 여백(padding), 테두리(border), 외부 여백(margin) 영역으로 구성됩니다. 이 페이지에서는 박스의 크기를 설정하는 width와 height 속성, 박스의 외부 여백을 설정하는 margin 속성, 박스의 내부 여백을 설정하는 padding 속성, 논리적 프로퍼티(Logical Properties)를 함께 소개합니다.",
    keyword:
      "style, css, Cascading Style Sheets, 크기, 외부 여백, 내부 여백, width, height, margin, padding",
    layout: PAGE_LAYOUT,
  });
  return (
    <>
      <BoxmodelCommonIntro />
      <PublishingPartTabs sectionType="css" />
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <b className="t_blue">박스 모델 속성 part-1</b>에서는
          <br />
        </p>
        <ul className="dot_lst indent_small">
          <li className="before_note">
            <b>
              박스 크기(<code>width</code>, <code>height</code>) 속성
            </b>
          </li>
          <li className="before_note">
            <b>
              박스 외부 여백(<code>margin</code>) 속성
            </b>
          </li>
          <li className="before_note">
            <b>
              박스 내부 여백(<code>padding</code>) 속성
            </b>
          </li>
          <li className="before_note">
            <b>논리적 프로퍼티(Logical Properties)</b>에 대한 내용을 다룹니다.
          </li>
        </ul>
      </blockquote>

      <figure className="img_figure mt_l">
        <img
          src={`${IMG_CSS_BEGINNER}/uxkm_boxmodel.svg`}
          alt="박스 모델 다이어그램"
        />

        <figcaption>
          <strong className="t_black">[박스 모델 다이어그램]</strong>
          <ul>
            <li>
              <b>내용(content)</b> : 텍스트나 이미지가 들어있는 박스의 실질적인
              내용 부분입니다.
            </li>
            <li>
              <b>내부 여백(padding)</b> : 내용과 테두리 사이의 간격입니다.
              패딩은 눈에 보이지 않습니다.
            </li>
            <li>
              <b>테두리(border)</b> : 내용와 패딩 주변을 감싸는 테두리입니다.
            </li>
            <li>
              <b>외부 여백(margin)</b> : 테두리와 이웃하는 요소 사이의
              간격입니다. 마진은 눈에 보이지 않습니다.
            </li>
            <li className="mt_s">
              <code>
                width : width + right padding + left padding + right border +
                left border + right margin + left margin
              </code>
            </li>
            <li>
              <code>
                height : height + top padding + bottom padding + top border +
                bottom border + top margin + bottom margin
              </code>
            </li>
          </ul>
        </figcaption>
      </figure>

      <figure className="img_figure mt_l">
        <figcaption className="mt_0">
          <code>
            width:200px; height:200px; margin:20px auto; padding:20px;
            border:10px solid skyblue;
          </code>
          <br />
          <span className="t_blue">
            위와 같이 명시된 경우의 크롬 devTool에서 확인한 boxmodel 예시
          </span>
        </figcaption>
        <hr className="dashed_line mt_ml" />
        <div className="mt_m">
          <strong className="t_black">[박스모델]</strong>
          <br />
          <img
            src={`${IMG_CSS_BEGINNER}/img_devtool_boxmodel_boxmodel.png`}
            alt="boxmodel"
            className="mt_s"
          />
        </div>
        <hr className="dashed_line mt_ml" />
        <div className="mt_m">
          <strong className="t_black">[Contents 영역]</strong>
          <br />
          <img
            src={`${IMG_CSS_BEGINNER}/img_devtool_boxmodel_content.png`}
            alt="content boxmodel"
            className="mt_s"
          />
        </div>
        <hr className="dashed_line mt_ml" />
        <div className="mt_m">
          <strong className="t_black">[Padding 영역]</strong>
          <br />
          <img
            src={`${IMG_CSS_BEGINNER}/img_devtool_boxmodel_padding.png`}
            alt="padding boxmodel"
            className="mt_s"
          />
        </div>
        <hr className="dashed_line mt_ml" />
        <div className="mt_m">
          <strong className="t_black">[Border 영역]</strong>
          <br />
          <img
            src={`${IMG_CSS_BEGINNER}/img_devtool_boxmodel_border.png`}
            alt="border boxmodel"
            className="mt_s"
          />
        </div>
        <hr className="dashed_line mt_ml" />
        <div className="mt_m">
          <strong className="t_black">[Margin 영역]</strong>
          <br />
          <img
            src={`${IMG_CSS_BEGINNER}/img_devtool_boxmodel_margin.png`}
            alt="margin boxmodel"
            className="mt_s"
          />
        </div>
      </figure>

      <section className="txt_ex indent mt_xxl">
        <h2 className="ml_mn">
          박스 크기(<i className="t_blue">width</i>,{" "}
          <i className="t_blue">height</i>)를 제어하는 속성
        </h2>
        <p className="mt_l">
          HTML 요소의 크기를 설정하는 속성입니다.
          <br />
          <code>width</code>는 가로 크기, <code>height</code>는 세로 크기를
          설정합니다.
        </p>
        <CodeBlock
          title={"width, height"}
          language="css"
          className="uk_gist_code_box mt_ms"
        >
          {`div {
					width: <length> | <percentage>;
					height: <length> | <percentage>;
					max-width: <length> | <percentage>;
					max-height: <length> | <percentage>;
					min-width: <length> | <percentage>;
					min-height: <length> | <percentage>;
				}`}
        </CodeBlock>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <i className="t_blue">width</i> 속성
          </h3>
          <p className="mt_m">
            요소의 가로 크기를 설정하는 속성입니다.
            <br />
            기본값은 <code>auto</code>로, 브라우저가 자동으로 너비를 설정합니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <i className="t_blue">height</i> 속성
          </h3>
          <p className="mt_m">
            요소의 세로 크기를 설정하는 속성입니다.
            <br />
            기본값은 <code>auto</code>로, 브라우저가 자동으로 높이를 설정합니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <i className="t_blue">min-width</i> 속성
          </h3>
          <p className="mt_m">
            요소가 가질 수 있는 최소 가로 크기를 설정하는 속성입니다.
            <br />
            기본값은 <code>0</code>이며, 요소의 너비가 설정한 값 이하로 줄어들지
            않습니다.
            <br />
            브라우저 크기가 줄어들어도 요소의 너비는 최소값 이하로 줄어들지 않고
            수평 스크롤바가 생성됩니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <i className="t_blue">min-height</i> 속성
          </h3>
          <p className="mt_m">
            요소가 가질 수 있는 최소 세로 크기를 설정하는 속성입니다.
            <br />
            기본값은 <code>0</code>이며, 요소의 높이가 설정한 값 이하로 줄어들지
            않습니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <i className="t_blue">max-width</i> 속성
          </h3>
          <p className="mt_m">
            요소가 가질 수 있는 최대 가로 크기를 설정하는 속성입니다.
            <br />
            기본값은 <code>none</code>이며, 브라우저 크기에 맞춰 자동으로
            조정됩니다.
            <br />
            <code>width</code>와 달리 반응형으로 동작하여 브라우저 크기가
            줄어들면 요소의 너비도 함께 줄어듭니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <i className="t_blue">max-height</i> 속성
          </h3>
          <p className="mt_m">
            요소가 가질 수 있는 최대 세로 크기를 설정하는 속성입니다.
            <br />
            기본값은 <code>none</code>이며, 요소의 높이가 설정한 값보다 클 경우
            수직 스크롤바가 생성됩니다.
          </p>
        </article>

        <aside className="browser_support mt_xl" data-tit="box size">
          <ul>
            <li className="ie">4+</li>
            <li className="edge">12.0</li>
            <li className="chrome">1.0</li>
            <li className="firefox">1.0</li>
            <li className="opera">7.0</li>
            <li className="safari">1.0</li>
          </ul>
        </aside>
      </section>

      <section className="txt_ex indent mt_xxl">
        <h2 className="ml_mn">
          박스 외부 여백(<i className="t_blue">margin</i>)을 제어하는 속성
        </h2>
        <p className="mt_l">
          요소의 외부 여백을 설정하는 속성입니다.
          <br />
          테두리와 이웃하는 요소 사이의 간격을 설정하며, 배경색의 영향을 받지
          않습니다.
          <br />
          방향별로 따로 설정할 수 있으며, 음수값으로 설정하면 요소를 겹치게 할
          수 있습니다.
        </p>
        <CodeBlock
          title={"margin"}
          language="css"
          className="uk_gist_code_box mt_m"
        >
          {`div {
					margin: margin-width | inherit;
				}`}
        </CodeBlock>
        <figure className="img_figure mt_m">
          <img
            src={`${IMG_CSS_BEGINNER}/uxkm_boxmodel_margin.svg`}
            alt="margin boxmodel"
          />
          <figcaption>[margin boxmodel 다이어그램]</figcaption>
        </figure>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <i className="t_blue">margin</i> 속성
          </h3>
          <p className="mt_m">
            <code>margin</code>을 각각 방향별로 설정할 수 있습니다.
          </p>
          <CodeBlock
            title={"margin"}
            language="css"
            className="uk_gist_code_box mt_m"
          >
            {`div {
						margin-top: 10px;    /* 윗쪽의 마진(margin) 값을 설정합니다. */
						margin-right: 10px;  /* 오른쪽의 마진(margin) 값을 설정합니다. */
						margin-bottom: 10px; /* 아래쪽의 마진(margin) 값을 설정합니다. */
						margin-left: 10px;   /* 왼쪽의 마진(margin) 값을 설정합니다. */
					}`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <i className="t_blue">margin</i> 축약형 속성
          </h3>
          <p className="mt_m">
            모든 <code>margin</code> 속성을 한 줄에 축약형으로 설정할 수
            있습니다.
            <br />
            값이 동일한 경우 4가지 방식으로 사용할 수 있으며, <code>auto</code>
            로 설정하면 수평 방향 마진이 자동으로 설정되어 요소가 가운데
            정렬됩니다.
          </p>
          <div className="ol_lst indent mt_m">
            <ol>
              <li className="line_code font14 mt_ms">
                <strong>
                  4개의 값을 지정할 때 top, right, bottom, left 순(시계방향)으로
                  설정합니다.
                </strong>
                <CodeBlock
                  title={"margin shorthand"}
                  language="css"
                  className="uk_gist_code_box mt_s"
                >
                  {`div {
									margin: 10px 20px 30px 40px;
									/* 위의 예제는 아래 4줄의 코드와 같은 의미를 가지고 있습니다. */
									margin-top: 10px;
									margin-right: 20px;
									margin-bottom: 30px;
									margin-left: 40px;
								}`}
                </CodeBlock>
              </li>
              <li className="line_code font14 mt_ml">
                <strong>
                  3개의 값을 지정할 때 top, [right/left], bottom 순으로
                  설정합니다.
                </strong>
                <p className="mt_sm">
                  좌/우의 값이 같으면 하나로 명시하여 지정이 가능합니다.
                </p>
                <CodeBlock
                  title={"margin shorthand"}
                  language="css"
                  className="uk_gist_code_box mt_s"
                >
                  {`div {
									margin: 25px 50px 75px;
									/* 위의 예제는 아래 4줄의 코드와 같은 의미를 가지고 있습니다. */
									margin-top: 25px;
									margin-right: 50px;
									margin-left: 50px;
									margin-bottom: 75px
								}`}
                </CodeBlock>
              </li>
              <li className="line_code font14 mt_ml">
                <strong>
                  2개의 값을 지정할 때 [top/bottom], [right/left] 순으로
                  설정합니다.
                </strong>
                <p className="mt_sm">
                  상/하의 값이 같고, 좌/우의 값이 같으면 하나로 명시하여 지정이
                  가능합니다.
                </p>
                <p>
                  이 때 좌/우의 값을 auto로 지정하면 가운데로 정렬이 가능합니다.
                </p>
                <CodeBlock
                  title={"margin shorthand"}
                  language="css"
                  className="uk_gist_code_box mt_s"
                >
                  {`div {
									margin: 25px 50px;
									/* 위의 예제는 아래 4줄의 코드와 같은 의미를 가지고 있습니다. */
									margin-top: 25px;
									margin-bottom: 25px;
									margin-right: 50px;
									margin-left: 50px;
								}`}
                </CodeBlock>
              </li>
              <li className="line_code font14 mt_ml">
                <strong>1개의 값을 지정하여 설정합니다.</strong>
                <p className="mt_sm">
                  상/우/하/좌의 값이 같으면 하나로 명시하여 지정이 가능합니다.
                </p>
                <CodeBlock
                  title={"margin shorthand"}
                  language="css"
                  className="uk_gist_code_box mt_s"
                >
                  {`div {
									margin: 25px;
									/* 위의 예제는 아래 4줄의 코드와 같은 의미를 가지고 있습니다. */
									margin-top: 25px;
									margin-right: 25px;
									margin-bottom: 25px;
									margin-left: 25px;
								}`}
                </CodeBlock>
              </li>
            </ol>
          </div>
        </article>

        <aside className="browser_support mt_l" data-tit="margin">
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
        <h2 className="ml_mn">
          박스 내부 여백(<i className="t_blue">padding</i>)을 제어하는 속성
        </h2>
        <p className="mt_l">
          요소의 내부 여백을 설정하는 속성입니다.
          <br />
          내용과 테두리 사이의 간격을 설정하며, 배경색의 영향을 받습니다.
          <br />
          방향별로 따로 설정할 수 있습니다.
        </p>
        <CodeBlock
          title={"padding"}
          language="css"
          className="uk_gist_code_box mt_m"
        >
          {`div {
					padding: padding-width | inherit;
				}`}
        </CodeBlock>
        <figure className="img_figure mt_m">
          <img
            src={`${IMG_CSS_BEGINNER}/uxkm_boxmodel_padding.svg`}
            alt="padding boxmodel"
          />
          <figcaption>[padding boxmodel 다이어그램]</figcaption>
        </figure>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <i className="t_blue">padding</i> 속성
          </h3>
          <p className="mt_m">
            <code>padding</code>을 각각 방향별로 설정할 수 있습니다.
          </p>
          <CodeBlock
            title={"padding"}
            language="css"
            className="uk_gist_code_box mt_m"
          >
            {`div {
						padding-top: 10px;    /* 윗쪽의 패딩(padding) 값을 설정합니다. */
						padding-right: 10px;  /* 오른쪽의 패딩(padding) 값을 설정합니다. */
						padding-bottom: 10px; /* 아래쪽의 패딩(padding) 값을 설정합니다. */
						padding-left: 10px;   /* 왼쪽의 패딩(padding) 값을 설정합니다. */
					}`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <i className="t_blue">padding</i> 축약형 속성
          </h3>
          <p className="mt_m">
            모든 <code>padding</code> 속성을 한 줄에 축약형으로 설정할 수
            있습니다.
            <br />
            값이 동일한 경우 4가지 방식으로 사용할 수 있습니다.
          </p>
          <div className="ol_lst indent mt_m">
            <ol>
              <li className="line_code font14 mt_ms">
                <strong>
                  4개의 값을 지정할 때 top, right, bottom, left 순(시계방향)으로
                  설정합니다.
                </strong>
                <CodeBlock
                  title={"padding shorthand"}
                  language="css"
                  className="uk_gist_code_box mt_s"
                >
                  {`div {
									padding: 10px 20px 30px 40px;
									/* 위의 예제는 아래 4줄의 코드와 같은 의미를 가지고 있습니다. */
									padding-top: 10px;
									padding-right: 20px;
									padding-bottom: 30px;
									padding-left: 40px;
								}`}
                </CodeBlock>
              </li>
              <li className="line_code font14 mt_ml">
                <strong>
                  3개의 값을 지정할 때 top, [right/left], bottom 순으로
                  설정합니다.
                </strong>
                <p className="mt_sm">
                  좌/우의 값이 같으면 하나로 명시하여 지정이 가능합니다.
                </p>
                <CodeBlock
                  title={"padding shorthand"}
                  language="css"
                  className="uk_gist_code_box mt_s"
                >
                  {`div {
									padding: 25px 50px 75px;
									/* 위의 예제는 아래 4줄의 코드와 같은 의미를 가지고 있습니다. */
									padding-top: 25px;
									padding-right: 50px;
									padding-left: 50px;
									padding-bottom: 75px;
								}`}
                </CodeBlock>
              </li>
              <li className="line_code font14 mt_ml">
                <strong>
                  2개의 값을 지정할 때 [top/bottom], [right/left] 순으로
                  설정합니다.
                </strong>
                <p className="mt_sm">
                  상/하의 값이 같고, 좌/우의 값이 같으면 하나로 명시하여 지정이
                  가능합니다.
                </p>
                <CodeBlock
                  title={"padding shorthand"}
                  language="css"
                  className="uk_gist_code_box mt_s"
                >
                  {`div {
									padding: 25px 50px;
									/* 위의 예제는 아래 4줄의 코드와 같은 의미를 가지고 있습니다. */
									padding-top: 25px;
									padding-bottom: 25px;
									padding-right: 50px;
									padding-left: 50px;
								}`}
                </CodeBlock>
              </li>
              <li className="line_code font14 mt_ml">
                <strong>1개의 값을 지정하여 설정합니다.</strong>
                <p className="mt_sm">
                  상/우/하/좌의 값이 같으면 하나로 명시하여 지정이 가능합니다.
                </p>
                <CodeBlock
                  title={"padding shorthand"}
                  language="css"
                  className="uk_gist_code_box mt_s"
                >
                  {`div {
									padding: 25px;
									/* 위의 예제는 아래 4줄의 코드와 같은 의미를 가지고 있습니다. */
									padding-top: 25px;
									padding-right: 25px;
									padding-bottom: 25px;
									padding-left: 25px;
								}`}
                </CodeBlock>
              </li>
            </ol>
          </div>
        </article>

        <aside className="browser_support mt_l" data-tit="padding">
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
        <h2 className="ml_mn">논리적 프로퍼티(Logical Properties)</h2>
        <p className="mt_l">
          논리적 프로퍼티는 <b>물리적 방향(left, right, top, bottom)</b>이 아닌{" "}
          <b>문서의 쓰기 모드(writing mode)</b>에 따라 자동으로 적응하는 CSS
          속성입니다.
          <br />
          한국어나 영어처럼 좌에서 우로 쓰는 언어(LTR)와 아랍어처럼 우에서 좌로
          쓰는 언어(RTL), 또는 일본어처럼 세로로 쓰는 언어에서도 동일한 스타일을
          유지할 수 있습니다.
        </p>
        <p className="mt_s">
          논리적 프로퍼티는{" "}
          <strong className="t_black">
            CSS Logical Properties and Values Level 1
          </strong>
          에 정의되어 있으며, 다국어 웹사이트나 양방향 레이아웃을 구현할 때
          필수적입니다.
        </p>

        <article className="indent mt_xl">
          <h3 className="ml_mn t_blue">논리적 방향 개념</h3>
          <p className="mt_m">
            논리적 프로퍼티는 다음과 같은 방향 키워드를 사용합니다:
          </p>
          <ul className="dot_lst indent mt_s">
            <li>
              <code>inline-start</code> / <code>inline-end</code>: 텍스트가
              시작하는 방향 / 끝나는 방향 (LTR: 좌/우, RTL: 우/좌)
            </li>
            <li>
              <code>block-start</code> / <code>block-end</code>: 블록이 시작하는
              방향 / 끝나는 방향 (LTR: 상/하, 세로 쓰기: 우/좌)
            </li>
          </ul>
          <p className="mt_ms">
            물리적 프로퍼티와 논리적 프로퍼티의 대응 관계:
          </p>
          <CodeBlock
            title={"논리적 프로퍼티 매핑"}
            language="css"
            className="uk_gist_code_box mt_ms"
          >
            {`/* 물리적 프로퍼티 → 논리적 프로퍼티 (LTR 기준) */

					/* 크기 */
					width → inline-size
					height → block-size

					/* 여백 */
					margin-left → margin-inline-start
					margin-right → margin-inline-end
					margin-top → margin-block-start
					margin-bottom → margin-block-end

					/* 패딩 */
					padding-left → padding-inline-start
					padding-right → padding-inline-end
					padding-top → padding-block-start
					padding-bottom → padding-block-end

					/* 위치 */
					left → inset-inline-start
					right → inset-inline-end
					top → inset-block-start
					bottom → inset-block-end`}
          </CodeBlock>
        </article>

        <article className="indent mt_xl">
          <h3 className="ml_mn t_blue">여백의 논리적 프로퍼티</h3>
          <p className="mt_m">
            <code>margin</code>과 <code>padding</code>의 논리적 프로퍼티는
            인라인 방향과 블록 방향으로 구분됩니다.
          </p>
          <CodeBlock
            title={"margin 논리적 프로퍼티"}
            language="css"
            className="uk_gist_code_box mt_ms"
          >
            {`.box {
						/* 인라인 방향 (가로) */
						margin-inline-start: 20px;  /* margin-left와 동일 (LTR) */
						margin-inline-end: 20px;    /* margin-right와 동일 (LTR) */
						margin-inline: 20px;       /* 양쪽 인라인 여백 */

						/* 블록 방향 (세로) */
						margin-block-start: 10px;   /* margin-top과 동일 */
						margin-block-end: 10px;     /* margin-bottom과 동일 */
						margin-block: 10px;        /* 양쪽 블록 여백 */
					}`}
          </CodeBlock>
          <CodeBlock
            title={"padding 논리적 프로퍼티"}
            language="css"
            className="uk_gist_code_box mt_ms"
          >
            {`.box {
						/* 인라인 방향 (가로) */
						padding-inline-start: 20px;  /* padding-left와 동일 (LTR) */
						padding-inline-end: 20px;    /* padding-right와 동일 (LTR) */
						padding-inline: 20px;       /* 양쪽 인라인 패딩 */

						/* 블록 방향 (세로) */
						padding-block-start: 10px;   /* padding-top과 동일 */
						padding-block-end: 10px;     /* padding-bottom과 동일 */
						padding-block: 10px;        /* 양쪽 블록 패딩 */
					}`}
          </CodeBlock>
        </article>

        <article className="indent mt_xl">
          <h3 className="ml_mn t_blue">크기의 논리적 프로퍼티</h3>
          <p className="mt_m">
            <code>width</code>와 <code>height</code> 대신{" "}
            <code>inline-size</code>와 <code>block-size</code>를 사용할 수
            있습니다.
          </p>
          <CodeBlock
            title={"크기 논리적 프로퍼티"}
            language="css"
            className="uk_gist_code_box mt_ms"
          >
            {`.box {
						/* 물리적 프로퍼티 */
						width: 300px;
						height: 200px;

						/* 논리적 프로퍼티 (동일한 결과) */
						inline-size: 300px;  /* width와 동일 */
						block-size: 200px;  /* height와 동일 */
					}`}
          </CodeBlock>
        </article>

        <article className="indent mt_xl">
          <h3 className="ml_mn t_blue">위치의 논리적 프로퍼티</h3>
          <p className="mt_m">
            <code>position</code> 속성과 함께 사용하는 <code>top</code>,{" "}
            <code>right</code>, <code>bottom</code>, <code>left</code> 대신{" "}
            <code>inset</code> 논리적 프로퍼티를 사용할 수 있습니다.
          </p>
          <CodeBlock
            title={"inset 논리적 프로퍼티"}
            language="css"
            className="uk_gist_code_box mt_ms"
          >
            {`.box {
						position: absolute;

						/* 물리적 프로퍼티 */
						top: 10px;
						right: 20px;
						bottom: 10px;
						left: 20px;

						/* 논리적 프로퍼티 (동일한 결과) */
						inset-block-start: 10px;   /* top과 동일 */
						inset-inline-end: 20px;    /* right와 동일 (LTR) */
						inset-block-end: 10px;     /* bottom과 동일 */
						inset-inline-start: 20px;  /* left와 동일 (LTR) */

						/* 또는 속기형 */
						inset: 10px 20px;  /* block inline */
					}`}
          </CodeBlock>
        </article>

        <article className="view_editor edit_code mt_xl">
          <h3 className="ml_mn ve_tit">논리적 프로퍼티 예제</h3>
          <p className="mt_m">
            쓰기 모드에 따라 자동으로 적응하는 카드 레이아웃 예제입니다.
          </p>
          <Suspense
            fallback={
              <EditorFallback
                className={`uk_editor mt_ms min_height_600 mb_result_height_500`}
              />
            }
          >
            <UkEditorTarget
              target="css/step02/2.9.boxmodel/2.9.8.logical-properties.html"
              className={`uk_editor mt_ms min_height_600 mb_result_height_500`}
              mode="htmlmixed"
              browser="default"
              title={"2.9.8.logical-properties"}
              minHeight="600px"
              result
            />
          </Suspense>
        </article>

        <figure className="img_figure indent mt_l">
          <img src={`${IMG_CSS}/02_css_09_1.png`} alt="CSS 박스 모델" />
          <figcaption className="reference">CSS 박스 모델</figcaption>
        </figure>

        <aside className="browser_support mt_xl" data-tit="logical properties">
          <ul>
            <li className="edge">79.0</li>
            <li className="chrome">69.0</li>
            <li className="firefox">66.0</li>
            <li className="opera">56.0</li>
            <li className="safari">12.1</li>
          </ul>
        </aside>
      </section>

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
              href="https://www.w3.org/TR/css-logical-1/"
              target="_blank"
              className="fas"
              title="새창열림"
            >
              W3C CSS Logical Properties and Values Level 1
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
export default CssBoxmodelPart1Page;
