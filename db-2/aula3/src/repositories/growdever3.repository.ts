import { Growdever3Entity } from "../database/entities/growdever.entity";
import { pgHelper } from "../database/pg-helper";

export class Growdever3Repository {
  // Data Mapper
  async createGrowdever(name: string): Promise<Growdever3Entity> {
    // salvar um novo growdever no DB
    const manager = pgHelper.client.manager;
    const novoGrowdever = manager.create(Growdever3Entity, {
      name,
    });

    return await manager.save(novoGrowdever);
  }

  // obter por ID
  async getGrowdeverByUUID(uuid: string): Promise<Growdever3Entity | null> {
    const manager = pgHelper.client.manager;

    // select * from growdever3 where uuid = 'xxx'
    const growdever = await manager.findOne(Growdever3Entity, {
      where: { uuid },
      relations: ["profile", "addresses"],
    });

    return growdever;
  }

  async getAll(): Promise<Growdever3Entity[]> {
    const manager = pgHelper.client.manager;

    // select * from growdever3
    const growdevers = await manager.find(Growdever3Entity, {
      relations: ["profile"],
      order: {
        name: "ASC",
        createdAt: "DESC",
      },
    });

    return growdevers;
  }

  async updateGrowdever(id: string, name: string): Promise<void> {
    const manager = pgHelper.client.manager;
    const growdever = await this.getGrowdeverByUUID(id);
    if (!growdever) {
      return;
    }

    // update growdever3 set name = 'novo nome' where uuid = '3'
    await manager.update(
      Growdever3Entity,
      { uuid: id },
      {
        name,
      }
    );
  }

  async removeGrowdever(uuid: string): Promise<void> {
    const manager = pgHelper.client.manager;
    const growdever = await this.getGrowdeverByUUID(uuid);
    if (!growdever) {
      return;
    }

    await manager.delete(Growdever3Entity, {
      uuid,
    });
  }
}
