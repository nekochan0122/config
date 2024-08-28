import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'

import { importPluginConfig } from '~/eslint/plugins/import'
import { importSortPluignConfig } from '~/eslint/plugins/import-sort'
import { stylisticBasePluginConfig } from '~/eslint/plugins/stylistic-base'
import { typescriptStylePluginConfig } from '~/eslint/plugins/typescript-style'
import { unicornPluginConfig } from '~/eslint/plugins/unicorn'
import type { FlatConfigArray } from '~/eslint/types'

export const basePresetConfig: FlatConfigArray = [
  eslint.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  ...importPluginConfig,
  ...importSortPluignConfig,
  ...stylisticBasePluginConfig,
  ...typescriptStylePluginConfig,
  ...unicornPluginConfig,
]
