import { useAccessibilityPageMeta } from '@/hooks/useAccessibilityPageMeta.js'
import { IMG } from '@/config/path'

const PAGE_LAYOUT = {
  mainClass: "macagOperable",
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
  title: "운용의 용이성(Operable) | 접근성 항목별 준수 가이드(모바일 앱 접근성)",
  description: "접근성 항목별 준수 가이드는 웹 모바일 앱 접근성을 보장하기 위한 구체적인 지침을 제공합니다. 이 페이지에서는 모바일 앱 접근성 준수 가이드의 운용의 용이성(Operable)에 대해 소개합니다.",
  keyword: "Accessibility, a11y, wcag, kwcag, macag, kiosk, 접근성, 웹 콘텐츠 접근성, 한국형 웹 콘텐츠 접근성, 모바일 앱 접근성, 무인정보단말기 접근성, 운용의 용이성, 입력장치 접근성, 충분한 시간 제공, 광과민성 발작 예방, 쉬운 내비게이션, 입력 방식, 초점, 누르기 동작 지원, 응답 시간 조절, 정지 기능 제공, 컨트롤의 크기와 간격, 단일 문자 단축키, 깜빡임과 번쩍임, 제목, 링크 텍스트, 다양한 탐색 방법, 포인터 입력 취소, 네임 안의 레이블, 동작기반 작동",
}

