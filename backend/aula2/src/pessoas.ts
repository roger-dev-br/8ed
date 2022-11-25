import { Diretor, Funcionario, Pessoa } from "./classes";

const roger = new Funcionario("Roger", 1000);
const luan = new Diretor("Luan", 10000);

console.log("Roger", roger.recuperarBonificacao());
console.log("Luan", luan.recuperarBonificacao());
