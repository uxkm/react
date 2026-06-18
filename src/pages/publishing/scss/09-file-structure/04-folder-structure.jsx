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
  title: "기본적인 SCSS 폴더 구조 예시",
  description:
    "SCSS 프로젝트의 기본적인 폴더 구조를 상세히 알아봅니다. 작은 프로젝트, 중간 프로젝트, 큰 프로젝트별 폴더 구조, 각 폴더의 역할, 파일 구성 예시를 제공합니다.",
  keyword:
    "scss 폴더 구조, scss 파일 구조, scss 프로젝트 구조, scss 디렉토리 구조",
};

function FolderStructurePage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          SCSS 프로젝트의 <b>폴더 구조를 체계적으로 구성</b>하면 코드를 관리하기
          쉬워집니다.
          <br />
          프로젝트 크기에 따라 <b>다양한 폴더 구조</b>를 사용할 수 있으며, 각
          구조의 장단점을 이해하는 것이 중요합니다.
        </p>
        <p className="mt_s">
          이 페이지에서는 작은 프로젝트, 중간 프로젝트, 큰 프로젝트별 폴더 구조,
          각 폴더의 역할, 파일 구성 예시를 상세히 알아봅니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">폴더 구조의 중요성</h2>
        <p className="mt_l">
          체계적인 폴더 구조는 <b>코드를 찾고 관리하기 쉽게</b> 만들어줍니다.
          <br />
          프로젝트 크기에 맞는 구조를 선택하면, 파일 수가 늘어나도{" "}
          <b>어디에 무엇이 있는지 직관적으로 파악</b>할 수 있어 협업과 유지보수
          효율이 크게 향상됩니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">좋은 폴더 구조의 특징</h3>
          <p className="mt_m">좋은 폴더 구조는 다음과 같은 특징을 가집니다:</p>
          <ul className="dot_lst mt_sm indent_small">
            <li>
              <b>명확한 역할</b>: 각 폴더가 명확한 역할을 가짐
            </li>
            <li>
              <b>직관적 네이밍</b>: 폴더명만 봐도 무엇이 들어있는지 알 수 있음
            </li>
            <li>
              <b>확장 가능성</b>: 프로젝트가 커져도 구조를 유지할 수 있음
            </li>
            <li>
              <b>일관성</b>: 프로젝트 전체에서 일관된 구조 사용
            </li>
          </ul>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">프로젝트 크기별 구조</h3>
          <p className="mt_m">
            프로젝트 크기에 따라 <b>다른 폴더 구조</b>를 사용합니다.
          </p>
          <div className="table_summary value_150 mt_m">
            <ul className="lst_hd">
              <li className="cell value">프로젝트 크기</li>
              <li className="cell content">폴더 구조</li>
              <li className="cell content">특징</li>
            </ul>
            <ul className="lst_bd">
              <li>
                <p className="cell value t_darkgreen">작은 프로젝트</p>
                <p className="cell content" data-title="폴더 구조">
                  단일 폴더, 파일만 분리
                </p>
                <p className="cell content" data-title="특징">
                  간단하고 직관적
                </p>
              </li>
              <li>
                <p className="cell value t_darkgreen">중간 프로젝트</p>
                <p className="cell content" data-title="폴더 구조">
                  카테고리별 폴더 (base, components 등)
                </p>
                <p className="cell content" data-title="특징">
                  체계적이고 확장 가능
                </p>
              </li>
              <li>
                <p className="cell value t_darkgreen">큰 프로젝트</p>
                <p className="cell content" data-title="폴더 구조">
                  다층 폴더 구조
                </p>
                <p className="cell content" data-title="특징">
                  세밀한 분류, 대규모 관리
                </p>
              </li>
            </ul>
          </div>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">작은 프로젝트 구조</h2>
        <p className="mt_l">
          <b>작은 프로젝트</b>에서 사용하는 간단한 폴더 구조입니다.
          <br />
          모든 파일을 하나의 폴더에 두는 단순한 구조로,{" "}
          <b>빠르게 시작하고 필요할 때 확장</b>할 수 있어 랜딩 페이지나 소규모
          웹사이트에 적합합니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">기본 구조</h3>
          <p className="mt_m">
            모든 SCSS 파일을 <b>하나의 폴더에</b> 두는 구조입니다.
          </p>
          <CodeBlock title="작은 프로젝트 구조" className="mt_m">
            {`project/
  ├─ scss/
  │   ├─ _variables.scss
  │   ├─ _mixins.scss
  │   ├─ _buttons.scss
  │   ├─ _cards.scss
  │   └─ main.scss
  └─ css/
      └─ main.css`}
          </CodeBlock>
          <p className="mt_ms">
            이 구조는 <b>간단하고 직관적</b>이어서 작은 프로젝트에 적합합니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">각 파일의 역할</h3>
          <p className="mt_m">
            각 파일이 <b>어떤 역할을 하는지</b> 설명합니다.
          </p>
          <div className="table_summary value_150 mt_m">
            <ul className="lst_hd">
              <li className="cell value">파일명</li>
              <li className="cell content">역할</li>
              <li className="cell content">내용</li>
            </ul>
            <ul className="lst_bd">
              <li>
                <p className="cell value">
                  <code className="t_darkgreen">_variables.scss</code>
                </p>
                <p className="cell content" data-title="역할">
                  변수 정의
                </p>
                <p className="cell content" data-title="내용">
                  색상, 폰트, 여백 등 모든 변수
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code className="t_darkgreen">_mixins.scss</code>
                </p>
                <p className="cell content" data-title="역할">
                  믹스인 정의
                </p>
                <p className="cell content" data-title="내용">
                  재사용 가능한 스타일 블록
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code className="t_darkgreen">_buttons.scss</code>
                </p>
                <p className="cell content" data-title="역할">
                  버튼 컴포넌트
                </p>
                <p className="cell content" data-title="내용">
                  버튼 관련 모든 스타일
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code className="t_darkgreen">_cards.scss</code>
                </p>
                <p className="cell content" data-title="역할">
                  카드 컴포넌트
                </p>
                <p className="cell content" data-title="내용">
                  카드 관련 모든 스타일
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code className="t_darkgreen">main.scss</code>
                </p>
                <p className="cell content" data-title="역할">
                  메인 파일
                </p>
                <p className="cell content" data-title="내용">
                  모든 파셜을 불러와서 컴파일
                </p>
              </li>
            </ul>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">main.scss 구성</h3>
          <p className="mt_m">
            메인 파일에서 <b>모든 파셜을 불러오는</b> 예시입니다.
          </p>
          <CodeBlock title="main.scss 예시" language="css" className="mt_m">
            {`// main.scss
@use "variables";
@use "mixins";
@use "buttons";
@use "cards";

// 모든 파셜을 불러와서 하나의 CSS로 컴파일`}
          </CodeBlock>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">중간 프로젝트 구조</h2>
        <p className="mt_l">
          <b>중간 규모의 프로젝트</b>에서 사용하는 카테고리별 폴더 구조입니다.
          <br />
          abstracts, base, components, layout 등 기능별로 폴더를 나누면,{" "}
          <b>파일 수가 많아져도 체계적으로 관리</b>할 수 있어 중규모 웹사이트나
          웹 애플리케이션에 적합합니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">카테고리별 구조</h3>
          <p className="mt_m">
            기능별로 <b>폴더를 나누어</b> 관리하는 구조입니다.
          </p>
          <CodeBlock title="중간 프로젝트 구조" className="mt_m">
            {`project/
  ├─ scss/
  │   ├─ abstracts/
  │   │   ├─ _variables.scss
  │   │   ├─ _mixins.scss
  │   │   └─ _functions.scss
  │   ├─ base/
  │   │   ├─ _reset.scss
  │   │   └─ _typography.scss
  │   ├─ components/
  │   │   ├─ _buttons.scss
  │   │   ├─ _cards.scss
  │   │   └─ _forms.scss
  │   ├─ layout/
  │   │   ├─ _header.scss
  │   │   ├─ _footer.scss
  │   │   └─ _grid.scss
  │   └─ main.scss
  └─ css/
      └─ main.css`}
          </CodeBlock>
          <p className="mt_ms">
            이 구조는 <b>체계적이고 확장 가능</b>하여 중간 규모 프로젝트에
            적합합니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">각 폴더의 역할</h3>
          <p className="mt_m">
            각 폴더가 <b>어떤 역할을 하는지</b> 설명합니다.
          </p>
          <div className="table_summary value_150 mt_m">
            <ul className="lst_hd">
              <li className="cell value">폴더명</li>
              <li className="cell content">역할</li>
              <li className="cell content">포함 파일</li>
            </ul>
            <ul className="lst_bd">
              <li>
                <p className="cell value">
                  <code className="t_darkgreen">abstracts/</code>
                </p>
                <p className="cell content" data-title="역할">
                  추상적 요소
                </p>
                <p className="cell content" data-title="포함 파일">
                  변수, 믹스인, 함수 등
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code className="t_darkgreen">base/</code>
                </p>
                <p className="cell content" data-title="역할">
                  기본 스타일
                </p>
                <p className="cell content" data-title="포함 파일">
                  리셋, 타이포그래피 등
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code className="t_darkgreen">components/</code>
                </p>
                <p className="cell content" data-title="역할">
                  컴포넌트
                </p>
                <p className="cell content" data-title="포함 파일">
                  버튼, 카드, 폼 등
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code className="t_darkgreen">layout/</code>
                </p>
                <p className="cell content" data-title="역할">
                  레이아웃
                </p>
                <p className="cell content" data-title="포함 파일">
                  헤더, 푸터, 그리드 등
                </p>
              </li>
            </ul>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">main.scss 구성</h3>
          <p className="mt_m">
            카테고리별 구조에서 <b>main.scss를 구성</b>하는 예시입니다.
          </p>
          <CodeBlock title="main.scss 예시" language="css" className="mt_m">
            {`// main.scss
// 1. 추상적 요소 (변수, 믹스인 등)
@use "abstracts/variables";
@use "abstracts/mixins";

// 2. 기본 스타일
@use "base/reset";
@use "base/typography";

// 3. 레이아웃
@use "layout/header";
@use "layout/footer";
@use "layout/grid";

// 4. 컴포넌트
@use "components/buttons";
@use "components/cards";
@use "components/forms";`}
          </CodeBlock>
          <p className="mt_ms">
            이렇게 하면 <b>의존성 순서가 명확</b>하고,{" "}
            <b>각 카테고리의 역할이 분명</b>합니다.
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">큰 프로젝트 구조</h2>
        <p className="mt_l">
          프로젝트 규모가 커지고 파일이 많아지면, 카테고리별 구조만으로는 관리가
          어려워집니다.
          <br />
          이런 경우에는 <b>폴더 안에 다시 폴더를 만들어서</b> 더 세밀하게
          구분하는 <b>다층 폴더 구조</b>를 사용합니다.
          <br />
          예를 들어, 컴포넌트가 20개 이상이라면{" "}
          <code className="t_blue">components/</code> 폴더 안에 다시 세부
          카테고리별로 폴더를 나누어 관리하는 것이 효율적입니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">다층 구조</h3>
          <p className="mt_m">
            더 <b>세밀하게 폴더를 나누어</b> 관리하는 구조입니다.
          </p>
          <CodeBlock title="큰 프로젝트 구조" className="mt_m">
            {`project/
  ├─ scss/
  │   ├─ abstracts/
  │   │   ├─ _variables/
  │   │   │   ├─ _colors.scss
  │   │   │   ├─ _spacing.scss
  │   │   │   └─ _typography.scss
  │   │   ├─ _mixins/
  │   │   │   ├─ _buttons.scss
  │   │   │   └─ _layout.scss
  │   │   └─ _functions.scss
  │   ├─ base/
  │   │   ├─ _reset.scss
  │   │   └─ _typography.scss
  │   ├─ components/
  │   │   ├─ _buttons/
  │   │   │   ├─ _button-base.scss
  │   │   │   ├─ _button-primary.scss
  │   │   │   └─ _button-secondary.scss
  │   │   ├─ _cards/
  │   │   │   ├─ _card-base.scss
  │   │   │   └─ _card-variant.scss
  │   │   └─ _forms/
  │   │       ├─ _input.scss
  │   │       └─ _textarea.scss
  │   ├─ layout/
  │   │   ├─ _header.scss
  │   │   ├─ _footer.scss
  │   │   └─ _grid.scss
  │   ├─ pages/
  │   │   ├─ _home.scss
  │   │   └─ _about.scss
  │   └─ main.scss
  └─ css/
      └─ main.css`}
          </CodeBlock>
          <p className="mt_ms">
            이 구조는 <b>대규모 프로젝트에서 세밀한 관리</b>가 필요할 때
            사용합니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">추가 폴더 설명</h3>
          <p className="mt_m">
            큰 프로젝트 구조의 <b>추가 폴더들</b>을 설명합니다.
          </p>
          <div className="table_summary value_200 mt_m">
            <ul className="lst_hd">
              <li className="cell value">폴더명</li>
              <li className="cell content">역할</li>
              <li className="cell content">포함 내용</li>
            </ul>
            <ul className="lst_bd">
              <li>
                <p className="cell value">
                  <code className="t_darkgreen">abstracts/_variables/</code>
                </p>
                <p className="cell content" data-title="역할">
                  변수 세분화
                </p>
                <p className="cell content" data-title="포함 내용">
                  색상, 간격, 타이포그래피 등 변수 타입별 분리
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code className="t_darkgreen">components/_buttons/</code>
                </p>
                <p className="cell content" data-title="역할">
                  컴포넌트 세분화
                </p>
                <p className="cell content" data-title="포함 내용">
                  버튼의 기본, 변형 등 세부 분리
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code className="t_darkgreen">pages/</code>
                </p>
                <p className="cell content" data-title="역할">
                  페이지별 스타일
                </p>
                <p className="cell content" data-title="포함 내용">
                  특정 페이지에만 사용하는 스타일
                </p>
              </li>
            </ul>
          </div>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">7-1 패턴 구조</h2>

        <article className="mt_xl indent">
          <h3 className="ml_mn">7-1 패턴이란?</h3>
          <p className="mt_m">
            <b className="t_blue">7-1 패턴</b>은 SCSS에서{" "}
            <b>널리 사용되는 표준 폴더 구조</b>입니다. 이름에서 알 수 있듯이,{" "}
            <b>7개의 폴더와 1개의 메인 파일(main.scss)</b>로 구성되어 있어서
            &quot;7-1 패턴&quot;이라고 불립니다.
            <br />각 폴더는 코드의 성격에 따라 명확하게 구분되어 있어,{" "}
            <b>어떤 코드를 어디에 넣어야 할지 쉽게 판단</b>할 수 있습니다.
            <br />
            프로젝트 규모와 상관없이 <b>일관된 구조를 유지</b>할 수 있어, 팀
            작업이나 장기적인 프로젝트 관리에 특히 유용합니다.
          </p>
          <CodeBlock title="7-1 패턴 구조" language="css" className="mt_m">
            {`scss/
  ├─ abstracts/     /* 1. 추상적 요소 */
  │   ├─ _variables.scss
  │   ├─ _mixins.scss
  │   └─ _functions.scss
  ├─ base/          /* 2. 기본 스타일 */
  │   ├─ _reset.scss
  │   └─ _typography.scss
  ├─ components/    /* 3. 컴포넌트 */
  │   ├─ _buttons.scss
  │   └─ _cards.scss
  ├─ layout/        /* 4. 레이아웃 */
  │   ├─ _header.scss
  │   └─ _footer.scss
  ├─ pages/         /* 5. 페이지 */
  │   └─ _home.scss
  ├─ themes/        /* 6. 테마 */
  │   ├─ _light.scss
  │   └─ _dark.scss
  ├─ vendors/       /* 7. 외부 라이브러리 */
  │   └─ _bootstrap.scss
  └─ main.scss      /* 메인 파일 */`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">각 폴더의 역할</h3>
          <p className="mt_m">
            <b className="t_blue">7-1 패턴</b>의 <b>각 폴더 역할</b>을
            설명합니다.
          </p>
          <div className="table_summary value_150 mt_m">
            <ul className="lst_hd">
              <li className="cell value">폴더</li>
              <li className="cell content">역할</li>
              <li className="cell content">예시</li>
            </ul>
            <ul className="lst_bd">
              <li>
                <p className="cell value">
                  <code className="t_darkgreen">abstracts/</code>
                </p>
                <p className="cell content" data-title="역할">
                  추상적 요소
                </p>
                <p className="cell content" data-title="예시">
                  변수, 믹스인, 함수
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code className="t_darkgreen">base/</code>
                </p>
                <p className="cell content" data-title="역할">
                  기본 스타일
                </p>
                <p className="cell content" data-title="예시">
                  리셋, 타이포그래피
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code className="t_darkgreen">components/</code>
                </p>
                <p className="cell content" data-title="역할">
                  재사용 가능한 컴포넌트
                </p>
                <p className="cell content" data-title="예시">
                  버튼, 카드, 폼
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code className="t_darkgreen">layout/</code>
                </p>
                <p className="cell content" data-title="역할">
                  레이아웃 관련
                </p>
                <p className="cell content" data-title="예시">
                  헤더, 푸터, 그리드
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code className="t_darkgreen">pages/</code>
                </p>
                <p className="cell content" data-title="역할">
                  페이지별 스타일
                </p>
                <p className="cell content" data-title="예시">
                  홈, 어바웃 페이지
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code className="t_darkgreen">themes/</code>
                </p>
                <p className="cell content" data-title="역할">
                  테마 관련
                </p>
                <p className="cell content" data-title="예시">
                  다크 모드, 라이트 모드
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code className="t_darkgreen">vendors/</code>
                </p>
                <p className="cell content" data-title="역할">
                  외부 라이브러리
                </p>
                <p className="cell content" data-title="예시">
                  Bootstrap, Normalize
                </p>
              </li>
            </ul>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">main.scss 구성</h3>
          <p className="mt_m">
            <b className="t_blue">7-1 패턴</b>에서 <b>main.scss를 구성</b>하는
            예시입니다.
          </p>
          <CodeBlock title="7-1 패턴 main.scss" language="css" className="mt_m">
            {`// main.scss
// 1. 추상적 요소
@use "abstracts/variables";
@use "abstracts/mixins";

// 2. 기본 스타일
@use "base/reset";
@use "base/typography";

// 3. 레이아웃
@use "layout/header";
@use "layout/footer";

// 4. 컴포넌트
@use "components/buttons";
@use "components/cards";

// 5. 페이지
@use "pages/home";

// 6. 테마
@use "themes/dark";`}
          </CodeBlock>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">폴더 구조 선택 가이드</h2>
        <p className="mt_l">
          프로젝트에 <b>어떤 폴더 구조를 선택할지</b> 가이드라인을 제시합니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">작은 프로젝트 (1~5페이지)</h3>
          <p className="mt_m">
            작은 프로젝트에는 <b>단일 폴더 구조</b>가 적합합니다.
          </p>
          <CodeBlock title="작은 프로젝트 구조" language="css" className="mt_m">
            {`scss/
  ├─ _variables.scss
  ├─ _mixins.scss
  ├─ _buttons.scss
  └─ main.scss`}
          </CodeBlock>
          <p className="mt_ms">
            <b>간단하고 직관적</b>이어서 작은 프로젝트에 적합합니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">중간 프로젝트 (5~20페이지)</h3>
          <p className="mt_m">
            중간 프로젝트에는 <b>카테고리별 폴더 구조</b>가 적합합니다.
          </p>
          <CodeBlock title="중간 프로젝트 구조" language="css" className="mt_m">
            {`scss/
  ├─ abstracts/      // _variables.scss, _mixins.scss, _functions.scss 등
  ├─ base/           // _reset.scss, _typography.scss 등
  ├─ components/     // _buttons.scss, _cards.scss, _forms.scss 등
  ├─ layout/         // _header.scss, _footer.scss, _grid.scss 등
  └─ main.scss`}
          </CodeBlock>
          <p className="mt_ms">
            <b>체계적이고 확장 가능</b>하여 중간 프로젝트에 적합합니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">큰 프로젝트 (20페이지 이상)</h3>
          <p className="mt_m">
            큰 프로젝트에는 <b>7-1 패턴 또는 다층 구조</b>가 적합합니다.
          </p>
          <CodeBlock title="큰 프로젝트 구조" language="css" className="mt_m">
            {`scss/
  ├─ abstracts/      // _variables.scss, _mixins.scss, _functions.scss 등
  ├─ base/           // _reset.scss, _typography.scss 등
  ├─ components/     // _buttons.scss, _cards.scss, _forms.scss 등
  ├─ layout/         // _header.scss, _footer.scss, _grid.scss 등
  ├─ pages/          // _home.scss, _about.scss, _contact.scss 등
  ├─ themes/         // _light.scss, _dark.scss 등
  ├─ vendors/        // _bootstrap.scss, _normalize.scss 등
  └─ main.scss`}
          </CodeBlock>
          <p className="mt_ms">
            <b>세밀한 분류와 대규모 관리</b>가 가능하여 큰 프로젝트에
            적합합니다.
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">정리</h2>
        <p className="mt_l">
          기본적인 SCSS 폴더 구조 예시에 대해 알아본 내용을 정리합니다.
        </p>
        <ul className="dot_lst mt_m indent_small">
          <li>
            <b>폴더 구조의 중요성</b>: 명확한 역할, 직관적 네이밍, 확장 가능성,
            일관성
          </li>
          <li>
            <b>작은 프로젝트 구조</b>: 단일 폴더, 파일만 분리, 간단하고 직관적
          </li>
          <li>
            <b>중간 프로젝트 구조</b>: 카테고리별 폴더, 체계적이고 확장 가능
          </li>
          <li>
            <b>큰 프로젝트 구조</b>: 다층 폴더, 세밀한 분류, 대규모 관리
          </li>
          <li>
            <b>7-1 패턴</b>: 7개 폴더와 1개 메인 파일로 구성된 널리 사용되는
            패턴
          </li>
          <li>
            <b>구조 선택 가이드</b>: 프로젝트 크기에 따라 적절한 구조 선택
          </li>
        </ul>
        <p className="mt_m">
          다음 페이지에서는 <b>소규모 프로젝트에서의 SCSS 구조 설계</b>를 자세히
          알아봅니다.
        </p>
      </section>

      <figure className="img_figure mt_l">
        <img src={IMG.SCSS + "/09_scss_04.png"} alt="폴더 구조 예시" />
        <figcaption>폴더 구조 예시</figcaption>
      </figure>
    </>
  );
}

export default FolderStructurePage;
