import { useAccessibilityPageMeta } from '@/hooks/useAccessibilityPageMeta.js'
import { IMG } from '@/config/path'

const PAGE_LAYOUT = {
  mainClass: "macagPerceivable",
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
  title: "인식의 용이성(Perceivable) | 접근성 항목별 준수 가이드(모바일 앱 접근성)",
  description: "접근성 항목별 준수 가이드는 웹 모바일 앱 접근성을 보장하기 위한 구체적인 지침을 제공합니다. 이 페이지에서는 모바일 앱 접근성 준수 가이드의 인식의 용이성(Perceivable)에 대해 소개합니다.",
  keyword: "Accessibility, a11y, wcag, kwcag, macag, kiosk, 접근성, 웹 콘텐츠 접근성, 한국형 웹 콘텐츠 접근성, 모바일 앱 접근성, 무인정보단말기 접근성, 텍스트 아닌 콘텐츠, 자막 또는 수어, 화면해설, 색에 무관한 콘텐츠, 콘텐츠의 명도대비, 명확한 지시 사항, 알림 기능",
}

function MacagPerceivablePage() {
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
      			<b>인식의 용이성(Perceivable)</b>은 사용자가 장애 유무 등에 관계없이 웹 사이트에서 제공하는 모든 콘텐츠를 동등하게 인식할 수 있도록 제공하는 것을 의미합니다.<br />
      			인식의 용이성은 대체 텍스트, 멀티미디어 대체수단, 적응성, 명료성의 4개 지침과 16개 검사항목으로 구성되어 있습니다.
      		</p>
      	</blockquote>
      	<figure className="img_figure mt_l">
      		<img src={`${IMG.A11Y}/5_2_macag1.png`} alt="1 인식의 용이성" />
      		<figcaption>
      			인식의 용이성 검사항목(16개)
      		</figcaption>
      	</figure>

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">텍스트 아닌 콘텐츠 [유지]</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				텍스트 아닌 콘텐츠는 대체 가능한 텍스트와 함께 제공되어야 합니다.
      			</p>
      		</blockquote>

      		<dl className="dl_lst mt_l">
      			<dt className="t_black">
      				고려 사항
      			</dt>
      			<dd className="mt_s">
      				<ul className="dot_lst gap-column-important-sm">
      					<li>텍스트 아닌 콘텐츠에 대한 대체 텍스트는 그 의미나 기능을 동등한 수준으로 짧고 명확하게 제공해야 합니다.</li>
      					<li>장식 목적의 이미지는 보조기술에 불필요하게 노출되지 않도록 대체 텍스트를 비워 의미 전달용 이미지와 구분해야 합니다.</li>
      				</ul>
      			</dd>
      		</dl>
      		

      		<figure className="img_figure mt_l" aria-hidden="true">
      			<img src={`${IMG.A11Y}/5_2_macag_01.png`} alt="01 텍스트 아닌 콘텐츠" />
      			<figcaption>
      				대체 텍스트
      			</figcaption>
      		</figure>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">자막 또는 수어 [강화]</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				영상이나 음성 콘텐츠에는 동등한 내용의 자막, 원고 또는 수어가 제공되어야 합니다.
      			</p>
      		</blockquote>

      		<dl className="dl_lst mt_l">
      			<dt className="t_black">
      				고려 사항
      			</dt>
      			<dd className="mt_s">
      				<ul className="dot_lst gap-column-important-sm">
      					<li>
      						영상이나 음성 콘텐츠 내 제공되는 모든 음성 정보는 동등한 내용의 자막, 원고, 수어 중 적어도 하나 이상을 제공해야 합니다.
      					</li>
      					<li>
      						자막, 원고 또는 수어는 재생되고 있는 영상이나 음성 콘텐츠와 동기화하여 제공해야 합니다.<br />
      						단, 실시간으로 제공되는 영상이나 음성 콘텐츠의 경우는 실시간 자막 또는 수어로 제공할 수 있습니다.
      					</li>
      					<li>
      						영상이나 음성 콘텐츠에서 화면에 문자 정보가 의미를 가지고 있는 경우 이를 설명하는 원고를 함께 제공해야 합니다.
      					</li>
      					<li>
      						자막은 화자 변경, 효과음, 배경음 등 이해에 필요한 비음성 정보도 포함하여 청각 정보의 손실을 최소화해야 합니다.
      					</li>
      				</ul>
      			</dd>
      		</dl>
      		

      		<figure className="img_figure mt_l" aria-hidden="true">
      			<img src={`${IMG.A11Y}/5_2_macag_02.png`} alt="02 자막 또는 수어" />
      			<figcaption>
      				지침: 멀티미디어 대체수단
      			</figcaption>
      		</figure>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">화면해설 [신규]</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				멀티미디어 콘텐츠에서 음성 정보가 없는 시각 정보는 인식할 수 있도록 화면해설을 제공해야 합니다.
      			</p>
      		</blockquote>

      		<dl className="dl_lst mt_l">
      			<dt className="t_black">
      				고려 사항
      			</dt>
      			<dd className="mt_s">
      				<ul className="dot_lst gap-column-important-sm">
      					<li>
      						영상이나 음성 콘텐츠에서 화면에 문자 정보가 의미를 가지고 있는 경우 이를 설명하는 별도의 음성 콘텐츠나 원고를 제공해야 합니다.
      					</li>
      					<li>
      						음성이나 문자 정보 없이 제공되는 영상이나 음성 콘텐츠는 이를 설명하는 화면해설을 제공하는 것이 바람직합니다.
      					</li>
      					<li>
      						화면해설은 핵심 시각 정보가 발생하는 시점과 최대한 동기화하여 제공하고, 원음 이해를 방해하지 않도록 길이와 속도를 조정해야 합니다.
      					</li>
      				</ul>
      			</dd>
      		</dl>
      		

      		<figure className="img_figure mt_l" aria-hidden="true">
      			<img src={`${IMG.A11Y}/5_2_macag_03.png`} alt="03 화면해설" />
      			<figcaption>
      				지침: 멀티미디어 대체수단
      			</figcaption>
      		</figure>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">표의 구성 [신규]</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				표는 이해하기 쉽게 구성해야 합니다.
      			</p>
      		</blockquote>

      		<dl className="dl_lst mt_l">
      			<dt className="t_black">
      				고려 사항
      			</dt>
      			<dd className="mt_s">
      				<ul className="dot_lst gap-column-important-sm">
      					<li>
      						표의 제목, 열/행 제목 등 표 구조를 이해할 수 있는 정보를 함께 제공해야 합니다.
      					</li>
      					<li>
      						복잡한 병합 셀 사용을 최소화하고 논리적인 순서로 읽을 수 있도록 구성하는 것이 바람직합니다.
      					</li>
      					<li>
      						데이터 표에는 제목(caption)과 열/행 제목을 명확히 제공하고, 필요한 경우 헤더-데이터 셀의 대응 관계를 코드로도 식별 가능하게 구성해야 합니다.
      					</li>
      				</ul>
      			</dd>
      		</dl>
      		

      		<figure className="img_figure mt_l" aria-hidden="true">
      			<img src={`${IMG.A11Y}/5_2_macag_04.png`} alt="04 표의 구성" />
      			<figcaption>
      				지침: 적응성
      			</figcaption>
      		</figure>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">콘텐츠의 선형구조 [신규]</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				콘텐츠는 논리적인 순서로 제공해야 합니다.
      			</p>
      		</blockquote>

      		<dl className="dl_lst mt_l">
      			<dt className="t_black">
      				고려 사항
      			</dt>
      			<dd className="mt_s">
      				<ul className="dot_lst gap-column-important-sm">
      					<li>
      						콘텐츠의 배치와 읽기 순서는 화면 낭독 환경에서도 동일한 의미로 전달되도록 제공해야 합니다.
      					</li>
      					<li>
      						의미상 관련 있는 정보는 인접하게 배치하고, 순서가 중요한 콘텐츠는 선형 순서를 유지해야 합니다.
      					</li>
      					<li>
      						시각적 배치를 위해 콘텐츠 순서를 임의로 바꾸지 않도록 하고, 포커스 이동 순서와 읽기 순서가 논리적으로 일치하도록 제공해야 합니다.
      					</li>
      				</ul>
      			</dd>
      		</dl>
      		

      		<figure className="img_figure mt_l" aria-hidden="true">
      			<img src={`${IMG.A11Y}/5_2_macag_05.png`} alt="05 콘텐츠의 선형구조" />
      			<figcaption>
      				지침: 적응성
      			</figcaption>
      		</figure>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">다양한 감각 지원 [통합]</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				지시 사항이나 알림 정보 등은 모양, 크기, 위치, 방향, 색, 소리 등에 관계없이 다양한 감각으로 인식할 수 있어야 합니다.
      			</p>
      		</blockquote>

      		<dl className="dl_lst mt_l">
      			<dt className="t_black">
      				고려 사항
      			</dt>
      			<dd className="mt_s">
      				<ul className="dot_lst gap-column-important-sm">
      					<li>
      						화면에 표시되는 특정 사용자 인터페이스 컴포넌트를 가리키거나 지시 사항을 전달하는 콘텐츠는, 하나의 감각에 의존하지 않고 여러 감각을 이용하는 정보를 함께 제공해야 합니다.
      					</li>
      					<li>
      						중요한 알림 정보는 시각, 청각, 촉각 등 다양한 감각으로 인식될 수 있어야 합니다.
      					</li>
      					<li>
      						색상, 위치, 소리 중 하나만으로 상태를 전달하지 말고 텍스트 라벨, 아이콘, 진동 등 대체 감각 단서를 함께 제공해야 합니다.
      					</li>
      				</ul>
      			</dd>
      		</dl>
      		

      		<figure className="img_figure mt_l" aria-hidden="true">
      			<img src={`${IMG.A11Y}/5_2_macag_06.png`} alt="06 다양한 감각 지원" />
      			<figcaption>
      				지침: 적응성
      			</figcaption>
      		</figure>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">방향 설정 [신규]</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				콘텐츠는 특정 화면 방향으로만 고정하지 않아야 합니다.
      			</p>
      		</blockquote>

      		<dl className="dl_lst mt_l">
      			<dt className="t_black">
      				고려 사항
      			</dt>
      			<dd className="mt_s">
      				<ul className="dot_lst gap-column-important-sm">
      					<li>
      						가로/세로 방향 모두에서 콘텐츠를 이용할 수 있도록 제공해야 합니다.
      					</li>
      					<li>
      						불가피하게 특정 방향을 요구하는 경우에는 그 사유와 대체 이용 방법을 안내해야 합니다.
      					</li>
      					<li>
      						방향 전환 시에도 주요 기능과 정보가 동일하게 제공되도록 하고, 일부 화면이 잘리거나 접근 불가 상태가 발생하지 않도록 검증해야 합니다.
      					</li>
      				</ul>
      			</dd>
      		</dl>
      		

      		<figure className="img_figure mt_l" aria-hidden="true">
      			<img src={`${IMG.A11Y}/5_2_macag_07.png`} alt="07 방향 설정" />
      			<figcaption>
      				지침: 적응성
      			</figcaption>
      		</figure>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">입력 목적 식별 [신규]</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				입력 서식의 목적은 식별할 수 있어야 합니다.
      			</p>
      		</blockquote>

      		<dl className="dl_lst mt_l">
      			<dt className="t_black">
      				고려 사항
      			</dt>
      			<dd className="mt_s">
      				<ul className="dot_lst gap-column-important-sm">
      					<li>
      						입력 항목의 레이블과 목적(이름, 이메일, 전화번호 등)을 명확히 제공해야 합니다.
      					</li>
      					<li>
      						보조기술이 입력 목적을 인식할 수 있도록 표준 속성 및 일관된 명칭을 사용하는 것이 바람직합니다.
      					</li>
      					<li>
      						회원가입, 배송지, 결제 등 반복 입력 화면에서는 동일 의미 항목에 동일한 레이블과 입력 목적을 유지하여 예측 가능성을 높여야 합니다.
      					</li>
      				</ul>
      			</dd>
      		</dl>
      		

      		<figure className="img_figure mt_l" aria-hidden="true">
      			<img src={`${IMG.A11Y}/5_2_macag_08.png`} alt="08 입력 목적 식별" />
      			<figcaption>
      				지침: 적응성
      			</figcaption>
      		</figure>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">색에 무관한 콘텐츠 [유지]</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				화면에 표시되는 모든 정보는 색에 관계없이 인식될 수 있어야 합니다.
      			</p>
      		</blockquote>

      		<dl className="dl_lst mt_l">
      			<dt className="t_black">
      				고려 사항
      			</dt>
      			<dd className="mt_s">
      				<ul className="dot_lst gap-column-important-sm">
      					<li>
      						콘텐츠에서 제공하는 모든 정보는 특정한 색을 구별할 수 없는 사용자, 흑백 디스플레이 사용자,
      						흑백 인쇄물을 보는 사용자 및 고대비 모드 사용자가 인식할 수 있도록 제공해야 합니다.
      					</li>
      					<li>
      						필수 입력, 오류, 선택 상태 등은 색상 외에 텍스트, 아이콘, 패턴 등의 시각 단서를 함께 제공해야 합니다.
      					</li>
      				</ul>
      			</dd>
      		</dl>
      		

      		<figure className="img_figure mt_l" aria-hidden="true">
      			<img src={`${IMG.A11Y}/5_2_macag_09.png`} alt="09 색에 무관한 콘텐츠" />
      			<figcaption>
      				지침: 명료성
      			</figcaption>
      		</figure>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">소리 자동 재생 [유지]</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				소리는 자동으로 재생되지 않아야 합니다.
      			</p>
      		</blockquote>

      		<dl className="dl_lst mt_l">
      			<dt className="t_black">
      				고려 사항
      			</dt>
      			<dd className="mt_s">
      				<ul className="dot_lst gap-column-important-sm">
      					<li>
      						자동으로 재생되는 소리는 제공하지 않거나, 즉시 정지/일시정지/음량 조절할 수 있는 수단을 함께 제공해야 합니다.
      					</li>
      					<li>
      						자동 재생이 불가피한 경우에는 3초 이내 종료되도록 제한하고, 키보드와 보조기술로도 쉽게 제어할 수 있어야 합니다.
      					</li>
      				</ul>
      			</dd>
      		</dl>
      		

      		<figure className="img_figure mt_l" aria-hidden="true">
      			<img src={`${IMG.A11Y}/5_2_macag_10.png`} alt="10 소리 자동 재생" />
      			<figcaption>
      				지침: 명료성
      			</figcaption>
      		</figure>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">콘텐츠의 명도대비 [강화]</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				화면에 표시되는 모든 사용자 인터페이스 컴포넌트와 텍스트는 전경색과 배경색이 구분될 수 있도록 제공되어야 합니다.
      			</p>
      		</blockquote>

      		<dl className="dl_lst mt_l">
      			<dt className="t_black">
      				고려 사항
      			</dt>
      			<dd className="mt_s">
      				<ul className="dot_lst gap-column-important-sm">
      					<li>
      						화면에 표시되는 모든 사용자 인터페이스 컴포넌트와 텍스트는 전경색과 배경색이 구분될 수 있도록 명도대비를 3:1 이상으로 제공해야 합니다.
      					</li>
      					<li>
      						작은 본문 텍스트, 비활성 아닌 상태 텍스트, 아이콘 경계선 등도 대비 점검 대상에 포함하여 상태별 가독성을 확보해야 합니다.
      					</li>
      				</ul>
      			</dd>
      		</dl>
      		

      		<figure className="img_figure mt_l" aria-hidden="true">
      			<img src={`${IMG.A11Y}/5_2_macag_11.png`} alt="11 콘텐츠의 명도대비" />
      			<figcaption>
      				지침: 명료성
      			</figcaption>
      		</figure>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">콘텐츠 간의 구분 [신규]</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				이웃한 콘텐츠는 시각적으로 구별할 수 있어야 합니다.
      			</p>
      		</blockquote>

      		<dl className="dl_lst mt_l">
      			<dt className="t_black">
      				고려 사항
      			</dt>
      			<dd className="mt_s">
      				<ul className="dot_lst gap-column-important-sm">
      					<li>
      						경계선, 여백, 대비 등을 활용해 인접한 콘텐츠 영역을 구분할 수 있도록 제공해야 합니다.
      					</li>
      					<li>
      						카드, 목록, 입력 그룹, 버튼 군 등 반복 패턴은 일관된 시각 규칙으로 구분해 콘텐츠 간 관계를 쉽게 파악할 수 있어야 합니다.
      					</li>
      				</ul>
      			</dd>
      		</dl>
      		

      		<figure className="img_figure mt_l" aria-hidden="true">
      			<img src={`${IMG.A11Y}/5_2_macag_12.png`} alt="12 콘텐츠 간의 구분" />
      			<figcaption>
      				지침: 명료성
      			</figcaption>
      		</figure>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">텍스트 크기 조정 [강화]</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				텍스트는 내용이나 기능의 손실 없이 200%까지 크기 조정이 가능해야 합니다.
      			</p>
      		</blockquote>

      		<dl className="dl_lst mt_l">
      			<dt className="t_black">
      				고려 사항
      			</dt>
      			<dd className="mt_s">
      				<ul className="dot_lst gap-column-important-sm">
      					<li>
      						텍스트 확대 시 겹침, 잘림, 기능 상실이 발생하지 않도록 제공해야 합니다.
      					</li>
      					<li>
      						200% 확대 환경에서도 가로 스크롤 최소화, 버튼/입력 접근 가능, 도움말·오류 메시지 가시성을 유지해야 합니다.
      					</li>
      				</ul>
      			</dd>
      		</dl>
      		

      		<figure className="img_figure mt_l" aria-hidden="true">
      			<img src={`${IMG.A11Y}/5_2_macag_13.png`} alt="13 텍스트 크기 조정" />
      			<figcaption>
      				지침: 명료성
      			</figcaption>
      		</figure>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">이미지 텍스트 [신규]</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				텍스트는 이미지로 제공하지 않아야 합니다.
      			</p>
      		</blockquote>

      		<dl className="dl_lst mt_l">
      			<dt className="t_black">
      				고려 사항
      			</dt>
      			<dd className="mt_s">
      				<ul className="dot_lst gap-column-important-sm">
      					<li>
      						원칙적으로 본문·제목·버튼·입력 레이블 등 정보 전달 텍스트는 실제 텍스트로 제공해야 합니다.
      					</li>
      					<li>
      						예외 1) 로고·브랜드 워드마크처럼 시각적 형태 자체가 식별 요소인 경우에는 이미지 텍스트를 허용할 수 있습니다.
      					</li>
      					<li>
      						예외 2) 제품 포장, 문서 원본 캡처, 서체 샘플처럼 해당 표현 형태가 본질적인 콘텐츠인 경우에는 이미지 텍스트를 허용할 수 있습니다.
      					</li>
      					<li>
      						예외를 적용하더라도 동일한 의미의 텍스트를 주변 설명, 대체 텍스트, 인접 본문 등으로 함께 제공해야 합니다.
      					</li>
      					<li>
      						이미지 내부 텍스트의 축약·장식 표현으로 의미가 달라지지 않도록 하고, 다국어 지원이 필요한 경우 실제 텍스트 제공을 우선해야 합니다.
      					</li>
      				</ul>
      			</dd>
      		</dl>
      		

      		<figure className="img_figure mt_l" aria-hidden="true">
      			<img src={`${IMG.A11Y}/5_2_macag_14.png`} alt="14 이미지 텍스트" />
      			<figcaption>
      				지침: 명료성
      			</figcaption>
      		</figure>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">리플로우 [신규]</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				콘텐츠는 화면 크기에 따라 손실 없이 표시되어야 합니다.
      			</p>
      		</blockquote>

      		<dl className="dl_lst mt_l">
      			<dt className="t_black">
      				고려 사항
      			</dt>
      			<dd className="mt_s">
      				<ul className="dot_lst gap-column-important-sm">
      					<li>
      						가로 스크롤에 과도하게 의존하지 않고 다양한 화면 크기에서 정보 손실 없이 표시되어야 합니다.
      					</li>
      					<li>
      						확대 및 작은 화면 환경에서도 고정 폭 요소로 인해 잘림이 발생하지 않도록 반응형 재배치와 줄바꿈을 지원해야 합니다.
      					</li>
      				</ul>
      			</dd>
      		</dl>
      		

      		<figure className="img_figure mt_l" aria-hidden="true">
      			<img src={`${IMG.A11Y}/5_2_macag_15.png`} alt="15 리플로우" />
      			<figcaption>
      				지침: 명료성
      			</figcaption>
      		</figure>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">텍스트 간격 [신규]</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				텍스트는 내용과 기능의 손실 없이 간격을 조정할 수 있어야 합니다.
      			</p>
      		</blockquote>

      		<dl className="dl_lst mt_l">
      			<dt className="t_black">
      				고려 사항
      			</dt>
      			<dd className="mt_s">
      				<ul className="dot_lst gap-column-important-sm">
      					<li>
      						줄 간격, 단락 간격, 자간, 단어 간격 조정 시에도 콘텐츠가 읽기 가능하고 기능을 유지해야 합니다.
      					</li>
      					<li>
      						간격 조정 후에도 버튼, 링크, 입력 필드의 라벨과 안내 문구가 분리되거나 겹치지 않도록 레이아웃 안정성을 확보해야 합니다.
      					</li>
      				</ul>
      			</dd>
      		</dl>
      		

      		<figure className="img_figure mt_l" aria-hidden="true">
      			<img src={`${IMG.A11Y}/5_2_macag_16.png`} alt="16 텍스트 간격" />
      			<figcaption>
      				지침: 명료성
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

export default MacagPerceivablePage
