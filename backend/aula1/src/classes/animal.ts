export class Animal {
  raca: string;
  voa?: boolean;
  patas?: number;

  constructor(pRaca: string) {
    this.raca = pRaca;
    this.patas = 0;
    this.voa = false;
  }

  emitirSom(som: string) {
    console.log(som);
  }

  voar() {
    if (this.voa) {
      console.log("Estou voando");
    } else {
      console.log("Não sei voar");
    }
  }
}
