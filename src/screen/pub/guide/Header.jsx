'use client'

import { useState } from 'react'
import { AppHeader, AppHeaderLink } from '@/comp'
import { GuideLayout } from '@/screen/pub/layout'
import { DemoBlock } from '@/screen/pub/widgets/preview/DemoBlock'
import { GuideApiDocs } from '@/screen/pub/widgets/docs/GuideApiDocs'
import { headerApiSections } from '@/screen/pub/data/guide/headerApiSections'

export const guideLabel = 'Header · 헤더'
export const pageTitle = 'Header'

export default function HeaderGuide () {
  const [background, setBackground] = useState('transparent')
  const [scrolledBackground, setScrolledBackground] = useState('#ffffff')
  return (
    <GuideLayout
      category="위젯"
      title="Header"
      description="페이지별 헤더 배경과 스크롤 후 배경을 props·CSS 변수·SCSS로 지정합니다."
      headerLayout="stacked"
      headerNav={<><AppHeaderLink to="/pub/guide/header">Header</AppHeaderLink><AppHeaderLink to="/pub/guide/top-banner">TopBanner</AppHeaderLink></>}
      headerAppearance={{ background, scrolledBackground, className: 'header-background-demo', style: { backdropFilter: 'none', WebkitBackdropFilter: 'none' } }}
    >
      <DemoBlock title="페이지별 배경 · 스크롤 상태" description="아래에서 배경을 선택하고 문서를 스크롤해 보세요. 헤더의 시작 위치를 지나면 is-scrolled 클래스가 붙고 스크롤 배경이 적용됩니다."
        code={`import { Header } from '@/comp'

<Header
  layout="stacked"
  background="transparent"
  scrolledBackground="#ffffff"
  className="service-header"
/>`}
      >
        <div className="demo-row" data-header-background-demo="">
          <label>기본 헤더 배경 <select value={background} onChange={(event) => setBackground(event.target.value)}><option value="transparent">투명</option><option value="#ffffff">흰색</option></select></label>
          <label>스크롤 헤더 배경 <select value={scrolledBackground} onChange={(event) => setScrolledBackground(event.target.value)}><option value="#ffffff">흰색</option><option value="#eef2ff">연한 파랑</option></select></label>
        </div>
      </DemoBlock>
      <DemoBlock title="기본 상태와 스크롤 상태 비교" description="같은 배경 설정을 사용하고 두 번째 헤더에만 is-scrolled 상태를 적용한 미리보기입니다."
        code={`<AppHeader background="transparent" scrolledBackground="#fff" />
<AppHeader className="is-scrolled" background="transparent" scrolledBackground="#fff" />`}
      >
        <div style={{ background: 'linear-gradient(120deg, #dbeafe, #fce7f3)', padding: 16 }}>
          <AppHeader brand={<strong>기본: 투명 배경</strong>} nav={null} showLanguageSwitcher={false} background="transparent" scrolledBackground="#ffffff" style={{ position: 'relative', backdropFilter: 'none', WebkitBackdropFilter: 'none' }} />
          <AppHeader brand={<strong>스크롤: 흰색 배경</strong>} nav={null} showLanguageSwitcher={false} className="is-scrolled" background="transparent" scrolledBackground="#ffffff" style={{ position: 'relative', backdropFilter: 'none', WebkitBackdropFilter: 'none' }} />
        </div>
      </DemoBlock>
      <DemoBlock title="인라인 변수 · SCSS 클래스" description="props는 CSS 변수로 전달됩니다. style로 변수를 직접 지정하거나, 클래스의 SCSS에서 조정할 수도 있습니다."
        code={`<Header style={{
  '--app-header-bg': 'transparent',
  '--app-header-bg-scrolled': '#ffffff'
}} />

// 또는 <Header className="service-header" />
.service-header {
  --app-header-bg: transparent;
  --app-header-bg-scrolled: #ffffff;
}

// 스크롤 상태 클래스로 직접 스타일을 지정할 수도 있습니다.
.service-header.is-scrolled { box-shadow: 0 2px 12px rgb(0 0 0 / 8%); }`}
      ><p>스타일을 생략하면 기존 테마 배경을 유지합니다. 인라인 props·변수는 클래스의 변수보다 우선합니다.</p></DemoBlock>
      <GuideApiDocs sections={headerApiSections} />
    </GuideLayout>
  )
}
