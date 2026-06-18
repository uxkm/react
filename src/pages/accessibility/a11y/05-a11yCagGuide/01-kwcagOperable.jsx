import { useAccessibilityPageMeta } from '@/hooks/useAccessibilityPageMeta.js'
import { IMG } from '@/config/path'

const PAGE_LAYOUT = {
  mainClass: "kwcagOperable",
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
  title: "운용의 용이성(Operable) | 접근성 항목별 준수 가이드(웹 콘텐츠 접근성)",
  description: "접근성 항목별 준수 가이드는 웹 콘텐츠 접근성을 보장하기 위한 구체적인 지침을 제공합니다. 이 페이지에서는 웹 콘텐츠 접근성 준수 가이드의 운용의 용이성(Operable)에 대해 소개합니다.",
  keyword: "Accessibility, a11y, wcag, kwcag, macag, kiosk, 접근성, 웹 콘텐츠 접근성, 한국형 웹 콘텐츠 접근성, 모바일 앱 접근성, 무인정보단말기 접근성",
}

function KwcagOperablePage() {
  useAccessibilityPageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  })


  return (
    <>









      	<blockquote className="uk_note mt_xxl" role="note">
      		<strong className="sound_only">요약 설명</strong>
      		<p>
      			<b>운용의 용이성(Operable)</b>은 사용자가 장애 유무 등에 관계없이 웹 사이트에서 제공하는 모든 기능들을 운용할 수 있도록 제공하는 것을 의미합니다.<br />
      			KWCAG 2.1 운용의 용이성은 입력장치 접근성, 충분한 시간 제공, 광과민성 발작 예방, 쉬운 내비게이션의 4가지 지침으로 구성되어 있으며,<br />
      			KWCAG 2.2 운용의 용이성은 입력장치 접근성, 충분한 시간 제공, 광과민성 발작 예방, 쉬운 내비게이션, 입력 방식의 5가지 지침으로 구성되어 있습니다.
      		</p>
      	</blockquote>

      	<figure className="img_figure mt_l">
      		<img src={`${IMG.A11Y}/5_1_kwcag_operable.png`} alt="운용의 용이성" />
      		<figcaption>
      			운용의 용이성
      		</figcaption>
      	</figure>

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">입력장치 접근성</h2>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">키보드 사용 보장</h3>

      			<blockquote className="uk_note mt_xl" role="note">
      				<strong className="sound_only">요약 설명</strong>
      				<p>
      					<b className="t_black">모든 기능은 키보드만으로도 사용할 수 있어야 합니다.</b><br />
      					웹 페이지에서 제공하는 모든 기능을 키보드만으로도 사용할 수 있도록 제공해야 합니다.
      					다만, 사용자의 반응 속도나 지속성이 중요한 요소인 붓질, 헬리콥터나 비행기 등의 훈련에 사용되는 시뮬레이션 콘텐츠 등과
      					시각적인 방법으로만 접근이 가능한 지리 정보 콘텐츠, 가상 현실 콘텐츠 등은 이 검사 항목의 예외로 할 수 있습니다.
      				</p>
      				<p className="mt_ms reference">
      					WCAG 2.1 부분 참조.<br />
      					<a href="https://www.w3.org/TR/WCAG21/#keyboard" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">2.1.1 Keyboard (Level A)</a><br />
      				</p>
      			</blockquote>

      			<div className="mt_l indent">
      				<h4 className="ml_mn">고려 사항</h4>
      				<ol className="mt_m ol_lst info_lst gap-column-important-ms">
      					<li className="t_black_before weight-600-before">
      						<strong>키보드 인터페이스와 기능</strong>
      						<p>
      							콘텐츠의 모든 기능은 키보드로 사용이 가능하여야 합니다.
      							이 경우, 해당 기능을 사용하는 데 필요한 키보드의 조작 횟수의 많고 적음은 고려 대상이 아닙니다.
      						</p>
      					</li>
      					<li className="t_black_before weight-600-before">
      						<strong>예외 콘텐츠</strong>
      						<p>
      							위치 지정 도구의 커서 궤적이 중요한 역할을 하는 콘텐츠(예: 붓질 기능이 필요한 콘텐츠,
      							시뮬레이션 콘텐츠, 지리정보 응용 콘텐츠, 가상현실 콘텐츠)와 움직임 측정 센서를 이용하는 콘텐츠는 이 검사 항목의 예외로 간주됩니다.
      							그러나 이러한 예외 콘텐츠라도 위치 지정 도구나 움직임 측정 센서를 제외한 나머지 사용자 인터페이스는 반드시 키보드만으로 사용할 수 있어야 합니다.
      						</p>
      					</li>
      				</ol>
      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn t_blue weight-800">기대 효과</h4>
      				<p className="mt_m">
      					위치 지정 도구를 사용할 수 없는 시각 장애인의 경우, 키보드만으로도 웹 콘텐츠나 웹 사이트가 제공하는 모든 기능을 사용할 수 있습니다.
      				</p>
      			</div>
      			
      			<figure className="img_figure mt_l">
      				<img src={`${IMG.A11Y}/5_1_kwcag_10.png`} alt="10 키보드 사용 보장" />
      				<figcaption>
      					운용의 용이성
      				</figcaption>
      			</figure>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">초점 이동과 표시</h3>

      			<blockquote className="uk_note mt_xl" role="note">
      				<strong className="sound_only">요약 설명</strong>
      				<p>
      					<b className="t_black">키보드에 의한 초점은 논리적인 순서로 이동해야 하며 시각적으로 구별할 수 있어야 합니다.</b><br />
      					웹 페이지에서 제공하는 모든 기능을 키보드만으로 사용하는 경우에도 사용자 입력 간의 초점 이동은 적절한 순서를 따라야 하며,
      					이 과정에서 콘텐츠는 조작이 불가능한 상태가 되거나 갑작스러운 페이지의 전환 등이 일어나지 않아야 합니다.
      					또한 초점을 받은 콘텐츠는 저시력 장애인과 지체 장애인들이 인지할 수 있도록 시각적으로 구별되어야 합니다.
      				</p>
      				<p className="mt_ms reference">
      					WCAG 2.1 부분 참조.<br />
      					<a href="https://www.w3.org/TR/WCAG21/#no-keyboard-trap" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">2.1.2 No Keyboard Trap (Level A)</a><br />
      					<a href="https://www.w3.org/TR/WCAG21/#focus-order" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">2.4.3 Focus Order (Level A)</a>
      				</p>
      			</blockquote>

      			<div className="mt_l indent">
      				<h4 className="ml_mn">고려 사항</h4>
      				<ol className="mt_m ol_lst info_lst gap-column-important-ms">
      					<li className="t_black_before weight-600-before">
      						<strong>초점 이동 순서 유지</strong>
      						<p>
      							사용자가 키보드를 이용해 초점을 이동할 때, 이동 순서가 사용자 예측과 일치하지 않으면 혼란을 초래할 수 있습니다.
      							따라서 초점 이동 순서는 사용자가 예상하는 순서와 일치해야 하며, 기존 관례를 따르는 것이 바람직합니다.
      							만약 관례와 다른 초점 이동 순서를 결정해야 하는 경우에는 이동 순서가 논리적이도록 구현해야 합니다.<br />
      							예를 들어, 사용자 아이디, 비밀번호 입력 창과 로그인 버튼 간의 초점 이동 순서는 [사용자 아이디] → [비밀번호] → [로그인 버튼]의 순서로 해야 합니다.
      						</p>
      					</li>
      					<li className="t_black_before weight-600-before">
      						<strong>함정 또는 오류 방지</strong>
      						<p>
      							웹 콘텐츠는 사용자가 키보드로 조작할 수 없는 상태가 되거나, 다음 사용자 입력 또는 컨트롤로 초점을 이동할 수 없거나,
      							이전 페이지로 초점을 이동할 수 없는 상태가 되어서는 안 됩니다.
      							이러한 상황을 피하기 위해 웹 콘텐츠는 항상 사용자가 키보드를 통해 초점을 이동할 수 있도록 구현되어야 합니다.
      						</p>
      					</li>
      					<li className="t_black_before weight-600-before">
      						<strong>초점의 시각화</strong>
      						<p>
      							사용자 입력(예: 마우스 클릭 또는 키보드 조작)으로 컨트롤이 초점을 받았을 때, 해당 컨트롤이 초점을 받았음을 시각적으로 구별할 수 있어야 합니다.<br />
      							대표적인 예로는, 키보드 조작을 통해 버튼이 초점을 받을 때 버튼 주위에 점선 테두리가 표시되는 경우가 있습니다.
      							위치 지정 도구(마우스)와 키보드에 의한 초점 표시 방법이 다를 수 있지만, 각 경우에 초점을 시각적으로 명확하게 구별할 수 있도록 해야 합니다.
      						</p>
      					</li>
      				</ol>
      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn t_blue weight-800">기대 효과</h4>
      				<ul className="mt_m dot_lst info_lst gap-column-important-sm">
      					<li>
      						화면 낭독 프로그램을 사용하는 사용자는 사용자 입력 주변의 상하좌우에 위치한 콘텐츠에 대한 정보를 알 수 없습니다.
      						따라서 웹 콘텐츠의 키보드 조작에 의한 초점 이동 순서는 기존 관례를 따라야 합니다.
      						그렇지 않으면 사용자가 입력을 조작하는 과정에서 혼란을 초래할 수 있습니다.
      					</li>
      					<li>
      						마우스나 키보드 조작으로 특정 영역에 이동했을 때, 해당 영역이 초점을 받았음을 시각적으로 명확히 알려주면,
      						저시력 장애인, 노인, 지체 장애인뿐만 아니라 비장애인도 어느 컨트롤이 선택되었고 활성화할 수 있는지를 쉽게 인지할 수 있습니다.
      						이렇게 시각적 피드백을 제공하는 것은 모든 사용자가 웹 콘텐츠를 보다 쉽게 탐색하고 조작할 수 있도록 도와줍니다.
      					</li>
      				</ul>
      			</div>
      			
      			<figure className="img_figure mt_l">
      				<img src={`${IMG.A11Y}/5_1_kwcag_11.png`} alt="11 초점 이동과 표시" />
      				<figcaption>
      					운용의 용이성
      				</figcaption>
      			</figure>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">조작 가능</h3>

      			<blockquote className="uk_note mt_xl" role="note">
      				<strong className="sound_only">요약 설명</strong>
      				<p className="reference">
      					<b className="t_black">사용자 입력 및 컨트롤은 조작 가능하도록 제공되어야 합니다.</b><br />
      					웹 페이지에서 제공하는 모든 이웃한 컨트롤은 개별적으로 선택하고 사용할 수 있도록 충분한 크기로 제공해야 합니다.
      				</p>
      			</blockquote>

      			<div className="mt_l indent">
      				<h4 className="ml_mn">고려 사항</h4>
      				<ol className="mt_m ol_lst info_lst gap-column-important-ms">
      					<li className="t_black_before weight-600-before">
      						<strong>컨트롤의 크기</strong>
      						<p>
      							콘텐츠에 포함된 모든 컨트롤은 대각선 방향의 길이를 6.0mm 이상으로 제공하는 것이 바람직합니다.
      						</p>
      					</li>
      					<li className="t_black_before weight-600-before">
      						<strong>링크, 사용자 입력, 기타 컨트롤 등의 안쪽 여백</strong>
      						<p>
      							링크, 사용자 입력, 기타 컨트롤은 테두리 안쪽에 1픽셀 이상의 여백을 두어야 하며,
      							이 여백에서는 위치 지정 도구(마우스)의 조작에 반응하지 않도록 구현하는 것이 바람직합니다.
      						</p>
      					</li>
      				</ol>
      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn t_blue weight-800">기대 효과</h4>
      				<p className="mt_m">
      					컨트롤을 크게 구현하면, 터치스크린을 사용하는 손 떨림이 있는 사용자와 시각 장애인도 컨트롤을 쉽게 찾고 조작할 수 있습니다.
      				</p>
      			</div>
      			

      			<figure className="img_figure mt_l">
      				<img src={`${IMG.A11Y}/5_1_kwcag_12.png`} alt="12 조작 가능" />
      				<figcaption>
      					운용의 용이성
      				</figcaption>
      			</figure>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">문자 단축키</h3>

      			<blockquote className="uk_note mt_xl" role="note">
      				<strong className="sound_only">요약 설명</strong>
      				<p>
      					<b className="t_black">문자 단축키는 오동작으로 인한 오류를 방지하여야 합니다.</b><br />
      					단일 문자 단축키(예: 글자키, 숫자키, 특수문자키)를 제공하는 경우, 의도하지 않은 실행을 방지하기 위해 비활성화, 재설정, 초점 기반 활성화 중 하나 이상의 수단을 제공해야 합니다.
      				</p>
      				<p className="mt_ms reference">
      					WCAG 2.1 부분 참조.<br />
      					<a href="https://www.w3.org/TR/WCAG21/#character-key-shortcuts" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">2.1.4 Character Key Shortcuts (Level A)</a><br />
      				</p>
      			</blockquote>

      			<div className="mt_l indent">
      				<h4 className="ml_mn">고려 사항</h4>
      				<ol className="mt_m ol_lst info_lst gap-column-important-ms">
      					<li className="t_black_before weight-600-before">
      						<strong>비활성화</strong>
      						<p>
      							사용자가 단일 문자 단축키를 끌 수 있는 방법을 제공해야 합니다.
      						</p>
      					</li>
      					<li className="t_black_before weight-600-before">
      						<strong>재설정</strong>
      						<p>
      							Ctrl, Alt, Shift, Option, Command 등 기능키와 조합하는 방식으로 단축키를 재설정할 수 있어야 합니다.
      						</p>
      					</li>
      					<li className="t_black_before weight-600-before">
      						<strong>초점을 받은 경우에만 활성화</strong>
      						<p>
      							폼 컨트롤, 링크, 에디터 등 사용자 인터페이스 요소가 초점을 받은 경우에만 단축키가 동작하도록 구현해야 합니다.
      						</p>
      					</li>
      				</ol>
      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn t_blue weight-800">기대 효과</h4>
      				<ul className="mt_m dot_lst info_lst gap-column-important-sm">
      					<li>
      						음성 명령을 사용하는 사용자가 의도하지 않게 단일 문자 단축키를 실행시키는 오동작을 줄일 수 있습니다.
      					</li>
      					<li>
      						손 사용이 원활하지 않은 사용자도 단축키 오입력으로 인한 오류를 줄일 수 있어 안정적으로 기능을 사용할 수 있습니다.
      					</li>
      					<li>
      						재설정 기능을 통해 사용자에게 익숙한 단축키로 변경할 수 있어 학습 부담이 줄어듭니다.
      					</li>
      				</ul>
      			</div>
      			

      			<figure className="img_figure mt_l">
      				<img src={`${IMG.A11Y}/5_1_kwcag_13.png`} alt="13 문자 단축키" />
      				<figcaption>
      					운용의 용이성
      				</figcaption>
      			</figure>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">충분한 시간 제공</h2>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">응답시간 조절</h3>

      			<blockquote className="uk_note mt_l" role="note">
      				<strong className="sound_only">요약 설명</strong>
      				<p>
      					<b className="t_black">시간제한이 있는 콘텐츠는 응답시간을 조절할 수 있어야 합니다.</b><br />
      					웹 콘텐츠 제작 시 시간제한이 있는 콘텐츠는 가급적 포함하지 않는 것이 바람직하며,
      					보안 등의 사유로 시간제한이 반드시 필요할 경우에는 이를 회피할 수 있는 수단을 제공해야 합니다.
      				</p>
      				<p className="mt_ms reference">
      					WCAG 2.1 부분 참조.<br />
      					<a href="https://www.w3.org/TR/WCAG21/#timing-adjustable" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">2.2.1 Timing Adjustable (Level A)</a><br />
      				</p>
      			</blockquote>

      			<div className="mt_l indent">
      				<h4 className="ml_mn">고려 사항</h4>
      				<ol className="mt_m ol_lst info_lst gap-column-important-ms">
      					<li className="t_black_before weight-600-before">
      						<strong>시간제한 콘텐츠 사용 배제</strong>
      						<p>
      							시간제한이 있는 콘텐츠는 가급적 제공하지 않아야 합니다.
      						</p>
      					</li>
      					<li className="t_black_before weight-600-before">
      						<strong>예외 콘텐츠</strong>
      						<p>
      							시간 제한이 있는 경우, 온라인 경매나 실시간 게임처럼 반응 시간을 조절할 수 없는 상황에서는 이 검사 항목이 적용되지 않습니다.
      							그러나, 이런 경우에도 사용자에게 시간 제한이 있음을 사전에 안내하고, 시간이 종료되었을 때에도 이를 알려줘야 합니다.<br />
      							또한, 세션 시간이 20시간 이상인 콘텐츠의 경우에도 예외로 간주됩니다.
      						</p>
      					</li>
      					<li className="t_black_before weight-600-before">
      						<strong>반응 시간 조절이 필요한 콘텐츠</strong>
      						<p>
      							반응 시간이 정해진 웹 콘텐츠를 제공할 때, 사용자가 다음 중 한 가지 방법을 선택하여 반응 시간을 조절할 수 있는 수단을 제공해야 합니다.
      						</p>
      						<ul className="dot_lst indent_small">
      							<li>시간제한을 해제</li>
      							<li>시간제한을 연장</li>
      						</ul>
      						<p>
      							또한, 반응 시간 조절 기능은 사용자가 충분한 시간(최소 20초 이상)을 두고 사전에 알 수 있도록 해야 합니다.
      						</p>
      					</li>
      				</ol>
      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn t_blue weight-800">기대 효과</h4>
      				<p className="mt_m">
      					비장애인보다 문서를 읽고 이해하는 데 더 많은 시간이 필요한 지적 장애 또는 학습 장애가 있는 사용자도
      					시간제한이 있는 콘텐츠를 시간에 관계없이 이용할 수 있게 됩니다.
      				</p>
      			</div>
      			
      			<figure className="img_figure mt_l">
      				<img src={`${IMG.A11Y}/5_1_kwcag_14.png`} alt="14 응답시간 조절" />
      				<figcaption>
      					운용의 용이성
      				</figcaption>
      			</figure>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">정지 기능 제공</h3>

      			<blockquote className="uk_note mt_l" role="note">
      				<strong className="sound_only">요약 설명</strong>
      				<p>
      					<b className="t_black">자동으로 변경되는 콘텐츠는 움직임을 제어할 수 있어야 합니다.</b><br />
      					웹 콘텐츠는 스크롤 및 자동 갱신되는 콘텐츠를 장애인 사용자가 이용할 수 있도록 일시 정지할 수 있는 수단을 제공해야 합니다.
      				</p>
      				<p className="mt_ms reference">
      					WCAG 2.1 부분 참조.<br />
      					<a href="https://www.w3.org/TR/WCAG21/#pause-stop-hide" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">2.2.2 Pause, Stop, Hide (Level A)</a><br />
      				</p>
      			</blockquote>

      			<div className="mt_l indent">
      				<h4 className="ml_mn">고려 사항</h4>
      				<ol className="mt_m ol_lst info_lst gap-column-important-ms">
      					<li className="t_black_before weight-600-before">
      						<strong>이동하거나 스크롤 되는 콘텐츠 사용 배제</strong>
      						<p>
      							스크롤 및 자동 갱신되는 콘텐츠를 가급적 사용하지 않습니다.
      						</p>
      					</li>
      					<li className="t_black_before weight-600-before">
      						<strong>이동하거나 스크롤되는 콘텐츠</strong>
      						<p>
      							저시력 장애인이나 지적 장애인 등은 이동하거나 스크롤되는 콘텐츠를 사용하는 데 어려움을 겪을 수 있습니다.
      							따라서 웹 콘텐츠는 다음과 같은 기능을 제공해야 합니다.
      						</p>
      						<ul className="dot_lst indent_small">
      							<li>사용자가 콘텐츠의 이동이나 스크롤을 일시 정지시킬 수 있는 컨트롤</li>
      							<li>지나간 콘텐츠나 앞으로 나타날 콘텐츠를 선택할 수 있는 컨트롤</li>
      						</ul>
      						<p>
      							앞으로 이동, 뒤로 이동, 정지와 같은 컨트롤을 제공함으로써 사용자들이 콘텐츠를 보다 쉽게 탐색할 수 있도록 해야 합니다.
      						</p>
      					</li>
      				</ol>
      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn t_blue weight-800">기대 효과</h4>
      				<ul className="mt_m dot_lst info_lst gap-column-important-sm">
      					<li>
      						배너와 같이 빠르게 변화하는 콘텐츠를 이용하기 어려운 지체 장애인, 노인, 뇌병변 장애인들도 빠르게 변화하는 콘텐츠를 이용할 수 있습니다.
      					</li>
      					<li>
      						스크롤되는 뉴스 콘텐츠에서 이미 지나간 뉴스를 손쉽게 확인할 수 있는 기능을 제공하면, 콘텐츠의 사용이 훨씬 편리해집니다.
      					</li>
      				</ul>
      			</div>
      			

      			<figure className="img_figure mt_l">
      				<img src={`${IMG.A11Y}/5_1_kwcag_15.png`} alt="15 정지 기능 제공" />
      				<figcaption>
      					운용의 용이성
      				</figcaption>
      			</figure>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">광과민성 발작 예방</h2>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">깜빡임과 번쩍임 사용 제한</h3>

      			<blockquote className="uk_note mt_l" role="note">
      				<strong className="sound_only">요약 설명</strong>
      				<p>
      					<b className="t_black">초당 3회에서 50회 주기로 깜빡이거나 번쩍이는 콘텐츠를 제공하지 않아야 합니다.</b><br />
      					깜빡이거나(flashing) 번쩍이는(blinking) 콘텐츠는 발작을 유발할 수 있으므로,
      					초당 3회에서 50회 사이의 주기로 깜빡이거나 번쩍이는 콘텐츠를 제공해서는 안 됩니다.
      					특히, 10인치 이상의 스크린을 가진 정보통신 기기(태블릿, PC 모니터, 무인 안내기 등)에서는
      					콘텐츠로 인한 광과민성 발작 가능성에 특별히 주의해야 합니다.
      				</p>
      				<p className="mt_ms reference">
      					WCAG 2.1 부분 참조.<br />
      					<a href="https://www.w3.org/TR/WCAG21/#three-flashes-or-below-threshold" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">2.3.1 Three Flashes or Below Threshold (Level A)</a><br />
      				</p>
      			</blockquote>

      			<div className="mt_l indent">
      				<h4 className="ml_mn">고려 사항</h4>
      				<ol className="mt_m ol_lst info_lst gap-column-important-ms">
      					<li className="t_black_before weight-600-before">
      						<strong>번쩍이는(blinking) 콘텐츠 사용 금지</strong>
      						<p>
      							번쩍임이 초당 3회에서 50회이며, 10인치 이상의 화면에 표시된 번쩍이는 콘텐츠가
      							차지하는 면적의 합이 화면 전체 면적의 10%를 넘지 않아야 합니다.
      						</p>
      					</li>
      					<li className="t_black_before weight-600-before">
      						<strong>깜빡이는(flashing) 콘텐츠 사용 금지</strong>
      						<p>
      							초당 3회에서 50회의 속도로 깜빡거리게 만든 콘텐츠는 그 깜빡임을 정지시킬 수 있어야 합니다.
      						</p>
      					</li>
      					<li className="t_black_before weight-600-before">
      						<strong>번쩍이는(blinking) 시간의 제한</strong>
      						<p>
      							웹 페이지에 포함되는 콘텐츠의 번쩍이는 시간을 3초 미만으로 제한하면,
      							지속적인 번쩍임으로 인한 발작을 예방하면서도 콘텐츠의 중요성을 효과적으로 전달할 수 있습니다.
      							이러한 접근은 광과민성 증후군 환자, 학습 장애인, 저시력 장애인 등 다양한 사용자들의 안전과 편의를 보장합니다.
      						</p>
      					</li>
      				</ol>
      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn t_blue weight-800">기대 효과</h4>
      				<ul className="mt_m dot_lst info_lst gap-column-important-sm">
      					<li>
      						광과민성 증후가 있는 사용자들은 빛이 번쩍거리는 것에 민감하게 반응하여 발작을 일으킬 수 있습니다.
      						따라서 본 검사 항목을 준수한 콘텐츠는 광과민성 증후가 있는 사용자도 접근 가능합니다.
      					</li>
      					<li>
      						주의 집중에 어려움이 있는 사람의 경우, 지속적으로 번쩍거림이 있는 콘텐츠를 집중하여 응시하기가 매우 어렵습니다.
      						따라서 본 검사 항목을 만족하는 웹 콘텐츠는 주의 집중에 어려움이 있는 사람도 접근이 가능합니다.
      					</li>
      				</ul>
      			</div>
      			

      			<figure className="img_figure mt_l">
      				<img src={`${IMG.A11Y}/5_1_kwcag_16.png`} alt="16 깜빡임과 번쩍임 사용 제한" />
      				<figcaption>
      					운용의 용이성
      				</figcaption>
      			</figure>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">쉬운 내비게이션</h2>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">반복 영역 건너뛰기</h3>

      			<blockquote className="uk_note mt_l" role="note">
      				<strong className="sound_only">요약 설명</strong>
      				<p>
      					<b className="t_black">콘텐츠의 반복되는 영역은 건너뛸 수 있어야 합니다.</b><br />
      					<b>키보드 사용자</b>는 페이지가 로드된 이후 탭 키를 이용해 모든 웹페이지에 공통적으로 있는 메뉴 및 링크 목록을
      					순차적으로 내비게이션한 후에 핵심 영역에 도달하며,<br />
      					<b>화면 낭독 프로그램 사용자</b>는 페이지가 로드되거나 갱신될 때마다 공통적인 메뉴를 다시 듣게 됩니다.<br />
      					<b>키보드 사용자</b>와 <b>화면 낭독 프로그램 사용자</b>가 겪는 불편을 방지하기 위해,
      					사용자가 메뉴와 같은 반복 영역을 건너뛰고 핵심 영역으로 직접 이동할 수 있는 수단(예: '탐색 건너뛰기' 링크)을 제공해야 합니다.
      				</p>
      				<p className="mt_ms reference">
      					WCAG 2.1 부분 참조.<br />
      					<a href="https://www.w3.org/TR/WCAG21/#bypass-blocks" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">2.4.1 Bypass Blocks (Level A)</a><br />
      				</p>
      			</blockquote>

      			<div className="mt_l indent">
      				<h4 className="ml_mn">고려 사항</h4>
      				<ol className="mt_m ol_lst info_lst gap-column-important-ms">
      					<li className="t_black_before weight-600-before">
      						<strong>반복 영역을 건너 뛸 수 있는 수단 제공</strong>
      						<p>
      							웹 페이지가 제공하는 핵심 영역이 위치한 곳으로 직접 이동하는 건너뛰기 링크를 제공해야하며,
      							건너뛰기 링크는 웹 페이지의 가장 앞에 위치해야 합니다.
      						</p>
      					</li>
      					<li className="t_black_before weight-600-before">
      						<strong>여러 개의 건너뛰기 링크 제공</strong>
      						<p>
      							여러 개의 건너뛰기 링크를 제공하는 경우에는 핵심 영역으로 이동하기 위한 건너뛰기 링크가 가장 먼저 나타나도록 해야 합니다.
      						</p>
      					</li>
      					<li className="t_black_before weight-600-before">
      						<strong>시각적인 구현</strong>
      						<p>
      							건너뛰기 링크는 시각 장애인뿐 아니라 지체 장애인도 키보드 조작 횟수를 줄일 수 있게 하는
      							효과적인 수단이므로 메뉴 건너뛰기 링크는 화면에서 눈에 띄게 보이도록 구현해야 한다.
      						</p>
      					</li>
      				</ol>
      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn t_blue weight-800">기대 효과</h4>
      				<ul className="mt_m dot_lst info_lst gap-column-important-sm">
      					<li>
      						웹 페이지의 상단이나 좌측 프레임에 반복되는 링크 목록이 포함되어 있으면,
      						화면 낭독 프로그램 사용자는 이 목록을 순서대로 읽어야 하므로 매우 불편하며,
      						키보드 사용자도 모든 링크를 순차적으로 이동해야 핵심 영역으로 갈 수 있어 불편합니다.
      						이를 해결하기 위해 웹 페이지의 첫 부분에 핵심 영역으로 바로 이동할 수 있는 '건너뛰기' 링크를 제공하면,
      						웹 페이지 핵심 영역으로 신속하게 이동할 수 있어 효율성이 높아집니다.
      					</li>
      					<li>
      						색인이 없는 긴 문장으로 구성된 콘텐츠는 특정 위치로 이동하기 매우 불편합니다.
      						그러나 웹 페이지의 시작 부분에 색인을 제공하면 필요한 부분으로 직접 이동할 수 있어 내비게이션이 더 쉽고 빠릅니다.<br />
      						또한, 콘텐츠를 <b className="t_blue">장, 절, 소절<sup className="sup">1)</sup></b> 등으로 구분하면 웹 브라우저나 보조 기술이 제공하는
      						장, 절, 소절 간의 빠른 이동 수단을 활용할 수 있어 더욱 효율적으로 탐색할 수 있습니다.
      					</li>
      					<li>
      						여러 페이지로 구성된 웹 사이트에서 사이트 맵을 제공하면 사용자는 이를 이용하여 필요한 정보가 위치한 페이지로 보다 쉽고 빠르게 이동할 수 있습니다.
      					</li>
      				</ul>
      			</div>
      			

      			<div className="mt_m ex_box indent">
      				<span className="t_blue">1) <b>장, 절, 소절</b> 이란?</span><br />
      				<p className="mt_s">
      					&quot;장, 절, 소절&quot;은 콘텐츠를 구분하는 방식으로, 일반적으로 긴 문서나 웹 페이지를 구조화하여 탐색을 용이하게 하는 방법을 의미합니다.
      				</p>
      				<ul className="mt_sm indent_small dot_lst gap-column-sm">
      					<li>
      						<strong>장(章)</strong><br />
      						<p>콘텐츠를 큰 단위로 나눈 부분으로, 일반적으로 큰 주제를 다루는 단위입니다. 예를 들어, 책의 장(Chapter)처럼 각 장마다 주요 주제를 다룹니다.</p>
      					</li>
      					<li>
      						<strong>절(節)</strong><br />
      						<p>장보다 더 작은 단위로, 장 안에서 구체적인 주제나 부분을 나누는 단위입니다. 예를 들어, 책의 절(Section)처럼 장 내에서 특정 내용을 상세히 설명합니다.</p>
      					</li>
      					<li>
      						<strong>소절(小節)</strong><br />
      						<p>절보다 더 작은 단위로, 구체적인 세부 사항이나 특정 항목을 다루는 단위입니다. 예를 들어, 절 내에서 작은 단락이나 항목을 나누는 방식입니다.</p>
      					</li>
      				</ul>
      			</div>

      			<figure className="img_figure mt_l">
      				<img src={`${IMG.A11Y}/5_1_kwcag_17.png`} alt="17 반복 영역 건너뛰기" />
      				<figcaption>
      					운용의 용이성
      				</figcaption>
      			</figure>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">제목 제공</h3>

      			<blockquote className="uk_note mt_l" role="note">
      				<strong className="sound_only">요약 설명</strong>
      				<p>
      					<b className="t_black">페이지, 프레임, 콘텐츠 블록에는 적절한 제목을 제공해야 합니다.</b><br />
      					페이지, 프레임, 콘텐츠 블록의 제목은 사용자가 웹 콘텐츠를 효율적으로 운용할 수 있도록 도와줍니다.
      					제목은 간단명료하게 작성되어야 하며, 해당 페이지, 프레임, 콘텐츠 블록의 내용을 명확히 유추할 수 있도록 제공해야 합니다.
      				</p>
      				<p className="mt_ms reference">
      					WCAG 2.1 부분 참조.<br />
      					<a href="https://www.w3.org/TR/WCAG21/#page-titled" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">2.4.2 Page Titled (Level A)</a><br />
      				</p>
      			</blockquote>

      			<div className="mt_l indent">
      				<h4 className="ml_mn">고려 사항</h4>
      				<ol className="mt_m ol_lst info_lst gap-column-important-ms">
      					<li className="t_black_before weight-600-before">
      						<strong>웹 페이지 제목(title) 제공</strong>
      						<p>
      							모든 웹 페이지가 해당 내용을 간단명료하게 기술한 제목을 포함하고 있을 경우 여러 개의 웹 페이지가 열려 있더라도
      							사용자(예: 시각 장애인, 지적 장애인, 중증 지체 장애인 등)는 제목을 통해 웹 페이지를 선택하므로 모든 웹 페이지에는
      							해당 페이지를 간단명료하게 설명한 제목을 제공해야 합니다.<br />
      							또한, 웹 페이지 제목은 유일하고 서로 다르게 제공해야 합니다.
      						</p>
      					</li>
      					<li className="t_black_before weight-600-before">
      						<strong>팝업 창 제목(title) 제공</strong>
      						<p>
      							팝업 창에도 제목을 제공해야 합니다.
      						</p>
      					</li>
      					<li className="t_black_before weight-600-before">
      						<strong>프레임 제목(title) 제공</strong>
      						<p>
      							웹 페이지의 모든 프레임에는 각 프레임을 설명하는 간단명료한 제목을 제공해야 합니다.
      							모든 프레임에 간단명료한 제목이 부여되면 사용자(예 : 시각 장애인, 지적 장애인, 중증 지체 장애인 등)는 프레임 제목을 통해 프레임의 선택, 이동 등이 가능합니다.<br />
      							아무런 내용이 없는 프레임에도 ‘빈 프레임’ 등과 같이 제목을 제공합니다.
      						</p>
      					</li>
      					<li className="t_black_before weight-600-before">
      						<strong>콘텐츠 블록 제목 구성</strong>
      						<p>
      							콘텐츠 블록에는 적절한 제목(heading)을 제공하면 제목과 본문을 구분할 수 있으며, 제목을 이용하여 콘텐츠 블록 간의 이동이 가능합니다.<br />
      							그러나 본문이 없는 콘텐츠 블록에는 제목을 붙이지 않습니다.
      						</p>
      					</li>
      					<li className="t_black_before weight-600-before">
      						<strong>특수 기호 사용 제한</strong>
      						<p>
      							웹 페이지, 프레임 또는 콘텐츠 블록의 제목은 문장의 하나로 간주하여 불필요한 특수 기호를 반복해서 사용하지 않아야 합니다.
      						</p>
      					</li>
      				</ol>
      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn t_blue weight-800">기대 효과</h4>
      				<ul className="mt_m dot_lst info_lst gap-column-important-sm">
      					<li>
      						웹 사이트가 제공하는 모든 웹 페이지에 서로 다른 제목을 제공하면 동시에 여러 개의 웹 페이지가 열려 있더라도
      						사용자(예 : 시각 장애인, 지적 장애인, 지체 장애인 등)는 웹 페이지의 제목을 확인하여 열려있는 웹 페이지 간을 편리하게 이동할 수 있습니다.<br />
      						이를 위해, 각 페이지는 해당 페이지만의 유일하고 서로 다른(unique and exclusive) 페이지 제목을 가져야 합니다.
      					</li>
      					<li>
      						웹 페이지를 구성하는 모든 프레임에 제목을 제공하면 사용자 (예 : 시각 장애인, 지적 장애인, 중증 지체 장애인 등)는 프레임 제목을 통해
      						프레임 간을 매우 편리하게 이동할 수 있습니다.<br />
      						이를 위해, 페이지의 경우와 마찬가지로, 동일한 페이지에 포함된 모든 프레임은 해당 프레임만의 유일하고 서로 다른 프레임 제목을 가져야 합니다.
      					</li>
      				</ul>
      			</div>
      			

      			<figure className="img_figure mt_l">
      				<img src={`${IMG.A11Y}/5_1_kwcag_18.png`} alt="18 제목 제공" />
      				<figcaption>
      					운용의 용이성
      				</figcaption>
      			</figure>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">적절한 링크 텍스트</h3>

      			<blockquote className="uk_note mt_l" role="note">
      				<strong className="sound_only">요약 설명</strong>
      				<p>
      					<b className="t_black">링크 텍스트는 용도나 목적을 이해할 수 있도록 제공해야 합니다.</b><br />
      					링크는 주변 맥락을 통하여 용도나 목적지를 명확하게 이해할 수 있는 링크 텍스트를 제공해야 합니다.
      				</p>
      				<p className="mt_ms reference">
      					WCAG 2.1 부분 참조.<br />
      					<a href="https://www.w3.org/TR/WCAG21/#link-purpose-in-context" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">2.4.4 Link Purpose (In Context) (Level A)</a><br />
      				</p>
      			</blockquote>

      			<div className="mt_l indent">
      				<h4 className="ml_mn">고려 사항</h4>
      				<ol className="mt_m ol_lst info_lst gap-column-important-ms">
      					<li className="t_black_before weight-600-before">
      						<strong>맥락을 통해 이해할 수 있도록 링크 텍스트 제공</strong>
      						<p>
      							링크의 용도나 목적지를 링크 텍스트만으로 또는 주변의 맥락으로부터 충분히 이해할 수 있도록 링크 텍스트를 제공해야 합니다.
      						</p>
      						<ul className="mt_sm dot_lst gap-column-important-sm">
      							<li>
      								<strong>문장의 일부분에 링크를 연결하는 경우</strong><br />
      								<p>
      									URL(Uniform Resource Locator) 목적지, 용도 등을 표현한 텍스트에 링크를 연결해야 합니다.
      								</p>
      							</li>
      							<li>
      								<strong>‘바로가기’, ‘GO’ 등의 링크 텍스트를 제공하는 경우</strong><br />
      								<p>
      									URL에 관한 정보를 제공하는 문장에 이어서 링크 텍스트를 삽입해야 합니다.
      								</p>
      							</li>
      							<li>
      								<strong>이미지 링크를 제공하는 경우</strong><br />
      								<p>
      									URL에 관한 정보를 제공하는 텍스트와 URL로 이동하는 이미지 링크는 하나의 링크로 구성하는 것이 바람직합니다.
      									이 경우, 이미지 링크의 대체 텍스트는 공백 문자로 제공해야 합니다.
      								</p>
      							</li>
      							<li>
      								동일한 제품을 서로 다른 관점에서 각각 설명한 페이지로 이동하는 링크들은 각 링크 텍스트를 서로 다르게 구성하는 것이 바람직합니다.
      							</li>
      							<li>
      								탭(tab) 컨트롤을 이용하여 공지사항 목록을 나열하고, 주변에 ‘더보기’ 링크를 제공하는 콘텐츠에서 ‘더보기’ 링크는 그 맥락으로부터
      								‘공지사항 더보기’임을 알 수 있습니다.
      							</li>
      						</ul>
      					</li>
      					<li className="t_black_before weight-600-before">
      						<strong>이미지 링크 구성</strong>
      						<p>
      							<b>아이콘(icon)으로 링크 텍스트를 대신하여 표현한 경우</b>
      							(예: 홈 페이지로 이동하기 위한 링크를 집 모양의 아이콘 이미지로 제공하고, 해당 아이콘에 홈 페이지로 이동하는 링크를 걸어놓은 경우)<br />
      							아이콘 이미지만으로도 링크의 용도나 목적지, 내용을 충분히 이해할 수 있도록 직관적이고 명료하게 제공해야 합니다.
      							아이콘에 대체 텍스트를 제공하는 방법에 대해서는 검사 항목 <b className="t_blue">[적절한 대체 텍스트 제공]</b>을 참고해야 합니다.<br />
      						</p>
      						<p className="mt_s">
      							<a href="/publishing/a11y/05-a11yCagGuide/01-kwcagPerceivable#inner_link:text" className="box_link"><b>[적절한 대체 텍스트 제공]</b> 바로가기</a>
      						</p>
      					</li>
      				</ol>
      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn t_blue weight-800">기대 효과</h4>
      				<ul className="mt_m dot_lst info_lst gap-column-important-sm">
      					텍스트에 링크를 연결할 때 ‘여기를 클릭하세요.’와 같은 애매모호한 표현을 사용하면, 시각 장애인,
      					지적 장애인뿐만 아니라 비장애인도 클릭 시 어떤 일이 일어날지, 또는 어떤 내용이 제시될지 알 수 없습니다.<br />
      					그러나 링크 텍스트를 직관적으로 구성하면 장애인들은 해당 링크를 클릭했을 때 무슨 일이 벌어질 것인지를
      					분명하게 알 수 있으므로 시각 장애인이나 지적 장애인은 맥락을 이해하기 위한 쓸데없는 콘텐츠 간의 이동 과정을 피할 수 있습니다.
      				</ul>
      			</div>
      			

      			<figure className="img_figure mt_l">
      				<img src={`${IMG.A11Y}/5_1_kwcag_19.png`} alt="19 적절한 링크 텍스트" />
      				<figcaption>
      					운용의 용이성
      				</figcaption>
      			</figure>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">고정된 참조 위치 정보</h3>

      			<blockquote className="uk_note mt_l" role="note">
      				<strong className="sound_only">요약 설명</strong>
      				<p>
      					<b className="t_black">전자출판문서 형식의 웹 페이지는 각 페이지로 이동할 수 있는 기능이 있어야 하고, 서식이나 플랫폼에 상관없이 참조 위치 정보를 일관되게 제공 및 유지해야 합니다.</b><br />
      					페이지 구분이 있는 전자출판문서 형식 콘텐츠는 페이지 번호 등 참조 위치 정보를 제공하고, 각 페이지로 이동할 수 있는 기능을 제공해야 합니다.
      				</p>
      			</blockquote>

      			<div className="mt_l indent">
      				<h4 className="ml_mn">고려 사항</h4>
      				<ol className="mt_m ol_lst info_lst gap-column-important-ms">
      					<li className="t_black_before weight-600-before">
      						<strong>참조 위치 정보 제공</strong>
      						<p>
      							페이지 번호와 같은 참조 위치 정보를 제공하여 사용자 간 동일 위치를 지칭할 수 있어야 합니다.
      						</p>
      					</li>
      					<li className="t_black_before weight-600-before">
      						<strong>페이지 이동 기능 제공</strong>
      						<p>
      							각 페이지로 직접 이동할 수 있는 수단을 제공하여 탐색 효율을 높여야 합니다.
      						</p>
      					</li>
      					<li className="t_black_before weight-600-before">
      						<strong>일관성 유지</strong>
      						<p>
      							확대/축소나 플랫폼 변경 시에도 참조 위치 정보가 사라지지 않도록 일관된 위치에 유지되어야 합니다.
      						</p>
      					</li>
      				</ol>
      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn t_blue weight-800">기대 효과</h4>
      				<ul className="mt_m dot_lst info_lst gap-column-important-sm">
      					<li>
      						콘텐츠를 확대해서 사용하는 사용자와 기본 배율 사용자 모두 동일한 참조 위치를 기준으로 학습, 협업, 안내를 진행할 수 있습니다.
      					</li>
      					<li>
      						플랫폼이나 보기 방식이 달라도 페이지 위치 정보가 유지되어 문서 탐색의 혼란을 줄일 수 있습니다.
      					</li>
      				</ul>
      			</div>
      			

      			<figure className="img_figure mt_l">
      				<img src={`${IMG.A11Y}/5_1_kwcag_20.png`} alt="20 고정된 참조 위치 정보" />
      				<figcaption>
      					운용의 용이성
      				</figcaption>
      			</figure>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">입력 방식</h2>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">단일 포인터 입력 지원</h3>

      			<blockquote className="uk_note mt_l" role="note">
      				<strong className="sound_only">요약 설명</strong>
      				<p>
      					<b className="t_black">다중 포인터 또는 경로기반 동작을 통한 입력은 단일 포인터 입력으로도 조작할 수 있어야 합니다.</b><br />
      					핀치, 다중 탭, 스와이프, 드래그 등 복합 입력 동작은 가능하면 단일 포인터로 대체할 수 있어야 합니다.
      				</p>
      				<p className="mt_ms reference">
      					WCAG 2.1 부분 참조.<br />
      					<a href="https://www.w3.org/TR/WCAG21/#pointer-gestures" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">2.5.1 Pointer Gestures (Level A)</a><br />
      				</p>
      			</blockquote>

      			<div className="mt_l indent">
      				<h4 className="ml_mn">고려 사항</h4>
      				<ol className="mt_m ol_lst info_lst gap-column-important-ms">
      					<li className="t_black_before weight-600-before">
      						<strong>대체 조작 수단 제공</strong>
      						<p>
      							핀치, 다중 탭, 스와이프, 드래그 등 복합 제스처 기반 기능에는 버튼, 단일 탭 등 단일 포인터 대체 수단을 함께 제공해야 합니다.
      						</p>
      					</li>
      					<li className="t_black_before weight-600-before">
      						<strong>예외 기능의 최소화</strong>
      						<p>
      							기능 특성상 다중 포인터/경로기반 입력이 필수인 경우를 제외하고, 핵심 기능은 단일 포인터로 수행할 수 있도록 구현해야 합니다.
      						</p>
      					</li>
      				</ol>
      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn t_blue weight-800">기대 효과</h4>
      				<ul className="mt_m dot_lst info_lst gap-column-important-sm">
      					<li>
      						한 손가락 또는 보조 포인팅 장치를 사용하는 사용자도 기능을 수행할 수 있어 접근성이 향상됩니다.
      					</li>
      					<li>
      						복잡한 제스처 수행이 어려운 사용자도 동일한 기능을 쉽게 이용할 수 있습니다.
      					</li>
      				</ul>
      			</div>
      			

      			<figure className="img_figure mt_l">
      				<img src={`${IMG.A11Y}/5_1_kwcag_21.png`} alt="21 단일 포인터 입력 지원" />
      				<figcaption>
      					운용의 용이성
      				</figcaption>
      			</figure>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">포인터 입력 취소</h3>

      			<blockquote className="uk_note mt_l" role="note">
      				<strong className="sound_only">요약 설명</strong>
      				<p>
      					<b className="t_black">단일 포인터 입력으로 실행되는 기능은 취소할 수 있어야 합니다.</b><br />
      					다운 이벤트만으로 기능이 즉시 실행되지 않도록 하고, 실행 전 중지 또는 실행 후 취소/되돌리기 수단을 제공해야 합니다.
      				</p>
      				<p className="mt_ms reference">
      					WCAG 2.1 부분 참조.<br />
      					<a href="https://www.w3.org/TR/WCAG21/#pointer-cancellation" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">2.5.2 Pointer Cancellation (Level A)</a><br />
      				</p>
      			</blockquote>

      			<div className="mt_l indent">
      				<h4 className="ml_mn">고려 사항</h4>
      				<ol className="mt_m ol_lst info_lst gap-column-important-ms">
      					<li className="t_black_before weight-600-before">
      						<strong>다운 이벤트만으로 실행 금지</strong>
      						<p>
      							기능은 가능하면 업 이벤트에서 완료되도록 구현하여, 실수 입력을 인지한 사용자가 실행 전에 중단할 수 있게 해야 합니다.
      						</p>
      					</li>
      					<li className="t_black_before weight-600-before">
      						<strong>중지/실행취소/되돌리기 지원</strong>
      						<p>
      							실행 전 중지, 실행 후 취소 또는 결과 되돌리기 중 하나 이상의 수단을 제공하여 오입력 피해를 줄여야 합니다.
      						</p>
      					</li>
      				</ol>
      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn t_blue weight-800">기대 효과</h4>
      				<ul className="mt_m dot_lst info_lst gap-column-important-sm">
      					<li>
      						사용자가 잘못된 입력임을 인지했을 때 즉시 중단하거나 실행 결과를 되돌릴 수 있어 실수 피해를 줄일 수 있습니다.
      					</li>
      					<li>
      						우발적 터치나 클릭으로 인한 오동작 가능성을 낮춰 안정적인 사용 경험을 제공합니다.
      					</li>
      				</ul>
      			</div>
      			

      			<figure className="img_figure mt_l">
      				<img src={`${IMG.A11Y}/5_1_kwcag_22.png`} alt="22 포인터 입력 취소" />
      				<figcaption>
      					운용의 용이성
      				</figcaption>
      			</figure>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">레이블과 네임</h3>

      			<blockquote className="uk_note mt_l" role="note">
      				<strong className="sound_only">요약 설명</strong>
      				<p>
      					<b className="t_black">텍스트 또는 텍스트 이미지가 포함된 레이블이 있는 사용자 인터페이스 구성요소는 시각적으로 표시되는 해당 텍스트를 네임에 포함해야 합니다.</b><br />
      					음성 입력 및 보조 기술 사용자가 화면에 보이는 레이블과 동일한 이름으로 요소를 조작할 수 있어야 합니다.
      				</p>
      				<p className="mt_ms reference">
      					WCAG 2.1 부분 참조.<br />
      					<a href="https://www.w3.org/TR/WCAG21/#label-in-name" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">2.5.3 Label in Name (Level A)</a><br />
      				</p>
      			</blockquote>

      			<div className="mt_l indent">
      				<h4 className="ml_mn">고려 사항</h4>
      				<ol className="mt_m ol_lst info_lst gap-column-important-ms">
      					<li className="t_black_before weight-600-before">
      						<strong>시각 레이블 포함</strong>
      						<p>
      							버튼, 링크, 입력 요소의 접근성 네임에는 화면에 표시되는 텍스트 레이블이 반드시 포함되어야 합니다.
      						</p>
      					</li>
      					<li className="t_black_before weight-600-before">
      						<strong>일치 우선 원칙</strong>
      						<p>
      							가능하면 시각 레이블과 접근성 네임을 동일하게 제공하고, 추가 정보가 필요한 경우 시각 레이블 텍스트를 네임의 앞부분에 포함해야 합니다.
      						</p>
      					</li>
      				</ol>
      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn t_blue weight-800">기대 효과</h4>
      				<ul className="mt_m dot_lst info_lst gap-column-important-sm">
      					<li>
      						음성 입력 사용자가 화면에 보이는 문구 그대로 명령해 요소를 제어할 수 있습니다.
      					</li>
      					<li>
      						보조 기술이 읽는 이름과 화면 텍스트가 일치하여 사용자의 혼란을 줄일 수 있습니다.
      					</li>
      				</ul>
      			</div>
      			

      			<figure className="img_figure mt_l">
      				<img src={`${IMG.A11Y}/5_1_kwcag_23.png`} alt="23 레이블과 네임" />
      				<figcaption>
      					운용의 용이성
      				</figcaption>
      			</figure>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">동작기반 작동</h3>

      			<blockquote className="uk_note mt_l" role="note">
      				<strong className="sound_only">요약 설명</strong>
      				<p>
      					<b className="t_black">동작기반으로 작동하는 기능은 사용자 인터페이스 구성요소로 조작할 수 있고, 동작기반 기능을 비활성화할 수 있어야 합니다.</b><br />
      					흔들기, 기울이기 같은 동작 입력 기능은 UI 대체 조작 수단을 제공하고 우발적 작동 방지를 위해 비활성화 기능을 지원해야 합니다.
      				</p>
      				<p className="mt_ms reference">
      					WCAG 2.1 부분 참조.<br />
      					<a href="https://www.w3.org/TR/WCAG21/#motion-actuation" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">2.5.4 Motion Actuation (Level A)</a><br />
      				</p>
      			</blockquote>

      			<div className="mt_l indent">
      				<h4 className="ml_mn">고려 사항</h4>
      				<ol className="mt_m ol_lst info_lst gap-column-important-ms">
      					<li className="t_black_before weight-600-before">
      						<strong>UI 대체 수단 제공</strong>
      						<p>
      							흔들기, 기울이기 등 동작 기반 기능은 버튼, 메뉴 등 사용자 인터페이스 구성요소로 동일하게 조작할 수 있어야 합니다.
      						</p>
      					</li>
      					<li className="t_black_before weight-600-before">
      						<strong>비활성화 기능 제공</strong>
      						<p>
      							우발적인 기기 움직임으로 기능이 실행되지 않도록 동작기반 기능을 켜고 끌 수 있는 설정을 제공해야 합니다.
      						</p>
      					</li>
      				</ol>
      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn t_blue weight-800">기대 효과</h4>
      				<ul className="mt_m dot_lst info_lst gap-column-important-sm">
      					<li>
      						장치가 고정되어 있거나 특정 동작 수행이 어려운 사용자도 기능을 사용할 수 있습니다.
      					</li>
      					<li>
      						의도하지 않은 동작으로 기능이 실행되는 상황을 줄여 안전하고 예측 가능한 사용이 가능합니다.
      					</li>
      				</ul>
      			</div>
      			

      			<figure className="img_figure mt_l">
      				<img src={`${IMG.A11Y}/5_1_kwcag_24.png`} alt="24 동작기반 작동" />
      				<figcaption>
      					운용의 용이성
      				</figcaption>
      			</figure>
      		</article>
      		
      	</section>
      	


      <footer className="reference_box">
      	<strong className="tit">접근성 항목별 준수 가이드 - 웹 콘텐츠 접근성 참조</strong>
      	<ul className="link_lst">
      		<li className="reference"><a href="https://www.w3.org/TR/WCAG10/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C WCAG 1.0</a></li>
      		<li className="reference"><a href="https://www.w3.org/TR/WCAG20/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C WCAG 2.0</a></li>
      		<li className="reference"><a href="https://www.w3.org/TR/WCAG21/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C WCAG 2.1</a></li>
      		<li className="reference"><a href="https://www.w3.org/TR/WCAG22/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C WCAG 2.2</a></li>
      		<li className="reference"><a href="https://www.w3.org/TR/2021/WD-wcag-3.0-20210121/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C WCAG 3.0 Draft</a></li>
      		<li className="reference"><a href="http://www.kwacc.or.kr/WAI/wcag21/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C WCAG 2.1 한국어</a></li>
      		<li className="reference"><a href="https://www.w3.org/TR/WCAG22/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C Web Content Accessibility Guidelines (WCAG) 2.2</a></li>
      		<li className="reference"><a href="https://www.w3.org/WAI/standards-guidelines/ko#wcag2" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C WCAG2 ko</a></li>
      		<li className="reference"><a href="https://www.w3.org/WAI/about/groups/agwg/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C Accessibility Guidelines Working Group</a></li>
      		<li className="reference"><a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/intro.html#introduction-fourprincs-head" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C 접근성의 4가지 원칙</a></li>
      		<li className="reference"><a href="https://developer.mozilla.org/ko/docs/Web/Accessibility/Understanding_WCAG" target="_blank" rel="noreferrer" title="새창 열림" className="fas">MDN 웹 콘텐츠 접근성 지침 이해하기</a></li>
      		<li className="reference"><a href="https://developer.mozilla.org/ko/docs/Learn/Accessibility/What_is_accessibility#accessibility_guidelines_and_the_law" target="_blank" rel="noreferrer" title="새창 열림" className="fas">MDN 접근성이란?</a></li>
      		<li className="reference"><a href="https://nuli.navercorp.com/community/article/1133181" target="_blank" rel="noreferrer" title="새창 열림" className="fas">NULI WCAG 2.2에서 변경된 사항</a></li>
      		<li className="reference"><a href="https://brunch.co.kr/@snclab/55" target="_blank" rel="noreferrer" title="새창 열림" className="fas">brunch WCAG 2.2 작업 초안</a></li>
      		<li className="reference"><a href="https://a11y.gitbook.io/wcag/international-standards" target="_blank" rel="noreferrer" title="새창 열림" className="fas">GITBOOK WCAG 2.1</a></li>
      		<li className="reference"><a href="https://iyu88.github.io//a11y/2023/12/24/web-accessibility-1.html" target="_blank" rel="noreferrer" title="새창 열림" className="fas">WAI 문서로 접근성 이해하기</a></li>
      		<li className="reference"><a href="https://www.deque.com/blog/wcag-2-1-what-is-next-for-accessibility-guidelines/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">deque blog WCAG 2.1</a></li>
      		<li className="reference"><a href="https://seculayerlab.tistory.com/m/48" target="_blank" rel="noreferrer" title="새창 열림" className="fas">웹접근성 국가표준 개정 소개</a></li>
      		<li className="reference"><a href="https://www.samsungfashion.com/webacc.do" target="_blank" rel="noreferrer" title="새창 열림" className="fas">한국형 웹 콘텐츠 접근성 지침 2.2</a></li>
      		<li className="reference"><a href="https://aoa.gitbook.io/skymimo/undefined" target="_blank" rel="noreferrer" title="새창 열림" className="fas">AOA GITBOOK</a></li>
      		<li className="reference"><a href="https://nia-a11y.github.io/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">웹 접근성을 고려한 콘텐츠 제작기법 2.2 개정판</a></li>
      	</ul>
      </footer>
    </>
  )
}

export default KwcagOperablePage
