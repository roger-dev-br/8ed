// Importar as dependencias do Express
import express, { Express, Request, Response } from "express";

// Crio uma instancia do Servidor express
const app: Express = express();

// Iniciar o servidor e escutar em uma porta
app.listen(3300, () => {
  console.log("🤘 servidor iniciado");
});

// Programar uma resposta para o GET na rota "/"
app.get("/", (req: Request, res: Response) => {
  res.send("<h3>🤘 API Funcionando</h3>");
});
