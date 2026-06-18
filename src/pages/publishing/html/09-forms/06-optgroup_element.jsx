import CodeBlock from "@/components/code/CodeBlock";
import { usePageMeta } from "@/components/common/PageMeta";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "optgroup_element",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
  bottomEditor: true,
};

const PAGE_DATA = {
  title: "optgroup element",
  description:
    "optgroup 요소는 HTML 문서에서 select 요소 내부의 option 항목들을 논리적으로 그룹화할 때 사용하는 태그로, label 속성을 사용하여 각 그룹의 제목을 정의하며 시각적으로도 구분되어 사용자가 선택 항목의 분류 기준을 쉽게 인식할 수 있도록 도와줍니다. 이 페이지에서는 optgroup 요소의 주요 역할 및 특징을 설명하고, optgroup 요소의 용도와 구조적 위치에 따른 사용 예시를 소개합니다.",
  keyword: "Markup, HTML, tag, elements, optgroup",
};

function OptgroupElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>&lt;optgroup&gt;</code> 요소는 <code>&lt;select&gt;</code> 요소
          내부에서{" "}
          <b>
            관련 있는 <code>&lt;option&gt;</code> 항목들을 그룹으로 묶어
            구조적으로 구분할 수 있도록 해주는 시맨틱 태그
          </b>
          입니다.
          <br />
          <code>label</code> 속성을 사용해 각 그룹의 제목을 지정하며, 사용자에게{" "}
          <b>선택 항목들의 분류 기준을 시각적으로 제공하는 역할</b>을 합니다.
          <code>&lt;optgroup&gt;</code> 안에는 <code>&lt;option&gt;</code>만
          포함할 수 있고, 다른 <code>&lt;optgroup&gt;</code>을 중첩할 수는
          없습니다.
          <br />
          많은 항목 중 <b>카테고리별로 정리된 선택지를 제공하고자 할 때 유용</b>
          하며, <b>사용성과 가독성</b>을 높이는 데 도움이 됩니다.
        </p>
      </blockquote>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <ol className="mt_l ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>옵션을 논리적으로 그룹화</strong>
            <p>
              <code>&lt;optgroup&gt;</code>을 사용하면{" "}
              <code>&lt;select&gt;</code> 내에서 비슷한 성격의 옵션을 그룹으로
              묶을 수 있습니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>레이블(label) 속성으로 그룹 이름 표시</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;optgroup&gt;</code>은 반드시 <code>label</code> 속성을
                가져야 하며, 해당 그룹의 제목을 지정하는 역할을 합니다.
              </li>
              <li>
                브라우저는 <code>label</code> 값을 해당 옵션 그룹의 제목으로
                표시합니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>disabled 속성으로 그룹을 비활성화 가능</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;optgroup&gt;</code> 요소에 <code>disabled</code>{" "}
                속성을 추가하여 그룹 내 모든 옵션을 선택할 수 없도록 설정할 수
                있습니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>폼 데이터에는 영향을 주지 않음</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;optgroup&gt;</code> 자체는 선택되지 않으며, 폼
                데이터를 전송할 때 영향을 주지 않습니다.
              </li>
              <li>
                실제로 선택되는 값은 여전히 <code>&lt;option&gt;</code>{" "}
                요소입니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>&lt;optgroup&gt; 단독으로 사용 불가</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;optgroup&gt;</code> 요소는 반드시{" "}
                <code>&lt;select&gt;</code> 요소 내에서{" "}
                <code>&lt;option&gt;</code> 목록을 그룹화 하는 용도로 사용해야
                합니다.
              </li>
              <li>
                <code>&lt;optgroup&gt;</code> 요소 안에는{" "}
                <code>&lt;option&gt;</code> 요소만 포함할 수 있습니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>접근성을 향상시킴</strong>
            <p>
              스크린 리더가 그룹 이름을 먼저 읽어주므로, 사용자가 더 쉽게 옵션을
              이해할 수 있습니다.
            </p>
          </li>
        </ol>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          CSS 기본 값
        </h2>
        <p className="mt_l">
          <code>&lt;optgroup&gt;</code> 요소는 기본적으로 블록 레벨 요소이며,
          별도의 CSS를 지정하지 않아도 아래와 같은 기본값이 적용됩니다.
        </p>
        <CodeBlock title="optgroup element CSS" className="mt_m" language="css">
          {`optgroup {
  display: block;
  font-weight: bold;
}`}
        </CodeBlock>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          기본 문법
        </h2>
        <CodeBlock
          title="optgroup element syntax"
          className="mt_l"
          language="html"
        >
          {`<select name="food">
  <optgroup label="과일"> <!-- 옵션을 그룹화 -->
    <option value="apple">사과</option>
    <option value="banana">바나나</option>
  </optgroup>
  <optgroup label="채소"> <!-- 옵션을 그룹화 -->
    <option value="carrot">당근</option>
    <option value="lettuce">상추</option>
  </optgroup>
</select>`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn">속성</h2>
        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [label] <i className="attr_required">필수</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;optgroup label="값"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            해당 <code>&lt;optgroup&gt;</code>에 속하는 옵션들의 그룹명을
            지정합니다. 이 값은 브라우저에서 옵션 목록을 표시할 때 그룹의
            제목으로 사용됩니다.
            <br />
            <code>&lt;optgroup&gt;</code> 자체는 선택되지 않으며, 폼 데이터를
            전송할 때 영향을 주지 않습니다.
          </p>
          <CodeBlock
            title="optgroup 속성 [label]"
            className="mt_m"
            language="html"
          >
            {`<optgroup label="옵션 그룹의 제목">`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [disabled] <i className="attr_optional">Boolean - 선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;optgroup disabled&gt;
            </span>
          </h3>
          <p className="mt_ms">
            <code>&lt;optgroup&gt;</code> 내의 모든 <code>&lt;option&gt;</code>{" "}
            요소를 비활성화하여 선택할 수 없도록 합니다.
            <br />
            사용자가 해당 그룹의 옵션을 선택하지 못하도록 제한할 때 활용됩니다.
          </p>
          <CodeBlock
            title="optgroup 속성 [disabled]"
            className="mt_m"
            language="html"
          >
            {`<optgroup label="옵션 그룹의 제목" disabled>`}
          </CodeBlock>
        </article>
      </section>

      <section className="view_editor indent mt_xxl">
        <h2 className="ml_mn ve_tit">예제</h2>
        <div className="mt_l">
          <p>
            <span className="underline">
              <mark>
                <code>&lt;optgroup&gt;</code> 요소는 단독으로 사용하면 의미가
                없으며
              </mark>
              , 반드시 <code>&lt;select&gt;</code> 요소 내에서{" "}
              <code>&lt;option&gt;</code> 목록을 그룹화하는 용도로 사용해야
              합니다.
            </span>
            <br />
            이전 섹션(<i className="t_blue weight-800">
              select element
            </i>)에서 <code>&lt;optgroup&gt;</code> 요소의 사용 예제를 확인할 수
            있습니다.
          </p>
          <a
            href="/publishing/html/09-forms/05-select_element#inner_link:optgroup_example"
            target="_blank"
            title="새창 열림"
            rel="noreferrer"
            className="box_link external mt_m"
          >
            <b>select element</b> 예제 바로가기
          </a>
        </div>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주의사항
        </h2>
        <ul className="dot_lst mt_l">
          <li>
            <code>&lt;optgroup&gt;</code>에는 반드시 <code>label</code> 속성이
            있어야 합니다. <code>label</code> 속성이 없으면 브라우저에서 그룹
            제목을 표시하지 않습니다.
          </li>
          <li>
            <code>&lt;optgroup&gt;</code> 안에 또 다른{" "}
            <code>&lt;optgroup&gt;</code>을 포함할 수 없습니다.
          </li>
          <li>
            <code>&lt;optgroup&gt;</code>은 그룹을 구분하는 역할만 하며, 그룹
            자체는 선택할 수 없습니다. 선택 가능한 요소는 항상{" "}
            <code>&lt;option&gt;</code> 요소입니다.
          </li>
          <li>
            <code>&lt;optgroup&gt;</code> 요소에 <code>disabled</code> 속성을
            사용하면 그룹 내 모든 옵션이 비활성화됩니다.
            <br />
            개별 <code>&lt;option&gt;</code>만 비활성화하려면{" "}
            <code>disabled</code> 속성을 <code>&lt;option&gt;</code>에 직접
            적용해야 합니다.
          </li>
        </ul>
      </section>
      <aside className="browser_support mt_xxl" data-tit="optgroup">
        <ul>
          <li className="ie">5.5</li>
          <li className="edge">지원</li>
          <li className="chrome">1.0</li>
          <li className="firefox">1.0</li>
          <li className="opera">지원</li>
          <li className="safari">지원</li>
        </ul>
      </aside>
      <figure className="img_figure mt_l">
        <img src={IMG.HTML + "/09_html_06.png"} alt="optgroup 요소" />
        <figcaption>optgroup 요소</figcaption>
      </figure>
    </>
  );
}

export default OptgroupElementPage;
