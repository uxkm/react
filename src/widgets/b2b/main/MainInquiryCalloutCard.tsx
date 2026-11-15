import { Button } from '@/comp/ui/Button' // Button 컴포넌트
import { Icon } from '@/comp/ui/Icon' // Icon 컴포넌트
import Card from '@/comp/ui/Card' // Card 컴포넌트
import type { CardAppearanceProps } from '@/comp/ui/Card' // Card Appearance Props 타입

/** 기업교육 문의와 간편 진단 안내 카드. */
export default function MainInquiryCalloutCard ({ shadow = false }: Readonly<CardAppearanceProps>) {
  return (
    <Card
      type="callout"
      shadow={shadow}
      card={{
        title: '무엇이든 물어보세요',
        description: '교육설계부터 도입, 운영까지, 조직에 꼭 맞는 솔루션을\n제안해 드립니다.'
      }}
      actions={
        <>
          <Button
            tag="a"
            href="/b2b/contact/education"
            variant="gradient"
            size="xl"
            round
            iconAfter={<Icon name="chevron-right" size={20} />}
          >
            기업교육문의
          </Button>
          <Button
            tag="a"
            href="/b2b/service/diagnosis"
            variant="soft-outline"
            size="xl"
            color="default"
            round
          >
            간편진단 탐색하기
          </Button>
        </>
      }
    />
  )
}
