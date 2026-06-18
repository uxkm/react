import { useAccessibilityPageMeta } from '@/hooks/useAccessibilityPageMeta.js'

const PAGE_LAYOUT = {
  mainClass: "kioskSupportServices",
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
  title: "개인정보/지원 서비스 | 접근성 가이드라인(무인정보단말기 접근성)",
  description: "무인정보단말기 접근성은 장애인 및 노약자를 포함한 모든 사용자가 단말기의 기능을 손쉽게 활용할 수 있도록 보장하는 기준입니다. 이 페이지에서는 무인정보 단말기의 개인정보 보호 방법 및 지원 서비스에 대해 소개합니다.",
  keyword: "Accessibility, a11y, wcag, kwcag, macag, kiosk, 접근성, 웹 콘텐츠 접근성, 한국형 웹 콘텐츠 접근성, 모바일 앱 접근성, 무인정보단말기 접근성",
}

function KioskSupportServicesPage() {
  useAccessibilityPageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  })


  return (
    <>
      <blockquote className="uk_note common_note mt_xxl" role="note">
      	<strong className="sound_only">요약 설명</strong>
      	<p>
      		무인정보 단말기 접근성(accessibility of self-service kiosk)이란 이용자의 조작에 따라 서류 발급, 정보 제공,
      		상품 주문 및 결제 등의 사항을 처리하기 위하여 설치하는 단말기를 의미합니다.<br />
      		무인정보 단말기의 접근성은 다양한 사용자들이 무인정보 단말기를 쉽고 편리하게 사용할 수 있도록 보장하는 중요한 요소입니다.
      		이를 위해서는 설계, 환경, 하드웨어, 소프트웨어, 편의 제공, 개인정보 보호, 지원 서비스, 피드백 수집 및 개선, 교육,
      		법적 준수 등 다양한 측면에서 종합적인 접근이 필요하며,
      		이러한 노력을 통해 모든 사용자가 차별 없이 무인정보 단말기를 활용할 수 있는 환경을 조성할 수 있습니다.<br />
      		세부적인 접근성 요구사항을 철저히 구현함으로써 모든 사용자가 쉽게 접근하고 이용할 수 있는 무인정보 단말기를 설계하는 것이 중요합니다.
      		다양한 사용자 요구를 충족시키기 위해 지속적인 피드백 수집과 개선 작업이 필요합니다.
      	</p>
      	<p className="mt_ms">
      		장애인차별금지법에서 무인정보단말기 정의<br />
      		<span className="el_inline_block t_black weight-600 quote_text">
      			터치스크린 등 전자적 방식으로 정보를 화면에 표시하여 제공하거나 서류발급, 주문 ·결제등을 처리하는기기를말함
      		</span>
      	</p>
      </blockquote>










      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">개인정보</h2>

      		<article className="indent mt_xl">
      			<h3 className="ml_mn">시각정보 보호</h3>
      			<ul className="mt_m dot_lst">
      				<li>비밀번호는 모두 별표(‘*’)로 표시합니다.</li>
      				<li>주민등록번호 13자리를 모두 노출하지 않고, 뒷번호의 첫 번째 숫자 이후를 모두 별표(‘*’)로 표시합니다.</li>
      				<li>실명, 생년월일, 전화번호, 여권 번호, 아이디, 계좌 번호, 금융 거래 정보 등은 노출될 수 있으나, 그 종류를 최대한 줄이도록 합니다.</li>
      				<li>디스플레이에 개인정보 차단용 필름을 바르면 개인정보 노출을 줄일 수 있으나, 디스플레이 밝기가 낮아져 명도 대비가 떨어지게 되므로 주의해야 합니다.</li>
      			</ul>
      		</article>
      		

      		<article className="indent mt_xl">
      			<h3 className="ml_mn">음성정보보호</h3>
      			<p className="mt_m t_blue weight-500">
      				민감한 음성 정보는 이어폰이나 사용자가 동의한 장치(무인정보단말기의 스피커 포함)를 통해서만 제공되어야 하며,
      				디스플레이에 표시되는 비밀번호 등의 별표('*')는 '별표'라고 읽어줘야 합니다.<br />
      				이어폰 단자와 블루투스 등은 표준 이어폰 연결 수단으로 사용됩니다.
      			</p>
      			<ul className="mt_m dot_lst">
      				<li>민감한 정보를 스피커로 출력하기 위해서는 무인정보단말기의 디스플레이를 통해 사용자에게 개인정보가 스피커로 출력된다는 주의사항을 안내하고, 사용자가 이를 읽고 확인하는 절차(예: ‘확인’ 버튼을 누름)가 필요합니다.</li>
      				<li>민감한 내용의 음성정보에는 사용자의 개인정보, 금융 정보 등이 포함됩니다.</li>
      				<li>민감한 내용을 음성으로 읽어주면 개인정보나 금융 정보가 유출될 수 있습니다.</li>
      				<li>표준 이어폰 연결 수단을 제공하면, 사용자가 자유롭게 이어폰을 연결하여 사용할 수 있습니다.</li>
      				<li>이어폰은 사용자가 휴대하는 기기로, 무인정보단말기 운영자가 제공할 필요가 없습니다.</li>
      				<li>이어폰을 단자에 연결하면 음성 정보를 스피커로 읽어주는 것을 차단하여, 민감한 정보가 외부로 공개되는 것을 방지할 수 있습니다.</li>
      				<li>사용 중 이어폰의 연결이 빠지면 음성정보 출력이 차단되고, 이어폰이 빠졌음을 스피커와 시각으로 알려주면 사용자가 이어폰 연결을 확인할 수 있습니다.</li>
      			</ul>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">지원 서비스</h2>

      		<article className="indent mt_xl">
      			<h3 className="ml_mn" data-conlist-h4="true">사용자 지원</h3>

      			<p className="mt_ml t_blue weight-500">
      				무인정보단말기는 시각 및 비시각 안내를 포함한 사용 방법 안내와 장애인을 위한 지원 서비스를 제공하며,
      				사용자에게 필요한 도움을 제공하고 무인정보단말기를 원활하게 이용할 수 있도록 돕습니다.
      			</p>

      			<div className="mt_l indent">
      				<h4 className="ml_mn">사용 방법 안내</h4>
      				<p className="mt_ms t_blue weight-500">
      					사용 방법에 관한 시각 안내와 비시각 안내가 함께 제공되어야 합니다.
      				</p>
      				<ul className="mt_ms dot_lst">
      					<li>시각 안내, 비시각 안내 및 온-스크린을 통한 안내를 포함합니다.</li>
      					<li>처음으로 무인정보단말기를 이용하는 사용자를 위한 용도입니다.</li>
      					<li>무인정보단말기 표면의 눈에 잘 띄는 곳에 인쇄되거나, 사용법에 관한 인쇄물(점자 출력물 포함)의 비치 또는 디스플레이를 이용한 안내 등으로 제공될 수 있습니다.</li>
      					<li>부정확한 사용 방법 안내(시각 및 비시각 안내)는 사용자가 혼란을 일으켜서 무인정보단말기를 사용하는 데 어려움을 주게 됩니다.</li>
      					<li>음성 안내와 점자 안내는 대표적인 비시각 안내 방법입니다.</li>
      					<li>지정된 버튼을 누를 때마다 사용 방법을 음성으로 읽어주도록 할 수 있습니다.</li>
      					<li>버튼을 누를 때마다 전체 사용 방법을 읽어주기보다 현재 단계에서 필요한 안내를 음성으로 읽어주면, 사용자가 당면한 어려움을 해결하는 데 더 편리합니다.</li>
      					<li>전자 점자가 달린 무인정보단말기에서는 사용 방법에 관한 안내를 점자로 제공할 수 있습니다.</li>
      				</ul>
      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">도움 제공</h4>
      				<p className="mt_ms t_blue weight-500">
      					무인정보단말기 사용자는 서비스 이용 과정에서 담당자에게 도움을 요청하고 지원받을 수 있어야 합니다.
      					또한, 무인정보단말기 지원 서비스는 장애를 가진 사용자와의 의사소통이 가능해야 합니다.
      				</p>
      				<ul className="mt_ms dot_lst">
      					<li>사용자 지원 서비스는 유인 안내소 또는 콜센터 운영, 교육 서비스 및 무인정보단말기를 이용한 기술지원 등을 포함합니다.</li>
      					<li>장애를 지닌 사용자는 무인정보단말기 사용법에 관한 교육을 통해 무인정보단말기를 원활하게 사용할 수 있게 됩니다.</li>
      					<li>무인정보단말기가 설치된 인근에 유인 안내소를 운영하면, 무인정보단말기 사용이 어려운 사용자가 유인 서비스를 받을 수 있습니다.</li>
      					<li>담당자의 전화번호를 안내하면 전화 통화를 통해 사용자가 당면한 문제를 해결할 수 있을 뿐만 아니라, 전화 중계 서비스를 통하여 통화가 가능합니다.</li>
      					<li>무인정보단말기별로 가용한 지원 서비스를 사용 방법 안내에 따라 안내하면, 사용자는 이를 토대로 필요한 도움을 요청할 수 있습니다.</li>
      				</ul>
      			</div>
      			
      		</article>
      		

      		<article className="indent mt_xl">
      			<h3 className="ml_mn">외국어 서비스(외국어 서비스 접근성 제공)</h3>
      			<p className="mt_m t_blue weight-500">
      				무인정보단말기에서 지원되는 모든 외국어 서비스는 한국어 서비스와 동등한 수준의 접근성 서비스를 제공하는 것이 바람직합니다.
      			</p>
      			<ul className="mt_m dot_lst">
      				<li>이 검사 항목은 외국어 서비스가 제공되는 무인정보단말기에 적용됩니다.</li>
      				<li>잘못된 번역은 외국인 사용자로 하여금 무인정보단말기 이용 과정에서 혼란을 겪게 되는 원인이 됩니다.</li>
      				<li>외국어 서비스는 정확한 정보를 제공하도록 원어민 등의 감수를 받을 필요가 있습니다.</li>
      				<li>사용자가 선호하는 언어를 선택할 수 있도록 온-스크린 콘텐츠 첫 화면에 언어 선택 기능을 제공하고, 콘텐츠를 사용자가 선택한 언어로 서비스를 받을 수 있도록 제공합니다.</li>
      				<li>무인정보단말기 표면에 인쇄된 레이블은 서비스하는 외국어로도 안내해야, 해당 언어 사용자가 레이블의 내용을 인식하는 데 어려움이 없습니다.</li>
      			</ul>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">무인정보단말기 용어</h2>

      		<ul className="mt_l dot_lst info_lst gap-column-important-l">
      			<li>
      				<strong className="mb_0">개인정보</strong>
      				<p className="mt_ms indent_small t_blue weight-500">
      					살아있는 개인에 관한 정보로서 성명, 주민등록번호 및 영상 등을 통하여 누구인지를 알아볼 수 있는 정보를 의미합니다.
      				</p>
      				<ul className="mt_ms indent_small dot_lst dot_lst_inner">
      					<li>
      						개인정보만으로는 특정인을 알아볼 수 없다고 하더라도, 다른 정보와 쉽게 결합하여 알아볼 수 있는 것을 포함합니다.<br />
      						[출처: 개인정보보호법 제2조, 2017. 10. 19.]
      					</li>
      				</ul>
      			</li>
      			

      			<li>
      				<strong className="mb_0">기준 눈높이</strong>
      				<p className="mt_ms indent_small t_blue weight-500">
      					제출된 생체학적 데이터를 데이터베이스의 모든 레코드와 비교하여 일치 여부를 결정하고,
      					일치할 경우 해당하는 사용자를 구분하는 일대다의 처리 과정을 의미합니다.
      				</p>
      			</li>
      			

      			<li>
      				<strong className="mb_0">되돌릴 수 없는 기능</strong>
      				<p className="mt_ms indent_small t_blue weight-500">
      					한 번 완료되면 실행 상태 이전으로 되돌리기 어려운 또는 되돌릴 수 없는 기능에는 결제, 티켓 반환, 예약 취소, 구매 취소 등이 있습니다.
      				</p>
      				<ul className="mt_ms indent_small dot_lst dot_lst_inner">
      					<li>되돌릴 수 없는 기능이라고 하더라도 이 기능은 실행 상태 이전으로 되돌아갈 수 없음을 의미하는 것이 아니라, 실행 이전 상태로 돌아가기 위해서는 추가적인 (오랜) 시간이 필요한 과정을 거쳐야 함을 의미합니다.</li>
      					<li>무인정보단말기에서 되돌릴 수 없는 기능은 주로 결제 매체를 인식하고, 그 결과로 상품의 구입이나 예매, 구매 취소 과정에서 일어납니다.</li>
      					<li>이 기능은 사용자가 실행하기 직전에 되돌릴 수 없는 기능임을 사용자에게 안내하여 주의를 환기시킬 필요가 있습니다.</li>
      				</ul>
      			</li>
      			

      			<li>
      				<strong className="mb_0">디스플레이(display)</strong>
      				<p className="mt_ms indent_small t_blue weight-500">
      					무인정보단말기의 조작에 의해서, 또는 시간이 흐름에 따라 변화하는 콘텐츠를 제공하는 정보 표시장치입니다.
      				</p>
      				<ul className="mt_ms indent_small dot_lst dot_lst_inner">
      					<li>디스플레이는 제조 방식이나 윈리와 관계없이, 무인정보단말기를 사용하는 과정에서 사용자에게 필요한 동적 콘텐츠를 제공하는 장치입니다.</li>
      					<li>
      						한 줄의 텍스트를 표시할 수 있는 표시 장치, 컴퓨터 모니터, 전광판 등
      						디스플레이에 표시되는 콘텐츠는 웹 콘텐츠로 제공되거나 소프트웨어에 포함되어 제공될 수 있습니다.
      					</li>
      				</ul>
      			</li>
      			

      			<li>
      				<strong className="mb_0">레이블(label)</strong>
      				<p className="mt_ms indent_small t_blue weight-500">
      					입력 상자, 표, 사용자 컨트롤 또는 개체를 시각적으로 표현한 제목입니다.
      				</p>
      				<p className="mt_ms indent_small">
      					레이블은 무인정보단말기 표면에 인쇄된 것일 수도 있고, 디스플레이를 통해 제공되는 콘텐츠로 제공될 수도 있습니다.
      				</p>
      			</li>
      			

      			<li>
      				<strong className="mb_0">매체(결제 매체)</strong>
      				<p className="mt_ms indent_small t_blue weight-500">
      					결제 매체 무인정보단말기에서 결제 또는 본인 인증을 위해 사용되는 수단입니다.
      				</p>
      				<ul className="mt_ms indent_small dot_lst dot_lst_inner">
      					<li>RF 매체, 신용카드, 상품권, 주화 및 지폐, 여권, 신분증 등</li>
      					<li>무인정보단말기별로 사용할 수 있는 매체는 무인정보단말기의 용도와 구비한 인식 수단에 따라 결정됩니다.</li>
      				</ul>
      			</li>
      			

      			<li>
      				<strong className="mb_0">무인정보단말기(self-service kiosk)</strong>
      				<p className="mt_ms indent_small t_blue weight-500">
      					이용자의 조작에 따라 서류 발급, 정보 제공, 상품 주문 및 결제 등의 사항을 처리하기 위하여 설치하는 단말기를 의미합니다.<br />
      					[출처: 지능정보화기본법 시행령 제34조 제1항 3호, 2021]
      				</p>
      				<dl className="mt_ms indent_small dl_lst">
      					<dt className="font-14-important">
      						무인정보단말기의 대표적인 예)
      					</dt>
      					<dd className="mt_sm">
      						<ul className="dot_lst dot_lst_inner">
      							<li>ATMs(automated teller machines)</li>
      							<li>무인 발권기 키오스크</li>
      							<li>무인 주문기 키오스크</li>
      							<li>무인 민원 발급기</li>
      							<li>정보 제공 키오스크</li>
      							<li>정보 표시 장치</li>
      							<li>신용카드 결제 단말기(point of sale customer card payment systems)</li>
      							<li>
      								카드 출입문 시스템(card door entry systems)<br />
      								[출처: 지능정보화기본법 시행령 제34조 제1항 3호, 2021]
      							</li>
      						</ul>
      					</dd>
      				</dl>
      			</li>
      			

      			<li>
      				<strong className="mb_0">보조기기(assistive technologies)</strong>
      				<p className="mt_ms indent_small t_blue weight-500">
      					장애인의 기능 역량을 확대, 유지 또는 향상시키기 위하여 사용되는 장치, 제품, 하드웨어, 소프트웨어 또는 기술 기반 서비스입니다.
      				</p>
      				<p className="mt_ms indent_small">
      					어떤 표준에서는 보조 기술 또는 보조 장치 라고도 합니다.
      				</p>
      			</li>
      			

      			<li>
      				<strong className="mb_0">부스(booth)</strong>
      				<p className="mt_ms indent_small t_blue weight-500">
      					무인정보단말기가 설치된 공간입니다.
      				</p>
      				<ul className="mt_ms indent_small dot_lst dot_lst_inner">
      					<li>부스는 사용자가 접근할 수 있도록 최소한 한 면이 개방된다. 또한, 개방된 것을 통해 휠체어가 들어가거나 나올 수 있습니다.</li>
      					<li>사용자가 문을 열고 부스 안으로 들어갈 수도 있다. 이 경우, 부스 내의 공간은 문이 없는 경우에 비하여 넓은 공간을 보장해야 휠체어 탑승자의 운신이 가능합니다.</li>
      				</ul>
      			</li>
      			

      			<li>
      				<strong className="mb_0">생체인식(biometric identification)</strong>
      				<p className="mt_ms indent_small t_blue weight-500">
      					제출된 생체학적 데이터를 데이터베이스의 모든 레코드와 비교하여 일치 여부를 결정하고, 일치할 경우에 해당하는 사용자를 구분하는 일대다의 처리 과정입니다.<br />
      					[출처: KS X ISO/IEC 19794-1, 3.9]
      				</p>
      			</li>
      			

      			<li>
      				<strong className="mb_0">아이콘(icon)</strong>
      				<p className="mt_ms indent_small t_blue weight-500">
      					객체 동작 또는 기능을 표현한 그래픽 콘텐츠입니다.
      				</p>
      				<p className="mt_ms indent_small">
      					기능이 정의된 아이콘은 내비게이션 수단을 이용하여 선택하고 실행할 수 있습니다.
      				</p>
      			</li>
      			

      			<li>
      				<strong className="mb_0">얼비침(glare)</strong>
      				<p className="mt_ms indent_small t_blue weight-500">
      					부적절한 휘도나 과도한 대비 등으로 인하여 물체 등을 자세히 볼 수 없게 하는 불편한 시각적 조건입니다
      				</p>
      			</li>
      			

      			<li>
      				<strong className="mb_0">의미 있는 온-스크린 콘텐츠</strong>
      				<p className="mt_ms indent_small t_blue weight-500">
      					무인정보단말기의 디스플레이를 통해 제공되며, 무인정보단말기를 이용하는 데 필수적인 콘텐츠입니다.
      				</p>
      				<p className="mt_ms indent_small">
      					의미 있는 콘텐츠가 생략되거나 누락되면, 사용자가 무인정보단말기를 이용할 수 없거나 어려움이 있습니다.
      				</p>
      			</li>
      			

      			<li>
      				<strong className="mb_0">의미 있는 시각정보</strong>
      				<p className="mt_ms indent_small t_blue weight-500">
      					무인정보단말기를 사용하는 데 반드시 필요하여 그 표면에 인쇄, 각인 또는 접착해 놓은 시각 정보입니다.
      				</p>
      				<p className="mt_ms indent_small">
      					사용 방법 안내, 사용자 컨트롤의 레이블, 각종 지시 등의 레이블 등
      				</p>
      			</li>
      			

      			<li>
      				<strong className="mb_0">작동부(operable part)</strong>
      				<p className="mt_ms indent_small t_blue weight-500">
      					무인정보단말기에서 버튼, 키패드, 카드 삽입구, 주화 투입구, 티켓(영수증 또는 현금) 출구 등과 같이,
      					사용자가 무인정보단말기를 이용하는 과정에서 사용하게 되는 부품 또는 부품이 달린 부위를 뜻합니다.
      				</p>
      			</li>
      			

      			<li>
      				<strong className="mb_0">접근성(accessibility)</strong>
      				<p className="mt_ms indent_small t_blue weight-500">
      					제품, 시스템, 서비스, 환경 및 시설이 특정 사용 상황에서 특정 목표를 달성하기 위해 다양한 요구,
      					특징, 능력을 지닌 사용자들에 의해 사용될 수 있는 정도입니다.
      				</p>
      				<p className="mt_ms indent_small">
      					사용 상황은 제품, 시스템, 서비스, 환경 및 시설을 직접 사용하는 경우와 보조기기를 활용하여 사용하는 경우를 포함합니다.<br />
      					[출처: ISO 9241-11, 2018, 3.2.2]
      				</p>
      			</li>
      			

      			<li>
      				<strong className="mb_0">지시등(indicator lamp)</strong>
      				<p className="mt_ms indent_small t_blue weight-500">
      					무인정보 단말기의 사용 과정에서 사용자에게 특정 상황을 알리는 데 사용되는 램프류
      				</p>
      			</li>
      			

      			<li>
      				<strong className="mb_0">컨트롤(control)</strong>
      				<p className="mt_ms indent_small t_blue weight-500">
      					사용자 컨트롤(user control)<br />
      					사용자가 데이터나 객체 또는 그 속성을 직접 조작할 수 있도록 하는 다이얼이나 라디오 버튼과 같은 물리적인 제어 장치 또는 이와 유사한 그래픽입니다.
      				</p>
      			</li>
      			

      			<li>
      				<strong className="mb_0">픽토그램(pictogram)</strong>
      				<p className="mt_ms indent_small t_blue weight-500">
      					사람들을 안내하고, 주어진 목표 달성 방법을 알려주기 위해 제공되는 단순화된 그림 표현입니다.
      				</p>
      				<ul className="mt_ms dot_lst dot_lst_inner">
      					<li>픽토그램은 그래픽 표현으로 문자를 최소한으로 이용하여 정보를 전달합니다.</li>
      					<li>픽토그램은 의미가 명확하여 사용자의 입장에서 스스로 설명이 가능하며 학습할 필요가 없습니다.</li>
      					<li>무인정보단말기의 레이블 및 디스플레이에 랜더링된 기호 또는 아이콘(객체 동작 또는 기능을 표현한 그래픽 콘텐츠)을 의미합니다.</li>
      				</ul>
      			</li>
      			

      			<li>
      				<strong className="mb_0">휴대전화 본인 인증</strong>
      				<p className="mt_ms indent_small t_blue weight-500">
      					실명 가입한 개인 명의의 휴대전화를 통하여 본인임을 확인하는 방법 또는 그 절차입니다.
      				</p>
      				<p className="mt_ms indent_small">휴대전화 본인 인증은 본인 명의의 휴대전화를 소지한 사용자만이 이용할 수 있는 인증 수단입니다.</p>
      			</li>
      			

      			<li>
      				<strong className="mb_0">RF(near field communication) 매체</strong>
      				<p className="mt_ms indent_small t_blue weight-500">
      					NFC(near field communication) 매체<br />
      					무선주파수를 이용하여 근접 거리에서 데이터를 교신하는 방식으로 인증이 이루어지는 비접촉성 매체입니다.
      				</p>
      				<ul className="mt_ms indent_small dot_lst dot_lst_inner">
      					<li>소액 지급 결제 수단으로 활용되는 비접촉식 IC 카드형 전자화폐는 대표적인 RF 매체의 하나입니다.</li>
      				</ul>
      			</li>
      			

      			<li>
      				<strong className="mb_0">참조</strong>
      				<p className="mt_ms indent_small reference">
      					<a href="https://www.kioskui.or.kr/index.do?menu_id=00000918" target="_blank" rel="noreferrer" title="새창열림" className="weight-500 fas">무인정보단말기 UI 플랫폼 {'>'} 무인정보단말기 {'>'} 무인정보단말기 용어 가이드</a>
      				</p>
      			</li>
      			
      		</ul>
      	</section>
      	


      <footer className="reference_box">
      	<strong className="tit">무인정보단말기 접근성 참조</strong>
      	<ul className="link_lst">
      		<li className="reference"><a href="https://www.w3.org/WAI/standards-guidelines/mobile/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C Mobile Accessibility at W3C</a></li>
      		<li className="reference"><a href="https://www.w3.org/TR/mobile-accessibility-mapping/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C Mobile Accessibility: How WCAG 2.0 and Other W3C/WAI Guidelines Apply to Mobile</a></li>
      		<li className="reference"><a href="https://www.w3.org/news/2015/first-public-working-draft-performance-timeline-level-2/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C First Public Working Draft</a></li>
      		<li className="reference"><a href="https://www.w3.org/TR/UAAG20/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C User Agent Accessibility Guidelines (UAAG) 2.0</a></li>
      		<li className="reference"><a href="https://www.w3.org/TR/IMPLEMENTING-UAAG20/mobile.html" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C Mobile Accessibility Examples from UAAG 2.0 Reference</a></li>
      		<li className="reference"><a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/Mobile_accessibility_checklist" target="_blank" rel="noreferrer" title="새창 열림" className="fas">MDN Mobile accessibility checklist</a></li>
      		<li className="reference"><a href="https://blog.naver.com/prologue/PrologueList.naver?blogId=mohw2016" target="_blank" rel="noreferrer" title="새창 열림" className="fas">보건복지부 블로그</a></li>
      		<li className="reference"><a href="https://www.mohw.go.kr/synap/doc.html?fn=1635730805506_20211101104005.pdf&rs=/upload/result/202405/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">보건복지부 - 장애인의 무인정보 단말기 등 접근성 강화방안 마련 연구</a></li>
      		<li className="reference"><a href="https://www.kioskui.or.kr/index.do?menu_id=00000985" target="_blank" rel="noreferrer" title="새창 열림" className="fas">무인정보단말기 UI플랫폼 - 무인정보 단말기 접근성 지침</a></li>
      		<li className="reference"><a href="https://standard.go.kr/KSCI/standardIntro/getStandardSearchView.do?menu19&topMenuId=502&upperMenuId=503&ksNo=KSX9211&tmprKsNo=KS_X_NEW_2015_1845&reformNo=01" target="_blank" rel="noreferrer" title="새창 열림" className="fas">무인정보 단말기(키오스크, 스마트자판기 등) 접근성 지침</a></li>
      		<li className="reference"><a href="https://mada.org.qa/wp-content/uploads/2020/01/Ireland-Guidelines-for-Public-Access-Terminals-Accessibility.pdf" target="_blank" rel="noreferrer" title="새창 열림" className="fas">Guidelines for Public Access Terminals Accessibility - Printable Version</a></li>
      		<li className="reference"><a href="https://standard.go.kr/KSCI/portalindex.do" target="_blank" rel="noreferrer" title="새창 열림" className="fas">산업통상자원부 국가기술표준원 e-나라표준인증 기계가독화 표준 원문 데이터</a></li>
      	</ul>
      </footer>
    </>
  )
}

export default KioskSupportServicesPage
