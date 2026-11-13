import { test, expect } from '@playwright/test'

test('키워드 넘침 감지는 초기 표시·펼침·접힘·크기 변경에 반응한다', async ({ page }) => {
  const errors = []
  page.on('pageerror', error => errors.push(error.message))
  await page.goto('/pub/guide/keyword')
  const keywords = page.getByRole('group', { name: '키워드 예시', exact: true })
  await keywords.evaluate(node => { node.style.width = '300px' })
  await expect(keywords).toHaveClass(/is-overflowing/)
  const expand = keywords.getByRole('button', { name: '키워드 펼침', exact: true })
  await expect(expand).toBeVisible()
  await expand.click()
  await expect(keywords).toHaveClass(/is-expanded/)
  await keywords.getByRole('button', { name: '키워드 접기', exact: true }).click()
  await expect(keywords).toHaveClass(/is-collapsed/)

  await keywords.evaluate(node => { node.style.width = '4000px' })
  await expect(keywords).not.toHaveClass(/is-overflowing/)
  await expect(keywords.locator('.keywords_toggle')).toHaveCount(0)
  await keywords.evaluate(node => { node.style.width = '300px' })
  await expect(keywords).toHaveClass(/is-overflowing/)
  await expect(expand).toBeVisible()

  const custom = page.getByRole('group', { name: '커스텀 토글 슬롯', exact: true })
  await custom.evaluate(node => { node.style.width = '300px' })
  await custom.getByRole('button', { name: '펼치기', exact: true }).click()
  await expect(custom.getByRole('button', { name: '접기', exact: true })).toHaveAttribute('aria-expanded', 'true')
  expect(errors).toEqual([])
})
