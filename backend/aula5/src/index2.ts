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

server.get("/users", (req: Request, res: Response) => {
  res.json([
    {
      id: 1,
      name: "Rogerio",
    },
    {
      id: 2,
      name: "Luan",
    },
    {
      id: 3,
      name: "Fabiane",
    },
  ]);
});

server.get("/posts", (req: Request, res: Response) => {
  // obter as informaçoes de query params
  const { query } = req;

  if (!query.autor) {
    return res.status(400).json({
      success: false,
      message: "Autor required",
    });
  }

  // processa a requisiçao e devolve uma resposta
  res.send(`Recebi o Autor ${query.autor} ano ${query.ano ?? "nao informou"}`);
});

server.get("/posts/:codigo", (req: Request, res: Response) => {
  // obter as informaçoes de query params
  const { params } = req;

  if (params.codigo === "10") {
    return res.status(404).json({
      success: false,
      message: "Post not found",
    });
  }

  // processa a requisiçao e devolve uma resposta
  res.send(`Requisitaram o post ${params.codigo}`);
});

server.get("/users", (req: Request, res: Response) => {
  // eu processo a requisição
  // console.log(req.query.nome);
  // console.log(req.query.order);
  const { nome, order } = req.query;
  console.log(nome);
  console.log(order);

  for (const par in req.query) {
    console.log(par);
  }

  if (!nome) {
    mensagem: "Nome obrigatório", res.status(400).json({});
    return;
  }

  res.json({ ok: true });
});
