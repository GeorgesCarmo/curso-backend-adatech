import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ['**/*.{js,mjs,cjs,ts}']},
  {languageOptions: { globals: {...globals.browser, ...globals.node} }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
    'no-var': 'off',
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'no-irregular-whitespace': 'error',
    'no-unexpected-multiline': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-spaces': 'error',
    'no-trailing-spaces': 'error',
    'no-tabs': 'error',
    'function-paren-newline': 'error',
    'camelcase': 'error',
    'func-style': ['error', 'expression'],
  }
}
];