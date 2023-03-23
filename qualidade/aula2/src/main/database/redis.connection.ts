import Redis from "ioredis";
import { redisEnv } from "../../app/envs/redis.env";

export class RedisConnection {
    private static _connection: Redis;

    public static async connect() {
        if (!this._connection) {
            this._connection = new Redis({
                host: redisEnv.host,
                port: redisEnv.port,
                username: redisEnv.username,
                password: redisEnv.password,
            });
        }

        console.log("Redis is connected.");
    }

    public static get connection() {
        if (!this._connection) {
            throw new Error("Redis is not connected.");
        }

        return this._connection;
    }

    public static async destroy() {
        if (!this._connection) {
            throw new Error("Redis is not connected.");
        }

        await this._connection.quit();
    }
}
