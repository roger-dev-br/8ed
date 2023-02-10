import "dotenv/config";
import { DataSourceOptions } from "typeorm";

const config: DataSourceOptions = {
  type: "postgres",
  url: process.env.DATABASE_URL,
  //host: '192.168.0.200',
  // port: 5432,
  // username: 'postgres',
  // password: 'testesteste',
  // database: 'growdevers',
  synchronize: false,
  logging: false,
  ssl: {
    rejectUnauthorized: false,
  },
};

export default config;
