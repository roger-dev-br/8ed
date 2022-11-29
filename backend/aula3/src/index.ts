import { Carro, Moto } from "./classes";
import { Proprietario } from "./classes/proprietario";

console.clear();
console.log("Aula 3 ---- POO ---------------------------");

const roger = new Proprietario("Roger");

const produto = new Carro();
produto.codigo = "1";
produto.nome = "Opala 79";
produto.setarPreco(23000);
// produto.adicionarProprietario("Rogério");
produto.proprietario = new Proprietario("Rogério");

console.log(produto.proprietario.imprimir());

console.log(produto.precoBruto);
produto.precoLiquido = produto.precoBruto;
console.log(produto.obterValorLiquido());

const moto = new Moto();
moto.codigo = "2";
moto.nome = "MT 09";
moto.setarPreco(39000);
moto.precoLiquido = moto.precoBruto;
console.log(moto.precoBruto);
moto.aplicarDesconto(2900);
moto.proprietario = roger;
console.log(moto.precoLiquido);
