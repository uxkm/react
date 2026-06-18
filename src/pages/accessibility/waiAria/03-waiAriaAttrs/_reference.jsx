function FolderCommonReference({ sectionTitle = "" }) {
  return (
    <>
      <footer className="reference_box">
      	<strong className="tit">{sectionTitle} 참조</strong>
      	<ul className="link_lst">
      		<li className="reference"><a href="https://www.w3.org/TR/wai-aria-1.1/" target="_blank" title="새창 열림" className="fas">W3C Accessible Rich Internet Applications (WAI-ARIA) 1.1</a></li>
      		<li className="reference"><a href="https://www.w3.org/TR/wai-aria-1.2/" target="_blank" title="새창 열림" className="fas">W3C Accessible Rich Internet Applications (WAI-ARIA) 1.2</a></li>
      		<li className="reference"><a href="https://www.w3.org/TR/wai-aria-1.3/" target="_blank" title="새창 열림" className="fas">W3C Accessible Rich Internet Applications (WAI-ARIA) 1.3</a></li>
      		<li className="reference"><a href="https://w3c.github.io/aria/" target="_blank" title="새창 열림" className="fas">W3C Editor’s Draft - Accessible Rich Internet Applications (WAI-ARIA) 1.3</a></li>
      		<li className="reference"><a href="https://wicg.github.io/aom/explainer.html" target="_blank" title="새창 열림" className="fas">Accessibility Object Model</a></li>
      		<li className="reference"><a href="https://www.w3.org/TR/wai-aria-1.1/img/rdf_model.svg" target="_blank" title="새창 열림" className="fas">W3C Class diagram of the relationships described in the role data model.</a></li>
      		<li className="reference"><a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Guides" target="_blank" title="새창 열림" className="fas">MDN ARIA guides</a></li>
      	</ul>
      </footer>
    </>
  )
}

export default FolderCommonReference
