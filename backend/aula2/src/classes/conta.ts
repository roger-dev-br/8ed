export abstract class Conta {
  constructor(public titular: string, protected saldo: number) {}

  depositar(num: number): number {
    console.log("Deposito -------------------");
    console.log("Saldo Anterior: ", this.saldo);
    console.log("Valor Depositado: ", num);

    this.saldo += num;

    console.log("Novo Saldo: ", this.saldo);
    console.log("-----------------------------");

    return this.saldo;
  }

  sacar(num: number): number {
    console.log("Deposito -------------------");
    console.log("Saldo Anterior: ", this.saldo);
    console.log("Valor Depositado: ", num);

    this.saldo -= num;

    console.log("Novo Saldo: ", this.saldo);
    console.log("-----------------------------");

    return this.saldo;
  }
}
