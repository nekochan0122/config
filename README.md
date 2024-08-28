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
pnpm i -D @stylistic/eslint-plugin eslint-plugin-import eslint-plugin-simple-import-sort eslint-plugin-unicorn
```

3. Use it

```js
import baseConfig from '@nekochan0122/config/eslint/presets/base'
import tseslint from 'typescript-eslint'

const baseConfig = tseslint.config(
  ...baseConfig,
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
