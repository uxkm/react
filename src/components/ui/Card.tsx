/**
 * 카드 컨테이너.
 * 제목·본문·푸터를 bordered/shadow/flat/ghost 등으로 감싼다.
 * CardHeader · CardBody · CardFooter · CardDeck과 함께 쓴다.
 */
import {
  createElement,
  type ElementType,
  type HTMLAttributes,
  type MouseEvent,
  type ReactNode
} from 'react'
import { classNames } from '@/utils/classNames'
import { hasNodes } from '@/utils/react'

/** 카드 모양 */
export type CardVariant =
  | 'bordered'
  | 'default'
  | 'shadow'
  | 'flat'
  | 'borderless'
  | 'elevated'
  | 'ghost'

const VALID_SIZES = new Set(['sm', 'md', 'lg', 'compact'])
const VALID_VARIANTS = new Set([
  'bordered',
  'default',
  'shadow',
  'flat',
  'borderless',
  'elevated',
  'ghost'
])

/** 카드가 받는 값 */
export interface CardProps
  extends Omit<HTMLAttributes<HTMLElement>, 'title' | 'onClick' | 'color'> {
  variant?: CardVariant
  /** 그림자 표시 여부. 기본 false이며 기존 shadow/elevated variant에서는 기본 true입니다. */
  shadow?: boolean
  size?: 'sm' | 'md' | 'lg' | 'compact'
  title?: ReactNode
  subtitle?: ReactNode
  /** HTML 태그 또는 Link 등 사용자 컴포넌트. href는 링크 컴포넌트에도 전달합니다. */
  as?: ElementType
  /** @deprecated use `as` */
  tag?: string
  href?: string
  type?: 'button' | 'submit' | 'reset'
  hoverable?: boolean
  horizontal?: boolean
  compact?: boolean
  accent?: boolean
  color?: string
  disabled?: boolean
  ripple?: boolean
  media?: ReactNode
  header?: ReactNode
  extra?: ReactNode
  /** 편의용. CardFooter 대신 쓸 수 있다 */
  footer?: ReactNode
  children?: ReactNode
  onClick?: (event: MouseEvent<HTMLElement>) => void
}

export interface CardHeaderProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  title?: ReactNode
  subtitle?: ReactNode
  extra?: ReactNode
  children?: ReactNode
}

export interface CardBodyProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
}

export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  between?: boolean
  children?: ReactNode
}

export interface CardDeckProps extends HTMLAttributes<HTMLDivElement> {
  columns?: 2 | 3 | number
  children?: ReactNode
}

function variantClass (variant: string) {
  if (variant === 'flat' || variant === 'ghost') return 'card_ghost'
  if (variant === 'borderless') return 'card_borderless'
  if (variant === 'default' || variant === 'bordered') return ''
  if (variant === 'shadow') return ''
  return 'card_' + variant
}

/**
 * 내용을 묶는 카드.
 * href면 a, onClick이면 button, 아니면 article(또는 as/tag).
 */
export function Card ({
  variant = 'bordered',
  shadow,
  size = 'md',
  title,
  subtitle,
  as,
  tag = '',
  href = '',
  type = 'button',
  hoverable = false,
  horizontal = false,
  compact = false,
  accent = false,
  color = '',
  disabled = false,
  ripple = false,
  media,
  header,
  extra,
  footer,
  children,
  className,
  onClick,
  tabIndex,
  ...rest
}: Readonly<CardProps>) {
  const resolvedSize = VALID_SIZES.has(size) ? size : 'md'
  const resolvedVariant = VALID_VARIANTS.has(variant) ? variant : 'bordered'
  const showShadow = shadow ?? (resolvedVariant === 'shadow' || resolvedVariant === 'elevated')
  const interactive = Boolean(href || onClick)
  const rootTag = as || tag || (href ? 'a' : onClick ? 'button' : 'article')
  const hasBuiltInHeader =
    (title != null && title !== '') ||
    (subtitle != null && subtitle !== '') ||
    hasNodes(header) ||
    hasNodes(extra)

  const cardClass = classNames(
    'card',
    variantClass(resolvedVariant),
    showShadow && 'card_shadow',
    resolvedSize !== 'md' && 'card_' + resolvedSize,
    horizontal && 'card_horizontal',
    (compact || size === 'compact') && 'card_compact',
    hoverable && 'card_hover',
    accent && 'card_accent',
    color && 'color_' + color,
    interactive && 'card_clickable',
    disabled && 'is-disabled',
    className
  )

  /** 비활성이면 막고, 아니면 onClick */
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    if (disabled) {
      event.preventDefault()
      event.stopPropagation()
      return
    }
    onClick?.(event)
  }

  return createElement(
    rootTag,
    {
      ...rest,
      className: cardClass,
      type: rootTag === 'button' ? type : undefined,
      href: (rootTag === 'a' || typeof rootTag !== 'string') && !disabled ? (href || undefined) : undefined,
      disabled: rootTag === 'button' ? disabled : undefined,
      'aria-disabled': interactive && disabled ? true : undefined,
      tabIndex: interactive && disabled ? -1 : tabIndex,
      'data-ripple': ripple ? 'true' : undefined,
      onClick: interactive ? handleClick : undefined
    },
    media,
    hasBuiltInHeader && (
      <div className="card_header">
        <div className="card_header-main">
          {header ?? (
            <>
              {title != null && title !== '' && <strong className="card_title">{title}</strong>}
              {subtitle != null && subtitle !== '' && <p className="card_subtitle">{subtitle}</p>}
            </>
          )}
        </div>
        {hasNodes(extra) && <div className="card_extra">{extra}</div>}
      </div>
    ),
    children,
    hasNodes(footer) && <div className="card_footer">{footer}</div>
  )
}

/** 카드 헤더. title·subtitle 또는 children + extra */
export function CardHeader ({
  title,
  subtitle,
  extra,
  children,
  className,
  ...rest
}: CardHeaderProps) {
  return (
    <div {...rest} className={classNames('card_header', className)}>
      <div className="card_header-main">
        {children ?? (
          <>
            {title != null && <strong className="card_title">{title}</strong>}
            {subtitle != null && <p className="card_subtitle">{subtitle}</p>}
          </>
        )}
      </div>
      {hasNodes(extra) && <div className="card_extra">{extra}</div>}
    </div>
  )
}

/** 카드 본문 */
export function CardBody ({ children, className, ...rest }: CardBodyProps) {
  return (
    <div {...rest} className={classNames('card_body', className)}>
      {children}
    </div>
  )
}

/** 카드 푸터. between이면 양끝 정렬 */
export function CardFooter ({
  between = false,
  children,
  className,
  ...rest
}: CardFooterProps) {
  return (
    <div
      {...rest}
      className={classNames('card_footer', between && 'card_footer-between', className)}
    >
      {children}
    </div>
  )
}

/** 카드 그리드. columns 2|3 고정, 없으면 자동 */
export function CardDeck ({
  columns,
  children,
  className,
  ...rest
}: CardDeckProps) {
  const resolved = [2, 3].includes(Number(columns)) ? Number(columns) : null
  return (
    <div
      {...rest}
      className={classNames('card_deck', resolved && 'card_deck-' + resolved, className)}
    >
      {children}
    </div>
  )
}

export default Card
