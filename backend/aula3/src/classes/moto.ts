import { Desconto } from "../interfaces";
import { BaseProduto } from "./base-produto.abstract";

export class Moto extends BaseProduto implements Desconto {
  aplicarDesconto(valor: number): void {
    this.precoLiquido = this.obterValorLiquido() - valor;
  }

  valorParaCliente(): number {
    // Vai imprimir 1100
    // pq pega os 1000 da base produto e soma 100
    // return this.obterValorLiquido();

    // Vai imprimir 1000
    // Pq ele busca o valor só da classe pai
    return super.obterValorLiquido();
  }

  obterValorLiquido(): number {
    // Valor liquido = 1000
    return super.obterValorLiquido() + 100;
  }
}
