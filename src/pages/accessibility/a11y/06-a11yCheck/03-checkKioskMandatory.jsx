import { useAccessibilityPageMeta } from '@/hooks/useAccessibilityPageMeta.js'
import { IMG } from '@/config/path'

const PAGE_LAYOUT = {
  mainClass: "checkKiosk",
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
  title: "원칙별 체크리스트 | 접근성 체크리스트(무인정보단말기 접근성)",
  description: "무인 정보 단말기 접근성 체크리스트는 다양한 사용자가 무인 정보 단말기를 문제 없이 이용할 수 있도록 보장하는 필수 항목들을 제공합니다. 이 페이지에서는 무인정보단말기 접근성의 필수 체크리스트에 대해 소개합니다.",
  keyword: "Accessibility, a11y, wcag, kwcag, macag, kiosk, 접근성, 웹 콘텐츠 접근성, 한국형 웹 콘텐츠 접근성, 모바일 앱 접근성, 무인정보단말기 접근성",
}

function CheckKioskMandatoryPage() {
  useAccessibilityPageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  })


  return (
    <>
      <blockquote className="uk_note common_note mt_xxl" role="note">
      	<strong className="sound_only">요약 설명</strong>
      	<p>
      		무인정보단말기 접근성은 누구에게나 동등한 기회 제공을 위해 키오스크 접근성 준수가 필요하며,
      		키오스크 접근성 보장은 법률에 명시된 의무사항입니다.<br />
      		무인정보단말기는 유형과 용도에 관계없이 기본 접근성 평가는 반드시 수행해야 하며,
      		기본 이외의 항목은 해당 사항이 있는 경우만 실시합니다.<br />
      	</p>
      	<p className="mt_s">
      		무인정보단말기(키오스크)의 접근성에 대해 정리할 때, 웹 접근성과 모바일 앱 접근성 지침 기준을 참고할 수 있습니다.
      		한국의 웹 접근성 관련 지침은 주로 WCAG(Web Content Accessibility Guidelines)를 바탕으로 하고 있으며, 모바일 접근성 지침도 이와 유사한 원칙을 따릅니다.<br />
      		무인정보 단말기 접근성 체크리스트는 무인정보단말기 정보접근성 검증기준 문서에 따르며, 10개 원칙, 47개 지표로 구성되어 있습니다.
      	</p>
      </blockquote>











      	



      	<section className="mt_xxl indent">
      		<h2 className="ml_mn" data-conlist="false">휠체어 사용자를 위한 접근성 항목</h2>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">접근방법</h3>

      			<div className="mt_l indent">
      				<h4 className="ml_mn">단단한 바닥 / 바닥면 높이 차이</h4>
      				<figure className="img_figure mt_m">
      					<img src={`${IMG.A11Y}/6_3_2_a11y_01.jpg`} alt="단단한 바닥 / 바닥면 높이 차이 예시" className="max-w590" />
      					<figcaption>
      						이미지 출처 : 무인정보단말기(키오스크) 정보접근성 홍보 리플랫 PDF
      					</figcaption>
      				</figure>
      			</div>

      			<div className="mt_l indent">
      				<h4 className="ml_mn">활동 공간 (전면 개방, 부스 내 설치)</h4>
      				
      				<figure className="img_figure mt_m">
      					<img src={`${IMG.A11Y}/6_3_2_a11y_02.jpg`} alt="활동 공간 (전면 개방, 부스 내 설치) 예시" className="max-w590" />
      					<figcaption>
      						이미지 출처 : 무인정보단말기(키오스크) 정보접근성 홍보 리플랫 PDF
      					</figcaption>
      				</figure>
      			</div>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">무릎공간 / 발공간</h3>
      			<p className="mt_m">
      				휠체어 사용자를 위한 최소한의 공간 확보해야 합니다.
      			</p>
      			
      			<figure className="img_figure mt_m">
      				<img src={`${IMG.A11Y}/6_3_2_a11y_03.jpg`} alt="무릎공간 / 발공간 예시" className="max-w590" />
      				<figcaption>
      					이미지 출처 : 무인정보단말기(키오스크) 정보접근성 홍보 리플랫 PDF
      				</figcaption>
      			</figure>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">눈부심과 얼비침 방지</h3>
      			<p className="mt_m">
      				디스플레이 각도나 위치를 조절한 수 있는 구조로 설계해야 합니다.
      			</p>
      			<figure className="img_figure mt_m">
      				<img src={`${IMG.A11Y}/6_3_2_a11y_04.jpg`} alt="눈부심과 얼비침 방지 예시" className="max-w590" />
      				<figcaption>
      					이미지 출처 : 무인정보단말기(키오스크) 정보접근성 홍보 리플랫 PDF
      				</figcaption>
      			</figure>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">사용자컨트롤 위치</h3>
      			<p className="mt_m">
      				모든 컨트롤은 사용자의 손이 닿는 범위 내에 제공해야 합니다.
      			</p>
      			<figure className="img_figure mt_m">
      				<img src={`${IMG.A11Y}/6_3_2_a11y_05.jpg`} alt="사용자컨트롤 위치 예시" className="max-w590" />
      				<figcaption>
      					이미지 출처 : 무인정보단말기(키오스크) 정보접근성 홍보 리플랫 PDF
      				</figcaption>
      			</figure>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">용이한 인식</h3>
      			<p className="mt_m">
      				무인정보단말기는 평균 휠체어 탑승자의 높이에 맞춰 설치되어야 하며, 사용자가 직접 디스플레이의 위치를 조절할 수 있어야 합니다.
      			</p>
      			<figure className="img_figure mt_m">
      				<img src={`${IMG.A11Y}/6_3_2_a11y_06_1.jpg`} alt="용이한 인식 예시" className="max-w590" />
      				<p className="mt_ms"><img src={`${IMG.A11Y}/6_3_2_a11y_06_2.jpg`} alt="기준 눈높이 디스플레이 제공 예시" className="max-w590" /></p>
      				<figcaption>
      					이미지 출처 : 무인정보단말기(키오스크) 정보접근성 홍보 리플랫 PDF
      				</figcaption>
      			</figure>
      		</article>
      		
      	</section>
      	

      	<section className="mt_xxl indent">
      		<h2 className="ml_mn" data-conlist="false">시각장애인(전맹)을 위한 접근성 항목</h2>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">레이블 제공</h3>
      			<p className="mt_m">
      				용도와 목적을 알 수 있는 시각과 비시각의 레이블을 제공해야 합니다.
      			</p>
      			<figure className="img_figure mt_m">
      				<img src={`${IMG.A11Y}/6_3_2_a11y_07_1.jpg`} alt="시각 레이블 텍스트&아이콘 예시" className="max-w590" />
      				<p className="mt_ms"><img src={`${IMG.A11Y}/6_3_2_a11y_07_2.jpg`} alt="비시각 레이블 점자 예시" className="max-w590" /></p>
      				<figcaption>
      					이미지 출처 : 무인정보단말기(키오스크) 정보접근성 홍보 리플랫 PDF
      				</figcaption>
      			</figure>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">키보드 및 키패드</h3>
      			<p className="mt_m">
      				키보드 및 키패드를 제공할 경우 표준을 준수해야 하며, 시각장애인을 위한 내비게이션과 입력 수단이 필요합니다.
      				키패드의 버튼은 주변보다 2mm 이상 돌출되거나 함몰되도록 설계되어야 하며, 사용자가 쉽게 구분할 수 있어야 합니다.<br />
      				또한, 키패드의 각 기능 키는 촉각 레이블을 포함해야 하며, 예를 들어, Enter 키는 원형, 취소 키는 X자 모양 등으로 촉각적 식별이 가능해야 합니다.
      			</p>
      			<figure className="img_figure mt_m">
      				<img src={`${IMG.A11Y}/6_3_2_a11y_08_1.jpg`} alt="키보드 및 키패드 예시" className="max-w590" />
      				<p className="mt_ms"><img src={`${IMG.A11Y}/6_3_2_a11y_08_2.jpg`} alt="키보드 등의 부착 예시" className="max-w590" /></p>
      				<p className="mt_ms"><img src={`${IMG.A11Y}/6_3_2_a11y_08_3.jpg`} alt="키보드의 촉각 레이블 예시" className="max-w590" /></p>
      				<figcaption>
      					이미지 출처 : 무인정보단말기(키오스크) 정보접근성 홍보 리플랫 PDF
      				</figcaption>
      			</figure>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">대체 콘텐츠 제공</h3>
      			<p className="mt_m">
      				의미 있는 콘텐츠는 대체 콘텐츠(점자, 음성, 자막 등)와 함께 제공되어야 하며,
      				단말기를 사용하는 경우에도 화면 해설과 같은 보조 기능을 함께 제공해야 합니다.
      			</p>
      			<figure className="img_figure mt_m">
      				<img src={`${IMG.A11Y}/6_3_2_a11y_09_1.jpg`} alt="대체 콘텐츠 제공 예시" className="max-w590" />
      				<p className="mt_ms"><img src={`${IMG.A11Y}/6_3_2_a11y_09_2.jpg`} alt="대체 콘텐츠 제공 예시" className="max-w590" /></p>
      				<figcaption>
      					이미지 출처 : 무인정보단말기(키오스크) 정보접근성 홍보 리플랫 PDF
      				</figcaption>
      			</figure>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">음성 출력 제공</h3>
      			<p className="mt_m">
      				단말기 전면에 이어폰 단자와 음량 조절 버튼을 제공해야 합니다.
      			</p>
      			<ul className="dot_lst mt_ms gap-column-sm">
      				<li>
      					<strong>음량 보장</strong>
      					<p>스피커 음량은 65dBA 이하로 조절 가능 : 오픈된 장소에서도 인지 가능성</p>
      				</li>
      				<li>
      					<strong>음량 초기화</strong>
      					<p>사용 후 스피커 음량을 65dBA 이하로 초기화 : 단말기 음성이 소음이 되지 않도록 방지</p>
      				</li>
      				<li>
      					<strong>음량 조절 범위</strong>
      					<p>음량 조절 범위는 18dB 이상 : 사용자들의 청력에 따라 조절할 수 있는 충분한 범위</p>
      				</li>
      				<li>
      					<strong>음량 조절 단계</strong>
      					<p>음량 조절 단계는 18dB 미만 : 정교한 조절이 가능</p>
      				</li>
      				<li>
      					<strong>다시 듣기 제공</strong>
      					<p>음성 다시 듣기 기능이 제공 : 편의성 제공</p>
      				</li>
      				<li>
      					<strong>읽기 종료</strong>
      					<p>음성을 읽는 중에 멈추는 기능이 제공 : 음성 안내를 정확히 인식</p>
      				</li>
      			</ul>
      			<figure className="img_figure mt_m">
      				<img src={`${IMG.A11Y}/6_3_2_a11y_10.jpg`} alt="음성 출력 제공 예시" className="max-w590" />
      				<figcaption>
      					이미지 출처 : 무인정보단말기(키오스크) 정보접근성 홍보 리플랫 PDF
      				</figcaption>
      			</figure>
      		</article>
      		
      	</section>
      	

      	<section className="mt_xxl indent">
      		<h2 className="ml_mn" data-conlist="false">시각장애인(저시력인)을 위한 접근성 항목</h2>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">폰트 크기 / 콘텐츠 구분</h3>
      			<ul className="mt_m indent info_lst gap-column-sm">
      				<li>
      					<strong className="ml_mn">폰트 크기</strong>
      					<ul className="dot_lst">
      						<li>모든 텍스트는 12㎜ 이상 크기로 제공해야 합니다.</li>
      						<li>단말기 표면에 부착된 레이블, 스크린에 표시되는 텍스트에 모두 적용됩니다.</li>
      					</ul>
      				</li>
      				<li>
      					<strong className="ml_mn">콘텐츠 구분</strong>
      					<p>모든 이웃한 콘텐츠는 시각적으로 구불될 수 있도록 제공해야 합니다.</p>
      					<ul className="dot_lst">
      						<li>테두리, 구분선, 무늬를 이용하여 구분</li>
      						<li>배경과의 명도대비 또는 채도의 차이를 주어 구분</li>
      						<li>줄 간격 및 글자 간격을 조절하여 구분</li>
      					</ul>
      				</li>
      			</ul>
      			<figure className="img_figure mt_m">
      				<img src={`${IMG.A11Y}/6_3_2_a11y_10_1.jpg`} alt="폰트 크기 / 콘텐츠 구분 예시" className="max-w590" />
      				<p className="mt_ms"><img src={`${IMG.A11Y}/6_3_2_a11y_10_2.jpg`} alt="폰트 크기 / 콘텐츠 구분 예시" className="max-w590" /></p>
      				<figcaption>
      					이미지 출처 : 무인정보단말기(키오스크) 정보접근성 홍보 리플랫 PDF
      				</figcaption>
      			</figure>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">색의 사용</h3>
      			<ul className="mt_m indent info_lst gap-column-sm">
      				<li>
      					<strong className="ml_mn">명도 대비</strong>
      					<ul className="dot_lst">
      						<li>의미 있는 텍스트(아이콘)는 배경과 명도 대비가 명확히 제공해야 합니다.</li>
      					</ul>
      				</li>
      				<li>
      					<strong className="ml_mn">색의 사용</strong>
      					<ul className="dot_lst">
      						<li>색이 시각적 요소를 구분하는 유일한 수단으로 사용되지 않아야 합니다.</li>
      						<li>색은 강조용으로 사용하고 레이블과 함께 제공해야 합니다.</li>
      					</ul>
      				</li>
      			</ul>
      			<figure className="img_figure mt_m">
      				<img src={`${IMG.A11Y}/6_3_2_a11y_11_1.jpg`} alt="명도 대비 예시" className="max-w590" />
      				<p className="mt_ms"><img src={`${IMG.A11Y}/6_3_2_a11y_11_2.jpg`} alt="색의 사용 예시" className="max-w590" /></p>
      				<figcaption>
      					이미지 출처 : 무인정보단말기(키오스크) 정보접근성 홍보 리플랫 PDF
      				</figcaption>
      			</figure>
      		</article>
      		
      	</section>
      	

      	<section className="mt_xxl indent">
      		<h2 className="ml_mn" data-conlist="false">뇌병변 장애인을 위한 접근성 항목</h2>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">쉬운 조작</h3>
      			<ul className="mt_m dot_lst">
      				<li>작은 힘으로 조작 가능</li>
      				<li>단순 조작</li>
      				<li>한 손 조작 가능</li>
      			</ul>
      			<figure className="img_figure mt_m">
      				<img src={`${IMG.A11Y}/6_3_2_a11y_12.jpg`} alt="쉬운 조작 예시" className="max-w590" />
      				<figcaption>
      					이미지 출처 : 무인정보단말기(키오스크) 정보접근성 홍보 리플랫 PDF
      				</figcaption>
      			</figure>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">버튼 크기 / 간격</h3>
      			<ul className="mt_m dot_lst">
      				<li>충분한 버튼 크기</li>
      				<li>버튼 간격 2.5㎜ 이상</li>
      			</ul>
      			<figure className="img_figure mt_m">
      				<img src={`${IMG.A11Y}/6_3_2_a11y_13.jpg`} alt="버튼 크기 / 간격 예시" className="max-w590" />
      				<figcaption>
      					이미지 출처 : 무인정보단말기(키오스크) 정보접근성 홍보 리플랫 PDF
      				</figcaption>
      			</figure>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">삽입구</h3>
      			<p className="mt_m">
      				매체(카드, 지폐 등) 삽입 과정에서 사용자 실수를 방지할 수 있도록 설계해야 합니다.
      			</p>
      			<figure className="img_figure mt_m">
      				<img src={`${IMG.A11Y}/6_3_2_a11y_14.jpg`} alt="삽입구 예시" className="max-w590" />
      				<figcaption>
      					이미지 출처 : 무인정보단말기(키오스크) 정보접근성 홍보 리플랫 PDF
      				</figcaption>
      			</figure>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">배출구</h3>
      			<ul className="mt_m indent info_lst gap-column-sm">
      				<li>
      					<strong className="ml_mn">낱장 배출 방식</strong>
      					<p>매체를 손으로 잡을 수 있도록 배출구 밖으로 돌출되도록 설계해야 합니다</p>
      				</li>
      				<li>
      					<strong className="ml_mn">상자 배출 방식</strong>
      					<p>사용자가 한 손으로 꺼낼 수 있고 매체가 상자 밖으로 배출되지 않게 설계해야 합니다</p>
      				</li>
      				<li>
      					<strong className="ml_mn">유실 방지</strong>
      					<p>영수증이 유실되지 않게 매체 끝 부위가 물려 있도록 설계해야 합니다</p>
      				</li>
      			</ul>
      			<figure className="img_figure mt_m">
      				<img src={`${IMG.A11Y}/6_3_2_a11y_15.jpg`} alt="배출구 예시" className="max-w590" />
      				<figcaption>
      					이미지 출처 : 무인정보단말기(키오스크) 정보접근성 홍보 리플랫 PDF
      				</figcaption>
      			</figure>
      		</article>
      		
      	</section>
      	

      	<section className="mt_xxl indent">
      		<h2 className="ml_mn" data-conlist="false">청각 장애인을 위한 접근성 항목</h2>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">대체 콘텐츠</h3>

      			<div className="mt_l indent">
      				<h4 className="ml_mn">대체 콘텐츠 제공</h4>
      				<p className="mt_ms">
      					의미 있는 모든 청각 정보는 대체 콘텐츠(텍스트, 지시등)와 함께 제공해야 합니다.
      				</p>
      				<figure className="img_figure mt_m">
      					<img src={`${IMG.A11Y}/6_3_2_a11y_16_1.jpg`} alt="대체 콘텐츠 제공 예시" className="max-w590" />
      					<figcaption>
      						이미지 출처 : 무인정보단말기(키오스크) 정보접근성 홍보 리플랫 PDF
      					</figcaption>
      				</figure>
      			</div>

      			<div className="mt_l indent">
      				<h4 className="ml_mn">자막/수어 제공</h4>
      				<p className="mt_ms">
      					의미 있는 비디오는 자막/수어를 함께 제공해야 합니다.
      				</p>
      				<figure className="img_figure mt_m">
      					<img src={`${IMG.A11Y}/6_3_2_a11y_16_2.jpg`} alt="자막/수어 제공 예시" className="max-w590" />
      					<figcaption>
      						이미지 출처 : 무인정보단말기(키오스크) 정보접근성 홍보 리플랫 PDF
      					</figcaption>
      				</figure>
      			</div>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">지원 서비스</h3>
      			<p className="mt_m">
      				단말기 이용 과정에서 담당자에게 도움을 요청하고 지원받을 수 있어야 합니다.<br />
      				지원 서비스 종류 : 유인 안내소, 직원 호출, 콜센터(전화번호/영상통화)
      			</p>
      			<figure className="img_figure mt_m">
      				<img src={`${IMG.A11Y}/6_3_2_a11y_17.jpg`} alt="지원 서비스 예시" className="max-w590" />
      				<figcaption>
      					이미지 출처 : 무인정보단말기(키오스크) 정보접근성 홍보 리플랫 PDF
      				</figcaption>
      			</figure>
      		</article>
      		
      	</section>
      	

      	<section className="mt_xxl indent">
      		<h2 className="ml_mn" data-conlist="false">고령자(노인)을 위한 접근성 항목</h2>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">접근방법</h3>
      			<div className="mt_m">
      				<strong className="font-16 t_black">충분한 시간 제공</strong>
      				<p>서비스를 이용하는 과정에서 시간 제약이 없도록 설계해야 합니다.</p>
      			</div>
      			<figure className="img_figure mt_m">
      				<img src={`${IMG.A11Y}/6_3_2_a11y_18.jpg`} alt="접근방법 예시" className="max-w590" />
      				<figcaption>
      					이미지 출처 : 무인정보단말기(키오스크) 정보접근성 홍보 리플랫 PDF
      				</figcaption>
      			</figure>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">초기화 가능</h3>
      			<p className="mt_m">
      				서비스 이용 중 초기 상태로 되돌아갈 수 있도록 설계해야 합니다.
      			</p>
      			<ul className="mt_sm indent dot_lst">
      				<li><b>정상적인 서비스 종료 후</b> 사용자가 서비스 종료를 선택</li>
      				<li><b>서비스 이용 중</b> 사용자가 서비스 이용 중 초기 단계로 이동</li>
      				<li><b>서비스 이용 중</b> 일정 시간 동안 사용자 입력이 없는 경우</li>
      			</ul>
      			<figure className="img_figure mt_m">
      				<img src={`${IMG.A11Y}/6_3_2_a11y_19.jpg`} alt="초기화 가능 예시" className="max-w590" />
      				<figcaption>
      					이미지 출처 : 무인정보단말기(키오스크) 정보접근성 홍보 리플랫 PDF
      				</figcaption>
      			</figure>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">쉬운 이해</h3>

      			<div className="mt_l indent">
      				<h4 className="ml_mn">자동 갱신 방지</h4>
      				<p className="mt_ms">
      					콘텐츠는 자동으로 변경되지 않도록 설계해야 합니다
      				</p>
      				<figure className="img_figure mt_m">
      					<img src={`${IMG.A11Y}/6_3_2_a11y_20_1.jpg`} alt="자동 갱신 방지 예시" className="max-w590" />
      					<figcaption>
      						이미지 출처 : 무인정보단말기(키오스크) 정보접근성 홍보 리플랫 PDF
      					</figcaption>
      				</figure>
      			</div>

      			<div className="mt_l indent">
      				<h4 className="ml_mn">쉬운 용어와 설명</h4>
      				<p className="mt_ms">
      					쉬운 용어와 아이콘, 짧고 명확한 표현을 활용해야 합니다.
      				</p>
      				<figure className="img_figure mt_m">
      					<img src={`${IMG.A11Y}/6_3_2_a11y_20_2.jpg`} alt="쉬운 용어와 설명 예시" className="max-w590" />
      					<figcaption>
      						이미지 출처 : 무인정보단말기(키오스크) 정보접근성 홍보 리플랫 PDF
      					</figcaption>
      				</figure>
      			</div>
      		</article>
      		
      	</section>
      	


      <footer className="reference_box">
      	<strong className="tit">원칙별 체크리스트 | 접근성 체크리스트(무인정보단말기 접근성) - 무인정보 단말기 접근성 참조</strong>
      	<ul className="link_lst">
      		<li className="reference"><a href="https://www.w3.org/WAI/standards-guidelines/mobile/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C Mobile Accessibility at W3C</a></li>
      		<li className="reference"><a href="https://www.w3.org/TR/mobile-accessibility-mapping/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C Mobile Accessibility: How WCAG 2.0 and Other W3C/WAI Guidelines Apply to Mobile</a></li>
      		<li className="reference"><a href="https://www.w3.org/news/2015/first-public-working-draft-performance-timeline-level-2/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C First Public Working Draft</a></li>
      		<li className="reference"><a href="https://www.w3.org/TR/UAAG20/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C User Agent Accessibility Guidelines (UAAG) 2.0</a></li>
      		<li className="reference"><a href="https://www.w3.org/TR/IMPLEMENTING-UAAG20/mobile.html" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C Mobile Accessibility Examples from UAAG 2.0 Reference</a></li>
      		<li className="reference"><a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/Mobile_accessibility_checklist" target="_blank" rel="noreferrer" title="새창 열림" className="fas">MDN Mobile accessibility checklist</a></li>
      		<li className="reference"><a href="https://blog.naver.com/prologue/PrologueList.naver?blogId=mohw2016" target="_blank" rel="noreferrer" title="새창 열림" className="fas">보건복지부 블로그</a></li>
      		<li className="reference"><a href="https://www.mohw.go.kr/synap/doc.html?fn=1635730805506_20211101104005.pdf&rs=/upload/result/202405/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">보건복지부 - 장애인의 무인정보단말기 등 접근성 강화방안 마련 연구</a></li>
      		<li className="reference"><a href="https://www.kioskui.or.kr/index.do?menu_id=00000985" target="_blank" rel="noreferrer" title="새창 열림" className="fas">무인정보단말기 UI플랫폼 - 무인정보단말기 접근성 지침</a></li>
      		<li className="reference"><a href="https://standard.go.kr/KSCI/standardIntro/getStandardSearchView.do?menu19&topMenuId=502&upperMenuId=503&ksNo=KSX9211&tmprKsNo=KS_X_NEW_2015_1845&reformNo=01" target="_blank" rel="noreferrer" title="새창 열림" className="fas">무인정보단말기(키오스크, 스마트자판기 등) 접근성 지침</a></li>
      		<li className="reference"><a href="https://mada.org.qa/wp-content/uploads/2020/01/Ireland-Guidelines-for-Public-Access-Terminals-Accessibility.pdf" target="_blank" rel="noreferrer" title="새창 열림" className="fas">Guidelines for Public Access Terminals Accessibility - Printable Version</a></li>
      		<li className="reference"><a href="https://www.khan.co.kr/economy/market-trend/article/202109231513001#csidxf8d9d8b51bed28bbb4fad083122f3af" target="_blank" rel="noreferrer" title="새창 열림" className="fas">경향신문 - ‘버튼 높이는 120㎝ 아래에’ 접근성 강화한 키오스크 표준 나온다</a></li>
      	</ul>
      </footer>
    </>
  )
}

export default CheckKioskMandatoryPage
