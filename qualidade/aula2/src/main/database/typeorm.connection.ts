import "dotenv/config";
import "reflect-metadata";
import { DataSource } from "typeorm";

import typeormConfig from "../config/database.config";

export class DatabaseConnection {
    private static _connection: DataSource;

    public static async connect() {
        if (!this._connection) {
            this._connection = await typeormConfig.initialize();
            console.log("Database is connected.");
        }
    }

    public static get connection() {
        if (!this._connection) {
            throw new Error("A database não tá inicializada, aruá");
        }

        return this._connection;
    }

    public static async destroy() {
        if (!this._connection) {
            throw new Error("A database não tá inicializada, aruá");
        }

        console.log("destruindo a conexão");

        await this._connection.destroy();

        console.log("conexão destruída");
    }
}
