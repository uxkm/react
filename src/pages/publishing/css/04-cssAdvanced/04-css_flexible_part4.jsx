import { usePageMeta } from '@/components/common/PageMeta'
import PublishingPartTabs from '@/components/docs/PublishingPartTabs'
import { IMG } from '@/config/path'
import { Suspense, lazy } from 'react'
const UkEditorTarget = lazy(() => import('@/components/code/UkEditorTarget'))
function EditorFallback() { return <div className="uk_editor min_height_300" aria-hidden /> }
import CodeBlock from '@/components/code/CodeBlock'

const PAGE_LAYOUT = {
  mainClass: "css_flexible",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: false,
  contentList: true,
  depth3Last: false,
  bottomEditor: false
}

const PAGE_DATA = {
  title: "플렉서블 레이아웃 - 자식 속성 및 데모",
  description: "Flexbox의 자식 속성은 플렉스 아이템에 적용하는 속성들로, 플렉스 컨테이너의 자식 요소에 사용하여 각 아이템의 크기와 순서를 제어합니다. 이 페이지에서는 플렉스 아이템의 확대 비율을 설정하는 flex-grow 속성, 축소 비율을 설정하는 flex-shrink 속성, 초기 크기를 설정하는 flex-basis 속성, 플렉스 아이템의 순서를 설정하는 order 속성과 flex 축약형 속성, 실제 활용 예제를 함께 소개합니다.",
  keyword: "style, css, Cascading Style Sheets, flex, 플렉스 박스, flexbox, 레이아웃, 자식요소, flex-grow, flex-shrink, flex-basis, order",
}

