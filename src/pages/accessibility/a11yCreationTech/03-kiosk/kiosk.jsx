import { useAccessibilityPageMeta } from '@/hooks/useAccessibilityPageMeta.js'
import { IMG } from '@/config/path'

const PAGE_LAYOUT = {
  mainClass: "tech_kiosk",
  type: "accessibility",
  titleSticky: true,
  info: false,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
  depth3Last: true,
  bottomEditor: false
}

const PAGE_DATA = {
  title: "무인정보 단말기 접근성 제작 기법",
  description: "무인정보 단말기 접근성 제작 기법이란, 무인정보단말기(예: 키오스크, ATM 등)를 장애를 가진 사용자뿐만 아니라 모든 사람이 쉽게 이용할 수 있도록 설계하는 방법입니다. 이 페이지에서는 무인정보단말기 접근성 제작기법을 소개합니다.",
  keyword: "Accessibility, a11y, wcag, kwcag, macag, kiosk, 접근성, 웹 콘텐츠 접근성, 한국형 웹 콘텐츠 접근성, 모바일 앱 접근성, 무인정보단말기 접근성",
}

function KioskPage() {
  useAccessibilityPageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  })


  return (
    <>









      	<blockquote className="uk_note mt_xxl" role="note">
      		<strong className="sound_only">요약 설명</strong>
      		
      		<p className="t_navy">
      			무인정보단말기 접근성 콘텐츠 제작 기법은 <b className="underline">무인정보단말기 UI 플랫폼 사이트</b>에 자세히 안내되어 있으므로,
      			이 문서에서는 기본적인 UI 가이드 정보만 제공하고 상세 내용은 해당 사이트 링크로 안내합니다.<br />
      		</p>
      		<p className="mt_s">
      			무인정보단말기(키오스크) UI 가이드는 단말기 시스템을 설계하고 개발할 때 필요한
      			사용자 인터페이스(UI) 디자인 지침을 제공하는 문서입니다.
      			이 지침은 사용자 경험(UX)을 향상시키고, 누구나 무인정보단말기를 효과적으로 이용할 수 있도록 돕는 데 중점을 두고 있습니다.
      			특히 장애인을 위한 보조 기술과 기능을 고려하여 접근 가능한 UI 설계를 유도하고 있습니다.
      		</p>
      	</blockquote>

      	<figure className="img_figure mt_l">
      		<img src={`${IMG.A11Y_TECH_KIOSK}/kioskui.or.kr.jpg`} alt="무인정보단말기 UI 플랫폼" />
      		<figcaption>
      			[이미지 출처 : 무인정보단말기 UI 플랫폼 사이트 메인 캡쳐]<br />
      			<a href="https://www.kioskui.or.kr/index.do" className="box_link external mt_s" target="_blank" rel="noreferrer" title="무인정보단말기 UI 플랫폼 새창 열림">무인정보단말기 UI 플랫폼 바로가기</a>
      		</figcaption>
      	</figure>

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">무인정보단말기 개요</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				무인정보단말기(키오스크) UI(사용자 인터페이스) 가이드는 무인정보단말기 시스템을 설계하고 개발할 때 필요한
      				UI 디자인에 대한 지침을 제공하는 문서입니다.
      				이 가이드는 사용자 경험(UX)을 향상시키고, 사용자가 무인정보단말기를 효과적으로 이용할 수 있도록 하는 데 중점을 둡니다.
      				무인정보단말기의 UI는 모든 사용자에게 접근 가능해야 하므로,
      				장애인을 위한 보조 기술 및 기능성을 고려하여 UI를 설계하도록 지침을 제시합니다.
      			</p>
      			<p className="mt_s reference">
      				<a href="https://www.kioskui.or.kr/index.do?menu_id=00001026&servletPath=%2Findex.do" title="새창 열림" target="_blank" rel="noreferrer" className="fas weight-500">무인정보단말기 UI 플랫폼 &gt; 무인정보단말기 &gt; 안내</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn" data-conlist-h4="true">무인정보단말기 분류</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">대분류</h4>
      				<p className="mt_ms">
      					선행 연구(NIA 연구반, 2022년)를 통해 사용자의 무인정보단말기 활용 목적과 개별 업체의 자율성을 고려하여
      					무인정보단말기를 4개 유형으로 분류하였습니다.
      					본 가이드는 이러한 분류를 바탕으로 대분류 UI 가이드를 제공합니다.
      				</p>
      				<div className="table_summary value_200 mt_ms">
      					<ul className="lst_hd">
      						<li className="cell value">유형</li>
      						<li className="cell content">설명</li>
      					</ul>
      					<ul className="lst_bd">
      						<li>
      							<p className="cell value t_black">유통(결제형)</p>
      							<p className="cell content">
      								상품코드(바코드 등)를 사용자가 직접 스캔해서 제품을 구매하는 유형
      								※ 예. 대형마트, 편의점 등
      							</p>
      						</li>
      						<li>
      							<p className="cell value t_black">주문(티켓형)</p>
      							<p className="cell content">
      								직원의 도움이 필요한 음식물 등의 주문 및 구매
      								※ 예. 커피숍, 패스트푸드점 등
      							</p>
      						</li>
      						<li>
      							<p className="cell value t_black">발권(티켓/서류)</p>
      							<p className="cell content">
      								요청에 대해 정보처리 후 인쇄물 제공
      								※ 예. 무인민원발급기, 무인처방전발행기, 셀프체크인(공항, 교통)
      							</p>
      						</li>
      						<li>
      							<p className="cell value t_black">안내</p>
      							<p className="cell content">
      								사용자 조작에 따라 정보 제공
      								※ 예. 관광정보시스템, 정보제공시스템, 안내시스템 등
      							</p>
      						</li>
      					</ul>
      				</div>
      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">중분류</h4>
      				<p className="mt_ms">
      					무인정보단말기 관련 고시인 「장애인·고령자 등의 정보 접근 및 이용 편의 증진을 위한 고시」(과학기술정보통신부,
      					2022년)에서는 무인정보단말기를 16개 유형으로 분류하고 있습니다.
      					아래의 내용은 해당 고시의 16개 유형을 본 가이드의 대분류와 대응하여 매핑한 결과입니다.
      				</p>
      				<div className="table_summary value_200 mt_ms">
      					<ul className="lst_hd">
      						<li className="cell value">유형</li>
      						<li className="cell content">설명</li>
      					</ul>
      					<ul className="lst_bd">
      						<li>
      							<p className="cell value t_black">유통</p>
      							<p className="cell content">
      								(1) 무인주유기<br />
      								(2) 무인주차정산기<br />
      								(3) 무인결제기<br />
      								(4) 무인도서대여반납기
      							</p>
      						</li>
      						<li>
      							<p className="cell value t_black">주문</p>
      							<p className="cell content">
      								(5) 무인주문기
      							</p>
      						</li>
      						<li>
      							<p className="cell value t_black">발권</p>
      							<p className="cell content">
      								(6) 무인민원발급기<br />
      								(7) 무인발권기<br />
      								(8) 무인발매기<br />
      								(9) 무인증명발매기<br />
      								(10) 셀프체크인<br />
      								(11) 무인처방전발매기<br />
      								(12) 금융자동화기기
      							</p>
      						</li>
      						<li>
      							<p className="cell value t_black">안내</p>
      							<p className="cell content">
      								(13) 종합정보시스템<br />
      								(14) 위치정보시스템
      							</p>
      						</li>
      						<li>
      							<p className="cell value t_black">기타</p>
      							<p className="cell content">
      								(15) 무인사용자인증기<br />
      								(16) 기타(사물함, 택배함 등)
      							</p>
      						</li>
      					</ul>
      				</div>
      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">UI 가이드 원칙</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				UI 원칙은 무인정보단말기 서비스를 이용하는 사용자 경험을 향상시키기 위해,
      				무인정보단말기의 UI를 설계할 때 준수해야 할 기본적인 원칙과 방향성을 담고 있습니다.
      			</p>
      			<p className="mt_s reference">
      				<a href="https://www.kioskui.or.kr/index.do?menu_id=00001210" title="새창 열림" target="_blank" rel="noreferrer" className="fas weight-500">
      					무인정보단말기 UI 플랫폼 &gt; 무인정보단말기 &gt; UI 가이드 원칙
      				</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용자 중심 UI</h3>
      			<p className="mt_m t_blue">
      				<b>사용자 중심 UI 원칙은 사용자 친화적인 UI를 설계해야 함을 의미합니다.</b>
      			</p>
      			<ul className="mt_sm dot_lst">
      				<li>용어를 알기 쉽게 정의합니다.</li>
      				<li>무인정보단말기에서 요구하는 과업의 수준을 사용자에게 적절하게 정의합니다.</li>
      				<li>사용자가 인지하기 쉬운 무인정보단말기의 정확한 피드백을 정의합니다.</li>
      				<li>UI 컴포넌트는 실제와 유사한 메타포를 바탕으로 만듭니다.</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용자에 최적화된 UI</h3>
      			<p className="mt_m t_blue">
      				<b>사용자에 최적화된 UI 원칙은 사용자의 다양한 능력을 고려한 UI를 설계해야 함을 의미합니다.</b>
      			</p>
      			<ul className="mt_sm dot_lst">
      				<li>무인정보단말기에 사용되는 정보, 기능, 컨트롤을 정의합니다.</li>
      				<li>정보 및 컨트롤 UI 컴포넌트를 인식하기 쉽게 가시적으로 제작합니다.</li>
      				<li>접근성과 사용성 모두를 고려하여 설계합니다.</li>
      				<li>무인정보단말기에 필요한 접근성 기능을 정의합니다.</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">직관적인 UI</h3>
      			<p className="mt_m t_blue">
      				<b>직관적인 UI 원칙은 학습이 필요 없는, 인지적으로 쉬운 UI를 설계해야 함을 의미합니다.</b>
      			</p>
      			<ul className="mt_sm dot_lst">
      				<li>무인정보단말기에서 발생할 수 있는 오류 상황을 정의합니다.</li>
      				<li>오류 상황에 맞는 적절한 오류 메시지의 피드백 방식을 정의합니다.</li>
      				<li>한 가지 방식이 아니라 다양한 사용자가 인지할 수 있는 피드백 방식을 개발합니다.</li>
      				<li>공통된 화면 레이아웃을 통해 구조화된 UI를 구성합니다.</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">조작하기 쉬운 UI</h3>
      			<p className="mt_m t_blue">
      				<b>조작하기 쉬운 UI 원칙은 사용자가 쉽게 화면을 컨트롤할 수 있는 UI를 설계해야 함을 의미합니다.</b>
      			</p>
      			<ul className="mt_sm dot_lst">
      				<li>무인정보단말기의 기능 및 컨트롤을 정의합니다.</li>
      				<li>기능 및 컨트롤이 다양한 사용자가 쉽게 제어할 수 있도록 구성합니다.</li>
      				<li>과업을 수행하는 도중 쉽게 되돌릴 수 있는 기능을 제공합니다.</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">지속 가능한 일관된 UI</h3>
      			<p className="mt_m t_blue">
      				<b>지속 가능한 일관된 UI 원칙은 사용자가 이용하는 데 있어 일관된 UI를 설계해야 함을 의미합니다.</b>
      			</p>
      			<ul className="mt_sm dot_lst">
      				<li>무인정보단말기 사용에 필요한 과업을 정의합니다.</li>
      				<li>과업의 프로세스를 일관되게 설계합니다.</li>
      				<li>공통된 화면 레이아웃을 통해 구조화되고 일관된 UI를 구성합니다.</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">개인의 정보가 보호되는 UI</h3>
      			<p className="mt_m t_blue">
      				<b>개인의 정보가 보호되는 UI 원칙은 입출력되는 개인정보가 안전하게 보호되도록 UI를 설계해야 함을 의미합니다.</b>
      			</p>
      			<ul className="mt_sm dot_lst">
      				<li>무인정보단말기에 입력 및 출력되는 개인정보를 정의합니다.</li>
      				<li>개인정보가 보호되는 방법 및 기능을 정의합니다.</li>
      			</ul>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">UI 사용성 체크리스트</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				누구에게나 동등한 기회를 제공하기 위해서는 무인정보단말기의 사용성과 접근성이 보장되어야 합니다.
      			</p>
      			<p className="mt_s reference">
      				<a href="https://www.kioskui.or.kr/index.do?menu_id=00001034" title="새창 열림" target="_blank" rel="noreferrer" className="fas weight-500">
      					무인정보단말기 UI 플랫폼 &gt; 무인정보단말기 &gt; 공통 UI 가이드
      				</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">화면 레이아웃</h3>
      			<ul className="mt_m dot_lst info_lst">
      				<li>
      					<strong>무인정보단말기의 화면 구성(레이아웃)은 일관성 있게 제공되어야 합니다.</strong>
      					<p>
      						작업의 순서에 맞춰 화면 요소를 위에서 아래로, 왼쪽에서 오른쪽으로 배열하면 정보를 보다 쉽게 파악할 수 있습니다.
      						시각장애인의 경우 수직 계열화된 정보 구조에 익숙하므로, 위에서 아래 방향으로 콘텐츠를 제공하는 것이 바람직합니다.
      						모든 설계 요소는 사용자가 논리적으로 이해하기 쉬운 방식으로, 단순하고 일관성 있게 배치되어야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>한 화면에는 하나의 과업만 보여주어야 합니다.</strong>
      					<p>
      						사용자의 인지적 부하를 줄이기 위해, 되도록 한 화면에 하나의 과업만 제시하는 것이 바람직합니다.<br />
      						또한 사용자가 서비스 이용 흐름을 방해받지 않도록,
      						과업 진행 중에 새로운 과업의 제안이나 추천, 광고 정보는 가급적 제공하지 않아야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>화면 크기는 27인치 이상을 권장합니다.</strong>
      					<p>
      						접근성을 고려한 글자 크기와 컨트롤의 크기, 간격을 감안할 때,
      						27인치 이하의 화면은 콘텐츠를 효율적으로 배치하기 어려울 수 있습니다.<br />
      						따라서 접근성을 높이기 위해 27인치 이상의 화면 크기를 권장합니다.
      					</p>
      					<figure className="img_figure mt_s">
      						<img src={`${IMG.A11Y_TECH_KIOSK}/img_ui_guide.jpg`} alt="화면 레이아웃 권장사항" className="max-w400" />
      						<figcaption>
      							[이미지 출처] 무인정보단말기 UI 플랫폼
      						</figcaption>
      					</figure>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용성 체크리스트</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-sm">
      				<li>
      					<strong>정보 영역과 컨트롤 영역은 사용자의 중심 시야각에 위치하도록 설계해야 합니다.</strong>
      					<figure className="img_figure mt_s mb_s">
      						<img src={`${IMG.A11Y_TECH_KIOSK}/ui_check01.jpg`}
      								 alt="사용성 체크리스트 화면은 27인치 이상의 크기를 권장한다 의 권장사항 예시이미지"
      								 className="max-w300" />
      						<figcaption>
      							[이미지 출처] 무인정보단말기 UI 플랫폼
      						</figcaption>
      					</figure>
      				</li>
      				<li>
      					<strong>무인정보단말기의 과업 진행 단계를 명확하게 표시해야 합니다.</strong>
      					<figure className="img_figure mt_s mb_s">
      						<img src={`${IMG.A11Y_TECH_KIOSK}/ui_check08.png`}
      								 alt="무인정보단말기 과업의 단계 표시를 해야 한다 의 권장 사례 예시이미지"
      								 className="max-w300" />
      						<figcaption>
      							[이미지 출처] 무인정보단말기 UI 플랫폼
      						</figcaption>
      					</figure>
      				</li>
      				<li>
      					<strong>모든 컨트롤은 다중 누르기(multi-touch) 동작을 요구하지 않아야 합니다.</strong>
      				</li>
      				<li>
      					<strong>화면 상의 모든 글자의 크기는 글자의 높이가 12mm 이상으로 해야 합니다.</strong>
      					<p>
      						글자 높이 12mm를 위한 기준 픽셀 (기준. 해상도 1920x1080, 화면 비율 16:9)<br />
      						22인치 : 약 48px, 24인치 : 약 43px, 27인치 : 약 39px, 32인치 : 약 33px, 40인치 : 약 27px<br />
      						※ 주의: 실제 업체마다 해상도와 화면 비율이 다를 수 있으니, 설계 과정에서 반드시 직접 측정해야 합니다.
      					</p>
      					<figure className="img_figure mt_s mb_s">
      						<img src={`${IMG.A11Y_TECH_KIOSK}/ui_check2_01.jpg`}
      								 alt="화면 상의 모든 글자의 크기는 글자의 높이가 12mm 이상으로 해야 한다 의 권장 사례 예시이미지"
      								 className="max-w400" />
      						<figcaption>
      							[이미지 출처] 무인정보단말기 UI 플랫폼
      						</figcaption>
      					</figure>
      				</li>
      				<li>
      					<strong>모든 컨트롤의 크기는 150mm² 이상, 한 변의 길이는 12mm 이상, 간격은 2.5mm 이상으로 하셔야 합니다.</strong>
      					<figure className="img_figure mt_s mb_s">
      						<img src={`${IMG.A11Y_TECH_KIOSK}/ui_check2_02.jpg`}
      								 alt="모든 컨트롤의 크기는 150mm&lt;sup&gt;2&lt;/sup&gt;이상, 한 변의 길이 12mm 이상,  간격은 2.5mm 이상으로 해야 한다 권장 사례 예시이미지"
      								 className="max-w400" />
      						<figcaption>
      							[이미지 출처] 무인정보단말기 UI 플랫폼
      						</figcaption>
      					</figure>
      				</li>
      				<li>
      					<strong>의미 있는 글자나 아이콘, 컨트롤은 배경과 명도 대비가 명확해야 합니다.</strong>
      				</li>
      				<li>
      					<strong>콘텐츠는 시각적으로 명확히 구분될 수 있도록 해야 합니다.</strong>
      					<figure className="img_figure mt_s mb_s">
      						<img src={`${IMG.A11Y_TECH_KIOSK}/ui_check2_03.jpg`}
      								 alt="의미 있는 글자나 아이콘, 컨트롤은 배경과 명도 대비가 명확해야 한다 의 권장 사례 예시이미지"
      								 className="max-w450" />
      						<figcaption>
      							[이미지 출처] 무인정보단말기 UI 플랫폼
      						</figcaption>
      					</figure>
      				</li>
      				<li>
      					<strong>불필요한 이미지 삽입을 지양해야 합니다.</strong>
      					<figure className="img_figure mt_s mb_s">
      						<img src={`${IMG.A11Y_TECH_KIOSK}/ui_check04_o.jpg`}
      								 alt="불필요한 이미지 삽입을 지양해야 한다 의 권장 사례 예시이미지"
      								 className="max-w300" />
      						<figcaption>
      							[이미지 출처] 무인정보단말기 UI 플랫폼
      						</figcaption>
      					</figure>
      				</li>
      				<li>
      					<strong>아이콘은 식별하기 쉬운 표준 모양으로 글자와 함께 표시되어야 합니다.</strong>
      					<figure className="img_figure mt_s mb_s">
      						<img src={`${IMG.A11Y_TECH_KIOSK}/ui_check05.jpg`}
      								 alt="아이콘은 식별하기 쉬운 표준 모양으로 글자와 함께 표시되어야 한다 권장사항의 예시이미지"
      								 className="max-w300" />
      						<figcaption>
      							[이미지 출처] 무인정보단말기 UI 플랫폼
      						</figcaption>
      					</figure>
      				</li>
      				<li>
      					<strong>글자 정보는 일상적이고 자연스러운 용어를 사용해야 합니다.</strong>
      					<figure className="img_figure mt_s mb_s">
      						<img src={`${IMG.A11Y_TECH_KIOSK}/ui_check09.png`}
      								 alt="글자 정보는 일상적이고 자연스러운 용어를 사용해야 한다 권장 사례 예시이미지"
      								 className="max-w200" />
      						<figcaption>
      							[이미지 출처] 무인정보단말기 UI 플랫폼
      						</figcaption>
      					</figure>
      				</li>
      				<li>
      					<strong>색은 강조용으로 사용하고 패턴과 함께 제공해야 합니다.</strong>
      					<figure className="img_figure mt_s mb_s">
      						<img src={`${IMG.A11Y_TECH_KIOSK}/ui_check2_04.jpg`}
      								 alt="색은 강조용으로 사용하고 패턴과 함께 제공해야 한다 의 권장 사례 예시이미지"
      								 className="max-w500" />
      						<figcaption>
      							[이미지 출처] 무인정보단말기 UI 플랫폼
      						</figcaption>
      					</figure>
      				</li>
      				<li>
      					<strong>추가적인 탐색 인터랙션이 없도록 2줄 카테고리를 사용해야 합니다.</strong>
      					<figure className="img_figure mt_s mb_s">
      						<img src={`${IMG.A11Y_TECH_KIOSK}/ui_check11.jpg`}
      								 alt="추가적인 탐색 인터랙션이 없도록 2줄 카테고리를 사용한다 의 권장 사례 예시이미지"
      								 className="max-w500" />
      						<figcaption>
      							[이미지 출처] 무인정보단말기 UI 플랫폼
      						</figcaption>
      					</figure>
      				</li>
      				<li>
      					<strong>늘어난 화면은 페이징을 기본으로 스크롤(Scroll) 구성을 해야 합니다.</strong>
      				</li>
      				<li>
      					<strong>페이지가 늘어나는 경우, 명확한 페이지 표시를 해야 합니다.</strong>
      					<figure className="img_figure mt_s mb_s">
      						<img src={`${IMG.A11Y_TECH_KIOSK}/ui_check07.jpg`}
      								 alt="페이지가 늘어나는 경우, 명확한 페이지 표시를 해야 한다 의 권장 사례 예시이미지"
      								 className="max-w400" />
      						<figcaption>
      							[이미지 출처] 무인정보단말기 UI 플랫폼
      						</figcaption>
      					</figure>
      				</li>
      				<li>
      					<strong>이전, 처음으로 컨트롤을 제공해야 합니다.</strong>
      				</li>
      				<li>
      					<strong>직원 호출 컨트롤을 통해 지원 서비스를 제공해야 합니다.</strong>
      					<figure className="img_figure mt_s mb_s">
      						<img src={`${IMG.A11Y_TECH_KIOSK}/ui_check06.jpg`}
      								 alt="직원 호출 컨트롤을 통해 지원 서비스를 제공해야 한다 의 권장사항 예시이미지"
      								 className="max-w450" />
      						<figcaption>
      							[이미지 출처] 무인정보단말기 UI 플랫폼
      						</figcaption>
      					</figure>
      				</li>
      				<li>
      					<strong>사용자의 조작 없이 자동으로 변경되는 콘텐츠는 사용되지 않아야 합니다.</strong>
      				</li>
      				<li>
      					<strong>사용자의 선택적 응답을 요구하는 조작에는 시간제한(timeout)을 두지 않아야 합니다.</strong>
      					<figure className="img_figure mt_s mb_s">
      						<img src={`${IMG.A11Y_TECH_KIOSK}/ui_check06_2.jpg`}
      								 alt="사용자의 선택적 응답을 요구하는 조작에는 시간제한(timeout)을 두지 않아야 한다 의 권장사항 예시이미지"
      								 className="max-w250" />
      						<figcaption>
      							[이미지 출처] 무인정보단말기 UI 플랫폼
      						</figcaption>
      					</figure>
      				</li>
      				<li>
      					<strong>화면에 깜빡이거나 번쩍이는 객체가 사용되지 않아야 합니다.</strong>
      				</li>
      				<li>
      					<strong>장애인과 고령자에게 접근성을 위한 기능을 제공해야 합니다.</strong>
      				</li>
      				<li>
      					<strong>고대비 화면을 제공하며, 사용자가 이를 쉽게 활성화할 수 있도록 제공하여야 합니다.</strong>
      				</li>
      				<li>
      					<strong>의미 있는 모든 콘텐츠는 대체 콘텐츠와 함께 제공해야 합니다.</strong>
      				</li>
      				<li>
      					<strong>의미 있는 모든 콘텐츠는 음성을 통해 안내해야 합니다.</strong>
      				</li>
      				<li>
      					<strong>점자 표시를 제공해야 합니다.</strong>
      				</li>
      				<li>
      					<strong>의미 있는 모든 콘텐츠는 수어 안내를 함께 제공해야 합니다.</strong>
      				</li>
      				<li>
      					<strong>컨트롤 영역의 위치는 지면에서 400mm~1,220mm 사이에 있어야 합니다.</strong>
      				</li>
      				<li>
      					<strong>화면 내의 시각적 정보의 위치는 바닥으로부터 1,220mm를 넘지 않아야 합니다.</strong>
      				</li>
      				<li>
      					<strong>중요한 입력이 완료된 경우에는 이를 알려주는 소리 정보를 제공해야 합니다.</strong>
      				</li>
      				<li>
      					<strong>입력 오류를 정정하는 방법을 제공해야 하고, 오류 발생 원인에 대한 정확한 시각/비시각 안내가 제공되어야 합니다.</strong>
      				</li>
      				<li>
      					<strong>개인정보는 사용자가 직접 설정할 수 있도록 제공해야 합니다.</strong>
      				</li>
      				<li>
      					<strong>생체 인식 형태의 사용자 식별 또는 제어를 사용하는 경우, 사용자를 인식할 수 있는 다양한 방법을 제공해야 합니다.</strong>
      				</li>
      				<li>
      					<strong>무인정보단말기에 입력 및 출력되는 개인정보는 보호되어야 합니다.</strong>
      					<figure className="img_figure mt_s mb_s">
      						<img src={`${IMG.A11Y_TECH_KIOSK}/ui_check06_3.jpg`}
      								 alt="무인정보단말기에 입력 및 출력되는 개인정보는 보호되어야 한다 의 권장사항 예시이미지1"
      								 className="max-w250" />
      						<img src={`${IMG.A11Y_TECH_KIOSK}/ui_check06_4.jpg`}
      								 alt="무인정보단말기에 입력 및 출력되는 개인정보는 보호되어야 한다 의 권장사항 예시이미지1"
      								 className="max-w250" />
      						<figcaption>
      							[이미지 출처] 무인정보단말기 UI 플랫폼
      						</figcaption>
      					</figure>
      				</li>
      				<li>
      					<strong>지원되는 모든 외국어 서비스는 한국어 서비스와 동등한 수준의 접근성 서비스를 제공해야 합니다.</strong>
      				</li>
      			</ul>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">장애 유형별 UI</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<b>
      					의미 있는 모든 콘텐츠는 대체 콘텐츠와 함께 제공해야 합니다.
      				</b><br />
      				대체 콘텐츠(이미지, 음성 안내, 자막 안내, 수어 안내 등)를 표시해 주면 고령자, 장애인 등이 무인정보단말기의 반응을 인지하기 편할 수 있습니다.
      				화면에 문자 및 그림, 영상 정보가 의미를 지니는 경우, 이와 동등한 대체 콘텐츠를 제공해야 합니다.
      				모든 그림과 영상 정보에 대해서는 대체 텍스트가 정확한 내용으로 제공되어야 합니다.
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">시각장애인 (음성 안내)</h3>
      			<blockquote className="uk_note mt_ml" role="note">
      				<strong className="sound_only">요약 설명</strong>
      				<p>
      					<b>의미 있는 모든 콘텐츠는 음성을 통해 안내해야 합니다.</b><br />
      					모든 시각적 정보는 음성과 함께 제공되어야 합니다.
      					무인정보단말기의 각 화면에서 어떤 정보가 제공되고 어떤 과업을 수행해야 하는지 알 수 있도록 음성으로 안내하여,
      					시각장애인이 무인정보단말기를 정확하게 사용할 수 있도록 지원해야 합니다.
      				</p>
      				<p className="mt_s reference">
      					<a href="https://www.kioskui.or.kr/index.do?menu_id=00001260" title="새창 열림" target="_blank" rel="noreferrer" className="fas weight-500">
      						무인정보단말기 UI 플랫폼 &gt; 무인정보단말기 &gt; 장애 유형별 공통 UI 가이드 &gt; 음성
      					</a>
      				</p>
      			</blockquote>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">음성 출력 기준 (단위: dBA (※ A-weighted decibel))</h4>
      				<ul className="mt_ms dot_lst info_lst gap-column-important-ms">
      					<li>
      						<strong>음량 보장</strong>
      						<ul className="dot_lst dot_lst_inner">
      							<li>
      								<b>기준 음량</b> : 65dBA
      							</li>
      							<li>
      								스피커를 통해 제공되는 음량은 오픈된 장소에서도 인지할 수 있도록 65dBA 보장해야 하며,
      								65dBA 이하로 조절할 수 있는 수단을 제공해야 합니다.
      							</li>
      						</ul>
      					</li>
      					<li>
      						<strong>음량 초기화</strong>
      						<ul className="dot_lst dot_lst_inner">
      							<li>
      								<b>기준 음량</b> : 65dBA 이하
      							</li>
      							<li>
      								단말기 음성이 소음이 되지 않도록 사용 후 스피커 음량을 65dBA 이하로
      								자동으로 작은 소리로 초기화할 수 있는 기능이 제공되어야 합니다.
      							</li>
      						</ul>
      					</li>
      					<li>
      						<strong>음량 조절 범위</strong>
      						<ul className="dot_lst dot_lst_inner">
      							<li>
      								<b>기준 음량</b> : 18dB 이상
      							</li>
      							<li>
      								사용자의 청력에 따라 조절할 수 있는 충분한 범위를 제공하기 위해 음량 조절 범위는 18dB 이상으로 합니다.<br />
      								(예. 65dBA-18dB ~ 65dBA+18dB)
      							</li>
      						</ul>
      					</li>
      					<li>
      						<strong>음량 조절 단계</strong>
      						<ul className="dot_lst dot_lst_inner">
      							<li>
      								<b>기준 음량</b> : 12dB 이하
      							</li>
      							<li>
      								음량 조절 단계는 12dB 미만으로 하여 정교한 조절이 가능하게 합니다.
      								적어도 하나 이상의 조절 단계를 제공하도록 설계되어야 합니다.
      							</li>
      						</ul>
      					</li>
      				</ul>
      			</div>
      			

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">음성 안내 세부 설정</h4>
      				<ul className="mt_ms dot_lst info_lst gap-column-important-ms">
      					<li>
      						<strong>사용자가 인지할 수 있는 음성 출력 기준을 준수해야 합니다.</strong>
      						<p>
      							음량의 크기는 65dBA를 보장해야 하며, 음량의 조절 범위는 18dB 이상으로 제공되어야 합니다.
      						</p>
      					</li>
      					<li>
      						<strong>음성 안내를 제어할 수 있도록 해야 합니다.</strong>
      						<ul className="dot_lst dot_lst_inner">
      							<li>
      								음성 안내를 중지할 수 있는 기능이 제공되어야 하며, 음성 안내의 음량 및 속도를 사용자가 직접 조절할 수 있도록 제공해야 합니다.
      							</li>
      							<li>
      								음성 안내 다시 듣기 기능을 제공하여 편의성을 높여야 합니다.
      							</li>
      							<li>
      								과업에 방해가 될 수 있으므로, 사용자의 선호에 따라 음성 안내를 활성화하거나 차단할 수 있어야 합니다.
      							</li>
      						</ul>
      					</li>
      					<li>
      						<strong>다시 듣기 기능을 제공해야 합니다.</strong>
      						<ul className="dot_lst dot_lst_inner">
      							<li>
      								음성으로 안내되는 긴 문장을 기억하기 어려운 사용자는 이를 반복해서 읽어주는 수단이 필요합니다.
      							</li>
      							<li>
      								‘다시 듣기’ 컨트롤을 제공하여, 해당 컨트롤을 누를 때마다 직전의 음성 안내 또는 맥락에 맞는 음성 안내를 반복해서 읽어줘야 합니다.
      							</li>
      						</ul>
      					</li>
      					<li>
      						<strong>음성 안내 종료 기능을 제공해야 합니다.</strong>
      						<ul className="dot_lst dot_lst_inner">
      							<li>
      								음성을 제공하는 무인정보단말기는 음성으로 읽어주는 과정에서 이를 종료할 수 있는 기능이 제공되어야 합니다.
      							</li>
      							<li>
      								화면 전환, 서식 작성 등과 같이 맥락의 변화가 있을 경우,
      								음성 안내를 멈추지 않으면 맥락의 변화로 인한 새로운 음성 안내와 중첩되어 사용자가 음성 안내를 정확히 인식하기 어렵습니다.
      							</li>
      							<li>
      								컨트롤이나 키를 누르면 이전의 음성 안내를 멈추고 새로운 음성 안내를 시작해야 합니다.
      							</li>
      						</ul>
      					</li>
      				</ul>
      			</div>
      			

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">음성 안내 원칙</h4>
      				<ul className="mt_ms dot_lst info_lst gap-column-important-ms">
      					<li>
      						<strong>음성 안내를 간결하고 명확하게 제공해야 합니다.</strong>
      						<ul className="dot_lst dot_lst_inner">
      							<li>
      								음성 안내 제공 시 피드백 및 안내를 짧게 유지하여 제공해야 합니다.
      							</li>
      							<li>
      								발화량을 단순하게 유지하여 간결하고 짧게 제공하도록 해야 합니다.
      							</li>
      							<li>
      								음성 안내 시 간결한 방식으로 제공하며 시각장애인이 쉽고 빠르게 이해하고 접근할 수 있도록 해야 합니다.
      							</li>
      						</ul>
      					</li>
      					<li>
      						<strong>음성 안내는 인터페이스와 마찬가지로 일관성이 있어야 합니다.</strong>
      						<p>
      							음성 안내는 무인정보단말기 사용에 있어서 유사한 동작이 유사한 결과를 초래하도록 하여 일관성을 유지해야 합니다.
      						</p>
      					</li>
      					<li>
      						<strong>실제 세계의 언어와 개념을 일치시켜야 합니다.</strong>
      						<ul className="dot_lst dot_lst_inner">
      							<li>
      								음성 안내는 실제 세계의 상징과 조작법과 일치시켜야 합니다.
      							</li>
      							<li>
      								음성 안내에서 사용되는 언어와 개념은 사용자가 일상적으로 사용하는 것과 일치해야 합니다.
      							</li>
      							<li>
      								사용자에게 친숙한 단어, 구어체 등을 사용하여 정보를 자연스럽고 논리적인 순서로 제공할 수 있어야 합니다.
      							</li>
      							<li>
      								개념을 일치시켜 시각장애인들에게 혼란을 방지하고 이해하기 쉽도록 도와줄 수 있습니다.
      							</li>
      							<li>
      								시각장애인들에게 ‘예, 아니요’ 응답을 받을 경우에는 숫자 키패드 버튼으로 안내하기보다는
      								‘확인’, ‘취소’ 버튼을 누르도록 안내해야 합니다.
      							</li>
      						</ul>
      					</li>
      					<li>
      						<strong>시스템의 가시성/피드백을 제공해야 합니다.</strong>
      						<ul className="dot_lst dot_lst_inner">
      							<li>
      								음성 안내는 무인정보단말기의 상태를 표시하고 사용자에게 유익한 피드백을 제공해야 합니다.
      							</li>
      							<li>
      								시각장애인이 입력에 대한 피드백을 음성 안내를 통해 제공하거나 현재 무인정보단말기의 진행 상태를
      								시각장애인에게 명확히 전달하는 것을 의미합니다.
      							</li>
      							<li>
      								음성 안내를 통한 가시성/피드백 제공은 시각장애인에게 입력이 올바르게 이루어졌는지 인지하는 데 도움을
      								주어 입력 오류와 혼란을 최소화하도록 합니다.
      							</li>
      						</ul>
      					</li>
      					<li>
      						<strong>사용자가 오류를 인식하고 복구할 수 있도록 지원해야 합니다.</strong>
      						<ul className="dot_lst dot_lst_inner">
      							<li>
      								사용자 오류 방지를 지원해야 합니다.
      							</li>
      							<li>
      								음성 안내는 사용자가 무인정보단말기를 사용할 때 오류가 발생하지 않도록 오류 방지 메커니즘과 제한 조건이 구축되어 있어야 합니다.
      							</li>
      							<li>
      								사용자 인터페이스는 간단한 오류 처리와 복구 기능을 제공하여 사용자가 오류를 인식하고 복구할 수 있도록 도와야 합니다.
      							</li>
      						</ul>
      					</li>
      				</ul>
      			</div>
      			

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">음성 안내 제작</h4>
      				<ul className="mt_ms dot_lst info_lst gap-column-important-ms">
      					<li>
      						<strong>무인정보단말기가 제공하는 서비스에 맞는 음성 안내 스크립트를 작성해야 합니다.</strong>
      						<ul className="dot_lst dot_lst_inner">
      							<li>
      								음성 안내 스크립트를 작성하는 데 있어서, 먼저 무인정보단말기가 어떤 서비스나 정보를 제공하는지
      								이해하고 목적을 정의해야 합니다.
      							</li>
      							<li>
      								무인정보단말기를 사용할 예상 대상 사용자를 고려하여, 나이, 언어, 문화적 배경 등을 고려하여
      								음성 안내 스크립트를 작성해야 합니다.
      							</li>
      							<li>
      								사용자의 흐름을 고려하여 시나리오 기반으로 설계하며, 사용자가 어떤 단계에서 어떤 정보가 있어야
      								하는지를 고려하여 음성 안내를 설계해야 합니다.
      							</li>
      						</ul>
      					</li>
      					<li>
      						<strong>간결하고 명확한 언어를 사용해야 합니다.</strong>
      						<ul className="dot_lst dot_lst_inner">
      							<li>
      								음성 안내를 만들 때는 명확하고 사용자가 이해하기 쉬운 스크립트를 작성해야 합니다.
      							</li>
      							<li>
      								자연스럽고 일상적인 언어를 사용하여 음성 안내를 설계해야 하며, 형식적이거나 어색한 표현을 피해야 합니다.
      							</li>
      						</ul>
      					</li>
      					<li>
      						<strong>음성 안내의 어조와 속도는 사용자를 고려해야 합니다.</strong>
      						<ul className="dot_lst dot_lst_inner">
      							<li>
      								음성 안내의 목적을 정의하고 어떤 사용자를 대상으로 하는지를 정의해야 합니다.
      							</li>
      							<li>
      								명확한 목적과 대상 사용자를 기반으로 설계해야 합니다.
      							</li>
      							<li>
      								안내 음성의 톤과 속도를 자연스럽게 조절하고, 긴장이나 혼란을 줄이기 위해 차분하고 친근한 어조를 사용해야 합니다.
      							</li>
      							<li>
      								사용자에게 친근하고 신뢰감을 줄 수 있는 톤을 선택해야 합니다.
      							</li>
      						</ul>
      					</li>
      					<li>
      						<strong>설계한 음성 안내를 실제 사용자에게 테스트하고, 사용자 피드백을 수집하여 개선해야 한다.</strong>
      					</li>
      					<li>
      						<strong>음성 안내 시스템이 다루는 정보가 민감한 경우, 보안 및 개인정보 보호에 유의하여 시스템을 구성해야 합니다.</strong>
      						<p>
      							보안 및 개인정보 보호가 필요한 민감한 정보를 다루는 경우, 보안과 개인정보 보호를 고려하여 음성 안내를 설계해야 합니다.
      						</p>
      					</li>
      				</ul>
      			</div>
      			

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">음성 안내 항목 및 내용</h4>
      				<ul className="mt_ms dot_lst info_lst gap-column-important-ms">
      					<li>
      						<strong>음성 안내는 무인정보단말기 사용 도움말을 제공해야 합니다.</strong>
      						<ul className="dot_lst dot_lst_inner">
      							<li>
      								음성 안내 시 사용자에게 무인정보단말기 사용 도움말을 제공하여 명확한 사용 방법을 안내해야 합니다.
      							</li>
      							<li>
      								상세한 도움말은 사용자의 오류를 줄이고 불필요한 혼란을 방지하는 데 도움을 줍니다.
      							</li>
      							<li>
      								사용자가 과업별로 진행하기 위하여 어떠한 과업을 진행해야 하는지, 어떻게 입력하는지 등에 대해서 알려주어야 합니다.
      							</li>
      							<li>
      								추가로 이어폰 단자, 카드 투입구, 영수증 출력구, 바코드 등 디바이스의 위치를 안내하여 사용할 수 있도록 해야 합니다.
      							</li>
      						</ul>
      					</li>
      				</ul>
      			</div>
      			

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">무인주문기 음성 안내 예시</h4>
      				<p className="mt_ms">
      					음성 안내 설계 가이드에 따라 무인주문기 음성 안내의 각 화면 음성 안내 작성 예시입니다.
      				</p>
      				<div className="mt_ms">
      					<video controls style={{ width: "100%", maxWidth: "320px", borderRadius: "8px", border: "1px solid rgba(0,0,0,.12)" }} poster={`${IMG.A11Y_TECH_KIOSK}/order_voice_poster.png`}>
      						<source src="https://www.kioskui.or.kr/cmsh/kioskui.or.kr/file/order_voice.mp4" type="video/mp4" />
      					</video>
      					<p className="mt_s">무인주문기 음성 안내 예시 출처 - 무인정보단말기 UI 플랫폼</p>
      				</div>
      			</div>
      			
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">시각장애인 (점자 표기)</h3>
      			<blockquote className="uk_note mt_ml" role="note">
      				<strong className="sound_only">요약 설명</strong>
      				<p>
      					<b>점자 표시를 제공해야 합니다.</b><br />
      					무인정보단말기에 부착된 장치(예: 신용카드 투입구, 티켓 배출함 등)에 용도와 목적을 알 수 있도록
      					점자 표시를 하여 시각장애인의 정확한 무인정보단말기 사용을 지원해야 합니다.
      				</p>
      				<p className="mt_s reference">
      					<a href="https://www.kioskui.or.kr/index.do?menu_id=00001260" title="새창 열림" target="_blank" rel="noreferrer" className="fas weight-500">
      						무인정보단말기 UI 플랫폼 &gt; 무인정보단말기 &gt; 장애 유형별 공통 UI 가이드 &gt; 점자
      					</a>
      				</p>
      			</blockquote>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">점자 기본 정의</h4>
      				<p className="mt_ms">
      					점자는 시각장애인들이 사용하는 문자입니다.
      					점자는 가로 3줄, 세로 2줄로 배열된 6개의 양각 점으로 구성되며,
      					점의 수와 위치에 따라 63가지 서로 다른 점형이 만들어져 각각 글자를 나타냅니다.<br />
      					한 칸의 점에는 번호가 매겨져 왼쪽 위에서 아래로 1점, 2점, 3점, 오른쪽 위에서 아래로 4점, 5점, 6점으로 구분합니다.
      					점자는 시각이 아닌 촉각으로 읽기 때문에 점의 높이, 지름, 점간 거리가 식별과 가독성에 큰 영향을 줍니다.<br />
      					자세한 내용은 국립국어원의 ‘한글 점자 규정 해설’을 참고하시기 바랍니다.
      				</p>
      				<a href="https://www.korean.go.kr/front/page/pageView.do?page_id=P000499" className="mt_s box_link external" target="_blank" rel="noreferrer" title="국립국어원 ‘점자 규정과 해설’바로가기">국립국어원 ‘점자 규정과 해설’</a>
      				<figure className="img_figure mt_m">
      					<img src={`${IMG.A11Y_TECH_KIOSK}/img_braille01.jpg`}
      							 alt="점자 예시 (왼쪽 위에서 아래 1점, 2점, 3점, 오른쪽 위에서 아래 4점, 5점, 6점)" />
      					<figcaption>
      						[이미지 출처] 무인정보단말기 UI 플랫폼
      					</figcaption>
      				</figure>
      			</div>
      			

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">점자 표시 규격</h4>
      				<ul className="mt_ms dot_lst info_lst gap-column-important-ms">
      					<li>
      						<strong>한국 점자 규격을 준수하여 점자 표시를 해야 합니다.</strong>
      						<ul className="dot_lst dot_lst_inner">
      							<li>
      								무인정보단말기에 표시되는 점자는 가독성이 높도록 점자 규격을 준용해야 하며, 점자 표시는 반구형으로 제작하는 것을 원칙으로 합니다.<br />
      								평평하고 각진 부식형의 경우 손빔, 이질적 촉지감, 가독성 등 이유로 사용을 금하도록 해야 합니다.
      							</li>
      							<li>
      								「점자법」 제10조(점자규정 등의 제정 및 개정)에 따라 한국 점자 규정(문화체육관광부 고시)에서 점자 표시 방법을 규정하고 있습니다.
      								무인정보단말기의 점자 표시는 해당 고시를 따라 기재하는 것을 기본 원칙으로 하며,
      								제작된 무인정보단말기의 점자 표시는 점역 교정사의 검수를 받아 실제 인식 정확도 확인 작업을 거쳐야 합니다.<br />
      								(※ 점자 표기 방법은 한국 점자 규정[문화체육관광부고시 제2020-38호(2020.9.10.)]에 따르는 것을 기본 원칙으로 합니다.)
      							</li>
      						</ul>
      						<figure className="img_figure mt_s mb_sm">
      							<img src={`${IMG.A11Y_TECH_KIOSK}/img_braille02_1.jpg`} alt="반구형 점자 예시이미지" />
      							<figcaption>
      								[이미지 출처] 무인정보단말기 UI 플랫폼 - 반구형 점자
      							</figcaption>
      						</figure>
      					</li>
      					<li>
      						<strong>점자의 세부규격</strong>
      						<ul className="dot_lst dot_lst_inner">
      							<li>
      								<b>점 높이</b> : 반구형 점의 중심정에서 밑면까지의 거리<br />
      								0.6mm ~ 0.9mm
      							</li>
      							<li>
      								<b>점 지름</b> : 반구형 점의 밑면 중심을 지나 점의 둘레와 만나는 직선거리<br />
      								1.5mm ~ 1.6mm
      							</li>
      							<li>
      								<b>점간 거리</b> : 점칸 내 한 점의 중심점에서 인접한 다른 점의 중심점까지의 거리<br />
      								2.3mm ~ 2.5mm
      							</li>
      							<li>
      								<b>자간 거리</b> : 수평으로 나열된 두 점칸에서 같은 점 번호에 해당하는 두 점의 중심점 사이의 거리<br />
      								5.5mm ~ 6.9mm(종이, 스티커)<br />
      								5.5mm ~ 7.3mm(PVC)<br />
      								5.5mm ~ 7.6mm(알루미늄, 스테인리스)<br />
      								기타 재질 : 위의 규격을 준용
      							</li>
      							<li>
      								<b>줄간 거리</b> : 수직으로 나열된 두 점칸에서 같은 점 번호에 해당하는 두 점의 중심점 사이의 거리<br />
      								10.0mm 이상
      							</li>
      						</ul>
      						<figure className="img_figure mt_s mb_sm">
      							<img src={`${IMG.A11Y_TECH_KIOSK}/img_braille03.jpg`} alt="점자 규격 예시이미지" />
      							<figcaption>
      								[이미지 출처] 무인정보단말기 UI 플랫폼 - 점자 규격(단위:mm)
      							</figcaption>
      						</figure>
      					</li>
      				</ul>
      			</div>
      			

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">점자 표시 위치</h4>
      				<ul className="mt_ms dot_lst info_lst gap-column-important-ms">
      					<li>
      						<strong>점자 표시 위치를 되도록 일관되게 제공해야 합니다.</strong>
      						<ul className="dot_lst dot_lst_inner">
      							<li>
      								시각장애인이 무인정보단말기에 부착된 장치를 쉽게 구별하기 위해서는 장치마다 일관된 위치에 점자를 표시하는 것이 중요합니다.
      							</li>
      							<li>
      								결제 단말기, 바코드 스캐너 등과 같이 돌출된 경우에도 가급적 개별 장치 윗면에 표시할 것을 권장합니다.
      							</li>
      							<li>
      								일반 활자와 겹쳐서 표시하지 않는 것을 원칙으로 합니다.
      							</li>
      							<li>
      								또한, 점자 외 디자인 목적의 표시 등이 손가락으로 점자를 인지하는 데 어려움이 없도록 해야 합니다.
      							</li>
      							<li>
      								점자 표시의 일관된 위치를 제공해 명확한 장치 식별이 가능해야 오사용에 따른 피해를 방지할 수 있습니다.
      							</li>
      						</ul>
      					</li>
      					<li>
      						<strong>점자 표시 방향을 준수해야 합니다.</strong>
      						<ul className="dot_lst dot_lst_inner">
      							<li>
      								무인정보단말기를 설계하고 제조하는 사람은 시각장애인이 아니기에 점자 내용을 모를 수 있습니다.
      							</li>
      							<li>
      								예시처럼 같은 내용이 뒤집어 부착된다면, 시각장애인은 촉지를 통해 점자 내용을 알 수 없게 됩니다.
      							</li>
      							<li>
      								반드시 점자 내용을 확인해 부착 방향을 준수하여 제공해야 합니다.
      							</li>
      							<li>
      								설계 및 제조 과정에서 점역 교정사에게 검수받는 것을 권장합니다.
      							</li>
      						</ul>
      						<figure className="img_figure mt_s mb_sm">
      							<img src={`${IMG.A11Y_TECH_KIOSK}/img_braille05_1.jpg`} alt="방향 준수 예시이미지" />
      							<figcaption>
      								[이미지 출처] 무인정보단말기 UI 플랫폼 - 방향 준수 예시
      							</figcaption>
      						</figure>
      					</li>
      				</ul>
      			</div>
      			

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">점자 표시 제작</h4>
      				<ul className="mt_ms dot_lst info_lst gap-column-important-ms">
      					<li>
      						<strong>점자 표시는 알루미늄, 스테인리스처럼 내구성과 내마모성이 우수한 재질을 사용해야 합니다.</strong>
      						<p>
      							재질은 내마모성 및 내구성이 좋은 재질로 하며, 이질감과 손빔을 방지할 수 있는 재질을 사용해야 합니다.
      							또한, 온도의 변화에 쉽게 영향을 받지 않으며 청결을 유지할 수 있어야 합니다.
      						</p>
      						<dl className="mt_sm dl_dot_lst">
      							<dt>재질 특성 :</dt>
      							<dd>
      								<b>폴리카보네이트</b> : 뛰어난 내충격성과 내후성을 지니고 있으며, 시공성이 우수합니다.
      								내열성이 높고 저온 특성도 우수하여 -40℃∼135℃ 범위에서도 안정적인 성능을 유지합니다.
      								흡수성이 적고 자기 소화성이 매우 뛰어나며, 무독성이며 물과 약산에 대한 저항성도 우수합니다.
      							</dd>
      							<dd>
      								<b>알루미늄, 스테인리스</b> : 매우 뛰어난 내충격성과 내후성을 가지며 시공성이 우수하고, 반영구적으로 사용 가능합니다.
      								흡수성이 없어 점자 표시 재질로 적합합니다.
      							</dd>
      							<dd>
      								<b>투명테이프(다이모, 모텍스 등)</b> : 보존성이 약하여 사용을 금합니다.<br />
      								단, 부득이하게 사용해야 하는 경우에는 임시 방편용으로만 사용해야 합니다.
      							</dd>
      						</dl>
      					</li>
      					<li>
      						<strong>표시된 점자의 유지 및 보수에 신경 써야 합니다.</strong>
      						<ul className="dot_lst dot_lst_inner">
      							<li>
      								무인정보단말기에 부착된 장치의 위치나 내용이 변경된 경우, 점자 표시의 내용도 즉각 수정해야 합니다.
      							</li>
      							<li>
      								사용 중인 무인정보단말기의 점자 표시가 일부 소실되거나 마모되어 인지하기 어려운 경우, 즉시 새것으로 교체해야 합니다.
      							</li>
      							<li>
      								점자는 시각장애인이 촉지를 통해 인지하므로, 표면을 정기적으로 청소하여 청결하게 유지해야 합니다.
      							</li>
      						</ul>
      					</li>
      				</ul>
      			</div>
      			

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">점자 표시 항목 및 내용</h4>
      				<ul className="mt_ms dot_lst info_lst gap-column-important-ms">
      					<li>
      						<strong>정확하고 통일된 내용을 점자 표시에 사용해야 합니다.</strong>
      						<p>
      							무인정보단말기에 부착된 모든 개별 장치에 점자 표시를 해야 하며, 정확하고 통일된 내용을 점자 표시에 사용해야 합니다.
      						</p>
      					</li>
      				</ul>
      			</div>
      			

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">점자 표시 문구 예시</h4>
      				<p className="mt_ms dp_mb">
      					[이미지 출처] 무인정보단말기 UI 플랫폼
      				</p>
      				<div className="table_summary value_200 mt_ms">
      					<ul className="lst_hd">
      						<li className="cell value">항목</li>
      						<li className="cell content">
      							점자 표기
      							<p className="dp_pc">[이미지 출처] 무인정보단말기 UI 플랫폼</p>
      						</li>
      					</ul>
      					<ul className="lst_bd">
      						<li>
      							<p className="cell value t_black">신용카드</p>
      							<p className="cell content"><img src={`${IMG.A11Y_TECH_KIOSK}/img_braille06_1.jpg`} alt="신용카드 점자표시 예시이미지" /></p>
      						</li>
      						<li>
      							<p className="cell value t_black">신용카드 넣는 곳</p>
      							<p className="cell content"><img src={`${IMG.A11Y_TECH_KIOSK}/img_braille06_2.jpg`} alt="신용카드 넣는 곳 점자표시 예시이미지" /></p>
      						</li>
      						<li>
      							<p className="cell value t_black">카드 넣는 곳</p>
      							<p className="cell content"><img src={`${IMG.A11Y_TECH_KIOSK}/img_braille06_3.jpg`} alt="카드 넣는 곳 점자표시 예시이미지" /></p>
      						</li>
      						<li>
      							<p className="cell value t_black">결제 단말기</p>
      							<p className="cell content"><img src={`${IMG.A11Y_TECH_KIOSK}/img_braille06_4.jpg`} alt="결제 단말기 점자표시 예시이미지" /></p>
      						</li>
      						<li>
      							<p className="cell value t_black">바코드</p>
      							<p className="cell content"><img src={`${IMG.A11Y_TECH_KIOSK}/img_braille06_5.jpg`} alt="바코드 점자표시 예시이미지" /></p>
      						</li>
      						<li>
      							<p className="cell value t_black">바코드 스캐너</p>
      							<p className="cell content"><img src={`${IMG.A11Y_TECH_KIOSK}/img_braille06_6.jpg`} alt="바코드 스캐너 점자표시 예시이미지" /></p>
      						</li>
      						<li>
      							<p className="cell value t_black">바코드 대는 곳</p>
      							<p className="cell content"><img src={`${IMG.A11Y_TECH_KIOSK}/img_braille06_7.jpg`} alt="바코드 대는 곳 점자표시 예시이미지" /></p>
      						</li>
      						<li>
      							<p className="cell value t_black">영수증</p>
      							<p className="cell content"><img src={`${IMG.A11Y_TECH_KIOSK}/img_braille07_1.jpg`} alt="영수증 점자표시 예시이미지" /></p>
      						</li>
      						<li>
      							<p className="cell value t_black">영수증 나오는 곳</p>
      							<p className="cell content"><img src={`${IMG.A11Y_TECH_KIOSK}/img_braille07_2.jpg`} alt="영수증 나오는 곳 점자표시 예시이미지" /></p>
      						</li>
      						<li>
      							<p className="cell value t_black">용지 나오는 곳</p>
      							<p className="cell content"><img src={`${IMG.A11Y_TECH_KIOSK}/img_braille07_3.jpg`} alt="용지 나오는 곳 점자표시 예시이미지" /></p>
      						</li>
      						<li>
      							<p className="cell value t_black">출력물 나오는 곳</p>
      							<p className="cell content"><img src={`${IMG.A11Y_TECH_KIOSK}/img_braille07_4.jpg`} alt="출력물 나오는 곳 점자표시 예시이미지" /></p>
      						</li>
      						<li>
      							<p className="cell value t_black">티켓 나오는 곳</p>
      							<p className="cell content"><img src={`${IMG.A11Y_TECH_KIOSK}/img_braille07_5.jpg`} alt="티켓 나오는 곳 점자표시 예시이미지" /></p>
      						</li>
      						<li>
      							<p className="cell value t_black">발권 내역 나오는 곳</p>
      							<p className="cell content"><img src={`${IMG.A11Y_TECH_KIOSK}/img_braille07_6.jpg`} alt="발권 내역 나오는 곳 점자표시 예시이미지" /></p>
      						</li>
      						<li>
      							<p className="cell value t_black">증명서 나오는 곳</p>
      							<p className="cell content"><img src={`${IMG.A11Y_TECH_KIOSK}/img_braille07_7.jpg`} alt="증명서 나오는 곳 점자표시 예시이미지" /></p>
      						</li>
      						<li>
      							<p className="cell value t_black">음성안내</p>
      							<p className="cell content"><img src={`${IMG.A11Y_TECH_KIOSK}/img_braille08_1.jpg`} alt="음성안내 점자표시 예시이미지" /></p>
      						</li>
      						<li>
      							<p className="cell value t_black">음성 안내 시작</p>
      							<p className="cell content"><img src={`${IMG.A11Y_TECH_KIOSK}/img_braille08_2.jpg`} alt="음성 안내 시작 점자표시 예시이미지" /></p>
      						</li>
      						<li>
      							<p className="cell value t_black">이어폰</p>
      							<p className="cell content"><img src={`${IMG.A11Y_TECH_KIOSK}/img_braille08_3.jpg`} alt="이어폰 점자표시 예시이미지" /></p>
      						</li>
      						<li>
      							<p className="cell value t_black">이어폰 연결</p>
      							<p className="cell content"><img src={`${IMG.A11Y_TECH_KIOSK}/img_braille08_4.jpg`} alt="이어폰 연결 점자표시 예시이미지" /></p>
      						</li>
      						<li>
      							<p className="cell value t_black">볼륨 조절</p>
      							<p className="cell content"><img src={`${IMG.A11Y_TECH_KIOSK}/img_braille08_5.jpg`} alt="볼륨 조절 점자표시 예시이미지" /></p>
      						</li>
      						<li>
      							<p className="cell value t_black">음성 안내 볼륨 조절</p>
      							<p className="cell content"><img src={`${IMG.A11Y_TECH_KIOSK}/img_braille08_6.jpg`} alt="음성 안내 볼륨 조절 점자표시 예시이미지" /></p>
      						</li>
      						<li>
      							<p className="cell value t_black">키패드</p>
      							<p className="cell content"><img src={`${IMG.A11Y_TECH_KIOSK}/img_braille08_7.jpg`} alt="키패드 점자표시 예시이미지" /></p>
      						</li>
      						<li>
      							<p className="cell value t_black">숫자 키패드</p>
      							<p className="cell content"><img src={`${IMG.A11Y_TECH_KIOSK}/img_braille08_8.jpg`} alt="숫자 키패드 점자표시 예시이미지" /></p>
      						</li>
      						<li>
      							<p className="cell value t_black">방향 키패드</p>
      							<p className="cell content"><img src={`${IMG.A11Y_TECH_KIOSK}/img_braille09_1.jpg`} alt="방향 키패드 점자표시 예시이미지" /></p>
      						</li>
      						<li>
      							<p className="cell value t_black">시각장애인 전용 키패드</p>
      							<p className="cell content"><img src={`${IMG.A11Y_TECH_KIOSK}/img_braille09_2.jpg`} alt="시각장애인 전용 키패드 점자표시 예시이미지" /></p>
      						</li>
      						<li>
      							<p className="cell value t_black">점자 디스플레이</p>
      							<p className="cell content"><img src={`${IMG.A11Y_TECH_KIOSK}/img_braille09_3.jpg`} alt="점자 디스플레이 점자표시 예시이미지" /></p>
      						</li>
      						<li>
      							<p className="cell value t_black">디스플레이</p>
      							<p className="cell content"><img src={`${IMG.A11Y_TECH_KIOSK}/img_braille09_4.jpg`} alt="디스플레이 점자표시 예시이미지" /></p>
      						</li>
      						<li>
      							<p className="cell value t_black">신분증 올려놓는 곳</p>
      							<p className="cell content"><img src={`${IMG.A11Y_TECH_KIOSK}/img_braille09_5.jpg`} alt="신분증 올려놓는 곳 점자표시 예시이미지" /></p>
      						</li>
      						<li>
      							<p className="cell value t_black">지폐 넣는 곳</p>
      							<p className="cell content"><img src={`${IMG.A11Y_TECH_KIOSK}/img_braille09_6.jpg`} alt="지폐 넣는 곳 점자표시 예시이미지" /></p>
      						</li>
      						<li>
      							<p className="cell value t_black">지폐 나오는 곳</p>
      							<p className="cell content"><img src={`${IMG.A11Y_TECH_KIOSK}/img_braille09_7.jpg`} alt="지폐 나오는 곳 점자표시 예시이미지" /></p>
      						</li>
      						<li>
      							<p className="cell value t_black">동전 넣는 곳</p>
      							<p className="cell content"><img src={`${IMG.A11Y_TECH_KIOSK}/img_braille10_1.jpg`} alt="동전 넣는 곳 점자표시 예시이미지" /></p>
      						</li>
      						<li>
      							<p className="cell value t_black">지문인식기</p>
      							<p className="cell content"><img src={`${IMG.A11Y_TECH_KIOSK}/img_braille10_2.jpg`} alt="지문인식기 점자표시 예시이미지" /></p>
      						</li>
      						<li>
      							<p className="cell value t_black">장정맥인식기</p>
      							<p className="cell content"><img src={`${IMG.A11Y_TECH_KIOSK}/img_braille10_3.jpg`} alt="장정맥인식기 점자표시 예시이미지" /></p>
      						</li>
      						<li>
      							<p className="cell value t_black">지정맥인식기</p>
      							<p className="cell content"><img src={`${IMG.A11Y_TECH_KIOSK}/img_braille10_4.jpg`} alt="지정맥인식기 점자표시 예시이미지" /></p>
      						</li>
      						<li>
      							<p className="cell value t_black">바이오 인증하는 곳</p>
      							<p className="cell content"><img src={`${IMG.A11Y_TECH_KIOSK}/img_braille10_5.jpg`} alt="바이오 인증하는 곳 점자표시 예시이미지" /></p>
      						</li>
      						<li>
      							<p className="cell value t_black">직원 호출</p>
      							<p className="cell content"><img src={`${IMG.A11Y_TECH_KIOSK}/img_braille10_6.jpg`} alt="직원 호출 점자표시 예시이미지" /></p>
      						</li>
      					</ul>
      				</div>
      			</div>
      			
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">청각장애인 (수어 안내)</h3>
      			<blockquote className="uk_note mt_ml" role="note">
      				<strong className="sound_only">요약 설명</strong>
      				<p>
      					<b>수어 안내를 제공해야 합니다.</b><br />
      					청각장애인이 무인정보단말기 사용 상황과 맥락을 알 수 있도록 의미 있는 모든 콘텐츠는 수어 안내를 제공해야 하며,
      					수어 안내 제공을 위한 리소스가 부족하다면, 자막 안내로 대체해야 합니다.
      				</p>
      				<p className="mt_s reference">
      					<a href="https://www.kioskui.or.kr/index.do?menu_id=00001050" title="새창 열림" target="_blank" rel="noreferrer" className="fas weight-500">
      						무인정보단말기 UI 플랫폼 &gt; 무인정보단말기 &gt; 장애 유형별 공통 UI 가이드 &gt; 수어
      					</a>
      				</p>
      			</blockquote>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">용어 정리</h4>
      				<ul className="mt_ms dot_lst info_lst gap-column-important-ms">
      					<li>
      						<strong>청각장애인</strong>
      						<p>
      							청력에 장애가 있는 사람.
      						</p>
      					</li>
      					<li>
      						<strong>한국수어</strong>
      						<p>
      							대한민국 농문화 속에서 시각ㆍ동작 체계를 바탕으로 생겨난 고유한 형식의 언어를 말합니다.
      						</p>
      					</li>
      					<li>
      						<strong>농인</strong>
      						<p>
      							청각장애를 가진 사람으로서 농문화 속에서 한국수어를 일상어로 사용하는 사람을 말합니다.
      						</p>
      					</li>
      					<li>
      						<strong>농문화</strong>
      						<p>
      							농인으로서의 농정체성과 가치관을 기반으로 하는 생활양식의 총칭을 말합니다.
      						</p>
      					</li>
      					<li>
      						<strong>한국수어 사용자</strong>
      						<p>
      							청각장애 또는 언어장애로 인하여 한국수어를 일상어로 사용하거나 보조적으로 사용하는 사람을 말합니다.
      						</p>
      					</li>
      					<li>
      						<strong>수어통역</strong>
      						<p>
      							한국수어를 국어로 변환하거나 국어를 한국수어로 변환하는 것을 말합니다.
      						</p>
      					</li>
      				</ul>
      			</div>
      			

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">수어 안내 규격</h4>
      				<ul className="mt_ms dot_lst info_lst gap-column-important-ms">
      					<li>
      						<strong>청각장애인이 제1언어로 사용하는 한국수어의 형태로 제공해야 합니다.</strong>
      						<p>
      							수어 안내는 표준 한국수어를 사용해야 하며,
      							무인정보단말기에 표시된 단어를 번역해주는 수지한국어는 지양해야 합니다.
      						</p>
      					</li>
      					<li>
      						<strong>수어 안내자 크기는 수어 동작을 명확히 인지할 수 있도록 해야 합니다.</strong>
      						<p>
      							무인정보단말기 화면과 사용자의 거리를 고려하여, 수어의 동작이 명확히 보일 수 있는 수어 안내자의 크기를 반영해야 합니다.
      						</p>
      					</li>
      					<li>
      						<strong>수어 안내를 위한 충분한 공간이 확보되어야 합니다.</strong>
      						<ul className="dot_lst dot_lst_inner">
      							<li>
      								수어 안내자의 상체는 전부 보여야 합니다.
      								또한, 수어 안내자의 좌, 우 그리고 머리 위 공간을 활용하는 수어의 표현을 고려하여 수어 안내자의
      								좌, 우 그리고 머리 위 방향의 충분한 수어 동작 공간이 확보되어야 합니다.
      							</li>
      							<li>
      								특히 명확한 구분선을 활용하여 별도의 공간으로 수어 안내를 제공하는 경우,
      								수어 안내자의 팔이 수어 안내 공간 밖으로 이탈하여 동작 확인을 할 수 없는 경우는 허용되어서는 안 됩니다.
      							</li>
      						</ul>
      					</li>
      					<li>
      						<strong>수어 동작을 명확히 인지할 수 있도록 수어 안내자 의상 색상을 반영해야 합니다.</strong>
      						<ul className="dot_lst dot_lst_inner">
      							<li>
      								수어 안내자(아바타)의 정확한 동작을 인식할 수 있도록 수어 안내자의 의상 색상과 배경 색상의 대비가 명확해야 합니다.
      							</li>
      							<li>
      								수어 안내자의 의상은 화려하거나 시선을 분산시키는 무늬로 된 의상, 가독성을 떨어뜨리는 장신구는 착용하지 않아야 합니다.
      							</li>
      						</ul>
      					</li>
      				</ul>
      				<figure className="img_figure mt_ms">
      					<img src={`${IMG.A11Y_TECH_KIOSK}/img_sign02_1.jpg`} alt="수어 안내자 권장 사례 예시이미지" />
      					<figcaption>
      						<b>수어 안내자 권장 사례 예시</b><br />
      						[이미지 출처] 무인정보단말기 UI 플랫폼
      					</figcaption>
      				</figure>
      			</div>
      			

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">수어 안내 위치</h4>
      				<ul className="mt_ms dot_lst info_lst gap-column-important-ms">
      					<li>
      						<strong>수어 안내는 정보와 컨트롤 영역을 피해서 고정적으로 특정 영역에 배치해야 합니다.</strong>
      						<ul className="dot_lst dot_lst_inner">
      							<li>
      								수어는 콘텐츠가 없는 상단에 고정적으로 위치시키는 것을 권장합니다.
      							</li>
      							<li>
      								하단에 배치할 경우 컨트롤 영역과 겹칠 우려가 있어 피하는 것이 좋습니다.
      								또한, 청각장애인이 과업을 수행하는 동안 무인정보단말기의 중앙을 보지 못하고 하단으로 시선이 가기 때문에
      								과업을 수행하는 데 있어 불편할 수 있습니다.
      							</li>
      							<li>
      								수어 안내를 사용하는 사람에게는 글자보다 수어 안내(영상)가 우선이 돼야 합니다.
      							</li>
      							<li>
      								수어는 무인정보단말기 콘텐츠를 이용하는 데 불편함이 없도록 위치하여야 합니다.
      							</li>
      							<li>
      								무인정보단말기의 다른 안내 화면을 가리지 않는 위치에 배치하거나 사용자에 의해서
      								확대, 축소, 닫기, 열기 기능을 제공하여 불편을 최소화할 수 있도록 권장합니다.
      							</li>
      						</ul>
      						<figure className="img_figure mt_s mb_sm">
      							<img src={`${IMG.A11Y_TECH_KIOSK}/img_sign01_1.jpg`} alt="수어 안내 무인정보단말기 권장 사례 예시이미지" />
      							<figcaption>
      								[이미지 출처] 무인정보단말기 UI 플랫폼
      							</figcaption>
      						</figure>
      					</li>
      					<li>
      						<strong>선택적으로 수어 안내 버튼을 눌러서 수어 모드를 선택할 수 있도록 제공해야 합니다.</strong>
      						<ul className="dot_lst dot_lst_inner">
      							<li>
      								수어 안내는 청각장애인이 수어 안내가 필요하다고 판단할 때 사용할 수 있도록 하는 것이 좋습니다.
      								또한, 반복 재생이나 일시 정지가 가능해야 합니다.
      							</li>
      							<li>
      								수어 아바타를 보조적인 정보 출력 콘텐츠로 제공할 경우, 디스플레이에서 제어할 수 있도록 버튼을 생성하여 수어 아바타의 필요 여부에 따라 사용할 수 있도록 설계되어야 합니다.
      							</li>
      							<li>
      								보조적인 출력장치로서의 수어 아바타는 필요하지 않은 사용자의 경우 화면 사용에 방해받지 않도록 사이즈와 크기를 조절할 수 있거나, 닫기 버튼을 통해 숨길 수 있도록 권장합니다.
      							</li>
      							<li>
      								사용자가 수어 아바타의 도움이 필요하여 수어 아바타 ‘켜기’ 컨트롤을 동작시키면 수어 아바타가 화면에 표출되도록 권장합니다.
      							</li>
      						</ul>
      					</li>
      				</ul>
      			</div>
      			

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">수어 안내 제작</h4>
      				<ul className="mt_ms dot_lst info_lst gap-column-important-ms">
      					<li>
      						<strong>수어 안내 스크립트(원고) 제작은 무인정보단말기 사용 상황과 맥락을 명확히 알 수 있도록 제작해야 합니다.</strong>
      						<p>
      							수어 안내는 단순히 화면을 설명하는 것이 아니라, 청각장애인이 실질적으로 무인정보단말기를
      							사용하는 데에 불편함 없이 도움을 줄 수 있어야 합니다.
      						</p>
      						<dl className="mt_sm dl_dot_lst">
      							<dt>한국수어와 한국어의 언어 구조적 차이 이해</dt>
      							<dd>
      								한국수어는 한국어와는 다른 고유한 문법 체계와 표현 양식을 가지고 있습니다.
      								한국어식으로는 표현할 수 없는 통사론적, 구문론적 특징이 있습니다.
      							</dd>
      							<dd>
      								한국수어를 단순히 한국어 문장대로 나열하기만 하면 된다고 생각하는 것은 잘못된 인식입니다.
      								문장식으로 한국수어를 표현하는 것은 한국수어가 아닙니다.
      							</dd>
      							<dd>
      								농인분들은 한국어 문장식으로 구성된 한국수어를 사용하지 않습니다.<br />
      								예를 들어, 영어를 한국어식으로 표현하면 어색한 것처럼, “나는 학교에 간다”를 직역한 영어 표현이 “I school to go”가 되는 것과 같습니다.
      								이와 같이 한국수어를 한국어 문장 순서대로 직역하게 되면 어색할 뿐만 아니라, 대부분의 농인분들이 이해하는 데에 어려움을 겪게 됩니다.
      							</dd>
      							<dd>
      								음성으로 한국어 문장을 표현할 수 있다고 하여도, 이를 손짓으로 직역해 표현하는 것은 무리입니다.
      								따라서 수어 스크립트를 작성하는 사람은 농인분들이 이해할 수 있는 단어나 문장을 선택해야 합니다.
      							</dd>
      						</dl>
      					</li>
      					<li>
      						<strong>수어 안내를 제작하는 데 적절한 인력을 구성해야 합니다.</strong>
      						<p>
      							수어 안내자와 감수자, 번역가는 2년 이상의 경력을 가진 수어에 능통한 농인이어야 합니다.
      							수어 안내자의 경우 수어 아바타로 대체할 수 있습니다.
      						</p>
      						<ul className="mt_sm dot_lst dot_lst_inner gap-column-important-sm">
      							<li>
      								<strong className="t_black">수어 안내자(수어 아바타) :</strong><br />
      								수어 안내자는 무인정보단말기 이용대상, 사용 상황 등 무인정보단말기 사용 맥락을 정확히 파악하여 번역된
      								스크립트 내용을 전달력 있게 구연하는 사람(아바타)을 지칭합니다.<br />
      								이는 아바타로 대체할 수 있습니다.
      							</li>
      							<li>
      								<strong className="t_black">한국수어 감수자 :</strong><br />
      								한국수어 감수자는 제작 현장에 참여하여 수어 안내자의 안내 내용 및 방법 등을 지도하고
      								제작 시 발생하는 오류사항 수정 등 제작 현장을 관리하는 사람을 지칭합니다.<br />
      								한국수어 감수자는 2년 이상의 경력을 가진 수어 및 한국어에 능통한 농인이 포함되어야 하며,
      								한국수어 감수자는 한국수어 감수표를 활용하여 수어 안내자에게 스크립트와
      								수어 표현의 일치 여부 확인 및 표정과 몸짓을 지도합니다.
      							</li>
      							<li>
      								<strong className="t_black">한국수어 번역가 :</strong><br />
      								한국수어 번역가는 청각장애인의 한국수어 능력을 고려하여 무인정보단말기
      								사용법을 왜곡하지 않는 범위 내에서 한국수어로 번역하는 사람을 지칭합니다.<br />
      								스크립트 제작 및 수어 번역을 하는 것을 의미하며,
      								한국수어 번역가는 2년 이상의 경력을 가진 수어 및 한국어에 능통한 농인이 포함되어야 합니다.
      								불가피한 경우 2년 이상의 경력을 가진 한국수어 통역사도 참여할 수 있습니다.
      							</li>
      							<li>
      								<strong className="t_black">수어 안내 번역 감수자 :</strong><br />
      								무인정보단말기 수어 안내를 위하여 한국수어로 번역된 스크립트 내용의 정확성을 점검합니다.
      							</li>
      						</ul>
      					</li>
      				</ul>
      			</div>
      			

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">수어 안내 항목 및 내용</h4>
      				<ul className="mt_ms dot_lst info_lst gap-column-important-ms">
      					<li>
      						<strong>무인정보단말기 사용 상황과 맥락을 이해하기 위한 수어 안내를 해야 합니다.</strong>
      						<ul className="dot_lst dot_lst_inner">
      							<li>
      								메뉴와 같은 단어 위주가 아닌 무인정보단말기 화면마다 사용 상황과 맥락에 맞는 수어 안내를 해야 합니다.
      							</li>
      							<li>
      								수어는 음성을 표현 양식으로 사용하는 영어나 한국어와 달리 손과 표정,
      								몸의 움직임과 함께 공간을 활용해 의미 정보와 문법 정보를 전달하는 시각언어입니다.
      							</li>
      							<li>
      								수어 전문가의 감수를 통해 높은 이해도의 수어 안내를 제공해야 합니다.<br />
      								또한, 수어 안내 콘텐츠 제작 프로세스에서 사용자 UX까지 최적화하여 제공해야 합니다.
      							</li>
      						</ul>
      					</li>
      					<li>
      						<strong>모든 메뉴에서 수어 안내가 제공되어야 합니다.</strong>
      						<p>
      							수어 안내만으로 무인정보단말기 사용에 불편함이 없도록
      							수어 안내 모드가 선택된 경우에는 모든 안내가 수어로 제공되는 것을 권장합니다.
      						</p>
      					</li>
      					<li>
      						<strong>글자 안내보다 수어 안내가 우선적으로 제공되어야 합니다.</strong>
      						<p>
      							수어 안내를 사용하는 사람에게는 글자보다 수어 안내(영상)가 우선이 되어야 하며,
      							화면의 공간이 확보된다면 수어와 한국어를 함께 제공하는 것을 권장합니다.
      						</p>
      					</li>
      				</ul>
      			</div>
      			
      		</article>
      		
      	</section>

    </>
  )
}

export default KioskPage
