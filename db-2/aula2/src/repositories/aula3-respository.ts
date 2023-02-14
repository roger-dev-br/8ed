import { Aula3Entity } from "../database/entities/aula3.entity";
import { pgHelper } from "../database/pg-helper";

export class Aula3Repository {
  async criar(descricao: string, quantidade: number): Promise<Aula3Entity> {
    const manager = pgHelper.client.manager;
    const novo = manager.create(Aula3Entity, {
      uuid: "123",
      description: descricao,
      quantidade: quantidade,
    });

    return await manager.save(novo);
  }
}
