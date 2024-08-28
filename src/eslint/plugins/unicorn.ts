import eslintPluginUnicorn from 'eslint-plugin-unicorn'

import type { FlatConfigArray } from '~/eslint/types'

const unicornConfig: FlatConfigArray = [
  eslintPluginUnicorn.configs['flat/recommended'],
]

export { unicornConfig as default }
