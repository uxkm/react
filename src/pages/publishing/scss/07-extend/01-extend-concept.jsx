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
  title: "@extend의 개념",
  description:
    "SCSS @extend의 기본 개념을 상세히 알아봅니다. @extend가 무엇인지, 어떻게 동작하는지, 선택자 그룹화의 원리, 컴파일 과정, 그리고 실제 사용 예시를 단계별로 설명합니다.",
  keyword:
    "scss @extend, scss extend, scss 상속, scss 확장, scss extend 개념, scss 선택자 그룹화",
};

function ExtendConceptPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <b>@extend</b>는 SCSS에서{" "}
          <b>한 선택자의 스타일을 다른 선택자에 상속</b>시킬 수 있는 기능입니다.
          <br />
          믹스인이 스타일을 복사하는 것과 달리, @extend는{" "}
          <b>선택자를 그룹화하여 공통 스타일을 공유</b>합니다.
        </p>
        <p className="mt_s">
          이 페이지에서는 @extend의 기본 개념, 동작 원리, 선택자 그룹화
          메커니즘, 컴파일 과정, 그리고 실제 사용 예시를 상세히 알아봅니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">@extend란?</h2>
        <p className="mt_l">
          <code className="t_blue">@extend</code>는 SCSS에서{" "}
          <b>한 선택자의 스타일을 다른 선택자에 상속</b>시킬 수 있는 기능입니다.
          <br />
          상속받은 선택자는 원본 선택자와 <b>같은 그룹으로 묶여서</b> CSS에
          출력되며, 이렇게 하면 CSS 파일 크기를 줄이고{" "}
          <b>의미적 상속 관계를 코드로 명확하게 표현</b>할 수 있습니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">기본 개념</h3>
          <p className="mt_m">
            <code className="t_blue">@extend</code>는{" "}
            <b>{'"A는 B의 한 종류"'}</b> 같은 상속 관계를 표현할 때 사용합니다.
            <br />
            {
              '예를 들어, "에러 메시지는 메시지의 한 종류"라는 관계를 @extend로 표현할 수 있습니다.'
            }
          </p>
          <CodeBlock
            title="@extend 기본 개념 예시"
            language="css"
            className="mt_m"
          >
            {`// 기본 메시지 스타일
.message {
  padding: 12px;
  border-radius: 4px;
  font-weight: 500;
}

// 에러 메시지는 메시지의 한 종류
.error {
  @extend .message;
  color: #dc3545;
  background: #f8d7da;
}

// 성공 메시지도 메시지의 한 종류
.success {
  @extend .message;
  color: #28a745;
  background: #d4edda;
}`}
          </CodeBlock>
          <p className="mt_ms">
            이렇게 작성하면 <b>의미적 상속 관계</b>를 코드로 명확하게 표현할 수
            있습니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">기본 문법</h3>
          <p className="mt_m">
            <code className="t_blue">@extend</code> 뒤에 상속받을 선택자 이름을
            씁니다.
          </p>
          <CodeBlock title="@extend 기본 문법" language="css" className="mt_m">
            {`// 기본 스타일 정의
.button-base {
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 700;
}

// @extend로 상속
.button-primary {
  @extend .button-base;
  background: #0a58ca;
}`}
          </CodeBlock>
          <CodeBlock title="컴파일된 CSS" language="css" className="mt_m">
            {`.button-base, .button-primary {
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 700;
}

.button-primary {
  background: #0a58ca;
}`}
          </CodeBlock>
          <p className="mt_ms">
            @extend를 사용하면 <b>선택자가 그룹화되어 공통 스타일을 공유</b>
            합니다.
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">@extend의 동작 원리</h2>
        <p className="mt_l">
          <code className="t_blue">@extend</code>가 <b>어떻게 동작하는지</b>{" "}
          내부 메커니즘을 상세히 알아봅니다.
          <br />
          선택자 그룹화 과정과 컴파일 결과를 이해하면,{" "}
          <code className="t_blue">@extend</code>를 사용할 때{" "}
          <b>최종 CSS가 어떻게 생성되는지 예측</b>할 수 있어 디버깅과 최적화에
          도움이 됩니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">선택자 그룹화 메커니즘</h3>
          <p className="mt_m">
            <code className="t_blue">@extend</code>는 <b>선택자를 그룹화</b>하여
            CSS를 최적화합니다.
            <br />
            여러 선택자가 같은 스타일을 공유할 때, 하나의 선택자 그룹으로 묶어서
            출력합니다.
          </p>
          <CodeBlock title="선택자 그룹화 예시" language="css" className="mt_m">
            {`// 기본 에러 스타일
.error {
  color: #dc3545;
  font-weight: 700;
  padding: 8px;
}

// 심각한 에러
.serious-error {
  @extend .error;
  border: 2px solid #dc3545;
}

// 위험한 에러
.critical-error {
  @extend .error;
  font-size: 18px;
}

// 치명적인 에러
.fatal-error {
  @extend .serious-error;
  background: #dc3545;
}`}
          </CodeBlock>
          <CodeBlock title="컴파일된 CSS" language="css" className="mt_m">
            {`.error, .serious-error, .critical-error, .fatal-error {
  color: #dc3545;
  font-weight: 700;
  padding: 8px;
}

.serious-error, .fatal-error {
  border: 2px solid #dc3545;
}

.critical-error {
  font-size: 18px;
}

.fatal-error {
  background: #dc3545;
}`}
          </CodeBlock>
          <p className="mt_ms">
            이렇게 하면 <b>CSS 파일 크기가 줄어들고</b>, 브라우저가 스타일을 더
            효율적으로 처리할 수 있습니다.
            <br />
            같은 스타일을 여러 선택자에 반복해서 쓰는 대신,{" "}
            <b>하나의 선택자 그룹으로 묶어서</b> 출력하기 때문입니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">컴파일 과정 이해</h3>
          <p className="mt_m">
            <code className="t_blue">@extend</code>가{" "}
            <b>컴파일 과정에서 어떻게 처리</b>되는지 단계별로 알아봅니다.
          </p>
          <div className="mt_ml indent">
            <h4 className="ml_mn">1단계: 상속 관계 파악</h4>
            <p className="mt_ms">
              SCSS 컴파일러는 먼저 <b>어떤 선택자가 어떤 선택자를 상속</b>하는지
              파악합니다.
            </p>
            <CodeBlock title="상속 관계 예시" language="css" className="mt_ms">
              {`.error {
  color: #dc3545;
}

.serious-error {
  @extend .error;  // .serious-error는 .error를 상속
}`}
            </CodeBlock>
          </div>
          <div className="mt_ml indent">
            <h4 className="ml_mn">2단계: 선택자 그룹 생성</h4>
            <p className="mt_ms">
              컴파일러는 <b>상속 관계를 기반으로 선택자 그룹을 생성</b>합니다.
            </p>
            <CodeBlock
              title="선택자 그룹 생성"
              language="css"
              className="mt_ms"
            >
              {`// .error와 .serious-error를 하나의 그룹으로 묶음
.error, .serious-error {
  color: #dc3545;
}`}
            </CodeBlock>
          </div>
          <div className="mt_ml indent">
            <h4 className="ml_mn">3단계: 개별 스타일 추가</h4>
            <p className="mt_ms">
              각 선택자의 <b>개별 스타일을 추가</b>합니다.
            </p>
            <CodeBlock
              title="개별 스타일 추가"
              language="css"
              className="mt_ms"
            >
              {`.serious-error {
  border: 2px solid #dc3545;  // 개별 스타일
}`}
            </CodeBlock>
          </div>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">@extend의 특징</h2>
        <p className="mt_l">
          <code className="t_blue">@extend</code>의 <b>주요 특징</b>들을
          정리합니다.
          <br />
          선택자 그룹화, 의미적 상속 관계 표현, CSS 최적화 등{" "}
          <code className="t_blue">@extend</code>만의 고유한 특성을 이해하면,{" "}
          <b>믹스인과의 차이를 명확히 구분</b>하고 상황에 맞는 선택을 할 수
          있습니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">선택자 그룹화</h3>
          <p className="mt_m">
            <code className="t_blue">@extend</code>의 가장 큰 특징은{" "}
            <b>선택자를 그룹화</b>한다는 것입니다.
          </p>
          <CodeBlock title="선택자 그룹화 예시" language="css" className="mt_m">
            {`.button {
  padding: 8px 16px;
}

.button-primary {
  @extend .button;
}

.button-secondary {
  @extend .button;
}`}
          </CodeBlock>
          <CodeBlock title="컴파일된 CSS" language="css" className="mt_m">
            {`.button, .button-primary, .button-secondary {
  padding: 8px 16px;
}
// 세 선택자가 하나의 그룹으로 묶임`}
          </CodeBlock>
          <p className="mt_ms">
            이렇게 하면 <b>CSS 파일 크기가 줄어들고</b>, 브라우저가 스타일을 더
            효율적으로 처리할 수 있습니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">의미적 상속 관계 표현</h3>
          <p className="mt_m">
            <code className="t_blue">@extend</code>는{" "}
            <b>의미적 상속 관계를 코드로 표현</b>할 수 있습니다.
          </p>
          <CodeBlock
            title="의미적 상속 관계 예시"
            language="css"
            className="mt_m"
          >
            {`// 동물의 기본 특성
.animal {
  breathing: true;
  moving: true;
}

// 개는 동물의 한 종류
.dog {
  @extend .animal;
  barking: true;
}

// 고양이도 동물의 한 종류
.cat {
  @extend .animal;
  meowing: true;
}`}
          </CodeBlock>
          <p className="mt_ms">
            이렇게 작성하면 <b>{'"개는 동물이다", "고양이는 동물이다"'}</b>라는
            의미적 관계를 코드로 명확하게 표현할 수 있습니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">CSS 최적화</h3>
          <p className="mt_m">
            <code className="t_blue">@extend</code>는{" "}
            <b>CSS 파일 크기를 줄이고 성능을 향상</b>시킵니다.
          </p>
          <div className="table_summary value_150 mt_m">
            <ul className="lst_hd">
              <li className="cell value">방식</li>
              <li className="cell content">CSS 크기</li>
              <li className="cell content">설명</li>
            </ul>
            <ul className="lst_bd">
              <li>
                <p className="cell value t_darkgreen">
                  <code className="t_blue">@extend</code> 사용
                </p>
                <p className="cell content" data-title="CSS 크기">
                  작음
                </p>
                <p className="cell content" data-title="설명">
                  선택자를 그룹화하여 중복 제거
                </p>
              </li>
              <li>
                <p className="cell value t_darkgreen">믹스인 사용</p>
                <p className="cell content" data-title="CSS 크기">
                  큼
                </p>
                <p className="cell content" data-title="설명">
                  각 선택자마다 스타일 반복
                </p>
              </li>
            </ul>
          </div>
          <p className="mt_ms">
            <code className="t_blue">@extend</code>를 사용하면{" "}
            <b>같은 스타일을 여러 선택자에 반복하지 않고</b>, 하나의 선택자
            그룹으로 묶어서 출력하므로 CSS 파일이 더 작아집니다.
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">실제 사용 예시</h2>
        <p className="mt_l">
          <code className="t_blue">@extend</code>를{" "}
          <b>실제 프로젝트에서 활용</b>하는 예시를 살펴봅니다.
          <br />
          에러 메시지 시스템, 버튼 시스템처럼 여러 변형이 있지만{" "}
          <b>공통 기반을 공유하는 컴포넌트</b>에서{" "}
          <code className="t_blue">@extend</code>가 어떻게 코드 구조를
          단순화하는지 확인할 수 있습니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">에러 메시지 시스템</h3>
          <p className="mt_m">
            여러 종류의 에러 메시지를{" "}
            <b>
              <code className="t_blue">@extend</code>로 체계적으로 관리
            </b>
            하는 예시입니다.
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
}`}
          </CodeBlock>
          <CodeBlock title="컴파일된 CSS" language="css" className="mt_m">
            {`.message, .error, .warning, .success {
  padding: 12px 16px;
  border-radius: 4px;
  font-weight: 500;
  margin-bottom: 16px;
}

