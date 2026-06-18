import { useGulpPageMeta } from '@/hooks/useGulpPageMeta'
import { IMG } from '@/config/path'

function GulpOfUxkmPage() {
  useGulpPageMeta()

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
      		<h2 className="sound_only">요약 설명</h2>
      		<p>
      			<b>본 UXKM 웹사이트는 Gulp를 기반으로 제작되었습니다.</b><br />
      			빌드 시스템을 처음 접하는 분들에게 Gulp는 다소 생소할 수 있습니다.
      			하지만 UXKM의 Gulp 커리큘럼은 처음 도전하는 분도 차근차근 따라올 수 있도록 기본 세팅 과정을 자세히 안내하고 있습니다.<br />
      			단계별로 파일을 정리하며 진행하므로, 이해가 조금 늦더라도 부담 없이 따라오실 수 있습니다.
      		</p>
      	</blockquote>

      	<section className="indent mt_xxl nicolas_page">
      		<h2 className="ml_mn">시작하기에 앞서...</h2>
      		<p className="mt_ms">
      			UXKM의 Gulp 강의에서는 <b>HTML, CSS의 내용을 많이 다루지는 않습니다.</b><br />
      			하지만 <mark><b>Gulp를 활용하여 편리한 HTML, CSS 작업 환경을 세팅하는 것이 주 목적이기에 초급 이상의 HTML, CSS 이해도는 필수</b></mark>입니다.<br />
      			<b>왕초보 분들은 선수 강의로 시작하세요!</b><br />
      		</p>
      		<div className="htmlcss_link">
      			<a className="html" href="/publishing/html/01-htmlStart/01-html_start">
      				HTML 강의 바로가기
      			</a>
      			<a className="css" href="/publishing/css/01-cssStart/01-css_intro">
      				CSS 강의 바로가기
      			</a>
      		</div>
      	</section>

      	<section className="indent mt_xxl nicolas_page">
      		<h2 className="ml_mn">JavaScript를 반드시 알아야 할까?</h2>
      		<p className="mt_ms">
      			<b className="font-16 t_black">알면 좋습니다.</b><br />
      			<b>Gulp를 포함한 모든 자동화 빌드(Grunt, Webpack 등) 시스템은 JavaScript 기반</b>입니다.<br />
      			<b>기본적인 JavaScript 언어의 이해가 없으면</b> 처음부터 스스로 세팅하는 것은 물론,
      			<b>각자의 입맛에 맞게 혹은 진행하는 프로젝트 환경에 따라 폴더 및 파일 구조를 다르게 구성해야 할 경우 난관에 봉착</b>할 수 있습니다.
      		</p>
      		<p className="mt_s">
      			<b className="font-16 t_blue">하지만, 지금 당장은 몰라도 됩니다.</b><br />
      			<b>커리큘럼 순서대로 천천히 따라 하고 반복하면서 학습해도 충분합니다.</b><br />
      			<mark><b>그러나 Gulp가 아니더라도 퍼블리셔라면 초급 수준의 JavaScript 지식은 필수이기 때문에 공부하는 것을 권장</b></mark>합니다.
      		</p>
      	</section>

      	<section className="indent mt_xxl nicolas_page">
      		<h2 className="ml_mn">UXKM의 Gulp 강의 목적</h2>
      		<ul className="dot_lst mt_ms">
      			<li>
      				<b className="t_black">Node.js</b>를 설치하고
      				<i className="terminal">터미널</i>에서
      				<b className="t_black">npm(Node Package Manager)</b> 명령어를 이용하여 <b>여러 패키지를 설치</b>해 봅니다.
      			</li>
      			<li><b className="t_black">package.json</b>을 생성해 봅니다.</li>
      			<li><b>빌드 시스템의 기본적인 폴더 구조를 파악하고 경험</b>해 봅니다.</li>
      			<li>
      				<b className="t_black">NJK(gulp-nunjucks-render)</b>를 활용하여 <b>많은 양의 HTML 작업 환경에 존재하는 반복적인 불편한 요소를 해결</b>해 봅니다.
      			</li>
      			<li>
      				<b>Apache와 같은 별도의 웹 서버 없이 Gulp 자체에서 웹 서버를 실행</b>하고
      				<b>브라우저 새로고침(refresh) 없이 실시간으로 파일의 업데이트를 경험</b>해 봅니다.
      			</li>
      			<li><b>Sass(SCSS)를 간접적으로 경험하고 CSS로 컴파일하는 방법</b>을 알아봅니다.</li>
      			<li><b>ECMAScript(ES6+)를 간접적으로 경험하고 자동으로 이미지 파일을 압축하는 방법</b>을 알아봅니다.</li>
      		</ul>
      		<p className="mt_ms">
      			UXKM Gulp 강의의 목적은 위 목록에 언급된 것처럼
      			<b className="underline">Gulp 세팅 과정에서 마주치는 다양한 낯선 환경과 상황을 직접 경험</b>해 보고, 나아가 <b>실제 프로젝트에서 활용할 수 있도록 하는 데</b> 있습니다.<br />
      			<b>한 번 세팅으로 끝나지 않고 처음부터 여러 번 반복해서 세팅하여 Gulp에 익숙해지는 것을 권장</b>합니다.
      		</p>
      		<p className="mt_ms">
      			UXKM Gulp 강의는 <mark><b>Gulp를 이용해서 UXKM 웹사이트 제작해 본 경험으로 얻은 노하우</b></mark>와 <b className="t_black">노마드 코더</b>의
      			<b className="t_blue">[Gulp 90분 마스터하기]</b> 강의를 바탕으로 제작되었습니다.
      		</p>
      		<span className="reference">
      			<a href="https://nomadcoders.co/gulp-for-beginners/lobby" target="_blank" rel="noreferrer" title="새창 열기" className="weight-700">Gulp 90분 마스터하기</a>
      		</span>
      	</section>

      	<figure className="img_figure mt_l">
      		<img src={`${IMG.GULP}/01_gulp_02.png`} alt="UXKM의 Gulp" />
      		<figcaption>
      			UXKM의 Gulp
      		</figcaption>
      	</figure>
    </>
  )
}

export default GulpOfUxkmPage
