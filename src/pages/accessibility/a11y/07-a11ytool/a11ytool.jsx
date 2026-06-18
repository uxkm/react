import { useAccessibilityPageMeta } from '@/hooks/useAccessibilityPageMeta.js'
import { IMG } from '@/config/path'

const PAGE_LAYOUT = {
  mainClass: "a11yBookmark",
  type: "accessibility",
  titleSticky: true,
  info: false,
  note: false,
  sideMenu: true,
  reference: false,
  contentList: true,
  depth3Last: true,
  bottomEditor: false
}

const PAGE_DATA = {
  title: "접근성 관련 도구 및 플러그인",
  description: "접근성 관련 도구 및 플러그인은 웹사이트, 애플리케이션, 또는 디지털 콘텐츠가 장애를 가진 사용자를 포함한 모든 사용자에게 원활하게 접근 가능하도록 보장하기 위해 사용되는 소프트웨어 및 확장 프로그램입니다. 이 페이지에서는 보조 기술이 필요한 장애 유형과 대표적인 스크린리더의 종류 및 접근성 테스트 도구 및 리소스를 소개합니다.",
  keyword: "Accessibility, a11y, wcag, kwcag, macag, kiosk, 접근성, 웹 콘텐츠 접근성, 한국형 웹 콘텐츠 접근성, 모바일 앱 접근성, 무인정보단밀기 접근성",
}

