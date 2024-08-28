# @nekochan0122/config

```bash
pnpm i -D @nekochan0122/config
```

## ESlint (Flat Config + TypeScript)

1. Install ESlint

```bash
pnpm i -D eslint typescript-eslint @eslint/js @eslint/compat @types/eslint__js
```

2. Install Base Plugins

```bash
pnpm i -D globals @stylistic/eslint-plugin eslint-plugin-import eslint-plugin-simple-import-sort eslint-plugin-unicorn
```

3. Use it

```js
import nekoConfig from '@nekochan0122/config/eslint'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  ...nekoConfig.presets.base,
  {
    languageOptions: {
      globals: globals.browser, // choose the correct globals for ur project
    },
    rules: {
      '@stylistic/indent': ['error', 4], // you can override rules in here
    },
  }
)
```

4. Update VSCode Settings (Optional)

```json
{
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "always"
  },
}
```

> [!CAUTION]
> Do not use this config with Prettier or other formatter.
