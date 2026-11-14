/** 문자열·배열·객체에서 조건에 맞는 CSS 클래스명을 모아 공백으로 연결한다. */
export function classNames (...args) {
  const out = []
  for (const arg of args) {
    if (!arg) continue
    if (typeof arg === 'string' || typeof arg === 'number') {
      out.push(String(arg))
      continue
    }
    if (Array.isArray(arg)) {
      const inner = classNames(...arg)
      if (inner) out.push(inner)
      continue
    }
    if (typeof arg === 'object') {
      for (const key of Object.keys(arg)) {
        if (arg[key]) out.push(key)
      }
    }
  }
  return out.join(' ')
}
