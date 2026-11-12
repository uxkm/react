import { test, expect } from '@playwright/test'

test('헤더 배경은 상단 도달·복귀와 페이지 옵션 변경을 반영한다', async ({ page }) => {
  await page.goto('/pub/guide/header')
  const header = page.locator('.app-layout__tree > .app-header')
  const background = () => header.evaluate((node) => getComputedStyle(node).backgroundColor)
  await expect.poll(background).toBe('rgba(0, 0, 0, 0)')
  await page.evaluate(() => window.scrollTo(0, 300))
  await expect(header).toHaveClass(/is-scrolled/)
  await expect.poll(background).toBe('rgb(255, 255, 255)')
  await page.getByLabel('스크롤 헤더 배경').selectOption('#eef2ff')
  await expect(header).toHaveClass(/is-scrolled/)
  await expect.poll(background).toBe('rgb(238, 242, 255)')
  await page.evaluate(() => window.scrollTo(0, 0))
  await expect(header).not.toHaveClass(/is-scrolled/)
  await expect.poll(background).toBe('rgba(0, 0, 0, 0)')
})

test('가이드에서 상단 배너를 숨겨도 헤더 스크롤 상태를 정상 반영한다', async ({ page }) => {
  await page.goto('/pub/guide/top-banner')
  const header = page.locator('.app-layout__tree > .app-header')
  const banner = page.locator('.app-layout__tree > [data-top-banner]')
  await expect(banner).toHaveCount(0)
  await expect(header).not.toHaveClass(/is-scrolled/)
  await page.evaluate(() => window.scrollTo(0, 240))
  await expect(header).toHaveAttribute('data-scrolled', 'true')
  await page.evaluate(() => window.scrollTo(0, 0))
  await expect(header).not.toHaveClass(/is-scrolled/)
})
