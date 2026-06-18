import { Suspense, lazy } from "react";
import { usePageMeta } from "@/components/common/PageMeta";
import CodeBlock from "@/components/code/CodeBlock";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "label_element",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  bottomEditor: true,
};

const PAGE_DATA = {
  title: "label element",
  description:
    "label 요소는 HTML 문서에서 폼 요소(input, textarea, select 등)와 연결되어 해당 입력 필드의 제목이나 설명을 제공하는 태그로, for 속성을 사용하여 특정 id 값을 가진 폼 요소와 연결하거나 입력 요소를 label 내부에 직접 포함시켜 사용할 수 있습니다. 이 페이지에서는 label 요소의 주요 역할 및 특징을 설명하고, label 요소의 용도와 구조적 위치에 따른 사용 예시를 소개합니다.",
  keyword: "Markup, HTML, tag, elements, label",
};

const UkEditorTarget = lazy(
  () => import("@/components/code/UkEditorTarget"),
);

function EditorFallback() {
  return <div className="uk_editor min_height_400" aria-hidden />;
}

function LabelElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>&lt;label&gt;</code> 요소는 <b>폼 요소</b>(
          <code>&lt;input&gt;</code>, <code>&lt;textarea&gt;</code>,{" "}
          <code>&lt;select&gt;</code> 등)
          <b>
            와 연결되어 해당 입력 요소의 제목이나 설명을 제공하는 시맨틱 태그
          </b>
          로, <b>사용자가 어떤 값을 입력해야 하는지 명확하게 안내하는 역할</b>을
          합니다.
          <br />
          <code>for</code> 속성을 사용해 특정 <code>id</code>를 가진 폼 요소와
          연결하거나, 폼 요소를 <code>&lt;label&gt;</code> 내부에 직접 포함할
          수도 있습니다. 사용자가 라벨을 클릭하면 해당 입력 필드에 포커스가
          이동되어 <b>사용성과 접근성을 크게 향상</b>시키며, 스크린 리더 등 보조
          기술에서도 필수적인 역할을 합니다.
        </p>
      </blockquote>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <ol className="mt_l ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>입력 필드의 설명 제공</strong>
            <p>사용자가 어떤 정보를 입력해야 하는지 안내하는 역할을 합니다.</p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>for 속성으로 연결</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;label&gt;</code> 요소는 <code>for</code> 속성을
                사용하여 특정 입력 요소와 연결할 수 있습니다. <code>for</code>{" "}
                속성 값은 해당 입력 필드의 <code>id</code> 속성과 일치해야
                합니다.
              </li>
              <li>
                <code>&lt;label&gt;</code>을 클릭하면 연결된{" "}
                <code>&lt;input&gt;</code> 필드가 자동으로 포커스를 받습니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>접근성 향상</strong>
            <p>
              <code>&lt;label&gt;</code>은 접근성(Accessibility) 측면에서 중요한
              역할을 합니다. 화면 리더기나 키보드 네비게이션을 사용할 때, 폼
              필드에 대한 정보를 제공하여 시각 장애인이나 입력 장애가 있는
              사용자에게 유용합니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>명시적, 암묵적 &lt;label&gt; 사용</strong>
            <ul className="dot_lst">
              <li>
                <b>명시적 방식</b> : <code>&lt;label&gt;</code>의{" "}
                <code>for</code> 속성을 사용하여 특정 폼 요소(<code>id</code>)와
                연결하는 방식으로, 위치와 상관없이 명확한 연관성을 가질 수
                있습니다.
              </li>
              <li>
                <b>암묵적 방식</b> : <code>&lt;label&gt;</code> 내부에 폼 요소를
                포함하여 자동으로 연결하는 방식으로, 코드가 간결하지만 위치가
                변경될 경우 연관성이 약해질 수 있습니다.
              </li>
            </ul>
          </li>
        </ol>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          CSS 기본 값
        </h2>
        <p className="mt_l">
          <code>&lt;label&gt;</code> 요소는 기본적으로 인라인 레벨 요소이며,
          별도의 CSS를 지정하지 않아도 아래와 같은 기본값이 적용됩니다.
        </p>
        <CodeBlock title="label element CSS" className="mt_m" language="css">
          {`label {
  display: inline;
  cursor: auto;
}`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn">
          <i className="t_blue">명시적(Explicit)</i>과{" "}
          <i className="t_green">암묵적(Implicit)</i> 방식
        </h2>
        <blockquote className="uk_note mt_xl" role="note">
          <strong className="sound_only">요약 설명</strong>
          <p>
            접근성을 위해 명시적 방식(label 요소를 명확히 연결하는 방식)이
            권장되지만, 암묵적 방식(라벨과 입력 요소를 구조적으로 배치하는
            방식)도 HTML 표준에서 허용됩니다.
            <br />
            암묵적 방식은 주로 디자인 목적으로 사용되며,{" "}
            <code>&lt;input&gt;</code> 요소 중 <code>radio</code> 및{" "}
            <code>checkbox</code> 타입을 커스텀 스타일링할 때 많이 활용됩니다.
          </p>
        </blockquote>

        <article className="mt_xl indent">
          <h3 className="ml_mn t_blue">명시적(Explicit) 방식</h3>
          <p className="mt_ml">
            <code>&lt;label&gt;</code>의 <code>for</code> 속성을 사용하여 특정
            폼 요소와 연결하는 방법입니다. <code>for</code> 속성 값은 연결할 폼
            요소의 <code>id</code> 값과 일치해야 합니다.
          </p>
          <div className="mt_ml indent">
            <h4 className="ml_mn">기본 문법</h4>
            <CodeBlock
              title="label element syntax (명시적)"
              className="mt_m"
              language="html"
            >
              {`<!-- 명시적 방식 기본 문법 -->
<label for="username">이름:</label>
<input type="text" id="username" name="username">`}
            </CodeBlock>
          </div>
          <div className="mt_l indent">
            <h4 className="ml_mn">특징</h4>
            <ul className="dot_lst mt_ms">
              <li>
                <code>&lt;label&gt;</code>과 <code>&lt;input&gt;</code>이 직접
                연결되므로 위치와 관계없이 연관이 유지됩니다.
              </li>
              <li>
                <code>&lt;input&gt;</code>을 클릭하지 않아도,{" "}
                <code>&lt;label&gt;</code>을 클릭하면 자동으로 포커스가
                이동됩니다.
              </li>
              <li>
                스크린 리더가 올바르게 읽을 수 있도록 접근성이 향상됩니다.
              </li>
            </ul>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn t_green">암묵적(Implicit) 방식</h3>
          <p className="mt_ml">
            <code>&lt;label&gt;</code> 요소 내부에 폼 요소를 포함하여 암묵적으로
            연결하는 방법입니다. 별도의 <code>for</code> 속성이 필요하지
            않습니다.
          </p>
          <div className="mt_ml indent">
            <h4 className="ml_mn">기본 문법</h4>
            <CodeBlock
              title="label element syntax (암묵적)"
              className="mt_m"
              language="html"
            >
              {`<!-- 암묵적 방식 기본 문법 -->
<label>
  이름: <input type="text" name="username">
</label>`}
            </CodeBlock>
          </div>
          <div className="mt_l indent">
            <h4 className="ml_mn">특징</h4>
            <ul className="dot_lst mt_ms">
              <li>
                <code>&lt;label&gt;</code>과 <code>&lt;input&gt;</code>이 같은
                요소 내에 있어야 하며, 암묵적으로 연결됩니다.
              </li>
              <li>
                <code>&lt;label&gt;</code>을 클릭하면 내부의{" "}
                <code>&lt;input&gt;</code>에 포커스가 자동 이동합니다.
              </li>
              <li>다만, 위치가 변할 경우 연관이 명확하지 않을 수 있습니다.</li>
            </ul>
          </div>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn">속성</h2>
        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [for] <i className="attr_required">명시적 방식 - 필수</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;label for="값"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            <mark>
              명시적 방식을 사용할 때는 반드시 <code>&lt;label&gt;</code>의{" "}
              <code>for</code> 속성과 <code>&lt;input&gt;</code>의{" "}
              <code>id</code> 속성을 동일하게 지정해야 합니다.
            </mark>
            <br />
            반면, 암묵적 방식을 사용할 때는{" "}
            <i className="underline">
              <code>&lt;label&gt;</code> 내부에 <code>&lt;input&gt;</code>을
              포함하여 <code>for</code> 속성을 생략해도 자동으로 연결됩니다.
            </i>
            <br />
            <code>for</code> 속성을 사용하면 <code>&lt;label&gt;</code>을
            클릭했을 때{" "}
            <i className="underline">해당 입력 요소에 포커스가 이동</i>합니다.
          </p>
          <CodeBlock title="label 속성 [for]" className="mt_m" language="html">
            {`<!--
  <label> for의 값과 <input> id의 값을 동일하게 지정
-->
<label for="email">이메일:</label>
<input type="email" id="email">`}
          </CodeBlock>
        </article>
      </section>

      <section className="view_editor indent mt_xxl">
        <h2 className="ml_mn ve_tit">예제</h2>
        <article className="mt_l indent">
          <h3 className="ml_mn">명시적과 암묵적의 차이</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/09-forms/0902-label/9.2.label_element_1.html"
                className="min_height_400 mb_result_height_300"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="명시적과 암묵적의 차이"
                minHeight="400px"
              />
            </Suspense>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">체크박스와 &lt;label&gt; 연결</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/09-forms/0902-label/9.2.label_element_2.html"
                className="min_height_400 mb_result_height_300"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="체크박스와 label 연결"
                minHeight="400px"
              />
            </Suspense>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">라디오 버튼과 &lt;label&gt; 연결</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/09-forms/0902-label/9.2.label_element_3.html"
                className="min_height_400 mb_result_height_300"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="라디오 버튼과 label 연결"
                minHeight="400px"
              />
            </Suspense>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            드롭다운(&lt;select&gt;)과 &lt;label&gt; 연결
          </h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/09-forms/0902-label/9.2.label_element_4.html"
                className="min_height_400 mb_result_height_300"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="드롭다운과 label 연결"
                minHeight="400px"
              />
            </Suspense>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">접근성을 고려한 aria-labelledby 사용</h3>
          <CodeBlock
            title="접근성을 고려한 aria-labelledby 사용"
            className="mt_m"
            language="html"
          >
            {`<!-- 접근성을 고려한 aria-labelledby 사용 -->
<label for="username" id="username-label">사용자명:</label>
<input type="text" id="username" name="username" aria-labelledby="username-label">`}
          </CodeBlock>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주의사항
        </h2>
        <ul className="dot_lst mt_l">
          <li>
            <code>&lt;label&gt;</code>의 <code>for</code> 속성 값은 반드시
            연결할 입력 요소의 <code>id</code> 속성과 동일해야 합니다. 일치하지
            않으면, 레이블을 클릭해도 해당 입력 필드로 포커스가 이동하지
            않습니다.
          </li>
          <li>
            <code>&lt;label&gt;</code> 내부에 입력 요소를 포함하는 경우,{" "}
            <code>for</code> 속성을 생략해도 텍스트를 클릭할 수 있으며, 이 경우
            레이블이 자동으로 해당 입력 요소와 연결됩니다.
          </li>
        </ul>
      </section>
      <aside className="browser_support mt_xxl" data-tit="label">
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
        <img src={IMG.HTML + "/09_html_02.png"} alt="label 요소" />
        <figcaption>label 요소</figcaption>
      </figure>
    </>
  );
}

export default LabelElementPage;
