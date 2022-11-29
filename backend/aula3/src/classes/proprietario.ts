export class Proprietario {
  constructor(public nome: string) {}

  imprimir() {
    console.log(`Proprietario = ${this.nome}`);
  }
}
