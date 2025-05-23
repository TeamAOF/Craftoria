// ESLint config for KubeJS

import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin-js';

/** @type {import('eslint').Linter.Config[]} */
export default [
  js.configs.recommended,
  {
    plugins: {
      '@stylistic/js': stylistic,
    },
  },
  {
    rules: {
      'no-unused-vars': 'off',
      'no-undef': 'off',
      'no-unexpected-multiline': 'off',
      'no-var': 'error',
      'no-useless-escape': 'warn',
      'space-infix-ops': ['error', { int32Hint: true }],
      '@stylistic/js/indent': ['error', 2],
      '@stylistic/js/spaced-comment': 'error',
      '@stylistic/js/linebreak-style': ['error', 'unix'],
      '@stylistic/js/no-trailing-spaces': 'error',
      '@stylistic/js/eol-last': ['error', 'always'],
      '@stylistic/js/no-multi-spaces': ['error', { ignoreEOLComments: true }],
      '@stylistic/js/no-multiple-empty-lines': ['error', { max: 2, maxEOF: 0 }],
      '@stylistic/js/no-extra-semi': 'error',
      '@stylistic/js/quotes': ['error', 'single', { avoidEscape: true }],
      '@stylistic/js/semi': ['error', 'always'],
      '@stylistic/js/comma-dangle': ['error', 'only-multiline'],
      '@stylistic/js/no-tabs': 'error',
      '@stylistic/js/object-curly-spacing': ['error', 'always'],
    },
  },
];
