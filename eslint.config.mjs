import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';

export default [
  {
    ignores: ['**/node_modules/**', '**/build/**', '**/dist/**'],
  },
  // Server
  {
    files: ['apps/server/**/*.js'],
    ...js.configs.recommended,
    languageOptions: {
      globals: { ...globals.node },
      sourceType: 'commonjs',
    },
  },
  // Client
  {
    ...react.configs.flat.recommended,
    files: ['apps/client/src/**/*.{js,jsx}'],
    plugins: {
      react,
      'react-hooks': reactHooks,
    },
    languageOptions: {
      ...react.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.browser,
        ...globals.es2020,
      },
    },
    settings: {
      react: { version: '19' },
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.flat.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
    },
  },
];
