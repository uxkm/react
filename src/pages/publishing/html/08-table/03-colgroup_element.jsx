import CodeBlock from "@/components/code/CodeBlock";
import { usePageMeta } from "@/components/common/PageMeta";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "colgroup_element",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
  bottomEditor: true,
};

const PAGE_DATA = {
  title: "colgroup element",
  description:
    "colgroup 요소는 HTML 문서에서 table 요소 내부에 사용되며, 열(column) 단위로 스타일이나 속성을 지정할 수 있도록 그룹을 정의하는 태그로, 내부에 하나 이상의 col 요소를 포함하여 여러 열에 공통된 속성을 적용할 수 있으며 반복되는 열 스타일을 간결하게 관리할 수 있습니다. 이 페이지에서는 colgroup 요소의 주요 역할 및 특징을 설명하고, colgroup 요소의 용도와 구조적 위치에 따른 사용 예시를 소개합니다.",
  keyword:
    "Markup, HTML, tag, elements, table, caption, colgroup, col, thead, tbody, tfoot, tr, th, td",
};

function ColgroupElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>&lt;colgroup&gt;</code> 요소는 <code>&lt;table&gt;</code> 요소
          내에서 <b>열(column) 단위의 구조를 정의하고 스타일을 적용하기 위한 시맨틱 태그</b>
          입니다.
          <br />
          내부에 <code>&lt;col&gt;</code> 요소를 포함하여{" "}
          <b>여러 열에 공통된 속성(예: 너비, 배경색 등)을 지정</b>할 수 있으며,
          반복적인 스타일을 간단하게 처리할 수 있도록 도와줍니다.{" "}
          <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>,{" "}
          <code>&lt;tfoot&gt;</code>처럼 콘텐츠를 담는 구조는 아니지만,{" "}
          <b>표의 열 레이아웃과 시각적 표현을 제어</b>할 때 유용하게 사용됩니다.
          <br />
          <code>&lt;table&gt;</code> 내에서는 <code>&lt;thead&gt;</code>보다 먼저
          위치해야 하며, 시멘틱 구조를 보완하는 역할을 합니다.
        </p>
        <p className="mt_s">
          보다 유연한 스타일링을 위해 개별 <code>&lt;td&gt;</code> 또는{" "}
          <code>&lt;th&gt;</code> 요소에 CSS로 스타일을 지정하는 방법이 일반적으로
          권장됩니다.
          <br />
          그러나 <code>&lt;colgroup&gt;</code> 및 <code>&lt;col&gt;</code>{" "}
          요소를 완전히 배제해야 한다는 의미는 아니며, 특정 열 전체에 일괄적인
          스타일을 적용할 때는 여전히 유용하게 사용할 수 있습니다.
        </p>
      </blockquote>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <ol className="mt_l ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>열(Columns)의 그룹 정의</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;colgroup&gt;</code>은 여러 개의 열을 하나의 그룹으로
                묶어, 공통된 스타일이나 속성을 적용할 수 있습니다.
              </li>
              <li>
                예를 들어, 특정 열에만 배경색을 지정하거나 너비를 일괄 설정할 수
                있습니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>HTML 구조와 스타일을 분리하여 유지보수 용이</strong>
            <p>
              <code>&lt;colgroup&gt;</code>을 활용하면 개별{" "}
              <code>&lt;td&gt;</code> 요소에 스타일을 직접 적용하는 대신, 특정 열
              전체에 일괄 적용할 수 있습니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>자식 요소로 &lt;col&gt; 요소를 포함</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;colgroup&gt;</code> 내부에는 <code>&lt;col&gt;</code>{" "}
                요소만 포함할 수 있으며, 개별 <code>&lt;col&gt;</code> 요소에
                속성을 부여하여 특정 열에 스타일을 적용할 수 있습니다.
              </li>
              <li>
                단, <code>&lt;colgroup&gt;</code> 자체에는 스타일을 직접 적용할 수
                없습니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>반복적인 스타일 적용 최소화</strong>
            <p>
              특정 열에 반복적으로 적용되는 스타일이나 속성을 한 번에 처리할 수
              있습니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>CSS와 함께 사용 가능</strong>
            <p>
              <code>&lt;colgroup&gt;</code>을 통해 정의된 열에 CSS를 적용하면,
              일관성 있는 스타일링이 가능합니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>표의 레이아웃을 설정하는 데 유용</strong>
            <p>
              <code>&lt;colgroup&gt;</code>을 사용하면 특정 열의 너비(
              <code>width</code>), 가시성(<code>visibility</code>), 배경색(
              <code>background-color</code>) 등을 설정할 수 있습니다.
            </p>
          </li>
        </ol>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          CSS 기본 값
        </h2>
        <p className="mt_l">
          <code>&lt;colgroup&gt;</code> 요소는 아래와 같은 기본값이 적용되며,
          기본적으로 화면에 표시되지 않습니다.
        </p>
        <ul className="mt_sm dot_lst indent_small">
          <li>
            <code>&lt;colgroup&gt;</code>은 레이아웃 요소이며, 자체적인 스타일은
            적용되지 않습니다.
          </li>
          <li>
            자식 요소(<code>&lt;col&gt;</code>)를 통해 스타일을 지정해야 합니다.
          </li>
        </ul>
        <CodeBlock title="colgroup element CSS" className="mt_m" language="css">
          {`colgroup {
  display: table-column-group;
}`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          기본 문법
        </h2>
        <CodeBlock title="colgroup element syntax" className="mt_l" language="html">
          {`<table>
  <colgroup> <!--col 요소와 함께 사용 -->
    <col>
    <col>
  </colgroup>
  <tr>
    <th>제목 셀</th>
    <th>제목 셀</th>
  </tr>
  <tr>
    <td>데이터 셀</td>
    <td>데이터 셀</td>
  </tr>
</table>`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn">속성</h2>
        <ul className="dot_lst mt_l">
          <li>
            <code>&lt;colgroup&gt;</code> 요소는 <b className="t_black">고유 속성</b>
            을 가지지 않으며,
            <mark>
              글로벌 속성(<code>class</code>, <code>id</code>, <code>style</code>,{" "}
              <code>aria-*</code>, <code>data-*</code> 등)만 사용할 수 있습니다.
            </mark>
          </li>
          <li>
            <code>&lt;colgroup&gt;</code>의 자식 요소인 <code>&lt;col&gt;</code>{" "}
            요소를 사용하여 특정 열에 스타일을 적용할 수 있습니다.
          </li>
        </ul>
      </section>

      <section className="view_editor indent mt_xxl">
        <h2 className="ml_mn ve_tit">예제</h2>
        <div className="mt_l">
          <p>
            <span className="underline">
              <mark>
                <code>&lt;colgroup&gt;</code> 요소는 단독으로 사용하면 의미가
                없습니다.
              </mark>
              <code>&lt;colgroup&gt;</code> 요소는 내부에 <code>&lt;col&gt;</code>{" "}
              요소와 함께 사용되어, 테이블의 각 열에 대한 스타일을 설정하거나
              특정 열을 그룹화하는 역할을 합니다.
            </span>
            <br />
            다음 섹션(<i className="t_blue weight-800">col element</i>)에서{" "}
            <code>&lt;col&gt;</code> 요소와 함께 사용하는 예제를 확인할 수
            있습니다.
          </p>
          <a
            href="/publishing/html/08-table/04-col_element"
            target="_blank"
            title="새창 열림"
            className="box_link external mt_m"
          >
            <b>col element</b> 비로가기
          </a>
        </div>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주의사항
        </h2>
        <ul className="dot_lst mt_l">
          <li>
            <code>&lt;colgroup&gt;</code>은 <code>&lt;col&gt;</code> 요소와 함께
            사용해야 합니다.
            <br />
            <code>&lt;colgroup&gt;</code>을 선언했지만 내부에{" "}
            <code>&lt;col&gt;</code> 요소가 없다면, 어떤 영향도 미치지 않습니다.
            반드시 <code>&lt;col&gt;</code>을 사용하여 스타일을 적용해야 합니다.
          </li>
          <li>
            <code>&lt;colgroup&gt;</code>과 <code>&lt;col&gt;</code>을 사용한
            스타일링은 모든 셀에 적용되는 것이 아니므로, 필요에 따라 CSS로
            테이블을 제어하는 것이 더 간편할 수 있습니다.
          </li>
          <li>
            <code>span</code> 속성은 전체 열의 개수를 초과할 수 없습니다.
            <br />
            <code>span="3"</code>을 사용할 때, 최소한 3개의 열이 존재해야
            합니다.
          </li>
          <li>
            <code>&lt;colgroup&gt;</code>은 스타일이나 속성 지정만 가능하고,
            데이터를 직접 포함할 수 없습니다.
          </li>
        </ul>
      </section>
      <aside className="browser_support mt_xxl" data-tit="colgroup">
        <ul>
          <li className="ie">지원</li>
          <li className="edge">지원</li>
          <li className="chrome">1.0</li>
          <li className="firefox">1.0</li>
          <li className="opera">지원</li>
          <li className="safari">지원</li>
        </ul>
      </aside>
      <figure className="img_figure mt_l">
        <img src={IMG.HTML + "/08_html_03.png"} alt="colgroup 요소" />
        <figcaption>colgroup 요소</figcaption>
      </figure>
    </>
  );
}

export default ColgroupElementPage;
