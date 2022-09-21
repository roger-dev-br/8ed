interface Pessoa {
  id: number;
  nome: string;
  cpf?: string | null;
}

interface Aluno extends Pessoa {
  turma: string;
  //responsavel: string;
}

// id
// nome
// turma

interface Mentor extends Pessoa {
  turno: string;
  //valorHora: number;
}

const luan: Aluno = {
  turma: "8ed",
  id: 1,
  nome: "Luan",
};

const mentor: Mentor = {
  id: 2,
  nome: `Roger`,
  cpf: `2`,
  turno: `Noite`,
};

interface Animal {
  nome: string;
  patas: number;
}

interface Cachorro extends Animal {
  raca: string;
}
