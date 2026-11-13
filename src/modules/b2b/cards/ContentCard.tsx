import { Card as BaseCard, CardBody } from '@/comp/ui/Card'
import { Tag } from '@/comp/ui/Tag'
import { Link } from '@/lib/router'
import CardBackground from './CardBackground'
import type { CardMediaProps, ContentCardData } from './cardTypes'

/** 섹션과 독립적으로 사용하는 썸네일·카테고리형 콘텐츠 카드. */
export default function ContentCard ({
  card,
  shadow = false,
  image = card.image,
  imageProps,
  slots,
  priority = false
}: Readonly<{ card: ContentCardData } & CardMediaProps>) {
  return (
    <BaseCard
      shadow={shadow}
      as={Link}
      href={card.href}
      className="card_content"
      media={
        <div className="card_content-media">
          <CardBackground
            className="card_content-thumbnail"
            image={image}
            imageProps={{
              fit: typeof image === 'object' && image !== null ? image.fit ?? 'cover' : 'cover',
              ...imageProps
            }}
            priority={priority}
          >
            {slots?.image}
          </CardBackground>
        </div>
      }
    >
      <CardBody className="card_content-body">
        <Tag variant="outline" color="default" round className="card_content-category">
          {card.category}
        </Tag>
        <strong className="card_content-title">{card.title}</strong>
        <p>{card.description}</p>
      </CardBody>
    </BaseCard>
  )
}
