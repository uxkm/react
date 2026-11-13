import { preload } from 'react-dom' // preload
import type { CSSProperties, ReactNode } from 'react' // React
import type { CardImageData, CardImageSource } from './cardTypes' // card Types

interface CardBackgroundProps {
  readonly as?: 'div' | 'span'
  readonly image?: CardImageSource
  readonly imageProps?: Partial<CardImageData>
  readonly children?: ReactNode
  readonly className?: string
  readonly priority?: boolean
}

/** 카드 그래픽을 CSS 배경으로 표시합니다. 크기·맞춤·위치는 CSS 변수로 전달합니다. */
export default function CardBackground ({
  as: Element = 'div',
  image,
  imageProps,
  children,
  className,
  priority = false
}: Readonly<CardBackgroundProps>) {
  const settings = {
    ...(typeof image === 'string' ? { src: image } : image ?? {}),
    ...imageProps
  }

  if (children === null || (children === undefined && (image === null || !settings.src))) {
    return null
  }

  const customContent = children !== undefined
  const accessibleImage = !customContent && Boolean(settings.alt)

  if (!customContent && priority && settings.src) {
    preload(settings.src, { as: 'image' })
  }

  return (
    <Element
      className={`card_background ${className ?? ''}`}
      role={accessibleImage ? 'img' : undefined}
      aria-label={accessibleImage ? settings.alt : undefined}
      aria-hidden={!customContent && !accessibleImage ? true : undefined}
      style={{
        '--card-background-image': !customContent && settings.src
          ? `url(${JSON.stringify(settings.src)})`
          : 'none',
        '--card-background-width': settings.width === undefined ? undefined : `${settings.width}px`,
        '--card-background-height': settings.height === undefined ? undefined : `${settings.height}px`,
        '--card-background-size': settings.fit ?? 'contain',
        '--card-background-position': settings.position ?? 'center'
      } as CSSProperties}
    >
      {children}
    </Element>
  )
}
