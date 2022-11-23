export class Recado {
  id!: number;
  titulo: string;
  descricao: string;

  constructor() {
    this.limparId();
    this.titulo = "";
    this.descricao = "";
  }

  informarId(id: number): void {
    this.id = id;
  }

  private limparId() {
    this.id = 0;
  }
}

const x = new Recado();
x.informarId(1);
// metodo privado nao pode ser usado nas instancias
// x.limparId();
