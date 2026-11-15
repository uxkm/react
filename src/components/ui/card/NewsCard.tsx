import { CardBase, CardBody } from './CardBase'
import { Link } from '@/lib/router'
import { CardEditorialMeta, CardKeywords } from './CardEditorialInfo'
import type { CardAppearanceProps, NewsCardData } from './cardTypes'

/** 이미지 없는 편집형 뉴스. 썸네일이 없는 의도적 유형이므로 대체 아이콘을 만들지 않습니다. */
export default function NewsCard ({ card, shadow = false }: Readonly<{ card: NewsCardData } & CardAppearanceProps>) {
  return (
    <CardBase as={Link} href={card.href} target={card.target} shadow={shadow} className="card_news">
      <CardBody>
        <CardEditorialMeta category={card.category} date={card.date} />
        <strong className="card_editorial-title">{card.title}</strong>
        {card.description && <p className="card_editorial-description">{card.description}</p>}
        <CardKeywords keywords={card.keywords} />
      </CardBody>
    </CardBase>
  )
}
