import { usePageMeta } from "@/components/common/PageMeta";
import CodeBlock from "@/components/code/CodeBlock";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "scss_start",
  type: "publishing",
  info: false,
  note: false,
  sideMenu: true,
  reference: true,
  contentList: true,
  depth3Last: false,
  bottomEditor: false,
};

const PAGE_DATA = {
  title: "주석 처리 방식 (//, /* */)",
  description:
    "SCSS의 주석 처리 방식을 상세히 알아봅니다. 한 줄 주석(//)과 블록 주석(/* */)의 차이, 컴파일 시 처리 방식, 실제 사용 예시, 그리고 주석을 활용한 문서화 방법을 설명합니다.",
  keyword: "scss 주석, scss comment, scss //, scss /* */, scss 문서화, scss 코멘트",
};

function CommentsPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          SCSS는 <b>두 가지 주석 방식을 지원</b>합니다:{" "}
          <code className="t_blue">//</code> (한 줄 주석)과{" "}
          <code className="t_blue">/* */</code> (블록 주석).
          <br />
          <code className="t_blue">//</code> 주석은 컴파일 시 제거되지만,{" "}
          <code className="t_blue">/* */</code> 주석은 CSS 파일에 그대로
          포함됩니다.
        </p>
        <p className="mt_s">
          이 페이지에서는 두 주석 방식의 차이, 컴파일 시 처리 방식, 실제 사용
          예시, 그리고 주석을 활용한 코드 문서화 방법을 상세히 알아봅니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">SCSS 주석의 두 가지 방식</h2>
        <p className="mt_l">
          SCSS는 <b>CSS와 달리 두 가지 주석 방식을 모두 지원</b>합니다.
          <br />
          각각의 특징과 사용 시기를 알아봅니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">한 줄 주석 (//)</h3>
          <p className="mt_m">
            <code className="t_blue">//</code>는 <b>한 줄 주석</b>으로, 해당
            줄의 끝까지를 주석으로 처리합니다.
            <br />이 주석은 <b>컴파일 시 CSS 파일에 포함되지 않습니다</b>.
          </p>
          <CodeBlock title="한 줄 주석 예시" language="css" className="mt_m">
            {`.button {
  padding: 8px 16px;
  // 배경색 설정
  background: #0a58ca;
  // 호버 시 색상 변경
  &:hover {
    background: #084298;
  }
}`}
          </CodeBlock>
          <CodeBlock
            title="컴파일된 CSS (주석 제거됨)"
            language="css"
            className="mt_m"
          >
            {`.button {
  padding: 8px 16px;
  background: #0a58ca;
}
.button:hover {
  background: #084298;
}`}
          </CodeBlock>
          <p className="mt_ms">
            <code className="t_blue">//</code> 주석은{" "}
            <b>개발 중에만 보이고 최종 CSS에는 포함되지 않으므로</b>, 개발용
            메모나 임시 설명에 적합합니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">{"블록 주석 (/* */)"}</h3>
          <p className="mt_m">
            <code className="t_blue">/* */</code>는 <b>블록 주석</b>으로, 여러
            줄에 걸쳐 주석을 작성할 수 있습니다.
            <br />이 주석은 <b>컴파일 시 CSS 파일에 그대로 포함</b>됩니다.
          </p>
          <CodeBlock title="블록 주석 예시" language="css" className="mt_m">
            {`/* 버튼 컴포넌트 스타일
   기본 버튼 스타일과 변형을 정의합니다. */
.button {
  padding: 8px 16px;
  background: #0a58ca;
  /* 호버 상태 스타일 */
  &:hover {
    background: #084298;
  }
}`}
          </CodeBlock>
          <CodeBlock
            title="컴파일된 CSS (주석 포함됨)"
            language="css"
            className="mt_m"
          >
            {`/* 버튼 컴포넌트 스타일
   기본 버튼 스타일과 변형을 정의합니다. */
.button {
  padding: 8px 16px;
  background: #0a58ca;
  /* 호버 상태 스타일 */
}
.button:hover {
  background: #084298;
}`}
          </CodeBlock>
          <p className="mt_ms">
            <code className="t_blue">/* */</code> 주석은{" "}
            <b>최종 CSS에도 포함되므로</b>, 사용자나 다른 개발자가 볼 수 있는
            공개 문서에 적합합니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <b className="t_blue">한 줄 주석</b>과{" "}
            <b className="t_blue">블록 주석</b> 방식의 비교
          </h3>
          <p className="mt_m">두 주석 방식의 차이를 명확히 비교해봅니다.</p>
          <div className="table_summary value_150 mt_m">
            <ul className="lst_hd">
              <li className="cell value">주석 방식</li>
              <li className="cell content">표기법</li>
              <li className="cell content">컴파일 시 처리</li>
              <li className="cell content">사용 시기</li>
            </ul>
            <ul className="lst_bd">
              <li>
                <p className="cell value t_darkgreen">한 줄 주석</p>
                <p className="cell content" data-title="표기법">
                  <code>// 주석 내용</code>
                </p>
                <p className="cell content" data-title="컴파일 시 처리">
                  CSS에 포함되지 않음 (제거됨)
                </p>
                <p className="cell content" data-title="사용 시기">
                  개발용 메모, 임시 설명, 디버깅용 주석
                </p>
              </li>
              <li>
                <p className="cell value t_darkgreen">블록 주석</p>
                <p className="cell content" data-title="표기법">
                  <code>{`/* 주석 내용 */`}</code>
                </p>
                <p className="cell content" data-title="컴파일 시 처리">
                  CSS에 포함됨 (그대로 유지)
                </p>
                <p className="cell content" data-title="사용 시기">
                  공개 문서, 라이선스 정보, 사용자 가이드
                </p>
              </li>
            </ul>
          </div>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">주석 사용 예시</h2>
        <p className="mt_l">
          이제 실제 프로젝트에서 주석을 어떻게 활용하는지 <b>다양한 예시</b>를
          살펴봅니다.
          <br />
          주석은 단순히 코드를 설명하는 것을 넘어서,{" "}
          <b>프로젝트의 문서화와 협업 효율성</b>을 높이는 중요한 도구입니다.
        </p>
        <p className="mt_s">
          아래 예시들은 실제 개발 현장에서 자주 사용되는 주석 패턴들입니다.
          <br />각 예시는 <b>특정 상황에서 주석을 어떻게 작성하면 좋은지</b>를
          보여주며, 프로젝트의 규모와 팀의 협업 방식에 따라 적절히 선택하여
          사용할 수 있습니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">컴포넌트 설명 주석</h3>
          <p className="mt_m">
            컴포넌트의 목적과 사용법을 설명하는 주석입니다.
          </p>
          <iframe
            className="codepen mt_m"
            height={400}
            style={{ width: "100%" }}
            scrolling="no"
            title="3.3. 컴포넌트 설명 주석"
            src="https://codepen.io/uxkm/embed/KwzjdMZ?default-tab=css&theme-id=dark"
            frameBorder="no"
            loading="lazy"
            allowTransparency
          >
            See the Pen{" "}
            <a href="https://codepen.io/uxkm/pen/KwzjdMZ">
              3.3. 컴포넌트 설명 주석
            </a>{" "}
            by UXKM (<a href="https://codepen.io/uxkm">@uxkm</a>) on{" "}
            <a href="https://codepen.io">CodePen</a>.
          </iframe>
          <p className="mt_ms">
            이런 주석은 <b>프로젝트의 스타일 가이드나 문서</b>로 활용할 수
            있습니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">섹션 구분 주석</h3>
          <p className="mt_m">파일 내에서 섹션을 구분하는 주석입니다.</p>
          <CodeBlock title="섹션 구분 주석" language="css" className="mt_m">
            {`// ============================================
// Variables
// ============================================
$primary-color: #0a58ca;
$font-size-base: 16px;

// ============================================
// Mixins
// ============================================
@mixin flex-center {
  // ...
}

// ============================================
// Components
// ============================================
.button {
  // ...
}`}
          </CodeBlock>
          <p className="mt_ms">
            섹션 구분 주석을 사용하면{" "}
            <b>큰 파일에서도 원하는 부분을 빠르게 찾을 수 있습니다</b>.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">인라인 설명 주석</h3>
          <p className="mt_m">
            인라인 설명 주석은 <b>코드 옆에 간단한 설명을 추가</b>하는
            주석입니다.
            <br />
            특정 속성이나 값의 의미를 바로 옆에 적어두면,{" "}
            <b>코드를 읽는 사람이 빠르게 이해</b>할 수 있습니다.
          </p>
          <p className="mt_s">
            이 방식은 <b>왜 이 값을 사용했는지</b>,{" "}
            <b>이 속성이 어떤 역할을 하는지</b>를 간결하게 설명할 때 특히
            유용합니다.
            <br />
            단, 너무 많은 인라인 주석은 코드를 지저분하게 만들 수 있으므로,{" "}
            <b>정말 필요한 부분에만</b> 사용하는 것이 좋습니다.
          </p>
          <CodeBlock title="인라인 설명 주석" language="css" className="mt_m">
            {`.card {
  padding: 16px;
  margin-bottom: 24px; // 카드 간 간격
  border-radius: 8px; // 둥근 모서리

  // 제목 스타일
  &__title {
    font-size: 18px;
    font-weight: 700; // 굵은 글씨
  }
}`}
          </CodeBlock>
          <p className="mt_ms">
            인라인 주석은 <b>특정 속성의 목적이나 이유를 설명</b>할 때
            유용합니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">TODO 및 FIXME 주석</h3>
          <p className="mt_m">
            나중에 수정하거나 개선할 부분을 표시하는 주석입니다.
          </p>
          <CodeBlock title="TODO 주석 예시" language="css" className="mt_m">
            {`.button {
  padding: 8px 16px;
  // TODO: 다크 모드 색상 추가 필요
  background: #0a58ca;

  // FIXME: 모바일에서 터치 영역이 작음
  &:active {
    background: #084298;
  }
}`}
          </CodeBlock>
          <p className="mt_ms">
            TODO나 FIXME 주석을 사용하면{" "}
            <b>나중에 개선할 부분을 쉽게 찾을 수 있습니다</b>.
            <br />
            많은 에디터는 이런 주석을 하이라이팅하거나 검색 기능으로 찾을 수
            있게 해줍니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">라이선스 및 저작권 주석</h3>
          <p className="mt_m">
            파일 상단에 라이선스 정보를 표시하는 주석입니다.
          </p>
          <CodeBlock title="라이선스 주석 예시" language="css" className="mt_m">
            {`/*!
 * 프로젝트명: My Project
 * 설명: 메인 스타일시트
 * 저작권: © 2024 Company Name
 * 라이선스: MIT License
 */

// 또는

/**
 * @fileoverview 메인 스타일시트
 * @author Your Name
 * @version 1.0.0
 */`}
          </CodeBlock>
          <p className="mt_ms">
            라이선스 주석은 <b>{"블록 주석(/* */)을 사용"}</b>하여 최종 CSS에도
            포함되도록 합니다.
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">주석을 활용한 문서화</h2>
        <p className="mt_l">
          주석을 활용하여 <b>코드를 문서화</b>하는 방법을 알아봅니다.
          <br />
          문서화된 코드는 시간이 지나도{" "}
          <b>어떤 의도로 작성되었는지 빠르게 파악</b>할 수 있고, 새로운 팀원이
          합류했을 때도 <b>학습 비용을 크게 줄여줍니다</b>.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">변수 문서화</h3>
          <p className="mt_m">변수의 용도와 사용 예시를 주석으로 설명합니다.</p>
          <CodeBlock title="변수 문서화 예시" language="css" className="mt_m">
            {`// 메인 브랜드 색상
// 버튼, 링크 등 주요 인터랙션 요소에 사용
$primary-color: #0a58ca;

// 기본 폰트 크기
// body와 대부분의 텍스트 요소에 적용
$font-size-base: 16px;

// 카드 간 기본 간격
// margin-bottom 값으로 사용
$card-spacing: 24px;`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">믹스인 문서화</h3>
          <p className="mt_m">
            믹스인의 파라미터와 사용법을 주석으로 설명합니다.
          </p>
          <CodeBlock title="믹스인 문서화 예시" language="css" className="mt_m">
            {`// Flexbox 중앙 정렬 믹스인
// @param $direction: flex-direction 값 (기본값: row)
// @example
//   .container {
//     @include flex-center;
//   }
@mixin flex-center($direction: row) {
  display: flex;
  flex-direction: $direction;
  align-items: center;
  justify-content: center;
}`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">컴포넌트 문서화</h3>
          <p className="mt_m">
            컴포넌트의 구조와 사용법을 주석으로 설명합니다.
          </p>
          <iframe
            className="codepen mt_m"
            height={400}
            style={{ width: "100%" }}
            scrolling="no"
            title="Untitled"
            src="https://codepen.io/uxkm/embed/dPMBYOy?default-tab=css&theme-id=dark"
            frameBorder="no"
            loading="lazy"
            allowTransparency
          >
            See the Pen{" "}
            <a href="https://codepen.io/uxkm/pen/dPMBYOy">Untitled</a> by UXKM (
            <a href="https://codepen.io/uxkm">@uxkm</a>) on{" "}
            <a href="https://codepen.io">CodePen</a>.
          </iframe>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">주석 사용 시 주의사항</h2>
        <p className="mt_l">
          주석을 효과적으로 사용하기 위한 <b>주의사항</b>을 정리합니다.
          <br />
          주석은 많다고 해서 항상 좋은 것이 아니기 때문에,{" "}
          <b>언제, 어떤 내용을, 어느 정도 수준으로 남길지</b>에 대한 기준을
          세워두면 코드 품질과 협업 효율을 함께 높일 수 있습니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">과도한 주석 피하기</h3>
          <p className="mt_m">
            주석은 유용하지만,{" "}
            <b>과도하게 사용하면 오히려 코드를 읽기 어렵게</b> 만들 수 있습니다.
            <br />
            코드 자체가 명확하다면 주석 없이도 이해할 수 있어야 합니다.
          </p>
          <CodeBlock title="과도한 주석 예시" language="css" className="mt_ms">
            {`// 버튼 스타일 시작
.button {
  // 패딩 설정
  padding: 8px 16px; // 상하 8px, 좌우 16px
  // 배경색 설정
  background: #0a58ca; // 파란색
}
// 버튼 스타일 끝`}
          </CodeBlock>
          <p className="mt_ms">
            위 예시처럼{" "}
            <b>코드만 봐도 알 수 있는 내용을 주석으로 달 필요는 없습니다</b>.
            <br />
            주석은 &quot;왜&quot; 이렇게 작성했는지, &quot;어떤 목적&quot;인지를
            설명할 때 사용하는 것이 좋습니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">주석은 최신 상태로 유지</h3>
          <p className="mt_m">
            코드를 수정할 때는 <b>관련된 주석도 함께 업데이트</b>해야 합니다.
            <br />
            오래된 주석은 오히려 혼란을 줄 수 있습니다.
          </p>
          <CodeBlock title="오래된 주석 예시" language="css" className="mt_ms">
            {`// 메인 색상 (빨간색)
$primary-color: #0a58ca; // 실제로는 파란색인데 주석은 빨간색이라고 함`}
          </CodeBlock>
          <p className="mt_ms">
            이런 불일치는 <b>코드를 이해하는 데 방해</b>가 되므로, 주석을
            정기적으로 검토하고 업데이트해야 합니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">일관된 주석 스타일 유지</h3>
          <p className="mt_m">
            프로젝트 전체에서 <b>일관된 주석 스타일을 유지</b>하면 가독성이
            향상됩니다.
          </p>
          <ul className="dot_lst mt_s indent_small">
            <li>
              <b>주석 표기법 통일</b>: 섹션 구분은{" "}
              <code className="t_blue">// ===</code> 형태로 통일
            </li>
            <li>
              <b>주석 위치 통일</b>: 컴포넌트 설명은 위에, 인라인 설명은 옆에
              배치
            </li>
            <li>
              <b>주석 언어 통일</b>: 팀에서 정한 언어(한국어/영어)로 통일
            </li>
          </ul>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">민감한 정보 주석 금지</h3>
          <p className="mt_m">
            <code className="t_blue">/* */</code> 주석은 CSS에 포함되므로,{" "}
            <b>민감한 정보는 주석에 포함하지 않아야</b> 합니다.
          </p>
          <CodeBlock title="나쁜 예시" language="css" className="mt_ms">
            {`/* API 키: abc123xyz
   관리자 비밀번호: secret123 */
.button {
  // ...
}`}
          </CodeBlock>
          <p className="mt_ms">
            이런 정보는 <b>CSS 파일을 다운로드한 누구나 볼 수 있으므로</b> 절대
            포함하지 않아야 합니다.
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">정리</h2>
        <p className="mt_l">
          SCSS 주석 처리 방식에 대해 알아본 내용을 정리합니다.
        </p>
        <ul className="dot_lst mt_m indent_small">
          <li>
            <b>한 줄 주석 (//)</b>: 컴파일 시 제거됨, 개발용 메모에 적합
          </li>
          <li>
            <b>{"블록 주석 (/* */)"}</b>: 컴파일 시 CSS에 포함됨, 공개 문서에
            적합
          </li>
          <li>
            <b>사용 예시</b>: 컴포넌트 설명, 섹션 구분, 인라인 설명, TODO/FIXME,
            라이선스 정보
          </li>
          <li>
            <b>문서화 활용</b>: 변수, 믹스인, 컴포넌트의 용도와 사용법을
            주석으로 설명
          </li>
          <li>
            <b>주의사항</b>: 과도한 주석 피하기, 주석 최신 상태 유지, 일관된
            스타일, 민감한 정보 금지
          </li>
        </ul>
        <p className="mt_m">
          다음 페이지에서는 <b>SCSS 문법을 사용할 때 주의해야 할 점</b>들을
          종합적으로 알아봅니다.
        </p>
      </section>

      <figure className="img_figure mt_l">
        <img src={IMG.SCSS + "/03_scss_03.png"} alt="SCSS 주석" />
        <figcaption>SCSS 주석</figcaption>
      </figure>
    </>
  );
}

export default CommentsPage;
