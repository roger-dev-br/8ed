export class Growdever {
  codigo?: number;
  nome: string;

  constructor(nome: string, codigo?: number) {
    this.codigo = codigo;
    this.nome = nome;
  }

  static create(nome: string, codigo?: number): Growdever {
    return new Growdever(nome, codigo);
  }

  toJson() {
    return {
      id: this.codigo,
      name: this.nome,
    };
  }
}
