import { config as baseConfig } from './base.js';

/**
 * A custom ESLint configuration apps / packages that use Nest.
 *
 * @type {import("eslint").Linter.Config[]}
 * */
export const nestConfig = [
  ...baseConfig,
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
      },
    },
    linterOptions: {
      ignorePatterns: ['dist/', 'node_modules/'],
    },
    env: {
      node: true,
    },
    plugins: {
      tseslint,
    },
    rules: {
      'turbo/no-undeclared-env-vars': 'warn',
    },
  },
];
