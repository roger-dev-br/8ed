import { ContaNormal } from "./classes/conta-normal";

console.clear();
console.log("Exemplo de Contas ------------------------------------------");

const minhaConta = new ContaNormal("Roger", 0);
minhaConta.depositar(1000);
minhaConta.sacar(500);
minhaConta.sacar(600);
