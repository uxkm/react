import { CardBase, CardBody, CardFooter } from './CardBase';
import { Tag } from '@/comp/ui/Tag';
import { Link } from '@/lib/router';
import { hasNodes } from '@/utils/react';
import CardBackground from './CardBackground';
import CardThumbnailFallback from './CardThumbnailFallback';
import type { CourseCardData, CourseCardProps } from './cardTypes';

/** 상세 이동과 찜·신청 액션을 분리한 과정 카드. 내부 정보는 공통 UI 슬롯으로 조합합니다. */
export default function CourseCard({
  card,
  layout = 'vertical',
  shadow = false,
  image = card.image,
  imageProps,
  slots,
  actions,
  priority = false,
}: Readonly<{ card: CourseCardData } & CourseCardProps>) {
  const hasDetails = [
    slots?.badges,
    slots?.schedule,
    slots?.reviews,
    slots?.keywords,
    slots?.meta,
  ].some(hasNodes);
  return (
    <CardBase
      shadow={shadow}
      className={`card_course card_course_${layout === 'horizontal' ? 'horizontal' : 'vertical'}`}
    >
      <Link
        href={card.href}
        className="card_course-link"
      >
        <CardBackground
          className="card_course-thumbnail"
          fallback={<CardThumbnailFallback />}
          image={image}
          imageProps={{
            fit: typeof image === 'object' && image !== null ? (image.fit ?? 'cover') : 'cover',
            ...imageProps,
          }}
          priority={priority}
        >
          {slots?.image}
        </CardBackground>
        <CardBody className="card_course-summary">
          {hasNodes(slots?.labels) && <div className="card_course-labels">{slots?.labels}</div>}
          {card.category && <Tag variant="category">{card.category}</Tag>}
          <strong className="card_course-title">{card.title}</strong>
          {card.description && <p className="card_course-description">{card.description}</p>}
        </CardBody>
      </Link>
      {hasDetails && (
        <CardBody className="card_course-details">
          {hasNodes(slots?.badges) && <div className="card_course-badges">{slots?.badges}</div>}
          {hasNodes(slots?.schedule) && (
            <div className="card_course-schedule">{slots?.schedule}</div>
          )}
          {hasNodes(slots?.reviews) && <div className="card_course-reviews">{slots?.reviews}</div>}
          {hasNodes(slots?.keywords) && (
            <div className="card_course-keywords">{slots?.keywords}</div>
          )}
          {hasNodes(slots?.meta) && <div className="card_course-meta">{slots?.meta}</div>}
        </CardBody>
      )}
      {(hasNodes(slots?.footer) || hasNodes(actions)) && (
        <CardFooter
          between
          className="card_course-footer"
        >
          {slots?.footer}
          {hasNodes(actions) && <div className="card_course-actions">{actions}</div>}
        </CardFooter>
      )}
    </CardBase>
  );
}
