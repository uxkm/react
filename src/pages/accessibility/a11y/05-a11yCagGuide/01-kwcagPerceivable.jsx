import { useAccessibilityPageMeta } from '@/hooks/useAccessibilityPageMeta.js'
import { IMG } from '@/config/path'

const PAGE_LAYOUT = {
  mainClass: "kwcagPerceivable",
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
  title: "인식의 용이성(Perceivable) | 접근성 항목별 준수 가이드(웹 콘텐츠 접근성)",
  description: "접근성 항목별 준수 가이드는 웹 콘텐츠 접근성을 보장하기 위한 구체적인 지침을 제공합니다. 이 페이지에서는 웹 콘텐츠 접근성 준수 가이드의 인식의 용이성(Perceivable)에 대해 소개합니다.",
  keyword: "Accessibility, a11y, wcag, kwcag, macag, kiosk, 접근성, 웹 콘텐츠 접근성, 한국형 웹 콘텐츠 접근성, 모바일 앱 접근성, 무인정보단말기 접근성",
}

function KwcagPerceivablePage() {
  useAccessibilityPageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  })


  return (
    <>









      	<blockquote className="uk_note mt_xxl" role="note">
      		<strong className="sound_only">요약 설명</strong>
      		<p>
      			<b>인식의 용이성(Perceivable)</b>은 모든 사용자가 장애 유무 등에 관계없이 웹 사이트에서 제공하는 모든 콘텐츠를
      			동등하게 인식할 수 있도록 제공하는 것을 의미합니다.<br />
      			KWCAG 2.1 인식의 용이성은 대체 텍스트, 멀티미디어 대체 수단, 명료성의 3가지 지침으로 구성되어 있으며,<br />
      			KWCAG 2.2 인식의 용이성은 대체 텍스트, 멀티미디어 대체 수단, 적응성, 명료성의 4가지 지침으로 구성되어 있습니다.
      		</p>
      	</blockquote>

      	<figure className="img_figure mt_l">
      		<img src={`${IMG.A11Y}/5_1_kwcag_perceivable.png`} alt="인식의 용이성" />
      		<figcaption>
      			인식의 용이성
      		</figcaption>
      	</figure>

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">대체 텍스트</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				이미지 등 텍스트 아닌 콘텐츠를 이용할 경우, 그 의미나 용도를 동등하게 인식할 수 있도록 적절한 대체 텍스트를 제공해야 한다. 또한 대체 텍스트는 간단명료하게 제공해야 합니다.<br />
      			</p>
      			<p className="mt_ms reference">
      				WCAG 2.1 부분 참조.<br />
      				<a href="https://www.w3.org/TR/WCAG21/#text-alternatives" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">1.1 Text Alternatives (Level A)</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">적절한 대체 텍스트 제공</h3>

      			<blockquote className="uk_note mt_l" role="note">
      				<strong className="sound_only">요약 설명</strong>
      				<p>
      					텍스트가 아닌 콘텐츠는 그 의미나 용도를 인식할 수 있도록 대체 텍스트를 제공해야 합니다
      				</p>
      				<p className="mt_ms reference">
      					WCAG 2.1 부분 참조.<br />
      					<a href="https://www.w3.org/TR/WCAG21/#non-text-content" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">1.1.1 Non-text Content (Level A)</a>
      				</p>
      			</blockquote>

      			<div className="mt_l indent">
      				<h4 className="ml_mn">대체 텍스트를 제공할 경우</h4>
      				<ol className="mt_m ol_lst info_lst gap-column-important-ms">
      					<li className="t_black_before weight-600-before">
      						<strong>구체적인 정보를 제공해야 하는 경우</strong>
      						<p>
      							이미지 링크, 이미지 버튼 등은 용도가 매우 명확하므로 이미지 링크나 이미지 버튼의 핵심
      							기능에 대한 설명을 간단한 대체 텍스트로 제공해야 합니다.
      						</p>
      					</li>
      					<li className="t_black_before weight-600-before">
      						<strong>의미 있는 배경 이미지</strong>
      						<p>
      							배경 이미지의 의미가 사용자에게 전달되어야 하는 콘텐츠는 그 의미가 보조 기술로 전달되도록 대체 텍스트를 제공해야 합니다.
      						</p>
      					</li>
      					<li className="t_black_before weight-600-before">
      						<strong>충분한 정보가 필요한 경우</strong>
      						<p>
      							데이터 차트와 같이 내용이 복잡한 콘텐츠는 사용자가 해당 콘텐츠의 의미를 충분히 파악할 수 있도록 대체 텍스트를 제공해야 합니다.
      						</p>
      					</li>
      				</ol>
      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">대체 텍스트를 제공하지 않거나 제한적으로 제공할 경우</h4>
      				<ol className="mt_m ol_lst info_lst gap-column-important-ms">
      					<li className="t_black_before weight-600-before">
      						<strong>대체 콘텐츠의 경우</strong>
      						<p>
      							대체 콘텐츠에는 대체 텍스트를 반드시 제공할 필요는 없습니다.<br />
      							예를 들어, 텍스트와 함께 동등한 내용의 수화 동영상을 제공하는 경우, 수화 동영상에는 대체 텍스트를 제공할 필요가 없습니다.
      						</p>
      					</li>
      					<li className="t_black_before weight-600-before">
      						<strong>콘텐츠의 내용을 설명하는 대체 텍스트를 제공할 수 없는 경우</strong>
      						<ul className="dot_lst">
      							<li>
      								생방송 콘텐츠와 같이 그 내용이 지속적으로 변화하여 설명하기 어려운 경우,
      								해당 콘텐츠에 대한 간략한 용도를 알려주는 대체 텍스트를 제공하는 것으로 충분합니다.
      							</li>
      							<li>
      								또한 색맹검사, 청각검사, 시력검사, 받아쓰기 등과 같은 검사 또는 시험의 경우에도
      								콘텐츠의 간략한 용도를 알려주는 대체 텍스트만으로 충분합니다.
      							</li>
      						</ul>
      					</li>
      					<li className="t_black_before weight-600-before">
      						<strong>특정 감각으로만 제공되는 콘텐츠인 경우</strong>
      						<p>
      							플루트 독주나 시각적 예술 작품 등의 경우, 해당 콘텐츠에 대한 간략한 용도를 알려주는 대체 텍스트만으로 충분합니다.
      						</p>
      					</li>
      					<li className="t_black_before weight-600-before">
      						<strong>불필요한 설명을 제공하는 경우</strong>
      						<p>
      							단순히 장식이나 시각적인 형태를 위해 사용되는 콘텐츠의 경우,
      							보조 기술을 통해 해당 설명을 제공받을 때 오히려 혼란을 일으킬 가능성이 있으므로 대체 텍스트로 공백 문자를 제공해야 합니다.
      						</p>
      					</li>
      					<li className="t_black_before weight-600-before">
      						<strong>동일한 정보를 중복해서 제공하는 경우</strong>
      						<p>
      							보조 기술로 동일한 정보가 반복해서 전달되지 않도록 구현하는 것이 바람직합니다.
      						</p>
      					</li>
      				</ol>
      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn t_blue weight-800">기대 효과</h4>
      				<ul className="mt_m dot_lst info_lst gap-column-important-sm">
      					<li>
      						시각 장애 또는 지적 장애 등으로 인해 시각적으로 정보를 습득하는 데 어려움을 겪는 사용자들이
      						화면 낭독 프로그램과 같은 보조 기술을 사용하여 해당 콘텐츠를 음성을 통해 들을 수 있으므로 최소한의 접근권을 보장받을 수 있게 됩니다.
      					</li>
      					<li>
      						사용자들을 위해 텍스트 아닌 콘텐츠를 텍스트로 표시하거나 대체 텍스트를 수화로 번역함으로써 해당 콘텐츠에 접근할 수 있습니다.
      						시청각 중복 장애인들 역시 텍스트 아닌 콘텐츠에 대응하는 대체 텍스트를 점자로 변환하는 보조 기술을 이용하여
      						해당 콘텐츠에 대한 접근권을 보장받을 수 있습니다.
      					</li>
      					<li>
      						콘텐츠에 적절한 대체 텍스트를 제공한 경우 시각으로 제공받는 정보가 불충분하여 사용자가 콘텐츠의 핵심내용을
      						인지할 수 없거나 잘못된 정보를 제공받음으로써 겪게 되는 불필요한 혼동을 줄일 수 있습니다.
      					</li>
      					<li>
      						대체 텍스트를 제공함으로써 텍스트 아닌 콘텐츠에 대한 검색이 가능하게 됩니다.
      					</li>
      					<li>
      						의미가 있는 배경 이미지가 의미하는 대체 텍스트를 보조 기술 사용자가 인지할 수 있어 콘텐츠의 이해와 사용이 가능하게 됩니다.
      					</li>
      				</ul>
      			</div>
      			
      			<figure className="img_figure mt_l">
      				<img src={`${IMG.A11Y}/5_1_kwcag_01.png`} alt="01 대체 텍스트" />
      				<figcaption>
      					인식의 용이성
      				</figcaption>
      			</figure>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">멀티미디어 대체 수단</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				멀티미디어 콘텐츠를 장애인과 비장애인이 동등하게 이용할 수 있도록 하기 위해서는 콘텐츠의 모든 정보를 동일하게 전달하는 것이 중요하며,
      				오디오와 동기화된 폐쇄 자막을 제공하여 대사를 명확하게 전달해야 합니다.<br />
      				대사가 없는 영상의 경우, 텍스트, 오디오, 대본을 통한 해설을 추가해야 합니다.
      				음성만 있는 콘텐츠에도 자막, 대본 또는 수화를 통해 정보를 제공해야 하며,
      				이 모든 보조 자료는 콘텐츠에 포함된 음성의 문맥과 일치해야 합니다.<br />
      			</p>
      			<p className="mt_ms reference">
      				WCAG 2.1 부분 참조.<br />
      				<a href="https://www.w3.org/TR/WCAG21/#time-based-media" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">1.2 Time-based Media</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">자막 제공</h3>

      			<blockquote className="uk_note mt_l" role="note">
      				<strong className="sound_only">요약 설명</strong>
      				<p>
      					멀티미디어 콘텐츠에는 자막, 대본 또는 수어를 제공해야 합니다.
      				</p>
      				<p className="mt_ms reference">
      					WCAG 2.1 부분 참조.<br />
      					<a href="https://www.w3.org/TR/WCAG21/#audio-only-and-video-only-prerecorded" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">1.2.1 Audio-only and Video-only (Prerecorded) (Level A)</a><br />
      					<a href="https://www.w3.org/TR/WCAG21/#captions-prerecorded" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">1.2.2 Captions (Prerecorded) (Level A)</a><br />
      					<a href="https://www.w3.org/TR/WCAG21/#audio-description-or-media-alternative-prerecorded" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">1.2.3 Audio Description or Media Alternative (Prerecorded) (Level A)</a>
      				</p>
      			</blockquote>

      			<div className="mt_l indent">
      				<h4 className="ml_mn">대체 수단</h4>
      				<p className="mt_m">
      					다음 중 한 가지 이상의 대체 수단을 제공해야 합니다.
      				</p>
      				<ol className="mt_m ol_lst info_lst gap-column-important-ms">
      					<li className="t_black_before weight-600-before">
      						<strong>자막 제공</strong>
      						<p>
      							멀티미디어 콘텐츠를 재생시킬 때마다 자동적으로 자막을 화면에 표시할 수 있는 멀티미디어 콘텐츠는 이 검사 항목을 만족하는 것으로 간주할 수 있습니다.<br />
      							자막은 멀티미디어 콘텐츠에 포함된 음성(대사)과 동등해야 하며, 필요에 따라 자막을 여러 벌 제공하고 사용자가 사용하는 자막을 지정할 수 있어야 합니다.
      						</p>
      					</li>
      					<li className="t_black_before weight-600-before">
      						<strong>대본 제공</strong>
      						<p>
      							자막과는 달리 멀티미디어가 재생되는 과정에서 시나리오를 제공하는 경우도 이 검사 항목을 만족하는 것으로 간주합니다.<br />
      							대본은 멀티미디어 콘텐츠에 포함된 음성(대사)과 동등해야 하며, 필요에 따라 대본을 여러 벌 제공하고 사용자가 사용하는 대본을 선택할 수 있어야 합니다.
      						</p>
      					</li>
      					<li className="t_black_before weight-600-before">
      						<strong>수화 제공</strong>
      						<p>
      							비디오 콘텐츠에 수화를 중첩하여 녹화한 콘텐츠도 이 검사 항목을 만족하는 것으로 간주합니다.<br />
      							수화는 멀티미디어 콘텐츠에 포함된 음성(대사)과 동등해야 합니다.
      						</p>
      					</li>
      				</ol>
      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn t_blue weight-800">기대 효과</h4>
      				<ul className="mt_m dot_lst info_lst gap-column-important-sm">
      					<li>
      						청각 장애인은 자막을 통해 음성이나 음향 정보를 쉽게 접근할 수 있습니다.
      						자막은 콘텐츠의 인덱스를 작성하거나 내용을 검색할 때도 유용합니다. 수화를 제공하는 콘텐츠 역시 청각 장애인의 접근을 용이하게 합니다.
      					</li>
      					<li>
      						장애인이 아닌 경우에도 자막이 포함된 영상 매체는 다양한 상황에서 유용하게 활용될 수 있습니다.<br />
      						예를 들어, 자막은 소란한 환경이나 오디오 재생 기능이 없는 환경에서 영상의 내용을 자세히 파악하는 데 도움이 됩니다. 또한, 언어별로 사용자가 자막을 선택할 수 있게 하면 외국어 습득과 같은 언어 능력이나 읽기 능력을 향상시키는 데 도움이 됩니다.
      					</li>
      				</ul>
      			</div>
      			
      			<figure className="img_figure mt_l">
      				<img src={`${IMG.A11Y}/5_1_kwcag_02.png`} alt="02 자막 제공" />
      				<figcaption>
      					인식의 용이성
      				</figcaption>
      			</figure>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">적응성</h2>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">표의 구성</h3>

      			<blockquote className="uk_note mt_l" role="note">
      				<strong className="sound_only">요약 설명</strong>
      				<p>
      					<b className="t_black">표는 이해하기 쉽게 구성해야 합니다.</b><br />
      					표를 제공할 경우, 표의 내용과 구조를 이해할 수 있는 정보를 함께 제공하여 사용자가 표를 예측 가능하게 이용할 수 있어야 합니다.
      				</p>
      			</blockquote>

      			<div className="mt_l indent">
      				<h4 className="ml_mn">고려 사항</h4>
      				<ol className="mt_m ol_lst info_lst gap-column-important-ms">
      					<li className="t_black_before weight-600-before">
      						<strong>표 정보 제공</strong>
      						<p>
      							데이터를 표로 구성할 경우, 표의 내용과 구조를 파악할 수 있도록 표 제목, 열/행 제목 등 이해를 돕는 정보를 제공해야 합니다.
      						</p>
      					</li>
      					<li className="t_black_before weight-600-before">
      						<strong>표의 구성</strong>
      						<p>
      							표의 내비게이션을 위해 제목 셀과 데이터 셀이 구분되도록 구성하여 보조 기술이 셀의 관계를 올바르게 전달할 수 있어야 합니다.
      						</p>
      					</li>
      				</ol>
      			</div>
      			
      			<figure className="img_figure mt_l">
      				<img src={`${IMG.A11Y}/5_1_kwcag_03.png`} alt="03 표의 구성" />
      				<figcaption>
      					인식의 용이성
      				</figcaption>
      			</figure>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">콘텐츠의 선형구조</h3>

      			<blockquote className="uk_note mt_l" role="note">
      				<strong className="sound_only">요약 설명</strong>
      				<p>
      					<b className="t_black">콘텐츠는 논리적인 순서로 제공해야 합니다.</b><br />
      					콘텐츠는 보조 기술 사용자가 맥락을 이해할 수 있도록 논리적인 선형구조를 유지해야 하며, 시각적 배치를 변경하더라도 읽기 순서는 유지되어야 합니다.
      				</p>
      				<p className="reference mt_ms">
      					WCAG 2.1 부분 참조.<br />
      					<a href="https://www.w3.org/TR/WCAG21/#meaningful-sequence" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">1.3.2 Meaningful Sequence (Level A)</a>
      				</p>
      			</blockquote>

      			<div className="mt_l indent">
      				<h4 className="ml_mn">고려 사항</h4>
      				<ol className="mt_m ol_lst info_lst gap-column-important-ms">
      					<li className="t_black_before weight-600-before">
      						<strong>콘텐츠의 선형구조 유지</strong>
      						<p>
      							웹 페이지의 모든 콘텐츠는 사용자가 내용을 이해할 수 있도록 논리적인 순서로 제공되어야 하며, 보조 기술에서도 동일한 의미로 전달되어야 합니다.
      						</p>
      					</li>
      					<li className="t_black_before weight-600-before">
      						<strong>내용, 표현 및 기능 분리</strong>
      						<p>
      							스타일 시트로 화면 배치를 변경하더라도 실제 콘텐츠의 순서는 맥락을 유지해야 하며, 시각적 순서와 읽기 순서가 의미상 충돌하지 않도록 구성해야 합니다.
      						</p>
      					</li>
      				</ol>
      			</div>
      			
      			<figure className="img_figure mt_l">
      				<img src={`${IMG.A11Y}/5_1_kwcag_04.png`} alt="04 콘텐츠의 선형구조" />
      				<figcaption>
      					인식의 용이성
      				</figcaption>
      			</figure>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">명확한 지시 사항 제공</h3>

      			<blockquote className="uk_note mt_l" role="note">
      				<strong className="sound_only">요약 설명</strong>
      				<p>
      					<b className="t_black">지시 사항은 모양, 크기, 위치, 방향, 색, 소리 등에 관계없이 인식될 수 있어야 합니다.</b><br />
      					특정 요소를 가리키거나 지시 사항을 전달하는 콘텐츠는 여러 감각을 통해 인식할 수 있어야 하며,
      					특정 감각(예: 시각이나 청각)에만 의존해서는 안 됩니다.
      					즉, 콘텐츠 사용에 필요한 지시 사항을 여러 가지 감각으로 제공하여 접근성을 높여야 한다는 것을 의미합니다.<br />
      					텍스트 콘텐츠(대체 텍스트 포함)는 보조 기술을 통해 다른 감각으로의 변환이 가능하기 때문에 텍스트 지시 사항에는 추가적인 음성 콘텐츠를 제공할 필요는 없습니다.<br />
      				</p>
      				<p className="reference mt_ms">
      					WCAG 2.1 부분 참조.<br />
      					<a href="https://www.w3.org/TR/WCAG21/#sensory-characteristics" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">1.3.3 Sensory Characteristics (Level A)</a><br />
      				</p>
      			</blockquote>

      			<div className="mt_l indent">
      				<h4 className="ml_mn">고려 사항</h4>
      				<ol className="mt_m ol_lst info_lst gap-column-important-ms">
      					<li className="t_black_before weight-600-before">
      						<strong>색, 크기, 모양 또는 위치와 같은 정보에 대한 인식</strong>
      						<p>
      							웹 콘텐츠는 사용자가 색, 크기, 모양, 위치에 대한 정보를 인식하지 못하더라도 원하는 콘텐츠에 접근할 수 있도록 제작되어야 합니다.<br />
      							예를 들어, &quot;동그란 버튼&quot;이나 &quot;오른쪽 버튼&quot;을 누르라는 지시가 있을 때, 시각 장애를 가진 사용자는 대체 텍스트가 없으면
      							해당 버튼을 인식할 수 없습니다.
      							따라서 지칭하는 요소의 실제 명칭이나 대체 텍스트를 사용해야 하며,
      							불가피하게 시각적 정보를 사용할 경우 이를 보완할 수 있는 다른 감각적 정보를 함께 제공해야 합니다.
      						</p>
      					</li>
      					<li className="t_black_before weight-600-before">
      						<strong>음성이나 음향 정보의 인식</strong>
      						<p>
      							사용자에게 음성이나 음향을 통해 지시 사항을 전달할 때, 소리를 들을 수 없는 사용자도 지시 사항을 인식할 수 있어야 합니다.<br />
      							예를 들어, 온라인 시험 중 비프 음으로 정답과 오답을 알리는 경우, 청각 장애 사용자나 스피커가 없는 환경에서는 이를 확인할 수 없습니다.
      							따라서 비프 음과 함께 정답과 오답 여부를 시각적으로 확인할 수 있는 방법을 제공하면, 더 많은 사용자가 지시 사항을 인지할 수 있습니다.
      						</p>
      					</li>
      				</ol>
      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn t_blue weight-800">기대 효과</h4>
      				<p className="mt_m">
      					시각 장애인은 콘텐츠의 모양이나 위치에 의한 정보를 이해할 수 없기 때문에, 추가적인 정보를 제공하면 콘텐츠를 더 쉽게 이용할 수 있습니다.
      				</p>
      			</div>
      			
      			<figure className="img_figure mt_l">
      				<img src={`${IMG.A11Y}/5_1_kwcag_05.png`} alt="05 명확한 지시 사항 제공" />
      				<figcaption>
      					인식의 용이성
      				</figcaption>
      			</figure>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">명료성</h2>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">색에 무관한 콘텐츠 인식</h3>

      			<blockquote className="uk_note mt_l" role="note">
      				<strong className="sound_only">요약 설명</strong>
      				<p>
      					<b className="t_black">콘텐츠는 색에 관계없이 인식될 수 있어야 합니다.</b><br />
      					콘텐츠에서 제공하는 모든 정보는 특정한 색을 구별할 수 없는 사용자,
      					흑백 디스플레이 사용자, 흑백 인쇄물을 보는 사용자 및 고대비 모드 사용자가 인식할 수 있도록 제공해야 합니다.<br />
      				</p>
      				<p className="reference mt_ms">
      					WCAG 2.1 부분 참조.<br />
      					<a href="https://www.w3.org/TR/WCAG21/#info-and-relationships" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">1.3.1 Info and relationships (Level A)</a><br />
      					<a href="https://www.w3.org/TR/WCAG21/#use-of-color" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">1.4.1 Use of Color (Level A)</a>
      				</p>
      			</blockquote>

      			<div className="mt_l indent">
      				<h4 className="ml_mn">고려 사항</h4>
      				<ol className="mt_m ol_lst info_lst gap-column-important-ms">
      					<li className="t_black_before weight-600-before">
      						<strong>색에 의한 정보 표현 방지</strong>
      						<p>
      							차트나 그래프를 고대비 모드로 표시하면 모든 색이 단색(회색조)으로 나타나 사용자가 색을 구분하기 어려울 수 있습니다.
      							따라서 경조 모드에서도 사용자가 콘텐츠를 쉽게 인식할 수 있도록 색을 이용하여 정보를 전달하지 않도록 해야 합니다.
      							색은 시각적인 강조를 위해서만 사용해야 합니다.
      						</p>
      					</li>
      					<li className="t_black_before weight-600-before">
      						<strong>무늬를 이용한 정보 제공</strong>
      						<p>
      							서로 다른 정보를 무늬로 구분하여 표시하면, 경조 모드 사용자, 단색 디스플레이 사용자,
      							흑백 인쇄물을 사용하는 사용자도 정보를 쉽게 구분할 수 있습니다.
      							무늬와 색을 동시에 이용한 콘텐츠는 색각 장애가 있는 사용자에게도 접근성을 제공합니다.
      						</p>
      					</li>
      				</ol>
      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn t_blue weight-800">기대 효과</h4>
      				<ul className="mt_m dot_lst info_lst gap-column-important-sm">
      					<li>색의 차이로 정보를 구분하지 않으면, 색을 인지하는 데 어려움이 있는 사용자도 혼동 없이 콘텐츠를 이해할 수 있습니다.</li>
      					<li>흑백 스크린(구형 PDA 등) 또는 고대비 모드 사용자들도 콘텐츠의 내용이나 구조를 손쉽게 이해할 수 있습니다.</li>
      				</ul>
      			</div>
      			
      			<figure className="img_figure mt_l">
      				<img src={`${IMG.A11Y}/5_1_kwcag_06.png`} alt="06 색에 무관한 콘텐츠 인식" />
      				<figcaption>
      					인식의 용이성
      				</figcaption>
      			</figure>
      		</article>
      		


      		<article className="mt_xl indent">
      			<h3 className="ml_mn">자동 재생 금지</h3>

      			<blockquote className="uk_note mt_l" role="note">
      				<strong className="sound_only">요약 설명</strong>
      				<p>
      					<b className="t_black">자동으로 소리가 재생되지 않아야 합니다.</b><br />
      					웹 페이지에서 자동으로 재생되는 소리(동영상, 오디오, 음성, 배경 음악 등 콘텐츠가 제공하는 모든 소리)가
      					화면 낭독 프로그램 사용자의 콘텐츠 인식을 방해하지 않도록 해야 합니다.<br />
      					3초 미만의 소리는 허용되지만, 3초 이상 재생되는 소리에는 멈춤, 일시정지, 음량 조절 등의 제어 수단을 제공해야 합니다.
      				</p>
      				<p className="reference mt_ms">
      					WCAG 2.1 부분 참조.<br />
      					<a href="https://www.w3.org/TR/WCAG21/#audio-control" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">1.4.2 Audio Control (Level A)</a><br />
      				</p>
      			</blockquote>

      			<div className="mt_l indent">
      				<h4 className="ml_mn">고려 사항</h4>
      				<ol className="mt_m ol_lst info_lst gap-column-important-ms">
      					<li className="t_black_before weight-600-before">
      						<strong>자동 재생음을 허용하는 경우</strong>
      						<p>
      							자동으로 재생되는 소리는 3초 내에 멈추거나, 지정된 키(예: esc키)를 누르면 재생을 멈추도록 구현해야 합니다.
      						</p>
      					</li>
      					<li className="t_black_before weight-600-before">
      						<strong>사용자 요구에 의한 재생</strong>
      						<p>
      							콘텐츠에 포함된 멀티미디어 파일은 처음에 정지 상태로 제공하며, 사용자가 요청할 때만 재생되도록 하고, 멈춤, 일시정지, 음량 조절 등의 제어판을 제공해야 합니다.
      						</p>
      					</li>
      				</ol>
      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn t_blue weight-800">기대 효과</h4>
      				<p className="mt_m">
      					멀티미디어 콘텐츠가 자동으로 재생되어 시각 장애인이 사용하는 화면 낭독 프로그램의 소리를 방해할 경우 큰 혼란을 초래할 수 있습니다.
      					따라서 3초 이후에는 이러한 멀티미디어 콘텐츠의 자동 재생을 멈추게 함으로써 시각 장애인이 페이지를 원활하게 사용할 수 있습니다.
      				</p>
      			</div>
      			

      			<figure className="img_figure mt_l">
      				<img src={`${IMG.A11Y}/5_1_kwcag_07.png`} alt="07 자동 재생 금지" />
      				<figcaption>
      					인식의 용이성
      				</figcaption>
      			</figure>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">텍스트 콘텐츠의 명도 대비</h3>

      			<blockquote className="uk_note mt_l" role="note">
      				<strong className="sound_only">요약 설명</strong>
      				<p>
      					<b className="t_black">텍스트 콘텐츠와 배경 간의 명도 대비는 4.5:1 이상이어야 합니다.</b><br />
      					웹 페이지에서 보이는 텍스트 콘텐츠(텍스트 및 텍스트 이미지)는 배경과 충분한 명도 대비를 제공하여
      					저시력 장애인, 색각 장애인, 노인 등 다양한 사용자가 콘텐츠를 인식할 수 있도록 해야 합니다.
      					다만, 로고, 장식 목적의 콘텐츠, 또는 마우스나 키보드를 활용하여 초점을 받을 때 명도 대비가 커지는 콘텐츠는 예외로 합니다.(7.2.1. 사용자 요구에 따른 실행 참조)
      				</p>
      				<p className="reference mt_ms">
      					WCAG 2.1 부분 참조.<br />
      					<a href="https://www.w3.org/TR/WCAG21/#contrast-minimum" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">1.4.3 Contrast (Minimum) (Level AA)</a><br />
      				</p>
      			</blockquote>

      			<div className="mt_l indent">
      				<h4 className="ml_mn">고려 사항</h4>
      				<ol className="mt_m ol_lst info_lst gap-column-important-ms">
      					<li className="t_black_before weight-600-before">
      						<strong>콘텐츠의 명도 대비</strong>
      						<p>
      							웹 페이지가 제공하는 텍스트 콘텐츠(텍스트 및 텍스트 이미지)와 배경 간의 명도 대비는 4.5:1 이상이어야 합니다.
      						</p>
      					</li>
      					<li className="t_black_before weight-600-before">
      						<strong>폰트 크기에 따른 명도 대비</strong>
      						<p>
      							텍스트 콘텐츠에서 텍스트 폰트 크기가 18pt(24px) 이상이거나 14pt(19px) 이상이고 굵은 폰트를 사용하는 경우, 명도 대비 기준을 3:1까지 낮출 수 있습니다.
      						</p>
      					</li>
      					<li className="t_black_before weight-600-before">
      						<strong>화면 확대가 가능한 콘텐츠</strong>
      						<p>
      							화면 확대가 가능하도록 구현한 텍스트 콘텐츠(텍스트 및 텍스트 이미지)의 명도 대비는 3:1까지 낮출 수 있습니다.
      						</p>
      					</li>
      				</ol>
      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn t_blue weight-800">기대 효과</h4>
      				<ul className="mt_m dot_lst info_lst gap-column-important-sm">
      					<li>충분한 명도 대비를 제공함으로써 저시력 장애인, 색각 장애인, 노인 등 다양한 사용자들이 텍스트 콘텐츠를 더 쉽게 읽고 이해할 수 있습니다.</li>
      					<li>화면 확대 기능을 지원하면서도 적절한 명도 대비를 유지하면, 화면 확대를 필요로 하는 사용자에게도 원활한 접근을 제공할 수 있습니다. 이는 특히 노인층과 같은 특정 사용자 그룹에게 큰 도움이 됩니다.</li>
      				</ul>
      			</div>
      			
      			<figure className="img_figure mt_l">
      				<img src={`${IMG.A11Y}/5_1_kwcag_08.png`} alt="08 텍스트 콘텐츠의 명도 대비" />
      				<figcaption>
      					인식의 용이성
      				</figcaption>
      			</figure>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">콘텐츠 간의 구분</h3>

      			<blockquote className="uk_note mt_l" role="note">
      				<strong className="sound_only">요약 설명</strong>
      				<p className="reference">
      					<b className="t_black">이웃한 콘텐츠는 서로 명확하게 구별될 수 있어야 합니다.</b><br />
      					웹 페이지를 구성하는 이웃한 콘텐츠는 사용자들이 쉽게 인식할 수 있도록 시각적으로 명확하게 구분되어 제공되어야 합니다.
      				</p>
      				<p className="reference mt_ms">
      					WCAG 2.1 부분 참조.<br />
      					<a href="https://www.w3.org/TR/WCAG21/#visual-presentation" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">1.4.8 Visual Presentation (Level AAA)</a><br />
      				</p>
      			</blockquote>

      			<div className="mt_l indent">
      				<h4 className="ml_mn">이웃한 콘텐츠를 시각적으로 구분하기 위한 예</h4>
      				<ol className="mt_m ol_lst gap-column-important-sm">
      					<li>테두리를 이용하여 구분함.</li>
      					<li>콘텐츠 사이에 시각적인 구분선을 삽입하여 구분함.</li>
      					<li>서로 다른 무늬를 이용하여 구분함.</li>
      					<li>콘텐츠 배경색 간의 명도대비(채도)를 달리하여 구분함.</li>
      					<li>줄 간격 및 글자 간격을 조절하여 구분함.</li>
      					<li>기타 콘텐츠를 시각적으로 구분할 수 있는 방법 등.</li>
      				</ol>
      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn t_blue weight-800">기대 효과</h4>
      				<p className="mt_m">
      					이웃한 콘텐츠 간에 간격을 두면, 터치스크린을 사용하는 기기에서도 손가락으로 쉽게 콘텐츠를 식별하고 조작할 수 있게 됩니다.
      				</p>
      			</div>
      			
      			<figure className="img_figure mt_l">
      				<img src={`${IMG.A11Y}/5_1_kwcag_09.png`} alt="09 콘텐츠 간의 구분" />
      				<figcaption>
      					인식의 용이성
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

export default KwcagPerceivablePage
