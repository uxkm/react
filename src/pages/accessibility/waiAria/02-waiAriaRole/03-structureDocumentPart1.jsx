import { useAccessibilityPageMeta } from '@/hooks/useAccessibilityPageMeta.js'
import { IMG } from '@/config/path'
import CodeBlock from '@/components/code/CodeBlock'

const PAGE_LAYOUT = {
  mainClass: "structureDocument",
  type: "accessibility",
  titleSticky: true,
  info: false,
  note: false,
  sideMenu: true,
  reference: true,
  contentList: true,
  depth3Last: true,
  bottomEditor: false
}

const PAGE_DATA = {
  title: "문서 구조 역할(Document Structure Roles) part1 | WAI-ARIA 역할",
  description: "WAI-ARIA (Web Accessibility Initiative - Accessible Rich Internet Applications)의 역할(Role)은 웹 콘텐츠와 웹 애플리케이션의 접근성을 향상시키기 위해 사용되는 속성입니다. 이 페이지에서는 WAI-ARIA의 역할 중 문서 구조 역할(Document Structure Roles)에 대해 소개합니다.",
  keyword: "Accessibility, a11y, wcag, kwcag, macag, kiosk, 접근성, 웹 콘텐츠 접근성, 한국형 웹 콘텐츠 접근성, 모바일 앱 접근성, 무인정보단밀기 접근성",
}

