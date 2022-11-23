export class Casa {
  janelas: number;
  altura: number;
  largura: number;

  constructor(janelas: number, altura: number, largura: number) {
    this.janelas = janelas;
    this.altura = altura;
    this.largura = largura;
  }

  private calcularArea() {
    return this.altura * this.largura;
  }

  toString() {
    console.log(`Casa de ${this.janelas}: janelas de ${this.calcularArea()}`);
  }

  salvar() {
    // mysql.casa.save(this);
    // meudb.casa.findOne({id: 2})
  }
}
