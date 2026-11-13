import { test, expect } from '@playwright/test'

test('네 번째 섹션은 상담·구독 안내 카드를 같은 높이의 2열로 표시한다', async ({ page }, testInfo) => {
  await page.setViewportSize({ width: 1920, height: 1080 })
  await page.goto('/b2b#cta')
  const section = page.locator('#cta')
  const cards = section.locator('.card_callout')
  await expect(cards).toHaveCount(2)
  await expect(cards.first().locator('strong.card_callout-title')).toHaveText('무엇이든 물어보세요')
  await expect(section.getByRole('link', { name: '기업교육문의', exact: true })).toHaveAttribute('href', '/b2b/contact/education')
  await expect(section.getByRole('link', { name: '간편진단 탐색하기', exact: true })).toHaveAttribute('href', '/b2b/common/education-diagnosis')
  await expect(section.locator('#newsletter')).toBeVisible()
  await expect(section.getByRole('link', { name: '멀캠ON 구독하기', exact: true })).toHaveAttribute('href', 'https://bit.ly/HeyMate_subscribe')
  await expect(section.locator('.card_callout-actions > .btn')).toHaveCount(3)
  await expect(section.locator('.card_callout-social .icon')).toHaveCount(3)
  for (const link of await section.locator('.card_callout-social').all()) {
    await expect(link).toHaveAttribute('target', '_blank')
    await expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  }
  const bounds = await cards.evaluateAll(nodes => nodes.map(node => {
    const rect = node.getBoundingClientRect()
    return { width: rect.width, height: rect.height, top: rect.top, shadow: getComputedStyle(node).boxShadow }
  }))
  expect(Math.abs(bounds[0].width - 786)).toBeLessThan(1)
  expect(bounds[0].height).toBe(387)
  expect(bounds[1].height).toBe(bounds[0].height)
  expect(bounds[1].top).toBe(bounds[0].top)
  expect(bounds.map(item => item.shadow)).toEqual(['none', 'none'])
  const inquiry = section.locator('.card_callout-primary')
  const normalBackground = await inquiry.evaluate(node => getComputedStyle(node).backgroundImage)
  expect(normalBackground).toContain('linear-gradient')
  await inquiry.hover()
  await expect(inquiry).toHaveCSS('background-image', normalBackground)
  await expect(inquiry).toHaveCSS('color', 'rgb(255, 255, 255)')
  await expect(inquiry).toHaveCSS('filter', 'none')
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBe(1920)
  await section.screenshot({ path: testInfo.outputPath('main-callouts.png') })
})

test('고객사례 루프 경계에서 상위 요소 속성이 바뀌어도 전환이 중단되지 않는다', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 })
  await page.goto('/b2b#cases')
  const swiper = page.locator('#cases .swiper')
  await expect.poll(() => swiper.evaluate(node => node.swiper?.params.loop)).toBe(true)
  // 애니메이션 중 상위 레이아웃 속성 변경은 리사이즈나 슬라이드 변경이 아닙니다.
  const results = await swiper.evaluate(async node => {
    const instance = node.swiper
    const last = instance.slides.length - 1
    instance.slideToLoop(last, 0)
    await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)))
    const transitions = []
    for (const direction of ['next', 'prev']) {
      const started = performance.now()
      const ended = new Promise(resolve => instance.once('transitionEnd', () => resolve(performance.now() - started)))
      if (direction === 'next') instance.slideNext()
      else instance.slidePrev()
      await new Promise(resolve => setTimeout(resolve, 100))
      node.closest('.app-layout').setAttribute('data-carousel-layout-test', direction)
      const elapsed = await ended
      transitions.push({ elapsed, index: instance.realIndex, sameInstance: node.swiper === instance })
      await new Promise(requestAnimationFrame)
    }
    node.closest('.app-layout').removeAttribute('data-carousel-layout-test')
    return { transitions, last, speed: instance.params.speed }
  })
  expect(results.transitions.map(item => item.index)).toEqual([0, results.last])
  for (const item of results.transitions) {
    expect(item.sameInstance).toBe(true)
    expect(item.elapsed).toBeGreaterThan(results.speed * 0.8)
  }
})

