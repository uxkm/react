'use client';

import { TopBanner, type TopBannerProps } from '@/comp/widget/TopBanner';
import { Icon } from '@/comp/ui/Icon';

export const mainTypeANoticeProps = {
  variant: 'notice',
  storageKey: 'b2b-main-notices',
  innerMaxWidth: 1200,
  items: [
    { id: 'education', content: '기업교육의 새로운 소식과 주요 안내를 확인하세요.' },
    { id: 'service', content: '멀티캠퍼스 교육 서비스 이용 안내를 확인하세요.' },
  ],
} satisfies TopBannerProps;

/** typeB 공지는 헤더 아래에서 같은 배경 위에 표시합니다. */
export default function MainTopBanner() {
  return (
    <TopBanner
      variant="notice"
      className="main-top-banner"
      storageKey="b2b-main-typeB-notices"
      innerMaxWidth="var(--main-top-banner-max-width, 100%)"
      height="var(--main-top-banner-height, 44px)"
      items={[
        {
          id: 'hr-trends-2027',
          href: '/b2b/insight/on/list',
          content: (
            <span className="main-top-banner_message">
              <span className="main-top-banner_badge">UPDATE</span>
              <span className="main-top-banner_text">
                데이터로 읽는 2027트렌드 - HR이 주목해야 할 변화와 과제
              </span>
              <Icon
                name="arrow-right"
                size={16}
              />
            </span>
          ),
        },
      ]}
    />
  );
}
