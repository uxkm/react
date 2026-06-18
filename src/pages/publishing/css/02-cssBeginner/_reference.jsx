function FolderCommonReference({ sectionTitle = "" }) {
  return (
    <>
      <footer className="reference_box">
      	<strong className="tit">{sectionTitle} 참조</strong>
      	<ul className="link_lst">
      		<li className="reference"><a href="https://www.w3.org/TR/2011/REC-CSS2-20110607/ui.html" target="_blank" className="fas" title="새창열기">W3C UI</a></li>
      		<li className="reference"><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Basic_User_Interface" target="_blank" className="fas" title="새창열기">MDN User Interface</a></li>
      	</ul>
      </footer>
    </>
  )
}

export default FolderCommonReference
