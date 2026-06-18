import { Suspense, lazy } from "react";
import CodeBlock from "@/components/code/CodeBlock";
import { usePageMeta } from "@/components/common/PageMeta";
const UkEditorTarget = lazy(() => import("@/components/code/UkEditorTarget"));

const PAGE_LAYOUT = {
  mainClass: "css_interface",
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
const IMG_CURSOR = "/images/css/cursor";

function EditorFallback({ className = "uk_editor min_height_400" }) {
  return <div className={className} aria-hidden />;
}

function CssInterfacePage() {
  usePageMeta({
    title: "사용자 인터페이스 속성",
    description:
      "CSS의 사용자 인터페이스 속성은 웹 페이지에서 사용자와의 상호작용을 위한 시각적 요소를 제어하는 속성들로 구성됩니다. 이 페이지에서는 요소의 아웃라인 스타일을 설정하는 outline 속성과 마우스 커서 모양을 지정하는 cursor 속성을 함께 소개합니다.",
    keyword: "style, css, Cascading Style Sheets, outline, cursor",
    layout: PAGE_LAYOUT,
  });
  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          사용자 인터페이스 속성은 웹 페이지에서 사용자와의 상호작용을 위한
          시각적 요소를 제어하는 CSS 속성들입니다.
          <br />
          CSS 초급 과정의 기본 속성 외에, 사용자 인터페이스와 관련된 속성들을
          다룹니다.
        </p>
      </blockquote>

      <section className="txt_ex indent mt_xxl">
        <h2 className="ml_mn">
          <i className="t_blue">outline</i> 속성
        </h2>
        <p className="mt_l">
          <code>outline</code> 속성은 HTML 요소의 가장 바깥 부분을 둘러싸고 있는
          아웃라인 부분의 스타일을 설정합니다.
          <br />
          <code>border</code> 속성과 마찬가지로 <code>style</code>,{" "}
          <code>width</code>, <code>color</code> 속성을 가집니다.
          <br />
          하지만 <code>border</code> 속성과 달리 <code>outline</code> 속성은
          HTML 요소의 전체 크기에 포함되지 않으며, 요소의 높이나 너비에 영향을
          주지 않습니다.
          <br />
          <code>outline</code> 속성을 설정하기 위해서는 반드시{" "}
          <code>outline-style</code> 속성이 먼저 설정되어 있어야 합니다.
          <br />
          익스플로러 8과 그 이전 버전에서는 HTML 문서에{" "}
          <code>&lt;!DOCTYPE html&gt;</code>이 선언되어 있어야{" "}
          <code>outline</code> 속성이 제대로 표현됩니다.
        </p>
        <CodeBlock
          title={"outline"}
          language="css"
          className="uk_gist_code_box mt_m"
        >
          {`div {
					outline: outline-width outline-style outline-color;
				}`}
        </CodeBlock>
        <div className="ol_lst indent mt_m">
          <ol>
            <li>
              <strong className="t_black">
                <code>outline</code>
              </strong>{" "}
              : 아웃라인 축약 표현(outline shorthand)으로 모든{" "}
              <code>outline</code> 속성을 이용한 스타일을 한 줄에 설정할 수
              있습니다.
            </li>
            <li>
              <strong className="t_black">
                <code>outline-width</code>
              </strong>{" "}
              : 아웃라인(outline)의 너비를 설정합니다.
            </li>
            <li>
              <strong className="t_black">
                <code>outline-style</code>
              </strong>{" "}
              : 아웃라인(outline)을 다양한 모양으로 설정합니다.
            </li>
            <li>
              <strong className="t_black">
                <code>outline-color</code>
              </strong>{" "}
              : 아웃라인(outline)의 색상을 설정합니다.
            </li>
            <li>
              <strong className="t_black">
                <code>outline-offset</code>
              </strong>{" "}
              : 테두리(<code>border</code>)와 아웃라인(<code>outline</code>)
              사이의 여백을 설정합니다. IE는 지원하지 않습니다.
            </li>
          </ol>
        </div>

        <article className="indent mt_xl">
          <h3 className="ml_mn">
            <i className="t_blue">outline-width</i> 속성
          </h3>
          <p className="mt_m">
            <code>outline-width</code> 속성은 아웃라인(outline)의 두께를
            설정합니다.
            <br />
            <code>px</code>, <code>em</code>, <code>cm</code> 등과 같은 CSS 크기
            단위를 이용하여 두께를 직접 설정할 수 있습니다.
            <br />
            또한, 미리 설정해 놓은 예약어인 <code>thin</code>,{" "}
            <code>medium</code>, <code>thick</code>을 사용하여 설정할 수도
            있습니다.
          </p>
        </article>

        <article className="indent mt_xl">
          <h3 className="ml_mn">
            <i className="t_blue">outline-style</i> 속성
          </h3>
          <p className="mt_m">
            <code>outline-style</code> 속성을 이용하면 아웃라인(outline)을
            다양한 모양으로 설정할 수 있습니다.
          </p>
          <div className="ol_lst indent mt_s">
            <ol>
              <li>
                <strong className="t_black">
                  <code>dotted</code>
                </strong>{" "}
                : 아웃라인을 점선으로 설정합니다.
              </li>
              <li>
                <strong className="t_black">
                  <code>dashed</code>
                </strong>{" "}
                : 아웃라인을 약간 긴 점선으로 설정합니다.
              </li>
              <li>
                <strong className="t_black">
                  <code>solid</code>
                </strong>{" "}
                : 아웃라인을 실선으로 설정합니다.
              </li>
              <li>
                <strong className="t_black">
                  <code>double</code>
                </strong>{" "}
                : 아웃라인을 이중 실선으로 설정합니다.
              </li>
              <li>
                <strong className="t_black">
                  <code>groove</code>
                </strong>{" "}
                : 아웃라인을 3차원인 입체적인 선으로 설정하며,{" "}
                <code>outline-color</code> 속성값에 영향을 받습니다.
              </li>
              <li>
                <strong className="t_black">
                  <code>ridge</code>
                </strong>{" "}
                : 아웃라인을 3차원인 능선효과가 있는 선으로 설정하며,{" "}
                <code>outline-color</code> 속성값에 영향을 받습니다.
              </li>
              <li>
                <strong className="t_black">
                  <code>inset</code>
                </strong>{" "}
                : 3차원인 내지로 끼운 선으로 설정하며,{" "}
                <code>outline-color</code> 속성값에 영향을 받습니다.
              </li>
              <li>
                <strong className="t_black">
                  <code>outset</code>
                </strong>{" "}
                : 3차원인 외지로 끼운 선으로 설정하며,{" "}
                <code>outline-color</code> 속성값에 영향을 받습니다.
              </li>
              <li>
                <strong className="t_black">
                  <code>none</code>
                </strong>{" "}
                : 아웃라인(outline)을 없앱니다.
              </li>
              <li>
                <strong className="t_black">
                  <code>hidden</code>
                </strong>{" "}
                : 아웃라인(outline)이 존재하기는 하지만 표현되지는 않습니다.
              </li>
            </ol>
          </div>
        </article>

        <article className="indent mt_xl">
          <h3 className="ml_mn">
            <i className="t_blue">outline-color</i> 속성
          </h3>
          <p className="mt_m">
            <code>outline-color</code> 속성은 아웃라인(outline)의 색상을
            설정합니다.
            <br />
            기본적인 <code>color</code> 속성값들뿐만 아니라 색반전을 나타내는{" "}
            <code>invert</code> 속성값을 사용할 수 있습니다.
            <br />
            <code>invert</code> 속성값은 배경색과 상관없이 아웃라인을 보여주기
            위한 색반전을 설정합니다.
          </p>
        </article>

        <article className="view_editor edit_code mt_xl">
          <h3 className="ve_tit">outline 속성 예제</h3>
          <Suspense
            fallback={
              <EditorFallback
                className={`uk_editor indent mt_m min_height_550`}
              />
            }
          >
            <UkEditorTarget
              target="css/step01/2.12.ui-interface/2.11.outline.html"
              className={`uk_editor indent mt_m min_height_550`}
              mode="htmlmixed"
              browser="default"
              title={"2.11.outline"}
              minHeight="550px"
              result
            />
          </Suspense>
        </article>

        <aside className="browser_support mt_m" data-tit="outline">
          <ul>
            <li className="ie">8+</li>
            <li className="edge">12.0</li>
            <li className="chrome">1.0</li>
            <li className="firefox">1.5</li>
            <li className="opera">7.0</li>
            <li className="safari">1.2</li>
          </ul>
        </aside>
      </section>

      <section className="txt_ex indent mt_xxl">
        <h2 className="ml_mn">
          <i className="t_blue">cursor</i> 속성
        </h2>
        <p className="mt_l">
          요소 위에 마우스 커서가 올라갔을 때 보여줄 모양을 지정합니다.
          <br />
          속성값에 따라 브라우저 지원이 다릅니다.
        </p>

        <p className="mt_m">
          <strong className="font-16 t_black">
            대표적인 마우스 커서 값은 다음과 같습니다.
          </strong>
        </p>

        <div className="ol_lst indent mt_m">
          <CodeBlock
            title={"cursor"}
            language="css"
            className="uk_gist_code_box mt_ms"
          >
            {`div {
						/* 1. 일반 */
						cursor: auto | default | none;
						/* 2. 링크와 상태 */
						cursor: context-menu | help | pointer | progress | wait;
						/* 3. 선택 */
						cursor: cell | crosshair | text | vertical-text;
						/* 4. 드래그 앤 드롭 */
						cursor: alias | copy | move | no-drop(not-allowed) | grab | grabbing;
						/* 5. 크기 조절과 스크롤 */
						cursor: all-scroll | col-resize | row-resize | n-resize | e-resize | s-resize | w-resize | ne-resize | nw-resize | se-resize | sw-resize | ew-resize | ns-resize | nesw-resize | nwse-resize;
						/* 6. 확대와 축소 */
						cursor: zoom-in | zoom-out;
					}`}
          </CodeBlock>
          <p className="font-16 t_blue mt_m">
            <strong>아래 예제에 마우스를 올려보세요.</strong>
          </p>
          <ol>
            <li className="line_code font14 mt_ms">
              <strong>일반</strong>
              <div className="line_code mt_sm">
                <p>
                  <code>auto</code> : 사용자 에이전트가 현재 맥락에 맞춰 표시할
                  커서를 결정합니다. 예를 들어 글씨 위에서는 <code>text</code>를
                  사용합니다.
                </p>
                <p style={{ cursor: "default" }}>
                  <code>default</code> :{" "}
                  <img src={`${IMG_CURSOR}/default.gif`} alt="default" />{" "}
                  플랫폼에 따라 다른 기본 커서입니다. 보통 화살표입니다.
                </p>
                <p>
                  <code>none</code> : 커서 없음.
                </p>
              </div>
            </li>

            <li className="line_code font14 mt_s">
              <strong>링크와 상태</strong>
              <div className="line_code mt_sm">
                <p style={{ cursor: "context-menu" }}>
                  <code>context-menu</code> :{" "}
                  <img
                    src={`${IMG_CURSOR}/context-menu.png`}
                    alt="context-menu"
                  />{" "}
                  콘텍스트 메뉴 사용 가능.
                </p>
                <p style={{ cursor: "help" }}>
                  <code>help</code> :{" "}
                  <img src={`${IMG_CURSOR}/help.gif`} alt="help" /> 도움말 사용
                  가능.
                </p>
                <p style={{ cursor: "pointer" }}>
                  <code>pointer</code> :{" "}
                  <img src={`${IMG_CURSOR}/pointer.gif`} alt="pointer" /> 링크를
                  나타내는 포인터입니다. 보통 한 쪽을 가리키는 손입니다.
                </p>
                <p style={{ cursor: "progress" }}>
                  <code>progress</code> :{" "}
                  <img src={`${IMG_CURSOR}/progress.gif`} alt="progress" />{" "}
                  프로그램이 백그라운드에서 작업 중이지만, 사용자가 인터페이스와
                  상호작용할 수 있습니다. (<code>wait</code>과 반대)
                </p>
                <p style={{ cursor: "wait" }}>
                  <code>wait</code> :{" "}
                  <img src={`${IMG_CURSOR}/wait.gif`} alt="wait" /> 프로그램이
                  작업 중이고, 사용자가 인터페이스와 상호작용할 수 없습니다. (
                  <code>progress</code>와 반대) 간혹 모래시계나 시계모양 그림을
                  사용합니다.
                </p>
              </div>
            </li>

            <li className="line_code font14 mt_s">
              <strong>선택</strong>
              <div className="line_code mt_sm">
                <p style={{ cursor: "cell" }}>
                  <code>cell</code> :{" "}
                  <img src={`${IMG_CURSOR}/cell.gif`} alt="cell" /> 표의 칸이나
                  여러 칸을 선택할 수 있습니다.
                </p>
                <p style={{ cursor: "crosshair" }}>
                  <code>crosshair</code> :{" "}
                  <img src={`${IMG_CURSOR}/crosshair.gif`} alt="crosshair" />{" "}
                  십자 커서입니다. 종종 비트맵 선택에 사용합니다.
                </p>
                <p style={{ cursor: "text" }}>
                  <code>text</code> :{" "}
                  <img src={`${IMG_CURSOR}/text.gif`} alt="text" /> 글씨 선택
                  가능합니다. 보통 I빔 모양입니다.
                </p>
                <p style={{ cursor: "vertical-text" }}>
                  <code>vertical-text</code> :{" "}
                  <img src={`${IMG_CURSOR}/vertical-text.gif`} alt="help" />{" "}
                  세로쓰기 글씨 선택 가능합니다. 보통 옆으로 누운 I빔
                  모양입니다.
                </p>
              </div>
            </li>

            <li className="line_code font14 mt_s">
              <strong>드래그 앤 드롭</strong>
              <div className="line_code mt_sm">
                <p style={{ cursor: "alias" }}>
                  <code>alias</code> :{" "}
                  <img src={`${IMG_CURSOR}/alias.gif`} alt="alias" /> 별칭이나
                  바로가기를 만드는 중.
                </p>
                <p style={{ cursor: "copy" }}>
                  <code>copy</code> :{" "}
                  <img src={`${IMG_CURSOR}/copy.gif`} alt="copy" /> 복사하는 중.
                </p>
                <p style={{ cursor: "move" }}>
                  <code>move</code> :{" "}
                  <img src={`${IMG_CURSOR}/move.gif`} alt="move" /> 움직이는 중.
                </p>
                <p style={{ cursor: "no-drop" }}>
                  <code>no-drop</code> :{" "}
                  <img src={`${IMG_CURSOR}/no-drop.gif`} alt="no-drop" /> 현재
                  위치에 놓을 수 없습니다. Windows와 Mac OS X에서{" "}
                  <code>no-drop</code>은 <code>not-allowed</code>와 같습니다.
                </p>
                <p style={{ cursor: "grab" }}>
                  <code>grab</code> :{" "}
                  <img src={`${IMG_CURSOR}/grab.gif`} alt="grab" /> 잡을 수
                  있습니다. (잡아서 이동)
                </p>
                <p style={{ cursor: "grabbing" }}>
                  <code>grabbing</code> :{" "}
                  <img src={`${IMG_CURSOR}/grabbing.gif`} alt="grabbing" /> 잡고
                  있습니다. (잡아서 이동)
                </p>
              </div>
            </li>

            <li className="line_code font14 mt_s">
              <strong>크기 조절과 스크롤</strong>
              <div className="line_code mt_sm">
                <p style={{ cursor: "all-scroll" }}>
                  <code>all-scroll</code> :{" "}
                  <img src={`${IMG_CURSOR}/all-scroll.gif`} alt="all-scroll" />{" "}
                  모든 방향으로 이동 가능합니다. (패닝) Windows에서{" "}
                  <code>all-scroll</code>은 <code>move</code>와 같습니다.
                </p>
                <p style={{ cursor: "col-resize" }}>
                  <code>col-resize</code> :{" "}
                  <img src={`${IMG_CURSOR}/col-resize.gif`} alt="col-resize" />{" "}
                  항목/행의 크기를 좌우로 조절할 수 있습니다. 종종 좌우 화살표의
                  가운데를 세로로 분리한 모양을 사용합니다.
                </p>
                <p style={{ cursor: "row-resize" }}>
                  <code>row-resize</code> :{" "}
                  <img src={`${IMG_CURSOR}/row-resize.gif`} alt="row-resize" />{" "}
                  항목/열의 크기를 상하로 조절할 수 있습니다. 종종 상하 화살표의
                  가운데를 가로로 분리한 모양을 사용합니다.
                </p>
                <p>
                  동, 서, 남, 북 <code>resize</code> : 움직일 수 있는
                  모서리입니다. 예를 들어, <code>se-resize</code> 커서는
                  움직임이 사각형의 동남쪽에서 시작할 때 사용합니다.
                  <br />
                  어떤 환경에서는 동일한 방향의 양방향 화살표를 대신 보여줍니다.
                  즉 <code>n-resize</code>와 <code>s-resize</code>는{" "}
                  <code>ns-resize</code>와 같습니다.
                  <br />
                  현재 모든 브라우저에서 양방향 크기 조절 커서와 동일하게
                  보입니다.
                  <span style={{ display: "block", cursor: "n-resize" }}>
                    <code>n-resize</code>{" "}
                    <img src={`${IMG_CURSOR}/n-resize.gif`} alt="n-resize" />
                  </span>
                  <span style={{ display: "block", cursor: "e-resize" }}>
                    <code>e-resize</code>{" "}
                    <img src={`${IMG_CURSOR}/e-resize.gif`} alt="e-resize" />
                  </span>
                  <span style={{ display: "block", cursor: "s-resize" }}>
                    <code>s-resize</code>{" "}
                    <img src={`${IMG_CURSOR}/s-resize.gif`} alt="s-resize" />
                  </span>
                  <span style={{ display: "block", cursor: "w-resize" }}>
                    <code>w-resize</code>{" "}
                    <img src={`${IMG_CURSOR}/w-resize.gif`} alt="w-resize" />
                  </span>
                  <span style={{ display: "block", cursor: "ne-resize" }}>
                    <code>ne-resize</code>{" "}
                    <img src={`${IMG_CURSOR}/ne-resize.gif`} alt="ne-resize" />
                  </span>
                  <span style={{ display: "block", cursor: "nw-resize" }}>
                    <code>nw-resize</code>{" "}
                    <img src={`${IMG_CURSOR}/nw-resize.gif`} alt="nw-resize" />
                  </span>
                  <span style={{ display: "block", cursor: "se-resize" }}>
                    <code>se-resize</code>{" "}
                    <img src={`${IMG_CURSOR}/se-resize.gif`} alt="se-resize" />
                  </span>
                  <span style={{ display: "block", cursor: "sw-resize" }}>
                    <code>sw-resize</code>{" "}
                    <img src={`${IMG_CURSOR}/sw-resize.gif`} alt="sw-resize" />
                  </span>
                </p>
                <p>
                  양방향 크기 조절 커서.
                  <span style={{ display: "block", cursor: "ew-resize" }}>
                    <code>ew-resize</code>{" "}
                    <img src={`${IMG_CURSOR}/ew-resize.gif`} alt="ew-resize" />
                  </span>
                  <span style={{ display: "block", cursor: "ns-resize" }}>
                    <code>ns-resize</code>{" "}
                    <img src={`${IMG_CURSOR}/ns-resize.gif`} alt="ns-resize" />
                  </span>
                  <span style={{ display: "block", cursor: "nesw-resize" }}>
                    <code>nesw-resize</code>{" "}
                    <img
                      src={`${IMG_CURSOR}/nesw-resize.gif`}
                      alt="nesw-resize"
                    />
                  </span>
                  <span style={{ display: "block", cursor: "nwse-resize" }}>
                    <code>nwse-resize</code>{" "}
                    <img
                      src={`${IMG_CURSOR}/nwse-resize.gif`}
                      alt="nwse-resize"
                    />
                  </span>
                </p>
              </div>
            </li>

            <li className="line_code font14 mt_s">
              <strong>확대와 축소</strong>
              <div className="line_code mt_sm">
                <p>
                  IE에서는 기본 <code>pointer</code> 커서로 렌더링됩니다.
                </p>
                <p>
                  확대/축소할 수 있습니다.
                  <span style={{ display: "block", cursor: "zoom-in" }}>
                    <code>zoom-in</code>{" "}
                    <img src={`${IMG_CURSOR}/zoom-in.gif`} alt="zoom-in" />
                  </span>
                  <span style={{ display: "block", cursor: "zoom-out" }}>
                    <code>zoom-out</code>{" "}
                    <img src={`${IMG_CURSOR}/zoom-out.gif`} alt="zoom-out" />
                  </span>
                </p>
              </div>
            </li>
          </ol>
        </div>

        <aside className="browser_support mt_m" data-tit="cursor">
          <ul>
            <li className="ie">4+</li>
            <li className="edge">12.0</li>
            <li className="chrome">1.0</li>
            <li className="firefox">1.0</li>
            <li className="opera">7.0</li>
            <li className="safari">1.2</li>
          </ul>
        </aside>
      </section>

      <figure className="img_figure indent mt_l">
        <img src={`${IMG_CSS}/02_css_12.png`} alt="CSS 인터페이스" />
        <figcaption className="reference">CSS 인터페이스</figcaption>
      </figure>
    </>
  );
}
export default CssInterfacePage;
