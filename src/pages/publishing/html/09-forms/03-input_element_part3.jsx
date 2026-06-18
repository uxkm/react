import { Suspense, lazy } from "react";
import CodeBlock from "@/components/code/CodeBlock";
import { usePageMeta } from "@/components/common/PageMeta";
import InputPartTabs from "./InputPartTabs";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "input_element",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
  bottomEditor: true,
};

const PAGE_DATA = {
  title: "input element [선택 및 조작 요소]",
  description:
    "사용자가 특정 옵션을 선택하거나 직접 조작할 수 있는 입력 요소로, checkbox와 radio를 사용하면 다중 또는 단일 선택이 가능하며 file을 통해 파일 업로드 기능을 제공합니다. 이 페이지에서는 선택 및 조작과 관련된 입력 타입을 소개하고, 다양한 활용 사례를 설명합니다.",
  keyword: "Markup, HTML, tag, elements, input",
};

const UkEditorTarget = lazy(
  () => import("@/components/code/UkEditorTarget"),
);

function EditorFallback() {
  return <div className="uk_editor min_height_400" aria-hidden />;
}

function InputElementPart3Page() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <InputPartTabs
        active={{
          part1: false,
          part2: false,
          part3: true,
          part4: false,
          part5: false,
        }}
      />
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          선택 및 조작 요소는{" "}
          <b>
            사용자가 여러 개 중에서 선택하거나, 폼을 제출/초기화하는 입력 요소
          </b>
          로, 체크박스와 라디오 버튼을 이용해 옵션을 선택할 수 있으며, 파일
          업로드를 처리하는 <code>file</code> 타입도 포함됩니다.
          <br />
          또한, 버튼을 사용해 폼을 제출(<code>submit</code>), 초기화(
          <code>reset</code>), 또는 특정 동작을 실행(<code>button</code>,{" "}
          <code>image</code>)할 수 있습니다.
        </p>
        <p className="mt_s">
          대표적인 타입으로 <code>checkbox</code>, <code>radio</code>,{" "}
          <code>file</code>, <code>button</code>, <code>submit</code>,{" "}
          <code>reset</code>, <code>image</code> 등이 있습니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn">관련 속성</h2>
        <article className="mt_l indent">
          <h3 className="ml_mn">
            <code className="font-21-important weight-600">[checked]</code>
            <i className="attr_optional ml_0">Boolean - 선택 사항</i>
            <i className="t_777">기본 선택 상태 지정</i>
          </h3>
          <CodeBlock
            title="선택 및 조작 요소 관련 속성 [checked]"
            className="mt_m"
            language="html"
          >
            {`<!-- [checked] -->
<input type="checkbox" name="subscribe" checked> 뉴스레터 구독`}
          </CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <code className="font-21-important weight-600">[multiple]</code>
            <i className="attr_optional ml_0">Boolean - 선택 사항</i>
            <i className="t_777">다중 파일 선택</i>
          </h3>
          <CodeBlock
            title="선택 및 조작 요소 관련 속성 [multiple]"
            className="mt_m"
            language="html"
          >
            {`<!-- [multiple] -->
<input type="file" name="documents" multiple>`}
          </CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <code className="font-21-important weight-600">[accept]</code>
            <i className="attr_optional ml_0">선택 사항</i>
            <i className="t_777">파일 유형 제한</i>
          </h3>
          <CodeBlock
            title="선택 및 조작 요소 관련 속성 [accept]"
            className="mt_m"
            language="html"
          >
            {`<!-- [accept] -->
<input type="file" name="image" accept="image/png, image/jpeg">`}
          </CodeBlock>
        </article>
      </section>

      <section className="view_editor indent mt_xxl">
        <h2 className="ml_mn ve_tit t_darkblue">
          <code className="font-24-important weight-600 t_darkblue">
            [type]
          </code>
          별 예제
        </h2>
        <article className="mt_l indent">
          <h3 className="ml_mn">
            <code className="font-21-important weight-600 t_darkblue">
              [type="checkbox"]
            </code>{" "}
            <i className="t_444">(다중 선택 체크박스)</i>
          </h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/09-forms/0903-input/9.3.03.input_part3_checkbox.html"
                className="min_height_550 mb_result_height_530"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="type checkbox"
                minHeight="550px"
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <code className="font-21-important weight-600 t_darkblue">
              [type="radio"]
            </code>{" "}
            <i className="t_444">(단일 선택 라디오 버튼)</i>
          </h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/09-forms/0903-input/9.3.03.input_part3_radio.html"
                className="min_height_510 mb_result_height_510"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="type radio"
                minHeight="510px"
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <code className="font-21-important weight-600 t_darkblue">
              [type="file"]
            </code>{" "}
            <i className="t_444">(파일 업로드)</i>
          </h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/09-forms/0903-input/9.3.03.input_part3_file.html"
                className="min_height_600 mb_result_height_620"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="type file"
                minHeight="600px"
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <code className="font-21-important weight-600 t_darkblue">
              [type="button"]
            </code>{" "}
            <i className="t_444">(일반 버튼)</i>
          </h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/09-forms/0903-input/9.3.03.input_part3_button.html"
                className="min_height_450 mb_result_height_350"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="type button"
                minHeight="450px"
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <code className="font-21-important weight-600 t_darkblue">
              [type="submit"]
            </code>{" "}
            <i className="t_444">(폼 제출 버튼)</i>
          </h3>
          <CodeBlock
            title='[type="submit"] 폼 제출 버튼'
            className="mt_ms"
            language="html"
          >
            {`<!-- 기본 제출 버튼(기본 POST 방식, 유효성 검사 가능) -->
<input type="submit" value="제출">

<!-- 다른 URL로 제출 -->
<input type="submit" formaction="/custom-url" value="제출">

<!-- 유효성 검사 없이 제출 -->
<input type="submit" formnovalidate value="제출">

<!-- 새 창에서 폼 제출 -->
<input type="submit" formtarget="_blank" value="제출">`}
          </CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <code className="font-21-important weight-600 t_darkblue">
              [type="reset"]
            </code>{" "}
            <i className="t_444">(폼 초기화 버튼)</i>
          </h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/09-forms/0903-input/9.3.03.input_part3_reset.html"
                className="min_height_590 mb_result_height_620"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="type reset"
                minHeight="590px"
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <code className="font-21-important weight-600 t_darkblue">
              [type="image"]
            </code>{" "}
            <i className="t_444">(이미지 버튼)</i>
          </h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/09-forms/0903-input/9.3.03.input_part3_image.html"
                className="min_height_450 mb_result_height_500"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="type image"
                minHeight="450px"
              />
            </Suspense>
          </div>
        </article>
      </section>

      <aside className="browser_support mt_xxl" data-tit="input">
        <ul>
          <li className="ie">지원</li>
          <li className="edge">지원</li>
          <li className="chrome">지원</li>
          <li className="firefox">1.0</li>
          <li className="opera">지원</li>
          <li className="safari">1.0</li>
        </ul>
      </aside>
      <figure className="img_figure mt_l">
        <img
          src={IMG.HTML + "/09_html_03_3.png"}
          alt="input 선택 및 조작 요소"
        />
        <figcaption>input 요소 선택 및 조작 요소</figcaption>
      </figure>
    </>
  );
}

export default InputElementPart3Page;
