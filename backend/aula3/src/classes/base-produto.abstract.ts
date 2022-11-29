import { Proprietario } from "./proprietario";

export abstract class BaseProduto {
  codigo: string;
  nome: string;
  precoBruto: number;
  precoLiquido: number;
  proprietario: Proprietario;

  adicionarProprietario(nome: string) {
    this.proprietario = new Proprietario(nome);
  }

  setarPreco(valor: number) {
    // recebe o valor e aplica uma margem de lucro de 10%
    this.precoBruto = valor * 1.1;
    this.precoLiquido = this.precoBruto;
  }

  obterValorLiquido(): number {
    return this.precoLiquido;
  }
}
