import { leStorage } from "./meu-storage";

function imprimirAlunos() {
  for (const aluno of leStorage()) {
    console.log(aluno);
  }
}

imprimirAlunos();
