import { Suspense, lazy } from "react";
import { usePageMeta } from "@/components/common/PageMeta";
import CodeBlock from "@/components/code/CodeBlock";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "tbody_element",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
  bottomEditor: true,
};

const PAGE_DATA = {
  title: "tbody element",
  description:
    "tbody 요소는 HTML 문서에서 table 요소의 본문 데이터를 담는 영역을 정의하는 태그로, 내부에 여러 개의 tr 요소를 포함하여 실제 데이터 행을 구성하며 각 행은 td 또는 th 요소로 세부 데이터를 표현합니다. 이 페이지에서는 tbody 요소의 주요 역할 및 특징을 설명하고, tbody 요소의 용도와 구조적 위치에 따른 사용 예시를 소개합니다.",
  keyword:
    "Markup, HTML, tag, elements, table, caption, colgroup, col, thead, tbody, tfoot, tr, th, td",
};


const UkEditorTarget = lazy(
  () => import("@/components/code/UkEditorTarget"),
);

function EditorFallback() {
  return <div className="uk_editor min_height_400" aria-hidden />;
}

function TbodyElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>&lt;tbody&gt;</code> 요소는 <code>&lt;table&gt;</code> 요소
          내에서 <b>표의 실제 본문 데이터 영역을 나타내는 시맨틱 태그</b>로,{" "}
          <b>반복되는 데이터 행들을 포함합니다.</b>
          <br />
          내부에는 하나 이상의 <code>&lt;tr&gt;</code>(행)을 포함하며, 각 행에는{" "}
          <code>&lt;td&gt;</code>(일반 셀) 또는 <code>&lt;th&gt;</code>(행 제목
          셀)를 사용할 수 있습니다. <code>&lt;thead&gt;</code>,{" "}
          <code>&lt;tfoot&gt;</code>과 함께 사용하여{" "}
          <b>표 구조를 논리적으로 구분하고, 정렬, 스타일 적용, 접근성 처리</b>{" "}
          등을 보다 명확하게 구성할 수 있게 도와줍니다.
          <br />
          <code>&lt;thead&gt;</code>나 <code>&lt;tfoot&gt;</code> 없이{" "}
          <code>&lt;tbody&gt;</code>만 단독으로 사용할 경우,{" "}
          <code>&lt;tbody&gt;</code>를 생략해도 브라우저는 테이블 구조를 정상적으로
          인식하고 표시합니다.
        </p>
      </blockquote>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <ol className="mt_l ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>테이블의 본문(데이터) 정의</strong>
            <p>
              <code>&lt;thead&gt;</code>는 머리글, <code>&lt;tfoot&gt;</code>은
              바닥글, <mark><code>&lt;tbody&gt;</code>는 데이터가 포함된 본문을 정의합니다.</mark>
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>테이블 본문 데이터 그룹화</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;tbody&gt;</code> 요소는 테이블의 본문 데이터를 구조적으로
                그룹화하는 역할을 합니다.
              </li>
              <li>
                테이블이 헤더(<code>&lt;thead&gt;</code>)와 푸터(
                <code>&lt;tfoot&gt;</code>)를 포함할 경우, 본문 데이터는 반드시{" "}
                <code>&lt;tbody&gt;</code>에 위치해야 합니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>접근성 향상</strong>
            <p>
              스크린 리더가 머리글과 데이터를 구별할 수 있도록 돕고,{" "}
              <code>scope</code> 속성과 함께 사용하면 표의 데이터를 쉽게 이해할
              수 있습니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>반복되는 테이블 구조에서 유용</strong>
            <p>
              CSS 또는 JavaScript를 활용하여 <code>&lt;tbody&gt;</code> 내
              데이터를 스크롤 가능하게 만들거나 동적으로 변경할 수 있습니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>&lt;table&gt; 내에서 생략 가능</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;thead&gt;</code>나 <code>&lt;tfoot&gt;</code> 없이{" "}
                <code>&lt;tbody&gt;</code>만 단독으로 사용할 경우,{" "}
                <code>&lt;tbody&gt;</code>를 생략해도 브라우저는 테이블 구조를
                정상적으로 인식하고 표시합니다.
              </li>
              <li>
                하지만, 명시적으로 <code>&lt;tbody&gt;</code>를 사용하는 것이
                가독성과 유지보수 측면에서 유리합니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>페이지가 넘어가도 본문은 나뉘어 표시됨</strong>
            <p>
              <code>&lt;thead&gt;</code>와 달리, <code>&lt;tbody&gt;</code>는
              브라우저나 PDF 출력 시 자동으로 반복되지 않으며, 페이지가 넘어가도
              본문 데이터는 계속 이어집니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>반드시 &lt;table&gt; 내부에서 사용해야 함</strong>
            <p>
              <code>&lt;tbody&gt;</code> 요소는 반드시{" "}
              <code>&lt;table&gt;</code>내부에서 사용해야 하며, 단독으로 사용할 수
              없습니다.
            </p>
          </li>
        </ol>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          CSS 기본 값
        </h2>
        <p className="mt_l">
          <code>&lt;tbody&gt;</code> 요소는 아래와 같은 기본값이 적용됩니다.
        </p>
        <CodeBlock title="tbody element CSS" className="mt_m" language="css">
          {`tbody {
  display: table-row-group;
  vertical-align: middle;
}`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          기본 문법
        </h2>
        <CodeBlock title="tbody element syntax" className="mt_l" language="html">
          {`<table>
  <thead>
    <tr>
      <th>이름</th>
      <th>나이</th>
    </tr>
  </thead>
  <tbody> <!-- 테이블 본문 데이터 그룹화 -->
    <tr>
      <td>김철수</td>
      <td>28</td>
    </tr>
    <tr>
      <td>이영희</td>
      <td>25</td>
    </tr>
  </tbody>
</table>`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn">속성</h2>
        <p className="mt_l">
          <code>&lt;tbody&gt;</code> 요소는 <b className="t_black">고유 속성</b>을
          가지지 않으며,
          <mark>
            글로벌 속성(<code>class</code>, <code>id</code>, <code>style</code>,{" "}
            <code>aria-*</code>, <code>data-*</code> 등)만 사용할 수 있습니다.
          </mark>
        </p>
      </section>

      <section className="view_editor indent mt_xxl">
        <h2 className="ml_mn ve_tit">예제</h2>
        <article className="mt_l indent">
          <h3 className="ml_mn">
            <code className="font-21-important weight-600">&lt;thead&gt;</code>와
            <code className="font-21-important weight-600">&lt;tbody&gt;</code>를
            사용하여 테이블 구조화
          </h3>
          <CodeBlock
            title="thead와 tbody를 사용하여 테이블 구조화"
            className="mt_m"
            language="html"
          >
            {`<table>
  <thead>
    <tr>
      <th>제품명</th>
      <th>가격</th>
      <th>재고</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>노트북</td>
      <td>1,500,000원</td>
      <td>10개</td>
    </tr>
    <tr>
      <td>스마트폰</td>
      <td>800,000원</td>
      <td>5개</td>
    </tr>
  </tbody>
</table>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <code className="font-21-important weight-600">colspan</code>,
            <code className="font-21-important weight-600">rowspan</code>을 활용한
            테이블
          </h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/08-table/8.6.tbody_element_1.html"
                className="min_height_420 mb_result_height_420"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="tbody colspan/rowspan 예제"
                minHeight="420px"
              />
            </Suspense>
          </div>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주의사항
        </h2>
        <ul className="dot_lst mt_l">
          <li>
            <code>&lt;tbody&gt;</code> 요소는 반드시 <code>&lt;table&gt;</code>{" "}
            내부에서 사용해야 하며, 단독으로 사용할 수 없습니다.
          </li>
          <li>
            <code>&lt;thead&gt;</code>가 있는 경우, 반드시{" "}
            <code>&lt;tbody&gt;</code>가 그 다음에 위치해야 합니다.
          </li>
          <li>
            <code>&lt;table&gt;</code> 내부에 <code>&lt;thead&gt;</code>,{" "}
            <code>&lt;tfoot&gt;</code> 없이 <code>&lt;tbody&gt;</code>만
            존재하는 것은 가능하지만, 이렬 경우 <code>&lt;tbody&gt;</code>는
            생략할 수 있습니다.
          </li>
        </ul>
      </section>
      <aside className="browser_support mt_xxl" data-tit="tbody">
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
        <img src={IMG.HTML + "/08_html_06.png"} alt="tbody 요소" />
        <figcaption>tbody 요소</figcaption>
      </figure>
    </>
  );
}

export default TbodyElementPage;
