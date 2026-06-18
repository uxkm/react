import { Suspense, lazy } from "react";
import CodeBlock from "@/components/code/CodeBlock";
import { usePageMeta } from "@/components/common/PageMeta";
const UkEditorTarget = lazy(() => import("@/components/code/UkEditorTarget"));

const PAGE_LAYOUT = {
  mainClass: "css_background",
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

function CssBackgroundPage() {
  usePageMeta({
    title: "Background 속성",
    description:
      "CSS의 Background 속성은 HTML 요소의 배경을 제어하는 속성들로 구성됩니다. 이 페이지에서는 배경색(background-color), 배경 이미지(background-image), 배경 이미지의 반복(background-repeat), 위치(background-position), 크기(background-size), 기준 영역(background-origin), 클리핑 영역(background-clip), 고정 여부(background-attachment)를 개별적으로 설정하는 방법과 background 축약형 속성을 사용하여 한 번에 설정하는 방법을 함께 소개합니다.",
    keyword:
      "style, css, Cascading Style Sheets, 배경, background, background-color, background-image, background-repeat, background-attachment, background-position, background-origin, background-clip, background-size",
    layout: PAGE_LAYOUT,
  });
  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note" aria-label="요약 설명">
        <strong className="sound_only">요약 설명</strong>
        <p>
          CSS의 <code>background</code> 속성은 요소의 배경을 제어하는 속성들로
          구성됩니다.
          <br />
          배경색(<code>background-color</code>), 배경 이미지(
          <code>background-image</code>), 배경 이미지의 반복(
          <code>background-repeat</code>), 위치(<code>background-position</code>
          ), 크기(<code>background-size</code>), 기준 영역(
          <code>background-origin</code>), 클리핑 영역(
          <code>background-clip</code>), 고정 여부(
          <code>background-attachment</code>) 등을 개별적으로 설정하거나,{" "}
          <code>background</code> 축약형 속성을 사용하여 한 번에 설정할 수
          있습니다.
        </p>
      </blockquote>

      <section
        className="txt_ex indent mt_xxl"
        aria-label="background-color 속성 설명"
      >
        <h2 className="ml_mn">
          <i className="t_blue">background</i> 각 속성의 기본 값
        </h2>
        <p className="mt_l">
          <code>background</code> 속성의 기본값은 다음과 같습니다.
        </p>
        <CodeBlock
          title={"background default value"}
          language="css"
          className="uk_gist_code_box mt_m"
        >
          {`p {
					background-color: transparent;
					background-image: none;
					background-repeat: repeat;
					background-position: 0% 0%;
					background-size: auto auto;
					background-origin: padding-box;
					background-clip: border-box;
					background-attachment: scroll;
				}`}
        </CodeBlock>
      </section>

      <section
        className="txt_ex indent mt_xxl"
        aria-label="background-color 속성 설명"
      >
        <h2 className="ml_mn">
          <i className="t_blue">background-color</i> 속성
        </h2>
        <p className="mt_l">
          배경의 색을 지정합니다.
          <br />
          지정한 색으로 <code>border</code>와 <code>padding</code>을 포함한
          영역을 칠합니다.
          <br />
          <code>margin</code> 영역은 칠하지 않습니다.
        </p>
        <CodeBlock
          title={"background-color"}
          language="css"
          className="uk_gist_code_box mt_m"
        >
          {`p {
					background-color: color | transparent | inherit;
				}`}
        </CodeBlock>
        <div className="ol_lst indent mt_ms">
          <ol>
            <li>
              <strong className="t_black">transparent</strong> : 기본값으로
              배경색이 없습니다(투명).
            </li>
            <li>
              <strong className="t_black">color</strong> : 색을 정합니다.
            </li>
          </ol>
        </div>
        <div className="view_editor edit_code mt_m">
          <Suspense
            fallback={
              <EditorFallback
                className={`uk_editor min_height_450 mb_result_height_450`}
              />
            }
          >
            <UkEditorTarget
              target="css/step01/2.6.background/2.6.background-color.html"
              className={`uk_editor min_height_450 mb_result_height_450`}
              mode="htmlmixed"
              browser="default"
              title={"2.6.background-color"}
              minHeight="450px"
              result
            />
          </Suspense>
        </div>
      </section>

      <section
        className="txt_ex indent mt_xxl"
        aria-label="background-image 속성 설명"
      >
        <h2 className="ml_mn">
          <i className="t_blue">background-image</i> 속성
        </h2>
        <p className="mt_l">이미지를 배경으로 사용하게 하는 속성입니다.</p>
        <CodeBlock
          title={"background-image"}
          language="css"
          className="uk_gist_code_box mt_m"
        >
          {`p {
					background-image: none | url('경로') | inherit;
				}`}
        </CodeBlock>
        <div className="ol_lst indent mt_ms">
          <ol>
            <li>
              <strong className="t_black">none</strong> : 기본값으로 이미지를
              배경으로 사용하지 않습니다.
            </li>
            <li>
              <strong className="t_black">url</strong> : 이미지의 URL을
              입력합니다.
            </li>
          </ol>
        </div>
        <div className="view_editor edit_code mt_m">
          <Suspense
            fallback={
              <EditorFallback
                className={`uk_editor min_height_650 mb_result_height_450`}
              />
            }
          >
            <UkEditorTarget
              target="css/step01/2.6.background/2.6.background-image.html"
              className={`uk_editor min_height_650 mb_result_height_450`}
              mode="htmlmixed"
              browser="default"
              title={"2.6.background-image"}
              minHeight="650px"
              result
            />
          </Suspense>
        </div>
      </section>

      <section
        className="txt_ex indent mt_xxl"
        aria-label="background-repeat 속성 설명"
      >
        <h2 className="ml_mn">
          <i className="t_blue">background-repeat</i> 속성
        </h2>
        <p className="mt_l">
          배경 이미지의 반복 방식을 지정하는 속성입니다.
          <br />
          기본값은 <code>repeat</code>로, 이미지가 가로와 세로로 반복됩니다.
          <br />
          <code>repeat-x</code>는 가로 방향으로만, <code>repeat-y</code>는 세로
          방향으로만 반복합니다.
          <br />
          <code>no-repeat</code>를 설정하면 반복하지 않습니다.
        </p>
        <CodeBlock
          title={"background-repeat"}
          language="css"
          className="uk_gist_code_box mt_m"
        >
          {`<style>
					p {
						background-repeat: repeat | repeat-x | repeat-y | no-repeat | inherit;
					}
				</style>`}
        </CodeBlock>
        <div className="ol_lst indent mt_ms">
          <ol>
            <li>
              <strong className="t_black">repeat</strong> : 기본값으로 가로
              방향, 세로 방향으로 반복합니다. 값이 없어도 기본이 repeat 됨.
            </li>
            <li>
              <strong className="t_black">repeat-x</strong> : 가로 방향으로
              반복합니다.
            </li>
            <li>
              <strong className="t_black">repeat-y</strong> : 세로 방향으로
              반복합니다.
            </li>
            <li>
              <strong className="t_black">no-repeat</strong> : 반복하지
              않습니다.
            </li>
          </ol>
        </div>
        <div className="view_editor edit_code mt_m">
          <Suspense
            fallback={
              <EditorFallback
                className={`uk_editor min_height_450 mb_result_height_450`}
              />
            }
          >
            <UkEditorTarget
              target="css/step01/2.6.background/2.6.background-repeat.html"
              className={`uk_editor min_height_450 mb_result_height_450`}
              mode="htmlmixed"
              browser="default"
              title={"2.6.background-repeat"}
              minHeight="450px"
              result
            />
          </Suspense>
        </div>
      </section>

      <section
        className="txt_ex indent mt_xxl"
        aria-label="background-position 속성 설명"
      >
        <h2 className="ml_mn">
          <i className="t_blue">background-position</i> 속성
        </h2>
        <p className="mt_l">
          배경 이미지의 위치를 정하는 속성입니다.
          <br />
          가로 위치/세로 위치를 축약형 방식으로 사용할 수 있습니다.
          <br />
          <code>background-position</code>의 기준은 항상 좌측 상단부터
          시작합니다.
          <br />
          <code>background-position</code>의 기본값은 좌측 상단 기준{" "}
          <code>background-position: 0% 0%</code>입니다.
        </p>
        <CodeBlock
          title={"background-position"}
          language="css"
          className="uk_gist_code_box mt_m"
        >
          {`p {
					background-position: [[percentage | length | left | center | right] [percentage | length | top | center | bottom ]] | [[left | center | right] || [top | center | bottom]] | inherit;
				}`}
        </CodeBlock>
        <div className="ol_lst indent mt_ms">
          <ol>
            <li className="line_code font14">
              <strong className="t_black">position-x position-y</strong> : 가로
              위치(left, center, right, 백분율, 길이)와 세로 위치(top, center,
              bottom, 백분율, 길이)를 정합니다.
            </li>
            <li className="line_code font14">
              <strong className="t_black">
                가로 위치 / 세로 위치 키워드의 조합은 다음과 같이 사용할 수
                있습니다.
              </strong>
              <CodeBlock
                title={"background-position"}
                language="css"
                className="uk_gist_code_box mt_ms tab_line_remove"
              >
                {`div {
								background-position: left top;       // left top      = 0 0
								background-position: left center;    // left center   = 0 50%
								background-position: left bottom;    // left bottom   = 0 100%
								background-position: right top;      // right top     = 100% 0
								background-position: right center;   // right center  = 100% 50%
								background-position: right bottom;   // right bottom  = 100% 100%
								background-position: center top;     // center top    = 50% 0
								background-position: center center;  // center center = 50% 50%
								background-position: center bottom;  // center bottom = 50% 100%
							}`}
              </CodeBlock>
            </li>
          </ol>
        </div>
        <div className="view_editor edit_code mt_m">
          <Suspense
            fallback={
              <EditorFallback
                className={`uk_editor min_height_450 mb_result_height_450`}
              />
            }
          >
            <UkEditorTarget
              target="css/step01/2.6.background/2.6.background-position.html"
              className={`uk_editor min_height_450 mb_result_height_450`}
              mode="htmlmixed"
              browser="default"
              title={"2.6.background-position"}
              minHeight="450px"
              result
            />
          </Suspense>
        </div>
      </section>

      <section
        className="txt_ex indent mt_xxl"
        aria-label="background-attachment 속성 설명"
      >
        <h2 className="ml_mn">
          <i className="t_blue">background-attachment</i> 속성
        </h2>
        <p className="mt_l">배경 이미지의 스크롤 여부를 정합니다.</p>
        <CodeBlock
          title={"background-attachment"}
          language="css"
          className="uk_gist_code_box mt_m"
        >
          {`p {
					background-attachment: scroll | fixed | local | inherit;
				}`}
        </CodeBlock>
        <div className="ol_lst indent mt_ms">
          <ol>
            <li>
              <strong className="t_black">scroll</strong> : 기본값으로 배경은
              요소 자체에 상대적으로 고정되며 내용과 함께 스크롤되지 않습니다.
            </li>
            <li>
              <strong className="t_black">fixed</strong> : 배경은 뷰포트를
              기준으로 고정됩니다. 요소에 스크롤이 있어도 배경은 요소와 함께
              움직이지 않습니다.
            </li>
            <li>
              <strong className="t_black">local</strong> : 선택한 요소와 같이
              움직입니다. 내용을 스크롤하면 배경 이미지도 스크롤됩니다.
            </li>
          </ol>
        </div>
        <div className="view_editor edit_code mt_m">
          <Suspense
            fallback={
              <EditorFallback
                className={`uk_editor min_height_450 mb_result_height_450`}
              />
            }
          >
            <UkEditorTarget
              target="css/step01/2.6.background/2.6.background-attachment.html"
              className={`uk_editor min_height_450 mb_result_height_450`}
              mode="htmlmixed"
              browser="default"
              title={"2.6.background-attachment"}
              minHeight="450px"
              result
            />
          </Suspense>
        </div>
      </section>

      <section
        className="txt_ex indent mt_xxl"
        aria-label="background-size 속성 설명"
      >
        <h2 className="ml_mn">
          <i className="t_blue">background-size</i> 속성
        </h2>
        <p className="mt_l">
          배경 이미지의 가로 크기와 세로 크기를 정할 수 있습니다.
          <br />
          백분율로 크기를 정할 때의 기준은 이미지 크기가 아니라 배경을 사용하는
          요소의 크기입니다.
          <br />
          배경 이미지의 사이즈를 지정합니다.
          <br />
          배경 이미지의 고유 비율을 유지하기 때문에 설정에 따라 이미지의 일부가
          보이지 않을 수 있습니다.
          <br />
          배경 이미지의 <code>width</code>, <code>height</code>를 모두 설정할 수
          있습니다.
          <br />
          이때 첫 번째 값은 <code>width</code>, 두 번째 값은 <code>height</code>
          를 의미합니다.
          <br />
          하나의 값만을 지정한 경우, 지정한 값은 <code>width</code>를 의미하게
          되며 <code>height</code>는 <code>auto</code>로 지정됩니다.
        </p>
        <CodeBlock
          title={"background-size"}
          language="css"
          className="uk_gist_code_box mt_m"
        >
          {`p {
					background-size: auto | length | cover | contain | initial | inherit;
				}`}
        </CodeBlock>
        <div className="ol_lst indent mt_ms">
          <ol>
            <li>
              <strong className="t_black">auto</strong> : 기본값으로 이미지
              크기를 유지합니다.
            </li>
            <li>
              <strong className="t_black">length</strong> : 값을 두 개 넣으면 첫
              번째 값이 가로 크기, 두 번째 값이 세로 크기입니다.
              <br />
              값을 한 개 넣으면 가로 크기이며, 세로 크기는 원본 이미지의 가로
              세로 비율에 맞게 자동으로 정해집니다.
              <div className="line_code indent mt_sm">
                <strong className="ml_mn t_skyblue">px값 지정</strong>
                <p>
                  배경 이미지 크기가 지정된 <code>px</code>값 그대로 설정됩니다.
                  첫 번째 값은 <code>width</code>, 두 번째 값은{" "}
                  <code>height</code>를 의미합니다.
                </p>
              </div>
              <div className="line_code indent mt_sm">
                <strong className="ml_mn t_skyblue">%값 지정</strong>
                <p>
                  배경 이미지 크기가 지정된 <code>%</code>값에 비례하여
                  설정됩니다. 첫 번째 값은 <code>width</code>, 두 번째 값은{" "}
                  <code>height</code>를 의미합니다.
                </p>
                <p>
                  화면을 줄이거나 늘리면 배경 이미지의 크기도 따라서 변경되어
                  찌그러지는 현상이 발생합니다.
                </p>
              </div>
            </li>
            <li className="mt_s">
              <strong className="t_black">cover</strong> : 배경 이미지의 크기
              비율을 유지한 상태에서 부모 요소의 <code>width</code>,{" "}
              <code>height</code> 중 큰 값에 배경 이미지를 맞춥니다. 따라서
              이미지의 일부가 보이지 않을 수 있습니다.
            </li>
            <li>
              <strong className="t_black">contain</strong> : 배경 이미지의 크기
              비율을 유지한 상태에서 부모 요소의 영역에 배경 이미지가 보이지
              않는 부분 없이 전체가 들어갈 수 있도록 이미지 스케일을 조정합니다.
            </li>
          </ol>
        </div>
        <div className="view_editor edit_code mt_m">
          <Suspense
            fallback={
              <EditorFallback
                className={`uk_editor min_height_450 mb_result_height_450`}
              />
            }
          >
            <UkEditorTarget
              target="css/step01/2.6.background/2.6.background-size.html"
              className={`uk_editor min_height_450 mb_result_height_450`}
              mode="htmlmixed"
              browser="default"
              title={"2.6.background-size"}
              minHeight="450px"
              result
            />
          </Suspense>
        </div>
        <aside className="browser_support mt_m" data-tit="background-size">
          <ul>
            <li className="ie">9+</li>
            <li className="edge">12.0</li>
            <li className="chrome">4.0</li>
            <li className="firefox">4.0</li>
            <li className="opera">10.5</li>
            <li className="safari">4.1</li>
          </ul>
        </aside>
      </section>

      <section
        className="txt_ex indent mt_xxl"
        aria-label="background-origin 속성 설명"
      >
        <h2 className="ml_mn">
          <i className="t_blue">background-origin</i> 속성
        </h2>
        <p className="mt_l">
          HTML 요소는 박스로 이루어져 있고, 바깥 여백 영역(Margin Area), 테두리
          영역(Border Area), 안쪽 여백 영역(Padding Area), 내용 영역(Content
          Area)으로 구분합니다.
          <br />
          <code>background-origin</code>으로 배경 이미지를 어느 영역부터
          채워나갈지를 정합니다.
          <br />
          <code>background-origin</code> 속성을 사용할 때{" "}
          <code>background-attachment: fixed</code> 값은 무시됩니다.
        </p>
        <CodeBlock
          title={"background-origin"}
          language="css"
          className="uk_gist_code_box mt_m"
        >
          {`p {
					background-origin: border-box | padding-box | content-box | initial | inherit;
				}`}
        </CodeBlock>
        <div className="ol_lst indent mt_ms">
          <ol>
            <li>
              <strong className="t_black">padding-box</strong> : 기본값으로 안쪽
              여백 영역 왼쪽 위부터 채웁니다.
            </li>
            <li>
              <strong className="t_black">border-box</strong> : 테두리 영역 왼쪽
              위부터 채웁니다.
            </li>
            <li>
              <strong className="t_black">content-box</strong> : 내용 영역 왼쪽
              위부터 채웁니다.
            </li>
          </ol>
        </div>
        <div className="view_editor edit_code mt_m">
          <Suspense
            fallback={
              <EditorFallback
                className={`uk_editor min_height_450 mb_result_height_450`}
              />
            }
          >
            <UkEditorTarget
              target="css/step01/2.6.background/2.6.background-origin.html"
              className={`uk_editor min_height_450 mb_result_height_450`}
              mode="htmlmixed"
              browser="default"
              title={"2.6.background-origin"}
              minHeight="450px"
              result
            />
          </Suspense>
        </div>
        <aside className="browser_support mt_m" data-tit="background-origin">
          <ul>
            <li className="ie">9+</li>
            <li className="edge">12.0</li>
            <li className="chrome">1.0</li>
            <li className="firefox">4.0</li>
            <li className="opera">10.5</li>
            <li className="safari">3.0</li>
          </ul>
        </aside>
      </section>

      <section
        className="txt_ex indent mt_xxl"
        aria-label="background-clip 속성 설명"
      >
        <h2 className="ml_mn">
          <i className="t_blue">background-clip</i> 속성
        </h2>
        <p className="mt_l">
          배경 이미지나 배경색을 그 박스 중 어디에 넣을 지정하는 속성이{" "}
          <code>background-clip</code>입니다.
        </p>
        <CodeBlock
          title={"background-clip"}
          language="css"
          className="uk_gist_code_box mt_m"
        >
          {`p {
					background-clip: border-box | padding-box | content-box | inherit;
				}`}
        </CodeBlock>
        <div className="ol_lst indent mt_ms">
          <ol>
            <li>
              <strong className="t_black">border-box</strong> : 기본값으로
              테두리 영역과 그 안쪽 영역을 채웁니다.
            </li>
            <li>
              <strong className="t_black">padding-box</strong> : 안쪽 여백
              영역과 그 안쪽 영역을 채웁니다.
            </li>
            <li>
              <strong className="t_black">content-box</strong> : 내용 영역과 그
              안쪽 영역을 채웁니다.
            </li>
          </ol>
        </div>
        <div className="view_editor edit_code mt_m">
          <Suspense
            fallback={
              <EditorFallback
                className={`uk_editor min_height_450 mb_result_height_450`}
              />
            }
          >
            <UkEditorTarget
              target="css/step01/2.6.background/2.6.background-clip.html"
              className={`uk_editor min_height_450 mb_result_height_450`}
              mode="htmlmixed"
              browser="default"
              title={"2.6.background-clip"}
              minHeight="450px"
              result
            />
          </Suspense>
        </div>
        <aside className="browser_support mt_m" data-tit="background-clip">
          <ul>
            <li className="ie">9+</li>
            <li className="edge">12.0</li>
            <li className="chrome">4.0</li>
            <li className="firefox">4.0</li>
            <li className="opera">10.5</li>
            <li className="safari">3.0</li>
          </ul>
        </aside>
      </section>

      <section
        className="txt_ex indent mt_xxl"
        aria-label="background Shorthand(축약형) 속성 설명"
      >
        <h2 className="ml_mn">
          <i className="t_blue">background Shorthand</i> 속성
        </h2>
        <p className="mt_l">
          색상, 이미지, 크기, 반복 등 한 번에 모든 배경 스타일 속성을 축약형
          방식으로 설정합니다.
          <br />
          축약형 방식으로 사용하여 설정할 경우 콤마(<code>,</code>)로 구분하여
          여러 형식의 배경을 정의할 수 있습니다.
        </p>
        <CodeBlock
          title={"background Shorthand"}
          language="css"
          className="uk_gist_code_box mt_m"
        >
          {`p {
					background: #ffffff url("image.png") no-repeat right top fixed;
				}`}
        </CodeBlock>
        <div className="view_editor edit_code mt_m">
          <Suspense
            fallback={
              <EditorFallback
                className={`uk_editor min_height_450 mb_result_height_450`}
              />
            }
          >
            <UkEditorTarget
              target="css/step01/2.6.background/2.6.background.html"
              className={`uk_editor min_height_450 mb_result_height_450`}
              mode="htmlmixed"
              browser="default"
              title={"2.6.background"}
              minHeight="450px"
              result
            />
          </Suspense>
        </div>
      </section>

      <aside
        className="browser_support mt_xxl"
        data-tit="background"
        aria-label="브라우저 지원 현황"
      >
        <ul>
          <li className="ie">4+</li>
          <li className="edge">12.0</li>
          <li className="chrome">1.0</li>
          <li className="firefox">1.0</li>
          <li className="opera">3.5</li>
          <li className="safari">1.0</li>
        </ul>
      </aside>

      <figure className="img_figure indent mt_l">
        <img src={`${IMG_CSS}/02_css_06.png`} alt="CSS 배경" />
        <figcaption className="reference">CSS 배경</figcaption>
      </figure>

      <aside className="reference_box mt_xxl" aria-label="Background 속성 참조">
        <strong className="tit">Background 속성 참조</strong>
        <ul className="link_lst">
          <li className="reference">
            <a
              href="https://www.w3.org/TR/2011/REC-CSS2-20110607/colors.html#background"
              target="_blank"
              className="fas"
              title="새창열림"
            >
              W3C Background
            </a>
          </li>
          <li className="reference">
            <a
              href="https://www.w3.org/TR/css-backgrounds-3/"
              target="_blank"
              className="fas"
              title="새창열림"
            >
              W3C CSS Backgrounds and Borders Module Level 3
            </a>
          </li>
          <li className="reference">
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Backgrounds_and_Borders"
              target="_blank"
              className="fas"
              title="새창열림"
            >
              MDN CSS Backgrounds and Borders
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
}
export default CssBackgroundPage;
