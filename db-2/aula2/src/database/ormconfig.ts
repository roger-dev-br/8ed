import "dotenv/config";
import { DataSourceOptions } from "typeorm";
import * as path from "path";

const config: DataSourceOptions = {
  type: "postgres",
  url: process.env.DATABASE_URL,
  //host: '192.168.0.200',
  // port: 5432,
  // username: 'postgres',
  // password: 'testesteste',
  // database: 'growdevers',
  entities: ["src/database/entities/**/*", path.resolve(__dirname, "entities/*.entity{.ts,.js}")],
  synchronize: false,
  logging: false,
  logger: "file",
  ssl: {
    rejectUnauthorized: false,
  },
};

export default config;
