import tseslint from 'typescript-eslint'

import nekoConfig from './dist/eslint/index.js'

export default tseslint.config(
  ...nekoConfig.presets.base,
)
