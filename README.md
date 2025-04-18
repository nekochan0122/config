# @nekochan0122/config

```bash
pnpm i -D @nekochan0122/config
```

## ESLint (Flat Config + TypeScript)

1. Install ESLint

```bash
pnpm i -D eslint typescript-eslint @eslint/js @eslint/compat
```

2. Install Base Plugins

```bash
pnpm i -D globals @stylistic/eslint-plugin eslint-plugin-import eslint-plugin-simple-import-sort eslint-plugin-unicorn
```

3. Use it

Base:

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

React:

```bash
pnpm i -D eslint-plugin-react eslint-plugin-react-hooks@rc eslint-plugin-react-refresh eslint-plugin-jsx-a11y
```

```js
import nekoConfig from '@nekochan0122/config/eslint'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  ...nekoConfig.presets.react,
  {
    languageOptions: {
      globals: globals.browser,
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

## VSCode

1. Install Fonts

Editor
  - [JetBrains Mono](https://www.jetbrains.com/lp/mono/)
  - [Source Han Sans HW TC VF](https://github.com/adobe-fonts/source-han-sans/releases/tag/2.004R)

Terminal
  - [JetBrainsMono Nerd Font](https://www.nerdfonts.com/font-downloads)

2. Download Profile

https://github.com/nekochan0122/config/blob/main/src/vscode

3. Import Profile

File -> Preferences -> Profile -> Import
