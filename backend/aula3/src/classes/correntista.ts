export class Correntista {
  constructor(
    private nome: string,
    private numero_telefone: string,
    private email: string,
    private documento: string
  ) {}

  contemplarComCredito(valor) {
    console.log("metodo contemplarComCredito(valor)");
  }
}
