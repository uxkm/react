import { Button } from '@/comp/ui/Button'; // Button 컴포넌트
import { Tag } from '@/comp/ui/Tag';
import Card from '@/comp/ui/Card'; // Card 컴포넌트
import type { CardAppearanceProps } from '@/comp/ui/Card'; // Card Appearance Props 타입

/** 멀캠ON 뉴스레터 구독과 공식 소셜 채널 안내 카드. */
export default function MainNewsletterCalloutCard({
  shadow = false,
}: Readonly<CardAppearanceProps>) {
  return (
    <Card
      type="callout"
      shadow={shadow}
      card={{
        id: 'newsletter',
        title: '최신 트렌드를 확인하세요',
        description: '매월 엄선한 HR트렌드 리포트와 세미나·이벤트 소식을\n메일로 보내드려요',
      }}
      actions={
        <>
          <Button
            tag="a"
            href="https://bit.ly/HeyMate_subscribe"
            variant="soft-outline"
            size="lg"
            color="default"
            round
          >
            <span
              className="card_callout-brand"
              aria-hidden="true"
            >
              멀캠 <Tag variant="brand">⏻N</Tag>
            </span>
            <span className="visually-hidden">멀캠ON </span>구독하기
          </Button>
          <div
            className="card_callout-socials"
            aria-label="공식 소셜 채널"
          >
            <Button
              tag="a"
              variant="social"
              href="https://blog.naver.com/multicampus_official"
              channel="naver"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="네이버 블로그"
            />
            <Button
              tag="a"
              variant="social"
              href="https://www.youtube.com/multicampus_official"
              channel="youtube"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="유튜브"
            />
            <Button
              tag="a"
              variant="social"
              href="https://www.linkedin.com/company/multicampus-korea/"
              channel="linkedin"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="링크드인"
            />
          </div>
        </>
      }
    />
  );
}
