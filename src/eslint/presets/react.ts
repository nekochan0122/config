import { stylisticJsxConfig } from '~/eslint/plugins/stylistic-jsx'
import type { FlatConfigArray } from '~/eslint/types'

import { baseConfig } from './base'

export const reactConfig: FlatConfigArray = [
  ...baseConfig,
  ...stylisticJsxConfig,
]
