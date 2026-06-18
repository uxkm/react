import CodeBlock from "@/components/code/CodeBlock";
import { usePageMeta } from "@/components/common/PageMeta";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "option_element",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
  bottomEditor: true,
};

const PAGE_DATA = {
  title: "option element",
  description:
    "option 요소는 HTML 문서에서 select 또는 datalist 요소 내부에서 사용되며, 사용자가 선택할 수 있는 개별 항목을 정의하는 태그로, value 속성을 통해 실제로 전송될 데이터를 지정하고 selected 속성을 사용하면 초기 선택값을 설정할 수 있습니다. 이 페이지에서는 option 요소의 주요 역할 및 특징을 설명하고, option 요소의 용도와 구조적 위치에 따른 사용 예시를 소개합니다.",
  keyword: "Markup, HTML, tag, elements, option",
};

function OptionElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>&lt;option&gt;</code> 요소는 <code>&lt;select&gt;</code> 또는{" "}
          <code>&lt;datalist&gt;</code> 요소 내에서{" "}
          <b>사용자가 선택할 수 있는 개별 항목을 정의하는 시맨틱 태그</b>입니다.
        </p>
        <p className="mt_s">
          <code>&lt;select&gt;</code> 요소에서 사용할 때는{" "}
          <code>&lt;option&gt;</code> 요소로 <b>드롭다운 목록을 구성</b>하고,
          기본 첫 번째 <code>&lt;option&gt;</code>이 선택된 상태로 화면에
          표시되지만, <code>selected</code> 속성을 사용하면 초기 선택값을 직접
          설정할 수 있습니다.
          <br />
          또한 <code>disabled</code> 속성을 통해 선택할 수 없는 비활성 항목을
          만들 수도 있어, 사용자 선택 흐름을 보다 정교하게 제어할 수 있습니다.
          <br />
          사용자가 선택한 <code>&lt;option&gt;</code>의 <code>value</code> 값이
          데이터로 전송됩니다.
        </p>
        <p className="mt_s">
          <code>&lt;datalist&gt;</code> 요소에서 사용할 때는{" "}
          <b>자동완성 목록에서 하나의 선택지로 표시</b>되며, 사용자가 키보드
          입력 시 <code>&lt;option&gt;</code>의 <code>value</code> 값과 같은
          내용을 입력하면 자동으로 해당 값이 완성됩니다.
        </p>
      </blockquote>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <ol className="mt_l ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>
              드롭다운 목록(&lt;select&gt;)에서 선택 가능한 항목 제공
            </strong>
            <p>
              <code>&lt;option&gt;</code> 요소를 사용하여 사용자가 선택할 수
              있는 목록을 구성합니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>
              자동완성 기능을 지원하는 &lt;datalist&gt;에서 사용 가능
            </strong>
            <p>
              <code>&lt;datalist&gt;</code> 내에서 자동완성 옵션을 제공할 수
              있습니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>값(value) 지정 가능</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;option&gt;</code> 요소는 <code>value</code> 속성을
                사용하여 선택되었을 때 전송될 값을 지정할 수 있습니다.
              </li>
              <li>
                <code>value</code> 속성이 없는 경우, <code>&lt;option&gt;</code>{" "}
                내부의 텍스트 값이 자동으로 사용됩니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>기본 선택값 설정 가능 (selected 속성 사용)</strong>
            <p>
              <code>selected</code> 속성을 사용하여 특정 옵션을 기본 선택된
              상태로 표시할 수 있습니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>비활성화 가능(disabled 속성 사용)</strong>
            <p>
              <code>disabled</code> 속성을 사용하여 특정 옵션을 비활성화하여
              선택할 수 없도록 설정할 수 있습니다.
            </p>
          </li>
        </ol>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          CSS 기본 값
        </h2>
        <p className="mt_l">
          <code>&lt;option&gt;</code> 요소는 기본적으로 블록 레벨 요소이며,
          별도의 CSS를 지정하지 않아도 아래와 같은 기본값이 적용됩니다.
        </p>
        <CodeBlock title="option element CSS" className="mt_m" language="css">
          {`option {
  display: block;
  font-weight: normal;
  white-space: nowrap;
}`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          기본 문법
        </h2>
        <CodeBlock
          title="option element syntax"
          className="mt_l"
          language="html"
        >
          {`<select name="fruits">
  <option value="apple">사과</option>
  <option value="banana">바나나</option>
  <option value="grape">포도</option>
</select>`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn">속성</h2>
        <blockquote className="uk_note mt_l" role="note">
          <strong className="sound_only">요약 설명</strong>
          <p>
            <code>&lt;option&gt;</code> 요소는 <code>&lt;select&gt;</code>와{" "}
            <code>&lt;datalist&gt;</code>에서 사용할 수 있으며,{" "}
            <b>각 요소에서 속성의 동작 방식이 다릅니다.</b>
            <br />
            다음은 <code>value</code>, <code>selected</code>,{" "}
            <code>disabled</code>, <code>label</code> 속성이{" "}
            <code>&lt;select&gt;</code>와 <code>&lt;datalist&gt;</code>에서
            어떻게 다르게 동작하는지 정리한 설명입니다.
          </p>
        </blockquote>

        <article className="mt_xl indent dp_pc">
          <h3 className="ml_mn t_blue">
            <code className="font-21-important t_blue weight-600">
              &lt;option&gt;
            </code>{" "}
            속성 요약
          </h3>
          <div className="table_summary value_200 mt_m">
            <ul className="lst_hd">
              <li className="cell value">속성명</li>
              <li className="cell content">설명</li>
            </ul>
            <ul className="lst_bd">
              <li>
                <p className="cell value">
                  <code>value</code>
                </p>
                <p className="cell content">
                  선택 시 서버로 전송할 값 지정 (<code>&lt;select&gt;</code>,{" "}
                  <code>&lt;datalist&gt;</code>에서 사용)
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code>selected</code>
                </p>
                <p className="cell content">
                  기본적으로 선택된 상태로 설정 (<code>&lt;select&gt;</code>만
                  적용 가능)
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code>disabled</code>
                </p>
                <p className="cell content">
                  선택할 수 없도록 비활성화 (<code>&lt;select&gt;</code>만 적용
                  가능)
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code>label</code>
                </p>
                <p className="cell content">
                  옵션에 대한 사용자 친화적인 라벨 제공 (
                  <code>&lt;select&gt;</code>만 적용 가능)
                </p>
              </li>
            </ul>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [value] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;option value="값"&gt;
            </span>
          </h3>
          <ul className="answer_lst gap-column-important-s mt_ms">
            <li>
              <strong className="t_blue">&lt;select&gt;</strong>
              <p>
                사용자가 특정 옵션을 선택하면 해당 옵션의 <code>value</code>{" "}
                속성에 지정된 값이 서버로 전송됩니다.
                <br />
                만약 <code>value</code> 속성을 지정하지 않으면, 옵션의 텍스트
                내용이 서버로 전송됩니다.
              </p>
            </li>
            <li>
              <strong className="t_green">&lt;datalist&gt;</strong>
              <p>
                해당 옵션의 <code>value</code> 값이 사용자가 직접 입력할 수 있는
                추천값으로 사용됩니다.
              </p>
            </li>
          </ul>
          <CodeBlock
            title="option 속성 [value]"
            className="mt_m"
            language="html"
          >
            {`<!-- select -->
<select name="city" id="city">
  <option value="seoul">서울</option>
  <option value="busan">부산</option>
  <option value="daejeon">대전</option>
</select>

<!-- datalist -->
<input list="cities" id="city-input" name="city">
<datalist id="cities">
  <option value="seoul">
  <option value="busan">
  <option value="daejeon">
</datalist>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [selected] <i className="attr_optional">Boolean - 선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;option selected&gt;
            </span>
          </h3>
          <ul className="answer_lst gap-column-important-s mt_ms">
            <li>
              <strong className="t_blue">&lt;select&gt;</strong>
              <p>
                기본적으로 선택될 <code>&lt;option&gt;</code>을 지정합니다.
                <br />이 속성이 설정된 <code>&lt;option&gt;</code>은 페이지 로드
                시 자동으로 선택되며, 단일 선택 및 다중 선택(
                <code>multiple</code>) 드롭다운 모두에서 사용할 수 있습니다.
                <br />
                만약 <code>selected</code> 속성이 지정되지 않으면, 기본적으로 첫
                번째 <code>&lt;option&gt;</code>이 선택됩니다.
              </p>
            </li>
            <li>
              <strong className="t_green">&lt;datalist&gt;</strong>
              <p className="t_red">
                <code className="t_red">&lt;datalist&gt;</code> 내에서 사용되는{" "}
                <code className="t_red">&lt;option&gt;</code> 요소는{" "}
                <i className="underline">
                  자동 완성 목록을 제공하는 용도로만 사용되므로
                </i>
                , <code className="t_red">selected</code> 속성을 지원하지
                않습니다.
              </p>
            </li>
          </ul>
          <CodeBlock
            title="option 속성 [selected]"
            className="mt_m"
            language="html"
          >
            {`<select name="city" id="city">
  <option value="seoul" selected>서울</option>
  <option value="busan">부산</option>
  <option value="daejeon">대전</option>
</select>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [disabled] <i className="attr_optional">Boolean - 선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;option disabled&gt;
            </span>
          </h3>
          <ul className="answer_lst gap-column-important-s mt_ms">
            <li>
              <strong className="t_blue">&lt;select&gt;</strong>
              <p>
                <code>&lt;option&gt;</code> 요소를 비활성화하여 사용자가 선택할
                수 없도록 설정하는 속성으로, <code>disabled</code> 속성이
                적용되면 스타일도 비활성화된 상태로 변경됩니다.
              </p>
            </li>
            <li>
              <strong className="t_green">&lt;datalist&gt;</strong>
              <p className="t_red">
                <code className="t_red">&lt;datalist&gt;</code> 내에서 사용되는{" "}
                <code className="t_red">&lt;option&gt;</code> 요소는{" "}
                <i className="underline">
                  자동 완성 목록을 제공하는 용도로만 사용되므로
                </i>
                , <code className="t_red">disabled</code> 속성을 지원하지
                않습니다.
              </p>
            </li>
          </ul>
          <CodeBlock
            title="option 속성 [disabled]"
            className="mt_m"
            language="html"
          >
            {`<select name="city" id="city">
  <option value="seoul" disabled>서울</option>
  <option value="busan">부산</option>
  <option value="daejeon">대전</option>
</select>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [label] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;option label="값"&gt;
            </span>
          </h3>
          <ul className="answer_lst gap-column-important-s mt_ms">
            <li>
              <strong className="t_blue">&lt;select&gt;</strong>
              <p>
                <code>label</code> 속성은 <code>&lt;option&gt;</code> 요소에
                추가적인 설명을 제공하는 역할을 하며, 브라우저가 해당 옵션을
                표시할 때 <code>label</code> 값을 대신 사용할 수도 있습니다.
                <br />
                <i className="underline">
                  하지만 대부분의 경우 <code>label</code> 속성이 있어도{" "}
                  <code>&lt;option&gt;</code> 요소의 텍스트 콘텐츠가 우선적으로
                  표시됩니다.
                </i>
              </p>
            </li>
            <li>
              <strong className="t_green">&lt;datalist&gt;</strong>
              <p className="t_red">
                <code className="t_red">&lt;datalist&gt;</code> 내에서 사용되는{" "}
                <code className="t_red">&lt;option&gt;</code> 요소는{" "}
                <i className="underline">
                  자동 완성 목록을 제공하는 용도로만 사용되므로
                </i>
                , <code className="t_red">label</code> 속성을 지원하지 않습니다.
              </p>
            </li>
          </ul>
          <CodeBlock
            title="option 속성 [label]"
            className="mt_m"
            language="html"
          >
            {`<select name="os" id="os">
  <option value="win" label="Windows">윈도우</option>
  <option value="mac" label="Mac OS">맥OS</option>
</select>`}
          </CodeBlock>
        </article>
      </section>

      <section className="view_editor indent mt_xxl">
        <h2 className="ml_mn ve_tit">예제</h2>
        <div className="mt_l">
          <p>
            <span className="underline">
              <mark>
                <code>&lt;option&gt;</code> 요소는 단독으로 사용하면 의미가
                없습니다.
              </mark>{" "}
              <code>&lt;option&gt;</code> 요소는 <code>&lt;select&gt;</code>{" "}
              또는 <code>&lt;datalist&gt;</code> 요소 내에 사용되어,{" "}
              <b>사용자가 선택할 수 있는 항목을 정의</b>하거나{" "}
              <b>자동완성 목록을 제공하는 역할</b>을 합니다.
            </span>
            <br />
            <code>&lt;option&gt;</code> 요소를 사용하는 예제는{" "}
            <i className="t_blue weight-800">select element</i>와{" "}
            <i className="t_blue weight-800">datalist element</i>에서 확인할 수
            있습니다.
          </p>
          <div className="mt_s">
            <a
              href="/publishing/html/09-forms/05-select_element#inner_link:option_example"
              target="_blank"
              title="새창 열림"
              rel="noreferrer"
              className="box_link external mt_s mr_3"
            >
              <b>select element</b> 예제 바로가기
            </a>
            <a
              href="/publishing/html/09-forms/08-datalist_element#inner_link:datalist_example"
              target="_blank"
              title="새창 열림"
              rel="noreferrer"
              className="box_link external mt_s"
            >
              <b>datalist element</b> 예제 바로가기
            </a>
          </div>
        </div>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주의사항
        </h2>
        <ul className="dot_lst mt_l">
          <li>
            <code>&lt;select&gt;</code> 요소에 <code>multiple</code> 속성이 없을
            경우, 여러 개의 <code>&lt;option&gt;</code> 요소에{" "}
            <code>selected</code> 속성을 지정해도 첫 번째 <code>selected</code>{" "}
            속성이 있는 옵션만 선택됩니다.
          </li>
          <li>
            <code>&lt;option&gt;</code> 요소는 CSS 스타일링이 제한적입니다. 일부
            브라우저에서 <code>&lt;option&gt;</code> 요소의 스타일을 제한적으로
            지원하므로, 완전한 디자인 변경이 어려울 수 있습니다.
          </li>
          <li>
            <code>disabled</code> 옵션은 선택 불가능하지만 여전히 비활성 상태로
            화면에 표시됩니다.
            <br />
            옵션을 완전히 숨기려면 CSS <code>display: none;</code>을 적용해야
            합니다.
          </li>
        </ul>
      </section>
      <aside className="browser_support mt_xxl" data-tit="option">
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
        <img src={IMG.HTML + "/09_html_07.png"} alt="option 요소" />
        <figcaption>option 요소</figcaption>
      </figure>
    </>
  );
}

export default OptionElementPage;
