import cors from "cors";
import express from "express";
import { makeRoutes } from "./routes.config";

export const createServer = () => {
  const app = express();

  // Configurar cors
  app.use(cors());

  // Configurar o JSON no Body do Post
  app.use(express.json());

  // Aplica rotas
  makeRoutes(app);

  return app;
};
