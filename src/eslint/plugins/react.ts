// @ts-expect-error eslint-plugin-react is not typed
import eslintPluginReact from 'eslint-plugin-react'

import type { FlatConfigArray } from '~/eslint/types'

export const reactPluginConfig: FlatConfigArray = [
  eslintPluginReact.configs.flat.recommended,
]