function A11ytoolPage() {
  useAccessibilityPageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  })


  return (
    <>









      	<blockquote className="uk_note mt_xl" role="note">
      		<strong className="sound_only">요약 설명</strong>
      		<p>
      			<b>접근성 관련 도구 및 플러그인</b>은 웹사이트, 애플리케이션, 또는 디지털 콘텐츠가 장애를 가진 사용자를 포함한
      			모든 사용자에게 원활하게 접근 가능하도록 보장하기 위해 사용되는 소프트웨어 및 확장 프로그램입니다.
      			이 도구들은 웹 콘텐츠 접근성 지침(WCAG)과 같은 표준에 맞춰 웹사이트의 접근성을 평가하고,
      			문제를 발견하거나 해결 방안을 제시하는 데 사용됩니다.
      		</p>
      	</blockquote>

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">보조 기술이 필요한 장애 유형</h2>

      		<ol className="ol_lst mt_xl info_lst gap-column-important-m">
      			<li className="t_black_before weight-600-before">
      				<strong>시각</strong>
      				<p>
      					실명, 색각 이상, 다양한 형태의 저시력을 포함한 시각 장애
      				</p>
      			</li>
      			<li className="t_black_before weight-600-before">
      				<strong>이동성</strong>
      				<p>
      					파킨슨병, 근육병, 뇌성마비, 뇌졸중과 같은 조건으로 인한 근육 속도 저하, 근육 제어 손실로 말미암아 손을 쓰기 어렵거나 쓸 수 없는 상태
      				</p>
      			</li>
      			<li className="t_black_before weight-600-before">
      				<strong>청각</strong>
      				<p>
      					영상, 음성 콘텐츠에 자막, 원고, 수화 등의 대체수단 부제로 인한 인식이 불가능한 상태
      				</p>
      			</li>
      			<li className="t_black_before weight-600-before">
      				<strong>인지</strong>
      				<p>
      					문제 해결과 논리 능력, 집중력, 기억력에 문제가 있는 정신 지체 및 발달 장애, 학습 장애(난독증, 난산증 등)
      				</p>
      			</li>
      		</ol>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">시각장애인용 스크린리더란?</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			
      			<p>
      				<b>스크린리더(Screen Reader)</b>는 시각장애인이나 저시력 사용자가 컴퓨터, 스마트폰,
      				웹사이트 등의 디지털 콘텐츠에 접근할 수 있도록 돕는 보조기술 소프트웨어입니다.
      				이 소프트웨어는 텍스트 기반의 정보를 음성으로 읽어주거나 점자 디스플레이로 출력하여 시각장애인이 콘텐츠를 이해하고 상호작용할 수 있게 해줍니다.
      			</p>
      		</blockquote>

      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">스크린리더의 주요 기술 및 기능</h3>
      			<ol className="mt_ml ol_lst info_lst gap-column-important-ms">
      				<li>
      					<strong>텍스트 음성 변환(TTS, Text-to-Speech)</strong>
      					<ul className="mt_sm dot_lst gap-column-important-sm">
      						<li>
      							스크린리더의 핵심 기술로, 화면에 표시된 텍스트를 음성으로 변환해 사용자에게 들려줍니다.
      							이 과정에서 자연스러운 발음을 제공하기 위해 다양한 언어와 목소리를 지원합니다.
      						</li>
      						<li>
      							TTS 엔진은 글자를 읽는 것뿐만 아니라, 문장 구조, 단락, 강조, 링크 등의 정보를 구분하여 적절하게 전달합니다.
      						</li>
      					</ul>
      				</li>
      				<li>
      					<strong>점자 디스플레이 지원</strong>
      					<ul className="mt_sm dot_lst gap-column-important-sm">
      						<li>
      							스크린리더는 점자 디스플레이와 연동할 수 있습니다.
      							점자 디스플레이는 텍스트를 실시간으로 점자로 변환해 촉각적으로 제공하여, 사용자가 손끝으로 내용을 읽을 수 있도록 돕습니다.
      						</li>
      						<li>
      							이 기능은 시각과 청각 모두에 어려움을 겪는 사용자에게 매우 유용합니다.
      						</li>
      					</ul>
      				</li>
      				<li>
      					<strong>키보드 탐색 및 단축키 지원</strong>
      					<ul className="mt_sm dot_lst gap-column-important-sm">
      						<li>
      							시각장애인은 마우스를 사용할 수 없기 때문에, 스크린리더는 키보드 탐색 기능을 강화하여,
      							웹 페이지나 애플리케이션 내에서 키보드로만 탐색할 수 있도록 돕습니다.
      						</li>
      						<li>
      							스크린리더는 중요한 기능에 접근할 수 있는 단축키도 제공합니다. 예를 들어, <i className="key_h">H</i> 키로 제목(heading) 탐색,
      							<i className="key_l">L</i> 키로 링크 탐색, <i className="key_f">F</i> 키로 폼 필드 탐색을 지원할 수 있습니다.
      						</li>
      					</ul>
      				</li>
      				<li>
      					<strong>웹 접근성 표준 지원 (ARIA 및 시맨틱 HTML)</strong>
      					<ul className="mt_sm dot_lst gap-column-important-sm">
      						<li>
      							스크린리더는 WAI-ARIA (웹 접근성 이니셔티브 - 접근성 풍부한 인터넷 응용 프로그램) 속성과 시맨틱 HTML을 기반으로
      							웹 페이지의 구조적 정보를 인식하고 사용자에게 전달합니다.
      						</li>
      						<li>
      							<strong>ARIA 속성 :</strong>
      							스크린리더는 <code>aria-label</code>, <code>aria-labelledby</code>, <code>aria-live</code>,
      							<code>aria-expanded</code>, <code>role</code> 등의 속성을 인식하여 버튼, 메뉴, 경고 등의 역할과 상태를 사용자에게 설명합니다.
      						</li>
      						<li>
      							<strong>시맨틱 HTML 태그 :</strong>
      							<code>&lt;nav&gt;</code>, <code>&lt;header&gt;</code>, <code>&lt;main&gt;</code>,
      							<code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;button&gt;</code>
      							등 시맨틱 태그를 사용하면 스크린리더는 해당 요소의 의미를 정확히 파악해 사용자에게 전달합니다.
      						</li>
      					</ul>
      				</li>
      				<li>
      					<strong>문서 탐색 및 페이지 구조 제공</strong>
      					<ul className="mt_sm dot_lst gap-column-important-sm">
      						<li>
      							스크린리더는 웹 페이지나 문서의 구조적 정보를 분석하고,
      							이를 기반으로 사용자에게 문서의 계층적 구조(예: 제목, 목록, 표, 링크)를 안내합니다.
      						</li>
      						<li>
      							예를 들어, 사용자가 문서의 제목(heading)을 빠르게 탐색하거나, 표의 각 열과 행을 이해할 수 있도록 돕습니다.
      						</li>
      					</ul>
      				</li>
      				<li>
      					<strong>라이브 영역(ARIA-Live)</strong>
      					<ul className="mt_sm dot_lst gap-column-important-sm">
      						<li>
      							웹 페이지가 동적으로 업데이트될 때, 스크린리더는 이를 사용자에게 실시간으로 알리기 위해 라이브 영역을 사용합니다.<br />
      							예를 들어, 사용자에게 새로운 알림이 도착했을 때, 이를 자동으로 음성으로 읽어줍니다.
      						</li>
      						<li>
      							<code>aria-live=&quot;polite&quot;</code> 또는 <code>aria-live=&quot;assertive&quot;</code>
      							같은 속성을 사용해 스크린리더가 동적 변경 사항을 어떻게 처리할지 정의할 수 있습니다.
      						</li>
      					</ul>
      				</li>
      			</ol>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">스크린리더가 사용하는 웹 접근성 요소</h3>
      			<ul className="mt_ml dot_lst info_lst gap-column-important-ms">
      				<li>
      					<strong>대체 텍스트(alt text)</strong>
      					<p>
      						이미지나 비주얼 콘텐츠에 대한 설명을 제공해 시각적인 정보를 음성으로 전달합니다.
      					</p>
      				</li>
      				<li>
      					<strong>ARIA 속성</strong>
      					<p>
      						웹 요소의 역할, 상태, 속성을 설명하여 스크린리더가 콘텐츠를 더 잘 해석할 수 있게 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>시맨틱 HTML</strong>
      					<p>
      						적절한 HTML 태그(예: <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>,
      						<code>&lt;button&gt; 등</code>)를 사용하면 스크린리더가 페이지의 구조를 더 잘 전달할 수 있습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">스크린리더 발전</h3>
      			<ul className="mt_ml dot_lst info_lst gap-column-important-ms">
      				<li>
      					<strong>GUI 등장과 함께 발전한 스크린리더</strong>
      					<p>
      						초기에는 MS-DOS와 같은 텍스트 기반 환경에서 단순한 텍스트 읽기로 시작했으며,
      						이후 그래픽 사용자 인터페이스(GUI)가 등장하면서 <b>JAWS</b>와 같은 소프트웨어가 개발되었습니다.
      					</p>
      				</li>
      				<li>
      					<strong>국내 스크린리더의 발전</strong>
      					<p>
      						국내에서는 스크린리더가 1990년대부터 시각장애인의 컴퓨터 사용을 돕기 위해 도입되었습니다.
      						초기에는 텍스트 기반 환경에서 단순한 읽기 기능을 제공하다가,
      						윈도우 기반 그래픽 환경이 발전하면서 한소네와 <b>센스리더</b> 같은 스크린리더가 개발되었습니다.
      					</p>
      				</li>
      				<li>
      					<strong>스마트폰과 AI 기술 발전</strong>
      					<p>
      						이후 스마트폰 보급이 확산되면서 애플의 VoiceOver와 안드로이드의 TalkBack이 국내 시각장애인들에게도 많이 사용되고 있습니다.
      						최근에는 AI 기술을 활용해 이미지 설명 기능 등이 추가되면서 더 나은 접근성을 제공하고 있습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">대표적인 스크린리더의 종류</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				대표적인 스크린리더로는 윈도우 기반의 <b>JAWS</b>와 무료 오픈소스 소프트웨어인 <b>NVDA</b>가 있습니다.
      				또한, 한국에서 개발된 <b>센스리더</b>는 한국어 지원이 뛰어난 국산 스크린리더로, 다양한 기능을 제공합니다.
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">센스리더(Sense Reader)</h3>

      			<div className="indent mt_l">
      				<h4 className="ml_mn">센스리더 특징</h4>
      				<ol className="mt_ml ol_lst info_lst gap-column-important-s">
      					<li className="t_black_before weight-600-before">
      						<strong>한국어 지원</strong>
      						<p>
      							한국어 텍스트를 정확하고 자연스럽게 읽어주는 음성 합성 기능을 제공합니다.
      						</p>
      					</li>
      					<li className="t_black_before weight-600-before">
      						<strong>다양한 플랫폼 호환성</strong>
      						<p>
      							점자 디스플레이와의 연동이 가능하여 점자 사용자를 위한 접근성을 제공합니다.
      						</p>
      					</li>
      					<li className="t_black_before weight-600-before">
      						<strong>사용자 친화적인 인터페이스</strong>
      						<p>
      							직관적이고 쉽게 사용할 수 있는 인터페이스로, 사용자가 쉽게 설정을 조정하고 기능을 이용할 수 있습니다.
      						</p>
      					</li>
      					<li className="t_black_before weight-600-before">
      						<strong>단축키 지원</strong>
      						<p>
      							많은 기능에 대해 사용자 정의 가능한 단축키를 제공하여, 사용자가 빠르게 작업할 수 있도록 돕습니다.
      						</p>
      					</li>
      					<li className="t_black_before weight-600-before">
      						<strong>웹 탐색 기능</strong>
      						<p>
      							웹 페이지의 구조를 이해하고, 링크, 이미지, 폼 요소 등을 쉽게 탐색할 수 있는 기능을 제공합니다.
      						</p>
      					</li>
      					<li className="t_black_before weight-600-before">
      						<strong>다양한 읽기 모드</strong>
      						<p>
      							텍스트 읽기, 웹 읽기, PDF 읽기 등 다양한 읽기 모드를 지원하여 사용자의 필요에 따라 선택할 수 있습니다.
      						</p>
      					</li>
      					<li className="t_black_before weight-600-before">
      						<strong>접근성 검사 도구</strong>
      						<p>
      							웹 콘텐츠의 접근성을 검사하는 기능을 제공하여, 웹 개발자들이 보다 접근성 높은 콘텐츠를 제작할 수 있도록 돕습니다.
      						</p>
      					</li>
      					<li className="t_black_before weight-600-before">
      						<strong>맞춤형 음성 설정</strong>
      						<p>
      							사용자가 선호하는 음성의 속도, 음조, 볼륨 등을 조절할 수 있는 옵션을 제공합니다.
      						</p>
      					</li>
      					<li className="t_black_before weight-600-before">
      						<strong>실시간 업데이트</strong>
      						<p>
      							프로그램 사용 중에도 지속적으로 기능 개선과 버그 수정을 위한 업데이트를 지원합니다.
      						</p>
      					</li>
      				</ol>
      			</div>
      			

      			<div className="indent mt_l">
      				<h4 className="ml_mn">센스리더 환경 설정</h4>
      				<ol className="mt_ml ol_lst info_lst gap-column-important-s">
      					<li className="t_black_before weight-600-before">
      						<strong>설치 및 실행</strong>
      						<ul className="dot_lst">
      							<li>
      								센스리더 소프트웨어를 다운로드하여 설치합니다.
      							</li>
      							<li>
      								설치가 완료되면 프로그램을 실행합니다.
      							</li>
      						</ul>
      					</li>
      					<li className="t_black_before weight-600-before">
      						<strong>설정 메뉴 접근</strong>
      						<p>
      							센스리더를 실행한 후, <i className="key_f1">F1</i> 키를 눌러 도움말 메뉴를 열거나,
      							상단 메뉴에서 '<b>설정</b>'을 선택하여 설정 창에 접근합니다.
      						</p>
      					</li>
      					<li className="t_black_before weight-600-before">
      						<strong>일반 설정</strong>
      						<ul className="dot_lst">
      							<li>
      								<b>음성 설정</b> : 음성 합성기, 음성 속도, 음조 등을 설정합니다.
      							</li>
      							<li>
      								<b>단축키 설정</b> : 자주 사용하는 기능에 대한 단축키를 설정할 수 있습니다.
      							</li>
      						</ul>
      					</li>
      					<li className="t_black_before weight-600-before">
      						<strong>읽기 설정</strong>
      						<ul className="dot_lst">
      							<li>
      								<b>텍스트 읽기 옵션</b> : 읽기 시작과 중지 키, 읽기 속도 등을 조정합니다.
      							</li>
      							<li>
      								<b>스크롤 읽기</b> : 스크롤링 읽기 방식이나 방향을 설정합니다.
      							</li>
      						</ul>
      					</li>
      					<li className="t_black_before weight-600-before">
      						<strong>입력 및 출력 설정</strong>
      						<ul className="dot_lst">
      							<li>
      								<b>입력 장치</b> : 점자 디스플레이 또는 키보드 입력 방법을 설정합니다.
      							</li>
      							<li>
      								<b>출력 장치</b> : 출력 음성을 선택하거나 점자 디스플레이의 설정을 조정합니다.
      							</li>
      						</ul>
      					</li>
      					<li className="t_black_before weight-600-before">
      						<strong>고급 설정</strong>
      						<ul className="dot_lst">
      							<li>
      								<b>웹 탐색</b> : 웹 페이지 읽기 옵션, 링크 탐색 방식 등을 설정합니다.
      							</li>
      							<li>
      								<b>어플리케이션 호환성</b> : 특정 어플리케이션에서의 동작 방식을 설정할 수 있습니다.
      							</li>
      						</ul>
      					</li>
      					<li className="t_black_before weight-600-before">
      						<strong>0000000</strong>
      						<p>
      							모든 설정을 마친 후, '<b>저장</b>' 버튼을 클릭하여 변경사항을 적용합니다.
      						</p>
      					</li>
      					<li className="t_black_before weight-600-before">
      						<strong>센스리더 테스트</strong>
      						<p>
      							설정이 잘 적용되었는지 확인하기 위해, 센스리더를 사용하여 실제로 텍스트를 읽어보거나 기능을 테스트합니다.
      						</p>
      					</li>
      				</ol>
      			</div>
      			

      			<figure className="mt_l img_figure">
      				<img src={`${IMG.A11Y}/7_1.jpg`} alt="센스리더(Sense Reader)" className="max-w550" />
      				<figcaption>
      					<b>[센스리더(Sense Reader)]</b><br />
      					출처 : https://blog.naver.com/c9622211/220173887355
      				</figcaption>
      			</figure>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">JAWS(Job Access With Speech)</h3>

      			<ol className="mt_l ol_lst info_lst gap-column-important-sm">
      				<li>
      					1995년도에 출시한 JAWS는 스크린 리더의 원조이며, 옛날부터 존재하던 스크린 리더이기 때문에 제일 많은 사용자들이 익숙하고 사용하던 스크린 리더입니다.
      				</li>
      				<li>
      					현재 JAWS는 스크린 리더에 필요한 모든 기능을 갖추고 있지만 최근에는 시장 점유율을 잃어가고 있습니다.
      				</li>
      				<li>
      					이유는 다른 스크린 리더도 충분히 JAWS를 대체할 수 있고 무엇보다 가격이 가장 큰 장벽을 들 수 있는데
      					가격을 살펴보면 여러 가지 옵션이 있지만 기본 1년에 $90 혹은 라이선스 구매를 $1000에 할 수 있습니다.
      				</li>
      				<li>
      					무료인 NVDA와 비교해 봤을 때 가격에서 대비가 됩니다. 가격이 높다고 하더라도 예전부터 사용하던 이용자들은
      					JAWS를 편하게 생각하기 때문에 계속 찾을 수도 있습니다.
      				</li>
      				<li>
      					JAWS 데모를 이용하면 컴퓨터를 재시작할 때마다 40분 동안 무료로 이용할 수 있으며,
      					JAWS를 켰을 때 라이선스 등록하라고 물어보는 팝업이 뜨기 전에 1분가량 이용할 수도 있습니다.
      				</li>
      			</ol>

      			<figure className="mt_l img_figure">
      				<img src={`${IMG.A11Y}/7_2.jpg`} alt="JAWS(Job Access With Speech)" />
      				<figcaption>
      					<b>[JAWS(Job Access With Speech)]</b><br />
      					출처 : https://www.freedomscientific.com/products/software/jaws/
      				</figcaption>
      			</figure>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">NVDA(NonVisual Desktop Access)</h3>

      			<blockquote className="uk_note mt_l" role="note">
      				<strong className="sound_only">요약 설명</strong>
      				<p>
      					<b>NVDA</b>는 2006년에 출시된 오픈소스 스크린 리더로, 무료로 사용 가능하며 다국어를 지원합니다.
      					최근 인기가 급상승하여 2017년에는 스크린 리더의 원조 격인 JAWS와 비슷한 수준으로 이용되고 있습니다.
      					이러한 인기는 NVDA가 무료이면서도 유사한 기능을 제공하기 때문입니다.
      					WebAIM이 2019년 8월부터 9월까지 실시한 조사에 따르면,
      					스크린 리더 사용자들 사이에서 NVDA의 선호도가 JAWS보다 높은 것으로 나타났습니다.
      				</p>
      			</blockquote>

      			<div className="indent mt_l">
      				<h4 className="ml_mn">센스리더 환경 설정</h4>
      				<ol className="mt_l ol_lst info_lst gap-column-important-sm">
      					<li>
      						NVDA 환경설정을 호출하려면 NVDA를 실행한 상태에서 언제든지 <i className="key_insert">insert</i>와
      						<i className="key_n">N</i>키를 누르면 됩니다.
      					</li>
      					<li>
      						인터넷 관련 환경설정은 설정 &gt; 브라우저 모드에 있습니다.
      					</li>
      					<li>
      						다른 값은 다 기본으로 두셔도 되지만 페이지가 로딩되면 자동으로 읽기 항목은 체크 해제하고 테스트하시기 바랍니다.
      						이는 우리나라의 많은 사이트에서는 페이지가 열렸을 때 포커스가 항상 문서 처음으로 가지 않는 경우가 많으므로
      						포커스가 있는 그 라인을 읽어주는 것이 사용자에게 더 명확한 정보를 줄 수 있기 때문입니다.
      					</li>
      					<li>
      						&quot;화면 레이아웃, 지원되면 사용&quot; 항목은 센스리더와 비슷한 환경을 구현하기 위하여 해제하고 테스트합니다.
      						이렇게 되면 센스리더처럼 모든 객체는 다른 라인으로 분리하여 출력합니다.
      					</li>
      				</ol>
      			</div>

      			<figure className="mt_l img_figure">
      				<img src={`${IMG.A11Y}/7_3.jpg`} alt="NVDA(NonVisual Desktop Access)" className="max-w850" />
      				<figcaption>
      					<b>[NVDA(NonVisual Desktop Access)]</b><br />
      					출처 : https://ul.gpii.net/content/nvda-screenreader
      				</figcaption>
      			</figure>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">접근성 테스트 도구 및 리소스</h2>

      		<ol className="ol_lst mt_xl info_lst gap-column-important-m">
      			<li className="t_black_before weight-600-before">
      				<strong>axe Accessibility Checker</strong>
      				<ul className="dot_lst">
      					<li>
      						Deque Systems에서 제공하는 브라우저 확장 프로그램으로, 웹 페이지의 접근성 문제를 감지합니다. WAI-ARIA 역할과 속성 사용의 적절성을 평가합니다.
      					</li>
      					<li>
      						웹 페이지의 접근성 문제 자동 검출, WAI-ARIA 검증.
      					</li>
      					<li className="reference">
      						<a href="https://www.deque.com/axe/" target="_blank" rel="noreferrer" title="새창 열림" className="fas weight-500">axe: Accessibility Testing Tools and Software - Deque</a>
      					</li>
      				</ul>
      			</li>
      			<li className="t_black_before weight-600-before">
      				<strong>WAVE (Web Accessibility Evaluation Tool)</strong>
      				<ul className="dot_lst">
      					<li>
      						웹 페이지의 접근성을 시각적으로 평가할 수 있는 도구로, WAI-ARIA의 적절한 사용 여부를 포함한 다양한 접근성 문제를 감지합니다.
      					</li>
      					<li>
      						웹 페이지의 구조적 접근성 분석, 시각적 피드백 제공.
      					</li>
      					<li>
      						브라우저 부가기능 WAVE Evaluation Tool 추가하여 사용 가능.
      					</li>
      					<li className="reference">
      						<a href="https://wave.webaim.org/" target="_blank" rel="noreferrer" title="새창 열림" className="fas weight-500">WAVE Web Accessibility Evaluation Tools</a>
      					</li>
      				</ul>
      			</li>
      			<li className="t_black_before weight-600-before">
      				<strong>Lighthouse</strong>
      				<ul className="dot_lst">
      					<li>
      						Lighthouse는 웹페이지 품질을 개선하기 위한 오픈소스 자동화 도구입니다. 모든 공개 웹페이지 또는 인증이 필요한 웹페이지에 대해 실행할 수 있습니다.
      					</li>
      					<li>
      						Google Chrome에 내장된 개발자 도구로, 성능, 접근성, 프로그레시브 웹 앱, 검색엔진 최적화 등에 대한 감사가 제공됩니다.
      					</li>
      					<li>
      						WAI-ARIA 역할과 속성 사용 검토, 접근성 개선 제안.
      					</li>
      					<li className="reference">
      						<a href="https://developer.chrome.com/docs/lighthouse/overview?hl=ko#devtools" target="_blank" rel="noreferrer" title="새창 열림" className="fas weight-500">Chrome DevTools에서 Lighthouse 실행</a>
      					</li>
      				</ul>
      			</li>
      			<li className="t_black_before weight-600-before">
      				<strong>Accessibility Insights</strong>
      				<ul className="dot_lst">
      					<li>
      						Microsoft에서 제공하는 브라우저 확장 프로그램으로, 웹 페이지의 접근성 문제를 발견하고 해결할 수 있도록 돕습니다.
      					</li>
      					<li>
      						WAI-ARIA 역할 및 속성 검토, 웹 페이지의 접근성 상태 시각화.
      					</li>
      					<li className="reference">
      						<a href="https://accessibilityinsights.io/" target="_blank" rel="noreferrer" title="새창 열림" className="fas weight-500">Accessibility Insights</a>
      					</li>
      				</ul>
      			</li>
      			<li className="t_black_before weight-600-before">
      				<strong>The A11Y Project</strong>
      				<ul className="dot_lst">
      					<li>
      						웹 접근성을 중심으로 한 오픈 소스 커뮤니티로, 다양한 접근성 리소스와 WAI-ARIA 관련 자료를 제공합니다.
      					</li>
      					<li>
      						접근성 모범 사례, WAI-ARIA 사용 예제 및 가이드.
      					</li>
      					<li className="reference">
      						<a href="https://www.a11yproject.com/checklist/#content" target="_blank" rel="noreferrer" title="새창 열림" className="fas weight-500">A11Y Project checklist</a>
      					</li>
      				</ul>
      			</li>
      			<li className="t_black_before weight-600-before">
      				<strong>명도 대비 검사 툴</strong>
      				<ul className="dot_lst">
      					<li className="reference">
      						<a href="https://www.tpgi.com/color-contrast-checker/" target="_blank" rel="noreferrer" title="새창 열림" className="fas weight-500">Colour Contrast Analyzer (CCA)</a>
      					</li>
      					<li className="reference">
      						<a href="https://contrastchecker.com/" target="_blank" rel="noreferrer" title="새창 열림" className="fas weight-500">WCAG - Contrast Checker</a>
      					</li>
      					<li className="reference">
      						<a href="https://w3cag.com/" target="_blank" rel="noreferrer" title="새창 열림" className="fas weight-500">WCAG Contrast Checker</a>
      					</li>
      					<li className="reference">
      						<a href="https://webaim.org/resources/contrastchecker/" target="_blank" rel="noreferrer" title="새창 열림" className="fas weight-500">Contrast Checker - WebAIM</a>
      					</li>
      					<li className="reference">
      						<a href="https://accessibilitycheck.org/contrast/" target="_blank" rel="noreferrer" title="새창 열림" className="fas weight-500">Contrast Check</a>
      					</li>
      					<li className="reference">
      						<a href="https://app.contrast-finder.org/?lang=ko" target="_blank" rel="noreferrer" title="새창 열림" className="fas weight-500">Contrast Finder</a>
      					</li>
      				</ul>
      				<figure className="mt_m img_figure">
      					<img src={`${IMG.A11Y}/7_4.png`} alt="Colour Contrast Analyzer (CCA)" />
      					<figcaption>
      						<b>[Colour Contrast Analyzer (CCA)]</b><br />
      						출처 : https://www.tpgi.com/color-contrast-checker/
      					</figcaption>
      				</figure>
      			</li>
      			<li className="t_black_before weight-600-before">
      				<strong>안드로이드 접근성 검사기</strong>
      				<figure className="mt_m img_figure">
      					<img src={`${IMG.A11Y}/7_5.png`} alt="Play 스토어의 접근성 검사기" />
      					<figcaption>
      						<b>[Play 스토어의 접근성 검사기]</b><br />
      						출처 : developer.android.com
      					</figcaption>
      				</figure>
      			</li>
      			<li className="t_black_before weight-600-before">
      				<strong>Accessibility Inspector</strong>
      				<figure className="mt_m img_figure">
      					<img src={`${IMG.A11Y}/7_6.png`} alt="Accessibility Inspector" className="max-w650" />
      					<figcaption>
      						<b>[Accessibility Inspector]</b><br />
      						출처 : https://developer.apple.com/documentation/accessibility/accessibility-inspector
      					</figcaption>
      				</figure>
      			</li>
      		</ol>
      	</section>
      	

      	<footer className="reference_box">
      		<strong className="tit">접근성 관련 도구 및 플러그인 참조</strong>
      		<ul className="link_lst">
      			<li className="reference"><a href="https://www.xvtech.com/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">(주)엑스비전테크놀로지</a></li>
      			<li className="reference"><a href="https://www.freedomscientific.com/products/software/jaws/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">JAWS® Solutions</a></li>
      			<li className="reference"><a href="https://ul.gpii.net/content/nvda-screenreader" target="_blank" rel="noreferrer" title="새창 열림" className="fas">NVDA Screenreader</a></li>
      			<li className="reference"><a href="https://webaim.org/projects/screenreadersurvey8/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">webaim.org Screen Reader User Survey</a></li>
      			<li className="reference"><a href="https://digitalaccessibilitycentre.org/index.php/blog/20-diary/211-jaws-verses-nvda" target="_blank" rel="noreferrer" title="새창 열림" className="fas">JAWS verses NVDA</a></li>
      			<li className="reference"><a href="https://developer.android.com/codelabs/starting-android-accessibility?hl=ko#0" target="_blank" rel="noreferrer" title="새창 열림" className="fas">Mobile Android 접근성 시작 - Android Developers</a></li>
      			<li className="reference"><a href="https://developer.apple.com/documentation/accessibility/accessibility-inspector" target="_blank" rel="noreferrer" title="새창 열림" className="fas">Mobile iOS Accessibility Inspector</a></li>
      			<li className="reference"><a href="https://www.tpgi.com/color-contrast-checker/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">Colour Contrast Analyzer (CCA)</a></li>
      			<li className="reference"><a href="https://contrastchecker.com/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">WCAG - Contrast Checker</a></li>
      			<li className="reference"><a href="https://w3cag.com/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">WCAG Contrast Checker</a></li>
      			<li className="reference"><a href="https://webaim.org/resources/contrastchecker/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">Contrast Checker - WebAIM</a></li>
      			<li className="reference"><a href="https://accessibilitycheck.org/contrast/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">Contrast Check</a></li>
      			<li className="reference"><a href="https://app.contrast-finder.org/?lang=ko" target="_blank" rel="noreferrer" title="새창 열림" className="fas">Contrast Finder</a></li>
      		</ul>
      	</footer>

    </>
  )
}

export default A11ytoolPage
