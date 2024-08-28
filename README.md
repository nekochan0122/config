# @nekochan/config

## ESlint (Flat Config + TypeScript)

1. Install ESlint

```bash
pnpm i -D eslint typescript-eslint @eslint/js @eslint/compat @types/eslint__js
```

2. Install Base Plugins

```bash
pnpm i -D @stylistic/eslint-plugin eslint-plugin-import eslint-plugin-simple-import-sort eslint-plugin-unicorn
```

3. Install Config and Use it

```bash
pnpm i -D @nekochan/config
```

```js
import baseConfig from '@nekochan/config/eslint/base'

export default baseConfig
```
