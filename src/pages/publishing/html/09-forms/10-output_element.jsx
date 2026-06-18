import { Suspense, lazy } from "react";
import CodeBlock from "@/components/code/CodeBlock";
import { usePageMeta } from "@/components/common/PageMeta";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "output_element",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
  bottomEditor: true,
};

const PAGE_DATA = {
  title: "output element",
  description:
    "output 요소는 HTML 문서에서 사용자 입력이나 스크립트 계산 결과 등 동적으로 생성된 값을 표시할 때 사용하는 태그로, for 속성을 사용하여 관련된 input, select, textarea 요소들과 연결할 수 있으며 계산기, 폼 검증 결과, 실시간 반응 표시 등 다양한 사용자 인터페이스에 활용됩니다. 이 페이지에서는 output 요소의 주요 역할 및 특징을 설명하고, output 요소의 용도와 구조적 위치에 따른 사용 예시를 소개합니다.",
  keyword: "Markup, HTML, tag, elements, output",
};

const UkEditorTarget = lazy(
  () => import("@/components/code/UkEditorTarget"),
);

function EditorFallback() {
  return <div className="uk_editor min_height_400" aria-hidden />;
}


function OutputElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>&lt;output&gt;</code> 요소는{" "}
          <b>
            사용자 입력이나 스크립트 계산 결과 등 동적으로 생성된 값을 화면에
            표시할 때 사용하는 시맨틱 태그
          </b>
          입니다.
          <br />
          주로 <code>&lt;input&gt;</code>, <code>&lt;select&gt;</code>,{" "}
          <code>&lt;button&gt;</code> 등의 폼 요소와 함께 사용되며, 계산기나
          실시간 계산 결과, 선택에 따른 표시 값 등을 보여주는 데 적합합니다.
          <code>for</code> 속성을 사용하면 연관된 폼 요소들과의 관계를 명시할 수
          있으며, 시각적으로는 일반 텍스트와 유사하지만 의미적으로{" "}
          <b>결과값이라는 역할을 명확히 표현</b>해줍니다.
          <br />
          접근성과 구조적인 의미 전달을 위해 결과 표시가 필요한 경우에
          유용합니다.
        </p>
      </blockquote>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <ol className="mt_l ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>계산 결과 또는 스크립트 처리 결과를 사용자에게 표시</strong>
            <p>
              사용자 입력에 따라 결과를 실시간으로 표시하는 영역으로 사용됩니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>주로 JavaScript와 함께 사용됨</strong>
            <p>
              <code>&lt;output&gt;</code> 자체만으로 값을 표시하는 기능은
              없으며, JavaScript를 통해 값을 변경해야 합니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>for 속성을 사용하여 관련 입력 요소 지정 가능</strong>
            <p>
              <code>for</code> 속성을 사용하면 특정 <code>&lt;input&gt;</code>{" "}
              요소와 연결하여 해당 요소의 계산 결과를 출력할 수 있습니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>일반적으로 form 요소 내부에서 사용됨</strong>
            <p>
              <code>&lt;form&gt;</code> 내부에서 사용하면 <code>name</code>{" "}
              속성을 지정하여 서버로 값을 전송할 수도 있습니다.
            </p>
          </li>
        </ol>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          CSS 기본 값
        </h2>
        <p className="mt_l">
          <code>&lt;output&gt;</code> 요소는 기본적으로 인라인 레벨 요소이며,
          별도의 CSS를 지정하지 않아도 아래와 같은 기본값이 적용됩니다.
        </p>
        <CodeBlock title="output element CSS" className="mt_m" language="css">
          {`output {
  display: inline;
}`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          기본 문법
        </h2>
        <CodeBlock
          title="output element syntax"
          className="mt_l"
          language="html"
        >
          {`<!-- 기본 문법 -->
<output name="result" for="num1 num2">0</output>`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn">속성</h2>
        <article className="mt_l indent dp_pc">
          <h3 className="ml_mn t_blue">
            <code className="font-21-important t_blue weight-600">
              &lt;output&gt;
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
                  <code>for</code>
                </p>
                <p className="cell content">
                  결과가 연결될 입력 요소들의 ID 목록 지정
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code>name</code>
                </p>
                <p className="cell content">서버에 전송될 때 사용될 키 이름</p>
              </li>
              <li>
                <p className="cell value">
                  <code>form</code>
                </p>
                <p className="cell content">
                  <code>&lt;form&gt;</code> 밖에 있을 때 특정 폼과 연결
                </p>
              </li>
            </ul>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [for] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;output for="값"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            <code>&lt;output&gt;</code> 요소가 참조하는 입력 필드(
            <code>&lt;input&gt;</code>, <code>&lt;textarea&gt;</code>,{" "}
            <code>&lt;select&gt;</code> 등)의 <code>id</code> 값을 지정합니다.
            <br />
            <code>for</code> 속성을 통해 특정 입력 필드와 연결하여 연산 결과나
            동적인 값을 표시할 수 있습니다.
          </p>
          <CodeBlock title="output 속성 [for]" className="mt_m" language="html">
            {`<form oninput="result.value = parseInt(a.value) + parseInt(b.value)">
  <input type="number" id="a"> +
  <input type="number" id="b"> =
  <output name="result" for="a b"></output> <!-- for 속성 지정 -->
</form>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [name] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;output name="값"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            <code>&lt;output&gt;</code> 요소의 이름을 설정하여, 폼 데이터로
            전송될 때 식별할 수 있도록 합니다.
            <br />
            같은 폼 내에서 다른 출력 요소들과 구별하는 용도로 사용됩니다.
          </p>
          <CodeBlock
            title="output 속성 [name]"
            className="mt_m"
            language="html"
          >
            {`<form action="/submit" method="post" oninput="result.value = parseInt(x.value) + parseInt(y.value)">
  <input type="number" id="x"> +
  <input type="number" id="y"> =
  <output name="sum" for="x y"></output> <!-- name 속성 지정 -->
  <button type="submit">제출</button>
</form>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [form] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;output form="form 요소의 id"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            <code>&lt;output&gt;</code> 요소의 <code>form</code> 속성에{" "}
            <code>&lt;form&gt;</code> 요소의 <code>id</code>와 같은 값을
            지정하여,
            <code>&lt;output&gt;</code> 요소가 <code>&lt;form&gt;</code> 요소
            내부에 없더라도 <code>&lt;form&gt;</code>의 데이터로 제출되도록
            설정할 수 있습니다.
          </p>
          <CodeBlock
            title="output 속성 [form]"
            className="mt_m"
            language="html"
          >
            {`<form id="mathForm" oninput="calc.value = parseInt(a.value) + parseInt(b.value)">
  <input type="number" id="a"> +
  <input type="number" id="b">
</form>

<output id="calc" form="mathForm" name="result"></output> <!-- form 속성 지정 -->`}
          </CodeBlock>
        </article>
      </section>

      <section className="view_editor indent mt_xxl">
        <h2 className="ml_mn ve_tit">예제</h2>
        <article className="mt_l indent">
          <h3 className="ml_mn">
            <code className="font-21-important weight-600">text</code>,{" "}
            <code className="font-21-important weight-600">password</code>{" "}
            타입과 연계하여 출력
          </h3>
          <p className="dp_pc full_screen_code_info mt_ms">
            (Full screen) 버튼을 클릭하여 전체 화면으로 예제를 확인하세요.
          </p>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/09-forms/0910-output/9.10.output_element_1.html"
                className="min_height_400 mb_result_height_350"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="text, password 타입과 연계하여 출력"
                minHeight="400px"
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <code className="font-21-important weight-600">checkbox</code>,{" "}
            <code className="font-21-important weight-600">radio</code>,{" "}
            <code className="font-21-important weight-600">file</code> 타입과
            연계하여 출력
          </h3>
          <p className="dp_pc full_screen_code_info mt_ms">
            (Full screen) 버튼을 클릭하여 전체 화면으로 예제를 확인하세요.
          </p>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/09-forms/0910-output/9.10.output_element_2.html"
                className="min_height_450 mb_result_height_450"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="checkbox, radio, file 타입과 연계하여 출력"
                minHeight="450px"
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <code className="font-21-important weight-600">number</code>,{" "}
            <code className="font-21-important weight-600">range</code> 타입과
            연계하여 출력
          </h3>
          <p className="dp_pc full_screen_code_info mt_ms">
            (Full screen) 버튼을 클릭하여 전체 화면으로 예제를 확인하세요.
          </p>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/09-forms/0910-output/9.10.output_element_3.html"
                className="min_height_400 mb_result_height_350"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="number, range 타입과 연계하여 출력"
                minHeight="400px"
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <code className="font-21-important weight-600">date</code>,{" "}
            <code className="font-21-important weight-600">time</code> 타입과
            연계하여 출력
          </h3>
          <p className="dp_pc full_screen_code_info mt_ms">
            (Full screen) 버튼을 클릭하여 전체 화면으로 예제를 확인하세요.
          </p>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/09-forms/0910-output/9.10.output_element_4.html"
                className="min_height_400 mb_result_height_350"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="date, time 타입과 연계하여 출력"
                minHeight="400px"
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">두 숫자의 합을 실시간으로 표시</h3>
          <p className="dp_pc full_screen_code_info mt_ms">
            (Full screen) 버튼을 클릭하여 전체 화면으로 예제를 확인하세요.
          </p>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/09-forms/0910-output/9.10.output_element_5.html"
                className="min_height_400 mb_result_height_250"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="두 숫자의 합을 실시간으로 표시"
                minHeight="400px"
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">실시간 글자 수 카운터</h3>
          <p className="dp_pc full_screen_code_info mt_ms">
            (Full screen) 버튼을 클릭하여 전체 화면으로 예제를 확인하세요.
          </p>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/09-forms/0910-output/9.10.output_element_6.html"
                className="min_height_400 mb_result_height_300"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="실시간 글자 수 카운터"
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
        <ul className="dot_lst mt_l gap-column-important-sm">
          <li>
            JavaScript가 없으면 동작하지 않습니다.
            <br />
            <code>&lt;output&gt;</code> 요소 자체는 기능이 없으며, JavaScript를
            통해 값을 변경해야 합니다.
          </li>
          <li>
            <code>value</code> 속성은 JavaScript로 직접 지정해야 합니다.
            <br />
            <code>&lt;output&gt;</code>은 입력 필드가 아니므로{" "}
            <code>value</code> 속성이 HTML 속성에는 존재하지 않지만
            자바스크립트에서는 사용할 수 있습니다.
            <br />
            JavaScript를 이용하여 <code>output.value = 123</code>처럼 값을
            설정하는 것은 가능하지만, <code>&lt;output value="123"&gt;</code>
            처럼 요소에 직접 <code>value</code> 속성을 지정해도 표시되지 않고
            무시됩니다.
          </li>
          <li>
            <code>&lt;output&gt;</code>은 사용자 입력 필드가 아니므로 사용자가
            직접 입력할 수 없습니다. 읽기 전용이며 스크립트로만 값 변경이
            가능합니다.
          </li>
          <li>
            <code>for</code> 속성은 <code>id</code>와 연결되어야 하며,{" "}
            <code>for</code> 속성에 지정된 값은 <code>id</code> 속성과 일치해야
            합니다.
            <br />
            예를 들어, <code>&lt;input id="num1"&gt;</code>이면{" "}
            <code>&lt;output for="num1"&gt;</code>로 설정해야 합니다.
          </li>
          <li>
            <code>&lt;output&gt;</code> 내부에 텍스트가 없다면 초기엔
            비어있습니다. 필요 시 <code>0</code> 또는 결과 없음 등의 초기
            텍스트를 넣는 것도 좋습니다.
          </li>
          <li>
            <code>&lt;output&gt;</code> 요소는 기본적으로 <code>inline</code>{" "}
            요소이며, 브라우저에서 일반 텍스트처럼 보입니다. 강조하려면 CSS
            스타일을 직접 지정해야 합니다.
          </li>
        </ul>
      </section>
      <aside className="browser_support mt_xxl" data-tit="output">
        <ul>
          <li className="ie false">지원안함</li>
          <li className="edge">지원</li>
          <li className="chrome">10.0</li>
          <li className="firefox">14.0</li>
          <li className="opera">11.0</li>
          <li className="safari">7.0</li>
        </ul>
      </aside>
      <figure className="img_figure mt_l">
        <img src={IMG.HTML + "/09_html_10.png"} alt="output 요소" />
        <figcaption>output 요소</figcaption>
      </figure>
    </>
  );
}

export default OutputElementPage;
