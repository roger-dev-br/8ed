import "dotenv/config";
import "reflect-metadata";
import { DataSource } from "typeorm";

import config from "../config/database.config";

export class DatabaseConnection {
  private static _connection: DataSource;

  private constructor() {}

  public static async instance(): Promise<DatabaseConnection> {
    if (!this._connection) {
      this._connection = await config.initialize();
    }

    return this._connection;
  }

  public static async connect() {
    if (!this._connection) {
      this._connection = await config.initialize();
      console.log("Conectado ao banco de dados");
    }
  }

  public static get connection() {
    if (!this._connection) {
      throw new Error("Database não conectado");
    }

    return this._connection;
  }
}
