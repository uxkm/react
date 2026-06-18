import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

function buildEmbedSrc(penId, defaultTab) {
  const tab = encodeURIComponent(defaultTab);
  return `https://codepen.io/uxkm/embed/${penId}?default-tab=${tab}&theme-id=dark`;
}

/**
 * CodePen iframe embed with viewport-based lazy loading.
 * Defers setting `src` until the embed is near the viewport so SPA navigation
 * and React re-renders do not leave stale or blank CodePen frames.
 */
function CodePenEmbed({
  penId,
  title,
  penTitle,
  height = 500,
  className = "",
  defaultTab = "css,result",
}) {
  const wrapperRef = useRef(null);
  const [src, setSrc] = useState("");
  const { pathname } = useLocation();
  const resolvedPenTitle = penTitle ?? title;

  useEffect(() => {
    setSrc("");
    const node = wrapperRef.current;
    if (!node) return undefined;

    const activate = () => setSrc(buildEmbedSrc(penId, defaultTab));

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          activate();
          observer.disconnect();
        }
      },
      { rootMargin: "240px 0px" },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [penId, defaultTab, pathname]);

  return (
    <div ref={wrapperRef}>
      <iframe
        key={`${pathname}-${penId}`}
        className={`codepen ${className}`.trim()}
        height={height}
        style={{ width: "100%" }}
        scrolling="no"
        title={title}
        src={src || undefined}
        frameBorder="no"
        allowFullScreen
      >
        See the Pen{" "}
        <a href={`https://codepen.io/uxkm/pen/${penId}`}>{resolvedPenTitle}</a>{" "}
        by UXKM (<a href="https://codepen.io/uxkm">@uxkm</a>) on{" "}
        <a href="https://codepen.io">CodePen</a>.
      </iframe>
    </div>
  );
}

export default CodePenEmbed;
