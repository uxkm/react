/**
 * public/images/lottie 의 JSON 파일을 스캔해 목록을 생성한다.
 * → public/data/pub/lottie.json
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { writeIfChanged } from './write-if-changed.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const lottieRoot = path.join(root, 'public/images/lottie')
const outFile = path.join(root, 'public/data/pub/lottie.json')

/** 상대 경로 기준 .json 이름 목록 (확장자 제외, 하위 폴더 포함) */
export function listLottieNames (dir = lottieRoot, prefix = '') {
  if (!fs.existsSync(dir)) return []
  const names = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.') || entry.name === 'index.json') continue
    const relative = prefix + entry.name
    if (entry.isDirectory()) {
      names.push(...listLottieNames(path.join(dir, entry.name), relative + '/'))
      continue
    }
    if (!entry.name.endsWith('.json')) continue
    names.push(relative.replace(/\.json$/i, ''))
  }
  return names.sort((a, b) => a.localeCompare(b))
}

export function syncLottieList () {
  const files = listLottieNames()
  const content = JSON.stringify({ files }, null, 2) + '\n'
  fs.mkdirSync(path.dirname(outFile), { recursive: true })
  const changed = writeIfChanged(outFile, content)
  if (changed) console.log('wrote', path.relative(root, outFile), `(${files.length})`)
  return files
}

if (process.argv[1] && fs.realpathSync(process.argv[1]) === fileURLToPath(import.meta.url)) {
  syncLottieList()
}
