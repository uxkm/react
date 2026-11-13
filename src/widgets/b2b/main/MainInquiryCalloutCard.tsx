import { Button } from '@/comp/ui/Button'
import { Icon } from '@/comp/ui/Icon'
import Card from '@/modules/b2b/cards/Card'
import type { CardAppearanceProps } from '@/modules/b2b/cards/cardTypes'

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
            className="card_callout-primary"
            round
            iconAfter={<Icon name="chevron-right" size={20} />}
          >
            기업교육문의
          </Button>
          <Button
            tag="a"
            href="/b2b/common/education-diagnosis"
            variant="outline"
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
