import { useGulpPageMeta } from '@/hooks/useGulpPageMeta'
import { IMG } from '@/config/path'
import CodeBlock from '@/components/code/CodeBlock'
import TerminalBlock from '@/components/code/TerminalBlock'

function GulpBabelPage() {
  useGulpPageMeta()

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
      		<h2 className="sound_only">요약 설명</h2>
      		<p>
      			<i className="filename t_darkblue">gulpfile.js</i>에 최신 JavaScript인 <mark>ECMAScript 2015 이상의 문법(이하 &apos;<b>ES6 문법</b>&apos;)</mark>을 사용할 수 있는 기본 환경을 세팅합니다.<br />
      		</p>
      		<p className="mt_s">※ Babel의 자세한 설명은 <b>[6.2. JS - Babel Support]</b> 에서 자세하게 다룹니다.</p>
      	</blockquote>

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">2.5.1. Babel을 사용하면 좋은 점</h2>
      		<ol className="mt_m ol_lst info_lst gap-column-important-ms">
      			<li className="t_black_before weight-600-before">
      				<strong>최신 JavaScript 문법을 하위 호환 가능한 코드로 변환</strong>
      				<ul className="dot_lst">
      					<li>
      						Babel은 ES6+ 문법(<code>let</code>, <code>const</code>, <code>arrow function</code>,
      						<code>class</code>, <code>async/await</code> 등)을 ES5로 변환하여
      						<b>구형 브라우저나 오래된 Node.js 환경에서도 실행 가능하게 만듭니다.</b>
      					</li>
      					<li>
      						예를 들어, 아직 지원되지 않는 문법을 사용하는 코드를 자동으로 바꿔줌으로써,
      						개발자는 최신 문법을 자유롭게 사용할 수 있습니다.
      					</li>
      				</ul>
      			</li>
      			<li className="t_black_before weight-600-before">
      				<strong>브라우저 지원 범위 설정 가능 (Preset-env)</strong>
      				<ul className="dot_lst">
      					<li>
      						<code>@babel/preset-env</code>를 사용하면, 지원하고자 하는 브라우저 목록(예: &quot;&gt; 1%&quot;, &quot;IE 11&quot;)에 맞춰 필요한 변환만 적용됩니다.
      					</li>
      					<li>
      						이 방식은 <b>불필요한 트랜스파일을 줄여 코드 용량도 절감</b>할 수 있어 효율적입니다.
      					</li>
      				</ul>
      			</li>
      			<li className="t_black_before weight-600-before">
      				<strong>JSX, TypeScript 등 다양한 문법 지원</strong>
      				<ul className="dot_lst">
      					<li>
      						Babel은 JSX(React), TypeScript, Flow 같은 <b>JavaScript 확장 문법을 일반 JavaScript로 변환</b>해 줍니다.
      					</li>
      					<li>
      						예를 들어, React 앱을 만들 때 Babel은 JSX 코드를 브라우저가 이해할 수 있는
      						<code>React.createElement</code> 형태로 변환합니다.
      					</li>
      				</ul>
      			</li>
      			<li className="t_black_before weight-600-before">
      				<strong>플러그인 및 커스터마이징 가능</strong>
      				<ul className="dot_lst">
      					<li>
      						Babel은 플러그인 기반 구조로 되어 있어서, 필요에 따라 기능을 추가하거나 제한할 수 있습니다.
      					</li>
      					<li>
      						예를 들어, 프로덕션 빌드 시에는 콘솔 로그를 제거하거나, 코드 난독화를 추가하는 등의 처리가 가능합니다.
      					</li>
      				</ul>
      			</li>
      			<li className="t_black_before weight-600-before">
      				<strong>미래 문법 실험 및 안정된 마이그레이션 가능</strong>
      				<ul className="dot_lst">
      					<li>
      						TC39 단계의 실험적 문법도 Babel 플러그인을 통해 미리 사용할 수 있습니다.
      					</li>
      					<li>
      						이로써 <b>미래 문법을 테스트하거나 점진적으로 코드베이스를 마이그레이션</b>할 수 있습니다.
      					</li>
      				</ul>
      			</li>
      		</ol>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">2.5.2. <i className="t_777">gulpfile.js</i>를 <i className="t_blue">gulpfile.babel.js</i>로 변경</h2>
      		<p className="mt_m">
      			Babel을 활용하기 위해 기존 <b className="filename">gulpfile.js</b>를 <b className="filename t_blue">gulpfile.babel.js</b>로 변경합니다.
      		</p>
      		<p className="mt_m">
      			<img src={`${IMG.GULP}/gulp_gulpfile_babel.png`} alt="gulpfile.babel.js로 변경 예시" />
      		</p>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">2.5.3. .babelrc 파일 생성</h2>

      		<blockquote className="uk_note mt_l" role="note">
      			<h2 className="sound_only">요약 설명</h2>
      			<p>
      				<b className="filename">.babelrc</b>는 <b>Babel이 JavaScript 코드를 어떻게 변환할지 설정하는 JSON 형식의 구성 파일입니다.</b><br />
      				주로 최신 문법이나 JSX, TypeScript를 구형 브라우저에서도 동작하도록 바꾸기 위해 사용되고,
      				<code>presets</code>와 <code>plugins</code> 항목을 통해 변환 규칙과 기능을 지정할 수 있습니다.<br />
      				간단한 설정에 적합하며, 복잡한 경우엔 <code>babel.config.js</code>를 사용하는 것이 좋습니다.
      			</p>
      		</blockquote>

      		<p className="mt_l">
      			<b className="folder">gulp_setting</b> 폴더 하위로
      			<b className="filename t_blue">.babelrc</b> 파일을 생성하고 아래 코드를 적용합니다.
      		</p>
      		<p className="mt_m">
      			<img src={`${IMG.GULP}/gulp_babelrc.png`} alt=".babelrc 파일 생성" />
      		</p>
      		
      <CodeBlock filename=".babelrc" title=".babelrc" language="javascript" className="uk_gist_code_box mt_m">
      {`{
      					"presets": ["@babel/preset-env"]
      				}`}
      </CodeBlock>

      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">2.5.4. Babel 패키지 설치 및 테스트</h2>
      		<p className="mt_m">
      			정상적인 <code>gulp dev</code> 실행을 위해 <mark>Babel 관련 패키지(<code>register, core, preset-env</code>)</mark>를 설치해야 합니다.<br />
      			<span className="underline">최신 버전의 <i className="t_black">Babel</i> 설치를 위해 <b className="t_blue">Babel 앞에 @를 붙여서 설치</b></span>합니다.<br />
      			<b className="terminal">터미널</b>에서 아래 명령을 실행합니다.
      		</p>
      		<TerminalBlock className="terminal_code_box mt_m">
      {`npm i @babel/register @babel/core @babel/preset-env -D  // for Win OS
      				npm i @babel/{register,core,preset-env} -D              // for Mac OS`}
      </TerminalBlock>
      		<p className="mt_m">
      			패키지 설치가 완료되면 <b className="filename t_blue">package.json</b>의 <code className="t_blue">devDependencies</code>에
      			업데이트됩니다.
      		</p>
      		
      <CodeBlock filename="package.json" title="package.json devDependencies" language="json" className="uk_gist_code_box mt_m">
      {`{
      					"devDependencies": {
      						"@babel/core": "^7.19.3",         // 추가됨
      						"@babel/preset-env": "^7.19.4",   // 추가됨
      						"@babel/register": "^7.18.9",     // 추가됨
          				"gulp": "^4.0.2"  								// 기존에 설치한 gulp
      					}
      				}`}
      </CodeBlock>

      		<p className="mt_m">
      			<b className="terminal">터미널</b>에서 <code>gulp dev</code>를 실행합니다.
      		</p>
      		<TerminalBlock className="terminal_code_box mt_m">
      {`gulp dev`}
      </TerminalBlock>
      		<p className="mt_m">
      			<img src={`${IMG.GULP}/gulp_babel_dev_test.png`} alt="gulp dev 테스트" />
      		</p>
      		<p className="mt_m">
      			<code>gulp dev</code>를 실행하여 위 이미지와 같은 결과가 나왔다면 <b className="t_blue">Babel</b>이 정상적으로 설치된 것입니다.<br />
      			<i className="t_blue underline">파란색 밑줄은 <b>Gulp</b>가 <b>Babel</b>을 사용하고 있다는 의미</i>입니다.
      		</p>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">2.5.5. Gulp 기본설정 마무리</h2>
      		<p className="mt_m">
      			<b className="t_blue">여기까지 Gulp의 기본 세팅이 완료되었습니다.</b><br />
      			우리는 <b className="filename t_blue">package.json</b>을 생성하고 <b className="t_blue">Node.js</b>를 설치하였으며,
      			<i className="terminal">터미널</i>에서 <code className="t_blue">npm</code> 명령어를 이용해 여러 패키지를 설치해 보았습니다.<br />
      			처음에는 다소 생소하게 느껴질 수 있지만, 지금까지 진행한 기본 세팅 과정을 한두 번 더 반복해서 설치해 보면 금방 익숙해질 것입니다.
      		</p>
      		<p className="mt_ms">
      			지금까지는 기본적인 세팅을 진행한 단계로, 실제로 HTML과 CSS를 코딩할 수 있는 환경을 갖추기 위해서는
      			앞으로 더 많은 패키지를 설치하고 <i className="filename">gulpfile.babel.js</i> 파일을 추가로 설정해야 합니다.<br />
      			하지만 다음 과정들도 지금까지 진행한 흐름과 크게 다르지 않으므로,
      			<i className="underline">천천히 커리큘럼을 따라 하다 보면 완성된 형태의 <b className="t_blue">Gulp</b> 환경을 구성할 수 있습니다.</i>
      		</p>
      		<p className="mt_ms">
      			다음 단계부터는 실제 퍼블리싱 작업에 필요한 환경을 구축하기 위해 아래와 같은 설정을 진행하게 됩니다.
      		</p>
      		<ul className="indent_small dot_lst mt_sm">
      			<li>
      				반복되는 HTML 요소를 효율적으로 관리할 수 있도록 HTML을 include 방식으로 구성합니다.
      			</li>
      			<li>
      				SCSS를 CSS로 컴파일한 뒤 minify(압축)하여 최적화합니다.
      			</li>
      			<li>
      				ES6 이상의 JavaScript 문법을 기존 JavaScript로 트랜스파일하고, 역시 minify 처리하여 용량을 줄입니다.
      			</li>
      			<li>
      				이미지 파일을 무손실 압축하여 최적화합니다.
      			</li>
      			<li>
      				로컬 웹 서버를 작동시키고 파일 변경을 실시간으로 감시하여 자동으로 결과를 반영할 수 있도록 설정합니다.
      			</li>
      		</ul>
      	</section>
      	

      	<figure className="img_figure mt_l">
      		<img src={`${IMG.GULP}/02_gulp_05.png`} alt="Gulp + Babel" />
      		<figcaption>
      			Gulp + Babel
      		</figcaption>
      	</figure>
    </>
  )
}

export default GulpBabelPage
