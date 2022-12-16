import express, { Express, NextFunction, Request, Response } from "express";
import cors from "cors";

// criar um instancia do express
const server: Express = express();

server.use(cors());

// Habilitar o backend para receber JSON na requisiçao
server.use(express.json());

// escuto uma porta e o express responde nela
server.listen(3001, () => {
  console.log("Servidor OK");
});

server.get("/", (req: Request, res: Response) => {
  // processa a requisiçao e devolve uma resposta
  res.send("<h1>Api Funcionando</h1>");
});

interface Pet {
  codigo?: number;
  nome: string;
  observacao: string;
}

interface ResponstaPadrao {
  sucesso: boolean;
  mensagem?: string;
  data: any;
}

const pets: Pet[] = [];

function imprimirDataHora(req: any, res: Response, next: NextFunction) {
  req.dataHora = new Date();
  req.dados = "Requisição alterada";
  console.log("Middleware 1");

  next();
}

function middleware2(req, res, next) {
  console.log("Middleware 2");
  console.log(req.dados);
  next();
}

function verficaSePetExiste(req, res, next) {
  const { codigo } = req.params;

  // procuro se o pet está no Array
  const pet = pets.find((f) => f.codigo === Number(codigo));
  if (!pet) {
    // Aborto a requisição e envio pro cliente a informação
    return res.status(404).json({
      sucesso: false,
      mensagem: "Pet não encontrado",
    } as ResponstaPadrao);
  }

  next();
}

function middlewareGetPets(req, res, next) {
  console.log("Middleware Get PETS");

  next();
}

function logAcesso(req: Request, res: Response, next: NextFunction) {
  console.log("Middlewar log Acesso");
  console.log(req.originalUrl);
  console.log(new Date());

  next();
}

//server.use(imprimirDataHora, middleware2);
//server.use(middleware2);

// POST - Adiciona um novo PET a Lista
server.post("/pets", (req: Request, res: Response) => {
  const { nome, observacao } = req.body;

  // Validações SEMPRE!!!
  if (!nome) {
    return res.status(400).json({
      sucesso: false,
      mensagem: "Nome não informado",
      data: null,
    } as ResponstaPadrao);
  }

  // Numerar o código
  const codigo = pets.length + 1;

  const pet = {
    codigo,
    nome,
    observacao,
  } as Pet;

  pets.push(pet);

  res.status(201).json({
    sucesso: true,
    mensagem: "Criado",
    data: pet,
  } as ResponstaPadrao);
});
server.use(logAcesso);

server.get("/pets", (req: Request, res: Response) => {
  const { filtro } = req.query;
  if (filtro) {
    return res.json({
      sucesso: true,
      data: pets.filter((f) => f.nome.toLowerCase().includes(filtro.toString().toLowerCase())),
    } as ResponstaPadrao);
  }

  res.json({
    sucesso: true,
    data: pets,
  } as ResponstaPadrao);
});

server.get("/pets/:codigo", [middlewareGetPets, verficaSePetExiste], (req: Request, res: Response) => {
  const { codigo } = req.params;

  const pet = pets.find((f) => f.codigo === Number(codigo));

  res.status(200).json({
    sucesso: true,
    data: pet,
  } as ResponstaPadrao);
});

server.delete("/pets/:codigo", (req: Request, res: Response) => {
  const { codigo } = req.params;
  const indice = pets.findIndex((f) => f.codigo === Number(codigo));

  if (indice === -1) {
    return res.status(404).json({
      sucesso: false,
      mensagem: "Pet não encontrado",
    } as ResponstaPadrao);
  }

  pets.splice(indice, 1);

  res.status(200).json({
    sucesso: true,
    mensagem: "Pet removido",
  } as ResponstaPadrao);
});

server.put("/pets/:codigo", verficaSePetExiste, (req: Request, res: Response) => {
  const { codigo } = req.params;
  const { observacao } = req.body;

  const pet = pets.find((f) => f.codigo === Number(codigo));

  pet!.observacao = observacao;
  res.status(200).json({
    sucesso: true,
    data: pet,
  } as ResponstaPadrao);
});

// server.post("/growdever") => inclui;

// server.post("/skill/:growdever") => inclui;