function MacagOperablePage() {
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
      			<b>운용의 용이성(Operable)</b>은 사용자가 장애 유무 등에 관계없이 웹 사이트에서 제공하는 모든 기능을 조작하고 실행할 수 있도록 제공하는 것을 의미합니다.<br />
      			운용의 용이성은 입력장치 접근성, 충분한 시간 제공, 광과민성 발작 예방, 쉬운 내비게이션, 입력 방식의 5개 지침과 13개 검사항목으로 구성되어 있습니다.
      		</p>
      	</blockquote>
      	<figure className="img_figure mt_l">
      		<img src={`${IMG.A11Y}/5_2_macag2.png`} alt="2 운용의 용이성" />
      		<figcaption>
      			운용의 용이성
      		</figcaption>
      	</figure>

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">초점 이동과 표시 [유지]</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				의미나 기능을 갖는 모든 사용자 인터페이스 컴포넌트에는 초점(focus)이 적용되고, 초점은 논리적인 순서로 이동되어야 합니다.
      			</p>
      		</blockquote>

      		<dl className="dl_lst mt_l">
      			<dt className="t_black">
      				고려 사항
      			</dt>
      			<dd className="mt_s">
      				<ul className="dot_lst gap-column-important-sm">
      					<li>
      						초점은 콘텐츠의 의미와 이용 흐름에 맞게, 사용자가 예측할 수 있는 논리적인 순서로 이동해야 합니다.
      					</li>
      					<li>
      						초점은 화면에서 보이지 않거나 비활성화된 요소, 또는 논리적으로 의미를 갖지 않는 사용자 인터페이스 컴포넌트로 이동하지 않도록 해야 합니다.
      					</li>
      					<li>
      						표시되는 초점의 영역은 실제 콘텐츠의 위치와 크기에 맞게 명확히 제공하고, 배경과 충분히 구분되도록 해야 합니다.
      					</li>
      				</ul>
      			</dd>
      		</dl>
      		

      		<figure className="img_figure mt_l" aria-hidden="true">
      			<img src={`${IMG.A11Y}/5_2_macag_17.png`} alt="17 초점 이동과 표시" />
      			<figcaption>
      				지침: 입력장치 접근성
      			</figcaption>
      		</figure>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">조작 가능한 크기 [현행화]</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				컨트롤은 충분한 크기와 간격으로 제공되어야 합니다.
      			</p>
      		</blockquote>

      		<dl className="dl_lst mt_l">
      			<dt className="t_black">
      				고려 사항
      			</dt>
      			<dd className="mt_s">
      				<ul className="dot_lst gap-column-important-sm">
      					<li>
      						컨트롤 간에 외곽선을 표시하지 않는 경우 컨트롤 간의 중심 간 간격을 충분히 제공해야 합니다.
      					</li>
      					<li>
      						운영체제에서 기본으로 제공하는 사용자 인터페이스 컴포넌트 등 제작자가 크기와 간격을 직접 제어하기 어려운 경우에는 예외로 할 수 있습니다.
      					</li>
      					<li>
      						모바일 기기의 화면 크기에 관계없이 컨트롤의 가로와 세로 크기는 각각 9 mm 이상으로 제공하는 것이 바람직합니다.
      					</li>
      					<li>
      						오입력을 줄이기 위해 주요 동작 버튼은 충분한 활성 영역을 확보하고, 인접 컨트롤과의 간격을 일관되게 유지해야 합니다.
      					</li>
      				</ul>
      			</dd>
      		</dl>
      		

      		<figure className="img_figure mt_l" aria-hidden="true">
      			<img src={`${IMG.A11Y}/5_2_macag_18.png`} alt="18 조작 가능한 크기" />
      			<figcaption>
      				지침: 입력장치 접근성
      			</figcaption>
      		</figure>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">단일 문자 단축키 [신규]</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				단일 문자 단축키는 오동작으로 인한 오류를 방지할 수 있어야 합니다.
      			</p>
      		</blockquote>

      		<dl className="dl_lst mt_l">
      			<dt className="t_black">
      				고려 사항
      			</dt>
      			<dd className="mt_s">
      				<ul className="dot_lst gap-column-important-sm">
      					<li>
      						문자, 숫자, 기호 1개만으로 실행되는 단축키를 제공하는 경우 비활성화할 수 있는 수단을 제공해야 합니다.
      					</li>
      					<li>
      						단축키를 유지해야 하는 경우 조합키(예: Ctrl, Alt 등)와 함께 사용하도록 구성하여 오입력을 줄여야 합니다.
      					</li>
      					<li>
      						단축키는 사용자가 재할당하거나 변경할 수 있도록 제공하는 것이 바람직합니다.
      					</li>
      				</ul>
      			</dd>
      		</dl>
      		
      		<figure className="img_figure mt_l" aria-hidden="true">
      			<img src={`${IMG.A11Y}/5_2_macag_19.png`} alt="19 단일 문자 단축키" />
      			<figcaption>
      				지침: 입력장치 접근성
      			</figcaption>
      		</figure>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">응답시간 조절 [유지]</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				시간 제한이 있는 콘텐츠는 응답 시간을 조절할 수 있어야 합니다.
      			</p>
      		</blockquote>

      		<dl className="dl_lst mt_l">
      			<dt className="t_black">
      				고려 사항
      			</dt>
      			<dd className="mt_s">
      				<ul className="dot_lst gap-column-important-sm">
      					<li>
      						시간 제한이 있는 경우에는 제한 시간 연장 또는 이를 제어할 수 있는 수단을 함께 제공해야 합니다.
      					</li>
      					<li>
      						불가피한 사유로 시간 제한이 있는 경우, 제한 시간 연장 또는 이를 제어할 수 있는 수단을 제공할 수 없다면
      						사용자에게 시간 제한이 있음을 미리 알려주고 종료 시에도 이를 알려주어야 합니다.<br />
      						예) 불가피한 경우: 보안, 게임 등
      					</li>
      					<li>
      						제한 시간이 임박했을 때 사전 경고를 제공하고, 재인증이나 세션 연장과 같은 후속 조치를 사용자가 스스로 선택할 수 있어야 합니다.
      					</li>
      				</ul>
      			</dd>
      		</dl>
      		

      		<figure className="img_figure mt_l" aria-hidden="true">
      			<img src={`${IMG.A11Y}/5_2_macag_20.png`} alt="20 응답시간 조절" />
      			<figcaption>
      				지침: 충분한 시간 제공
      			</figcaption>
      		</figure>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">움직임 제어 [유지]</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				자동으로 변경되는 콘텐츠는 움직임을 제어할 수 있어야 합니다.
      			</p>
      		</blockquote>

      		<dl className="dl_lst mt_l">
      			<dt className="t_black">
      				고려 사항
      			</dt>
      			<dd className="mt_s">
      				<ul className="dot_lst gap-column-important-sm">
      					<li>
      						자동으로 변경되는 콘텐츠에는 앞으로 이동, 뒤로 이동, 일시 정지, 정지와 같이 이를 제어할 수 있는 수단을 제공해야 합니다.
      					</li>
      					<li>
      						자동 재생/자동 전환 상태는 현재 상태를 명확히 인지할 수 있어야 하며, 키보드 및 보조기술로도 동일하게 제어할 수 있어야 합니다.
      					</li>
      				</ul>
      			</dd>
      		</dl>
      		

      		<figure className="img_figure mt_l" aria-hidden="true">
      			<img src={`${IMG.A11Y}/5_2_macag_21.png`} alt="21 움직임 제어" />
      			<figcaption>
      				지침: 충분한 시간 제공
      			</figcaption>
      		</figure>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">깜빡임과 번쩍임 [유지]</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				초당 3~50회 주기로 깜빡이거나 번쩍이는 콘텐츠를 제공하지 않아야 합니다.
      			</p>
      		</blockquote>

      		<dl className="dl_lst mt_l">
      			<dt className="t_black">
      				고려 사항
      			</dt>
      			<dd className="mt_s">
      				<ul className="dot_lst gap-column-important-sm">
      					<li>
      						광과민성 발작을 유발할 수 있는 주기의 깜빡임 또는 번쩍임 효과는 제공하지 않아야 합니다.
      					</li>
      					<li>
      						불가피하게 사용하는 경우 사전 경고를 제공하고, 사용자가 즉시 중지하거나 회피할 수 있는 수단을 함께 제공해야 합니다.
      					</li>
      				</ul>
      			</dd>
      		</dl>
      		
      		<figure className="img_figure mt_l" aria-hidden="true">
      			<img src={`${IMG.A11Y}/5_2_macag_22.png`} alt="22 깜빡임과 번쩍임" />
      			<figcaption>
      				지침: 광과민성 발작 예방
      			</figcaption>
      		</figure>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">제목 [신규]</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				콘텐츠 블록에는 적절한 제목을 제공해야 합니다.
      			</p>
      		</blockquote>

      		<dl className="dl_lst mt_l">
      			<dt className="t_black">
      				고려 사항
      			</dt>
      			<dd className="mt_s">
      				<ul className="dot_lst gap-column-important-sm">
      					<li>
      						페이지, 화면, 주요 영역에는 내용을 대표하는 제목을 제공해 사용자가 현재 위치와 맥락을 이해할 수 있어야 합니다.
      					</li>
      					<li>
      						제목 체계는 상위에서 하위로 논리적인 구조를 유지하고, 시각적 표현과 의미 구조가 어긋나지 않도록 해야 합니다.
      					</li>
      				</ul>
      			</dd>
      		</dl>
      		
      		<figure className="img_figure mt_l" aria-hidden="true">
      			<img src={`${IMG.A11Y}/5_2_macag_23.png`} alt="23 제목" />
      			<figcaption>
      				지침: 쉬운 내비게이션
      			</figcaption>
      		</figure>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">링크 텍스트 [신규]</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				링크 텍스트는 용도나 목적을 이해할 수 있도록 제공해야 합니다.
      			</p>
      		</blockquote>

      		<dl className="dl_lst mt_l">
      			<dt className="t_black">
      				고려 사항
      			</dt>
      			<dd className="mt_s">
      				<ul className="dot_lst gap-column-important-sm">
      					<li>
      						링크 텍스트만으로도 이동 목적을 파악할 수 있도록 의미를 명확히 제공해야 합니다.
      					</li>
      					<li>
      						동일한 링크 목적에는 일관된 링크 텍스트를 사용하고, 서로 다른 목적에 동일한 텍스트를 반복 사용하지 않도록 해야 합니다.
      					</li>
      				</ul>
      			</dd>
      		</dl>
      		
      		<figure className="img_figure mt_l" aria-hidden="true">
      			<img src={`${IMG.A11Y}/5_2_macag_24.png`} alt="24 링크 텍스트" />
      			<figcaption>
      				지침: 쉬운 내비게이션
      			</figcaption>
      		</figure>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">다양한 탐색 방법 [신규]</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				콘텐츠는 다양한 방법으로 탐색할 수 있어야 합니다.
      			</p>
      		</blockquote>

      		<dl className="dl_lst mt_l">
      			<dt className="t_black">
      				고려 사항
      			</dt>
      			<dd className="mt_s">
      				<ul className="dot_lst gap-column-important-sm">
      					<li>
      						메뉴, 검색, 사이트맵, 단계별 내비게이션 등 둘 이상의 탐색 수단을 제공하는 것이 바람직합니다.
      					</li>
      					<li>
      						반복되는 탐색 영역은 위치와 명칭을 일관되게 제공해 사용자의 예측 가능성을 높여야 합니다.
      					</li>
      				</ul>
      			</dd>
      		</dl>
      		
      		<figure className="img_figure mt_l" aria-hidden="true">
      			<img src={`${IMG.A11Y}/5_2_macag_25.png`} alt="25 다양한 탐색 방법" />
      			<figcaption>
      				지침: 쉬운 내비게이션
      			</figcaption>
      		</figure>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">단일 포인터 입력 [유지]</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				터치(touch) 기반 모바일 기기의 모든 컨트롤은 누르기 동작으로 제어할 수 있어야 합니다.
      			</p>
      		</blockquote>

      		<dl className="dl_lst mt_l">
      			<dt className="t_black">
      				고려 사항
      			</dt>
      			<dd className="mt_s">
      				<ul className="dot_lst gap-column-important-sm">
      					<li>
      						두 개 이상의 손가락을 동시에 이용해야 하는 다중 누르기(multi-touch) 동작, 팬(pan),
      						끌기와 놓기(drag and drop) 등의 복잡한 누르기 동작은 단순한 누르기 동작을 함께 제공해야 합니다.
      					</li>
      					<li>
      						동일 기능을 수행하는 대체 입력 방식(버튼, 메뉴, 토글 등)을 제공하여 특정 제스처 수행이 어려운 사용자도 기능을 이용할 수 있어야 합니다.
      					</li>
      				</ul>
      			</dd>
      		</dl>
      		

      		<figure className="img_figure mt_l" aria-hidden="true">
      			<img src={`${IMG.A11Y}/5_2_macag_26.png`} alt="26 단일 포인터 입력" />
      			<figcaption>
      				지침: 입력 방식
      			</figcaption>
      		</figure>
      	</section>
      	


      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">포인터 입력 취소 [신규]</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				단일 포인터 입력으로 실행되는 기능은 취소할 수 있어야 합니다.
      			</p>
      		</blockquote>

      		<dl className="dl_lst mt_l">
      			<dt className="t_black">
      				고려 사항
      			</dt>
      			<dd className="mt_s">
      				<ul className="dot_lst gap-column-important-sm">
      					<li>
      						누르기 시작 시점이 아닌 누르기 종료 시점에 기능이 실행되도록 제공하는 것이 바람직합니다.
      					</li>
      					<li>
      						오입력으로 실행된 기능은 취소(undo), 중단, 확인 단계 제공 등의 방법으로 복구할 수 있어야 합니다.
      					</li>
      				</ul>
      			</dd>
      		</dl>
      		
      		<figure className="img_figure mt_l" aria-hidden="true">
      			<img src={`${IMG.A11Y}/5_2_macag_27.png`} alt="27 포인터 입력 취소" />
      			<figcaption>
      				지침: 입력 방식
      			</figcaption>
      		</figure>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">네임 안의 레이블 [신규]</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				텍스트 또는 텍스트 이미지가 포함된 레이블이 있는 사용자 인터페이스 구성요소는 네임에 시각적으로 표시되는 해당 텍스트를 포함해야 합니다.
      			</p>
      		</blockquote>

      		<dl className="dl_lst mt_l">
      			<dt className="t_black">
      				고려 사항
      			</dt>
      			<dd className="mt_s">
      				<ul className="dot_lst gap-column-important-sm">
      					<li>
      						버튼, 링크, 입력 필드 등 UI 구성요소의 접근 가능한 이름(Accessible Name)은 화면에 보이는 레이블 텍스트와 일치하거나 이를 포함해야 합니다.
      					</li>
      					<li>
      						음성 입력 사용자가 보이는 텍스트를 그대로 말해 조작할 수 있도록 레이블과 네임 간 불일치를 최소화해야 합니다.
      					</li>
      				</ul>
      			</dd>
      		</dl>
      		
      		<figure className="img_figure mt_l" aria-hidden="true">
      			<img src={`${IMG.A11Y}/5_2_macag_28.png`} alt="28 네임 안의 레이블" />
      			<figcaption>
      				지침: 입력 방식
      			</figcaption>
      		</figure>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">동작기반 작동 [신규]</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				동작기반으로 작동하는 기능은 사용자 인터페이스 구성요소로 조작할 수 있고, 동작기반 기능을 비활성화할 수 있어야 합니다.
      			</p>
      		</blockquote>

      		<dl className="dl_lst mt_l">
      			<dt className="t_black">
      				고려 사항
      			</dt>
      			<dd className="mt_s">
      				<ul className="dot_lst gap-column-important-sm">
      					<li>
      						기기 흔들기, 기울이기, 제스처 등 동작기반 입력으로 실행되는 기능은 버튼이나 메뉴 등 대체 조작 수단을 함께 제공해야 합니다.
      					</li>
      					<li>
      						의도하지 않은 동작으로 기능이 실행되지 않도록 민감도를 조정하거나 동작기반 입력을 끌 수 있는 설정을 제공해야 합니다.
      					</li>
      				</ul>
      			</dd>
      		</dl>
      		
      		<figure className="img_figure mt_l" aria-hidden="true">
      			<img src={`${IMG.A11Y}/5_2_macag_29.png`} alt="29 동작기반 작동" />
      			<figcaption>
      				지침: 입력 방식
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

export default MacagOperablePage
