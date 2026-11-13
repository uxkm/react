import { Card as BaseCard } from '@/comp/ui/Card' // Base Card 컴포넌트
import { Link } from '@/lib/router' // 클라이언트 링크
import type { CardAppearanceProps, QuickLinkCardData } from './cardTypes' // card Types

/** 제목과 우측 하단 아이콘으로 구성하는 바로가기형 카드. */
export default function QuickLinkCard ({ card, shadow = false }: Readonly<{ card: QuickLinkCardData } & CardAppearanceProps>) {
  return (
    <BaseCard
      shadow={shadow}
      as={Link}
      href={card.href}
      className={`card_quick-link card_${card.tone}`}
    >
      <span>{card.title}</span>
      <span className="card_quick-icon" aria-hidden="true">
        {card.icon}
      </span>
    </BaseCard>
  )
}
