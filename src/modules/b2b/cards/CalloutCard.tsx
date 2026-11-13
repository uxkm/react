import { Card as BaseCard } from '@/comp/ui/Card'
import type { CalloutCardData, CalloutCardProps } from './cardTypes'

/** 상담·구독 등 주요 행동을 안내하는 가운데 정렬 카드. */
export default function CalloutCard ({
  card,
  actions,
  shadow = false
}: Readonly<{ card: CalloutCardData } & CalloutCardProps>) {
  return (
    <BaseCard id={card.id} className="card_callout" shadow={shadow}>
      <strong className="card_callout-title">{card.title}</strong>
      <p className="card_callout-description">{card.description}</p>
      <div className="card_callout-actions">{actions}</div>
    </BaseCard>
  )
}
