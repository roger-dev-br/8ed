export abstract class Conta {
  constructor(public titular: string, protected saldo: number) {}

  depositar(num: number): number {
    console.log("Deposito -------------------");
    console.log("Saldo Anterior: ", this.saldo);
    console.log("Valor Depositado: ", num);

    // Aqui eu aumento o Saldo
    this.saldo += num;

    console.log("Novo Saldo: ", this.saldo);
    console.log("-----------------------------");

    return this.saldo;
  }

  sacar(num: number): number {
    console.log("Saque ---------------------");
    console.log("Saldo Anterior: ", this.saldo);
    console.log("Valor Sacado: ", num);

    // aqui eu baixo o saldo
    this.saldo -= num;

    console.log("Novo Saldo: ", this.saldo);
    console.log("-----------------------------");

    return this.saldo;
  }
}
