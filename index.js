'use strict';

module.exports = {
    extends: [
        '@hapi/eslint-config-hapi'
    ],
    plugins: [
        'import'
    ],
    parserOptions: {
        ecmaVersion: 9
    },
    rules: {
        'no-console': 2,
        'import/order': [
            'error',
            {
                'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
                'newlines-between': 'always'
            }
        ]
    }
};
