import { useAccessibilityPageMeta } from '@/hooks/useAccessibilityPageMeta.js'
import { IMG } from '@/config/path'

const PAGE_LAYOUT = {
  mainClass: "kwcagRobust",
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
  title: "견고성(Robust) | 접근성 항목별 준수 가이드(웹 콘텐츠 접근성)",
  description: "접근성 항목별 준수 가이드는 웹 콘텐츠 접근성을 보장하기 위한 구체적인 지침을 제공합니다. 이 페이지에서는 웹 콘텐츠 접근성 준수 가이드의 견고성(Robust)에 대해 소개합니다.",
  keyword: "Accessibility, a11y, wcag, kwcag, macag, kiosk, 접근성, 웹 콘텐츠 접근성, 한국형 웹 콘텐츠 접근성, 모바일 앱 접근성, 무인정보단말기 접근성",
}

function KwcagRobustPage() {
  useAccessibilityPageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  })


  return (
    <>









      	<blockquote className="uk_note mt_xxl" role="note">
      		<strong className="sound_only">요약 설명</strong>
      		<p>
      			<b>견고성(Robust)</b>은 사용자가 콘텐츠를 이용할 수 있도록 기술에 영향을 받지 않아야 함을 의미합니다.<br />
      			KWCAG 2.1, KWCAG 2.2 견고성은 문법 준수, 웹 애플리케이션 접근성의 2가지 지침으로 구성되어 있습니다.
      		</p>
      	</blockquote>

      	<figure className="img_figure mt_l">
      		<img src={`${IMG.A11Y}/5_1_kwcag_robust.png`} alt="견고성" />
      		<figcaption>
      			견고성
      		</figcaption>
      	</figure>

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">문법 준수</h2>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">마크업 오류 방지</h3>

      			<blockquote className="uk_note mt_l" role="note">
      				<strong className="sound_only">요약 설명</strong>
      				<p>
      					<b className="t_black">마크업 언어의 요소는 열고 닫음, 중첩 관계 및 속성 선언에 오류가 없어야 합니다.</b><br />
      					마크업 언어로 작성된 콘텐츠는 해당 마크업 언어의 문법을 최대한 준수하여 제공해야 합니다.
      					특히 요소의 열고 닫음, 중첩 관계의 오류가 없도록 제공해야 하며, 요소의 속성도 마크업 문법을 최대한 준수하여 제공하는 것이 바람직합니다.
      				</p>
      				<p className="reference mt_ms">
      					WCAG 2.1 부분 참조.<br />
      					<a href="https://www.w3.org/TR/WCAG21/#parsing" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">4.1.1 Parsing (Level A)</a><br />
      				</p>
      			</blockquote>

      			<div className="mt_l indent">
      				<h4 className="ml_mn">고려 사항</h4>
      				<ol className="mt_m ol_lst info_lst gap-column-important-ms">
      					<li className="t_black_before weight-600-before">
      						<strong>요소의 열고 닫음 일치</strong>
      						<p>
      							마크업 언어로 작성된 콘텐츠는 표준에서 특별히 정한 경우를 제외하고는 시작 요소와 끝나는 요소가 정의되어야 합니다.
      						</p>
      					</li>
      					<li className="t_black_before weight-600-before">
      						<strong>요소의 포함 관계 일치</strong>
      						<p>
      							시작 요소와 끝나는 요소의 나열 순서는 포함 관계가 어긋나지 않아야 합니다.
      						</p>
      					</li>
      					<li className="t_black_before weight-600-before">
      						<strong>중복된 속성 사용 금지</strong>
      						<p>
      							하나의 요소 안에서 속성을 중복하여 선언하지 않아야 합니다.
      						</p>
      					</li>
      					<li className="t_black_before weight-600-before">
      						<strong>id 속성 값 중복 선언 금지</strong>
      						<p>
      							하나의 마크업 문서에서는 같은 id 값을 중복하여 선언하지 않아야 합니다.
      						</p>
      					</li>
      				</ol>
      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn t_blue weight-800">기대 효과</h4>
      				<ul className="mt_m dot_lst info_lst gap-column-important-sm">
      					<li>
      						시작 요소와 끝나는 요소가 잘 대응되고 요소 간의 포함 관계가 어긋나지 않도록 웹 페이지의 마크업 문서를 구성하면,
      						웹 브라우저나 보조 기술이 작동을 멈추지 않고 콘텐츠를 명확히 전달할 수 있습니다.
      					</li>
      					<li>
      						콘텐츠에 필요한 속성의 누락이나 중복을 제거하여, 콘텐츠의 일부 기능이 누락되는 것을 방지할 수 있습니다.
      					</li>
      				</ul>
      			</div>
      			

      			<figure className="img_figure mt_l">
      				<img src={`${IMG.A11Y}/5_1_kwcag_32.png`} alt="32 마크업 오류 방지" />
      				<figcaption>
      					견고성
      				</figcaption>
      			</figure>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">웹 애플리케이션 접근성</h2>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">웹 애플리케이션 접근성 준수</h3>

      			<blockquote className="uk_note mt_l" role="note">
      				<strong className="sound_only">요약 설명</strong>
      				<p>
      					<b className="t_black">콘텐츠에 포함된 웹 애플리케이션은 접근성을 준수해야 합니다.</b><br />
      					웹 콘텐츠를 사용하는 데 필요한 플러그인 또는 웹 페이지의 기능을 실행하는 데 필요한 웹 애플리케이션은
      					사용자가 웹 페이지에 접근하여 사용하는 것을 방해하지 않아야 합니다.
      					웹 애플리케이션은 다음에 설명한 모든 요구사항을 적용하여 제작하여야 합니다.
      				</p>
      				<p className="reference mt_ms">
      					WCAG 2.1 부분 참조.<br />
      					<a href="https://www.w3.org/TR/WCAG21/#name-role-value" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">4.1.2 Name, Role, Value (Level A)</a><br />
      				</p>
      			</blockquote>

      			<div className="mt_l indent">
      				<h4 className="ml_mn">고려 사항</h4>
      				<ol className="mt_m ol_lst info_lst gap-column-important-ms">
      					<li className="t_black_before weight-600-before">
      						<strong>접근성 프로그래밍 인터페이스 사용 지원</strong>
      						<p>
      							웹 애플리케이션은 운영체제 또는 플랫폼이 제공하는 접근성 프로그래밍 인터페이스를 사용하여 제작되어야 합니다.
      							그렇지 않으면 보조 기술이 웹 애플리케이션의 접근성 기능을 지원하지 못하는 경우가 발생할 수 있습니다.
      						</p>
      					</li>
      					<li className="t_black_before weight-600-before">
      						<strong>접근성 프로그래밍 인터페이스 대체 수단 제공</strong>
      						<p>
      							웹 애플리케이션을 구현하는 과정에서 운영체제(플랫폼 포함)가 제공하는 접근성 프로그래밍
      							인터페이스가 정의되지 않은 새로운 기능을 구현할 경우에는
      							그 기능의 명칭, 역할, 상태 및 값에 관한 정보를 운영체제(또는 플랫폼)의 접근성 프로그래밍 인터페이스로
      							전달하도록 구현함으로써 보조 기술이 그 정보를 이용할 수 있게 해야 합니다.
      						</p>
      					</li>
      					<li className="t_black_before weight-600-before">
      						<strong>보조 기술 지원</strong>
      						<p>
      							국내의 보조 기술로 접근이 불가능한 웹 애플리케이션은 가능한 한 사용하지 않는 것이 좋으며,
      							꼭 사용해야 하는 경우에는 해당 웹 애플리케이션에 대한 대체 수단을 제공해야 합니다.
      						</p>
      					</li>
      				</ol>
      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn t_blue weight-800">기대 효과</h4>
      				<ul className="mt_m dot_lst info_lst gap-column-important-sm">
      					<li>
      						웹 애플리케이션이 접근성을 제공할 경우 보조 기술이 웹 애플리케이션과 상호작용이 가능하므로 보조 기술 사용자가 웹 애플리케이션을 활용할 수 있습니다.
      					</li>
      					<li>
      						웹 애플리케이션에 적용하려는 기능이 플랫폼 접근성 프로그래밍 인터페이스를 지원하지 않더라도,
      						필수적인 접근성 정보를 플랫폼 접근성 프로그래밍 인터페이스를 통해 보조 기술로 제공할 수 있으므로, 새로운 접근성 기술의 개발이 가능해집니다.
      					</li>
      				</ul>
      			</div>
      			

      			<figure className="img_figure mt_l">
      				<img src={`${IMG.A11Y}/5_1_kwcag_33.png`} alt="33 웹 애플리케이션 접근성 준수" />
      				<figcaption>
      					견고성
      				</figcaption>
      			</figure>
      		</article>
      		
      	</section>
      	


      <footer className="reference_box">
      	<strong className="tit">접근성 항목별 준수 가이드 - 웹 콘텐츠 접근성 참조</strong>
      	<ul className="link_lst">
      		<li className="reference"><a href="https://www.w3.org/TR/WCAG10/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C WCAG 1.0</a></li>
      		<li className="reference"><a href="https://www.w3.org/TR/WCAG20/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C WCAG 2.0</a></li>
      		<li className="reference"><a href="https://www.w3.org/TR/WCAG21/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C WCAG 2.1</a></li>
      		<li className="reference"><a href="https://www.w3.org/TR/WCAG22/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C WCAG 2.2</a></li>
      		<li className="reference"><a href="https://www.w3.org/TR/2021/WD-wcag-3.0-20210121/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C WCAG 3.0 Draft</a></li>
      		<li className="reference"><a href="http://www.kwacc.or.kr/WAI/wcag21/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C WCAG 2.1 한국어</a></li>
      		<li className="reference"><a href="https://www.w3.org/TR/WCAG22/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C Web Content Accessibility Guidelines (WCAG) 2.2</a></li>
      		<li className="reference"><a href="https://www.w3.org/WAI/standards-guidelines/ko#wcag2" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C WCAG2 ko</a></li>
      		<li className="reference"><a href="https://www.w3.org/WAI/about/groups/agwg/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C Accessibility Guidelines Working Group</a></li>
      		<li className="reference"><a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/intro.html#introduction-fourprincs-head" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C 접근성의 4가지 원칙</a></li>
      		<li className="reference"><a href="https://developer.mozilla.org/ko/docs/Web/Accessibility/Understanding_WCAG" target="_blank" rel="noreferrer" title="새창 열림" className="fas">MDN 웹 콘텐츠 접근성 지침 이해하기</a></li>
      		<li className="reference"><a href="https://developer.mozilla.org/ko/docs/Learn/Accessibility/What_is_accessibility#accessibility_guidelines_and_the_law" target="_blank" rel="noreferrer" title="새창 열림" className="fas">MDN 접근성이란?</a></li>
      		<li className="reference"><a href="https://nuli.navercorp.com/community/article/1133181" target="_blank" rel="noreferrer" title="새창 열림" className="fas">NULI WCAG 2.2에서 변경된 사항</a></li>
      		<li className="reference"><a href="https://brunch.co.kr/@snclab/55" target="_blank" rel="noreferrer" title="새창 열림" className="fas">brunch WCAG 2.2 작업 초안</a></li>
      		<li className="reference"><a href="https://a11y.gitbook.io/wcag/international-standards" target="_blank" rel="noreferrer" title="새창 열림" className="fas">GITBOOK WCAG 2.1</a></li>
      		<li className="reference"><a href="https://iyu88.github.io//a11y/2023/12/24/web-accessibility-1.html" target="_blank" rel="noreferrer" title="새창 열림" className="fas">WAI 문서로 접근성 이해하기</a></li>
      		<li className="reference"><a href="https://www.deque.com/blog/wcag-2-1-what-is-next-for-accessibility-guidelines/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">deque blog WCAG 2.1</a></li>
      		<li className="reference"><a href="https://seculayerlab.tistory.com/m/48" target="_blank" rel="noreferrer" title="새창 열림" className="fas">웹접근성 국가표준 개정 소개</a></li>
      		<li className="reference"><a href="https://www.samsungfashion.com/webacc.do" target="_blank" rel="noreferrer" title="새창 열림" className="fas">한국형 웹 콘텐츠 접근성 지침 2.2</a></li>
      		<li className="reference"><a href="https://aoa.gitbook.io/skymimo/undefined" target="_blank" rel="noreferrer" title="새창 열림" className="fas">AOA GITBOOK</a></li>
      		<li className="reference"><a href="https://nia-a11y.github.io/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">웹 접근성을 고려한 콘텐츠 제작기법 2.2 개정판</a></li>
      	</ul>
      </footer>
    </>
  )
}

export default KwcagRobustPage
