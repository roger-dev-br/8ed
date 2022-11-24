import { Pessoa } from "./pessoa";

export class Diretor extends Pessoa {
  recuperarBonificacao(): number {
    return super.recuperarBonificacao() + 1000;
  }
}
