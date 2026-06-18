import { useGulpPageMeta } from '@/hooks/useGulpPageMeta'
import { IMG } from '@/config/path'
import CodeBlock from '@/components/code/CodeBlock'
import TerminalBlock from '@/components/code/TerminalBlock'

function WebserverPage() {
  useGulpPageMeta()

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
      		<h2 className="sound_only">요약 설명</h2>
      		<p>
      			<code>gulp-webserver</code>는 Gulp 작업 중에 <b>간단한 로컬 웹 서버를 실행해주는 플러그인</b>으로,
      			별도의 복잡한 서버 설정 없이 로컬 개발 환경을 구축할 수 있게 도와줍니다.<br />
      			<code>gulp.watch</code>를 이용해 파일의 변경이나 업데이트를 감지하면
      			<b>브라우저에 실시간으로 반영하는 <span className="t_navy">Live Reload</span> 시스템</b>을 구현할 수 있고,
      			이 <b className="t_navy">Live Reload</b> 기능이 정상적으로 작동하는지 확인하려면 먼저 <code>gulp-webserver</code>의 세팅이 선행되어야 합니다.
      		</p>
      	</blockquote>

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">5.1.1. gulp-webserver 설치</h2>
      		<p className="mt_m">
      			<b className="terminal">터미널</b>에서 아래 명령을 실행하여 <code>gulp-webserver</code>를 설치합니다.
      		</p>
      		<TerminalBlock className="terminal_code_box mt_m">
      {`npm i gulp-webserver -D`}
      </TerminalBlock>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">5.1.2. gulpfile.babel.js 세팅</h2>
      		<p className="mt_m">
      			<b className="filename">gulpfile.babel.js</b> 파일의 코드를 아래처럼 추가 및 수정합니다. (영역별 설명은 주석으로 표시합니다.)<br />
      			<span className="underline">
      				<i className="t_green">변경이 없는 부분</i>은 생략되며,
      				<i className="t_blue">추가된 부분</i>과 <i className="t_red">수정, 삭제된 부분</i>의 코드만 표시됩니다.
      			</span>
      			<br />
      			또한 <i className="t_green">변경 없음</i>,
      			<i className="t_blue">추가된 부분</i>,
      			<i className="t_red">수정, 삭제된 부분</i>을 표시하는 텍스트는 마우스로 드래그해도 선택되지 않으므로 코드를 편리하게 복사할 수 있습니다.
      			<br />
      			<mark>전체 코드는 에디터 오른쪽의 <code>[View full code]</code>를 클릭하여 확인할 수 있습니다.</mark>
      		</p>

      		
      <CodeBlock
        filename="gulpfile.babel.js"
        title="gulpfile.babel.js"
        language="javascript"
        className="mt_m"
        defaultOpen={false}
        linkedFullCodeId="ws-webserver-gulpfile-full"
      >
      {`// import -----------------------------------------------------------
      				// ··· 기존 import 생략 ···
      				import ws from "gulp-webserver"; --add--


      				// routes -----------------------------------------------------------
      				--no_change--


      				// etc --------------------------------------------------------------
      				--no_change--


      				// task -------------------------------------------------------------

      				// html task --no_change--

      				// clean task --no_change--

      				// webserver task --add--
      				const webserver = () => {
      					return gulp.src(dist)                                // webserver를 실행할 폴더 경로
      					.pipe(
      						ws({                                               // webserver 옵션 설정
      							// port: 8000,                                   // 기본 8000, 필요 시 변경 가능
      							livereload: true,                                // 작업 중 파일 저장 시 브라우저 자동 새로고침 (기본 false)
      							open: true                                       // Gulp 실행 시 자동으로 브라우저를 열고 localhost 서버 시작 (기본 false)
      						})
      					);
      				}


      				// series & parallel (task 그룹화) ----------------------------------

      				// 순차적으로 실행되어야 하는 task 그룹 --no_change--

      				// 위 prepare 실행 완료 후 순차적으로 실행되어야 하는 task 그룹 --no_change--

      				// 동시에 여러 개의 task가 실행되어야 하는 그룹 (병렬로 실행) --add--
      				const live = gulp.parallel([ webserver ]);


      				// export (gulp 실행 명령어) ----------------------------------------

      				// gulp build 실행 (prepare 실행 후 assets 실행) - build만 실행 --edit-- --edit_txt:설명 주석 수정
      				export const build = gulp.series([ prepare, assets ]);

      				// gulp dev 실행 (build 실행 후 live 실행) - build 실행 후 live 실행 --edit-- --edit_txt:설명 주석 수정 및 live task 추가
      				export const dev = gulp.series([ build, live ]);`}
      </CodeBlock>

      		
      <CodeBlock
        id="ws-webserver-gulpfile-full"
        filename="gulpfile.babel.js - full code"
        title="gulpfile.babel.js - full code"
        language="javascript"
        className="full_code_layer"
        isFullCodeLayer
      >
      {`// import -----------------------------------------------------------
      				import gulp from "gulp";
      				import nunjucksRender from "gulp-nunjucks-render";
      				import plumber from "gulp-plumber";
      				import data from "gulp-data";
      				import cached from "gulp-cached";
      				import fs from "fs";
      				import del from "del";
      				import ws from "gulp-webserver";


      				// routes -----------------------------------------------------------
      				const src = './src';
      				const dist = './dist';
      				const ass = '/assets';

      				// src 폴더의 경로 설정
      				const path_src = {
      					html: src + '/html',
      					css: src + ass + '/css',
      					images: src + ass + '/images',
      					js: src + ass + '/js',
      				}

      				// 빌드될 dist 폴더의 경로 설정
      				const path_dist = {
      					html: dist,
      					css: dist + ass + '/css',
      					images: dist + ass + '/images',
      					js: dist + ass + '/js',
      				};


      				// etc --------------------------------------------------------------
      				const onErrorHandler = (error) => console.log(error);  // plumber option (에러 발생 시 에러 로그 출력)


      				// task -------------------------------------------------------------

      				// html task
      				const html = () => {
      					// 들여쓰기(Tab Indent) 조정을 위한 함수
      					const manageEnvironment = (environment) => {
      						environment.addFilter('tabIndent', (str, numOfIndents, firstLine) => {
      							str = str.replace(/^(?=.)/gm, new Array(numOfIndents + 1).join('\t'));
      							if(!firstLine) {
      								str = str.replace(/^\s+/, "");
      							}
      							return str;
      						});
      					};

      					// _gnb.json 파일 적용을 위한 변수
      					const gnbJson = JSON.parse(fs.readFileSync(path_src.html + '/_templates/_json/_gnb.json'));
      					const json_all = {...gnbJson};
      					const datafile = () => {
      						return json_all;
      					}

      					// njk 빌드
      					return gulp.src([
      						path_src.html + '/**/*',                           // 빌드할 njk 파일 경로
      						'!' + path_src.html + '/**/_*',                    // 경로 중 제외할 njk 파일(빌드 때 병합될 파일)
      						'!' + path_src.html + '/**/_*/**/*'                // 경로 중 제외할 폴더 및 폴더의 njk 파일(빌드 때 병합될 파일)
      					])
      					.pipe( plumber({errorHandler:onErrorHandler}) )      // 에러 발생 시 gulp 종료 방지 및 에러 핸들링
      					.pipe( data( datafile) )                             // _gnb.json 적용
      					.pipe( nunjucksRender({                              // njk 적용
      						envOptions: {                                      // njk 옵션 설정
      							autoescape: false,                               // njk 문법의 오류가 있더라도 진행
      						},
      						manageEnv: manageEnvironment,                      // 들여쓰기(Tab Indent) 함수 적용
      						path: [path_src.html],                             // html 폴더 전체 경로
      					}) )
      					.pipe( cached('html') )                              // 변경된 파일 캐시 저장
      					.pipe( gulp.dest(path_dist.html) )                   // 빌드 후 html 파일이 생성될 목적지 설정
      				}

      				// clean task
      				const clean = () => del([dist]);                       // dist 폴더 삭제

      				// webserver task
      				const webserver = () => {
      					return gulp.src(dist)                                // webserver를 실행할 폴더 경로
      					.pipe(
      						ws({                                               // webserver 옵션 설정
      							// port: 8000,                                   // 기본 8000, 필요 시 변경 가능
      							livereload: true,                                // 작업 중 파일 저장 시 브라우저 자동 새로고침 (기본 false)
      							open: true                                       // Gulp 실행 시 자동으로 브라우저를 열고 localhost 서버 시작 (기본 false)
      						})
      					);
      				}


      				// series & parallel (task 그룹화) ----------------------------------

      				// 순차적으로 실행되어야 하는 task 그룹
      				const prepare = gulp.series([ clean ]);

      				// 위 prepare 실행 완료 후 순차적으로 실행되어야 하는 task 그룹
      				const assets = gulp.series([ html ]);

      				// 동시에 여러 개의 task가 실행되어야 하는 그룹 (병렬로 실행)
      				const live = gulp.parallel([ webserver ]);


      				// export (gulp 실행 명령어) ----------------------------------------

      				// gulp build 실행 (prepare 실행 후 assets 실행) - build만 실행
      				export const build = gulp.series([ prepare, assets ]);

      				// gulp dev 실행 (build 실행 후 live 실행) - build 실행 후 live 실행
      				export const dev = gulp.series([ build, live ]);`}
      </CodeBlock>


      		<p className="mt_m">
      			<b className="t_blue">gulp-webserver</b>의 상세한 옵션은
      			<a href="https://www.npmjs.com/package/gulp-webserver#options" target="_blank" rel="noreferrer" className="reference_link">npm gulp-webserver#options</a>
      			에서 확인 가능합니다.
      		</p>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">5.1.3. gulp dev 실행</h2>
      		<p className="mt_m">
      			<i className="filename">gulpfile.babel.js</i> 파일을 세팅한 후 <b className="terminal">터미널</b>에서
      			아래 명령을 실행합니다.
      		</p>
      		<TerminalBlock className="terminal_code_box mt_m">
      {`gulp dev`}
      </TerminalBlock>
      		<p className="mt_ms">
      			Gulp가 실행되고 <b className="terminal">터미널</b>에 Gulp의 작업 내용이 출력됩니다.
      		</p>
      		<p className="mt_ms">
      			<img src={`${IMG.GULP}/gulp_webserver_run_dev_cmd.png`} alt="gulp dev 실행시 터미널에 작업내용 출력" />
      		</p>
      		<p className="mt_ms">
      			Gulp 실행 후 두 가지 변경 사항을 확인할 수 있습니다.<br />
      		</p>
      		<ol className="ol_lst indent_small mt_sm">
      			<li>
      				기존까지는 <code>build series</code>까지만 실행되었기 때문에 <code>dev</code>가 종료되면 Gulp도 종료되어 명령어를 입력할 수 있는
      				상태로 돌아갔지만,
      				지금은 <code>build series</code> 실행 후 <code>live series</code>에서 <b className="t_blue">webserver</b>가
      				실행되고 <code>dev</code>는 종료되지만 <b className="t_blue">webserver</b> <b>동작을 위해 Gulp 프로세스는 유지됩니다.</b>
      			</li>
      			<li>
      				Gulp의 작업 내용에 <b className="t_blue">webserver</b> 시작과 종료(<i className="t_red">빨간색 박스</i>)가 추가되고,
      				아래처럼 <i className="underline">localhost:8000</i> 주소로 브라우저가 자동으로 열립니다.
      			</li>
      		</ol>
      		<p className="mt_ms">
      			<img src={`${IMG.GULP}/gulp_webserver_run_dev_browser.png`} alt="gulp-webserver로 브라우저가 열린 화면" />
      		</p>
      		<p className="mt_ms">
      			아직 <code>css task</code>와 <code>image task</code>를 세팅하지 않았기 때문에 CSS가 적용되지 않고 이미지가 보이지 않는 것이 정상입니다.<br />
      		</p>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">5.1.4. gulp 프로세스 종료</h2>
      		<p className="mt_m">
      			위 <b className="t_black">[gulp dev 실행]</b>에서 확인했듯이 현재 시점에서 <code>gulp dev</code>를 실행하면
      			프로세스가 유지되고 명령어를 입력할 수 없습니다.<br />
      			이때, Gulp 프로세스를 종료하려면 터미널에서 <code>Ctrl + C</code> (Mac의 경우 <code>Command + C</code>)를 입력한 후 <code>y</code>를 입력해야 합니다.
      		</p>
      		<p className="mt_ms">
      			<img src={`${IMG.GULP}/gulp_webserver_end_dev_cmd.png`} alt="gulp dev 프로세스 종료" />
      		</p>
      		<p className="mt_ms">
      			Gulp가 종료되고 <code>webserver</code>도 종료되었기 때문에 브라우저에서는 &apos;사이트에 연결할 수 없음&apos; 메시지가 표시됩니다.
      		</p>
      		<p className="mt_ms">
      			<img src={`${IMG.GULP}/gulp_webserver_end_dev_browser.png`} alt="gulp 종료 후 브라우저 화면" />
      		</p>
      	</section>
      	

      	<figure className="img_figure mt_l">
      		<img src={`${IMG.GULP}/05_gulp_01.png`} alt="webserver 세팅" />
      		<figcaption>
      			webserver 세팅
      		</figcaption>
      	</figure>
    </>
  )
}

export default WebserverPage
