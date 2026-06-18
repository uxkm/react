function FolderCommonReference({ sectionTitle = "" }) {
  return (
    <>
      <footer className="reference_box">
        <strong className="tit">{sectionTitle} 참조</strong>
        <ul className="link_lst">
          <li className="reference">
            <a
              href="https://www.w3.org/TR/html52/semantics-embedded-content.html#semantics-embedded-content"
              target="_blank"
              className="fas"
              title="새창열기"
            >
              W3C 문서
            </a>
          </li>
          <li className="reference">
            <a
              href="https://developer.mozilla.org/ko/docs/Web/HTML/Element"
              target="_blank"
              className="fas"
              title="새창열기"
            >
              MDN 문서
            </a>
          </li>
          <li className="reference">
            <a
              href="https://developer.mozilla.org/ko/docs/Web/SVG"
              target="_blank"
              className="fas"
              title="새창열기"
            >
              W3C SVG
            </a>
          </li>
          <li className="reference">
            <a
              href="https://www.w3.org/Graphics/SVG/IG/resources/svgprimer.html"
              target="_blank"
              className="fas"
              title="새창열기"
            >
              W3C SVG Primer
            </a>
          </li>
          <li className="reference">
            <a
              href="https://developer.mozilla.org/ko/docs/Web/SVG/Tutorial"
              target="_blank"
              className="fas"
              title="새창열기"
            >
              MDN SVG Tutorial
            </a>
          </li>
          <li className="reference">
            <a
              href="http://tutorials.jenkov.com/svg/index.html"
              target="_blank"
              className="fas"
              title="새창열기"
            >
              SVG Tutorial
            </a>
          </li>
          <li className="reference">
            <a
              href="https://inkscape.org/doc/"
              target="_blank"
              className="fas"
              title="새창열기"
            >
              Inkscape's documentation page
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default FolderCommonReference;
