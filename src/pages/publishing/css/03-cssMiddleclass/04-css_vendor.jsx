import { usePageMeta } from '@/components/common/PageMeta'
import { IMG } from '@/config/path'
import CodeBlock from '@/components/code/CodeBlock'

const PAGE_LAYOUT = {
  mainClass: "css_vendor",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: false,
  contentList: false,
  depth3Last: false,
  bottomEditor: false
}

const PAGE_DATA = {
  title: "접두어",
  description: "벤더 프리픽스(vendor prefix)는 주요 웹 브라우저 공급자가 새로운 실험적인 기능을 제공할 때 이전 버전의 웹 브라우저에 그 사실을 알려주기 위해 사용하는 접두사로, CSS3 표준으로 확정되기 이전 또는 브라우저 개발사가 실험적으로 제공하는 기능을 사용하기 위해 필요합니다. 이 페이지에서는 -webkit-, -moz-, -ms-, -o- 등 주요 벤더 프리픽스의 의미와 사용 방법, 그리고 현재 대부분의 CSS 속성이 표준화되어 최신 브라우저에서는 벤더 프리픽스가 필요하지 않다는 점을 함께 소개합니다.",
  keyword: "style, css, Cascading Style Sheets, 벤더 프리픽스, vendor prefix, 접두어",
}

function CssVendorPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  })

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
      		<strong className="sound_only">요약 설명</strong>
      		<p>
      			<strong>벤더 프리픽스(vendor prefix)</strong>는 주요 웹 브라우저 공급자가 새로운 실험적인 기능을 제공할 때
      			이전 버전의 웹 브라우저에 그 사실을 알려주기 위해 사용하는 <strong>접두사(prefix)</strong>입니다.<br />
      			CSS3 표준으로 확정되기 이전 또는 브라우저 개발사가 실험적으로 제공하는 기능을 사용하기 위해서는 벤더 프리픽스를 사용해야 합니다.<br />
      			아직 CSS 권고안에 포함되지 못한 기능이나, CSS 권고안에는 포함되어 있지만 아직 완벽하게 제정된 상태가 아닌 기능을 사용하고자 할 때 벤더 프리픽스를 사용하게 됩니다.<br />
      			권고 후보 단계에 이르면 벤더 프리픽스는 삭제할 것을 권장하고 있습니다.
      		</p>
      		<p className="mt_s">
      			<strong className="t_black">참고:</strong>
      			<b>
      				현재 대부분의 CSS 속성은 표준화되어 최신 브라우저에서는 벤더 프리픽스가 필요하지 않습니다.
      				벤더 프리픽스는 주로 구형 브라우저 지원이 필요한 경우에만 사용하며,
      				최신 프로젝트에서는 표준 속성만 사용하는 것을 권장합니다.
      			</b>
      		</p>
      		<p className="mt_ms">
      			W3C에서 책정되는 사양은 아래와 같은 단계를 거쳐 결정됩니다.<br />
      			<i className="t_black">Editor's Draft(편집자 초안)</i> →
      			<i className="t_black">Working Draft[WD] (초안)</i> →
      			<i className="t_black">Last Call Working Draft[LC] (최종 초안)</i> →
      			<i className="t_black">Candidate Recommendation[CR] (권고 후보)</i> →
      			<i className="t_black">Proposed Recommendation[PR] (권고안)</i> →
      			<i className="t_black">Recommendation[REC] (권고)</i>
      		</p>
      		
      	</blockquote>

      	
      	<section className="txt_ex indent mt_xxl">
      		<h2 className="ml_mn">벤더 프리픽스(vendor prefix)</h2>

      		<aside className="browser_support vendor mt_l" data-tit="(vendor prefix)">
      			<ul>
      				<li className="ie">-ms-</li>
      				<li className="edge">-ms-</li>
      				<li className="chrome">-webkit-</li>
      				<li className="firefox">-moz-</li>
      				<li className="opera">-o-</li>
      				<li className="safari">-webkit-</li>
      			</ul>
      		</aside>
      		<p className="mt_ms">
      			크롬과 사파리는 같은 웹킷 계열 브라우저이므로 같은 벤더 프리픽스를 사용합니다.
      		</p>

      		<div className="ol_lst mt_m">
      			<ol>
      				<li className="line_code font14 weight-600-before">
      					<strong className="mb_sm">사용 방법</strong>
      					<p>브라우저 접두어를 앞쪽에 쓰고, 맨 마지막에 표준 속성(비 접두어 버전)을 선언합니다.</p>
      					<p>접두어 버전을 사용하는 브라우저는 그것을 이용할 것이고, 이해하지 못하는 브라우저는 그 속성을 무시합니다. 표준을 지원하는 브라우저는 맨 마지막에 있는 속성을 실행합니다.</p>
      				</li>
      				<li className="line_code font14 mt_ms weight-600-before">
      					<strong>사용 예제</strong>
      					
      <CodeBlock title="vendor prefix" language="javascript" className="uk_gist_code_box mt_sm">
      {`div {
      								background: red;                                  /* gradient 속성을 지원하지 않는 모든 브라우저를 위한 코드 */
      								background: -webkit-linear-gradient(red, yellow); /* 크롬과 사파리 4.0 이상을 위한 코드 */
      								background: -moz-linear-gradient(red, yellow);    /* 파이어폭스 3.6 이상을 위한 코드 */
      								background: -ms-linear-gradient(red, yellow);     /* 익스플로러 10.0 이상을 위한 코드 */
      								background: -o-linear-gradient(red, yellow);      /* 오페라 10.0 이상을 위한 코드 */
      								background: linear-gradient(red, yellow);         /* CSS 표준 문법 코드 */
      							}`}
      </CodeBlock>

      					<p className="mt_ms">위의 예제에서 가장 먼저 나오는 <code>background</code> 속성은 <code>gradient</code> 속성을 지원하지 않는 모든 브라우저를 위한 것입니다.</p>
      					<p>맨 마지막에 나오는 <code>background</code> 속성은 CSS 표준 문법으로 작성된 코드입니다.</p>
      					<p>CSS 표준 문법 코드는 <mark>벤더 프리픽스(vendor prefix)</mark>로 작성된 코드가 모두 나오고 난 후에 나와야만, 벤더 프리픽스가 포함된 코드가 정상적으로 동작할 수 있습니다.</p>
      					<p>이러한 벤더 프리픽스는 실험적인 해당 기능들이 CSS 표준 권고안에 포함되거나 완벽하게 제정된 상태가 되면 더는 사용할 필요가 없어집니다.</p>
      				</li>
      			</ol>
      		</div>
      	</section>

      	<figure className="img_figure indent mt_l">
      		<img src={`${IMG.CSS}/03_css_04.png`} alt="CSS 접두어" />
      		<figcaption className="reference">
      			CSS 접두어
      		</figcaption>
      	</figure>

      	<aside className="reference_box mt_xxl">
      		<strong className="tit">CSS 접두어(Vendor Prefix) 참조</strong>
      		<ul className="link_lst">
      			<li className="reference"><a href="https://www.w3.org/TR/CSS21/syndata.html#vendor-keywords" target="_blank" rel="noreferrer" className="fas" title="새창열림">W3C Vendor-specific extensions</a></li>
      			<li className="reference"><a href="https://developer.mozilla.org/en-US/docs/Glossary/Vendor_Prefix" target="_blank" rel="noreferrer" className="fas" title="새창열림">MDN Vendor_Prefix</a></li>
      			<li className="reference"><a href="https://www.w3schools.com/cssref/css3_browsersupport.asp" target="_blank" rel="noreferrer" className="fas" title="새창열림">w3schools CSS3 Browser Support</a></li>
      			<li className="reference"><a href="https://caniuse.com/" target="_blank" rel="noreferrer" className="fas" title="새창열림">CSS 스펙 사용여부 체크(https://caniuse.com/)</a></li>
      			<li className="reference"><a href="https://gs.statcounter.com/" target="_blank" rel="noreferrer" className="fas" title="새창열림">브라우저별 사용 통계</a></li>
      			<li className="reference"><a href="https://css3test.com/" target="_blank" rel="noreferrer" className="fas" title="새창열림">CSS 브라우저 지원 테스트</a></li>
      			<li className="reference"><a href="http://leaverou.github.io/prefixfree/" target="_blank" rel="noreferrer" className="fas" title="새창열림">Prefix Free 라이브러리</a></li>
      			<li className="reference"><a href="https://www.lifewire.com/css-vendor-prefixes-3466867" target="_blank" rel="noreferrer" className="fas" title="새창열림">Prefix https://www.lifewire.com/</a></li>
      			<li className="reference"><a href="https://peter.sh/experiments/vendor-prefixed-css-property-overview/" target="_blank" rel="noreferrer" className="fas" title="새창열림">Prefix https://peter.sh/</a></li>
      			<li className="reference"><a href="https://www.quirksmode.org/blog/archives/2010/03/css_vendor_pref.html" target="_blank" rel="noreferrer" className="fas" title="새창열림">Prefix https://www.quirksmode.org</a></li>
      			<li className="reference"><a href="http://web.simmons.edu/~grovesd/comm244/notes/week6/css3-compatibility" target="_blank" rel="noreferrer" className="fas" title="새창열림">Prefix http://web.simmons.edu</a></li>
      		</ul>
      	</aside>
    </>
  )
}

export default CssVendorPage
