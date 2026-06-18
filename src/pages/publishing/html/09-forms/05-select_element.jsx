import { Suspense, lazy } from "react";
import CodeBlock from "@/components/code/CodeBlock";
import { usePageMeta } from "@/components/common/PageMeta";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "select_element",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
  bottomEditor: true,
};

const PAGE_DATA = {
  title: "select element",
  description:
    "select 요소는 HTML 문서에서 미리 정의된 여러 항목 중 하나 또는 여러 개를 선택할 수 있도록 하는 드롭다운 목록을 생성하는 태그로, 내부에는 하나 이상의 option 요소를 포함하며 multiple 속성을 사용하면 다중 선택도 가능합니다. 이 페이지에서는 select 요소의 주요 역할 및 특징을 설명하고, select 요소의 용도와 구조적 위치에 따른 사용 예시를 소개합니다.",
  keyword: "Markup, HTML, tag, elements, select",
};

const UkEditorTarget = lazy(
  () => import("@/components/code/UkEditorTarget"),
);

function EditorFallback() {
  return <div className="uk_editor min_height_400" aria-hidden />;
}

function SelectElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>&lt;select&gt;</code> 요소는 웹 폼에서{" "}
          <b>
            미리 정의된 여러 옵션 중 하나 또는 여러 개를 선택할 수 있는 드롭다운
            목록을 생성하는 시맨틱 태그
          </b>
          입니다.
          <br />
          내부에 <code>&lt;option&gt;</code> 요소들을 포함하여 선택지를
          정의하며, <code>multiple</code> 속성을 지정하면{" "}
          <b>다중 선택도 가능</b>합니다.
          <br />
          <code>&lt;select&gt;</code> 요소는 기본적으로 첫 번째{" "}
          <code>&lt;option&gt;</code>이 선택된 상태로 화면에 표시되지만,{" "}
          <code>selected</code> 속성을 사용해 다른 옵션을 초기 선택값으로 지정할
          수도 있습니다.
          <br />
          <b>
            사용자 입력을 제한하고, 정형화된 값 선택을 유도할 때 유용하게 사용
          </b>
          됩니다.
        </p>
      </blockquote>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <ol className="mt_l ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>드롭다운 목록 제공</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;select&gt;</code> 요소는 기본적으로 드롭다운 형태의
                선택 목록을 생성합니다.
              </li>
              <li>사용자는 하나 또는 여러 개의 옵션을 선택할 수 있습니다.</li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>사용자가 선택할 수 있는 옵션 목록 제공</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;select&gt;</code> 내부에는 여러 개의{" "}
                <code>&lt;option&gt;</code> 요소가 포함되어야 합니다.
              </li>
              <li>
                <code>&lt;option&gt;</code> 요소를 사용하여 각 선택지를 정의할
                수 있습니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>단일 선택 및 다중 선택 가능</strong>
            <p>
              기본적으로 하나의 옵션만 선택할 수 있지만, <code>multiple</code>{" "}
              속성을 사용하면 여러 개의 옵션 선택이 가능합니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>optgroup 요소를 사용해 옵션 그룹화 가능</strong>
            <p>
              <code>&lt;optgroup&gt;</code> 요소를 사용하면 옵션을 논리적으로
              그룹화할 수 있습니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>폼과 연동 가능</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;select&gt;</code> 요소는 <code>name</code> 속성을 통해
                폼 데이터로 전송될 수 있습니다.
              </li>
              <li>선택된 값은 서버로 제출됩니다.</li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>기본 스타일이 다름</strong>
            <p>
              브라우저마다 <code>&lt;select&gt;</code> 요소의 기본 디자인이
              다르므로, CSS 스타일을 직접 지정하는 것이 좋습니다.
            </p>
          </li>
        </ol>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          CSS 기본 값
        </h2>
        <p className="mt_l">
          <code>&lt;select&gt;</code> 요소는 기본적으로 인라인 블록 레벨
          요소이며, 별도의 CSS를 지정하지 않아도 아래와 같은 기본값이
          적용됩니다.
        </p>
        <CodeBlock title="select element CSS" className="mt_m" language="css">
          {`select {
  display: inline-block;
  margin: 0;
  background-color: white; /* 브라우저마다 다름 */
  border: 1px solid black; /* 브라우저마다 다름 */
  box-sizing: border-box;
  cursor: default;
}`}
        </CodeBlock>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          기본 문법
        </h2>
        <CodeBlock
          title="select element syntax"
          className="mt_l"
          language="html"
        >
          {`<select name="category">
  <option value="1">옵션 1</option>
  <option value="2">옵션 2</option>
  <option value="3">옵션 3</option>
</select>`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn">속성</h2>
        <article className="mt_l indent dp_pc">
          <h3 className="ml_mn t_blue">
            <code className="font-21-important t_blue weight-600">
              &lt;select&gt;
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
                  <code>name</code>
                </p>
                <p className="cell content">
                  서버로 전송할 때 사용될 이름을 지정
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code>multiple</code>
                </p>
                <p className="cell content">
                  여러 개의 옵션을 선택할 수 있도록 허용
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code>size</code>
                </p>
                <p className="cell content">보이는 옵션 개수를 지정</p>
              </li>
              <li>
                <p className="cell value">
                  <code>disabled</code>
                </p>
                <p className="cell content">선택 상자를 비활성화</p>
              </li>
              <li>
                <p className="cell value">
                  <code>autofocus</code>
                </p>
                <p className="cell content">
                  페이지 로드 시 자동으로 포커스 설정
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code>required</code>
                </p>
                <p className="cell content">
                  반드시 하나 이상의 옵션을 선택하도록 설정
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code>form</code>
                </p>
                <p className="cell content">
                  특정 <code>&lt;form&gt;</code>과 연결
                </p>
              </li>
            </ul>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [name] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;select name="값"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            <code>&lt;select&gt;</code> 요소의 이름을 지정하여, 폼 제출 시 해당
            필드의 데이터를 식별하고 서버로 전송할 키 값으로 활용됩니다.
          </p>
          <CodeBlock
            title="select 속성 [name]"
            className="mt_m"
            language="html"
          >
            {`<select name="city" id="city">
  <option value="seoul">서울</option>
  <option value="busan">부산</option>
</select>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [multiple] <i className="attr_optional">Boolean - 선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;select multiple&gt;
            </span>
          </h3>
          <p className="mt_ms">
            하나의 <code>&lt;select&gt;</code> 요소에서 여러 개의 옵션을 선택할
            수 있도록 허용합니다.
            <br />
            <i className="key_ctrl">Ctrl(Windows)</i> 또는{" "}
            <i className="key_mac_cmd">Command(Mac)</i> 키를 누른 상태에서 여러
            개 선택 가능합니다.
          </p>
          <CodeBlock
            title="select 속성 [multiple]"
            className="mt_m"
            language="html"
          >
            {`<select name="fruits" id="fruits" multiple>
  <option value="apple">사과</option>
  <option value="banana">바나나</option>
  <option value="grape">포도</option>
</select>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [size] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;select size="number"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            <code>size</code> 속성은 <code>&lt;select&gt;</code> 요소에서 한
            번에 표시되는 옵션 항목의 개수를 지정합니다.
            <br />
            <code>size</code> 속성을 설정하면 지정된 개수만큼 옵션 목록이 펼쳐진
            상태로 표시되며,{" "}
            <mark>
              드롭다운 형태가 아닌 내부 스크롤이 있는 목록 형태로 변경됩니다.
            </mark>
          </p>
          <CodeBlock
            title="select 속성 [size]"
            className="mt_m"
            language="html"
          >
            {`<select name="animals" id="animals" size="3">
  <option value="dog">개</option>
  <option value="cat">고양이</option>
  <option value="rabbit">토끼</option>
</select>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [disabled] <i className="attr_optional">Boolean - 선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;select disabled&gt;
            </span>
          </h3>
          <p className="mt_ms">
            <code>&lt;select&gt;</code> 요소를 비활성화하여 사용자가 옵션 항목을
            선택할 수 없도록 설정하는 속성으로, <code>disabled</code> 속성이
            적용되면 스타일도 비활성화된 상태로 변경됩니다.
          </p>
          <CodeBlock
            title="select 속성 [disabled]"
            className="mt_m"
            language="html"
          >
            {`<select name="drinks" id="drinks" disabled>
  <option value="coffee">커피</option>
  <option value="tea">차</option>
</select>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [autofocus] <i className="attr_optional">Boolean - 선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;select autofocus&gt;
            </span>
          </h3>
          <p className="mt_ms">
            페이지가 로드될 때 해당 요소에 자동으로 포커스를 받도록 설정하는
            속성으로,{" "}
            <mark>한 문서 내에서 하나의 요소에만 적용할 수 있습니다.</mark>
          </p>
          <CodeBlock
            title="select 속성 [autofocus]"
            className="mt_m"
            language="html"
          >
            {`<select name="color" id="color" autofocus>
  <option value="red">빨강</option>
  <option value="blue">파랑</option>
</select>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [required] <i className="attr_optional">Boolean - 선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;select required&gt;
            </span>
          </h3>
          <p className="mt_ms">
            사용자가 반드시 하나의 옵션을 선택하도록 강제합니다.
            <br />폼 제출 시 <code>required</code> 속성이 적용된{" "}
            <code>&lt;select&gt;</code> 요소에서 옵션이 선택되지 않은 경우,
            브라우저는 자동으로 유효성 검사를 수행합니다.
            <br />
            이때 사용자는 옵션을 선택해야 하며, 그렇지 않으면 브라우저가 경고
            메시지를 표시하여 선택을 유도합니다.
          </p>
          <CodeBlock
            title="select 속성 [required]"
            className="mt_m"
            language="html"
          >
            {`<select name="country" id="country" required>
  <option value="">-- 선택하세요 --</option>
  <option value="korea">대한민국</option>
  <option value="japan">일본</option>
</select>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [form] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;select form="form 요소의 id"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            <code>&lt;select&gt;</code> 요소의 <code>form</code> 속성에{" "}
            <code>&lt;form&gt;</code> 요소의 <code>id</code>와 같은 값을
            지정하여, <code>&lt;select&gt;</code> 요소가{" "}
            <code>&lt;form&gt;</code> 요소 내부에 없더라도{" "}
            <code>&lt;form&gt;</code>의 데이터로 제출되도록 설정할 수 있습니다.
          </p>
          <CodeBlock
            title="select 속성 [form]"
            className="mt_m"
            language="html"
          >
            {`<form id="userForm" action="submit.php">
  <button type="submit">전송</button>
</form>

<select name="job" id="job" form="userForm">
  <option value="developer">개발자</option>
  <option value="designer">디자이너</option>
</select>`}
          </CodeBlock>
        </article>
      </section>

      <section className="view_editor indent mt_xxl">
        <h2 className="ml_mn ve_tit">예제</h2>
        <article className="mt_l indent">
          <h3 className="ml_mn">기본 드롭다운 / 기본 선택값 설정</h3>
          <p className="dp_pc full_screen_code_info mt_ms">
            (Full screen) 버튼을 클릭하여 전체 화면으로 예제를 확인하세요.
          </p>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/09-forms/0905-select/9.5.select_element_1.html"
                className="min_height_400 mb_result_height_400"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="기본 드롭다운 / 기본 선택값 설정"
                minHeight="400px"
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">
            여러 개 선택할 수 있는 리스트 박스(multiple)
          </h3>
          <p className="dp_pc full_screen_code_info mt_ms">
            (Full screen) 버튼을 클릭하여 전체 화면으로 예제를 확인하세요.
          </p>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/09-forms/0905-select/9.5.select_element_2.html"
                className="min_height_370 mb_result_height_350"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="여러 개 선택할 수 있는 리스트 박스(multiple)"
                minHeight="370px"
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">옵션 그룹(optgroup)을 사용한 카테고리 분류</h3>
          <p className="dp_pc full_screen_code_info mt_ms">
            (Full screen) 버튼을 클릭하여 전체 화면으로 예제를 확인하세요.
          </p>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/09-forms/0905-select/9.5.select_element_3_1.html"
                className="min_height_680 mb_result_height_680"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="옵션 그룹(optgroup)을 사용한 카테고리 분류"
                minHeight="680px"
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">특정 옵션 그룹(optgroup) 비활성</h3>
          <p className="dp_pc full_screen_code_info mt_ms">
            (Full screen) 버튼을 클릭하여 전체 화면으로 예제를 확인하세요.
          </p>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/09-forms/0905-select/9.5.select_element_3_2.html"
                className="min_height_400 mb_result_height_370"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="특정 옵션 그룹(optgroup) 비활성"
                minHeight="400px"
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">CSS 스타일링 적용</h3>
          <p className="dp_pc full_screen_code_info mt_ms">
            (Full screen) 버튼을 클릭하여 전체 화면으로 예제를 확인하세요.
          </p>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/09-forms/0905-select/9.5.select_element_4.html"
                className="min_height_470 mb_result_height_470"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="CSS 스타일링 적용"
                minHeight="470px"
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">완전한 커스텀 드롭다운(Select 요소 대체)</h3>
          <p className="mt_ms">
            일반적인 <code>&lt;select&gt;</code> 요소는 브라우저에서 기본
            스타일이 적용되며 커스터마이징이 제한적입니다.
            <br />
            그래서 <code>&lt;div&gt;</code>, <code>&lt;ul&gt;</code>,{" "}
            <code>&lt;li&gt;</code> 같은 요소를 활용하여 사용자 정의 드롭다운을
            직접 구현하는 방식도 일반적으로 사용되고 있습니다.
            <br />
            아래는 <code>&lt;select&gt;</code> 요소를 숨기고, 사용자 정의
            스타일과 동작을 가진 드롭다운 예제입니다.
          </p>
          <p className="dp_pc full_screen_code_info mt_s">
            (Full screen) 버튼을 클릭하여 전체 화면으로 예제를 확인하세요.
          </p>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/09-forms/0905-select/9.5.select_element_5.html"
                className="min_height_530 mb_result_height_540"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="완전한 커스텀 드롭다운(Select 요소 대체)"
                minHeight="530px"
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
            <code>&lt;select&gt;</code> 요소는 브라우저별 스타일 차이가 큽니다.
            CSS를 활용해 디자인을 조정하는 것이 좋습니다.
          </li>
          <li>
            <code>multiple</code> 속성을 사용하면 여러 개의 값이 선택될 수
            있지만, 서버에서 이를 배열 형태로 처리해야 합니다.
            <br />
            예: <code>&lt;select name="hobbies[]" multiple&gt;</code> → 서버에서{" "}
            <code>hobbies</code> 배열로 수신됨.
          </li>
          <li>
            모바일 브라우저에서는 <code>&lt;select&gt;</code> 요소가 전체
            화면으로 확장되거나, 기본 네이티브 UI가 적용될 수 있습니다.
            <br />
            사용자 경험을 위해 커스텀 드롭다운 UI를 고려할 수도 있습니다.
          </li>
        </ul>
      </section>
      <aside className="browser_support mt_xxl" data-tit="select">
        <ul>
          <li className="ie">지원</li>
          <li className="edge">지원</li>
          <li className="chrome">지원</li>
          <li className="firefox">1.0</li>
          <li className="opera">지원</li>
          <li className="safari">지원</li>
        </ul>
      </aside>
      <figure className="img_figure mt_l">
        <img src={IMG.HTML + "/09_html_05.png"} alt="select 요소" />
        <figcaption>select 요소</figcaption>
      </figure>
    </>
  );
}

export default SelectElementPage;
