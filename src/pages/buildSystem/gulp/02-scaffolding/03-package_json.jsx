import { useGulpPageMeta } from '@/hooks/useGulpPageMeta'
import { IMG } from '@/config/path'
import CodeBlock from '@/components/code/CodeBlock'
import TerminalBlock from '@/components/code/TerminalBlock'

function PackageJsonPage() {
  useGulpPageMeta()

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
      		<h2 className="sound_only">요약 설명</h2>
      		<p>
      			<b className="t_black">package.json</b>이란 현재 프로젝트에 관한 정보와 패키지 매니저(npm, yarn)를 통해 설치한 패키지들의 의존성을 관리하는 파일입니다.<br />
      			간단하게 &apos;<mark>현재 프로젝트에 대한 정보를 저장하는 파일</mark>&apos;입니다.
      		</p>
      	</blockquote>

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">2.3.1. package.json 생성</h2>
      		<p className="mt_m">
      			<b className="folder">gulp_setting</b> 폴더에서 <b className="terminal">터미널</b>을 열고 아래 명령을 실행합니다. (아래 명령 중 첫 번째 명령을 실행합니다.)
      		</p>
      		<TerminalBlock className="terminal_code_box mt_ms">
      {`npm init      // package.json 생성 (각 항목의 내용을 입력하면서 package.json 생성 ← 이 명령어를 이용하세요)
      				npm init -y   // package.json 생성 (내용 입력 없이 바로 package.json 생성)`}
      </TerminalBlock>
      		<p className="mt_ml">
      			<code>npm init</code> 명령이 실행되면 아래처럼 <b className="filename t_blue">package.json</b> 생성이 시작됩니다.
      		</p>
      		<p className="mt_ms">
      			<img src={`${IMG.GULP}/gulp_scaffolding_package1.png`} alt="package.json 생성 첫 단계" />
      		</p>
      		<p className="mt_ml">
      			여기부터는 <b className="t_blue">엔터</b>만 연타하면 마무리가 됩니다.<br />
      			<code>version</code>, <code>description</code> 등 모든 항목은 <b className="filename t_blue">package.json</b> 생성 완료 후 수정이 가능합니다.
      		</p>
      		<p className="notice_red mt_ml">주의할 점!!</p>
      		<p>
      			<code className="t_blue">package name</code>은 폴더명으로 괄호 안에 자동 적용되기 때문에 바로 엔터를 누르면 되지만,<br />
      			<i className="t_red">_gulp_setting</i>처럼 <i className="t_red"><b>밑줄( _ )로 폴더명을 시작할 경우</b> 엔터를 눌러도 다음 단계로 진행되지 않습니다.</i><br />
      			(<i className="t_red warning"><b>띄어쓰기</b>나 <b>대문자</b>가 있어도 다음 단계로 진행되지 않습니다.</i>)<br />
      			이런 경우 아래 이미지처럼 따로 <code className="t_blue">package name</code>을 작성한 후 엔터를 누르면 됩니다.
      		</p>
      		<p className="mt_ms">
      			<img src={`${IMG.GULP}/gulp_scaffolding_package2.png`} alt="package.json 생성 두번째 단계" />
      		</p>
      		<p className="mt_ml">
      			위 단계까지 마무리가 되면 <b className="folder">gulp_setting </b>폴더에 <b className="filename t_blue">package.json</b> 파일이 생성된 것을 확인할 수 있습니다.
      		</p>
      		<p className="mt_ms" id="package_json">
      			<img src={`${IMG.GULP}/gulp_scaffolding_package3.png`} alt="package.json 생성 확인" />
      		</p>
      		<p className="mt_ml">
      			아래는 <b className="filename t_blue">package.json</b>의 구조를 설명하는 섹션으로 읽으면 도움이 되지만,
      			<span className="underline">건너뛰어도 나머지 <i className="t_blue">Gulp</i>를 이해하는 데 문제는 없습니다.</span>
      		</p>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">2.3.2. package.json의 구조</h2>
      		<p className="mt_m">
      			위 순서대로 진행하여 <b className="filename t_blue">package.json</b>이 생성되면 아래와 같은 구성으로 파일이 생성됩니다.<br />
      			<code>JSON</code> 포맷으로 이루어져 있으며, 각각의 정보는 키와 값의 쌍으로 저장되는 단일 <code>JSON</code> 객체로 구성됩니다.
      		</p>
      		
      <CodeBlock title="package.json" language="json" className="uk_gist_code_box mt_ms">
      {`{
      					"name": "폴더명 또는 직접 작성한 프로젝트명",
      					"version": "1.0.0",
      					"description": "",
      					"main": "index.js",
      					"scripts": {
      						"test": "echo \\"Error: no test specified\\" && exit 1"
      					},
      					"author": "",
      					"license": "ISC"
      				}`}
      </CodeBlock>


      		<article className="mt_ml indent">
      			<h3 className="ml_mn t_blue">&quot;name&quot;</h3>
      			<ul className="dot_lst mt_s">
      				<li>
      					<mark>프로젝트의 이름을 정의하며, 매우 중요한 항목입니다.</mark>
      					중앙 저장소(npm)에 배포할 때는 <code>version</code>과 함께 반드시 포함되어야 합니다.
      				</li>
      				<li>
      					이 이름은 URL 경로나 설치 시 생성되는 디렉토리 이름으로 사용되므로,
      					<i className="t_red">URL이나 디렉토리에서 사용할 수 없는 형식은 피해야 합니다.</i>
      				</li>
      				<li>
      					이름은 214자보다 짧아야 하며, 점(<code>.</code>)이나 밑줄(<code>_</code>)로 시작할 수 없고, 대문자를 포함해서는 안 됩니다.
      				</li>
      				<li>
      					또한 <code>require()</code> 함수에서 사용되므로, 짧고 알기 쉬운 이름을 사용하는 것이 좋습니다.
      				</li>
      				<li>
      					참고로 <code>node</code>나 <code>js</code>가 들어간 이름도 사용할 수 있지만, 과도한 사용은 피하는 것이 권장됩니다.
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_ml indent">
      			<h3 className="ml_mn t_blue">&quot;version&quot;</h3>
      			<ul className="dot_lst mt_s">
      				<li>프로젝트의 현재 버전을 정의하는 항목입니다.</li>
      				<li>
      					버전 번호는 일반적으로 세 자리 숫자로 구성되며,
      					이는 <b>SemVer(Semantic Versioning)</b> 방식의 버전 체계를 따르기 때문입니다.<br />
      					<b>SemVer</b>는 &quot;의미 있는 버전 관리&quot;를 뜻하며,
      					세 자리는 각각 <b>주버전(Major)</b>, <b>부버전(Minor)</b>, <b>수정버전(Patch)</b>을 나타내어 각 숫자에 명확한 의미가 부여됩니다.
      				</li>
      			</ul>
      			
      <CodeBlock title="package.json - version" language="json" className="uk_gist_code_box mt_ms">
      {`{
      						"version": "2.7.4"
      					}`}
      </CodeBlock>

      			<div className="mt_ms">
      				위 버전의,<br />
      				<ul className="dot_lst">
      					<li>
      						첫 번째 자리인 <code>2</code>는 <mark><strong>Major(주 버전)</strong>를 의미</mark>합니다.
      						만약 숫자가 <code>0</code>이면 아직 초기 개발(beta) 단계라는 뜻이고, <code>1</code>부터는 정식 릴리스를 의미합니다.<br />
      						<i className="underline"><b>Major</b> 버전이 올라간다는 것은 <b>기존 버전과 호환되지 않을 수 있는 큰 변화나 수정</b>이 있었다는 것을 뜻합니다.</i><br />
      						예를 들어, <code>1.5.0</code>을 사용하던 사용자가 <code>2.0.0</code>으로 업데이트할 경우,
      						코드가 정상적으로 작동하지 않거나 에러가 발생할 수 있습니다.
      					</li>
      					<li>
      						두 번째 자리인 <code>7</code>은 <mark><strong>Minor(부 버전)</strong>를 의미</mark>합니다.
      						새로운 기능이 추가되었지만, 기존 기능과의 하위 호환성은 유지되는 경우에 <b>Minor</b> 버전이 증가합니다.
      					</li>
      					<li>
      						세 번째 자리인 <code>4</code>는 <mark><strong>Patch(수정 버전)</strong>를 의미</mark>합니다.
      						기존 기능에 문제가 생겨 버그 수정이나 사소한 개선이 이루어졌을 때 <b>Patch</b> 버전을 올립니다.
      					</li>
      				</ul>
      			</div>
      		</article>
      		

      		<article className="mt_ml indent">
      			<h3 className="ml_mn t_blue">&quot;description&quot;</h3>
      			<ul className="dot_lst mt_s">
      				<li>프로젝트에 대한 간단한 설명을 담는 문자열 항목입니다.</li>
      				<li>
      					이 설명은 <code>npm search</code> 결과나 <b>npm</b> 패키지 페이지에 표시되므로,
      					<b>다른 사람들이 패키지를 쉽게 찾고 이해하는 데 도움이 됩니다.</b>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_ml indent">
      			<h3 className="ml_mn t_blue">&quot;keywords&quot;</h3>
      			<ul className="dot_lst mt_s">
      				<li>프로젝트를 검색할 때 참조되는 <b>연관 키워드 목록</b>입니다.</li>
      				<li>
      					<code className="t_blue weight-600">description</code>과 마찬가지로,
      					<code>npm search</code> 결과에 영향을 주어 <b>사용자가 관련 패키지를 쉽게 찾을 수 있도록 도와줍니다.</b>
      				</li>
      			</ul>
      			
      <CodeBlock title="package.json - keywords" language="json" className="uk_gist_code_box mt_ms">
      {`{
      						"keywords": ["fruits", "Apple", "Persimmon", "Pomegranate", "Jujube", "Mango", "Yuja"]
      					}`}
      </CodeBlock>

      		</article>
      		

      		<article className="mt_ml indent">
      			<h3 className="ml_mn t_blue">&quot;homepage&quot;</h3>
      			<ul className="dot_lst mt_s">
      				<li>
      					프로젝트의 공식 홈페이지나 관련 문서를 안내하는 <strong>웹사이트 주소(URL)</strong>를 지정하는 항목입니다.
      				</li>
      				<li>
      					사용자나 개발자가 프로젝트에 대해 더 자세히 알아볼 수 있는 <b>외부 링크를 제공</b>합니다.
      				</li>
      				<li>
      					<code>url</code> 필드와는 다르며, <code>url</code>을 잘못 설정할 경우 예상치 못한 동작이 발생할 수 있으므로 주의해야 합니다.
      				</li>
      			</ul>
      			
      <CodeBlock title="package.json - homepage" language="json" className="uk_gist_code_box mt_ms">
      {`{
      						"homepage": "https://your-package.org"
      					}`}
      </CodeBlock>

      		</article>
      		

      		<article className="mt_ml indent">
      			<h3 className="ml_mn t_blue">&quot;bugs&quot;</h3>
      			<ul className="dot_lst mt_s">
      				<li>
      					프로젝트의 <b>버그나 이슈를 보고하거나 확인할 수 있는 URL</b> 또는 <b>연락용 이메일 주소</b>를 설정하는 항목입니다.
      				</li>
      				<li>
      					패키지 사용자가 문제를 발견했을 때, <b>신속하게 도움을 받거나 개발자에게 제보할 수 있도록 돕습니다.</b>
      				</li>
      				<li>
      					<code>url</code>, <code>email</code> 중 하나만 지정할 수도 있고, <b>둘 다 함께 설정할 수도 있습니다.</b>
      				</li>
      				<li>
      					<code>url</code>이 설정되어 있으면, 사용자는 <code>npm bugs</code> 명령어로 해당 페이지를 빠르게 열 수 있습니다.
      				</li>
      			</ul>
      			
      <CodeBlock title="package.json - bugs" language="json" className="uk_gist_code_box mt_ms">
      {`// url, email 모두 사용
      					{
      						"bugs": {
      							"url" : "https://github.com/owner/project/issues",
      							"email" : "project@hostname.com"
      						}
      					}

      					// url 만 사용
      					{
      						"bugs": {
      							"url" : "https://github.com/owner/project/issues"
      						},
      						// 또는
      						"bugs": "https://github.com/owner/project/issues"
      					}`}
      </CodeBlock>

      		</article>
      		

      		<article className="mt_ml indent">
      			<h3 className="ml_mn t_blue">&quot;license&quot;</h3>
      			<ul className="dot_lst mt_s">
      				<li>
      					배포한 패키지를 사용하는 사람이
      					<b>어떤 권한을 갖고, 어떤 제한을 따라야 하는지를 명확히 하기 위해
      						<code className="weight-600">license</code>를 지정해야 합니다.</b>
      				</li>
      				<li>
      					패키지의 <b>법적 사용 조건을 명시하는 중요한 항목</b>으로,
      					사용자가 자유롭게 사용할 수 있는지, 수정·재배포가 가능한지를 판단하는 기준이 됩니다.
      				</li>
      			</ul>
      			
      <CodeBlock title="package.json - license" language="json" className="uk_gist_code_box mt_ms">
      {`{
      						"license": "MIT",
      						"license": "(MIT or GPL-3.0)",
      						"license": "SEE LICENSE IN LICENSE_FILENAME.txt",
      						"license": "UNLICENSED"
      					}`}
      </CodeBlock>

      		</article>
      		

      		<article className="mt_ml indent">
      			<h3 className="ml_mn t_blue">&quot;author&quot;</h3>
      			<ul className="dot_lst mt_s">
      				<li>
      					프로젝트의 <b>작성자 정보를 나타내는 항목</b>으로, 한 사람만 지정할 수 있습니다.
      				</li>
      				<li>
      					<code>name</code>은 반드시 포함해야 하며, 선택적으로 <code>email</code>과 <code>url</code>을 함께 작성할 수 있습니다.
      				</li>
      			</ul>
      			
      <CodeBlock title="package.json - author" language="json" className="uk_gist_code_box mt_ms">
      {`{
      						"author": {
      							"name": "Your Name",
      							"email": "you@example.com",
      							"url": "http://your-website.com"
      						},
      						// 또는
      						"author": "Your Name <you@example.com> (http://your-website.com)"
      					}`}
      </CodeBlock>

      		</article>
      		

      		<article className="mt_ml indent">
      			<h3 className="ml_mn t_blue">&quot;contributors&quot;</h3>
      			<ul className="dot_lst mt_s">
      				<li>
      					프로젝트에 <strong>직접 기여한 여러 공헌자(contributors)</strong>의 정보를 나타내는 항목입니다.
      				</li>
      				<li>
      					<b>여러 사람을 배열 형태로 나열할 수 있으며</b>,
      					각 항목은 <b className="t_blue">작성자</b>와 마찬가지로 <code>name</code>, <code>email</code>, <code>url</code> 정보를 포함할 수 있습니다.
      				</li>
      			</ul>
      			
      <CodeBlock title="package.json - author" language="json" className="uk_gist_code_box mt_ms">
      {`{
      						"contributors": [
      							{ "name": "Your Friend", "email": "friend@example.com", "url": "http://friends-website.com" }
      							{ "name": "Other Friend", "email": "other@example.com", "url": "http://other-website.com" }
      						],
      						// 또는
      						"contributors": [
      							"Your Friend <friend@example.com> (http://friends-website.com)",
      							"Other Friend <other@example.com> (http://other-website.com)"
      						]
      					}`}
      </CodeBlock>

      		</article>
      		

      		<article className="mt_ml indent">
      			<h3 className="ml_mn t_blue">&quot;files&quot;</h3>
      			<ul className="dot_lst mt_s">
      				<li>
      					패키지를 배포할 때 <b>포함할 파일이나 디렉터리를 지정하는 항목</b>입니다.
      				</li>
      				<li>
      					단일 파일, 특정 디렉터리, 또는 와일드카드(<code>*</code>)를 사용하여 <b>조건에 맞는 여러 파일을 포함</b>할 수 있습니다.
      				</li>
      				<li>
      					이 항목을 사용하면, 불필요한 파일을 제외하고
      					<b>필요한 파일만 선택적으로 배포</b>할 수 있어 패키지 용량을 줄이고 관리가 쉬워집니다.
      				</li>
      			</ul>
      			
      <CodeBlock title="package.json - author" language="json" className="uk_gist_code_box mt_ms">
      {`{
      						"files": ["filename.js", "directory/", "glob/*.{js,json}"]
      						// 단일 파일, 특정 폴더, 기준을 충족하는 파일
      					}`}
      </CodeBlock>

      		</article>
      		

      		<article className="mt_ml indent">
      			<h3 className="ml_mn t_blue">&quot;main&quot;</h3>
      			<ul className="dot_lst mt_s">
      				<li>
      					패키지를 불러올 때(<code>require</code> 또는 <code>import</code>)
      					<strong>기본적으로 참조되는 진입점 파일(모듈 ID)</strong>을 지정하는 항목입니다.
      				</li>
      				<li>
      					일반적으로 라이브러리의 핵심 기능을 담고 있는 <b>최상위 JS 파일 경로</b>를 지정하며,
      					상대 경로가 아닌 패키지 루트 기준의 경로를 사용합니다.
      				</li>
      			</ul>
      			
      <CodeBlock title="package.json - main" language="json" className="uk_gist_code_box mt_ms">
      {`{
      						"main": "filename.js"
      					}`}
      </CodeBlock>

      		</article>
      		

      		<article className="mt_ml indent">
      			<h3 className="ml_mn t_blue">&quot;bin&quot;</h3>
      			<ul className="dot_lst mt_s">
      				<li>
      					많은 npm 패키지는 <b>명령줄에서 실행 가능한 하나 이상의 파일</b>을 제공합니다.
      					npm은 이러한 CLI 도구를 매우 쉽게 구현할 수 있도록 <code>bin</code> 항목을 지원합니다.
      				</li>
      				<li>
      					실제로 이 기능은 <code>npm</code> 자체를 설치할 때도 사용됩니다.
      				</li>
      				<li>
      					실행 가능한 CLI 도구를 만들기 위해서는 <code>package.json</code>에 <code>bin</code> 항목을 명시해야 합니다.
      				</li>
      				<li>
      					패키지를 설치할 때, npm은 <code>bin</code>에 지정된 파일에 대해 <strong>심볼릭 링크(symlink)</strong>를 생성합니다.
      					<ul className="dot_lst dot_lst_inner mt_sm">
      						<li>
      							<b>전역 설치 시</b> : <code>&lt;prefix&gt;/bin</code> (예: <code>/usr/local/bin</code>)
      						</li>
      						<li>
      							<b>로컬 설치 시</b> : <code>./node_modules/.bin/</code>
      						</li>
      					</ul>
      				</li>
      			</ul>
      			
      <CodeBlock title="package.json - bin" language="json" className="uk_gist_code_box mt_ms">
      {`{
      						"bin": { "myapp": "./cli.js" }
      					}`}
      </CodeBlock>

      			<ul className="dot_lst mt_ms">
      				<li>
      					위 예시의 경우, 전역 설치 시 <code>/usr/local/bin/myapp</code>에 <code>cli.js</code>의 링크가 생성됩니다.
      				</li>
      				<li>
      					이렇게 하면 사용자는 터미널에서 <code>myapp</code> 명령어로 <code>cli.js</code>를 실행할 수 있습니다.
      				</li>
      			</ul>
      			
      <CodeBlock title="package.json - bin" language="json" className="uk_gist_code_box mt_m">
      {`{
      						"bin": {
      							"command-name": "bin/command-name.js",
      							"other-command": "bin/other-command"
      						}
      					}`}
      </CodeBlock>

      			<p className="mt_ms">
      				하나의 패키지에 여러 CLI 명령어를 제공할 경우, 각 실행 파일에 대해 이름을 지정해 줄 수 있습니다.
      			</p>
      		</article>
      		

      		<article className="mt_ml indent">
      			<h3 className="ml_mn t_blue">&quot;directories&quot;</h3>
      			<ul className="dot_lst mt_s">
      				<li>
      					CommonJS Packages 스펙에서는 <code>&quot;directories&quot;</code> 객체를 사용해 패키지 내 주요 디렉토리의 위치를 명시할 수 있습니다.
      				</li>
      				<li>
      					npm의 <code>package.json</code>에서도 <code>doc</code>, <code>lib</code>, <code>man</code> 등의 디렉토리 구성을 확인할 수 있습니다.
      				</li>
      				<li>
      					이 정보는 현재는 주로 문서화 용도로 사용되지만, 앞으로 다양한 창의적인 방법으로 활용될 가능성이 있습니다.
      				</li>
      			</ul>
      			
      <CodeBlock title="package.json - directories" language="json" className="uk_gist_code_box mt_ms">
      {`{
      						"directories": {
      							"lib": "path/to/lib/",
      							// 모듈이나 패키지에서 사용하는 라이브러리(코드) 파일들이 위치한 경로입니다.
      							// 특별한 동작이 있는 건 아니고, 메타데이터 용도로 경로를 알려주는 역할을 합니다.
      							&nbsp;
      							"bin": "path/to/bin/",
      							// 실행 파일들이 위치하는 경로입니다.
      							// directories.bin에 경로를 지정하면 해당 폴더 내 모든 파일이 실행 파일로 간주되어 추가됩니다.
      							// 그런데 만약 bin과 directories.bin 둘 다 지정하면 충돌이 발생해 오류가 납니다.
      							// 특정 실행 파일들만 개별적으로 지정하려면 bin을, 전체 폴더 내 모든 파일을 실행 파일로 지정하려면 directories.bin을 사용합니다.
      							&nbsp;
      							"man": "path/to/man/",
      							// man 페이지(도움말 문서)들이 위치하는 폴더 경로입니다.
      							// 여러 개의 man 문서 경로를 배열로 만드는 것보다 이 방법이 간편합니다.
      							&nbsp;
      							"doc": "path/to/doc/",
      							// 문서화된 마크다운(md) 파일들이 위치하는 폴더 경로입니다.
      							&nbsp;
      							"example": "path/to/example/"
      							// 예제 파일들이 위치하는 경로입니다.
      						}
      					}`}
      </CodeBlock>

      		</article>
      		

      		<article className="mt_ml indent">
      			<h3 className="ml_mn t_blue">&quot;repository&quot;</h3>
      			<ul className="dot_lst mt_s">
      				<li>
      					프로젝트의 <b>소스 코드가 저장된 저장소 정보</b>를 명시합니다.
      				</li>
      				<li>
      					주로 Git 저장소(GitHub, GitLab 등)를 지정하며, <b>패키지에 기여하고자 하는 사람들에게 유용한 정보</b>가 됩니다.
      				</li>
      				<li>
      					만약 GitHub 저장소로 설정되어 있다면,
      					<code>npm docs</code> 명령어를 통해 해당 GitHub 페이지로 쉽게 접근할 수 있습니다.
      				</li>
      			</ul>
      			
      <CodeBlock title="package.json - repository" language="json" className="uk_gist_code_box mt_ms">
      {`{
      						"type": "git",
          				"url": "https://github.com/user/project-name.git"
      					}`}
      </CodeBlock>

      		</article>
      		

      		<article className="mt_ml indent">
      			<h3 className="ml_mn t_blue">&quot;scripts&quot;</h3>
      			<ul className="dot_lst mt_s">
      				<li>
      					<code>&quot;scripts&quot;</code>는 빌드, 테스트, 개발 서버 실행 등과 같은 <b>프로젝트 관련 작업을 자동화</b>할 수 있는 항목입니다.
      				</li>
      				<li>
      					자주 사용하는 명령어를 미리 정의해 두면, <code>npm run</code> 명령으로 <b>간편하게 실행</b>할 수 있습니다.
      				</li>
      			</ul>
      			
      <CodeBlock title="package.json - scripts" language="json" className="uk_gist_code_box mt_ms">
      {`{
      						"scripts": {
      							"dev": "gulp dev",
      							"build": "gulp build",
      							"deploy": "gulp deploy"
      						}
      					}`}
      </CodeBlock>

      		</article>
      		

      		<article className="mt_ml indent">
      			<h3 className="ml_mn t_blue">&quot;config&quot;</h3>
      			<ul className="dot_lst mt_s">
      				<li>
      					<code>&quot;config&quot;</code>는 <b>npm 스크립트에서 사용할 수 있는 구성 값이나 매개변수</b>를 정의하는 데 사용됩니다.
      				</li>
      				<li>
      					이 항목에 정의된 값은 <code>npm_package_config_키이름</code> 형식의 환경 변수로 스크립트 내에서 참조할 수 있습니다.
      				</li>
      			</ul>
      			
      <CodeBlock title="package.json - config" language="json" className="uk_gist_code_box mt_ms">
      {`{
      						"config": {
      							"port": "8080"
      						}
      					}`}
      </CodeBlock>

      			<p className="mt_m">
      				아래와 같이 설정하면, <code>npm run start</code> 명령어 실행 시 <code>--port=8080</code>이 자동으로 전달됩니다.
      			</p>
      			
      <CodeBlock title="package.json - config" language="json" className="uk_gist_code_box mt_ms">
      {`{
      						"config": {
      							"port": "8080"
      						},
      						"scripts": {
      							"start": "node server.js --port=$npm_package_config_port"
      						}
      					}`}
      </CodeBlock>

      		</article>
      		

      		<article className="mt_ml indent">
      			<h3 className="ml_mn t_blue">&quot;dependencies&quot;</h3>
      			<ul className="dot_lst mt_s">
      				<li>
      					<strong>프로젝트 실행에 필요한 외부 패키지(라이브러리)</strong>를 정의하는 부분입니다.
      				</li>
      				<li>
      					<code>npm install</code> 또는 <code>yarn add</code> 명령어로 패키지를 설치하면,
      					해당 패키지가 자동으로 이 목록에 추가됩니다.
      				</li>
      				<li>
      					여기에 등록된 패키지는 다른 사람이 프로젝트를 설치할 때 자동으로 함께 설치되어,
      					<b>일관된 실행 환경을 보장</b>합니다.
      				</li>
      			</ul>
      			<TerminalBlock className="terminal_code_box mt_ms">
      {`npm install module_name --save  // 로컬 설치의 경우 --save는 아래 처럼 생략 가능합니다.
      					// or
      					npm install module_name`}
      </TerminalBlock>
      			<p className="mt_ms">
      				예를 들어, <mark><code>npm</code>으로 <b>uxkm-sass</b>라는 패키지를 설치하면</mark> 아래처럼 <code className="t_blue">dependencies</code>에 <code>uxkm-sass</code>가 등록됩니다.
      			</p>
      			
      <CodeBlock title="package.json - dependencies" language="json" className="uk_gist_code_box mt_ms">
      {`{
      						"dependencies": {
      							"uxkm-sass": "^1.0.2"
      							// 패키지명 : 설치된 버전
      						}
      					}`}
      </CodeBlock>

      		</article>
      		

      		<article className="mt_ml indent">
      			<h3 className="ml_mn t_blue">&quot;devDependencies&quot;</h3>
      			<ul className="dot_lst mt_s">
      				<li>
      					<b>프로젝트를 개발하거나 테스트할 때만 필요한 패키지</b>를 정의하는 항목입니다.
      				</li>
      				<li>
      					예를 들어, 코드 빌드 도구, 테스트 프레임워크, 린터(linter)와 같은 도구들이 여기에 포함됩니다.
      				</li>
      				<li>
      					이 항목에 포함된 패키지는 <code>npm install --production</code> 명령으로 설치할 경우 생략되며,
      					프로덕션(배포) 환경에서는 설치되지 않습니다.
      				</li>
      			</ul>
      			<TerminalBlock className="terminal_code_box mt_ms">
      {`npm install module_name --save-dev  // --save-dev는 아래처럼 -D로 줄여 쓰기가 가능합니다.
      					// or
      					npm install module_name -D`}
      </TerminalBlock>
      			<p className="mt_ms">
      				예를 들어, <mark><code>npm</code>으로 <b>uxkm-gulp</b>라는 패키지를 설치하면</mark> 아래처럼 <code className="t_blue">devDependencies</code>에 <code>uxkm-gulp</code>가 등록됩니다.
      			</p>
      			
      <CodeBlock title="package.json - devDependencies" language="json" className="uk_gist_code_box mt_ms">
      {`{
      						"devDependencies": {
      							"uxkm-gulp": "^1.0.2"
      							// 패키지명 : 설치된 버전
      						}
      					}`}
      </CodeBlock>

      		</article>
      		

      		<article className="mt_ml indent">
      			<h3 className="ml_mn t_blue">&quot;engine&quot;</h3>
      			<ul className="dot_lst mt_s">
      				<li>
      					<b>패키지나 애플리케이션이 작동하기 위해 필요한 Node.js 또는 npm 등의 버전을 지정</b>하는 항목입니다.
      				</li>
      				<li>
      					이를 통해 <b>호환되지 않는 환경에서의 실행을 방지</b>하고, 예상된 버전에서만 작동하도록 유도할 수 있습니다.
      				</li>
      				<li>
      					일부 패키지 매니저는 지정된 엔진 버전과 현재 환경이 맞지 않으면 경고를 출력하거나 설치를 막기도 합니다.
      				</li>
      			</ul>
      			
      <CodeBlock title="package.json - engine" language="json" className="uk_gist_code_box mt_ms">
      {`{
      						"engines": {
      							"node": ">= 18.18.0", // 예) Node.js 18 버전 이상 권장
      							"npm": ">= 9.8.1",    // 예) npm 9 버전 이상 권장
      						}
      					}`}
      </CodeBlock>

      		</article>
      		

      		<article className="mt_ml indent">
      			<h3 className="ml_mn t_blue">&quot;private&quot;</h3>
      			<ul className="dot_lst mt_s">
      				<li>
      					<code>&quot;private&quot;: true</code>로 설정하면, 해당 패키지는 <b>npm과 같은 공개 패키지 저장소에 게시할 수 없도록 막아줍니다.</b>
      				</li>
      				<li>
      					개인용 프로젝트나 내부용 패키지를 <b>실수로 외부에 배포하는 것을 방지</b>하는 용도로 사용됩니다.
      				</li>
      				<li>
      					또한, 이 설정이 된 패키지는 <code>npm publish</code> 명령 실행 시 오류가 발생하여 게시되지 않습니다.
      				</li>
      			</ul>
      			
      <CodeBlock title="package.json - private" language="json" className="uk_gist_code_box mt_ms">
      {`{
      						"private": true
      					}`}
      </CodeBlock>

      		</article>
      		
      	</section>
      	

      	<figure className="img_figure mt_l">
      		<img src={`${IMG.GULP}/02_gulp_03.png`} alt="package.json 생성" />
      		<figcaption>
      			package.json 생성
      		</figcaption>
      	</figure>
    </>
  )
}

export default PackageJsonPage
