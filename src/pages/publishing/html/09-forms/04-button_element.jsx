import { Suspense, lazy } from "react";
import CodeBlock from "@/components/code/CodeBlock";
import { usePageMeta } from "@/components/common/PageMeta";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "button_element",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
  bottomEditor: true,
};

const PAGE_DATA = {
  title: "button element",
  description:
    "button 요소는 HTML 문서에서 사용자가 클릭하여 동작을 수행할 수 있도록 하는 버튼 인터페이스를 제공하는 태그로, type 속성에 따라 폼 제출(submit), 초기화(reset), 일반 동작(button) 중 하나로 설정할 수 있으며 내부에 텍스트, 이미지, 아이콘 등 다양한 콘텐츠를 포함할 수 있습니다. 이 페이지에서는 button 요소의 주요 역할 및 특징을 설명하고, button 요소의 용도와 구조적 위치에 따른 사용 예시를 소개합니다.",
  keyword: "Markup, HTML, tag, elements, button",
};

const UkEditorTarget = lazy(
  () => import("@/components/code/UkEditorTarget"),
);

function EditorFallback() {
  return <div className="uk_editor min_height_400" aria-hidden />;
}

function ButtonElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>&lt;button&gt;</code> 요소는 웹 페이지에서{" "}
          <b>
            사용자와의 상호작용을 위한 클릭 가능한 버튼을 정의하는 시맨틱 태그
          </b>
          로, 기본적으로 <b>폼 제출</b>(<code>type="submit"</code>),{" "}
          <b>초기화</b>(<code>type="reset"</code>), <b>일반 동작</b>(
          <code>type="button"</code>) 등{" "}
          <b>다양한 역할을 수행할 수 있습니다.</b>
          <br />
          내부에 텍스트, 아이콘, HTML 요소 등을 자유롭게 포함할 수 있으며,{" "}
          <code>type</code> 속성을 명시하지 않으면 기본값은 <code>submit</code>
          입니다. <code>&lt;input type="button"&gt;</code>보다 유연하게 콘텐츠를
          구성할 수 있고,{" "}
          <b>
            스크립트와 함께 사용자 인터페이스를 제어하거나 폼 동작을 실행하는 데
            자주 사용
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
            <strong>사용자 인터랙션 요소</strong>
            <p>
              버튼 클릭을 통해 폼을 제출하거나 JavaScript 이벤트를 실행할 수
              있습니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>폼과 함께 사용 가능</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;form&gt;</code> 요소 내부에서 사용되면 자동으로 폼과
                연결되어 동작합니다.
              </li>
              <li>
                <code>type="submit"</code>으로 설정하면 클릭 시 폼이 제출됩니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>컨텐츠 포함 가능</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;button&gt;</code> 요소 내부에는 텍스트, 이미지, 아이콘
                등 다양한 요소를 포함할 수 있습니다.
              </li>
              <li>
                버튼의 내용을 구성하기 위해 <code>&lt;span&gt;</code>,{" "}
                <code>&lt;strong&gt;</code>, <code>&lt;br&gt;</code> 등과 같은
                인라인 요소를 <code>&lt;button&gt;</code> 요소 내부에 포함할 수
                있습니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>기본 스타일이 적용됨</strong>
            <p>
              브라우저마다 화면에 표시되는 스타일이 다를 수 있으므로, 필요에
              따라 CSS로 스타일을 재정의하는 것이 좋습니다.
            </p>
          </li>
        </ol>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          CSS 기본 값
        </h2>
        <p className="mt_l">
          <code>&lt;button&gt;</code> 요소는 기본적으로 인라인 블록 레벨
          요소이며, 별도의 CSS를 지정하지 않아도 아래와 같은 기본값이
          적용됩니다.
        </p>
        <CodeBlock title="button element CSS" className="mt_m" language="css">
          {`button {
  display: inline-block;
  padding: 1px 6px;
  text-align: center;
  border: 2px outset ButtonFace;
  background-color: ButtonFace;
  box-sizing: border-box;
  cursor: default; /* 일부 브라우저는 point */
}`}
        </CodeBlock>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          기본 문법
        </h2>
        <CodeBlock
          title="button element syntax"
          className="mt_l"
          language="html"
        >
          {`<button type="button">클릭하세요</button>`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn">속성</h2>
        <article className="mt_l indent dp_pc">
          <h3 className="ml_mn t_blue">
            <code className="font-21-important t_blue weight-600">
              &lt;button&gt;
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
                  <code>type</code>
                </p>
                <p className="cell content">
                  버튼의 동작 지정 (<code>type="submit"</code>,{" "}
                  <code>type="reset"</code>, <code>type="button"</code>)
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code>disabled</code>
                </p>
                <p className="cell content">버튼을 비활성화 (클릭 불가)</p>
              </li>
              <li>
                <p className="cell value">
                  <code>name</code>
                </p>
                <p className="cell content">버튼의 이름 지정</p>
              </li>
              <li>
                <p className="cell value">
                  <code>value</code>
                </p>
                <p className="cell content">
                  버튼이 제출될 때 함께 전송되는 값
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code>form</code>
                </p>
                <p className="cell content">
                  버튼이 연결될 폼의 <code>id</code> 지정
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code>autofocus</code>
                </p>
                <p className="cell content">
                  페이지 로드 시 자동으로 버튼에 포커스 설정
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code>formaction</code>
                </p>
                <p className="cell content">
                  클릭 시 데이터를 보낼 URL 지정 (
                  <code className="t_darkblue">type="submit"</code> 타입에서만
                  사용)
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code>formenctype</code>
                </p>
                <p className="cell content">
                  데이터 인코딩 방식 지정 (
                  <code className="t_darkblue">type="submit"</code> 타입에서만
                  사용)
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code>formmethod</code>
                </p>
                <p className="cell content">
                  데이터 전송 방식 지정 (
                  <code className="t_darkblue">type="submit"</code> 타입에서만
                  사용)
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code>formnovalidate</code>
                </p>
                <p className="cell content">
                  브라우저 기본 유효성 검사 비활성화 (
                  <code className="t_darkblue">type="submit"</code> 타입에서만
                  사용)
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code>formtarget</code>
                </p>
                <p className="cell content">
                  전송 후 응답을 표시할 창 지정 (
                  <code className="t_darkblue">type="submit"</code> 타입에서만
                  사용)
                </p>
              </li>
            </ul>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [type] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;button type="값"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            <code>type</code> 속성은 <code>&lt;button&gt;</code> 요소가
            클릭되었을 때 수행할 기본 동작을 정의하는 속성입니다.
          </p>
          <dl className="dl_dot_lst mt_s">
            <dt>설정 가능한 값 :</dt>
            <dd>
              <code>submit</code>
              <i className="t_black weight-600">(기본값)</i> : 폼 데이터를
              서버로 전송
            </dd>
            <dd>
              <code>reset</code> : 폼을 초기 상태로 리셋
            </dd>
            <dd>
              <code>button</code> : 기본 동작 없음 (JavaScript로 동작 정의 필요)
            </dd>
          </dl>
          <CodeBlock
            title="button 속성 [type]"
            className="mt_m"
            language="html"
          >
            {`<form action="submit.php">
  <button type="submit">제출</button>
  <button type="reset">리셋</button>
  <button type="button" onclick="alert('버튼 클릭!')">클릭</button>
</form>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [disabled] <i className="attr_optional">Boolean - 선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;button disabled&gt;
            </span>
          </h3>
          <p className="mt_ms">
            버튼을 비활성화하여 사용자가 클릭할 수 없도록 설정하는 속성으로,
            해당 속성이 적용되면 스타일도 비활성화된 상태로 변경됩니다.
          </p>
          <CodeBlock
            title="button 속성 [disabled]"
            className="mt_m"
            language="html"
          >
            {`<button disabled>비활성화된 버튼</button>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [name] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;button name="값"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            버튼의 이름을 지정하여 폼 제출 시 서버로 함께 전송됩니다. 서버에서
            버튼의 이름을 기반으로 값을 구별할 때 사용됩니다.
          </p>
          <CodeBlock
            title="button 속성 [name]"
            className="mt_m"
            language="html"
          >
            {`<form action="submit.php">
  <button name="action" value="save">저장</button>
</form>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [value] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;button value="값"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            버튼이 폼과 함께 전송될 때 서버로 전달되는 값을 지정하는 속성으로,
            주로 <code>name</code> 속성과 함께 사용됩니다.
          </p>
          <CodeBlock
            title="button 속성 [value]"
            className="mt_m"
            language="html"
          >
            {`<form action="submit.php">
  <button name="action" value="delete">삭제</button>
</form>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [form] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;button form="form 요소의 id"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            <code>&lt;button&gt;</code> 요소의 <code>form</code> 속성에{" "}
            <code>&lt;form&gt;</code> 요소의 <code>id</code>와 같은 값을
            지정하여, 버튼이 <code>&lt;form&gt;</code> 요소 내부에 없더라도{" "}
            <b>외부에서 특정 폼을 조작</b>할 수 있습니다.
          </p>
          <CodeBlock
            title="button 속성 [form]"
            className="mt_m"
            language="html"
          >
            {`<form id="myForm" action="submit.php">
  <input type="text" name="username">
</form>

<button form="myForm">외부 버튼으로 제출</button>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [autofocus] <i className="attr_optional">Boolean - 선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;button autofocus&gt;
            </span>
          </h3>
          <p className="mt_ms">
            페이지가 로드될 때 해당 버튼이 자동으로 포커스를 받도록 설정하는
            속성으로,
            <mark>한 문서 내에서 하나의 요소에만 적용할 수 있습니다.</mark>
          </p>
          <CodeBlock
            title="button 속성 [autofocus]"
            className="mt_m"
            language="html"
          >
            {`<button autofocus>자동 포커스 버튼</button>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [formaction] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;button formaction="값"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            <b className="t_blue">
              <code className="t_blue">[type="submit"]</code>에서만 사용
              가능합니다.
            </b>
            <br />
            버튼이 클릭될 때 폼을 제출할 URL을 지정하는 속성으로,{" "}
            <code>type="submit"</code> 일 때만 동작하며{" "}
            <code>&lt;form&gt;</code> 요소의 <code>action</code> 속성은
            무시됩니다.
          </p>
          <CodeBlock
            title="button 속성 [formaction]"
            className="mt_m"
            language="html"
          >
            {`<form action="default.php">
  <button type="submit" formaction="submit.php">이 버튼만 submit.php로 전송</button>
</form>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [formenctype] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;button formenctype="값"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            <b className="t_blue">
              <code className="t_blue">[type="submit"]</code>에서만 사용
              가능합니다.
            </b>
            <br />폼 데이터를 서버로 전송할 때 사용할 인코딩 방식을 지정하는
            속성입니다.
          </p>
          <dl className="dl_dot_lst mt_s">
            <dt>설정 가능한 값 :</dt>
            <dd>
              <code>application/x-www-form-urlencoded</code> : 기본 폼 데이터
              인코딩 방식, <code>key=value</code> 형태로 전송.
            </dd>
            <dd>
              <code>multipart/form-data</code> : 파일 업로드 시 사용, 데이터가
              여러 부분으로 나뉘어 전송.
            </dd>
            <dd>
              <code>text/plain</code> : 텍스트 형식으로 전송, 인코딩 없이{" "}
              <code>key=value</code> 형태.
            </dd>
          </dl>
          <CodeBlock
            title="button 속성 [formenctype]"
            className="mt_m"
            language="html"
          >
            {`<form action="upload.php" method="post">
  <input type="file" name="file">
  <button type="submit" formenctype="multipart/form-data">업로드</button>
</form>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [formmethod] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;button formmethod="값"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            <b className="t_blue">
              <code className="t_blue">[type="submit"]</code>에서만 사용
              가능합니다.
            </b>
            <br />
            폼이 제출될 때 사용할 HTTP 메서드를 지정하는 속성으로,{" "}
            <code>&lt;form&gt;</code> 요소의 <code>method</code> 속성은
            무시됩니다.
          </p>
          <dl className="dl_dot_lst mt_s">
            <dt>설정 가능한 값 :</dt>
            <dd>
              <code>get</code> : URL에 데이터를 추가하여 전송
            </dd>
            <dd>
              <code>post</code> : 본문(body)에 데이터를 포함하여 전송
            </dd>
          </dl>
          <CodeBlock
            title="button 속성 [formmethod]"
            className="mt_m"
            language="html"
          >
            {`<form action="submit.php">
  <button type="submit" formmethod="post">POST로 전송</button>
</form>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [formnovalidate]{" "}
            <i className="attr_optional">Boolean - 선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;button formnovalidate&gt;
            </span>
          </h3>
          <p className="mt_ms">
            <b className="t_blue">
              <code className="t_blue">[type="submit"]</code>에서만 사용
              가능합니다.
            </b>
            <br />폼 제출 시 HTML5 폼 유효성 검사를 무시하도록 설정하는
            속성으로, <code>&lt;form&gt;</code> 요소의 <code>novalidate</code>{" "}
            속성은 무시됩니다.
          </p>
          <CodeBlock
            title="button 속성 [formnovalidate]"
            className="mt_m"
            language="html"
          >
            {`<form>
  <input type="email" required>
  <button type="submit" formnovalidate>유효성 검사 없이 전송</button>
</form>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [formtarget] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;button formtarget="값"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            <b className="t_blue">
              <code className="t_blue">[type="submit"]</code>에서만 사용
              가능합니다.
            </b>
            <br />
            폼이 제출된 후 응답을 표시할 창이나 프레임을 지정하는 속성입니다.
          </p>
          <dl className="dl_dot_lst mt_s">
            <dt>설정 가능한 값 :</dt>
            <dd>
              <code>_self</code>
              <i className="t_black">(기본값)</i> : 현재 창
            </dd>
            <dd>
              <code>_blank</code> : 새 창
            </dd>
            <dd>
              <code>_parent</code> : 부모 프레임 (없다면 <code>_self</code>{" "}
              적용)
            </dd>
            <dd>
              <code>_top</code> : 최상위 프레임 (없다면 <code>_self</code> 적용)
            </dd>
          </dl>
          <CodeBlock
            title="button 속성 [formtarget]"
            className="mt_m"
            language="html"
          >
            {`<form>
  <button type="submit" formtarget="_blank">새 창에서 열기</button>
</form>`}
          </CodeBlock>
        </article>
      </section>

      <section className="view_editor indent mt_xxl">
        <h2 className="ml_mn ve_tit">예제</h2>
        <article className="mt_l indent">
          <h3 className="ml_mn">
            일반 버튼(type="button") / 비활성 버튼(disabled)
          </h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/09-forms/0904-button/9.4.button_element_1.html"
                className="min_height_400 mb_result_height_280"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="일반 버튼(type=button) / 비활성 버튼(disabled)"
                minHeight="400px"
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">폼 제출 버튼 (type="submit")</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/09-forms/0904-button/9.4.button_element_2.html"
                className="min_height_320 mb_result_height_200"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="폼 제출 버튼 (type=submit)"
                minHeight="320px"
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">폼 초기화 버튼 (type="reset")</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/09-forms/0904-button/9.4.button_element_3.html"
                className="min_height_320 mb_result_height_200"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="폼 초기화 버튼 (type=reset)"
                minHeight="320px"
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">아이콘, 이미지를 포함한 버튼</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/09-forms/0904-button/9.4.button_element_4.html"
                className="min_height_450 mb_result_height_360"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="아이콘, 이미지를 포함한 버튼"
                minHeight="450px"
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">CSS 스타일링 적용</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/09-forms/0904-button/9.4.button_element_5.html"
                className="min_height_430 mb_result_height_440"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="CSS 스타일링 적용"
                minHeight="430px"
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">구조적인 버튼 예제</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/09-forms/0904-button/9.4.button_element_6.html"
                className="min_height_400 mb_result_height_320"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="구조적인 버튼 예제"
                minHeight="400px"
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
            <code>&lt;button&gt;</code> 요소는 기본적으로{" "}
            <code>type="submit"</code>을 가지므로, 폼 안에서 클릭 시 자동으로
            제출됩니다.
            <br />
            단순 클릭 이벤트를 원하면 <code>type="button"</code>을 명시적으로
            설정해야 합니다.
          </li>
          <li>
            브라우저마다 <code>&lt;button&gt;</code>의 기본 스타일이 다르므로,
            스타일을 직접 지정하는 것이 좋습니다.
          </li>
          <li>
            <code>disabled</code> 속성만으로는 보안이 보장되지 않습니다.
            사용자가 개발자 도구에서 <code>disabled</code> 속성을 제거할 수
            있으므로, 서버 측에서도 버튼 클릭에 대한 검증이 필요합니다.
          </li>
        </ul>
      </section>
      <aside className="browser_support mt_xxl" data-tit="button">
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
        <img src={IMG.HTML + "/09_html_04.png"} alt="button 요소" />
        <figcaption>button 요소</figcaption>
      </figure>
    </>
  );
}

export default ButtonElementPage;
