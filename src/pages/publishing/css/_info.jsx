/**
 * 레거시 `publishing/css/_info.njk` — `info_path`는 depth3가 아니라 `publishing/css`(d2) 기준.
 * `pageLayout.Info === true` 이고 `note === false`일 때 sub_top 요약 블록에 포함됩니다.
 */
function CssPublishingInfo() {
  return (
    <ul className="top_info">
      <li>CSS3 기준으로 작성하며, Deprecated(더 이상 사용되지 않는) 요소나 속성은 제외합니다.</li>
      <li>CSS의 개념을 이해하고, CSS의 기본적인 문법을 학습합니다.</li>
      <li>스타일 시트를 사용하여 어떠한 방식으로 HTML 요소를 시각적으로 표현하는지 알아봅니다.</li>
    </ul>
  )
}

export default CssPublishingInfo
