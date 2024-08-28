import { importConfig } from '~/eslint/plugins/import'
import { importSortConfig } from '~/eslint/plugins/import-sort'
import { stylisticBaseConfig } from '~/eslint/plugins/stylistic-base'
import { stylisticJsxConfig } from '~/eslint/plugins/stylistic-jsx'
import { typescriptStyleConfig } from '~/eslint/plugins/typescript-style'
import { unicornConfig } from '~/eslint/plugins/unicorn'
import { baseConfig } from '~/eslint/presets/base'
import { reactConfig } from '~/eslint/presets/react'
import type { ESlintConfig } from '~/eslint/types'

const eslintConfig: ESlintConfig = {
  plugin: {
    'import': importConfig,
    'import-sort': importSortConfig,
    'stylistic-base': stylisticBaseConfig,
    'stylistic-jsx': stylisticJsxConfig,
    'typescript-style': typescriptStyleConfig,
    'unicorn': unicornConfig,
  },
  presets: {
    base: baseConfig,
    react: reactConfig,
  },
}

export { eslintConfig as default, eslintConfig as nekoConfig }
