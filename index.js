'use strict';

module.exports = {
    extends: [
        '@hapi/eslint-config-hapi'
    ],
    plugins: [
        'import'
    ],
    parserOptions: {
        ecmaVersion: 2020
    },
    rules: {
        'no-console': 'error',
        'import/order': [
            'error',
            {
                'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
                'newlines-between': 'always'
            }
        ],
        'require-await': 'off'
    }
};
