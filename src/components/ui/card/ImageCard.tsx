import { CardBase as BaseCard } from './CardBase' // Base Card 컴포넌트
import CardBackground from './CardBackground' // Card Background 컴포넌트
import { Link } from '@/lib/router' // 클라이언트 링크
import { Button } from '@/comp/ui/Button'
import type { CardMediaProps, ImageCardData } from './cardTypes' // card Types

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
      <Button presentation variant="arrow-pill" tone={card.tone === 'lavender' ? 'lavender' : 'blue'} className="card_image-action">
        {card.action}
      </Button>
    </BaseCard>
  )
}
