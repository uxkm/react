import { Suspense, lazy } from "react";
import CodeBlock from "@/components/code/CodeBlock";
import { usePageMeta } from "@/components/common/PageMeta";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "meter_element",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
  bottomEditor: true,
};

const PAGE_DATA = {
  title: "meter element",
  description:
    "meter 요소는 HTML 문서에서 정량적인 측정값이나 분포 상태를 시각적으로 표시할 때 사용하는 태그로, value, min, max, low, high, optimum 등의 속성을 사용하여 현재 값과 기준 범위에 따른 상태를 표현할 수 있으며 브라우저는 이를 막대 그래프로 렌더링합니다. 이 페이지에서는 meter 요소의 주요 역할 및 특징을 설명하고, meter 요소의 용도와 구조적 위치에 따른 사용 예시를 소개합니다.",
  keyword: "Markup, HTML, tag, elements, meter",
};

const UkEditorTarget = lazy(
  () => import("@/components/code/UkEditorTarget"),
);

function EditorFallback() {
  return <div className="uk_editor min_height_400" aria-hidden />;
}

function MeterElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>&lt;meter&gt;</code> 요소는{" "}
          <b>범위 내의 측정값이나 비율을 시각적으로 표시하는 시맨틱 태그</b>로,{" "}
          <b>
            성능 수치, 점수, 배터리 잔량 등과 같이 정량적인 수치를 표현할 때
            사용됩니다.
          </b>
          <br />
          <code>value</code> 속성과 함께 <code>min</code>, <code>max</code>,{" "}
          <code>low</code>, <code>high</code>, <code>optimum</code> 등의 속성을
          지정하여 <b>수치의 위치와 의미를 더 정밀하게 제어</b>할 수 있습니다.
          브라우저는 <code>&lt;meter&gt;</code> 요소를 막대 그래프로 시각화하며,
          각 값의 영역에 따라 시각적 강조(예: 경고색, 정상 범위 등)를 자동으로
          적용할 수 있습니다.
          <br />
          <b>
            진행 상황을 나타내는 <code>&lt;progress&gt;</code>와는 달리,{" "}
            <code>&lt;meter&gt;</code>는 정확한 수치를 평가하거나 상태를
            나타내는 데 적합합니다.
          </b>
        </p>
      </blockquote>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <ol className="mt_l ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>측정된 값 표시</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;meter&gt;</code> 요소는 특정 범위 내에서 측정된 값을
                시각적으로 표현합니다.
              </li>
              <li>
                예를 들어, 사용자의 점수나 파일 용량을 특정 범위 안에서 표시할
                수 있습니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>임계값 설정 가능 (low, high, optimum)</strong>
            <p>
              기준에 따라 좋은 값(정상), 나쁜 값(경고), 주의 값(위험) 등을
              시각적으로 표현할 수 있습니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>정적인 정보 표현용</strong>
            <p>
              <code>&lt;meter&gt;</code> 요소는 폼 제출용이 아닙니다. 사용자가
              값을 입력하거나 변경할 수 없습니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>그래픽적으로 표시</strong>
            <ul className="dot_lst">
              <li>진행 상황을 막대 형태로 시각적으로 표시합니다.</li>
              <li>
                기본적으로 브라우저의 스타일에 따라 색상과 막대 길이가 다를 수
                있습니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>범위가 고정된 값일 경우 사용</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;meter&gt;</code> 요소는 정적인 범위와 동적 값을
                표시하는 데 적합합니다.
              </li>
              <li>
                예를 들어, 정해진 범위(0 ~ 100점)에서 현재 점수를 표시하는
                용도로 유용합니다.
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
          <code>&lt;meter&gt;</code> 요소는 기본적으로 인라인 블록 레벨
          요소이며, 별도의 CSS를 지정하지 않아도 아래와 같은 기본값이
          적용됩니다.
        </p>
        <CodeBlock title="meter element CSS" className="mt_m" language="css">
          {`meter {
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
          title="meter element syntax"
          className="mt_l"
          language="html"
        >
          {`<meter value="0.7" min="0" max="1">70%</meter> <!-- 기본 문법 -->`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn">속성</h2>
        <article className="mt_l indent dp_pc">
          <h3 className="ml_mn t_blue">
            <code className="font-21-important t_blue weight-600">
              &lt;meter&gt;
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
                  <code className="t_darkgreen">value</code>{" "}
                  <i className="t_darkgreen">[필수]</i>
                </p>
                <p className="cell content">현재 측정된 값</p>
              </li>
              <li>
                <p className="cell value">
                  <code>min</code>
                </p>
                <p className="cell content">값의 최솟값</p>
              </li>
              <li>
                <p className="cell value">
                  <code>max</code>
                </p>
                <p className="cell content">값의 최댓값</p>
              </li>
              <li>
                <p className="cell value">
                  <code>low</code>
                </p>
                <p className="cell content">낮은 기준값 (주의 영역 시작)</p>
              </li>
              <li>
                <p className="cell value">
                  <code>high</code>
                </p>
                <p className="cell content">높은 기준값 (주의 영역 종료)</p>
              </li>
              <li>
                <p className="cell value">
                  <code>optimum</code>
                </p>
                <p className="cell content">이상적인 값 (좋음의 기준)</p>
              </li>
              <li>
                <p className="cell value">
                  <code>form</code>
                </p>
                <p className="cell content">
                  연결할 <code>&lt;form&gt;</code> ID
                </p>
              </li>
            </ul>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [value] <i className="attr_required">필수</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;meter value="number"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            현재 측정된 값을 나타내며, 숫자로 지정됩니다. 반드시{" "}
            <code>min</code>과 <code>max</code> 범위 내의 값이어야 합니다.
          </p>
          <CodeBlock
            title="meter 속성 [value]"
            className="mt_m"
            language="html"
          >{`<!-- value -->
<meter value="70" min="0" max="100"></meter>`}</CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [min] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;meter min="number"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            최소값을 설정하며,{" "}
            <mark>
              기본값은 <code>0</code>입니다.
            </mark>
            <br />
            <code>value</code> 속성이 <code>min</code> 값보다 작으면 자동으로{" "}
            <code>min</code> 값이 <code>value</code> 값으로 사용됩니다.
          </p>
          <CodeBlock
            title="meter 속성 [min]"
            className="mt_m"
            language="html"
          >{`<meter value="30" min="0" max="100"></meter>

<!-- 미적용 시 자동 0으로 적용 -->
<meter value="0.5" max="1"></meter>`}</CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [max] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;meter max="number"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            최대값을 설정하며,{" "}
            <mark>
              기본값은 <code>1</code>입니다.
            </mark>
            <br />
            <code>value</code> 속성이 <code>max</code> 값보다 크면 자동으로{" "}
            <code>max</code> 값이 <code>value</code> 값으로 사용됩니다.
          </p>
          <CodeBlock
            title="meter 속성 [max]"
            className="mt_m"
            language="html"
          >{`<meter value="30" min="0" max="100"></meter>

<!-- 미적용 시 자동 1로 적용 -->
<meter value="0.5" min="0"></meter>`}</CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [low] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;meter low="number"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            <mark>
              <code>low</code>값은 최소(<code>min</code>)~최대(<code>max</code>)
              범위 내에서 상대적인 기준점을 결정하는 역할을 하기 때문에{" "}
              <code>min</code>과 <code>max</code> 속성이 반드시 필요합니다.
            </mark>
          </p>
          <CodeBlock
            title="meter 속성 [low]"
            className="mt_m"
            language="html"
          >{`<!-- low -->
<meter value="20" min="0" max="100" low="30"></meter>`}</CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [high] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;meter high="number"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            <mark>
              <code>high</code>값은 최소(<code>min</code>)~최대(<code>max</code>
              ) 범위 내에서 상대적인 기준점을 결정하는 역할을 하기 때문에{" "}
              <code>min</code>과 <code>max</code> 속성이 반드시 필요합니다.
            </mark>
          </p>
          <CodeBlock
            title="meter 속성 [high]"
            className="mt_m"
            language="html"
          >{`<!-- high -->
<meter value="80" min="0" max="100" low="30" high="70"></meter>`}</CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [optimum] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;meter optimum="number"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            최적의 값을 설정하며, 이 값에 가까울수록 긍정적인 상태로 간주됩니다.
            <br />
            <code>optimum</code> 값은 사용자가 추구하는 이상적인 상태를
            나타내며,{" "}
            <b>
              브라우저는 이 값을 기준으로 긍정적인 스타일을 적용할 수 있습니다.
            </b>
          </p>
          <CodeBlock
            title="meter 속성 [optimum]"
            className="mt_m"
            language="html"
          >{`<!-- optimum -->
<meter value="85" min="0" max="100" optimum="90"></meter>`}</CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [form] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;meter form="form 요소의 id"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            <code>&lt;meter&gt;</code> 요소의 <code>form</code> 속성에{" "}
            <code>&lt;form&gt;</code> 요소의 id와 같은 값을 지정하여,{" "}
            <code>&lt;meter&gt;</code> 요소가 <code>&lt;form&gt;</code> 요소
            내부에 없더라도 <code>&lt;form&gt;</code>의 데이터로 제출되도록
            설정할 수 있습니다.
          </p>
          <CodeBlock
            title="meter 속성 [form]"
            className="mt_m"
            language="html"
          >{`<form id="scoreForm" action="/submit">
  <button>제출</button>
</form>

<meter value="75" min="0" max="100" form="scoreForm"></meter>`}</CodeBlock>
        </article>
      </section>

      <section className="view_editor indent mt_xxl">
        <h2 className="ml_mn ve_tit">예제</h2>
        <article className="mt_l indent">
          <h3 className="ml_mn">기본 사용 예제</h3>
          <p className="mt_ms">
            <code>min</code>, <code>max</code> 속성을 활용한{" "}
            <code>&lt;meter&gt;</code> 요소의 기본 사용 예제입니다.
          </p>
          <p className="dp_pc full_screen_code_info mt_s">
            (Full screen) 버튼을 클릭하여 전체 화면으로 예제를 확인하세요.
          </p>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/09-forms/0912-meter/9.12.meter_element_1.html"
                className="min_height_400 mb_result_height_250"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="기본 사용 예제"
                minHeight="400px"
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">임계값 활용 예제</h3>
          <p className="mt_ms">
            <b>[기본 사용 예제]</b>에서 <code>low</code>, <code>high</code>,{" "}
            <code>optimum</code> 속성을 추가하여 배터리의 상태를 시각적으로
            구분하여 표현하는 예제입니다.
          </p>
          <p className="dp_pc full_screen_code_info mt_s">
            (Full screen) 버튼을 클릭하여 전체 화면으로 예제를 확인하세요.
          </p>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/09-forms/0912-meter/9.12.meter_element_2.html"
                className="min_height_400 mb_result_height_220"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="임계값 활용 예제"
                minHeight="400px"
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">파일 업로드 진행률 / 저장공간 사용량</h3>
          <p className="dp_pc full_screen_code_info mt_ms">
            (Full screen) 버튼을 클릭하여 전체 화면으로 예제를 확인하세요.
          </p>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/09-forms/0912-meter/9.12.meter_element_3.html"
                className="min_height_450 mb_result_height_410"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="파일 업로드 진행률 / 저장공간 사용량"
                minHeight="450px"
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
            <code>value</code> 속성은 필수입니다.
            <br />
            <code>&lt;meter&gt;</code> 요소를 사용할 때는 반드시{" "}
            <code>value</code> 값을 설정해야 합니다. <code>value</code>가 없을
            경우 아무 것도 표시되지 않거나 기본값(<code>0</code>)으로 처리될 수
            있습니다.
          </li>
          <li>
            사용자 입력을 받는 용도가 아닙니다.
            <br />
            <code>&lt;input&gt;</code>이나 <code>&lt;progress&gt;</code>와 달리,{" "}
            <code>&lt;meter&gt;</code>는 정적인 정보(읽기 전용)를 보여주는
            용도로만 사용됩니다.
          </li>
          <li>
            <code>min</code>, <code>max</code>는 생략 가능하지만 명시하는 것이
            좋습니다.
            <br />
            생략 시 기본값이 <code>min=0</code>, <code>max=1</code>로 설정되며,
            실수로 정수 범위에 값을 넣으면 비율이 왜곡될 수 있습니다.
          </li>
          <li>
            동적인 값에 적합하지 않습니다. <code>&lt;meter&gt;</code>는 정적
            데이터를 나타내는 데 적합하며, 진행률처럼 값이 자주 변하는 경우에는{" "}
            <code>&lt;progress&gt;</code> 요소가 더 적합합니다.
          </li>
          <li>
            <code>&lt;meter&gt;</code> 요소는 각 브라우저에서 다르게 스타일링될
            수 있습니다. 스타일을 일관되게 유지하려면 CSS를 사용하여
            커스터마이징할 필요가 있을 수 있습니다.
          </li>
        </ul>
      </section>
      <aside className="browser_support mt_xxl" data-tit="meter">
        <ul>
          <li className="ie false">지원안함</li>
          <li className="edge">지원</li>
          <li className="chrome">6.0</li>
          <li className="firefox">16.0</li>
          <li className="opera">11.0</li>
          <li className="safari">6.0</li>
        </ul>
      </aside>
      <figure className="img_figure mt_l">
        <img src={IMG.HTML + "/09_html_12.png"} alt="meter 요소" />
        <figcaption>meter 요소</figcaption>
      </figure>
    </>
  );
}

export default MeterElementPage;
