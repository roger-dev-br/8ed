import { Correntista } from "./correntista";

export class Conta {
  constructor(private codigo: string, private correntista: Correntista, private saldo: number) {}

  sacar(valor) {
    console.log("metodo sacar");
  }

  depositar(valor) {
    console.log("metodo depositar");
  }
}
