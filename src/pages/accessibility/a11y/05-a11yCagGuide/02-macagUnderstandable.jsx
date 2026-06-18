import { useAccessibilityPageMeta } from '@/hooks/useAccessibilityPageMeta.js'
import { IMG } from '@/config/path'

const PAGE_LAYOUT = {
  mainClass: "macagUnderstandable",
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
  title: "이해의 용이성(Understandable) | 접근성 항목별 준수 가이드(모바일 앱 접근성)",
  description: "접근성 항목별 준수 가이드는 웹 모바일 앱 접근성을 보장하기 위한 구체적인 지침을 제공합니다. 이 페이지에서는 모바일 앱 접근성 준수 가이드의 이해의 용이성(Understandable)에 대해 소개합니다.",
  keyword: "Accessibility, a11y, wcag, kwcag, macag, kiosk, 접근성, 웹 콘텐츠 접근성, 한국형 웹 콘텐츠 접근성, 모바일 앱 접근성, 무인정보단말기 접근성, 이해의 용이성, 가독성, 예측가능성, 입력 도움, 입력 오류, 사용자 인터페이스의 일관성, 깜박거림의 사용 제한, 자동재생 금지",
}

function MacagUnderstandablePage() {
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
      			<b>이해의 용이성(Understandable)</b>은 사용자가 장애 유무 등에 관계없이 웹 사이트에서 제공하는 콘텐츠를 이해할 수 있도록 제공하는 것을 의미합니다.<br />
      			이해의 용이성은 가독성, 예측 가능성, 입력 도움의 3개 지침과 10개 검사항목으로 구성되어 있습니다.
      		</p>
      	</blockquote>
      	<figure className="img_figure mt_l">
      		<img src={`${IMG.A11Y}/5_2_macag3.png`} alt="3 이해의 용이성" />
      		<figcaption>
      			이해의 용이성
      		</figcaption>
      	</figure>

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">기본 언어 표시 [신규]</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				주로 사용하는 언어는 명시해야 합니다.
      			</p>
      		</blockquote>

      		<dl className="dl_lst mt_l">
      			<dt className="t_black">
      				고려 사항
      			</dt>
      			<dd className="mt_s">
      				<ul className="dot_lst gap-column-important-sm">
      					<li>
      						앱 또는 웹 문서의 기본 언어를 코드 수준에서 지정하여 보조기술이 정확한 발음과 규칙으로 읽을 수 있어야 합니다.
      					</li>
      					<li>
      						초기 화면, 로그인, 주요 안내 화면 등 핵심 화면에서 언어 설정 누락이 없도록 점검해야 합니다.
      					</li>
      					<li>
      						동적으로 생성되는 콘텐츠에도 기본 언어 설정이 일관되게 적용되도록 구현하는 것이 바람직합니다.
      					</li>
      				</ul>
      			</dd>
      		</dl>
      		
      		<figure className="img_figure mt_l" aria-hidden="true">
      			<img src={`${IMG.A11Y}/5_2_macag_30.png`} alt="30 기본 언어 표시" />
      			<figcaption>
      				지침: 가독성
      			</figcaption>
      		</figure>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">부분 언어 표시 [신규]</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				기본 언어와 구별되는 다른 언어는 해당 언어를 명시해야 합니다.
      			</p>
      		</blockquote>

      		<dl className="dl_lst mt_l">
      			<dt className="t_black">
      				고려 사항
      			</dt>
      			<dd className="mt_s">
      				<ul className="dot_lst gap-column-important-sm">
      					<li>
      						외국어 문장, 인용문, 전문 용어 등 일부 구간은 해당 언어 속성을 지정해야 합니다.
      					</li>
      					<li>
      						화면 내 다국어 전환이 빈번한 경우에도 각 텍스트 구간의 언어 정보가 정확히 유지되도록 구현해야 합니다.
      					</li>
      					<li>
      						번역 토글이나 언어 선택 기능을 제공할 때도 보조기술이 현재 언어를 정확히 인식할 수 있도록 해야 합니다.
      					</li>
      				</ul>
      			</dd>
      		</dl>
      		
      		<figure className="img_figure mt_l" aria-hidden="true">
      			<img src={`${IMG.A11Y}/5_2_macag_31.png`} alt="31 부분 언어 표시" />
      			<figcaption>
      				지침: 가독성
      			</figcaption>
      		</figure>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">사용자 요구에 따른 실행 [유지]</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				사용자가 의도하지 않은 기능은 자동적으로 실행되지 않아야 합니다.
      			</p>
      		</blockquote>

      		<dl className="dl_lst mt_l">
      			<dt className="t_black">
      				고려 사항
      			</dt>
      			<dd className="mt_s">
      				<ul className="dot_lst gap-column-important-sm">
      					<li>
      						화면이 전환되거나 팝업과 같은 이벤트가 실행되는 경우 이를 예측할 수 있는 방법을 제공해야 합니다.
      					</li>
      					<li>
      						다른 애플리케이션으로 연결 및 전환되는 경우 이를 예측할 수 있는 방법을 제공해야 합니다.
      					</li>
      					<li>
      						새 창 열림, 외부 앱 호출, 결제 모듈 이동 등 맥락 변화가 큰 동작은 실행 전에 명확히 고지해야 합니다.
      					</li>
      				</ul>
      			</dd>
      		</dl>
      		

      		<figure className="img_figure mt_l">
      			<img src={`${IMG.A11Y}/5_2_macag_32.png`} alt="32 사용자 요구에 따른 실행" />
      			<figcaption>
      				지침: 예측 가능성
      			</figcaption>
      		</figure>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">사용자 인터페이스 컴포넌트의 일관성 [강화]</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				사용자 인터페이스 컴포넌트들은 일관성 있게 배치되어야 합니다.
      			</p>
      		</blockquote>

      		<dl className="dl_lst mt_l">
      			<dt className="t_black">
      				고려 사항
      			</dt>
      			<dd className="mt_s">
      				<ul className="dot_lst gap-column-important-sm">
      					<li>
      						화면에 표시되는 콘텐츠들의 배치는 일관성 있게 제공되어야 합니다.
      					</li>
      					<li>
      						애플리케이션 내의 유사한 기능을 가지고 있는 컨트롤은 동일하게 제공되어야 합니다.
      					</li>
      					<li>
      						반복되는 내비게이션, 도움 링크, 주요 액션 버튼의 위치와 명칭은 화면 간 동일하게 유지하는 것이 바람직합니다.
      					</li>
      				</ul>
      			</dd>
      		</dl>
      		

      		<figure className="img_figure mt_l">
      			<img src={`${IMG.A11Y}/5_2_macag_33.png`} alt="33 사용자 인터페이스 컴포넌트의 일관성" />
      			<figcaption>
      				지침: 예측 가능성
      			</figcaption>
      		</figure>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">도움 정보 [신규]</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				도움 정보가 제공되는 경우, 각 페이지에 동일한 순서로 접근할 수 있어야 합니다.
      			</p>
      		</blockquote>

      		<dl className="dl_lst mt_l">
      			<dt className="t_black">
      				고려 사항
      			</dt>
      			<dd className="mt_s">
      				<ul className="dot_lst gap-column-important-sm">
      					<li>
      						고객센터, FAQ, 챗봇, 문의하기 등 도움 정보는 화면마다 일관된 위치와 순서로 제공하는 것이 바람직합니다.
      					</li>
      					<li>
      						도움 정보 접근 경로는 내비게이션 구조와 충돌하지 않도록 하고, 보조기술로도 쉽게 찾을 수 있어야 합니다.
      					</li>
      					<li>
      						반복 제공되는 도움 링크의 명칭은 페이지마다 동일하게 유지하여 사용자가 예측 가능하게 탐색할 수 있어야 합니다.
      					</li>
      				</ul>
      			</dd>
      		</dl>
      		
      		<figure className="img_figure mt_l" aria-hidden="true">
      			<img src={`${IMG.A11Y}/5_2_macag_34.png`} alt="34 도움 정보" />
      			<figcaption>
      				지침: 예측 가능성
      			</figcaption>
      		</figure>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">오류 정정 [분리]</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				입력 서식을 이용할 때 사용자가 오류를 인지하고 정정할 수 있는 방법을 제공해야 합니다.
      			</p>
      		</blockquote>

      		<dl className="dl_lst mt_l">
      			<dt className="t_black">
      				고려 사항
      			</dt>
      			<dd className="mt_s">
      				<ul className="dot_lst gap-column-important-sm">
      					<li>
      						입력 서식에는 용도와 목적을 알 수 있는 대체 정보를 제공해야 합니다.
      					</li>
      					<li>
      						별도의 입력 방식이 있는 입력 서식에는 입력 오류를 방지하기 위하여 입력내용에 대한 설명 정보를 제공해야 합니다.
      					</li>
      					<li>
      						사용자 입력 값에 오류가 있는 경우 오류 내용을 이해하고 이를 정정할 수 있도록 해당 오류내용을 알릴 수 있는 방법을 제공해야 합니다.
      					</li>
      					<li>
      						입력 서식의 오류 내용을 수정하기 용이하도록 오류가 발생된 지점으로 초점을 이동시키는 것이 바람직합니다.
      					</li>
      					<li>
      						오류 메시지는 색상만으로 구분하지 않고, 텍스트·아이콘·보조기술 알림 등 복수 수단으로 전달해야 합니다.
      					</li>
      				</ul>
      			</dd>
      		</dl>
      		

      		<figure className="img_figure mt_l" aria-hidden="true">
      			<img src={`${IMG.A11Y}/5_2_macag_35.png`} alt="35 오류 정정" />
      			<figcaption>
      				지침: 입력 도움
      			</figcaption>
      		</figure>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">레이블 [분리]</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				사용자 입력에는 대응하는 레이블을 제공해야 합니다.
      			</p>
      		</blockquote>

      		<dl className="dl_lst mt_l">
      			<dt className="t_black">
      				고려 사항
      			</dt>
      			<dd className="mt_s">
      				<ul className="dot_lst gap-column-important-sm">
      					<li>
      						입력 필드에는 시각적으로 확인 가능한 레이블을 제공하고, 보조기술이 인식할 수 있도록 연결해야 합니다.
      					</li>
      					<li>
      						레이블은 placeholder만으로 대체하지 않고, 입력 목적을 명확히 전달할 수 있어야 합니다.
      					</li>
      					<li>
      						필수 입력 항목은 필수 여부를 명확히 표시하고, 입력 예시는 레이블을 보완하는 형태로 제공하는 것이 바람직합니다.
      					</li>
      				</ul>
      			</dd>
      		</dl>
      		
      		<figure className="img_figure mt_l" aria-hidden="true">
      			<img src={`${IMG.A11Y}/5_2_macag_36.png`} alt="36 레이블" />
      			<figcaption>
      				지침: 입력 도움
      			</figcaption>
      		</figure>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">오류 방지 [신규]</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				중요한 정보가 제출되기 전 되돌리기 어려운 오류를 방지할 수 있는 수단을 제공해야 합니다.
      			</p>
      		</blockquote>

      		<dl className="dl_lst mt_l">
      			<dt className="t_black">
      				고려 사항
      			</dt>
      			<dd className="mt_s">
      				<ul className="dot_lst gap-column-important-sm">
      					<li>
      						법률, 재정, 개인정보 등 중요한 정보 제출 전에는 확인 단계(검토 화면)를 제공하는 것이 바람직합니다.
      					</li>
      					<li>
      						제출 이후에도 취소, 수정, 되돌리기 중 하나 이상의 수단을 제공하여 사용자 오류를 복구할 수 있어야 합니다.
      					</li>
      					<li>
      						파괴적 동작(삭제, 탈퇴, 결제 등)은 확인 대화상자와 함께 동작 결과를 분명하게 안내해야 합니다.
      					</li>
      				</ul>
      			</dd>
      		</dl>
      		
      		<figure className="img_figure mt_l" aria-hidden="true">
      			<img src={`${IMG.A11Y}/5_2_macag_37.png`} alt="37 오류 방지" />
      			<figcaption>
      				지침: 입력 도움
      			</figcaption>
      		</figure>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">반복 입력 정보 [신규]</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				동일한 정보를 반복하여 입력하지 않도록 해야 합니다.
      			</p>
      		</blockquote>

      		<dl className="dl_lst mt_l">
      			<dt className="t_black">
      				고려 사항
      			</dt>
      			<dd className="mt_s">
      				<ul className="dot_lst gap-column-important-sm">
      					<li>
      						이미 입력한 정보는 자동 완성, 선택 목록, 불러오기 기능 등으로 재사용할 수 있도록 제공하는 것이 바람직합니다.
      					</li>
      					<li>
      						반복 입력이 필요한 경우에도 입력 부담을 줄일 수 있는 복사, 동일 주소 사용 등의 보조 기능을 제공해야 합니다.
      					</li>
      					<li>
      						회원정보와 배송정보처럼 동일 가능성이 높은 항목은 선택 한 번으로 채울 수 있는 기능을 제공하는 것이 바람직합니다.
      					</li>
      				</ul>
      			</dd>
      		</dl>
      		
      		<figure className="img_figure mt_l" aria-hidden="true">
      			<img src={`${IMG.A11Y}/5_2_macag_38.png`} alt="38 반복 입력 정보" />
      			<figcaption>
      				지침: 입력 도움
      			</figcaption>
      		</figure>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">접근 가능한 인증 [신규]</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				인증 과정은 인지 기능 테스트에만 의존해서는 안 됩니다.
      			</p>
      		</blockquote>

      		<dl className="dl_lst mt_l">
      			<dt className="t_black">
      				고려 사항
      			</dt>
      			<dd className="mt_s">
      				<ul className="dot_lst gap-column-important-sm">
      					<li>
      						왜곡 문자 입력, 이미지 선택 퍼즐 등 인지 부담이 큰 방식만 단독으로 제공하지 않도록 해야 합니다.
      					</li>
      					<li>
      						생체 인증, 일회용 링크, 패스키, 외부 인증(OAuth) 등 대체 인증 수단을 함께 제공하는 것이 바람직합니다.
      					</li>
      					<li>
      						인증 실패 시에는 실패 원인과 재시도 방법을 명확히 안내해 사용자가 절차를 이해할 수 있어야 합니다.
      					</li>
      				</ul>
      			</dd>
      		</dl>
      		
      		<figure className="img_figure mt_l" aria-hidden="true">
      			<img src={`${IMG.A11Y}/5_2_macag_39.png`} alt="39 접근 가능한 인증" />
      			<figcaption>
      				지침: 입력 도움
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

export default MacagUnderstandablePage
