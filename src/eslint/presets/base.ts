import { importPluginConfig } from '~/eslint/plugins/import'
import { importSortPluignConfig } from '~/eslint/plugins/import-sort'
import { stylisticBasePluginConfig } from '~/eslint/plugins/stylistic-base'
import { typescriptStylePluginConfig } from '~/eslint/plugins/typescript-style'
import { unicornPluginConfig } from '~/eslint/plugins/unicorn'
import type { FlatConfigArray } from '~/eslint/types'

export const basePresetConfig: FlatConfigArray = [
  ...typescriptStylePluginConfig,
  ...stylisticBasePluginConfig,
  ...importSortPluignConfig,
  ...importPluginConfig,
  ...unicornPluginConfig,
]
