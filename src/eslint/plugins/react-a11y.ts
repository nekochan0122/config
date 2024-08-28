// @ts-expect-error eslint-plugin-jsx-a11y is not typed
import eslintPluginReactA11y from 'eslint-plugin-jsx-a11y'

import type { FlatConfigArray } from '~/eslint/types'

export const reactA11yPluginConfig: FlatConfigArray = [
  {
    plugins: eslintPluginReactA11y.flatConfigs.recommended.plugins,
    rules: eslintPluginReactA11y.flatConfigs.recommended.rules,
  },
]
