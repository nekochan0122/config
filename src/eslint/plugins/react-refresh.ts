// @ts-expect-error eslint-plugin-react-refresh is not typed
import eslintPluginReactRefresh from 'eslint-plugin-react-refresh'

import type { FlatConfigArray } from '~/eslint/types'

export const reactRefreshPluginConfig: FlatConfigArray = [
  {
    plugins: {
      'react-refresh': eslintPluginReactRefresh,
    },
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
]
