import tseslint from 'typescript-eslint'

import nekoConfig from './dist/eslint'

export default tseslint.config(
  ...nekoConfig.presets.base,
  {
    ignores: ['dist'],
  },
)
