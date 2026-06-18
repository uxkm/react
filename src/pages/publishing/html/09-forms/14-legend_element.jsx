import CodeBlock from "@/components/code/CodeBlock";
import { usePageMeta } from "@/components/common/PageMeta";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "legend_element",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
  bottomEditor: true,
};

const PAGE_DATA = {
  title: "legend element",
  description:
    "legend 요소는 HTML 문서에서 fieldset 요소 내부에 사용되며, 그룹화된 폼 요소들의 제목이나 설명을 제공하는 태그로, fieldset 상단에 위치하여 해당 그룹의 목적이나 내용을 명확하게 전달하며 브라우저는 기본적으로 fieldset의 테두리와 연결된 위치에 렌더링합니다. 이 페이지에서는 legend 요소의 주요 역할 및 특징을 설명하고, legend 요소의 용도와 구조적 위치에 따른 사용 예시를 소개합니다.",
  keyword: "Markup, HTML, tag, elements, legend",
};

function LegendElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>&lt;legend&gt;</code> 요소는 <code>&lt;fieldset&gt;</code> 요소
          내부에서 사용되며,{" "}
          <b>해당 필드셋에 대한 제목이나 설명을 제공하는 시맨틱 태그</b>입니다.
          <br />
          <code>&lt;fieldset&gt;</code>으로 그룹화된 입력 요소들의 의미나 목적을
          간결하게 전달해주며, 브라우저는 기본적으로{" "}
          <code>&lt;fieldset&gt;</code>의 테두리 상단에{" "}
          <code>&lt;legend&gt;</code>를 배치해{" "}
          <b>시각적으로 그룹의 레이블 역할</b>을 하게 합니다.
          <br />
          접근성 면에서도 중요한 역할을 하며, 스크린 리더는{" "}
          <code>&lt;legend&gt;</code>를 통해{" "}
          <b>그룹화된 폼 요소의 주제를 먼저 안내</b>
          합니다. 복잡한 폼에서{" "}
          <b>사용자 이해를 돕고 구조적 명확성을 높이는 데 효과적</b>입니다.
        </p>
      </blockquote>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <ol className="mt_l ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>&lt;fieldset&gt; 요소의 제목 역할</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;legend&gt;</code> 요소는 반드시{" "}
                <code>&lt;fieldset&gt;</code> 요소 내부에서 사용되어야 하며,
                단독으로 사용할 수 없습니다.
              </li>
              <li>
                해당 <code>&lt;fieldset&gt;</code> 그룹이 어떤 내용을
                포함하는지를 간결하게 설명하는 라벨 역할을 합니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>자동으로 &lt;fieldset&gt; 내부의 상단에 배치됨</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;legend&gt;</code> 요소는 가능한 한{" "}
                <code>&lt;fieldset&gt;</code>의 첫 번째 자식 요소로 배치하는
                것이 좋습니다.
              </li>
              <li>CSS로 스타일을 변경할 수 있습니다.</li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>접근성을 크게 향상시킴</strong>
            <p>
              스크린 리더가 <code>&lt;legend&gt;</code> 내용을 읽어줌으로써
              장애가 있는 사용자도 그룹의 의미를 쉽게 파악할 수 있습니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>모든 브라우저에서 지원됨</strong>
            <p>
              <code>&lt;legend&gt;</code> 요소는 HTML5에서도 여전히 유효하며,
              모든 주요 브라우저에서 정상적으로 작동합니다.
            </p>
          </li>
        </ol>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          CSS 기본 값
        </h2>
        <p className="mt_l">
          <code>&lt;legend&gt;</code> 요소는 기본적으로 블록 레벨 요소이며,
          별도의 CSS를 지정하지 않아도 아래와 같은 기본값이 적용됩니다.
        </p>
        <CodeBlock title="legend element CSS" className="mt_m" language="css">
          {`legend {
  display: block;
  padding: 0 2px;
}`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          기본 문법
        </h2>
        <CodeBlock
          title="legend element syntax"
          className="mt_l"
          language="html"
        >
          {`<fieldset>
  <legend>fieldset 그룹의 제목</legend> <!-- legend 요소 -->
  <!-- form 요소(input, textarea, select, button 등) -->
</fieldset>`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn">속성</h2>
        <p className="mt_l">
          <code>&lt;legend&gt;</code> 요소는{" "}
          <b className="t_black">고유 속성</b>을 가지지 않으며,
          <mark>
            글로벌 속성(<code>class</code>, <code>id</code>, <code>style</code>,{" "}
            <code>aria-*</code>, <code>data-*</code> 등)만 사용할 수 있습니다.
          </mark>
        </p>
      </section>

      <section className="view_editor indent mt_xxl">
        <h2 className="ml_mn ve_tit">예제</h2>
        <div className="mt_l">
          <p>
            <span className="underline">
              <mark>
                <code>&lt;legend&gt;</code> 요소는 단독으로 사용하면 의미가
                없습니다.
              </mark>
              <code>&lt;legend&gt;</code> 요소는 반드시{" "}
              <code>&lt;fieldset&gt;</code> 내부에 사용되어, 해당{" "}
              <code>&lt;fieldset&gt;</code> 그룹이 어떤 내용을 포함하는지를
              간결하게 설명하는 라벨 역할을 합니다.
            </span>
            <br />
            이전 섹션(<i className="t_blue weight-800">
              fieldset element
            </i>)에서 <code>&lt;legend&gt;</code> 요소의 사용 예제를 확인할 수
            있습니다.
          </p>
          <a
            href="/publishing/html/09-forms/13-fieldset_element#inner_link:with_legend"
            target="_blank"
            rel="noreferrer"
            title="새창 열림"
            className="box_link external mt_m"
          >
            <b>fieldset element</b> 예제 바로가기
          </a>
        </div>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주의사항
        </h2>
        <ul className="dot_lst mt_l">
          <li>
            <code>&lt;legend&gt;</code> 요소는 반드시{" "}
            <code>&lt;fieldset&gt;</code> 요소 내부에서 사용되어야 합니다.
            그룹화된 입력 필드의 목적을 설명하는 라벨 역할을 합니다.
          </li>
          <li>
            가능하면 <code>&lt;fieldset&gt;</code>의 첫 번째 자식 요소로
            배치해주시는 것이 좋습니다. 일부 브라우저나 스크린 리더는{" "}
            <code>&lt;legend&gt;</code>가 가장 처음에 위치해야 올바르게
            인식합니다.
          </li>
          <li>
            의미 있는 제목을 간결하게 제공해주시는 것이 좋습니다. 너무 길거나
            모호한 제목은 접근성에 좋지 않으며, 스크린 리더 사용자에게 혼란을 줄
            수 있습니다.
          </li>
          <li>
            시각적 위치와 실제 의미가 일치하도록 하는 것이 좋습니다.
            <br />
            CSS로 위치만 이동시키는 경우 시각적 의미와 코드 구조가 달라질 수
            있으므로 주의해주셔야 합니다.
          </li>
          <li>
            브라우저 스타일이 다를 수 있으므로, 일관된 디자인이 필요할 경우
            CSS로 명시적으로 설정해주시기 바랍니다.
          </li>
        </ul>
      </section>
      <aside className="browser_support mt_xxl" data-tit="legend">
        <ul>
          <li className="ie">6+</li>
          <li className="edge">지원</li>
          <li className="chrome">지원</li>
          <li className="firefox">1.0</li>
          <li className="opera">지원</li>
          <li className="safari">지원</li>
        </ul>
      </aside>
      <figure className="img_figure mt_l">
        <img src={IMG.HTML + "/09_html_14.png"} alt="legend 요소" />
        <figcaption>legend 요소</figcaption>
      </figure>
    </>
  );
}

export default LegendElementPage;
