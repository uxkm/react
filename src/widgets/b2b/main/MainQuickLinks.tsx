import Card from '@/modules/b2b/cards/Card' // Card 컴포넌트
import { Icon } from '@/comp/ui/Icon' // Icon 컴포넌트
import type {
  CardAppearanceProps, // CardAppearanceProps 타입
  QuickLinkCardData // QuickLinkCardData 타입
} from '@/modules/b2b/cards/cardTypes' // 카드 · card Types

/** 바로가기 내용은 사용하는 위젯 안에서 관리합니다. */
export default function MainQuickLinks ({ shadow = false }: Readonly<CardAppearanceProps>) {
  const cards: readonly QuickLinkCardData[] = [
    {
      id: 'proposal',
      href: '/b2b/insight/resources/list',
      title: '기업교육 제안서\n다운로드',
      icon: <Icon name="download" size={25} />,
      tone: 'cream'
    },
    {
      id: 'estimate',
      href: '/b2b/contents/mandatory/estimate',
      title: '법정필수교육 간편 견적받기',
      icon: <Icon name="book" size={25} />,
      tone: 'gray'
    },
    {
      id: 'trend',
      href: '/b2b/insight/on/list',
      title: '데이터로 읽는 2027트렌드\n멀캠ON 참가신청',
      icon: (
        <Icon size={25}>
          <path d="M4 20V10h3v10M11 20V4h3v16M18 20v-8h3v8" />
        </Icon>
      ),
      tone: 'sage'
    }
  ]

  return (
    <div className="main-quick-links" aria-label="교육 서비스 바로가기">
      {cards.map((card) => (
        <Card key={card.id} type="quick-link" card={card} shadow={shadow} />
      ))}
    </div>
  )
}
