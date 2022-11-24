export abstract class Pessoa {
  nome: string;
  private salario: number;

  constructor(nome: string, salario: number) {
    this.nome = nome;
    this.salario = salario;
  }

  recuperarSalario(): number {
    return this.salario;
  }

  recuperarBonificacao(): number {
    return this.salario * 0.1;
  }
}
