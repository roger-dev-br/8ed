export interface Aluno {
  id: number;
  nome: string;
}

const data: Aluno[] = [];

function leAlunos(): Aluno[] {
  return data;
}

export function escreveAluno(aluno: Aluno): void {
  const alunos = leAlunos();

  alunos.push(aluno);

  // localStorage.setItem("alunos", JSON.stringify(alunos));
}

export function imprimirAlunos() {
  const alunos = leAlunos();
  for (const aluno of alunos) {
    console.log(aluno.nome);
  }
}
