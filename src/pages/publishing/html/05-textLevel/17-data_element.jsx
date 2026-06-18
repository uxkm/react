import CodeBlock from "@/components/code/CodeBlock";
import { usePageMeta } from "@/components/common/PageMeta";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "data_element",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
  bottomEditor: true,
};

const PAGE_DATA = {
  title: "data element",
  description:
    "data 요소는 HTML 문서에서 사람이 읽을 수 있는 텍스트와 기계가 처리할 수 있는 값을 함께 제공할 때 사용하는 인라인 태그로, value 속성을 통해 실제 처리될 값을 지정하고 요소 안에는 사람이 읽을 수 있는 형태의 내용을 작성합니다. 이 페이지에서는 data 요소의 주요 역할 및 특징을 설명하고, data 요소의 용도와 구조적 위치에 따른 사용 예시를 소개합니다.",
  keyword: "Markup, HTML, HTML5, tag, elements, data",
};

function DataElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>&lt;data&gt;</code> 요소는 기계가 처리할 수 있는 값과 사람이
          읽을 수 있는 값을 연결하는 시맨틱 태그로, 표시 콘텐츠와 연결된 데이터
          값을 <code className="weight-600">value</code> 속성에 명시합니다.
          <br />
          통계 수치, 단가, 코드와 텍스트를 함께 제공해야 하는 상황에서 정렬,
          계산, 필터링 등에 활용할 수 있습니다.
        </p>
      </blockquote>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <ol className="mt_l ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>기계와 사람 모두를 위한 데이터 표현</strong>
            <ul className="dot_lst">
              <li>
                <code>value</code> 속성으로 기계 읽기 값을 제공하고, 본문에는
                사람이 읽기 쉬운 텍스트를 표시합니다.
              </li>
              <li>예: 가격, 날짜, 등급, 식별 코드 등.</li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>의미론적 역할</strong>
            <p>
              콘텐츠와 관련된 데이터를 명확히 표현해 검색/수집/애플리케이션
              처리에 유리합니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>주요 사용 사례</strong>
            <ul className="dot_lst">
              <li>상품 가격 태깅</li>
              <li>데이터 시각화와 결합</li>
              <li>SEO/머신 처리용 값 노출</li>
            </ul>
          </li>
        </ol>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          CSS 기본 값
        </h2>
        <p className="mt_l">
          <code>&lt;data&gt;</code> 요소는 기본적으로 인라인 레벨 요소입니다.
        </p>
        <CodeBlock title="data element CSS" className="mt_m" language="css">
          {`data {
  display: inline;
}`}
        </CodeBlock>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          기본 문법
        </h2>
        <CodeBlock title="data element syntax" className="mt_l" language="html">
          {`<data value="데이터 값">표시 내용</data>`}
        </CodeBlock>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn">속성</h2>
        <article className="mt_l indent">
          <h3 className="ml_mn">
            [value]
            <i className="attr_required">필수</i>
            <span className="t_blue el_inline_block">
              &lt;data value="데이터 값"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            기계가 읽을 수 있는 값을 제공하는 속성입니다. 문자열/숫자/날짜 형식
            값을 사용할 수 있습니다.
          </p>
          <CodeBlock
            title="data 요소의 value 속성"
            className="mt_m"
            language="html"
          >
            {`<p id="product-info">
  상품 가격: <data value="59.99" class="price">59.99 USD</data>
</p>`}
          </CodeBlock>
        </article>
      </section>
      <section className="view_editor indent mt_xxl">
        <h2 className="ml_mn ve_tit">예제</h2>
        <article className="mt_l indent">
          <h3 className="ml_mn">상품 가격 태깅</h3>
          <CodeBlock title="상품 가격 태깅" className="mt_m" language="html">
            {`<p>상품 가격: <data value="100">100 USD</data></p>`}
          </CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">날짜 데이터</h3>
          <CodeBlock title="날짜 데이터" className="mt_m" language="html">
            {`<p>출시일: <data value="2025-01-01">2025년 1월 1일</data></p>`}
          </CodeBlock>
        </article>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주의사항
        </h2>
        <ul className="dot_lst mt_l">
          <li>
            <code>&lt;data&gt;</code>는 <code>value</code> 속성을 포함해야
            기계가 데이터를 인식할 수 있습니다.
          </li>
          <li>
            <code>value</code>와 표시 텍스트의 의미가 상충하지 않도록
            관리하세요.
          </li>
          <li>
            단순 값 표현에 적합하며 복잡한 구조화 데이터는 JSON-LD/Microdata
            같은 방식도 함께 검토하세요.
          </li>
        </ul>
      </section>
      <aside className="browser_support mt_xxl" data-tit="data">
        <ul>
          <li className="ie false">지원안함</li>
          <li className="edge">지원</li>
          <li className="chrome">62.0</li>
          <li className="firefox">22.0</li>
          <li className="opera">49.0</li>
          <li className="safari">지원</li>
        </ul>
      </aside>
      <figure className="img_figure mt_l">
        <img src={`${IMG.HTML}/05_html_17.png`} alt="data 요소" />
        <figcaption>data 요소</figcaption>
      </figure>
    </>
  );
}

export default DataElementPage;
