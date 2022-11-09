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

interface Produto {
  id: number;
  descricao: string;
  preco: number;
  disponivel: boolean;
}

const lista: Produto[] = [];

// Habilitar o backend para receber JSON na requisiçao
app.use(express.json());

// Criar uma rota para inserir um novo produto
app.post("/produtos", (req: Request, res: Response) => {
  // Desestruturo a requisição para pegar o corpo
  const { descricao, preco, disponivel } = req.body;

  // Crio o novo produto
  const novo = {
    id: lista.length + 1,
    descricao,
    preco,
    disponivel,
  };

  // adiciono na lista
  lista.push(novo);

  // respondo em formato json
  res.json(novo);
});
