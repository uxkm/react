'use client'

import { useState } from 'react'
import { AppHeader, AppHeaderLink } from '@/comp'
import { GuideLayout } from '@/screen/pub/layout'
import { DemoBlock } from '@/screen/pub/widgets/preview/DemoBlock'
import { GuideApiDocs } from '@/screen/pub/widgets/docs/GuideApiDocs'
import { headerApiSections } from '@/screen/pub/data/guide/headerApiSections'

export const guideLabel = 'Header · 헤더'
export const pageTitle = 'Header'

/** 스크롤 배경은 테마 변수 — CSS에서 --color-header-bg-scrolled 로 변경 */
const SCROLLED_BG = 'var(--color-header-bg-scrolled)'

export default function HeaderGuide () {
  const [background, setBackground] = useState('transparent')
  const [scrolledBackground, setScrolledBackground] = useState(SCROLLED_BG)
  return (
    <GuideLayout
      category="위젯"
      title="Header"
      description="페이지별 헤더 배경과 스크롤 후 배경을 props·CSS 변수·SCSS로 지정합니다. 스크롤 색상 기본값은 --color-header-bg-scrolled 입니다."
      headerLayout="stacked"
      headerNav={<><AppHeaderLink to="/pub/guide/header">Header</AppHeaderLink><AppHeaderLink to="/pub/guide/top-banner">TopBanner</AppHeaderLink></>}
      headerAppearance={{ background, scrolledBackground, className: 'header-background-demo', style: { backdropFilter: 'none', WebkitBackdropFilter: 'none' } }}
    >
      <DemoBlock title="페이지별 배경 · 스크롤 상태" description="아래에서 배경을 선택하고 문서를 스크롤해 보세요. 헤더의 시작 위치를 지나면 is-scrolled 클래스가 붙고 스크롤 배경이 적용됩니다. 스크롤 색상은 CSS 변수로 지정합니다."
        code={`import { Header } from '@/comp'

<Header
  layout="stacked"
  background="transparent"
  scrolledBackground="var(--color-header-bg-scrolled)"
  className="service-header"
/>

/* themes / 페이지 SCSS */
:root {
  --color-header-bg-scrolled: #ffffff;
}`}
      >
        <div className="demo-row" data-header-background-demo="">
          <label>기본 헤더 배경 <select value={background} onChange={(event) => setBackground(event.target.value)}><option value="transparent">투명</option><option value="var(--color-surface)">서피스</option></select></label>
          <label>스크롤 헤더 배경 <select value={scrolledBackground} onChange={(event) => setScrolledBackground(event.target.value)}><option value={SCROLLED_BG}>테마 변수</option><option value="var(--color-accent-muted)">액센트 뮤트</option></select></label>
        </div>
      </DemoBlock>
      <DemoBlock title="기본 상태와 스크롤 상태 비교" description="같은 배경 설정을 사용하고 두 번째 헤더에만 is-scrolled 상태를 적용한 미리보기입니다."
        code={`<AppHeader background="transparent" scrolledBackground="var(--color-header-bg-scrolled)" />
<AppHeader className="is-scrolled" background="transparent" scrolledBackground="var(--color-header-bg-scrolled)" />`}
      >
        <div style={{ background: 'linear-gradient(120deg, #dbeafe, #fce7f3)', padding: 16 }}>
          <AppHeader brand={<strong>기본: 투명 배경</strong>} nav={null} showLanguageSwitcher={false} background="transparent" scrolledBackground={SCROLLED_BG} style={{ position: 'relative', backdropFilter: 'none', WebkitBackdropFilter: 'none' }} />
          <AppHeader brand={<strong>스크롤: 테마 스크롤 배경</strong>} nav={null} showLanguageSwitcher={false} className="is-scrolled" background="transparent" scrolledBackground={SCROLLED_BG} style={{ position: 'relative', backdropFilter: 'none', WebkitBackdropFilter: 'none' }} />
        </div>
      </DemoBlock>
      <DemoBlock title="인라인 변수 · SCSS 클래스" description="props는 CSS 변수로 전달됩니다. 색상 값은 테마(--color-header-bg-scrolled)나 페이지 클래스 SCSS에서 바꿉니다."
        code={`<Header style={{
  '--app-header-bg': 'transparent',
  '--app-header-bg-scrolled': 'var(--color-header-bg-scrolled)'
}} />

// 또는 <Header className="service-header" />
.service-header {
  --app-header-bg: transparent;
  --app-header-bg-scrolled: var(--color-header-bg-scrolled);
}

// 테마에서 스크롤 배경 색만 변경
:root {
  --color-header-bg-scrolled: #ffffff;
}

.service-header.is-scrolled { box-shadow: 0 2px 12px rgb(0 0 0 / 8%); }`}
      ><p>스타일을 생략하면 테마 기본 배경을 사용합니다. 스크롤 시 상단 색은 <code>--color-header-bg-scrolled</code>로 CSS에서 변경합니다.</p></DemoBlock>
      <GuideApiDocs sections={headerApiSections} />
    </GuideLayout>
  )
}
