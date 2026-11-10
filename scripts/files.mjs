import fs from 'node:fs'
import path from 'node:path'

/** Do not invalidate Next's modules when generated content did not change. */
export function writeIfChanged (file, content) {
  if (fs.existsSync(file) && fs.readFileSync(file, 'utf8') === content) return false
  fs.mkdirSync(path.dirname(file), { recursive: true })
  const temporary = path.join(path.dirname(file), '.' + path.basename(file) + '.' + process.pid + '.tmp')
  fs.writeFileSync(temporary, content)
  fs.renameSync(temporary, file)
  return true
}
