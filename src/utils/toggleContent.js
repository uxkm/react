/** 레거시 toggleContent(this) — 접근성 문서 토글 버튼 */
export function toggleContent(button) {
  if (!button) return
  const expanded = button.getAttribute('aria-expanded') === 'true'
  button.setAttribute('aria-expanded', String(!expanded))

  const controlsId = button.getAttribute('aria-controls')
  const scope = button.closest('section') ?? button.parentElement

  let targets = []
  if (controlsId) {
    const byId = document.getElementById(controlsId)
    if (byId) targets = [byId]
  }
  if (targets.length === 0 && scope) {
    targets = [...scope.querySelectorAll('.toggleContent')]
  }

  targets.forEach((node) => {
    node.hidden = expanded
  })
}
