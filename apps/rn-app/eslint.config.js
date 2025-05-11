// eslint-disable-next-line @typescript-eslint/no-require-imports
const expoConfig = require('eslint-config-expo/flat');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { config: reactConfig } = require('@my-app/eslint-config/react');

module.exports = [
  ...expoConfig,
  ...reactConfig,
  {
    ignores: ['dist/*'],
  },
];
