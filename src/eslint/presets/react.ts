import { importPluginConfig } from '~/eslint/plugins/import'
import { importSortPluignConfig } from '~/eslint/plugins/import-sort'
import { reactPluginConfig } from '~/eslint/plugins/react'
import { reactA11yPluginConfig } from '~/eslint/plugins/react-a11y'
import { reactHooksPluginConfig } from '~/eslint/plugins/react-hooks'
import { reactRefreshPluginConfig } from '~/eslint/plugins/react-refresh'
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
  ...reactPluginConfig,
  ...reactA11yPluginConfig,
  ...reactHooksPluginConfig,
  ...reactRefreshPluginConfig,
]
