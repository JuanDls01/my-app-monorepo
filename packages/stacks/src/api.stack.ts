import { cluster } from './cluster.stack';
import { bucket, rds } from './storage.stack';

const DATABASE_URL = $interpolate`postgresql://${rds.username}:${rds.password}@${rds.host}:${rds.port}/${rds.database}`;

export const api = new sst.aws.Service('MyService', {
  cluster,
  environment: {
    DATABASE_URL,
  },
  loadBalancer: {
    ports: [{ listen: '80/http', forward: '3000/http' }],
  },
  dev: {
    command: 'npm run start:dev',
  },
  link: [rds, bucket],
});
