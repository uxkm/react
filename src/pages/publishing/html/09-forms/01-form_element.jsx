import { Suspense, lazy } from "react";
import { usePageMeta } from "@/components/common/PageMeta";
import CodeBlock from "@/components/code/CodeBlock";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "form_element",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
  bottomEditor: true,
};

const PAGE_DATA = {
  title: "form element",
  description:
    "form 요소는 HTML 문서에서 사용자로부터 입력을 받아 서버로 전송할 수 있도록 하는 입력 양식의 컨테이너 역할을 하는 태그로, 내부에 input, textarea, select, button 등 다양한 폼 관련 요소들을 포함하며 action과 method 속성을 통해 데이터 전송 경로와 방식을 지정합니다. 이 페이지에서는 form 요소의 주요 역할 및 특징을 설명하고, form 요소의 용도와 구조적 위치에 따른 사용 예시를 소개합니다.",
  keyword: "Markup, HTML, tag, elements, form",
};

const UkEditorTarget = lazy(
  () => import("@/components/code/UkEditorTarget"),
);

function EditorFallback() {
  return <div className="uk_editor min_height_400" aria-hidden />;
}

function FormElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>&lt;form&gt;</code> 요소는{" "}
          <b>
            사용자로부터 입력을 받아 서버로 전송할 수 있도록 하는 입력 폼의
            컨테이너 역할을 하는 시맨틱 태그
          </b>
          입니다.
          <br />
          내부에 <code>&lt;input&gt;</code>, <code>&lt;textarea&gt;</code>,{" "}
          <code>&lt;select&gt;</code>, <code>&lt;button&gt;</code> 등 다양한 폼
          요소들을 포함하며, <code>action</code>, <code>method</code> 등의
          속성을 통해 <strong>데이터를 보낼 위치와 방식(GET 또는 POST)</strong>
          을 지정할 수 있습니다. 제출 버튼을 누르면 폼에 포함된 입력값이 서버로
          전송되며,{" "}
          <b>클라이언트-서버 간의 데이터 상호작용을 구현하는 핵심 구조</b>
          입니다.
          <br />
          또한 <code>name</code>, <code>id</code>, <code>autocomplete</code>,{" "}
          <code>novalidate</code> 등의 속성을 활용해 폼의 동작과 접근성을
          세밀하게 제어할 수 있습니다.
        </p>
      </blockquote>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <ol className="mt_l ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>사용자 입력 수집 및 서버 전송</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;form&gt;</code> 요소는 웹 폼을 정의하고, 그 안에
                포함된 입력 필드를 통해 사용자가 입력한 데이터를 서버로
                전송합니다.
              </li>
              <li>
                이름, 이메일, 비밀번호, 파일 업로드 등 다양한 데이터를 서버로
                전송할 수 있습니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>다양한 입력 요소와 함께 사용</strong>
            <p>
              <code>&lt;form&gt;</code> 내부에는 여러 가지 입력 요소들(
              <code>&lt;input&gt;</code>, <code>&lt;textarea&gt;</code>,{" "}
              <code>&lt;select&gt;</code>, <code>&lt;button&gt;</code>)을 포함할
              수 있으며, 이들을 통해 다양한 형태의 사용자 데이터를 받을 수
              있습니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>action과 method 속성으로 폼 동작을 설정</strong>
            <ul className="dot_lst">
              <li>
                <code>action</code> 속성 : 폼 데이터를 전송할 URL을 지정
              </li>
              <li>
                <code>method</code> 속성 : 데이터를 전송하는 HTTP 방식을 지정
                (주로 GET 또는 POST 사용)
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>name 속성을 사용하여 폼을 식별</strong>
            <p>
              폼에 <code>name</code> 속성을 지정하면 JavaScript에서 해당 폼을
              참조하기 쉽습니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>&lt;fieldset&gt; 및 &lt;legend&gt;와 함께 사용 가능</strong>
            <p>
              입력 그룹을 묶어 가독성을 높이고, 스크린 리더 접근성을
              향상시킵니다.
            </p>
          </li>
        </ol>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          CSS 기본 값
        </h2>
        <p className="mt_l">
          <code>&lt;form&gt;</code> 요소는 기본적으로 블록 레벨 요소이며, 별도의
          CSS를 지정하지 않아도 아래와 같은 기본값이 적용됩니다.
        </p>
        <CodeBlock title="form element CSS" className="mt_m" language="css">
          {`form {
  display: block;
  width: auto;
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
}`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          기본 문법
        </h2>
        <CodeBlock title="form element syntax" className="mt_l" language="html">
          {`<form action="/submit" method="post">
  <!-- <input>, <textarea>, <select>, <button> 등의 입력 요소 -->
</form>`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn">속성</h2>
        <article className="mt_l indent dp_pc">
          <h3 className="ml_mn t_blue">
            <code className="font-21-important t_blue weight-600">
              &lt;form&gt;
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
                  <code>action</code>
                </p>
                <p className="cell content">데이터를 전송할 URL을 지정</p>
              </li>
              <li>
                <p className="cell value">
                  <code>method</code>
                </p>
                <p className="cell content">
                  전송 방식 지정 (<code>GET</code>, <code>POST</code>)
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code>enctype</code>
                </p>
                <p className="cell content">전송할 데이터의 인코딩 방식 지정</p>
              </li>
              <li>
                <p className="cell value">
                  <code>target</code>
                </p>
                <p className="cell content">
                  응답을 표시할 창을 지정 (<code>_self</code>,{" "}
                  <code>_blank</code> 등)
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code>autocomplete</code>
                </p>
                <p className="cell content">
                  자동 완성 활성화 여부 (<code>on</code>, <code>off</code>)
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code>novalidate</code>
                </p>
                <p className="cell content">
                  브라우저 기본 유효성 검사 비활성화
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code>name</code>
                </p>
                <p className="cell content">양식의 이름을 지정</p>
              </li>
              <li>
                <p className="cell value">
                  <code>accept-charset</code>
                </p>
                <p className="cell content">사용할 문자 인코딩 지정</p>
              </li>
            </ul>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [action] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;form action="URL"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            데이터를 전송할 서버의 URL을 지정합니다. 값이 없으면 현재 페이지로
            전송됩니다.
            <br />
            HTML5에서는 <code>&lt;form&gt;</code> 요소에 action 속성을 반드시
            명시하지 않아도 되며, 명시하지 않으면 현재 페이지(URL)로 데이터가
            전송됩니다.
          </p>
          <CodeBlock
            title="form 속성 [action]"
            className="mt_m"
            language="html"
          >
            {`<form action="submit.php">
  <!-- <input>, <textarea>, <select>, <button> 등의 입력 요소 -->
</form>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [method] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;form method="값"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            폼 데이터(form data)를 서버에 전송하는 방식을 지정합니다.
          </p>
          <dl className="dl_dot_lst mt_s">
            <dt>설정 가능한 값 :</dt>
            <dd>
              <code>GET</code>
              <i className="t_black">(기본값)</i> :
              <br />
              URL에 폼 데이터를 추가하여 서버로 전송하는 방식입니다. 이 요청은
              브라우저에 의해 캐시될 수 있고, 쿼리 문자열로 데이터를 전송하므로
              길이에 제한이 있습니다.
              <br />
              또한,{" "}
              <mark>
                URL에 데이터가 노출되어 보안상 취약할 수 있으므로 중요한
                데이터는 POST 방식을 사용하는 것이 좋습니다.
              </mark>
            </dd>
            <dd className="mt_sm">
              <code>POST</code> :
              <br />
              폼 데이터를 요청 본문에 포함시켜 서버로 전달하는 방식입니다. 이
              방식의 요청은 브라우저에 의해 캐시되지 않고, 브라우저 히스토리에도
              남지 않습니다.
              <br />
              또한,{" "}
              <mark>
                데이터는 쿼리 문자열과 별도로 전송되며, 길이에 제한이 없고, GET
                방식보다 보안성이 더 높습니다.
              </mark>
            </dd>
          </dl>
          <CodeBlock
            title="form 속성 [method]"
            className="mt_m"
            language="html"
          >
            {`<form action="submit.php" method="post">
  <!-- <input>, <textarea>, <select>, <button> 등의 입력 요소 -->
</form>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [enctype] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;form enctype="값"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            <code>&lt;form&gt;</code> 요소의 <code>enctype</code> 속성은 폼
            데이터가 서버로 전송될 때의 인코딩 방식을 지정합니다.
            <br />이 속성은 <code>method="post"</code>인 경우에만 적용되며,{" "}
            <code>GET</code> 방식에서는 사용되지 않습니다.
          </p>
          <dl className="dl_dot_lst mt_s">
            <dt>설정 가능한 값 :</dt>
            <dd>
              <code>application/x-www-form-urlencoded</code>
              <i className="t_black">(기본값)</i> :
              <br />폼 데이터가 <code>key=value</code> 형식으로 인코딩되어
              서버로 전송되는 방식입니다.
              <br />
              공백은 <code>+</code> 또는 <code>%20</code>으로 변환되며, 특수
              문자는 URL 인코딩 방식(퍼센트 인코딩)을 통해 변환됩니다.
            </dd>
            <dd className="mt_sm">
              <code>multipart/form-data</code> :
              <br />
              폼 데이터를 여러 부분(파트)로 나누어 전송하는 방식으로, 파일
              업로드와 같은 바이너리 데이터 전송에 적합합니다.
              <br />
              각 부분은 개별적으로 인코딩되며, 일반 텍스트 데이터뿐만 아니라
              파일, 이미지 등의 바이너리 데이터도 포함할 수 있습니다.
              <br />이 방식은 <code>&lt;form&gt;</code> 요소에서{" "}
              <code>method="post"</code>와 함께 사용됩니다.
            </dd>
            <dd className="mt_sm">
              <code>text/plain</code> :
              <br />
              폼 데이터를 일반 텍스트 형식으로 전송하는 방식입니다.
              <br />
              공백은 <code>+</code>로 변환되지만, 기타 문자들은 인코딩되지 않고
              그대로 전송됩니다. URL 인코딩이 적용되지 않으므로, 특수 문자
              처리에 주의해야 합니다.
            </dd>
          </dl>
          <CodeBlock
            title="form 속성 [enctype]"
            className="mt_m"
            language="html"
          >
            {`<form action="upload.php" method="post" enctype="multipart/form-data">
  <!-- <input>, <textarea>, <select>, <button> 등의 입력 요소 -->
</form>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [target] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;form target="값"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            폼 데이터를 서버로 전송한 후, 응답이 표시될 위치를 지정합니다.
            <br />
            설정 가능한 값 중 <code>_parent</code>, <code>_top</code> 등은 주로{" "}
            <code>&lt;iframe&gt;</code>과 함께 사용됩니다.
          </p>
          <dl className="dl_dot_lst mt_s">
            <dt>설정 가능한 값 :</dt>
            <dd>
              <code>_self</code>
              <i className="t_black">(기본값/생략 가능)</i> : 현재 창에서 열기
            </dd>
            <dd>
              <code>_blank</code> : 새 창(tab)에서 열기
            </dd>
            <dd>
              <code>_parent</code> : 부모 프레임에서 열기(부모가 없을 경우{" "}
              <code>_self</code>와 동일)
            </dd>
            <dd>
              <code>_top</code> : 최상위 프레임에서 열기(부모가 없을 경우{" "}
              <code>_self</code>와 동일)
            </dd>
          </dl>
          <CodeBlock
            title="form 속성 [target]"
            className="mt_m"
            language="html"
          >
            {`<form action="submit.php" target="_blank">
  <!-- <input>, <textarea>, <select>, <button> 등의 입력 요소 -->
</form>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [autocomplete] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;form autocomplete="값"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            <code>&lt;form&gt;</code> 요소의 autocomplete 속성은 브라우저의 자동
            완성 기능을 활성화할지 여부를 지정합니다.
            <br />
            값을 <code>on</code>으로 설정하면, 브라우저는 사용자가 이전에 입력한
            값을 기반으로 자동 완성 옵션을 제공합니다. 이 속성은{" "}
            <code>&lt;form&gt;</code> 요소뿐만 아니라 개별{" "}
            <code>&lt;input&gt;</code> 요소에서도 설정할 수 있으며, HTML5에서
            추가되었습니다.
          </p>
          <dl className="dl_dot_lst mt_s">
            <dt>설정 가능한 값 :</dt>
            <dd>
              <code>on</code>
              <i className="t_black">(기본값)</i> : 자동 완성 활성화
            </dd>
            <dd>
              <code>off</code> : 자동 완성 비활성화
            </dd>
          </dl>
          <CodeBlock
            title="form 속성 [autocomplete]"
            className="mt_m"
            language="html"
          >
            {`<form autocomplete="off">
  <!-- <input>, <textarea>, <select>, <button> 등의 입력 요소 -->
</form>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [novalidate] <i className="attr_optional">Boolean - 선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;form novalidate&gt;
            </span>
          </h3>
          <p className="mt_ms">
            HTML5에서 제공하는 폼 유효성 검사를 비활성화하여, 데이터가 검증 없이
            서버로 전송되도록 합니다.
          </p>
          <CodeBlock
            title="form 속성 [novalidate]"
            className="mt_m"
            language="html"
          >
            {`<form novalidate>
  <!-- <input>, <textarea>, <select>, <button> 등의 입력 요소 -->
</form>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [name] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;form name="값"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            해당 폼의 이름을 지정합니다.
            <br />이 속성은 서버로 제출된 폼 데이터를 참조하거나
            자바스크립트에서 폼을 참조할 때 사용됩니다. 그러나 현재는{" "}
            <code>name</code> 속성보다 <code>id</code> 속성을 사용하여 요소를
            참조하는 것이 더 일반적입니다.
          </p>
          <CodeBlock title="form 속성 [name]" className="mt_m" language="html">
            {`<form name="userForm">
  <input type="text" name="username">
  <button type="submit">전송</button>
</form>

<script>
  document.userForm.onsubmit = function() {
    alert("폼이 제출되었습니다.");
  };
</script>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [accept-charset] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;form accept-charset="값"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            폼 데이터(form data)를 서버로 전송할 때 사용되는 문자
            인코딩(character encoding) 방식을 명시합니다.
            <br />이 속성을 사용하면, 서버에서 폼 데이터를 올바르게 해석할 수
            있도록 할 수 있습니다. 여러 개의 문자 인코딩 방식을 공백
            문자(space)로 구분하여 지정할 수 있습니다.
          </p>
          <p className="mt_sm">
            기본적으로 <code>accept-charset</code> 속성은 설정되어 있지 않으며,
            만약 속성이 지정되지 않으면 폼은 HTML 문서의 기본 문자 인코딩을
            사용합니다.
            <br />
            HTML 4.01에서는 공백(space) 또는 콤마(<code>,</code>)를 구분자로
            사용할 수 있었으나, HTML5에서는 공백 문자(space)만을 사용해야
            합니다.
          </p>
          <dl className="dl_dot_lst mt_s">
            <dt>설정 가능한 값 :</dt>
            <dd>
              <code>UTF-8</code> : 전 세계의 문자 집합을 포괄하는 Unicode 기반의
              문자 인코딩 방식입니다. 대부분의 현대 웹사이트에서 사용됩니다.
            </dd>
            <dd>
              <code>EUC-KR</code> : 한국어 문자 인코딩 방식입니다.
            </dd>
            <dd>
              <code>Shift_JIS</code> : 일본어 문자 인코딩 방식입니다.
            </dd>
            <dd>
              <code>Big5</code> : 전통적인 중국어 문자 인코딩 방식입니다.
            </dd>
            <dd>
              <code>ISO-8859-1</code> : 라틴 알파벳 문자 인코딩 방식으로, 유럽
              언어의 대부분을 지원합니다.
            </dd>
            <dd>
              <code>Windows-1252</code> : Windows에서 사용되는 문자 인코딩
              방식으로, ISO-8859-1의 확장판입니다.
            </dd>
          </dl>
          <CodeBlock
            title="form 속성 [accept-charset]"
            className="mt_m"
            language="html"
          >
            {`<form accept-charset="UTF-8">
  <!-- <input>, <textarea>, <select>, <button> 등의 입력 요소 -->
</form>`}
          </CodeBlock>
        </article>
      </section>

      <section className="view_editor indent mt_xxl">
        <h2 className="ml_mn ve_tit">예제</h2>

        <article className="mt_l indent">
          <h3 className="ml_mn">기본적인 사용자 정보 제출 폼</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/09-forms/0901-form/9.1.form_element_1.html"
                className="min_height_400 mb_result_height_300"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="기본적인 사용자 정보 제출 폼"
                minHeight="400px"
              />
            </Suspense>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">파일 업로드 폼</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/09-forms/0901-form/9.1.form_element_2.html"
                className="min_height_400 mb_result_height_300"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="파일 업로드 폼"
                minHeight="400px"
              />
            </Suspense>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">JavaScript로 유효성 검사</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/09-forms/0901-form/9.1.form_element_3.html"
                className="min_height_400 mb_result_height_300"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="JavaScript로 유효성 검사"
                minHeight="400px"
              />
            </Suspense>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <code className="font-21-important weight-600">
              &lt;fieldset&gt;
            </code>{" "}
            및{" "}
            <code className="font-21-important weight-600">&lt;legend&gt;</code>
            를 사용한 그룹화
          </h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/09-forms/0901-form/9.1.form_element_4.html"
                className="min_height_700 mb_result_height_700"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="fieldset 및 legend를 사용한 그룹화"
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
            <code>action</code> 속성을 사용할 경우 정확한 URL을 지정해야 하며,
            그렇지 않으면 데이터가 잘못 전송될 수 있습니다.
          </li>
          <li>
            <code>method</code> 속성의 <code>GET</code> 방식은 URL에 데이터가
            노출되므로 보안상 민감한 정보는 <code>POST</code> 방식으로 전송하는
            것이 좋습니다.
          </li>
          <li>
            파일 업로드 시 반드시 <code>enctype="multipart/form-data"</code>를
            지정해야 합니다.
          </li>
          <li>
            <code>novalidate</code> 사용 시, HTML5의 기본 유효성 검사를 사용하지
            않으므로, JavaScript로 별도의 검사가 필요합니다.
          </li>
        </ul>
      </section>
      <aside className="browser_support mt_xxl" data-tit="form">
        <ul>
          <li className="ie">지원</li>
          <li className="edge">지원</li>
          <li className="chrome">지원</li>
          <li className="firefox">지원</li>
          <li className="opera">지원</li>
          <li className="safari">지원</li>
        </ul>
      </aside>
      <figure className="img_figure mt_l">
        <img src={IMG.HTML + "/09_html_01.png"} alt="form 요소" />
        <figcaption>form 요소</figcaption>
      </figure>
    </>
  );
}

export default FormElementPage;