test('고객사례는 전체 너비에서 가운데 카드만 강조하고 순환 이동한다', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 })
  await page.goto('/b2b#cases')
  const section = page.locator('#cases')
  const swiper = section.locator('.swiper')
  await expect.poll(() => swiper.evaluate(node => node.swiper?.params.loop)).toBe(true)
  await expect(section.locator('.stat.stat_testimonial')).toHaveCount(6)
  await expect(section.locator('.swiper-slide-active strong.stat_value')).toContainText('임원이 먼저 배우니')
  await expect(section.locator('.swiper-slide-active span.profile .icon')).toHaveCount(1)
  await expect(section.locator('.swiper-slide-active .card_testimonial')).toHaveCSS('border-top-color', 'rgb(67, 137, 229)')
  await expect(section.locator('.swiper-slide-prev .card_testimonial')).toHaveCSS('border-top-color', 'rgba(0, 0, 0, 0)')
  const bounds = await section.evaluate(node => {
    const carousel = node.querySelector('.carousel').getBoundingClientRect()
    const active = node.querySelector('.swiper-slide-active').getBoundingClientRect()
    const previous = node.querySelector('.swiper-slide-prev').getBoundingClientRect()
    const next = node.querySelector('.swiper-slide-next').getBoundingClientRect()
    return { width: carousel.width, left: carousel.left, center: active.left + active.width / 2, active: active.width, previous: previous.width, next: next.width }
  })
  expect(bounds.width).toBe(1920)
  expect(bounds.left).toBe(0)
  expect(Math.abs(bounds.center - 960)).toBeLessThan(1)
  expect(bounds.previous).toBeLessThan(bounds.active * 0.9)
  expect(bounds.next).toBeLessThan(bounds.active * 0.9)
  const count = await section.locator('.swiper-slide').count()
  const start = await swiper.evaluate(node => node.swiper.realIndex)
  for (let index = 0; index < count; index += 1) {
    await section.getByRole('button', { name: '다음 슬라이드', exact: true }).click()
    await expect.poll(() => swiper.evaluate(node => node.swiper.realIndex)).toBe((start + index + 1) % count)
    await expect.poll(() => swiper.evaluate(node => node.swiper.animating)).toBe(false)
  }
  await expect(section.locator('.swiper-slide-active .card_testimonial')).toHaveCSS('border-top-color', 'rgb(67, 137, 229)')
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBe(1920)
})