function CssFlexiblePart4Page() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  })

  return (
    <>
      <blockquote className="uk_note common_note mt_xxl" role="note">
      	<strong className="sound_only">요약 설명</strong>
      	<p>
      		<b>Flex</b>(Flexbox)는 <strong className="t_black">CSS3</strong>에서 도입된 레이아웃 방식으로, 요소의 크기가 불명확하거나 동적으로 변화할 때에도 유연한 레이아웃을 구현할 수 있습니다.<br />
      		플렉스 컨테이너(부모 요소)와 플렉스 요소(자식 요소)로 구성되며, <code>display: flex</code> 또는 <code>display: inline-flex</code>로 설정한 요소가 플렉스 컨테이너가 됩니다.
      	</p>
      	<p className="mt_ms">
      		복잡한 레이아웃도 적은 코드로 간단하게 표현할 수 있으며, 다양한 화면 크기와 기기에서 요소들이 자동으로 재정렬되어 반응형 웹을 구현하는 데 유용합니다.<br />
      		과거에는 <code>float</code>이 주로 사용되었지만, 현재는 <code>flex</code> 또는 <code>grid</code>가 주로 사용됩니다.
      	</p>
      </blockquote>
      <PublishingPartTabs sectionType="css" />


      	<section className="mt_xxl indent">
      		<h2 className="ml_mn">자식 속성(Properties for the Parent - Flexbox Container)</h2>
      		<p className="mt_l">
      			flex container의 자식 요소입니다.<br />
      			<code>float</code>, <code>clear</code>, <code>vertical-align</code> 속성은 <b>flex item</b>에 영향을 주지 않습니다.
      		</p>
      		<figure className="img_figure mt_m">
      			<figcaption className="mt_0">[Flexbox Items]</figcaption>
      			<img src={`${IMG.CSS}/flexbox/uxkm_flex-items.svg`} alt="Flexbox Container" className="mt_m" />
      		</figure>

      		
      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue">flex-grow</h3>
      			<p className="mt_m">
      				<code>flex-grow</code> 속성은 플렉스 컨테이너 내에서 할당 가능한 공간이 있을 때, 플렉스 요소가 얼마나 확장될지를 지정하는 확대 인자(flex grow factor)입니다.<br />
      				기본값은 <code>0</code>이며, 양수 값만 사용할 수 있습니다.
      			</p>
      			<p className="mt_s">
      				모든 형제 요소가 동일한 <code>flex-grow</code> 값을 가지면 동일한 공간을 할당받고, 서로 다른 값을 지정하면 그 비율에 따라 공간을 나누어 할당받습니다.<br />
      				일반적으로 <code>flex-grow</code>는 <code>flex-shrink</code>, <code>flex-basis</code>와 함께 <code>flex</code> 축약형 속성으로 사용합니다.
      			</p>
      			
      <CodeBlock title="Flex properties [flex-grow]" language="javascript" className="uk_gist_code_box mt_m">
      {`.item {
      						flex-grow: <number>(양수); // default 0
      					}

      					/* <number> values */
      					flex-grow: 3;
      					flex-grow: 0.6;`}
      </CodeBlock>

      			<figure className="img_figure mt_m">
      				<figcaption className="mt_0">[<code className="bg_none t_blue">flex-grow</code>를 시각적으로 설명하는 다이어그램]</figcaption>
      				<img src={`${IMG.CSS}/flexbox/uxkm_flex-grow.svg`} alt="flex-grow를 시각적으로 설명하는 다이어그램" className="mt_m" />
      			</figure>
      			<figure className="img_figure mt_m">
      				<figcaption className="mt_0">
      					[모든
      					<code className="bg_none t_444">flex item</code>이 동일한
      					<code className="bg_none t_blue">flex-grow</code> 속성값을 가지면 모든
      					<code className="bg_none t_444">flex item</code>은 동일한 너비를 갖습니다.]
      				</figcaption>
      				<img src={`${IMG.CSS}/flexbox/uxkm_flexbox-flex-grow-1.svg`} alt="flex-grow를 시각적으로 설명하는 다이어그램" className=" mt_s" /><br />

      				<figcaption className="mt_l">
      					[두 번째
      					<code className="bg_none t_444">flex item</code>의
      					<code className="bg_none t_blue">flex-grow</code> 속성값을 3으로 지정하면 다른
      					<code className="bg_none t_444">flex item</code>보다 더 넓은 너비를 갖습니다.]
      				</figcaption>
      				<img src={`${IMG.CSS}/flexbox/uxkm_flexbox-flex-grow-2.svg`} alt="flex-grow를 시각적으로 설명하는 다이어그램" className="mt_s" />
      			</figure>
      			<div className="view_editor edit_code mt_ml">
      				<h4 className="ve_tit">flex-grow 예제</h4>
      				<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="/css/step03/4.4.flexible/4.4.2.flexible-flex-grow.html" className="uk_editor mt_m indent min_height_650 mb_result_height_660" mode="htmlmixed" theme="moxer" browser="default" result minHeight="650px" mbResultHeight="660px" />
      </Suspense></div>
      			<aside className="browser_support mt_ml" data-tit="flex-grow">
      				<ul>
      					<li className="ie">10+ -ms-</li>
      					<li className="edge">12.0</li>
      					<li className="chrome">29.0 / 28 - webkit-</li>
      					<li className="firefox">20.0</li>
      					<li className="opera">12.1</li>
      					<li className="safari">9.0 / 8 -webkit-</li>
      				</ul>
      			</aside>
      		</article>

      		
      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue">flex-shrink</h3>
      			<p className="mt_m">
      				<code>flex item</code>의 너비에 대한 축소 인자(flex shrink factor)를 지정합니다.<br />
      				<code>flex-item</code> 요소의 크기가 <code>flex-container</code> 요소의 크기보다 클 때 사용하며,
      				설정된 숫자 값에 따라 <code>flex-container</code> 요소 내부에서 <code>flex-item</code> 요소의 크기가 축소됩니다.
      			</p>
      			<p className="mt_s">
      				기본값은 1, 적용 가능한 값은 양수입니다. 0을 지정하면 축소가 해제되어 원래의 너비를 유지합니다.<br />
      				참고로 <code>flex-basis</code> 값이 설정되었다면 기존의 <code>width</code> 또는 <code>height</code> 속성 보다 우선 적용됩니다.
      			</p>
      			<p className="reference mt_s"><a href="https://www.w3.org/TR/css-flexbox-1/#flex-shrink-property" target="_blank" rel="noreferrer" title="새창열림">w3.org/TR/css-flexbox-1/#flex-shrink-property</a></p>
      			
      <CodeBlock title="Flex properties [flex-shrink]" language="javascript" className="uk_gist_code_box mt_m">
      {`.item {
      						flex-shrink: <number>(양의 정수값); // default 1
      					}
      					/* <number> values */
      					flex-shrink: 2;
      					flex-shrink: 0.6;`}
      </CodeBlock>


      			<figure className="img_figure mt_m">
      				<figcaption className="mt_0">
      					[기본은
      					<code className="bg_none t_444">flex container</code>의 너비에 마춰 축소 /
      					특정 <code className="bg_none t_444">flex item</code>만 해제(<code className="bg_none t_blue">flex-shrink: 0;</code>)하면 원래 너비 유지]
      				</figcaption>
      				<img src={`${IMG.CSS}/flexbox/uxkm_flexbox-flex-shrink.svg`} alt="기본은 flex container의 너비에 마춰 축소 / 특정 flex item만 해제(flex-shrink: 0;)하면 원래 너비 유지" className=" mt_s" />
      			</figure>

      			<p className="mt_m">
      				감소 너비(<code>flex-shrink</code>)는 요소의 너비에 영향을 받기 때문에 계산이 까다롭습니다.<br />
      				영향을 받는 요소의 너비는 <code>width</code>, <code>height</code>, <code>flex-basis</code> 등으로 너비가 지정된 경우를 의미합니다.<br />
      				<code>flex container</code>의 너비가 줄어 <code>flex Items</code>의 너비에 영향을 미칠 경우,
      				영향을 미치기 시작한 지점부터 줄어든 거리 만큼 감소 너비 비율에 맞게 <code>flex Item</code>의 너비가 줄어듭니다.
      			</p>
      			<p className="mt_ms">
      				예를 들어 <code>flex container</code>의 너비가 줄어 <code>flex Item</code>의 너비에 영향을 미치기 시작한 지점부터 실제 줄어든 거리가 <code>90px</code>일 때,<br />
      				요소 너비가 같은 <code>flex Item</code>이 2개이고 <code>flex-shrink</code>가 각각 2와 1이라면,<br />
      				감소 너비는 2:1 비율이며,<br />
      				첫 번째 <code>flex Item</code>은 <code>90px</code>의 2/3인 <code>60px</code> 만큼 너비가 감소하고,<br />
      				두 번째 <code>flex Item</code>은 <code>90px</code>의 1/3인 <code>30px</code> 만큼 너비가 감소합니다.
      			</p>
      			<p className="mt_ms">
      				다른 예시로 <code>flex container</code>의 너비가 줄어 <code>flex Item</code>의 너비에 영향을 미치기 시작한 지점부터 실제 줄어든 거리가 <code>90px</code>일 때,<br />
      				요소 너비가 다른 <code>flex Item</code>이 2개이고 요소 너비는 각각 <code>200px</code>과 <code>100px</code>이고,<br />
      				<code>flex-shrink</code>가 각각 2와 1이라면,<br />
      				200 x 2 = 400과 100 x 1 = 100 즉 감소 너비는 4:1 비율이며,<br />
      				첫 번째 <code>flex Item</code>은 <code>90px</code>의 4/5인 <code>72px</code> 만큼 너비가 감소하고,<br />
      				두 번째 <code>flex Item</code>은 <code>90px</code>의 1/5인 <code>18px</code> 만큼 너비가 감소합니다.
      			</p>
      			<figure className="img_figure mt_m">
      				<figcaption className="mt_0"><code className="bg_none t_444">[ flex-shrink ]</code></figcaption>
      				<img src={`${IMG.CSS}/flexbox/uxkm_flex-shrink_pc.svg`} alt="flex-shrink" className="mt_s dp_md_pc mg_center" />
      				<img src={`${IMG.CSS}/flexbox/uxkm_flex-shrink_md.svg`} alt="flex-shrink" className="mt_s dp_md mg_center" />
      			</figure>

      			<div className="view_editor edit_code mt_ml">
      				<h4 className="ve_tit">flex-shrink 예제</h4>
      				<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="/css/step03/4.4.flexible/4.4.2.flexible-flex-shrink.html" className="uk_editor mt_m indent min_height_550 mb_result_height_500" mode="htmlmixed" theme="moxer" browser="default" result minHeight="550px" mbResultHeight="500px" />
      </Suspense></div>
      			<aside className="browser_support mt_ml" data-tit="flex-shrink">
      				<ul>
      					<li className="ie">10+ -ms-</li>
      					<li className="edge">12.0</li>
      					<li className="chrome">29.0</li>
      					<li className="firefox">20.0</li>
      					<li className="opera">12.1</li>
      					<li className="safari">9.0</li>
      				</ul>
      			</aside>
      		</article>

      		
      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue">flex-basis</h3>
      			<p className="mt_m">
      				<code>flex-basis</code> 속성은 플렉스 아이템의 초기 크기를 지정합니다. <code>box-sizing</code>을 따로 지정하지 않는다면 콘텐츠 박스의 크기를 변경합니다.<br />
      				<code>auto</code> 값을 가지지 않은 <code>flex-basis</code>와 <code>width(flex-direction: column인 경우 height)</code> 값을 동시에 적용한 경우 <code>flex-basis</code>가 우선합니다.<br />
      				<code>flex item</code>의 너비 기본값을 <code>px</code>, <code>%</code> 등의 단위로 지정하며, 기본값은 <code>auto</code>입니다.<br />
      				<code>flex-basis</code> 속성값은 <code>content 키워드</code>를 사용하거나, <code>&lt;width&gt;</code>를 나타내는 단위를 사용합니다.
      			</p>
      			<p className="reference mt_s"><a href="https://www.w3.org/TR/css-flexbox-1/#flex-shrink-property" target="_blank" rel="noreferrer" title="새창열림">w3.org/TR/css-flexbox-1/#flex-shrink-property</a></p>

      			
      <CodeBlock title="Flex properties [flex-basis]" language="javascript" className="uk_gist_code_box mt_m">
      {`.item {
      						flex-basis: <length> | auto; // default auto
      					}

      					/* <'width'> 지정 */
      					flex-basis: 10em;
      					flex-basis: 3px;
      					flex-basis: auto;

      					/* 원본 크기 키워드 */
      					flex-basis: fill;
      					flex-basis: max-content;
      					flex-basis: min-content;
      					flex-basis: fit-content;

      					/* 플렉스 아이템 내용 크기에 따라 조절 */
      					flex-basis: content;`}
      </CodeBlock>

      			<ol className="ol_lst indent mt_ml">
      				<li className="line_code tit_h4">
      					<h4>&lt;width&gt;</h4>
      					<p>&lt;length&gt;, 플렉스 컨테이너의 크기에 상대적인 &lt;percentage&gt;, auto 키워드 중 하나. 음수 값은 유효하지 않습니다.</p>
      				</li>
      				<li className="line_code tit_h4 mt_m">
      					<h4>content</h4>
      					<p>플렉스 아이템의 콘텐츠 크기에 따라 자동으로 크기가 변합니다.</p>
      					<p><code>content 키워드</code>는 Flexible Box Layout의 첫 배포에 포함되지 않아, 일부 오래 된 브라우져는 지원하지 않을 수 있습니다.</p>
      					<p><code>flex-basis</code>와 주 크기<code>(width, height)</code> 속성을 동시에 auto로 설정하면 동일한 효과를 볼 수 있습니다.</p>
      					<p>원래 <code>flex-basis: auto</code>의 뜻은 자신의 <code>width</code> 또는 <code>height</code> 속성의 값을 사용하라는 것이었습니다.</p>
      					<p>그 후 <code>flex-basis: auto</code>는 자동 크기 조절로 바뀌고, 기존의 auto는 <code>main-size</code>로 바뀌었습니다. <span className="reference mt_s"><a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1032922" target="_blank" rel="noreferrer" title="새창열림">bug 1032922</a></span>에서 구현 기록을 볼 수 있습니다.</p>
      					<p>
      						그러나 위의 변경점은 <span className="reference mt_s"><a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1093316" target="_blank" rel="noreferrer" title="새창열림">bug 1093316</a></span>에서 되돌려져 auto 가 다시 <code>width / height</code> 속성을 가리키게 됐고,
      						대신 새로운 <code>content 키워드</code>가 자동 크기 조절을 맡게 됐습니다. (<span className="reference mt_s"><a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1105111" target="_blank" rel="noreferrer" title="새창열림">bug 1105111</a></span>에서 볼 수 있습니다.)
      					</p>
      				</li>
      			</ol>

      			<figure className="img_figure mt_m">
      				<figcaption className="mt_0">[<code className="bg_none t_blue">flex-basis</code>를 적용한 <code className="bg_none t_444">flex item</code>의 너비]</figcaption>
      				<img src={`${IMG.CSS}/flexbox/uxkm_flexbox-flex-basis.svg`} alt="flex-basis를 적용한 flex item의 너비" className=" mt_m" /><br />
      				<img src={`${IMG.CSS}/flexbox/uxkm_flex-basis_pc.svg`} alt="flex-basis를 적용한 flex item의 너비" className="mt_xl dp_md_pc mg_center" />
      				<img src={`${IMG.CSS}/flexbox/uxkm_flex-basis_md.svg`} alt="flex-basis를 적용한 flex item의 너비" className="mt_xl dp_md mg_center" />
      			</figure>
      			
      			
      			<aside className="browser_support mt_ml" data-tit="flex-basis">
      				<ul>
      					<li className="ie">11+</li>
      					<li className="edge">12.0</li>
      					<li className="chrome">29.0</li>
      					<li className="firefox">22.0</li>
      					<li className="opera">12.1</li>
      					<li className="safari">9.0</li>
      				</ul>
      			</aside>
      		</article>

      		
      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue">flex</h3>
      			<p className="mt_m">
      				<code>flex</code> 속성은 <code>flex-grow</code>, <code>flex-shrink</code>, <code>flex-basis</code>를 한 번에 설정하는 축약형 속성입니다.<br />
      				플렉스 요소가 컨테이너의 공간에 맞춰 확장되거나 축소되는 방식을 제어합니다.
      			</p>
      			<p className="mt_s">
      				<strong className="t_red">주의:</strong> <code>flex-basis</code>의 개별 기본값은 <code>auto</code>이지만, <code>flex</code> 축약형에서 값을 생략하면 <code>flex-basis</code>에 <code>0</code>이 적용됩니다.<br />
      				예를 들어, <code>flex: 1;</code> 또는 <code>flex: 1 1;</code>은 <code>flex: 1 1 0;</code>과 같으며, <code>flex: 1 1 auto;</code>와는 다릅니다.
      			</p>
      			<p className="mt_s">
      				<mark>W3C에서는 개별 속성을 사용하는 것을 권장합니다.</mark>
      			</p>
      			
      <CodeBlock title="Flex properties [flex]" language="javascript" className="uk_gist_code_box mt_m">
      {`.item {
      						flex: none | auto | [ <flex-grow> <flex-shrink>? || <flex-basis> ];
      					}

      					.item {
      						flex: 1 1 20px; // 증가너비 감소너비 기본너비
      						flex: 1 1; // 증가너비 감소너비
      						flex: 1 20px; // 증가너비 기본너비 (단위를 사용하면 flex-basis가 적용됩니다.)
      					}`}
      </CodeBlock>

      			<div className="ol_lst indent mt_ml">
      				<ol>
      					<li className="tit_h4 line_code">
      						<h4>initial</h4>
      						<p>아이템 크기가 각각의 <code>width</code>와 <code>height</code> 속성에 따라 정해집니다.</p>
      						<p>플렉스 컨테이너의 크기를 넘지 않기 위해 최소 크기로 줄어들 수는 있지만, 남은 공간을 채우려 늘어나지는 않습니다.</p>
      						<p><code>flex: 0 1 auto;</code>와 동일합니다.</p>
      					</li>
      					<li className="tit_h4 line_code mt_m">
      						<h4>auto</h4>
      						<p>아이템 크기가 각각의 <code>width</code>와 <code>height</code> 속성에 따라 정해집니다.</p>
      						<p>플렉스 컨테이너의 크기를 넘지 않기 위해 최소 크기로 줄어들 수 있으며, 남은 공간을 채우기 위해 늘어날 수도 있습니다.</p>
      						<p><code>flex: 1 1 auto;</code>와 동일합니다.</p>
      					</li>
      					<li className="tit_h4 line_code mt_m">
      						<h4>none</h4>
      						<p>아이템 크기가 각각의 <code>width</code>와 <code>height</code> 속성에 따라 정해지며, 컨테이너의 크기에 관계 없이 변하지 않습니다.</p>
      						<p><code>flex: 0 0 auto;</code>와 동일합니다.</p>
      					</li>
      					<li className="tit_h4 line_code mt_m">
      						<h4>&lt;flex-grow&gt;</h4>
      						<p>플렉스 아이템의 <code>flex-grow</code>를 지정합니다. 음수 값은 유효하지 않습니다.</p>
      						<p>생략 시 기본값은 <code>0</code>입니다.</p>
      					</li>
      					<li className="tit_h4 line_code mt_m">
      						<h4>&lt;flex-shrink&gt;</h4>
      						<p>플렉스 아이템의 <code>flex-shrink</code>를 지정합니다. 음수 값은 유효하지 않습니다.</p>
      						<p>생략 시 기본값은 <code>1</code>입니다.</p>
      					</li>
      					<li className="tit_h4 line_code mt_m">
      						<h4>&lt;flex-basis&gt;</h4>
      						<p>플렉스 아이템의 <code>flex-basis</code>를 지정합니다.</p>
      						<p>0을 지정하려면 <code>&lt;flex-grow&gt;</code> 또는 <code>&lt;flex-shrink&gt;</code>로 읽히지 않도록 단위를 붙여야 합니다.</p>
      						<p>생략 시 기본값은 <code>auto</code>입니다.</p>
      					</li>
      				</ol>
      			</div>

      			<p className="mt_ml">
      				flex 속성은 한 개에서 세 개의 값을 사용해 지정할 수 있습니다.<br />
      				한 개 또는 두 개의 단위 없는 숫자 값을 사용할 때, <code>&lt;flex-basis&gt;</code>의 값은 <code>auto</code>가 아니라 <code>0</code>이 됩니다.
      			</p>
      			<div className="ol_lst indent mt_m">
      				<ol>
      					<li className="tit_h4 line_code">
      						<h4>값이 한 개일 때</h4>
      						
      <CodeBlock title="Flex properties [flex]" language="javascript" className="uk_gist_code_box mt_ms">
      {`/* <number>를 지정하면 <flex-grow>입니다. */
      								flex: 2;

      								/* <length> 또는 <percentage>를 지정하면 <flex-basis>입니다. */
      								flex: 10em;
      								flex: 30%;

      								/* none, auto, initial 중 하나를 지정할 수 있습니다. */
      								flex: none | auto | initial;`}
      </CodeBlock>

      					</li>
      					<li className="tit_h4 line_code mt_m">
      						<h4>값이 두 개일때, 첫 번째 값은 &lt;number&gt;여야 하며 &lt;flex-grow&gt;가 됩니다.</h4>
      						
      <CodeBlock title="Flex properties [flex]" language="javascript" className="uk_gist_code_box mt_ms">
      {`/* <number>를 지정하면 <flex-shrink>입니다. */
      								flex: 1 30px;

      								/* <length>, <percentage>, 또는 auto를 지정하면 <flex-basis>입니다. */
      								flex: 2 2;`}
      </CodeBlock>

      					</li>
      					<li className="tit_h4 line_code mt_m">
      						<h4>값이 세 개일 때</h4>
      						
      <CodeBlock title="Flex properties [flex]" language="javascript" className="uk_gist_code_box mt_ms">
      {`/*
      								flex-grow에 number를 선언합니다.
      								flex-shrink에 number를 선언합니다.
      								flex-basis에 length, percentage, 또는 auto를 선언합니다.
      								*/
      								flex: 2 2 10%;`}
      </CodeBlock>

      					</li>
      				</ol>
      			</div>

      			<div className="view_editor edit_code mt_ml">
      				<h4 className="ve_tit">flex 예제</h4>
      				<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="/css/step03/4.4.flexible/4.4.2.flexible-flex-flex.html" className="uk_editor mt_m indent min_height_450" mode="htmlmixed" theme="moxer" browser="default" result minHeight="450px" />
      </Suspense></div>
      			<aside className="browser_support mt_ml" data-tit="flex">
      				<ul>
      					<li className="ie">10+ -ms-</li>
      					<li className="edge">12.0</li>
      					<li className="chrome">29.0</li>
      					<li className="firefox">11.0</li>
      					<li className="opera">12.1</li>
      					<li className="safari">9.0</li>
      				</ul>
      			</aside>
      		</article>

      		
      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue">align-self</h3>
      			<p className="mt_m">
      				<code>align-self</code>는
      				부모 속성인 <code>align-items</code>보다 우선적으로 개별 <code>flex item</code>을 정렬합니다.<br />
      				기본값은 <code>auto</code>입니다.
      			</p>
      			<p className="mt_s t_888">
      				※ <code className=" t_888">align-items</code> :
      				<code className=" t_888">flex container</code>속성으로 <code className=" t_888">flex item</code>을 <code className=" t_888">flex container</code>의
      				수직 방향(cross axis)으로 정렬
      			</p>
      			<p className="reference mt_s"><a href="https://www.w3.org/TR/css-flexbox-1/#propdef-align-self" target="_blank" rel="noreferrer" title="새창열림">w3.org/TR/css-flexbox-1/#propdef-align-self</a></p>
      			
      <CodeBlock title="Flex properties [align-self]" language="javascript" className="uk_gist_code_box mt_m">
      {`.item {
      						align-self: auto | flex-start | flex-end | center | baseline | stretch;
      					}`}
      </CodeBlock>


      			<figure className="img_figure mt_m">
      				<figcaption className="mt_0">[<code className="bg_none t_blue">align-self</code>를 시각적으로 설명하는 다이어그램]</figcaption>
      				<img src={`${IMG.CSS}/flexbox/uxkm_flex-align-self.svg`} alt="align-self를 시각적으로 설명하는 다이어그램" className="mt_s" />
      			</figure>
      			

      			<div className="view_editor edit_code mt_ml">
      				<h4 className="ve_tit">align-self 예제</h4>
      				<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="/css/step03/4.4.flexible/4.4.2.flexible-align-self.html" className="uk_editor mt_m indent min_height_550 mb_result_height_570" mode="htmlmixed" theme="moxer" browser="default" result minHeight="550px" mbResultHeight="570px" />
      </Suspense></div>
      			<aside className="browser_support mt_ml" data-tit="align-self">
      				<ul>
      					<li className="ie">11+</li>
      					<li className="edge">12.0</li>
      					<li className="chrome">21.0</li>
      					<li className="firefox">20.0</li>
      					<li className="opera">12.1</li>
      					<li className="safari">6.1</li>
      				</ul>
      			</aside>
      			<aside className="browser_support mt_ms" data-tit="align-self : start | end | baseline">
      				<ul>
      					<li className="ie false">지원안함</li>
      					<li className="edge false">지원안함</li>
      					<li className="chrome">57.0</li>
      					<li className="firefox">45.0</li>
      					<li className="opera">44.0</li>
      					<li className="safari false">지원안함</li>
      				</ul>
      			</aside>
      			<aside className="browser_support mt_ms" data-tit="align-self : stretch">
      				<ul>
      					<li className="ie false">지원안함</li>
      					<li className="edge false">지원안함</li>
      					<li className="chrome">57.0</li>
      					<li className="firefox">52.0</li>
      					<li className="opera">44.0</li>
      					<li className="safari false">지원안함</li>
      				</ul>
      			</aside>
      		</article>

      		
      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue">order</h3>
      			<p className="mt_m">
      				<code>order</code> 속성은 플렉스 요소의 배치 순서를 지정합니다.<br />
      				HTML 코드를 변경하지 않고도 <code>order</code> 속성값을 지정하여 플렉스 요소를 재배치할 수 있습니다.<br />
      				기본값은 <code>0</code>이며, 기본 배치 순서는 플렉스 컨테이너에 추가된 순서입니다.
      			</p>
      			<p className="mt_s">
      				<strong className="t_red">주의:</strong> <code>order</code> 속성은 실제 DOM 순서와 화면에 표시되는 순서를 다르게 만들 수 있습니다.<br />
      				스크린 리더 등 보조 기술은 DOM 순서를 따르기 때문에, 접근성에 문제가 발생하지 않는 경우에만 사용해야 합니다.
      			</p>
      			<p className="reference mt_s"><a href="https://www.w3.org/TR/css-flexbox-1/#order-property" target="_blank" rel="noreferrer" title="새창열림">w3.org/TR/css-flexbox-1/#order-property</a></p>
      			
      <CodeBlock title="Flex properties [order]" language="javascript" className="uk_gist_code_box mt_m">
      {`.item {
      						order: <integer>(정수값); // default is 0
      					}`}
      </CodeBlock>

      			<figure className="img_figure mt_m">
      				<figcaption className="mt_0">
      					[<code className="bg_none t_blue">order</code>를 적용하여 <code className="bg_none t_444">flex item</code>의 배치 순서를 지정]
      				</figcaption>
      				<img src={`${IMG.CSS}/flexbox/uxkm_flex-order.svg`} alt="flex item의 배치 순서를 지정" className=" mt_s" />
      			</figure>
      			
      			<div className="view_editor edit_code mt_ml">
      				<h4 className="ve_tit">order 예제</h4>
      				<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="/css/step03/4.4.flexible/4.4.2.flexible-order.html" className="uk_editor mt_m indent min_height_550 mb_result_height_500" mode="htmlmixed" theme="moxer" browser="default" result minHeight="550px" mbResultHeight="500px" />
      </Suspense></div>
      			<aside className="browser_support mt_ml" data-tit="order">
      				<ul>
      					<li className="ie">10+ -ms-</li>
      					<li className="edge">12.0</li>
      					<li className="chrome">29.0 / 21 -webkit-</li>
      					<li className="firefox">20.0</li>
      					<li className="opera">12.1</li>
      					<li className="safari">9.0 / 6.1 - webkit-</li>
      				</ul>
      			</aside>
      		</article>

      		
      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue">grow, shrink 숫자가 증가, 감소에 따라 계산방법</h3>
      			<p className="mt_m">
      				<code>flex-basis</code>는 플렉스 요소의 초기 크기를, <code>flex-grow</code>는 확장 비율을, <code>flex-shrink</code>는 축소 비율을 지정합니다.<br />
      				주축이 <code>row</code>일 때는 너비(width), <code>column</code>일 때는 높이(height)를 기준으로 계산합니다.
      			</p>

      			<div className="mt_l indent">
      				<h4 className="ml_mn">flex-grow 계산 방법</h4>
      				<p className="mt_ms">
      					<code>flex-grow</code>는 컨테이너에 남은 공간이 있을 때, 각 요소가 얼마나 확장될지를 결정합니다.
      				</p>
      				
      <CodeBlock title={"Flex properties [grow, shrink : calculation method]"} language="javascript" className="uk_gist_code_box mt_m">
      {`.flex-container {
      						display: flex;
      						flex-flow: row wrap;
      					}
      					.flex-item {
      						flex: 1 0 50px;
      					}`}
      </CodeBlock>

      				<p className="mt_m">
      					위 코드에서 <code>flex: 1 0 50px</code>는 <code>flex-grow: 1</code>, <code>flex-shrink: 0</code>, <code>flex-basis: 50px</code>를 의미합니다.<br />
      					<code>shrink: 0</code>이므로 최소 <code>50px</code>보다 축소되지 않으며, <code>grow: 1</code>이므로 <code>50px</code> 이상 확장될 수 있습니다.
      				</p>
      				<p className="mt_s">
      					예를 들어, 아이템이 7개이고 각각 <code>flex-basis: 50px</code>인 경우, 기본 너비 합은 <code>350px</code>입니다.<br />
      					컨테이너 너비가 <code>500px</code>이면 남은 공간은 <code>150px</code>이며,
      					모든 아이템의 <code>grow</code> 값이 1이므로 균등하게 나눕니다.<br />
      					각 아이템은 <code>50px + (150px ÷ 7) = 71.43px</code>로 확장됩니다.
      				</p>
      				
      <CodeBlock title={"Flex properties [grow, shrink : calculation method]"} language="javascript" className="uk_gist_code_box mt_m">
      {`.flex-item:nth-child(3) {
      						flex: 2 0 20px;
      					}`}
      </CodeBlock>

      				<p className="mt_m">
      					3번째 아이템만 <code>flex-grow: 2</code>로 설정하면, 남은 공간을 비율로 나눕니다.<br />
      					비율은 <code>1 : 1 : 2 : 1 : 1 : 1 : 1</code>이며, 총 비율 합은 8입니다.<br />
      					남은 공간이 <code>150px</code>이면, 3번째 아이템은 <code>150px × (2/8) = 37.5px</code>를 추가로 받아
      					<code>20px + 37.5px = 57.5px</code>가 되고,<br />
      					다른 아이템들은 각각 <code>150px × (1/8) = 18.75px</code>를 추가로 받아 <code>50px + 18.75px = 68.75px</code>가 됩니다.
      				</p>
      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">flex-shrink 계산 방법</h4>
      				<p className="mt_ms">
      					<code>flex-shrink</code>는 컨테이너 너비가 아이템들의 기본 너비 합보다 작을 때, 각 요소가 얼마나 축소될지를 결정합니다.<br />
      					축소해야 할 공간 = 컨테이너 너비 - 아이템 기본 너비 합이며, <code>shrink</code> 값의 비율에 따라 분배됩니다.
      				</p>
      				<p className="mt_s">
      					예를 들어, 아이템 7개의 기본 너비 합이 <code>500px</code>이고 컨테이너 너비가 <code>400px</code>이면, <code>100px</code>을 축소해야 합니다.<br />
      					모든 아이템의 <code>shrink</code> 값이 1이면 균등하게 축소되며, <code>shrink: 2</code>인 아이템은 다른 아이템보다 2배 더 많이 축소됩니다.
      				</p>
      			</div>
      			
      		</article>
      	</section>

      	
      	<section className="mt_xxl indent">
      		<h2 className="ml_mn">Flexbox Demo</h2>
      		<p className="mt_l">
      			flex의 속성을 이용한 다양한 예제 입니다.<br />
      			예제의 코드 확인 후 결과 화면을 '<i className="t_blue">브라우저 전체 화면</i>' 또는 '<i className="t_blue">모니터 전체 화면</i>'으로 확인하면 결과물에 대한 이해가 조금 더 용이해집니다.
      		</p>

      		
      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue">수직 및 수평 가운데 정렬(Vertical and Horizontal Centering)</h3>
      			<div className="view_editor edit_code mt_m">
      				<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="/css/step03/4.4.flexible/4.4.3.flexible-demo-vertical-and-horizontal-centering.html" className="uk_editor min_height_490 mb_result_height_500" mode="htmlmixed" theme="moxer" browser="default" result minHeight="490px" mbResultHeight="500px" />
      </Suspense></div>
      		</article>

      		
      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue">flex-direction, justify-content, align-items Demo</h3>
      			<div className="view_editor edit_code mt_m">
      				<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="/css/step03/4.4.flexible/4.4.3.flexible-demo.html" className="uk_editor min_height_500 mb_result_height_500" mode="htmlmixed" theme="moxer" browser="default" result minHeight="500px" mbResultHeight="500px" />
      </Suspense></div>
      		</article>

      		
      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue">Multi-Column Layout</h3>
      			<div className="view_editor edit_code mt_m">
      				<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="/css/step03/4.4.flexible/4.4.3.flexible-demo-multi-column-layout.html" className="uk_editor min_height_500 mb_result_height_450" mode="htmlmixed" theme="moxer" browser="default" result minHeight="500px" mbResultHeight="450px" />
      </Suspense></div>
      		</article>

      		
      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue">네이비게션</h3>
      			<div className="view_editor edit_code mt_m">
      				<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="/css/step03/4.4.flexible/4.4.3.flexible-demo-navigation.html" className="uk_editor min_height_500 mb_result_height_350" mode="htmlmixed" theme="moxer" browser="default" result minHeight="500px" mbResultHeight="350px" />
      </Suspense></div>
      		</article>
      	</section>

      	<figure className="img_figure indent mt_l">
      		<img src={`${IMG.CSS}/04_css_04_4.png`} alt="Flexbox 고급활용" />
      		<figcaption className="reference">
      			Flexbox 고급활용
      		</figcaption>
      	</figure>

      	<aside className="reference_box mt_xxl">
      		<strong className="tit">플렉서블 박스 레이아웃 참조</strong>
      		<ul className="link_lst">
      			<li className="reference"><a href="https://www.w3.org/TR/css-flexbox-1/" target="_blank" rel="noreferrer" className="fas" title="새창열림">W3C CSS Flexible Box Layout Module Level 1</a></li>
      			<li className="reference"><a href="https://drafts.csswg.org/css-align/" target="_blank" rel="noreferrer" className="fas" title="새창열림">W3C CSS Box Alignment Module Level 3</a></li>
      			<li className="reference"><a href="https://www.w3.org/TR/css-writing-modes-3/#writing-mode" target="_blank" rel="noreferrer" className="fas" title="새창열림">W3C CSS Writing Modes Level 3</a></li>
      			<li className="reference"><a href="https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Flexible_Box_Layout" target="_blank" rel="noreferrer" className="fas" title="새창열림">MDN CSS Flexible Box</a></li>
      			<li className="reference"><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank" rel="noreferrer" className="fas" title="새창열림">A Complete Guide to Flexbox (CSS-Tricks)</a></li>
      			<li className="reference"><a href="https://www.tutorialspoint.com/flexbox/" target="_blank" rel="noreferrer" className="fas" title="새창열림">Flexbox Tutorial for Beginners (Tutorials Point)</a></li>
      			<li className="reference"><a href="https://webdesign.tutsplus.com/tutorials/a-comprehensive-guide-to-flexbox-alignment--cms-30183" target="_blank" rel="noreferrer" className="fas" title="새창열림">A Guide to Flexbox Alignment (Web Design Tuts)</a></li>
      			<li className="reference"><a href="http://yoksel.github.io/flex-cheatsheet/" target="_blank" rel="noreferrer" className="fas" title="새창열림">flex-cheatsheet</a></li>
      			<li className="reference"><a href="https://jonneal.dev/flexibility/" target="_blank" rel="noreferrer" className="fas" title="새창열림">flex-cheatsheet</a></li>
      			<li className="reference"><a href="https://www.freecodecamp.org/news/flexbox-the-ultimate-css-flex-cheatsheet/" target="_blank" rel="noreferrer" className="fas" title="새창열림">CSS Flex Cheatsheet (freeCodeCamp)</a></li>
      			<li className="reference"><a href="https://dev.opera.com/articles/flexbox-basics/" target="_blank" rel="noreferrer" className="fas" title="새창열림">Flexbox at Opera</a></li>
      			<li className="reference"><a href="https://bocoup.com/blog/dive-into-flexbox" target="_blank" rel="noreferrer" className="fas" title="새창열림">Diving into Flexbox by Bocoup</a></li>
      			<li className="reference"><a href="https://css-tricks.com/using-flexbox/" target="_blank" rel="noreferrer" className="fas" title="새창열림">Mixing syntaxes for best browser support on CSS-Tricks</a></li>
      			<li className="reference"><a href="https://www.alsacreations.com/tuto/lire/1493-css3-flexbox-layout-module.html" target="_blank" rel="noreferrer" className="fas" title="새창열림">Flexbox by Raphael Goetter (FR)</a></li>
      			<li className="reference"><a href="https://bennettfeely.com/flexplorer/" target="_blank" rel="noreferrer" className="fas" title="새창열림">Flexplorer by Bennett Feely</a></li>
      			<li className="reference"><a href="https://css-tricks.com/using-flexbox/" target="_blank" rel="noreferrer" className="fas" title="새창열림">flexbox 구버전과 신버전 브라우저 지원을 위한 최고의 방법</a></li>
      			<li className="reference"><a href="https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/dev-guides/hh673531(v=vs.85)?redirectedfrom=MSDN" target="_blank" rel="noreferrer" className="fas" title="새창열림">IE flexbox 참고 자료</a></li>
      		</ul>
      	</aside>
    </>
  )
}

export default CssFlexiblePart4Page
