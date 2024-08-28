import stylistic from '@stylistic/eslint-plugin'

import type { FlatConfigArray } from '~/eslint/types'

export const stylisticBasePluginConfig: FlatConfigArray = [{
  plugins: {
    '@stylistic': stylistic,
  },
  rules: {
    '@stylistic/array-bracket-spacing': 'error',
    '@stylistic/arrow-parens': 'error',
    '@stylistic/arrow-spacing': 'error',
    '@stylistic/block-spacing': 'error',
    '@stylistic/brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
    '@stylistic/comma-dangle': ['error', 'always-multiline'],
    '@stylistic/comma-spacing': 'error',
    '@stylistic/eol-last': 'error',
    '@stylistic/function-call-spacing': 'error',
    '@stylistic/indent': ['error', 2],
    '@stylistic/key-spacing': 'error',
    '@stylistic/keyword-spacing': 'error',
    '@stylistic/member-delimiter-style': ['error', { multiline: { delimiter: 'none' } }],
    '@stylistic/no-multi-spaces': 'error',
    '@stylistic/no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],
    '@stylistic/no-trailing-spaces': 'error',
    '@stylistic/no-whitespace-before-property': 'error',
    '@stylistic/object-curly-spacing': ['error', 'always'],
    '@stylistic/quotes': ['error', 'single'],
    '@stylistic/quote-props': ['error', 'consistent-as-needed'],
    '@stylistic/semi': ['error', 'never'],
    '@stylistic/space-before-blocks': 'error',
    '@stylistic/space-infix-ops': 'error',
    '@stylistic/spaced-comment': 'error',
    '@stylistic/switch-colon-spacing': 'error',
  },
}]

export { stylisticBasePluginConfig as default }
