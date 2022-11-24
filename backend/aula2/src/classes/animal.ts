export abstract class Animal {
  constructor(private especie: string, private numeroPatas: number, private nome: string) {}

  emitirSom() {
    console.log("Sem Som");
  }

  imprimirNome(): string {
    return this.nome;
  }
}
