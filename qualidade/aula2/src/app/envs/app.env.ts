import "dotenv/config";

export const appEnv = () => {
    return {
        dbUrl: process.env.DB_URL,
    };
};
