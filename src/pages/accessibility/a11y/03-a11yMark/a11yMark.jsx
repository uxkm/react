import { useAccessibilityPageMeta } from '@/hooks/useAccessibilityPageMeta.js'
import { IMG } from '@/config/path'

const PAGE_LAYOUT = {
  mainClass: "a11yMark",
  type: "accessibility",
  titleSticky: false,
  info: false,
  note: false,
  sideMenu: true,
  reference: false,
  contentList: false,
  depth3Last: true,
  bottomEditor: false
}

const PAGE_DATA = {
  title: "접근성 인증 마크",
  description: "웹 콘텐츠 접근성 가이드라인(WCAG)은 웹사이트와 온라인 서비스가 모든 사용자에게 접근 가능하도록 하는 국제 표준 문서입니다. 이 가이드라인은 세 가지 준수 수준(A, AA, AAA)을 제시하여, 접근성을 향상시키기 위한 구체적인 원칙과 기준을 제공합니다. 이 페이지에서는 WCAG의 버전과 표준화 제정 단계 및 성공 기준을 간결히 설명하며, 각 수준의 기준이 웹사이트와 디지털 콘텐츠에 어떻게 적용되는지 소개합니다.",
  keyword: "Accessibility, a11y, wcag, kwcag, macag, kiosk, 접근성, 웹 콘텐츠 접근성, 한국형 웹 콘텐츠 접근성, 모바일 앱 접근성, 무인정보단밀기 접근성",
}

function A11yMarkPage() {
  useAccessibilityPageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  })


  return (
    <>









      	<link href="/a11yStart.min.css" rel="stylesheet" />



      	<blockquote className="uk_note mt_xxl" role="note">
      		<strong className="sound_only">요약 설명</strong>
      		<p>
      			웹 접근성 인증 마크란 웹사이트 또는 온라인 서비스가 특정 웹 접근성 기준이나 지침을 충족한다는 것을 인증하는 마크입니다.
      			이 인증 마크를 획득함으로써, 조직은 자신의 웹사이트가 광범위한 사용자들에게 접근 가능하다는 것을 공식적으로 보여줄 수 있으며,
      			법적 요구 사항을 준수한다는 신뢰를 제공합니다.<br />
      			웹 접근성 인증 과정은 일반적으로 사이트의 검사 및 평가를 포함하며, 필요한 경우 사이트의 개선 작업 후에 인증을 받게 됩니다.
      		</p>
      	</blockquote>

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">3.1. 웹 접근성 품질인증이란?</h2>
      		<p className="mt_ml">
      			장애인 및 고령자가 웹 사이트 이용에 불편이 없도록 웹 접근성 표준지침을 준수한 우수 사이트에 대해
      			웹 접근성 수준을 인정하고 이를 상징하는 품질 마크를 부여하는 인증제도 입니다.
      		</p>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">3.2. 인증의 필요성</h2>
      		<ul className="mt_ml dot_lst">
      			<li>웹 접근성 전문 지식이 없는 이해관계자를 위한 객관적인 웹 접근성 준수 확인방법</li>
      			<li>품질인증의 갱신을 통한 일정 수준 이상의 품질을 유지하기 위한 역할</li>
      			<li>해당 기관에 보다 많은 고객확보를 위한 홍보가 가능하고, 웹 접근성을 향상하는 수단으로 활용</li>
      		</ul>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">3.3. 인증대상</h2>
      		<p className="mt_ml">
      			인터넷을 통해 정보통신서비스를 제공하고, 웹 사이트를 운영하는 정부 및 공공기관과 민간 사업장 등
      		</p>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">3.4. 강제성 여부</h2>
      		<p className="mt_ml">
      			웹 접근성 품질인증제도는 국가임의인증제도로 반드시 필요한 것은 아니며,
      			자율적으로 필요에 따라 신청하고 적합한 품질을 가지고 있는 경우 획득할 수 있습니다.
      		</p>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">3.5. 인증기관</h2>
      		<p className="mt_ml">
      			국가공인 웹 접근성 품질인증기관으로 총 3개의 기관이 있습니다.
      		</p>
      		<ul className="dot_lst mt_s">
      			<li className="reference"><a href="https://www.wa.or.kr/" target="_blank" rel="noreferrer" className="fas"><b>한국웹접근성인증평가원(사단법인 한국장애인단체총연합회)</b></a></li>
      			<li className="reference"><a href="http://www.webwatch.or.kr/" target="_blank" rel="noreferrer" className="fas"><b>웹와치</b></a></li>
      			<li className="reference"><a href="http://www.kdaa.or.kr/" target="_blank" rel="noreferrer" className="fas"><b>한국디지털접근성진흥원(구. 한국웹접근성평가센터)</b></a></li>
      		</ul>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">3.6. 인증마크</h2>
      		<figure className="img_figure mt_l a11yMark_figure">
      			<div className="figure_inner">
      				<figure>
      					<p>
      						<img src={`${IMG.A11Y}/3_img_wa_web.png`} alt="고령자" className="max-w250" />
      					</p>
      					<figcaption>
      						<b className="t_black">정보통신접근성(웹접근성) PC, Mobile, Web</b><br />
      						[출처 : 무인정보단발기 UI 플랫폼]
      					</figcaption>
      				</figure>
      				<figure>
      					<p>
      						<img src={`${IMG.A11Y}/3_img_wa_app.svg`} alt="시각장애" className="max-w250" />
      					</p>
      					<figcaption>
      						<b className="t_black">모바일(Mobile Application)</b><br />
      						[출처 : 웹와치]
      					</figcaption>
      				</figure>
      			</div>
      		</figure>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">3.7. 인증마크 기대효과</h2>
      		<ol className="ol_lst mt_ml">
      			<li>브랜드 이미지 인지도 상승 및 고객 신뢰도와 만족도 제고</li>
      			<li>효율적인 정보 검색 및 접근용이</li>
      			<li>웹·앱 기술 품질 보증 및 높은 호환성</li>
      			<li>정부정책 부응에 따른 이미지 제고 효과</li>
      			<li>정보소외계층의 정보격차 해소로 평등한 기회 제공</li>
      		</ol>
      	</section>
      	

      	<footer className="reference_box">
      		<strong className="tit">접근성 인증 마크 참조</strong>
      		<ul className="link_lst">
      			<li className="reference"><a href="https://www.wa.or.kr/" target="_blank" rel="noreferrer" className="fas">한국웹접근성인증평가원(사단법인 한국장애인단체총연합회)</a></li>
      			<li className="reference"><a href="http://www.webwatch.or.kr/" target="_blank" rel="noreferrer" className="fas">웹와치</a></li>
      			<li className="reference"><a href="http://www.kdaa.or.kr/" target="_blank" rel="noreferrer" className="fas">한국디지털접근성진흥원(구. 한국웹접근성평가센터)</a></li>
      			<li className="reference"><a href="https://www.kioskui.or.kr/index.do?menu_id=00001016&servletPath=%2Findex.do" target="_blank" rel="noreferrer" className="fas">품질인증 소개</a></li>
      		</ul>
      	</footer>

    </>
  )
}

export default A11yMarkPage
