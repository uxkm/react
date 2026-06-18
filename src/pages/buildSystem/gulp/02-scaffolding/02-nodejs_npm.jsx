import { useGulpPageMeta } from '@/hooks/useGulpPageMeta'
import { IMG } from '@/config/path'
import TerminalBlock from '@/components/code/TerminalBlock'

function NodejsNpmPage() {
  useGulpPageMeta()

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
      		<strong className="sound_only">요약 설명</strong>
      		<p>
      			Gulp는 다른 프론트엔드 워크플로우 자동화 도구와 마찬가지로
      			<b className="t_darkblue">Node.js</b> & <b className="t_darkblue">NPM ecosystem</b>에 의존합니다.<br />
      			따라서 Gulp를 설치하기 위해 반드시 <b className="t_darkblue">Node.js</b>를 우선 설치해야 합니다.
      		</p>
      	</blockquote>

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">2.2.1. Node.js</h2>
      		<p className="mt_m">
      			Node.js 공식 사이트에는 Node.js를 다음과 같이 설명하고 있습니다.<br />
      		</p>

      		<blockquote className="uk_note mt_m" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<b className="t_darkblue">Node.js</b>는 Chrome V8 JavaScript 엔진으로 빌드된 JavaScript 런타임 환경으로,
      				서버 사이드에서 JavaScript를 실행할 수 있게 해줍니다.
      				이를 통해 비동기적이고 이벤트 기반의 서버 사이드 프로그래밍을 할 수 있으며,
      				네트워크 응용 프로그램 개발 등 다양한 용도로 활용됩니다.<br />
      				Node.js는 자바스크립트로 서버를 구축하고 관리하는 간단하고 효율적인 방법을 제공합니다.
      			</p>
      		</blockquote>

      		<article className="indent mt_l">
      			<h3 className="ml_mn t_blue">Node.js의 특징</h3>
      			<p className="mt_ms">
      				<b>Node.js</b>는 웹 서버를 비롯한 다양한 서버 측 응용 프로그램 개발에 사용되며,
      				JavaScript를 사용하여 전체 스택의 웹 애플리케이션을 개발할 수 있게 해줍니다.
      			</p>
      			<ol className="ol_lst mt_s indent">
      				<li>
      					<b>비동기 이벤트 기반</b> : I/O 작업을 비동기적으로 처리하여 여러 작업을 동시에 처리할 수 있습니다.
      					Node.js가 대규모 데이터 처리나 실시간 애플리케이션에 적합하게 만듭니다.
      				</li>
      				<li>
      					<b>단일 스레드</b> : 단일 스레드 모델을 기반으로 하되, 이벤트 루프를 통해 여러 작업을 동시에 처리할 수 있습니다.
      				</li>
      				<li>
      					<b>모듈 시스템</b> : CommonJS 모듈 시스템을 따르며, 모듈 간의 코드를 재사용하기 쉽게 해줍니다.
      				</li>
      				<li>
      					<b>간편한 패키지 관리</b> : npm(Node Package Manager)을 통해 다양한 패키지를 손쉽게 관리하고 사용할 수 있습니다.
      				</li>
      				<li>
      					<b>확장성</b> : 비동기적인 특성으로 인해 대규모 애플리케이션에 적합하며,
      					클러스터링과 로드 밸런싱을 통해 확장성을 높일 수 있습니다.
      				</li>
      			</ol>
      		</article>
      		

      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue">Node.js 설치</h3>
      			<p className="mt_ms">
      				<b>Node.js</b> 공식 사이트에 접속한 후,
      				<b className="t_fff el_inline_block" style={{ padding: "0 5px", backgroundColor: "#417E38", borderRadius: "3px" }}>Node.js 다운로드 (LTS)</b>를
      				클릭하여 설치 파일을 다운로드합니다.<br />
      				<span className="t_blue">
      					(<b>LTS 버전이란?</b> 안정성과 장기 지원이 필요한 프로젝트에서 사용하는, 공식적으로 장기간 유지보수가 보장된 신뢰할 수 있는 버전입니다.)
      				</span>
      			</p>
      			<figure className="img_figure mt_ms">
      				<a href="https://nodejs.org/ko/" target="_blank" rel="noreferrer" title="새창 열기">
      					<img src={`${IMG.GULP}/gulp_nodejs1.png`} alt="node.js 사이트" />
      				</a>
      				<figcaption className="reference">
      					<a href="https://nodejs.org/ko/" target="_blank" rel="noreferrer" title="Node.js 공식 사이트 새창 열기" className="box_link external weight-700" style={{ textDecoration: "none" }}>Node.js 공식 사이트 바로가기</a>
      				</figcaption>
      			</figure>
      			<p className="mt_ml">
      				다운로드한 설치 파일을 실행하여 <b>Node.js</b> 설치 마법사를 띄운 뒤 <b className="t_black">Next</b>를 클릭합니다.
      				설치 과정 모두 <b className="t_black">Next</b>만 클릭하면 됩니다.
      			</p>
      			<p className="mt_ms">
      				<img src={`${IMG.GULP}/gulp_nodejs2.png`} alt="Node 설치 마법사 실행" />
      			</p>

      			<p className="mt_ml">
      				라이선스에 동의 후 모두 <b className="t_black">Next</b>를 클릭합니다.
      			</p>
      			<p className="mt_ms">
      				<img src={`${IMG.GULP}/gulp_nodejs3.png`} alt="Node.js 라이선스 동의" />
      			</p>

      			<p className="mt_ml">
      				<b>Node.js</b>가 설치될 위치를 지정합니다. (보통 <b>Program Files</b>에 설치합니다.) <b className="t_black">Next</b>를 클릭합니다.<br />
      				다른 폴더에 설치를 원할 경우 원하는 폴더 위치로 변경하면 됩니다.
      			</p>
      			<p className="mt_ms">
      				<img src={`${IMG.GULP}/gulp_nodejs4.png`} alt="Node.js 설치 폴더 설정" />
      			</p>

      			<p className="mt_ml">
      				사용자 정의 설정 화면입니다. 따로 변경할 내용이 없기에 <b className="t_black">Next</b>를 클릭합니다.
      			</p>
      			<p className="mt_ms">
      				<img src={`${IMG.GULP}/gulp_nodejs5.png`} alt="Node.js 사용자 정의 설정" />
      			</p>

      			<p className="mt_ml">
      				기본 모듈용 도구의 설치 여부를 묻는 화면입니다. 설치할 필요가 없기에 <b className="t_black">Next</b>를 클릭합니다.
      			</p>
      			<p className="mt_ms">
      				<img src={`${IMG.GULP}/gulp_nodejs6.png`} alt="Node.js Tools for Native Modules" />
      			</p>

      			<p className="mt_ml">
      				여기까지 설치할 준비가 완료되면 <b className="t_black">Install</b>을 클릭하여 설치를 진행합니다.
      			</p>
      			<p className="mt_ms">
      				<img src={`${IMG.GULP}/gulp_nodejs7.png`} alt="Node.js 설치" />
      			</p>
      			<p className="mt_s">
      				<img src={`${IMG.GULP}/gulp_nodejs8.png`} alt="Node.js 설치 중" />
      			</p>

      			<p className="mt_ml">
      				설치가 완료되면 <b className="t_black">Finish</b>를 클릭하여 설치 마법사를 종료합니다.
      			</p>
      			<p className="mt_ms">
      				<img src={`${IMG.GULP}/gulp_nodejs9.png`} alt="node.js 설치 종료" />
      			</p>
      		</article>
      		

      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue">Node.js 설치 확인</h3>
      			<p className="mt_ms">
      				설치가 정상적으로 완료되었는지 확인합니다.<br />
      				<i className="terminal">터미널</i>에서 아래 명령을 실행합니다.
      			</p>
      			<TerminalBlock className="terminal_code_box mt_ms">
      {`node -v`}
      </TerminalBlock>
      			<p className="mt_ms">
      				<img src={`${IMG.GULP}/gulp_nodejs10.png`} alt="node.js 설치 확인" />
      			</p>
      			<p className="mt_ms">
      				<b>Node.js</b>가 정상적으로 설치되었다면 위처럼 <i className="underline">Node.js의 버전이 표시</i>됩니다.
      			</p>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">2.2.2. NPM</h2>

      		<blockquote className="uk_note mt_l" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<b className="t_darkblue">npm</b>(Node Package Manager)은 이름 그대로 <b>Node.js의 공식 패키지 관리자</b>입니다.
      				세상에는 수많은 자바스크립트 개발자들이 이미 유용한 패키지들을 만들어 공개해두었고,
      				이러한 코드들이 모여 있는 공간이 바로 <b className="t_darkblue">npm</b>입니다.<br />
      				<b className="t_darkblue">npm</b>은 <b>Node.js</b> 생태계에서 핵심적인 역할을 하며,
      				개발자들이 자바스크립트 라이브러리나 도구를 손쉽게 설치하고 관리할 수 있도록 도와줍니다.
      			</p>
      			<p className="mt_ms">
      				또한, 개발자가 자신이 만든 패키지를 <b className="t_darkblue">npm</b>에 등록하고 배포할 수 있는 기능도 제공하여,
      				협업과 코드 재사용성을 크게 향상시킵니다.<br />
      				<b className="t_darkblue">npm</b>에 업로드된 노드 모듈을 ‘<i className="underline">패키지</i>’라고 부르며, 패키지는 다른 패키지를 사용할 수 있는데,
      				이와 같은 관계를 ‘<i className="underline">의존 관계</i>’라고 합니다.
      				이런 구조를 통해 개발자들은 다양한 오픈소스 모듈을 효율적으로 활용하여 프로젝트를 빠르고 안정적으로 개발할 수 있습니다.
      			</p>
      			<p className="mt_ms t_black">
      				<b>npm</b>은 <b>Node.js</b>를 설치하면 함께 자동으로 설치되기 때문에, 별도로 <b>npm</b>을 설치할 필요는 없습니다.<br />
      				즉, 이미 <b>Node.js</b>를 설치했다면 <b>npm</b> 명령어를 바로 사용할 수 있으며, 다양한 패키지를 설치하거나 관리할 수 있습니다.
      			</p>
      		</blockquote>

      		<article className="indent mt_l">
      			<h3 className="ml_mn t_blue">npm의 주요 기능</h3>
      			<ol className="mt_ms ol_lst info_lst gap-column-important-ms">
      				<li>
      					<strong>패키지 설치 및 제거</strong>
      					<p>
      						필요한 자바스크립트 라이브러리나 도구를 프로젝트에 설치하거나, 더 이상 필요 없는 패키지를 제거할 수 있습니다.
      					</p>
      				</li>
      				<li>
      					<strong>의존성 관리</strong>
      					<p>
      						<i className="filename">package.json</i> 파일을 통해 프로젝트에서 사용하는 모든 패키지의 이름과 버전을 자동으로 관리합니다.
      					</p>
      				</li>
      				<li>
      					<strong>패키지 업데이트</strong>
      					<p>
      						설치된 패키지를 최신 버전으로 쉽게 업그레이드할 수 있어, 보안이나 기능 개선을 반영할 수 있습니다.
      					</p>
      				</li>
      				<li>
      					<strong>스크립트 실행</strong>
      					<p>
      						<code>npm run</code> 명령어로 빌드, 테스트, 실행 등 반복 작업을 자동화할 수 있도록 설정할 수 있습니다.
      					</p>
      				</li>
      				<li>
      					<strong>패키지 배포 및 공유</strong>
      					<p>
      						직접 만든 패키지를 npm 레지스트리에 등록하여, 다른 개발자들과 공유하거나 재사용할 수 있습니다.
      					</p>
      				</li>
      			</ol>
      		</article>
      		

      		<p className="mt_xl notice_blue mb_0">
      			앞으로 Gulp를 세팅하기 위해 <b className="t_d_yellow">npm</b>을 활용하여 많은 패키지를 설치해야 합니다.<br />
      			실제 패키지 설치에 앞서 <b className="t_d_yellow">npm</b>을 어떻게 사용하는지 간단하게 알아봅니다.
      		</p>

      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue" data-conlist-h4="true">npm을 이용한 패키지(확장 모듈) 설치</h3>
      			<p className="mt_ms">
      				패키지를 설치하기 위해 <i className="terminal">터미널</i>에서 <code className="t_blue">npm install</code>이라는 명령어를 사용해야 하고,
      				<code className="t_blue">npm install</code> 명령어에는 <mark>지역(local) 설치</mark>와 <mark>전역(global) 설치</mark> 옵션이 있습니다.<br />
      				<mark>옵션을 별도로 지정하지 않으면 지역으로 설치됩니다.</mark>
      			</p>
      			<TerminalBlock className="terminal_code_box mt_ms">
      {`npm install
      					npm i       // install을 i로 줄여서 사용 가능`}
      </TerminalBlock>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">지역(local) 설치</h4>
      				<p className="mt_s">
      					<mark>현재 폴더에 패키지를 설치합니다. <b>지역(local)</b>으로 설치된 패키지는 해당 프로젝트에서만 활용됩니다.</mark><br />
      					노드 모듈은 <code>./node_modules</code>에 그리고 실행파일들은 <code>./node_modules/.bin</code>에 설치됩니다.
      				</p>
      				<TerminalBlock className="terminal_code_box mt_ms">
      {`// 단일 dependencies 설치
      						npm install module_name --save
      						npm install module_name             // --save를 생략하여 설치 가능
      						npm i module_name

      						// 단일 devDependencies 설치
      						npm install module_name --save-dev
      						npm install module_name -D					// --save-dev를 -D로 줄여서 설치 가능
      						npm i module_name -D

      						// 여러 패키지 동시 설치
      						npm install module_name module_name module_name     // dependencies 설치
      						npm i module_name module_name module_name           // dependencies 설치

      						npm install module_name module_name module_name -D  // devDependencies 설치
      						npm i module_name module_name module_name -D        // devDependencies 설치`}
      </TerminalBlock>
      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">전역(global) 설치</h4>
      				<p className="mt_s">
      					<mark>모든 프로젝트가 공통으로 사용하는 패키지는 <b>전역(global)</b>에 설치</mark>합니다.<br />
      				</p>
      				<TerminalBlock className="terminal_code_box mt_ms">
      {`// 단일 설치
      						npm install module_name --global
      						npm install module_name -g        // --global을 -g로 줄여서 설치 가능
      						npm i module_name -g`}
      </TerminalBlock>

      				<p className="mt_m t_black"><b>전역 설치 경로</b></p>
      				<ul className="dot_lst t_black">
      					<li className="mt_sm">
      						macOS의 경우<br />
      						<code>/usr/local/lib/node_modules</code>
      					</li>
      					<li className="mt_sm">
      						윈도우의 경우<br />
      						<code className="break_all">c:\Users\%USERNAME%\AppData\Roaming\npm\node_modules</code>
      					</li>
      					<li className="mt_sm">
      						<i className="t_blue">정확한 설치 경로를 확인하려면 <i className="terminal">터미널</i>에서 아래 명령을 실행합니다.</i>
      						<TerminalBlock className="terminal_code_box mt_s">
      {`npm root -g`}
      </TerminalBlock>
      						<div className="mt_ms">
      							<img src={`${IMG.GULP}/gulp_npm_root_g.png`} alt="전역 설치 경로 확인" />
      						</div>
      					</li>
      				</ul>
      			</div>
      			
      		</article>
      		

      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue" data-conlist-h4="true">설치된 패키지(확장 모듈) 관리</h3>
      			<p className="mt_ms">
      				패키지 설치 후 최신 버전에 대한 업데이트나 필요 없는 모듈 삭제 등의 관리가 필요합니다.
      			</p>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">패키지 업데이트</h4>
      				<p className="mt_s">
      					설치되어 있는 패키지의 버전을 업데이트할 수 있습니다.
      				</p>
      				<TerminalBlock className="terminal_code_box mt_ms">
      {`npm update module_name`}
      </TerminalBlock>
      			</div>
      			

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">특정 버전으로 패키지 설치 및 업데이트</h4>
      				<p className="mt_s">
      					패키지를 특정 버전으로 설치하거나 이미 설치되어 있는 패키지를 특정 버전으로 업데이트할 수 있습니다.<br />
      					버전을 지정하지 않으면 항상 최신 버전으로 자동 설치되는데, 해당 패키지의 최신 버전에 버그가 많거나 호환성이 떨어지는 경우
      					이전 버전을 설치하는 경우가 종종 있습니다.
      				</p>
      				<TerminalBlock className="terminal_code_box mt_ms">
      {`npm install module_name@version
      						npm i module_name@version
      						// npm install gulp@4.0.1
      						// npm i gulp@4.0.1`}
      </TerminalBlock>
      			</div>
      			

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">패키지 정보 확인</h4>
      				<p className="mt_s">
      					패키지의 세부 정보를 파악하고자 할 때 사용하는 명령어입니다.<br />
      					<b>전역(global)</b> 또는 <b>지역(local)</b>으로 설치가 되지 않은 패키지의 정보 확인도 가능하며,
      					만약 패키지가 <b className="t_black">npm</b>에 등록되어 있지 않다면 <code>404</code>에러 메시지를 출력합니다.
      				</p>
      				<TerminalBlock className="terminal_code_box mt_ms">
      {`npm info module_name`}
      </TerminalBlock>
      			</div>
      			

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">설치된 패키지 삭제</h4>
      				<p className="mt_s">
      					설치한 패키지를 삭제할 수 있습니다.
      				</p>
      				<TerminalBlock className="terminal_code_box mt_ms">
      {`npm uninstall module_name`}
      </TerminalBlock>
      			</div>
      			
      		</article>
      		

      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue">나머지 npm 명령어 확인</h3>
      			<p className="mt_ms">
      				<i className="terminal">터미널</i>에서 <code className="t_black">npm</code> 명령어를 실행하면
      				<code className="t_black">npm</code>으로 활용할 수 있는 모든 명령어를 확인할 수 있습니다.
      			</p>
      			<TerminalBlock className="terminal_code_box mt_ms">
      {`npm  // npm만 입력 후 엔터`}
      </TerminalBlock>
      			<p className="mt_ms">
      				<img src={`${IMG.GULP}/gulp_npm.png`} alt="npm 명령어 확인" />
      			</p>
      		</article>
      		
      	</section>
      	

      	<figure className="img_figure mt_l">
      		<img src={`${IMG.GULP}/02_gulp_02.png`} alt="Node.js와 NPM" />
      		<figcaption>
      			Node.js와 NPM
      		</figcaption>
      	</figure>
    </>
  )
}

export default NodejsNpmPage
