import { DataSource } from "typeorm";
import "dotenv/config";
import { FirstMigration1668820170473 } from "../../app/shared/database/migrations/1668820170473-FirstMigration";
import { AddMentorColumnToAvaliacao1668820755294 } from "../../app/shared/database/migrations/1668820755294-AddMentorColumnToAvaliacao";

let dataSource = new DataSource({
  type: "postgres",
  url: process.env.DB_URL,
  ssl: {
    rejectUnauthorized: false,
  },
  synchronize: false,
  entities: ["src/app/shared/database/entities/**/*.ts"],
  migrations: [FirstMigration1668820170473, AddMentorColumnToAvaliacao1668820755294],
  schema: "public",
});

if (process.env.NODE_ENV === "test") {
  dataSource = new DataSource({
    type: "sqlite",
    database: "database.sqlite3",
    synchronize: false,
    entities: ["src/app/shared/database/entities/**/*.ts"],
    migrations: [FirstMigration1668820170473, AddMentorColumnToAvaliacao1668820755294],
  });
}

export default dataSource;
