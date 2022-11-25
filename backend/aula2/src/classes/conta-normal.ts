import { Conta } from "./conta";

export class ContaNormal extends Conta {
  // sobrescrever o sacar
  sacar(num: number): number {
    // Ele tem que validar se o Saldo
    // é maior que o valor a ser sacado
    if (this.saldo < num) {
      console.log("Saldo indisponível");
      return this.saldo;
    }

    return super.sacar(num);
  }
}

// Tela Cliente - Exclui o Cliente
// cliente.remove();

// Tela de Serasa
// cliente.remove();
