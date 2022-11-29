export abstract class BaseProduto {
  codigo: string;
  nome: string;
  precoBruto: number;
  precoLiquido: number;

  setarPreco(valor: number) {
    // recebe o valor e aplica uma margem de lucro de 10%
    this.precoBruto = valor * 1.1;
  }

  obterValorLiquido(): number {
    return this.precoLiquido;
  }
}
