import globals from 'globals';
import js from '@eslint/js';
import prettierPlugin from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';

export default {
  ignores: ['dist/**'],
  files: ['**/*.{js,jsx,ts,tsx}'],
  languageOptions: {
    ecmaVersion: 2020,
    parser: typescriptParser,
    globals: globals.browser,
    parserOptions: {
      ecmaVersion: 'latest',
      ecmaFeatures: { jsx: true },
      sourceType: 'module',
    },
  },
  settings: { react: { version: '18.3' } },
  plugins: {
    '@typescript-eslint': typescript,
    react,
    'react-hooks': reactHooks,
    'react-refresh': reactRefresh,
    prettier: prettierPlugin,
  },
  rules: {
    ...js.configs.recommended.rules,
    ...typescript.configs['recommended'].rules,
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
    ...reactHooks.configs.recommended.rules,
    'react/jsx-no-target-blank': 'off',
    'react-internal/safe-string-coercion': 'off',
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'prettier/prettier': 'error',
  },
};
