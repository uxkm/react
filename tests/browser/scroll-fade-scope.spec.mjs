import { test, expect } from '@playwright/test'

test('바디 가로 스크롤은 메인 마지막 섹션에 딤을 만들지 않는다', async ({ page }, testInfo) => {
  await page.setViewportSize({ width: 1200, height: 900 })
  await page.goto('/b2b#cta')
  await expect(page.locator('#cta')).toBeVisible()
  const readBackgrounds = () => page.locator('.card_callout').evaluateAll(nodes => nodes.map(node => {
    const style = getComputedStyle(node)
    return {
      background: style.backgroundImage,
      color: style.backgroundColor,
      backdrop: style.backdropFilter,
      shadow: style.boxShadow
    }
  }))
  const backgrounds = await readBackgrounds()
  // 상태 클래스 외에 화면 합성에 영향을 주는 실제 배경도 검증합니다.
  expect(backgrounds).toEqual([
    { background: 'none', color: 'rgb(255, 255, 255)', backdrop: 'none', shadow: 'none' },
    { background: 'none', color: 'rgb(255, 255, 255)', backdrop: 'none', shadow: 'none' }
  ])
  for (const direction of ['right', 'left']) {
    await page.evaluate(direction => window.scrollTo({
      left: direction === 'right' ? document.documentElement.scrollWidth : 0,
      top: window.scrollY,
      behavior: 'instant'
    }), direction)
    await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))))
    expect(await page.evaluate(() => window.scrollX > 0)).toBe(direction === 'right')
    await expect(page.locator('.is-fade-start, .is-fade-end, .is-scrolled-x')).toHaveCount(0)
    expect(await readBackgrounds()).toEqual(backgrounds)
    expect(await page.locator('.main').evaluate(node => getComputedStyle(node, '::before').content)).toBe('none')
  }
  await page.screenshot({ path: testInfo.outputPath('main-callouts-body-scroll.png') })
})

test('탭 딤은 navFade를 지정한 탭 목록의 자체 스크롤에만 반응한다', async ({ page }) => {
  await page.setViewportSize({ width: 1200, height: 900 })
  await page.goto('/pub/guide/tabs')
  await page.addStyleTag({ content: 'body { min-width: 1440px; }' })
  const tabs = page.locator('.tabs_nav-fade').first()
  const viewport = tabs.locator('.tabs_scroll-viewport')
  const list = tabs.locator('.tabs_list')
  await tabs.evaluate(node => { node.style.width = '360px' })
  await list.evaluate(node => { node.scrollLeft = 0 })
  await expect(viewport).toHaveClass(/is-fade-end/)
  await expect(viewport).not.toHaveClass(/is-fade-start/)

  await page.evaluate(() => window.scrollTo({ left: 200, top: window.scrollY + 150, behavior: 'instant' }))
  await expect.poll(() => page.evaluate(() => window.scrollX)).toBeGreaterThan(0)
  expect(await list.evaluate(node => node.scrollLeft)).toBe(0)
  await expect(viewport).not.toHaveClass(/is-fade-start/)
  await expect(viewport).toHaveClass(/is-fade-end/)

  await list.evaluate(node => { node.scrollLeft = (node.scrollWidth - node.clientWidth) / 2 })
  await expect(viewport).toHaveClass(/is-fade-start/)
  await expect(viewport).toHaveClass(/is-fade-end/)
  await list.evaluate(node => { node.scrollLeft = node.scrollWidth })
  await expect(viewport).toHaveClass(/is-fade-start/)
  await expect(viewport).not.toHaveClass(/is-fade-end/)

  const plainTabs = page.locator('.tabs_scroll-nav:not(.tabs_nav-fade)').first()
  await plainTabs.evaluate(node => { node.style.width = '360px' })
  await plainTabs.locator('.tabs_list').evaluate(node => { node.scrollLeft = node.scrollWidth })
  await expect(plainTabs.locator('.is-fade-start, .is-fade-end')).toHaveCount(0)
})
