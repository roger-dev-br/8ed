import { productsList } from "./data";

console.clear();
console.log("Exemplo de produtos");

// console.table(productsList);

// Trabalhar o MAP
// Percorre o Array e retorna o array transformado
const novoMAP = productsList.map((produto) => {
  // retorno no formato desejado
  return {
    description: produto.description,
    price: produto.price,
  };
});

// Transformar a lista de produtos e gerar uma nova propriedade
// Informar se está disponivel para venda Sim ou Não
const novoMAP2 = productsList.map(({ description, price, sale }) => {
  return {
    description: description.toUpperCase(),
    price,
    available: sale ? "Sim" : "Não",
  };
});

// Filter
// Usa para filtrar informações do Array
// Retorna um novo Array
const produtosCaros = productsList.filter((f) => f.price > 10);

// Filter com condição composta
const produtosCarosEmEstoque = productsList.filter((f) => f.price > 10 && f.stock > 0);

// Filter de produtos sem Estoque ou indisponiveis para venda
const indisponiveis = productsList.filter((f) => f.stock === 0 || !f.sale);

// Find
// Retorna o primeiro objeto que atender a condição
const indisponivel = productsList.find((f) => !f.sale);

// FindIndex
// Igual ao Find só que ele retorna só o indice do objeto
const posicao = productsList.findIndex((f) => f.description === "Vodka");

// Quando nenhum item atende a condição é retornado index = -1
const posicao2 = productsList.findIndex((f) => f.description === "Vodca");

// SOME
// Ele verifica se ao menos um item do array atende a condição
const existeMaiorqueCem = productsList.some((s) => s.price > 100);

const existeMenorqueCinco = productsList.some((s) => s.price < 5);

// INCLUDES
const alunos = ["Matheus", "Felipe", "Edyo", "Michele"];
const x = alunos.map((m) => m.toUpperCase()).includes("Matheus".toUpperCase());

// status q eu nao posso usar a maquina
const indisp = ["OCUPADA", "DESLIGADA"];
// status da máquina
const status = "DESLIGADA";
indisp.includes(status);

// REDUCE
// Pra acumular algum valor do array
const valorEmEstoque = productsList.reduce((acumulado, produto) => {
  return acumulado + produto.price * produto.stock;
}, 0);

// Sem Reduce
let acumulado = 0;
for (const produto of productsList) {
  // um produto individual
  acumulado += produto.price * produto.stock;
}

// Valor do estoque com 10% desconto
const valorEmEstoqueDesconto = productsList
  .map((m) => {
    return {
      price: m.price * 0.9,
      stock: m.stock,
    };
  })
  .reduce((acumulado, produto) => {
    return acumulado + produto.price * produto.stock;
  }, 0);

for (const produto of productsList.filter((f) => f.stock > 0)) {
  // console.log(produto.description);
}

for (const produto in productsList) {
  // console.log(productsList[produto].description);
}

productsList.forEach((produto) => {
  console.log(produto.description);
});
