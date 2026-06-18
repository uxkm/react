import { useGulpPageMeta } from '@/hooks/useGulpPageMeta'
import { IMG } from '@/config/path'

function FolderTerminalPage() {
  useGulpPageMeta()

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
      		<strong className="sound_only">요약 설명</strong>
      		<p>
      			Gulp를 세팅하기 위한 첫 번째 순서입니다.<br />
      			Windows OS 기준으로 진행되며, 프로젝트 폴더를 생성하는 것으로 Gulp의 여정을 시작합니다.
      		</p>
      	</blockquote>

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">2.1.1. 프로젝트 폴더 생성</h2>
      		<p className="mt_ms">
      			자유로운 이름으로 Gulp를 설치할 폴더를 생성합니다.<br />
      			Gulp 강의를 따라 세팅한 결과물을 <b>Gulp 기본 폴더</b>로 저장해 두었다가,
      			이후 다른 프로젝트에 복사하여 <b>템플릿처럼 재사용</b> 할 수 있습니다.
      			따라서 향후 활용이 용이한 경로에 폴더를 생성하여 세팅하길 권장합니다.
      		</p>
      		<p className="mt_ms">
      			UXKM은 폴더명을 임시로 <mark><b>_gulp_setting</b></mark>으로 지정하였지만,
      			<i className="t_red">폴더명의 첫 번째 글자를 밑줄( _ )로 생성하는 것을 권장하지 않습니다.</i><br />
      			<span className="underline">(이하 커리큘럼에서는 <b className="folder">gulp_setting 폴더</b>로 명칭을 통일하여 설명합니다.)</span>
      		</p>
      		<p className="mt_ms">
      			폴더 생성이 완료되면, 사용 중인 <b>코드 에디터</b>에서 해당 폴더를 오픈합니다.
      			이후 모든 Gulp 세팅은 이 폴더 안에서 진행됩니다.
      		</p>
      		<p className="mt_ms weight-700 t_blue">
      			코드 에디터기는 아래 두 가지를 추천합니다.
      		</p>
      		<ul className="dot_lst mt_s indent_small">
      			<li>
      				<b className="t_black">무료 에디터기 - VS Code (Visual Studio Code)</b><br />
      				비주얼 스튜디오 코드 또는 코드는 마이크로소프트가 마이크로소프트
      				윈도우, macOS, 리눅스용으로 개발한 소스 코드 편집기입니다. 디버깅 지원과 Git 제어, 구문 강조 기능, SSH 접속 등이
      				포함되어 있으며, 사용자가 편집기의 테마와 단축키, 설정 등을 수정할 수 있습니다.
      			</li>
      			<li className="mt_s">
      				<b className="t_black">유료 에디터기 - WebStorm</b><br />
      				웹스톰(WebStorm)은 HTML 편집기가 포함된 자바스크립트
      				IDE(Integrated Development Environment)로 IntelliJ IDEA 플랫폼 위에 구축되었고 비주얼 스튜디오나 이클립스와 같은
      				프론트엔드 개발에 최적화된 통합개발 환경을 제공합니다.
      			</li>
      		</ul>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">2.1.2. 명령프롬프트(Terminal, 이하 <i className="terminal terminal_h2">터미널</i>) 활용</h2>
      		<blockquote className="uk_note mt_ml" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				Gulp를 세팅하려면 <b className="terminal">터미널</b>을 이용하여 필요한 명령을 입력하고 여러 패키지를 설치해야 합니다.<br />
      				<b className="terminal">터미널</b>을 처음 사용해보는 상황이라면 조심스럽고 어려워 보일 수 있습니다. 하지만 잘못된 명령어를 입력하면 바로 에러 메시지가 표시되기 때문에
      				과감하게 사용해도 문제없습니다.<br />
      			</p>
      		</blockquote>
      		<p className="mt_m">
      			<b className="folder">gulp_setting</b> 폴더 위치에서 <i className="terminal">터미널</i>을 열어야 합니다.
      			<code>cd 폴더명</code>, <code>cd ..</code> 와 같은
      			DOS 모드의 폴더 탐색 명령어를 잘 모른다면, 아래 설명을 참고해 주세요.<br />
      			사용 중인 에디터에서 <i className="terminal">터미널</i> 기능을 지원하는 경우, 에디터 내 <i className="terminal">터미널</i>을 사용하는 것을 권장합니다.
      		</p>

      		<article className="indent mt_l">
      			<h3 className="ml_mn t_blue">에디터기에서 터미널 열기 (추천)</h3>
      			<p className="mt_ms">
      				<b className="win_os">Window</b>, <b className="mac_os">Mac</b>에 상관없이 편리하게 프로젝트 폴더 기준으로 <i className="terminal">터미널</i>을 사용할 수 있기 때문에 이 방법을 추천합니다.<br />
      				사용하는 에디터에서 <i className="terminal">터미널</i> 기능을 지원하지 않는 경우, 아래에 안내된 운영체제별 <i className="terminal">터미널</i> 실행 방법을 참고하세요.
      			</p>
      			<ol className="ol_lst_second">
      				<li className="mt_m font-16-before weight-600-before t_black_before">
      					<b className="font-16 t_black">웹스톰에서 <i className="terminal">터미널</i> 열기</b>
      					<p className="mt_sm">
      						웹스톰 하단 <b>Terminal 탭을 클릭</b>하여 사용하면 됩니다.
      					</p>
      					<figure className="img_figure mt_ms">
      						<img src={`${IMG.GULP}/gulp_cmd_ws.png`} alt="웹스톰에서 Terminal 열기" />
      					</figure>
      				</li>
      				<li className="mt_l font-16-before weight-600-before t_black_before">
      					<b className="font-16 t_black">VS Code에서 <i className="terminal">터미널</i> 열기</b>
      					<figure className="img_figure mt_ms">
      						<img src={`${IMG.GULP}/gulp_cmd_vscode1.png`} alt="VS Code에서 Terminal 열기" />
      					</figure>
      				</li>
      			</ol>
      		</article>
      		

      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue"><i className="win_os">Window</i>에서 터미널 열기</h3>
      			<ol className="ol_lst_second">
      				<li className="mt_m font-16-before weight-600-before t_black_before">
      					<b className="font-16 t_black">Windows 기본 <i className="terminal">터미널</i> 열기</b>
      					<p className="mt_sm">
      						검색 탭(단축키 : <span className="gulp_window_cmd_key"> + S</span>)에서 <b className="t_black">cmd</b> 입력 후 엔터<br />
      						이 방법으로 <i className="terminal">터미널</i>을 열면 프로젝트 폴더까지 직접 이동해야 하므로 아래 해당 폴더에서 바로
      						<i className="terminal">터미널</i>을 여는 방법을 추천합니다.
      					</p>
      					<figure className="img_figure mt_ms">
      						<img src={`${IMG.GULP}/gulp_window_default.png`} alt="window 기본 Terminal 열기" />
      					</figure>
      				</li>
      				<li className="mt_l font-16-before weight-600-before t_black_before">
      					<b className="font-16 t_black">해당 폴더에서 <i className="terminal">터미널</i> 열기</b>
      					<p className="mt_sm">해당 폴더에서 주소창에 <code className="t_black">cmd</code> 입력 후 엔터</p>
      					<figure className="img_figure mt_ms">
      						<img src={`${IMG.GULP}/window10_Terminal.png`} alt="window 해당 폴더에서 Terminal 열기" />
      					</figure>
      				</li>
      				<li className="mt_l font-16-before weight-600-before t_black_before">
      					<b className="font-16 t_black">해당 폴더에서 Windows PowerShell 열기</b>
      					<p className="mt_sm">해당 폴더에서 <b>[파일 &gt; Windows PowerShell 열기]</b> 메뉴 클릭</p>
      					<figure className="img_figure mt_ms">
      						<img src={`${IMG.GULP}/window10_PowerShell.png`} alt="window 해당 폴더에서 PowerShell 열기" />
      					</figure>
      				</li>
      			</ol>
      		</article>
      		

      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue"><i className="mac_os">Mac</i>에서 터미널 열기</h3>
      			<ol className="ol_lst_second">
      				<li className="mt_m font-16-before weight-600-before t_black_before">
      					<b className="font-16 t_black">검색을 이용하여 <i className="terminal">터미널</i> 열기</b>
      					<p className="mt_sm">
      						우측 상단 메뉴바에서 돋보기 모양의 아이콘을 클릭하거나 단축키
      						<i className="key_mac_cmd">cmd</i> + <i className="key_space">space</i>를
      						입력하여 <b className="t_blue">Spotlight Search</b>를 엽니다.<br />
      						<b className="t_blue">Spotlight Search</b>에서 <b className="t_black">terminal</b>을 입력하고 검색 결과의 <b className="t_black">terminal</b>을 클릭합니다.<br />
      						<span className="warning">이 방법은 프로젝트 폴더까지 찾아가야 하는 번거로움이 있으므로 하단 &apos;<b className="t_blue">3. Finder에서 터미널 열기</b>&apos; 방법을 추천합니다.</span>
      					</p>
      					<figure className="img_figure mt_ms pb_0">
      						<img src={`${IMG.GULP}/gulp_mac_terminal_zoom.png`} width="792" alt="mac에서 검색을 이용하여 Terminal 열기" />
      					</figure>
      				</li>
      				<li className="mt_l font-16-before weight-600-before t_black_before">
      					<b className="font-16 t_black">Launchpad에서 <i className="terminal">터미널</i> 열기</b>
      					<p className="mt_sm">
      						<b className="t_black">Dock</b>에 있는 <b className="t_blue">Launchpad</b> 아이콘을 클릭하거나 단축키
      						<i className="key_mac_fn">Fn</i> + <i className="key_f4">F4</i>를
      						입력하여 <b className="t_blue">Launchpad</b>를 엽니다.<br />
      						<b className="t_blue">Launchpad</b> 메뉴의 기타 그룹 안에 있는 <b className="t_black">터미널</b> 아이콘을 클릭합니다.<br />
      						<span className="warning">이 방법은 프로젝트 폴더까지 찾아가야 하는 번거로움이 있으므로 하단 &apos;<b className="t_blue">3. Finder에서 터미널 열기</b>&apos; 방법을 추천합니다.</span>
      					</p>
      					<figure className="img_figure mt_ms pb_0">
      						<img src={`${IMG.GULP}/gulp_mac_terminal_Launchpad.png`} width="792" alt="mac에서 Launchpad을 이용하여 Terminal 열기" />
      					</figure>
      				</li>
      				<li className="mt_l font-16-before weight-600-before t_blue_before">
      					<b className="font-16 t_blue">Finder에서 <i className="terminal">터미널</i> 열기 (mac 추천)</b>
      					<p className="mt_sm">
      						Mac OS에서 이 기능은 기본 기능이 아니므로 몇 가지 설정을 진행해야 합니다.
      					</p>
      					<ul className="dot_lst">
      						<li>왼쪽 상단 메뉴에서 <mark>Finder &gt; 서비스 &gt; 서비스 환경설정</mark>을 클릭합니다.</li>
      						<li>
      							환경설정 창의 <i className="t_blue underline">단축키 탭</i>으로 이동하여
      							<mark>서비스 &gt; <b>폴더에서 새로운 터미널 열기</b></mark> 항목을 활성화하고 터미널을 열 때 사용할 단축키를
      							설정해 줍니다.<br />
      							UXKM은 <mark>Shift(⇧) + Command(⌘) + T</mark>로 지정하였습니다.
      						</li>
      					</ul>
      					<figure className="img_figure mt_ms pb_0">
      						<img src={`${IMG.GULP}/gulp_mac_folder_terminal1.png`} width="792" alt="Finder에서 Terminal 열기 세팅 시작" />
      					</figure>
      					<p className="mt_m">
      						<mark>앱 단축키 &gt; + </mark> 버튼을 클릭하여 항목 추가 화면을 띄웁니다.<br />
      					</p>
      					<ul className="dot_lst">
      						<li><b>응용 프로그램</b> : <mark>Finder</mark>를 선택합니다.</li>
      						<li><b>메뉴 제목</b> : 방금 활성화시켰던 &apos;<mark>폴더에서 새로운 터미널 열기</mark>&apos;를 입력합니다.</li>
      						<li><b>키보드 단축키</b> : 방금 설정한 것과 동일하게 <mark>Shift(⇧) + Command(⌘) + T</mark>를 입력합니다.</li>
      					</ul>
      					<figure className="img_figure mt_ms pb_0">
      						<img src={`${IMG.GULP}/gulp_mac_folder_terminal2.png`} width="792" alt="Finder에서 Terminal 열기 세팅" />
      					</figure>
      					<p className="mt_m">
      						여기까지 설정을 마치고 <span className="underline"><b className="t_blue">Finder</b>에서 <b className="t_black">터미널</b>을
      						열고 싶은 폴더를 선택</span>한 뒤
      						<mark>Shift(⇧) + Command(⌘) + T</mark>를 입력합니다.<br />
      						Window에서 폴더 위치 기준으로 <b className="t_black">터미널</b>을 여는 것과 마찬가지로
      						<b className="t_black">Mac에서도 폴더 위치를 기준으로 터미널</b>이 열립니다.
      					</p>
      					<figure className="img_figure mt_ms pb_0">
      						<img src={`${IMG.GULP}/gulp_mac_folder_terminal3.png`} width="655" alt="Shift(⇧) + Command(⌘) + T를 이용하여 Terminal 열기" />
      					</figure>
      				</li>
      				<li className="mt_l font-16-before weight-600-before t_black_before">
      					<b className="font-16 t_black">터미널에 해당 폴더 드래그하기</b>
      					<p className="mt_sm">
      						1회성으로 사용할 수 있는 간단한 방법입니다. 이 방법보다는 위 &apos;<b className="t_black">Finder에서 터미널 열기</b>&apos;를 추천합니다.
      					</p>
      					<ul className="dot_lst">
      						<li>
      							<b>검색</b> 또는 <b>Launchpad</b>를 이용하여 터미널을 열고 <code>cd</code>를 입력한 후 <b className="t_black">Space</b>를 입력합니다.<br />
      							(<code>cd</code> 옆에 한 칸이 띄워져 있어야 합니다.)
      						</li>
      						<li>
      							Finder에서 해당 폴더 아이콘을 터미널로 드래그한 후 <b className="t_black">Enter</b>를 누릅니다.
      						</li>
      					</ul>
      					<figure className="img_figure mt_ms pb_0">
      						<img src={`${IMG.GULP}/gulp_mac_folder_terminal4.png`} width="792" alt="Terminal에서 해당 폴더 드레그하여 위치 찾아 가기" />
      					</figure>
      				</li>
      			</ol>
      		</article>
      		
      	</section>
      	

      	<figure className="img_figure mt_l">
      		<img src={`${IMG.GULP}/02_gulp_01.png`} alt="폴더 생성 및 터미널 활용" />
      		<figcaption>
      			폴더 생성 및 터미널 활용
      		</figcaption>
      	</figure>
    </>
  )
}

export default FolderTerminalPage
