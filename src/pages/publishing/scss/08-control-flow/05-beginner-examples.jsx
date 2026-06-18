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
  title: "초급자가 이해하기 쉬운 예제 중심 설명",
  description:
    "SCSS 조건문과 반복문을 초급자가 이해하기 쉬운 예제 중심으로 상세히 설명합니다. 일상 생활 비유, 단계별 설명, 실전 예제, 자주 하는 실수와 해결 방법을 제공합니다.",
  keyword:
    "scss 초급자 예제, scss 조건문 예제, scss 반복문 예제, scss 기초 예제, scss 학습",
};

function BeginnerExamplesPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          조건문과 반복문은 처음 접하면 어려울 수 있습니다.
          <br />이 페이지에서는 <b>일상 생활 비유와 단계별 설명</b>을 통해
          초급자도 쉽게 이해할 수 있도록 설명합니다.
        </p>
        <p className="mt_s">
          이 페이지에서는 조건문과 반복문을 초급자가 이해하기 쉬운 예제 중심으로
          상세히 설명하고, 일상 생활 비유, 단계별 설명, 실전 예제, 자주 하는
          실수와 해결 방법을 제공합니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">조건문을 일상 생활로 이해하기</h2>
        <p className="mt_l">
          조건문을 <b>일상 생활의 예시</b>로 먼저 이해해봅니다.
          <br />
          코드 문법보다 익숙한 상황에서 개념을 먼저 잡으면, 이후 SCSS 예제를
          읽을 때도 <b>각 분기가 어떤 상황을 표현하는지</b> 훨씬 쉽게 연결할 수
          있습니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">일상 생활 예시</h3>
          <p className="mt_m">일상 생활에서도 조건문을 사용합니다:</p>
          <div className="table_summary value_150 mt_m">
            <ul className="lst_hd">
              <li className="cell value">상황</li>
              <li className="cell content">조건문 표현</li>
              <li className="cell content">SCSS 코드</li>
            </ul>
            <ul className="lst_bd">
              <li>
                <p className="cell value t_darkgreen">날씨에 따른 옷 입기</p>
                <p className="cell content" data-title="조건문 표현">
                  만약 비가 오면 우산을 가져가고, 그렇지 않으면 가져가지 않는다
                </p>
                <p className="cell content" data-title="SCSS 코드">
                  <code>
                    {"@if $weather == 'rain' { 우산 } @else { 없음 }"}
                  </code>
                </p>
              </li>
              <li>
                <p className="cell value t_darkgreen">점수에 따른 등급</p>
                <p className="cell content" data-title="조건문 표현">
                  만약 점수가 90점 이상이면 A, 80점 이상이면 B, 그렇지 않으면 C
                </p>
                <p className="cell content" data-title="SCSS 코드">
                  <code>
                    {
                      "@if $score >= 90 { A } @else if $score >= 80 { B } @else { C }"
                    }
                  </code>
                </p>
              </li>
              <li>
                <p className="cell value t_darkgreen">시간에 따른 인사</p>
                <p className="cell content" data-title="조건문 표현">
                  {
                    '만약 오전이면 "좋은 아침", 오후면 "좋은 오후", 저녁이면 "좋은 저녁"'
                  }
                </p>
                <p className="cell content" data-title="SCSS 코드">
                  <code>
                    {
                      "@if $time == 'morning' { 아침 } @else if $time == 'afternoon' { 오후 } @else { 저녁 }"
                    }
                  </code>
                </p>
              </li>
            </ul>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">SCSS 조건문으로 변환</h3>
          <p className="mt_m">
            일상 생활의 조건문을 <b>SCSS 코드로 변환</b>해봅니다.
          </p>

          <div className="mt_l indent">
            <h4 className="ml_mn">날씨 예시를 조건문으로 변환</h4>
            <CodeBlock
              title="날씨 예시를 SCSS로"
              language="css"
              className="mt_ms"
            >
              {`// 일상: 만약 비가 오면 우산을 가져간다
$weather: 'rain';

@if $weather == 'rain' {
  .umbrella {
    display: block;  // 우산 표시
  }
} @else {
  .umbrella {
    display: none;  // 우산 숨김
  }
}`}
            </CodeBlock>
          </div>

          <div className="mt_l indent">
            <h4 className="ml_mn">점수 예시를 조건문으로 변환</h4>
            <CodeBlock
              title="점수 예시를 SCSS로"
              language="css"
              className="mt_ms"
            >
              {`// 일상: 점수에 따른 등급
$score: 85;

@if $score >= 90 {
  .grade {
    color: #28a745;  // A 등급 (초록색)
  }
} @else if $score >= 80 {
  .grade {
    color: #0a58ca;  // B 등급 (파란색)
  }
} @else {
  .grade {
    color: #dc3545;  // C 등급 (빨간색)
  }
}`}
            </CodeBlock>
          </div>

          <div className="mt_l indent">
            <h4 className="ml_mn">시간 인사 예시를 조건문으로 변환</h4>
            <CodeBlock
              title="시간 인사 예시를 SCSS로"
              language="css"
              className="mt_ms"
            >
              {`// 일상: 시간에 따른 인사
$time: 'afternoon';

@if $time == 'morning' {
  .greeting {
    content: "좋은 아침입니다";
    color: #ffc107;  // 아침 (노란색)
  }
} @else if $time == 'afternoon' {
  .greeting {
    content: "좋은 오후입니다";
    color: #0a58ca;  // 오후 (파란색)
  }
} @else {
  .greeting {
    content: "좋은 저녁입니다";
    color: #6c757d;  // 저녁 (회색)
  }
}`}
            </CodeBlock>
          </div>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">반복문을 일상 생활로 이해하기</h2>
        <p className="mt_l">
          반복문도 <b>일상 생활의 예시</b>로 먼저 이해해봅니다.
          <br />
          숫자 세기, 장바구니 물건 계산처럼 반복 구조를 떠올려 보면, SCSS에서{" "}
          <b>@for, @each가 실제로 무엇을 자동화하는지</b> 직관적으로 이해할 수
          있습니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">일상 생활 예시</h3>
          <p className="mt_m">일상 생활에서도 반복문을 사용합니다:</p>
          <div className="table_summary value_150 mt_m">
            <ul className="lst_hd">
              <li className="cell value">상황</li>
              <li className="cell content">반복문 표현</li>
              <li className="cell content">SCSS 코드</li>
            </ul>
            <ul className="lst_bd">
              <li>
                <p className="cell value t_darkgreen">1부터 10까지 숫자 세기</p>
                <p className="cell content" data-title="반복문 표현">
                  1, 2, 3, 4, 5, 6, 7, 8, 9, 10을 하나씩 말한다
                </p>
                <p className="cell content" data-title="SCSS 코드">
                  <code>{"@for $i from 1 through 10 { $i }"}</code>
                </p>
              </li>
              <li>
                <p className="cell value t_darkgreen">장바구니 물건 계산</p>
                <p className="cell content" data-title="반복문 표현">
                  장바구니의 각 물건을 하나씩 꺼내서 가격을 더한다
                </p>
                <p className="cell content" data-title="SCSS 코드">
                  <code>{"@each $item in $cart { 처리 }"}</code>
                </p>
              </li>
              <li>
                <p className="cell value t_darkgreen">학생 명단 불러오기</p>
                <p className="cell content" data-title="반복문 표현">
                  명단의 각 학생 이름을 하나씩 불러본다
                </p>
                <p className="cell content" data-title="SCSS 코드">
                  <code>{"@each $name in $students { $name }"}</code>
                </p>
              </li>
            </ul>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">SCSS 반복문으로 변환</h3>
          <p className="mt_m">
            일상 생활의 반복문을 <b>SCSS 코드로 변환</b>해봅니다.
          </p>

          <div className="mt_l indent">
            <h4 className="ml_mn">숫자 세기 예시를 반복문으로 변환</h4>
            <CodeBlock
              title="숫자 세기 예시를 SCSS로"
              language="css"
              className="mt_ms"
            >
              {`// 일상: 1부터 5까지 숫자를 하나씩 말한다
@for $i from 1 through 5 {
  .number-#{$i} {
    // $i는 1, 2, 3, 4, 5로 증가
    content: "#{$i}번째";
  }
}`}
            </CodeBlock>
          </div>

          <div className="mt_l indent">
            <h4 className="ml_mn">장바구니 예시를 반복문으로 변환</h4>
            <CodeBlock
              title="장바구니 예시를 SCSS로"
              language="css"
              className="mt_ms"
            >
              {`// 일상: 장바구니의 각 물건을 하나씩 처리
$cart: apple, banana, orange;

@each $item in $cart {
  .item-#{$item} {
    // $item은 apple, banana, orange를 하나씩 가져옴
    display: block;
  }
}`}
            </CodeBlock>
          </div>

          <div className="mt_l indent">
            <h4 className="ml_mn">학생 명단 예시를 반복문으로 변환</h4>
            <CodeBlock
              title="학생 명단 예시를 SCSS로"
              language="css"
              className="mt_ms"
            >
              {`// 일상: 명단의 각 학생 이름을 하나씩 불러온다
$students: kim, lee, park, choi;

@each $name in $students {
  .student-#{$name} {
    // $name은 kim, lee, park, choi를 하나씩 가져옴
    display: list-item;
  }
}`}
            </CodeBlock>
          </div>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">단계별 학습 예제</h2>
        <p className="mt_l">
          초급자를 위한 <b>단계별 학습 예제</b>를 제공합니다.
          <br />
          <b className="t_black">문제 상황</b> →{" "}
          <b className="t_black">단계별 해결</b> →{" "}
          <b className="t_black">컴파일 결과</b> 순서로 따라가며 연습하면,
          조건문과 반복문이 실제 프로젝트에서{" "}
          <b>어떻게 쓰이는지 손에 익히는 데</b> 도움이 됩니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">예제 1: 간단한 조건문 (버튼 색상)</h3>

          <div className="mt_l indent">
            <h4 className="ml_mn t_blue">문제 상황</h4>
            <p className="mt_ms t_blue weight-600">
              버튼 타입에 따라 다른 색상을 적용하고 싶습니다.
            </p>
          </div>

          <div className="mt_l indent">
            <h4 className="ml_mn">단계 1: 변수 정의</h4>
            <CodeBlock title="변수 정의" language="css" className="mt_ms">
              {"$button-type: 'primary';"}
            </CodeBlock>
          </div>

          <div className="mt_l indent">
            <h4 className="ml_mn">단계 2: 조건문 작성</h4>
            <CodeBlock title="조건문 작성" language="css" className="mt_ms">
              {`$button-type: 'primary';

@if $button-type == 'primary' {
  .button {
    background: #0a58ca;
  }
} @else {
  .button {
    background: #6c757d;
  }
}`}
            </CodeBlock>
          </div>

          <div className="mt_l indent">
            <h4 className="ml_mn">단계 3: 결과 확인</h4>
            <CodeBlock title="컴파일된 CSS" language="css" className="mt_ms">
              {`.button {
  background: #0a58ca;
}
/* $button-type이 'primary'이므로 첫 번째 조건 실행 */`}
            </CodeBlock>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">예제 2: 간단한 반복문 (마진 클래스)</h3>

          <div className="mt_l indent">
            <h4 className="ml_mn t_blue">문제 상황</h4>
            <p className="mt_ms t_blue weight-600">
              마진 탑 클래스를 5개 만들고 싶습니다 (.mt-1, .mt-2, .mt-3, .mt-4,
              .mt-5).
            </p>
          </div>

          <div className="mt_ml indent">
            <h4 className="ml_mn">단계 1: 반복문 구조 작성</h4>
            <CodeBlock title="반복문 구조" language="css" className="mt_ms">
              {`@for $i from 1 through 5 {
  // 여기에 클래스를 만들 코드 작성
}`}
            </CodeBlock>
          </div>

          <div className="mt_l indent">
            <h4 className="ml_mn">단계 2: 클래스 이름 작성</h4>
            <CodeBlock title="클래스 이름" language="css" className="mt_ms">
              {`@for $i from 1 through 5 {
  .mt-#{$i} {
    // 마진 값 작성
  }
}`}
            </CodeBlock>
          </div>

          <div className="mt_l indent">
            <h4 className="ml_mn">단계 3: 마진 값 계산</h4>
            <CodeBlock title="마진 값 계산" language="css" className="mt_ms">
              {`@for $i from 1 through 5 {
  .mt-#{$i} {
    margin-top: #{$i * 8}px;
  }
}`}
            </CodeBlock>
          </div>

          <div className="mt_l indent">
            <h4 className="ml_mn">단계 4: 결과 확인</h4>
            <CodeBlock title="컴파일된 CSS" language="css" className="mt_ms">
              {`.mt-1 { margin-top: 8px; }
.mt-2 { margin-top: 16px; }
.mt-3 { margin-top: 24px; }
.mt-4 { margin-top: 32px; }
.mt-5 { margin-top: 40px; }
/* 5개 클래스가 자동으로 생성됨 */`}
            </CodeBlock>
          </div>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">실전 예제: 버튼 시스템 만들기</h2>
        <p className="mt_l">
          조건문과 반복문을 함께 사용하여{" "}
          <b>실제로 사용할 수 있는 버튼 시스템</b>을 만들어봅니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn t_blue">목표</h3>
          <p className="mt_m t_blue weight-600">
            다음과 같은 버튼 클래스를 자동으로 생성하고 싶습니다:
          </p>
          <ul className="dot_lst mt_sm indent_small">
            <li>
              <code className="t_blue">.btn-primary</code>,{" "}
              <code className="t_blue">.btn-secondary</code>,{" "}
              <code className="t_blue">.btn-success</code>,{" "}
              <code className="t_blue">.btn-danger</code>
            </li>
            <li>각 버튼은 다른 배경색을 가짐</li>
            <li>호버 시 색상이 어두워짐</li>
          </ul>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">단계별 구현</h3>

          <div className="mt_l indent">
            <h4 className="ml_mn">1단계: 색상 맵 정의</h4>
            <CodeBlock title="색상 맵 정의" language="css" className="mt_ms">
              {`$button-colors: (
  primary: #0a58ca,
  secondary: #6c757d,
  success: #28a745,
  danger: #dc3545
);`}
            </CodeBlock>
          </div>

          <div className="mt_l indent">
            <h4 className="ml_mn">2단계: @each로 순회</h4>
            <CodeBlock title="@each로 순회" language="css" className="mt_ms">
              {`$button-colors: (
  primary: #0a58ca,
  secondary: #6c757d,
  success: #28a745,
  danger: #dc3545
);

@each $name, $color in $button-colors {
  // 여기에 버튼 스타일 작성
}`}
            </CodeBlock>
          </div>

          <div className="mt_l indent">
            <h4 className="ml_mn">3단계: 버튼 스타일 작성</h4>
            <CodeBlock
              title="버튼 스타일 작성"
              language="css"
              className="mt_ms"
            >
              {`@each $name, $color in $button-colors {
  .btn-#{$name} {
    background: $color;
    color: #ffffff;
    padding: 8px 16px;
    border-radius: 4px;

    &:hover {
      background: darken($color, 10%);
    }
  }
}`}
            </CodeBlock>
          </div>

          <div className="mt_l indent">
            <h4 className="ml_mn">4단계: 완성된 코드</h4>
            <CodeBlock title="완성된 코드" language="css" className="mt_ms">
              {`$button-colors: (
  primary: #0a58ca,
  secondary: #6c757d,
  success: #28a745,
  danger: #dc3545
);

@each $name, $color in $button-colors {
  .btn-#{$name} {
    background: $color;
    color: #ffffff;
    padding: 8px 16px;
    border-radius: 4px;

    &:hover {
      background: darken($color, 10%);
    }
  }
}`}
            </CodeBlock>
          </div>

          <div className="mt_l indent">
            <h4 className="ml_mn">5단계: 결과 확인</h4>
            <CodeBlock title="컴파일된 CSS" language="css" className="mt_ms">
              {`.btn-primary {
  background: #0a58ca;
  color: #ffffff;
  padding: 8px 16px;
  border-radius: 4px;
}

.btn-primary:hover {
  background: #084298;
}

.btn-secondary {
  background: #6c757d;
  color: #ffffff;
  padding: 8px 16px;
  border-radius: 4px;
}

.btn-secondary:hover {
  background: #545b62;
}
... (나머지 버튼 생략) ...`}
            </CodeBlock>
          </div>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">자주 하는 실수와 해결 방법</h2>
        <p className="mt_l">
          초급자가 <b>자주 하는 실수와 해결 방법</b>을 정리합니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">실수 1: 인터폴레이션 빼먹기</h3>
          <p className="mt_m">
            선택자 이름에 변수를 사용할 때 <b>인터폴레이션을 빼먹는 실수</b>
            입니다.
          </p>

          <div className="mt_l indent">
            <h4 className="ml_mn">❌ 잘못된 예시</h4>
            <CodeBlock title="❌ 잘못된 예시" language="css" className="mt_ms">
              {`@for $i from 1 through 5 {
  .item-$i {  // 에러! 인터폴레이션 없음
    margin: $i * 8px;
  }
}`}
            </CodeBlock>
          </div>

          <div className="mt_l indent">
            <h4 className="ml_mn">✅ 올바른 예시</h4>
            <CodeBlock title="✅ 올바른 예시" language="css" className="mt_ms">
              {`@for $i from 1 through 5 {
  .item-#{$i} {  // 올바름! 인터폴레이션 사용
    margin: $i * 8px;
  }
}`}
            </CodeBlock>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">실수 2: through와 to 혼동</h3>
          <p className="mt_m">
            <code className="t_blue">through</code>와{" "}
            <code className="t_blue">to</code>의 차이를 모르고{" "}
            <b>잘못 사용하는 실수</b>입니다.
          </p>
          <CodeBlock title="through와 to 차이" language="css" className="mt_m">
            {`// through: 끝 숫자 포함 (5번 반복)
@for $i from 1 through 5 {
  // $i는 1, 2, 3, 4, 5
}

// to: 끝 숫자 제외 (4번 반복)
@for $i from 1 to 5 {
  // $i는 1, 2, 3, 4 (5는 제외)
}`}
          </CodeBlock>
          <p className="mt_ms">
            일반적으로{" "}
            <b>
              <code className="t_blue">through</code>를 더 많이 사용합니다.
            </b>
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">실수 3: 맵 순회 시 변수 순서</h3>
          <p className="mt_m">
            맵을 순회할 때 <b>변수 순서를 잘못 쓰는 실수</b>입니다.
          </p>
          <CodeBlock title="맵 순회 변수 순서" language="css" className="mt_m">
            {`$colors: (
  primary: #0a58ca,
  secondary: #6c757d
);

// ❌ 잘못된 순서: 값, 키 (에러 발생)
@each $color, $name in $colors {
  // 순서가 바뀌면 값이 잘못됨
}

// ✅ 올바른 순서: 키, 값
@each $name, $color in $colors {
  // $name은 키, $color는 값
}`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">실수 4: 조건문에서 = 와 == 혼동</h3>
          <p className="mt_m">
            조건문에서 <b>비교 연산자를 잘못 사용하는 실수</b>입니다.
          </p>
          <CodeBlock title="비교 연산자 사용" language="css" className="mt_m">
            {`$type: 'primary';

// ✅ 올바른 사용
@if $type == 'primary' {
  // == (비교 연산자): $type이 'primary'와 같은지 비교할 때 사용
  color: blue;
}

// ❌ 잘못된 사용
@if $type = 'primary' {
  // 에러 발생!
  // = 는 할당 연산자이므로 조건문에서 사용할 수 없음
  // SCSS 컴파일러가 "조건문에서 변수에 값을 할당할 수 없다"고 에러를 발생시킴
}`}
          </CodeBlock>
          <p className="mt_ms">
            <b>
              <code className="t_blue">=</code>
            </b>
            는 <b>할당 연산자</b>로 변수에 값을 저장할 때 사용하고,
            <br />
            <b>
              <code className="t_blue">==</code>
            </b>
            는 <b>비교 연산자</b>로 두 값을 비교할 때 사용합니다.
            <br />
            조건문에서는 값을 비교해야 하므로{" "}
            <b>
              반드시 <code className="t_blue">==</code>를 사용
            </b>
            해야 합니다.
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">학습 체크리스트</h2>
        <p className="mt_l">
          조건문과 반복문을 <b>제대로 이해했는지 확인</b>하는 체크리스트입니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">조건문 체크리스트</h3>
          <p className="mt_m">다음 항목을 모두 이해했는지 확인하세요:</p>
          <ul className="dot_lst mt_sm indent_small">
            <li>
              <b>@if 기본 문법</b>: {"@if 조건 { } 형태로 작성할 수 있는가?"}
            </li>
            <li>
              <b>@else 사용</b>: @else로 거짓일 때의 코드를 작성할 수 있는가?
            </li>
            <li>
              <b>@else if 사용</b>: 여러 조건을 @else if로 확인할 수 있는가?
            </li>
            <li>
              <b>비교 연산자</b>
              {": ==, !=, >, < 등을 사용할 수 있는가?"}
            </li>
            <li>
              <b>논리 연산자</b>: and, or, not을 사용할 수 있는가?
            </li>
            <li>
              <b>믹스인과 함께 사용</b>: 믹스인 안에서 조건문을 사용할 수
              있는가?
            </li>
          </ul>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">반복문 체크리스트</h3>
          <p className="mt_m">다음 항목을 모두 이해했는지 확인하세요:</p>
          <ul className="dot_lst mt_sm indent_small">
            <li>
              <b>@for 기본 문법</b>: @for $i from 1 through 5 형태로 작성할 수
              있는가?
            </li>
            <li>
              <b>through vs to</b>: through와 to의 차이를 이해하는가?
            </li>
            <li>
              <b>인터폴레이션</b>: 선택자 이름에 변수 사용 시{" "}
              <code>#{"{}"}</code>를 사용할 수 있는가?
            </li>
            <li>
              <b>@each 기본 문법</b>: @each $item in $list 형태로 작성할 수
              있는가?
            </li>
            <li>
              <b>맵 순회</b>: @each $key, $value in $map 형태로 맵을 순회할 수
              있는가?
            </li>
            <li>
              <b>클래스 자동 생성</b>: 반복문으로 유틸리티 클래스를 생성할 수
              있는가?
            </li>
          </ul>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">추가 학습 자료</h2>
        <p className="mt_l">
          더 깊이 학습하기 위한 <b>추가 예제</b>를 제공합니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">연습 문제 1: 간격 유틸리티 만들기</h3>
          <p className="mt_m">
            다음 요구사항에 맞는 간격 유틸리티를 만들어보세요:
          </p>
          <ul className="dot_lst mt_sm indent_small">
            <li>
              <code className="t_blue">.mt-1</code>부터{" "}
              <code className="t_blue">.mt-10</code>까지 마진 탑 클래스 생성
            </li>
            <li>
              각 클래스는 <code>8px</code>의 배수로 마진 값 설정 (예:{" "}
              <code>.mt-1 = 8px</code>, <code>.mt-2 = 16px</code>)
            </li>
          </ul>
          <CodeBlock title="정답 예시" language="css" className="mt_m">
            {`@for $i from 1 through 10 {
  .mt-#{$i} {
    margin-top: #{$i * 8}px;
  }
}`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">연습 문제 2: 색상 유틸리티 만들기</h3>
          <p className="mt_m">
            다음 요구사항에 맞는 색상 유틸리티를 만들어보세요:
          </p>
          <ul className="dot_lst mt_sm indent_small">
            <li>primary, secondary, success 색상에 대해 배경색 클래스 생성</li>
            <li>
              각 클래스는 <code>.bg-primary</code>, <code>.bg-secondary</code>,{" "}
              <code>.bg-success</code> 형태
            </li>
          </ul>
          <CodeBlock title="정답 예시" language="css" className="mt_m">
            {`$colors: (
  primary: #0a58ca,
  secondary: #6c757d,
  success: #28a745
);

@each $name, $color in $colors {
  .bg-#{$name} {
    background-color: $color;
  }
}`}
          </CodeBlock>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">정리</h2>
        <p className="mt_l">
          초급자가 이해하기 쉬운 예제 중심 설명에 대해 알아본 내용을 정리합니다.
        </p>
        <ul className="dot_lst mt_m indent_small">
          <li>
            <b>일상 생활 비유</b>: 조건문과 반복문을 일상 생활 예시로 이해
          </li>
          <li>
            <b>단계별 학습</b>: 간단한 예제부터 시작하여 점진적으로 복잡한
            예제로
          </li>
          <li>
            <b>실전 예제</b>: 버튼 시스템 만들기 등 실제로 사용할 수 있는 예제
          </li>
          <li>
            <b>자주 하는 실수</b>: 인터폴레이션 빼먹기, <code>through</code>/
            <code>to</code> 혼동, 변수 순서 등
          </li>
          <li>
            <b>학습 체크리스트</b>: 조건문과 반복문을 제대로 이해했는지 확인
          </li>
          <li>
            <b>추가 학습 자료</b>: 연습 문제를 통해 실력 향상
          </li>
        </ul>
        <p className="mt_m">
          이제 조건문과 반복문의 기초를 모두 배웠습니다. 다음 섹션에서는{" "}
          <b>파일 분리와 SCSS 구조 설계</b>에 대해 자세히 알아봅니다.
        </p>
      </section>

      <figure className="img_figure mt_l">
        <img src={IMG.SCSS + "/08_scss_05.png"} alt="초급자 예제 모음" />
        <figcaption>초급자 예제 모음</figcaption>
      </figure>
    </>
  );
}

export default BeginnerExamplesPage;
