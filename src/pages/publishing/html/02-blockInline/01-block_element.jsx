import { Suspense, lazy } from "react";
import { usePageMeta } from "@/components/common/PageMeta";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "block_element",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: false,
  contentList: true,
  depth3Last: false,
  bottomEditor: true,
};

const UkEditorTarget = lazy(() => import("@/components/code/UkEditorTarget"));

function EditorFallback() {
  return <div className="uk_editor min_height_350" aria-hidden />;
}

const PAGE_DATA = {
  title: "블록 요소",
  description:
    "블록 요소는 HTML 문서에서 자신의 앞뒤에 줄바꿈을 일으키며, 수직으로 쌓이는 구조를 형성하는 태그입니다. 이 페이지에서는 블록 요소의 특징과 분류, 대표적인 태그들을 소개합니다.",
  keyword:
    "UXKM, uxkm, Markup, block elements, block level elements, elements, 블록 요소, 블록 요소의 종류",
};

function BlockElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          블록 요소는 HTML 문서에서{" "}
          <b>콘텐츠를 구조화하고 레이아웃을 구성하는 데 사용되는 시맨틱 요소</b>
          로,
          <b>
            일반적으로 새로운 줄에서 시작하며 부모 요소의 전체 가로 너비를
            차지합니다.
          </b>
          <br />
          또한 기본적으로 <b>너비뿐 아니라 높이</b>도 가질 수 있어,{" "}
          <b>시각적인 영역을 명확히 설정</b>할 수 있습니다. 제목, 단락, 목록,
          섹션 등과 같은 요소들이 여기에 속하며,
          <b>내부에는 다른 블록 요소나 인라인 요소를 자유롭게 포함</b>할 수
          있습니다. 이러한 특성 덕분에 블록 요소는 문서의 논리적 구획을 나누고,
          웹 페이지의 시각적 흐름과 구조를 정의하는 데 핵심적인 역할을 합니다.
        </p>
        <p className="mt_s">
          블록 요소의 <code>display</code> 속성 값은 기본적으로{" "}
          <code>block</code> 입니다.
        </p>
      </blockquote>

      <section className="mt_xxl indent">
        <h2 className="ml_mn">블록 요소 분류 및 대표 태그</h2>

        <article className="indent mt_l">
          <h3 className="ml_mn t_blue">시맨틱 구조 요소</h3>
          <ul className="mt_m dot_lst">
            <li>
              <code className="t_darkblue weight-600">&lt;header&gt;</code> :
              문서나 섹션의 머리말
            </li>
            <li>
              <code className="t_darkblue weight-600">&lt;nav&gt;</code> : 주요
              탐색 링크 그룹
            </li>
            <li>
              <code className="t_darkblue weight-600">&lt;main&gt;</code> :
              문서의 주요 콘텐츠 영역
            </li>
            <li>
              <code className="t_darkblue weight-600">&lt;section&gt;</code> :
              주제를 가진 구획
            </li>
            <li>
              <code className="t_darkblue weight-600">&lt;article&gt;</code> :
              독립적인 콘텐츠 단위 (예: 게시글)
            </li>
            <li>
              <code className="t_darkblue weight-600">&lt;aside&gt;</code> :
              보조 콘텐츠 영역 (광고, 관련 링크 등)
            </li>
            <li>
              <code className="t_darkblue weight-600">&lt;footer&gt;</code> :
              문서나 섹션의 바닥글
            </li>
          </ul>
        </article>

        <article className="indent mt_xl">
          <h3 className="ml_mn t_blue">텍스트 구조 요소</h3>
          <ul className="mt_m dot_lst">
            <li>
              <code className="t_darkblue weight-600">&lt;h1&gt;</code> ~{" "}
              <code className="t_darkblue weight-600">&lt;h6&gt;</code> : 제목
              요소 (계층적 구조)
            </li>
            <li>
              <code className="t_darkblue weight-600">&lt;p&gt;</code> : 단락
            </li>
            <li>
              <code className="t_darkblue weight-600">&lt;blockquote&gt;</code>{" "}
              : 인용문
            </li>
            <li>
              <code className="t_darkblue weight-600">&lt;pre&gt;</code> :
              서식이 유지된 텍스트
            </li>
          </ul>
        </article>

        <article className="indent mt_xl">
          <h3 className="ml_mn t_blue">목록 관련 요소</h3>
          <ul className="mt_m dot_lst">
            <li>
              <code className="t_darkblue weight-600">&lt;ul&gt;</code> : 순서
              없는 목록
            </li>
            <li>
              <code className="t_darkblue weight-600">&lt;ol&gt;</code> : 순서
              있는 목록
            </li>
            <li>
              <code className="t_darkblue weight-600">&lt;li&gt;</code> : 목록
              항목
            </li>
            <li>
              <code className="t_darkblue weight-600">&lt;dl&gt;</code> : 정의
              목록
            </li>
            <li>
              <code className="t_darkblue weight-600">&lt;dt&gt;</code> : 정의
              용어
            </li>
            <li>
              <code className="t_darkblue weight-600">&lt;dd&gt;</code> : 정의
              설명
            </li>
          </ul>
        </article>

        <article className="indent mt_xl">
          <h3 className="ml_mn t_blue">테이블 관련 요소</h3>
          <ul className="mt_m dot_lst">
            <li>
              <code className="t_darkblue weight-600">&lt;table&gt;</code> : 표
              전체
            </li>
            <li>
              <code className="t_darkblue weight-600">&lt;caption&gt;</code> :
              표 제목
            </li>
            <li>
              <code className="t_darkblue weight-600">&lt;thead&gt;</code> : 표
              머리글
            </li>
            <li>
              <code className="t_darkblue weight-600">&lt;tbody&gt;</code> : 표
              본문
            </li>
            <li>
              <code className="t_darkblue weight-600">&lt;tfoot&gt;</code> : 표
              바닥글
            </li>
            <li>
              <code className="t_darkblue weight-600">&lt;tr&gt;</code> :
              행(row)
            </li>
            <li>
              <code className="t_darkblue weight-600">&lt;th&gt;</code> : 제목
              셀
            </li>
            <li>
              <code className="t_darkblue weight-600">&lt;td&gt;</code> : 일반
              셀
            </li>
          </ul>
        </article>

        <article className="indent mt_xl">
          <h3 className="ml_mn t_blue">폼 관련 요소</h3>
          <ul className="mt_m dot_lst">
            <li>
              <code className="t_darkblue weight-600">&lt;form&gt;</code> : 입력
              폼 전체
            </li>
            <li>
              <code className="t_darkblue weight-600">&lt;fieldset&gt;</code> :
              관련 입력 그룹
            </li>
            <li>
              <code className="t_darkblue weight-600">&lt;legend&gt;</code> :
              필드셋 제목
            </li>
            <li>
              <code className="t_darkblue weight-600">&lt;label&gt;</code> :
              입력 필드에 대한 라벨
            </li>
            <li>
              <code className="t_darkblue weight-600">&lt;output&gt;</code> :
              계산 결과 출력
            </li>
          </ul>
        </article>

        <article className="indent mt_xl">
          <h3 className="ml_mn t_blue">미디어 및 기타</h3>
          <ul className="mt_m dot_lst">
            <li>
              <code className="t_darkblue weight-600">&lt;figure&gt;</code> :
              이미지나 미디어 콘텐츠 묶음
            </li>
            <li>
              <code className="t_darkblue weight-600">&lt;figcaption&gt;</code>{" "}
              : figure의 설명
            </li>
            <li>
              <code className="t_darkblue weight-600">&lt;hr&gt;</code> : 수평
              구분선 (의미 단락 구분)
            </li>
            <li>
              <code className="t_darkblue weight-600">&lt;div&gt;</code> :
              비시맨틱한 구획 요소
            </li>
          </ul>
        </article>
      </section>

      <section className="mt_xxl indent">
        <h2 className="ml_mn">블록 요소의 특징</h2>

        <blockquote className="uk_note mt_xl" role="note">
          <strong className="sound_only">요약 설명</strong>
          <p>
            블록 요소(Block-level element)는 HTML 문서에서{" "}
            <b>
              한 줄 전체의 영역을 차지하며, 다른 요소들과 줄바꿈이 자동으로
              이루어지는 요소
            </b>
            입니다. 일반적으로 <b>구조를 구성하거나 묶는 용도</b>로 사용되며,
            내부에는 <b>다른 블록 요소나 인라인 요소를 포함할 수 있습니다.</b>
          </p>
        </blockquote>

        <article className="tit_h3 weight-400-before indent mt_xl">
          <h3 className="ml_mn t_blue">한 줄 전체 차지</h3>
          <p className="mt_ms">
            블록 요소는 보통 한 줄 전체를 차지합니다. 따라서 블록 요소 다음에
            오는 요소는 항상 새로운 줄에서 시작합니다.
          </p>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/02-blockInline/2.1.block_element_1.html"
                className="min_height_350 mb_result_height_250"
                result={true}
                mode="htmlmixed"
                theme="ayu-mirage"
                browser="default"
                title="한 줄 전체 차지"
                minHeight="350px"
              />
            </Suspense>
          </div>
        </article>

        <article className="tit_h3 weight-400-before indent mt_xl">
          <h3 className="ml_mn t_blue">너비와 높이 설정</h3>
          <p className="mt_ms">
            기본적으로 너비와 높이를 가지며, 요소의 크기를 조절할 수 있습니다.
          </p>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/02-blockInline/2.1.block_element_2.html"
                className="min_height_350 mb_result_height_320"
                result={true}
                mode="htmlmixed"
                theme="ayu-mirage"
                browser="default"
                title="너비와 높이 설정"
                minHeight="350px"
              />
            </Suspense>
          </div>
        </article>

        <article className="tit_h3 weight-400-before indent mt_xl">
          <h3 className="ml_mn t_blue">다른 요소 포함</h3>
          <p className="mt_ms">
            블록 요소 내부에는 다른 블록 요소나 인라인 요소를 포함하여 복잡한
            구조를 형성할 수 있습니다.
          </p>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/02-blockInline/2.1.block_element_3.html"
                className="min_height_350 mb_result_height_250"
                result={true}
                mode="htmlmixed"
                theme="ayu-mirage"
                browser="default"
                title="다른 요소 포함"
                minHeight="350px"
              />
            </Suspense>
          </div>
        </article>

        <article className="tit_h3 weight-400-before indent mt_xl">
          <h3 className="ml_mn t_blue">시맨틱 구조 정의</h3>
          <p className="mt_ms">
            블록 요소는 웹 페이지의 시맨틱 구조를 형성하는 데 중요한 역할을
            합니다. 예를 들어,
            <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>,{" "}
            <code>&lt;section&gt;</code>,<code>&lt;article&gt;</code>,{" "}
            <code>&lt;footer&gt;</code> 등의 시맨틱 요소들은 모두 블록
            요소입니다.
          </p>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/02-blockInline/2.1.block_element_4.html"
                className="min_height_370 mb_result_height_370"
                result={true}
                mode="htmlmixed"
                theme="ayu-mirage"
                browser="default"
                title="시맨틱 구조 정의"
                minHeight="370px"
              />
            </Suspense>
          </div>
        </article>
      </section>
      <figure className="img_figure mt_l">
        <img src={`${IMG.HTML}/02_html_01.png`} alt="블록 요소" />
        <figcaption>블록 요소</figcaption>
      </figure>
    </>
  );
}

export default BlockElementPage;
