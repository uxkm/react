import { test, expect } from '@playwright/test'

test.use({ timezoneId: 'Asia/Seoul' })

test('가이드 상단 배너는 숨기고 본문 미리보기는 닫기와 다시 표시를 지원한다', async ({ page }) => {
  await page.goto('/pub/guide/top-banner')
  await expect(page.locator('.app-layout_tree > [data-top-banner]')).toHaveCount(0)
  const banner = page.locator('[data-top-banner-demo] [data-top-banner]')
  await expect(banner).toHaveCount(1)
  await banner.getByRole('button', { name: '상단 배너 닫기' }).click()
  await expect(banner).toHaveCount(0)
  expect(await page.evaluate(() => localStorage.getItem('guide-top-banner-preview'))).toBe(null)
  await page.reload()
  await expect(banner).toHaveCount(1)
})

test('한 개는 정적 배너이고 여러 개일 때만 슬라이드·페이드로 전환한다', async ({ page }) => {
  await page.goto('/pub/guide/top-banner')
  const demo = page.locator('[data-top-banner-demo]')
  const banner = demo.locator('[data-top-banner]')
  await expect(banner.locator('.swiper-initialized')).toHaveCount(1)
  await demo.getByLabel('배너 전환 효과').selectOption('fade')
  await expect(banner.locator('.swiper-fade')).toHaveCount(1)
  await demo.getByRole('checkbox', { name: '여러 배너 사용' }).uncheck()
  await expect(banner.locator('[data-component="Carousel"]')).toHaveCount(0)
  await expect(banner.getByRole('button', { name: '다음 슬라이드' })).toHaveCount(0)
  await expect(banner).toHaveAttribute('data-count', '1')
})

test('하루 숨김은 새로고침에도 유지되고 다음 자정에 만료된다', async ({ page }) => {
  await page.clock.install({ time: new Date('2026-11-12T14:59:00.000Z') })
  await page.goto('/pub/guide/top-banner')
  const banner = page.locator('[data-top-banner-demo] [data-top-banner]')
  await banner.getByRole('checkbox', { name: '오늘 하루 열지 않기' }).check()
  await banner.getByRole('button', { name: '상단 배너 닫기' }).click()
  await expect(banner).toHaveCount(0)
  const until = await page.evaluate(() => Number(localStorage.getItem('guide-top-banner-preview')))
  expect(until).toBe(new Date('2026-11-12T15:00:00.000Z').getTime())
  await page.reload()
  await expect(banner).toHaveCount(0)
  await page.clock.fastForward(60050)
  await expect(banner).toHaveCount(1)
})
