import { IAnimal } from "./animal.interface";

export abstract class Animal implements IAnimal {
  constructor(private especie: string, private numeroPatas: number, private nome: string) {}

  emitirSom() {
    console.log("Sem Som");
  }

  nascer() {
    console.log(`O ${this.nome} nasceu`);
  }

  imprimirNome(): string {
    return this.nome;
  }
}
