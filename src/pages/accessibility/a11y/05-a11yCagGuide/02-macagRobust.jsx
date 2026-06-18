import { useAccessibilityPageMeta } from '@/hooks/useAccessibilityPageMeta.js'
import { IMG } from '@/config/path'

const PAGE_LAYOUT = {
  mainClass: "macagRobust",
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
  title: "견고성(Robust) | 접근성 항목별 준수 가이드(모바일 앱 접근성)",
  description: "접근성 항목별 준수 가이드는 웹 모바일 앱 접근성을 보장하기 위한 구체적인 지침을 제공합니다. 이 페이지에서는 모바일 앱 접근성 준수 가이드의 견고성(Robust)에 대해 소개합니다.",
  keyword: "Accessibility, a11y, wcag, kwcag, macag, kiosk, 접근성, 웹 콘텐츠 접근성, 한국형 웹 콘텐츠 접근성, 모바일 앱 접근성, 무인정보단말기 접근성, 견고성, 보조기술과의 호환성, 폰트 관련 기능의 활용, 사용자 인터페이스 컴포넌트, 상태 메시지, 범용 폰트",
}

function MacagRobustPage() {
  useAccessibilityPageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  })


  return (
    <>
      <blockquote className="uk_note common_note mt_xxl" role="note">
      	<strong className="sound_only">요약 설명</strong>
      	<p>
      		모바일 앱 접근성 준수 가이드는 2025년 발행한 ISO/IEC 40500:2025(Information technology - W3C Web Content Accessibility Guidelines (WCAG) 2.2)의 A, AA 수준 성공기준을 반영해 개정된 KS X 3253:2025를 기반으로, 장애 유무와 관계없이 누구나 콘텐츠를 동등하게 이용할 수 있도록 원칙별 지침과 점검 항목을 제시합니다.
      		이번 개정에서는 신규 심사항목 23개를 도입했고, 기존 16개 심사항목은 변경(4개), 분리(1개), 통합(2개), 강화(5개)로 재구성했습니다.
      	</p>
      </blockquote>










      	<blockquote className="uk_note mt_xxl" role="note">
      		<strong className="sound_only">요약 설명</strong>
      		<p>
      			<b>견고성(Robust)</b>은 사용자가 콘텐츠를 이용할 수 있도록 기술에 영향을 받지 않아야 함을 의미합니다.<br />
      			견고성은 보조기술과의 호환성 1개 지침과 2개 검사항목으로 구성되어 있습니다.
      		</p>
      	</blockquote>
      	<figure className="img_figure mt_l">
      		<img src={`${IMG.A11Y}/5_2_macag4.png`} alt="4 견고성" />
      		<figcaption>
      			견고성
      		</figcaption>
      	</figure>

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">사용자 인터페이스 컴포넌트 [강화]</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				사용자 인터페이스 컴포넌트는 보조 기술을 이용하여 사용할 수 있도록 해야 합니다.
      			</p>
      		</blockquote>

      		<dl className="dl_lst mt_l">
      			<dt className="t_black">
      				고려 사항
      			</dt>
      			<dd className="mt_s">
      				<ul className="dot_lst gap-column-important-sm">
      					<li>
      						운영체제에서 제공하는 기본 사용자 인터페이스 컴포넌트를 최대한 이용하는 것이 바람직합니다.
      					</li>
      					<li>
      						부득이하게 기본 사용자 인터페이스 컴포넌트를 사용할 수 없을 시에는 운영체제에서 제공하는 보조 기술을 사용할 수 있도록 해야 합니다.
      					</li>
      					<li>
      						기본 컴포넌트를 원래의 기능과 다른 기능으로 제공할 경우 사용자가 컨트롤의 기능을 이해할 수 있도록 그 기능에 대한 정보를 제공해야 합니다.
      					</li>
      				</ul>
      			</dd>
      		</dl>
      		

      		<figure className="img_figure mt_l" aria-hidden="true">
      			<img src={`${IMG.A11Y}/5_2_macag_40.png`} alt="40 사용자 인터페이스 컴포넌트" />
      			<figcaption>
      				지침: 보조기술과의 호환성
      			</figcaption>
      		</figure>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">상태 메시지 [신규]</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				중요한 상태 메시지는 보조기술 사용자에게도 전달되어야 합니다.
      			</p>
      		</blockquote>

      		<dl className="dl_lst mt_l">
      			<dt className="t_black">
      				고려 사항
      			</dt>
      			<dd className="mt_s">
      				<ul className="dot_lst gap-column-important-sm">
      					<li>
      						조회 결과, 폼 오류, 저장 완료, 장바구니 변경과 같은 상태 변화는 시각적 표시 외에도 보조기술에 함께 전달해야 합니다.
      					</li>
      					<li>
      						상태 메시지는 초점을 강제로 이동시키지 않고도 인지할 수 있도록 제공하며, 메시지 문구는 짧고 명확하게 작성하는 것이 바람직합니다.
      					</li>
      					<li>
      						웹/하이브리드 앱은 <code>role=&quot;status&quot;</code>, <code>role=&quot;alert&quot;</code>, <code>aria-live</code>를 활용하고, 네이티브 앱은 운영체제 접근성 API를 통해 상태 변화를 알려야 합니다.
      					</li>
      				</ul>
      			</dd>
      		</dl>
      		
      		<figure className="img_figure mt_l" aria-hidden="true">
      			<img src={`${IMG.A11Y}/5_2_macag_41.png`} alt="41 상태 메시지" />
      			<figcaption>
      				지침: 보조기술과의 호환성
      			</figcaption>
      		</figure>
      	</section>
      	


      <footer className="reference_box">
      	<strong className="tit">접근성 항목별 준수 가이드 - 모바일 앱 접근성 참조</strong>
      	<ul className="link_lst">
      		<li className="reference"><a href="https://www.w3.org/TR/WCAG10/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C WCAG 1.0</a></li>
      		<li className="reference"><a href="https://www.w3.org/TR/WCAG20/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C WCAG 2.0</a></li>
      		<li className="reference"><a href="https://www.w3.org/TR/WCAG21/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C WCAG 2.1</a></li>
      		<li className="reference"><a href="https://www.w3.org/TR/WCAG22/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C WCAG 2.2</a></li>
      		<li className="reference"><a href="https://www.w3.org/TR/2021/WD-wcag-3.0-20210121/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C WCAG 3.0 Draft</a></li>
      		<li className="reference"><a href="https://www.w3.org/TR/2015/WD-mobile-accessibility-mapping-20150226/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C/WAI Guidelines Apply to Mobile</a></li>
      		<li className="reference"><a href="https://www.w3.org/TR/UAAG20/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C User Agent Accessibility Guidelines (UAAG) 2.0</a></li>
      		<li className="reference"><a href="https://www.w3.org/TR/IMPLEMENTING-UAAG20/mobile.html" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C/WAI Guidelines Apply to Mobile</a></li>
      		<li className="reference"><a href="https://github.com/w3c/UAAG" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C UAAG Github</a></li>
      		<li className="reference"><a href="http://www.webwatch.or.kr/pds/(KS%20X%203253)%EB%AA%A8%EB%B0%94%EC%9D%BC%20%EC%95%A0%ED%94%8C%EB%A6%AC%EC%BC%80%EC%9D%B4%EC%85%98%20%EC%BD%98%ED%85%90%EC%B8%A0%20%EC%A0%91%EA%B7%BC%EC%84%B1%20%20%EC%A7%80%EC%B9%A8%202.0.pdf" target="_blank" rel="noreferrer" title="새창 열림" className="fas">모바일 애플리케이션 콘텐츠 접근성 지침 2.0</a></li>
      	</ul>
      </footer>
    </>
  )
}

export default MacagRobustPage
