import { useGulpPageMeta } from '@/hooks/useGulpPageMeta'
import { IMG } from '@/config/path'
import CodeBlock from '@/components/code/CodeBlock'

function GulpApiPage() {
  useGulpPageMeta()

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
      		<h2 className="sound_only">요약 설명</h2>
      		<p>
      			Gulp는 여러 API를 통해 파일 처리, 작업 정의, 변경 감지 등을 효율적으로 수행함으로써 프로젝트의 빌드 프로세스를 자동화할 수 있습니다.
      		</p>
      		<p className="mt_s">
      			Gulp의 주요 API로는 <code>task()</code>, <code>src()</code>, <code>pipe()</code>, <code>dest()</code>, <code>watch()</code> 가 있습니다.
      		</p>
      	</blockquote>

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">3.1. <code className="weight-bold t_blue font-24-important">gulp.task()</code></h2>

      		<p className="mt_ml">
      			Gulp는 기본적으로 여러 개의 <strong><code className="weight-600 t_blue">task</code>(작업)</strong>로 구성되어 있으며,
      			각 <code className="t_darkblue">task</code>는 Gulp가 수행해야 할 하나의 작업 단위를 의미합니다.
      		</p>
      		<p className="mt_s">
      			예를 들어, 다음과 같은 <code className="t_darkblue">task</code>들이 있을 수 있습니다.
      		</p>
      		<ul className="dot_lst indent_small mt_sm">
      			<li>
      				<i className="folder">src</i> 폴더의 <i className="filename">njk</i> 파일을
      				<i className="filename">html</i> 파일로 변환하여 <i className="folder">dist</i> 폴더에 출력하는 작업
      			</li>
      			<li>
      				<i className="folder">src</i> 폴더의 <i className="filename">scss</i> 파일을
      				<i className="filename">css</i> 파일로 변환하여 <i className="folder">dist</i> 폴더에 저장하는 작업
      			</li>
      			<li>
      				<i className="folder">src</i> 폴더의 모든 파일 변화를 감지하여, 변경 시 브라우저에 실시간으로 반영하는 작업
      			</li>
      		</ul>
      		<p className="mt_sm">
      			이처럼 각각의 <code className="t_blue">task</code>가 모여 <i className="filename">gulpfile.babel.js</i> 파일을 구성하게 됩니다.<br />
      		</p>
      		<p className="mt_s">
      			Gulp는 이러한 <code className="t_blue">task</code>들을 병렬 또는 순차적으로 실행할 수 있으며,
      			<code>gulp.task(&apos;taskName&apos;, function)</code>의 문법을 가집니다.
      		</p>
      		
      <CodeBlock title="gulp.task() example" language="javascript" className="uk_gist_code_box mt_m">
      {`// 기존 문법
      				const gulp = require('gulp');

      				gulp.task('task_name', function(){
      					// 작업 내용
      				});

      				// 앞으로 사용될 문법
      				import gulp from "gulp";

      				const task_name = () => {
      					// 작업 내용
      				}`}
      </CodeBlock>

      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">3.2. <code className="weight-bold t_blue font-24-important">gulp.src()</code></h2>

      		<p className="mt_ml">
      			Gulp가 처리할 파일의 경로를 정의합니다.<br />
      			두 개 이상의 경로를 지정할 경우, <b>배열 형태</b>로 전달할 수 있으며,
      			<b>특정 폴더나 파일을 제외하고 싶을 때</b>는 경로 앞에 <code>!</code> 기호를 붙여 제외할 수 있습니다.
      		</p>
      		
      <CodeBlock title="gulp.src() example" language="html" className="uk_gist_code_box mt_m">
      {`// 다른 조건 없이 하나의 경로만 지정
      				gulp.src('src/html/**/*.njk');  // src > html 폴더 하위의 모든 njk 파일

      				// 경로 중 제외해야할 파일 또는 폴더 지정
      				gulp.src([
      					'src/html/**/*.njk',          // src > html 폴더 하위의 모든 njk 파일
      					'!src/html/**/_*.njk'         // src > html 폴더 하위의 모든 njk 파일 중 파일명 앞에 언더바(_)가 있는 파일 제외
      				]);`}
      </CodeBlock>

      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">3.3. <code className="weight-bold t_blue font-24-important">gulp.pipe()</code></h2>

      		<p className="mt_ml">
      			<code>gulp.src()</code>를 통해 선택된 파일들에 대해 <b>어떤 작업을 수행할지 정의할 때</b>,
      			각 작업은 <code className="t_blue">.pipe()</code> <b>메서드</b>를 통해 <b>파이프라인 방식으로 연결</b>됩니다.<br />
      			예를 들어, <b className="filename">style.scss</b> 파일을
      			<b className="filename t_blue">style.min.css</b> 파일로 컴파일하고 압축하는 작업은 다음과 같이 작성할 수 있습니다.
      		</p>
      		
      <CodeBlock title="gulp.pipe() example" language="scss" className="uk_gist_code_box mt_m">
      {`gulp.src( 'style.scss' )
      				.pipe( sourcemaps.init() )           // 소스맵 작성
      				.pipe( sass() )                      // scss를 css로 컴파일
      				.pipe( minificss() )                 // 컴파일된 css 압축
      				.pipe( rename({ suffix: '.min' }) )  // style.min.css 생성
      				.pipe( sourcemaps.write() )          // 소스맵 적용
      				.pipe( gulp.dest('dist/css') )       // 지정한 dist 경로로 파일 style.min.css 생성`}
      </CodeBlock>

      		<p className="mt_ms">
      			코드를 보면 알 수 있듯이,
      			Gulp는 <code>pipe()</code> 를 통해 각 작업을 순차적으로 연결하며, 마치 물이 흐르듯 파일을 단계별로 처리합니다.
      		</p>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">3.4. <code className="weight-bold t_blue font-24-important">gulp.dest()</code></h2>

      		<p className="mt_ml">
      			<code className="t_blue">gulp.dest()</code>는 Gulp 작업에서 처리한 파일들을 지정한
      			<strong>출력 경로(디렉토리)</strong>로 저장하는 역할을 합니다.<br />
      			예를 들어, Sass를 컴파일하거나 JavaScript를 압축한 후, 해당 결과물을 원하는 폴더에 저장할 때 사용됩니다.
      		</p>
      		
      <CodeBlock title="gulp.dest() example" language="javascript" className="uk_gist_code_box mt_m">
      {`gulp.src( 작업해야 하는 파일 경로 )
      				.pipe( 이것저것 작업 후 )
      				.pipe( gulp.dest(' 결과물이 저장될 경로 ') )`}
      </CodeBlock>

      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">3.5. <code className="weight-bold t_blue font-24-important">gulp.watch()</code></h2>

      		<p className="mt_ml">
      			특정 파일이나 폴더의 변경 사항(수정, 추가, 삭제 등)을 <b>지속적으로 감시</b>하고,
      			변경이 감지되면 지정된 작업(task)을 <b>자동으로 실행</b>하는 Gulp 함수입니다.<br />
      			이 기능을 활용하면 파일을 수정할 때마다 매번 수동으로 빌드할 필요 없이,
      			<b>실시간으로 자동 빌드나 리로드가 가능</b>해져 개발 효율이 크게 향상됩니다.
      		</p>
      		
      <CodeBlock title="gulp.watch() example" language="javascript" className="uk_gist_code_box mt_m">
      {`gulp.watch( globs, task )
      				gulp.watch( '감시해야하는 파일 경로', 변경이 감지되면 실행해야 할 task 이름 )`}
      </CodeBlock>

      	</section>
      	

      	<figure className="img_figure mt_l">
      		<img src={`${IMG.GULP}/03_gulp_01.png`} alt="Gulp API" />
      		<figcaption>
      			Gulp API
      		</figcaption>
      	</figure>
    </>
  )
}

export default GulpApiPage
