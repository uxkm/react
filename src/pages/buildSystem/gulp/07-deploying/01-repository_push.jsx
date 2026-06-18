import { useGulpPageMeta } from '@/hooks/useGulpPageMeta'
import { IMG } from '@/config/path'
import TerminalBlock from '@/components/code/TerminalBlock'

function RepositoryPushPage() {
  useGulpPageMeta()

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
      		<h2 className="sound_only">요약 설명</h2>
      		<p>
      			GitHub에 저장소(Repository)를 생성한 후,
      			<b>Gulp가 빌드하기 전의 원본 소스(src 폴더)는 <code>main</code> 브랜치</b>에,
      			<b>빌드된 결과물(dist 폴더)은 실제 웹에 배포하기 위해 <code>gh-pages</code> 브랜치에 푸시하는 과정</b>입니다.
      		</p>
      	</blockquote>

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">7.1.1. 시작하기에 앞서...</h2>
      		<p className="mt_m notice_red">중요합니다!</p>
      		<p className="mt_sm">
      			<b>
      				<span className="t_red">본 커리큘럼에서는 <b>Git</b>과 <b>GitHub</b>의 개념 및 역할에 대한 설명은 포함되어 있지 않습니다.</span>
      				따라서 <b>git</b>과 <b>GitHub</b>를 처음 접하시는 분들께는 다소 어렵고 생소하게 느껴질 수 있습니다.
      			</b>
      			<br />
      			하지만, 이 페이지의 커리큘럼을 천천히, 꼼꼼하게 따라가면서 직접 실행해 보는 것만으로도 충분히 익숙해질 수 있습니다.
      			필요한 부분은 추가적으로 학습하면서 차근차근 익혀 나가면 됩니다.
      		</p>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">7.1.2. GitHub 저장소(Repository) 생성</h2>
      		<p className="mt_m">
      			<b className="t_blue">개인 GitHub 저장소(Repository)가 없다는 전제 하에 진행합니다.</b><br />
      			GitHub 계정을 생성하고 로그인하세요.
      			<i className="t_red">(계정 생성 과정은 생략합니다.)</i>
      		</p>

      		<div className="counter_list gap-column-important-l mt_ml">
      			<article>
      				<h3>GitHub Dashboard에서 시작</h3>
      				<p className="mt_s">
      					Dashboard 화면 왼쪽의 <b className="t_green">Create repository</b> 버튼을 클릭합니다.
      				</p>
      				<div className="mt_ms">
      					<img src={`${IMG.GULP}/gulp_deploy_repository_add1.png`} alt="Dashboard에서 왼쪽 초록색 버튼 Create repository 클릭" className="image_border_black" />
      				</div>
      			</article>
      			

      			<article>
      				<h3>저장소(Repository) 정보 설정 및 생성</h3>
      				<ul className="dot_lst mt_s">
      					<li><b>Repository name <i className="t_red">(필수)</i></b>: 저장소 이름 설정</li>
      					<li><b>Description</b>: 간단 소개 글 작성</li>
      					<li><b>Add a README file</b>: README.md 파일 생성</li>
      				</ul>
      				<p className="mt_s">
      					저장소 이름은 <mark><b className="t_black"><i className="t_green">계정이름</i>.github.io</b></mark>로 합니다.<br />
      					아래 이미지에서 예시된 계정 이름 <b className="t_green">UXKM-Gulp</b>처럼 대문자가 섞여 있어도,
      					소문자로 변경하여 사용해도 전혀 문제 없습니다. GitHub에서는 계정 이름과 저장소 이름이 대소문자를 구분하지 않으며,
      					소문자로 입력해도 올바르게 인식됩니다.<br />
      					단, 일관된 표기를 유지하는 것이 좋습니다. 또한, Gulp 실습 중 혼동을 줄이기 위해 소문자로 통일하는 것을 권장합니다.
      				</p>
      				<p className="t_blue billiard_text">
      					<i className="sound_only">※</i>
      					본 커리큘럼에서 저장소 이름을 GitHub 주소 형태로 지정하는 이유는,
      					저장소 이름을 도메인처럼 활용하여 소스의 모든 경로를 루트 기준(<code>/</code>)의 절대 경로로 설정하기 위함입니다.
      					이렇게 하면 리소스 경로 관리가 간편해지고, 배포 후에도 경로 오류를 최소화할 수 있습니다.
      				</p>
      				<p className="t_red billiard_text">
      					<i className="sound_only">※</i>
      					보통의 경우에는 저장소 이름을 목적에 맞는 하나의 단어로 정합니다.
      				</p>
      				<p className="mt_sm">
      					<b>저장소 이름</b>, <b>간단 설명</b>을 등록하고 <b>Add a README file</b>에 체크 후 <b className="t_green">Create repository</b> 버튼을 클릭합니다.
      				</p>
      				<div className="mt_ms">
      					<img src={`${IMG.GULP}/gulp_deploy_repository_add2.png`} alt="저장소(Repository) 정보 설정 및 생성" className="image_border_black" />
      				</div>
      			</article>
      			

      			<article>
      				<h3>저장소 생성 확인</h3>
      				<p className="mt_s">
      					전 단계에서 설정한 내용으로 저장소가 생성됩니다.<br />
      					<b>Repository name</b>과 <b>Description</b>에 등록한 내용으로 <i className="filename">README.md</i> 파일이 생성된 것을 확인할 수 있습니다.
      				</p>
      				<div className="mt_ms">
      					<img src={`${IMG.GULP}/gulp_deploy_repository_add3.png`} alt="저장소 생성 확인" className="image_border_black" />
      				</div>
      			</article>
      			

      			<article>
      				<h3>저장소 주소 확인</h3>
      				<p className="mt_s">
      					초록색 <b className="t_green">Code</b> 버튼을 클릭하여 <b>저장소 주소를 확인</b>합니다.<br />
      					<b>저장소 주소</b>는 <mark>GitHub 저장소와 로컬 프로젝트 폴더를 연결하는 데 사용</mark>되며,
      					Git 명령어를 통해 원격 저장소를 추가하거나 클론할 때 필요합니다.
      				</p>
      				<div className="mt_ms">
      					<img src={`${IMG.GULP}/gulp_deploy_repository_add4.png`} alt="저장소 주소 확인" className="image_border_black" />
      				</div>
      			</article>
      			
      		</div>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">7.1.3. 로컬(Local) 폴더와 GitHub 저장소(Repository) 연결</h2>
      		<p className="mt_m">
      			GitHub에 배포하려면, 지금까지 <b>로컬에서 Gulp로 작업해온 프로젝트 폴더</b>와 <b>새로 생성한 GitHub 저장소(Repository)를 연결</b>해야 합니다.<br />
      			<b className="t_blue">GitHub Desktop</b>이라는 편리한 <b>GUI 도구</b>가 있지만, 도구의 선택과 사용은 여러분의 몫이기에
      			본 커리큘럼은 기초적인 방법인 <i className="terminal">터미널</i>을 사용하는 방법으로 진행합니다.
      		</p>

      		<div className="counter_list gap-column-important-l mt_ml">
      			<article>
      				<h3>git init</h3>
      				<p className="mt_s">
      					Gulp로 작업한 폴더를 <b>Git이 추적할 수 있는 저장소로 만들기 위해</b>,
      					<i className="terminal">터미널</i>에 아래 명령을 실행합니다.
      				</p>
      				<TerminalBlock className="terminal_code_box mt_ms">
      {`git init`}
      </TerminalBlock>
      				<div className="mt_ms">
      					<img src={`${IMG.GULP}/gulp_deploy_git_connection1.png`} alt="git init" className="image_border_black" />
      				</div>
      				<p className="mt_s">
      					<code>git init</code>가 정상적으로 실행되면 파란 밑줄처럼 메시지가 나타납니다.<br />
      					<code>Initialized empty Git repository in <i className="t_blue">D:/_uxkm/_gulp_setting</i>/.git/</code> <b className="t_blue">(UXKM이 세팅한 폴더 경로)</b><br />
      					<code>Initialized empty Git repository in <i className="t_blue">각자 Gulp를 세팅한 폴더 경로</i>/.git/</code> <b className="t_green">(각자 세팅한 폴더 경로)</b><br />
      					그리고 Gulp 폴더에는 <mark>반투명의 <i className="folder">.git</i> 폴더가 생성</mark>됩니다.
      				</p>
      				<div className="mt_ms">
      					<img src={`${IMG.GULP}/gulp_deploy_git_connection2.png`} alt="git init gn" className="image_border_black" />
      				</div>
      			</article>
      			

      			<article>
      				<h3>git remote add origin</h3>
      				<p className="mt_s">
      					Gulp 폴더를 저장소와 연결하기 위해 아래 명령을 실행합니다.<br />
      					(아래 이미지, GitHub 좌측 상단 부분의 <b className="t_green">계정 이름</b>, <b className="t_blue">저장소 이름</b>을 참고하세요.)
      				</p>
      				<p className="mt_s">
      					<img src={`${IMG.GULP}/gulp_deploy_git_connection3.png`} alt="git init gn" className="image_border_black" />
      				</p>
      				<p className="mt_ms">
      					<mark>UXKM이 생성한 GitHub 저장소 기준으로 하면,</mark>
      				</p>
      				<div className="terminal_code_line mt_sm">
      					<div className="terminal_pre pre_add">
      						<code className="terminal_code">git remote add origin https://github.com/<i className="t_lightgreen">UXKM-Gulp</i>/<i className="t_lightblue">uxkm-gulp.github.io</i>.git</code>
      					</div>
      				</div>
      				<p className="mt_ms">
      					<mark>각자 세팅한 GitHub 저장소 기준으로 하면,</mark>
      				</p>
      				<div className="terminal_code_line mt_sm">
      					<div className="terminal_pre pre_add">
      						<code className="terminal_code">git remote add origin https://github.com/<i className="t_lightgreen">계정 이름</i>/<i className="t_lightblue">저장소 이름</i>.git</code>
      					</div>
      				</div>
      				<p className="mt_ms">
      					명령을 실행한 후 아래 이미지처럼 별도의 메시지 출력 없이 커서만 다음 줄로 이동하거나, 명령 프롬프트가 조용히 넘어갔다면 정상적으로 실행된 것입니다.
      				</p>
      				<div className="mt_s">
      					<img src={`${IMG.GULP}/gulp_deploy_git_connection4.png`} alt="git remote add origin" className="image_border_black" />
      				</div>
      				<p className="mt_ms">
      					로컬(Local) 폴더와 GitHub 저장소(Repository)가 정상적으로 연결되었는지 확인하려면 <i className="terminal">터미널</i>에서 아래 명령을 입력합니다.
      				</p>
      				<TerminalBlock className="terminal_code_box mt_s">
      {`git remote -v`}
      </TerminalBlock>
      				<div className="mt_s">
      					<img src={`${IMG.GULP}/gulp_deploy_git_connection5.png`} alt="git remote -v" className="image_border_black" />
      				</div>
      				<p className="mt_ms">
      					위 이미지처럼 <code>fetch</code>와 <code>push</code> 경로가 <code>git remote add origin</code> 명령으로 입력한 GitHub 저장소 주소와 동일하게 표시된다면,
      					로컬 프로젝트와 GitHub 저장소가 정상적으로 연결된 것입니다.
      				</p>
      			</article>
      			
      		</div>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">7.1.4. Push 권한 설정</h2>
      		<p className="mt_m">
      			<i className="t_blue weight-500">
      				공개된 GitHub 저장소는 누구나 변경 사항을 가져오는 <b>Pull</b>은 가능하지만,
      				변경 사항을 반영하는 <b>Push</b>는 <b>저장소의 소유자</b>나 <b>쓰기 권한이 부여된 사용자</b>만 할 수 있습니다.
      			</i>
      			<br />
      			앞선 과정에서 로컬 Gulp 프로젝트와 GitHub 원격 저장소를 연결했지만,
      			현재 상태는 <b>읽기(Pull)만 가능한 연결</b>이며, <b>쓰기(Push) 권한은 인증을 통해 획득해야 합니다.</b><br />

      			이 부분도 앞서 언급한 GitHub Desktop과 같은 GUI 도구를 사용하면 더 간편하게 진행할 수 있지만,
      			본 커리큘럼에서는 <b><i className="terminal">터미널</i>을 통해 직접 권한을 등록하고, 원격 저장소로 Push하는 과정까지 진행합니다.</b>
      		</p>

      		<div className="counter_list gap-column-important-l mt_ml">
      			<article>
      				<h3>권한 설정을 위해 Personal access tokens 생성</h3>
      				<p className="mt_s">
      					GitHub 페이지 우측 상단의 <b className="t_black">프로필 이미지</b>를 클릭합니다.
      				</p>
      				<p className="mt_s">
      					<img src={`${IMG.GULP}/gulp_deploy_push_authority1.png`} alt="우측 상단 Profile 이미지 클릭" className="image_border_black" />
      				</p>

      				<p className="mt_ms">
      					프로필 메뉴 하단의 <b className="t_black">Settings</b>를 클릭합니다.
      				</p>
      				<p className="mt_s">
      					<img src={`${IMG.GULP}/gulp_deploy_push_authority2.png`} alt="메뉴 하단 Settings 클릭" className="image_border_black" />
      				</p>

      				<p className="mt_ms">
      					<b>Settings</b> 페이지 왼쪽 메뉴 맨 하단의 <b className="t_black">Developer Settings</b>를 클릭합니다.
      				</p>
      				<p className="mt_s">
      					<img src={`${IMG.GULP}/gulp_deploy_push_authority3.png`} alt="Settings 페이지 왼쪽 메뉴 맨 하단 Developer Settings 클릭" className="image_border_black" />
      				</p>

      				<p className="mt_ms">
      					<b>Developer Settings</b> 페이지 왼쪽 메뉴에서
      					<b className="t_black">Personal access tokens</b>를 클릭한 후 <b className="t_black">Tokens (classic)</b>를 클릭합니다.
      				</p>
      				<p className="mt_s">
      					<img src={`${IMG.GULP}/gulp_deploy_push_authority4.png`} alt="Personal access tokens 클릭 후 Tokens (classic) 클릭" className="image_border_black" />
      				</p>

      				<p className="mt_ms">
      					<b className="t_black">Generate new token</b> 버튼을 클릭한 후
      					<b className="t_black">Generate new token (classic)</b>을 클릭합니다.
      				</p>
      				<p className="mt_s">
      					<img src={`${IMG.GULP}/gulp_deploy_push_authority5.png`} alt="Generate new token 버튼 클릭 후 Generate new token (classic) 클릭" className="image_border_black" />
      				</p>

      				<p className="mt_ms">
      					<b>New personal access token (classic)</b> 페이지에서,<br />
      					<i className="t_black"><b>Note</b>에 토큰 이름 또는 사용 목적</i>을 입력하고,<br />
      					<i className="t_black"><b>Expiration</b>에서 토큰 만료 기간을 선택</i>한 후,<br />
      					<i className="t_blue weight-500"><b>Select scopes</b>의 모든 항목을 체크</i>한 다음
      					<b className="t_green">Generate token</b> 버튼을 클릭합니다.
      				</p>
      				<p className="mt_s">
      					<img src={`${IMG.GULP}/gulp_deploy_push_authority6.png`} alt="토큰 기본 정보 등록 후 토큰 생성" className="image_border_black" />
      				</p>

      				<p className="mt_ms">
      					<b className="t_blue">Token 생성이 완료되었습니다.</b><br />
      				</p>
      				<p className="notice_red mt_s">중요합니다.</p>
      				<p className="t_red weight-500">
      					<b>토큰 생성이 완료된 후 코드가 있는 화면을 벗어나면 다시 토큰을 확인할 수 없습니다.</b><br />
      					<i className="underline">따라서 생성 즉시 토큰 코드를 복사하거나 메모장 등에 안전하게 저장해 두어야 합니다.</i>
      					이를 놓치면 동일한 권한의 토큰을 새로 생성해야 하므로 주의가 필요합니다.
      				</p>
      				<p className="mt_s">
      					<img src={`${IMG.GULP}/gulp_deploy_push_authority7.png`} alt="GitHub 토큰 생성 완료" className="image_border_black" />
      				</p>
      			</article>
      			

      			<article>
      				<h3>GitHub 원격 권한 등록(관리자 자격 증명)</h3>
      				<p className="mt_s">
      					방금 생성한 <b className="t_black">Personal access tokens</b>과 <b className="t_black">GitHub 정보</b>로 관리자 자격 증명을 진행합니다.<br />
      					<i className="terminal">터미널</i>에서 아래 명령을 실행합니다.
      				</p>

      				<p className="mt_s">
      					<mark className="t_black"><b>ex,</b></mark>
      				</p>
      				<div className="terminal_code_line mt_sm">
      					<div className="terminal_pre pre_add">
      						<code className="terminal_code">git remote set-url origin https://<b className="t_lightred">&lt;복사한 토큰 코드&gt;</b>@github.com/<b className="t_lightgreen">&lt;유저 이름&gt;</b>/<b className="t_lightblue">&lt;저장소 이름&gt;</b></code>
      					</div>
      				</div>

      				<p className="mt_ms">
      					<mark className="t_black"><b>UXKM 기준으로 하면,</b></mark>
      				</p>
      				<div className="terminal_code_line mt_sm">
      					<div className="terminal_pre pre_add">
      						<code className="terminal_code">git remote set-url origin https://<b className="t_lightred">ghp_ajs···kl7aSDas</b>@github.com/<b className="t_lightgreen">UXKM-Gulp</b>/<b className="t_lightblue">uxkm-gulp.github.io</b></code>
      					</div>
      				</div>

      				<p className="mt_ms">
      					아래 이미지처럼 결과 출력 없이 실행이 완료됩니다.
      				</p>
      				<p className="mt_s">
      					<img src={`${IMG.GULP}/gulp_deploy_push_authority8.png`} alt="GitHub 원격 권한 등록(관리자 자격 증명)" className="image_border_black" />
      				</p>
      			</article>
      			
      		</div>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">7.1.5. GitHub 저장소로 Push</h2>
      		<p className="mt_m">
      			로컬 Gulp 폴더의 <mark>루트(<code>/</code>) 파일</mark>들과 <i className="folder">src</i> 폴더를 원격 저장소로 <b>Push</b>합니다.<br />
      			이전에 생성(<i className="t_black weight-600" style={{ backgroundColor: "#ececec" }}>[2.4. Gulp 기초 세팅]</i>)한 <i className="filename">.gitignore</i> 파일 설정에 따라
      			<i className="folder">dist</i> 폴더와 <i className="folder">node_modules</i> 폴더는 커밋 대상에서 제외되므로,
      			<b>이 두 폴더는 <b className="t_black">Push</b>되지 않습니다.</b>
      		</p>

      		<div className="counter_list gap-column-important-l mt_ml">
      			<article>
      				<h3>기본 브랜치(branch)를 main으로 변경</h3>
      				<p className="mt_s">
      					<b>Push</b> 과정에서 혹시 모를 오류를 방지하기 위해 미리 이 작업을 진행합니다.
      				</p>
      				<div className="terminal_code_line mt_s">
      					<div className="terminal_pre pre_add">
      						<code className="terminal_code">git branch -m <i className="t_lightgreen">&lt;변경 전 브랜치명&gt;</i> <i className="t_lightblue">&lt;변경 후 브랜치명&gt;</i></code>
      					</div>
      				</div>
      				<div className="terminal_code_line mt_s">
      					<div className="terminal_pre pre_add">
      						<code className="terminal_code">git branch -m <i className="t_lightgreen">master</i> <i className="t_lightblue">main</i></code>
      					</div>
      				</div>
      				<p className="mt_s">
      					<img src={`${IMG.GULP}/gulp_deploy_push1.png`} alt="기본 브랜치(branch)를 main으로 변경" className="image_border_black" />
      				</p>
      			</article>
      			

      			<article>
      				<h3>git pull</h3>
      				<p className="mt_s">
      					GitHub 저장소를 생성할 때 <i className="filename">README.md</i> 파일도 같이 생성했기 때문에,
      					Push 과정에서 충돌을 방지하기 위해 해당 파일을 로컬 Gulp 폴더로 먼저 가져와야 합니다.<br />
      					<i className="terminal">터미널</i>에서 아래 명령을 실행합니다.
      				</p>
      				<div className="terminal_code_line mt_s">
      					<div className="terminal_pre pre_add">
      						<code className="terminal_code">git pull origin <i className="t_lightblue">&lt;브랜치명&gt;</i></code>
      					</div>
      				</div>
      				<div className="terminal_code_line mt_s">
      					<div className="terminal_pre pre_add">
      						<code className="terminal_code">git pull origin <i className="t_lightblue">main</i></code>
      					</div>
      				</div>
      				<p className="mt_s">
      					<img src={`${IMG.GULP}/gulp_deploy_push2.png`} alt="git pull origin main" className="image_border_black" />
      				</p>
      				<p className="mt_s">
      					<code>git pull</code> 명령이 실행되고, 원격 저장소에만 존재하던 <i className="filename">README.md</i> 파일이 로컬 프로젝트 폴더로 병합됩니다.<br />
      					이제 로컬 Gulp 폴더에 원격 저장소의 파일이 병합된 상태이므로, <b>충돌 없이 <code className="weight-600">git push</code>를 진행할 수 있습니다.</b>
      				</p>
      				<p className="mt_s">
      					<img src={`${IMG.GULP}/gulp_deploy_push3.png`} alt="로컬 Gulp 폴더에서 README.md 파일 확인" className="image_border_black" />
      				</p>
      			</article>
      			

      			<article>
      				<h3>git push</h3>
      				<p className="mt_s">
      					로컬 Gulp 폴더의 <mark>루트(<code>/</code>) 파일</mark> 및 <mark><i className="folder">src</i> 폴더의 모든 파일</mark>을
      					GitHub 저장소 <b>main 브랜치</b>로 <b className="t_black">Push</b>합니다.<br />
      					<i className="terminal">터미널</i>에서 아래 명령을 <b>한 줄씩 따로 실행</b>합니다.
      				</p>
      				<TerminalBlock className="terminal_code_box mt_ms">
      {`git add .                        // 프로젝트 폴더에 있는 파일 중에서 변경된 모든 파일을 선택하여 스테이지에 올림
      						git commit -m &quot;commit message&quot;   // 변경된 부분을 저장하고 메시지 기록
      						git push origin main             // main 브랜치에 파일을 전송`}
      </TerminalBlock>

      				<p className="mt_ms">
      					아래 이미지는 <i className="terminal">터미널</i>에서 한 줄씩 명령을 실행한 결과입니다.<br />
      					<b className="t_green">commit되는 파일 목록</b>과 <b className="t_blue">push 내용</b>을 확인할 수 있습니다.<br />
      					UXKM에서는 <b>commit message</b>를 <code className="t_purple weight-600">&quot;first push&quot;</code>로 작성했습니다.
      				</p>
      				<p className="mt_s">
      					<img src={`${IMG.GULP}/gulp_deploy_push4.png`} alt="Push 명령 실행" className="image_border_black" />
      				</p>

      				<p className="mt_ms">
      					<i className="filename">README.md</i> 파일만 존재하던 GitHub 저장소 <b>main 브랜치</b>에
      					<b className="t_green">방금 Push한 파일</b>들이
      					<b className="t_blue">commit message(&quot;first push&quot;)</b>와 함께 존재하는 것을 확인할 수 있습니다.
      				</p>
      				<p className="mt_s">
      					<img src={`${IMG.GULP}/gulp_deploy_push5.png`} alt="Push 후 GitHub 저장소 main 브랜치 확인" className="image_border_black" />
      				</p>
      			</article>
      			
      		</div>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">7.1.6. 만약 위의 과정이 진행되지 않는다면..</h2>
      		<p className="mt_m notice_red weight-500">
      			중요합니다. 이 섹션은 실패했을 때만 진행하세요.
      		</p>
      		<p className="mt_s">
      			<code>git init</code>부터 <code>git push</code>까지의 과정 중에
      			진행이 안 되는 데 원인을 모르겠다면 초기화하고 천천히 다시 시도해 보세요.<br />
      			<i className="t_red">
      				(<b>Personal access token</b>을 커리큘럼대로 따로 저장했다면 <b>[권한 설정을 위해 Personal access tokens 생성]</b> 이 부분은 생략해도 되지만,<br />
      				<b>[GitHub 원격 권한 등록(관리자 자격 증명)]</b> 이 부분은 반드시 진행해야 합니다.)
      			</i>
      		</p>

      		<div className="counter_list gap-column-important-l mt_ml">
      			<article>
      				<h3>원격 저장소 연결 끊기</h3>
      				<p className="mt_s">
      					<i className="terminal">터미널</i>에서 아래 명령을 실행하면 원격 저장소와의 연결이 끊어집니다.
      				</p>
      				<TerminalBlock className="terminal_code_box mt_ms">
      {`git remote remove origin`}
      </TerminalBlock>
      			</article>
      			

      			<article>
      				<h3>.git 폴더 삭제</h3>
      				<p className="mt_s">
      					Gulp 폴더의 <i className="folder">.git</i> 폴더를 삭제합니다.
      				</p>
      				<p className="mt_s">
      					<img src={`${IMG.GULP}/gulp_deploy_git_remove.png`} alt=".git 폴더 삭제" className="image_border_black" />
      				</p>
      				<p className="mt_ms">
      					<mark>
      						이렇게 하면 원격 저장소와의 연결이 끊어지고
      						<code>git add</code>, <code>git commit</code> 기록이 완전 초기화됩니다.
      					</mark><br />
      					<code>git init</code>부터 다시 시작해 보세요.
      				</p>
      			</article>
      			
      		</div>
      	</section>
      	

      	<figure className="img_figure mt_l">
      		<img src={`${IMG.GULP}/07_gulp_01.png`} alt="원격 저장소 생성과 Push" />
      		<figcaption>
      			원격 저장소 생성과 Push
      		</figcaption>
      	</figure>
    </>
  )
}

export default RepositoryPushPage
