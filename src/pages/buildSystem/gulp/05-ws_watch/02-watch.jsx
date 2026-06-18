import { useGulpPageMeta } from '@/hooks/useGulpPageMeta'
import { IMG } from '@/config/path'
import CodeBlock from '@/components/code/CodeBlock'
import TerminalBlock from '@/components/code/TerminalBlock'

function WatchPage() {
  useGulpPageMeta()

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
      		<h2 className="sound_only">요약 설명</h2>
      		<p>
      			파일이 변경되거나 업데이트되면 반드시 빌드 과정을 거쳐야 변경사항이 결과물에 반영됩니다.<br />
      			Gulp의 <code>watch</code> 기능을 이용하면 파일 변경을 자동으로 감지하여 변경된 파일과 연관된 task를 실행하여 빌드한 후,
      			브라우저에 실시간으로 변경사항을 반영할 수 있습니다.
      		</p>
      	</blockquote>

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">5.2.1. path 설치</h2>
      		<p className="mt_m">
      			<b className="terminal">터미널</b>에서 아래 명령을 실행하여 <code>path</code>를 설치합니다.<br />

      			<code>path</code>는 Node.js에 기본으로 포함된 모듈로, <b>파일 경로와 폴더 경로를 다룰 때 사용하는 유틸리티입니다.</b><br />

      		
      			Gulp에서 <code className="t_blue">watch</code> 기능을 사용하다 보면 <i className="folder">src</i> 폴더의 파일이 삭제될 때,
      			<b>대응되는 <i className="folder">dist</i> 폴더의 빌드된 파일도 함께 삭제</b>해야 하는 경우가 있습니다.<br />
      			이때 <code className="t_blue">path</code> 모듈을 활용해 <b>원본 파일의 경로를 분석하여 <i className="folder">dist</i> 폴더 내 대응 경로를 계산</b>할 수 있습니다.<br />

      			<span className="t_blue">※ <code className="t_blue">gulp.watch</code>는 Gulp의 내장 기능이므로 별도의 패키지 설치가 필요 없습니다. <code>path</code> 모듈은 Node.js 내장 모듈이지만, 명시적으로 import하기 위해 설치합니다.</span>
      		</p>
      		<TerminalBlock className="terminal_code_box mt_m">
      {`npm i path -D`}
      </TerminalBlock>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">5.2.2. gulpfile.babel.js 세팅</h2>
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
        linkedFullCodeId="ws-watch-gulpfile-full"
      >
      {`// import -----------------------------------------------------------
      				// ··· 기존 import 생략 ···
      				import path from "path";


      				// routes -----------------------------------------------------------
      				--no_change--


      				// etc --------------------------------------------------------------
      				--no_change--


      				// task -------------------------------------------------------------

      				// html task --no_change--

      				// clean task --no_change--

      				// webserver task --no_change-- (이전 페이지에서 설정됨)

      				// watch task --add--
      				const watch = () => {
      					const html_watcher = gulp.watch(path_src.html + "/**/*", html);
      					file_management(html_watcher, path_src.html, path_dist.html);
      				}
      				// watch - 파일 감시 및 삭제를 위한 함수 --add-- --add_txt:scss, js 부분은 미리 추가되어 있음
      				const file_management = (watcher_target, src_path, dist_path) => {
      					watcher_target.on('unlink', (filepath) => {
      						const filePathFromSrc = path.relative(path.resolve(src_path), filepath);
      						const extension_type = filePathFromSrc.split('.')[filePathFromSrc.split('.').length-1];
      						&nbsp;
      						// scss 삭제 (min 파일까지 삭제)
      						if( extension_type === 'scss' ){
      							const destFilePath_css = path.resolve(dist_path, filePathFromSrc).replace('.scss','.css');
      							del.sync(destFilePath_css);
      							const destFilePath_minCss = path.resolve(dist_path, filePathFromSrc).replace('.scss','.min.css');
      							del.sync(destFilePath_minCss);
      						}
      						&nbsp;
      						// js 삭제 (min 파일까지 삭제)
      						else if( extension_type === 'js' ){
      							const destFilePath_js = path.resolve(dist_path, filePathFromSrc);
      							del.sync(destFilePath_js);
      							const destFilePath_minJs = path.resolve(dist_path, filePathFromSrc).replace('.js','.min.js');
      							del.sync(destFilePath_minJs);
      						}
      						&nbsp;
      						// njk(html) 삭제
      						else if( extension_type === 'njk' ){
      							const destFilePath_html = path.resolve(dist_path, filePathFromSrc).replace('.njk','.html');
      							del.sync(destFilePath_html);
      						}
      						&nbsp;
      						// 위 파일 외 삭제
      						else{
      							const destFilePath = path.resolve(dist_path, filePathFromSrc);
      							del.sync(destFilePath);
      						}
      					});
      				}


      				// series & parallel (task 그룹화) ----------------------------------

      				// 순차적으로 실행되어야 하는 task 그룹 --no_change--

      				// 위 prepare 실행 완료 후 순차적으로 실행되어야 하는 task 그룹 --no_change--

      				// 동시에 여러 개의 task가 실행되어야 하는 그룹 (병렬로 실행) --edit-- --edit_txt:watch task 추가
      				const live = gulp.parallel([ webserver, watch ]);


      				// export (gulp 실행 명령어) ----------------------------------------

      				// gulp build 실행 (prepare 실행 후 assets 실행) - build만 실행 --no_change--

      				// gulp dev 실행 (build 실행 후 live 실행) - build 실행 후 live 실행 --no_change--`}
      </CodeBlock>

      		
      <CodeBlock
        id="ws-watch-gulpfile-full"
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
      				import path from "path";


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

      				// watch task
      				const watch = () => {
      					// njk(html) watch
      					const html_watcher = gulp.watch(path_src.html + "/**/*", html);
      					file_management(html_watcher, path_src.html, path_dist.html);
      				}
      				// watch - 파일 감시 및 삭제를 위한 함수
      				const file_management = (watcher_target, src_path, dist_path) => {
      					watcher_target.on('unlink', (filepath) => {
      						const filePathFromSrc = path.relative(path.resolve(src_path), filepath);
      						const extension_type = filePathFromSrc.split('.')[filePathFromSrc.split('.').length-1];
      						&nbsp;
      						// scss 삭제 (min 파일까지 삭제)
      						if( extension_type === 'scss' ){
      							const destFilePath_css = path.resolve(dist_path, filePathFromSrc).replace('.scss','.css');
      							del.sync(destFilePath_css);
      							const destFilePath_minCss = path.resolve(dist_path, filePathFromSrc).replace('.scss','.min.css');
      							del.sync(destFilePath_minCss);
      						}
      						&nbsp;
      						// js 삭제 (min 파일까지 삭제)
      						else if( extension_type === 'js' ){
      							const destFilePath_js = path.resolve(dist_path, filePathFromSrc);
      							del.sync(destFilePath_js);
      							const destFilePath_minJs = path.resolve(dist_path, filePathFromSrc).replace('.js','.min.js');
      							del.sync(destFilePath_minJs);
      						}
      						&nbsp;
      						// njk(html) 삭제
      						else if( extension_type === 'njk' ){
      							const destFilePath_html = path.resolve(dist_path, filePathFromSrc).replace('.njk','.html');
      							del.sync(destFilePath_html);
      						}
      						&nbsp;
      						// 위 파일 외 삭제
      						else{
      							const destFilePath = path.resolve(dist_path, filePathFromSrc);
      							del.sync(destFilePath);
      						}
      					});
      				}


      				// series & parallel (task 그룹화) ----------------------------------

      				// 순차적으로 실행되어야 하는 task 그룹
      				const prepare = gulp.series([ clean ]);

      				// 위 prepare 실행 완료 후 순차적으로 실행되어야 하는 task 그룹
      				const assets = gulp.series([ html ]);

      				// 동시에 여러 개의 task가 실행되어야 하는 그룹 (병렬로 실행)
      				const live = gulp.parallel([ webserver, watch ]);


      				// export (gulp 실행 명령어) ----------------------------------------

      				// gulp build 실행 (prepare 실행 후 assets 실행) - build만 실행
      				export const build = gulp.series([ prepare, assets ]);

      				// gulp dev 실행 (build 실행 후 live 실행) - build 실행 후 live 실행
      				export const dev = gulp.series([ build, live ]);`}
      </CodeBlock>

      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">5.2.3. gulp dev 실행</h2>
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
      			<img src={`${IMG.GULP}/gulp_watch_run_dev_cmd.png`} alt="gulp dev 실행시 터미널에 작업내용 출력" />
      		</p>
      		<p className="mt_ms">
      			<code>watch</code>가 실행되는 것을 확인할 수 있고,
      			<code>watch</code>는
      			<mark>Gulp 프로세스를 종료할 때까지 계속해서 지정한 파일을 감시</mark>해야 하기 때문에 종료되지 않습니다.
      		</p>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">5.2.4. gulp-watch 동작 확인</h2>

      		<article className="indent mt_l">
      			<h3 className="ml_mn">파일 생성</h3>
      			<p className="mt_ms">
      				<i className="folder">src &gt; html</i> 폴더에 임의로 <i className="filename">test_file.njk</i> 파일을 생성하면
      				<b className="t_blue">Gulp</b>는 <code>html</code> task로 빌드하여 <i className="folder">dist</i> 폴더에 <i className="filename">test_file.html</i> 파일을 생성합니다. (아래 영상 참고)
      			</p>
      			<div className="mt_ms youtube_box" style={{ '--padding-top': "56.25%" }}>
      				<iframe width="560" height="315" src="https://www.youtube.com/embed/pIBglDsHd-4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      			</div>
      		</article>
      		

      		<article className="indent mt_l">
      			<h3 className="ml_mn">파일 삭제</h3>
      			<p className="mt_ms">
      				방금 생성한
      				<i className="folder">src &gt; html</i> 폴더의 <i className="filename">test_file.njk</i> 파일을 삭제하면
      				<b className="t_blue">gulp-watch</b>는 이를 감지하여 <i className="folder">dist</i> 폴더의 <i className="filename">test_file.html</i> 파일을 삭제합니다. (아래 영상 참고)
      			</p>
      			<div className="mt_ms youtube_box" style={{ '--padding-top': "56.25%" }}>
      				<iframe width="560" height="315" src="https://www.youtube.com/embed/oP7En-xClaM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      			</div>
      		</article>
      		

      		<article className="indent mt_l">
      			<h3 className="ml_mn">파일 감시</h3>
      			<p className="mt_ms">
      				<i className="filename">index.njk</i> 파일에 코드를 추가하고 저장(Ctrl + s 또는 Command + s)하면 <b className="t_blue">Gulp</b>는 <mark>빌드를 진행하고
      					변경된 내용을 브라우저에 실시간으로 반영</mark>합니다.
      			</p>
      			<div className="mt_ms youtube_box" style={{ '--padding-top': "56.25%" }}>
      				<iframe width="560" height="315" src="https://www.youtube.com/embed/NYfRFIsEysY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      			</div>
      		</article>
      		
      	</section>
      	

      	<figure className="img_figure mt_l">
      		<img src={`${IMG.GULP}/05_gulp_02.png`} alt="Watching Files 설정" />
      		<figcaption>
      			Watching Files 설정
      		</figcaption>
      	</figure>
    </>
  )
}

export default WatchPage
