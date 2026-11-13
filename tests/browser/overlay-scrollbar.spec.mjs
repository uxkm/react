import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  // Windows의 classic 감지 경로를 실행하되 실제 요소 치수는 변경하지 않습니다.
  await page.addInitScript(() => {
    const descriptor = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'offsetWidth')
    Object.defineProperty(HTMLElement.prototype, 'offsetWidth', {
      ...descriptor,
      get () {
        const width = descriptor.get.call(this)
        return this.style.top === '-9999px' && this.style.overflow === 'scroll'
          ? width + 15
          : width
      }
    })
  })
  await page.setViewportSize({ width: 1000, height: 800 })
  await page.goto('/b2b')
  await expect(page.locator('html')).toHaveAttribute('data-scrollbar', 'classic')
  await expect(page.locator('#osb-host')).toHaveCount(1)
  await page.mouse.move(0, 0)
  await page.evaluate(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    const owner = document.createElement('div')
    owner.id = 'scrollbar-owner-test'
    owner.style.cssText = 'position:absolute;top:400px;left:100px;width:300px;height:200px;overflow:auto;z-index:1000;background:white'
    owner.innerHTML = '<div style="width:900px;height:1000px">scrollbar fixture</div>'
    document.body.appendChild(owner)
  })
})

test('표시된 내부 스크롤바는 바디의 세로·가로 이동을 따라간다', async ({ page }) => {
  const owner = page.locator('#scrollbar-owner-test')
  const vertical = page.locator('.osb_vertical[style*="height: 200px"]')
  const horizontal = page.locator('.osb_horizontal[style*="width: 300px"]')
  await owner.dispatchEvent('pointerover')
  await expect(vertical).toHaveClass(/is-visible/)
  await expect(horizontal).toHaveClass(/is-visible/)
  await page.evaluate(() => window.scrollTo({ top: 150, left: 80, behavior: 'instant' }))
  await expect.poll(async () => {
    const box = await owner.boundingBox()
    const rail = await vertical.boundingBox()
    return Math.abs(rail.y - box.y)
  }).toBeLessThan(1)
  await expect.poll(async () => {
    const box = await owner.boundingBox()
    const rail = await horizontal.boundingBox()
    return Math.abs(rail.x - box.x)
  }).toBeLessThan(1)
})

test('상위 영역 스크롤은 내부 스크롤바 위치만 갱신하며 숨김 시간을 연장하지 않는다', async ({ page }) => {
  const result = await page.evaluate(async () => {
    const owner = document.querySelector('#scrollbar-owner-test')
    const parent = document.createElement('div')
    parent.style.cssText = 'position:absolute;top:200px;left:100px;width:400px;height:400px;overflow:auto;z-index:1000'
    const content = document.createElement('div')
    content.style.cssText = 'position:relative;width:800px;height:1200px'
    owner.style.top = '180px'
    owner.style.left = '50px'
    parent.appendChild(content)
    content.appendChild(owner)
    document.body.appendChild(parent)
    owner.dispatchEvent(new PointerEvent('pointerover', { bubbles: true }))
    const rail = document.querySelector('.osb_vertical[style*="height: 200px"]')
    parent.scrollTop = 60
    await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)))
    const offset = rail.getBoundingClientRect().top - owner.getBoundingClientRect().top
    for (let index = 0; index < 12; index += 1) {
      parent.scrollTop += 5
      await new Promise(resolve => setTimeout(resolve, 100))
    }
    return {
      offset,
      fadingOffset: rail.getBoundingClientRect().top - owner.getBoundingClientRect().top,
      opacity: Number.parseFloat(getComputedStyle(rail).opacity),
      visible: rail.classList.contains('is-visible')
    }
  })
  expect(Math.abs(result.offset)).toBeLessThan(1)
  expect(result.visible).toBe(false)
  if (result.opacity > 0) expect(Math.abs(result.fadingOffset)).toBeLessThan(1)
})

test('스크롤 영역이 화면 밖으로 나가면 해당 레일도 즉시 숨겨진다', async ({ page }) => {
  const owner = page.locator('#scrollbar-owner-test')
  const rail = page.locator('.osb_vertical[style*="height: 200px"]')
  await owner.dispatchEvent('pointerover')
  await expect(rail).toHaveCSS('display', 'block')
  await page.evaluate(() => window.scrollTo({ top: 800, behavior: 'instant' }))
  await expect(rail).toHaveCSS('display', 'none')
})

test('접기·펼치기 애니메이션으로 위치가 바뀌어도 표시된 레일이 따라간다', async ({ page }) => {
  await page.evaluate(() => {
    const owner = document.querySelector('#scrollbar-owner-test')
    const wrapper = document.createElement('div')
    wrapper.style.cssText = 'position:absolute;top:200px;left:100px;z-index:1000'
    wrapper.innerHTML = '<button id="scrollbar-toggle-test">접기·펼치기</button><div id="scrollbar-expander-test" style="height:0;transition:height 200ms linear"></div>'
    owner.style.position = 'relative'
    owner.style.top = '0'
    owner.style.left = '0'
    wrapper.appendChild(owner)
    document.body.appendChild(wrapper)
    wrapper.querySelector('button').onclick = () => {
      const expander = wrapper.querySelector('#scrollbar-expander-test')
      expander.style.height = expander.style.height === '0px' ? '160px' : '0px'
    }
  })
  const owner = page.locator('#scrollbar-owner-test')
  const rail = page.locator('.osb_vertical[style*="height: 200px"]')
  await owner.dispatchEvent('pointerover')
  await expect(rail).toHaveClass(/is-visible/)
  for (const height of [160, 0]) {
    await page.locator('#scrollbar-toggle-test').click()
    await expect.poll(() => page.locator('#scrollbar-expander-test').evaluate(node => node.offsetHeight)).toBe(height)
    await expect.poll(async () => {
      const box = await owner.boundingBox()
      const track = await rail.boundingBox()
      return Math.abs(track.y - box.y)
    }).toBeLessThan(1)
  }
})

test('버튼으로 영역을 숨기면 남아 있던 스크롤바도 즉시 숨겨진다', async ({ page }) => {
  const owner = page.locator('#scrollbar-owner-test')
  const rail = page.locator('.osb_vertical[style*="height: 200px"]')
  await page.evaluate(() => {
    const button = document.createElement('button')
    button.id = 'scrollbar-close-test'
    button.textContent = '접기'
    button.style.cssText = 'position:fixed;top:200px;left:20px;z-index:1001'
    button.onclick = () => { document.querySelector('#scrollbar-owner-test').hidden = true }
    document.body.appendChild(button)
  })
  await owner.dispatchEvent('pointerover')
  await expect(rail).toHaveClass(/is-visible/)
  await page.locator('#scrollbar-close-test').click()
  await expect(rail).toHaveCSS('display', 'none')
})

test('높이를 0으로 접은 영역의 스크롤바가 화면에 남지 않는다', async ({ page }) => {
  const owner = page.locator('#scrollbar-owner-test')
  const rail = page.locator('.osb_vertical[style*="height: 200px"]')
  await owner.dispatchEvent('pointerover')
  await expect(rail).toHaveClass(/is-visible/)
  await owner.evaluate(node => { node.style.height = '0px' })
  await expect(rail).toHaveCSS('display', 'none')
})
