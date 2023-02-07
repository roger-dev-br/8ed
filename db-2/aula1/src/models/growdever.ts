export class Growdever {
  readonly codigo?: number;
  readonly nome: string;

  constructor(nome: string, codigo?: number) {
    this.codigo = codigo;
    this.nome = nome;
  }

  static create(nome: string, codigo?: number): Growdever {
    return new Growdever(nome, codigo);
  }

  toJson() {
    return {
      codigo: this.codigo,
      nome: this.nome,
    };
  }
}