function StructureDocumentPart1Page() {
  useAccessibilityPageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  })


  return (
    <>
      <blockquote className="uk_note common_note mt_xxl" role="note">
      	<strong className="sound_only">요약 설명</strong>
      	<p>
      		<b>문서 구조 역할(Document Structure Roles)</b>은 웹 페이지나 애플리케이션의 콘텐츠를 논리적이고 의미 있는 방식으로 구성하는 데 사용됩니다.
      		이 역할은 문서의 주요 부분을 정의하고, 보조 기술이 이 구조를 이해할 수 있도록 도와줍니다.
      		또한, 페이지를 효율적으로 탐색할 수 있도록 콘텐츠를 구조화하는 데 필수적입니다.
      	</p>
      	<p className="reference mt_ms">
      		<a href="https://www.w3.org/TR/wai-aria-1.2/#document_structure_roles" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA Document Structure Roles</a><br />
      	</p>
      </blockquote>











      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">application 역할</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>application</code> 역할은 웹 페이지의 특정 영역이 일반적인 웹 콘텐츠와는 다르게,
      				고도의 상호작용이 필요한 애플리케이션처럼 동작함을 보조 기술에 알리는 데 사용됩니다.
      				이 역할은 웹 페이지에서 데스크탑 애플리케이션과 유사한 상호작용을 제공하는 UI 요소에 사용되며,
      				사용자에게 더 복잡한 기능을 제공하기 위해 사용됩니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#application" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA application</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/application_role" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN ARIA application</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">기본 설명</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<code>application</code> 역할은 복잡한 상호작용을 요구하는 웹 애플리케이션의 특정 영역을 나타냅니다.
      					이 역할을 사용하면 보조 기술이 이 콘텐츠를 데스크탑 애플리케이션처럼 처리할 수 있게 되며,
      					사용자는 더 정교한 상호작용을 수행할 수 있습니다.
      				</li>
      				<li>
      					<strong>적절한 사용 필수</strong>
      					<p>
      						<code>application</code> 역할은 복잡한 기능이 필요한 웹 애플리케이션에만 사용해야 하며,
      						일반적인 웹 페이지나 단순 인터페이스에는 사용하지 않는 것이 좋습니다.
      						이는 사용자의 웹 탐색 경험을 보호하고, 불필요한 복잡성을 피하는 데 중요합니다.
      					</p>
      				</li>
      				<li>
      					<strong>중요한 점</strong>
      					<p>
      						<code>application</code> 역할을 사용하는 경우,
      						사용자가 애플리케이션 모드에서 필요한 상호작용 방법을 이해할 수 있도록 충분한 안내를 제공해야 합니다.
      						이를 통해 사용자 경험과 접근성을 모두 향상시킬 수 있습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>적절한 사용 범위 설정</strong>
      					<p>
      						<code>application</code> 역할은 특정 기능이 복잡하고, 상호작용이 고도화된 영역에만 사용해야 합니다.
      						예를 들어, 사용자 입력과 피드백이 빈번하고 즉각적인 처리가 필요한 인터페이스에 사용됩니다.
      					</p>
      				</li>
      				<li>
      					<strong>일반적인 웹 페이지에는 사용하지 않기</strong>
      					<p>
      						일반적인 콘텐츠 탐색을 필요로 하는 웹 페이지나 단순한 인터페이스에는 <code>application</code> 역할을 사용하지 않는 것이 좋습니다.
      						이는 사용자가 웹 페이지와 상호작용하는 기본적인 방법을 방해할 수 있습니다.
      					</p>
      				</li>
      				<li>
      					<strong>스크린 리더와의 상호작용 주의</strong>
      					<p>
      						<code>application</code> 역할을 사용하면 스크린 리더는 기본 탐색 모드를 비활성화하고,
      						애플리케이션 모드로 전환됩니다. 이로 인해 사용자는 일반적인 문서 탐색 키보드 명령을 사용할 수 없게 되므로,
      						필요한 경우 키보드 단축키와의 상호작용 방법을 안내해야 합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상속된 상태 및 속성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>aria-labelledby</strong>
      					<p>
      						애플리케이션 영역의 레이블을 참조합니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-describedby</strong>
      					<p>
      						애플리케이션 영역에 대한 추가 설명을 제공합니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-live</strong>
      					<p>
      						애플리케이션 내에서 실시간으로 업데이트되는 정보를 사용자에게 전달할 수 있습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">잘못된 예시</h4>
      				<p className="mt_s">
      					이 예시는 <code>application</code> 역할을 일반적인 웹 콘텐츠에 사용하고 있습니다.
      					<code>application</code> 역할은 복잡한 웹 애플리케이션 기능을 제공하는 영역에만 사용되어야 합니다.
      					단순한 정보 제공에는 적합하지 않습니다.
      				</p>
      				
      <CodeBlock title="application 역할 - 잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="application">
      							<p>Welcome to our website. Here is some basic information.</p>
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">올바른 예시</h4>
      				<p className="mt_s">
      					이 예시는 복잡한 상호작용이 필요한 스프레드시트 애플리케이션을 나타내며,
      					<code>application</code> 역할을 사용하여 사용자가 이 인터페이스를 데스크탑 애플리케이션처럼 사용할 수 있도록 설정했습니다.
      				</p>
      				
      <CodeBlock title="application 역할 - 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="application" aria-labelledby="spreadsheetTitle">
      							<h2 id="spreadsheetTitle">Spreadsheet Application</h2>
      							<!-- Complex spreadsheet interface goes here -->
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">복잡한 UI 예시</h4>
      				<p className="mt_s">
      					사용자 지정 스프레드시트 UI를 <code>application</code> 역할과 함께 구현한 예시입니다.
      					사용자는 키보드를 사용하여 스프레드시트 셀 간을 이동할 수 있으며,
      					보조 기술은 이 영역을 일반적인 웹 페이지의 일부로 인식하지 않고, 애플리케이션처럼 처리합니다.
      				</p>
      				
      <CodeBlock title="application 역할 - 복잡한 UI 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="application" aria-labelledby="app-title">
      							<h1 id="app-title">Custom Spreadsheet</h1>
      							<div role="grid" aria-label="Spreadsheet Grid">
      								<div role="row">
      									<div role="gridcell" tabindex="0">A1</div>
      									<div role="gridcell" tabindex="-1">B1</div>
      									<div role="gridcell" tabindex="-1">C1</div>
      								</div>
      								<div role="row">
      									<div role="gridcell" tabindex="-1">A2</div>
      									<div role="gridcell" tabindex="-1">B2</div>
      									<div role="gridcell" tabindex="-1">C2</div>
      								</div>
      							</div>
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">고급 상호작용이 필요한 애플리케이션 예시</h4>
      				<p className="mt_s">
      					이 예시는 드로잉 애플리케이션을 구현한 것으로,
      					사용자에게 그리기 도구를 선택하고, 캔버스에 그림을 그릴 수 있는 기능을 제공합니다.
      					<code>application</code> 역할은 보조 기술이 이 영역을 복잡한 상호작용을 필요로 하는 애플리케이션으로 인식하게 합니다.
      				</p>
      				
      <CodeBlock title="고급 상호작용이 필요한 애플리케이션 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="application" aria-labelledby="app-label">
      							<h1 id="app-label">Drawing Application</h1>
      							<canvas id="drawing-canvas" aria-label="Drawing Canvas"></canvas>
      							<div>
      								<button aria-label="Select Pencil Tool">Pencil</button>
      								<button aria-label="Select Eraser Tool">Eraser</button>
      							</div>
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">복잡한 그래픽 에디터 예시</h4>
      				<p className="mt_s">
      					이 예시는 사용자가 다양한 도구를 사용하여 그래픽 작업을 수행할 수 있는 그래픽 에디터를 나타냅니다.
      					<code>application</code> 역할은 이 영역을 일반적인 웹 콘텐츠와 구분하여, 보조 기술이 이를 애플리케이션으로 인식하게 합니다.
      				</p>
      				
      <CodeBlock title="application 역할 - 복잡한 그래픽 에디터 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="application" aria-labelledby="editorTitle">
      							<h2 id="editorTitle">Graphic Editor</h2>
      							<div class="toolbar">
      								<!-- Toolbar with various tools -->
      							</div>
      							<div class="canvas">
      								<!-- Canvas for drawing -->
      							</div>
      						</div>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">article 역할</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>article</code> 역할은 웹 페이지에서 독립적으로 구분될 수 있는 콘텐츠 블록을 나타냅니다.
      				이 콘텐츠 블록은 독립적으로 배포하거나 재사용할 수 있으며,
      				문서의 다른 부분과 구별되는 자체적인 의미를 가지고 있습니다.
      				예를 들어, 뉴스 기사, 블로그 포스트, 포럼의 글 등이 이에 해당됩니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#article" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA article</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/article_role" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN ARIA article</a><br />
      				<a href="/publishing/html/03-sections/05-article_element" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">UXKM : article element</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">기본 설명</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<code>article</code> 역할은 웹 페이지에서 독립적으로 이해될 수 있는 콘텐츠를 정의하는 데 사용됩니다.
      					이 역할을 사용하면 보조 기술이 이 콘텐츠를 독립적인 문서로 처리할 수 있도록 도와줍니다.
      				</li>
      				<li>
      					<strong>시멘틱 마크업 추천</strong>
      					<p>
      						가능하면 HTML5 시멘틱 요소인 <code>&lt;article&gt;</code>을 사용하여 독립적인 콘텐츠를 정의하는 것이 좋습니다.
      						이 방법은 문서의 의미를 명확히 하고, 접근성을 자연스럽게 향상시킵니다.
      					</p>
      				</li>
      				<li>
      					<strong>중요한 점</strong>
      					<p>
      						<code>article</code> 역할은 독립적인 의미를 가지는 콘텐츠에만 사용해야 하며,
      						문서의 다른 부분과 함께 이해되어야 하는 콘텐츠에는 적합하지 않습니다.<br />
      						필요한 경우 <code>aria-labelledby</code>와 <code>aria-describedby</code> 속성을 사용해 콘텐츠의 제목과 설명을 명확히 제공하여,
      						보조 기술 사용자가 콘텐츠를 쉽게 이해할 수 있도록 해야 합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>독립적인 콘텐츠에 사용</strong>
      					<p>
      						<code>article</code> 역할은 독립적으로 읽히고 이해될 수 있는 콘텐츠에만 사용해야 합니다.
      						문서나 페이지의 일부로만 의미가 있는 콘텐츠에는 사용하지 않습니다.
      					</p>
      				</li>
      				<li>
      					<strong>HTML5 시멘틱 요소 사용 권장</strong>
      					<p>
      						가능하면 HTML5의 <code>&lt;article&gt;</code> 요소를 사용하여 시멘틱하게 콘텐츠를 정의하는 것이 좋습니다.
      						이는 보조 기술이 콘텐츠를 올바르게 인식하고 처리할 수 있도록 도와줍니다.
      					</p>
      				</li>
      				<li>
      					<strong>중복 사용 방지</strong>
      					<p>
      						문서 내에서 중복되는 <code>article</code> 역할을 사용할 경우, 콘텐츠의 독립적인 의미를 잃을 수 있으므로 주의해야 합니다.
      						각각의 <code>article</code>은 고유한 의미를 가져야 합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상속된 상태 및 속성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>aria-labelledby</strong>
      					<p>
      						<code>article</code>의 제목을 지정하여 보조 기술이 이를 콘텐츠의 제목으로 식별하게 합니다. 이 속성은 콘텐츠의 제목 요소를 참조하도록 설정할 수 있습니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-describedby</strong>
      					<p>
      						<code>article</code>의 설명을 제공하여 보조 기술이 이 콘텐츠의 목적이나 추가적인 설명을 사용자에게 전달할 수 있게 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-label</strong>
      					<p>
      						<code>article</code>의 목적을 명확히 설명하는 레이블을 제공합니다.
      						이 속성은 <code>article</code>이 어떤 역할을 하는지 명확히 하여, 보조 기술 사용자가 이해하기 쉽게 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>기타 상속된 속성</strong>
      					<p>
      						<code>article</code> 역할은 일반적으로 특정 상태를 상속받지 않지만,
      						필요에 따라 <code>aria-live</code>나 <code>aria-busy</code> 속성 등을 추가하여 콘텐츠가 동적으로 업데이트될 때 정보를 사용자에게 제공할 수 있습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">잘못된 예시</h4>
      				<p className="mt_s">
      					이 예시는 회사 소개를 나타내는 콘텐츠에 <code>article</code> 역할을 사용하고 있지만,
      					이 콘텐츠는 독립적으로 이해되기보다는 문서 전체와 연관된 설명입니다.
      					이 경우, <code>article</code> 역할보다는 다른 시멘틱 역할이나 일반적인 블록 요소를 사용하는 것이 적합합니다.
      				</p>
      				
      <CodeBlock title="article 역할 / 잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="article">
      							<h2>회사 소개</h2>
      							<p>우리는 고객에게 최고의 서비스를 제공합니다.</p>
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">올바른 예시</h4>
      				<p className="mt_s">
      					이 예시는 독립적인 뉴스 기사 또는 블로그 게시물로 읽힐 수 있는 콘텐츠에 <code>article</code> 역할을 적절히 사용하고 있습니다.
      					이 콘텐츠는 자체적으로 의미가 있으며, 다른 문맥에서도 이해될 수 있습니다.
      					또한, <code>aria-labelledby</code> 속성을 사용해 <code>article</code>의 제목을 보조 기술이 인식할 수 있도록 설정했습니다.
      				</p>
      				
      <CodeBlock title="article 역할 / 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="article" aria-labelledby="climateChangeTitle">
      							<h2 id="climateChangeTitle">기후 변화의 영향</h2>
      							<p>기후 변화는 환경에 상당한 영향을 미칩니다...</p>
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">(권장) 시멘틱 사용 예시</h4>
      				<p className="mt_s">
      					이 예시는 HTML5 시멘틱 요소인 <code>&lt;article&gt;</code>을 사용하여 블로그 게시물을 정의한 것입니다.
      					<code>&lt;article&gt;</code> 요소는 기본적으로 <code>article</code> 역할을 가지며,
      					<code>aria-labelledby</code>와 <code>aria-describedby</code> 속성을 통해 제목과 설명을 명확히 지정하여
      					보조 기술이 이 콘텐츠를 올바르게 처리할 수 있도록 돕습니다.
      				</p>
      				
      <CodeBlock title="복합형 위젯 역할(WAI-ARIA) / article 역할 / 시멘틱 사용 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<article aria-labelledby="writingSkillsTitle" aria-describedby="writingSkillsDesc">
      							<h2 id="writingSkillsTitle">글쓰기 능력을 향상시키는 방법</h2>
      							<p id="writingSkillsDesc">
      								많이 읽고 많이 쓰는 방법밖에 없습니다.
      								적당히 하려면 미리 포기하세요.
      							</p>
      						</article>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">cell 역할</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>cell</code> 역할은 ARIA 문서 구조 역할 중에서 표(<code>table</code>)의 개별 셀을 나타내는 중요한 역할입니다.
      				HTML의 <code>&lt;td&gt;</code>(표의 데이터 셀)와 <code>&lt;th&gt;</code>(표의 헤더 셀) 요소는 기본적으로 <code>cell</code> 역할을 수행하며,
      				이 역할은 표의 구조를 정의하고 각 셀이 데이터를 어떻게 표현하는지를 보조 기술에 설명하는 역할을 합니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#cell" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA cell</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/cell_role" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN ARIA cell</a><br />
      				<a href="/publishing/html/08-table/10-td_element" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">UXKM : td element</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">기본 설명</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<code>cell</code> 역할은 표의 각 셀을 시멘틱하게 정의하는 중요한 역할을 수행합니다.
      					<code>&lt;td&gt;</code>와 <code>&lt;th&gt;</code> 요소를 사용하여 데이터를 명확하게 구조화하고,
      					보조 기술이 이를 올바르게 해석할 수 있도록 돕습니다.
      				</li>
      				<li>
      					<strong>적절한 사용</strong>
      					<p>
      						<code>scope</code>, <code>headers</code>, <code>aria-colindex</code>, <code>aria-rowindex</code>
      						등의 속성을 활용하여 표의 구조를 명확히 하고,
      						복잡한 표에서도 셀 간의 관계를 명확히 정의할 수 있습니다.
      					</p>
      				</li>
      				<li>
      					<strong>중요한 점</strong>
      					<p>
      						표의 각 셀을 정확하게 정의함으로써, 사용자가 표 데이터를 쉽게 탐색하고 이해할 수 있도록 돕는 중요한 도구입니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>시멘틱 마크업 사용</strong>
      					<p>
      						표의 셀을 정의할 때는 시멘틱한 마크업을 사용하여 표의 구조와 의미를 명확히 해야 합니다.
      						<code>&lt;th&gt;</code>와 <code>&lt;td&gt;</code> 요소를 적절하게 사용하고,
      						필요에 따라 <code>scope</code> 및 <code>headers</code> 속성을 추가하여 셀과 헤더 간의 관계를 명확히 정의하는 것이 중요합니다.
      					</p>
      				</li>
      				<li>
      					<strong>복잡한 표에서의 역할</strong>
      					<p>
      						복잡한 표에서 <code>aria-colindex</code>, <code>aria-rowindex</code>,
      						<code>aria-colspan</code>, <code>aria-rowspan</code>과 같은 <b>ARIA 속성</b>을 활용하여,
      						보조 기술이 셀의 위치와 범위를 정확히 이해할 수 있도록 해야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>일관성 유지</strong>
      					<p>
      						표의 셀에 대한 속성 설정 시 일관성을 유지하여, 사용자가 표를 쉽게 탐색하고 이해할 수 있도록 해야 합니다.
      						특히 복잡한 표의 경우, 일관성 있는 인덱스와 범위 설정이 중요합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상속된 상태 및 속성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>scope 속성</strong>
      					<p>
      						<code>&lt;th&gt;</code> 요소에 사용되어 해당 헤더 셀이 적용되는 셀의 범위를 지정합니다.
      						예를 들어, <code>scope=&quot;col&quot;</code>은 열 헤더, <code>scope=&quot;row&quot;</code>는 행 헤더를 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>headers 속성</strong>
      					<p>
      						<code>&lt;td&gt;</code> 요소에 사용되어 이 셀이 참조하는 헤더 셀의 <code>id</code>를 지정합니다.
      						이는 특히 복잡한 표에서 셀과 관련 헤더 간의 관계를 명확하게 설명하는 데 유용합니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-colindex 및 aria-rowindex</strong>
      					<p>
      						ARIA 속성 중 하나로, 셀이 속한 열과 행의 인덱스를 지정하여 보조 기술이 표의 셀 위치를 정확히 이해할 수 있도록 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-colspan 및 aria-rowspan</strong>
      					<p>
      						ARIA 속성으로, 셀이 가로 또는 세로로 몇 개의 셀을 병합하는지 설명합니다. 이는 복잡한 테이블 레이아웃에서 특히 유용합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">기본 데이터 셀 및 헤더 셀</h4>
      				<p className="mt_s">
      					이 예시는 <code>&lt;th&gt;</code>와 <code>&lt;td&gt;</code> 요소를 사용하여 각각의 셀을 정의하고 있습니다.
      					<code>&lt;th&gt;</code> 요소는 열 헤더로 설정되며, <code>scope=&quot;col&quot;</code> 속성을 통해 명확히 정의됩니다.
      					이 구조는 ARIA 문서 구조 역할에서 기본적인 <code>cell</code> 역할을 수행합니다.
      				</p>
      				
      <CodeBlock title="cell 역할 - 기본 데이터 셀 및 헤더 셀" language="javascript" className="uk_gist_code_box mt_m">
      {`<table>
      							<tr>
      								<th scope="col">Name</th>
      								<th scope="col">Age</th>
      							</tr>
      							<tr>
      								<td>John Doe</td>
      								<td>30</td>
      							</tr>
      						</table>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">복잡한 표 구조에서의 cell 역할</h4>
      				<p className="mt_s">
      					이 예시는 <code>&lt;thead&gt;</code>와 <code>&lt;tbody&gt;</code> 요소를 사용하여 복잡한 표 구조를 시멘틱하게 나누고 있습니다.
      					<code>&lt;th&gt;</code> 요소는 행과 열 헤더로 사용되며,
      					각 데이터 셀(<code>td</code>)은 <code>headers</code> 속성을 사용해 관련 헤더를 참조합니다.
      				</p>
      				
      <CodeBlock title="cell 역할 - 복잡한 표 구조에서의 cell 역할" language="javascript" className="uk_gist_code_box mt_m">
      {`<table>
      							<thead>
      								<tr>
      									<th scope="col">Department</th>
      									<th scope="col">Q1</th>
      									<th scope="col">Q2</th>
      									<th scope="col">Q3</th>
      									<th scope="col">Q4</th>
      								</tr>
      							</thead>
      							<tbody>
      								<tr>
      									<th scope="row">Sales</th>
      									<td headers="Q1">5000</td>
      									<td headers="Q2">7000</td>
      									<td headers="Q3">8000</td>
      									<td headers="Q4">9000</td>
      								</tr>
      								<tr>
      									<th scope="row">Marketing</th>
      									<td headers="Q1">6000</td>
      									<td headers="Q2">8000</td>
      									<td headers="Q3">7500</td>
      									<td headers="Q4">8500</td>
      								</tr>
      							</tbody>
      						</table>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">ARIA 속성을 활용한 예시</h4>
      				<p className="mt_s">
      					이 예시는 복잡한 표에서 각 셀의 정확한 위치를 나타내기 위해
      					<code>aria-colindex</code>와 <code>aria-rowindex</code> 속성을 사용하고 있습니다.
      					이러한 속성들은 보조 기술이 셀의 위치를 올바르게 파악할 수 있도록 도와줍니다.
      				</p>
      				
      <CodeBlock title="cell 역할 - ARIA 속성을 활용한 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<table>
      							<thead>
      								<tr>
      									<th scope="col" aria-colindex="1">Name</th>
      									<th scope="col" aria-colindex="2">Age</th>
      									<th scope="col" aria-colindex="3">Department</th>
      								</tr>
      							</thead>
      							<tbody>
      								<tr>
      									<td aria-rowindex="2" aria-colindex="1">John Doe</td>
      									<td aria-rowindex="2" aria-colindex="2">30</td>
      									<td aria-rowindex="2" aria-colindex="3">Sales</td>
      								</tr>
      								<tr>
      									<td aria-rowindex="3" aria-colindex="1">Jane Smith</td>
      									<td aria-rowindex="3" aria-colindex="2">28</td>
      									<td aria-rowindex="3" aria-colindex="3">Marketing</td>
      								</tr>
      							</tbody>
      						</table>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">columnheader 역할</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>columnheader</code> 역할은 HTML 테이블에서 열의 제목을 나타내는 헤더 셀을 정의합니다.
      				이 역할은 주로 <code>&lt;th&gt;</code> 요소와 함께 사용되며, 특정 열의 데이터를 설명하거나 요약하는 기능을 합니다.
      				<code>columnheader</code> 역할을 통해 보조 기술은 해당 열이 무엇을 나타내는지 사용자에게 명확하게 전달할 수 있습니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#columnheader" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA columnheader</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/columnheader_role" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN ARIA columnheader</a><br />
      				<a href="/publishing/html/08-table/09-th_element" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">UXKM : th element</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">기본 설명</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<code>columnheader</code> 역할은 HTML 테이블에서 열의 제목을 나타내며, <code>&lt;th&gt;</code> 요소와 함께 사용됩니다.
      					이 역할은 테이블의 열이 나타내는 데이터 유형을 설명하고, 보조 기술이 이를 올바르게 해석하도록 돕습니다.
      				</li>
      				<li>
      					<strong>적절한 사용</strong>
      					<p>
      						<code>&lt;th&gt;</code> 요소와 <code>scope</code>, <code>aria-sort</code>, <code>aria-colspan</code> 등의 속성을 적절히 사용하여,
      						열 헤더의 역할과 상태를 명확히 정의하는 것이 중요합니다.
      					</p>
      				</li>
      				<li>
      					<strong>중요한 점</strong>
      					<p>
      						테이블의 각 열을 시멘틱하게 정의함으로써, 사용자가 테이블 데이터를 쉽게 이해하고 탐색할 수 있도록 돕는 중요한 도구입니다.
      						표의 일관성과 명확성을 유지하여 사용자 경험과 접근성을 모두 향상시킬 수 있습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>시멘틱 마크업 사용</strong>
      					<p>
      						<code>&lt;th&gt;</code> 요소와 <code>scope=&quot;col&quot;</code> 속성을 함께 사용하여 열 헤더의 역할을 명확히 정의하는 것이 중요하며,
      						보조 기술이 표의 구조를 이해하는 데 도움을 줍니다.
      					</p>
      				</li>
      				<li>
      					<strong>정렬 상태 명확히 지정</strong>
      					<p>
      						열 헤더가 정렬 가능하다면, <code>aria-sort</code> 속성을 사용해 현재 열의 정렬 상태를 명확히 지정하여,
      						사용자들이 테이블의 데이터 정렬 상태를 쉽게 파악할 수 있도록 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>병합된 셀의 명확한 정의</strong>
      					<p>
      						<code>aria-colspan</code> 및 <code>aria-rowspan</code> 속성을 사용해 병합된 셀의 범위를 명확히 정의해야 합니다.
      						이는 복잡한 테이블에서 셀 간의 관계를 이해하는 데 필수적입니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상속된 상태 및 속성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>scope 속성</strong>
      					<p>
      						<code>&lt;th&gt;</code> 요소에서 사용되며, 열 헤더가 적용되는 범위를 정의합니다.
      						예를 들어, <code>scope=&quot;col&quot;</code>은 열 전체에 적용되는 헤더임을 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-sort 속성</strong>
      					<p>
      						정렬 가능한 열 헤더에 사용되며, 열이 오름차순(ascending), 내림차순(descending), 정렬되지 않음(none),
      						또는 기타 사용자 정의 정렬(other) 상태 중 어떤 상태인지 지정합니다.
      						이는 보조 기술이 현재 테이블의 정렬 상태를 사용자에게 전달하는 데 도움을 줍니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-colspan</strong>
      					<p>
      						열 헤더가 가로로 병합된 열의 수를 지정합니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-rowspan</strong>
      					<p>
      						열 헤더가 세로로 병합된 행의 수를 지정합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">기본 열 헤더 사용 예시</h4>
      				<p className="mt_s">
      					이 예시는 열 제목을 나타내기 위해 <code>&lt;th&gt;</code> 요소를 사용하고 있으며,
      					<code>scope=&quot;col&quot;</code> 속성을 통해 열 전체에 적용되는 헤더임을 명확히 하고 있습니다.
      					이 구조는 ARIA에서 <code>columnheader</code> 역할을 암시적으로 수행합니다.
      				</p>
      				
      <CodeBlock title="columnheader 역할 - 기본 열 헤더 사용 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<table>
      							<thead>
      								<tr>
      									<th scope="col">Name</th>
      									<th scope="col">Age</th>
      									<th scope="col">Department</th>
      								</tr>
      							</thead>
      							<tbody>
      								<tr>
      									<td>John Doe</td>
      									<td>30</td>
      									<td>Sales</td>
      								</tr>
      								<tr>
      									<td>Jane Smith</td>
      									<td>28</td>
      									<td>Marketing</td>
      								</tr>
      							</tbody>
      						</table>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">정렬 가능한 열 헤더 예시</h4>
      				<p className="mt_s">
      					이 예시는 <code>aria-sort=&quot;ascending&quot;</code> 속성을 사용하여 현재 열이 오름차순으로 정렬되어 있음을 나타냅니다.
      					이는 보조 기술이 현재 열의 정렬 상태를 사용자에게 전달하는 데 유용합니다.
      				</p>
      				
      <CodeBlock title="columnheader 역할 - 정렬 가능한 열 헤더 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<table>
      							<thead>
      								<tr>
      									<th scope="col" aria-sort="ascending">Name</th>
      									<th scope="col">Age</th>
      									<th scope="col">Department</th>
      								</tr>
      							</thead>
      							<tbody>
      								<tr>
      									<td>John Doe</td>
      									<td>30</td>
      									<td>Sales</td>
      								</tr>
      								<tr>
      									<td>Jane Smith</td>
      									<td>28</td>
      									<td>Marketing</td>
      								</tr>
      							</tbody>
      						</table>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">병합된 열 헤더 예시</h4>
      				<p className="mt_s">
      					이 예시는 <code>aria-colspan</code> 속성을 사용해 첫 번째 행의 &quot;Employee Detail&quot; 헤더 셀이 두 개의 열을 병합하고 있음을 명확히 나타냅니다.
      					보조 기술은 이 정보를 바탕으로 셀이 포함하는 열의 범위를 이해할 수 있습니다.
      				</p>
      				
      <CodeBlock title="columnheader 역할 - 병합된 열 헤더 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<table>
      							<thead>
      								<tr>
      									<th scope="col" colspan="2" aria-colspan="2">Employee Details</th>
      									<th scope="col">Department</th>
      								</tr>
      								<tr>
      									<th scope="col">Name</th>
      									<th scope="col">Age</th>
      									<th scope="col">Department</th>
      								</tr>
      							</thead>
      							<tbody>
      								<tr>
      									<td>John Doe</td>
      									<td>30</td>
      									<td>Sales</td>
      								</tr>
      								<tr>
      									<td>Jane Smith</td>
      									<td>28</td>
      									<td>Marketing</td>
      								</tr>
      							</tbody>
      						</table>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">definition 역할</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>definition</code> 역할은 웹 콘텐츠에서 용어의 정의를 제공하는 콘텐츠를 나타냅니다.
      				이 역할은 일반적으로 텍스트 내에서 중요한 용어의 의미를 명확하게 설명할 때 사용됩니다.
      				<code>definition</code> 역할은 보조 기술이 특정 용어의 정의를 사용자에게 올바르게 전달할 수 있도록 도와줍니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#definition" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA definition</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/definition_role" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN ARIA definition</a><br />
      				<a href="https://developer.mozilla.org/ko/docs/Web/HTML/Element/dfn" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN dfn element</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">기본 설명</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					definition 역할은 웹 콘텐츠에서 용어의 정의를 명확히 설명하는 데 사용됩니다.
      					이 역할을 통해 보조 기술은 사용자에게 특정 용어가 정의되고 있음을 알릴 수 있습니다.
      				</li>
      				<li>
      					<strong>적절한 사용</strong>
      					<p>
      						용어의 정의를 제공할 때는 시멘틱하게 <code>&lt;dfn&gt;</code> 요소를 사용하여,
      						정의가 명확히 구분되도록 하는 것이 중요합니다.
      					</p>
      				</li>
      				<li>
      					<strong>중요한 점</strong>
      					<p>
      						용어의 정의는 문서 내에서 일관되고 명확하게 제공되어야 하며,
      						이를 통해 사용자가 용어를 쉽게 이해하고 문서의 내용을 효과적으로 학습할 수 있도록 해야 합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>시멘틱 마크업 사용</strong>
      					<p>
      						용어의 정의를 나타낼 때는 <code>&lt;dfn&gt;</code> 요소를 사용하여 용어를 정의하는 콘텐츠를 명확히 구분하는 것이 중요합니다.
      					</p>
      				</li>
      				<li>
      					<strong>명확한 정의 제공</strong>
      					<p>
      						용어의 정의는 간결하고 명확하게 작성되어야 하며, 사용자가 해당 용어를 이해하는 데 도움이 되어야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>용어의 일관성 유지</strong>
      					<p>
      						문서 내에서 동일한 용어에 대해 일관된 정의를 제공하여, 사용자 경험의 일관성을 유지하는 것이 중요합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상속된 상태 및 속성</h3>
      			<p className="mt_m">
      				기본적으로 상속된 상태나 속성은 없습니다.
      				<mark><code>definition</code> 역할은 용어의 정의를 시멘틱하게 나타내기 위한 역할이므로, 추가적인 ARIA 상태나 속성은 필요하지 않습니다.</mark>
      			</p>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">기본 용어 정의 사용 예시</h4>
      				<p className="mt_s">
      					이 예시는 <code>&lt;dfn&gt;</code> 요소를 사용하여 &quot;HyperText&quot; 용어의 정의를 제공하고 있습니다.
      					보조 기술은 이 요소를 통해 &quot;HyperText&quot;가 정의되고 있음을 사용자에게 전달합니다.
      				</p>
      				
      <CodeBlock title="definition 역할 - 기본 용어 정의 사용 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<p>
      							HTML은 HyperText Markup Language의 약자입니다. <dfn>HyperText</dfn>는 웹 페이지 간의 연결을 의미합니다.
      						</p>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">용어와 정의의 시멘틱 구분 예시</h4>
      				<p className="mt_s">
      					<code>&lt;dfn&gt;</code> 요소를 사용하여 &quot;API&quot; 용어를 정의하고 있으며,
      					링크를 통해 동일한 정의로 참조할 수 있도록 설정한 예시입니다.
      					이는 문서 내에서 용어의 의미를 명확하게 구분하는 데 도움이 됩니다.
      				</p>
      				
      <CodeBlock title="definition 역할 - 용어와 정의의 시멘틱 구분 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<p>용어 <dfn id="dfn-api">API</dfn>는 응용 프로그램 인터페이스(Application Programming Interface)의 약자로, 소프트웨어 간의 상호작용을 정의합니다.</p>
      						<p>예를 들어, <a href="#dfn-api">API</a>는...</p>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">학술 자료에서의 정의 사용 예시</h4>
      				<p className="mt_s">
      					이 예시는 학술 문서에서 사용되는 중요한 용어를 정의하는 예시입니다.
      					<code>&lt;dfn&gt;</code> 요소는 용어 &quot;엔트로피&quot;의 정의를 제공하며, 독자가 문서의 내용을 더 잘 이해할 수 있도록 돕습니다.
      				</p>
      				
      <CodeBlock title="definition - 학술 자료에서의 정의 사용 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<p>
      						과학에서, <dfn>엔트로피</dfn>는 시스템의 무질서 정도를 나타내는 물리적 개념입니다.
      						</p>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">directory 역할</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>directory</code> 역할은 트리 구조로 조직된 목차나 파일 목록과 같은 계층적인 항목의 집합을 나타냅니다.
      				이 역할은 파일 시스템, 카탈로그, 탐색 메뉴와 같은 콘텐츠에서 사용될 수 있습니다.
      				<code>directory</code> 역할은 보조 기술이 이 목록을 탐색할 때, 항목 간의 계층 구조를 이해할 수 있도록 돕습니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#directory" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA directory</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/directory_role" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN ARIA directory</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">기본 설명</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>000000000</strong>
      					<p>
      						<code>directory</code> 역할은 트리 구조로 구성된 항목의 집합을 나타내며,
      						사용자가 이러한 구조를 쉽게 탐색할 수 있도록 돕습니다.
      						시멘틱 마크업에서는 기본적인 HTML 요소를 사용하여 이 역할을 자연스럽게 수행하며,
      						비표준 마크업에서는 다른 HTML 요소에 <code>role=&quot;directory&quot;</code>와 관련 <b>ARIA 속성</b>을 사용해 명시적으로 정의할 수 있습니다.
      					</p>
      				</li>
      				<li>
      					<strong>적절한 사용</strong>
      					<p>
      						계층 구조를 명확히 정의하고,
      						<code>aria-expanded</code>와 <code>aria-level</code> 속성을 사용하여 항목 간의 관계를 정확히 설정하는 것이 중요합니다.
      						시멘틱 마크업을 사용하면 자연스럽게 보조 기술이 이를 인식할 수 있으며,
      						비표준 마크업에서는 <b>ARIA 속성</b>을 적절히 활용해야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>중요한 점</strong>
      					<p>
      						<code>directory</code> 역할을 사용하여 복잡한 목록 구조를 시멘틱하게 정의함으로써,
      						사용자 경험과 접근성을 모두 향상시킬 수 있습니다.
      						이를 통해 사용자는 트리 구조를 보다 쉽게 탐색하고, 필요한 정보를 효율적으로 찾을 수 있습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>목록 항목 간의 계층 구조 정의</strong>
      					<p>
      						<code>directory</code> 역할을 사용할 때는 각 항목의 계층 구조를 명확히 정의해야 합니다.
      						이를 통해 보조 기술이 목록을 올바르게 해석하고, 사용자에게 효율적인 탐색 경험을 제공합니다.
      					</p>
      				</li>
      				<li>
      					<strong>적절한 확장 상태 관리</strong>
      					<p>
      						<code>aria-expanded</code> 속성을 사용해 항목의 확장 상태를 명확히 지정해야 합니다.
      						사용자가 목록을 탐색할 때, 현재 어떤 항목이 확장되어 있는지 알 수 있도록 해야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>중첩된 목록 관리</strong>
      					<p>
      						<code>directory</code> 역할은 중첩된 목록 구조에서 사용될 때 효과적입니다.
      						중첩된 항목은 계층 구조를 명확히 나타내야 하며, <code>aria-level</code> 속성을 적절히 설정해야 합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상속된 상태 및 속성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>aria-expanded</strong>
      					<p>
      						디렉토리 항목이 확장되어 있는지 여부를 나타냅니다.
      						<code>true</code>로 설정하면 항목이 확장되어 하위 항목이 표시되고, <code>false</code>로 설정하면 하위 항목이 숨겨집니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-level</strong>
      					<p>
      						디렉토리 항목이 트리 구조에서 어느 계층에 속하는지를 지정합니다.
      						이 속성을 사용하여 보조 기술이 항목 간의 계층 구조를 이해할 수 있도록 합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">잘못된 예시</h4>
      				<p className="mt_s">
      					이 예시는 <code>&lt;div&gt;</code> 요소를 사용하여 디렉토리 구조를 표현했지만,
      					<code>role=&quot;directory&quot;</code>와 같은 ARIA 속성 없이 사용되었습니다.
      					이로 인해 보조 기술이 이 구조를 올바르게 해석하지 못할 수 있습니다.
      				</p>
      				
      <CodeBlock title="directory 역할 -  잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div>
      							<div>Documents</div>
      							<div>Pictures
      								<div>
      									<div>Vacation</div>
      									<div>Family</div>
      								</div>
      							</div>
      							<div>Music</div>
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">올바른 예시 - div 요소 마크업을 사용한 디렉토리 구조</h4>
      				<p className="mt_s">
      					이 예시는 <code>&lt;div&gt;</code> 요소에 <code>role=&quot;directory&quot;</code>를 사용하여 디렉토리 구조를 명시적으로 나타냅니다.
      					<code>aria-expanded</code>와 <code>aria-level</code> 속성을 사용해 항목의 계층 구조와 확장 상태를 지정하고 있습니다.
      				</p>
      				
      <CodeBlock title="directory 역할 -  올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="directory">
      							<div role="treeitem">Documents</div>
      							<div role="treeitem" aria-expanded="false">Pictures
      								<div role="group">
      									<div role="treeitem" aria-level="2">Vacation</div>
      									<div role="treeitem" aria-level="2">Family</div>
      								</div>
      							</div>
      							<div role="treeitem">Music</div>
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">시멘틱 마크업을 사용한 기본 디렉토리 구조 예시</h4>
      				<p className="mt_s">
      					이 예시는 기본적인 디렉토리 구조를 시멘틱한 <code>&lt;ul&gt;</code> 및 <code>&lt;li&gt;</code> 요소를 사용하여 나타내고 있습니다.
      					이 구조는 기본적으로 보조 기술이 올바르게 인식할 수 있습니다.
      				</p>
      				
      <CodeBlock title="directory 역할 -  시멘틱 마크업 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<ul>
      							<li>Documents</li>
      							<li>Pictures
      								<ul>
      									<li>Vacation</li>
      									<li>Family</li>
      								</ul>
      							</li>
      							<li>Music</li>
      						</ul>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">document 역할</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>document</code> 역할은 웹 페이지에서 특정 섹션이 독립된 문서나 주요 콘텐츠 블록을 나타내도록 지정하는 데 사용됩니다.
      				이 역할은 웹 애플리케이션의 일부가 아닌 문서형 콘텐츠(예: 텍스트, 이미지, 비디오 등)를 설명하는 데 유용합니다.
      				<code>document</code> 역할은 주로 전체 페이지가 아닌 특정 섹션이 문서로서 해석되도록 할 때 사용됩니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#document" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA document</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/document_role" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN ARIA document</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">기본 설명</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<code>document</code> 역할은 웹 애플리케이션 내 특정 섹션이 독립된 문서로서 해석되어야 할 때 유용합니다.
      					이를 통해 보조 기술은 해당 섹션을 문서 탐색 모드에서 처리할 수 있습니다.
      				</li>
      				<li>
      					<strong>적절한 사용</strong>
      					<p>
      						<code>document</code> 역할은 전체 웹 페이지가 아닌, 독립된 문서로 간주해야 하는 특정 섹션에만 사용해야 합니다.
      						이 역할은 시멘틱하게 문서의 범위를 명확히 지정하고, 보조 기술이 이를 올바르게 인식할 수 있도록 해야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>중요한 점</strong>
      					<p>
      						<code>document</code> 역할을 사용하여 웹 애플리케이션 내에서 중요한 문서 콘텐츠를 명확히 지정함으로써,
      						사용자 경험과 접근성을 모두 향상시킬 수 있습니다.
      						이를 통해 사용자는 문서 콘텐츠를 더 쉽게 탐색하고, 필요한 정보를 효율적으로 찾을 수 있습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>웹 애플리케이션 내에서 사용</strong>
      					<p>
      						<code>document</code> 역할은 주로 웹 애플리케이션 내에서 독립적인 문서 콘텐츠를 설명할 때 사용됩니다.
      						전체 웹 페이지에 이 역할을 사용하는 것은 적절하지 않습니다.
      					</p>
      				</li>
      				<li>
      					<strong>문서 탐색 모드 활성화</strong>
      					<p>
      						이 역할을 사용하면 보조 기술은 문서 탐색 모드를 활성화하여 콘텐츠를 더 쉽게 탐색할 수 있습니다.
      					</p>
      				</li>
      				<li>
      					<strong>적절한 문서 범위 지정</strong>
      					<p>
      						<code>document</code> 역할을 사용할 때는 정확하게 해당 섹션만 독립된 문서로 지정해야 합니다.
      						잘못된 위치에 사용하면 사용자 경험에 혼란을 줄 수 있습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상속된 상태 및 속성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>aria-labelledby</strong>
      					<p>
      						이 속성은 문서의 제목을 지정하여 보조 기술이 이를 문서의 주요 제목으로 식별하도록 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-describedby</strong>
      					<p>
      						이 속성은 문서에 대한 설명을 제공하여 보조 기술이 이 콘텐츠의 목적이나 추가 정보를 사용자에게 전달할 수 있게 합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">잘못된 예시 - 웹 애플리케이션 전체에 사용</h4>
      				<p className="mt_s">
      					이 예시는 <code>role=&quot;document&quot;</code>를 전체 웹 애플리케이션에 적용했으나,
      					이 역할은 특정 섹션을 독립된 문서로 나타낼 때 사용해야 하므로 부적절합니다.
      				</p>
      				
      <CodeBlock title="document 역할 -  잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="document">
      							<header>
      								<h1>My Web Application</h1>
      							</header>
      							<nav>
      								<ul>
      									<li>Home</li>
      									<li>About</li>
      									<li>Contact</li>
      								</ul>
      							</nav>
      							<main>
      								<p>Welcome to my web application!</p>
      							</main>
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">올바른 예시 - 문서 섹션에 사용</h4>
      				<p className="mt_s">
      					이 예시는 <code>&lt;div&gt;</code> 요소에 <code>role=&quot;directory&quot;</code>를 사용하여 디렉토리 구조를 명시적으로 나타냅니다.
      					<code>aria-expanded</code>와 <code>aria-level</code> 속성을 사용해 항목의 계층 구조와 확장 상태를 지정하고 있습니다.
      				</p>
      				
      <CodeBlock title="document 역할 -  올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<section role="document" aria-labelledby="doc-title">
      							<h1 id="doc-title">User Guide</h1>
      							<p>This guide provides detailed instructions on how to use the web application...</p>
      						</section>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">(권장) 시멘틱 마크업에서의 기본 사용</h4>
      				<p className="mt_s">
      					이 예시는 시멘틱 마크업을 사용하여 <code>&lt;article&gt;</code> 요소로 독립된 문서 콘텐츠를 나타냅니다.
      					보조 기술은 이 콘텐츠를 문서로 인식하고 탐색할 수 있습니다.
      				</p>
      				
      <CodeBlock title="document 역할 - 시멘틱 마크업" language="javascript" className="uk_gist_code_box mt_m">
      {`<article>
      							<h1>Understanding Climate Change</h1>
      							<p>Climate change is a long-term shift in weather patterns...</p>
      						</article>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">feed 역할</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>feed</code> 역할은 소셜 미디어 타임라인, 뉴스 피드, 블로그 목록과 같이 지속적으로 업데이트되는 항목의 집합을 나타냅니다.
      				이 역할은 보조 기술이 이러한 콘텐츠의 특성을 이해하고, 사용자에게 적절히 전달할 수 있도록 돕습니다.
      				<code>feed</code> 역할은 주로 소셜 네트워크, 뉴스 애그리게이터, 블로그 플랫폼에서 사용됩니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#feed" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA feed</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/feed_role" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN ARIA feed</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">기본 설명</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<code>feed</code> 역할은 지속적으로 업데이트되는 콘텐츠 목록을 나타내며, 사용자가 이러한 동적 콘텐츠를 더 쉽게 탐색할 수 있도록 돕습니다.
      					이 역할은 보조 기술이 피드의 특성을 이해하고, 새로운 항목이 추가될 때 이를 사용자에게 전달할 수 있도록 설계되었습니다.
      				</li>
      				<li>
      					<strong>적절한 사용</strong>
      					<p>
      						<code>feed</code> 역할은 동적으로 갱신되는 콘텐츠에만 사용해야 하며,
      						각 피드 항목에 <code>article</code> 역할을 지정하여 보조 기술이 이를 독립적인 콘텐츠로 인식할 수 있도록 해야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>중요한 점</strong>
      					<p>
      						<code>feed</code> 역할을 사용하여 동적인 콘텐츠를 명확히 지정함으로써, 사용자 경험과 접근성을 모두 향상시킬 수 있습니다.
      						이를 통해 사용자는 피드를 쉽게 탐색하고, 최신 정보를 놓치지 않고 확인할 수 있습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>피드의 동적 특성 반영</strong>
      					<p>
      						<code>feed</code> 역할은 지속적으로 갱신되는 콘텐츠 목록에 사용되어야 합니다.
      						사용자가 피드 내에서 항목을 쉽게 탐색하고, 새롭게 추가된 콘텐츠를 인식할 수 있도록 해야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>실시간 업데이트 관리</strong>
      					<p>
      						<code>aria-live</code>와 <code>aria-busy</code> 속성을 사용해 피드가 업데이트 중일 때 사용자에게 이를 명확히 알릴 수 있어야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>피드 항목에 적절한 역할 지정</strong>
      					<p>
      						피드 내의 각 항목에는 <code>article</code> 역할을 지정하여, 보조 기술이 각 항목을 독립적인 콘텐츠로 인식하고 처리할 수 있도록 해야 합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상속된 상태 및 속성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>aria-busy</strong>
      					<p>
      						피드가 업데이트 중임을 나타내는 속성입니다. <code>true</code>로 설정되면 피드가 갱신 중임을 의미하며,
      						사용자가 새로운 콘텐츠가 추가되고 있음을 알 수 있습니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-live</strong>
      					<p>
      						피드의 실시간 업데이트를 사용자에게 알릴 수 있도록 설정합니다.
      						<code>polite</code>나 <code>assertive</code>로 설정하여 피드 항목이 업데이트될 때 보조 기술이 이를 어떻게 처리할지 지정할 수 있습니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-relevant</strong>
      					<p>
      						피드에서 어떤 종류의 변경 사항(추가, 삭제, 텍스트 변경 등)을 보조 기술이 사용자에게 알릴지 지정합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">잘못된 예시 - 피드 역할의 부적절한 사용</h4>
      				<p className="mt_s">
      					이 예시는 <code>role=&quot;feed&quot;</code>를 단순한 콘텐츠 블록에 적용했으나, 이 블록은 지속적으로 갱신되는 동적 콘텐츠가 아니므로 부적절합니다.
      					<code>feed</code> 역할은 주기적으로 업데이트되는 콘텐츠에만 사용해야 합니다.
      				</p>
      				
      <CodeBlock title="feed 역할 - 잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="feed">
      							<div>
      								<h2>Welcome to Our Website</h2>
      								<p>This is the homepage of our website...</p>
      							</div>
      							<div>
      								<h2>About Us</h2>
      								<p>Learn more about our company and team...</p>
      							</div>
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">올바른 예시 - 피드 역할의 적절한 사용</h4>
      				<p className="mt_s">
      					이 예시는 <code>role=&quot;feed&quot;</code>를 적절하게 사용하여 동적으로 갱신되는 콘텐츠 목록을 나타내고 있습니다.
      					또한, <code>aria-live=&quot;polite&quot;</code>와 <code>aria-relevant=&quot;additions&quot;</code> 속성을 사용해 피드가 업데이트될 때 사용자에게 알림을 제공합니다.
      				</p>
      				
      <CodeBlock title="feed 역할 - 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="feed" aria-live="polite" aria-relevant="additions">
      							<div role="article">
      								<h2>Latest Blog Post: The Future of AI</h2>
      								<p>Artificial intelligence continues to advance...</p>
      							</div>
      							<div role="article">
      								<h2>Health Tips: Staying Active in Winter</h2>
      								<p>Winter can be a tough time to stay active...</p>
      							</div>
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">div 요소 마크업을 사용한 피드 예시</h4>
      				<p className="mt_s">
      					<code>&lt;div&gt;</code> 요소에 <code>role=&quot;feed&quot;</code>를 지정하여 피드 역할을 명시적으로 나타냅니다.
      					각 피드 항목은 <code>role=&quot;article&quot;</code>을 사용해 독립적인 콘텐츠로 처리됩니다.
      					<code>aria-busy=&quot;true&quot;</code>로 설정하여 피드가 업데이트 중임을 알립니다.
      				</p>
      				
      <CodeBlock title="feed 역할 - div 요소 마크업을 사용한 피드" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="feed" aria-busy="true">
      							<div role="article">
      								<h2>Breaking News: Market Hits All-Time High</h2>
      								<p>The stock market reached an all-time high today...</p>
      							</div>
      							<div role="article">
      								<h2>New Tech Innovations in 2024</h2>
      								<p>The tech industry is abuzz with new innovations...</p>
      							</div>
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">시멘틱 마크업을 사용한 피드 예시</h4>
      				<p className="mt_s">
      					시멘틱 마크업을 사용하여 <code>&lt;section&gt;</code> 요소에 <code>role=&quot;feed&quot;</code>를 지정한 예시입니다.
      					각 피드 항목은 <code>&lt;article&gt;</code> 요소로 구성되어 있어 보조 기술이 이를 독립적인 콘텐츠로 처리할 수 있도록 합니다.
      				</p>
      				
      <CodeBlock title="feed 역할 - 시멘틱 마크업" language="javascript" className="uk_gist_code_box mt_m">
      {`<section role="feed" aria-busy="false">
      							<article>
      								<h2>Breaking News: Market Hits All-Time High</h2>
      								<p>The stock market reached an all-time high today...</p>
      							</article>
      							<article>
      								<h2>New Tech Innovations in 2024</h2>
      								<p>The tech industry is abuzz with new innovations...</p>
      							</article>
      						</section>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">figure 역할</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>figure</code> 역할은 이미지, 차트, 삽화, 코드 블록 등 독립적으로 설명할 수 있는 콘텐츠의 묶음을 나타냅니다.
      				이 역할은 콘텐츠가 본문 내의 특정 부분과 관련이 있지만, 독립적으로 이해될 수 있는 것을 나타낼 때 사용됩니다.
      				일반적으로 <code>figcaption</code> 요소를 사용하여 설명(캡션)을 포함하며,
      				이 설명은 <code>figure</code> 요소에 속한 콘텐츠를 보충하는 데 사용됩니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#figure" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA figure</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/figure_role" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN ARIA figure</a><br />
      				<a href="/publishing/html/04-grouping/10-figure_element" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">UXKM : figure element</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">기본 설명</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<code>figure</code> 역할은 이미지, 그래픽, 코드 블록 등 본문과 관련된 시각적 콘텐츠를 묶어주는 데 사용됩니다.
      					<code>figure</code> 요소는 본문 흐름과 독립적으로 재배치될 수 있으며, 참조 목적으로 사용됩니다.
      					보조 기술이 이 콘텐츠를 별도로 인식하여 사용자에게 전달할 수 있게 돕습니다.
      				</li>
      				<li>
      					<code>figcaption</code> 요소는 <code>figure</code> 내에 포함된 콘텐츠를 설명하는 텍스트를 제공하며,
      					보조 기술은 이를 사용하여 콘텐츠의 의미를 사용자에게 전달합니다.
      				</li>
      				<li>
      					<strong>적절한 사용</strong>
      					<p>
      						<code>figure</code> 요소는 시각적 콘텐츠나 코드 블록을 그룹화하고,
      						<code>figcaption</code> 요소를 사용해 설명을 제공하여 콘텐츠의 의미를 명확히 해야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>중요한 점</strong>
      					<p>
      						<code>figure</code> 역할을 사용하여 콘텐츠를 시멘틱하게 그룹화함으로써,
      						사용자 경험과 접근성을 모두 향상시킬 수 있습니다.
      						이를 통해 사용자는 시각적 콘텐츠의 맥락을 쉽게 이해하고, 필요한 정보를 효율적으로 찾을 수 있습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>시멘틱 마크업 사용</strong>
      					<p>
      						시각적 콘텐츠나 코드 블록을 그룹화할 때는 <code>&lt;figure&gt;</code> 요소를 사용하여 시멘틱하게 표현하는 것이 중요합니다.
      						이는 콘텐츠의 의미를 명확히 하고, 보조 기술이 이를 올바르게 해석할 수 있도록 돕습니다.
      					</p>
      				</li>
      				<li>
      					<strong>적절한 설명 제공</strong>
      					<p>
      						<code>figcaption</code> 요소를 사용하여 <code>figure</code> 내 콘텐츠를 설명하는 캡션을 제공해야 합니다.
      						이는 콘텐츠의 맥락을 명확히 하여, 사용자가 내용을 이해하는 데 도움이 됩니다.
      					</p>
      				</li>
      				<li>
      					<strong>독립적인 콘텐츠로 취급</strong>
      					<p>
      						<code>figure</code> 요소 내 콘텐츠는 본문 흐름과 독립적으로 이해될 수 있어야 하며, 이를 통해 다양한 위치에서 참조될 수 있습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상속된 상태 및 속성</h3>
      			<p className="mt_m">
      				기본적으로 상속된 상태나 속성은 없습니다.
      				<mark><code>figure</code> 역할은 콘텐츠를 시멘틱하게 그룹화하는 역할을 하므로, 추가적인 ARIA 상태나 속성이 필요하지 않습니다.</mark>
      			</p>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">잘못된 예시 - 독립적인 콘텐츠로 취급되지 않는 경우</h4>
      				<p className="mt_s">
      					이 예시는 <code>&lt;div&gt;</code> 요소를 사용하여 이미지를 설명하지만, 이 콘텐츠는 본문과 독립적으로 취급되지 않으며,
      					보조 기술이 이를 독립적인 콘텐츠로 인식하지 못할 수 있습니다. <code>figure</code> 요소를 사용하는 것이 더 적절합니다.
      				</p>
      				
      <CodeBlock title="figure 역할 -  잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div>
      							<img src="climate-change-graph.png" alt="Graph showing climate change over the last century">
      							<p>This graph illustrates climate change over the past century.</p>
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">올바른 예시 - 피드 역할의 적절한 사용</h4>
      				<p className="mt_s">
      					이 예시는 <code>role=&quot;feed&quot;</code>를 적절하게 사용하여 동적으로 갱신되는 콘텐츠 목록을 나타내고 있습니다.
      					<code>aria-live=&quot;polite&quot;</code>와 <code>aria-relevant=&quot;additions&quot;</code>
      					속성을 사용해 피드가 업데이트될 때 사용자에게 알리도록 설정했습니다.
      				</p>
      				
      <CodeBlock title="figure 역할 -  올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="feed" aria-live="polite" aria-relevant="additions">
      							<div role="article">
      								<h2>Latest Blog Post: The Future of AI</h2>
      								<p>Artificial intelligence continues to advance...</p>
      							</div>
      							<div role="article">
      								<h2>Health Tips: Staying Active in Winter</h2>
      								<p>Winter can be a tough time to stay active...</p>
      							</div>
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">(권장) 올바른 예시 - 시멘틱 마크업에서의 기본 사용</h4>
      				<p className="mt_s">
      					이 예시는 <code>&lt;figure&gt;</code> 요소를 사용하여 콘텐츠를 그룹화하고,
      					<code>figcaption</code> 요소를 사용하여 설명을 제공합니다.
      					이 구조는 시멘틱하게 올바르며, 보조 기술이 이 콘텐츠를 올바르게 해석할 수 있도록 합니다.
      				</p>
      				
      <CodeBlock title="figure 역할 -  시멘틱 마크업" language="javascript" className="uk_gist_code_box mt_m">
      {`<figure>
      							<img src="climate-change-graph.png" alt="Graph showing climate change over the last century">
      							<figcaption>Figure 1: Climate change trends over the last 100 years.</figcaption>
      						</figure>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">div 요소 마크업을 사용한 figure 역할 예시</h4>
      				<p className="mt_s">
      					이 예시는 <code>&lt;div&gt;</code> 요소에 <code>role=&quot;figure&quot;</code>를 사용하여 <code>figure</code> 역할을 명시적으로 지정합니다.
      					<code>&lt;div&gt;</code> 요소를 사용하여 설명 텍스트를 제공하고 있지만, <code>figcaption</code> 요소를 사용하는 것이 더 적절합니다.
      				</p>
      				
      <CodeBlock title="figure 역할 -  div 요소 마크업" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="figure">
      							<img src="climate-change-graph.png" alt="Graph showing climate change over the last century">
      							<div>Figure 1: Climate change trends over the last 100 years.</div>
      						</div>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">generic 역할</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>generic</code> 역할은 특정 시멘틱한 의미를 가지지 않는 일반적인 컨테이너를 나타냅니다.
      				이 역할은 기본적으로 아무 의미도 부여되지 않는 요소를 설명하며,
      				HTML의 기본적인 <code>&lt;div&gt;</code>와 <code>&lt;span&gt;</code> 요소와 유사한 역할을 합니다.
      				<code>generic</code> 역할은 보조 기술이 해당 요소에 특별한 시멘틱이 부여되지 않았음을 이해하도록 돕습니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#generic" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA generic</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/generic_role" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN ARIA generic</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">기본 설명</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<code>generic</code> 역할은 시멘틱적으로 특별한 의미가 없는 요소에 할당됩니다.
      					레이아웃 구성이나 스타일링을 위해 사용되며,
      					보조 기술에서는 이를 단순한 구조적 컨테이너로 인식해 특별한 시멘틱 역할을 부여하지 않습니다.
      				</li>
      				<li>
      					<code>generic</code> 역할은 대부분의 경우 명시적으로 지정할 필요가 없으며,
      					기본적으로 시멘틱한 의미가 없는 요소에 암시적으로 적용됩니다.
      				</li>
      				<li>
      					<strong>적절한 사용</strong>
      					<p>
      						<code>generic</code> 역할은 기본적으로 HTML의 <code>&lt;div&gt;</code>나 <code>&lt;span&gt;</code> 요소에 적용되며,
      						특별한 의미를 부여할 필요가 없는 경우에 사용됩니다.
      						대부분의 경우 명시적으로 지정할 필요는 없으며, 가능한 경우 시멘틱한 HTML 요소를 사용하는 것이 좋습니다.
      					</p>
      				</li>
      				<li>
      					<strong>중요한 점</strong>
      					<p>
      						시멘틱한 의미가 중요한 요소에 <code>generic</code> 역할을 부여하는 것은 피해야 하며,
      						문서의 구조와 의미를 명확히 하는 데 중점을 두어야 합니다. 이를 통해 사용자 경험과 접근성을 향상시킬 수 있습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>시멘틱한 의미를 부여할 필요가 없는 경우에 사용</strong>
      					<p>
      						<code>generic</code> 역할은 콘텐츠에 특별한 시멘틱 의미를 부여할 필요가 없는 경우에 사용됩니다.
      						레이아웃이나 스타일링을 위한 단순한 컨테이너를 만들 때 적합합니다.
      					</p>
      				</li>
      				<li>
      					<strong>필요하지 않은 경우 명시적으로 사용하지 않음</strong>
      					<p>
      						대부분의 경우 <code>&lt;div&gt;</code>나 <code>&lt;span&gt;</code> 같은 요소는 자동으로 <code>generic</code> 역할을 수행하므로,
      						명시적으로 <code>role=&quot;generic&quot;</code>을 지정할 필요가 없습니다.
      					</p>
      				</li>
      				<li>
      					<strong>시멘틱 마크업을 우선 사용</strong>
      					<p>
      						가능한 경우, <code>generic</code> 역할보다는 시멘틱한 HTML 요소를 사용하여 문서 구조와 의미를 명확히 하는 것이 좋습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상속된 상태 및 속성</h3>
      			<p className="mt_m">
      				기본적으로 상속된 상태나 속성은 없습니다.
      				<mark><code>generic</code> 역할은 의미 없는 일반적인 컨테이너를 나타내므로, 추가적인 ARIA 상태나 속성이 필요하지 않습니다.</mark>
      			</p>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">잘못된 예시 - generic 역할을 사용하지 않아야 하는 경우</h4>
      				<p className="mt_s">
      					이 예시는 <code>header</code> 요소에 <code>role=&quot;generic&quot;</code>을 지정하여 시멘틱한 의미를 제거했으나,
      					<code>header</code> 요소는 시멘틱하게 중요한 역할을 하므로 <code>generic</code> 역할을 사용하지 말아야 합니다.
      				</p>
      				
      <CodeBlock title="generic 역할 - 잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<header role="generic">
      							<h1>Website Header</h1>
      						</header>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">올바른 예시 - 시멘틱한 요소를 유지</h4>
      				<p className="mt_s">
      					이 예시는 <code>header</code> 요소에 시멘틱한 역할을 유지하여 웹 페이지의 구조와 의미를 명확히 합니다.
      					이 경우, <code>generic</code> 역할을 사용하지 않고 기본 시멘틱 역할을 유지하는 것이 적절합니다.
      				</p>
      				
      <CodeBlock title="generic 역할 - 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<header>
      							<h1>Website Header</h1>
      						</header>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">(권장) 마크업에서의 기본 사용</h4>
      				<p className="mt_s">
      					이 예시는 <code>&lt;div&gt;</code> 요소를 사용하여 단순히 레이아웃을 구성하고 있습니다.
      					이 경우, <code>div</code>는 암시적으로 <code>generic</code> 역할을 수행합니다.
      				</p>
      				
      <CodeBlock title="generic 역할 - 마크업에서의 기본 사용" language="javascript" className="uk_gist_code_box mt_m">
      {`<div>
      							<p>This is a paragraph inside a div.</p>
      						</div>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">group 역할</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>group</code> 역할은 여러 요소를 논리적으로 묶어 하나의 그룹으로 취급하는 데 사용됩니다.
      				이 역할은 보조 기술이 이러한 요소들이 하나의 논리적 단위로 묶여 있음을 인식하게 하여,
      				사용자에게 이를 일관되게 전달할 수 있도록 합니다.
      				<code>group&gt;</code> 역할은 주로 폼 요소, 메뉴 항목, 또는 기타 연관된 컨텐츠를 그룹화할 때 사용됩니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#group" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA group</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/group_role" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN ARIA group</a><br />
      				<a href="/publishing/html/09-forms/13-fieldset_element" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">UXKM : fieldset element</a><br />
      				<a href="/publishing/html/09-forms/14-legend_element" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">UXKM : legend element</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">기본 설명</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<code>group</code> 역할은 연관된 요소들을 논리적으로 그룹화해 보조 기술이 이를 하나의 단위로 인식하도록 돕습니다.
      					주로 라디오 버튼, 체크박스 그룹, 메뉴 항목, 대화 상자 내 섹션 등 관련된 컨트롤을 그룹화할 때 사용됩니다.
      				</li>
      				<li>
      					<strong>적절한 사용</strong>
      					<p>
      						<code>group</code> 역할은 논리적으로 관련된 요소들을 묶는 데 사용해야 하며, 불필요한 경우에는 사용하지 않는 것이 좋습니다.
      						시멘틱한 HTML 요소를 사용하는 것이 가능하다면, 이를 우선적으로 사용해야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>중요한 점</strong>
      					<p>
      						<code>group</code> 역할을 통해 웹 페이지의 구조를 명확하게 하고, 사용자 경험과 접근성을 향상시킬 수 있습니다.
      						이를 통해 사용자는 그룹화된 콘텐츠를 쉽게 탐색하고 이해할 수 있습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>연관된 요소를 논리적으로 그룹화</strong>
      					<p>
      						<code>group</code> 역할은 연관된 요소들을 묶어서 하나의 논리적인 단위로 처리해야 할 때 사용됩니다.
      						이를 통해 보조 기술이 요소들 간의 관계를 이해하고 사용자에게 전달할 수 있습니다.
      					</p>
      				</li>
      				<li>
      					<strong>적절한 제목과 설명 제공</strong>
      					<p>
      						<code>aria-labelledby</code>와 <code>aria-describedby</code> 속성을 사용해 그룹의 제목과 설명을 제공하면,
      						보조 기술이 이를 올바르게 사용자에게 전달할 수 있습니다.
      					</p>
      				</li>
      				<li>
      					<strong>사용하지 말아야 할 경우</strong>
      					<p>
      						시멘틱하게 그룹화가 필요한 경우에는,
      						시멘틱 HTML 요소(예: <code>&lt;fieldset&gt;</code>과 <code>&lt;legend&gt;</code> 조합)를 사용하는 것이 좋습니다.
      						불필요하게 <code>group</code> 역할을 사용하는 것은 피해야 합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상속된 상태 및 속성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>aria-labelledby</strong>
      					<p>
      						그룹의 제목을 지정하여, 보조 기술이 이 그룹의 제목을 그룹과 연관지어 사용자에게 전달할 수 있게 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-describedby</strong>
      					<p>
      						그룹에 대한 추가 설명을 제공하여, 보조 기술이 이 설명을 그룹과 연관지어 사용자에게 전달할 수 있게 합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">잘못된 예시 - 불필요한 그룹화</h4>
      				<p className="mt_s">
      					이 예시는 논리적인 그룹화가 필요하지 않은 콘텐츠에 <code>role=&quot;group&quot;</code>을 사용했습니다.
      					불필요한 그룹화는 보조 기술의 해석을 혼란스럽게 할 수 있으므로 피해야 합니다.
      				</p>
      				
      <CodeBlock title="group 역할 - 잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="group">
      							<h1>Welcome to Our Website</h1>
      							<p>Explore our features and content to learn more.</p>
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">올바른 예시 - 의미 있는 그룹화</h4>
      				<p className="mt_s">
      					이 예시는 네비게이션 메뉴를 <code>&lt;div&gt;</code> 요소에 <code>role=&quot;group&quot;</code>을 사용해 논리적으로 그룹화한 예시입니다.
      					<code>aria-labelledby</code> 속성을 통해 그룹의 제목을 지정하여,
      					보조 기술이 이 정보를 사용자에게 전달할 수 있게 합니다.
      				</p>
      				
      <CodeBlock title="group 역할 - 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="group" aria-labelledby="menu-title">
      							<h2 id="menu-title">메인 메뉴</h2>
      							<div class="menu-item" role="menuitem" tabindex="0">홈</div>
      							<div class="menu-item" role="menuitem" tabindex="0">소개</div>
      							<div class="menu-item" role="menuitem" tabindex="0">서비스</div>
      							<div class="menu-item" role="menuitem" tabindex="0">연락처</div>
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">(권장) 시멘틱 마크업을 사용한 기본 그룹화 사용 예시</h4>
      				<p className="mt_s">
      					이 예시는 <code>&lt;fieldset&gt;</code>과 <code>&lt;legend&gt;</code> 요소를 사용하여 라디오 버튼을 그룹화하고 있습니다.
      					보조 기술은 이 그룹을 논리적 단위로 인식하여 사용자에게 전달합니다.
      				</p>
      				
      <CodeBlock title="group 역할 - 시멘틱 마크업" language="javascript" className="uk_gist_code_box mt_m">
      {`<fieldset>
      							<legend>Select your favorite fruit:</legend>
      							<label><input type="radio" name="fruit" value="apple"> Apple</label>
      							<label><input type="radio" name="fruit" value="banana"> Banana</label>
      							<label><input type="radio" name="fruit" value="cherry"> Cherry</label>
      						</fieldset>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">div 요소 마크업을 사용한 그룹화 예시</h4>
      				<p className="mt_s">
      					이 예시는 <code>&lt;div&gt;</code> 요소에 <code>role=&quot;group&quot;</code>을 지정하고,
      					<code>aria-labelledby</code> 속성을 사용해 그룹의 제목을 연결한 예시입니다.
      					<code>&lt;fieldset&gt;</code>을 사용할 수 없는 상황에서 유용합니다.
      				</p>
      				
      <CodeBlock title="group 역할 - div 요소 마크업" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="group" aria-labelledby="fruit-group-label">
      							<span id="fruit-group-label">Select your favorite fruit:</span>
      							<label><input type="radio" name="fruit" value="apple"> Apple</label>
      							<label><input type="radio" name="fruit" value="banana"> Banana</label>
      							<label><input type="radio" name="fruit" value="cherry"> Cherry</label>
      						</div>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">heading 역할</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>heading</code> 역할은 웹 페이지나 애플리케이션의 구조를 정의하는 데 사용되는 제목을 나타냅니다.
      				이 역할은 콘텐츠의 계층적 구조를 명확히 하여, 보조 기술이 문서의 내용과 구조를 쉽게 파악할 수 있도록 돕습니다.
      				HTML에서 <code>&lt;h1&gt;</code>부터 <code>&lt;h6&gt;</code>까지의 제목 요소가 기본적으로 이 역할을 수행합니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#heading" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA heading</a>
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/heading_role" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN ARIA heading</a>
      				<a href="/publishing/html/03-sections/02-heading_element" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">UXKM : heading element</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">기본 설명</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<code>heading</code> 역할은 콘텐츠의 주요 섹션을 설명하거나 요약하는 제목을 나타내며,
      					문서나 애플리케이션의 구조를 이해하는 데 중요한 역할을 합니다.
      					HTML의 제목 요소(<code>&lt;h1&gt;</code> ~ <code>&lt;h6&gt;</code>)에는 자동으로 적용되지만,
      					필요시 다른 요소에도 지정할 수 있습니다.<br />
      					보조 기술은 이 역할을 통해 제목의 중요도와 문서의 계층 구조를 인식하여 사용자에게 적절한 정보를 전달합니다.
      				</li>
      				<li>
      					<strong>적절한 사용</strong>
      					<p>
      						시멘틱한 제목 요소(<code>&lt;h1&gt;</code> ~ <code>&lt;h6&gt;</code>)를 사용하여 문서의 구조를 명확히 하고,
      						필요할 경우 다른 요소에 <code>role=&quot;heading&quot;</code>과 <code>aria-level</code> 속성을 지정할 수 있습니다.
      						계층 구조는 일관되게 유지해야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>중요한 점</strong>
      					<p>
      						<code>heading</code> 역할을 통해 웹 페이지의 구조를 명확하게 정의함으로써,
      						사용자 경험과 접근성을 모두 향상시킬 수 있습니다.
      						이를 통해 사용자는 콘텐츠를 쉽게 탐색하고, 문서의 흐름을 이해할 수 있습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>시멘틱 마크업을 우선 사용</strong>
      					<p>
      						가능한 경우, 시멘틱한 HTML 제목 요소(<code>&lt;h1&gt;</code> ~ <code>&lt;h6&gt;</code>)를 사용하는 것이 좋습니다.
      						이들은 자동으로 <code>heading</code> 역할을 수행하며, 문서의 구조를 명확히 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>적절한 계층 구조 유지</strong>
      					<p>
      						제목 요소나 <code>heading</code> 역할을 사용할 때, <code>aria-level</code> 속성을 통해 문서의 계층 구조를 일관되게 유지해야 합니다.
      						올바른 계층 구조는 보조 기술이 콘텐츠를 정확하게 이해하고 전달하는 데 필수적입니다.
      					</p>
      				</li>
      				<li>
      					<strong>과도한 사용 피하기</strong>
      					<p>
      						<code>heading</code> 역할은 중요하지 않은 텍스트나 단락에 사용하지 않도록 주의해야 합니다.
      						제목의 의미가 있는 콘텐츠에만 사용해야 합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상속된 상태 및 속성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>aria-level</strong>
      					<p>
      						이 속성은 제목의 계층 구조를 나타냅니다. <code>1</code>에서 <code>6</code>까지의 숫자로 설정할 수 있으며,
      						이는 HTML의 <code>&lt;h1&gt;</code>에서 <code>&lt;h6&gt;</code>까지와 대응됩니다.
      						예를 들어, <code>aria-level=&quot;1&quot;</code>은 가장 높은 수준의 제목을 나타냅니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">잘못된 예시 - 일관되지 않은 계층 구조</h4>
      				<p className="mt_s">
      					이 예시는 제목 요소의 계층 구조가 일관되지 않아, 보조 기술이 문서의 구조를 올바르게 해석하는 데 어려움을 겪을 수 있습니다.
      					제목의 순서를 일관되게 유지해야 합니다.
      				</p>
      				
      <CodeBlock title="heading 역할 - 잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<h1>Main Title</h1>
      						<h3>Subheading 1</h3>
      						<p>This is a paragraph under Subheading 1.</p>
      						<h2>Subheading 2</h2>
      						<p>This is a paragraph under Subheading 2.</p>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">(권장) 올바른 예시 - 시멘틱 마크업을 사용</h4>
      				<p className="mt_s">
      					이 예시는 HTML 제목 요소(<code>&lt;h1&gt;</code>, <code>&lt;h2&gt;</code>)를 사용하여 문서의 계층 구조를 정의하고 있습니다.
      					이 구조는 보조 기술이 문서의 내용을 쉽게 탐색하고 이해하는 데 도움을 줍니다.
      				</p>
      				
      <CodeBlock title="heading 역할 - 올바른 예시(시멘틱 마크업)" language="javascript" className="uk_gist_code_box mt_m">
      {`<h1>Main Title</h1>
      						<h2>Subheading 1</h2>
      						<p>This is a paragraph under Subheading 1.</p>
      						<h2>Subheading 2</h2>
      						<p>This is a paragraph under Subheading 2.</p>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">명시적으로 heading 역할 지정 예시</h4>
      				<p className="mt_s">
      					이 예시는 <code>&lt;div&gt;</code> 요소에 <code>role=&quot;heading&quot;</code>과 <code>aria-level</code>
      					속성을 사용하여 제목의 계층 구조를 정의하고 있습니다.
      					이는 시멘틱한 제목 요소를 사용할 수 없는 상황에서 유용합니다.
      				</p>
      				
      <CodeBlock title="heading 역할 - 명시적으로 heading 역할 지정" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="heading" aria-level="1">Main Title</div>
      						<div role="heading" aria-level="2">Subheading 1</div>
      						<p>This is a paragraph under Subheading 1.</p>
      						<div role="heading" aria-level="2">Subheading 2</div>
      						<p>This is a paragraph under Subheading 2.</p>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">img 역할</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>img</code> 역할은 웹 페이지에서 이미지 콘텐츠를 나타내는 데 사용됩니다.
      				이 역할은 시각적 정보를 전달하는 이미지를 설명하며,
      				보조 기술이 이러한 이미지를 사용자에게 올바르게 전달할 수 있도록 돕습니다.
      				HTML의 <code>&lt;img&gt;</code> 요소는 자동으로 <code>img</code> 역할을 수행합니다.
      				이 역할은 특히 접근성 측면에서 중요한 역할을 하며, 적절한 대체 텍스트(<code>alt</code> 텍스트)를 제공하는 것이 핵심입니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#img" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA img</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/img_role" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN ARIA img</a><br />
      				<a href="/publishing/html/06-embedded/02-img_element" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">UXKM : img element</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">기본 설명</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<code>img</code> 역할은 이미지를 나타내며, HTML의 <code>&lt;img&gt;</code> 요소에 암시적으로 적용됩니다.
      					그러나 다른 요소(예: CSS 배경 이미지가 없는 <code>&lt;div&gt;</code> 등)를 이미지로 처리할 때 이 역할을 명시적으로 지정할 수 있습니다.<br />
      					보조 기술은 <code>img</code> 역할을 통해 이미지의 의미나 용도를 사용자에게 전달하며,
      					이때 대체 텍스트(<code>alt</code> 텍스트)가 중요한 역할을 합니다.
      					대체 텍스트는 이미지의 내용이나 기능을 설명하여 모든 사용자가 이미지의 의미를 이해할 수 있도록 돕습니다.
      				</li>
      				<li>
      					시각적 정보가 중요하지 않은 장식용 이미지는 <code>aria-hidden=&quot;true&quot;</code>를 사용하거나,
      					빈 대체 텍스트(<code>alt=&quot;&quot;</code>)를 지정하여 보조 기술이 이를 무시하도록 해야 합니다.
      				</li>
      				<li>
      					<strong>적절한 사용</strong>
      					<p>
      						모든 <code>&lt;img&gt;</code> 요소에 의미 있는 <code>alt</code> 속성을 제공하고,
      						비표준 마크업에서 이미지를 사용할 때는 <code>role=&quot;img&quot;</code>와 <code>aria-label</code>을 명시적으로 지정해야 합니다.
      						장식용 이미지는 사용자에게 불필요한 정보를 제공하지 않도록 해야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>중요한 점</strong>
      					<p>
      						<code>img</code> 역할을 통해 웹 페이지의 시각적 콘텐츠를 명확하게 정의하고,
      						사용자 경험과 접근성을 모두 향상시킬 수 있습니다.
      						이를 통해 사용자는 시각적 정보를 효과적으로 이해하고, 필요한 내용을 효율적으로 탐색할 수 있습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>시멘틱 마크업 사용</strong>
      					<p>
      						모든 <code>&lt;img&gt;</code> 요소에 적절한 <code>alt</code> 속성을 제공해야 합니다.
      						이 속성은 이미지의 의미나 기능을 설명하며, 보조 기술이 이를 사용자에게 전달할 수 있도록 돕습니다.
      					</p>
      				</li>
      				<li>
      					<strong>장식용 이미지 무시</strong>
      					<p>
      						시각적 정보가 중요하지 않은 장식용 이미지는 <code>aria-hidden=&quot;true&quot;</code>를 사용하거나,
      						빈 대체 텍스트(<code>alt=&quot;&quot;</code>)를 지정하여 보조 기술이 이를 무시하도록 해야 합니다
      					</p>
      				</li>
      				<li>
      					<strong>비표준 마크업 사용 시 명시적 역할 지정</strong>
      					<p>
      						<code>&lt;img&gt;</code> 요소 대신 다른 요소(예: CSS로 배경 이미지를 설정한 <code>&lt;div&gt;</code>)에 이미지를 사용할 때는,
      						<code>role=&quot;img&quot;</code>와 <code>aria-label</code> 또는 <code>aria-labelledby</code>를 사용해 이미지의 의미를 명확히 전달해야 합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상속된 상태 및 속성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>alt 속성</strong>
      					<p>
      						이미지의 대체 텍스트를 지정하여, 보조 기술이 이 텍스트를 사용자에게 전달할 수 있도록 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-label</strong>
      					<p>
      						이미지에 설명을 추가할 수 있는 속성으로,
      						<code>alt</code> 속성 대신 사용할 수 있지만, 대부분의 경우 <code>alt</code> 속성이 선호됩니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-hidden</strong>
      					<p>
      						장식용 이미지나 사용자에게 제공될 필요가 없는 이미지를 숨길 때 사용됩니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">잘못된 예시 - 대체 텍스트가 없는 이미지</h4>
      				<p className="mt_s">
      					이 예시는 중요한 다이어그램 이미지를 대체 텍스트 없이 사용하고 있으며,
      					이는 접근성에 부정적인 영향을 미칩니다. 모든 중요한 이미지에는 적절한 <code>alt</code> 속성을 제공해야 합니다.
      				</p>
      				
      <CodeBlock title="img 역할 - 잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<img src="important-diagram.png">`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">(권장) 올바른 예시 - 대체 텍스트가 포함된 이미지</h4>
      				<p className="mt_s">
      					이 예시는 중요한 다이어그램 이미지를 설명하는 대체 텍스트와 함께 사용하여,
      					보조 기술이 이미지를 사용자에게 올바르게 전달할 수 있도록 했습니다.
      				</p>
      				
      <CodeBlock title="img 역할 - 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<img src="important-diagram.png" alt="광합성 과정을 보여주는 다이어그램">`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">명시적으로 img 역할 지정 예시</h4>
      				<p className="mt_s">
      					이 예시는 CSS 배경 이미지를 사용한 <code>&lt;div&gt;</code> 요소에
      					<code>role=&quot;img&quot;</code>와 <code>aria-label</code>을 사용해 이미지의 의미를 지정하고 있습니다.
      					이는 <code>&lt;img&gt;</code> 요소를 사용할 수 없는 상황에서 유용합니다.
      				</p>
      				
      <CodeBlock title="img 역할 - 명시적으로 img 역할 지정" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="img" aria-label="Company Logo" style="background-image: url('logo.png'); width: 100px; height: 100px;"></div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">장식용 이미지 처리 예시 </h4>
      				<p className="mt_s">
      					이 예시는 장식용 이미지를 나타내며,
      					<code>alt=&quot;&quot;</code>와 <code>aria-hidden=&quot;true&quot;</code>를 사용하여 보조 기술이 이 이미지를 무시하도록 설정했습니다.
      					이로 인해 사용자는 불필요한 시각적 정보에 방해받지 않습니다.
      				</p>
      				
      <CodeBlock title="img 역할 - 장식용 이미지 처리" language="javascript" className="uk_gist_code_box mt_m">
      {`<img src="decorative.png" alt="" aria-hidden="true">`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<figure className="img_figure mt_l">
      		<img src={`${IMG.WAI_ARIA}/02_wai-aria_role_03.png`} alt="문서 구조 역할(Document Structure Roles)" />
      		<figcaption>
      			<b>[문서 구조 역할(Document Structure Roles)]</b><br />
      			<a href={`${IMG.WAI_ARIA}/02_wai-aria_role_03.png`} className="mt_ms box_link" title="새창 열림" target="_blank" rel="noreferrer">크게 보기</a>
      		</figcaption>
      	</figure>


      <footer className="reference_box">
      	<strong className="tit">문서 구조 역할(Document Structure Roles) part1 | WAI-ARIA 역할 참조</strong>
      	<ul className="link_lst">
      		<li className="reference"><a href="https://www.w3.org/TR/wai-aria-1.1/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C Accessible Rich Internet Applications (WAI-ARIA) 1.1</a></li>
      		<li className="reference"><a href="https://www.w3.org/TR/wai-aria-1.2/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C Accessible Rich Internet Applications (WAI-ARIA) 1.2</a></li>
      		<li className="reference"><a href="https://www.w3.org/TR/wai-aria-1.3/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C Accessible Rich Internet Applications (WAI-ARIA) 1.3</a></li>
      		<li className="reference"><a href="https://w3c.github.io/aria/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C Editor’s Draft - Accessible Rich Internet Applications (WAI-ARIA) 1.3</a></li>
      		<li className="reference"><a href="https://wicg.github.io/aom/explainer.html" target="_blank" rel="noreferrer" title="새창 열림" className="fas">Accessibility Object Model</a></li>
      		<li className="reference"><a href="https://www.w3.org/TR/wai-aria-1.1/img/rdf_model.svg" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C Class diagram of the relationships described in the role data model.</a></li>
      		<li className="reference"><a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Guides" target="_blank" rel="noreferrer" title="새창 열림" className="fas">MDN ARIA guides</a></li>
      	</ul>
      </footer>
    </>
  )
}

export default StructureDocumentPart1Page
