import tseslint from 'typescript-eslint'

import baseConfig from './dist/eslint/presets/base.js'

export default tseslint.config(
  ...baseConfig,
  {
    ignores: ['dist'],
  },
)
