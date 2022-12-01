import { Conta } from "./conta";
import { Correntista } from "./correntista";

export class Banco {
  constructor(private codigo: string, private nome: string, private contas: Conta[]) {}

  abrirConta() {
    console.log("metodo abrir conta");
  }

  fecharConta() {
    console.log("fechar conta");
  }
}
