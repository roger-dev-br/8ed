import { Carro } from "./classes";

console.clear();
console.log("Aula 3 ---- POO ---------------------------");

const produto = new Carro();
produto.codigo = "1";
produto.nome = "Opala 79";
produto.setarPreco(23000);

console.log(produto.precoBruto);
