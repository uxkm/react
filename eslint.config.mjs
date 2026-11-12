import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'

// Next 기본 설정에 포함된 접근성 플러그인과 규칙도 제외한다.
const codeQualityConfig = nextVitals.map((config) => ({
  ...config,
  ...(config.plugins ? { plugins: Object.fromEntries(Object.entries(config.plugins).filter(([name]) => name !== 'jsx-a11y')) } : {}),
  ...(config.rules ? { rules: Object.fromEntries(Object.entries(config.rules).filter(([name]) => !name.startsWith('jsx-a11y/'))) } : {})
}))

export default defineConfig([
  ...codeQualityConfig,
  globalIgnores(['.next/**', 'out/**', 'src/generated/**', 'reports/**', 'test-results/**', 'next-env.d.ts']),
  {
    rules: {
      '@next/next/no-img-element': 'off'
    }
  }
])
