import { Suspense, lazy } from "react";
import CodeBlock from "@/components/code/CodeBlock";
import { usePageMeta } from "@/components/common/PageMeta";
const UkEditorTarget = lazy(() => import("@/components/code/UkEditorTarget"));

const PAGE_LAYOUT = {
  mainClass: "css_effects",
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

function CssEffectsPage() {
  usePageMeta({
    title: "시각적인 속성",
    description:
      "CSS의 시각적인 속성은 웹 페이지에서 요소의 표시 여부와 넘치는 내용을 제어하는 속성들로 구성됩니다. 이 페이지에서는 요소의 크기에서 내용이 넘칠 경우 어떻게 보여줄지 결정하는 overflow 속성과 요소를 보이거나 숨기는 visibility 속성을 함께 소개합니다.",
    keyword: "style, css, Cascading Style Sheets, overflow, visibility",
    layout: PAGE_LAYOUT,
  });
  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          시각적인 속성이란 웹 페이지에서 요소의 표시 여부와 넘치는 내용을
          제어하는 CSS 속성들입니다.
        </p>
        <p className="mt_s">
          <code>overflow</code> 속성은 요소의 크기에서 내용이 넘칠 경우 어떻게
          보여줄지 결정합니다.
          <br />
          <code>visibility</code> 속성은 요소를 보이거나 숨기는 속성입니다.
          <br />
          <code>display: none</code>과의 차이점은 <code>display: none</code>은
          요소의 영역 자체를 숨기지만,
          <br />
          <code>visibility: hidden</code>은 요소의 영역은 남아있고 내용만 보이지
          않게 처리합니다.
        </p>
      </blockquote>

      <section className="txt_ex indent mt_xxl">
        <h2 className="ml_mn">
          <i className="t_blue">overflow</i> 속성
        </h2>
        <p className="mt_l">
          요소의 내용이 지정한 영역을 넘칠 때 어떻게 처리할지 설정하는
          속성입니다.
          <br />
          내용을 잘라내거나 스크롤 막대를 추가할 수 있습니다.
          <br />
          <code>overflow</code> 속성은 지정된 높이의 블록 요소에 대해서만
          작동합니다.
          <br />
          <code>overflow-x</code>와 <code>overflow-y</code> 속성으로 가로와
          세로를 구분하여 사용할 수 있습니다.
        </p>
        <CodeBlock
          title={"overflow"}
          language="css"
          className="uk_gist_code_box mt_m"
        >
          {`div {
					overflow: visible | hidden | scroll | auto;
				}`}
        </CodeBlock>

        <div className="ol_lst indent mt_m">
          <ol>
            <li>
              <strong className="t_black">visible</strong> : 기본값으로 내용이
              잘리지 않으며, 콘텐츠 박스 영역을 벗어나서 렌더링될 수도 있습니다.
            </li>
            <li>
              <strong className="t_black">hidden</strong> : 콘텐츠 박스에 맞게
              내용이 잘립니다. 스크롤바가 제공되지 않습니다.
            </li>
            <li>
              <strong className="t_black">scroll</strong> : 내용이 넘치는 경우
              스크롤 막대가 항상 표시되어 나머지 내용을 볼 수 있습니다.
            </li>
            <li>
              <strong className="t_black">auto</strong> : 내용이 넘치는 경우에만
              자동으로 스크롤 막대가 추가되어 나머지 내용을 볼 수 있습니다.
            </li>
          </ol>
        </div>
        <div className="view_editor edit_code mt_m">
          <Suspense
            fallback={
              <EditorFallback
                className={`uk_editor min_height_680 mb_result_height_680`}
              />
            }
          >
            <UkEditorTarget
              target="css/step01/2.10.visual-effects/2.10.overflow.html"
              className={`uk_editor min_height_680 mb_result_height_680`}
              mode="htmlmixed"
              browser="default"
              title={"2.10.overflow"}
              minHeight="680px"
              result
            />
          </Suspense>
        </div>
        <aside className="browser_support mt_m" data-tit="overflow">
          <ul>
            <li className="ie">4.0+</li>
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
          <i className="t_blue">visibility</i> 속성
        </h2>
        <p className="mt_l">
          문서의 레이아웃을 변경하지 않고 요소를 보이거나 숨기는 속성입니다.
          <br />
          <code>visibility</code>로 <code>&lt;table&gt;</code>의 행이나 열을
          숨길 수도 있습니다.
          <br />
          요소를 숨기고 레이아웃에서도 제외하려면 <code>
            visibility
          </code> 대신 <code>display: none</code>을 사용합니다.
        </p>
        <CodeBlock
          title={"visibility"}
          language="css"
          className="uk_gist_code_box mt_m"
        >
          {`div {
					visibility: visible | hidden | collapse;
				}`}
        </CodeBlock>
        <div className="ol_lst indent mt_m">
          <ol>
            <li>
              <strong className="t_black">visible</strong> : 기본값으로 해당
              요소를 보이게 합니다.
            </li>
            <li>
              <strong className="t_black">hidden</strong> : 해당 요소를 보이지
              않게 합니다. <code>display: none</code>은 요소의 공간까지
              사라지지만, <code>visibility: hidden</code>은 요소의 공간은
              남아있고 내용만 보이지 않습니다.
            </li>
            <li>
              <strong className="t_black">collapse</strong> :{" "}
              <code>&lt;table&gt;</code> 요소에 사용하며 행이나 열을 보이지 않게
              합니다.
              <br />
              <code>&lt;table&gt;</code>의 행, 열, 행 그룹과 열 그룹에 적용하면{" "}
              <code>display: none</code>과 동일하게 요소를 숨기고 차지하던
              공간도 제거합니다.
              <br />
              다만 다른 행(열)의 크기는 <code>collapse</code>를 적용한 행(열)이
              보이는 것처럼 취급해 계산하므로, 표의 너비나 높이의 재계산 없이
              빠르게 행이나 열을 제거할 수 있습니다.
              <br />
              플렉스 아이템에 적용하면 요소를 숨기고 차지하던 공간도 제거하며,
              다른 요소에서는 <code>hidden</code>과 동일합니다.
            </li>
          </ol>
        </div>
        <div className="view_editor edit_code mt_m">
          <Suspense
            fallback={
              <EditorFallback
                className={`uk_editor min_height_450 mb_result_height_400`}
              />
            }
          >
            <UkEditorTarget
              target="css/step01/2.10.visual-effects/2.10.visibility.html"
              className={`uk_editor min_height_450 mb_result_height_400`}
              mode="htmlmixed"
              browser="default"
              title={"2.10.visibility"}
              minHeight="450px"
              result
            />
          </Suspense>
        </div>
        <aside className="browser_support mt_m" data-tit="visibility">
          <ul>
            <li className="ie">4.0+</li>
            <li className="edge">12.0</li>
            <li className="chrome">1.0</li>
            <li className="firefox">1.0</li>
            <li className="opera">4.0</li>
            <li className="safari">1.0</li>
          </ul>
        </aside>
      </section>

      <figure className="img_figure indent mt_l">
        <img src={`${IMG_CSS}/02_css_10.png`} alt="CSS 효과" />
        <figcaption className="reference">CSS 효과</figcaption>
      </figure>

      <aside className="reference_box mt_xxl">
        <strong className="tit">시각적인 속성 참조</strong>
        <ul className="link_lst">
          <li className="reference">
            <a
              href="https://www.w3.org/TR/2011/REC-CSS2-20110607/visufx.html"
              target="_blank"
              className="fas"
              title="새창열림"
            >
              3C Visual effects
            </a>
          </li>
          <li className="reference">
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Overflow"
              target="_blank"
              className="fas"
              title="새창열림"
            >
              MDN CSS Overflow
            </a>
          </li>
          <li className="reference">
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/visibility"
              target="_blank"
              className="fas"
              title="새창열림"
            >
              MDN CSS Visibility
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
}
export default CssEffectsPage;
