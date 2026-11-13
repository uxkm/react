import ContentCard from './ContentCard'
import PromotionCard from './PromotionCard'
import ImageCard from './ImageCard'
import QuickLinkCard from './QuickLinkCard'
import TestimonialCard from './TestimonialCard'
import CalloutCard from './CalloutCard'
import type { CardProps } from './cardTypes'

/** type에 따라 필요한 카드 데이터가 결정되는 B2B 카드 공통 입구. */
export default function Card (props: Readonly<CardProps>) {
  switch (props.type) {
    case 'callout':
      return <CalloutCard card={props.card} actions={props.actions} shadow={props.shadow} />
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
      )
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
      )
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
      )
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
      )
    case 'quick-link':
      return <QuickLinkCard card={props.card} shadow={props.shadow} />
  }
}
