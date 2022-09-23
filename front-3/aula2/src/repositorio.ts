import { Aluno } from "./aluno.interface";
import { v4 as uuidv4 } from "uuid";

function lerRepositorio(chave: string): string | null {
  return localStorage.getItem(chave);
}

function escreverNoRepositorio(chave: string, valor: string): void {
  localStorage.setItem(chave, valor);
}

function lerAlunos(): Aluno[] {
  console.log("lerAlunos");
  const valor = lerRepositorio("alunos");
  if (!valor) {
    return [] as Aluno[];
  }

  return JSON.parse(valor) as Aluno[];
}

function escreverAlunos(alunos: Aluno[]): void {
  escreverNoRepositorio("alunos", JSON.stringify(alunos));
}

function fakeData() {
  const alunos = lerAlunos();
  alunos.push({
    id: "uuidv4",
    nome: "Mateus",
    curso: "Full stack",
  });
  alunos.push({
    id: `outroid`,
    nome: "Fabiane",
    curso: "Full stack",
  });
  alunos.push({
    id: "asufisdfu",
    nome: "Samir",
    curso: "Full stack",
  });
  escreverAlunos(alunos);
}

export { lerAlunos, escreverAlunos, fakeData };
