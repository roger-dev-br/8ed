import { BaseProduto } from "./base-produto.abstract";

export class Carro extends BaseProduto {
  // Sobrescrever um método da classe "PAI"
  // é copiar a função aqui e mudar o comportamento
  setarPreco(valor: number): void {
    // Alteramos o comportamento padrão de 10% para 20%
    this.precoBruto = valor * 1.2;
  }

  obterValorLiquido(): number {
    return super.obterValorLiquido() - 100;
  }
}
