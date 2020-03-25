'use strict';

module.exports = {
    extends: [
        '@hapi/eslint-config-hapi',
    ],
    plugins: [
        'import',
    ],
    parserOptions: {
        ecmaVersion: 9,
    },
    rules: {
        'no-console': 2,
        'import/order': [
            'error',
            {
                'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
                'newlines-between': 'always',
            },
        ],
        'comma-dangle': [
            'error',
            {
                'arrays': 'always-multiline',
                'objects': 'always-multiline',
                'imports': 'never',
                'exports': 'never',
                'functions': 'never',
            },
        ],
    },
};
