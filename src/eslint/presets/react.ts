import type { FlatConfigArray } from '~/eslint/types'

import stylisticJsxConfig from '~/eslint/plugins/stylistic-jsx'
import baseConfig from './base'

const reactConfig: FlatConfigArray = [
  ...baseConfig,
  ...stylisticJsxConfig,
]

export { reactConfig as default }
