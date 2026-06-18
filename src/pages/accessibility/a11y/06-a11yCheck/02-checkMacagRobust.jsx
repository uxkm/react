import { useAccessibilityPageMeta } from '@/hooks/useAccessibilityPageMeta.js'
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
  title: "견고성 | 접근성 체크리스트(모바일 앱 접근성)",
  description: "모바일 앱 접근성 체크리스트는 다양한 사용자들이 모바일 앱 콘텐츠를 문제 없이 이용할 수 있도록 보장하기 위해 설계된 필수 항목들을 제공합니다. 이 페이지에서는 모바일 앱 접근성 체크리스트의 견고성(Robust)에 대해 소개합니다.",
  keyword: "Accessibility, a11y, wcag, kwcag, macag, kiosk, 접근성, 웹 콘텐츠 접근성, 한국형 웹 콘텐츠 접근성, 모바일 앱 접근성, 무인정보단말기 접근성",
}

function CheckMacagRobustPage() {
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
      		<h2 className="ml_mn" data-conlist="false">사용자 인터페이스 컴포넌트 [강화]</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<b className="t_black">사용자 인터페이스 컴포넌트는 보조기술을 이용하여 사용할 수 있도록 해야 합니다.</b><br />
      				보조기술은 시각, 청각, 신체적 장애가 있는 사용자들이 컴퓨터와 모바일 기기를 사용할 수 있도록 도와주는 장치나 소프트웨어입니다.
      				UI 컴포넌트가 이러한 보조기술과 호환되도록 설계되면, 모든 사용자가 앱을 접근 가능하게 이용할 수 있습니다.<br />
      				이 호환성을 보장하기 위해, UI 컴포넌트에는 적절한 접근성 속성이 적용되어야 합니다.
      			</p>
      			<p className="reference mt_ms">
      				WCAG 2.2 Guidelines :
      				<a href="https://www.w3.org/TR/WCAG22/#keyboard" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">2.1.1 Keyboard</a><br />
      				WCAG 2.2 Guidelines :
      				<a href="https://www.w3.org/TR/WCAG22/#name-role-value" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">4.1.2 Name, Role, Value</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">필요성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-ms">
      				<li>
      					<strong className="t_black">접근성 보장</strong>
      					<p>
      						시각, 청각, 신체적 장애를 가진 사용자들이 보조기술을 통해 앱을 원활하게 사용할 수 있도록 보장해야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong className="t_black">법적 요구사항 준수</strong>
      					<p>
      						많은 국가에서는 웹 및 모바일 앱의 접근성을 보장하는 법적 요구사항이 있으며, 이를 준수하면 법적 문제를 피할 수 있습니다.
      					</p>
      				</li>
      				<li>
      					<strong className="t_black">포용적 사용자 경험 제공</strong>
      					<p>
      						보조기술 사용자가 비장애인과 동일하게 앱의 모든 기능을 활용할 수 있어야 합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">제공 방법</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-ms">
      				<li>
      					<strong className="t_black ">적절한 접근성 속성 사용</strong>
      					<p>
      						UI 컴포넌트에는 <code>ARIA</code> 속성, <code>role</code> 속성, <code>label</code> 등을 사용하여 보조기술이 각 요소를 올바르게 인식하고 접근할 수 있도록 해야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong className="t_black ">포커스 관리</strong>
      					<p>
      						모든 인터랙티브 요소는 포커스를 받을 수 있어야 하며,
      						포커스는 논리적인 순서로 이동하도록 설정하여 사용자가 키보드나 보조기술을 통해 앱을 원활하게 탐색할 수 있도록 해야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong className="t_black ">텍스트 대체 제공</strong>
      					<p>
      						이미지, 버튼, 링크 등의 비텍스트 요소에 대해 스크린 리더가 읽을 수 있는 텍스트 대체(예: <code>alt</code> 텍스트, <code>aria-label</code> 등)를 제공하여 접근성을 높여야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong className="t_black ">동작 피드백 제공</strong>
      					<p>
      						사용자가 UI 컴포넌트와 상호작용할 때, 시각적 피드백과 함께 보조기술을 통한 피드백도 제공하여 현재 상태를 명확하게 전달해야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong className="t_black ">보조기술과의 테스트</strong>
      					<p>
      						앱이 주요 보조기술(스크린 리더, 음성 인식 소프트웨어 등)과 호환되는지 정기적으로 테스트하고, 발견된 문제를 신속하게 수정해야 합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">네이티브 앱 예시 (Android)</h4>
      				<p className="mt_s">
      					보조기술을 위한 접근성 속성 설정
      				</p>
      				
      <CodeBlock title="사용자 인터페이스 컴포넌트 - 네이티브 앱 예시" language="javascript" className="uk_gist_code_box mt_ms">
      {`<Button
      							android:id="@+id/submitButton"
      							android:layout_width="wrap_content"
      							android:layout_height="wrap_content"
      							android:text="제출"
      							android:contentDescription="폼 제출 버튼" // 스크린 리더에 의해 읽혀질 텍스트
      							android:importantForAccessibility="yes" />

      						Button submitButton = findViewById(R.id.submitButton); // 특정 동작에 대한 피드백 제공
      						submitButton.setOnClickListener(v -> {
      							submitButton.setContentDescription("폼이 제출되었습니다."); // 버튼 클릭 시 스크린 리더에 읽힐 메시지 설정
      							submitForm(); // 폼 제출 로직 수행
      						});`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">네이티브(잘못된 / 올바른 예시)</h4>
      				
      <CodeBlock title="사용자 인터페이스 컴포넌트 - 네이티브(O/X)" language="javascript" className="uk_gist_code_box mt_m">
      {`<!-- 잘못된 예시 (네이티브) - 버튼에 접근성 속성이 없어서 스크린 리더가 버튼의 역할을 알 수 없음 -->
      						<Button
      							android:id="@+id/submitButton"
      							android:layout_width="wrap_content"
      							android:layout_height="wrap_content"
      							android:text="제출" />

      						<!-- 올바른 예시 (네이티브) - 버튼에 contentDescription을 설정하여 스크린 리더가 버튼의 역할을 읽을 수 있도록 함 -->
      						<Button
      							android:id="@+id/submitButton"
      							android:layout_width="wrap_content"
      							android:layout_height="wrap_content"
      							android:text="제출"
      							android:contentDescription="폼 제출 버튼"
      							android:importantForAccessibility="yes" />`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">하이브리드 앱 예시 (HTML/JavaScript)</h4>
      				<p className="mt_s">
      					<code>ARIA</code> 속성을 사용하여 보조기술 호환성 보장
      				</p>
      				
      <CodeBlock title="사용자 인터페이스 컴포넌트 - 하이브리드 앱 예시" language="javascript" className="uk_gist_code_box mt_ms">
      {`<button id="submitButton" aria-label="폼 제출">제출</button>

      						<script>
      							document.getElementById('submitButton').addEventListener('click', function() {
      								this.setAttribute('aria-label', '폼이 제출되었습니다');// 폼 제출 후 상태를 업데이트하여 스크린 리더에 읽히도록 함
      							});
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">하이브리드(잘못된 / 올바른 예시)</h4>
      				
      <CodeBlock title="사용자 인터페이스 컴포넌트 - 하이브리드(O/X)" language="javascript" className="uk_gist_code_box mt_m">
      {`<!-- 잘못된 예시 (하이브리드) - 버튼에 aria-label이 없어서 스크린 리더가 버튼의 기능을 읽을 수 없음 -->
      						<button id="submitButton">제출</button>

      						<!-- 올바른 예시 (하이브리드) - aria-label 속성을 사용하여 보조기술이 버튼의 기능을 인식할 수 있도록 설정 -->
      						<button id="submitButton" aria-label="폼 제출">제출</button>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">검수 방법</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>스크린 리더(예: Android의 TalkBack, iOS의 VoiceOver)나 음성 인식 소프트웨어를 사용하여 앱을 테스트하고, 모든 UI 컴포넌트가 올바르게 인식되고 작동하는지 확인하였는가?</li>
      				<li>키보드나 보조기술을 통해 포커스를 이동시키며, 모든 인터랙티브 요소가 논리적 순서로 탐색되는지 확인하였는가?</li>
      				<li>Google Accessibility Scanner, WAVE 등의 도구를 사용하여 UI 컴포넌트의 접근성 문제를 점검하고 수정하였는가?</li>
      			</ul>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">상태 메시지 [신규]</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<b className="t_black">중요한 상태 메시지는 보조기술 사용자에게도 전달되어야 합니다.</b><br />
      				조회 결과, 폼 오류, 로딩 완료, 장바구니 변경 등 사용자에게 꼭 알려야 하는 상태 변화는
      				시각적 표시만으로 끝내지 않고, 스크린 리더 등 보조기술이 초점을 옮기지 않아도 인지할 수 있게 전달해야 합니다.
      			</p>
      			<p className="reference mt_ms">
      				WCAG 2.2 Guidelines :
      				<a href="https://www.w3.org/TR/WCAG22/#status-messages" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">4.1.3 Status Messages</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">필요성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-ms">
      				<li>
      					<strong className="t_black">동등한 피드백</strong>
      					<p>
      						시각적으로만 표시된 알림은 스크린 리더 사용자가 놓칠 수 있으므로, 보조기술로도 동일한 정보가 전달되어야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong className="t_black">맥락 유지</strong>
      					<p>
      						초점을 강제로 이동시키지 않고도 상태 변화를 알릴 수 있어, 입력 흐름이 끊기지 않습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">제공 방법</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-ms">
      				<li>
      					<strong className="t_black ">라이브 영역·역할 활용</strong>
      					<ul className="dot_lst dot_lst_inner gap-column-sm">
      						<li>
      							웹·하이브리드: <code>role=&quot;status&quot;</code>, <code>role=&quot;alert&quot;</code>, <code>aria-live=&quot;polite&quot;</code> 또는 <code>assertive</code> 등으로 영역을 지정합니다.
      						</li>
      						<li>
      							Android: <code>View.setAccessibilityLiveRegion()</code>, <code>AccessibilityEvent</code>, <code>announceForAccessibility</code> 등으로 변경 사실을 알립니다.
      						</li>
      						<li>
      							iOS: <code>UIAccessibility.post(notification: .announcement, argument:)</code> 등으로 중요 메시지를 읽히게 할 수 있습니다.
      						</li>
      					</ul>
      				</li>
      				<li>
      					<strong className="t_black ">의미 있는 문구</strong>
      					<p>
      						“성공”, “오류” 등 결과 유형이 드러나도록 짧고 명확한 문구를 쓰고, 장식용 아이콘만으로 상태를 대체하지 않습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">네이티브 앱 예시 (Android)</h4>
      				<p className="mt_s">
      					접근성 이벤트로 상태 알림
      				</p>
      				
      <CodeBlock title="상태 메시지 - 네이티브 앱 예시" language="javascript" className="uk_gist_code_box mt_ms">
      {`statusView.announceForAccessibility("저장이 완료되었습니다.");
      						// 또는 ViewCompat.setAccessibilityLiveRegion(view, ViewCompat.ACCESSIBILITY_LIVE_REGION_POLITE);`}
      </CodeBlock>

      			</div>

      			<div className="mt_l indent">
      				<h4 className="ml_mn">하이브리드 앱 예시 (HTML)</h4>
      				<p className="mt_s">
      					라이브 영역에 결과 메시지 표시
      				</p>
      				
      <CodeBlock title="상태 메시지 - 하이브리드 예시" language="javascript" className="uk_gist_code_box mt_ms">
      {`<div id="saveStatus" role="status" aria-live="polite" class="visually-hidden"></div>
      						<script>
      							document.getElementById('saveStatus').textContent = '저장이 완료되었습니다.';
      						</script>`}
      </CodeBlock>

      			</div>

      			<div className="mt_l indent">
      				<h4 className="ml_mn">하이브리드(잘못된 / 올바른 예시)</h4>
      				
      <CodeBlock title="상태 메시지 - 하이브리드(O/X)" language="javascript" className="uk_gist_code_box mt_m">
      {`<!-- 잘못된 예시: 시각적 토스트만 있고 보조기술에 전달되지 않음 -->
      						<div class="toast">저장됨</div>

      						<!-- 올바른 예시: role="status" 또는 aria-live로 동일 메시지 전달 -->
      						<div role="status" aria-live="polite">저장이 완료되었습니다.</div>`}
      </CodeBlock>

      			</div>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">검수 방법</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>스크린 리더를 켠 상태에서 폼 전송·검색·저장 등을 수행했을 때, 결과·오류·로딩 완료 등이 음성으로 안내되는가?</li>
      				<li>중요 알림이 시각적 배너만으로 끝나지 않고, 라이브 영역 또는 OS 접근성 API로도 전달되는가?</li>
      			</ul>
      		</article>
      		
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
      	<strong className="tit">견고성 | 접근성 체크리스트(모바일 앱 접근성) - 모바일 앱 접근성 참조</strong>
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

export default CheckMacagRobustPage
