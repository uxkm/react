import { Fragment } from 'react'

const CENTER_LETTERS = ['c', 'c', 'e', 's', 's', 'i', 'b', 'i', 'l', 'i', 't']

/**
 * 레거시 `01-a11yStart/a11yStart.njk` sub_top `.a11y_animation` 마크업.
 * A11Y·WAI-ARIA 등 접근성 섹션 상단에서 accessibility → a11y 축약을 시각화한다.
 *
 * `.center` 내부 `<i>` 사이 줄바꿈은 레거시 njk와 동일하게 공백 텍스트 노드를 남긴다.
 * 붙여 쓰면 중앙 span 폭이 줄어 `translateX(375%)` 시작 위치에서 a·y가 겹친다.
 */
function A11yAnimation() {
  return (
    <div className="a11y_animation">
      <div className="a11y_animation_inner">
        <span className="side side_left">
          <i>a</i>
        </span>
        <span className="center">
          {CENTER_LETTERS.map((letter, index) => (
            <Fragment key={`${letter}-${index}`}>
              {index > 0 ? '\n' : null}
              <i>{letter}</i>
            </Fragment>
          ))}
        </span>
        <span className="side side_right">
          <i>y</i>
        </span>
      </div>
    </div>
  )
}

export default A11yAnimation
