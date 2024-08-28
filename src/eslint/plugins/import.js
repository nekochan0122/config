import { fixupPluginRules } from '@eslint/compat'
// @ts-expect-error eslint-plugin-import is not typed
import eslintImport from 'eslint-plugin-import'
import tseslint from 'typescript-eslint'

export default tseslint.config({
  plugins: {
    // https://github.com/import-js/eslint-plugin-import/issues/2556#issuecomment-2267581659
    import: fixupPluginRules(eslintImport),
  },
  rules: {
    'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
    'import/no-duplicates': ['error', { considerQueryString: true }],
    'import/newline-after-import': ['error', { count: 1 }],
  },
})
