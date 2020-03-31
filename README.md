# eslint-config
ESLint configuration extending the hapi eslint configuration

## Usage

First, run the following to add the required packages:
```bash
npm install --save-dev eslint@6.x @pager/eslint-config
```

Next, create a `.eslintrc.js` file in your repository root containing
```javascript
module.exports = {
    extends: [
        '@pager/eslint-config',
    ],
    rules: {}
};

```


