function FolderCommonReference({ sectionTitle = "" }) {
  return (
    <>
      <footer className="reference_box">
        <strong className="tit">{sectionTitle} 참조</strong>
        <ul className="link_lst">
          <li className="reference">
            <a
              href="https://www.w3.org/TR/html52/grouping-content.html#grouping-content"
              target="_blank"
              className="fas"
            >
              W3C 문서
            </a>
          </li>
          <li className="reference">
            <a
              href="https://developer.mozilla.org/ko/docs/Web/HTML/Element"
              target="_blank"
              className="fas"
            >
              MDN 문서
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default FolderCommonReference;
