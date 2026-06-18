function FolderCommonReference({ sectionTitle = "" }) {
  return (
    <>
      <footer className="reference_box">
      	<strong className="tit">{sectionTitle} 참조</strong>
      	<ul className="link_lst">
      		<li className="reference"><a href="https://nuli.navercorp.com/sharing/fe/coding" target="_blank" className="fas" title="새창열기">NHN Coding Convention</a></li>
      		<li className="reference"><a href="http://darum.daum.net/convention/css/css_convention" target="_blank" className="fas" title="새창열기">Web Standards Darum</a></li>
      	</ul>
      </footer>
    </>
  )
}

export default FolderCommonReference
