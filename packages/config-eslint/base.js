// Recommended ESLint configuration
import js from '@eslint/js';
// Turns off all rules that are unnecessary or might conflict with Prettier.
import eslintConfigPrettier from 'eslint-config-prettier';
// Easy ESLint configuration for Turborepo
import turboPlugin from 'eslint-plugin-turbo';
// Tooling which enables you to use TypeScript with ESLint
import tseslint from 'typescript-eslint';
// Only warn about rules that are not enabled
import onlyWarn from 'eslint-plugin-only-warn';

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config[]}
 * */
export const config = [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
  {
    plugins: {
      turbo: turboPlugin,
    },
    rules: {
      'turbo/no-undeclared-env-vars': 'warn',
    },
  },
  {
    plugins: {
      onlyWarn,
    },
  },
  {
    ignores: ['dist/**'],
  },
];
