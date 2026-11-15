import { CardBase, CardBody } from './CardBase'
import { Link } from '@/lib/router'
import CardBackground from './CardBackground'
import CardThumbnailFallback from './CardThumbnailFallback'
import { CardEditorialMeta, CardKeywords } from './CardEditorialInfo'
import type { WebzineCardData, WebzineCardProps } from './cardTypes'

/** 좌측·우측 썸네일과 뉴스 정보를 하나의 상세 링크로 제공합니다. */
export default function WebzineCard({
  card,
  imagePosition = 'start',
  shadow = false,
  image = card.image,
  imageProps,
  slots,
  priority = false
}: Readonly<{ card: WebzineCardData } & WebzineCardProps>) {
  return (
    <CardBase
      as={Link}
      href={card.href}
      target={card.target}
      shadow={shadow}
      className={`card_webzine ${imagePosition === 'end' ? 'card_webzine_reverse' : ''}`}
    >
      <CardBackground
        className="card_webzine-media"
        image={image}
        imageProps={{
          fit:
            typeof image === 'object' && image !== null
              ? (image.fit ?? 'cover')
              : 'cover',
          ...imageProps
        }}
        priority={priority}
        fallback={<CardThumbnailFallback />}
      >
        {slots?.image}
      </CardBackground>
      <CardBody className="card_webzine-body">
        <CardEditorialMeta
          category={card.category}
          date={card.date}
        />
        <strong className="card_editorial-title">{card.title}</strong>
        {card.description && (
          <p className="card_editorial-description">{card.description}</p>
        )}
        <CardKeywords keywords={card.keywords} />
      </CardBody>
    </CardBase>
  )
}
