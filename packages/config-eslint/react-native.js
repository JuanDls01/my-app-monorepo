import pluginReactNative from 'eslint-plugin-react-native';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import { config as baseConfig } from './base.js';

/**
 * ESLint configuration for React Native apps.
 *
 * @type {import("eslint").Linter.FlatConfig[]}
 */
export const reactNativeConfig = [
  ...baseConfig,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
        ecmaFeatures: {
          jsx: true,
        },
        sourceType: 'module',
      },
    },
    linterOptions: {
      ignorePatterns: ['build/', 'dist/', 'node_modules/'],
    },
    env: {
      'react-native/react-native': true,
    },
    plugins: {
      tseslint,
      'react-native': pluginReactNative,
      react: pluginReact,
      'react-hooks': pluginReactHooks,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'react-native/no-inline-styles': 'warn',
      'react-native/no-color-literals': 'off',
      'react-native/no-raw-text': 'off',
      'react/react-in-jsx-scope': 'off', // para React 17+
      ...pluginReactHooks.configs.recommended.rules,
    },
  },
  {
    plugins: {
      'react-hooks': pluginReactHooks,
    },
    settings: { react: { version: 'detect' } },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
      // React scope no longer necessary with new JSX transform.
      'react/react-in-jsx-scope': 'off',
    },
  },
];
