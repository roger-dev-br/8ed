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

  if (!descricao) {
    return res.status(400).json({
      erro: "Descrição não informada",
    });
  }

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
  res.status(201).json(novo);
});

// Listar os produtos Cadastros
app.get("/produtos", (req: Request, res: Response) => {
  res.json(lista);
});

// Criar uma rota para um produto específico
app.get("/produtos/:id", (req: Request, res: Response) => {
  // obtenho o ID que veio na rota
  const { id } = req.params;

  // busco este id no array
  const selecionado = lista.find((f) => f.id === Number(id));

  if (!selecionado) {
    // se nao encontrado mostra o erro
    return res.status(404).json({
      erro: "Produto não encontrado",
    });
  }

  // devolve para o cliente
  res.json(selecionado);
});

// Alterar um produto
app.put("/produtos/:id", (req: Request, res: Response) => {
  // obtenho o ID que veio na rota
  const { id } = req.params;

  // pego os novos dados no corpo da requisição
  const { descricao, preco, disponivel } = req.body;

  // busco este id no array
  const selecionado = lista.find((f) => f.id === Number(id));

  if (!selecionado) {
    // se nao encontrado mostra o erro
    return res.status(404).json({
      erro: "Produto não encontrado",
    });
  }

  selecionado.descricao = descricao;
  selecionado.preco = preco;
  selecionado.disponivel = disponivel;

  // devolve para o cliente
  res.json(selecionado);
});
