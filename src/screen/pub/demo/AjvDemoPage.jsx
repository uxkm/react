'use client'

import { useMemo, useState } from 'react'
import Ajv from 'ajv'
import { DemoLayout } from '@/screen/pub/layout/DemoLayout'
import { DemoBlock } from '@/screen/pub/widgets/preview/DemoBlock'
import { wrapPageExample } from '@/screen/pub/lib/pageExampleCode'

const schema = {
  type: 'object',
  properties: {
    name: { type: 'string', minLength: 1 },
    age: { type: 'integer', minimum: 0, maximum: 150 },
    email: { type: 'string', pattern: '^.+@.+$' }
  },
  required: ['name', 'age'],
  additionalProperties: false
}

/** ajv JSON Schema 검증 데모 */
export default function AjvDemoPage () {
  const [jsonText, setJsonText] = useState('{\n  "name": "Kim",\n  "age": 30,\n  "email": "kim@example.com"\n}')
  const validate = useMemo(() => {
    const ajv = new Ajv({ allErrors: true })
    return ajv.compile(schema)
  }, [])

  const result = useMemo(() => {
    try {
      const data = JSON.parse(jsonText)
      const ok = validate(data)
      return ok
        ? { ok: true, message: '유효한 JSON입니다.' }
        : { ok: false, message: JSON.stringify(validate.errors, null, 2) }
    } catch (err) {
      return { ok: false, message: `JSON 파싱 오류: ${err.message}` }
    }
  }, [jsonText, validate])

  return (
    <DemoLayout
      title="Ajv"
      description="ajv — JSON Schema 검증 예시"
      slug="ajv"
    >
      <DemoBlock
        title="스키마"
        code={wrapPageExample(`<pre className="lib-demo-pre">{JSON.stringify(schema, null, 2)}</pre>`, {
          name: 'AjvSchemaExample',
          reactImports: [],
          compImports: [],
          extraImports: [
            `const schema = {
  type: 'object',
  properties: {
    name: { type: 'string', minLength: 1 },
    age: { type: 'integer', minimum: 0, maximum: 150 },
    email: { type: 'string', pattern: '^.+@.+$' }
  },
  required: ['name', 'age'],
  additionalProperties: false
}`
          ]
        })}
      >
        <pre className="lib-demo-pre">{JSON.stringify(schema, null, 2)}</pre>
      </DemoBlock>
      <DemoBlock
        title="입력 JSON"
        code={wrapPageExample(`const [jsonText, setJsonText] = useState('{ "name": "Kim", "age": 30 }')
const validate = useMemo(() => new Ajv({ allErrors: true }).compile(schema), [])

const result = useMemo(() => {
  try {
    const ok = validate(JSON.parse(jsonText))
    return ok
      ? { ok: true, message: '유효한 JSON입니다.' }
      : { ok: false, message: JSON.stringify(validate.errors, null, 2) }
  } catch (err) {
    return { ok: false, message: 'JSON 파싱 오류: ' + err.message }
  }
}, [jsonText, validate])

<div className="demo-stack">
  <textarea
    className="lib-demo-textarea"
    value={jsonText}
    onChange={(e) => setJsonText(e.target.value)}
    aria-label="검증할 JSON"
  />
  <pre className="lib-demo-pre">
    {result.ok ? 'OK — ' + result.message : 'FAIL\\n' + result.message}
  </pre>
</div>`, {
          name: 'AjvExample',
          reactImports: ['useMemo', 'useState'],
          compImports: [],
          extraImports: [
            "import Ajv from 'ajv'",
            `
const schema = {
  type: 'object',
  properties: {
    name: { type: 'string', minLength: 1 },
    age: { type: 'integer', minimum: 0 }
  },
  required: ['name', 'age']
}`
          ]
        })}
      >
        <div className="demo-stack">
          <textarea
            className="lib-demo-textarea"
            style={{ maxWidth: 560, minHeight: 140 }}
            value={jsonText}
            onChange={(e) => setJsonText(e.target.value)}
            aria-label="검증할 JSON"
          />
          <pre className="lib-demo-pre">
            {result.ok ? `OK — ${result.message}` : `FAIL\n${result.message}`}
          </pre>
        </div>
      </DemoBlock>
    </DemoLayout>
  )
}
