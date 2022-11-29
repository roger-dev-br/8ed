import { Desconto } from "../interfaces";
import { BaseProduto } from "./base-produto.abstract";

export class Moto extends BaseProduto implements Desconto {
  aplicarDesconto(valor: number): void {
    this.precoLiquido = this.obterValorLiquido() - valor;
  }
}
