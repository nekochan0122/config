import globals from 'globals'
import tseslint from 'typescript-eslint'

import nekoConfig from './dist/eslint/index.js'

export default tseslint.config(
  ...nekoConfig.presets.base,
  {
    languageOptions: {
      globals: globals.builtin,
    },
  },
  {
    ignores: ['dist'],
  },
)
