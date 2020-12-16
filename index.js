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
        'no-await-in-loop': 'error',
        'no-console': 'error',
        'require-await': 'off',
        'import/order': [
            'error',
            {
                'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
                'newlines-between': 'always'
            }
        ]
    }
};
