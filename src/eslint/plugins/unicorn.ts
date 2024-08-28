import eslintPluginUnicorn from 'eslint-plugin-unicorn'

import type { FlatConfigArray } from '~/eslint/types'

export const unicornPluginConfig: FlatConfigArray = [
  eslintPluginUnicorn.configs['flat/recommended'],
  {
    rules: {
      'unicorn/no-null': 'off',
      'unicorn/prefer-export-from': 'off',
      'unicorn/prefer-module': 'off',
      'unicorn/prevent-abbreviations': 'off',
    },
  },
]
