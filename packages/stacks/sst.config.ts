/// <reference path="./.sst/platform/config.d.ts" />
import { api } from './src/api.stack';
import { authStack } from './src/auth.stack';
import { rds } from './src/storage.stack';

export default $config({
  app(input) {
    return {
      name: 'stacks',
      removal: input?.stage === 'production' ? 'retain' : 'remove',
      protect: ['production'].includes(input?.stage),
      home: 'aws',
    };
  },
  async run() {
    // const userPool = new sst.aws.CognitoUserPool("MyUserPool");

    await import('./src/cluster.stack');
    await import('./src/vpc.stack');
    await import('./src/api.stack');
    await import('./src/auth.stack');
    await import('./src/storage.stack');
  },
});
