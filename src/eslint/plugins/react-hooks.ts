import { fixupPluginRules } from '@eslint/compat'
// @ts-expect-error eslint-plugin-react-hooks is not typed
import eslintPluginReactHooks from 'eslint-plugin-react-hooks'

import type { FlatConfigArray } from '~/eslint/types'

export const reactHooksPluginConfig: FlatConfigArray = [
  {
    plugins: {
      // https://github.com/facebook/react/issues/28313#issuecomment-2180984628
      'react-hooks': fixupPluginRules(eslintPluginReactHooks),
    },
    rules: eslintPluginReactHooks.configs.recommended.rules,
  },
]
