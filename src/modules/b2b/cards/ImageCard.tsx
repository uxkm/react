import { Card as BaseCard } from '@/comp/ui/Card'
import CardBackground from './CardBackground'
import { Link } from '@/lib/router'
import { Icon } from '@/comp/ui/Icon'
import type { CardMediaProps, ImageCardData } from './cardTypes'

/** 호출부의 이미지 prop·슬롯을 사용하는 카드 모듈. */
export default function ImageCard ({
  card,
  shadow = false,
  image = card.image,
  imageProps,
  slots,
  priority = false
}: Readonly<{ card: ImageCardData } & CardMediaProps>) {
  return (
    <BaseCard
      shadow={shadow}
      as={Link}
      href={card.href}
      className={`card_image card_${card.tone}`}
      aria-label={card.label}
    >
      <p>{card.description}</p>
      <h2>{card.title}</h2>
      <CardBackground
        className="card_image-background"
        image={image}
        imageProps={imageProps}
        priority={priority}
      >
        {slots?.image}
      </CardBackground>
      <span className="card_image-action">
        {card.action}
        <span className="card_arrow">
          <Icon name="arrow-left" className="card_arrow-icon" size={20} />
        </span>
      </span>
    </BaseCard>
  )
}
