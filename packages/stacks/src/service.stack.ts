import { cluster } from './cluster.stack';
import { bucket, rds } from './storage.stack';

// const DATABASE_URL = $interpolate`postgresql://${rds.username}:${rds.password}@${rds.host}:${rds.port}/${rds.database}`;

// AWS Fargate Service
export const service = new sst.aws.Service('MyService', {
  cluster,

  // environment: {
  //   DATABASE_URL,
  // },

  // By default, the service will look for a Dockerfile in the root directory. Optionally
  // configure the image context and dockerfile.
  image: {
    context: '../apps/api',
    dockerfile: 'Dockerfile',
  },
  loadBalancer: {
    // domain: "example.com",
    ports: [{ listen: '80/http', forward: '3000/http' }],
  },
  dev: {
    command: 'npm run start:dev',
  },
  link: [rds, bucket],
});
