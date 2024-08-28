import eslintPluginUnicorn from 'eslint-plugin-unicorn'

import type { FlatConfigArray } from '~/eslint/types'

export const unicornConfig: FlatConfigArray = [
  eslintPluginUnicorn.configs['flat/recommended'],
]
