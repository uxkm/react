import { Suspense, lazy } from "react";
import { usePageMeta } from "@/components/common/PageMeta";
import CodeBlock from "@/components/code/CodeBlock";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "caption_element",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
  bottomEditor: true,
};

const PAGE_DATA = {
  title: "caption element",
  description:
    "caption 요소는 HTML 문서에서 table 요소의 제목이나 설명을 제공할 때 사용하는 태그로, 표의 상단에 위치하며 표의 목적이나 내용을 간결하게 요약해 사용자와 보조 기술이 표의 의미를 쉽게 이해할 수 있도록 돕는 역할을 합니다. 이 페이지에서는 caption 요소의 주요 역할 및 특징을 설명하고, caption 요소의 용도와 구조적 위치에 따른 사용 예시를 소개합니다.",
  keyword:
    "Markup, HTML, tag, elements, table, caption, colgroup, col, thead, tbody, tfoot, tr, th, td",
};

const UkEditorTarget = lazy(
  () => import("@/components/code/UkEditorTarget"),
);

function EditorFallback() {
  return <div className="uk_editor min_height_400" aria-hidden />;
}

function CaptionElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>&lt;caption&gt;</code> 요소는 <code>&lt;table&gt;</code> 요소
          바로 아래에 위치하며, <b>표 전체의 제목이나 설명을 제공하는 시맨틱 태그입니다.</b>
          <br />
          화면에 표시될 때는 기본적으로 표의 상단 중앙에 배치되며,{" "}
          <b>표의 목적이나 내용을 간결하게 요약</b>하여 사용자에게 제공하는
          역할을 합니다. 접근성 측면에서도{" "}
          <b>스크린 리더가 표를 이해하는 데 중요한 정보</b>가 되므로, 복잡한
          데이터를 담은 표에는 <code>&lt;caption&gt;</code>을 포함하는 것이
          권장됩니다.
          <br />
          <code>&lt;table&gt;</code> 내의 첫 번째 자식 요소로 위치해야 하며,
          단 하나의 <code>&lt;caption&gt;</code>만 사용할 수 있습니다.
        </p>
      </blockquote>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <ol className="mt_l ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>테이블의 제목 또는 설명 제공</strong>
            <ul className="dot_lst">
              <li>표가 어떤 내용을 다루는지 간략히 설명합니다.</li>
              <li>
                사용자는 표를 보기 전에 <code>&lt;caption&gt;</code>을 통해 표의
                목적을 빠르게 파악할 수 있습니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>접근성(Accessibility) 향상</strong>
            <ul className="dot_lst">
              <li>
                스크린 리더가 <code>&lt;caption&gt;</code>의 내용을 먼저
                읽어주기 때문에 시각 장애인에게 유용합니다.
              </li>
              <li>
                <code>aria-label</code> 또는 <code>aria-labelledby</code>를
                사용할 필요 없이, <code>&lt;caption&gt;</code> 자체로 충분한
                설명을 제공할 수 있습니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>SEO(검색 엔진 최적화) 효과</strong>
            <p>
              검색 엔진은 <code>&lt;caption&gt;</code>의 내용을 참고해 표의
              주제를 파악하므로, 키워드를 포함한 설명이 도움이 됩니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>CSS를 통한 스타일링 가능</strong>
            <ul className="dot_lst">
              <li>
                <code>text-align</code>, <code>font-weight</code>,{" "}
                <code>color</code> 등을 사용해 스타일을 조정할 수 있습니다.
              </li>
              <li>
                기본적으로 중앙 정렬(브라우저마다 다를 수 있음)로 표시됩니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>반드시 &lt;table&gt; 요소의 첫 번째 자식으로 위치해야 함</strong>
            <p>
              <code>&lt;caption&gt;</code>은 <code>&lt;table&gt;</code>의 첫
              부분에 있어야 하며, <code>&lt;thead&gt;</code>,{" "}
              <code>&lt;tbody&gt;</code>, <code>&lt;tfoot&gt;</code>보다
              우선적으로 위치해야 합니다.
            </p>
          </li>
        </ol>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          CSS 기본 값
        </h2>
        <p className="mt_l">
          <code>&lt;caption&gt;</code> 요소는 아래와 같은 기본값이 적용됩니다.
        </p>
        <CodeBlock title="caption element CSS" className="mt_m" language="css">
          {`caption {
  display: table-caption;
  text-align: center;
  caption-side: top;	/* 제목의 위치를 지정(기본적으로 테이블 상단에 위치) */
}`}
        </CodeBlock>
        <div className="mt_m">
          <strong className="t_black">
            <code className="t_darkblue">caption-side</code>속성의 적용 가능한 값 :{" "}
          </strong>
          <div className="table_summary value_200 mt_ms">
            <ul className="lst_hd">
              <li className="cell value">값</li>
              <li className="cell content">설명</li>
            </ul>
            <ul className="lst_bd">
              <li>
                <p className="cell value">
                  <code className="t_darkgreen">top</code>{" "}
                  <i className="t_darkgreen">[기본값]</i>
                </p>
                <p className="cell content">테이블의 위쪽(기본값)</p>
              </li>
              <li>
                <p className="cell value">
                  <code>bottom</code>
                </p>
                <p className="cell content">테이블의 아래쪽</p>
              </li>
              <li>
                <p className="cell value">
                  <code>block-start</code>
                </p>
                <p className="cell content">
                  작성 언어의 블록 시작 부분 (LTR에서는 <code>top</code>,
                  RTL에서는 <code>bottom</code>과 유사)
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code>block-end</code>
                </p>
                <p className="cell content">
                  작성 언어의 블록 끝 부분 (LTR에서는 <code>bottom</code>,
                  RTL에서는 <code>top</code>과 유사)
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code>inherit</code>
                </p>
                <p className="cell content">부모 요소의 값을 상속</p>
              </li>
              <li>
                <p className="cell value">
                  <code>initial</code>
                </p>
                <p className="cell content">
                  기본값(<code>top</code>)으로 설정
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code>unset</code>
                </p>
                <p className="cell content">
                  상속 가능한 경우 <code>inherit</code>, 그렇지 않으면{" "}
                  <code>initial</code>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          기본 문법
        </h2>
        <CodeBlock title="caption element syntax" className="mt_l" language="html">
          {`<table>
  <caption>요약 설명</caption> <!-- caption -->
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
        <article className="mt_l indent">
          <h3 className="ml_mn">
            [align]{" "}
            <i className="attr_optional">더 이상 사용되지 않음, CSS로 대체</i>{" "}
            <span className="t_blue el_inline_block">&lt;caption align="값"&gt;</span>
          </h3>
          <p className="mt_ms">
            제목의 위치를 지정합니다.
            <br />
            HTML5에서는 비추천하며, CSS의 <code>caption-side</code> 사용을
            권장합니다.
          </p>
          <div className="mt_s">
            <strong className="t_red">기본 방식(비 권장) : </strong>
            <CodeBlock title="caption 속성 [align - 비 권장]" className="indent mt_s" language="html">
              {`<caption align="bottom">테이블 하단에 위치한 제목</caption>`}
            </CodeBlock>
          </div>
          <div className="mt_m">
            <strong className="t_darkgreen">CSS로 대체(권장) : </strong>
            <CodeBlock title="caption 속성 [align - 권장]" className="indent mt_s" language="css">
              {`caption {
  caption-side: bottom;
}`}
            </CodeBlock>
          </div>
        </article>
      </section>

      <section className="view_editor indent mt_xxl">
        <h2 className="ml_mn ve_tit">예제</h2>
        <article className="mt_l indent">
          <h3 className="ml_mn">기본적인 제목 추가</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/08-table/8.2.caption_element_1.html"
                className="min_height_400 mb_result_height_300"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="기본적인 제목 추가"
                minHeight="400px"
              />
            </Suspense>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">하단에 위치한 제목 및 CSS로 스타일 조정</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/08-table/8.2.caption_element_2.html"
                className="min_height_400 mb_result_height_300"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="하단 위치 제목 및 CSS 스타일"
                minHeight="400px"
              />
            </Suspense>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">접근성을 고려한 aria-label 사용</h3>
          <CodeBlock title="접근성을 고려한 aria-label 사용" className="mt_m" language="html">
            {`<table aria-label="2025년 매출 통계">
  <caption>2025년 매출 통계</caption>
  <tr>
    <th>월</th>
    <th>매출액</th>
  </tr>
  <tr>
    <td>1월</td>
    <td>500만원</td>
  </tr>
</table>`}
          </CodeBlock>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주의사항
        </h2>
        <ul className="dot_lst mt_l">
          <li>
            <code>&lt;caption&gt;</code>은 반드시 <code>&lt;thead&gt;</code>,{" "}
            <code>&lt;tbody&gt;</code>, <code>&lt;tfoot&gt;</code>보다 먼저
            위치해야 합니다.
            <br />
            즉, <code>&lt;table&gt;</code>의 첫 번째 자식 요소로 사용해야
            합니다.
          </li>
          <li>
            <code>&lt;caption&gt;</code>은 테이블의 목적을 설명하는 요소입니다.
            <br />
            단순한 제목 스타일을 원할 경우 <code>&lt;h2&gt;</code>등의 헤딩
            요소를 활용하는 것이 더 적절할 수 있습니다.
          </li>
        </ul>
      </section>
      <aside className="browser_support mt_xxl" data-tit="caption">
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
        <img src={IMG.HTML + "/08_html_02.png"} alt="caption 요소" />
        <figcaption>caption 요소</figcaption>
      </figure>
    </>
  );
}

export default CaptionElementPage;
