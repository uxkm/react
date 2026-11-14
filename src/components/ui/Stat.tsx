/**
 * 통계 지표.
 * title · value · prefix/suffix · trend · description을 카드·크기로 조합한다.
 */
import type { HTMLAttributes, ReactNode } from 'react' // React
import { classNames } from '@/utils/style/classNames' // 조건부 className 조합
import { Icon } from './Icon' // Icon 컴포넌트
import { Avatar } from './Avatar' // Avatar 컴포넌트

const TrendIcon = () => (
  <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path d="m6 15 6-6 6 6" />
  </svg>
)

/** 지표가 받는 값 */
export interface StatProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title' | 'prefix'> {
  /** testimonial: 업종·인용문·작성자·프로필로 구성하는 고객사례 유형. */
  variant?: 'default' | 'testimonial'
  /** 고객사례 Avatar에 표시할 내용. 생략하면 user 아이콘을 표시합니다. */
  avatar?: ReactNode
  /** 고객사례 선택 테두리 표시 여부. */
  selected?: boolean
  title?: ReactNode
  value?: ReactNode
  prefix?: ReactNode
  suffix?: ReactNode
  description?: ReactNode
  trend?: ReactNode
  trendColor?: string
  trendIcon?: ReactNode
  size?: 'sm' | 'md' | 'lg'
  card?: boolean
  shadow?: boolean
  children?: ReactNode
  /** @deprecated use `title` */
  label?: ReactNode
  /** @deprecated use `description` */
  desc?: ReactNode
  /** @deprecated use `className="stat_horizontal"` */
  horizontal?: boolean
}

/**
 * 숫자 지표 한 칸.
 * title 라벨, value 수치, trend 증감, card · shadow 스킨.
 */
export function Stat ({
  variant = 'default',
  avatar,
  selected = false,
  title,
  value,
  prefix,
  suffix,
  description,
  trend,
  trendColor,
  trendIcon,
  size = 'md',
  card = false,
  shadow = false,
  children,
  className,
  label,
  desc,
  horizontal = false,
  ...rest
}: StatProps) {
  const resolvedTitle = title ?? label
  const resolvedDescription = description ?? desc
  const resolvedSize = ['sm', 'md', 'lg'].includes(size) ? size : 'md'
  const testimonial = variant === 'testimonial'

  const classes = classNames(
    'stat',
    resolvedSize !== 'md' && `stat_${resolvedSize}`,
    (card || testimonial) && 'stat_card',
    testimonial && 'stat_testimonial',
    testimonial && selected && 'is-selected',
    shadow && 'stat_shadow',
    horizontal && 'stat_horizontal',
    className
  )

  const trendClasses = classNames('stat_trend', trendColor && `color_${trendColor}`)
  const descriptionClasses = classNames(
    'stat_desc',
    resolvedDescription && trendColor && `color_${trendColor}`
  )

  const showHeader = Boolean(resolvedTitle && trend)
  const hasValue = value != null && value !== ''

  if (testimonial) {
    return (
      <div {...rest} className={classes}>
        {resolvedTitle && <span className="stat_label">{resolvedTitle}</span>}
        <blockquote className="stat_quote">
          <span className="stat_quote-mark" aria-hidden="true">“</span>
          {hasValue && <strong className="stat_value">{value}</strong>}
        </blockquote>
        <div className="stat_footer">
          <span className="stat_desc">{resolvedDescription}</span>
          <Avatar className="stat_avatar" ariaHidden>
            {avatar ?? <Icon name="user" size={44} />}
          </Avatar>
        </div>
        {children}
      </div>
    )
  }

  const valueNode =
    prefix || suffix
      ? (
        <div className="stat_value-row">
          {prefix ? <span className="stat_prefix">{prefix}</span> : null}
          {hasValue ? <span className="stat_value">{value}</span> : null}
          {suffix ? <span className="stat_suffix">{suffix}</span> : null}
        </div>
        )
      : hasValue
        ? (
          <span className="stat_value">{value}</span>
          )
        : null

  const trendNode = (
    <>
      {trendIcon ?? <TrendIcon />}
      {trend}
    </>
  )

  return (
    <div {...rest} className={classes}>
      {showHeader
        ? (
          <div className="stat_header">
            <span className="stat_label">{resolvedTitle}</span>
            <span className={trendClasses}>{trendNode}</span>
          </div>
          )
        : resolvedTitle
          ? (
            <span className="stat_label">{resolvedTitle}</span>
            )
          : null}
      {valueNode}
      {resolvedDescription
        ? (
          <span className={descriptionClasses}>{resolvedDescription}</span>
          )
        : trend && !showHeader
          ? (
            <span className={trendClasses}>{trendNode}</span>
            )
          : null}
      {children}
    </div>
  )
}

export default Stat
