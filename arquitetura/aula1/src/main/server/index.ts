import { createServer } from "../config/server.config";
import "dotenv/config";

export const runServer = () => {
  const app = createServer();

  app.listen(process.env.PORT, () => {
    console.log(`🤘 - Servidor rodando na porta ${process.env.PORT}`);
  });
};
