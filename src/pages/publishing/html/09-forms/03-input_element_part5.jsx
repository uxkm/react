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
  title: "input element [날짜 및 시간]",
  description:
    "날짜와 시간을 선택하는 입력 방식으로, date, time, datetime-local, month, week 타입을 포함하며 브라우저에서 제공하는 UI를 활용해 쉽게 날짜 및 시간을 입력할 수 있습니다. 이 페이지에서는 날짜 및 시간 입력 방식의 특징을 설명하고, 각 타입이 어떻게 동작하는지 소개합니다.",
  keyword: "Markup, HTML, tag, elements, input",
};

const UkEditorTarget = lazy(
  () => import("@/components/code/UkEditorTarget"),
);
function EditorFallback() {
  return <div className="uk_editor min_height_400" aria-hidden />;
}
function InputElementPart5Page() {
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
          part4: false,
          part5: true,
        }}
      />
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          날짜 및 시간 입력 요소는{" "}
          <b>사용자가 날짜 및 시간을 입력할 수 있도록 제공하는 요소</b>로,
          브라우저에서 기본적으로 캘린더 또는 시간 선택 UI를 제공합니다.
          <br />각 입력 타입에 따라 연, 월, 일, 주, 시, 분 등을 입력할 수
          있으며, 최소값(<code>min</code>), 최대값(<code>max</code>), 증가 단위(
          <code>step</code>) 등을 설정할 수도 있습니다.
        </p>
        <p className="mt_s">
          대표적인 타입으로 <code>date</code>, <code>datetime-local</code>,{" "}
          <code>month</code>, <code>week</code>, <code>time</code> 등이
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
            title="날짜 및 시간 관련 속성 [min]"
            className="mt_m"
            language="html"
          >
            {`<!-- [min] -->
<input type="time" name="work-time" min="09:00" max="18:00">`}
          </CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <code className="font-21-important weight-600">[max]</code>
            <i className="attr_optional ml_0">선택 사항</i>
            <i className="t_777">최대값 설정</i>
          </h3>
          <CodeBlock
            title="날짜 및 시간 관련 속성 [max]"
            className="mt_m"
            language="html"
          >
            {`<!-- [max] -->
<input type="date" name="event-date" max="2025-12-31">`}
          </CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <code className="font-21-important weight-600">[step]</code>
            <i className="attr_optional ml_0">선택 사항</i>
            <i className="t_777">값 증가/감소 단위 설정</i>
          </h3>
          <CodeBlock
            title="날짜 및 시간 관련 속성 [step]"
            className="mt_m"
            language="html"
          >
            {`<!-- [step] -->
<input type="week" name="biweekly" step="2">`}
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
              [type="date"]
            </code>{" "}
            <i className="t_444">(날짜 선택 필드)</i>
          </h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/09-forms/0903-input/9.3.05.input_part5_date.html"
                className="min_height_450 mb_result_height_460"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="type date"
                minHeight="450px"
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <code className="font-21-important weight-600 t_darkblue">
              [type="datetime-local"]
            </code>{" "}
            <i className="t_444">(날짜와 시간 선택 필드)</i>
          </h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/09-forms/0903-input/9.3.05.input_part5_datetime-local.html"
                className="min_height_470 mb_result_height_510"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="type datetime-local"
                minHeight="470px"
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <code className="font-21-important weight-600 t_darkblue">
              [type="month"]
            </code>{" "}
            <i className="t_444">(연도와 월 선택 필드)</i>
          </h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/09-forms/0903-input/9.3.05.input_part5_month.html"
                className="min_height_470 mb_result_height_490"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="type month"
                minHeight="470px"
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <code className="font-21-important weight-600 t_darkblue">
              [type="week"]
            </code>{" "}
            <i className="t_444">(연도와 주 선택 필드)</i>
          </h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/09-forms/0903-input/9.3.05.input_part5_week.html"
                className="min_height_470 mb_result_height_490"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="type week"
                minHeight="470px"
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <code className="font-21-important weight-600 t_darkblue">
              [type="time"]
            </code>{" "}
            <i className="t_444">(시간 선택 필드)</i>
          </h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/09-forms/0903-input/9.3.05.input_part5_time.html"
                className="min_height_620 mb_result_height_720"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="type time"
                minHeight="620px"
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
        <img src={IMG.HTML + "/09_html_03_5.png"} alt="input 날짜 및 시간" />
        <figcaption>input 요소 날짜 및 시간</figcaption>
      </figure>
    </>
  );
}

export default InputElementPart5Page;
