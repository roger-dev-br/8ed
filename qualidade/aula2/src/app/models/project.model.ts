import { v4 as createUuid } from "uuid";

export class Project {
  constructor(
    public id: string,
    public descricao: string,
    public tecnologia: string,
    public ativo: string,
    public idGrowdever: string
  ) {}

  public static create(descricao: string, tecnologia: string, ativo: string, idGrowdever: string) {
    return new Project(createUuid(), descricao, tecnologia, ativo, idGrowdever);
  }
}
