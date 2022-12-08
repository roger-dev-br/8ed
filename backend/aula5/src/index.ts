import express, { Express, Request, Response } from "express";

// criar um instancia do express
const server: Express = express();

// escuto uma porta e o express responde nela
server.listen(3000, () => {
  console.log("Servidor OK");
});

server.get("/", (req: Request, res: Response) => {
  // processa a requisiçao e devolve uma resposta
  res.send("<h1>Api Funcionando</h1>");
});
