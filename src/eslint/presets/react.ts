import stylisticJsxConfig from '~/eslint/plugins/stylistic-jsx'
import type { FlatConfigArray } from '~/eslint/types'

import baseConfig from './base'

const reactConfig: FlatConfigArray = [
  ...baseConfig,
  ...stylisticJsxConfig,
]

export { reactConfig as default }
