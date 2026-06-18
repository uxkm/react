import { Suspense, lazy } from "react";
import CodeBlock from "@/components/code/CodeBlock";
import { usePageMeta } from "@/components/common/PageMeta";
const UkEditorTarget = lazy(() => import("@/components/code/UkEditorTarget"));

const PAGE_LAYOUT = {
  mainClass: "css_table",
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

function CssTablePage() {
  usePageMeta({
    title: "Table 속성",
    description:
      "CSS의 Table 속성은 HTML 테이블의 표시 방식을 제어하는 속성들로 구성됩니다. 이 페이지에서는 테이블의 테두리(border), 테두리 병합(border-collapse), 셀 간격(border-spacing), 캡션 위치(caption-side), 빈 셀 표시(empty-cells), 레이아웃 방식(table-layout)을 함께 소개합니다.",
    keyword:
      "style, css, Cascading Style Sheets, table, 데이터 테이블, border, border-collapse, border-spacing, caption-side, empty-cells, table-layout",
    layout: PAGE_LAYOUT,
  });
  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note" aria-label="요약 설명">
        <strong className="sound_only">요약 설명</strong>
        <p>
          CSS의 <code>table</code> 속성은 테이블의 표시 방식을 제어하는 속성들로
          구성됩니다.
          <br />
          테이블의 테두리(<code>border</code>), 테두리 병합(
          <code>border-collapse</code>), 셀 간격(<code>border-spacing</code>),
          캡션 위치(<code>caption-side</code>), 빈 셀 표시(
          <code>empty-cells</code>), 레이아웃 방식(<code>table-layout</code>)
          등을 설정할 수 있습니다.
        </p>
      </blockquote>

      <section className="txt_ex indent mt_xxl" aria-label="border 속성 설명">
        <h2 className="ml_mn">
          <i className="t_blue">border</i> 속성
        </h2>
        <p className="mt_l">
          테이블의 테두리를 설정하는 속성입니다.
          <br />
          <code>table</code>, <code>th</code>, <code>td</code>에 각각{" "}
          <code>border</code>를 선언하면 각 요소가 자신만의 테두리를 가지기
          때문에 테두리가 2줄로 표현됩니다.
          <br />
          테두리를 한 줄로 보이게 하려면 <code>border-collapse</code> 속성을
          사용해야 합니다.
        </p>
        <CodeBlock
          title={"table border"}
          language="css"
          className="uk_gist_code_box mt_m"
        >
          {`table,
				table th,
				table td {
					border: width style color | inherit | initial | unset;
				}`}
        </CodeBlock>
      </section>

      <section
        className="txt_ex indent mt_xxl"
        aria-label="border-collapse 속성 설명"
      >
        <h2 className="ml_mn">
          <i className="t_blue">border-collapse</i> 속성
        </h2>
        <p className="mt_l">
          인접한 셀의 테두리를 합칠지 분리할지 설정하는 속성입니다.
          <br />
          <code>collapse</code>로 설정하면 테두리가 한 줄로 표현되고,{" "}
          <code>separate</code>로 설정하면 각 셀의 테두리가 분리되어 표현됩니다.
        </p>
        <CodeBlock
          title={"table border-collapse"}
          language="css"
          className="uk_gist_code_box mt_m"
        >
          {`table {
					border-collapse: collapse | separate;
				}
				table th,
				table td {
					border: 2px solid orange;
				}`}
        </CodeBlock>
        <div className="ol_lst indent mt_m">
          <ol>
            <li>
              <strong className="t_black">collapse</strong> : 인접한 셀의
              테두리를 합쳐서 한 줄로 표현합니다.
            </li>
            <li>
              <strong className="t_black">separate</strong> : 기본값으로 각 셀의
              테두리를 분리하여 표현합니다.
            </li>
          </ol>
        </div>
      </section>

      <section
        className="txt_ex indent mt_xxl"
        aria-label="border-spacing 속성 설명"
      >
        <h2 className="ml_mn">
          <i className="t_blue">border-spacing</i> 속성
        </h2>
        <p className="mt_l">
          <code>border-collapse: separate</code>일 때 셀 간의 간격을 설정하는
          속성입니다.
          <br />
          첫 번째 값은 가로 간격, 두 번째 값은 세로 간격을 의미합니다.
          <br />
          값을 하나만 지정하면 가로와 세로 간격이 동일하게 적용됩니다.
        </p>
        <CodeBlock
          title={"table border-spacing"}
          language="css"
          className="uk_gist_code_box mt_m"
        >
          {`table,
				table th,
				table td  {
					border: 1px solid black;
				}
				table {
					width: 100%;
					border-collapse: separate;
					border-spacing: 20px 30px;
				}`}
        </CodeBlock>
      </section>

      <section
        className="txt_ex indent mt_xxl"
        aria-label="caption-side 속성 설명"
      >
        <h2 className="ml_mn">
          <i className="t_blue">caption-side</i> 속성
        </h2>
        <p className="mt_l">
          테이블 캡션의 위치를 설정하는 속성입니다.
          <br />
          <code>top</code>은 테이블 위에, <code>bottom</code>은 테이블 아래에
          캡션을 배치합니다.
        </p>
        <CodeBlock
          title={"table caption-side"}
          language="css"
          className="uk_gist_code_box mt_m"
        >
          {`table caption {
					caption-side: top | bottom | inherit | initial | unset;
				}`}
        </CodeBlock>
        <div className="ol_lst indent mt_m">
          <ol>
            <li>
              <strong className="t_black">top</strong> : 기본값으로 테이블 위에
              위치합니다.
            </li>
            <li>
              <strong className="t_black">bottom</strong> : 테이블 아래에
              위치합니다.
            </li>
          </ol>
        </div>
      </section>

      <section
        className="txt_ex indent mt_xxl"
        aria-label="vertical-align 속성 설명"
      >
        <h2 className="ml_mn">
          <i className="t_blue">vertical-align</i> 속성
        </h2>
        <p className="mt_l">
          테이블 셀 내부의 내용을 수직 방향으로 정렬하는 속성입니다.
          <br />
          <code>top</code>은 위쪽, <code>middle</code>은 중앙,{" "}
          <code>bottom</code>은 아래쪽에 정렬합니다.
        </p>
        <CodeBlock
          title={"table vertical-align"}
          language="css"
          className="uk_gist_code_box mt_m"
        >
          {`table th,
				table td {
					vertical-align: top | middle | bottom | inherit | initial | unset;
				}`}
        </CodeBlock>
      </section>

      <section
        className="txt_ex indent mt_xxl"
        aria-label="empty-cells 속성 설명"
      >
        <h2 className="ml_mn">
          <i className="t_blue">empty-cells</i> 속성
        </h2>
        <p className="mt_l">
          빈 셀의 테두리와 배경을 표시할지 숨길지 설정하는 속성입니다.
          <br />
          <code>border-collapse: separate</code>일 때만 효과가 있습니다.
        </p>
        <CodeBlock
          title={"table empty-cells"}
          language="css"
          className="uk_gist_code_box mt_m"
        >
          {`table th,
				table td {
					empty-cells: show | hide | inherit | initial | unset;
				}`}
        </CodeBlock>
        <div className="ol_lst indent mt_m">
          <ol>
            <li>
              <strong className="t_black">show</strong> : 기본값으로 빈 셀도
              테두리와 배경을 표시합니다.
            </li>
            <li>
              <strong className="t_black">hide</strong> : 빈 셀의 테두리와
              배경을 숨깁니다.
            </li>
          </ol>
        </div>
      </section>

      <section
        className="txt_ex indent mt_xxl"
        aria-label="table-layout 속성 설명"
      >
        <h2 className="ml_mn">
          <i className="t_blue">table-layout</i> 속성
        </h2>
        <p className="mt_l">
          테이블의 레이아웃 방식을 설정하는 속성입니다.
          <br />
          <code>auto</code>는 내용에 따라 자동으로 조정되고, <code>fixed</code>
          는 고정된 너비를 사용합니다.
        </p>
        <CodeBlock
          title={"table-layout"}
          language="css"
          className="uk_gist_code_box mt_m"
        >
          {`table {
					table-layout: auto | fixed | inherit | initial | unset;
				}`}
        </CodeBlock>
        <div className="ol_lst indent mt_m">
          <ol>
            <li>
              <strong className="t_black">auto</strong> : 기본값으로 셀의 내용에
              따라 너비가 자동으로 조정됩니다.
            </li>
            <li>
              <strong className="t_black">fixed</strong> : 첫 번째 행의 너비를
              기준으로 고정되며, 후속 행의 내용은 열 너비에 영향을 주지
              않습니다.
            </li>
          </ol>
        </div>
      </section>

      <section
        className="view_editor edit_code mt_xxl"
        aria-label={"Table 속성 예제"}
      >
        <h2 className="ve_tit">Table 속성 예제</h2>
        <Suspense
          fallback={
            <EditorFallback
              className={`uk_editor indent mt_l min_height_550 mb_result_height_500`}
            />
          }
        >
          <UkEditorTarget
            target="css/step01/2.8.table/2.8.table.html"
            className={`uk_editor indent mt_l min_height_550 mb_result_height_500`}
            mode="htmlmixed"
            browser="default"
            title={"Table 속성 예제"}
            minHeight="550px"
            result
          />
        </Suspense>
      </section>

      <figure className="img_figure indent mt_l">
        <img src={`${IMG_CSS}/02_css_08.png`} alt="CSS Table" />
        <figcaption className="reference">CSS Table</figcaption>
      </figure>

      <aside
        className="browser_support mt_xxl"
        data-tit="Table-style"
        aria-label="table 속성 브라우저 지원 현황"
      >
        <ul>
          <li className="ie">5+</li>
          <li className="edge">12.0</li>
          <li className="chrome">1.0</li>
          <li className="firefox">1.0</li>
          <li className="opera">4.0</li>
          <li className="safari">1.2</li>
        </ul>
      </aside>

      <aside className="reference_box mt_xxl" aria-label="Table 속성 참조">
        <strong className="tit">Table 속성 참조</strong>
        <ul className="link_lst">
          <li className="reference">
            <a
              href="https://www.w3.org/TR/2011/REC-CSS2-20110607/tables.html"
              target="_blank"
              className="fas"
              title="새창열림"
            >
              W3C Table
            </a>
          </li>
          <li className="reference">
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Table"
              target="_blank"
              className="fas"
              title="새창열림"
            >
              MDN Table
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
}
export default CssTablePage;
