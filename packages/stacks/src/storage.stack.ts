import { vpc } from './vpc.stack';

export const rds = new sst.aws.Postgres(`jdls-postgre`, { vpc });

export const bucket = new sst.aws.Bucket('jdls-bucket');
