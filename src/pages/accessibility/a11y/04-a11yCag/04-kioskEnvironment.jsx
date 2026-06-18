import { useAccessibilityPageMeta } from '@/hooks/useAccessibilityPageMeta.js'

const PAGE_LAYOUT = {
  mainClass: "kioskEnvironment",
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
  title: "주변 환경 | 접근성 가이드라인(무인정보단말기 접근성)",
  description: "무인정보단말기 접근성은 장애인 및 노약자를 포함한 모든 사용자가 단말기의 기능을 손쉽게 활용할 수 있도록 보장하는 기준입니다. 이 페이지에서는 무인정보 단말기의 주변 환경에 대한 설계 및 설치 지침을 소개합니다.",
  keyword: "Accessibility, a11y, wcag, kwcag, macag, kiosk, 접근성, 웹 콘텐츠 접근성, 한국형 웹 콘텐츠 접근성, 모바일 앱 접근성, 무인정보단말기 접근성",
}

function KioskEnvironmentPage() {
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










      	<blockquote className="uk_note mt_xxl" role="note">
      		<strong className="sound_only">요약 설명</strong>
      		<p>
      			무인정보단말기 주변 환경에 대한 설계 및 설치 지침은 단말기의 접근성, 사용성, 안전성을 높이기 위해 중요합니다.
      		</p>
      	</blockquote>

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">일반</h2>

      		<p className="mt_l">
      			<i className="t_blue weight-500">무인정보단말기의 설치 장소와 방법은 장애인, 노약자, 어린이 등 모든 사용자가 편리하게 접근하고 사용할 수 있도록 계획해야 합니다.</i><br />
      			단말기 설치 시 준수해야 할 일반적인 원칙은 다음과 같습니다.
      		</p>
      		<ul className="mt_l dot_lst info_lst gap-column-important-m">
      			<li>
      				<strong>접근 경로 확보</strong>
      				<p>단말기 주변에 충분한 공간을 확보하여 휠체어 사용자가 접근할 수 있도록 합니다.</p>
      			</li>
      			<li>
      				<strong>위치 선택</strong>
      				<p>사용자가 쉽게 찾을 수 있는 장소에 설치합니다. 일반적으로 출입구 근처, 로비, 공공 장소가 좋습니다.</p>
      			</li>
      			<li>
      				<strong>안전 고려</strong>
      				<p>전기, 네트워크 연결 상태가 안전한지 확인합니다. 비상시 대피 경로에 방해가 되지 않도록 설치합니다.</p>
      			</li>
      		</ul>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">바닥</h2>

      		<p className="mt_l t_blue weight-500">
      			단말기 설치 위치의 바닥 상태는 안정적이고 안전해야 합니다.
      		</p>
      		<ul className="mt_l dot_lst info_lst gap-column-important-m">
      			<li>
      				<strong>평탄성</strong>
      				<p>바닥이 평평하고 미끄럽지 않아야 합니다. 필요 시 미끄럼 방지 처리합니다.</p>
      			</li>
      			<li>
      				<strong>강도</strong>
      				<p>단말기의 무게를 충분히 지탱할 수 있어야 하며, 특히 움직임이 많은 장소에서는 더 견고한 바닥재를 사용합니다.</p>
      			</li>
      			<li>
      				<strong>경사도</strong>
      				<p>단말기 접근 경로에 경사로가 있을 경우, 휠체어 사용자가 안전하게 이동할 수 있도록 경사도를 1:12 이하로 유지합니다.</p>
      			</li>
      		</ul>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">무인정보단말기 접근 방법</h2>

      		<p className="mt_l t_blue weight-500">
      			모든 사용자가 쉽게 접근할 수 있도록 접근 방법을 고려합니다.
      		</p>
      		<ul className="mt_l dot_lst info_lst gap-column-important-m">
      			<li>
      				<strong>통로 너비</strong>
      				<p>접근 통로는 최소 90cm 이상 확보하여 휠체어가 무리 없이 통과할 수 있도록 합니다.</p>
      			</li>
      			<li>
      				<strong>높이 조절</strong>
      				<p>터치스크린 및 인터페이스는 성인, 휠체어 사용자, 어린이 등 다양한 사용자 높이에 맞출 수 있도록 조절 기능을 갖추는 것이 좋습니다.</p>
      			</li>
      			<li>
      				<strong>경로 장애물</strong>
      				<p>접근 경로에 장애물(쓰레기통, 의자 등)이 없도록 유지합니다.</p>
      			</li>
      		</ul>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">무인정보단말기 무릎 공간</h2>

      		<p className="mt_l t_blue weight-500">
      			휠체어 사용자도 편리하게 단말기를 사용할 수 있도록 무릎 공간을 확보합니다.
      		</p>
      		<ul className="mt_l dot_lst info_lst gap-column-important-m">
      			<li>
      				<strong>공간 크기</strong>
      				<p>단말기 아래에 최소 68cm 높이, 60cm 너비, 48cm 깊이의 무릎 공간을 확보합니다.</p>
      			</li>
      			<li>
      				<strong>자유로운 접근</strong>
      				<p>사용 중 무릎 공간에 다른 장애물이 없도록 합니다.</p>
      			</li>
      		</ul>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">무인정보단말기 발 공간</h2>

      		<p className="mt_l t_blue weight-500">
      			무릎 공간 아래의 발 공간도 중요한 요소입니다.
      		</p>
      		<ul className="mt_l dot_lst info_lst gap-column-important-m">
      			<li>
      				<strong>공간 크기</strong>
      				<p>발 공간은 최소 30cm 깊이, 90cm 너비로 확보하여 휠체어가 안정적으로 위치할 수 있도록 합니다.</p>
      			</li>
      			<li>
      				<strong>자유로운 접근</strong>
      				<p>발 공간이 협소하지 않도록 하여 사용자가 발을 자유롭게 움직일 수 있게 합니다.</p>
      			</li>
      		</ul>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">외부 조명</h2>

      		<p className="mt_l t_blue weight-500">
      			적절한 조명은 단말기의 가독성을 높이고 사용자 편의를 증진합니다.
      		</p>
      		<ul className="mt_l dot_lst info_lst gap-column-important-m">
      			<li>
      				<strong>조명 밝기</strong>
      				<p>주변 조명은 눈부심 없이 충분히 밝아야 하며, 반사로 인해 화면이 보이지 않는 문제를 방지합니다.</p>
      			</li>
      			<li>
      				<strong>조명 위치</strong>
      				<p>직사광선이 화면에 직접적으로 닿지 않도록 단말기 위치를 조정합니다. 필요 시 차광 장치를 설치합니다.</p>
      			</li>
      		</ul>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">설치 방법 안내</h2>

      		<p className="mt_l t_blue weight-500">
      			단말기 설치 시 각 항목별로 명확한 설치 지침을 따릅니다.
      		</p>
      		<ul className="mt_l dot_lst info_lst gap-column-important-m">
      			<li>
      				<strong>설치 매뉴얼</strong>
      				<p>제조사에서 제공하는 설치 매뉴얼을 참고하여 설치 과정을 정확히 따릅니다.</p>
      			</li>
      			<li>
      				<strong>안전 점검</strong>
      				<p>설치 후 전기, 네트워크 연결 상태, 물리적 안정성 등을 점검하여 안전하게 사용할 수 있도록 합니다.</p>
      			</li>
      			<li>
      				<strong>사용자 교육</strong>
      				<p>단말기 사용 방법에 대한 안내를 제공하여 사용자가 쉽게 이해하고 사용할 수 있도록 합니다.</p>
      			</li>
      			<li>
      				<strong>정기 유지보수</strong>
      				<p>설치 후 정기적인 유지보수 계획을 세워 단말기의 원활한 운영을 유지합니다.</p>
      			</li>
      		</ul>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">무인정 보단말기 접근성 지침 KS X 9211:2022에서 제공되는 목차</h2>

      		<ul className="mt_l dot_lst">
      			<li>5 무인정보단말기 주변 환경</li>
      			<li>5.1 일반</li>
      			<li>5.2 바닥</li>
      			<li>5.2.1 일반</li>
      			<li>5.2.2 단단한 바닥</li>
      			<li>5.2.3 바닥면 높이 차이</li>
      			<li>5.2.4 무인정보단말기 활동 공간</li>
      			<li>5.3 무인정보단말기 접근 방법</li>
      			<li>5.3.1 일반</li>
      			<li>5.3.2 전면 개방 설치</li>
      			<li>5.3.3 부스 내 설치</li>
      			<li>5.4 무인정보단말기 무릎 공간</li>
      			<li>5.4.1 일반</li>
      			<li>5.4.2 무릎 공간 폭</li>
      			<li>5.4.3 무릎 공간 높이</li>
      			<li>5.4.4 무릎 공간 깊이</li>
      			<li>5.5 무인정보단말기 발 공간</li>
      			<li>5.5.1 일반</li>
      			<li>5.5.2 발 공간 폭</li>
      			<li>5.5.3 발 공간 높이</li>
      			<li>5.5.4 발 공간 깊이</li>
      			<li>5.6 외부 조명</li>
      			<li>5.6.1 일반</li>
      			<li>5.6.2 표면 조도</li>
      			<li>5.6.3 눈부심과 얼비침 방지</li>
      			<li>5.7 설치 방법 안내</li>
      			<li>5.7.1 일반</li>
      			<li>5.7.2 매뉴얼 제공</li>
      			<li>5.7.3 설치 매뉴얼 기술 범위</li>
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

export default KioskEnvironmentPage
