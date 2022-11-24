import { Animal } from "./animal";

export class Ave extends Animal {
  autonomiaDeVoo?: number;

  emitirSom() {
    console.log("Louro quer biscoito!");
  }
}
