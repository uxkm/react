import { CardBase, CardBody } from './CardBase';
import { Link } from '@/lib/router';
import CardBackground from './CardBackground';
import CardThumbnailFallback from './CardThumbnailFallback';
import { CardEditorialMeta, CardKeywords } from './CardEditorialInfo';
import type { OverlayCardData, OverlayCardProps } from './cardTypes';

/** 이미지 위 메타·제목·키워드. 배경이 실패해도 텍스트와 전체 링크를 유지합니다. */
export default function OverlayCard({
  card,
  format = 'portrait',
  shadow = false,
  image = card.image,
  imageProps,
  slots,
  priority = false,
}: Readonly<{ card: OverlayCardData } & OverlayCardProps>) {
  return (
    <CardBase
      as={Link}
      href={card.href}
      target={card.target}
      shadow={shadow}
      className={`card_overlay card_overlay_${format === 'landscape' ? 'landscape' : 'portrait'}`}
    >
      <CardBackground
        className="card_overlay-media"
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
      <CardBody className="card_overlay-body">
        <CardEditorialMeta
          category={card.category}
          date={card.date}
        />
        <strong className="card_editorial-title">{card.title}</strong>
        {card.description && <p className="card_editorial-description">{card.description}</p>}
        <CardKeywords keywords={card.keywords} />
      </CardBody>
    </CardBase>
  );
}
