import { vpc } from './vpc.stack';

// Create an ECS cluster
export const cluster = new sst.aws.Cluster('MyCluster', { vpc });
