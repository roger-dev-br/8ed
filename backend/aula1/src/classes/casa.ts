export class Casa {
  janelas: number;
  altura: number;
  largura: number;
  private saldo?: number;

  constructor(janelas: number, altura: number, largura: number) {
    this.janelas = janelas;
    this.altura = altura;
    this.largura = largura;
  }

  private calcularArea() {
    return this.altura * this.largura;
  }

  depositar(valor: number): void {
    // valições
    this.saldo = (this.saldo ?? 0) + valor;

    return;
  }

  toString() {
    console.log(`Casa de ${this.janelas}: janelas de ${this.calcularArea()}`);
  }

  protected salvar() {
    // mysql.casa.save(this);
    // meudb.casa.findOne({id: 2})
  }
}

// Privado - somente acessível somente dentro da CLASSE
// Public - que é acessível dentro e fora da classe
// Protected - que é acesível dentro da classe e fora em classes que a extendem
