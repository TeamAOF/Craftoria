// ESLint config for KubeJS

import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';

/** @type {import('eslint').Linter.Config[]} */
export default [
  js.configs.recommended,
  {
    plugins: {
      '@stylistic': stylistic,
    },
  },
  {
    rules: {
      'no-unused-vars': 'off',
      'no-undef': 'off',
      'no-unexpected-multiline': 'off',
      'no-var': 'error',
      'no-useless-escape': 'warn',
      'no-useless-return': 'warn',
      'prefer-destructuring': ['error', { object: true, array: false }],
      'space-infix-ops': ['error', { int32Hint: true }],
      '@stylistic/indent': ['error', 2],
      '@stylistic/spaced-comment': 'error',
      '@stylistic/linebreak-style': ['error', 'unix'],
      '@stylistic/no-trailing-spaces': 'error',
      '@stylistic/eol-last': ['error', 'always'],
      '@stylistic/no-multi-spaces': ['error', { ignoreEOLComments: true }],
      '@stylistic/no-multiple-empty-lines': ['error', { max: 2, maxEOF: 0 }],
      '@stylistic/no-extra-semi': 'error',
      '@stylistic/quotes': ['error', 'single', { avoidEscape: true }],
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/comma-dangle': ['error', 'only-multiline'],
      '@stylistic/no-tabs': 'error',
      '@stylistic/object-curly-spacing': ['error', 'always'],
      '@stylistic/quote-props': ['error', 'as-needed'],
    },
  },
];
