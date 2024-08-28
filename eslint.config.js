import tseslint from 'typescript-eslint'

import baseConfig from './src/eslint/presets/base.js'

export default tseslint.config(
  ...baseConfig,
)
