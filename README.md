# babel-plugin-transform-regenerator-runtime

This is a babel plugin that:

- Prepend `var regeneratorRuntime = require('babel-regenerator-runtime');` to the file
- Prepend `var Symbol = require('core-js').Symbol;` to the file

## Dev

```
npm run build
```

## npm publish

```bash
npm run build
npm publish
```
