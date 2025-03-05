import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';

export default [
  { ignores: ['dist', 'coverage'] },
  {
    files: ['**/*.{js,jsx,cjs,mjs}'],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: {
      react: { version: 'detect' },
      'import/resolver': {
        alias: {
          map: [
            ['@', './src'],
            ['public', './public'],
            ['@app', './src/app'],
            ['@assets', './src/assets'],
            ['@components', './src/components'],
            ['@config', './src/config'],
            ['@constants', './src/constants'],
            ['@hooks', './src/hooks'],
            ['@lib', './src/lib'],
            ['@libs', './src/libs'],
            ['@providers', './src/providers'],
            ['@services', './src/services'],
            ['@shared', './src/shared'],
            ['@store', './src/store'],
            ['@utils', './src/utils'],
            ['@routes', './src/routes'],
          ],
          extensions: ['.js', '.jsx'],
        },
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      import: importPlugin,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'prefer-destructuring': ['error', { object: true, array: true }],
      'react/jsx-no-target-blank': ['warn', { allowReferrer: true }],
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-console': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'import/named': 'error',
      'import/no-unresolved': 'error',
      'import/export': 'error',
      'react/prop-types': 'off',
    },
  },
];
