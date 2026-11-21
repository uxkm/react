import ContentCard from './ContentCard'; // Content Card 컴포넌트
import PromotionCard from './PromotionCard'; // Promotion Card 컴포넌트
import ImageCard from './ImageCard'; // Image Card 컴포넌트
import QuickLinkCard from './QuickLinkCard'; // Quick Link Card 컴포넌트
import TestimonialCard from './TestimonialCard'; // Testimonial Card 컴포넌트
import CalloutCard from './CalloutCard'; // Callout Card 컴포넌트
import CourseCard from './CourseCard';
import OverlayCard from './OverlayCard';
import NewsCard from './NewsCard';
import FeatureCard from './FeatureCard';
import WebzineCard from './WebzineCard';
import type { TypedCardProps } from './cardTypes'; // Card Props 타입

/** type에 따라 필요한 카드 데이터가 결정되는 공통 카드 유형 선택. */
export default function TypedCard(props: Readonly<TypedCardProps>) {
  switch (props.type) {
    case 'webzine':
      return <WebzineCard {...props} />;
    case 'overlay':
      return <OverlayCard {...props} />;
    case 'news':
      return <NewsCard {...props} />;
    case 'feature':
      return <FeatureCard {...props} />;
    case 'course':
      return <CourseCard {...props} />;
    case 'callout':
      return (
        <CalloutCard
          card={props.card}
          actions={props.actions}
          shadow={props.shadow}
        />
      );
    case 'testimonial':
      return (
        <TestimonialCard
          card={props.card}
          selected={props.selected}
          shadow={props.shadow}
          image={props.image}
          imageProps={props.imageProps}
          slots={props.slots}
          priority={props.priority}
        />
      );
    case 'promotion':
      return (
        <PromotionCard
          card={props.card}
          shadow={props.shadow}
          image={props.image}
          imageProps={props.imageProps}
          slots={props.slots}
          priority={props.priority}
        />
      );
    case 'image':
      return (
        <ImageCard
          card={props.card}
          shadow={props.shadow}
          image={props.image}
          imageProps={props.imageProps}
          slots={props.slots}
          priority={props.priority}
        />
      );
    case 'content':
      return (
        <ContentCard
          card={props.card}
          shadow={props.shadow}
          image={props.image}
          imageProps={props.imageProps}
          slots={props.slots}
          priority={props.priority}
        />
      );
    case 'quick-link':
      return (
        <QuickLinkCard
          card={props.card}
          shadow={props.shadow}
        />
      );
  }
}
