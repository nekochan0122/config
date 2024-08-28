import eslintPluginUnicorn from 'eslint-plugin-unicorn'

import type { FlatConfigArray } from '~/eslint/types'

export const unicornPluginConfig: FlatConfigArray = [
  eslintPluginUnicorn.configs['flat/recommended'],
]
