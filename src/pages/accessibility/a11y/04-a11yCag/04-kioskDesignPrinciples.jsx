import { useAccessibilityPageMeta } from '@/hooks/useAccessibilityPageMeta.js'
import { IMG } from '@/config/path'

const PAGE_LAYOUT = {
  mainClass: "kioskDesignPrinciples",
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
  title: "설계 원칙 | 접근성 가이드라인(무인정보단말기 접근성)",
  description: "무인정보단말기 접근성은 장애인 및 노약자를 포함한 모든 사용자가 단말기의 기능을 손쉽게 활용할 수 있도록 보장하는 기준입니다. 이 페이지에서는 무인정보 단말기의 주요 접근성 필수 고려사항 및 요구사항, 그리고 설계 원칙을 소개합니다.",
  keyword: "Accessibility, a11y, wcag, kwcag, macag, kiosk, 접근성, 웹 콘텐츠 접근성, 한국형 웹 콘텐츠 접근성, 모바일 앱 접근성, 무인정보단말기 접근성",
}

function KioskDesignPrinciplesPage() {
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
      		<h2 className="ml_mn">무인정보 단말기 접근성 필수 고려사항</h2>

      		<ol className="mt_l ol_lst info_lst gap-column-important-m">
      			<li className="weight-600-before t_black_before">
      				<strong>물리적 접근성</strong>
      				<p>단말기의 설치 위치는 휠체어 사용자를 포함한 모든 사람이 접근하기 쉬워야 합니다.</p>
      			</li>
      			<li className="weight-600-before t_black_before">
      				<strong>시각적/청각적 안내</strong>
      				<p>시각적 및 청각적 안내를 통해 사용자가 단말기를 쉽게 이용할 수 있도록 합니다.</p>
      			</li>
      			<li className="weight-600-before t_black_before">
      				<strong>터치스크린 접근성</strong>
      				<p>터치스크린은 반응이 빠르고 정확해야 하며, 시각장애인을 위한 점자 표시 또는 음성 안내 기능을 지원해야 합니다.</p>
      			</li>
      			<li className="weight-600-before t_black_before">
      				<strong>높이 및 각도 조절</strong>
      				<p>단말기의 화면 높이와 각도는 다양한 사용자에 맞게 조절할 수 있어야 합니다.</p>
      			</li>
      			<li className="weight-600-before t_black_before">
      				<strong>간단한 인터페이스</strong>
      				<p>메뉴와 기능은 직관적이고 쉽게 이해할 수 있도록 설계해야 합니다.</p>
      			</li>
      		</ol>

      		<figure className="img_figure mt_l">
      			<img src={`${IMG.A11Y}/4.4_a11y01.jpg`} className="max-w800" alt="'무인정보 단말기' 소개 이미지입니다. 화면 중앙에 위치한 무인정보 단말기 그림이 있으며, 오른쪽 상단에는 NIA 로고가 표시된 단말기 이미지가 있습니다. 텍스트는 '이용자의 조작에 따라 서류발급, 정보제공, 상품 주문·결제 등의 사항을 처리하기 위하여 설치하는 무인정보 단말기'라고 설명합니다. 하단에는 서류 아이콘, 쇼핑카트 아이콘, 지도 아이콘이 나열되어 있습니다. 이미지 하단에는 터치스크린 등의 전자적 방식으로 정보를 화면에 표시하여 제공하거나 서류 발급, 주문·결제 등을 처리하는 기기임을 강조하는 설명이 포함되어 있습니다." />
      			<figcaption>
      				이미지 출처 : 무인정보 단말기 UI 플랫폼
      			</figcaption>
      		</figure>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">무인정보 단말기 접근성 설계 원칙</h2>

      		<ol className="mt_l ol_lst info_lst gap-column-important-m">
      			<li className="weight-600-before t_black_before">
      				<strong>보편적 설계(Universal Design)</strong>
      				<p>모든 사용자들이 제약 없이 사용할 수 있도록 설계되어야 합니다. 이는 물리적 제약, 나이, 능력 등을 고려한 포괄적인 접근성을 의미합니다.</p>
      			</li>
      			<li className="weight-600-before t_black_before">
      				<strong>직관적 사용(Intuitive Use)</strong>
      				<p>단말기의 사용이 직관적이고 이해하기 쉬워야 합니다. 사용자들이 처음 접하더라도 쉽게 기능을 이해하고 사용할 수 있어야 합니다.</p>
      			</li>
      			<li className="weight-600-before t_black_before">
      				<strong>정보의 유용성(Perceptible Information)</strong>
      				<p>모든 정보는 사용자들이 쉽게 인지할 수 있도록 제공되어야 합니다. 시각, 청각, 촉각 등 다양한 방법을 통해 정보를 전달합니다.</p>
      			</li>
      			<li className="weight-600-before t_black_before">
      				<strong>유연한 사용(Flexibility in Use)</strong>
      				<p>다양한 사용자의 요구와 선호도를 수용할 수 있는 유연한 설계를 해야 합니다.</p>
      			</li>
      			<li className="weight-600-before t_black_before">
      				<strong>안전한 사용(Safety and Error Tolerance)</strong>
      				<p>사용자들이 실수로 인한 위험 없이 안전하게 사용할 수 있도록 설계되어야 하며, 오류 발생 시 이를 쉽게 복구할 수 있는 기능을 제공해야 합니다.</p>
      			</li>
      		</ol>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">무인정보 단말기 접근성 요구사항</h2>

      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue">1. 시각을 필요로 하지 않는 방법 제공</h3>
      			<ul className="mt_ml dot_lst info_lst gap-column-important-ms">
      				<li>
      					<strong className="mb_0">음성 안내 시스템 도입</strong>
      					<p>사용자가 특정 작업을 수행할 때 필요한 정보를 음성으로 안내하는 시스템을 제공하여 시각적 도움 없이도 기기를 사용할 수 있도록 합니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">점자 키패드 제공</strong>
      					<p>시각 장애인이 터치스크린을 사용하지 않고도 정보를 입력할 수 있도록 점자 키패드를 제공합니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">터치스크린 대체 수단 제공 (예: 물리적 버튼)</strong>
      					<p>터치스크린을 사용하기 어려운 사용자를 위해 물리적 버튼이나 기타 입력 장치를 제공합니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">음성 인식 기술 향상</strong>
      					<p>사용자가 음성 명령을 통해 모든 기능을 사용할 수 있도록 고급 음성 인식 기술을 도입합니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">협력 보조 기기 통합</strong>
      					<p>스마트 워치나 기타 착용형 보조 기기와 통합하여 시각적 도움을 제공하지 않고도 상호작용이 가능하도록 합니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">자동 음성 안내</strong>
      					<p>사용자가 특정 상황에 도달하면 자동으로 음성 안내를 제공하여 필요한 정보를 전달합니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">터치패드 피드백 제공</strong>
      					<p>터치패드를 통해 촉각 피드백을 제공하여 사용자가 현재 위치와 선택을 인지할 수 있도록 지원합니다.</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue">2. 시력이 현저히 낮아도 이용할 수 있는 방법 제공</h3>
      			<ul className="mt_ml dot_lst info_lst gap-column-important-ms">
      				<li>
      					<strong className="mb_0">고대비 모드 제공</strong>
      					<p>화면의 색상 대비를 높여 시력이 낮은 사용자가 쉽게 읽을 수 있도록 합니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">확대 기능 제공</strong>
      					<p>화면의 특정 부분을 크게 확대하여 볼 수 있는 기능을 제공합니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">화면 읽기 기능 제공</strong>
      					<p>화면의 텍스트를 음성으로 읽어주는 기능을 제공합니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">음성 지원 확대</strong>
      					<p>모든 기능과 메뉴에 대한 음성 안내를 제공합니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">스크린 리더와의 호환성</strong>
      					<p>보조 장치와의 원활한 통합을 위한 기술을 지원합니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">실시간 대화형 안내</strong>
      					<p>음성 안내와 상호작용을 통해 실시간으로 도움을 제공하는 기능을 추가합니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">환경에 따른 자동 조정</strong>
      					<p>조명 및 주변 환경에 따라 화면 밝기 및 대비를 자동으로 조정합니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">다중 언어 음성 지원</strong>
      					<p>다양한 언어로 음성 안내를 제공하여 비전문 사용자도 쉽게 이용할 수 있도록 합니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">확대경 모드</strong>
      					<p>화면의 특정 부분을 크게 확대하여 볼 수 있는 기능을 제공합니다.</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue">3. 색의 인식을 필요로 하지 않는 방법 제공</h3>
      			<ul className="mt_ml dot_lst info_lst gap-column-important-ms">
      				<li>
      					<strong className="mb_0">색상 외에 형태나 텍스트로 중요한 정보 전달</strong>
      					<p>색상 외에 형태나 텍스트로 중요한 정보를 전달하여 색을 인식하지 못해도 정보를 이해할 수 있도록 합니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">색을 사용한 신호에 대한 대체 텍스트 제공</strong>
      					<p>색을 사용한 신호에 대한 대체 텍스트를 제공하여 시각적으로 인식하지 못하는 사용자가 정보를 얻을 수 있도록 합니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">색맹 모드 제공</strong>
      					<p>색맹 사용자를 위해 특별한 색 조합을 제공하여 인식 가능하도록 지원합니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">텍스처 및 패턴 사용</strong>
      					<p>중요한 정보나 기능을 구별할 수 있도록 색상 외에 텍스처와 패턴을 사용합니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">음성 및 촉각 경고</strong>
      					<p>색상을 기반으로 한 경고 대신 음성 및 촉각 경고를 제공합니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">색상 독립적 상호작용</strong>
      					<p>색상에 의존하지 않고도 모든 정보를 이해하고 상호작용할 수 있도록 디자인합니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">음향 신호</strong>
      					<p>색상을 사용하지 않고 중요한 정보를 전달하기 위해 다양한 음향 신호를 사용합니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">명확한 기호 및 텍스트</strong>
      					<p>색상 대신 명확한 기호와 텍스트를 사용하여 정보를 전달합니다.</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue">4. 청각을 필요로 하지 않는 방법 제공</h3>
      			<ul className="mt_ml dot_lst info_lst gap-column-important-ms">
      				<li>
      					<strong className="mb_0">시각적 피드백 제공 (예: LED 불빛)</strong>
      					<p>청각을 사용할 수 없는 상황에서 시각적으로 피드백을 제공하는 LED 불빛이나 화면의 변화 등을 사용합니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">텍스트 기반의 안내 시스템</strong>
      					<p>청각적 안내 대신 텍스트 기반의 안내 시스템을 제공합니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">화면 플래시 기능</strong>
      					<p>중요한 알림이나 경고를 시각적으로 전달하기 위해 화면이 깜빡이도록 설정합니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">텍스트 메시지 및 이메일 알림</strong>
      					<p>긴급 상황이나 중요한 정보는 텍스트 형식으로 제공하여 청각적 알림 대신 사용됩니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">시각적 경고 시스템</strong>
      					<p>모든 알림과 경고를 시각적으로 제공하여 청각적 정보 없이도 이해할 수 있도록 합니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">진동 및 촉각 알림</strong>
      					<p>중요한 상황에서 진동 및 촉각 피드백을 통해 알림을 제공합니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">시각적 경고 아이콘</strong>
      					<p>청각적 알림 대신 화면에 경고 아이콘을 표시합니다.</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue">5. 청력이 현저히 낮아도 이용할 수 있는 방법 제공</h3>
      			<ul className="mt_ml dot_lst info_lst gap-column-important-ms">
      				<li>
      					<strong className="mb_0">자막 및 실시간 텍스트 변환 기능 제공</strong>
      					<p>음성 안내를 자막으로 변환하여 화면에 표시하는 기능을 제공합니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">비디오 안내 시 화면 내 텍스트 표시</strong>
      					<p>비디오 안내 시 화면 내 텍스트를 제공하여 청각 장애인이 이해할 수 있도록 합니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">진동 피드백 제공</strong>
      					<p>주요 알림이나 상태 변화를 진동으로 전달합니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">ASL(수화) 비디오 튜토리얼 제공</strong>
      					<p>수화 사용자를 위한 안내 비디오를 제공합니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">음성-텍스트 변환 시스템</strong>
      					<p>실시간으로 음성을 텍스트로 변환하여 화면에 표시합니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">다양한 언어 지원</strong>
      					<p>여러 언어로 텍스트 알림 및 자막을 제공합니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">자막 시스템</strong>
      					<p>음성 안내를 자막으로 변환하여 화면에 표시합니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">화상 수화 안내</strong>
      					<p>실시간으로 수화 안내를 제공하여 청각 장애인이 쉽게 이해할 수 있도록 지원합니다.</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue">6. 발성을 필요로 하지 않는 방법 제공</h3>
      			<ul className="mt_ml dot_lst info_lst gap-column-important-ms">
      				<li>
      					<strong className="mb_0">음성 입력 외에 키보드 또는 터치 입력 제공</strong>
      					<p>음성 입력을 사용하지 않고도 키보드나 터치를 통해 정보를 입력할 수 있도록 합니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">다양한 입력 방법 지원 (예: 스위치, 터치, 버튼)</strong>
      					<p>다양한 입력 방법을 제공하여 발성을 대체할 수 있도록 합니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">제스처 인식 시스템</strong>
      					<p>손이나 몸짓을 통한 명령 입력을 지원합니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">전자 태블릿 및 스타일러스 입력 지원</strong>
      					<p>키보드 외에 다양한 입력 도구를 제공합니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">키보드 단축키</strong>
      					<p>다양한 기능을 키보드 단축키로 설정하여 발성을 대체할 수 있도록 지원합니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">음성 인식 대체 입력</strong>
      					<p>사용자가 원하는 입력 방법을 선택할 수 있는 다중 입력 옵션을 제공합니다.</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue">7. 과도한 조작과 힘을 필요로 하지 않는 방법 제공</h3>
      			<ul className="mt_ml dot_lst info_lst gap-column-important-ms">
      				<li>
      					<strong className="mb_0">경량 터치 또는 버튼 조작 가능</strong>
      					<p>매우 가벼운 터치로도 반응하는 인터페이스를 설계합니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">민감도 조정 기능 제공</strong>
      					<p>터치스크린의 민감도를 사용자 맞춤형으로 조절할 수 있는 기능을 제공합니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">자동화 기능 추가</strong>
      					<p>사용자의 조작을 최소화하기 위해 가능한 절차를 자동화합니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">사용자 맞춤형 인터페이스</strong>
      					<p>사용자의 요구에 맞게 조작을 단순화하고 개인화합니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">터치스크린 감도 조절 기능</strong>
      					<p>터치스크린의 감도를 사용자 맞춤형으로 조절할 수 있는 기능을 제공합니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">음성 및 터치 혼합 입력</strong>
      					<p>음성과 터치 입력을 병행하여 최소한의 노력으로 조작 가능하도록 합니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">경량 터치 인터페이스</strong>
      					<p>매우 가벼운 터치로도 반응하는 인터페이스를 설계합니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">자동 조작 시스템</strong>
      					<p>사용자가 특정 명령을 입력하면 자동으로 필요한 작업을 수행하는 시스템을 도입합니다.</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue">8. 손닿는 범위 내에 작동부 배치</h3>
      			<ul className="mt_ml dot_lst info_lst gap-column-important-ms">
      				<li>
      					<strong className="mb_0">사용자의 신체 조건을 고려한 적절한 높이와 거리 설정</strong>
      					<p>다양한 신체 조건을 고려하여 적절한 높이와 거리로 작동부를 배치합니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">휠체어 사용자 고려한 설계</strong>
      					<p>휠체어 사용자도 쉽게 접근할 수 있도록 설계합니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">다양한 사용자 높이 고려</strong>
      					<p>다양한 높이에서 접근할 수 있도록 조절 가능한 인터페이스를 제공합니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">이동식 입력 장치 제공</strong>
      					<p>필요 시 가까이에서 사용할 수 있는 입력 장치를 제공합니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">다중 위치 입력 장치</strong>
      					<p>다양한 위치에 입력 장치를 배치하여 접근성을 향상시킵니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">이동 및 높이 조절 가능</strong>
      					<p>사용자가 편리한 위치와 높이로 조정 가능한 인터페이스를 제공합니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">사용자 맞춤형 높이 조절</strong>
      					<p>키오스크나 단말기의 높이를 사용자 맞춤형으로 조절할 수 있습니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">접근성 고려한 레이아웃</strong>
      					<p>휠체어 사용자나 키가 작은 사용자도 쉽게 접근할 수 있는 레이아웃을 설계합니다.</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue">9. 광과민성 발작 가능성 차단</h3>
      			<ul className="mt_ml dot_lst info_lst gap-column-important-ms">
      				<li>
      					<strong className="mb_0">깜빡임이나 빠른 화면 전환 금지</strong>
      					<p>깜빡임이나 빠른 화면 전환을 금지하여 광과민성 발작의 가능성을 줄입니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">안정적인 화면 출력</strong>
      					<p>안정적인 화면 출력을 통해 광과민성 발작을 예방합니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">사용자 지정 깜빡임 제어</strong>
      					<p>사용자가 깜빡임 빈도와 강도를 조정할 수 있는 옵션을 제공합니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">깜빡임 없는 애니메이션 사용</strong>
      					<p>깜빡임이 없는 부드러운 전환 애니메이션을 사용합니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">사용자 조정 가능한 플래시 빈도</strong>
      					<p>사용자 스스로 플래시 빈도와 강도를 조정할 수 있는 기능을 제공합니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">정적 콘텐츠 사용</strong>
      					<p>최대한 정적이고 안정적인 콘텐츠를 사용하여 발작 유발 가능성을 최소화합니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">부드러운 화면 전환</strong>
      					<p>급격한 화면 전환이나 깜빡임 없이 부드러운 전환 애니메이션을 사용합니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">저조도 모드</strong>
      					<p>화면의 밝기를 낮추어 광과민성 발작의 가능성을 줄이는 모드를 제공합니다.</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue">10. 낮은 인지 능력으로도 이용할 수 있는 방법 제공</h3>
      			<ul className="mt_ml dot_lst info_lst gap-column-important-ms">
      				<li>
      					<strong className="mb_0">간단하고 직관적인 인터페이스 디자인</strong>
      					<p>복잡한 메뉴와 단계를 최소화한 직관적인 인터페이스를 디자인합니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">명확한 지침과 피드백 제공</strong>
      					<p>사용자가 이해하기 쉬운 명확한 지침과 피드백을 제공합니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">복잡한 절차를 단순화</strong>
      					<p>사용자가 쉽게 이해하고 수행할 수 있도록 복잡한 절차를 단순화합니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">그림 및 아이콘 사용</strong>
      					<p>텍스트 대신 직관적인 그림과 아이콘을 사용하여 정보를 전달합니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">단계별 지침 제공</strong>
      					<p>사용자가 단계를 따라가며 쉽게 이용할 수 있도록 안내합니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">직관적인 사용자 인터페이스</strong>
      					<p>복잡한 메뉴와 단계를 최소화한 직관적인 인터페이스를 디자인합니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">실수 복구 기능</strong>
      					<p>사용자가 실수했을 때 쉽게 복구할 수 있는 기능을 제공합니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">단계별 진행 안내</strong>
      					<p>사용자가 단계를 따라가며 쉽게 이용할 수 있도록 안내합니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">쉬운 언어 사용</strong>
      					<p>간단하고 이해하기 쉬운 언어로 설명을 제공합니다.</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue">11. 개인정보 보호</h3>
      			<ul className="mt_ml dot_lst info_lst gap-column-important-ms">
      				<li>
      					<strong className="mb_0">비밀번호 및 개인 정보를 입력할 때 주변에서 보이지 않도록 화면 보호</strong>
      					<p>비밀번호 입력 시 주변 사람들이 보지 못하도록 화면 보호막을 제공합니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">사용자 세션 종료 시 자동 로그아웃 기능</strong>
      					<p>일정 시간 동안 사용하지 않으면 자동으로 로그아웃되는 세션 타임아웃 기능을 제공합니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">민감 정보 입력 시 암호화된 통신 사용</strong>
      					<p>민감한 정보 입력 시 암호화된 통신을 사용하여 보안을 강화합니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">개인 정보 저장 시 보안 프로토콜 적용</strong>
      					<p>개인 정보를 저장할 때 보안 프로토콜을 적용하여 데이터를 안전하게 보호합니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">사용 후 개인 정보 자동 삭제 기능</strong>
      					<p>사용 후 개인 정보를 자동으로 삭제하는 기능을 제공합니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">인증 데이터 암호화</strong>
      					<p>사용자 인증 시 모든 데이터를 암호화합니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">접근 제어 시스템</strong>
      					<p>권한이 없는 사용자가 민감한 데이터에 접근하지 못하도록 접근 제어 시스템을 적용합니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">세션 타임아웃</strong>
      					<p>일정 시간 동안 사용하지 않으면 자동으로 로그아웃되는 세션 타임아웃 기능을 제공합니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">비밀번호 입력 보호</strong>
      					<p>비밀번호 입력 시 주변 사람들이 보지 못하도록 시각적 보호막을 제공합니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">정기적인 보안 업데이트</strong>
      					<p>시스템 소프트웨어 및 보안 프로토콜을 정기적으로 업데이트하여 최신 보안 위협에 대응합니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">보안 로그 및 감사</strong>
      					<p>모든 활동을 기록하고 정기적으로 점검하여 보안을 강화합니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">사용자 인증 강화</strong>
      					<p>2단계 인증 및 생체 인식을 사용하여 보안을 강화합니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">개인정보 보호 교육</strong>
      					<p>사용자에게 개인정보 보호에 대한 인식과 교육을 제공합니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">사용자 동의 절차</strong>
      					<p>데이터 수집 및 사용 전에 명확한 동의 절차를 통해 사용자 동의를 확보합니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">비밀번호 보호 필름</strong>
      					<p>비밀번호 입력 시 주변 사람들이 보지 못하도록 화면 보호 필름을 제공합니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">안전한 데이터 저장</strong>
      					<p>민감한 사용자 데이터를 암호화하여 안전하게 저장합니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">데이터 접근 로그</strong>
      					<p>누가 언제 데이터를 접근했는지 기록하여 보안을 강화합니다.</p>
      				</li>
      				<li>
      					<strong className="mb_0">사용자 데이터 관리 교육</strong>
      					<p>사용자에게 개인 데이터 보호 방법에 대한 교육을 제공합니다.</p>
      				</li>
      			</ul>
      		</article>
      		

      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">무인정보 단말기 접근성 지침 KS X 9211:2022에서 제공되는 목차</h2>

      		<ul className="mt_ml dot_lst">
      			<li>4 무인정보단말기 접근성 설계 원칙</li>
      			<li>4.1 일반</li>
      			<li>4.2 접근성 요구사항</li>
      			<li>4.2.1 시각을 필요로 하지 않는 방법 제공</li>
      			<li>4.2.2 시력이 현저히 낮아도 이용할 수 있는 방법 제공</li>
      			<li>4.2.3 색의 인식을 필요로 하지 않는 방법 제공</li>
      			<li>4.2.4 청각을 필요로 하지 않는 방법 제공</li>
      			<li>4.2.5 청력이 현저히 낮아도 이용할 수 있는 방법 제공</li>
      			<li>4.2.6 발성을 필요로 하지 않는 방법 제공</li>
      			<li>4.2.7 과도한 조작과 힘을 필요로 하지 않는 방법 제공</li>
      			<li>4.2.8 손닿는 범위 내에 작동부 배치</li>
      			<li>4.2.9 광과민성 발작 가능성 차단</li>
      			<li>4.2.10 낮은 인지 능력으로도 이용할 수 있는 방법 제공</li>
      			<li>4.2.11 개인정보 보호</li>
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

export default KioskDesignPrinciplesPage
