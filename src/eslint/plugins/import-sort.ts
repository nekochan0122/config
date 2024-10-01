import eslintPluginSimpleImportSort from 'eslint-plugin-simple-import-sort'

import type { FlatConfigArray } from '~/eslint/types'

export const importSortPluignConfig: FlatConfigArray = [{
  plugins: {
    'simple-import-sort': eslintPluginSimpleImportSort,
  },
  rules: {
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          [String.raw`^\u0000`, String.raw`\?.*$`],
          [String.raw`^node:`, String.raw`^node:.*\u0000$`],
          [String.raw`^@?\w`, String.raw`^@?\w.*\u0000$`],
          [String.raw`(?<!\u0000)$`, String.raw`(?<=\u0000)$`],
          [String.raw`^\.`, String.raw`^\..*\u0000$`],
        ],
      },
    ],
  },
}]