.error {
  color: #dc3545;
  background: #f8d7da;
  border: 1px solid #f5c6cb;
}

.warning {
  color: #856404;
  background: #fff3cd;
  border: 1px solid #ffeaa7;
}

.success {
  color: #155724;
  background: #d4edda;
  border: 1px solid #c3e6cb;
}`}
          </CodeBlock>
          <p className="mt_ms">
            이렇게 작성하면 <b>모든 메시지가 공통 스타일을 공유</b>하면서도,
            각각의 고유한 스타일을 가질 수 있습니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">버튼 시스템</h3>
          <p className="mt_m">
            여러 종류의 버튼을{" "}
            <b>
              <code className="t_blue">@extend</code>로 체계적으로 관리
            </b>
            하는 예시입니다.
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

  &:hover {
    background: #084298;
  }
}

// Secondary 버튼 (버튼의 한 종류)
.button-secondary {
  @extend .button;
  background: #6c757d;
  color: #ffffff;

  &:hover {
    background: #545b62;
  }
}`}
          </CodeBlock>
          <p className="mt_ms">
            이렇게 작성하면 <b>모든 버튼이 공통 스타일을 공유</b>하면서도,
            각각의 고유한 색상과 호버 효과를 가질 수 있습니다.
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">@extend의 장단점</h2>
        <p className="mt_l">
          <code className="t_blue">@extend</code>를 사용할 때의{" "}
          <b>장점과 단점</b>을 정리합니다.
          <br />
          CSS 파일 크기 감소와 성능 향상 같은 장점과 파라미터 사용 불가, 미디어
          쿼리 제한 같은 단점을 비교해 보면,{" "}
          <b>
            프로젝트에서 <code className="t_blue">@extend</code>를 언제 도입할지
            판단
          </b>
          하는 기준이 됩니다.
        </p>

        <dl className="dl_dot_lst mt_l">
          <dt className="font-16 mb_s">장점</dt>
          <dd>
            <b>CSS 파일 크기 감소</b>: 선택자를 그룹화하여 중복을 줄임
          </dd>
          <dd>
            <b>성능 향상</b>: 브라우저가 스타일을 더 효율적으로 처리
          </dd>
          <dd>
            <b>의미적 관계 표현</b>: 상속 관계를 코드로 명확하게 표현
          </dd>
          <dd>
            <b>유지보수성 향상</b>: 공통 스타일을 한 곳에서 관리
          </dd>
        </dl>

        <dl className="dl_dot_lst mt_l">
          <dt className="font-16 mb_s">단점</dt>
          <dd>
            <b>파라미터 사용 불가</b>: 동적으로 값을 변경할 수 없음
          </dd>
          <dd>
            <b>복잡한 선택자 생성</b>: 여러 번 extend하면 복잡한 선택자 그룹이
            생성될 수 있음
          </dd>
          <dd>
            <b>의도하지 않은 상속</b>: 원하지 않는 선택자까지 그룹화될 수 있음
          </dd>
          <dd>
            <b>미디어 쿼리 제한</b>: 미디어 쿼리 안에서 extend 사용 시 제한이
            있음
          </dd>
        </dl>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">정리</h2>
        <p className="mt_l">
          <code className="t_blue">@extend</code>의 개념에 대해 알아본 내용을
          정리합니다.
          <br />
          선택자 그룹화를 통한 CSS 최적화와 의미적 상속 관계 표현이라는{" "}
          <code className="t_blue">@extend</code>의 핵심 가치를 다시 한 번
          정리해 두면, <b>다음 단계인 믹스인과의 비교</b>를 더 명확하게 이해할
          수 있습니다.
        </p>
        <ul className="dot_lst mt_m indent_small">
          <li>
            <b>
              <code className="t_blue t_600">@extend</code>의 개념
            </b>
            : 한 선택자의 스타일을 다른 선택자에 상속시키는 기능
          </li>
          <li>
            <b>동작 원리</b>: 선택자를 그룹화하여 공통 스타일을 공유
          </li>
          <li>
            <b>주요 특징</b>: 선택자 그룹화, 의미적 상속 관계 표현, CSS 최적화
          </li>
          <li>
            <b>활용 예시</b>: 에러 메시지 시스템, 버튼 시스템 등에서 활용
          </li>
          <li>
            <b>장단점</b>: CSS 파일 크기 감소, 성능 향상 등의 장점과 파라미터
            사용 불가 등의 단점
          </li>
        </ul>
        <p className="mt_m">
          다음 페이지에서는 <b>믹스인과의 차이점</b>을 더 자세히 비교해봅니다.
        </p>
      </section>

      <figure className="img_figure mt_l">
        <img src={IMG.SCSS + "/07_scss_01.png"} alt="@extend의 개념" />
        <figcaption>@extend의 개념</figcaption>
      </figure>
    </>
  );
}

export default ExtendConceptPage;
