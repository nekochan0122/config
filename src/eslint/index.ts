import { importPluginConfig } from '~/eslint/plugins/import'
import { importSortPluignConfig } from '~/eslint/plugins/import-sort'
import { stylisticBasePluginConfig } from '~/eslint/plugins/stylistic-base'
import { stylisticReactPluginConfig } from '~/eslint/plugins/stylistic-react'
import { typescriptStylePluginConfig } from '~/eslint/plugins/typescript-style'
import { unicornPluginConfig } from '~/eslint/plugins/unicorn'
import { basePresetConfig } from '~/eslint/presets/base'
import { reactPresetConfig } from '~/eslint/presets/react'
import type { FlatConfigArray } from '~/eslint/types'

// use this type to fix error TS2742: The inferred type of 'eslintConfig' cannot be named without a reference to 'ts-eslint'. This is likely not portable. A type annotation is necessary.
type ESlintConfig = {
  plugin: {
    'import': FlatConfigArray
    'import-sort': FlatConfigArray
    'stylistic-base': FlatConfigArray
    'stylistic-react': FlatConfigArray
    'typescript-style': FlatConfigArray
    'unicorn': FlatConfigArray
  }
  presets: {
    base: FlatConfigArray
    react: FlatConfigArray
  }
}

const eslintConfig: ESlintConfig = {
  plugin: {
    'import': importPluginConfig,
    'import-sort': importSortPluignConfig,
    'stylistic-base': stylisticBasePluginConfig,
    'stylistic-react': stylisticReactPluginConfig,
    'typescript-style': typescriptStylePluginConfig,
    'unicorn': unicornPluginConfig,
  },
  presets: {
    base: basePresetConfig,
    react: reactPresetConfig,
  },
}

export { eslintConfig as default, eslintConfig as nekoConfig }
