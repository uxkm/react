import { useAccessibilityPageMeta } from '@/hooks/useAccessibilityPageMeta.js'
import { IMG } from '@/config/path'

const PAGE_LAYOUT = {
  mainClass: "a11yGuideline",
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
  title: "장애인차별금지법 관련 지침",
  description: "장애인차별금지법은 장애인의 권리를 보호하고 차별을 금지하는 법률입니다. 이 법은 모든 분야에서 장애인에게 공정한 기회를 제공하며, 사회적 통합을 증진시키기 위해 중요한 역할을 합니다. 이 페이지에서는 장애인차별금지법의 개요와 권리 보호 방법, 그리고 사회적 차별을 예방하기 위한 전략을 소개합니다.",
  keyword: "Accessibility, a11y, wcag, kwcag, macag, kiosk, 접근성, 웹 콘텐츠 접근성, 한국형 웹 콘텐츠 접근성, 모바일 앱 접근성, 무인정보단밀기 접근성",
}

function A11yGuidelinePage() {
  useAccessibilityPageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  })


  return (
    <>









      	<blockquote className="uk_note mt_xxl" role="note">
      		<strong className="sound_only">요약 설명</strong>
      		<p>
      			장애인 차별 금지법과 관련한 지침에는 국제 표준과 국내 기준이 있습니다.
      			여기서 국제 표준은 주로 <b className="t_black">유엔 장애인 권리 협약</b>(<b className="t_black">UNCRPD</b> - The <i className="t_black">U</i>nited <i className="t_black">N</i>ations <i className="t_black">C</i>onvention on the <i className="t_black">R</i>ights of <i className="t_black">P</i>ersons with <i className="t_black">D</i>isabilities)에 기반을 두고 있으며,
      			국내 기준은 장애인차별금지 및 권리구제 등에 관한 법률(장차법)에 의해 규정됩니다.<br />
      			장애인차별금지법 및 관련 지침은 장애가 있는 사람들이 웹 사이트 및 모바일 애플리케이션을 포함한 디지털 리소스에 대한
      			접근성을 보장하기 위한 법적 기준을 제공합니다.
      			각국 또는 지역마다 이러한 법적 요구 사항은 다를 수 있으며,
      			<b className="t_black">웹 콘텐츠 접근성 지침</b>(<b className="t_black">WCAG</b> - <i className="t_black">W</i>eb <i className="t_black">C</i>ontent <i className="t_black">A</i>ccessibility <i className="t_black">G</i>uidelines)과 같은 국제 표준에 기반을 둔 경우가 많습니다.
      		</p>
      		<p className="mt_ms">
      			국제표준, 국내 기준 모두 장애인의 권리와 차별 금지를 강조하고 있으며,
      			장애인이 사회의 평등한 구성원으로서 존중받고 차별 없이 살아갈 수 있도록 다양한 조치를 제시합니다.
      			이러한 조치는 장애인의 삶의 질 향상은 물론, 사회 전체의 포괄성과 다양성을 증진시키는 데 기여합니다.<br />
      			결국, 국제표준과 국내 기준은 장애인의 권리를 보호하고 촉진하는 것을 넘어, 보다 포괄적이고 평등한 사회를 향한 지속적인 노력의 일환입니다.
      			이를 통해 장애인 개인은 물론, 사회 전체가 보다 포괄적이고 다양성을 존중하는 방향으로 발전할 수 있습니다.
      		</p>
      	</blockquote>

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">2.1. 국제표준</h2>
      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				유엔 장애인 권리 협약은 장애인의 인권과 기본 자유를 보호하고 촉진하기 위해 2006년에 채택된 국제 법적 구속력이 있는 조약입니다.
      				이 협약은 장애인이 사회의 모든 분야에서 완전하고 효과적으로 참여할 수 있도록 보장하는 것을 목표로 합니다.
      			</p>
      		</blockquote>
      		<dl className="dl_lst mt_l">
      			<dt className="t_blue">유엔 장애인 권리 협약의 주요 내용은 다음과 같습니다.</dt>
      			<dd className="mt_m">
      				<ol className="ol_lst info_lst gap-column-m">
      					<li className="weight-600-before t_blue_before">
      						<strong className="mb_0 t_blue">평등성</strong>
      						<p>
      							모든 인간의 존엄성, 자율성을 포함한 개인의 권리, 인권의 불가분성을 인정합니다.
      						</p>
      					</li>
      					<li className="weight-600-before t_blue_before">
      						<strong className="mb_0 t_blue">차별 금지</strong>
      						<p>
      							장애를 이유로 한 모든 형태의 차별을 금지하고, 장애인에게 법적 보호를 제공합니다.
      						</p>
      					</li>
      					<li className="weight-600-before t_blue_before">
      						<strong className="mb_0 t_blue">포괄적 접근성</strong>
      						<p>
      							물리적 환경, 교통, 정보 및 커뮤니케이션 기술, 그리고 서비스에 대한 접근성을 증진시킵니다.
      						</p>
      					</li>
      					<li className="weight-600-before t_blue_before">
      						<strong className="mb_0 t_blue">평등한 기회</strong>
      						<p>
      							교육, 고용, 보건, 사회 보호 등에서 장애인의 참여와 평등한 기회를 보장합니다.
      						</p>
      					</li>
      				</ol>
      			</dd>
      		</dl>
      		<p className="mt_l">
      			위 협약의 내용은
      			국가들이 장애인 권리의 보호와 촉진을 위한 정책을 수립하고 실행할 법적 의무를 가지게 합니다.
      			이는 회원국들이 장애인이 교육, 고용, 건강, 정보 접근성 등 사회의 모든 영역에서 차별받지 않고 포괄적으로 참여할 수 있도록 보장해야 한다는 의미입니다.
      		</p>
      		<figure className="img_figure mt_l">
      			<img src={`${IMG.A11Y}/2_a11y01.png`} alt="해외 웹 접근성 법률 및 제도" className="max-w650" />
      			<figcaption>[출처] https://seulbinim.github.io/WSA/accessibility.html#장애인-차별-금지-및-권리-구제-등에-관한-법률의-이해</figcaption>
      		</figure>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">2.2. 국내 기준</h2>
      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				장애인차별금지 및 권리구제 등에 관한 법률(이하 '<b className="t_black">장차법</b>')은 2007년에 제정되어
      				장애인이 사회의 모든 영역에서 차별받지 않고 동등하게 참여할 수 있도록 보장합니다.
      			</p>
      		</blockquote>
      		<dl className="dl_lst mt_l">
      			<dt className="t_blue">장차법의 주요 내용은 다음과 같습니다.</dt>
      			<dd className="mt_m">
      				<ol className="ol_lst info_lst gap-column-m">
      					<li className="weight-600-before t_blue_before">
      						<strong className="mb_0 t_blue">차별의 금지</strong>
      						<p>
      							직접적, 간접적 차별을 포함한 모든 형태의 장애인 차별을 금지합니다.
      						</p>
      					</li>
      					<li className="weight-600-before t_blue_before">
      						<strong className="mb_0 t_blue">합리적 편의 제공</strong>
      						<p>
      							장애인이 사회적, 경제적 활동에 동등하게 참여할 수 있도록 필요한 편의를 제공합니다.
      						</p>
      					</li>
      					<li className="weight-600-before t_blue_before">
      						<strong className="mb_0 t_blue">권리구제 절차</strong>
      						<p>
      							차별을 경험한 장애인이 구제를 받을 수 있도록 절차를 마련하고 있으며, 장애인권익옹호기관을 통해 지원받을 수 있습니다.
      						</p>
      					</li>
      					<li className="weight-600-before t_blue_before">
      						<strong className="mb_0 t_blue">차별행위의 예방 및 교육</strong>
      						<p>
      							장애인 차별의 예방과 인식 개선을 위한 교육 및 홍보 활동을 강화합니다.
      						</p>
      					</li>
      				</ol>
      			</dd>
      		</dl>
      		<p className="mt_l">
      			국내의 장차법 역시 국제표준과 유사한 원칙을 따르며, 국내 법률 체계 내에서 장애인의 권리를 구체화하고 보호합니다.
      			이 법은 장애인이 겪는 다양한 형태의 차별을 명확히 규정하고,
      			이에 대한 구제 절차를 마련하여 장애인이 실제로 자신의 권리를 주장하고 보호받을 수 있는 수단을 제공합니다.<br />
      			또한, 이러한 기준과 법률은 단순히 금지와 지침을 넘어서, 사회적 인식의 변화와 교육을 통해 장애인에 대한 편견을 줄이고,
      			모두가 존중받는 사회를 만들기 위한 노력을 강조합니다.
      			이는 장애인뿐만 아니라 사회 전체에 긍정적인 영향을 미치며, 다양성과 포용성이 사회 발전의 중요한 동력이 될 수 있음을 보여줍니다.
      		</p>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">2.2.1. 관련 법률 정책</h3>
      			<ol className="mt_ml ol_lst info_lst gap-column-ms">
      				<li className="weight-600-before t_black_before">
      					<strong>「정보화촉진기본법 제정」 (1995년 08월)</strong>
      				</li>
      				<li className="weight-600-before t_black_before">
      					<strong>「정보격차해소에 관한 법률」제정 (2001년 01월)</strong>
      					<p>
      						2009년 폐지
      					</p>
      				</li>
      				<li className="weight-600-before t_black_before">
      					<strong>「장애인차별금지 및 권리구제 등에 관한 법률」</strong>
      					<p>
      						[시행2008.4.11] [법률 제8341호, 2007.4.10, 제정]
      					</p>
      				</li>
      				<li className="weight-600-before t_black_before">
      					<strong>「국가정보화기본법」제정</strong>
      					<p>
      						[시행2009.8.23] [법률 제9705, 2009.5.22, 전부개] 2020년 폐지
      					</p>
      				</li>
      				<li className="weight-600-before t_black_before">
      					<strong>「장애인·노인·임산부 등의 편의 증진 보장에 관한 법률」</strong>
      					<p>
      						[시행 1998.4.11] [법률 제5332호, 1997.4.10, 제정]
      					</p>
      				</li>
      				<li className="weight-600-before t_black_before">
      					<strong>「장애인차별금지 및 권리구제 등에 관한 법률」제정</strong>
      					<p>
      						[시행 2020. 12. 10.] [법률 제17344호, 2020. 6. 9., 타법개정]
      					</p>
      				</li>
      				<li className="weight-600-before t_black_before">
      					<strong>「지능정보화 기본법」</strong>
      					<p>
      						[시행 2020. 12. 10.] [법률 제17344호, 2020. 6. 9., 전부개정]
      					</p>
      				</li>
      				<li className="weight-600-before t_black_before">
      					<strong>「지능정보화 기본법」</strong>
      					<p>
      						[시행 2022. 7. 21] [법률 제18298호, 2021. 7. 20., 타법개정]
      					</p>
      				</li>
      				<li className="weight-600-before t_black_before">
      					<strong>「장애인차별금지 및 권리구제 등에 관한 법률」</strong>
      					<p>
      						[시행 2023. 1. 28.] [법률 제18334호, 2021. 7. 27., 일부개정]
      					</p>
      				</li>
      			</ol>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">2.2.2. 관련 표준 지침</h3>
      			<ol className="mt_ml ol_lst info_lst gap-column-ms">
      				<li className="weight-600-before t_black_before">
      					<strong>“한국형 웹 콘텐츠 접근성 지침 1.0” 마련</strong>
      					<p>
      						TTA 단체 표준 제정 (TTAS.OT-10.0003):2004년 12월 23일
      					</p>
      				</li>
      				<li className="weight-600-before t_black_before">
      					<strong>“인터넷 웹 콘텐츠 접근성 지침” 국가표준 승인</strong>
      					<p>
      						한국정보통신표준 (KICS.OT-10.003):2005년 12월 21일
      					</p>
      				</li>
      				<li className="weight-600-before t_black_before">
      					<strong>“웹 접근성 향상을 위한 국가표준 기술 가이드라인” 공표</strong>
      					<p>
      						행정안전부 산하 한국정보문화진흥원(현 한국지능정보사회진흥원) 2009년 03월 17일
      					</p>
      				</li>
      				<li className="weight-600-before t_black_before">
      					<strong>“한국형 웹 콘텐츠 접근성 지침 2.0</strong>
      					<p>
      						TTA 단체 표준 개정 (TTAK.OT-10.0003/R1):2009년 12월 22일
      					</p>
      				</li>
      				<li className="weight-600-before t_black_before">
      					<strong>“한국형 웹 콘텐츠 접근성 지침 2.1</strong>
      					<p>
      						방송통신표준 개정 (KS X OT0003):2015년 03월 31일
      					</p>
      				</li>
      				<li className="weight-600-before t_black_before">
      					<strong>“모바일 애플리케이션 콘텐츠 접근성 지침 2.0” 공표</strong>
      					<p>
      						방송통신표준 제정 (KS X 3253):2016년 10월 20일
      					</p>
      				</li>
      				<li className="weight-600-before t_black_before">
      					<strong>“공공단말기 접근성 가이드라인” 제정</strong>
      					<p>
      						공공단말기 접근성 가이드라인’(KSX 9211:2016)
      					</p>
      				</li>
      				<li className="weight-600-before t_black_before">
      					<strong>“무인정보단말기 접근성 지침” 개정</strong>
      					<p>
      						2022년 2월25일 기존 ‘공공단말기 접근성 가이드라인’(KSX 9211:2016) 표준이 ‘무인정보단말기 접근성 지침’(KSX 9211:2022)로 개정
      					</p>
      				</li>
      				<li className="weight-600-before t_black_before">
      					<strong>“한국형 웹 콘텐츠 접근성 지침 2.2” 개정</strong>
      					<p>
      						방송통신표준 개정 (KS X OT0003):2022년 12월 28일
      					</p>
      				</li>
      			</ol>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">2.2.3. 한국형 웹 콘텐츠 접근성 지침 개정 내역</h3>
      			<ol className="mt_ml ol_lst info_lst gap-column-ms">
      				<li className="weight-600-before t_black_before">
      					<strong>KWCAG 1.0</strong>
      					<ul className="dot_lst">
      						<li><b>구성</b> : 4개 지침, 14개 항목</li>
      						<li><b>특징</b> : HTML 중심</li>
      						<li><b>연도</b> : 2005년 12월(국가표준)</li>
      					</ul>
      				</li>
      				<li className="weight-600-before t_black_before">
      					<strong>KWCAG 2.0</strong>
      					<ul className="dot_lst">
      						<li><b>구성</b> : 4개 원칙, 13개 지침, 22개 검사항목</li>
      						<li><b>특징</b> : HTML, RIA 등 신기술</li>
      						<li><b>연도</b> : 2010년 12월(국가표준)</li>
      					</ul>
      				</li>
      				<li className="weight-600-before t_black_before">
      					<strong>KWCAG 2.1</strong>
      					<ul className="dot_lst">
      						<li><b>구성</b> : 4개 원칙, 13개 지침, 24개 검사항목</li>
      						<li><b>특징</b> : 터치기반 환경 고려</li>
      						<li><b>연도</b> : 2015년 3월(국가표준)</li>
      					</ul>
      				</li>
      				<li className="weight-600-before t_black_before">
      					<strong>KWCAG 2.2</strong>
      					<ul className="dot_lst">
      						<li><b>구성</b> : 4개 원칙, 14개 지침, 33개 검사항목</li>
      						<li><b>특징</b> : 신규 9개 검사항목이 추가</li>
      						<li><b>연도</b> : 2022년 12월(국가표준)</li>
      					</ul>
      				</li>
      			</ol>
      			<p className="mt_ml">
      				월드와이드웹콘소시엄(W3C, World Wide Web Consortium)의 웹 접근성 국제표준 WCAG 2.1(Web Accessibility Guidelines 2.1)이 2018년에 개정됨에 따라,
      				이를 국내표준에 반영하기 위해 작성되었습니다.
      			</p>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn" data-conlist-h4="true">2.2.4. 장애인 차별 금지법(장차법) 단계별 적용 범위</h3>

      			<div className="mt_l indent">
      				<h4 className="ml_mn t_blue">1단계 (2009년 4월 11일)</h4>
      				<ol className="mt_ms ol_lst info_lst gap-column-important-s">
      					<li className="weight-600-before t_black_before">
      						<strong className="mb_0">공공기관</strong>
      						<ul className="dot_lst">
      							<li>공공기관</li>
      						</ul>
      					</li>
      					<li className="weight-600-before t_black_before">
      						<strong className="mb_0">교육기관(책임자)</strong>
      						<ul className="dot_lst">
      							<li>국·공·사립 특수학교</li>
      							<li>특수학급이 설치된 국·공립학교</li>
      							<li>국·공립유치원 중 특수반이 설치된 유치원</li>
      							<li>장애아전담 보육시설</li>
      						</ul>
      					</li>
      					<li className="weight-600-before t_black_before">
      						<strong className="mb_0">의료기관</strong>
      						<ul className="dot_lst">
      							<li>종합병원</li>
      						</ul>
      					</li>
      					<li className="weight-600-before t_black_before">
      						<strong className="mb_0">복지시설</strong>
      						<ul className="dot_lst">
      							<li>사회복지시설(사회복지관 등)</li>
      							<li>장애복지시설(요양 및 재활시설 등)</li>
      						</ul>
      					</li>
      				</ol>
      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn t_blue">2단계 (2010년 4월 11일)</h4>
      				<ol className="mt_ms ol_lst info_lst gap-column-important-s">
      					<li className="weight-600-before t_black_before">
      						<strong className="mb_0">문화예술체육</strong>
      						<ul className="dot_lst">
      							<li>국·공립 문화예술기관</li>
      							<li>국·공립(대학)박물관·미술관</li>
      							<li>국립중앙도서관, 공공도서관</li>
      						</ul>
      					</li>
      				</ol>
      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn t_blue">3단계 (2011년 4월 11일)</h4>
      				<ol className="mt_ms ol_lst info_lst gap-column-important-s">
      					<li className="weight-600-before t_black_before">
      						<strong className="mb_0">교육기관(책임자)</strong>
      						<ul className="dot_lst">
      							<li>국·공립유치원</li>
      							<li>국·공·사립각급학교</li>
      							<li>보육시설 (100인 이상)</li>
      							<li>영재학교 및 영재교육원</li>
      						</ul>
      					</li>
      					<li className="weight-600-before t_black_before">
      						<strong className="mb_0">의료기관</strong>
      						<ul className="dot_lst">
      							<li>일반병원 치과·한방 병원(입원 30인 이상)</li>
      						</ul>
      					</li>
      				</ol>
      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn t_blue">4단계 (2012년 4월 11일)</h4>
      				<ol className="mt_ms ol_lst info_lst gap-column-important-s">
      					<li className="weight-600-before t_black_before">
      						<strong className="mb_0">문화예술체육</strong>
      						<ul className="dot_lst">
      							<li>민간종합공연장</li>
      							<li>사립대학 박물관·미술관</li>
      						</ul>
      					</li>
      				</ol>
      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn t_blue">5단계 (2013년 4월 11일)</h4>
      				<ol className="mt_ms ol_lst info_lst gap-column-important-s">
      					<li className="weight-600-before t_black_before">
      						<strong className="mb_0">교육기관(책임자)</strong>
      						<ul className="dot_lst">
      							<li>사립유치원</li>
      							<li>평생 교육시설, 연수기관</li>
      							<li>직업훈련기관(1,000㎡ 이상)</li>
      							<li>보육시설(100인 이하)</li>
      						</ul>
      					</li>
      					<li className="weight-600-before t_black_before">
      						<strong className="mb_0">의료기관</strong>
      						<ul className="dot_lst">
      							<li>그 외 병원(입원 30인 이하)</li>
      						</ul>
      					</li>
      					<li className="weight-600-before t_black_before">
      						<strong className="mb_0">문화예술체육</strong>
      						<ul className="dot_lst">
      							<li>체육관련 행위자</li>
      						</ul>
      					</li>
      					<li className="weight-600-before t_black_before">
      						<strong className="mb_0">법인</strong>
      						<ul className="dot_lst">
      							<li>모든 법인</li>
      						</ul>
      					</li>
      				</ol>
      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn t_blue">6단계 (2015년 4월 11일)</h4>
      				<ol className="mt_ms ol_lst info_lst gap-column-important-s">
      					<li className="weight-600-before t_black_before">
      						<strong className="mb_0">문화예술체육</strong>
      						<ul className="dot_lst">
      							<li>민간종합공연장 및 소공연장</li>
      							<li>영화상영관 (300석 이상)</li>
      							<li>사립박물관·미술관</li>
      						</ul>
      					</li>
      				</ol>
      			</div>
      			
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">2.2.5. 모바일 앱</h3>
      			<blockquote className="uk_note mt_ml" role="note">
      				<strong className="sound_only">요약 설명</strong>
      				<p>
      					스마트폰, 스마트패드, 스마트워치 등 모바일기기에 탑재되는 응용소프트웨어가 적용 대상이며,
      					이는 3단계로 구분하여, 공공기관부터 우선 시행하고 민간부문은 규모에 따라 순차적으로 시행합니다.<br />
      					단, 해당 업계의 준비기간 등을 고려하여, 개정 법률 적용일 이전 배포된 모바일 앱에 대해서는 적용일로부터 6개월 이내에 규정을 적용합니다.
      				</p>
      			</blockquote>

      			<div className="mt_l indent">
      				<h4 className="ml_mn t_blue">1단계 (2023.07.28 부터)</h4>
      				<p className="mt_s">
      					공공·교육·의료·금융기관, 이동·교통시설 등
      				</p>
      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn t_blue">2단계 (2024.01.28 부터)</h4>
      				<p className="mt_s">
      					문화·예술사업자, 복지시설, 상시 100인 이상 사업
      				</p>
      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn t_blue">3단계 (2024.07.28 부터)</h4>
      				<p className="mt_s">
      					관광사업자, 상시 100인 이상 사업주
      				</p>
      			</div>
      			
      		</article>
      		
      	</section>
      	

      	
      	<footer className="reference_box">
      		<strong className="tit">장애인차별금지법 관련 지침 참조</strong>
      		<ul className="link_lst">
      			<li className="reference"><a href="https://www.law.go.kr/" target="_blank" rel="noreferrer" className="fas">국가법령정보센터</a></li>
      			<li className="reference"><a href="https://tta.or.kr/tta/index.do" target="_blank" rel="noreferrer" className="fas">한국정보통신기술협회</a></li>
      			<li className="reference"><a href="http://www.kwacc.or.kr/Accessibility/Law" target="_blank" rel="noreferrer" className="fas">한국디지털접근성진흥원</a></li>
      			<li className="reference"><a href="https://dpikorea.org/" target="_blank" rel="noreferrer" className="fas">사단법인 한국장애인연맹(DPI)</a></li>
      			<li className="reference"><a href="https://www.kioskui.or.kr/" target="_blank" rel="noreferrer" className="fas">무인정보단말기 UI 플랫폼</a></li>
      		</ul>
      	</footer>

    </>
  )
}

export default A11yGuidelinePage
