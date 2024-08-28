import stylistic from '@stylistic/eslint-plugin'
import tseslint from 'typescript-eslint'

export default tseslint.config({
  plugins: {
    '@stylistic': stylistic,
  },
  rules: {
    '@stylistic/jsx-closing-bracket-location': [1, 'tag-aligned'],
    '@stylistic/jsx-equals-spacing': [2, 'never'],
    '@stylistic/jsx-quotes': ['error', 'prefer-single'],
    '@stylistic/jsx-self-closing-comp': 'error',
    '@stylistic/jsx-one-expression-per-line': 'off',
    '@stylistic/jsx-tag-spacing': 'error',
  },
})
