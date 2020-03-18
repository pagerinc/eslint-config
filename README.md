# eslint-config
ESLint configuration extending the hapi eslint configuration

## Usage

First, run the following to add the required packages:
```bash
npm install --save-dev eslint@6.x @hapi/eslint-plugin-hapi@4.x @hapi/eslint-config-hapi@13.x eslint-plugin-import@2.x
```

Next, create a `.eslintrc.js` file in your repository root containing
```javascript
module.exports = {
    extends: [
        '@pager/eslint-config'
    ],
    rules: {},
};

```


