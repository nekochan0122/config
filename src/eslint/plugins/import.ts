import { fixupPluginRules } from '@eslint/compat'
// @ts-expect-error eslint-plugin-import is not typed
import eslintImport from 'eslint-plugin-import'

import type { FlatConfigArray } from '~/eslint/types'

export const importPluginConfig: FlatConfigArray = [{
  plugins: {
    // https://github.com/import-js/eslint-plugin-import/issues/2556#issuecomment-2267581659
    import: fixupPluginRules(eslintImport),
  },
  rules: {
    'import/no-empty-named-blocks': 'error',
    'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
    'import/newline-after-import': ['error', { count: 1 }],
    'import/no-duplicates': ['error', { considerQueryString: true }],
  },
}]
