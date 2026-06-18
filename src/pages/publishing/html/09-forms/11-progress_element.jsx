import { Suspense, lazy } from "react";
import CodeBlock from "@/components/code/CodeBlock";
import { usePageMeta } from "@/components/common/PageMeta";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "progress_element",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
  bottomEditor: true,
};

const PAGE_DATA = {
  title: "progress element",
  description:
    "progress 요소는 HTML 문서에서 작업의 진행 상태를 시각적으로 표시할 때 사용하는 태그로, value와 max 속성을 함께 사용하여 전체 작업 대비 현재 진행된 비율을 나타내며 브라우저는 이를 막대 형태로 렌더링합니다. 이 페이지에서는 progress 요소의 주요 역할 및 특징을 설명하고, progress 요소의 용도와 구조적 위치에 따른 사용 예시를 소개합니다.",
  keyword: "Markup, HTML, tag, elements, progress",
};

const UkEditorTarget = lazy(
  () => import("@/components/code/UkEditorTarget"),
);

function EditorFallback() {
  return <div className="uk_editor min_height_400" aria-hidden />;
}

function ProgressElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>&lt;progress&gt;</code> 요소는{" "}
          <b>작업의 진행 상황을 시각적으로 표시하기 위한 시맨틱 태그</b>로,{" "}
          <b>현재 완료된 양과 전체 작업량을 기반으로 진행률을 표현합니다.</b>
          <br />
          <code>value</code> 속성과 <code>max</code> 속성을 사용해{" "}
          <code>0</code>
          부터 최대값까지의 비율로 진행 상태를 정의하며, 브라우저는 이를{" "}
          <b>막대 그래프로 렌더링</b>합니다.
          <br />
          <code>value</code> 속성을 생략하면{" "}
          <strong>불확정 상태(indeterminate)</strong>로 인식되어 반복
          애니메이션이 나타나며, 이는 로딩 중이나 진행률을 알 수 없는 작업에
          사용됩니다. 주로 파일 업로드, 설문 진행, 데이터 처리 등 사용자
          피드백이 필요한 상황에 활용됩니다.
        </p>
      </blockquote>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <ol className="mt_l ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>진행 상태를 시각적으로 표현 (진행률 바)</strong>
            <p>브라우저에서 자동으로 스타일이 적용된 진행 막대가 표시됩니다.</p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>value와 max로 진행 정도 설정</strong>
            <p>
              예: <code>value="30"</code>과 <code>max="100"</code>이면 30%
              진행률도 표시됩니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>스크립트 없이도 기본 표시 가능</strong>
            <p>속성만으로도 단순한 진행률 표시가 가능합니다.</p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>JavaScript와 함께 동적으로 조작 가능</strong>
            <p>
              JavaScript를 사용하여 <code>value</code> 속성을 동적으로 변경하면,
              진행 상태가 실시간으로 업데이트됩니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>CSS로 디자인 변경 가능하지만 제한적</strong>
            <ul className="dot_lst">
              <li>
                기본적인 색상과 크기 조정은 가능하지만, 브라우저마다 다르게
                스타일링됩니다.
              </li>
              <li>특정 브라우저에서는 커스텀 스타일링이 제한될 수 있습니다.</li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>max 속성이 없으면 기본값은 1로 설정됨</strong>
            <ul className="dot_lst">
              <li>
                <code>value</code> 속성의 기본 단위는 <code>0 ~ 1</code> 범위로
                설정됩니다.
              </li>
              <li>
                <code>max</code> 값을 설정하면 <code>value</code> 값이 해당 범위
                내에서 조정됩니다.
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
          <code>&lt;progress&gt;</code> 요소는 기본적으로 인라인 블록 레벨
          요소이며, 별도의 CSS를 지정하지 않아도 아래와 같은 기본값이
          적용됩니다.
        </p>
        <CodeBlock title="progress element CSS" className="mt_m" language="css">
          {`progress {
  display: inline-block;
  appearance: auto; /* 브라우저 기본 스타일 적용 */
  box-sizing: border-box;
}`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          기본 문법
        </h2>
        <CodeBlock
          title="progress element syntax"
          className="mt_l"
          language="html"
        >
          {`<progress value="50" max="100"></progress>`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn">속성</h2>
        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [value] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;progress value="number"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            현재 진행 상태를 시각적으로 나타내는 값으로, 숫자로 지정됩니다.
            기본값은 <code>0</code>이며, <code>max</code> 속성에 설정된 값 범위
            내에서 변경할 수 있습니다.
            <br />
            값을 지정하지 않으면 불특정 진행 상태(indeterminate)로 간주됩니다.
          </p>
          <CodeBlock
            title="progress 속성 [value]"
            className="mt_m"
            language="html"
          >
            {`<progress value="30" max="100"></progress>`}
          </CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [max] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;progress max="number"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            <code>max</code> 속성은 진행률의 최댓값을 설정하며,{" "}
            <code>value</code> 속성과 함께 사용하여 현재 진행 상태를 백분율(
            <code>%</code>)로 계산할 수 있습니다.
            <br />
            기본값은 <code>1</code>이며, 최대값을 <code>1</code>로 설정할 경우
            속성을 생략해도 동일하게 동작합니다.
          </p>
          <CodeBlock
            title="progress 속성 [max]"
            className="mt_m"
            language="html"
          >
            {`<!--
max값을 생략한 예
max를 생략했기 때문에 max=1로 자동 설정되어 60%로 해석됩니다.
-->
<progress value="0.6"></progress>

<!-- 일반적인 예(max값 지정) -->
<progress value="7" max="10"></progress>`}
          </CodeBlock>
        </article>
      </section>

      <section className="view_editor indent mt_xxl">
        <h2 className="ml_mn ve_tit">예제</h2>
        <article className="mt_l indent">
          <h3 className="ml_mn">기본 진행 바</h3>
          <p className="dp_pc full_screen_code_info mt_ms">
            (Full screen) 버튼을 클릭하여 전체 화면으로 예제를 확인하세요.
          </p>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/09-forms/0911-progress/9.11.progress_element_1.html"
                className="min_height_400 mb_result_height_380"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="기본 진행 바"
                minHeight="400px"
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">JavaScript로 진행률 업데이트</h3>
          <p className="dp_pc full_screen_code_info mt_ms">
            (Full screen) 버튼을 클릭하여 전체 화면으로 예제를 확인하세요.
          </p>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/09-forms/0911-progress/9.11.progress_element_2.html"
                className="min_height_400 mb_result_height_320"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="JavaScript로 진행률 업데이트"
                minHeight="400px"
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">파일 업로드 진행률 시뮬레이션</h3>
          <p className="dp_pc full_screen_code_info mt_ms">
            (Full screen) 버튼을 클릭하여 전체 화면으로 예제를 확인하세요.
          </p>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/09-forms/0911-progress/9.11.progress_element_3.html"
                className="min_height_400 mb_result_height_250"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="파일 업로드 진행률 시뮬레이션"
                minHeight="400px"
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">다른 요소로 &lt;progress&gt; 표현</h3>
          <p className="mt_ms">
            이번 예제는 <code>&lt;progress&gt;</code> 요소 대신{" "}
            <code>&lt;div&gt;</code> 요소로 진행 상태 표시(progress bar)를
            구현한 예제입니다.
            <br />
            디자인을 커스터마이즈하기 위해 실제로 많이 사용되는 방식입니다.
          </p>
          <p className="dp_pc full_screen_code_info mt_s">
            (Full screen) 버튼을 클릭하여 전체 화면으로 예제를 확인하세요.
          </p>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/09-forms/0911-progress/9.11.progress_element_4.html"
                className="min_height_400 mb_result_height_270"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="다른 요소로 progress 표현"
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
            <code>&lt;progress&gt;</code> 요소의 value 속성을 설정하지 않으면{" "}
            <mark>
              <code>"알 수 없는 진행 상태"</code>
            </mark>
            로 표시됩니다.
            <br />
            일부 브라우저에서는 애니메이션이 있는 진행 표시줄로 표시됩니다.
          </li>
          <li>
            기본 스타일을 변경할 수 있지만, 브라우저별 지원이 다릅니다.
            <br />
            <code>::-webkit-progress-bar</code>,{" "}
            <code>::-webkit-progress-value</code> 같은 벤더 프리픽스를 사용해야
            할 수도 있습니다.
          </li>
          <li>
            <code>&lt;progress&gt;</code>는 단순히 시각적 요소일 뿐, 사용자의
            입력은 받지 않습니다.
            <br />폼 전송에 포함되지 않으며, 필요 시 별도 숨겨진{" "}
            <code>&lt;input&gt;</code> 사용이 필요합니다.
          </li>
          <li>
            브라우저마다 기본 스타일이 다릅니다. 완전히 커스텀하고 싶다면{" "}
            <code>&lt;div&gt;</code>로 구현하거나 <code>appearance: none</code>{" "}
            + 배경 설정이 필요합니다.
          </li>
          <li>
            시각장애인을 위한 스크린 리더 지원이 부족할 수 있으므로,{" "}
            <code>aria-valuenow</code>, <code>aria-valuemax</code> 속성을
            추가하면 접근성이 향상됩니다.
          </li>
        </ul>
      </section>
      <aside className="browser_support mt_xxl" data-tit="progress">
        <ul>
          <li className="ie">10+</li>
          <li className="edge">지원</li>
          <li className="chrome">6.0</li>
          <li className="firefox">6.0</li>
          <li className="opera">11.0</li>
          <li className="safari">6.0</li>
        </ul>
      </aside>
      <figure className="img_figure mt_l">
        <img src={IMG.HTML + "/09_html_11.png"} alt="progress 요소" />
        <figcaption>progress 요소</figcaption>
      </figure>
    </>
  );
}

export default ProgressElementPage;
