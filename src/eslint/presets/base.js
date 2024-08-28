import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'

import importConfig from '../plugins/import.js'
import importSortConfig from '../plugins/import-sort.js'
import stylisticBaseConfig from '../plugins/stylistic-base.js'
import typescriptStyleConfig from '../plugins/typescript-style.js'
import unicornConfig from '../plugins/unicorn.js'

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  ...importConfig,
  ...importSortConfig,
  ...stylisticBaseConfig,
  ...typescriptStyleConfig,
  ...unicornConfig,
)
