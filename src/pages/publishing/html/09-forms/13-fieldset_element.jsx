import { Suspense, lazy } from "react";
import CodeBlock from "@/components/code/CodeBlock";
import { usePageMeta } from "@/components/common/PageMeta";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "fieldset_element",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
  bottomEditor: true,
};

const PAGE_DATA = {
  title: "fieldset element",
  description:
    "fieldset 요소는 HTML 문서에서 관련된 폼 요소들을 논리적으로 그룹화할 때 사용하는 태그로, 그룹의 제목은 내부의 legend 요소를 통해 지정할 수 있으며 브라우저는 기본적으로 테두리와 간격을 적용해 시각적으로 구분된 영역을 형성합니다. 이 페이지에서는 fieldset 요소의 주요 역할 및 특징을 설명하고, fieldset 요소의 용도와 구조적 위치에 따른 사용 예시를 소개합니다.",
  keyword: "Markup, HTML, tag, elements, fieldset",
};

const UkEditorTarget = lazy(
  () => import("@/components/code/UkEditorTarget"),
);

function EditorFallback() {
  return <div className="uk_editor min_height_400" aria-hidden />;
}

function FieldsetElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>&lt;fieldset&gt;</code> 요소는 <code>&lt;form&gt;</code> 내에서{" "}
          <b>관련된 입력 요소들을 논리적으로 그룹화하기 위한 시맨틱 태그</b>로,{" "}
          <b>폼의 구조를 구분하고 시각적으로 묶어주는 역할</b>을 합니다.
          <br />
          주로 <code>&lt;legend&gt;</code> 요소와 함께 사용되어 그룹의 제목을
          제공하며, 사용자는 입력 필드를 <b>주제별로 쉽게 파악하고 구분</b>할 수
          있습니다.
          <br />
          기본적으로 브라우저는 <code>&lt;fieldset&gt;</code>에{" "}
          <b>테두리와 간격을 자동으로 적용해 시각적인 구획을 형성</b>하며,
          접근성 측면에서도 스크린 리더가 그룹의 의미를 인식할 수 있도록
          도와줍니다. 복잡한 폼을 명확하고 체계적으로 구성할 때 유용합니다.
        </p>
      </blockquote>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <ol className="mt_l ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>입력 필드를 논리적·시각적으로 그룹화</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;fieldset&gt;</code> 요소는 여러 개의 입력 필드(
                <code>&lt;input&gt;</code>, <code>&lt;select&gt;</code>,{" "}
                <code>&lt;textarea&gt;</code> 등)를 그룹화하여 시각적,
                논리적으로 구분할 수 있도록 합니다.
              </li>
              <li>
                예를 들어, 회원 가입 폼에서 개인정보와 주소 정보를 따로 그룹화할
                때 유용합니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>&lt;legend&gt;와 함께 사용 가능</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;legend&gt;</code> 요소를 사용하면 필드 그룹의 제목을
                지정할 수 있습니다.
              </li>
              <li>
                사용자가 어떤 정보를 입력해야 하는지 직관적으로 이해할 수 있도록
                도와줍니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>접근성과 시맨틱 향상</strong>
            <p>
              스크린 리더는 <code>&lt;fieldset&gt;</code>과{" "}
              <code>&lt;legend&gt;</code>를 함께 사용해 사용자에게 그룹의 의미를
              더 잘 전달합니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>disabled 속성으로 그룹 전체 비활성화 가능</strong>
            <p>
              <code>&lt;fieldset&gt;</code> 요소에 <code>disabled</code> 속성을
              사용하면 내부의 모든 폼 요소가 자동으로 비활성화됩니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>CSS로 테두리 및 스타일 조정 가능</strong>
            <ul className="dot_lst">
              <li>
                기본적으로 테두리(<code>border</code>)가 적용되어 있으며,{" "}
                <code>&lt;legend&gt;</code> 요소는 기본적으로 필드셋 내부 상단에
                위치합니다.
              </li>
              <li>CSS로 기본 디자인을 변경할 수 있습니다.</li>
            </ul>
          </li>
        </ol>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          CSS 기본 값
        </h2>
        <p className="mt_l">
          <code>&lt;fieldset&gt;</code> 요소는 기본적으로 볼록 레벨 요소이며,
          별도의 CSS를 지정하지 않아도 아래와 같은 기본값이 적용됩니다.
        </p>
        <CodeBlock title="fieldset element CSS" className="mt_m" language="css">
          {`fieldset {
  display: block;
  margin: 0 2px;
  padding: 0.35em 0.625em;
  border: 2px groove;
}`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          기본 문법
        </h2>
        <CodeBlock
          title="fieldset element syntax"
          className="mt_l"
          language="html"
        >
          {`<fieldset>
  <legend>회원 정보</legend>
  <!-- form 요소(input, textarea, select, button 등) -->
</fieldset>`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn">속성</h2>
        <article className="mt_l indent dp_pc">
          <h3 className="ml_mn t_blue">
            <code className="font-21-important t_blue weight-600">
              &lt;fieldset&gt;
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
                  <code>disabled</code>
                </p>
                <p className="cell content">
                  필드셋 내 전체 입력 요소들을 비활성화
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code>form</code>
                </p>
                <p className="cell content">
                  외부의 <code>&lt;form&gt;</code> 요소와 연결
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code>name</code>
                </p>
                <p className="cell content">
                  필드셋의 이름 (서버로 전송되진 않음)
                </p>
              </li>
            </ul>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [disabled] <i className="attr_optional">Boolean - 선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;fieldset disabled&gt;
            </span>
          </h3>
          <p className="mt_ms">
            해당 <code>&lt;fieldset&gt;</code> 내의 모든 폼 요소를 일괄
            비활성화합니다. 폼 제출 시에도 비활성화된 요소들은 전송되지
            않습니다.
          </p>
          <CodeBlock
            title="fieldset 속성 [disabled]"
            className="mt_m"
            language="html"
          >{`<fieldset disabled>
  <legend>로그인 정보</legend>
  <!-- form 요소(input, textarea, select, button 등) -->
</fieldset>`}</CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [form] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;fieldset form="form 요소의 id"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            <code>&lt;fieldset&gt;</code> 요소의 <code>form</code> 속성에{" "}
            <code>&lt;form&gt;</code> 요소의 id와 같은 값을 지정하여,{" "}
            <code>&lt;fieldset&gt;</code> 요소가 <code>&lt;form&gt;</code> 요소
            내부에 없더라도 <code>&lt;form&gt;</code>의 데이터로 제출되도록
            설정할 수 있습니다.
          </p>
          <CodeBlock
            title="fieldset 속성 [form]"
            className="mt_m"
            language="html"
          >{`<form id="userForm" action="/submit"></form>

<fieldset form="userForm">
  <legend>추가 정보</legend>
  <!-- form 요소(input, textarea, select, button 등) -->
</fieldset>`}</CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [name] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;fieldset name="값"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            <code>&lt;fieldset&gt;</code> 요소에 이름을 지정합니다. 폼
            데이터에는 전송되지 않지만, 스크립트나 스타일에서 식별용으로 사용할
            수 있습니다.
          </p>
          <CodeBlock
            title="fieldset 속성 [name]"
            className="mt_m"
            language="html"
          >{`<fieldset name="address-group">
  <legend>주소</legend>
  <!-- form 요소(input, textarea, select, button 등) -->
</fieldset>`}</CodeBlock>
        </article>
      </section>

      <section className="view_editor indent mt_xxl">
        <h2 className="ml_mn ve_tit">예제</h2>
        <article className="mt_l indent">
          <h3 className="ml_mn">기본적인 필드 그룹화</h3>
          <p className="dp_pc full_screen_code_info mt_ms">
            (Full screen) 버튼을 클릭하여 전체 화면으로 예제를 확인하세요.
          </p>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/09-forms/0913-fieldset/9.13.fieldset_element_1.html"
                className="min_height_400 mb_result_height_300"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="기본적인 필드 그룹화"
                minHeight="400px"
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">여러 개의 그룹화된 필드 사용</h3>
          <p className="dp_pc full_screen_code_info mt_ms">
            (Full screen) 버튼을 클릭하여 전체 화면으로 예제를 확인하세요.
          </p>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/09-forms/0913-fieldset/9.13.fieldset_element_2.html"
                className="min_height_600 mb_result_height_600"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="여러 개의 그룹화된 필드 사용"
                minHeight="600px"
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">특정 그룹 비활성화</h3>
          <p className="dp_pc full_screen_code_info mt_ms">
            (Full screen) 버튼을 클릭하여 전체 화면으로 예제를 확인하세요.
          </p>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/09-forms/0913-fieldset/9.13.fieldset_element_3.html"
                className="min_height_600 mb_result_height_600"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="특정 그룹 비활성화"
                minHeight="600px"
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">CSS 스타일링</h3>
          <p className="dp_pc full_screen_code_info mt_ms">
            (Full screen) 버튼을 클릭하여 전체 화면으로 예제를 확인하세요.
          </p>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/09-forms/0913-fieldset/9.13.fieldset_element_4.html"
                className="min_height_700 mb_result_height_700"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="CSS 스타일링"
                minHeight="700px"
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
            <code>&lt;fieldset&gt;</code> 내부에는 <code>&lt;legend&gt;</code>를
            사용하는 것이 좋습니다.
            <br />
            <code>&lt;legend&gt;</code> 요소를 사용하면 그룹의 의미를 명확하게
            전달할 수 있습니다. 스크린 리더 사용자를 위한 접근성을 높이는 역할도
            합니다.
          </li>
          <li>
            <code>&lt;legend&gt;</code>는 <code>&lt;fieldset&gt;</code> 내 가장
            처음에 위치해야 합니다.
            <br />
            <code>&lt;legend&gt;</code>가 <code>&lt;fieldset&gt;</code>의 첫
            번째 자식 요소가 아닐 경우, 브라우저나 스크린 리더에서 올바르게
            인식되지 않을 수 있습니다.
          </li>
          <li>
            중첩 사용 가능하지만 주의 필요합니다.
            <br />
            <code>&lt;fieldset&gt;</code> 내부에 또 다른{" "}
            <code>&lt;fieldset&gt;</code>을 사용할 수 있지만, 너무 많은 중첩은
            가독성을 저하시킬 수 있습니다.
          </li>
          <li>
            <code>&lt;fieldset&gt;</code>과 <code>&lt;legend&gt;</code>는
            브라우저마다 스타일이 다를 수 있으며, 필요에 따라 CSS를 활용하여
            디자인을 조정해야 할 수 있습니다.
          </li>
          <li>
            폼 제출 시 <code>&lt;fieldset&gt;</code> 자체는 서버로 전송되지
            않습니다.
            <br />
            <code>&lt;fieldset&gt;</code>은 시맨틱 구조를 위한 요소일 뿐, 실제
            데이터 전송은 내부의 <code>&lt;input&gt;</code>,{" "}
            <code>&lt;select&gt;</code> 등의 폼 컨트롤 요소를 통해 이루어집니다.
          </li>
          <li>
            모든 <code>&lt;fieldset&gt;</code>이 반드시{" "}
            <code>&lt;form&gt;</code> 내부에 있어야 하는 것은 아닙니다.{" "}
            <code>&lt;form&gt;</code> 태그 외부에서도 사용할 수 있지만, 주로 폼
            내부에서 사용됩니다.
          </li>
        </ul>
      </section>
      <aside className="browser_support mt_xxl" data-tit="fieldset">
        <ul>
          <li className="ie">지원</li>
          <li className="edge">지원</li>
          <li className="chrome">지원</li>
          <li className="firefox">지원</li>
          <li className="opera">12.0</li>
          <li className="safari">6.0</li>
        </ul>
      </aside>
      <figure className="img_figure mt_l">
        <img src={IMG.HTML + "/09_html_13.png"} alt="fieldset 요소" />
        <figcaption>fieldset 요소</figcaption>
      </figure>
    </>
  );
}

export default FieldsetElementPage;
