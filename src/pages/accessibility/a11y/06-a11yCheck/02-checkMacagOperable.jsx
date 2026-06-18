import { useAccessibilityPageMeta } from '@/hooks/useAccessibilityPageMeta.js'
import { Suspense, lazy } from 'react'
const UkEditorTarget = lazy(() => import('@/components/code/UkEditorTarget'))
function EditorFallback() { return <div className="uk_editor min_height_300" aria-hidden /> }
import CodeBlock from '@/components/code/CodeBlock'

const PAGE_LAYOUT = {
  mainClass: "checkWcag",
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
  title: "운용의 용이성 | 접근성 체크리스트(모바일 앱 접근성)",
  description: "모바일 앱 접근성 체크리스트는 다양한 사용자들이 모바일 앱 콘텐츠를 문제 없이 이용할 수 있도록 보장하기 위해 설계된 필수 항목들을 제공합니다. 이 페이지에서는 모바일 앱 접근성 체크리스트의 운용의 용이성(Operable)에 대해 소개합니다.",
  keyword: "Accessibility, a11y, wcag, kwcag, macag, kiosk, 접근성, 웹 콘텐츠 접근성, 한국형 웹 콘텐츠 접근성, 모바일 앱 접근성, 무인정보단말기 접근성",
}

function CheckMacagOperablePage() {
  useAccessibilityPageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  })


  return (
    <>
      <blockquote className="uk_note common_note mt_xxl" role="note">
      	<strong className="sound_only">요약 설명</strong>
      	<p>
      		모바일 애플리케이션 콘텐츠를 구축, 운영, 개선 및 유지 보수할 경우에 적용하는 것으로 모바일 전화기,
      		태블릿기기 등 모바일 기기에서 실행되는 모든 애플리케이션 및 콘텐츠를
      		WCAG 2.0(Web Content Accessibility Guidelines 2.0)에서 제시하고 있는 접근성 설계의 4가지 원칙 기준으로,
      		<b>모바일 애플리케이션 콘텐츠의 설계 및 개발을 위한 지침을 제시하고 있습니다.</b>
      	</p>
      </blockquote>










      	<link href="/a11yStart.min.css" rel="stylesheet" />
      	<link href="/checkWcag.min.css" rel="stylesheet" />



      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">초점 이동과 표시 [유지]</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<b className="t_black">의미나 기능을 갖는 모든 콘텐츠 요소는 초점이 적용되고, 초점은 논리적인 순서로 이동해야 합니다.</b><br />
      				의미나 기능을 갖는 모든 콘텐츠 요소에 초점이 적용되고, 초점은 논리적인 순서로 이동해야 합니다.
      				터치 스크린을 사용하는 모바일 기기에서도 키보드·스위치·스크린 리더 등으로 동일하게 탐색할 수 있어야 합니다.
      			</p>
      			<p className="reference mt_ms">
      				WCAG 2.2 Guidelines :
      				<a href="https://www.w3.org/TR/WCAG22/#focus-order" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">2.4.3 Focus Order</a><br />
      				WCAG 2.2 Guidelines :
      				<a href="https://www.w3.org/TR/WCAG22/#focus-visible" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">2.4.7 Focus Visible</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">필요성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-ms">
      				<li>
      					<strong className="t_black">키보드 및 스위치 장치 사용자</strong>
      					<p>
      						물리적 키보드, 스위치 장치, 스크린 리더 등을 사용하는 사용자들도 있습니다.
      					</p>
      				</li>
      				<li>
      					<strong className="t_black">접근성</strong>
      					<p>
      						시각 장애 사용자나 기타 접근성 도구를 사용하는 사용자가 앱을 논리적인 순서로 탐색할 수 있도록 해야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong className="t_black">사용 편의성</strong>
      					<p>
      						명확한 초점 표시와 논리적인 초점 이동 순서는 사용 편의성을 크게 향상시킵니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">제공 방법</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-ms">
      				<li>
      					<strong className="t_black ">초점 가능한 요소 식별</strong>
      					<ul className="dot_lst dot_lst_inner gap-column-sm">
      						<li>
      							버튼, 링크, 입력 필드 등 모든 상호작용 가능한 요소에는 초점이 적용되도록 합니다.
      						</li>
      						<li>
      							예: Button, TextView, EditText, ImageButton 등.
      						</li>
      					</ul>
      				</li>
      				<li>
      					<strong className="t_black ">명확한 초점 스타일 제공</strong>
      					<ul className="dot_lst dot_lst_inner gap-column-sm">
      						<li>
      							초점이 위치한 요소는 시각적으로 구별될 수 있도록 명확한 스타일을 제공합니다.
      						</li>
      						<li>
      							예: 초점이 있는 요소에 테두리, 배경색 등을 적용하여 시각적으로 구별
      						</li>
      					</ul>
      				</li>
      				<li>
      					<strong className="t_black ">논리적인 초점 이동 순서</strong>
      					<p>
      						앱의 UI 요소를 논리적인 순서로 배치하여 사용자가 탐색할 때 초점이 자연스럽게 이동하도록 하며,
      						필요시
      						<code>android:nextFocusDown</code>, <code>android:nextFocusUp</code>,
      						<code>android:nextFocusLeft</code>, <code>android:nextFocusRight</code>
      						속성을 사용하여 초점 순서를 제어합니다.
      					</p>
      				</li>
      				<li>
      					<strong className="t_black ">접근성 속성 사용</strong>
      					<ul className="dot_lst dot_lst_inner gap-column-sm">
      						<li>
      							화면 표시, 소리, 진동 등 여러 가지 방법을 조합하여 사용자가 알림을 놓치지 않도록 하며,
      							<code>contentDescription</code> 속성을 사용하여 초점이 있는 요소의 의미와 기능을 명확히 전달합니다.
      						</li>
      					</ul>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">네이티브 앱 예시(Android)</h4>
      				
      <CodeBlock title="초점 이동과 표시 - 네이티브 앱 예시(Android)" language="javascript" className="uk_gist_code_box mt_ms">
      {`<!-- 초점 가능한 요소 설정 -->
      						<Button
      							android:id="@+id/submitButton"
      							android:layout_width="wrap_content"
      							android:layout_height="wrap_content"
      							android:text="제출"
      							android:contentDescription="제출 버튼" />

      						<!-- 명확한 초점 스타일 제공 -->
      						<EditText
      							android:id="@+id/nameInput"
      							android:layout_width="match_parent"
      							android:layout_height="wrap_content"
      							android:hint="이름 입력"
      							android:background="@drawable/focused_background" />

      						<!-- 논리적인 초점 이동 순서 설정 -->
      						<LinearLayout
      							android:orientation="vertical"
      							android:layout_width="match_parent"
      							android:layout_height="match_parent">

      							<EditText
      								android:id="@+id/nameInput"
      								android:layout_width="match_parent"
      								android:layout_height="wrap_content"
      								android:hint="이름 입력"
      								android:nextFocusDown="@id/emailInput" />

      							<EditText
      								android:id="@+id/emailInput"
      								android:layout_width="match_parent"
      								android:layout_height="wrap_content"
      								android:hint="이메일 입력"
      								android:nextFocusDown="@id/submitButton" />

      							<Button
      								android:id="@+id/submitButton"
      								android:layout_width="wrap_content"
      								android:layout_height="wrap_content"
      								android:text="제출" />
      						</LinearLayout>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">하이브리드 앱 예시 (HTML)</h4>
      				
      <CodeBlock title="초점 이동과 표시 - 하이브리드 앱 예시 (HTML)" language="html" className="uk_gist_code_box mt_m">
      {`<!-- 잘못된 예시 1 : 초점이 적용되지 않은 경우 -->
      						<div>클릭하세요</div>

      						<!-- 올바른 예시 1 : 초점이 적용된 경우 -->
      						<button>클릭하세요</button>

      						<!-- 잘못된 예시 2 : 초점 스타일이 명확하지 않은 경우 -->
      						<a href="page.html" style="outline: none;">링크</a>

      						<!-- 올바른 예시 2 : 명확한 초점 스타일을 제공한 경우 -->
      						<a href="page.html" style="outline: 2px solid #00f;">링크</a>

      						<!-- 올바른 예시 3 : 논리적인 초점 이동 순서를 설정한 경우 -->
      						<nav>
      							<a href="#content">본문으로 이동</a>
      							<a href="#menu">메뉴로 이동</a>
      						</nav>
      						<main id="content">
      							<h1>메인 콘텐츠</h1>
      							<p>여기에 주요 내용이 있습니다.</p>
      						</main>
      						<aside id="menu">
      							<h2>메뉴</h2>
      							<ul>
      								<li><a href="page1.html">페이지 1</a></li>
      								<li><a href="page2.html">페이지 2</a></li>
      							</ul>
      						</aside>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">검수 방법</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>키보드나 스위치 장치를 사용하여 앱을 탐색하면서 모든 상호작용 요소에 초점이 제대로 적용되는지 확인하였는가?</li>
      				<li>초점이 적용된 요소가 시각적으로 명확히 구별되는지 확인하였는가?</li>
      				<li>키보드로 앱을 탐색할 때 초점 이동 순서가 논리적이고 직관적인지 확인하였는가?</li>
      				<li>Axe, WAVE, Google Accessibility Scanner, TalkBack 등의 접근성 검사 도구를 사용하여 초점 관련 문제를 자동으로 검출하였는가?</li>
      			</ul>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">조작 가능한 크기 [현행화]</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<b className="t_black">사용자 입력 및 컨트롤은 조작 가능한 충분한 크기로 제공해야 합니다.</b><br />
      				모바일 앱 접근성 요구(KS X 3253:2025 등 반영)에서는 조작 가능 영역을 가로·세로 각각 <b>24×24 CSS 픽셀(px)</b> 이상으로 두는 것을 전제로 하며,
      				터치스크린에서 인접 요소와의 간격을 확보해 실수 터치를 줄입니다.
      			</p>
      			<p className="reference mt_ms">
      				WCAG 2.2 Guidelines :
      				<a href="https://www.w3.org/TR/WCAG22/#target-size-minimum" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">2.5.8 Target Size (Minimum)</a><br />
      				WCAG 2.2 Guidelines :
      				<a href="https://www.w3.org/TR/WCAG22/#target-size-enhanced" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">2.5.5 Target Size (Enhanced)</a> (Level AAA)<br />
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">필요성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-ms">
      				<li>
      					<strong className="t_black">사용자 편의성</strong>
      					<p>
      						작은 컨트롤이나 가까이 배치된 컨트롤은 사용자에게 불편을 줄 수 있으며,
      						특히 손이 크거나 섬세한 조작이 어려운 사용자들에게 문제가 될 수 있습니다.
      					</p>
      				</li>
      				<li>
      					<strong className="t_black">오류 감소</strong>
      					<p>
      						충분한 크기와 간격은 실수로 잘못된 버튼을 누르는 등의 오류를 줄여줍니다.
      					</p>
      				</li>
      				<li>
      					<strong className="t_black">접근성 보장</strong>
      					<p>
      						충분한 크기와 간격은 시각 장애나 운동 장애를 가진 사용자들이 모바일 앱을 쉽게 사용할 수 있도록 하는 데 중요한 역할을 합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">제공 방법</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-ms">
      				<li>
      					<strong className="t_black ">충분한 크기의 컨트롤 제공</strong>
      					<p>
      						<b>기준(신규 MACAG·WCAG 2.5.8)</b> : 버튼·링크·입력 필드 등의 <b>조작 가능 영역</b>은 가로·세로 각각 <b>24×24 CSS px</b> 이상이 되도록 합니다(운영체제 기본 컨트롤·본문 링크·지도 핀 등 예외는 WCAG 예외 조항 참고).
      					</p>
      					<p>
      						<b>권장(모바일 앱 접근성 항목별 준수 가이드)</b> : 화면 크기와 관계없이 컨트롤의 가로·세로를 각각 <b>약 9mm 이상</b>으로 두는 것이 바람직합니다(물리 크기·해상도에 따라 dp/pt·CSS로 환산해 적용).
      					</p>
      					<p>
      						<b>참고</b> : iOS·Android 디자인 가이드의 44pt/48dp 등은 최소 기준(24px)보다 넉넉한 실무 권장값이며, 예시 코드의 <code>minWidth</code>/<code>minHeight</code> 48dp는 그에 가깝게 맞춘 경우입니다.
      					</p>
      				</li>
      				<li>
      					<strong className="t_black ">컨트롤 간의 충분한 간격 유지</strong>
      					<p>
      						컨트롤 사이에 외곽선 등으로 영역이 구분되지 않으면, <b>컨트롤 중심 간 간격을 충분히</b> 두어 한 번에 여러 컨트롤이 눌리지 않도록 합니다(항목별 준수 가이드).
      						9mm는 위에서 말한 <b>컨트롤 자체의 크기</b>에 대한 권장값이며, <b>중심 간격을 9mm로 고정해야 한다는 뜻은 아닙니다.</b>
      					</p>
      				</li>
      				<li>
      					<strong className="t_black ">터치 영역 확대</strong>
      					<p>
      						시각적으로 작은 컨트롤이라도 터치 영역을 실제 컨트롤보다 크게 설정하여, 사용자가 쉽게 조작할 수 있도록 합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">네이티브 앱 예시(Android)</h4>
      				<p className="mt_s">
      					충분한 크기와 간격을 가진 버튼
      				</p>
      				
      <CodeBlock title="조작 가능한 크기 - 네이티브 앱 예시(Android)" language="javascript" className="uk_gist_code_box mt_ms">
      {`<Button
      							android:id="@+id/submitButton"
      							android:layout_width="wrap_content"
      							android:layout_height="wrap_content"
      							android:minWidth="48dp"
      							android:minHeight="48dp"
      							android:layout_margin="16dp"
      							android:text="제출" />`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">네이티브(잘못된 / 올바른 예시)</h4>
      				
      <CodeBlock title="조작 가능한 크기 - 네이티브(잘못된 / 올바른 예시)" language="javascript" className="uk_gist_code_box mt_m">
      {`<!-- 잘못된 예시 (네이티브) - 버튼의 크기가 너무 작고, 인접한 다른 컨트롤과 너무 가까이 배치되어 있어 터치하기 어려움 -->
      						<Button
      							android:id="@+id/submitButton"
      							android:layout_width="32dp"
      							android:layout_height="32dp"
      							android:layout_margin="4dp"
      							android:text="제출" />

      						<!-- 잘못된 예시 (네이티브) - 작은 크기의 버튼이 촘촘하게 배치되어 있어 실수로 다른 버튼을 터치할 위험이 큼 -->
      						<Button
      							android:id="@+id/smallButton2"
      							android:layout_width="36dp"
      							android:layout_height="36dp"
      							android:layout_margin="4dp"
      							android:text="취소" />

      						<!-- 올바른 예시 (네이티브) - 버튼의 크기를 충분히 키우고, 인접한 다른 컨트롤과의 간격을 확보 -->
      						<Button
      							android:id="@+id/submitButton"
      							android:layout_width="wrap_content"
      							android:layout_height="wrap_content"
      							android:minWidth="48dp"
      							android:minHeight="48dp"
      							android:layout_margin="16dp"
      							android:text="제출" />`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">하이브리드 앱 예시 (HTML/JavaScript)</h4>
      				<p className="mt_s">
      					충분한 크기와 간격을 가진 버튼
      				</p>
      				
      <CodeBlock title="조작 가능한 크기 - 하이브리드 앱 예시 (HTML/JavaScript)" language="javascript" className="uk_gist_code_box mt_ms">
      {`<style>
      							.button {
      								padding: 16px 24px; /* 터치 영역을 확보 */
      								font-size: 18px;
      								margin: 16px; /* 다른 컨트롤과의 간격 유지 */
      								background-color: #007AFF;
      								color: white;
      								border: none;
      								border-radius: 5px;
      								cursor: pointer;
      							}
      						</style>

      						<button class="button">제출</button>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">검수 방법</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>조작 가능 영역이 가로·세로 각 24×24 CSS px 이상(예외 제외)인지, 인접 타깃과 겹치거나 과도하게 촘촘하지 않은지 확인하였는가?</li>
      				<li>실제 기기에서 터치스크린으로 컨트롤을 사용해보고, 실수로 다른 컨트롤을 터치할 가능성이 없는지 확인하였는가?</li>
      				<li>Google Accessibility Scanner와 같은 도구를 사용하여 크기와 간격이 접근성 기준을 충족하는지 점검하였는가?</li>
      			</ul>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">단일 문자 단축키 [신규]</h2>
      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p><b className="t_black">단일 문자 단축키는 비활성화·재할당·조합키 전환 수단을 제공해야 합니다.</b></p>
      			<p className="reference mt_ms">WCAG 2.2 Guidelines : <a href="https://www.w3.org/TR/WCAG22/#character-key-shortcuts" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">2.1.4 Character Key Shortcuts</a></p>
      		</blockquote>
      		<article className="mt_xl indent"><h3 className="ml_mn">필요성</h3><ul className="mt_m dot_lst gap-column-important-sm"><li>음성 입력·보조기기 사용 중 의도치 않은 단축키 실행을 줄입니다.</li></ul></article>
      		<article className="mt_xl indent"><h3 className="ml_mn">제공 방법</h3><ul className="mt_m dot_lst gap-column-important-sm"><li>설정에서 단일 문자 단축키를 끄거나 수정할 수 있도록 제공합니다.</li></ul></article>
      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>
      			<div className="mt_ml indent"><h4 className="ml_mn">하이브리드 앱 예시 (JavaScript)</h4>
      <CodeBlock title="단일 문자 단축키 - 하이브리드 앱 예시" language="javascript" className="uk_gist_code_box mt_ms">
      {`const settings = { singleKeyShortcutEnabled: false };

      document.getElementById('toggleShortcut').addEventListener('click', () => {
      	settings.singleKeyShortcutEnabled = !settings.singleKeyShortcutEnabled;
      });

      document.addEventListener('keydown', (e) => {
      	// 단일 문자 키는 기본 비활성화, 조합키(Ctrl+S)만 허용
      	if (e.key.toLowerCase() === 's' && e.ctrlKey) save();
      	if (settings.singleKeyShortcutEnabled && e.key.toLowerCase() === 's' && !e.ctrlKey) {
      		openSearch();
      	}
      });`}
      </CodeBlock>
      </div>
      			<div className="mt_l indent"><h4 className="ml_mn">Vue 예시</h4>
      <CodeBlock title="단일 문자 단축키 - Vue 예시" language="javascript" className="uk_gist_code_box mt_ms">
      {`<button @click="enabled = !enabled">단축키 설정</button>`}
      </CodeBlock>
      </div>
      			<div className="mt_l indent"><h4 className="ml_mn">React 예시</h4>
      <CodeBlock title="단일 문자 단축키 - React 예시" language="javascript" className="uk_gist_code_box mt_ms">
      {`<button onClick={() => setEnabled(v => !v)}>단축키 설정</button>`}
      </CodeBlock>
      </div>
      		</article>
      		<article className="mt_xl indent"><h3 className="ml_mn t_blue">검수 방법</h3><ul className="mt_m dot_lst gap-column-important-sm"><li>단일 키 단축 동작을 끄거나 변경할 수 있는지 확인하였는가?</li></ul></article>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">응답시간 조절 [유지]</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<b className="t_black">시간제한이 있는 콘텐츠는 응답시간을 조절할 수 있어야 합니다.</b><br />
      				자동 로그아웃, 타임아웃 폼 제출 등 시간 제한이 있는 기능은 사용자가 연장·끄기 등으로 응답 시간을 조절할 수 있어야 합니다.
      				모바일 환경에서도 충분한 반응 시간을 보장하는 것이 중요합니다.
      			</p>
      			<p className="reference mt_ms">
      				WCAG 2.2 Guidelines :
      				<a href="https://www.w3.org/TR/WCAG22/#timing-adjustable" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">2.2.1 Timing Adjustable</a><br />
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">필요성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-ms">
      				<li>
      					<strong className="t_black">장애 사용자 보호</strong>
      					<p>
      						장애를 가진 사용자들은 콘텐츠를 이해하고 반응하는 데 더 많은 시간이 필요할 수 있습니다.
      						시간 제한을 조절할 수 없다면, 장애를 가진 사용자들이 중요한 작업을 완료하지 못할 위험이 있습니다.
      					</p>
      				</li>
      				<li>
      					<strong className="t_black">사용자 편의성</strong>
      					<p>
      						시간 제한을 연장하거나 비활성화할 수 있는 기능은 사용자가 보다 편안하게 앱을 사용할 수 있도록 도와줍니다.
      						특히 느린 인터넷 연결을 사용하거나 복잡한 양식을 작성해야 하는 사용자들에게 유용합니다.
      					</p>
      				</li>
      				<li>
      					<strong className="t_black">다양한 환경 대응</strong>
      					<p>
      						사용자는 이동 중이거나 여러 작업을 동시에 수행하는 경우가 많습니다.
      						이런 상황에서 시간 제한을 조절할 수 있는 기능은 중요한 역할을 합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">제공 방법</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-ms">
      				<li>
      					<strong className="t_black ">시간 연장 기능 제공</strong>
      					<p>
      						사용자에게 시간이 만료되기 전에 경고 메시지를 띄우고, 시간을 연장할 수 있는 옵션을 제공합니다.
      					</p>
      				</li>
      				<li>
      					<strong className="t_black ">시간 제한 비활성화 옵션 제공</strong>
      					<p>
      						사용자가 특정 작업을 수행할 때 시간 제한을 비활성화할 수 있는 설정 옵션을 제공합니다.
      					</p>
      				</li>
      				<li>
      					<strong className="t_black ">사용자 경고</strong>
      					<p>
      						시간 제한이 가까워지면 사용자에게 시각적, 청각적 또는 진동 알림을 통해 경고를 제공합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">네이티브 앱 예시(Android)</h4>
      				<p className="mt_s">
      					시간 연장 알림 다이얼로그 네이티브 앱 예시
      				</p>
      				
      <CodeBlock title="응답시간 조절 - 네이티브 앱 예시(Android)" language="javascript" className="uk_gist_code_box mt_ms">
      {`new AlertDialog.Builder(this)
      							.setTitle("시간 연장")
      							.setMessage("세션이 만료됩니다. 시간을 연장하시겠습니까?")
      							.setPositiveButton("예", (dialog, which) -> {
      								// 세션 연장 로직
      							})
      							.setNegativeButton("아니요", (dialog, which) -> {
      								// 세션 종료 로직
      							})
      							.show();`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">네이티브(잘못된 / 올바른 예시)</h4>
      				
      <CodeBlock title="응답시간 조절 - 네이티브(잘못된 / 올바른 예시)" language="javascript" className="uk_gist_code_box mt_m">
      {`/* 잘못된 예시 (네이티브) - 자동 로그아웃 로직만 있고, 사용자에게 시간 연장 선택권을 제공하지 않음 */
      						handler.postDelayed(() -> logout(), 5000);

      						/* 올바른 예시 (네이티브) */
      						new AlertDialog.Builder(this)
      							.setTitle("시간 연장")
      							.setMessage("세션이 만료됩니다. 시간을 연장하시겠습니까?")
      							.setPositiveButton("예", (dialog, which) -> {
      								// 세션 연장 로직
      							})
      							.setNegativeButton("아니요", (dialog, which) -> {
      								// 세션 종료 로직
      							})
      							.show();`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">하이브리드 앱 예시 (HTML/JavaScript)</h4>
      				<p className="mt_s">
      					시간 연장 알림 하이브리드 앱 예시입니다.
      				</p>
      				<div className="view_editor edit_code mt_ms">
      <Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="a11y/06-a11yCheck/6.2.2.3.Timing_Adjustable.html" className="uk_editor min_height_300" mode="htmlmixed" theme="ayu-mirage" browser="default" result minHeight="300px" />
      </Suspense>
      </div>
      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">하이브리드(잘못된 / 올바른 예시)</h4>
      				
      <CodeBlock title="응답시간 조절 - 하이브리드(잘못된 / 올바른 예시)" language="javascript" className="uk_gist_code_box mt_m">
      {`<!-- 잘못된 예시 (하이브리드) - 사용자에게 알림 없이 폼이 자동 제출됨 -->
      						<script>
      							setTimeout(function() {
      								document.getElementById('myForm').submit();
      							}, 5000);
      						</script>

      						<!-- 올바른 예시 (하이브리드) - 타임아웃 전에 사용자에게 연장 옵션 제공 -->
      						<script>
      							setTimeout(function() {
      								document.getElementById('timeoutDialog').classList.add('active');
      							}, 5000);
      						</script>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">검수 방법</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>시간 제한이 있는 기능(예: 자동 로그아웃, 폼 제출)이 사용자가 조정할 수 있도록 설계되었는지 확인하였는가?</li>
      				<li>실제 사용자가 시간을 연장할 수 있는지, 충분히 인지할 수 있는지를 테스트하였는가?</li>
      				<li>Google Accessibility Scanner와 같은 접근성 검사 도구를 사용하여 해당 기능이 올바르게 동작하는지 확인하였는가?</li>
      			</ul>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">움직임 제어 [유지]</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<b className="t_black">자동으로 변경되는 콘텐츠는 움직임을 제어할 수 있어야 합니다.</b><br />
      				슬라이드쇼, 애니메이션, 자동 갱신 광고 등 자동으로 움직이거나 갱신되는 콘텐츠는 사용자가 일시 정지·정지·숨기기 등으로 제어할 수 있어야 합니다.
      				콘텐츠를 충분히 읽고 이해할 수 있도록 하고, 주의·전정 장애 등에 불편을 줄 수 있는 움직임을 완화합니다.
      			</p>
      			<p className="reference mt_ms">
      				WCAG 2.2 Guidelines :
      				<a href="https://www.w3.org/TR/WCAG22/#pause-stop-hide" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">2.2.2 Pause, Stop, Hide</a><br />
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">필요성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-ms">
      				<li>
      					<strong className="t_black">인지 장애 사용자 보호</strong>
      					<p>
      						자동으로 변경되는 콘텐츠는 주의 집중에 어려움을 겪는 사용자들에게 혼란을 줄 수 있습니다.
      						이러한 사용자들이 스스로 움직임을 제어하거나 정지할 수 있는 기능이 필요합니다.
      					</p>
      				</li>
      				<li>
      					<strong className="t_black">시각 장애 사용자 지원</strong>
      					<p>
      						자동으로 움직이는 콘텐츠는 스크린 리더 사용자에게 혼란을 줄 수 있으므로, 이러한 콘텐츠를 제어할 수 있는 옵션이 중요합니다.
      					</p>
      				</li>
      				<li>
      					<strong className="t_black">사용자 경험 개선</strong>
      					<p>
      						사용자가 콘텐츠를 스스로 제어할 수 있을 때, 더 나은 사용자 경험을 제공할 수 있습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">제공 방법</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-ms">
      				<li>
      					<strong className="t_black ">정지, 일시 정지, 또는 숨기기 기능 제공</strong>
      					<p>
      						슬라이드쇼나 자동 갱신 콘텐츠에는 사용자가 정지하거나 일시 정지할 수 있는 버튼을 제공합니다.
      					</p>
      				</li>
      				<li>
      					<strong className="t_black ">움직임을 비활성화할 수 있는 설정 제공</strong>
      					<p>
      						사용자 설정에서 자동 갱신 또는 애니메이션을 비활성화할 수 있는 옵션을 제공합니다.
      					</p>
      				</li>
      				<li>
      					<strong className="t_black ">시각적 제어 제공</strong>
      					<p>
      						움직이는 콘텐츠에 대한 제어 버튼은 사용자에게 쉽게 접근 가능하고 눈에 띄는 위치에 배치합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">네이티브 앱 예시(Android)</h4>
      				<p className="mt_s">
      					자동 슬라이드쇼 제어 버튼 네이티브 앱 예시
      				</p>
      				
      <CodeBlock title="움직임 제어 - 네이티브 앱 예시(Android)" language="javascript" className="uk_gist_code_box mt_ms">
      {`ImageView imageView = findViewById(R.id.imageView);
      						Button pauseButton = findViewById(R.id.pauseButton);
      						Button playButton = findViewById(R.id.playButton);

      						pauseButton.setOnClickListener(v -> {
      							// 슬라이드쇼 일시 정지 로직
      							imageView.clearAnimation();
      						});

      						playButton.setOnClickListener(v -> {
      							// 슬라이드쇼 재생 로직
      							Animation anim = new AlphaAnimation(0.0f, 1.0f);
      							anim.setDuration(2000); // 2초 간격으로 슬라이드 변경
      							anim.setRepeatCount(Animation.INFINITE);
      							imageView.startAnimation(anim);
      						});`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">네이티브(잘못된 / 올바른 예시)</h4>
      				
      <CodeBlock title="움직임 제어 - 네이티브(잘못된 / 올바른 예시)" language="javascript" className="uk_gist_code_box mt_m">
      {`/* 잘못된 예시 (네이티브) - 슬라이드쇼가 자동으로 변경되지만 정지 또는 제어할 방법이 제공되지 않음 */
      						Animation anim = new AlphaAnimation(0.0f, 1.0f);
      						anim.setDuration(2000); // 2초 간격으로 슬라이드 변경
      						anim.setRepeatCount(Animation.INFINITE);
      						imageView.startAnimation(anim);

      						/* 올바른 예시 - (네이티브) - 슬라이드쇼를 일시 정지하거나 재생할 수 있는 제어 버튼을 제공 */
      						pauseButton.setOnClickListener(v -> {
      							// 슬라이드쇼 일시 정지 로직
      							imageView.clearAnimation();
      						});

      						playButton.setOnClickListener(v -> {
      							// 슬라이드쇼 재생 로직
      							Animation anim = new AlphaAnimation(0.0f, 1.0f);
      							anim.setDuration(2000); // 2초 간격으로 슬라이드 변경
      							anim.setRepeatCount(Animation.INFINITE);
      							imageView.startAnimation(anim);
      						});`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">하이브리드 앱 예시 (HTML/JavaScript)</h4>
      				<p className="mt_s">
      					자동 슬라이드쇼 제어 하이브리드 앱 예시
      				</p>
      				
      <CodeBlock title="움직임 제어 - 하이브리드 앱 예시 (HTML/JavaScript)" language="javascript" className="uk_gist_code_box mt_ms">
      {`<div id="slideshow">
      							<img id="slideImage" src="image1.jpg" alt="슬라이드 이미지">
      						</div>
      						<div class="controls">
      							<button id="pauseButton" type="button">일시 정지</button>
      							<button id="playButton" type="button">재생</button>
      						</div>
      						<script>
      							let slideshowInterval;

      							function startSlideshow() {
      								slideshowInterval = setInterval(function() {
      									const slideImage = document.getElementById('slideImage');
      									slideImage.src = slideImage.src === 'image1.jpg' ? 'image2.jpg' : 'image1.jpg';
      								}, 2000);
      							}

      							document.getElementById('pauseButton').addEventListener('click', function() {
      								clearInterval(slideshowInterval);
      							});

      							document.getElementById('playButton').addEventListener('click', function() {
      								startSlideshow();
      							});

      							startSlideshow();
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">하이브리드(잘못된 / 올바른 예시)</h4>
      				
      <CodeBlock title="움직임 제어 - 하이브리드(잘못된 / 올바른 예시)" language="javascript" className="uk_gist_code_box mt_m">
      {`<!-- 잘못된 예시 (하이브리드) - 사용자가 정지할 수 없는 자동 슬라이드쇼 -->
      						<script>
      							setInterval(function() {
      								const slideImage = document.getElementById('slideImage');
      								slideImage.src = slideImage.src === 'image1.jpg' ? 'image2.jpg' : 'image1.jpg';
      							}, 2000);
      						</script>

      						<!-- 올바른 예시 (하이브리드) - 사용자가 슬라이드쇼를 정지하거나 다시 시작할 수 있도록 제어 버튼을 제공 -->
      						<script>
      							document.getElementById('pauseButton').addEventListener('click', function() {
      								clearInterval(slideshowInterval);
      							});

      							document.getElementById('playButton').addEventListener('click', function() {
      								startSlideshow();
      							});
      						</script>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">검수 방법</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>자동으로 변경되거나 움직이는 모든 콘텐츠가 사용자 제어 기능을 제공하는지 확인하였는가?</li>
      				<li>실제 사용자들이 자동 콘텐츠를 제어할 수 있는지, 제어 버튼이 명확하고 사용하기 쉬운지를 테스트하였는가?</li>
      				<li>Google Accessibility Scanner와 같은 접근성 검사 도구를 사용하여 자동 콘텐츠 제어 기능이 올바르게 작동하는지 확인하였는가?</li>
      			</ul>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">깜빡임과 번쩍임 [유지]</h2>
      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p><b className="t_black">깜빡임/번쩍임 콘텐츠는 제공하지 않거나 회피·중지 수단을 제공해야 합니다.</b></p>
      			<p className="reference mt_ms">WCAG 2.2 Guidelines : <a href="https://www.w3.org/TR/WCAG22/#three-flashes-or-below-threshold" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">2.3.1 Three Flashes or Below Threshold</a></p>
      		</blockquote>
      		<article className="mt_xl indent"><h3 className="ml_mn">필요성</h3><ul className="mt_m dot_lst gap-column-important-sm"><li>광과민성 발작 위험과 시각적 피로를 줄입니다.</li></ul></article>
      		<article className="mt_xl indent"><h3 className="ml_mn">제공 방법</h3><ul className="mt_m dot_lst gap-column-important-sm"><li>초당 3회 초과 깜빡임을 피하고, 필요 시 정지 버튼을 제공합니다.</li></ul></article>
      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>
      			<div className="mt_ml indent"><h4 className="ml_mn">하이브리드 앱 예시 (HTML)</h4>
      <CodeBlock title="깜빡임과 번쩍임 - 하이브리드 앱 예시" language="javascript" className="uk_gist_code_box mt_ms">
      {`<div id="banner" class="flash">긴급 공지</div>
      <button type="button" id="pauseAnim">애니메이션 정지</button>
      <script>
      	const banner = document.getElementById('banner');
      	document.getElementById('pauseAnim').addEventListener('click', () => {
      		banner.classList.remove('flash');
      	});
      </script>`}
      </CodeBlock>
      </div>
      			<div className="mt_l indent"><h4 className="ml_mn">Vue 예시</h4>
      <CodeBlock title="깜빡임과 번쩍임 - Vue 예시" language="javascript" className="uk_gist_code_box mt_ms">
      {`<button @click="isFlashing = false">애니메이션 정지</button>`}
      </CodeBlock>
      </div>
      			<div className="mt_l indent"><h4 className="ml_mn">React 예시</h4>
      <CodeBlock title="깜빡임과 번쩍임 - React 예시" language="javascript" className="uk_gist_code_box mt_ms">
      {`<button onClick={() => setFlashing(false)}>애니메이션 정지</button>`}
      </CodeBlock>
      </div>
      		</article>
      		<article className="mt_xl indent"><h3 className="ml_mn t_blue">검수 방법</h3><ul className="mt_m dot_lst gap-column-important-sm"><li>깜빡임 콘텐츠에 회피/중지 수단이 있는지 확인하였는가?</li></ul></article>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">제목 [신규]</h2>
      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p><b className="t_black">페이지/화면/영역의 제목은 내용을 대표하도록 제공해야 합니다.</b></p>
      			<p className="reference mt_ms">WCAG 2.2 Guidelines : <a href="https://www.w3.org/TR/WCAG22/#page-titled" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">2.4.2 Page Titled</a></p>
      		</blockquote>
      		<article className="mt_xl indent"><h3 className="ml_mn">필요성</h3><ul className="mt_m dot_lst gap-column-important-sm"><li>사용자가 현재 위치와 목적을 빠르게 파악할 수 있습니다.</li></ul></article>
      		<article className="mt_xl indent"><h3 className="ml_mn">제공 방법</h3><ul className="mt_m dot_lst gap-column-important-sm"><li>각 화면에 고유하고 의미 있는 제목을 제공합니다.</li></ul></article>
      		<article className="mt_xl indent"><h3 className="ml_mn t_blue code_title">예시</h3><div className="mt_ml indent"><h4 className="ml_mn">하이브리드 앱 예시 (HTML)</h4>
      <CodeBlock title="제목 - 하이브리드 앱 예시" language="javascript" className="uk_gist_code_box mt_ms">
      {`<!-- 잘못된 예시: 제목이 모호함 -->
      <title>페이지</title>

      <!-- 올바른 예시: 화면 목적이 드러남 -->
      <title>주문 내역 | 마이페이지</title>`}
      </CodeBlock>
      </div><div className="mt_l indent"><h4 className="ml_mn">Vue 예시</h4>
      <CodeBlock title="제목 - Vue 예시" language="javascript" className="uk_gist_code_box mt_ms">
      {`useHead({ title: '주문 내역 | 마이페이지' })`}
      </CodeBlock>
      </div><div className="mt_l indent"><h4 className="ml_mn">React 예시</h4>
      <CodeBlock title="제목 - React 예시" language="javascript" className="uk_gist_code_box mt_ms">
      {`document.title = '주문 내역 | 마이페이지';`}
      </CodeBlock>
      </div></article>
      		<article className="mt_xl indent"><h3 className="ml_mn t_blue">검수 방법</h3><ul className="mt_m dot_lst gap-column-important-sm"><li>각 화면 제목이 중복 없이 목적을 설명하는지 확인하였는가?</li></ul></article>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">링크 텍스트 [신규]</h2>
      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p><b className="t_black">링크 텍스트만으로 이동 목적을 이해할 수 있어야 합니다.</b></p>
      			<p className="reference mt_ms">WCAG 2.2 Guidelines : <a href="https://www.w3.org/TR/WCAG22/#link-purpose-in-context" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">2.4.4 Link Purpose (In Context)</a></p>
      		</blockquote>
      		<article className="mt_xl indent"><h3 className="ml_mn">필요성</h3><ul className="mt_m dot_lst gap-column-important-sm"><li>보조기술 사용자가 링크 목록에서 목적을 판단할 수 있습니다.</li></ul></article>
      		<article className="mt_xl indent"><h3 className="ml_mn">제공 방법</h3><ul className="mt_m dot_lst gap-column-important-sm"><li>“여기” 대신 “주문 상세 보기”처럼 목적 중심 텍스트를 사용합니다.</li></ul></article>
      		<article className="mt_xl indent"><h3 className="ml_mn t_blue code_title">예시</h3><div className="mt_ml indent"><h4 className="ml_mn">하이브리드 앱 예시 (HTML)</h4>
      <CodeBlock title="링크 텍스트 - 하이브리드 앱 예시" language="javascript" className="uk_gist_code_box mt_ms">
      {`<!-- 잘못된 예시 -->
      <a href="/orders/123">여기</a>

      <!-- 올바른 예시 -->
      <a href="/orders/123">주문 123 상세 보기</a>`}
      </CodeBlock>
      </div><div className="mt_l indent"><h4 className="ml_mn">Vue 예시</h4>
      <CodeBlock title="링크 텍스트 - Vue 예시" language="javascript" className="uk_gist_code_box mt_ms">
      {`<RouterLink to="/orders/123">주문 123 상세 보기</RouterLink>`}
      </CodeBlock>
      </div><div className="mt_l indent"><h4 className="ml_mn">React 예시</h4>
      <CodeBlock title="링크 텍스트 - React 예시" language="javascript" className="uk_gist_code_box mt_ms">
      {`<Link to="/orders/123">주문 123 상세 보기</Link>`}
      </CodeBlock>
      </div></article>
      		<article className="mt_xl indent"><h3 className="ml_mn t_blue">검수 방법</h3><ul className="mt_m dot_lst gap-column-important-sm"><li>모든 링크의 목적을 링크 문구만으로 이해 가능한지 확인하였는가?</li></ul></article>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">다양한 탐색 방법 [신규]</h2>
      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p><b className="t_black">콘텐츠를 찾는 방법을 두 가지 이상 제공해야 합니다.</b></p>
      			<p className="reference mt_ms">WCAG 2.2 Guidelines : <a href="https://www.w3.org/TR/WCAG22/#multiple-ways" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">2.4.5 Multiple Ways</a></p>
      		</blockquote>
      		<article className="mt_xl indent"><h3 className="ml_mn">필요성</h3><ul className="mt_m dot_lst gap-column-important-sm"><li>사용자 특성에 맞는 탐색 경로를 선택할 수 있습니다.</li></ul></article>
      		<article className="mt_xl indent"><h3 className="ml_mn">제공 방법</h3><ul className="mt_m dot_lst gap-column-important-sm"><li>메뉴 + 검색, 카테고리 + 최근 본 항목 등 복수 방법을 제공합니다.</li></ul></article>
      		<article className="mt_xl indent"><h3 className="ml_mn t_blue code_title">예시</h3><div className="mt_ml indent"><h4 className="ml_mn">하이브리드 앱 예시 (HTML)</h4>
      <CodeBlock title="다양한 탐색 방법 - 하이브리드 앱 예시" language="javascript" className="uk_gist_code_box mt_ms">
      {`<nav aria-label="주요 메뉴">
      	<a href="/products">카테고리</a>
      	<a href="/mypage">마이페이지</a>
      </nav>
      <form role="search">
      	<label for="q">검색</label>
      	<input id="q" name="q" />
      </form>`}
      </CodeBlock>
      </div><div className="mt_l indent"><h4 className="ml_mn">Vue 예시</h4>
      <CodeBlock title="다양한 탐색 방법 - Vue 예시" language="javascript" className="uk_gist_code_box mt_ms">
      {`<RouterLink to="/products">카테고리</RouterLink>
      <input v-model="query" aria-label="검색" />`}
      </CodeBlock>
      </div><div className="mt_l indent"><h4 className="ml_mn">React 예시</h4>
      <CodeBlock title="다양한 탐색 방법 - React 예시" language="javascript" className="uk_gist_code_box mt_ms">
      {`<Link to="/products">카테고리</Link>
      <input value={query} onChange={onChangeQuery} aria-label="검색" />`}
      </CodeBlock>
      </div></article>
      		<article className="mt_xl indent"><h3 className="ml_mn t_blue">검수 방법</h3><ul className="mt_m dot_lst gap-column-important-sm"><li>동일 콘텐츠로 가는 탐색 수단을 2가지 이상 제공하는지 확인하였는가?</li></ul></article>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">단일 포인터 입력 [유지]</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<b className="t_black">다중 포인트 동작 또는 경로기반 동작을 통한 입력은 단일 포인터 입력으로도 조작할 수 있어야 합니다.</b><br />
      				스와이프·핀치 등 복잡한 제스처만으로만 기능에 접근하면, 한 손 조작·보조 입력·떨림 등으로 어려움을 겪는 사용자가 배제될 수 있습니다.
      				단일 탭·클릭 등으로 동등하게 조작할 수 있는 대안을 제공합니다.
      			</p>
      			<p className="reference mt_ms">
      				WCAG 2.2 Guidelines :
      				<a href="https://www.w3.org/TR/WCAG22/#pointer-gestures" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">2.5.1 Pointer Gestures</a><br />
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">필요성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-ms">
      				<li>
      					<strong className="t_black">터치스크린 사용자를 위한 접근성</strong>
      					<p>
      						모바일 기기를 사용하는 대부분의 사용자들이 터치스크린을 통해 앱을 조작하기 때문에, 모든 기능은 누르기 동작으로 접근 가능해야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong className="t_black">직관적 조작</strong>
      					<p>
      						다양한 사용자가 컨트롤을 직관적으로 사용할 수 있도록 해 앱 사용 경험을 개선합니다.
      					</p>
      				</li>
      				<li>
      					<strong className="t_black">보조 기기 사용자 고려</strong>
      					<p>
      						터치 외에 스위치, 스타일러스 등 다른 입력 장치를 사용하는 사용자들도 있습니다. 이러한 장치들도 기본적으로 누르기 동작을 지원해야 합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">제공 방법</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-ms">
      				<li>
      					<strong className="t_black ">모든 인터랙티브 요소의 터치 가능성 보장</strong>
      					<ul className="dot_lst dot_lst_inner gap-column-sm">
      						<li>
      							버튼, 링크, 메뉴 항목 등 모든 상호작용 가능한 요소는 터치로 쉽게 누를 수 있어야 합니다.
      						</li>
      						<li>
      							예: 작은 터치 영역은 확대하거나 요소 간 충분한 간격을 두어 실수로 누르는 것을 방지합니다.
      						</li>
      					</ul>
      				</li>
      				<li>
      					<strong className="t_black ">표준 터치 제스처 사용</strong>
      					<ul className="dot_lst dot_lst_inner gap-column-sm">
      						<li>
      							사용자들이 익숙한 터치 제스처(단일 탭, 더블 탭 등)를 사용하여 조작할 수 있도록 합니다.
      						</li>
      						<li>
      							예: 커스텀 제스처를 사용하는 경우, 그 사용 방법을 명확하게 안내해야 합니다.
      						</li>
      					</ul>
      				</li>
      				<li>
      					<strong className="t_black ">시각적 피드백 제공</strong>
      					<ul className="dot_lst dot_lst_inner gap-column-sm">
      						<li>
      							사용자가 터치했을 때 즉각적인 시각적 피드백을 제공하여 동작이 인식되었음을 알려줍니다.
      						</li>
      						<li>
      							예: 버튼을 터치했을 때 색상이 변하거나 눌린 효과가 나타나는 등의 즉각적인 시각적 피드백을 제공합니다.
      						</li>
      					</ul>
      				</li>
      				<li>
      					<strong className="t_black ">중복된 제어 방식 제공</strong>
      					<ul className="dot_lst dot_lst_inner gap-column-sm">
      						<li>
      							제스처만으로 접근할 수 있는 기능에는 누르기 동작을 통한 대체 접근 방법을 제공합니다.
      						</li>
      						<li>
      							예: 스와이프 제스처로만 열 수 있는 메뉴는 누르기 동작을 통해서도 열 수 있도록 추가 버튼을 제공합니다.
      						</li>
      					</ul>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">네이티브 앱 예시(Android)</h4>
      				
      <CodeBlock title="단일 포인터 입력 - 네이티브 앱 예시(Android)" language="javascript" className="uk_gist_code_box mt_ms">
      {`<!-- 터치 가능한 버튼 (네이티브) -->
      						<Button
      							android:id="@+id/submitButton"
      							android:layout_width="wrap_content"
      							android:layout_height="wrap_content"
      							android:text="제출"
      							android:contentDescription="제출 버튼" />

      						<!-- 시각적 피드백 적용 (네이티브) -->
      						<Button
      							android:id="@+id/submitButton"
      							android:layout_width="wrap_content"
      							android:layout_height="wrap_content"
      							android:text="제출"
      							android:background="?android:attr/selectableItemBackground" />

      						<!-- 터치 영역 확대 (네이티브) -->
      						<Button
      							android:id="@+id/smallButton"
      							android:layout_width="64dp"
      							android:layout_height="64dp"
      							android:text="작은 버튼"
      							android:padding="16dp" />`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">하이브리드 앱 예시 (HTML/JavaScript)</h4>
      				<p className="mt_s">
      					버튼을 클릭해서 시각적인 변화를 확인하세요.
      				</p>
      				<div className="view_editor edit_code mt_ms">
      <Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="a11y/06-a11yCheck/6.2.2.2.Pointer_Gestures.html" className="uk_editor min_height_300 mb_result_height_200" mode="htmlmixed" theme="ayu-mirage" browser="default" result minHeight="300px" mbResultHeight="200px" />
      </Suspense>
      </div>
      			</div>
      			
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">검수 방법</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>(네이티브) Android Studio나 Xcode를 통해 앱을 실제 디바이스에서 테스트하여 터치가 제대로 인식되는지 확인하였는가?</li>
      				<li>(하이브리드) React Native 앱을 에뮬레이터나 실제 디바이스에서 테스트하여 모든 터치 인터랙션이 예상대로 동작하는지 확인하였는가?</li>
      				<li>스타일러스, 기타 입력 장치를 사용하여 앱을 테스트하고, 터치 가능한 모든 요소가 제대로 작동하는지 확인하였는가?</li>
      				<li>터치 동작 시 시각적 피드백(예: 색상 변화, 투명도 변화 등)이 있는지 확인하였는가?</li>
      				<li>Axe, WAVE, Google Accessibility Scanner 또는 React Native용 접근성 검사 도구를 사용하여 앱의 접근성을 확인하였는가?</li>
      			</ul>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">포인터 입력 취소 [신규]</h2>
      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p><b className="t_black">포인터 입력으로 실행되는 동작은 취소/되돌리기 수단을 제공해야 합니다.</b></p>
      			<p className="reference mt_ms">WCAG 2.2 Guidelines : <a href="https://www.w3.org/TR/WCAG22/#pointer-cancellation" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">2.5.2 Pointer Cancellation</a></p>
      		</blockquote>
      		<article className="mt_xl indent"><h3 className="ml_mn">필요성</h3><ul className="mt_m dot_lst gap-column-important-sm"><li>오탭/오클릭으로 인한 실수를 줄입니다.</li></ul></article>
      		<article className="mt_xl indent"><h3 className="ml_mn">제공 방법</h3><ul className="mt_m dot_lst gap-column-important-sm"><li>업 이벤트에서 확정하거나 실행 후 되돌리기(Undo)를 제공합니다.</li></ul></article>
      		<article className="mt_xl indent"><h3 className="ml_mn t_blue code_title">예시</h3><div className="mt_ml indent"><h4 className="ml_mn">하이브리드 앱 예시 (JavaScript)</h4>
      <CodeBlock title="포인터 입력 취소 - 하이브리드 앱 예시" language="javascript" className="uk_gist_code_box mt_ms">
      {`deleteButton.addEventListener('click', () => {
      	deleteItem();
      	showUndoToast('삭제되었습니다.', () => restoreItem());
      });`}
      </CodeBlock>
      </div><div className="mt_l indent"><h4 className="ml_mn">Vue 예시</h4>
      <CodeBlock title="포인터 입력 취소 - Vue 예시" language="javascript" className="uk_gist_code_box mt_ms">
      {`<button @click="removeWithUndo">삭제</button>`}
      </CodeBlock>
      </div><div className="mt_l indent"><h4 className="ml_mn">React 예시</h4>
      <CodeBlock title="포인터 입력 취소 - React 예시" language="javascript" className="uk_gist_code_box mt_ms">
      {`<button onClick={removeWithUndo}>삭제</button>`}
      </CodeBlock>
      </div></article>
      		<article className="mt_xl indent"><h3 className="ml_mn t_blue">검수 방법</h3><ul className="mt_m dot_lst gap-column-important-sm"><li>실행 취소 또는 확인 단계가 제공되는지 확인하였는가?</li></ul></article>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">네임 안의 레이블 [신규]</h2>
      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p><b className="t_black">시각적 레이블이 있는 요소의 접근 가능한 이름에는 해당 레이블 텍스트가 포함되어야 합니다.</b></p>
      			<p className="reference mt_ms">WCAG 2.2 Guidelines : <a href="https://www.w3.org/TR/WCAG22/#label-in-name" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">2.5.3 Label in Name</a></p>
      		</blockquote>
      		<article className="mt_xl indent"><h3 className="ml_mn">필요성</h3><ul className="mt_m dot_lst gap-column-important-sm"><li>음성 명령 사용자가 보이는 레이블로 정확히 조작할 수 있습니다.</li></ul></article>
      		<article className="mt_xl indent"><h3 className="ml_mn">제공 방법</h3><ul className="mt_m dot_lst gap-column-important-sm"><li>화면 텍스트와 접근성 이름을 일치 또는 포함 관계로 제공합니다.</li></ul></article>
      		<article className="mt_xl indent"><h3 className="ml_mn t_blue code_title">예시</h3><div className="mt_ml indent"><h4 className="ml_mn">하이브리드 앱 예시 (HTML)</h4>
      <CodeBlock title="네임 안의 레이블 - 하이브리드 앱 예시" language="javascript" className="uk_gist_code_box mt_ms">
      {`<!-- 잘못된 예시: 시각 레이블(검색)과 접근 가능한 이름이 다름 -->
      <button aria-label="조회 실행">검색</button>

      <!-- 올바른 예시: 접근 가능한 이름에 시각 레이블 텍스트 포함 -->
      <button aria-label="검색 실행">검색</button>`}
      </CodeBlock>
      </div><div className="mt_l indent"><h4 className="ml_mn">Vue 예시</h4>
      <CodeBlock title="네임 안의 레이블 - Vue 예시" language="javascript" className="uk_gist_code_box mt_ms">
      {`<button aria-label="검색 실행">검색</button>`}
      </CodeBlock>
      </div><div className="mt_l indent"><h4 className="ml_mn">React 예시</h4>
      <CodeBlock title="네임 안의 레이블 - React 예시" language="javascript" className="uk_gist_code_box mt_ms">
      {`<button aria-label="검색 실행">검색</button>`}
      </CodeBlock>
      </div></article>
      		<article className="mt_xl indent"><h3 className="ml_mn t_blue">검수 방법</h3><ul className="mt_m dot_lst gap-column-important-sm"><li>시각적 레이블 문구가 접근 가능한 이름에 포함되는지 확인하였는가?</li></ul></article>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">동작기반 작동 [신규]</h2>
      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p><b className="t_black">기기 흔들기·기울이기 등 동작 기반 기능은 UI 대체 수단을 제공해야 합니다.</b></p>
      			<p className="reference mt_ms">WCAG 2.2 Guidelines : <a href="https://www.w3.org/TR/WCAG22/#motion-actuation" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">2.5.4 Motion Actuation</a></p>
      		</blockquote>
      		<article className="mt_xl indent"><h3 className="ml_mn">필요성</h3><ul className="mt_m dot_lst gap-column-important-sm"><li>모션 사용이 어려운 사용자도 동일 기능을 사용할 수 있습니다.</li></ul></article>
      		<article className="mt_xl indent"><h3 className="ml_mn">제공 방법</h3><ul className="mt_m dot_lst gap-column-important-sm"><li>같은 기능을 버튼/토글로 제공하고 모션 트리거를 비활성화 가능하게 합니다.</li></ul></article>
      		<article className="mt_xl indent"><h3 className="ml_mn t_blue code_title">예시</h3><div className="mt_ml indent"><h4 className="ml_mn">하이브리드 앱 예시 (HTML)</h4>
      <CodeBlock title="동작기반 작동 - 하이브리드 앱 예시" language="javascript" className="uk_gist_code_box mt_ms">
      {`<!-- 흔들기(모션) 기능과 동일한 기능을 버튼으로 제공 -->
      <button type="button" id="undoBtn">실행 취소</button>
      <script>
      	document.getElementById('undoBtn').addEventListener('click', undoLastAction);
      </script>`}
      </CodeBlock>
      </div><div className="mt_l indent"><h4 className="ml_mn">Vue 예시</h4>
      <CodeBlock title="동작기반 작동 - Vue 예시" language="javascript" className="uk_gist_code_box mt_ms">
      {`<button @click="undoLastAction">실행 취소</button>`}
      </CodeBlock>
      </div><div className="mt_l indent"><h4 className="ml_mn">React 예시</h4>
      <CodeBlock title="동작기반 작동 - React 예시" language="javascript" className="uk_gist_code_box mt_ms">
      {`<button onClick={undoLastAction}>실행 취소</button>`}
      </CodeBlock>
      </div></article>
      		<article className="mt_xl indent"><h3 className="ml_mn t_blue">검수 방법</h3><ul className="mt_m dot_lst gap-column-important-sm"><li>모션 없이 동일 기능을 수행할 수 있는 대체 UI가 있는지 확인하였는가?</li></ul></article>
      	</section>
      	


      <hr />

      <section className="mt_xxl">
      	<h2 data-icon="pen">모바일 앱 접근성 요약 보고서</h2>
      	<p className="mt_ml indent">
      		모바일 앱 접근성 요약 보고서 예시로, 체크박스의 체크 여부가 저장되지 않습니다.
      	</p>
      	<div className="mt_m indent">
      		<div className="checkWcag_table">
      			<ul className="head">
      				<li className="guide" data-tit="검사항목(41개)">검사항목(41개)</li>
      				<li className="items">
      					<div className="item">
      						<p className="text">검사항목(41개)</p>
      						<p className="check">준수 여부</p>
      					</div>
      				</li>
      			</ul>
      			<div className="body">
      				<ul>
      					<li className="guide">
      						1. 텍스트 아닌 콘텐츠 [유지]<br />
      						(KS X 3253:2016 대체텍스트)
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">텍스트 아닌 콘텐츠는 그 의미나 용도를 인식할 수 있도록 대체 텍스트를 제공해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						2. 자막 또는 수어 [강화]<br />
      						(KS X 3253:2016 자막, 수화 등의 제공)
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">멀티미디어 콘텐츠는 자막 또는 수어를 제공해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						3. 화면해설 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">멀티미디어 콘텐츠에서 음성 정보가 없는 시각 정보는 인식할 수 있도록 화면해설을 제공해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						4. 표의 구성 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">표는 이해하기 쉽게 구성해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						5. 콘텐츠의 선형구조 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">콘텐츠는 논리적인 순서로 제공해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						6. 다양한 감각 지원 [통합]<br />
      						(KS X 3253:2016 명확한 지시사항)
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">지시사항이나 알림정보 등은 모양, 크기, 위치, 방향, 색, 소리 등에 관계없이 다양한 감각으로 인식할 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						7. 방향 설정 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">콘텐츠는 특정 화면 방향으로만 고정하지 않아야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						8. 입력 목적 식별 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">입력 서식의 목적은 식별할 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						9. 색에 무관한 콘텐츠 [유지]<br />
      						(KS X 3253:2016 색에 무관한 인식)
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">콘텐츠는 색에 관계없이 인식할 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						10. 소리 자동 재생 [유지]<br />
      						(KS X 3253:2016 자동재생 금지)
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">소리는 자동으로 재생되지 않아야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						11. 콘텐츠의 명도대비 [강화]<br />
      						(KS X 3253:2016 명도대비)
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">콘텐츠와 배경 간의 명도는 충분하게 대비되도록 제공해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						12. 콘텐츠 간의 구분 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">이웃한 콘텐츠는 시각적으로 구별할 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						13. 텍스트 크기 조정 [강화]<br />
      						(KS X 3253:2016 폰트기능의 활용)
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">텍스트는 내용이나 기능의 손실 없이 200%까지 크기 조정이 가능해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						14. 이미지 텍스트 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">텍스트는 이미지로 제공하지 않아야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						15. 리플로우 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">콘텐츠는 화면 크기에 따라 손실 없이 표시되어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						16. 텍스트 간격 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">텍스트는 내용과 기능의 손실 없이 간격을 조정할 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						17. 초점 이동과 표시 [유지]<br />
      						(KS X 3253:2016 초점)
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">의미나 기능을 갖는 모든 콘텐츠 요소는 초점이 적용되고, 초점은 논리적인 순서로 이동해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						18. 조작 가능한 크기 [현행화]<br />
      						(KS X 3253:2016 컨트롤의 크기와 간격)
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">사용자 입력 및 컨트롤은 조작 가능한 충분한 크기로 제공해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						19. 단일 문자 단축키 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">단일 문자 단축키는 오동작으로 인한 오류를 방지해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						20. 응답시간 조절 [유지]<br />
      						(KS X 3253:2016 응답 시간 조절)
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">시간제한이 있는 콘텐츠는 응답시간을 조절할 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						21. 움직임 제어 [유지]<br />
      						(KS X 3253:2016 정지 기능 제공)
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">자동으로 변경되는 콘텐츠는 움직임을 제어할 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						22. 깜빡임과 번쩍임 [유지]<br />
      						(KS X 3253:2016 깜박거림의 사용 제한)
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">초당 3~50회 주기로 깜빡이거나 번쩍이는 콘텐츠를 제공하지 않아야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						23. 제목 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">콘텐츠 블록에는 적절한 제목을 제공해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						24. 링크 텍스트 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">링크 텍스트는 용도나 목적을 이해할 수 있도록 제공해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						25. 다양한 탐색 방법 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">콘텐츠는 다양한 방법으로 탐색할 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						26. 단일 포인터 입력 [유지]<br />
      						(KS X 3253:2016 누르기 동작 지원)
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">다중 포인트 동작 또는 경로기반 동작을 통한 입력은 단일 포인터 입력으로도 조작할 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						27. 포인터 입력 취소 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">단일 포인터 입력으로 실행되는 기능은 취소할 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						28. 네임 안의 레이블 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">텍스트 또는 텍스트 이미지가 포함된 레이블이 있는 사용자 인터페이스 구성요소는 네임에 시각적으로 표시되는 해당 텍스트를 포함해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						29. 동작기반 작동 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">동작기반으로 작동하는 기능은 사용자 인터페이스 구성요소로 조작할 수 있고, 동작기반 기능을 비활성화할 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						30. 기본 언어 표시 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">주로 사용하는 언어는 명시해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						31. 부분 언어 표시 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">기본 언어와 구별되는 다른 언어는 해당 언어를 명시해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						32. 사용자 요구에 따른 실행 [유지]<br />
      						(KS X 3253:2016 예측가능성)
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">사용자가 의도하지 않은 기능은 자동적으로 실행되지 않아야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						33. 사용자 인터페이스 컴포넌트의 일관성 [강화]<br />
      						(KS X 3253:2016 사용자 인터페이스의 일관성)
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">사용자 인터페이스 컴포넌트는 일관성 있게 제공해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						34. 도움 정보 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">도움 정보가 제공되는 경우, 각 페이지에 동일한 순서로 접근할 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						35. 오류 정정 [분리]<br />
      						(KS X 3253:2016 입력도움)
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">입력 오류를 정정할 수 있는 방법을 제공해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						36. 레이블 [분리]<br />
      						(KS X 3253:2016 입력도움)
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">사용자 입력에는 대응하는 레이블을 제공해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						37. 오류 방지 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">중요한 정보가 제출되기 전 되돌리기 어려운 오류를 방지할 수 있는 수단을 제공해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						38. 반복 입력 정보 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">동일한 정보를 반복하여 입력하지 않도록 해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						39. 접근 가능한 인증 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">인증 과정은 인지 기능 테스트에만 의존해서는 안 된다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						40. 사용자 인터페이스 컴포넌트 [강화]<br />
      						(KS X 3253:2016 보조기술과의 호환성)
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">사용자 인터페이스 컴포넌트는 보조기술을 이용하여 사용할 수 있도록 해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						41. 상태 메시지 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">중요한 상태 메시지는 보조기술 사용자에게도 전달되어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				
      			</div>
      		</div>
      	</div>
      </section>

      <footer className="reference_box">
      	<strong className="tit">운용의 용이성 | 접근성 체크리스트(모바일 앱 접근성) - 모바일 앱 접근성 참조</strong>
      	<ul className="link_lst">
      		<li className="reference"><a href="https://www.w3.org/WAI/standards-guidelines/mobile/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C Mobile Accessibility at W3C</a></li>
      		<li className="reference"><a href="https://www.w3.org/TR/mobile-accessibility-mapping/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C Mobile Accessibility: How WCAG 2.0 and Other W3C/WAI Guidelines Apply to Mobile</a></li>
      		<li className="reference"><a href="https://www.w3.org/news/2015/first-public-working-draft-performance-timeline-level-2/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C First Public Working Draft</a></li>
      		<li className="reference"><a href="https://www.w3.org/TR/UAAG20/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C User Agent Accessibility Guidelines (UAAG) 2.0</a></li>
      		<li className="reference"><a href="https://www.w3.org/TR/IMPLEMENTING-UAAG20/mobile.html" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C Mobile Accessibility Examples from UAAG 2.0 Reference</a></li>
      		<li className="reference"><a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/Mobile_accessibility_checklist" target="_blank" rel="noreferrer" title="새창 열림" className="fas">MDN Mobile accessibility checklist</a></li>
      		<li className="reference"><a href="https://blog.naver.com/prologue/PrologueList.naver?blogId=mohw2016" target="_blank" rel="noreferrer" title="새창 열림" className="fas">보건복지부 블로그</a></li>
      	</ul>
      </footer>
    </>
  )
}

export default CheckMacagOperablePage
