'use client'

import { useState } from 'react'
import { TopBanner } from '@/comp'
import { GuideLayout } from '@/screen/pub/layout'
import { DemoBlock } from '@/screen/pub/widgets/preview/DemoBlock'
import { GuideApiDocs } from '@/screen/pub/widgets/docs/GuideApiDocs'
import { topBannerApiSections } from '@/screen/pub/data/guide/topBannerApiSections'

export const guideLabel = 'TopBanner · 상단 배너'
export const pageTitle = 'TopBanner'

const SAMPLE_BANNERS = [
  { id: 'notice', content: <strong>새로운 소식과 주요 안내를 확인하세요.</strong> },
  { id: 'guide', content: <span>페이지별 배너도 헤더 위 같은 위치에 표시합니다.</span>, href: '/pub/guide' },
  { id: 'custom', content: <span>텍스트·이미지·링크 등 원하는 콘텐츠를 넣을 수 있습니다.</span> }
]

function BannerPlayground () {
  const [multiple, setMultiple] = useState(true)
  const [effect, setEffect] = useState('slide')
  return (
    <div data-top-banner-demo="">
      <div className="demo-row">
        <label><input type="checkbox" checked={multiple} onChange={(event) => setMultiple(event.target.checked)} />여러 배너 사용</label>
        <label>배너 전환 효과 <select value={effect} onChange={(event) => setEffect(event.target.value)}>
          <option value="slide">슬라이드</option><option value="fade">페이드</option>
        </select></label>
      </div>
      <TopBanner
        items={multiple ? SAMPLE_BANNERS : SAMPLE_BANNERS.slice(0, 1)}
        effect={effect}
        innerMaxWidth={900}
        height={80}
        storageKey="guide-top-banner-preview"
      />
    </div>
  )
}

export default function TopBannerGuide () {
  return (
    <>
      <GuideLayout category="위젯" title="TopBanner" description="헤더 위 안내 배너. 너비·최소 높이·전환 효과·닫기·하루 숨김을 설정합니다.">
        <DemoBlock title="공통 레이아웃 · 페이지 배너" description="가이드에서는 레이아웃 상단 배너를 숨깁니다. 실제 페이지는 PageBanner로 헤더 위 슬롯에 등록하며, 아래 미리보기에서 배너 기능을 확인할 수 있습니다."
          code={`import { PageBanner } from '@/comp'

export const meta = { banner: true }

<PageBanner
  width="100%"
  innerMaxWidth={1200}
  height={80}
  effect="fade"
  storageKey="campaign-2026-11"
  items={[
    { id: 'notice', content: <strong>주요 안내</strong>, href: '/notice' },
    { id: 'benefit', content: <span>새로운 혜택을 확인하세요.</span> }
  ]}
/>`}
        >
          <p>배너는 헤더 위에 위치하고, 닫으면 빈 공간 없이 제거됩니다. <code>meta.banner: false</code>로 페이지별 표시도 제어할 수 있습니다.</p>
        </DemoBlock>
        <DemoBlock title="개수 · 전환 효과" description="한 개로 전환하면 Carousel·이동 버튼·페이지 번호·자동 재생이 모두 제거됩니다. 여러 개면 슬라이드 또는 페이드로 전환합니다."
          code={`<TopBanner items={banners} effect="slide" autoplay interval={5000} />
<TopBanner items={banners} effect="fade" innerMaxWidth={960} height={96} />
<TopBanner storageKey="single-notice">단일 안내 배너</TopBanner>`}
        ><BannerPlayground /></DemoBlock>
        <DemoBlock title="너비 · 가운데 정렬" description="바깥 너비는 기본 100%이며, 안쪽 최대 너비와 콘텐츠 정렬을 별도로 지정합니다. 높이는 콘텐츠가 잘리지 않도록 최소 높이로 적용됩니다."
          code={`<TopBanner width={960} innerMaxWidth={720} height={96} contentAlign="left">
  <strong>지정한 너비 안에서 가운데 정렬된 배너</strong>
</TopBanner>`}
        ><TopBanner width={960} innerMaxWidth={720} height={96} contentAlign="left" storageKey="guide-top-banner-width">지정한 너비 안에서 가운데 정렬된 배너</TopBanner></DemoBlock>
        <GuideApiDocs sections={topBannerApiSections} />
      </GuideLayout>
    </>
  )
}
