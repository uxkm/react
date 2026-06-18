import CodeBlock from "@/components/code/CodeBlock";
import { usePageMeta } from "@/components/common/PageMeta";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "time_element",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
  bottomEditor: true,
};

const PAGE_DATA = {
  title: "time element",
  description:
    "time 요소는 HTML 문서에서 날짜나 시간을 표현할 때 사용하는 인라인 태그로, 사람이 읽을 수 있는 텍스트와 함께 datetime 속성을 사용하여 기계가 인식할 수 있는 표준화된 날짜·시간 값을 제공할 수 있습니다. 이 페이지에서는 time 요소의 주요 역할 및 특징을 설명하고, time 요소의 용도와 구조적 위치에 따른 사용 예시를 소개합니다.",
  keyword: "Markup, HTML, HTML5, tag, elements, time, datetime",
};

function TimeElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>&lt;time&gt;</code> 요소는 날짜/시간 정보를 나타내는 시맨틱
          태그로, 사람이 읽는 텍스트와 함께 기계가 인식할 수 있는 표준화된 시간
          데이터를 <code className="weight-600">datetime</code> 속성에 포함할 수
          있습니다.
          <br />
          일정, 게시일, 마감일, 타이머 같은 시간 관련 콘텐츠에서 검색
          엔진/브라우저가 의미를 정확히 해석하도록 돕습니다.
        </p>
      </blockquote>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <ol className="mt_l ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>날짜 및 시간 표현</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;time&gt;</code>은 날짜와 시간을 의미론적으로
                표현합니다.
              </li>
              <li>
                예: <code>2025-01-01T12:00:00</code>
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>기계 읽기 형식 제공</strong>
            <p>
              <code>datetime</code> 속성에 ISO 8601 형식 값을 제공해 기계가 해석
              가능한 데이터로 만듭니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>주요 사용 사례</strong>
            <ul className="dot_lst">
              <li>게시 날짜/수정 시각</li>
              <li>이벤트 일정/마감 기한</li>
              <li>특정 시점 표시</li>
            </ul>
          </li>
        </ol>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          CSS 기본 값
        </h2>
        <p className="mt_l">
          <code>&lt;time&gt;</code> 요소는 기본적으로 인라인 레벨 요소입니다.
        </p>
        <CodeBlock title="time element CSS" className="mt_m" language="css">
          {`time {
  display: inline;
}`}
        </CodeBlock>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          기본 문법
        </h2>
        <CodeBlock title="time element syntax" className="mt_l" language="html">
          {`<time datetime="YYYY-MM-DDTHH:mm:ssTZD">표시 내용</time>`}
        </CodeBlock>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn">속성</h2>
        <article className="mt_l indent">
          <h3 className="ml_mn">
            [datetime]
            <i className="attr_optional">선택 사항</i>
          </h3>
          <span className="t_blue el_inline_block">
            &lt;time datetime="YYYY-MM-DDTHH:mm:ssTZD"&gt;
          </span>
          <p className="mt_ms">
            날짜/시간을 ISO 8601 형식으로 지정합니다. 생략 시 단순 텍스트로
            간주됩니다.
          </p>
          <ul className="indent_small mt_sm dot_lst">
            <li>
              날짜: <code>YYYY-MM-DD</code>
            </li>
            <li>
              날짜+시간: <code>YYYY-MM-DDTHH:mm:ss</code>
            </li>
            <li>
              시간대 포함: <code>YYYY-MM-DDTHH:mm:ss+09:00</code>
            </li>
          </ul>
          <CodeBlock
            title="time datetime attr"
            className="mt_m"
            language="html"
          >
            {`<time datetime="2025-01-01T12:00:00">1월 1일 오후 12시</time>`}
          </CodeBlock>
        </article>
      </section>
      <section className="view_editor indent mt_xxl">
        <h2 className="ml_mn ve_tit">예제</h2>
        <article className="mt_l indent">
          <h3 className="ml_mn">블로그 게시 날짜</h3>
          <CodeBlock title="블로그 게시 날짜" className="mt_m" language="html">
            {`<p>이 글은 <time datetime="2025-01-23">2025년 1월 23일</time>에 작성되었습니다.</p>`}
          </CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">이벤트 일정</h3>
          <CodeBlock title="이벤트 일정" className="mt_m" language="html">
            {`<p>다음 회의는 <time datetime="2025-02-01T14:00:00+09:00">2월 1일 오후 2시</time>에 열립니다.</p>`}
          </CodeBlock>
        </article>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주의사항
        </h2>
        <ul className="dot_lst mt_l">
          <li>
            사람이 읽는 텍스트가 있더라도 <code>datetime</code> 속성으로 기계
            읽기 형식을 함께 제공하는 것이 좋습니다.
          </li>
          <li>
            <code>datetime</code> 값은 ISO 8601 형식을 지켜야 하며, 시간대가
            중요하면 오프셋 정보를 포함하세요.
          </li>
        </ul>
      </section>
      <aside className="browser_support mt_xxl" data-tit="time">
        <ul>
          <li className="ie false">지원안함</li>
          <li className="edge">지원</li>
          <li className="chrome">62.0</li>
          <li className="firefox">22.0</li>
          <li className="opera">49.0</li>
          <li className="safari">7.0</li>
        </ul>
      </aside>
      <figure className="img_figure mt_l">
        <img src={`${IMG.HTML}/05_html_18.png`} alt="time 요소" />
        <figcaption>time 요소</figcaption>
      </figure>
    </>
  );
}

export default TimeElementPage;
