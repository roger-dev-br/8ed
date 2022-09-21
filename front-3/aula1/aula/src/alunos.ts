import { Aluno, escreveAluno, imprimirAlunos } from "./repositorio";
import excluir from "./apagatudo";

const mauricio: Aluno = {
  id: 1,
  nome: `Mauricio`,
};

escreveAluno(mauricio);

const michele: Aluno = {
  id: 2,
  nome: "Michele",
};

escreveAluno(michele);

imprimirAlunos();

excluir();
