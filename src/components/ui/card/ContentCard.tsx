import { CardBase as BaseCard, CardBody } from './CardBase' // UI 컴포넌트 · Card 컴포넌트
import { Tag } from '@/comp/ui/Tag' // Tag 컴포넌트
import { Link } from '@/lib/router' // 클라이언트 링크
import CardBackground from './CardBackground' // Card Background 컴포넌트
import CardThumbnailFallback from './CardThumbnailFallback'
import { CardEditorialMeta, CardKeywords } from './CardEditorialInfo'
import type { CardMediaProps, ContentCardData } from './cardTypes' // card Types

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
      target={card.target}
      className="card_content"
      media={
        <div className="card_content-media">
          <CardBackground
            className="card_content-thumbnail"
            fallback={<CardThumbnailFallback />}
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
        <Tag variant="category">
          {card.category}
        </Tag>
        <CardEditorialMeta date={card.date} />
        <strong className="card_content-title">{card.title}</strong>
        {card.description && <p>{card.description}</p>}
        <CardKeywords keywords={card.keywords} />
      </CardBody>
    </BaseCard>
  )
}
