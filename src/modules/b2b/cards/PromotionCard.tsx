import { Card as BaseCard } from '@/comp/ui/Card' // Base Card 컴포넌트
import CardBackground from './CardBackground' // Card Background 컴포넌트
import { Link } from '@/lib/router' // 클라이언트 링크
import { Icon } from '@/comp/ui/Icon' // Icon 컴포넌트
import type { CardMediaProps, PromotionCardData } from './cardTypes' // card Types

/** 호출부의 이미지 prop·슬롯을 사용하는 카드 모듈. */
export default function PromotionCard ({
  card,
  shadow = false,
  image = card.image,
  imageProps,
  slots,
  priority = false
}: Readonly<{ card: PromotionCardData } & CardMediaProps>) {
  return (
    <BaseCard shadow={shadow} className="card_promotion">
      <h2>{card.title}</h2>
      <p>{card.description}</p>
      <CardBackground
        className="card_promotion-background"
        image={image}
        imageProps={imageProps}
        priority={priority}
      >
        {slots?.image}
      </CardBackground>
      <Link className="card_promotion-action" to={card.href}>
        <span className="card_arrow">
          <Icon name="arrow-left" className="card_arrow-icon" size={20} />
        </span>
        {card.action}
      </Link>
    </BaseCard>
  )
}
