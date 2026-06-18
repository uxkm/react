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
  title: "input element [숫자 및 범위]",
  description:
    "숫자 값을 입력하거나 특정 범위 내에서 조정할 수 있는 입력 방식으로, number 타입은 직접 값을 입력하거나 증가/감소 버튼을 사용할 수 있으며 range 타입은 슬라이더 형태로 값을 조절할 수 있습니다. 이 페이지에서는 숫자 및 범위 입력 방식의 특징과 속성을 정리하고, 실제 사용 예시를 제공합니다.",
  keyword: "Markup, HTML, tag, elements, input",
};

function EditorFallback() {
  return <div className="uk_editor min_height_400" aria-hidden />;
}

const UkEditorTarget = lazy(
  () => import("@/components/code/UkEditorTarget"),
);

function InputElementPart4Page() {
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
          part3: false,
          part4: true,
          part5: false,
        }}
      />
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          숫자 및 범위 요소는{" "}
          <b>숫자를 입력하거나 특정 범위 내에서 값을 조정하는 입력 요소</b>
          입니다.
          <br />
          <code>number</code> 타입은 직접 숫자를 입력하거나 스핀 버튼을 이용해
          값을 증가/감소할 수 있으며, <code>range</code> 타입은 슬라이더 UI를
          사용하여 값을 조절할 수 있습니다.
        </p>
        <p className="mt_s">
          대표적인 타입으로 <code>number</code>, <code>range</code> 등이
          있습니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn">관련 속성</h2>
        <article className="mt_l indent">
          <h3 className="ml_mn">
            <code className="font-21-important weight-600">[min]</code>
            <i className="attr_optional ml_0">선택 사항</i>
            <i className="t_777">최소값 설정</i>
          </h3>
          <CodeBlock
            title="숫자 및 범위 관련 속성 [min]"
            className="mt_m"
            language="html"
          >
            {`<!-- [min] -->
<input type="range" name="volume" min="0" max="100">`}
          </CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <code className="font-21-important weight-600">[max]</code>
            <i className="attr_optional ml_0">선택 사항</i>
            <i className="t_777">최대값 설정</i>
          </h3>
          <CodeBlock
            title="숫자 및 범위 관련 속성 [max]"
            className="mt_m"
            language="html"
          >
            {`<!-- [max] -->
<input type="number" name="age" max="100" placeholder="최대 100까지 입력 가능">`}
          </CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <code className="font-21-important weight-600">[step]</code>
            <i className="attr_optional ml_0">선택 사항</i>
            <i className="t_777">값 증가/감소 단위 설정</i>
          </h3>
          <CodeBlock
            title="숫자 및 범위 관련 속성 [step]"
            className="mt_m"
            language="html"
          >
            {`<!-- [step] -->
<input type="range" name="volume" min="0" max="100" step="10">`}
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
              [type="number"]
            </code>{" "}
            <i className="t_444">(숫자 입력 필드)</i>
          </h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/09-forms/0903-input/9.3.04.input_part4_number.html"
                className="min_height_450 mb_result_height_450"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="type number"
                minHeight="450px"
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <code className="font-21-important weight-600 t_darkblue">
              [type="range"]
            </code>{" "}
            <i className="t_444">(슬라이더 입력 필드)</i>
          </h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/09-forms/0903-input/9.3.04.input_part4_range.html"
                className="min_height_450 mb_result_height_450"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="type range"
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
        <img src={IMG.HTML + "/09_html_03_4.png"} alt="input 숫자 및 범위" />
        <figcaption>input 요소 숫자 및 범위</figcaption>
      </figure>
    </>
  );
}

export default InputElementPart4Page;
