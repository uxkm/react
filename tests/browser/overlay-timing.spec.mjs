import { test, expect } from '@playwright/test'

for (const component of ['Alert', 'Snackbar', 'Drawer', 'Popover', 'Tooltip', 'Modal']) {
  test(`${component}: 마운트 시 열리고 지정 시간 후 닫힌다`, async ({ page }) => {
    await page.clock.install()
    await page.goto(`/pub/guide/${component.toLowerCase()}`)
    const demo = page.locator(`[data-timed-overlay-demo="${component}"]`)
    await demo.getByRole('button', { name: '자동 열림 예시 실행' }).click()
    await expect(demo.locator('[data-timed-overlay-status]')).toHaveText('열림')
    await page.clock.runFor(4500)
    await expect(demo.locator('[data-timed-overlay-status]')).toHaveText('열림')
    await page.clock.runFor(600)
    await expect(demo.locator('[data-timed-overlay-status]')).toHaveText('닫힘')
    // 닫힘 애니메이션이 끝난 뒤 실제 패널도 사라진다.
    await page.clock.runFor(500)
    if (component === 'Tooltip' || component === 'Popover') {
      await expect(demo.locator(`.${component.toLowerCase()}`)).not.toHaveClass(/is-open/)
    } else {
      await expect(demo.locator(`.${component.toLowerCase()}`)).toHaveCount(0)
    }
  })
}

test('수동 닫기 후 새로 연 모달은 이전 타이머의 영향을 받지 않는다', async ({ page }) => {
  await page.clock.install()
  await page.goto('/pub/guide/modal')
  const demo = page.locator('[data-timed-overlay-demo="Modal"]')
  const trigger = demo.getByRole('button', { name: '자동 열림 예시 실행' })
  await trigger.click()
  await page.clock.runFor(3000)
  await demo.locator('.modal_close').click()
  await expect(demo.locator('[data-timed-overlay-status]')).toHaveText('닫힘')
  await trigger.click()
  await page.clock.runFor(3000)
  await expect(demo.locator('[data-timed-overlay-status]')).toHaveText('열림')
  await page.clock.runFor(2100)
  await expect(demo.locator('[data-timed-overlay-status]')).toHaveText('닫힘')
})
