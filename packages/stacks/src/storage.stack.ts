import { vpc } from './vpc.stack';

export const rds = new sst.aws.Postgres('MyPostgres', { vpc });

export const bucket = new sst.aws.Bucket('MyBucket');
