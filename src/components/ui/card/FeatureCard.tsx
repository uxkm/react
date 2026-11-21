import { CardBase, CardBody } from './CardBase';
import { Button } from '@/comp/ui/Button';
import { Link } from '@/lib/router';
import CardBackground from './CardBackground';
import CardThumbnailFallback from './CardThumbnailFallback';
import type { FeatureCardData, FeatureCardProps } from './cardTypes';

/** 이미지와 소개·CTA를 분리합니다. 펼침/슬라이드 동작은 상위 Accordion·Carousel이 담당합니다. */
export default function FeatureCard({
  card,
  shadow = false,
  image = card.image,
  imageProps,
  slots,
  priority = false,
  imagePosition = 'start',
  tone = 'surface',
  actions,
}: Readonly<{ card: FeatureCardData } & FeatureCardProps>) {
  const resolvedTone = ['surface', 'brand', 'dark'].includes(tone) ? tone : 'surface';
  return (
    <CardBase
      shadow={shadow}
      className={`card_feature card_feature_${resolvedTone} ${imagePosition === 'end' ? 'card_feature_reverse' : ''}`}
    >
      <CardBackground
        className="card_feature-media"
        image={image}
        imageProps={{
          fit: typeof image === 'object' && image !== null ? (image.fit ?? 'cover') : 'cover',
          ...imageProps,
        }}
        priority={priority}
        fallback={<CardThumbnailFallback />}
      >
        {slots?.image}
      </CardBackground>
      <CardBody className="card_feature-body">
        {card.category && <span className="card_editorial-meta">{card.category}</span>}
        <strong className="card_editorial-title">{card.title}</strong>
        <p className="card_editorial-description">{card.description}</p>
        <div className="card_feature-actions">
          {actions ?? (
            <Button
              as={Link}
              href={card.href}
              target={card.target}
              variant="outline"
              size="sm"
              style={{ color: 'inherit', borderColor: 'currentColor' }}
            >
              {card.action}
            </Button>
          )}
        </div>
      </CardBody>
    </CardBase>
  );
}
