import { createServer } from "../config/server.config";
import "dotenv/config";

export const runServer = () => {
    const app = createServer();

    app.listen(process.env.PORT, () => {
        console.log("API rodando na porta " + process.env.PORT);
    });
};
