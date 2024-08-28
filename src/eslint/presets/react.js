import tseslint from 'typescript-eslint'

import stylisticJsxConfig from '../plugins/stylistic-jsx.js'
import baseConfig from './base.js'

export default tseslint.config(
  ...baseConfig,
  ...stylisticJsxConfig,
)
