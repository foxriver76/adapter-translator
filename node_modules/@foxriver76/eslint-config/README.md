# Eslint config for projects

## Installation
Install the package via 

```bash
npm i @foxriver76/eslint-config --save-dev
```

## Getting started
Just extend this project in your lint config in your `eslint.config.json`.

```json
{
  "extends": ["@foxriver76/eslint-config"]
}
```

And create a `prettier.config.js` with the following content:

```js
module.exports = require('@foxriver76/eslint-config/prettier');
```