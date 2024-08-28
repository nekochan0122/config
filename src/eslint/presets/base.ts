import eslint from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'

import importConfig from '~/eslint/plugins/import'
import importSortConfig from '~/eslint/plugins/import-sort'
import stylisticBaseConfig from '~/eslint/plugins/stylistic-base'
import typescriptStyleConfig from '~/eslint/plugins/typescript-style'
import unicornConfig from '~/eslint/plugins/unicorn'
import type { FlatConfigArray } from '~/eslint/types'

const baseConfig: FlatConfigArray = [
  {
    languageOptions: {
      globals: globals.builtin,
    },
    ignores: ['dist', 'node_modules'],
  },
  eslint.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  ...importConfig,
  ...importSortConfig,
  ...stylisticBaseConfig,
  ...typescriptStyleConfig,
  ...unicornConfig,
]

export { baseConfig as default }
