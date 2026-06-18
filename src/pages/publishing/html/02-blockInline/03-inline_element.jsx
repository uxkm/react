import { Suspense, lazy } from "react";
import { usePageMeta } from "@/components/common/PageMeta";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "inline_element",
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
  title: "인라인 요소",
  description:
    "인라인 요소는 HTML 문서에서 줄바꿈 없이 한 줄 안에 다른 요소들과 나란히 배치되는 요소를 의미합니다. 이 페이지에서는 인라인 요소의 특징과 분류, 대표적인 태그들을 소개합니다.",
  keyword:
    "UXKM, uxkm, Markup, inline elements, inline level elements, elements, 인라인 요소, 인라인 요소의 종류",
};

const UkEditorTarget = lazy(() => import("@/components/code/UkEditorTarget"));

function EditorFallback() {
  return <div className="uk_editor min_height_350" aria-hidden />;
}

function InlineElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          인라인 요소(Inline element)는 HTML 문서에서{" "}
          <b>
            자신이 필요한 콘텐츠 영역만 차지하며 줄바꿈 없이 한 줄 안에서 다른
            요소들과 나란히 배치되는 시맨틱 요소
          </b>
          입니다.
          <br />
          주로 <b>문장 내에서 텍스트의 일부분에 의미를 부여</b>하거나{" "}
          <b>스타일을 적용하는 데 사용</b>되며, 대표적으로{" "}
          <code>&lt;span&gt;</code>, <code>&lt;a&gt;</code>,{" "}
          <code>&lt;strong&gt;</code>, <code>&lt;em&gt;</code> 등이 있습니다.
          <br />
          인라인 요소는{" "}
          <b>
            블록 요소와 달리 너비와 높이, 상하 여백(
            <code className="weight-600">margin</code>/
            <code className="weight-600">padding</code>)의 설정이 제한적
          </b>
          이며, 기본적으로는 콘텐츠 크기에 따라 영역이 결정됩니다. 또한{" "}
          <b>
            내부에 다른 인라인 요소는 포함할 수 있지만, 블록 요소는 포함할 수
            없습니다.
          </b>
          <br />
          브라우저는 인라인 요소를{" "}
          <b>주변 텍스트 흐름에 따라 자연스럽게 배치</b>하며, 하이퍼링크 생성,
          강조, 스타일 적용 등 <b>문장 내부의 세부 표현에 주로 활용</b>됩니다.
        </p>
        <p className="mt_s">
          인라인 요소의 <code>display</code> 속성 값은 기본적으로{" "}
          <code>inline</code> 입니다.
        </p>
      </blockquote>

      <section className="mt_xxl indent">
        <h2 className="ml_mn">인라인 요소 분류 및 대표 태그</h2>

        <article className="indent mt_l">
          <h3 className="ml_mn t_blue">텍스트 의미 및 강조 요소</h3>
          <ul className="mt_m dot_lst">
            <li>
              <code className="t_darkblue weight-600">&lt;span&gt;</code> : 의미
              없는 일반적인 인라인 컨테이너
            </li>
            <li>
              <code className="t_darkblue weight-600">&lt;strong&gt;</code> :
              중요하거나 강조할 텍스트 (기본적으로 굵게 표시)
            </li>
            <li>
              <code className="t_darkblue weight-600">&lt;em&gt;</code> : 문맥상
              강조되는 텍스트 (기본적으로 기울임)
            </li>
            <li>
              <code className="t_darkblue weight-600">&lt;b&gt;</code> : 단순
              시각적 강조(굵게), 의미 강조는 없음
            </li>
            <li>
              <code className="t_darkblue weight-600">&lt;i&gt;</code> : 단순
              시각적 구분(기울임), 기술 용어, 외래어 등
            </li>
            <li>
              <code className="t_darkblue weight-600">&lt;mark&gt;</code> : 검색
              결과나 주목할 텍스트 강조 (기본적으로 배경색 표시)
            </li>
            <li>
              <code className="t_darkblue weight-600">&lt;small&gt;</code> : 덜
              중요한 정보나 부가 설명 (작은 글씨로 표시)
            </li>
            <li>
              <code className="t_darkblue weight-600">&lt;sub&gt;</code> : 아래
              첨자
            </li>
            <li>
              <code className="t_darkblue weight-600">&lt;sup&gt;</code> : 위
              첨자
            </li>
            <li>
              <code className="t_darkblue weight-600">&lt;s&gt;</code> : 더 이상
              유효하지 않은 정보 (취소선)
            </li>
          </ul>
        </article>

        <article className="indent mt_xl">
          <h3 className="ml_mn t_blue">인용 및 참조 요소</h3>
          <ul className="mt_m dot_lst">
            <li>
              <code className="t_darkblue weight-600">&lt;q&gt;</code> : 짧은
              인라인 인용 (자동으로 따옴표 표시)
            </li>
            <li>
              <code className="t_darkblue weight-600">&lt;cite&gt;</code> :
              저작물의 제목이나 출처
            </li>
            <li>
              <code className="t_darkblue weight-600">&lt;abbr&gt;</code> : 약어
              (전체 설명은 <code>title</code> 속성으로 제공)
            </li>
            <li>
              <code className="t_darkblue weight-600">&lt;dfn&gt;</code> : 용어
              정의 시 처음 등장하는 단어
            </li>
            <li>
              <code className="t_darkblue weight-600">&lt;time&gt;</code> :
              날짜나 시간을 표현 (<code>datetime</code> 속성 활용)
            </li>
          </ul>
        </article>

        <article className="indent mt_xl">
          <h3 className="ml_mn t_blue">코드 및 사용자 입력 관련 요소</h3>
          <ul className="mt_m dot_lst">
            <li>
              <code className="t_darkblue weight-600">&lt;code&gt;</code> : 코드
              조각 표시 (고정폭 글꼴로 렌더링)
            </li>
            <li>
              <code className="t_darkblue weight-600">&lt;samp&gt;</code> :
              프로그램 출력 결과
            </li>
            <li>
              <code className="t_darkblue weight-600">&lt;kbd&gt;</code> :
              사용자 입력(예: 키보드 입력)
            </li>
            <li>
              <code className="t_darkblue weight-600">&lt;var&gt;</code> :
              수학식이나 코드에서의 변수 이름
            </li>
          </ul>
        </article>

        <article className="indent mt_xl">
          <h3 className="ml_mn t_blue">웹 문서 처리 관련 요소</h3>
          <ul className="mt_m dot_lst">
            <li>
              <code className="t_darkblue weight-600">&lt;a&gt;</code> :
              하이퍼링크
            </li>
            <li>
              <code className="t_darkblue weight-600">&lt;wbr&gt;</code> :
              줄바꿈 가능 지점을 명시
            </li>
            <li>
              <code className="t_darkblue weight-600">&lt;bdi&gt;</code> :
              텍스트 방향 자동 감지 (혼합 언어 콘텐츠 대응)
            </li>
            <li>
              <code className="t_darkblue weight-600">&lt;bdo&gt;</code> :
              텍스트 방향 강제 지정 (dir 속성 필요)
            </li>
          </ul>
        </article>

        <article className="indent mt_xl">
          <h3 className="ml_mn t_blue">입력 및 상호작용 관련 인라인 요소</h3>
          <p className="mt_ms">
            일부 폼 요소(<code>&lt;input&gt;</code>, <code>&lt;select&gt;</code>
            , <code>&lt;textarea&gt;</code>, <code>&lt;button&gt;</code>)는{" "}
            <b className="underline">
              기본적으로 인라인-블록(inline-block) 특성
            </b>
            을 가지며, 인라인처럼 배치되면서 블록처럼 크기 지정이 가능합니다.
          </p>
          <ul className="mt_m dot_lst">
            <li>
              <code className="t_darkblue weight-600">&lt;label&gt;</code> : 폼
              입력 요소에 대한 설명
            </li>
            <li>
              <code className="t_darkblue weight-600">&lt;input&gt;</code> :
              다양한 형태의 사용자 입력 필드
            </li>
            <li>
              <code className="t_darkblue weight-600">&lt;select&gt;</code> :
              드롭다운 목록
            </li>
            <li>
              <code className="t_darkblue weight-600">&lt;textarea&gt;</code> :
              여러 줄 텍스트 입력 필드
            </li>
            <li>
              <code className="t_darkblue weight-600">&lt;button&gt;</code> :
              버튼
            </li>
          </ul>
        </article>
      </section>

      <section className="mt_xxl indent">
        <h2 className="ml_mn">인라인 요소의 특징</h2>

        <blockquote className="uk_note mt_xl" role="note">
          <strong className="sound_only">요약 설명</strong>
          <p>
            인라인 요소(Inline-level element)는{" "}
            <b>줄 바꿈 없이 텍스트 흐름 안에 자연스럽게 배치</b>되며,{" "}
            <b>자신의 콘텐츠 크기만큼만 공간을 차지합니다.</b>
            주로 텍스트 강조나 링크처럼 문장 일부에 사용되며,{" "}
            <b>인라인 요소 내부에는 블록 요소를 포함할 수 없습니다.</b>
          </p>
        </blockquote>

        <article className="tit_h3 weight-400-before indent mt_xl">
          <h3 className="ml_mn t_blue">수평적 배치</h3>
          <p className="mt_ms">
            인라인 요소들은 수평적으로 한 줄 안에 나란히 표시되며,{" "}
            <mark>
              화면이 작아 수평적인 공간이 부족할 경우 자동 줄 바꿈 되어
              표시됩니다.
            </mark>
          </p>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/02-blockInline/2.3.inline_element_1.html"
                className="min_height_380 mb_result_height_200"
                result={true}
                mode="htmlmixed"
                theme="ayu-mirage"
                browser="default"
                title="인라인 요소 - 수평적 배치"
                minHeight="380px"
              />
            </Suspense>
          </div>
        </article>

        <article className="tit_h3 weight-400-before indent mt_xl">
          <h3 className="ml_mn t_blue">새로운 줄 생성 없음</h3>
          <p className="mt_ms">
            <code>&lt;p&gt;</code> 요소(블록 요소)를 사용하면 텍스트가 자동으로
            줄 바꿈 되지만,{" "}
            <mark>
              <code>&lt;span&gt;</code> 요소(인라인 요소)를 사용해도 텍스트의 줄
              바꿈이 자동으로 되지 않습니다.
            </mark>
          </p>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/02-blockInline/2.3.inline_element_2.html"
                className="min_height_400 mb_result_height_250"
                result={true}
                mode="htmlmixed"
                theme="ayu-mirage"
                browser="default"
                title="인라인 요소 - 새로운 줄 생성 없음"
                minHeight="400px"
              />
            </Suspense>
          </div>
        </article>

        <article className="tit_h3 weight-400-before indent mt_xl">
          <h3 className="ml_mn t_blue">텍스트 흐름에 따라 배치</h3>
          <p className="mt_ms">
            인라인 요소들은 주변 텍스트 흐름에 따라 배치되어 텍스트와 자연스럽게
            표시됩니다.
          </p>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/02-blockInline/2.3.inline_element_3.html"
                className="min_height_320 mb_result_height_200"
                result={true}
                mode="htmlmixed"
                theme="ayu-mirage"
                browser="default"
                title="인라인 요소 - 텍스트 흐름"
                minHeight="320px"
              />
            </Suspense>
          </div>
        </article>

        <article className="tit_h3 weight-400-before indent mt_xl">
          <h3 className="ml_mn t_blue">너비와 높이 조정 불가능</h3>
          <p className="mt_ms">
            인라인 요소는 기본적으로 내부 컨텐츠에 맞게 크기가 결정되므로 너비와
            높이를 직접 설정할 수 없습니다.
          </p>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/02-blockInline/2.3.inline_element_4.html"
                className="min_height_310 mb_result_height_200"
                result={true}
                mode="htmlmixed"
                theme="ayu-mirage"
                browser="default"
                title="인라인 요소 - 너비/높이 불가"
                minHeight="310px"
              />
            </Suspense>
          </div>
          <p className="mt_m">
            위 예제를 개발자 모드(F12 or Context 메뉴 &gt; 검사)로 확인해 보면
            해당 <code>&lt;span&gt;</code> 요소는 인라인 요소이기에{" "}
            <code>width</code>, <code>height</code>가 비활성 되어 있는 것을
            확인할 수 있습니다.
          </p>
          <p className="mt_m">
            <img
              src={`${IMG.HTML}/inline_el_width_height.png`}
              alt="저장소 주소 확인"
              className="image_border_black"
            />
          </p>

          <p className="mt_m">
            <mark>
              단, CSS를 사용하여 요소의 display 속성을 변경하여 조정이
              가능하도록 할 수 있습니다.
            </mark>
          </p>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/02-blockInline/2.3.inline_element_4_2.html"
                className="min_height_310 mb_result_height_250"
                result={true}
                mode="htmlmixed"
                theme="ayu-mirage"
                browser="default"
                title="인라인 요소 - inline-block"
                minHeight="310px"
              />
            </Suspense>
          </div>
          <p className="mt_m">
            위 예제를 개발자 모드(F12 or Context 메뉴 &gt; 검사)로 확인해 보면
            해당 <code>&lt;span&gt;</code> 요소의 <code>display</code> 속성을{" "}
            <code>inline-block</code>으로 설정해서 <code>width</code>,{" "}
            <code>height</code>가 활성 되고 블록 요소처럼 너비와 높이가 설정되어
            있는 것을 확인할 수 있습니다.
          </p>
          <p className="mt_m">
            <img
              src={`${IMG.HTML}/inline_el_width_height2.png`}
              alt="저장소 주소 확인"
              className="image_border_black"
            />
          </p>
        </article>

        <article className="tit_h3 weight-400-before indent mt_xl">
          <h3 className="ml_mn t_blue">상하 여백 조정 어려움</h3>
          <p className="mt_ms">
            인라인 요소는 좌우 여백의 조정은 가능하지만, 일반적으로 상하 여백을
            직접 조절하기 어렵습니다.
          </p>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/02-blockInline/2.3.inline_element_5.html"
                className="min_height_390 mb_result_height_400"
                result={true}
                mode="htmlmixed"
                theme="ayu-mirage"
                browser="default"
                title="인라인 요소 - 상하 여백"
                minHeight="390px"
              />
            </Suspense>
          </div>
        </article>

        <article className="tit_h3 weight-400-before indent mt_xl">
          <h3 className="ml_mn t_blue">
            인라인 요소 내부에 블록 요소가 포함될 수 없음
          </h3>
          <p className="mt_ms">
            인라인 요소 내부에 인라인 요소가 포함될 수 있지만, 블록 요소는
            포함될 수 없습니다.
            <br />
            <mark>
              단, HTML5 환경에서는 <code>&lt;a&gt;</code> 요소 내부에 블록
              요소가 포함될 수 있습니다.
            </mark>
          </p>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/02-blockInline/2.3.inline_element_6.html"
                className="min_height_320 mb_result_height_250"
                result={true}
                mode="htmlmixed"
                theme="ayu-mirage"
                browser="default"
                title="인라인 요소 - 블록 포함 제약"
                minHeight="320px"
              />
            </Suspense>
          </div>
        </article>

        <article className="tit_h3 weight-400-before indent mt_xl">
          <h3 className="ml_mn t_blue">텍스트 처리 용이</h3>
          <p className="mt_ms">
            인라인 요소를 텍스트의 특정 부분에 대해 강조 또는 스타일링 하기 위해
            사용할 수 있습니다.
            <br />
            텍스트를 강조하거나 특정 부분을 스타일링하는 것은 웹페이지의
            시각적인 효과를 높일 수 있습니다.
          </p>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/02-blockInline/2.3.inline_element_7.html"
                className="min_height_370 mb_result_height_220"
                result={true}
                mode="htmlmixed"
                theme="ayu-mirage"
                browser="default"
                title="인라인 요소 - 텍스트 처리"
                minHeight="370px"
              />
            </Suspense>
          </div>
        </article>
      </section>

      <figure className="img_figure mt_l">
        <img src={`${IMG.HTML}/02_html_03.png`} alt="인라인 요소" />
        <figcaption>인라인 요소</figcaption>
      </figure>
    </>
  );
}

export default InlineElementPage;
