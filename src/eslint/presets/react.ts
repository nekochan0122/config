import { importPluginConfig } from '~/eslint/plugins/import'
import { importSortPluignConfig } from '~/eslint/plugins/import-sort'
import { stylisticReactPluginConfig } from '~/eslint/plugins/stylistic-react'
import { typescriptStylePluginConfig } from '~/eslint/plugins/typescript-style'
import { unicornPluginConfig } from '~/eslint/plugins/unicorn'
import type { FlatConfigArray } from '~/eslint/types'

export const reactPresetConfig: FlatConfigArray = [
  ...typescriptStylePluginConfig,
  ...stylisticReactPluginConfig,
  ...importSortPluignConfig,
  ...importPluginConfig,
  ...unicornPluginConfig,
]
