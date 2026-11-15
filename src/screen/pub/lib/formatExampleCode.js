/** 코드 예제 전용 정렬. 파서는 코드가 표시될 때 필요한 것만 불러옵니다. */
const engines = new Map()
const cache = new Map()

export const exampleCodeFormatOptions = {
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: false,
  singleQuote: true,
  jsxSingleQuote: false,
  singleAttributePerLine: true,
  trailingComma: 'none',
  bracketSameLine: false,
  embeddedLanguageFormatting: 'off'
}

function getParser (fileName) {
  const extension = String(fileName).toLowerCase().split('.').pop()
  if (['js', 'jsx', 'mjs', 'cjs', 'javascript', 'react'].includes(extension)) return 'babel'
  if (['ts', 'tsx', 'typescript'].includes(extension)) return 'typescript'
  if (['json', 'jsonc'].includes(extension)) return 'json'
  if (extension === 'html') return 'html'
  if (['css', 'scss', 'less'].includes(extension)) return extension
  return null
}

function loadEngine (parser) {
  const kind = ['css', 'scss', 'less'].includes(parser) ? 'css' : parser
  if (!engines.has(kind)) {
    engines.set(kind, (async () => {
      const prettier = await import('prettier/standalone')
      if (kind === 'html') return { prettier, plugins: [await import('prettier/plugins/html')] }
      if (kind === 'css') return { prettier, plugins: [await import('prettier/plugins/postcss')] }
      const [syntax, estree] = await Promise.all([
        kind === 'typescript' ? import('prettier/plugins/typescript') : import('prettier/plugins/babel'),
        import('prettier/plugins/estree')
      ])
      return { prettier, plugins: [syntax, estree] }
    })())
  }
  return engines.get(kind)
}

/** 실행·문자열 치환 없이 구문을 파싱합니다. 설명용 불완전 코드는 원문을 유지합니다. */
export function formatExampleCode (code, fileName = 'Example.jsx') {
  const source = String(code ?? '')
  const parser = getParser(fileName)
  if (!source.trim() || !parser) return Promise.resolve(source)
  const key = `${parser}\0${source}`
  if (!cache.has(key)) {
    if (cache.size >= 200) cache.delete(cache.keys().next().value)
    cache.set(key, (async () => {
      const { prettier, plugins } = await loadEngine(parser)
      const options = { ...exampleCodeFormatOptions, parser, plugins }
      try {
        // JSX 조각은 프로그램의 ASI 세미콜론 없이 표시하고 형제 요소도 지원합니다.
        if (['babel', 'typescript'].includes(parser) && source.trimStart().startsWith('<')) {
          const fragment = await prettier.format(`<>\n${source}\n</>`, options)
          return fragment.trimEnd().split('\n').slice(1, -1).map(line => line.replace(/^ {2}/, '')).join('\n')
        }
        return (await prettier.format(source, options)).trimEnd()
      } catch {
        return source
      }
    })().catch(() => source))
  }
  return cache.get(key)
}