test('메인 첫 화면은 1600px 섹션 위젯과 카드 링크를 표시한다', async ({ page }, testInfo) => {
  await page.setViewportSize({ width: 1920, height: 1080 })
  const errors = []
  page.on('pageerror', (error) => errors.push(error.message))
  await page.goto('/b2b')
  await expect(page.getByRole('heading', { level: 1 })).toContainText('기업교육은 역시')
  await expect(page.locator('#hero')).toBeVisible()
  await expect(page.locator('#card-grid')).toBeVisible()
  const main = page.locator('main')
  expect(await main.evaluate((node) => ({ width: node.getBoundingClientRect().width, left: node.getBoundingClientRect().left }))).toEqual({ width: 1600, left: 160 })
  await expect(main.locator('.main-promotion h2').first()).toHaveCSS('color', 'rgb(255, 255, 255)')
  const promotion = main.locator('.main-promotion')
  await expect(promotion.locator('[data-component="Carousel"]')).toHaveAttribute('data-count', '2')
  await expect.poll(() => promotion.locator('.swiper').evaluate((node) => node.swiper?.params.effect)).toBe('fade')
  expect(await promotion.locator('.swiper').evaluate(node => node.swiper.params.fadeEffect.crossFade)).toBe(true)
  await expect(promotion.getByRole('button', { name: '이전 슬라이드' })).toBeVisible()
  await promotion.getByRole('button', { name: '슬라이드 정지' }).click()
  await expect(promotion.getByRole('button', { name: '이전 슬라이드' })).toBeEnabled()
  await expect(promotion.getByRole('button', { name: '다음 슬라이드' })).toBeEnabled()
  await expect(promotion.locator('.swiper-pagination')).toHaveText(/1\s*\/\s*2/)
  await promotion.getByRole('button', { name: '다음 슬라이드' }).click()
  await expect(promotion.locator('.swiper-pagination')).toHaveText(/2\s*\/\s*2/)
  await expect(promotion.locator('.swiper-slide-active h2')).toContainText('우리회사 AX 전환은')
  await expect.poll(() => promotion.locator('.swiper-slide-active h2').evaluate((node) => node.getAnimations().some((animation) => animation.playState === 'running'))).toBe(true)
  await expect(promotion.locator('.swiper-slide-active h2')).toHaveCSS('opacity', '1')
  await expect(promotion.locator('.swiper-slide-active p')).toHaveCSS('opacity', '1')
  await expect(promotion.locator('.swiper-slide-active .card_promotion-action')).toHaveCSS('opacity', '1')
  await expect(promotion.locator('.swiper-slide-active .card_promotion-background')).toHaveCSS('animation-duration', '3.2s')
  await expect.poll(() => promotion.locator('.swiper').evaluate((node) => node.swiper?.animating ?? false)).toBe(false)
  await promotion.getByRole('button', { name: '이전 슬라이드' }).click()
  await expect(promotion.locator('.swiper-pagination')).toHaveText(/1\s*\/\s*2/)
  await expect.poll(() => promotion.locator('.swiper').evaluate((node) => node.swiper?.animating ?? false)).toBe(false)
  await promotion.getByRole('button', { name: '슬라이드 재생' }).click()
  await expect(promotion.locator('.swiper-pagination')).toHaveText(/2\s*\/\s*2/, { timeout: 8000 })
  await promotion.getByRole('button', { name: '슬라이드 정지' }).click()
  await expect(promotion.locator('.swiper-slide-active h2')).toHaveCSS('opacity', '1')
  await expect(promotion.locator('.swiper-slide-active p')).toHaveCSS('opacity', '1')
  const promotionWidth = await main.locator('.card_promotion').first().evaluate((node) => node.getBoundingClientRect().width)
  const imageCardWidth = await main.locator('.card_image').first().evaluate((node) => node.getBoundingClientRect().width)
  expect(Math.abs(promotionWidth - imageCardWidth)).toBeLessThan(1)
  await expect(main.locator('.main-cards img')).toHaveCount(0)
  const backgrounds = main.locator('.main-cards .card_background')
  await expect(backgrounds).toHaveCount(4)
  expect(await backgrounds.evaluateAll(async (nodes) => {
    return Promise.all(nodes.map(async (node) => {
      const background = getComputedStyle(node).backgroundImage
      const url = background.match(/^url\(["']?(.*?)["']?\)$/)?.[1]
      if (!url) return false
      const image = new window.Image()
      image.src = url
      await image.decode()
      return image.naturalWidth > 0
    }))
  })).toEqual([true, true, true, true])
  await expect(main.getByRole('link', { name: '기업교육 맞춤상담', exact: true })).toHaveAttribute('href', '/b2b/contact/education')
  await expect(main.getByRole('link', { name: '간편 진단 및 맞춤 교육추천', exact: true })).toHaveAttribute('href', '/b2b/common/education-diagnosis')
  await expect(main.getByRole('link', { name: 'AX 진단 체험하기', exact: true }).first()).toHaveAttribute('href', '/b2b/contents/ax/competency')
  await expect(main.locator('.main-quick-links a.card')).toHaveCount(3)
  await expect(main.locator('.main-quick-links a.card').first()).toHaveCSS('flex-direction', 'row')
  await expect(main.locator('.main-cards .card_promotion.card')).toHaveCount(2)
  await expect(main.locator('.main-cards .card_image.card')).toHaveCount(2)
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBe(1920)
  await page.screenshot({ path: testInfo.outputPath('main-first-screen.png'), fullPage: true })
  await page.evaluate(() => { window.__cardNavigationMarker = true })
  await main.getByRole('link', { name: '기업교육 맞춤상담', exact: true }).click()
  await expect(page).toHaveURL(/\/b2b\/contact\/education$/)
  expect(await page.evaluate(() => window.__cardNavigationMarker)).toBe(true)
  expect(errors).toEqual([])
})


test('동작 줄이기 설정에서는 프로모션 텍스트 애니메이션 없이 표시한다', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/b2b')
  const promotion = page.locator('.main-promotion')
  await promotion.getByRole('button', { name: '슬라이드 정지' }).click()
  await promotion.getByRole('button', { name: '다음 슬라이드' }).click()
  await expect(promotion.locator('.swiper-slide-active h2')).toContainText('우리회사 AX 전환은')
  for (const selector of ['h2', 'p', '.card_promotion-action']) {
    const text = promotion.locator(`.swiper-slide-active ${selector}`)
    await expect(text).toHaveCSS('animation-name', 'none')
    await expect(text).toHaveCSS('opacity', '1')
    await expect(text).toHaveCSS('transform', 'none')
  }
  await expect(promotion.locator('.swiper-slide-active .card_promotion-background')).toHaveCSS('animation-name', 'none')
  await promotion.getByRole('button', { name: '이전 슬라이드' }).click()
  await expect(promotion.locator('.swiper-pagination')).toHaveText(/1\s*\/\s*2/)
})


test('멀캠ON 섹션은 재사용 콘텐츠 카드를 3열로 표시한다', async ({ page }, testInfo) => {
  await page.setViewportSize({ width: 1920, height: 1080 })
  await page.goto('/b2b#on')
  const section = page.locator('#on')
  await expect(section.getByRole('heading', { level: 2 })).toContainText('변화를 읽고 조직의 미래를 준비하세요')
  const cards = section.locator('.card.card_content')
  await expect(cards).toHaveCount(3)
  await expect(cards.first().locator('.card_body')).toHaveCount(1)
  await expect(section.locator('img')).toHaveCount(0)
  await expect(cards.first().locator('strong.card_content-title')).toContainText('글로벌 AI 트렌드')
  await expect.poll(() => section.locator('.swiper').evaluate((node) => node.swiper?.params.slidesPerView)).toBe(3)
  await expect(section.getByRole('button', { name: '이전 슬라이드' })).toBeVisible()
  await expect(section.getByRole('button', { name: '다음 슬라이드' })).toBeDisabled()
  const bounds = await cards.evaluateAll((nodes) => nodes.map((node) => {
    const rect = node.getBoundingClientRect()
    return { width: rect.width, top: rect.top, height: rect.height }
  }))
  expect(Math.max(...bounds.map((rect) => rect.top)) - Math.min(...bounds.map((rect) => rect.top))).toBeLessThan(1)
  expect(Math.abs(bounds[0].width - (1600 - 56) / 3)).toBeLessThan(1)
  expect(new Set(bounds.map((rect) => rect.height)).size).toBe(1)
  for (const card of await cards.all()) {
    await expect(card).toHaveAttribute('href', '/b2b/insight/on/list')
  }
  expect(await section.locator('.card_background').evaluateAll(async (nodes) => Promise.all(nodes.map(async (node) => {
    const image = new window.Image()
    image.src = getComputedStyle(node).backgroundImage.match(/^url\(["']?(.*?)["']?\)$/)?.[1] ?? ''
    await image.decode()
    return image.naturalWidth > 0
  })))).toEqual([true, true, true])
  const firstCard = cards.first()
  await firstCard.hover()
  await expect(firstCard.locator('.card_content-thumbnail')).toHaveCSS('transform', 'matrix(1.08, 0, 0, 1.08, 0, 0)')
  await expect(firstCard).toHaveCSS('transform', 'none')
  await expect(firstCard).toHaveCSS('box-shadow', 'none')
  await expect(firstCard).toHaveCSS('border-top-color', 'rgb(200, 200, 204)')
  await page.mouse.move(1900, 100)
  await expect(firstCard.locator('.card_content-thumbnail')).toHaveCSS('transform', 'matrix(1, 0, 0, 1, 0, 0)')
  await section.screenshot({ path: testInfo.outputPath('main-insights.png') })
})
