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
  title: "input element [주요 역할 및 특징]",
  description:
    "input 요소는 사용자로부터 데이터를 입력받을 수 있도록 하는 HTML 태그로, 다양한 입력 타입을 지원하며 폼 요소와 함께 사용되어 데이터를 서버로 전송하는 역할을 합니다. 이 페이지에서는 input 요소의 개념과 주요 기능을 설명하고, input 요소의 모든 type과 속성을 요약하여 소개합니다.",
  keyword: "Markup, HTML, tag, elements, input",
};

const UkEditorTarget = lazy(
  () => import("@/components/code/UkEditorTarget"),
);

function EditorFallback() {
  return <div className="uk_editor min_height_400" aria-hidden />;
}

function InputElementPart1Page() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <InputPartTabs
        active={{
          part1: true,
          part2: false,
          part3: false,
          part4: false,
          part5: false,
        }}
      />

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <ol className="mt_l ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>다양한 입력 유형 지원</strong>
            <p>
              <code>type</code> 속성을 통해 텍스트, 비밀번호, 이메일, 체크박스,
              라디오, 날짜, 파일 등 다양한 입력 필드를 제공할 수 있습니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>폼 요소와 함께 사용됨</strong>
            <p>
              <code>&lt;form&gt;</code> 내부에서 사용되며, <code>name</code>{" "}
              속성을 지정하면 제출 시 데이터가 서버로 전달됩니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>검증 및 제약 가능</strong>
            <p>
              <code>required</code>, <code>maxlength</code>, <code>min</code>,{" "}
              <code>max</code>, <code>pattern</code>으로 입력값 검증을 수행할 수
              있습니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>접근성과 유효성 검사 지원</strong>
            <p>
              <code>label</code> 연결과 브라우저 기본 유효성 검사를 통해
              접근성과 입력 품질을 높일 수 있습니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>사용자 인터페이스 제공</strong>
            <p>
              브라우저는 <code>&lt;input&gt;</code> 타입에 따라 기본 입력 UI를
              자동 렌더링합니다.
            </p>
          </li>
        </ol>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          CSS 기본 값
        </h2>
        <p className="mt_l">
          <code>&lt;input&gt;</code> 요소는 기본적으로 인라인 블록 레벨
          요소이며, 아래와 같은 기본값이 적용됩니다.
        </p>
        <CodeBlock title="input element CSS" className="mt_m" language="css">
          {`input {
  display: inline-block;
  margin: 0;
  padding: 2px;
  border: 1px solid #ccc;
  box-sizing: content-box;
  text-align: left;
}`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          기본 문법
        </h2>
        <CodeBlock
          title="input element syntax"
          className="mt_l"
          language="html"
        >
          {`<!-- 기본 문법 -->
<input type="text" name="username">`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn">속성</h2>
        <blockquote className="uk_note mt_l" role="note">
          <strong className="sound_only">요약 설명</strong>
          <p>
            <b>
              <code>&lt;input&gt;</code> 요소는 HTML에서 가장 많은 속성을 가진
              요소입니다.
            </b>
            <br />
            <code>type</code>에 따라 적용 가능한 속성이 달라지며, 공통 속성과
            타입별 고유 속성을 함께 이해해야 합니다.
          </p>
        </blockquote>

        <article className="mt_xl indent">
          <h3 className="ml_mn" data-conlist-h4="false">
            [공통으로 사용되는 속성]
          </h3>
          <p className="mt_m">
            <mark>
              대부분의 <code>&lt;input&gt;</code> 타입에서 공통으로 사용하는
              속성입니다.
            </mark>
          </p>
          <ul className="dot_lst info_lst gap-column-important-s mt_ms">
            <li>
              <strong>[autofocus]</strong>
              <p>페이지 로드 시 자동 포커스를 설정합니다.</p>
            </li>
            <li>
              <strong>[name]</strong>
              <p>폼 제출 시 데이터 키 이름으로 사용됩니다.</p>
            </li>
            <li>
              <strong>[disabled]</strong>
              <p>입력 필드를 비활성화합니다.</p>
            </li>
            <li>
              <strong>[required]</strong>
              <p>필수 입력 필드로 지정합니다.</p>
            </li>
            <li>
              <strong>[accesskey]</strong>
              <p>접근성 향상을 위한 단축키를 지정합니다.</p>
            </li>
            <li>
              <strong>[autocomplete]</strong>
              <p>브라우저 자동완성 기능을 제어합니다.</p>
            </li>
            <li>
              <strong>[list]</strong>
              <p>
                <code>&lt;datalist&gt;</code>와 연결해 입력 옵션을 제공합니다.
              </p>
            </li>
            <li>
              <strong>[value]</strong>
              <p>초기 값을 지정하며, 버튼 타입에서는 버튼 라벨로 사용됩니다.</p>
            </li>
            <li>
              <strong>[readonly]</strong>
              <p>값 수정은 막고 제출은 허용합니다.</p>
            </li>
            <li>
              <strong>[placeholder]</strong>
              <p>입력 힌트 텍스트를 표시합니다.</p>
            </li>
          </ul>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn" data-conlist-h4="false">
            [기본 입력 필드]
          </h3>
          <p className="mt_m">
            <mark>텍스트 기반 데이터를 입력받는 타입 그룹입니다.</mark>
          </p>
          <p className="mt_m">
            <a
              href="/publishing/html/09-forms/03-input_element_part2"
              target="_blank"
              rel="noreferrer"
              title="새창 열림"
              className="box_link external"
            >
              [기본 입력 필드] 상세 설명 바로가기
            </a>
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn" data-conlist-h4="false">
            [선택 및 조작 요소]
          </h3>
          <p className="mt_m">
            <mark>선택, 업로드, 제출/초기화를 담당하는 타입 그룹입니다.</mark>
          </p>
          <p className="mt_m">
            <a
              href="/publishing/html/09-forms/03-input_element_part3"
              target="_blank"
              rel="noreferrer"
              title="새창 열림"
              className="box_link external"
            >
              [선택 및 조작 요소] 상세 설명 바로가기
            </a>
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn" data-conlist-h4="false">
            [숫자 및 범위]
          </h3>
          <p className="mt_m">
            <mark>
              숫자값 입력과 슬라이더 범위 선택을 위한 타입 그룹입니다.
            </mark>
          </p>
          <p className="mt_m">
            <a
              href="/publishing/html/09-forms/03-input_element_part4"
              target="_blank"
              rel="noreferrer"
              title="새창 열림"
              className="box_link external"
            >
              [숫자 및 범위] 상세 설명 바로가기
            </a>
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn" data-conlist-h4="false">
            [날짜 및 시간]
          </h3>
          <p className="mt_m">
            <mark>날짜와 시간 선택을 위한 타입 그룹입니다.</mark>
          </p>
          <p className="mt_m">
            <a
              href="/publishing/html/09-forms/03-input_element_part5"
              target="_blank"
              rel="noreferrer"
              title="새창 열림"
              className="box_link external"
            >
              [날짜 및 시간] 상세 설명 바로가기
            </a>
          </p>
        </article>
      </section>

      <section className="view_editor indent mt_xxl">
        <h2 className="ml_mn ve_tit">공통으로 사용되는 속성 예제</h2>
        <article className="mt_l indent">
          <h3 className="ml_mn">[value]</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/09-forms/0903-input/9.3.01.input_common_value.html"
                className="min_height_400 mb_result_height_400"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="value"
                minHeight="400px"
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">[disabled]</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/09-forms/0903-input/9.3.01.input_common_disabled.html"
                className="min_height_400 mb_result_height_400"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="disabled"
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
            <code>name</code> 속성이 없으면 해당 입력값은 폼 제출 데이터에
            포함되지 않습니다.
          </li>
          <li>
            입력 목적에 맞는 <code>type</code>을 사용하고, <code>pattern</code>,{" "}
            <code>required</code>로 검증 정책을 보완하세요.
          </li>
          <li>
            접근성을 위해 <code>label</code>과 <code>for</code>를 정확히
            연결하세요.
          </li>
        </ul>
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
          src={IMG.HTML + "/09_html_03_1.png"}
          alt="input 요소 주요 역할 및 특징"
        />
        <figcaption>input 요소 주요 역할 및 특징</figcaption>
      </figure>
    </>
  );
}

export default InputElementPart1Page;
