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
  title: "@extend 사용이 필요한 상황",
  description:
    "SCSS @extend를 사용해야 하는 구체적인 상황들을 상세히 알아봅니다. 의미적 상속 관계, CSS 파일 크기 최적화, 성능 최적화, 그리고 실제 프로젝트에서 @extend를 사용하는 예시를 제공합니다.",
  keyword:
    "scss extend 언제 사용, scss extend 사용 상황, scss extend 적합한 경우, scss extend 활용",
};

function WhenToUsePage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code className="t_blue">@extend</code>는{" "}
          <b>특정 상황에서 매우 유용</b>합니다.
          <br />
          의미적 상속 관계를 표현하거나, CSS 파일 크기를 최적화하거나, 성능을
          향상시킬 때 <code className="t_blue">@extend</code>를 사용하는 것이
          적합합니다.
        </p>
        <p className="mt_s">
          이 페이지에서는 <code className="t_blue">@extend</code>를 사용해야
          하는 구체적인 상황들을 상세히 알아보고, 각 상황에서의 실제 사용 예시를
          제공합니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">의미적 상속 관계 표현</h2>
        <p className="mt_l">
          <b>{'"A는 B의 한 종류"'}</b> 같은 의미적 상속 관계를 표현할 때{" "}
          <code className="t_blue">@extend</code>가 적합합니다.
          <br />
          에러 메시지, 버튼 시스템처럼 여러 변형이 있지만{" "}
          <b>공통 기반을 명확히 공유하는 컴포넌트</b>에서{" "}
          <code className="t_blue">@extend</code>를 사용하면 코드의 의미가 더
          명확해지고 CSS도 최적화됩니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">에러 메시지 시스템</h3>
          <p className="mt_m">
            여러 종류의 에러 메시지가 <b>기본 메시지의 한 종류</b>인 경우입니다.
          </p>
          <CodeBlock
            title="에러 메시지 시스템 예시"
            language="css"
            className="mt_m"
          >
            {`// 기본 메시지 스타일
.message {
  padding: 12px 16px;
  border-radius: 4px;
  font-weight: 500;
  margin-bottom: 16px;
}

// 에러 메시지 (메시지의 한 종류)
.error {
  @extend .message;
  color: #dc3545;
  background: #f8d7da;
  border: 1px solid #f5c6cb;
}

// 경고 메시지 (메시지의 한 종류)
.warning {
  @extend .message;
  color: #856404;
  background: #fff3cd;
  border: 1px solid #ffeaa7;
}

// 성공 메시지 (메시지의 한 종류)
.success {
  @extend .message;
  color: #155724;
  background: #d4edda;
  border: 1px solid #c3e6cb;
}

// 정보 메시지 (메시지의 한 종류)
.info {
  @extend .message;
  color: #0c5460;
  background: #d1ecf1;
  border: 1px solid #bee5eb;
}`}
          </CodeBlock>
          <p className="mt_ms">
            이렇게 작성하면{" "}
            <b>{'"에러는 메시지의 한 종류", "경고는 메시지의 한 종류"'}</b>라는
            의미적 관계를 코드로 명확하게 표현할 수 있습니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">버튼 시스템</h3>
          <p className="mt_m">
            여러 종류의 버튼이 <b>기본 버튼의 한 종류</b>인 경우입니다.
          </p>
          <CodeBlock title="버튼 시스템 예시" language="css" className="mt_m">
            {`// 기본 버튼 스타일
.button {
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 700;
  cursor: pointer;
  border: none;
  transition: background 0.3s;
}

// Primary 버튼 (버튼의 한 종류)
.button-primary {
  @extend .button;
  background: #0a58ca;
  color: #ffffff;
}

// Secondary 버튼 (버튼의 한 종류)
.button-secondary {
  @extend .button;
  background: #6c757d;
  color: #ffffff;
}

// Success 버튼 (버튼의 한 종류)
.button-success {
  @extend .button;
  background: #28a745;
  color: #ffffff;
}`}
          </CodeBlock>
          <p className="mt_ms">
            이렇게 작성하면 <b>모든 버튼이 공통 스타일을 공유</b>하면서도,
            각각의 고유한 색상을 가질 수 있습니다.
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">CSS 파일 크기 최적화</h2>
        <p className="mt_l">
          <b>CSS 파일 크기를 줄이고 싶을 때</b>{" "}
          <code className="t_blue">@extend</code>가 유용합니다.
          <br />
          여러 선택자에서 같은 스타일을 사용할 때{" "}
          <code className="t_blue">@extend</code>는 선택자를 그룹화해 중복을
          제거하므로, <b>믹스인 대비 파일 크기를 크게 줄일 수 있어</b> 대규모
          프로젝트나 성능이 중요한 경우에 특히 도움이 됩니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">파일 크기 비교</h3>
          <p className="mt_m">
            같은 스타일을 여러 선택자에서 사용할 때 <b>파일 크기 차이</b>를
            비교해봅니다.
          </p>
          <div className="table_summary value_150 mt_m">
            <ul className="lst_hd">
              <li className="cell value">방식</li>
              <li className="cell content">CSS 크기 (10개 선택자 예시)</li>
              <li className="cell content">설명</li>
            </ul>
            <ul className="lst_bd">
              <li>
                <p className="cell value t_darkgreen">
                  <code className="t_blue">@extend</code>
                </p>
                <p className="cell content" data-title="CSS 크기">
                  약 200바이트
                </p>
                <p className="cell content" data-title="설명">
                  선택자 그룹화로 중복 제거
                </p>
              </li>
              <li>
                <p className="cell value t_darkgreen">믹스인</p>
                <p className="cell content" data-title="CSS 크기">
                  약 800바이트
                </p>
                <p className="cell content" data-title="설명">
                  각 선택자마다 스타일 반복
                </p>
              </li>
            </ul>
          </div>
          <p className="mt_ms">
            선택자가 많을수록{" "}
            <b>
              <code className="t_blue">@extend</code>의 파일 크기 이점이 더
              커집니다.
            </b>
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">실제 최적화 예시</h3>
          <p className="mt_m">
            여러 선택자에서 같은 스타일을 사용할 때{" "}
            <b>
              <code className="t_blue">@extend</code>로 최적화하는
            </b>{" "}
            예시입니다.
          </p>
          <div className="mt_l indent">
            <h4 className="ml_mn">최적화 전 (믹스인 사용)</h4>
            <CodeBlock title="최적화 전" language="css" className="mt_ms">
              {`@mixin card-base {
  background: #ffffff;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card {
  @include card-base;
}

.product-card {
  @include card-base;
}

.article-card {
  @include card-base;
}
// 각 선택자마다 스타일 반복 (큰 파일 크기)
`}
            </CodeBlock>
          </div>
          <div className="mt_l indent">
            <h4 className="ml_mn">최적화 후 (@extend 사용)</h4>
            <CodeBlock title="최적화 후" language="css" className="mt_ms">
              {`%card-base {
  background: #ffffff;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card {
  @extend %card-base;
}

.product-card {
  @extend %card-base;
}

.article-card {
  @extend %card-base;
}
// 선택자 그룹화로 중복 제거 (작은 파일 크기)
`}
            </CodeBlock>
            <p className="mt_ms">
              <code className="t_blue">@extend</code>를 사용하면{" "}
              <b>CSS 파일 크기가 크게 줄어듭니다</b>.
            </p>
          </div>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">성능 최적화</h2>
        <p className="mt_l">
          <b>브라우저 렌더링 성능을 최적화</b>하고 싶을 때{" "}
          <code className="t_blue">@extend</code>가 유용합니다.
          <br />
          선택자 그룹화로 브라우저가 스타일을 매칭하는 속도가 향상될 수 있어,{" "}
          <b>복잡한 페이지나 동적 콘텐츠가 많은 사이트</b>에서 렌더링 성능
          개선에 기여할 수 있습니다.
        </p>
        <p className="mt_s">
          아래는 브라우저가 스타일을 매칭하는 방식의 차이입니다.
        </p>
        <div className="table_summary value_150 mt_m">
          <ul className="lst_hd">
            <li className="cell value">방식</li>
            <li className="cell content">매칭 방식</li>
            <li className="cell content">성능</li>
          </ul>
          <ul className="lst_bd">
            <li>
              <p className="cell value t_darkgreen">
                <code className="t_blue">@extend</code>
              </p>
              <p className="cell content" data-title="매칭 방식">
                선택자 그룹으로 한 번에 매칭
              </p>
              <p className="cell content" data-title="성능">
                약간 더 빠름
              </p>
            </li>
            <li>
              <p className="cell value t_darkgreen">믹스인</p>
              <p className="cell content" data-title="매칭 방식">
                각 선택자마다 개별 매칭
              </p>
              <p className="cell content" data-title="성능">
                정상
              </p>
            </li>
          </ul>
        </div>
        <p className="mt_m">
          <code className="t_blue">@extend</code>는 <b>선택자를 그룹화</b>하여
          브라우저가 스타일을 매칭하는 속도가 약간 더 빠를 수 있습니다.
        </p>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">정적 스타일 재사용</h2>
        <p className="mt_l">
          <b>파라미터가 필요 없는 정적인 스타일</b>을 여러 곳에서 재사용할 때{" "}
          <code className="t_blue">@extend</code>가 적합합니다.
          <br />
          clearfix, 기본 레이아웃 패턴처럼 값이 고정되어 있고 여러 컴포넌트에서
          동일하게 사용되는 스타일은,{" "}
          <b>
            <code className="t_blue">@extend</code>로 그룹화하면 파일 크기와
            성능 모두에서 이점
          </b>
          을 얻을 수 있습니다.
        </p>
        <CodeBlock title="정적 스타일 예시" language="css" className="mt_m">
          {`// 정적인 기본 스타일 (파라미터 불필요)
%clearfix {
  &::after {
    content: "";
    display: table;
    clear: both;
  }
}

.container {
  @extend %clearfix;
}

.section {
  @extend %clearfix;
}

.article {
  @extend %clearfix;
}`}
        </CodeBlock>
        <p className="mt_m">
          이런 경우에는{" "}
          <b>
            파라미터가 필요 없으므로 <code className="t_blue">@extend</code>가
            적합합니다.
          </b>
        </p>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">실무 활용 예시</h2>
        <p className="mt_l">
          실무에서{" "}
          <b>
            <code className="t_blue">@extend</code>를 활용하는
          </b>{" "}
          구체적인 예시를 살펴봅니다.
          <br />
          알림 시스템, 폼 요소 시스템처럼 실제 프로젝트에서 자주 등장하는 패턴을
          기준으로,{" "}
          <b>
            <code className="t_blue">@extend</code>가 어떻게 코드 구조를
            단순화하고 최적화하는지
          </b>{" "}
          확인할 수 있습니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">알림 시스템</h3>
          <p className="mt_m">
            여러 종류의 알림이 <b>기본 알림의 한 종류</b>인 경우입니다.
          </p>
          <CodeBlock title="알림 시스템 예시" language="css" className="mt_m">
            {`// 기본 알림 스타일
.notification {
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 16px 20px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  animation: slideIn 0.3s ease;
}

// 성공 알림 (알림의 한 종류)
.notification-success {
  @extend .notification;
  background: #d4edda;
  color: #155724;
  border-left: 4px solid #28a745;
}

// 에러 알림 (알림의 한 종류)
.notification-error {
  @extend .notification;
  background: #f8d7da;
  color: #721c24;
  border-left: 4px solid #dc3545;
}

// 경고 알림 (알림의 한 종류)
.notification-warning {
  @extend .notification;
  background: #fff3cd;
  color: #856404;
  border-left: 4px solid #ffc107;
}`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">폼 요소 시스템</h3>
          <p className="mt_m">
            여러 종류의 폼 요소가 <b>기본 폼 요소의 한 종류</b>인 경우입니다.
          </p>
          <CodeBlock
            title="폼 요소 시스템 예시"
            language="css"
            className="mt_m"
          >
            {`// 기본 폼 요소 스타일
.form-control {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-size: 16px;
  transition: border-color 0.3s;
}

// 입력 필드 (폼 요소의 한 종류)
.input {
  @extend .form-control;
}

// 텍스트 영역 (폼 요소의 한 종류)
.textarea {
  @extend .form-control;
  min-height: 100px;
  resize: vertical;
}

// 셀렉트 박스 (폼 요소의 한 종류)
.select {
  @extend .form-control;
  background-image: url("data:image/svg+xml...");
}`}
          </CodeBlock>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">@extend 사용 체크리스트</h2>
        <p className="mt_l">
          <code className="t_blue">@extend</code>를 사용하기 전에{" "}
          <b>확인해야 할 사항</b>들을 정리합니다.
          <br />
          의미적 상속 관계, 정적 스타일, 여러 선택자 사용 등{" "}
          <code className="t_blue">@extend</code>가 적합한 조건과, 파라미터
          필요, 미디어 쿼리 사용 등 <b>믹스인이 더 나은 경우를 명확히 구분</b>할
          수 있는 체크리스트를 제공합니다.
        </p>

        <dl className="dl_dot_lst mt_l">
          <dt className="font-16 mb_s">@extend 사용이 적합한 경우</dt>
          <dd>
            <b>의미적 상속 관계</b>: {'"A는 B의 한 종류"'} 같은 관계가 명확함
          </dd>
          <dd>
            <b>정적 스타일</b>: 파라미터가 필요 없는 고정된 스타일
          </dd>
          <dd>
            <b>여러 선택자에서 사용</b>: 3개 이상의 선택자에서 같은 스타일 사용
          </dd>
          <dd>
            <b>파일 크기 최적화 필요</b>: CSS 파일 크기를 줄이고 싶음
          </dd>
          <dd>
            <b>미디어 쿼리 외부</b>: 미디어 쿼리 안에서 사용하지 않음
          </dd>
        </dl>

        <dl className="dl_dot_lst mt_l">
          <dt className="font-16 mb_s">믹스인 사용이 적합한 경우</dt>
          <dd>
            <b>파라미터 필요</b>: 동적으로 값을 변경해야 함
          </dd>
          <dd>
            <b>미디어 쿼리 내부</b>: 미디어 쿼리 안에서 사용해야 함
          </dd>
          <dd>
            <b>복잡한 로직</b>: 조건문이나 반복문이 필요함
          </dd>
          <dd>
            <b>@content 필요</b>: 동적 콘텐츠 삽입이 필요함
          </dd>
          <dd>
            <b>유틸리티 함수</b>: 여러 곳에서 다양한 값으로 사용됨
          </dd>
        </dl>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">정리</h2>
        <p className="mt_l">
          <code className="t_blue">@extend</code> 사용이 필요한 상황에 대해
          알아본 내용을 정리합니다.
          <br />
          의미적 상속 관계, CSS 파일 크기 최적화, 성능 최적화 등{" "}
          <code className="t_blue">@extend</code>가 빛을 발하는 상황을 정리해
          두면,{" "}
          <b>
            실무에서 <code className="t_blue">@extend</code>와 믹스인 중 어떤
            것을 선택할지
          </b>{" "}
          더 확신을 가지고 결정할 수 있습니다.
        </p>
        <ul className="dot_lst mt_m indent_small">
          <li>
            <b>의미적 상속 관계</b>: {'"A는 B의 한 종류"'} 같은 관계를 표현할 때
          </li>
          <li>
            <b>CSS 파일 크기 최적화</b>: 파일 크기를 줄이고 싶을 때
          </li>
          <li>
            <b>성능 최적화</b>: 브라우저 렌더링 성능을 최적화하고 싶을 때
          </li>
          <li>
            <b>정적 스타일 재사용</b>: 파라미터가 필요 없는 고정된 스타일을
            재사용할 때
          </li>
          <li>
            <b>실무 활용</b>: 알림 시스템, 폼 요소 시스템 등에서 활용
          </li>
          <li>
            <b>체크리스트</b>: 의미적 상속, 정적 스타일, 여러 선택자 사용 등의
            조건 확인
          </li>
        </ul>
        <p className="mt_m">
          다음 섹션에서는 <b>조건문과 반복문</b>에 대해 자세히 알아봅니다.
        </p>
      </section>

      <figure className="img_figure mt_l">
        <img
          src={IMG.SCSS + "/07_scss_04.png"}
          alt="@extend 사용이 필요한 상황"
        />
        <figcaption>@extend 사용이 필요한 상황</figcaption>
      </figure>
    </>
  );
}

export default WhenToUsePage;
