/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: 'stacks',
      removal: input?.stage === 'production' ? 'retain' : 'remove',
      protect: ['production'].includes(input?.stage),
      home: 'aws',
      // To specify region:
      // providers: {
      //   aws: { region: 'us-east-1'}
      // }
    };
  },
  async run() {
    await import('./src/vpc.stack');
    await import('./src/cluster.stack');
    await import('./src/service.stack');
    await import('./src/auth.stack');
    await import('./src/storage.stack');
  },
});
