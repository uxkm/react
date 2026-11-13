import { Button } from '@/comp/ui/Button'
import { Icon } from '@/comp/ui/Icon'
import { Link } from '@/lib/router'
import Card from '@/modules/b2b/cards/Card'
import type { CardAppearanceProps } from '@/modules/b2b/cards/cardTypes'

/** 멀캠ON 뉴스레터 구독과 공식 소셜 채널 안내 카드. */
export default function MainNewsletterCalloutCard ({ shadow = false }: Readonly<CardAppearanceProps>) {
  return (
    <Card
      type="callout"
      shadow={shadow}
      card={{
        id: 'newsletter',
        title: '최신 트렌드를 확인하세요',
        description: '매월 엄선한 HR트렌드 리포트와 세미나·이벤트 소식을\n메일로 보내드려요'
      }}
      actions={
        <>
          <Button
            tag="a"
            href="https://bit.ly/HeyMate_subscribe"
            variant="outline"
            color="default"
            className="card_callout-subscribe"
            round
            ariaLabel="멀캠ON 구독하기"
          >
            <span className="card_callout-brand">
              멀캠 <span>⏻N</span>
            </span>
            {' '}구독하기
          </Button>
          <div className="card_callout-socials" aria-label="공식 소셜 채널">
            <Link
              to="https://blog.naver.com/multicampus_official"
              className="card_callout-social card_callout-social_naver"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="네이버 블로그"
            >
              <Icon name="naver" size={28} />
            </Link>
            <Link
              to="https://www.youtube.com/multicampus_official"
              className="card_callout-social card_callout-social_youtube"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="유튜브"
            >
              <Icon name="youtube" size={28} />
            </Link>
            <Link
              to="https://www.linkedin.com/company/multicampus-korea/"
              className="card_callout-social card_callout-social_linkedin"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="링크드인"
            >
              <Icon name="linkedin" size={28} />
            </Link>
          </div>
        </>
      }
    />
  )
}
