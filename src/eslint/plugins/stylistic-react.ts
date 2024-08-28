import type { FlatConfigArray } from '~/eslint/types'

import { stylisticBasePluginConfig } from './stylistic-base'

export const stylisticReactPluginConfig: FlatConfigArray = [
  ...stylisticBasePluginConfig,
  {
    rules: {
      '@stylistic/jsx-closing-bracket-location': [1, 'tag-aligned'],
      '@stylistic/jsx-equals-spacing': [2, 'never'],
      '@stylistic/jsx-quotes': ['error', 'prefer-single'],
      '@stylistic/jsx-self-closing-comp': 'error',
      '@stylistic/jsx-one-expression-per-line': 'off',
      '@stylistic/jsx-tag-spacing': 'error',
    },
  }]
