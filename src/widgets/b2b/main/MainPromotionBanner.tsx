'use client';

import { useMediaQuery } from '@/hooks/layout/useMediaQuery'; // Media Query 훅
import { Carousel, CarouselSlide } from '@/comp/ui/Carousel'; // UI 컴포넌트 · Carousel 컴포넌트
import Card from '@/comp/ui/Card'; // Card 컴포넌트
import type { CardMediaProps, PromotionCardData } from '@/comp/ui/Card'; // 카드 · card Types

const promotionCard: PromotionCardData = {
  id: 'ax-assessment',
  title: '우리회사 AI 역량은\n몇점일까?',
  description: '멀티캠퍼스와 KAIST가 만든 AX 역량진단\n직접 체험하고 리포트를 받아보세요',
  image: {
    src: '/images/pages/main/ax-refresh.png',
    width: 390,
    height: 300,
  },
  href: '/b2b/contents/ax/competency',
  action: 'AX 진단 체험하기',
};

// 두 번째 카드는 슬라이드 동작 확인용으로 제목만 변경한 샘플입니다.
const typeASlides: readonly PromotionCardData[] = [
  promotionCard,
  {
    ...promotionCard,
    id: 'ax-assessment-sample',
    title: '우리회사 AX 전환은\n어디까지 왔을까?',
  },
];

const typeBSlides: readonly PromotionCardData[] = [
  {
    id: 'physical-ai',
    title: '현실로 확장되는 AI,\nPhysical AI 교육',
    description:
      '로봇·센서·현장 데이터까지, 물리 세계로 확장되는\nAI를 직접 다뤄보는 신규 과정입니다.',
    image: { src: '/images/pages/main/ver3-home/physical-ai.png', fit: 'cover' },
    href: '/b2b/contents/ax/ai-search',
    action: '과정보기',
  },
  promotionCard,
];

interface MainPromotionBannerProps extends CardMediaProps {
  readonly designType?: 'typeA' | 'typeB';
  readonly slides?: readonly PromotionCardData[];
  /** 1장일 때 하단 컨트롤 표시 여부. 기본 false. */
  readonly showControlsWhenSingle?: boolean;
}

/** 프로모션 카드 모듈을 Carousel로 조합합니다. */
export default function MainPromotionBanner({
  slides: customSlides,
  designType = 'typeB',
  showControlsWhenSingle = false,
  image,
  imageProps,
  shadow = false,
  slots,
}: Readonly<MainPromotionBannerProps>) {
  const slides = customSlides ?? (designType === 'typeA' ? typeASlides : typeBSlides);
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const multiple = slides.length > 1;

  return (
    <div className="main-promotion">
      <Carousel
        ariaLabel="메인 프로모션"
        effect="fade"
        speed={reducedMotion ? 0 : 500}
        navigation
        pagination="fraction"
        autoplay={multiple}
        autoplayToggle
        showControlsWhenSingle={showControlsWhenSingle}
        delay={5000}
        loop={multiple}
      >
        {slides.map((card, index) => (
          <CarouselSlide
            key={card.id}
            data-promotion={card.id}
          >
            <Card
              type="promotion"
              card={card}
              shadow={shadow}
              image={image}
              imageProps={imageProps}
              slots={slots}
              priority={index === 0}
            />
          </CarouselSlide>
        ))}
      </Carousel>
    </div>
  );
}
