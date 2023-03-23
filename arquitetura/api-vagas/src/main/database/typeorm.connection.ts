import { DataSource } from 'typeorm';
import dataSource from '../config/typeorm.config';

export class DataBaseConnection {
    private static _connection: DataSource;

    public static async connect(): Promise<void> {
        {
            if (!this._connection?.isInitialized) {
                this._connection = await dataSource.initialize();
            }
            console.log('Database is now connected');
        }
    }

    public static get connection() {
        if (!this._connection) {
            throw new Error('Database is now connected');
        }
        return this._connection;
    }
}
