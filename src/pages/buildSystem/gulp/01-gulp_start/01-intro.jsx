import { useGulpPageMeta } from '@/hooks/useGulpPageMeta'
import { IMG } from '@/config/path'

function IntroPage() {
  useGulpPageMeta()

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <h2 className="sound_only">요약 설명</h2>
        <p>
          Gulp는 Node.js 기반의 웹 개발을 위한 프로세스 자동화 도구 중 하나입니다.
          <br />
          주로 퍼블리싱 작업에 사용되며, HTML, CSS, JavaScript 파일을 자동으로 컴파일하거나
          최적화하고, 파일 변경을 감지하여 브라우저를 새로고침하거나 라이브 리로드를
          제공합니다.
          <br />
          Gulp는 작업 흐름을 스트림을 통해 파이프라인으로 연결하여 구성하고, 코드 작성을
          단순화하며 생산성을 높일 수 있는 강력한 도구입니다.
        </p>
        <p className="mt_s">
          Gulp는 Node.js의 강점 중 하나인 스트림(Stream) 기반으로 작동하여, 데이터를 작은
          청크로 처리하고 필요할 때 중간 중간 결과를 전달하는 방식으로 빌드 프로세스를
          효율적으로 수행합니다. 이 스트림 기반의 처리는 메모리를 효율적으로 사용하며 작업
          속도를 높이는 데 기여하여, Gulp가 Node.js의 강점을 잘 살리고 빠른 작업을 지원하는
          원리입니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">Gulp로 할 수 있는 일은?</h2>

        <p className="mt_m">
          Gulp를 사용하여 다음과 같은 여러 가지 작업을 자동화할 수 있습니다.
        </p>
        <ol className="ol_lst info_lst mt_ms">
          <li>
            <strong>CSS 전처리기 처리</strong>
            <p>
              Gulp를 사용하면 Sass, Less, Stylus 등과 같은 CSS 전처리기로 작성된 파일을
              자동으로 컴파일할 수 있습니다.
              <br />
              이렇게 하면 개발자는 보다 효율적으로 CSS를 작성하고 유지보수할 수 있습니다.
            </p>
          </li>
          <li>
            <strong>자바스크립트 번들링 및 최적화</strong>
            <p>
              Gulp를 통해 JavaScript 파일을 번들링하고 파일 크기를 최소화(minification)할
              수 있습니다.
              <br />
              여러 개의 JavaScript 파일을 하나의 파일로 합치고, 불필요한 공백과 주석을
              제거하여 파일 크기를 최적화할 수 있습니다. 또한, Browserify, webpack 등의
              도구를 사용하여 모듈 시스템을 구현할 수도 있습니다.
            </p>
          </li>
          <li>
            <strong>이미지 최적화</strong>
            <p>
              Gulp를 사용하여 이미지 파일을 압축하고 최적화할 수 있습니다.
              <br />
              이미지 크기를 줄여 웹 페이지의 이미지 로딩 시간을 단축하고 사용자 경험을
              향상시킬 수 있습니다.
            </p>
          </li>
          <li>
            <strong>HTML 템플릿 처리</strong>
            <p>
              Gulp를 사용하여 HTML 템플릿을 동적으로 생성하거나 공통된 부분을 추출하여
              관리할 수 있습니다.
              <br />
              이를 통해 HTML 파일의 재사용성을 높이고 유지보수를 용이하게 할 수 있습니다.
            </p>
          </li>
          <li>
            <strong>자동 리로드</strong>
            <p>
              Gulp를 사용하여 파일이 수정될 때마다 브라우저를 자동으로 새로고침하여
              개발자가 변경 사항을 즉시 확인할 수 있도록 할 수 있습니다.
              <br />
              개발자가 작업 중인 내용을 실시간으로 확인하고 디버깅하는 데 유용합니다.
            </p>
          </li>
          <li>
            <strong>테스트 실행</strong>
            <p>
              Gulp를 사용하여 자동으로 테스트를 실행하고 결과를 보고할 수 있습니다.
              <br />
              이 과정을 통해 개발자는 코드 변경으로 인한 예기치 않은 문제를 빠르게
              발견하고 해결할 수 있습니다.
            </p>
          </li>
          <li>
            <strong>파일 복사</strong>
            <p>
              Gulp를 사용하여 웹 페이지에 필요한 정적 파일(이미지, 폰트 등)을 소스
              디렉토리에서 빌드 디렉토리로 자동으로 복사할 수 있습니다.
              <br />
              이 자동화 과정을 세팅하여 개발자는 정적 파일을 관리하는데 드는 수고를 덜 수
              있습니다.
            </p>
          </li>
        </ol>
        <p className="mt_ms">
          이 외에도 Gulp를 사용하여 다양한 작업을 자동화할 수 있으며, 이를 통해 개발자는 더
          효율적으로 작업할 수 있고 반복적인 작업을 자동화하여 생산성을 높일 수 있습니다.
        </p>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">Gulp를 사용해야 하는 이유</h2>

        <p className="mt_m">
          Gulp는 많은 개발자들에게 선택되어 웹 개발 과정을 보다 효율적으로 관리하고 개선할
          수 있는 강력한 도구로 인정받고 있습니다.
        </p>
        <ol className="ol_lst info_lst mt_ms">
          <li>
            <strong>자동화된 작업의 효율성</strong>
            <p>
              Gulp는 반복적이고 지루한 작업들을 자동화함으로써 개발자의 생산성을 높입니다.
              <br />
              CSS 전처리기 파일을 컴파일하거나 자바스크립트 파일을 번들링하고 압축하는
              작업을 Gulp를 통해 간단하게 자동화할 수 있습니다. 개발자는 보다 복잡하고
              시간이 많이 소요되는 작업들에 더 집중할 수 있습니다.
            </p>
          </li>
          <li>
            <strong>워크플로우의 통합성</strong>
            <p>
              Gulp를 사용하면 웹 개발에 필요한 다양한 작업들을 한 곳에서 효율적으로 관리할
              수 있습니다. 예를 들어, 프로젝트의 빌드, 테스트, 배포 등의 작업을 Gulp를
              통해 한번에 처리할 수 있습니다. 이를 통해 개발 환경을 통합하고 작업의
              일관성을 유지할 수 있습니다.
            </p>
          </li>
          <li>
            <strong>성능 최적화와 사용자 경험 향상</strong>
            <p>
              Gulp를 사용하여 CSS 파일을 압축하고 이미지를 최적화하여 웹 페이지의 성능을
              향상시킬 수 있습니다.
              <br />
              파일 크기를 최소화하고 불필요한 리소스를 제거함으로써 빠른 로딩 속도와 우수한
              사용자 경험을 제공하며, 검색 엔진 최적화(SEO)에도 도움을 줍니다.
            </p>
          </li>
          <li>
            <strong>플러그인 생태계의 다양성</strong>
            <p>
              Gulp는 다양한 플러그인들을 제공하고 있어 웹 개발에 필요한 다양한 작업들을
              손쉽게 수행할 수 있습니다.
              <br />
              예를 들어, Autoprefixer를 사용하여 자동으로 벤더 프리픽스를 추가하거나
              BrowserSync를 사용하여 실시간으로 브라우저를 리로드하는 등의 작업을 간단하게
              구현할 수 있습니다.
            </p>
          </li>
          <li>
            <strong>커뮤니티 지원과 문서화</strong>
            <p>
              Gulp는 활발한 커뮤니티를 가지고 있어서 사용자들 간의 지원과 정보 공유가
              활발합니다.
              <br />
              공식 문서와 다양한 온라인 자료들을 통해 Gulp의 사용법을 쉽게 익힐 수 있으며,
              문제가 발생했을 때 빠르게 해결할 수 있는 지원체계가 구축되어 있습니다.
            </p>
          </li>
          <li>
            <strong>유연성</strong>
            <p>
              Gulp는 사용자의 요구에 맞게 유연하게 설정할 수 있는 장점이 있습니다. 다양한
              작업들을 조합하여 개발 환경에 맞게 설정할 수 있어서 다양한 프로젝트에 적용할
              수 있습니다.
            </p>
          </li>
        </ol>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">Gulp의 주요 기능</h2>

        <p className="mt_m">
          Gulp는 웹 개발 작업을 자동화하고 생산성을 향상시키는데 사용되는 스트림 기반 빌드
          시스템입니다.
        </p>
        <ol className="ol_lst info_lst mt_ms">
          <li>
            <strong>태스크 실행(Task Running)</strong>
            <p>
              Gulp를 사용하면 프로젝트에서 정의된 여러 작업(태스크)을 실행할 수 있습니다.
              <br />
              CSS 전처리기를 컴파일하거나 JavaScript 파일을 번들링하고 압축하는 작업을
              수행할 수 있으며, 반복적이고 번거로운 작업들을 자동화하여 생산성을 높일 수
              있습니다.
            </p>
          </li>
          <li>
            <strong>스트림 기반 처리(Stream-Based Processing)</strong>
            <p>
              Gulp는 파일 처리를 스트림으로 처리합니다.
              <br />
              이는 파일이 메모리에 한 번에 로드되지 않고 작은 조각으로 처리되는 것을
              의미합니다. 이러한 스트림 기반 처리 방식은 대규모 파일을 효율적으로 처리할
              수 있도록 도와줍니다.
              <br />
              또한 스트림을 통해 파일이 흐르는 동안 다양한 작업들을 연속적으로 적용할 수
              있습니다.
            </p>
          </li>
          <li>
            <strong>플러그인 사용(Plugin Usage)</strong>
            <p>
              Gulp는 다양한 플러그인을 사용하여 기능을 확장할 수 있습니다.
              <br />
              이러한 플러그인들은 CSS 전처리기 처리, 자바스크립트 번들링 및 최적화, 이미지
              최적화, 파일 병합 등 다양한 작업을 자동화하는 데 도움이 됩니다. 개발자는
              필요한 작업에 맞는 플러그인을 선택하여 Gulp와 통합할 수 있습니다.
            </p>
          </li>
          <li>
            <strong>Watch 기능</strong>
            <p>
              Gulp는 파일 변경을 감지하여 자동으로 작업을 실행할 수 있는 Watch 기능을
              제공합니다.
              <br />
              개발자는 파일을 수정할 때마다 수동으로 작업을 실행할 필요 없이 변경 사항을
              자동으로 감지하고 반영할 수 있습니다. Watch 기능을 사용하면 개발자는
              실시간으로 코드를 수정하고 테스트할 수 있어서 개발 과정을 보다 빠르게 진행할
              수 있습니다.
            </p>
          </li>
        </ol>
      </section>

      <figure className="img_figure mt_l">
        <img src={`${IMG.GULP}/01_gulp_01.png`} alt="Gulp 시작하기" />
        <figcaption>Gulp 시작하기</figcaption>
      </figure>
    </>
  )
}

export default IntroPage
