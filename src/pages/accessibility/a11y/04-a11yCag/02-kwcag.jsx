import { useAccessibilityPageMeta } from '@/hooks/useAccessibilityPageMeta.js'
import { IMG } from '@/config/path'

const PAGE_LAYOUT = {
  mainClass: "cagKwcag",
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
  title: "한국형 웹 콘텐츠 접근성 | 접근성 가이드라인",
  description: "한국형 웹 콘텐츠 접근성 지침(KWCAG)은 국제 웹 콘텐츠 접근성(WCAG)을 토대로 만들어졌으며, 웹사이트와 애플리케이션이 모든 사용자, 특히 장애가 있는 사용자들도 원활하게 이용할 수 있도록 설계되었음을 보장하는 기준입니다. 이 페이지에서는 KWCAG의 이력과 지침, 그리고 KWCAG 2.1과 KWCAG 2.2의 차이점을 소개합니다.",
  keyword: "Accessibility, a11y, wcag, kwcag, macag, kiosk, 접근성, 웹 콘텐츠 접근성, 한국형 웹 콘텐츠 접근성, 모바일 앱 접근성, 무인정보단말기 접근성",
}

function KwcagPage() {
  useAccessibilityPageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  })


  return (
    <>









      	<blockquote className="uk_note mt_xxl" role="note">
      		<strong className="sound_only">요약 설명</strong>
      		<p>
      			한국형 웹 콘텐츠 접근성(이하 '<b className="t_black">KWCAG</b>' - Korean Web Content Accessibility Guidelines)은
      			
      			해외의 웹 표준 기술 동향을 토대로 국내 환경에 맞게 반영된 한국형 웹 콘텐츠 접근성 지침이며,
      			원칙 4개, 지침 13개, 항목 24개로 구성되어 있습니다.<br />
      			한국도 2009년 5월 ‘국가 정보화 기본법’을 개정해 ‘장애인, 고령자 등의 정보 접근 및 이용 보장’을 명시했으며,
      			2015년까지 한국 내 모든 인터넷 사이트가 웹 접근성을 보장하도록 규정했습니다.
      		</p>
      	</blockquote>

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">4.2.1. 국내 접근성과 국제 접근성 차이점</h2>

      		<p className="mt_l">
      			국제 접근성 기준인 <b className="t_blue">WCAG</b>는 <i className="t_blue">Web Content Accessibility Guidelines</i>의 약자이고,<br />
      			<i className="underline">국내 접근성 기준</i>인 <b className="t_darkblue">KWCAG</b>는 <i className="t_darkblue">Korea Web Content Accessibility Guidelines</i>의 약자입니다.<br />
      			<b className="t_darkblue">KWCAG</b>는 <b className="t_blue">WCAG</b>에서 앞에 <i className="t_darkblue">Korea</i>만 붙은 것으로 유추할 수 있듯이
      			<b className="t_blue">WCAG</b>를 국내 웹 환경을 고려하여 제작한 우리나라만의 접근성 준수 지침이며, 주요 차이점은 다음과 같습니다.
      		</p>
      		<ol className="mt_l ol_lst info_lst gap-column-m">
      			<li className="weight-600-before t_black_before">
      				<strong>법적 규제와 기준</strong>
      				<p>
      					국내 접근성은 대부분 국내 법규와 행정기관의 지침에 따라 정해집니다.<br />
      					예를 들어, 한국에서는 장애인차별금지법과 정보통신서비스접근성확보등에관한법률(웹접근성법)에 따라 웹사이트 접근성을 확보해야 합니다.<br />
      					반면 국제 접근성은 주로 국제 기구(예: W3C)가 제공하는 WCAG(웹 콘텐츠 접근성 지침)과 같은 국제 표준을 기반으로 합니다.
      				</p>
      			</li>
      			

      			<li className="weight-600-before t_black_before">
      				<strong>기준의 상세도</strong>
      				<p>
      					국내 접근성 기준은 국내 사용자의 특수한 요구와 환경을 고려하여 상세하게 구체화될 수 있습니다.<br />
      					예를 들어, 한국에서는 한글 웹 폰트 사용 가능성, 한글 발음 도움 기능 등의 구체적인 기준을 포함할 수 있습니다.<br />
      					반면 국제 접근성 기준은 보다 일반적이고 폭넓은 범위의 사용자를 대상으로 합니다.
      				</p>
      			</li>
      			

      			<li className="weight-600-before t_black_before">
      				<strong>인증 및 준수 요구</strong>
      				<p>
      					국내 접근성은 국내 인증 기관이 인증하며, 준수 여부를 평가합니다.<br />
      					국제 접근성에서는 WCAG의 세 가지 준수 수준(A, AA, AAA)을 통해 접근성 수준을 평가하고 인증할 수 있습니다.
      				</p>
      			</li>
      			

      			<li className="weight-600-before t_black_before">
      				<strong>지원 및 자원</strong>
      				<p>
      					국내 접근성은 국내 기관 및 커뮤니티에서의 지원과 자원을 활용할 수 있는 장점이 있습니다.<br />
      					반면 국제 접근성은 국제적인 표준과 커뮤니티의 지원을 받을 수 있으며, 최신 기술과 경험을 공유할 수 있는 장점이 있습니다.
      				</p>
      			</li>
      			
      		</ol>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">4.2.2. <b className="t_darkblue">KWCAG</b> 이력</h2>

      		<p className="mt_l">
      			W3C가 장애인 등이 웹사이트에 접근하는 것을 보장하기 위한 목적으로 개발한 ‘웹 콘텐츠 접근성 지침 2.1’를 참고하여 개발되었고,
      			W3C의 웹 접근성 표준은 1999년 5월에 제정되었으며, 2008년, 2018년에 개정된 바 있습니다.<br />
      			이 표준은 ‘W3C 웹 콘텐츠 접근성 가이드라인 2.1(2018)’의 성공 기준의 중요도 A항목을 중심으로 국내 여건을 고려하여 개발하였습니다.
      		</p>
      		<ol className="mt_m ol_lst gap-column-sm weight-500 t_black">
      			<li>
      				제·개정일 (2005.12.21) 제정 KCS.OT-10.0003
      			</li>
      			<li>
      				제·개정일 (2010.12.31) 개정 KCS.OT-10.0003/R1
      			</li>
      			<li>
      				제·개정일 (2015.03.31) 제정 개정 KCS.OT-10.0003/R2
      			</li>
      			<li>
      				제·개정일 (2022.00.00) 개정 KCS.OT-10.0003/R3
      			</li>
      		</ol>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">4.2.3. <b className="t_darkblue">KWCAG 2.1</b> 지침</h2>

      		<p className="mt_l">
      			<b className="t_black">4개의 중요한 원칙</b>(<b>인식의 용이성</b>, <b>운용의 용이성</b>, <b>이해의 용이성</b>, <b>견고성</b>)으로 구성되어 있으며,<br />
      			<b>인식의 용이성</b>은 지침 3개, 검사 항목 7개,<br />
      			<b>운용의 용이성</b>은 지침 4개, 검사 항목 9개,<br />
      			<b>이해의 용이성</b>은 지침 4개, 검사 항목 6개,<br />
      			<b>견고성</b>은 지침 2개, 검사 항목 2개로 각각 구성되어 있습니다.
      		</p>

      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue">4.2.3.1. 인식의 용이성(Perceivable)</h3>
      			<ol className="mt_ml ol_lst info_lst gap-column-ms">
      				<li className="weight-600-before">
      					<strong className="t_666">지침 3개</strong>
      					<ul className="dot_lst">
      						<li>대체 텍스트</li>
      						<li>멀티미디어 대체 수단</li>
      						<li>명료성</li>
      					</ul>
      				</li>
      				

      				<li className="weight-600-before">
      					<strong className="t_666">검사 항목 7개</strong>
      					<ul className="dot_lst">
      						<li><b>적절한 대체 텍스트 제공</b> : 텍스트 아닌 콘텐츠는 그 의미나 용도를 인식할 수 있도록 대체 텍스트를 제공해야 합니다.</li>
      						<li><b>자막 제공</b> : 멀티미디어 콘텐츠에는 자막, 대본 또는 수화를 제공해야 합니다.</li>
      						<li><b>색에 무관한 콘텐츠 인식</b> : 콘텐츠는 색에 관계없이 인식될 수 있어야 합니다.</li>
      						<li><b>명확한 지시 사항 제공</b> : 지시 사항은 모양, 크기, 위치, 방향, 색, 소리 등에 관계없이 인식될 수 있어야 합니다.</li>
      						<li><b>텍스트 콘텐츠의 명도 대비</b> : 텍스트 콘텐츠와 배경 간의 명도 대비는 4.5 대 1 이상이어야 합니다.</li>
      						<li><b>자동 재생 금지</b> : 자동으로 소리가 재생되지 않아야 합니다.</li>
      						<li><b>콘텐츠 간의 구분</b> : 이웃한 콘텐츠는 구별될 수 있어야 합니다.</li>
      					</ul>
      				</li>
      				
      			</ol>
      		</article>
      		

      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue">4.2.3.2. 운용의 용이성(Operable)</h3>
      			<ol className="mt_ml ol_lst info_lst gap-column-ms">
      				<li className="weight-600-before">
      					<strong className="t_666">지침 4개</strong>
      					<ul className="dot_lst">
      						<li>입력장치 접근성</li>
      						<li>충분한 시간 제공</li>
      						<li>광과민성 발작 예방</li>
      						<li>쉬운 내비게이션</li>
      					</ul>
      				</li>
      				

      				<li className="weight-600-before">
      					<strong className="t_666">검사 항목 9개</strong>
      					<ul className="dot_lst">
      						<li><b>키보드 사용 보장</b> : 모든 기능은 키보드만으로도 사용할 수 있어야 합니다.</li>
      						<li><b>초점 이동</b> : 키보드에 의한 초점은 논리적으로 이동해야 하며 시각적으로 구별할 수 있어야 합니다.</li>
      						<li><b>조작 가능</b> : 사용자 입력 및 컨트롤은 조작 가능하도록 제공되어야 합니다.</li>
      						<li><b>응답시간 조절</b> : 시간제한이 있는 콘텐츠는 응답시간을 조절할 수 있어야 합니다.</li>
      						<li><b>정지 기능 제공</b> : 자동으로 변경되는 콘텐츠는 움직임을 제어할 수 있어야 합니다.</li>
      						<li><b>깜빡임과 번쩍임 사용 제한</b> : 초당 3~50 회 주기로 깜빡이거나 번쩍이는 콘텐츠를 제공하지 않아야 합니다.</li>
      						<li><b>반복 영역 건너뛰기</b> : 콘텐츠의 반복되는 영역은 건너뛸 수 있어야 합니다.</li>
      						<li><b>제목 제공</b> : 페이지, 프레임, 콘텐츠 블록에는 적절한 제목을 제공해야 합니다.</li>
      						<li><b>적절한 링크 텍스트</b> : 링크 텍스트는 용도나 목적을 이해할 수 있도록 제공해야 합니다.</li>
      					</ul>
      				</li>
      				
      			</ol>
      		</article>
      		

      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue">4.2.3.3. 이해의 용이성(Understandable)</h3>
      			<ol className="mt_ml ol_lst info_lst gap-column-ms">
      				<li className="weight-600-before">
      					<strong className="t_666">지침 4개</strong>
      					<ul className="dot_lst">
      						<li>가독성</li>
      						<li>예측 가능성</li>
      						<li>콘텐츠의 논리성</li>
      						<li>입력 도움</li>
      					</ul>
      				</li>
      				

      				<li className="weight-600-before">
      					<strong className="t_666">검사 항목 6개</strong>
      					<ul className="dot_lst">
      						<li><b>기본 언어 표시</b> : 주로 사용하는 언어를 명시해야 합니다.</li>
      						<li><b>사용자 요구에 따른 실행</b> : 사용자가 의도하지 않은 기능(새 창, 초점에 의한 맥락 변화 등)은 실행되지 않아야 합니다.</li>
      						<li><b>콘텐츠의 선형 구조</b> : 콘텐츠는 논리적인 순서로 제공해야 합니다.</li>
      						<li><b>표의 구성</b> : 표는 이해하기 쉽게 구성해야 합니다.</li>
      						<li><b>레이블 제공</b> : 사용자 입력에는 대응하는 레이블을 제공해야 합니다.</li>
      						<li><b>오류 정정</b> : 입력 오류를 정정할 수 있는 방법을 제공해야 합니다.</li>
      					</ul>
      				</li>
      				
      			</ol>
      		</article>
      		

      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue">4.2.4.4. 견고성(Robust)</h3>
      			<ol className="mt_ml ol_lst info_lst gap-column-ms">
      				<li className="weight-600-before">
      					<strong className="t_666">지침 2개</strong>
      					<ul className="dot_lst">
      						<li>문법 준수</li>
      						<li>웹 애플리케이션 접근성</li>
      					</ul>
      				</li>
      				

      				<li className="weight-600-before">
      					<strong className="t_666">검사 항목 2개</strong>
      					<ul className="dot_lst">
      						<li><b>마크업 오류 방지</b> : 마크업 언어의 요소는 열고 닫음, 중첩 관계 및 속성 선언에 오류가 없어야 합니다.</li>
      						<li><b>웹 애플리케이션 접근성 준수</b> : 콘텐츠에 포함된 웹 애플리케이션은 접근성을 준수해야 합니다.</li>
      					</ul>
      				</li>
      				
      			</ol>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">4.2.4. <b className="t_darkblue">KWCAG 2.2</b> 지침</h2>

      		<p className="mt_l">
      			KWCAG 2.1 지침과 동일하게
      			<b className="t_black">4개의 중요한 원칙</b>(<b>인식의 용이성</b>, <b>운용의 용이성</b>, <b>이해의 용이성</b>, <b>견고성</b>)으로 구성되어 있으며,<br />
      			<b>인식의 용이성</b>은 지침 4개, 검사 항목 9개,<br />
      			<b>운용의 용이성</b>은 지침 5개, 검사 항목 15개,<br />
      			<b>이해의 용이성</b>은 지침 3개, 검사 항목 7개,<br />
      			<b>견고성</b>은 지침 2개, 검사 항목 2개로 각각 구성되어 있습니다.
      		</p>

      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue">4.2.4.1. 인식의 용이성(Perceivable)</h3>
      			<ol className="mt_ml ol_lst info_lst gap-column-ms">
      				<li className="weight-600-before">
      					<strong className="t_666">지침 4개</strong>
      					<ul className="dot_lst">
      						<li>대체 텍스트</li>
      						<li>멀티미디어 대체 수단</li>
      						<li>적응성 (추가)</li>
      						<li>명료성</li>
      					</ul>
      				</li>
      				

      				<li className="weight-600-before">
      					<strong className="t_666">검사 항목 9개</strong>
      					<ul className="dot_lst">
      						<li><b>적절한 대체 텍스트 제공</b> : 텍스트 아닌 콘텐츠는 그 의미나 용도를 인식할 수 있도록 대체 텍스트를 제공해야 합니다.</li>
      						<li><b>자막 제공</b> : 멀티미디어 콘텐츠에는 자막, 대본 또는 수어를 제공해야 합니다.</li>
      						<li><b>표의 구성</b> : 표는 이해하기 쉽게 구성해야 합니다.</li>
      						<li><b>콘텐츠의 선형구조</b> : 콘텐츠는 논리적인 순서로 제공해야 합니다.</li>
      						<li><b>명확한 지시사항 제공</b> : 지시사항은 모양, 크기, 위치, 방향, 색, 소리 등에 관계없이 인식될 수 있어야 합니다.</li>
      						<li><b>색에 무관한 콘텐츠 인식</b> : 콘텐츠는 색에 관계없이 인식될 수 있어야 합니다.</li>
      						<li><b>자동 재생 금지</b> : 자동으로 소리가 재생되지 않아야 합니다.</li>
      						<li><b>텍스트 콘텐츠의 명도 대비</b> : 텍스트 콘텐츠와 배경 간의 명도대비는 4.5 대 1 이상이어야 합니다.</li>
      						<li><b>콘텐츠 간의 구분</b> : 이웃한 콘텐츠는 구별될 수 있어야 합니다.</li>
      					</ul>
      				</li>
      				
      			</ol>
      		</article>
      		

      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue">4.2.4.2. 운용의 용이성(Operable)</h3>
      			<ol className="mt_ml ol_lst info_lst gap-column-ms">
      				<li className="weight-600-before">
      					<strong className="t_666">지침 5개</strong>
      					<ul className="dot_lst">
      						<li>입력장치 접근성</li>
      						<li>충분한 시간 제공</li>
      						<li>광과민성 발작 예방</li>
      						<li>쉬운 내비게이션</li>
      						<li>입력 방식 (추가)</li>
      					</ul>
      				</li>
      				

      				<li className="weight-600-before">
      					<strong className="t_666">검사 항목 15개</strong>
      					<ul className="dot_lst">
      						<li><b>키보드 사용 보장</b> : 모든 기능은 키보드만으로도 사용할 수 있어야 합니다.</li>
      						<li><b>초점 이동과 표시</b> : 키보드에 의한 초점은 논리적으로 이동해야 하며, 시각적으로 구별할 수 있어야 합니다.</li>
      						<li><b>조작 가능</b> : 사용자 입력 및 콘트롤은 조작 가능하도록 제공되어야 합니다.</li>
      						<li><b className="t_blue">문자 단축키 (추가)</b> : 문자 단축키는 오동작으로 인한 오류를 방지하여야 합니다.</li>
      						<li><b>응답시간 조절</b> : 시간제한이 있는 콘텐츠는 응답시간을 조절할 수 있어야 합니다.</li>
      						<li><b>정지 기능 제공</b> : 자동으로 변경되는 콘텐츠는 움직임을 제어할 수 있어야 합니다.</li>
      						<li><b>깜빡임과 번쩍임 사용 제한</b> : 초당 3~50회 주기로 깜빡이거나 번쩍이는 콘텐츠를 제공하지 않아야 합니다.</li>
      						<li><b>반복 영역 건너뛰기</b> : 콘텐츠의 반복되는 영역은 건너뛸 수 있어야 합니다.</li>
      						<li><b>제목 제공</b> : 페이지, 프레임, 콘텐츠 블록에는 적절한 제목을 제공해야 합니다.</li>
      						<li><b>적절한 링크 텍스트</b> : 링크 텍스트는 용도나 목적을 이해할 수 있도록 제공해야 합니다.</li>
      						<li><b className="t_blue">고정된 참조 위치 정보 (추가)</b> : 전자출판문서 형식의 웹 페이지는 각 페이지로 이동할 수 있는 기능이 있어야 하고, 서식이나 플랫폼에 상관없이 참조 위치 정보를 일관되게 제공ㆍ유지해야 합니다.</li>
      						<li><b className="t_blue">단일 포인터 입력 지원 (추가)</b> : 다중 포인터 또는 경로기반 동작을 통한 입력은 단일 포인터 입력으로도 조작할 수 있어야 합니다.</li>
      						<li><b className="t_blue">포인터 입력 취소 (추가)</b> : 단일 포인터 입력으로 실행되는 기능은 취소할 수 있어야 합니다.</li>
      						<li><b className="t_blue">레이블과 네임 (추가)</b> : 텍스트 또는 텍스트 이미지가 포함된 레이블이 있는 사용자 인터페이스 구성요소는 네임에 시각적으로 표시되는 해당 텍스트를 포함해야 합니다.</li>
      						<li><b className="t_blue">동작기반 작동 (추가)</b> : 동작기반으로 작동하는 기능은 사용자 인터페이스 구성요소로 조작할 수 있고, 동작기반 기능을 비활성화할 수 있어야 합니다.</li>
      					</ul>
      				</li>
      				
      			</ol>
      		</article>
      		

      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue">4.2.4.3. 이해의 용이성(Understandable)</h3>
      			<ol className="mt_ml ol_lst info_lst gap-column-ms">
      				<li className="weight-600-before">
      					<strong className="t_666">지침 4개</strong>
      					<ul className="dot_lst">
      						<li>가독성</li>
      						<li>예측 가능성</li>
      						<li>콘텐츠의 논리성</li>
      						<li>입력 도움</li>
      					</ul>
      				</li>
      				

      				<li className="weight-600-before">
      					<strong className="t_666">검사 항목 7개</strong>
      					<ul className="dot_lst">
      						<li><b>기본 언어 표시</b> : 주로 사용하는 언어를 명시해야 합니다.</li>
      						<li><b>사용자 요구에 따른 실행</b> : 사용자가 의도하지 않은 기능(새 창, 초점에 의한 맥락 변화 등)은 실행되지 않아야 합니다.</li>
      						<li><b className="t_blue">찾기 쉬운 도움 정보 (추가)</b> : 도움 정보가 제공되는 경우, 각 페이지에서 동일한 상대적인 순서로 접근할 수 있어야 합니다.</li>
      						<li><b>오류 정정</b> : 입력 오류를 정정할 수 있는 방법을 제공해야 합니다.</li>
      						<li><b>레이블 제공</b> : 사용자 입력에는 대응하는 레이블을 제공해야 합니다.</li>
      						<li><b className="t_blue">접근 가능한 인증 (추가)</b> : 인증 과정은 인지 기능 테스트에만 의존해서는 안 합니다.</li>
      						<li><b className="t_blue">반복 입력 정보 (추가)</b> : 반복되는 입력 정보는 자동 입력 또는 선택 입력할 수 있어야 합니다.</li>
      					</ul>
      				</li>
      				
      			</ol>
      		</article>
      		

      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue">4.2.3.4. 견고성(Robust)</h3>
      			<ol className="mt_ml ol_lst info_lst gap-column-ms">
      				<li className="weight-600-before">
      					<strong className="t_666">지침 2개</strong>
      					<ul className="dot_lst">
      						<li>문법 준수</li>
      						<li>웹 애플리케이션 접근성</li>
      					</ul>
      				</li>
      				

      				<li className="weight-600-before">
      					<strong className="t_666">검사 항목 2개</strong>
      					<ul className="dot_lst">
      						<li><b>마크업 오류 방지</b> : 마크업 언어의 요소는 열고 닫음, 중첩 관계 및 속성 선언에 오류가 없어야 합니다.</li>
      						<li><b>웹 애플리케이션 접근성 준수</b> : 콘텐츠에 포함된 웹 애플리케이션은 접근성을 준수해야 합니다.</li>
      					</ul>
      				</li>
      				
      			</ol>
      		</article>
      		
      	</section>
      	

      	<figure className="img_figure mt_l">
      		<img src={`${IMG.A11Y}/kwcag_all_icon2.png`} alt="웹 콘텐츠 접근성 4원칙 33개" />
      		<figcaption>
      			웹 콘텐츠 접근성 4원칙 33개
      		</figcaption>
      	</figure>

      	<figure className="img_figure mt_l">
      		<img src={`${IMG.A11Y}/kwcag_all_icon_mo.png`} alt="웹 콘텐츠 접근성 4원칙 33개" />
      		<figcaption>
      			웹 콘텐츠 접근성 4원칙 33개
      		</figcaption>
      	</figure>

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">4.2.5. <b className="t_darkblue">KWCAG 2.1</b> 과 <b className="t_darkblue">KWCAG 2.2</b> 차이점</h2>

      		<p className="mt_l">
      			KWCAG 2.1과 KWCAG 2.2는 한국 웹 콘텐츠 접근성 지침의 두 가지 버전으로,
      			웹 콘텐츠의 접근성을 향상시키기 위한 규격입니다. 주요 차이점은 다음과 같습니다.
      		</p>

      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue">KWCAG 2.1</h3>
      			<ol className="mt_ml ol_lst info_lst gap-column-important-sm">
      				<li className="weight-600-before">
      					<strong className="t_666">발표 시기 : 2018년</strong>
      				</li>
      				<li className="weight-600-before">
      					<strong className="t_666">주요 추가 내용</strong>
      					<ul className="dot_lst">
      						<li><b>모바일 접근성</b> : 모바일 기기 사용자를 위한 접근성 기준 추가</li>
      						<li><b>인터랙티브 콘텐츠</b> : 동적 콘텐츠와 웹 애플리케이션의 접근성을 개선하는 기준 추가</li>
      						<li><b>인지적 및 학습 장애</b> : 인지적 및 학습 장애가 있는 사용자를 위한 접근성 기준 강화</li>
      					</ul>
      				</li>
      			</ol>
      		</article>
      		

      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue">KWCAG 2.2</h3>
      			<ol className="mt_ml ol_lst info_lst gap-column-important-sm">
      				<li className="weight-600-before">
      					<strong className="t_666">발표 시기 : 2021년</strong>
      				</li>
      				<li className="weight-600-before">
      					<strong className="t_666">주요 추가 내용</strong>
      					<ul className="dot_lst">
      						<li><b>사용자 제어 강화</b> : 사용자가 콘텐츠를 더 쉽게 제어할 수 있도록 하는 기준 강화</li>
      						<li><b>인증 및 로그인</b> : 인증 과정에서의 접근성을 높이기 위한 기준 추가</li>
      						<li><b>향상된 가독성</b> : 텍스트와 콘텐츠의 가독성을 높이기 위한 새로운 기준 포함</li>
      						<li><b>사용자 인터페이스 구성 요소</b> : 인터페이스 요소의 접근성을 강화하는 지침 추가</li>
      					</ul>
      				</li>
      			</ol>
      		</article>
      		

      		<p className="mt_l">
      			KWCAG 2.2는 2.1의 기준을 강화하고 보완하여 다양한 사용자, 특히 더 많은 장애 유형과 상황을 고려한 접근성을 제공합니다.<br />
      			또한 KWCAG 2.1은 KWCAG 2.0에 비해 모바일 접근성과 사용자 경험을 개선하는 데 중점을 두었으며,
      			KWCAG 2.2는 이를 기반으로 더 많은 사용자 요구사항과 최신 기술 발전을 반영하여 접근성을 한층 더 강화하였습니다.
      		</p>

      		<figure className="img_figure mt_l">
      			<img src={`${IMG.A11Y}/kwcag2.1_vs_kwcag2.2.png`} alt="kwcag 2.1 vs kwcag2.2" />
      			<figcaption>
      				kwcag 2.1 vs kwcag 2.2 비교
      			</figcaption>
      		</figure>
      		<figure className="img_figure mt_l">
      			<img src={`${IMG.A11Y}/kwcag2.1_vs_kwcag2.2_mo.png`} alt="kwcag 2.1 vs kwcag2.2" />
      			<figcaption>
      				kwcag 2.1 vs kwcag 2.2
      			</figcaption>
      		</figure>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">4.2.6. 용어 정의</h2>

      		<ol className="mt_l ol_lst info_lst gap-column-important-m">
      			<li className="weight-600-before t_black_before">
      				<strong>건너뛰기 링크</strong>
      				<p>
      					반복 영역의 순차적인 내비게이션을 생략하고 웹 페이지의 핵심 영역으로 이동할 수 있는 수단(버튼, 텍스트 링크 등)을 의미합니다.
      				</p>
      			</li>
      			

      			<li className="weight-600-before t_black_before">
      				<strong>고대비 모드(high contrast)</strong>
      				<p>
      					고대비 모드란 전경과 배경 간의 명도 대비를 강조하여 표시하는 것으로,
      					해당 항목을 보다 뚜렷하게 식별할 수 있도록 도와줍니다.
      					또한 검정색 배경에 하얀색으로 텍스트를 표시하는 경우와 같이 명도 대비
      					또는 색대비가 큰 차이가 나도록 조정하여 화면에 표시하는 방식을 경조(硬調) 모드라고 하며,
      					최신 운영체제에서는 기본적으로 이 기능을 지원하고 있습니다.
      				</p>
      			</li>
      			

      			<li className="weight-600-before t_black_before">
      				<strong>공백 문자(blank text)</strong>
      				<p>
      					아무런 정보도 가지고 있지 않은 문자열을 의미합니다.
      					HTML(Hyper Text Markup Language) 등의 문법에서 공백 문자는 “”을 나타냅니다.
      					공백 문자를 화면 낭독 프로그램(screen reader)을 사용하여 읽으면 아무런 소리도 나지 않습니다.
      				</p>
      			</li>
      			

      			<li className="weight-600-before t_black_before">
      				<strong>광과민성 증후</strong>
      				<p>
      					빛의 깜빡거림에 의해 발작을 일으키는 증상을 말합니다.
      					주로 초당 3 회~50 회 주기의 번쩍거림이 광과민성 발작을 일으키는 원인이 되며,
      					초당 20 회 부근의 번쩍거림이 발작을 가장 잘 일으키는 주파수로 알려져 있습니다.
      				</p>
      			</li>
      			

      			<li className="weight-600-before t_black_before">
      				<strong>대체 수단</strong>
      				<p>
      					멀티미디어 콘텐츠에 포함된 음성(대화)을 대체하기 위한 콘텐츠로, 자막, 구술된 내용을 글로 옮긴 대본(transcript),
      					수화(sign language) 등이 있습니다. 여기서 자막과 대본은 텍스트 콘텐츠이며, 수화는 미디어 형식의 대체 콘텐츠입니다.
      				</p>
      			</li>
      			

      			<li className="weight-600-before t_black_before">
      				<strong>대체 콘텐츠(alternative content)</strong>
      				<p>
      					텍스트 콘텐츠를 오디오, 비디오 또는 오디오-비디오 형식으로 변환하여 제공하는 미디어 콘텐츠를 말합니다.
      					예를 들어, 어떤 텍스트를 수화로 번역하여 제공하는 비디오 파일은 대체 콘텐츠라고 할 수 있습니다.
      				</p>
      			</li>
      			

      			<li className="weight-600-before t_black_before">
      				<strong>대체 텍스트(alternativetext)</strong>
      				<p>
      					텍스트 아닌 콘텐츠를 대신하기 위해 제공되는 등가의 텍스트를 의미합니다.
      					동영상의 경우에는 6.2 절 멀티미디어 대체 수단에서 제시하는 대체 수단을 제공합니다.
      				</p>
      			</li>
      			

      			<li className="weight-600-before t_black_before">
      				<strong>드롭다운 메뉴(drop-down menu)</strong>
      				<p>
      					여러 개의 항목을 포함하고 있는 목록에서 하나의 항목만 보이다가 사용자가 메뉴 확장 버튼을 활성화시키면
      					나머지 목록의 전부 또는 일부가 아래로 펼쳐져 나타나는 방식의 사용자 입력 컨트롤을 의미합니다.
      					콤보상자(combo box)라고도 합니다.
      				</p>
      			</li>
      			

      			<li className="weight-600-before t_black_before">
      				<strong>레이블(label)</strong>
      				<p>
      					모든 사용자 입력(예 : 텍스트 입력 상자, 라디오 버튼, 체크 상자, 드롭다운 메뉴 등)의 용도 또는 역할에 대한 설명을 레이블이라 합니다.
      				</p>
      			</li>
      			

      			<li className="weight-600-before t_black_before">
      				<strong>레이어 팝업 콘텐츠(layer popup content)</strong>
      				<p>
      					팝업 창 차단 기능이 있는 브라우저에서 시각적으로 팝업 창과 같은 효과를 내도록 구현한 콘텐츠를 말합니다.
      					레이어 팝업 콘텐츠는 같은 페이지의 일부 영역을 가리고 그 위에 표시되므로
      					그 뒤의 콘텐츠를 보기 위해서는 반드시 레이어 팝업을 화면에서 사라지도록 해야 합니다.
      					레이어 팝업은 웹 페이지에 포함되는 콘텐츠이므로
      					7.1.2 절(초점 이동)과 8.3.1 절(콘텐츠의 선형 구조)을 위반하지 않도록 구현해야 합니다.
      				</p>
      			</li>
      			

      			<li className="weight-600-before t_black_before">
      				<strong>마우스 오버(mouse-over)</strong>
      				<p>
      					웹 페이지 안의 어떤 요소에 마우스 포인터를 올려놓았지만 마우스 버튼을 누르지 않은 상태를 지칭합니다.
      					따라서 마우스 오버는 해당 요소를 선택만 하고 활성화 하지 않은 상태를 의미합니다.
      				</p>
      			</li>
      			

      			<li className="weight-600-before t_black_before">
      				<strong>마우스 클릭</strong>
      				<p>
      					마우스 포인터를 특정 객체나 요소를 가리킨 다음 마우스의 버튼을 누르는 행위를 뜻합니다.
      					마우스 클릭 이벤트가 발생하면 보통은 해당 객체가 활성화되어 어떤 동작이나 기능을 실행하며, 종종 맥락의 변화가 있기도 합니다.
      				</p>
      			</li>
      			

      			<li className="weight-600-before t_black_before">
      				<strong>마크업 언어(markup language)</strong>
      				<p>
      					마크업 언어는 텍스트의 각 부분에 의미를 나타내는 정보를 기술할 수 있도록 정의한 프로그래밍 언어를 말합니다.
      					HTML, 확장 마크업 언어(XML : eXtensible Markup Language) 등이 이에 해당합니다.
      				</p>
      			</li>
      			

      			<li className="weight-600-before t_black_before">
      				<strong>멀티미디어(multimedia)</strong>
      				<p>
      					시간의 변화에 따른 정보를 제공하기 위하여 오디오 또는 비디오 콘텐츠를 또 다른 포맷과
      					동기화하여 제공하도록 만들어진 콘텐츠 또는 콘텐츠 재생 과정의 특정 시점에서 사용자와의 상호작용이 필요한 매체를 말합니다.
      				</p>
      			</li>
      			

      			<li className="weight-600-before t_black_before">
      				<strong>명도 대비</strong>
      				<p>
      					색의 밝고 어두운 정도를 말합니다.
      				</p>
      			</li>
      			

      			<li className="weight-600-before t_black_before">
      				<strong>반복 영역(repetitive block)</strong>
      				<p>
      					반복되는 영역, 메뉴, 링크 모음과 같이 동일한 내용이 같은 위치에 여러 웹 페이지에 걸쳐 나타나는 영역을 의미합니다.
      					글로벌 내비게이션(global navigation)도 반복 영역의 하나입니다.
      					모든 페이지에 걸쳐 존재하는 광고 영역 등도 그 내용의 다름 여부와 관계없이 반복 영역으로 간주됩니다.
      				</p>
      			</li>
      			

      			<li className="weight-600-before t_black_before">
      				<strong>배경 이미지</strong>
      				<p>
      					배경 이미지란 콘텐츠의 배경을 장식하기 위하여 사용되는 이미지를 의미합니다.
      					따라서 배경 이미지는 제거하더라도 콘텐츠의 이해와 사용에 아무런 영향을 주지 않아야 합니다.
      					배경 이미지를 제거하는 경우 콘텐츠의 이해가 불가능하거나 사용이 어려운 콘텐츠는
      					배경 이미지가 의미하는 정보를 보조 기술로 전달하도록 구현해야 합니다.
      				</p>
      			</li>
      			

      			<li className="weight-600-before t_black_before">
      				<strong>배치용 테이블(layout table)</strong>
      				<p>
      					제목 행과 제목 열이 있는 데이터용 테이블(data table)과는 달리, 콘텐츠 블록을 원하는 크기와 형태로 배치하기 위하여
      					사용한 테이블을 말한다. 배치용 테이블은 제목 행, 제목 열 및 표 제목이 없습니다.
      				</p>
      			</li>
      			

      			<li className="weight-600-before t_black_before">
      				<strong>보조 기술(assistive technology)</strong>
      				<p>
      					장애를 지닌 사용자의 요구 조건을 만족시키는 기능을 추가하여 제공하는 하드웨어 또는 소프트웨어를 의미합니다.
      					대표적으로 화면 낭독 프로그램(screen reader), 화면 확대 프로그램, 특수 키보드 등을 들 수 있습니다.
      					보조 기술은 보조 공학(기기) 또는 보조 기기라고도 합니다.
      				</p>
      			</li>
      			

      			<li className="weight-600-before t_black_before">
      				<strong>새 창, 팝업 창</strong>
      				<p>
      					새로운 페이지를 보여주기 위해 현재의 창이 아닌 별도의 창 또는 탭으로 열리는 경우, 이를 새 창이라고 합니다.
      					단, 스크립트 언어의 고유한 기능이나 플랫폼에 의해 생성되는 경고(alert), 확인(confirm),
      					입력 프롬프트(prompt) 등의 메시지 대화상자(dialog box)는 새 창이나 팝업 창의 범주에 포함되지 않습니다.
      					여기서 팝업 창은 웹 페이지가 로드될 때 자동으로 열리는 새 창을 의미합니다.
      				</p>
      			</li>
      			

      			<li className="weight-600-before t_black_before">
      				<strong>스타일 시트(style sheet)</strong>
      				<p>
      					문서의 표현 형태를 규정하는 일련의 명령문을 의미합니다.
      					스타일 시트는 콘텐츠 제공자가 마련한 것, 사용자가 마련한 것, 웹 브라우저에 내장된 형태 등의 세 가지가 있습니다.
      					예를 들어 W3C의 종속형 시트(CSS : Cascading Style Sheets) 레벨 2, 3 등이 스타일 시트의 대표적인 표준 규격입니다.
      				</p>
      			</li>
      			

      			<li className="weight-600-before t_black_before">
      				<strong>시간제한이 있는 콘텐츠</strong>
      				<p>
      					시간을 통제할 수 없도록 구현된 콘텐츠를 말합니다.<br />
      					<b>시간제한이 있는 콘텐츠의 예시</b>
      				</p>
      				<ul className="dot_lst indent">
      					<li>자동 갱신되도록 구성된 콘텐츠</li>
      					<li>몇 초 후에 다른 페이지로 이동하도록 구성된 콘텐츠</li>
      					<li>자동적으로 스크롤되는 콘텐츠</li>
      					<li>짧은 기간 동안 나타났다 일정시간 후에 자동적으로 사라지는 대화상자(dialog box), 팝업 창, 레이어 팝업 등</li>
      					<li>일정시간 동안 사용하지 않으면 웹 페이지에 대한 접근이 강제로 차단되거나 사용할 수 없게 되는 콘텐츠</li>
      				</ul>
      			</li>
      			

      			<li className="weight-600-before t_black_before">
      				<strong>온라인 서식(online form)</strong>
      				<p>
      					온라인 서식은 사용자의 입력을 통해 값을 수정하여 전달할 수 있는 여러 가지
      					컨트롤(예 : 텍스트 입력 상자, 드롭다운 선택 메뉴, 라디오 버튼, 누르는 버튼 등)과 그것의 레이블로 구성된 콘텐츠를 말합니다.
      				</p>
      			</li>
      			

      			<li className="weight-600-before t_black_before">
      				<strong>웹 애플리케이션</strong>
      				<p>
      					웹 콘텐츠에 포함되어 특정한 기능을 수행하도록 구성된 소프트웨어의 일종으로,
      					리치 인터넷 애플리케이션(RIA : Rich Internet Application)이라고도 합니다.
      				</p>
      			</li>
      			

      			<li className="weight-600-before t_black_before">
      				<strong>위치 지정 도구(pointing device)</strong>
      				<p>
      					마우스나 터치패드 및 터치스크린과 같이 컴퓨터 화면의 특정 지점을 직접 지정할 수 있는 장치를 의미합니다.
      					터치스크린을 채용한 기기에서는 끝이 뭉툭한 손가락으로도 컨트롤을 선택하거나
      					활성화 시킬 수 있어야 하므로 조작이 가능한 크기로 컨트롤이 제공되어야 합니다.
      				</p>
      			</li>
      			

      			<li className="weight-600-before t_black_before">
      				<strong>음성 입력장치</strong>
      				<p>
      					음성으로 컴퓨터를 제어하거나 텍스트를 입력할 수 있도록 구성된 시스템 또는 이러한 시스템을 구성하는 데 사용되는 프로그램을 의미합니다.
      				</p>
      			</li>
      			

      			<li className="weight-600-before t_black_before">
      				<strong>자막(captions)</strong>
      				<p>
      					영상 매체에 포함된 말, 음향 및 주변 소리 등을 텍스트로 표현한 매체를 의미합니다.
      					자막은 영상 매체의 진행에 따라 해당 이벤트와 동기화되어야 합니다.
      					자막은 크게 폐쇄 자막(closed caption)과 개방 자막(open caption)으로 구분됩니다.
      					폐쇄 자막은 사용자의 필요에 따라 자막을 끄거나 켤 수 있는 데 반해,
      					개방 자막은 비디오 콘텐츠에 캡션 정보가 함께 녹화되어 있으므로 사용자가 임의로 자막을 끄거나 켤 수 없습니다.
      					장식을 위한 글자정보 제공이나 콘텐츠 이용에 필요한 기능과는 무관하게 웹 페이지의 시각적인 표현만을 위해 사용된 콘텐츠의 글자를 말합니다.
      					로고 등이 이에 해당됩니다.
      				</p>
      			</li>
      			

      			<li className="weight-600-before t_black_before">
      				<strong>적절한 제목(appropriate title)</strong>
      				<p>
      					콘텐츠의 내용을 쉽게 파악할 수 있도록 해당 주제나 목적을 간단 명료하게 표현한 명칭을 의미합니다.
      				</p>
      			</li>
      			

      			<li className="weight-600-before t_black_before">
      				<strong>접근성 프로그래밍 인터페이스(accessibility programming interface)</strong>
      				<p>
      					운영체제 또는 플랫폼은 응용 프로그램과 보조 기술 간의 정보 전달 방법에 관한
      					프로그램 인터페이스(programming interface)를 제공합니다.
      					예를 들어 Windows 환경의 MSAA, UI Automation, IAccessible2, MacOSX 환경의 AXAPI,
      					Gnome 환경의 Gnome Accessibility Toolkit API, Java 플랫폼의 Java Access API 등입니다.
      					웹 애플리케이션을 접근성 프로그래밍 인터페이스를 이용하여 구현하면 보조 기술과 호환성이 유지됩니다.
      				</p>
      			</li>
      			

      			<li className="weight-600-before t_black_before">
      				<strong>초점(focus)</strong>
      				<p>
      					웹 페이지 안에서 프로그램에 의해 또는 사용자의 행위(예 : 탭(tab) 키를 이용한 이동)에 의해 어떤 요소(element)가
      					선택되었을 경우에 초점이 그 요소에 있다고 말합니다.
      					또한 어떤 요소가 선택되었다는 것은 그 요소가 사용 가능 상태임을 의미합니다.
      					대부분의 응용 소프트웨어(웹 브라우저 포함)에서 초점을 받은 요소는 다른 요소와 구분할 수 있게 밑줄을 보이게 하거나,
      					테두리를 씌우거나 또는 색을 변경하는 등 시각적으로 구별할 수 있는 기능을 제공합니다.
      				</p>
      			</li>
      			

      			<li className="weight-600-before t_black_before">
      				<strong>콘텐츠 블록(content block)</strong>
      				<p>
      					특정 내용에 관해 설명하거나 기술하고 있는 정보의 묶음 또는 영역을 의미하며,
      					일반적으로 하나의 주제를 설명 또는 기술하고 있는 장(chapter)이나 절(section) 등을 들 수 있습니다.
      				</p>
      			</li>
      			

      			<li className="weight-600-before t_black_before">
      				<strong>콘텐츠의 선형 구조</strong>
      				<p>
      					웹 페이지의 모든 콘텐츠는 시각적인 2 차원 공간의 상하좌우로 배치되어 있어서 원하는 곳을 바로 찾아가거나
      					그 기능을 바로 선택하여 실행할 수 있습니다.
      					그러나 화면 낭독 프로그램 사용자는 모든 콘텐츠를 순차적으로 접근할 수 있기 때문에 시각적인 배치가 아닌 읽어주는 순서가 중요합니다.
      					여기서 콘텐츠가 보조 기술로 제공되는 순서를 콘텐츠의 선형 구조라고 하며 이 구조는 논리적이어야 합니다.
      					마크업 언어로 제작된 콘텐츠의 선형 구조는 스타일 시트와 테이블 구조들을 제거하면 얻을 수 있습니다.
      				</p>
      			</li>
      			

      			<li className="weight-600-before t_black_before">
      				<strong>키보드(keyboard)</strong>
      				<p>
      					사용자가 텍스트를 입력하기 위하여 사용하는 입력장치를 의미합니다.
      					여기에는 키보드의 자판입력을 해독하기 위하여 사용되는 소프트웨어도 포함됩니다.
      					예를 들어, 키보드의 형태를 가지지 않았지만 기능적으로 키보드를 대신하는
      					입력장치(예 : 노트북 및 개인 휴대 정보 단말기(PDA : Personal Digital Assistant) 등의 터치패드, 음성 입력장치 등)
      					등도 키보드로 간주합니다.
      					위치 지정 도구와 화면 키보드 프로그램을 조합한 가상 키보드 입력 장치와 스마트폰과 태블릿 기기의 키보드 입력
      					프로그램도 키보드의 일종으로 간주합니다.
      				</p>
      			</li>
      			

      			<li className="weight-600-before t_black_before">
      				<strong>텍스트 아닌 콘텐츠(non-text content)</strong>
      				<p>
      					그림, 이미지 등으로 제작된 텍스트, 애니메이션, 아스키(ASCII) 그림문자, 불릿(bullet) 이미지, 그래픽 버튼,
      					이모티콘, 릿스피크(leetspeak) 등과 같이 표준 문자(부호) 체계가 아닌 시각적 또는 청각적 정보가 포함된 콘텐츠를 의미합니다.
      					한글 부호의 경우, 유니코드, 조합형 또는 완성형 부호 체계를 사용하여 작성된 텍스트 이외의 모든 경우를 포함합니다.
      				</p>
      			</li>
      			

      			<li className="weight-600-before t_black_before">
      				<strong>풀다운 메뉴(pull-down menu)</strong>
      				<p>
      					메뉴 바(menu bar)에서 특정 항목을 선택(마우스 오버, 키보드를 이용한 초점)하거나,
      					활성화(마우스 클릭 또는 엔터키의 누름 등)되면 선택한 메뉴 항목의 아래쪽으로 하위 메뉴 항목들이 펼쳐져 나타나는 방식의 메뉴를 말합니다.
      				</p>
      			</li>
      			

      			<li className="weight-600-before t_black_before">
      				<strong>플러그인(plug-in)</strong>
      				<p>
      					어떤 응용 프로그램에 추가되어 특정한 기능을 수행하도록 구현한 프로그램 모듈로,
      					웹 브라우저에서 사용되는 플래시 플레이어(Flash Player), 실버라이트 플레이어(Microsoft Silverlight Player),
      					검색기(search engine) 및 자바 플러그인(Java plug-in) 등이 이에 해당합니다.
      				</p>
      			</li>
      			

      			<li className="weight-600-before t_black_before">
      				<strong>핵심 영역</strong>
      				<p>
      					웹페이지의 핵심이 되는 주제 또는 콘텐츠를 담고 있는 영역으로, 웹페이지별로 사용자에게 전달하고 싶은 핵심 주제를 담고 있는
      					콘텐츠가 위치한 영역을 의미합니다. 예를 들어 뉴스 포털의 경우에 헤드라인 뉴스가 위치한 곳을 핵심 영역이라고 할 수 있습니다.
      				</p>
      			</li>
      			
      		</ol>
      	</section>
      	

      	<footer className="reference_box">
      		<strong className="tit">한국형 웹 콘텐츠 접근성 | 접근성 가이드라인 참조</strong>
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
      		</ul>
      	</footer>

    </>
  )
}

export default KwcagPage
