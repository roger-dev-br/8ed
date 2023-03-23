import { DataSource } from "typeorm";
import "dotenv/config";

let dataSource = new DataSource({
    type: "postgres",
    url: process.env.DB_URL,
    ssl: {
        rejectUnauthorized: false,
    },
    synchronize: false,
    entities: ["src/app/shared/database/entities/**/*.ts"],
    migrations: ["src/app/shared/database/migrations/**/*.ts"],
    schema: "aula",
});

if (process.env.NODE_ENV === "test") {
    dataSource = new DataSource({
        type: "sqlite",
        database: "database.sqlite3",
        synchronize: false,
        entities: ["src/app/shared/database/entities/**/*.ts"],
        migrations: ["tests/shared/migrations/**/*.ts"],
    });
}

export default dataSource;
