import { useAccessibilityPageMeta } from '@/hooks/useAccessibilityPageMeta.js'

const PAGE_LAYOUT = {
  mainClass: "cagMacag",
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
  title: "모바일 앱 접근성 | 접근성 가이드라인",
  description: "모바일 앱 접근성은 장애인을 포함한 모든 사용자가 모바일 디바이스와 애플리케이션을 쉽게 사용할 수 있도록 보장하는 기준입니다. 이 페이지에서는 모바일 앱 접근성의 주요 측면과 체크리스트, 그리고 W3C 모바일 접근성 가이드라인을 소개합니다.",
  keyword: "Accessibility, a11y, wcag, kwcag, macag, kiosk, 접근성, 웹 콘텐츠 접근성, 한국형 웹 콘텐츠 접근성, 모바일 앱 접근성, 무인정보단밀기 접근성",
}

function MacagPage() {
  useAccessibilityPageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  })


  return (
    <>









      	<link href="/cagWcag.min.css" rel="stylesheet" />



      	<blockquote className="uk_note mt_xxl" role="note">
      		<strong className="sound_only">요약 설명</strong>
      		<p>
      			모바일 앱 접근성(이하 '<b className="t_black">MACAG</b>' - Mobile Application Content Accessibility Guidelines)은
      			모바일 디바이스와 애플리케이션을 사용할 때 모든 사람들이 정보와 기능에 접근할 수 있도록 하는 것을 의미하며,
      			터치스크린 사용, 소형 화면 크기, 다양한 입력 방식 등 모바일 특성을 고려한 접근성입니다.
      		</p>
      		<p className="mt_ms">
      			국내 행정안전부고시 제2011-38호에 따르면
      			<span className="el_block t_black weight-600 quote_text">
      				모바일 접근성 이란 모바일 기기를 사용하여 모바일 애플리케이션을 이용하고자 하는 장애인, 고령자 등을 포함한 모든 사람들에게 활용가능성이 제공됨을 말한다.
      			</span>
      			라고 정의하고 있습니다.
      		</p>
      		<p className="mt_ms">
      			국제 웹 접근성 이니셔티브는 모바일 접근성을 WCAG(Web Content Accessibility Guidelines)의 일환으로 다루고 있으며, 국내에서는 이러한 국제 기준에 맞춰 모바일 앱 접근성 지침을 마련하여 적용하고 있습니다.<br />
      			웹 콘텐츠 접근성 가이드라인(WCAG)과 마찬가지로, 모바일 애플리케이션 접근성도 장애인을 포함한 모든 사용자가 콘텐츠를 인지하고, 운용하며, 이해하고, 견고하게 제공받는 것을 중요하게 여깁니다.		</p>
      	</blockquote>

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">4.3.1. 모바일 앱 접근성 지침과 주요 측면</h2>

      		<p className="mt_l">
      			모바일 앱의 접근성을 향상시키기 위해 다양한 지침과 주요 측면을 고려할 필요가 있습니다.
      			이러한 지침은 장애가 있는 사용자들도 앱을 효과적으로 사용할 수 있도록 도와줍니다.<br />
      			모바일 앱의 접근성을 개선하기 위해서는 지침을 일관되게 적용하고, 사용자 피드백을 통해 지속적으로 조정 및 개선하는 것이 중요하며,
      			접근성을 고려한 설계는 모든 사용자가 앱을 보다 편리하게 사용할 수 있도록 하는 데 큰 도움이 됩니다.
      		</p>

      		<ul className="mt_l ol_lst info_lst gap-column-important-ml">
      			<li className="weight-600-before t_black_before">
      				<strong className="mb_0">시각적 접근성</strong>
      				<ul className="mt_s dot_lst info_lst gap-column-important-s">
      					<li>
      						<strong className="font-14-important mb_0">텍스트 대비</strong>
      						<p>텍스트와 배경 사이의 색상 대비를 충분히 높여 시각적으로 구분이 잘 되도록 합니다. 충분한 대비는 색맹 사용자와 시각 장애가 있는 사용자들에게 도움이 됩니다.</p>
      					</li>
      					<li>
      						<strong className="font-14-important mb_0">글꼴 크기 및 스타일</strong>
      						<p>사용자가 글꼴 크기를 조정할 수 있게 하고, 읽기 쉬운 글꼴을 사용합니다. 텍스트를 확대하거나 줄 간격을 조절할 수 있는 기능도 중요합니다.</p>
      					</li>
      					<li>
      						<strong className="font-14-important mb_0">이미지 대체 텍스트</strong>
      						<p>이미지에 대한 대체 텍스트(alt text)를 제공하여 스크린 리더가 이미지를 설명할 수 있도록 합니다.</p>
      					</li>
      				</ul>
      			</li>
      			

      			<li className="weight-600-before t_black_before">
      				<strong className="mb_0">청각적 접근성</strong>
      				<ul className="mt_s dot_lst info_lst gap-column-important-s">
      					<li>
      						<strong className="font-14-important mb_0">자막 및 오디오 설명</strong>
      						<p>비디오 및 오디오 콘텐츠에 자막을 제공하고, 중요한 시각적 요소에 대한 오디오 설명을 추가합니다.</p>
      					</li>
      					<li>
      						<strong className="font-14-important mb_0">시각적 알림</strong>
      						<p>청각 장애가 있는 사용자를 위해 소리 알림 외에 시각적 또는 진동 알림을 제공합니다.</p>
      					</li>
      				</ul>
      			</li>
      			

      			<li className="weight-600-before t_black_before">
      				<strong className="mb_0">상호작용 접근성</strong>
      				<ul className="mt_s dot_lst info_lst gap-column-important-s">
      					<li>
      						<strong className="font-14-important mb_0">터치 및 제스처</strong>
      						<p>터치 스크린의 버튼과 제스처 인식을 최적화하여 손의 사용이 어려운 사용자도 쉽게 조작할 수 있도록 합니다. 버튼 크기를 충분히 크게 하고, 제스처의 오작동을 방지합니다.</p>
      					</li>
      					<li>
      						<strong className="font-14-important mb_0">키보드 내비게이션</strong>
      						<p>앱의 모든 기능을 키보드 또는 대체 입력 장치로 접근할 수 있도록 합니다. 화면 읽기 도구와 호환되는지 확인합니다.</p>
      					</li>
      				</ul>
      			</li>
      			

      			<li className="weight-600-before t_black_before">
      				<strong className="mb_0">비주얼 디자인</strong>
      				<ul className="mt_s dot_lst info_lst gap-column-important-s">
      					<li>
      						<strong className="font-14-important mb_0">단순하고 일관된 디자인</strong>
      						<p>직관적인 사용자 인터페이스를 설계하여 사용자가 쉽게 탐색할 수 있도록 합니다. 일관된 디자인 패턴을 사용하여 학습 곡선을 줄입니다.</p>
      					</li>
      					<li>
      						<strong className="font-14-important mb_0">명확한 레이블과 안내</strong>
      						<p>버튼, 링크 및 입력 필드에 명확하고 설명적인 레이블을 붙입니다. 사용자에게 필요한 정보를 제공하여 오류를 줄입니다.</p>
      					</li>
      				</ul>
      			</li>
      			

      			<li className="weight-600-before t_black_before">
      				<strong className="mb_0">읽기 및 이해</strong>
      				<ul className="mt_s dot_lst info_lst gap-column-important-s">
      					<li>
      						<strong className="font-14-important mb_0">단순하고 명확한 언어</strong>
      						<p>직관적이고 간결한 언어를 사용하여 모든 사용자가 내용을 쉽게 이해할 수 있도록 합니다. 복잡한 용어와 문장을 피합니다.</p>
      					</li>
      					<li>
      						<strong className="font-14-important mb_0">구조적 요소</strong>
      						<p>헤더, 리스트, 표 등 구조적 요소를 사용하여 정보를 체계적으로 제공하고, 스크린 리더가 정보를 명확하게 해석할 수 있도록 합니다.</p>
      					</li>
      				</ul>
      			</li>
      			

      			<li className="weight-600-before t_black_before">
      				<strong className="mb_0">테스트 및 피드백</strong>
      				<ul className="mt_s dot_lst info_lst gap-column-important-s">
      					<li>
      						<strong className="font-14-important mb_0">접근성 테스트</strong>
      						<p>다양한 접근성 도구를 사용하여 앱의 접근성을 테스트하고, 실제 사용자로부터 피드백을 받습니다. 자동화된 접근성 검사 도구와 수동 테스트를 병행합니다.</p>
      					</li>
      					<li>
      						<strong className="font-14-important mb_0">사용자 피드백</strong>
      						<p>장애가 있는 사용자들로부터 직접 피드백을 받아, 앱의 접근성을 지속적으로 개선합니다.</p>
      					</li>
      				</ul>
      			</li>
      			

      			<li className="weight-600-before t_black_before">
      				<strong className="mb_0">국제화 및 지역화</strong>
      				<ul className="mt_s dot_lst info_lst gap-column-important-s">
      					<li>
      						<strong className="font-14-important mb_0">다국어 지원</strong>
      						<p>다양한 언어를 지원하여 국제적으로 사용 가능한 앱을 만듭니다. 언어 선택 시 접근성 표준을 따릅니다.</p>
      					</li>
      					<li>
      						<strong className="font-14-important mb_0">문화적 배경 고려</strong>
      						<p>지역에 따른 디자인 및 콘텐츠의 적절성을 고려하여 사용자가 편안하게 사용할 수 있도록 합니다.</p>
      					</li>
      				</ul>
      			</li>
      			
      		</ul>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">4.3.2. 모바일 앱 접근성 체크리스트</h2>

      		<p className="mt_l">
      			모바일 앱 접근성을 향상시키기 위한 체크리스트는 앱 개발 시 모든 사용자가 쉽게 접근하고 사용할 수 있도록
      			다양한 접근성 요소를 고려하는 데 도움을 줍니다.<br />
      			아래 체크리스트를 활용하면 모바일 앱의 접근성을 체계적으로 검토하고 개선할 수 있습니다.
      		</p>

      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue">4.3.2.1. 인식의 용이성(Perceivable)</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-ms">
      				<li className="weight-600-before">
      					<strong className="mb_0">텍스트 아닌 콘텐츠</strong>
      					<p>텍스트 아닌 콘텐츠(이미지·아이콘·버튼 등)의 의미·용도를 알 수 있도록 적절한 대체 텍스트를 제공했는가?</p>
      				</li>
      				<li className="weight-600-before">
      					<strong className="mb_0">자막 또는 수어</strong>
      					<p>영상·음성 콘텐츠에 동등한 내용의 자막·원고·수어 중 하나 이상을 제공했는가?</p>
      				</li>
      				<li className="weight-600-before">
      					<strong className="mb_0">화면해설</strong>
      					<p>음성 정보가 없는 시각 정보는 화면해설 또는 동등한 설명으로 인식 가능한가?</p>
      				</li>
      				<li className="weight-600-before">
      					<strong className="mb_0">표의 구성</strong>
      					<p>표의 제목, 열/행 제목, 헤더-데이터 관계가 이해 가능하도록 구성했는가?</p>
      				</li>
      				<li className="weight-600-before">
      					<strong className="mb_0">콘텐츠의 선형구조</strong>
      					<p>콘텐츠의 읽기 순서와 포커스 이동 순서가 논리적으로 일치하는가?</p>
      				</li>
      				<li className="weight-600-before">
      					<strong className="mb_0">다양한 감각 지원</strong>
      					<p>지시·알림이 색·위치·소리 등 한 가지 감각에만 의존하지 않도록 제공했는가?</p>
      				</li>
      				<li className="weight-600-before">
      					<strong className="mb_0">방향 설정</strong>
      					<p>콘텐츠를 특정 화면 방향으로만 고정하지 않고 가로/세로 모두에서 이용 가능한가?</p>
      				</li>
      				<li className="weight-600-before">
      					<strong className="mb_0">입력 목적 식별</strong>
      					<p>입력 항목의 목적(이름·이메일·전화번호 등)을 프로그램적으로 식별 가능하게 제공했는가?</p>
      				</li>
      				<li className="weight-600-before">
      					<strong className="mb_0">색에 무관한 콘텐츠</strong>
      					<p>정보가 색상만으로 전달되지 않으며 텍스트·아이콘 등 대체 단서를 함께 제공하는가?</p>
      				</li>
      				<li className="weight-600-before">
      					<strong className="mb_0">소리 자동 재생</strong>
      					<p>자동 재생 소리를 제공하지 않거나 즉시 정지·일시정지·음량 조절할 수 있는가?</p>
      				</li>
      				<li className="weight-600-before">
      					<strong className="mb_0">콘텐츠의 명도대비</strong>
      					<p>사용자 인터페이스 컴포넌트와 텍스트가 전경색·배경색 대비 3:1 이상을 충족하는가?</p>
      				</li>
      				<li className="weight-600-before">
      					<strong className="mb_0">콘텐츠 간의 구분</strong>
      					<p>이웃한 콘텐츠 영역이 경계·여백·대비 등으로 시각적으로 구별되는가?</p>
      				</li>
      				<li className="weight-600-before">
      					<strong className="mb_0">텍스트 크기 조정</strong>
      					<p>텍스트를 200%까지 확대해도 내용·기능 손실 없이 이용 가능한가?</p>
      				</li>
      				<li className="weight-600-before">
      					<strong className="mb_0">이미지 텍스트</strong>
      					<p>필수 정보 텍스트를 이미지로만 제공하지 않으며, 예외 시 동등한 텍스트를 함께 제공하는가?</p>
      				</li>
      				<li className="weight-600-before">
      					<strong className="mb_0">리플로우</strong>
      					<p>확대/작은 화면에서도 가로·세로 동시 스크롤 없이 정보 손실 없이 읽을 수 있는가?</p>
      				</li>
      				<li className="weight-600-before">
      					<strong className="mb_0">텍스트 간격</strong>
      					<p>줄·단락·자간·단어 간격 조정 시에도 콘텐츠와 기능이 유지되는가?</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue">4.3.2.2. 운용의 용이성(Operable)</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-ms">
      				<li className="weight-600-before">
      					<strong className="mb_0">초점 이동과 표시</strong>
      					<p>의미·기능이 있는 사용자 인터페이스 컴포넌트에 초점이 적용되고 논리적인 순서로 이동하며, 초점이 명확히 표시되는가?</p>
      				</li>
      				<li className="weight-600-before">
      					<strong className="mb_0">조작 가능한 크기</strong>
      					<p>컨트롤은 충분한 크기와 간격으로 제공되는가? 모바일 기기 화면 크기와 관계없이 가로·세로 각각 9mm 이상을 제공하는가?</p>
      				</li>
      				<li className="weight-600-before">
      					<strong className="mb_0">단일 문자 단축키</strong>
      					<p>단일 문자 단축키는 비활성화·재할당·조합키 전환 등 오입력 방지 수단을 제공하는가?</p>
      				</li>
      				<li className="weight-600-before">
      					<strong className="mb_0">응답시간 조절</strong>
      					<p>시간 제한이 있는 콘텐츠에서 제한시간 연장·해제·조절 수단 또는 사전·종료 안내를 제공하는가?</p>
      				</li>
      				<li className="weight-600-before">
      					<strong className="mb_0">움직임 제어</strong>
      					<p>자동으로 변경되는 콘텐츠를 일시정지·정지·탐색 등으로 제어할 수 있는가?</p>
      				</li>
      				<li className="weight-600-before">
      					<strong className="mb_0">깜빡임과 번쩍임</strong>
      					<p>초당 3~50회 주기의 깜빡임·번쩍임 콘텐츠를 제공하지 않거나 회피·중지 수단을 제공하는가?</p>
      				</li>
      				<li className="weight-600-before">
      					<strong className="mb_0">제목</strong>
      					<p>페이지·화면·주요 콘텐츠 블록에 내용을 대표하는 적절한 제목을 제공하는가?</p>
      				</li>
      				<li className="weight-600-before">
      					<strong className="mb_0">링크 텍스트</strong>
      					<p>링크 텍스트만으로도 이동 목적이나 용도를 이해할 수 있는가?</p>
      				</li>
      				<li className="weight-600-before">
      					<strong className="mb_0">다양한 탐색 방법</strong>
      					<p>메뉴·검색·내비게이션 등 두 가지 이상의 탐색 수단을 제공하는가?</p>
      				</li>
      				<li className="weight-600-before">
      					<strong className="mb_0">단일 포인터 입력</strong>
      					<p>다중 포인트, 경로 기반, 끌기 입력 등 복잡한 입력을 단일 포인터로도 수행할 수 있는가?</p>
      				</li>
      				<li className="weight-600-before">
      					<strong className="mb_0">포인터 입력 취소</strong>
      					<p>단일 포인터 입력으로 실행되는 기능의 오입력을 취소·중단·되돌릴 수 있는가?</p>
      				</li>
      				<li className="weight-600-before">
      					<strong className="mb_0">네임 안의 레이블</strong>
      					<p>시각적 레이블이 있는 UI 구성요소는 접근 가능한 이름(네임)에 해당 레이블 텍스트를 포함하는가?</p>
      				</li>
      				<li className="weight-600-before">
      					<strong className="mb_0">동작기반 작동</strong>
      					<p>흔들기·기울이기 등 동작기반 기능을 UI로 대체하거나 비활성화할 수 있는가?</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue">4.3.2.3. 이해의 용이성(Understandable)</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-ms">
      				<li className="weight-600-before">
      					<strong className="mb_0">기본 언어 표시</strong>
      					<p>주로 사용하는 언어는 명시해야 하는가?</p>
      				</li>
      				<li className="weight-600-before">
      					<strong className="mb_0">부분 언어 표시</strong>
      					<p>기본 언어와 구별되는 다른 언어는 해당 언어를 명시하는가?</p>
      				</li>
      				<li className="weight-600-before">
      					<strong className="mb_0">사용자 요구에 따른 실행</strong>
      					<p>사용자가 의도하지 않은 기능은 자동적으로 실행되지 않는가?</p>
      				</li>
      				<li className="weight-600-before">
      					<strong className="mb_0">사용자 인터페이스 컴포넌트의 일관성</strong>
      					<p>사용자 인터페이스 컴포넌트는 일관성 있게 제공하는가?</p>
      				</li>
      				<li className="weight-600-before">
      					<strong className="mb_0">도움 정보</strong>
      					<p>도움 정보가 제공되는 경우, 각 페이지에 동일한 순서로 접근할 수 있는가?</p>
      				</li>
      				<li className="weight-600-before">
      					<strong className="mb_0">오류 정정</strong>
      					<p>입력 오류를 정정할 수 있는 방법을 제공하는가?</p>
      				</li>
      				<li className="weight-600-before">
      					<strong className="mb_0">레이블</strong>
      					<p>사용자 입력에는 대응하는 레이블을 제공하는가?</p>
      				</li>
      				<li className="weight-600-before">
      					<strong className="mb_0">오류 방지</strong>
      					<p>중요한 정보가 제출되기 전 되돌리기 어려운 오류를 방지할 수 있는 수단을 제공하는가?</p>
      				</li>
      				<li className="weight-600-before">
      					<strong className="mb_0">반복 입력 정보</strong>
      					<p>동일한 정보를 반복하여 입력하지 않도록 하는가?</p>
      				</li>
      				<li className="weight-600-before">
      					<strong className="mb_0">접근 가능한 인증</strong>
      					<p>인증 과정은 인지 기능 테스트에만 의존하지 않는가?</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue">4.3.2.4. 견고성(Robust)</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-ms">
      				<li className="weight-600-before">
      					<strong className="mb_0">사용자 인터페이스 컴포넌트</strong>
      					<p>사용자 인터페이스 컴포넌트가 보조기술에서 조작·인지 가능하도록 이름(네임)·역할·값이 적절히 노출되는가?</p>
      				</li>
      				<li className="weight-600-before">
      					<strong className="mb_0">상태 메시지</strong>
      					<p>조회 결과·장바구니 수량 변경·로딩·폼 오류 등 중요한 상태 변화가 초점 이동 없이도 보조기술 사용자에게 전달되는가?</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue">4.3.2.5. 추가 고려 사항</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-ms">
      				<li className="weight-600-before">
      					<strong className="mb_0">사용자 피드백 수집</strong>
      					<p>접근성과 관련된 사용자 피드백을 정기적으로 수집하고 반영하는가?</p>
      				</li>
      				<li className="weight-600-before">
      					<strong className="mb_0">교육 및 훈련</strong>
      					<p>개발자와 디자이너에게 접근성 관련 교육을 제공하는가?</p>
      				</li>
      				<li className="weight-600-before">
      					<strong className="mb_0">지속적인 개선</strong>
      					<p>접근성 문제를 지속적으로 모니터링하고 개선하는 프로세스를 갖추고 있는가?</p>
      				</li>
      			</ul>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">4.3.3. 모바일 앱 접근성 항목별 체크리스트</h2>
      		<p className="mt_m">KS X 3253:2025(모바일 애플리케이션 콘텐츠 접근성 지침) 검사항목 41개 기준이며, KS X 3253:2016(구판) 참고 항목도 함께 포함합니다.</p>
      		<p className="mt_ms">신규 검사항목 23개, 기존 18개 검사항목 중 유지(9개), 현행화(1개), 분리(1개), 통합(2개), 강화(5개)</p>

      		

      		<ul className="mt_l ol_lst info_lst gap-column-important-m">
      			<li className="weight-600-before t_black_before">
      				<strong>텍스트 아닌 콘텐츠 [유지]</strong>
      				<p>텍스트 아닌 콘텐츠는 그 의미나 용도를 인식할 수 있도록 대체 텍스트를 제공해야 한다.</p>
      			</li>
      			<li className="weight-600-before t_black_before">
      				<strong>자막 또는 수어 [강화]</strong>
      				<p>멀티미디어 콘텐츠는 자막 또는 수어를 제공해야 한다.</p>
      			</li>
      			<li className="weight-600-before t_black_before">
      				<strong>화면해설 [신규]</strong>
      				<p>멀티미디어 콘텐츠에서 음성 정보가 없는 시각 정보는 인식할 수 있도록 화면해설을 제공해야 한다.</p>
      			</li>
      			<li className="weight-600-before t_black_before">
      				<strong>표의 구성 [신규]</strong>
      				<p>표는 이해하기 쉽게 구성해야 한다.</p>
      			</li>
      			<li className="weight-600-before t_black_before">
      				<strong>콘텐츠의 선형구조 [신규]</strong>
      				<p>콘텐츠는 논리적인 순서로 제공해야 한다.</p>
      			</li>
      			<li className="weight-600-before t_black_before">
      				<strong>다양한 감각 지원 [통합]</strong>
      				<p>지시사항이나 알림정보 등은 모양, 크기, 위치, 방향, 색, 소리 등에 관계없이 다양한 감각으로 인식할 수 있어야 한다.</p>
      			</li>
      			<li className="weight-600-before t_black_before">
      				<strong>방향 설정 [신규]</strong>
      				<p>콘텐츠는 특정 화면 방향으로만 고정하지 않아야 한다.</p>
      			</li>
      			<li className="weight-600-before t_black_before">
      				<strong>입력 목적 식별 [신규]</strong>
      				<p>입력 서식의 목적은 식별할 수 있어야 한다.</p>
      			</li>
      			<li className="weight-600-before t_black_before">
      				<strong>색에 무관한 콘텐츠 [유지]</strong>
      				<p>콘텐츠는 색에 관계없이 인식할 수 있어야 한다.</p>
      			</li>
      			<li className="weight-600-before t_black_before">
      				<strong>소리 자동 재생 [유지]</strong>
      				<p>소리는 자동으로 재생되지 않아야 한다.</p>
      			</li>
      			<li className="weight-600-before t_black_before">
      				<strong>콘텐츠의 명도대비 [강화]</strong>
      				<p>콘텐츠와 배경 간의 명도는 충분하게 대비되도록 제공해야 한다.</p>
      			</li>
      			<li className="weight-600-before t_black_before">
      				<strong>콘텐츠 간의 구분 [신규]</strong>
      				<p>이웃한 콘텐츠는 시각적으로 구별할 수 있어야 한다.</p>
      			</li>
      			<li className="weight-600-before t_black_before">
      				<strong>텍스트 크기 조정 [강화]</strong>
      				<p>텍스트는 내용이나 기능의 손실 없이 200%까지 크기 조정이 가능해야 한다.</p>
      			</li>
      			<li className="weight-600-before t_black_before">
      				<strong>이미지 텍스트 [신규]</strong>
      				<p>텍스트는 이미지로 제공하지 않아야 한다.</p>
      			</li>
      			<li className="weight-600-before t_black_before">
      				<strong>리플로우 [신규]</strong>
      				<p>콘텐츠는 화면 크기에 따라 손실 없이 표시되어야 한다.</p>
      			</li>
      			<li className="weight-600-before t_black_before">
      				<strong>텍스트 간격 [신규]</strong>
      				<p>텍스트는 내용과 기능의 손실 없이 간격을 조정할 수 있어야 한다.</p>
      			</li>
      			
      			<li className="weight-600-before t_black_before">
      				<strong>초점 이동과 표시 [유지]</strong>
      				<p>의미나 기능을 갖는 모든 콘텐츠 요소는 초점이 적용되고, 초점은 논리적인 순서로 이동해야 한다.</p>
      			</li>
      			<li className="weight-600-before t_black_before">
      				<strong>조작 가능한 크기 [현행화]</strong>
      				<p>사용자 입력 및 컨트롤은 조작 가능한 충분한 크기로 제공해야 한다.</p>
      			</li>
      			<li className="weight-600-before t_black_before">
      				<strong>단일 문자 단축키 [신규]</strong>
      				<p>단일 문자 단축키는 오동작으로 인한 오류를 방지해야 한다.</p>
      			</li>
      			<li className="weight-600-before t_black_before">
      				<strong>응답시간 조절 [유지]</strong>
      				<p>시간제한이 있는 콘텐츠는 응답시간을 조절할 수 있어야 한다.</p>
      			</li>
      			<li className="weight-600-before t_black_before">
      				<strong>움직임 제어 [유지]</strong>
      				<p>자동으로 변경되는 콘텐츠는 움직임을 제어할 수 있어야 한다.</p>
      			</li>
      			<li className="weight-600-before t_black_before">
      				<strong>깜빡임과 번쩍임 [유지]</strong>
      				<p>초당 3~50회 주기로 깜빡이거나 번쩍이는 콘텐츠를 제공하지 않아야 한다.</p>
      			</li>
      			<li className="weight-600-before t_black_before">
      				<strong>제목 [신규]</strong>
      				<p>콘텐츠 블록에는 적절한 제목을 제공해야 한다.</p>
      			</li>
      			<li className="weight-600-before t_black_before">
      				<strong>링크 텍스트 [신규]</strong>
      				<p>링크 텍스트는 용도나 목적을 이해할 수 있도록 제공해야 한다.</p>
      			</li>
      			<li className="weight-600-before t_black_before">
      				<strong>다양한 탐색 방법 [신규]</strong>
      				<p>콘텐츠는 다양한 방법으로 탐색할 수 있어야 한다.</p>
      			</li>
      			<li className="weight-600-before t_black_before">
      				<strong>단일 포인터 입력 [유지]</strong>
      				<p>다중 포인트 동작 또는 경로기반 동작을 통한 입력은 단일 포인터 입력으로도 조작할 수 있어야 한다.</p>
      			</li>
      			<li className="weight-600-before t_black_before">
      				<strong>포인터 입력 취소 [신규]</strong>
      				<p>단일 포인터 입력으로 실행되는 기능은 취소할 수 있어야 한다.</p>
      			</li>
      			<li className="weight-600-before t_black_before">
      				<strong>네임 안의 레이블 [신규]</strong>
      				<p>텍스트 또는 텍스트 이미지가 포함된 레이블이 있는 사용자 인터페이스 구성요소는 네임에 시각적으로 표시되는 해당 텍스트를 포함해야 한다.</p>
      			</li>
      			<li className="weight-600-before t_black_before">
      				<strong>동작기반 작동 [신규]</strong>
      				<p>동작기반으로 작동하는 기능은 사용자 인터페이스 구성요소로 조작할 수 있고, 동작기반 기능을 비활성화할 수 있어야 한다.</p>
      			</li>
      			<li className="weight-600-before t_black_before">
      				<strong>기본 언어 표시 [신규]</strong>
      				<p>주로 사용하는 언어는 명시해야 한다.</p>
      			</li>
      			<li className="weight-600-before t_black_before">
      				<strong>부분 언어 표시 [신규]</strong>
      				<p>기본 언어와 구별되는 다른 언어는 해당 언어를 명시해야 한다.</p>
      			</li>
      			<li className="weight-600-before t_black_before">
      				<strong>사용자 요구에 따른 실행 [유지]</strong>
      				<p>사용자가 의도하지 않은 기능은 자동적으로 실행되지 않아야 한다.</p>
      			</li>
      			<li className="weight-600-before t_black_before">
      				<strong>사용자 인터페이스 컴포넌트의 일관성 [강화]</strong>
      				<p>사용자 인터페이스 컴포넌트는 일관성 있게 제공해야 한다.</p>
      			</li>
      			<li className="weight-600-before t_black_before">
      				<strong>도움 정보 [신규]</strong>
      				<p>도움 정보가 제공되는 경우, 각 페이지에 동일한 순서로 접근할 수 있어야 한다.</p>
      			</li>

      			<li className="weight-600-before t_black_before">
      				<strong>오류 정정 [분리]</strong>
      				<p>입력 오류를 정정할 수 있는 방법을 제공해야 한다.</p>
      			</li>
      			<li className="weight-600-before t_black_before">
      				<strong>레이블 [분리]</strong>
      				<p>사용자 입력에는 대응하는 레이블을 제공해야 한다.</p>
      			</li>
      			<li className="weight-600-before t_black_before">
      				<strong>오류 방지 [신규]</strong>
      				<p>중요한 정보가 제출되기 전 되돌리기 어려운 오류를 방지할 수 있는 수단을 제공해야 한다.</p>
      			</li>
      			<li className="weight-600-before t_black_before">
      				<strong>반복 입력 정보 [신규]</strong>
      				<p>동일한 정보를 반복하여 입력하지 않도록 해야 한다.</p>
      			</li>
      			<li className="weight-600-before t_black_before">
      				<strong>접근 가능한 인증 [신규]</strong>
      				<p>인증 과정은 인지 기능 테스트에만 의존해서는 안 된다.</p>
      			</li>

      			<li className="weight-600-before t_black_before">
      				<strong>사용자 인터페이스 컴포넌트 [강화]</strong>
      				<p>사용자 인터페이스 컴포넌트는 보조기술을 이용하여 사용할 수 있도록 해야 한다.</p>
      			</li>
      			<li className="weight-600-before t_black_before">
      				<strong>상태 메시지 [신규]</strong>
      				<p>중요한 상태 메시지는 보조기술 사용자에게도 전달되어야 한다.</p>
      			</li>
      		</ul>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">4.3.4. 모바일 앱 접근성 용어</h2>

      		<ul className="mt_l ol_lst info_lst gap-column-important-m">
      			<li className="weight-600-before t_black_before">
      				<strong>접근성</strong>
      				<p>장애인, 고령자 등을 포함한 모든 사람이 모바일 기기를 사용하여 모바일 애플리케이션 콘텐츠를 이용할 수 있는 가능성</p>
      			</li>
      			<li className="weight-600-before t_black_before">
      				<strong>모바일 기기</strong>
      				<p>입력 및 출력기능이 있고 무선 인터넷 서비스를 사용 할 수 있는 휴대용 기기(운영체제를 갖는 모바일 전화기, 운영체제를 갖는 태블릿 기기)</p>
      			</li>
      			<li className="weight-600-before t_black_before">
      				<strong>모바일 애플리케이션 콘텐츠</strong>
      				<p>모바일 플랫폼 개발언어로 제작된 응용 프로그램 및 콘텐츠</p>
      			</li>
      			<li className="weight-600-before t_black_before">
      				<strong>서비스 제공자</strong>
      				<p>모바일 기기를 이용하여 콘텐츠 및 서비스를 제공하는 공공기관 및 사업자</p>
      			</li>
      			<li className="weight-600-before t_black_before">
      				<strong>무리한 부담(undue burden)</strong>
      				<p>현재 가능한 기술 수준과 적절한 비용으로 실현시킬 수 있는 정도 이상의 노력을 요구함</p>
      			</li>
      			<li className="weight-600-before t_black_before">
      				<strong>보조 기술</strong>
      				<ul className="dot_lst">
      					<li>장애인의 신체적․인지적 기능을 증진, 보완, 향상시키기 위하여 사용하는 기기, 장비의 일부분, 시스템 또는 소프트웨어</li>
      					<li>보조기술의 예로는 시각 장애인용 화면 낭독기, 저시력 장애인용 화면 확대 프로그램, 점자 표시를 위한 점자 디스플레이 및 상지 장애인을 위한 안구 마우스 등이 있음</li>
      				</ul>
      			</li>
      			<li className="weight-600-before t_black_before">
      				<strong>대체 텍스트</strong>
      				<p>이미지의 표현 또는 이미지를 설명하는 텍스트</p>
      			</li>
      			<li className="weight-600-before t_black_before">
      				<strong>명도 대비</strong>
      				<p>화면의 배경색과 사용자 인터페이스 컴포넌트 및 텍스트를 표시하는 데에 사용되는 전경색 사이의 명도 차이의 비율(contrast)</p>
      			</li>
      			<li className="weight-600-before t_black_before">
      				<strong>초점(포커스)</strong>
      				<ul className="dot_lst">
      					<li>화면상의 선택된 사용자 인터페이스 컴포넌트의 내용을 화면 낭독 프로그램 등의 보조 기술을 통해 이용할 수 있도록 도와주는 기능</li>
      					<li>선택된 사용자 인터페이스 컴포넌트는 초점이 적용되고, 초점은 화면상에서 테두리나 하이라이트로 표시됨</li>
      					<li>개별 사용자 인터페이스 요소는 커서를 표시하여 초점을 표현함</li>
      					<li>어떤 사용자 인터페이스 요소가 초점을 받았다는 것은 그 요소가 선택되어 사용자가 입력을 수용할 준비가 되어 있는 상태임을 의미함</li>
      				</ul>
      			</li>
      			<li className="weight-600-before t_black_before">
      				<strong>누르기 동작</strong>
      				<p>화면상의 사용자 인터페이스 컴포넌트를 손가락 끝으로 접촉하여 만지거나(touch) 가볍게 두드리는(tap) 동작</p>
      			</li>
      			<li className="weight-600-before t_black_before">
      				<strong>컨트롤(control)</strong>
      				<p>버튼 또는 위젯과 같이 사용자 인터페이스 화면에서 누르기 동작으로 기능을 활성화시키는 사용자 인터페이스 컴포넌트</p>
      			</li>
      			<li className="weight-600-before t_black_before">
      				<strong>폰트 관련 기능</strong>
      				<p>운영체제에 내장되어 확대/축소, 기울임, 색변환, 음영 등의 변형 형태가 제공되어 보조 기술(스크린리더 등)이 처리할 수 있는 기능</p>
      			</li>
      			<li className="weight-600-before t_black_before">
      				<strong>기본 사용자 인터페이스 컴포넌트</strong>
      				<p>사용자 인터페이스 구성에 사용되는 표준 도구(대화상자, 버튼과 체크박스, 타이틀바 등)</p>
      			</li>
      			<li className="weight-600-before t_black_before">
      				<strong>팝업</strong>
      				<p>사용자의 동작에 의하여 문맥에 따라 나타나는 정보</p>
      			</li>
      			<li className="weight-600-before t_black_before">
      				<strong>팬</strong>
      				<p>손가락을 댄 후, 손을 떼지 않고 계속적으로 끄는(drag) 움직임</p>
      			</li>
      			<li className="weight-600-before t_black_before">
      				<strong>지시 사항</strong>
      				<p>사용자 인터페이스에서 무엇을 하거나 사용하는 데 필요한 자세한 설명</p>
      			</li>
      			<li className="weight-600-before t_black_before">
      				<strong>객체</strong>
      				<p>사용자 인터페이스에서 시스템의 구성 요소가 아이콘과 같은 화면상에 표시되는 가시적 실체에 의해 표현되는 것</p>
      			</li>
      		</ul>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">4.3.5. W3C 모바일 접근성(WCAG 2.0) Guidelines</h2>

      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue">4.3.5.1. 인식의 용이성(Perceivable)</h3>
      			<ol className="mt_ml success_list">
      				<li className="reference">
      					<a href="https://www.w3.org/TR/2015/NOTE-UAAG20-Reference-20151215/#gl-access-alternative-content" target="_blank" rel="noreferrer" title="Guideline 1.1: Alternative content 새창열림" className="fas">
      						<i className="ko">대체 콘텐츠</i>
      						Guideline 1.1: Alternative content
      					</a>
      				</li>
      				<li className="reference">
      					<a href="https://www.w3.org/TR/2015/NOTE-UAAG20-Reference-20151215/#gl-missing-alt" target="_blank" rel="noreferrer" title="Guideline 1.2: Missing content 새창열림" className="fas">
      						<i className="ko">누락된 콘텐츠</i>
      						Guideline 1.2: Missing content
      					</a>
      				</li>
      				<li className="reference">
      					<a href="https://www.w3.org/TR/2015/NOTE-UAAG20-Reference-20151215/#gl-interaction-highlight" target="_blank" rel="noreferrer" title="Guideline 1.3: Highlighting 새창열림" className="fas">
      						<i className="ko">강조 표시</i>
      						Guideline 1.3: Highlighting
      					</a>
      				</li>
      				<li className="reference">
      					<a href="https://www.w3.org/TR/2015/NOTE-UAAG20-Reference-20151215/#gl-text-config" target="_blank" rel="noreferrer" title="Guideline 1.4: Text configuration 새창열림" className="fas">
      						<i className="ko">텍스트 구성</i>
      						Guideline 1.4: Text configuration
      					</a>
      				</li>
      				<li className="reference">
      					<a href="https://www.w3.org/TR/2015/NOTE-UAAG20-Reference-20151215/#gl-volume-config" target="_blank" rel="noreferrer" title="Guideline 1.5: Volume configuration 새창열림" className="fas">
      						<i className="ko">볼륨 설정</i>
      						Guideline 1.5: Volume configuration
      					</a>
      				</li>
      				<li className="reference">
      					<a href="https://www.w3.org/TR/2015/NOTE-UAAG20-Reference-20151215/#gl-speech-config" target="_blank" rel="noreferrer" title="Guideline 1.6: Synthesized speech configuration 새창열림" className="fas">
      						<i className="ko">합성 음성 설정</i>
      						Guideline 1.6: Synthesized speech configuration
      					</a>
      				</li>
      				<li className="reference">
      					<a href="https://www.w3.org/TR/2015/NOTE-UAAG20-Reference-20151215/#gl-style-sheets-config" target="_blank" rel="noreferrer" title="Guideline 1.7: User style sheet configuration 새창열림" className="fas">
      						<i className="ko">사용자 스타일 시트 구성</i>
      						Guideline 1.7: User style sheet configuration
      					</a>
      				</li>
      				<li className="reference">
      					<a href="https://www.w3.org/TR/2015/NOTE-UAAG20-Reference-20151215/#gl-viewport-orient" target="_blank" rel="noreferrer" title="Guideline 1.8: Orientation in viewports 새창열림" className="fas">
      						<i className="ko">뷰포트의 방향</i>
      						Guideline 1.8: Orientation in viewports
      					</a>
      				</li>
      				<li className="reference">
      					<a href="https://www.w3.org/TR/2015/NOTE-UAAG20-Reference-20151215/#gl-alternative-views" target="_blank" rel="noreferrer" title="Guideline 1.9: Alternative views 새창열림" className="fas">
      						<i className="ko">대체 보기</i>
      						Guideline 1.9: Alternative views
      					</a>
      				</li>
      				<li className="reference">
      					<a href="https://www.w3.org/TR/2015/NOTE-UAAG20-Reference-20151215/#gl-info-link" target="_blank" rel="noreferrer" title="Guideline 1.10: Element Information 새창열림" className="fas">
      						<i className="ko">요소 정보</i>
      						Guideline 1.10: Element Information
      					</a>
      				</li>
      			</ol>
      		</article>
      		

      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue">4.3.5.2. 운용의 용이성(Operable)</h3>
      			<ol className="mt_ml success_list">
      				<li className="reference">
      					<a href="https://www.w3.org/TR/2015/NOTE-UAAG20-Reference-20151215/#gl-keyboard-access" target="_blank" rel="noreferrer" title="Guideline 2.1: Keyboard access 새창열림" className="fas">
      						<i className="ko">키보드 접근</i>
      						Guideline 2.1: Keyboard access
      					</a>
      				</li>
      				<li className="reference">
      					<a href="https://www.w3.org/TR/2015/NOTE-UAAG20-Reference-20151215/#gl-sequential-navigation" target="_blank" rel="noreferrer" title="Guideline 2.2: Sequential navigation 새창열림" className="fas">
      						<i className="ko">순차적 탐색</i>
      						Guideline 2.2: Sequential navigation
      					</a>
      				</li>
      				<li className="reference">
      					<a href="https://www.w3.org/TR/2015/NOTE-UAAG20-Reference-20151215/#gl-direct-navigation-and-activation" target="_blank" rel="noreferrer" title="Guideline 2.3: Direct navigation and activation 새창열림" className="fas">
      						<i className="ko">직접 탐색 및 활성화</i>
      						Guideline 2.3: Direct navigation and activation
      					</a>
      				</li>
      				<li className="reference">
      					<a href="https://www.w3.org/TR/2015/NOTE-UAAG20-Reference-20151215/#gl-search-text" target="_blank" rel="noreferrer" title="Guideline 2.4: Text Search 새창열림" className="fas">
      						<i className="ko">텍스트 검색</i>
      						Guideline 2.4: Text Search
      					</a>
      				</li>
      				<li className="reference">
      					<a href="https://www.w3.org/TR/2015/NOTE-UAAG20-Reference-20151215/#gl-nav-structure" target="_blank" rel="noreferrer" title="Guideline 2.5: Structural navigation 새창열림" className="fas">
      						<i className="ko">구조적 탐색</i>
      						Guideline 2.5: Structural navigation
      					</a>
      				</li>
      				<li className="reference">
      					<a href="https://www.w3.org/TR/2015/NOTE-UAAG20-Reference-20151215/#gl-store-prefs" target="_blank" rel="noreferrer" title="Guideline 2.6: Preference settings 새창열림" className="fas">
      						<i className="ko">설정 선호</i>
      						Guideline 2.6: Preference settings
      					</a>
      				</li>
      				<li className="reference">
      					<a href="https://www.w3.org/TR/2015/NOTE-UAAG20-Reference-20151215/#gl-configure-controls" target="_blank" rel="noreferrer" title="Guideline 2.7: Graphical controls 새창열림" className="fas">
      						<i className="ko">그래픽 컨트롤</i>
      						Guideline 2.7: Graphical controls
      					</a>
      				</li>
      				<li className="reference">
      					<a href="https://www.w3.org/TR/2015/NOTE-UAAG20-Reference-20151215/#gl-time-independent" target="_blank" rel="noreferrer" title="Guideline 2.8: Time-independent interaction 새창열림" className="fas">
      						<i className="ko">시간 비독립적 상호작용</i>
      						Guideline 2.8: Time-independent interaction
      					</a>
      				</li>
      				<li className="reference">
      					<a href="https://www.w3.org/TR/2015/NOTE-UAAG20-Reference-20151215/#gl-prevent-flash" target="_blank" rel="noreferrer" title="Guideline 2.9: Flashing 새창열림" className="fas">
      						<i className="ko">깜빡임</i>
      						Guideline 2.9: Flashing
      					</a>
      				</li>
      				<li className="reference">
      					<a href="https://www.w3.org/TR/2015/NOTE-UAAG20-Reference-20151215/#gl-control-inaccessible-content" target="_blank" rel="noreferrer" title="Guideline 2.10: Time-based media 새창열림" className="fas">
      						<i className="ko">시간 기반 미디어</i>
      						Guideline 2.10: Time-based media
      					</a>
      				</li>
      				<li className="reference">
      					<a href="https://www.w3.org/TR/2015/NOTE-UAAG20-Reference-20151215/#gl-other-devices" target="_blank" rel="noreferrer" title="Guideline 2.11: Other Input Devices 새창열림" className="fas">
      						<i className="ko">기타 입력 장치</i>
      						Guideline 2.11: Other Input Devices
      					</a>
      				</li>
      			</ol>
      		</article>
      		

      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue">4.3.5.3. 이해의 용이성(Understandable)</h3>
      			<ol className="mt_ml success_list">
      				<li className="reference">
      					<a href="https://www.w3.org/TR/2015/NOTE-UAAG20-Reference-20151215/#gl-avoid-mistakes" target="_blank" rel="noreferrer" title="Guideline 3.1: Mistakes 새창열림" className="fas">
      						<i className="ko">실수</i>
      						Guideline 3.1: Mistakes
      					</a>
      				</li>
      				<li className="reference">
      					<a href="https://www.w3.org/TR/2015/NOTE-UAAG20-Reference-20151215/#gl-doc-access-features" target="_blank" rel="noreferrer" title="Guideline 3.2: Documentation 새창열림" className="fas">
      						<i className="ko">문서화</i>
      						Guideline 3.2: Documentation
      					</a>
      				</li>
      				<li className="reference">
      					<a href="https://www.w3.org/TR/2015/NOTE-UAAG20-Reference-20151215/#gl-predictable-operation" target="_blank" rel="noreferrer" title="Guideline 3.3: Predictable 새창열림" className="fas">
      						<i className="ko">예측 가능</i>
      						Guideline 3.3: Predictable
      					</a>
      				</li>
      			</ol>
      		</article>
      		

      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue">4.3.5.4. 견고성(Robust)</h3>
      			<ol className="mt_ml success_list">
      				<li className="reference">
      					<a href="https://www.w3.org/TR/2015/NOTE-UAAG20-Reference-20151215/#gl-AT-access" target="_blank" rel="noreferrer" title="Guideline 4.1: Assistive technology 새창열림" className="fas">
      						<i className="ko">보조 기술</i>
      						Guideline 4.1: Assistive technology
      					</a>
      				</li>
      			</ol>
      		</article>
      		
      	</section>
      	

      	<footer className="reference_box">
      		<strong className="tit">모바일 앱 접근성 | 접근성 가이드라인 참조</strong>
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

export default MacagPage
