import simpleImportSort from 'eslint-plugin-simple-import-sort'
import tseslint from 'typescript-eslint'

export default tseslint.config({
  plugins: {
    'simple-import-sort': simpleImportSort,
  },
  rules: {
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          [String.raw`^\u0000`],
          [String.raw`^node:`, String.raw`^node:.*\u0000$`],
          [String.raw`^@?\w`, String.raw`^@?\w.*\u0000$`],
          [String.raw`(?<!\u0000)$`, String.raw`(?<=\u0000)$`],
          [String.raw`^\.`, String.raw`^\..*\u0000$`],
        ],
      },
    ],
  },
})
