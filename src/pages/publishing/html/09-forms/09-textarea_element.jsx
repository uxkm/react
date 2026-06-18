import { Suspense, lazy } from "react";
import CodeBlock from "@/components/code/CodeBlock";
import { usePageMeta } from "@/components/common/PageMeta";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "textarea_element",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
  bottomEditor: true,
};

const PAGE_DATA = {
  title: "textarea element",
  description:
    "textarea 요소는 HTML 문서에서 여러 줄의 텍스트를 입력할 수 있도록 하는 입력 필드 태그로, 단일 줄 입력을 위한 input 요소와 달리 줄바꿈이 가능하며 rows, cols 속성 또는 CSS를 통해 크기를 조절할 수 있습니다. 이 페이지에서는 textarea 요소의 주요 역할 및 특징을 설명하고, textarea 요소의 용도와 구조적 위치에 따른 사용 예시를 소개합니다.",
  keyword: "Markup, HTML, tag, elements, textarea",
};

const UkEditorTarget = lazy(
  () => import("@/components/code/UkEditorTarget"),
);

function EditorFallback() {
  return <div className="uk_editor min_height_400" aria-hidden />;
}

function TextareaElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>&lt;textarea&gt;</code> 요소는{" "}
          <b>사용자가 여러 줄의 텍스트를 입력할 수 있도록 하는 시맨틱 태그</b>
          로, 단일 줄 입력에 사용하는 <code>&lt;input type="text"&gt;</code>와
          달리 <b>길고 자유로운 텍스트 입력이 필요한 경우에 사용</b>됩니다.
          <br />
          기본적으로 줄바꿈과 스크롤이 가능한 입력 필드가 생성되며,{" "}
          <code>rows</code>, <code>cols</code>, <code>placeholder</code>,{" "}
          <code>maxlength</code>, <code>readonly</code>, <code>disabled</code>{" "}
          등의 속성으로 크기와 동작을 제어할 수 있습니다. 사용자가 입력한
          텍스트는 폼 전송 시 서버로 전달됩니다.
        </p>
      </blockquote>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <ol className="mt_l ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>여러 줄 입력 지원</strong>
            <p>
              <code>&lt;input&gt;</code>과 달리 줄바꿈이 가능하며, 긴 텍스트
              입력에 적합합니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>기본적으로 크기 조정 가능</strong>
            <ul className="dot_lst">
              <li>
                대부분의 브라우저에서 사용자가 마우스를 이용해 크기를 조절할 수
                있습니다.
              </li>
              <li>
                CSS의 <code>resize</code> 속성을 사용하여 크기 조정을 제한할
                수도 있습니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>행(rows)과 열(cols) 속성으로 크기 지정 가능</strong>
            <ul className="dot_lst">
              <li>
                입력 필드의 가로(문자 수)와 세로(줄)의 크기 지정이 가능합니다.
              </li>
              <li>
                하지만, CSS의 <code>width</code>와 <code>height</code> 속성을
                사용하는 것이 권장됩니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>자동 줄바꿈 설정 가능 (wrap 속성)</strong>
            <p>
              입력 시 줄이 넘칠 경우 자동 줄바꿈 처리 방식 지정이 가능합니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>HTML 태그를 그대로 입력할 수 있음</strong>
            <p>
              <code>&lt;textarea&gt;</code>는 일반 텍스트 입력 필드이므로,
              입력된 HTML 태그가 브라우저에서 해석되지 않고 그대로 표시됩니다.
            </p>
          </li>
        </ol>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          CSS 기본 값
        </h2>
        <p className="mt_l">
          <code>&lt;textarea&gt;</code> 요소는 기본적으로 인라인 블록 레벨
          요소이며, 별도의 CSS를 지정하지 않아도 아래와 같은 기본값이
          적용됩니다.
        </p>
        <CodeBlock title="textarea element CSS" className="mt_m" language="css">
          {`textarea {
  display: inline-block;
  padding: 2px;
  font-family: monospace;
  overflow-wrap: break-word;
  white-space: pre-wrap;
  background-color: field;
  border: 1px solid rgb(118, 118, 118);
}`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          기본 문법
        </h2>
        <CodeBlock
          title="textarea element syntax"
          className="mt_l"
          language="html"
        >
          {`<textarea></textarea>`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn">속성</h2>
        <article className="mt_l indent dp_pc">
          <h3 className="ml_mn t_blue">
            <code className="font-21-important t_blue weight-600">
              &lt;textarea&gt;
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
                  서버로 전송할 때 사용될 이름 (key)
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code>rows</code>
                </p>
                <p className="cell content">표시할 줄 수 (세로 크기)</p>
              </li>
              <li>
                <p className="cell value">
                  <code>cols</code>
                </p>
                <p className="cell content">표시할 문자 수 (가로 크기)</p>
              </li>
              <li>
                <p className="cell value">
                  <code>placeholder</code>
                </p>
                <p className="cell content">입력 전 표시되는 안내 텍스트</p>
              </li>
              <li>
                <p className="cell value">
                  <code>maxlength</code>
                </p>
                <p className="cell content">입력 가능한 최대 문자 수</p>
              </li>
              <li>
                <p className="cell value">
                  <code>minlength</code>
                </p>
                <p className="cell content">입력해야 하는 최소 문자 수</p>
              </li>
              <li>
                <p className="cell value">
                  <code>readonly</code>
                </p>
                <p className="cell content">읽기 전용 필드로 설정</p>
              </li>
              <li>
                <p className="cell value">
                  <code>disabled</code>
                </p>
                <p className="cell content">입력 비활성화</p>
              </li>
              <li>
                <p className="cell value">
                  <code>required</code>
                </p>
                <p className="cell content">반드시 입력해야 제출 가능</p>
              </li>
              <li>
                <p className="cell value">
                  <code>wrap</code>
                </p>
                <p className="cell content">
                  줄 바꿈 방식 지정 (<code>soft</code>, <code>hard</code>)
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code>autofocus</code>
                </p>
                <p className="cell content">페이지 로드시 자동 포커스 설정</p>
              </li>
              <li>
                <p className="cell value">
                  <code>form</code>
                </p>
                <p className="cell content">
                  특정 폼과 연결 (폼 외부에 있을 경우)
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code>spellcheck</code>
                </p>
                <p className="cell content">맞춤법 검사 활성화 여부</p>
              </li>
            </ul>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [name] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;textarea name="값"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            <code>&lt;textarea&gt;</code> 요소의 이름을 지정하여, 폼 제출 시
            해당 필드의 데이터를 식별하고 서버로 전송할 키 값으로 활용됩니다.
          </p>
          <CodeBlock
            title="textarea 속성 [name]"
            className="mt_m"
            language="html"
          >{`<textarea name="comment"></textarea>`}</CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [rows], [cols] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;textarea rows="number" cols="number"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            <code>&lt;textarea&gt;</code>의 가로/세로 크기 지정합니다.
          </p>
          <ul className="dot_lst mt_s indent_small">
            <li>
              <code>rows</code> : 텍스트 영역의 세로(행) 크기를 지정하여
              기본적으로 표시되는 줄 수를 설정합니다.
            </li>
            <li>
              <code>cols</code> : 텍스트 영역의 가로(열) 크기를 지정하여
              기본적으로 표시되는 문자 수를 설정합니다.
            </li>
          </ul>
          <CodeBlock
            title="textarea 속성 [rows, cols]"
            className="mt_m"
            language="html"
          >{`<textarea rows="5" cols="30"></textarea>`}</CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [placeholder] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;textarea placeholder="값"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            입력 필드에 사용자가 입력해야 할 내용을 안내하는 힌트 텍스트를
            표시합니다. 사용자가 텍스트를 입력하면 힌트 텍스트는 사라지고,
            필드가 비어 있을 때만 보입니다.
          </p>
          <CodeBlock
            title="textarea 속성 [placeholder]"
            className="mt_m"
            language="html"
          >{`<textarea placeholder="내용을 입력하세요."></textarea>`}</CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [minlength], [maxlength] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;textarea minlength="number" maxlength="number"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            입력 필드에서 사용자가 입력할 수 있는 문자 수의 범위를 제한하는
            속성입니다.
          </p>
          <ul className="dot_lst mt_s indent_small">
            <li>
              <code>minlength</code> : 입력해야 하는 최소 문자 수를 지정하여, 폼
              제출 시 지정된 길이보다 짧으면 유효성 검사를 수행합니다.
            </li>
            <li>
              <code>maxlength</code> : 입력할 수 있는 최대 문자 수를 제한하여,
              사용자가 지정된 길이 이상 입력하지 못하도록 합니다.
            </li>
          </ul>
          <CodeBlock
            title="textarea 속성 [minlength, maxlength]"
            className="mt_m"
            language="html"
          >{`<textarea minlength="10" maxlength="200"></textarea>`}</CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [readonly] <i className="attr_optional">Boolean - 선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;textarea readonly&gt;
            </span>
          </h3>
          <p className="mt_ms">
            텍스트 영역을 읽기 전용으로 설정하여, 사용자가 내용을 수정할 수
            없도록 합니다. 그러나 폼 제출 시 해당 값은 전송됩니다.
          </p>
          <CodeBlock
            title="textarea 속성 [readonly]"
            className="mt_m"
            language="html"
          >{`<textarea readonly>수정할 수 없는 내용</textarea>`}</CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [disabled] <i className="attr_optional">Boolean - 선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;textarea disabled&gt;
            </span>
          </h3>
          <p className="mt_ms">
            텍스트 영역을 비활성화하여 사용자가 해당 필드에 값을 입력하거나
            조작할 수 없도록 만듭니다. 폼 제출 시 해당 값은 전송되지 않습니다.
          </p>
          <CodeBlock
            title="textarea 속성 [disabled]"
            className="mt_m"
            language="html"
          >{`<textarea disabled>입력 불가</textarea>`}</CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [required] <i className="attr_optional">Boolean - 선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;textarea required&gt;
            </span>
          </h3>
          <p className="mt_ms">
            필수 입력 필드로 지정하여, 사용자가 폼을 제출하기 전에 반드시 값을
            입력하도록 강제합니다.
            <br />
            <mark>
              폼 제출 시 해당 입력 필드가 비어있으면 브라우저는 자동으로 유효성
              검사를 수행하고, 사용자가 값을 입력하도록 안내 메시지를
              표시합니다.
            </mark>
          </p>
          <CodeBlock
            title="textarea 속성 [required]"
            className="mt_m"
            language="html"
          >{`<textarea required>필수 입력</textarea>`}</CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [wrap] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;textarea wrap="값"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            입력된 텍스트가 줄 바꿈될 때의 처리 방식을 지정합니다.
          </p>
          <dl className="dl_dot_lst mt_s">
            <dt>설정 가능한 값 :</dt>
            <dd>
              <code>soft</code>
              <i className="weight-600 t_black">(기본값)</i> : 자동 줄 바꿈 없이
              한 줄로 입력됩니다.
            </dd>
            <dd>
              <code>hard</code> : 줄 바꿈이 적용된 상태로 폼이 제출됩니다.
              (Enter 입력 시 <code>\n</code>이 포함됨)
            </dd>
          </dl>
          <CodeBlock
            title="textarea 속성 [wrap]"
            className="mt_m"
            language="html"
          >{`<textarea wrap="hard"></textarea>`}</CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [autofocus] <i className="attr_optional">Boolean - 선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;textarea autofocus&gt;
            </span>
          </h3>
          <p className="mt_ms">
            페이지 로드 시 해당 텍스트 영역에 자동으로 포커스를 설정하여,
            사용자가 바로 입력할 수 있도록 합니다.
          </p>
          <CodeBlock
            title="textarea 속성 [autofocus]"
            className="mt_m"
            language="html"
          >{`<textarea autofocus></textarea>`}</CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [form] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;textarea form="form 요소의 id"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            <code>&lt;textarea&gt;</code> 요소의 <code>form</code> 속성에{" "}
            <code>&lt;form&gt;</code> 요소의 <code>id</code>와 같은 값을
            지정하여, <code>&lt;textarea&gt;</code> 요소가{" "}
            <code>&lt;form&gt;</code> 요소 내부에 없더라도{" "}
            <code>&lt;form&gt;</code>의 데이터로 제출되도록 설정할 수 있습니다.
          </p>
          <CodeBlock
            title="textarea 속성 [form]"
            className="mt_m"
            language="html"
          >{`<form id="feedbackForm" action="submit.php"></form>

<textarea name="feedback" form="feedbackForm"></textarea>`}</CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [spellcheck] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;textarea spellcheck="값"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            철자 및 문법 검사를 활성화하거나 비활성화하여, 브라우저가 자동으로
            오타를 감지하고 교정할 수 있도록 설정합니다.
          </p>
          <dl className="dl_dot_lst mt_s">
            <dt>값 :</dt>
            <dd>
              <code>true</code> : 맞춤법 검사 활성화 (기본적으로 대부분
              브라우저에서 활성화됩니다.)
            </dd>
            <dd>
              <code>false</code> : 맞춤법 검사 비활성화
            </dd>
            <dd>
              <code>spellcheck</code> 속성이 없으면 브라우저 기본 설정을
              따릅니다.
            </dd>
          </dl>
          <CodeBlock
            title="textarea 속성 [spellcheck]"
            className="mt_m"
            language="html"
          >{`<textarea spellcheck="true"></textarea>`}</CodeBlock>
        </article>
      </section>

      <section className="view_editor indent mt_xxl">
        <h2 className="ml_mn ve_tit">예제</h2>
        <article className="mt_l indent">
          <h3 className="ml_mn">기본 텍스트 영역</h3>
          <p className="dp_pc full_screen_code_info mt_ms">
            (Full screen) 버튼을 클릭하여 전체 화면으로 예제를 확인하세요.
          </p>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/09-forms/0909-textarea/9.9.textarea_element_1.html"
                className="min_height_660 mb_result_height_660"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="기본 텍스트 영역"
                minHeight="660px"
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">[rows], [cols] 속성을 활용한 크기 조정</h3>
          <p className="dp_pc full_screen_code_info mt_ms">
            (Full screen) 버튼을 클릭하여 전체 화면으로 예제를 확인하세요.
          </p>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/09-forms/0909-textarea/9.9.textarea_element_2.html"
                className="min_height_480 mb_result_height_470"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="[rows], [cols] 속성을 활용한 크기 조정"
                minHeight="480px"
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">크기 조정 제한 (resize: none)</h3>
          <p className="dp_pc full_screen_code_info mt_ms">
            (Full screen) 버튼을 클릭하여 전체 화면으로 예제를 확인하세요.
          </p>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/09-forms/0909-textarea/9.9.textarea_element_3.html"
                className="min_height_430 mb_result_height_470"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="크기 조정 제한 (resize: none)"
                minHeight="430px"
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">최소/최대 글자 입력 제한</h3>
          <p className="dp_pc full_screen_code_info mt_ms">
            (Full screen) 버튼을 클릭하여 전체 화면으로 예제를 확인하세요.
          </p>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/09-forms/0909-textarea/9.9.textarea_element_4.html"
                className="min_height_550 mb_result_height_570"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="최소/최대 글자 입력 제한"
                minHeight="550px"
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">글자 수 카운팅</h3>
          <p className="dp_pc full_screen_code_info mt_ms">
            (Full screen) 버튼을 클릭하여 전체 화면으로 예제를 확인하세요.
          </p>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/09-forms/0909-textarea/9.9.textarea_element_5.html"
                className="min_height_400 mb_result_height_200"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="글자 수 카운팅"
                minHeight="400px"
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">실시간 상담 채팅</h3>
          <p className="mt_ms">
            아래는 대부분의 채팅 UI에서 사용되는 <code>&lt;textarea&gt;</code>{" "}
            예제입니다.
            <br />
            기본적으로 한 줄로 시작하여, 줄 바꿈 시{" "}
            <code>&lt;textarea&gt;</code>의 높이가 증가합니다. 일정 높이에
            도달하면 더 이상 높이가 증가하지 않고, 내부에서 작성된 텍스트가
            스크롤됩니다.
          </p>
          <p className="dp_pc full_screen_code_info mt_s">
            (Full screen) 버튼을 클릭하여 전체 화면으로 예제를 확인하세요.
          </p>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/09-forms/0909-textarea/9.9.textarea_element_6.html"
                className="min_height_650 mb_result_height_600"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="실시간 상담 채팅"
                minHeight="650px"
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
            <code>&lt;textarea&gt;</code> 내부에{" "}
            <code>&lt;b&gt;굵게&lt;/b&gt;</code> 같은 HTML 태그를 입력해도
            브라우저에서 해석되지 않고 그대로 표시됩니다.
          </li>
          <li>
            줄 수(<code>rows</code>)와 열 수(<code>cols</code>)는 픽셀이 아니라
            문자 기준으로 설정되므로, 브라우저마다 표시되는 영역에 차이가 발생할
            수 있습니다.
            <br />
            따라서 <code>&lt;textarea&gt;</code>의 크기를 설정할 때는 CSS의{" "}
            <code>width</code>와 <code>height</code> 속성을 사용하는 것이 더
            유연하고 일관된 결과를 제공합니다.
          </li>
        </ul>
      </section>
      <aside className="browser_support mt_xxl" data-tit="textarea">
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
        <img src={IMG.HTML + "/09_html_09.png"} alt="textarea 요소" />
        <figcaption>textarea 요소</figcaption>
      </figure>
    </>
  );
}

export default TextareaElementPage;
