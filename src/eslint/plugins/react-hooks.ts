// @ts-expect-error eslint-plugin-react-hooks is not typed
import eslintPluginReactHooks from 'eslint-plugin-react-hooks'

import type { FlatConfigArray } from '~/eslint/types'

export const reactHooksPluginConfig: FlatConfigArray = [
  {
    plugins: {
      // https://github.com/facebook/react/issues/28313
      'react-hooks': eslintPluginReactHooks,
    },
    rules: eslintPluginReactHooks.configs.rules,
  },
]
