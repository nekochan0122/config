import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'

import type { FlatConfigArray } from '~/eslint/types'

import importConfig from '../plugins/import'
import importSortConfig from '../plugins/import-sort'
import stylisticBaseConfig from '../plugins/stylistic-base'
import typescriptStyleConfig from '../plugins/typescript-style'
import unicornConfig from '../plugins/unicorn'

const baseConfig: FlatConfigArray = [
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
