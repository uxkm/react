import { Suspense, lazy } from "react";
import { usePageMeta } from "@/components/common/PageMeta";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "span_inline",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: false,
  contentList: true,
  depth3Last: false,
  bottomEditor: true,
};

const PAGE_DATA = {
  title: "대표적인 인라인 요소 - span",
  description:
    "span 요소는 HTML 문서에서 텍스트나 인라인 콘텐츠를 묶기 위한 의미 없는 범용 인라인 컨테이너 태그입니다. 이 페이지에서는 span 요소의 주요 역할, 특징, 사용 예시를 소개합니다.",
  keyword:
    "Markup, HTML, inline elements, 인라인 요소, inline, elements, span, tag",
};

const UkEditorTarget = lazy(() => import("@/components/code/UkEditorTarget"));

function EditorFallback() {
  return <div className="uk_editor min_height_300" aria-hidden />;
}

function SpanInlinePage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>&lt;span&gt;</code> 요소는{" "}
          <b>텍스트나 인라인 요소를 그룹화하기 위한 비시맨틱한 인라인 요소</b>
          로, <b>특정 구간에 스타일이나 기능을 적용할 때 사용됩니다.</b>
          <br />
          의미를 가지지 않는 단순한 컨테이너이므로, <code>class</code>,{" "}
          <code>id</code> 등의 속성과 함께 사용해{" "}
          <b>CSS 스타일링이나 JavaScript 제어의 대상으로 활용</b>됩니다. 문장
          내에서 <b>의미 있는 강조 없이 시각적 또는 기능적 처리</b>를 하기 위한
          최소 단위의 요소로, 주로 <code>&lt;div&gt;</code>의 인라인 버전처럼
          사용됩니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <ol className="mt_l ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>의미 없는 인라인 컨테이너</strong>
            <p>
              <code>&lt;div&gt;</code>가 블록 레벨 요소인 반면,{" "}
              <code>&lt;span&gt;</code>은 인라인 요소로 레이아웃에 영향을 주지
              않고 콘텐츠 일부만 묶을 수 있습니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>스타일링 또는 스크립트 제어용으로 활용</strong>
            <ul className="dot_lst">
              <li>
                CSS의 <code>class</code>, <code>id</code>, <code>style</code>{" "}
                등을 통해 특정 문구에 색상, 폰트, 배경 등 스타일 적용이
                가능합니다.
              </li>
              <li>JavaScript로 일부 텍스트만 조작할 수 있습니다.</li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>구조 변경 없이 스타일 적용 가능</strong>
            <p>
              문서 구조를 바꾸지 않고 특정 구문에 스타일을 적용할 수 있어 매우
              유용합니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>접근성 측면에서는 시맨틱 정보가 없음</strong>
            <p>
              <code>&lt;strong&gt;</code>, <code>&lt;em&gt;</code> 등 의미를
              담은 요소를 먼저 고려하고, 필요할 때 <code>&lt;span&gt;</code>을
              사용하시는 것이 좋습니다.
            </p>
          </li>
        </ol>
      </section>

      <section className="mt_xxl indent">
        <h2 className="ml_mn">
          <i className="t_blue weight-900">span</i>과{" "}
          <i className="t_green weight-900">div</i>의 차이
        </h2>

        <p className="mt_ml">
          <code>&lt;span&gt;</code>과 <code>&lt;div&gt;</code>는 모두{" "}
          <b>HTML에서 요소를 묶는 컨테이너 역할</b>을 하지만,{" "}
          <b>동작 방식과 사용 목적</b>에서 차이가 있습니다.
        </p>
        <div className="table_summary value_200 span_div mt_m">
          <ul className="lst_hd">
            <li className="cell value">구분</li>
            <li className="cell content">
              <code className="weight-600 t_blue">&lt;span&gt;</code>
            </li>
            <li className="cell content">
              <code className="weight-600 t_darkgreen">&lt;div&gt;</code>
            </li>
          </ul>
          <ul className="lst_bd">
            <li>
              <p className="cell value t_black weight-600">요소 유형</p>
              <p className="cell content" data-title="<span>">
                인라인 요소 (inline)
              </p>
              <p className="cell content" data-title="<div>">
                블록 요소 (block)
              </p>
            </li>
            <li>
              <p className="cell value t_black weight-600">기본 배치 방식</p>
              <p className="cell content" data-title="<span>">
                줄 바꿈 없이 <b>텍스트 흐름 안에 배치</b>
              </p>
              <p className="cell content" data-title="<div>">
                <b>새 줄에서 시작</b>하며 전체 너비를 차지
              </p>
            </li>
            <li>
              <p className="cell value t_black weight-600">기본 목적</p>
              <p className="cell content" data-title="<span>">
                텍스트 일부를 <b>작게 묶어 스타일을 적용하거나 조작</b>할 때
                사용
              </p>
              <p className="cell content" data-title="<div>">
                문서의 <b>구조적 구역을 나누는 용도</b>로 사용
              </p>
            </li>
            <li>
              <p className="cell value t_black weight-600">
                포함 가능한 콘텐츠
              </p>
              <p className="cell content" data-title="<span>">
                인라인 요소 또는 텍스트만 포함 가능
              </p>
              <p className="cell content" data-title="<div>">
                인라인 요소와 블록 요소 모두 포함 가능
              </p>
            </li>
            <li>
              <p className="cell value t_black weight-600">
                크기 조절 (<code>width</code>, <code>height</code>)
              </p>
              <p className="cell content" data-title="<span>">
                기본적으로 적용되지 않음 (적용 시 display 변경 필요)
              </p>
              <p className="cell content" data-title="<div>">
                기본적으로 <code>width</code>, <code>height</code>,{" "}
                <code>margin</code>, <code>padding</code> 등 완전한 레이아웃
                조절 가능
              </p>
            </li>
            <li>
              <p className="cell value t_black weight-600">시멘틱 의미</p>
              <p className="cell content" data-title="<span>">
                없음 (비시멘틱 요소)
              </p>
              <p className="cell content" data-title="<div>">
                없음 (비시멘틱 요소)
              </p>
            </li>
            <li>
              <p className="cell value t_black weight-600">주요 사용 예시</p>
              <p className="cell content" data-title="<span>">
                특정 단어나 문장을 강조, 스타일 변경, JavaScript 대상 지정 등
              </p>
              <p className="cell content" data-title="<div>">
                페이지의 헤더, 본문, 사이드바, 푸터 등 영역 구분 및 레이아웃
                설정
              </p>
            </li>
            <li>
              <p className="cell value t_black weight-600">
                브라우저 기본 스타일
              </p>
              <p className="cell content" data-title="<span>">
                줄바꿈 없음, 크기 제한
              </p>
              <p className="cell content" data-title="<div>">
                줄바꿈 발생, 전체 너비 차지, 위아래 마진 존재
              </p>
            </li>
          </ul>
        </div>
        <p className="notice_red mt_ml weight-600">
          웹 페이지의 구조와 레이아웃을 구성할 때는 의미에 맞는 시맨틱 요소 또는{" "}
          <code className="bg_none t_fff weight-600">&lt;div&gt;</code> 요소를
          활용해야 합니다.
          <br />
          <span className="underline">
            <code className="bg_none t_fff weight-600">&lt;span&gt;</code>{" "}
            요소는 인라인 텍스트의 스타일링 용도로 사용되며, 레이아웃을 구성하는
            용도로 사용해서는 안 됩니다.
          </span>
        </p>
      </section>

      <section className="mt_xxl indent">
        <h2 className="ml_mn">
          <i className="t_blue weight-900">span</i> 요소의 주요 용도
        </h2>

        <article className="indent mt_l">
          <h3 className="ml_mn">텍스트 그룹화 및 스타일링</h3>
          <p className="mt_ms">
            CSS 클래스나 인라인 스타일을 적용하여 텍스트의 일부분을 다르게
            표현하고자 할 때 사용합니다.
            <br />
            예를 들어, 특정 단어의 색상 또는 폰트 스타일을 달리하거나, 특정
            텍스트 그룹에 배경색을 적용함으로써 정보의 중요성을 시각적으로
            강조할 수 있습니다.
          </p>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/02-blockInline/2.4.span_inline_ex01.html"
                className="min_height_300 mb_result_height_250"
                result={true}
                mode="htmlmixed"
                theme="ayu-mirage"
                browser="default"
                title="span - 텍스트 스타일링"
                minHeight="300px"
              />
            </Suspense>
          </div>
        </article>

        <article className="indent mt_xl">
          <h3 className="ml_mn" data-conlist-h4="true">
            문맥 추가
          </h3>
          <p className="mt_ms">
            텍스트의 특정 부분에 추가 정보를 제공하기 위해{" "}
            <code>&lt;span&gt;</code>을 사용할 수 있습니다.
            <br />
            또한, HTML에는 시각적으로 보이지 않지만, 정보의 문맥을 추가하여
            스크린 리더기에서는 읽히게 함으러써 웹 페이지의 접근성을 향상시킬 수
            있습니다.
          </p>

          <div className="gap-column-l mt_ml">
            <div className="indent">
              <h4 className="ml_mn">툴팁을 통해 추가 정보 제공</h4>
              <p className="mt_s">
                <code>&lt;span&gt;</code> 요소로 간단한 CSS 툴팁을 구현하여
                사용자가 해당 요소에 마우스를 올렸을 때 추가 정보를 제공할 수
                있습니다.
              </p>
              <div className="view_editor edit_code mt_ms">
                <Suspense fallback={<EditorFallback />}>
                  <UkEditorTarget
                    target="html/02-blockInline/2.4.span_inline_ex02_1.html"
                    className="min_height_350 mb_result_height_300"
                    result={true}
                    mode="htmlmixed"
                    theme="ayu-mirage"
                    browser="default"
                    title="span - 툴팁"
                    minHeight="350px"
                  />
                </Suspense>
              </div>
            </div>

            <div className="indent">
              <h4 className="ml_mn">텍스트 링크에 추가 문맥 제공</h4>
              <p className="mt_s">
                &quot;자세히 보기&quot; 링크에 <code>&lt;span&gt;</code>을
                사용하여 &quot;제품 정보 페이지로 이동합니다.&quot;라는 설명을
                추가합니다.{" "}
                <mark>
                  이 문장은 시각적으로 보이지 않으며 스크린 리더를 사용하는
                  사람들에게만 <b>들립니다.</b>
                </mark>
              </p>
              <div className="view_editor edit_code mt_ms">
                <Suspense fallback={<EditorFallback />}>
                  <UkEditorTarget
                    target="html/02-blockInline/2.4.span_inline_ex02_2.html"
                    className="min_height_350 mb_result_height_200"
                    result={true}
                    mode="htmlmixed"
                    theme="ayu-mirage"
                    browser="default"
                    title="span - 추가 문맥"
                    minHeight="350px"
                  />
                </Suspense>
              </div>
            </div>

            <div className="indent">
              <h4 className="ml_mn">인라인 아이콘 사용</h4>
              <p className="mt_s">
                텍스트와 함께 아이콘을 사용하여 의미를 추가하거나, 아이콘 버튼에
                시각적으로 숨겨진 텍스트를 제공하여 스크린 리더가 읽을 수 있도록
                할 수 있습니다.
                <br />
                아이콘 폰트를 사용하여 이 작업을 수행할 수 있습니다.
              </p>
              <div className="view_editor edit_code mt_ms">
                <Suspense fallback={<EditorFallback />}>
                  <UkEditorTarget
                    target="html/02-blockInline/2.4.span_inline_ex02_3.html"
                    className="min_height_400 mb_result_height_300"
                    result={true}
                    mode="htmlmixed"
                    theme="ayu-mirage"
                    browser="default"
                    title="span - 인라인 아이콘"
                    minHeight="400px"
                  />
                </Suspense>
              </div>
            </div>
          </div>
        </article>

        <article className="indent mt_xl">
          <h3 className="ml_mn">스크립트와의 상호작용</h3>
          <p className="mt_ms">
            <code>&lt;span&gt;</code> 요소를 Javascript와 함께 사용하여 특정
            텍스트를 동적으로 조작하거나 이벤트를 적용하는 데 사용할 수
            있습니다.
          </p>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/02-blockInline/2.4.span_inline_ex03.html"
                className="min_height_350 mb_result_height_270"
                result={true}
                mode="htmlmixed"
                theme="ayu-mirage"
                browser="default"
                title="span - 스크립트 상호작용"
                minHeight="350px"
              />
            </Suspense>
          </div>
        </article>

        <article className="indent mt_xl">
          <h3 className="ml_mn">HTML 전역 속성 사용</h3>
          <p className="mt_ms">
            <code>&lt;span&gt;</code> 요소에 HTML 전역 속성을 사용하여 특정
            텍스트의 추가 정보를 제공할 수 있습니다.
            <br />
            예를 들어, <code>title</code> 속성을 사용하여 추가 정보를 제공하거나
            툴팁으로 표시될 텍스트를 지정할 수 있고, <code>lang</code> 속성을
            사용하여 특정 텍스트가 어떤 언어로 작성되었는지 명시할 수 있습니다.
          </p>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/02-blockInline/2.4.span_inline_ex04.html"
                className="min_height_400 mb_result_height_350"
                result={true}
                mode="htmlmixed"
                theme="ayu-mirage"
                browser="default"
                title="span - HTML 전역 속성"
                minHeight="400px"
              />
            </Suspense>
          </div>
        </article>
      </section>
      <aside className="browser_support mt_xxl" data-tit="span">
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
        <img src={`${IMG.HTML}/02_html_04.png`} alt="span 요소" />
        <figcaption>span 요소</figcaption>
      </figure>
    </>
  );
}

export default SpanInlinePage;
