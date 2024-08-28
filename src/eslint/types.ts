import type tseslint from 'typescript-eslint'

export interface ESlintConfig {
  plugin: {
    'import': FlatConfigArray
    'import-sort': FlatConfigArray
    'stylistic-base': FlatConfigArray
    'stylistic-jsx': FlatConfigArray
    'typescript-style': FlatConfigArray
    'unicorn': FlatConfigArray
  }
  presets: {
    base: FlatConfigArray
    react: FlatConfigArray
  }
}

export type FlatConfigArray = ReturnType<typeof tseslint.config>
