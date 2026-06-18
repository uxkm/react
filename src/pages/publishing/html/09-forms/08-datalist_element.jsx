import { Suspense, lazy } from "react";
import CodeBlock from "@/components/code/CodeBlock";
import { usePageMeta } from "@/components/common/PageMeta";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "datalist_element",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
  bottomEditor: true,
};

const PAGE_DATA = {
  title: "datalist element",
  description:
    "datalist 요소는 HTML 문서에서 input 요소와 함께 사용되어 사용자 입력에 대한 자동완성 옵션 목록을 제공하는 태그로, 내부에는 여러 개의 option 요소를 포함하며 input 요소의 list 속성과 연결되어 작동합니다. 이 페이지에서는 datalist 요소의 주요 역할 및 특징을 설명하고, datalist 요소의 용도와 구조적 위치에 따른 사용 예시를 소개합니다.",
  keyword: "Markup, HTML, tag, elements, datalist",
};

const UkEditorTarget = lazy(
  () => import("@/components/code/UkEditorTarget"),
);

function EditorFallback() {
  return <div className="uk_editor min_height_400" aria-hidden />;
}

function DatalistElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>&lt;datalist&gt;</code> 요소는 <code>&lt;input&gt;</code>{" "}
          <b>
            요소와 함께 사용되어 자동완성 가능한 선택 목록을 제공하는 시맨틱
            태그
          </b>
          로,{" "}
          <b>
            사용자가 입력하는 값에 대해 미리 정의된 제안 옵션을 보여줄 수 있도록
            도와줍니다.
          </b>
          <br />
          <code>&lt;input&gt;</code> 요소의 <code>list</code> 속성과 연결된{" "}
          <code>&lt;datalist&gt;</code>는 내부에 여러 개의{" "}
          <code>&lt;option&gt;</code> 요소를 포함하며, 사용자가 입력할 때
          자동완성 목록을 제공합니다.
          <br />
          사용자는 <b>직접 값을 입력하거나 목록에서 선택</b>할 수 있으며,{" "}
          <code>&lt;select&gt;</code>와 달리 <b>제한 없이 자유 입력도 가능</b>
          하다는 점이 특징입니다. 반복되는 입력을 줄이고,{" "}
          <b>사용자 편의성과 입력 정확도</b>를 향상시키는 데 유용합니다.
        </p>
      </blockquote>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <ol className="mt_l ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>자동완성 기능 제공</strong>
            <p>
              <code>&lt;datalist&gt;</code>는 <code>&lt;input&gt;</code>과
              연결되어 사용자가 입력 시 미리 정의된 옵션을 자동으로 제안할 수
              있도록 합니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>사용자가 목록 외의 값도 입력 가능</strong>
            <p>
              <code>&lt;select&gt;</code>와 달리 사용자가 목록에 없는 값을 직접
              입력할 수 있습니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>&lt;option&gt; 요소와 함께 사용</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;datalist&gt;</code> 내부에는{" "}
                <code>&lt;option&gt;</code> 요소를 사용하여 자동 완성 목록을
                정의합니다.
              </li>
              <li>
                <code>&lt;option&gt;</code>의 <code>value</code> 속성이 사용자의
                입력값과 비교되어 자동 완성이 작동합니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>드롭다운이지만 &lt;select&gt;와 다름</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;select&gt;</code>는 사용자가 정해진 옵션만 선택
                가능하지만, <code>&lt;datalist&gt;</code>는 제안된 목록 외에도
                자유롭게 입력 가능합니다.
              </li>
              <li>
                예를 들어, <code>&lt;select&gt;</code>는 "사과", "바나나"
                중에서만 선택할 수 있지만, <code>&lt;datalist&gt;</code>는
                "포도"처럼 목록에 없는 값도 입력할 수 있습니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>검색 입력창 등과 함께 사용 가능</strong>
            <p>
              검색 필드에서 추천 검색어 제공 등의 용도로 사용할 수 있습니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>CSS 스타일링 제한</strong>
            <p>
              <code>&lt;datalist&gt;</code> 자체는 CSS로 직접 스타일링할 수
              없으며, 연결된 <code>&lt;input&gt;</code> 요소의 스타일을 변경해야
              합니다.
            </p>
          </li>
        </ol>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          CSS 기본 값
        </h2>
        <p className="mt_l">
          <code>&lt;datalist&gt;</code> 자체는 브라우저에서 기본적으로 표시되지
          않으며, 내부의 <code>&lt;option&gt;</code> 요소가 자동 완성 목록을
          제공하는 역할을 합니다.
          <br />
          <code>&lt;option&gt;</code> 요소의 스타일은 대부분 브라우저 기본
          스타일을 따릅니다.
        </p>
        <CodeBlock title="datalist element CSS" className="mt_m" language="css">
          {`datalist {
  display: none; /* 기본적으로 화면에 표시되지 않음 */
}`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          기본 문법
        </h2>
        <p className="mt_l">
          <code>&lt;datalist&gt;</code> 요소는 반드시 <code>&lt;input&gt;</code>{" "}
          요소와 함께 사용해야 하며, <code>&lt;input&gt;</code> 요소의{" "}
          <code>list</code> 속성의 값을 <code>&lt;datalist&gt;</code> 요소의{" "}
          <code>id</code> 값과 동일하게 지정해야 합니다.
        </p>
        <p className="mt_sm">
          또한, <code>&lt;datalist&gt;</code> 내부의 <code>&lt;option&gt;</code>{" "}
          요소는 값(<code>value</code>)만을 제공하는 용도로 사용되기 때문에,{" "}
          <span className="underline">
            <code>&lt;option&gt;</code> 요소 내에 텍스트가 없다면 태그를 닫지
            않아도 됩니다.
          </span>
        </p>
        <CodeBlock
          title="datalist element syntax"
          className="mt_m"
          language="html"
        >
          {`<input list="fruits" name="fruit"> <!-- <input> 요소의 list 속성값 "fruits"를 -->
<datalist id="fruits">             <!-- <datalist> 요소의 id 값과 동일하게 적용 -->
  <option value="사과"></option>
  <option value="바나나"></option>
  <option value="오렌지"></option>
</datalist>

<!-- option 요소 내에 텍스트가 없기 때문에 태그를 닫지 않아도 유효합니다. -->
<input list="fruits" name="fruit">
<datalist id="fruits">
  <option value="사과">
  <option value="바나나">
  <option value="오렌지">
</datalist>`}
        </CodeBlock>
        <p className="mt_m">
          <code>&lt;password&gt;</code> 타입을 제외하고 <code>placeholder</code>{" "}
          속성을 사용할 수 있는 대부분의 <code>&lt;input&gt;</code> 타입과{" "}
          <code>&lt;datalist&gt;</code>를 함께 사용할 수 있습니다.
        </p>
        <dl className="dl_dot_lst mt_s">
          <dt>
            <code className="weight-600">&lt;datalist&gt;</code>요소와 연계하여
            사용할 수 있는 <code className="weight-600">&lt;input&gt;</code>의{" "}
            <code className="weight-600">type</code> :
          </dt>
          <dd>
            <code>&lt;input type="text"&gt;</code> : 일반 텍스트 입력
          </dd>
          <dd>
            <code>&lt;input type="search"&gt;</code> : 검색창
          </dd>
          <dd>
            <code>&lt;input type="tel"&gt;</code> : 전화번호 입력
          </dd>
          <dd>
            <code>&lt;input type="email"&gt;</code> : 이메일 입력
          </dd>
          <dd>
            <code>&lt;input type="url"&gt;</code> : URL 입력
          </dd>
          <dd>
            <code>&lt;input type="number"&gt;</code> : 숫자 입력
          </dd>
          <dd>
            <code>&lt;input type="range"&gt;</code> : 슬라이더 입력
          </dd>
          <dd>
            <code>&lt;input type="date"&gt;</code> : 날짜 선택
          </dd>
          <dd>
            <code>&lt;input type="month"&gt;</code> : 월 선택
          </dd>
          <dd>
            <code>&lt;input type="week"&gt;</code> : 주 선택
          </dd>
          <dd>
            <code>&lt;input type="time"&gt;</code> : 시간 선택
          </dd>
          <dd>
            <code>&lt;input type="datetime-local"&gt;</code> : 로컬 날짜 및 시간
            선택
          </dd>
          <dd>
            <code>&lt;input type="color"&gt;</code> : 색상 선택 (브라우저에 따라
            다를 수 있음)
          </dd>
        </dl>
        <p className="mt_s underline">
          <code>&lt;input type="password"&gt;</code>는 보안상{" "}
          <code>&lt;datalist&gt;</code>를 통한 자동완성을 지원하지 않지만,{" "}
          <mark>
            브라우저의 비밀번호 저장 기능을 통해 자동 완성될 수 있습니다.
          </mark>
        </p>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn">속성</h2>
        <p className="mt_l">
          <code>&lt;datalist&gt;</code> 요소는{" "}
          <b className="t_black">고유 속성</b>을 가지지 않으며,{" "}
          <mark>
            글로벌 속성(<code>class</code>, <code>id</code>, <code>style</code>,{" "}
            <code>aria-*</code>, <code>data-*</code> 등)만 사용할 수 있습니다.
          </mark>
          <br />위 [<b>기본 문법</b>] 섹션에서 설명한{" "}
          <code>&lt;datalist&gt;</code> 요소의 <code>id</code> 속성은 HTML의
          글로벌 속성으로, <code>&lt;datalist&gt;</code>뿐만 아니라 모든 HTML
          요소에서 사용할 수 있습니다.
        </p>
      </section>

      <section className="view_editor indent mt_xxl">
        <h2 className="ml_mn ve_tit">예제</h2>
        <article className="mt_l indent">
          <h3 className="ml_mn">기본적인 자동완성 목록</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/09-forms/0908-datalist/9.8.datalist_element_1.html"
                className="min_height_430 mb_result_height_200"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="기본적인 자동완성 목록"
                minHeight="430px"
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">일반 텍스트, 검색창, 전화번호 자동완성</h3>
          <p className="dp_pc full_screen_code_info mt_ms">
            (Full screen) 버튼을 클릭하여 전체 화면으로 예제를 확인하세요.
          </p>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/09-forms/0908-datalist/9.8.datalist_element_2.html"
                className="min_height_450 mb_result_height_500"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="일반 텍스트, 검색창, 전화번호 자동완성"
                minHeight="450px"
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">이메일 자동완성</h3>
          <p className="dp_pc full_screen_code_info mt_ms">
            (Full screen) 버튼을 클릭하여 전체 화면으로 예제를 확인하세요.
          </p>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/09-forms/0908-datalist/9.8.datalist_element_3.html"
                className="min_height_450 mb_result_height_380"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="이메일 자동완성"
                minHeight="450px"
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">숫자 자동완성 / 슬라이더 눈금 표시</h3>
          <p className="mt_ms">
            <code>&lt;input type="range"&gt;</code>와{" "}
            <code>&lt;datalist&gt;</code>을 함께 사용하면,{" "}
            <i className="underline">옵션 목록이 나타나는 것이 아니라</i>{" "}
            <mark>
              <b>슬라이더(bar) 아래에 눈금(tick marks)으로 표시됩니다.</b>
            </mark>
          </p>
          <p className="dp_pc full_screen_code_info mt_s">
            (Full screen) 버튼을 클릭하여 전체 화면으로 예제를 확인하세요.
          </p>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/09-forms/0908-datalist/9.8.datalist_element_4.html"
                className="min_height_450 mb_result_height_350"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="숫자 자동완성 / 슬라이더 눈금 표시"
                minHeight="450px"
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">날짜 및 시간 선택 자동 완성</h3>
          <p className="mt_ms">
            <i className="underline">사용자가 달력 또는 시간 아이콘을 클릭</i>
            하면, <code>&lt;datalist&gt;</code>의 <code>&lt;option&gt;</code>
            으로 설정한 값을 우선 선택할 수 있는 UI가 표시됩니다.
            <br />
            단, 사용자가 다른 날짜(월, 주, 시간 등)를 선택하면 해당 입력 필드의
            기본 UI가 나타나며 자유롭게 선택할 수 있습니다.
          </p>
          <p className="dp_pc full_screen_code_info mt_s">
            (Full screen) 버튼을 클릭하여 전체 화면으로 예제를 확인하세요.
          </p>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/09-forms/0908-datalist/9.8.datalist_element_5.html"
                className="min_height_680 mb_result_height_690"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="날짜 및 시간 선택 자동 완성"
                minHeight="680px"
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">색상 선택 자동 완성</h3>
          <p className="dp_pc full_screen_code_info mt_ms">
            (Full screen) 버튼을 클릭하여 전체 화면으로 예제를 확인하세요.
          </p>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/09-forms/0908-datalist/9.8.datalist_element_6.html"
                className="min_height_450 mb_result_height_280"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="색상 선택 자동 완성"
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
            <code>&lt;datalist&gt;</code>는 <code>&lt;select&gt;</code>와 다르게
            강제 선택이 아닙니다.
            <br />
            사용자는 <code>&lt;datalist&gt;</code>의 제안된 옵션을 선택하지 않고
            임의의 값을 입력할 수도 있습니다.
          </li>
          <li>
            CSS를 사용해 <code>&lt;datalist&gt;</code> 내부의{" "}
            <code>&lt;option&gt;</code>을 직접 스타일링할 수 없습니다.
          </li>
          <li>
            모든 최신 브라우저에서 <code>&lt;datalist&gt;</code>가 지원되지만,
            구형 브라우저에서는 동작하지 않을 수 있습니다.
          </li>
          <li>
            <code>&lt;datalist&gt;</code>는 <code>&lt;select&gt;</code>와 달리{" "}
            <code>multiple</code> 속성을 사용할 수 없기 때문에 여러 개의 값을
            동시에 선택할 수 없습니다.
          </li>
          <li>
            일부 모바일 브라우저(특히 iOS의 Safari)에서는{" "}
            <code>&lt;datalist&gt;</code>의 자동 완성 기능이 제한될 수 있습니다.
          </li>
        </ul>
      </section>
      <aside className="browser_support mt_xxl" data-tit="datalist">
        <ul>
          <li className="ie">10+</li>
          <li className="edge">12.0</li>
          <li className="chrome">20.0</li>
          <li className="firefox">4.0</li>
          <li className="opera">9.5</li>
          <li className="safari">12.1</li>
        </ul>
      </aside>
      <figure className="img_figure mt_l">
        <img src={IMG.HTML + "/09_html_08.png"} alt="datalist 요소" />
        <figcaption>datalist 요소</figcaption>
      </figure>
    </>
  );
}

export default DatalistElementPage;
