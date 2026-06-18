import { useGulpPageMeta } from '@/hooks/useGulpPageMeta'
import { IMG } from '@/config/path'
import CodeBlock from '@/components/code/CodeBlock'
import TerminalBlock from '@/components/code/TerminalBlock'

function BaseSettingPage() {
  useGulpPageMeta()

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
      		<h2 className="sound_only">요약 설명</h2>
      		<p>
      			현재 Gulp는 5버전까지 출시되었지만, <b>UXKM에서는 안정성이 검증된 <i className="underline">Gulp 4버전으로 커리큘럼을 진행</i>합니다.</b>
      		</p>
      		<p className="mt_s">
      			<b>이 페이지부터 본격적으로 Gulp 세팅을 시작합니다.</b><br />
      			Gulp를 전역(global)과 지역(local)에 설치하고,
      			프로젝트 디렉터리 구조와 기초 파일을 생성합니다.
      		</p>
      	</blockquote>

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">2.4.1. gulp-cli 전역(global) 설치</h2>
      		<p className="mt_m">
      			<b className="t_blue">gulp-cli</b>는 <i className="t_blue">Gulp</i>를 <i className="terminal">터미널</i>에서 편리하게 실행할 수 있게 해주는 유틸리티 도구입니다.<br />
      			<i className="terminal">터미널</i>에서 아래 명령어를 입력해서 <b className="t_blue">gulp-cli</b>를 <i className="t_black">전역(global) NPM Package에 설치합니다.</i><br />
      			(<mark><b className="t_blue">gulp-cli</b> 설치는 해당 PC에서 Gulp를 사용한 적이 없을 경우 최초 한 번만 진행하면 됩니다.</mark>)
      		</p>
      		<TerminalBlock className="terminal_code_box mt_ms">
      {`npm install gulp-cli -g   // gulp-cli 전역 설치 (입력 후 엔터)`}
      </TerminalBlock>
      		<p className="mt_ms">
      			<b className="t_blue">위 명령어 입력 예시</b>
      		</p>
      		<p className="mt_ms">
      			<img src={`${IMG.GULP}/gulp_scaffolding_cmd_ex1.png`} alt="명령어 입력 예시" />
      		</p>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">2.4.2. gulp 설치</h2>
      		<p className="mt_ml notice_blue">
      			현재 Gulp는 5버전까지 출시되었지만, UXKM에서는 안정성이 검증된 4버전으로 커리큘럼을 진행합니다.
      		</p>
      		<p className="mt_s">
      			<b className="t_blue">gulp</b>는 <i className="t_blue">gulp-cli</i>와 다르게 전역으로 설치하지 않고,
      			<b className="folder">gulp_setting</b> 폴더에만 설치하면 됩니다.<br />
      			<code>--save-dev(-D)</code> 옵션을 추가하는 이유는
      			<mark><b className="t_blue">gulp</b>가 개발 단계에서만 필요한 패키지</mark>이기 때문입니다.
      		</p>
      		<TerminalBlock className="terminal_code_box mt_ms">
      {`npm install gulp@4.0.2 -D   // 해당 폴더에 Gulp 설치`}
      </TerminalBlock>
      		<p className="mt_ms">
      			설치가 완료되면 <b className="folder">gulp_setting</b> 폴더 하위로 <b className="folder t_blue">node_modules</b> 폴더와
      			<b className="filename t_blue">package-lock.json</b> 파일이 생성됩니다.
      		</p>
      		<p className="mt_ms">
      			<img src={`${IMG.GULP}/gulp_scaffolding_gulp_dev1.png`} alt="프로젝트 폴더에 Gulp 설치" />
      		</p>
      		<p className="mt_ms">
      			또한, <b className="filename t_blue">package.json</b>의 <code className="t_blue">devDependencies</code> 부분에 방금 설치한 <b className="t_blue">gulp</b>가 업데이트됩니다.
      		</p>
      		
      <CodeBlock title="package.json devDependencies" language="json" className="uk_gist_code_box mt_ms">
      {`{
      					"devDependencies": {
      						"gulp": "^4.0.2"
      					}
      				}`}
      </CodeBlock>

      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">2.4.3. 작업 폴더 생성 및 기초 파일 세팅</h2>
      		<p className="mt_m">
      			<b className="folder">gulp_setting</b> 폴더 하위로 <b className="folder t_blue">src</b> 폴더를 생성합니다.<br />
      			<b className="folder t_blue">src</b> 폴더는 실제 작업 파일이 위치하는 폴더입니다. (html, css, js, images 등)<br />
      			<b className="t_black underline">
      				<b className="folder t_blue">src 폴더</b>에서 코딩을 하면, <i className="t_blue">gulp</i>는 <b className="folder t_blue">src 폴더</b>의 작업 파일을
      				<b className="folder t_blue">dist 폴더</b>로 빌드하게 됩니다.
      			</b>
      		</p>
      		<div className="mt_s warning block_warning t_blue">
      			<p>
      				&apos;<b>dist</b>&apos;라는 폴더명은 &apos;distribute(배포)&apos;의 약자이며 고정된 이름이 아닙니다.
      				세팅하면서 자유롭게 이름을 지정할 수 있습니다.<br />
      				다만 대부분의 환경(Gulp, Vue, React 등)에서 &apos;<b>dist</b>&apos;로 사용하기에 UXKM에서도 &apos;<b>dist</b>&apos;로 진행합니다.<br />
      			</p>
      		</div>
      		<p className="mt_s">
      			아래 구조대로 폴더와 파일을 생성한 후 각각의 <i className="filename">파일(scss, js, html)</i>에 아래의 <i className="icon_code">코드</i>를 복사하세요.
      		</p>

      		<article className="mt_ml indent">
      			<h3 className="ml_mn t_blue">폴더 구조 및 파일 생성</h3>
      			<p className="mt_ms">
      				<img src={`${IMG.GULP}/gulp_folder.png`} alt="폴더 구조 및 파일 생성" />
      			</p>
      			
      <CodeBlock filename="Copy folders and file names" title="src folder" language="scss" className="uk_gist_code_box mt_ms">
      {`/* 폴더명, 파일명을 복사하여 세팅하세요. */
      					gulp_setting __folder_name__  // 각자 세팅한 폴더명
      						src __folder_name__
      							assets __folder_name__
      								css __folder_name__
      									style.scss __file_name__
      									_reset.scss __file_name__
      									_variable.scss __file_name__
      								images __folder_name__
      									visual.png __file_name__  // 'images 파일 세팅'에서 다운로드
      								js __folder_name__
      									main.js __file_name__
      									util.js __file_name__
      							html __folder_name__
      								_templates __folder_name__
      								index.html __file_name__`}
      </CodeBlock>

      		</article>
      		

      		<article className="mt_ml indent">
      			<h3 className="ml_mn t_blue">css 파일 세팅</h3>

      			
      <CodeBlock filename="_reset.scss" title="_reset.scss" language="scss" className="uk_gist_code_box mt_ms">
      {`html, body, div, span, applet, object, iframe,
      					h1, h2, h3, h4, h5, h6, p, blockquote, pre,
      					a, abbr, acronym, address, big, cite, code,
      					del, dfn, em, img, ins, kbd, q, s, samp,
      					small, strike, strong, sub, sup, tt, var,
      					b, u, i, center,
      					dl, dt, dd, ol, ul, li,
      					fieldset, form, label, legend,
      					table, caption, tbody, tfoot, thead, tr, th, td,
      					article, aside, canvas, details, embed,
      					figure, figcaption, footer, header, hgroup,
      					menu, nav, output, ruby, section, summary,
      					time, mark, audio, video {
      						margin: 0;
      						padding: 0;
      						border: 0;
      						font-size: 100%;
      						font: inherit;
      						vertical-align: baseline;
      					}
      					/* HTML5 display-role reset for older browsers */
      					article, aside, details, figcaption, figure,
      					footer, header, hgroup, menu, nav, section {
      						display: block;
      					}
      					body {
      						line-height: 1;
      					}
      					ol, ul {
      						list-style: none;
      					}
      					blockquote, q {
      						quotes: none;
      					}
      					blockquote:before, blockquote:after,
      					q:before, q:after {
      						content: '';
      						content: none;
      					}
      					table {
      						border-collapse: collapse;
      						border-spacing: 0;
      					}`}
      </CodeBlock>

      			
      <CodeBlock filename="_variable.scss" title="_variable.scss" language="scss" className="uk_gist_code_box mt_ms">
      {`$bg-color: #eee;
      					$font-color: #006be2;`}
      </CodeBlock>

      			
      <CodeBlock filename="style.scss" title="style.scss" language="scss" className="uk_gist_code_box mt_ms">
      {`@charset "utf-8";
      					@import '_reset';
      					@import '_variable';

      					html {
      						background-color: $bg-color;
      					}

      					.wrap {
      						margin:0 20px;

      						.header {
      							display: flex;
      							align-items: center;
      							justify-content: space-between;
      							padding: 15px;
      							background-color: #ccc;
      						}

      						.container {
      							h1 {
      								margin-top: 20px;
      								font-size: 26px;
      								font-weight: bolder;
      								color: $font-color;
      							}
      							.image_box {
      								overflow:hidden;
      								display: flex;
      								flex-direction: column;
      								margin-top: 20px;
      								padding: 10px;
      								background-color: #fff;
      								box-shadow: 0 0 10px rgba(0,0,0,.1);
      								border-radius: 10px;
      							}
      						}

      						.footer {
      							margin-top: 20px;
      						}
      					}`}
      </CodeBlock>

      		</article>
      		

      		<article className="mt_ml indent">
      			<h3 className="ml_mn t_blue">images 파일 세팅</h3>

      			<p className="mt_ms">
      				아래 링크를 클릭하여 이미지를 다운로드하세요.<br />
      				<a href={`${IMG.GULP}/visual.png`} className="underline" download><b className="t_blue">visual.png 다운로드</b></a>
      			</p>
      		</article>
      		

      		<article className="mt_ml indent">
      			<h3 className="ml_mn t_blue">js 파일 세팅</h3>

      			
      <CodeBlock filename="util.js" title="util.js" language="javascript" className="uk_gist_code_box mt_ms">
      {`export const random = max => Math.floor(Math.random() * max);`}
      </CodeBlock>

      			
      <CodeBlock filename="main.js" title="main.js" language="javascript" className="uk_gist_code_box mt_ms">
      {`import {random} from './util';

      					const randomOne = random(10);
      					const randomTwo = random(20);

      					console.log( \`\${randomOne} \${randomTwo}\` );`}
      </CodeBlock>

      		</article>
      		

      		<article className="mt_ml indent">
      			<h3 className="ml_mn t_blue">html 파일 세팅</h3>

      			<p className="mt_ms">
      				HTML 파일은 &apos;<a href="/buildSystem/gulp/04-gulp_njk/01-njk_setting" className="underline weight-bold t_black">Gulp NJK 세팅</a>&apos; 페이지에서 진행합니다.<br />
      				<a href="/buildSystem/gulp/04-gulp_njk/01-njk_setting" className="box_link mt_s">Gulp NJK 세팅 바로가기</a>
      			</p>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">2.4.4. gulpfile.js 생성</h2>
      		<p className="mt_m">
      			<i className="filename t_blue">gulpfile.js</i>는 <b>Gulp의 설정 파일</b>로,
      			<b>Gulp가 수행해야 할 모든 작업을 정의하는 역할</b>을 합니다.<br />
      			이 파일에서는 <code className="t_blue">npm</code>으로 설치한 각 패키지의 역할을 선언하여,
      			<b>예를 들어 <code className="t_blue">SCSS</code>나 <code className="t_blue">LESS</code>를 <code className="t_blue">CSS</code>로 변환</b>하거나,
      			<b><code className="t_blue">ES6</code> 문법을 일반 JavaScript 문법으로 변환 및 압축(minify)</b>할 수 있습니다.<br />
      			또한 <b>이미지 파일을 무손실 압축하여 전체 이미지 용량을 줄이는</b> 등의 작업도 가능합니다.<br />
      			위에서 언급한 내용은 일부에 불과하며, <b>실제로는 더욱 다양한 편리한 작업들을 정의</b>할 수 있습니다.
      		</p>
      		<TerminalBlock className="terminal_code_box mt_ms">
      {`npx -p touch nodetouch gulpfile.js`}
      </TerminalBlock>
      		<p className="mt_ms">
      			<i className="terminal">터미널</i>에서 위 명령을 실행하면 아래처럼 <b className="filename t_blue">gulpfile.js</b>가 생성됩니다.
      		</p>
      		<p className="mt_ms">
      			<img src={`${IMG.GULP}/gulp_gulpfile.png`} alt="gulpfile.js 생성" />
      		</p>
      		<p className="mt_ms">
      			생성된 <b className="filename t_blue">gulpfile.js</b>에 아래 코드를 붙여넣습니다.
      		</p>
      		
      <CodeBlock filename="gulpfile.js" title="gulpfile.js test" language="javascript" className="uk_gist_code_box mt_ms">
      {`const gulp = require('gulp');

      				gulp.task('dev', function(){
      					return console.log('gulp dev test !!!');
      				});

      				// 위 코드는 테스트용 코드로 곧 삭제될 코드입니다.`}
      </CodeBlock>

      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">2.4.5. package.json에 gulp 실행 명령어 추가</h2>
      		<p className="mt_m">
      			<i className="terminal">터미널</i>에서 <i className="t_blue">Gulp</i>를 실행하기 위해 앞서 <b className="t_blue">gulp-cli</b>를 전역(global)로 설치했습니다.<br />
      			이제는 <i className="t_blue">Gulp</i> 실행 명령어를 <b className="filename t_blue">package.json</b>의 <code>scripts</code>에 추가합니다.
      		</p>
      		
      <CodeBlock filename="package.json script" title="package.json script" language="json" className="uk_gist_code_box mt_ms">
      {`{
      					"scripts": {
      						"test": "echo \\"Error: no test specified\\" && exit 1", // 이 줄은 삭제합니다.
      						"dev": "gulp dev",     // 추가
      						"build": "gulp build"  // 추가
      					},
      				}`}
      </CodeBlock>


      		<p className="mt_ms">
      			<i className="terminal">터미널</i>에서 방금 추가한 <code>gulp dev</code> 명령을 입력한 후, 엔터 키를 눌러 실행합니다.
      		</p>
      		<TerminalBlock className="terminal_code_box mt_ms">
      {`gulp dev`}
      </TerminalBlock>
      		<p className="mt_ms">
      			<img src={`${IMG.GULP}/gulp_gulpfile_test.png`} alt="gulpfile.js 테스트" />
      		</p>
      		<p className="mt_ms">
      			<b className="filename t_blue">gulpfile.js</b>가 실행되고,
      			<i className="terminal">터미널</i>에 <mark><code>gulp dev test !!!</code></mark> 텍스트가 출력이 된다면 여기까지의 세팅이 성공적으로 진행된 것입니다.<br />
      			다만, <b className="t_red">빨간색 에러 메시지</b>는 <code>dev</code>라는 <b>task</b>에 대한 구체적인 설정이나
      			<b className="filename t_blue">gulpfile.js</b> 내 <b>전체적인 작업 정의가 아직 이루어지지 않았기 때문이므로, 정상적인 현상입니다.</b>
      		</p>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">2.4.6. .gitignore 파일 생성</h2>
      		<blockquote className="uk_note mt_m" role="note">
      			<h2 className="sound_only">요약 설명</h2>
      			<p>
      				<b>.gitignore</b>는 <b>Git 버전 관리 시스템에서 특정 파일이나 디렉터리를 추적하지 않도록 설정하는 파일입니다.</b><br />
      				프로젝트를 Git으로 관리할 때, 빌드 결과물, 개인 설정 파일, 로그 파일 등 버전 관리에 포함할 필요가 없는 파일들이 있을 수 있습니다.
      				이 경우 <b className="filename">.gitignore</b> 파일에 해당 항목을 명시하여 Git이 이러한 파일을 무시하도록 할 수 있습니다.<br />
      				(<i className="underline"><b className="filename">.gitignore</b> 파일은 확장자가 없습니다.</i>)
      			</p>
      			<div className="mt_ms">
      				예를 들면,
      				<ul className="dot_lst">
      					<li>NodeJS-Express로 개발할 때 npm module</li>
      					<li>Java 컴파일된(.class) 파일</li>
      					<li>AWS 비밀 키, JWT 비밀 키 등등이 있습니다.</li>
      				</ul>
      			</div>
      			<p className="mt_ms">
      				npm 모듈은 용량이 크고, 일반적으로 <i className="filename">package.json</i>과
      				<i className="filename">package-lock.json</i> 파일을 통해 의존성을 관리할 수 있기 때문에,
      				Git 저장소에는 포함하지 않고 프로젝트를 클론한 후 <code>npm install</code> 명령어로 필요한 모듈을 설치하는 것이 더 효율적입니다.<br />
      				또한, AWS 키나 JWT 비밀 키 같은 민감한 정보는
      				GitHub와 같은 공개 저장소에 노출될 경우 악용될 위험이 있으므로 절대 업로드해서는 안 됩니다.<br />
      				이러한 민감 정보는 <i className="filename">.env</i> 파일 등 외부 설정 파일로 분리하고,
      				해당 파일은 <i className="filename">.gitignore</i>에 추가하여 버전 관리에서 제외하는 것이 안전합니다.
      			</p>
      		</blockquote>
      		<p className="mt_m">
      			아직 Git 저장소를 활용하여 Gulp 세팅을 진행하고 있지는 않지만,
      			추후 버전 관리를 위해 반드시 알아두어야 할 내용이므로 기초 세팅 단계에서
      			<b className="filename t_blue">.gitignore</b> 파일을 세팅합니다.<br />
      			<b className="folder">gulp_setting</b> 폴더 하위로 <b className="filename t_blue">.gitignore</b> 파일을 생성합니다.
      		</p>
      		<p className="mt_ms">
      			<img src={`${IMG.GULP}/gulp_gitignore.png`} alt=".gitignore 파일 생성" />
      		</p>
      		<p className="mt_ms">
      			생성된 <b className="filename t_blue">.gitignore</b> 파일에 아래의 코드를 적용합니다. (주석은 제외합니다.)
      		</p>
      		
      <CodeBlock filename=".gitignore" title=".gitignore" language="javascript" className="uk_gist_code_box mt_ms">
      {`/.idea             # Jet Brains 계열 에디터의 설정 폴더
      				/node_modules      # 용량이 큰 npm module (패키지 설치기 자동 생성)
      				/.publish          # 배포(deploy) 단계에서 임시로 사용될 폴더
      				/.git              # git 설정 폴더 (git 세팅 시 자동 생성)
      				/dist              # 컴파일 결과물 폴더
      				package-lock.json`}
      </CodeBlock>

      	</section>
      	

      	<figure className="img_figure mt_l">
      		<img src={`${IMG.GULP}/02_gulp_04.png`} alt="Gulp 기초 세팅" />
      		<figcaption>
      			Gulp 기초 세팅
      		</figcaption>
      	</figure>
    </>
  )
}

export default BaseSettingPage
