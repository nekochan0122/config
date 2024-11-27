import eslintPluginReact from 'eslint-plugin-react'

import type { FlatConfigArray } from '~/eslint/types'

export const reactPluginConfig: FlatConfigArray = [
  // @ts-expect-error eslint-plugin-react is not typed
  eslintPluginReact.configs.flat.recommended,
  // @ts-expect-error eslint-plugin-react is not typed
  eslintPluginReact.configs.flat['jsx-runtime'],
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'react/prop-types': 'off',
    },
  },
]
