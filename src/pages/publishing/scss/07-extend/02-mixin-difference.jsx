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
  title: "믹스인과의 차이점",
  description:
    "SCSS @extend와 믹스인의 차이점을 상세히 비교합니다. 동작 방식, CSS 출력 결과, 파라미터 사용, 성능, 사용 시기, 장단점을 예시와 함께 설명하여 언제 어떤 것을 사용해야 할지 명확한 가이드라인을 제시합니다.",
  keyword:
    "scss extend vs mixin, scss extend 차이, scss 믹스인 차이, scss extend 언제 사용, scss extend 비교",
};

function MixinDifferencePage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <b>
            <code className="t_blue">@extend</code>와 믹스인
          </b>
          은 비슷해 보이지만 <b>동작 방식과 사용 목적이 다릅니다</b>.
          <br />
          각각의 특징을 이해하고 <b>상황에 맞게 선택</b>하는 것이 중요합니다.
        </p>
        <p className="mt_s">
          이 페이지에서는 <code className="t_blue">@extend</code>와 믹스인의
          차이점을 상세히 비교하고, 동작 방식, CSS 출력 결과, 성능, 사용 시기
          등을 예시와 함께 설명하여 언제 어떤 것을 사용해야 할지 명확한
          가이드라인을 제시합니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">동작 방식의 차이</h2>
        <p className="mt_l">
          <code className="t_blue">@extend</code>와 믹스인의{" "}
          <b>근본적인 동작 방식 차이</b>를 이해하는 것이 중요합니다.
          <br />
          <code className="t_blue">@extend</code>는 선택자를 그룹화하고,
          믹스인은 스타일을 복사하는데, 이 차이가{" "}
          <b>최종 CSS 출력과 파일 크기, 성능에 직접적인 영향을</b> 미치기 때문에
          먼저 정리해 두는 것이 좋습니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">@extend: 선택자 그룹화</h3>
          <p className="mt_m">
            <code className="t_blue">@extend</code>는 <b>선택자를 그룹화</b>하여
            공통 스타일을 공유합니다.
            <br />
            컴파일 시 여러 선택자를 하나의 그룹으로 묶어서 출력합니다.
          </p>
          <CodeBlock
            title="@extend 동작 방식 예시"
            language="css"
            className="mt_m"
          >
            {`.button-base {
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 700;
}

.button-primary {
  @extend .button-base;
  background: #0a58ca;
}

.button-secondary {
  @extend .button-base;
  background: #6c757d;
}`}
          </CodeBlock>
          <CodeBlock
            title="컴파일된 CSS (@extend)"
            language="css"
            className="mt_m"
          >
            {`.button-base, .button-primary, .button-secondary {
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 700;
}

.button-primary {
  background: #0a58ca;
}

.button-secondary {
  background: #6c757d;
}`}
          </CodeBlock>
          <p className="mt_ms">
            선택자가 <b>그룹화되어 하나의 규칙으로 출력</b>되므로, CSS 파일
            크기가 작아집니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">믹스인: 스타일 복사</h3>
          <p className="mt_m">
            믹스인은 <b>스타일을 복사</b>하여 각 선택자에 삽입합니다.
            <br />
            컴파일 시 각 선택자마다 스타일이 개별적으로 복사됩니다.
          </p>
          <CodeBlock
            title="믹스인 동작 방식 예시"
            language="css"
            className="mt_m"
          >
            {`@mixin button-base {
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 700;
}

.button-primary {
  @include button-base;
  background: #0a58ca;
}

.button-secondary {
  @include button-base;
  background: #6c757d;
}`}
          </CodeBlock>
          <CodeBlock
            title="컴파일된 CSS (믹스인)"
            language="css"
            className="mt_m"
          >
            {`.button-primary {
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 700;
  background: #0a58ca;
}

.button-secondary {
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 700;
  background: #6c757d;
}`}
          </CodeBlock>
          <p className="mt_ms">
            각 선택자에 <b>스타일이 개별적으로 복사</b>되므로, CSS 파일 크기가
            더 큽니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">동작 방식 비교 요약</h3>
          <p className="mt_m">
            두 방식의 <b>핵심적인 차이</b>를 요약합니다.
          </p>
          <div className="table_summary value_150 mt_m">
            <ul className="lst_hd">
              <li className="cell value">구분</li>
              <li className="cell content">
                <code className="t_blue">@extend</code>
              </li>
              <li className="cell content">믹스인</li>
            </ul>
            <ul className="lst_bd">
              <li>
                <p className="cell value t_darkgreen">동작 방식</p>
                <p className="cell content" data-title="@extend">
                  선택자를 그룹화하여 공통 스타일 공유
                </p>
                <p className="cell content" data-title="믹스인">
                  스타일을 복사하여 각 선택자에 삽입
                </p>
              </li>
              <li>
                <p className="cell value t_darkgreen">CSS 출력</p>
                <p className="cell content" data-title="@extend">
                  {".a, .b { 공통 스타일 } 형태로 그룹화"}
                </p>
                <p className="cell content" data-title="믹스인">
                  각 선택자마다 스타일이 반복됨
                </p>
              </li>
              <li>
                <p className="cell value t_darkgreen">파일 크기</p>
                <p className="cell content" data-title="@extend">
                  일반적으로 더 작음 (그룹화)
                </p>
                <p className="cell content" data-title="믹스인">
                  더 큼 (반복)
                </p>
              </li>
            </ul>
          </div>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">파라미터 사용 가능 여부</h2>
        <p className="mt_l">
          파라미터 사용 가능 여부는 <b>가장 큰 차이점</b> 중 하나입니다.
          <br />
          <code className="t_blue">@extend</code>는 파라미터를 받을 수 없어
          정적인 스타일만 상속할 수 있지만, 믹스인은 파라미터를 통해{" "}
          <b>동적으로 값을 변경하며 재사용</b>할 수 있어 실무에서 선택 기준이
          됩니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <i>@extend:</i> <i className="t_red">파라미터 불가</i>
          </h3>
          <p className="mt_m">
            <code className="t_blue">@extend</code>는{" "}
            <b>파라미터를 사용할 수 없습니다</b>.
            <br />
            정적인 스타일만 상속할 수 있습니다.
          </p>
          <CodeBlock
            title="@extend 파라미터 불가 예시"
            language="css"
            className="mt_m"
          >
            {`// @extend는 파라미터를 받을 수 없음
.button-base {
  padding: 8px 16px;
  border-radius: 4px;
}

.button-primary {
  @extend .button-base;  // 파라미터 없음, 고정된 스타일만 상속
}

// 만약 다른 패딩이 필요하다면?
.button-large {
  // @extend .button-base($padding: 12px 24px);  // 불가능!
  // 새로운 선택자를 만들어야 함
}`}
          </CodeBlock>
          <p className="mt_ms">
            <code className="t_blue">@extend</code>는{" "}
            <b>동적으로 값을 변경할 수 없어</b> 유연성이 떨어집니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <i>믹스인:</i> <i className="t_blue">파라미터 가능</i>
          </h3>
          <p className="mt_m">
            믹스인은 <b>파라미터를 사용할 수 있어</b> 더 유연합니다.
            <br />
            동적으로 값을 변경할 수 있습니다.
          </p>
          <CodeBlock
            title="믹스인 파라미터 사용 예시"
            language="css"
            className="mt_m"
          >
            {`// 파라미터를 받는 믹스인
@mixin button($padding: 8px 16px, $bg-color: #0a58ca) {
  padding: $padding;
  background: $bg-color;
  border-radius: 4px;
}

.button-primary {
  @include button;  // 기본값 사용
}

.button-large {
  @include button(12px 24px);  // 패딩만 변경
}

.button-custom {
  @include button(10px 20px, #28a745);  // 둘 다 변경
}`}
          </CodeBlock>
          <p className="mt_ms">
            믹스인은 <b>파라미터를 통해 다양한 값으로 재사용</b>할 수 있어 훨씬
            유연합니다.
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">CSS 출력 결과 상세 비교</h2>
        <p className="mt_l">
          같은 스타일을 <code className="t_blue">@extend</code>와 믹스인으로
          구현했을 때 <b>CSS 출력 결과를 상세히 비교</b>해봅니다.
          <br />
          실제 컴파일된 CSS 코드를 나란히 비교해 보면, 선택자 그룹화와 스타일
          복사 방식의 차이가{" "}
          <b>파일 크기와 브라우저 성능에 어떤 영향을 주는지</b> 명확하게 확인할
          수 있습니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">여러 선택자에서 사용할 때</h3>
          <p className="mt_m">
            여러 선택자에서 같은 스타일을 사용할 때의 차이입니다.
          </p>
          <div className="mt_l indent">
            <h4 className="ml_mn">@extend 사용</h4>
            <CodeBlock
              title="@extend 사용 (SCSS)"
              language="css"
              className="mt_ms"
            >
              {`.button-base {
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 700;
}

.button-primary {
  @extend .button-base;
  background: #0a58ca;
}

.button-secondary {
  @extend .button-base;
  background: #6c757d;
}

.button-success {
  @extend .button-base;
  background: #28a745;
}`}
            </CodeBlock>
            <CodeBlock
              title="컴파일된 CSS (@extend)"
              language="css"
              className="mt_m"
            >
              {`.button-base, .button-primary, .button-secondary, .button-success {
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 700;
}

.button-primary {
  background: #0a58ca;
}

.button-secondary {
  background: #6c757d;
}

.button-success {
  background: #28a745;
}`}
            </CodeBlock>
            <p className="mt_ms">
              공통 스타일이 <b>하나의 선택자 그룹으로 묶여</b> 출력됩니다.
            </p>
          </div>
          <div className="mt_l indent">
            <h4 className="ml_mn">믹스인 사용</h4>
            <CodeBlock
              title="믹스인 사용 (SCSS)"
              language="css"
              className="mt_ms"
            >
              {`@mixin button-base {
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 700;
}

.button-primary {
  @include button-base;
  background: #0a58ca;
}

.button-secondary {
  @include button-base;
  background: #6c757d;
}

.button-success {
  @include button-base;
  background: #28a745;
}`}
            </CodeBlock>
            <CodeBlock
              title="컴파일된 CSS (믹스인)"
              language="css"
              className="mt_m"
            >
              {`.button-primary {
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 700;
  background: #0a58ca;
}

.button-secondary {
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 700;
  background: #6c757d;
}

.button-success {
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 700;
  background: #28a745;
}`}
            </CodeBlock>
            <p className="mt_ms">
              각 선택자마다 <b>스타일이 개별적으로 반복</b>되어 출력됩니다.
            </p>
          </div>
          <p className="mt_m">
            <code className="t_blue">@extend</code>는 <b>선택자를 그룹화</b>하여
            CSS가 더 작아지지만, 믹스인은 <b>각 선택자마다 반복</b>됩니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">파일 크기 비교</h3>
          <p className="mt_m">
            같은 스타일을 여러 선택자에서 사용할 때 <b>파일 크기 차이</b>를
            비교해봅니다.
          </p>
          <div className="table_summary value_150 mt_m">
            <ul className="lst_hd">
              <li className="cell value">방식</li>
              <li className="cell content">CSS 크기 (예시)</li>
              <li className="cell content">설명</li>
            </ul>
            <ul className="lst_bd">
              <li>
                <p className="cell value t_darkgreen">
                  <code className="t_blue">@extend</code>
                </p>
                <p className="cell content" data-title="CSS 크기">
                  약 150바이트
                </p>
                <p className="cell content" data-title="설명">
                  선택자 그룹화로 중복 제거
                </p>
              </li>
              <li>
                <p className="cell value t_darkgreen">믹스인</p>
                <p className="cell content" data-title="CSS 크기">
                  약 300바이트
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
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">성능 비교</h2>
        <p className="mt_l">
          <code className="t_blue">@extend</code>와 믹스인의 <b>성능 차이</b>를
          알아봅니다.
          <br />
          브라우저가 스타일을 매칭하고 렌더링하는 방식의 차이를 이해하면,{" "}
          <b>대규모 프로젝트나 성능이 중요한 페이지</b>에서 어떤 방식을 선택할지
          판단하는 데 도움이 됩니다.
        </p>
        <div className="table_summary value_150 mt_m">
          <ul className="lst_hd">
            <li className="cell value">항목</li>
            <li className="cell content">
              <code className="t_blue">@extend</code>
            </li>
            <li className="cell content">믹스인</li>
          </ul>
          <ul className="lst_bd">
            <li>
              <p className="cell value t_darkgreen">렌더링 성능</p>
              <p className="cell content" data-title="@extend">
                약간 더 빠름
              </p>
              <p className="cell content" data-title="믹스인">
                정상
              </p>
            </li>
            <li>
              <p className="cell value t_darkgreen">CSS 파일 크기</p>
              <p className="cell content" data-title="@extend">
                작음 (선택자 그룹화)
              </p>
              <p className="cell content" data-title="믹스인">
                큼 (스타일 반복)
              </p>
            </li>
            <li>
              <p className="cell value t_darkgreen">컴파일 시간</p>
              <p className="cell content" data-title="@extend">
                느림 (선택자 분석 필요)
              </p>
              <p className="cell content" data-title="믹스인">
                빠름 (단순 복사)
              </p>
            </li>
            <li>
              <p className="cell value t_darkgreen">선택자 복잡도</p>
              <p className="cell content" data-title="@extend">
                높음 (그룹화된 선택자)
              </p>
              <p className="cell content" data-title="믹스인">
                낮음 (개별 선택자)
              </p>
            </li>
            <li>
              <p className="cell value t_darkgreen">메모리 사용량</p>
              <p className="cell content" data-title="@extend">
                낮음 (중복 제거)
              </p>
              <p className="cell content" data-title="믹스인">
                높음 (스타일 중복)
              </p>
            </li>
            <li>
              <p className="cell value t_darkgreen">유지보수성</p>
              <p className="cell content" data-title="@extend">
                낮음 (의존성 복잡)
              </p>
              <p className="cell content" data-title="믹스인">
                높음 (독립적 사용)
              </p>
            </li>
          </ul>
        </div>

        <dl className="dl_dot_lst mt_xl">
          <dt className="font-16 mb_s">렌더링 성능</dt>
          <dd>
            <code className="t_blue">@extend</code>는 <b>선택자를 그룹화</b>하여
            브라우저가 스타일을 매칭하는 속도가 약간 더 빠를 수 있습니다.
            <br />
            예를 들어{" "}
            <code className="t_blue">.button, .link, .card {"{ ... }"}</code>
            처럼 그룹화된 선택자는 브라우저가 한 번에 처리할 수 있어
            효율적입니다.
          </dd>
          <dd>
            반면 믹스인은 각 선택자마다 스타일이 개별적으로 작성되므로, 선택자가
            많을수록 CSS 파일이 커지고 매칭 시간이 늘어날 수 있습니다.
          </dd>
        </dl>

        <dl className="dl_dot_lst mt_l">
          <dt className="font-16 mb_s">CSS 파일 크기</dt>
          <dd>
            <p>
              <code className="t_blue">@extend</code>는{" "}
              <b>스타일을 한 번만 작성하고 선택자만 그룹화</b>하므로 CSS 파일
              크기가 작습니다.
              <br />
              같은 스타일을 여러 선택자에 적용할 때, 믹스인은 스타일을
              반복하지만 <code className="t_blue">@extend</code>는 선택자만
              추가합니다.
            </p>
            <CodeBlock
              title="파일 크기 비교 예시"
              language="css"
              className="mt_ms"
            >
              {`/* @extend 사용 */
.button, .link, .card {
  padding: 10px;
  border-radius: 4px;
}
/* 총 3줄 */

/* 믹스인 사용 */
.button {
  padding: 10px;
  border-radius: 4px;
}
.link {
  padding: 10px;
  border-radius: 4px;
}
.card {
  padding: 10px;
  border-radius: 4px;
}
/* 총 9줄 */`}
            </CodeBlock>
          </dd>
        </dl>

        <dl className="dl_dot_lst mt_l">
          <dt className="font-16 mb_s">컴파일 시간</dt>
          <dd>
            <code className="t_blue">@extend</code>는{" "}
            <b>선택자 간의 관계를 분석하고 그룹화</b>하는 과정이 필요하여 컴파일
            시간이 상대적으로 느립니다.
            <br />
            특히 복잡한 선택자 구조나 여러 단계의{" "}
            <code className="t_blue">@extend</code>가 중첩되면 컴파일 시간이
            크게 증가할 수 있습니다.
          </dd>
          <dd>
            믹스인은 <b>단순히 코드를 복사</b>하는 방식이므로 컴파일 시간이
            빠르고 예측 가능합니다.
          </dd>
        </dl>

        <dl className="dl_dot_lst mt_l">
          <dt className="font-16 mb_s">선택자 복잡도</dt>
          <dd>
            <code className="t_blue">@extend</code>를 많이 사용하면{" "}
            <b>선택자가 복잡해질 수 있습니다</b>.
            <br />
            예를 들어{" "}
            <code className="t_blue">
              .button, .link, .card, .badge, .alert {"{ ... }"}
            </code>
            처럼 긴 선택자 목록이 생성될 수 있어, 가독성이 떨어질 수 있습니다.
          </dd>
          <dd>
            믹스인은 각 선택자가 독립적으로 유지되므로{" "}
            <b>선택자가 단순하고 명확</b>합니다.
          </dd>
        </dl>

        <dl className="dl_dot_lst mt_l">
          <dt className="font-16 mb_s">메모리 사용량</dt>
          <dd>
            <code className="t_blue">@extend</code>는{" "}
            <b>스타일을 중복하지 않고 선택자만 추가</b>하므로 메모리 사용량이
            적습니다.
          </dd>
          <dd>
            같은 스타일을 여러 곳에서 사용할 때, 믹스인은 각각의 스타일 블록을
            생성하지만 <code className="t_blue">@extend</code>는 하나의 스타일
            블록만 유지합니다.
          </dd>
        </dl>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">언제 무엇을 사용할까?</h2>
        <p className="mt_l">
          상황에 따라{" "}
          <b>
            <code className="t_blue">@extend</code>와 믹스인 중 어떤 것을
            사용할지
          </b>{" "}
          가이드라인을 제시합니다.
          <br />
          의미적 상속 관계, 파라미터 필요 여부, 미디어 쿼리 사용 등{" "}
          <b>프로젝트의 구체적인 요구사항</b>에 맞는 선택 기준을 정리해 두면
          실무에서 혼란 없이 결정할 수 있습니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">@extend를 사용하는 경우</h3>
          <p className="mt_m">
            다음과 같은 경우에는{" "}
            <b>
              <code className="t_blue">@extend</code>를 사용
            </b>
            하는 것이 좋습니다:
          </p>
          <ul className="dot_lst mt_sm indent_small">
            <li>
              <b>정적인 스타일</b>: 파라미터가 필요 없는 고정된 스타일
            </li>
            <li>
              <b>의미적 상속 관계</b>: {'"A는 B의 한 종류"'} 같은 상속 관계가
              명확한 경우
            </li>
            <li>
              <b>CSS 파일 크기 최적화</b>: 파일 크기를 줄이고 싶을 때
            </li>
            <li>
              <b>여러 선택자에서 동일 사용</b>: 많은 선택자에서 정확히 같은
              스타일을 사용할 때
            </li>
            <li>
              <b>성능 최적화</b>: 브라우저 렌더링 성능을 최적화하고 싶을 때
            </li>
          </ul>
          <CodeBlock title="@extend 사용 예시" language="css" className="mt_m">
            {`// 에러 메시지의 기본 스타일 (정적, 파라미터 불필요)
.error {
  color: #dc3545;
  font-weight: 700;
  padding: 8px;
}

// 에러의 한 종류 (의미적 상속 관계)
.serious-error {
  @extend .error;  // @extend 사용 적합
  border: 2px solid #dc3545;
}

.critical-error {
  @extend .error;  // @extend 사용 적합
  font-size: 18px;
}`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">믹스인을 사용하는 경우</h3>
          <p className="mt_m">
            다음과 같은 경우에는 <b>믹스인을 사용</b>하는 것이 좋습니다:
          </p>
          <ul className="dot_lst mt_sm indent_small">
            <li>
              <b>파라미터가 필요한 경우</b>: 동적으로 값을 변경해야 할 때
            </li>
            <li>
              <b>미디어 쿼리 안에서 사용</b>: 미디어 쿼리 내부에서 사용할 때
            </li>
            <li>
              <b>복잡한 로직</b>: 조건문이나 반복문이 필요한 경우
            </li>
            <li>
              <b>일반적인 유틸리티</b>: 여러 곳에서 다양한 값으로 사용되는
              유틸리티
            </li>
            <li>
              <b>@content 사용</b>: 동적 콘텐츠 삽입이 필요한 경우
            </li>
          </ul>
          <CodeBlock title="믹스인 사용 예시" language="css" className="mt_m">
            {`// 파라미터가 필요한 경우
@mixin button($bg-color, $padding: 8px 16px) {
  background: $bg-color;
  padding: $padding;
  border-radius: 4px;
}

.button-primary {
  @include button(#0a58ca);  // 믹스인 사용 적합
}

.button-large {
  @include button(#0a58ca, 12px 24px);  // 다양한 값 사용
}

// 미디어 쿼리 안에서 사용
@media (min-width: 768px) {
  .container {
    @include button(#0a58ca);  // 믹스인 사용 적합
  }
}`}
          </CodeBlock>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">실무 권장사항</h2>
        <p className="mt_l">
          실무에서{" "}
          <b>
            <code className="t_blue">@extend</code>와 믹스인을 어떻게 사용할지
          </b>{" "}
          권장사항을 제시합니다.
          <br />
          대부분의 경우 믹스인을 권장하는 이유와,{" "}
          <code className="t_blue">@extend</code>를 사용할 때 주의해야 할 점,
          그리고 <b>두 방식을 함께 활용하는 하이브리드 접근법</b>까지 실무에서
          바로 적용할 수 있는 가이드를 제공합니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">일반적인 권장사항</h3>
          <p className="mt_m">
            대부분의 경우 <b>믹스인을 사용하는 것을 권장</b>합니다.
          </p>
          <ul className="dot_lst mt_sm indent_small">
            <li>
              <b>유연성</b>: 파라미터를 사용할 수 있어 더 유연함
            </li>
            <li>
              <b>예측 가능성</b>: CSS 출력 결과를 예측하기 쉬움
            </li>
            <li>
              <b>디버깅</b>: 문제 발생 시 디버깅이 쉬움
            </li>
            <li>
              <b>호환성</b>: 미디어 쿼리 등 모든 상황에서 사용 가능
            </li>
            <li>
              <b>유지보수</b>: 코드 변경 시 영향 범위를 파악하기 쉬움
            </li>
          </ul>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">@extend 사용 시 주의사항</h3>
          <p className="mt_m">
            <code className="t_blue">@extend</code>를 사용할 때는{" "}
            <b>다음 사항을 주의</b>해야 합니다:
          </p>
          <ul className="dot_lst mt_sm indent_small">
            <li>
              <b>의도하지 않은 그룹화</b>: 원하지 않는 선택자까지 그룹화될 수
              있음
            </li>
            <li>
              <b>복잡한 선택자 생성</b>: 여러 번 extend하면 복잡한 선택자 그룹이
              생성됨
            </li>
            <li>
              <b>미디어 쿼리 제한</b>: 미디어 쿼리 안에서 extend 사용 시 제한이
              있음
            </li>
            <li>
              <b>파라미터 불가</b>: 동적으로 값을 변경할 수 없음
            </li>
          </ul>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">하이브리드 접근법</h3>
          <p className="mt_m">
            실무에서는{" "}
            <b>
              <code className="t_blue">@extend</code>와 믹스인을 함께 사용
            </b>
            하는 하이브리드 접근법도 가능합니다.
          </p>
          <CodeBlock
            title="하이브리드 접근법 예시"
            language="css"
            className="mt_m"
          >
            {`// 정적인 기본 스타일은 @extend 사용
%message-base {
  padding: 12px;
  border-radius: 4px;
}

.error {
  @extend %message-base;
}

// 동적인 스타일은 믹스인 사용
@mixin button($bg-color) {
  background: $bg-color;
  padding: 8px 16px;
}

.button-primary {
  @include button(#0a58ca);
}`}
          </CodeBlock>
          <p className="mt_ms">
            이렇게 하면 <b>각각의 장점을 활용</b>할 수 있습니다.
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">정리</h2>
        <p className="mt_l">
          <code className="t_blue">@extend</code>와 믹스인의 차이점에 대해
          알아본 내용을 정리합니다.
          <br />
          동작 방식, 파라미터, CSS 출력, 성능, 사용 시기 등 핵심 차이점을 한
          번에 정리해 두면, <b>다음 페이지에서 다룰 주의사항과 사용 가이드</b>를
          더 깊이 이해할 수 있습니다.
        </p>
        <ul className="dot_lst mt_m indent_small">
          <li>
            <b>동작 방식</b>: <code className="t_blue">@extend</code>는 선택자
            그룹화, 믹스인은 스타일 복사
          </li>
          <li>
            <b>파라미터</b>: <code className="t_blue">@extend</code>는 불가,
            믹스인은 가능
          </li>
          <li>
            <b>CSS 출력</b>: <code className="t_blue">@extend</code>는
            그룹화되어 작음, 믹스인은 반복되어 큼
          </li>
          <li>
            <b>성능</b>: <code className="t_blue">@extend</code>가 약간 더 빠를
            수 있음
          </li>
          <li>
            <b>사용 시기</b>: <code className="t_blue">@extend</code>는 정적
            스타일/의미적 상속, 믹스인은 파라미터 필요/유틸리티
          </li>
          <li>
            <b>권장사항</b>: 대부분의 경우 믹스인 사용 권장,{" "}
            <code className="t_blue">@extend</code>는 특수한 경우에만
          </li>
        </ul>
        <p className="mt_m">
          다음 페이지에서는 <b>@extend 사용 시 주의사항</b>을 자세히 알아봅니다.
        </p>
      </section>

      <figure className="img_figure mt_l">
        <img
          src={IMG.SCSS + "/07_scss_02.png"}
          alt="@extend와 믹스인의 차이점"
        />
        <figcaption>@extend와 믹스인의 차이점</figcaption>
      </figure>
    </>
  );
}

export default MixinDifferencePage;
