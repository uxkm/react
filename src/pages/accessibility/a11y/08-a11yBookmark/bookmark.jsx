import { useAccessibilityPageMeta } from '@/hooks/useAccessibilityPageMeta.js'

const PAGE_LAYOUT = {
  mainClass: "a11yBookmark",
  type: "accessibility",
  titleSticky: false,
  info: false,
  note: false,
  sideMenu: true,
  reference: false,
  contentList: true,
  depth3Last: true,
  bottomEditor: false
}

const PAGE_DATA = {
  title: "접근성 참조",
  description: "접근성 커리큘럼에 큰 도움이 된 링크 모음입니다.",
  keyword: "Accessibility, a11y, wcag, kwcag, macag, kiosk, 접근성, 웹 콘텐츠 접근성, 한국형 웹 콘텐츠 접근성, 모바일 앱 접근성, 무인정보단말기 접근성",
}

function BookmarkPage() {
  useAccessibilityPageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  })


  return (
    <>









      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">접근성</h2>

      		<ul className="mt_l dot_lst gap-column-important-sm">
      			<li className="reference"><a href="https://www.w3.org/WAI/fundamentals/accessibility-principles/ko" target="_blank" rel="noreferrer" title="새창 열림" className="fas weight-500">W3C 접근성 원칙</a></li>
      			<li className="reference"><a href="https://www.w3.org/WAI/fundamentals/accessibility-intro/ko" target="_blank" rel="noreferrer" title="새창 열림" className="fas weight-500">W3C 웹 접근성 소개</a></li>
      			<li className="reference"><a href="https://w3c.or.kr/" target="_blank" rel="noreferrer" title="새창 열림" className="fas weight-500">W3C 대한민국 사무국</a></li>
      			<li className="reference"><a href="https://developer.mozilla.org/ko/docs/Web/Accessibility" target="_blank" rel="noreferrer" title="새창 열림" className="fas weight-500">MDN 접근성</a></li>
      			<li className="reference"><a href="https://standard.go.kr/KSCI/standardIntro/getStandardSearchView.do?menu19&topMenuId=502&upperMenuId=503&ksNo=KSX9211&tmprKsNo=KS_X_NEW_2015_1845&reformNo=01" target="_blank" rel="noreferrer" title="새창 열림" className="fas weight-500">e나라 표준인증 - 무인정보단말기(키오스크, 스마트자판기 등) 접근성 지침</a></li>
      			<li className="reference"><a href="https://blog.naver.com/prologue/PrologueList.naver?blogId=mohw2016" target="_blank" rel="noreferrer" title="새창 열림" className="fas weight-500">보건복지부 블로그</a></li>
      			<li className="reference"><a href="https://www.mohw.go.kr/synap/doc.html?fn=1635730805506_20211101104005.pdf&rs=/upload/result/202405/" target="_blank" rel="noreferrer" title="새창 열림" className="fas weight-500">보건복지부 - 장애인의 무인정보단말기 등 접근성 강화방안 마련 연구</a></li>
      			<li className="reference"><a href="https://www.kioskui.or.kr/" target="_blank" rel="noreferrer" title="새창 열림" className="fas weight-500">무인정보단말기 UI 플랫폼</a></li>
      			<li className="reference"><a href="https://www.kioskui.or.kr/index.do?menu_id=00000985" target="_blank" rel="noreferrer" title="새창 열림" className="fas weight-500">무인정보단말기 UI플랫폼 - 무인정보단말기 접근성 지침</a></li>
      			<li className="reference"><a href="https://mada.org.qa/wp-content/uploads/2020/01/Ireland-Guidelines-for-Public-Access-Terminals-Accessibility.pdf" target="_blank" rel="noreferrer" title="새창 열림" className="fas weight-500">Guidelines for Public Access Terminals Accessibility - Printable Version</a></li>
      			<li className="reference"><a href="https://damoa.or.kr/main/inner.php?sMenu=main" target="_blank" rel="noreferrer" title="새창 열림" className="fas weight-500">다모아</a></li>
      			<li className="reference"><a href="https://www.bokjibank.or.kr/SW_bbs/notice/view.php?zipEncode=90wDU9vEU9wBLjxzJzspLrxydrMCH9MyMCvrjzvpLbxEun2ybrMCH9MyMmtpTvNBFDxzPzNj9qgBLLMz5v2AM0tzTfMB5v2AMKMAR9MyFD1u9qusKjxyVjMj9u3zM0tzNfgC39MBMahAW5cDZLgBVu2yPr3BU9YCIj2xxn1l9WMC19fDZLgB" target="_blank" rel="noreferrer" title="새창 열림" className="fas weight-500">장애인복지통합정보망 복지뱅크 - 장애유형 15가지</a></li>
      		</ul>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">국내 법률</h2>

      		<ul className="mt_l dot_lst gap-column-important-sm">
      			<li className="reference"><a href="https://www.law.go.kr/" target="_blank" rel="noreferrer" title="새창 열림" className="fas weight-500">국가법령정보센터</a></li>
      			<li className="reference"><a href="https://tta.or.kr/tta/index.do" target="_blank" rel="noreferrer" title="새창 열림" className="fas weight-500">한국정보통신기술협회</a></li>
      			<li className="reference"><a href="http://www.kwacc.or.kr/Accessibility/Law" target="_blank" rel="noreferrer" title="새창 열림" className="fas weight-500">한국디지털접근성진흥원</a></li>
      			<li className="reference"><a href="https://dpikorea.org/" target="_blank" rel="noreferrer" title="새창 열림" className="fas weight-500">사단법인 한국장애인연맹(DPI)</a></li>
      			<li className="reference"><a href="https://www.kioskui.or.kr/" target="_blank" rel="noreferrer" title="새창 열림" className="fas weight-500">무인정보단말기 UI 플랫폼</a></li>
      		</ul>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">국제 법률(International Legislation)</h2>

      		<ul className="mt_l dot_lst info_lst gap-column-important-m">
      			<li>
      				<strong>Web Accessibility Laws & Policies</strong>
      				<p className="reference"><a href="https://www.w3.org/WAI/policies/" target="_blank" rel="noreferrer" title="새창 열림" className="fas weight-500">Law and Policy Overview Table</a></p>
      			</li>
      			<li>
      				<strong>USA</strong>
      				<p className="reference"><a href="http://www.section508.gov/" target="_blank" rel="noreferrer" title="새창 열림" className="fas weight-500">Section 508(제 508조)</a></p>
      			</li>
      			<li>
      				<strong>UK</strong>
      				<p className="reference"><a href="https://www.legislation.gov.uk/ukpga/2010/15/contents" target="_blank" rel="noreferrer" title="새창 열림" className="fas weight-500">Equality Act 2010(평등법 2010)</a></p>
      				<p className="reference"><a href="https://www.equalityhumanrights.com/advice-and-guidance/public-sector-equality-duty/" target="_blank" rel="noreferrer" title="새창 열림" className="fas weight-500">Public sector equality duty(공공 부문 평등 의무)</a></p>
      			</li>
      			<li>
      				<strong>Germany</strong>
      				<p className="reference"><a href="http://www.einfach-fuer-alle.de/artikel/bitv/" target="_blank" rel="noreferrer" title="새창 열림" className="fas weight-500">Barrierefreie Informationstechnik-Verordnung - BITV</a></p>
      			</li>
      			<li>
      				<strong>France</strong>
      				<p className="reference"><a href="https://references.modernisation.gouv.fr/rgaa-accessibilite/" target="_blank" rel="noreferrer" title="새창 열림" className="fas weight-500">Référentiel Général d’Accessibilité des Administrations - RGAA</a></p>
      			</li>
      			<li>
      				<strong>European Union</strong>
      				<p className="reference"><a href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=COM:2015:0615:FIN" target="_blank" rel="noreferrer" title="새창 열림" className="fas weight-500">European Accessibility Act (Detailed proposal)(유럽 접근성법(세부 제안))</a></p>
      				<p className="reference"><a href="https://ec.europa.eu/social/main.jsp?catId=1202" target="_blank" rel="noreferrer" title="새창 열림" className="fas weight-500">European Accessibility Act (Informational page)(유럽 접근성법(정보 페이지))</a></p>
      			</li>
      		</ul>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">지침 및 기술</h2>

      		<ul className="mt_l dot_lst gap-column-important-sm">
      			<li className="reference"><a href="https://www.w3.org/TR/WCAG10/" target="_blank" rel="noreferrer" title="새창 열림" className="fas weight-500">W3C WCAG 1.0</a></li>
      			<li className="reference"><a href="https://www.w3.org/TR/WCAG20/" target="_blank" rel="noreferrer" title="새창 열림" className="fas weight-500">W3C WCAG 2.0</a></li>
      			<li className="reference"><a href="https://www.w3.org/TR/WCAG21/" target="_blank" rel="noreferrer" title="새창 열림" className="fas weight-500">W3C WCAG 2.1</a></li>
      			<li className="reference"><a href="https://www.w3.org/TR/WCAG22/" target="_blank" rel="noreferrer" title="새창 열림" className="fas weight-500">W3C WCAG 2.2</a></li>
      			<li className="reference"><a href="https://www.w3.org/TR/2021/WD-wcag-3.0-20210121/" target="_blank" rel="noreferrer" title="새창 열림" className="fas weight-500">W3C WCAG 3.0 Draft</a></li>
      			<li className="reference"><a href="http://www.kwacc.or.kr/WAI/wcag21/" target="_blank" rel="noreferrer" title="새창 열림" className="fas weight-500">W3C WCAG 2.1 한국어</a></li>
      			<li className="reference"><a href="https://www.w3.org/TR/WCAG22/" target="_blank" rel="noreferrer" title="새창 열림" className="fas weight-500">W3C Web Content Accessibility Guidelines (WCAG) 2.2</a></li>
      			<li className="reference"><a href="https://www.w3.org/WAI/standards-guidelines/ko#wcag2" target="_blank" rel="noreferrer" title="새창 열림" className="fas weight-500">W3C WCAG2 ko</a></li>
      			<li className="reference"><a href="https://www.w3.org/WAI/about/groups/agwg/" target="_blank" rel="noreferrer" title="새창 열림" className="fas weight-500">W3C Accessibility Guidelines Working Group</a></li>
      			<li className="reference"><a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/intro.html#introduction-fourprincs-head" target="_blank" rel="noreferrer" title="새창 열림" className="fas weight-500">W3C 접근성의 4가지 원칙</a></li>
      			<li className="reference"><a href="https://www.w3.org/TR/2015/WD-mobile-accessibility-mapping-20150226/" target="_blank" rel="noreferrer" title="새창 열림" className="fas weight-500">W3C/WAI Guidelines Apply to Mobile</a></li>
      			<li className="reference"><a href="https://www.w3.org/TR/UAAG20/" target="_blank" rel="noreferrer" title="새창 열림" className="fas weight-500">W3C User Agent Accessibility Guidelines (UAAG) 2.0</a></li>
      			<li className="reference"><a href="https://www.w3.org/TR/IMPLEMENTING-UAAG20/mobile.html" target="_blank" rel="noreferrer" title="새창 열림" className="fas weight-500">W3C/WAI Guidelines Apply to Mobile</a></li>
      			<li className="reference"><a href="https://github.com/w3c/UAAG" target="_blank" rel="noreferrer" title="새창 열림" className="fas weight-500">W3C UAAG Github</a></li>
      			<li className="reference"><a href="https://www.w3.org/2020/09/web-roadmaps/mobile/" target="_blank" rel="noreferrer" title="새창 열림" className="fas weight-500">Roadmap of Web Applications on Mobile</a></li>
      			<li className="reference"><a href="https://www.webwatch.or.kr/pds/(KS%20X%203253)%EB%AA%A8%EB%B0%94%EC%9D%BC%20%EC%95%A0%ED%94%8C%EB%A6%AC%EC%BC%80%EC%9D%B4%EC%85%98%20%EC%BD%98%ED%85%90%EC%B8%A0%20%EC%A0%91%EA%B7%BC%EC%84%B1%20%20%EC%A7%80%EC%B9%A8%202.0.pdf" target="_blank" rel="noreferrer" title="새창 열림" className="fas weight-500">모바일 애플리케이션 콘텐츠 접근성 지침 2.0</a></li>
      			<li className="reference"><a href="https://www.w3.org/TR/wai-aria-1.1/" target="_blank" rel="noreferrer" title="새창 열림" className="fas weight-500">W3C Accessible Rich Internet Applications (WAI-ARIA) 1.1</a></li>
      			<li className="reference"><a href="https://www.w3.org/TR/wai-aria-1.2/" target="_blank" rel="noreferrer" title="새창 열림" className="fas weight-500">W3C Accessible Rich Internet Applications (WAI-ARIA) 1.2</a></li>
      			<li className="reference"><a href="https://w3c.github.io/aria/" target="_blank" rel="noreferrer" title="새창 열림" className="fas weight-500">W3C Editor’s Draft - Accessible Rich Internet Applications (WAI-ARIA) 1.3</a></li>
      			<li className="reference"><a href="https://wicg.github.io/aom/explainer.html" target="_blank" rel="noreferrer" title="새창 열림" className="fas weight-500">Accessibility Object Model</a></li>
      			<li className="reference"><a href="https://www.w3.org/TR/wai-aria-1.1/img/rdf_model.svg" target="_blank" rel="noreferrer" title="새창 열림" className="fas weight-500">W3C Class diagram of the relationships described in the role data model.</a></li>
      			<li className="reference"><a href="https://developer.mozilla.org/ko/docs/Web/Accessibility/Understanding_WCAG" target="_blank" rel="noreferrer" title="새창 열림" className="fas weight-500">MDN 웹 콘텐츠 접근성 지침 이해하기</a></li>
      			<li className="reference"><a href="https://developer.mozilla.org/ko/docs/Learn/Accessibility/What_is_accessibility#accessibility_guidelines_and_the_law" target="_blank" rel="noreferrer" title="새창 열림" className="fas weight-500">MDN 접근성이란?</a></li>
      			<li className="reference"><a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Guides" target="_blank" rel="noreferrer" title="새창 열림" className="fas weight-500">MDN ARIA guides</a></li>
      			<li className="reference"><a href="https://seculayerlab.tistory.com/m/48" target="_blank" rel="noreferrer" title="새창 열림" className="fas weight-500">웹접근성 국가표준 개정 소개</a></li>
      			<li className="reference"><a href="https://www.samsungfashion.com/webacc.do" target="_blank" rel="noreferrer" title="새창 열림" className="fas weight-500">한국형 웹 콘텐츠 접근성 지침 2.2</a></li>
      			<li className="reference"><a href="https://nuli.navercorp.com/community/article/1133181" target="_blank" rel="noreferrer" title="새창 열림" className="fas weight-500">NULI WCAG 2.2에서 변경된 사항</a></li>
      			<li className="reference"><a href="https://iyu88.github.io//a11y/2023/12/24/web-accessibility-1.html" target="_blank" rel="noreferrer" title="새창 열림" className="fas weight-500">WAI 문서로 접근성 이해하기</a></li>
      			<li className="reference"><a href="https://brunch.co.kr/@snclab/55" target="_blank" rel="noreferrer" title="새창 열림" className="fas weight-500">brunch WCAG 2.2 작업 초안</a></li>
      			<li className="reference"><a href="https://www.deque.com/blog/wcag-2-1-what-is-next-for-accessibility-guidelines/" target="_blank" rel="noreferrer" title="새창 열림" className="fas weight-500">deque blog WCAG 2.1</a></li>
      			<li className="reference"><a href="https://a11y.gitbook.io/wcag/international-standards" target="_blank" rel="noreferrer" title="새창 열림" className="fas weight-500">GITBOOK WCAG 2.1</a></li>
      			<li className="reference"><a href="https://aoa.gitbook.io/skymimo/undefined" target="_blank" rel="noreferrer" title="새창 열림" className="fas weight-500">AOA GITBOOK</a></li>
      			<li className="reference"><a href="https://www.nld.go.kr/ableFront/new_standard_guide/accessibility.jsp" target="_blank" rel="noreferrer" title="새창 열림" className="fas weight-500">국립장애인도서관</a></li>
      			<li className="reference"><a href="https://www.samsung.com/sec/accessibility/mobile-voice-assistant/" target="_blank" rel="noreferrer" title="새창 열림" className="fas weight-500">Voice Assistant + TalkBack 사용법</a></li>
      		</ul>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">인증마크</h2>

      		<ul className="mt_l dot_lst gap-column-important-sm">
      			<li className="reference"><a href="https://www.wa.or.kr/" target="_blank" rel="noreferrer" title="새창 열림" className="fas weight-500">한국웹접근성인증평가원(사단법인 한국장애인단체총연합회)</a></li>
      			<li className="reference"><a href="https://www.webwatch.or.kr/" target="_blank" rel="noreferrer" title="새창 열림" className="fas weight-500">웹와치</a></li>
      			<li className="reference"><a href="http://www.kdaa.or.kr/" target="_blank" rel="noreferrer" title="새창 열림" className="fas weight-500">한국디지털접근성진흥원(구 한국웹접근성평가센터)</a></li>
      		</ul>
      	</section>
      	

    </>
  )
}

export default BookmarkPage
