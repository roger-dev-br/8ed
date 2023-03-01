import { DatabaseConnection } from "../../../../main/database/typeorm.connection";
import { Growdever } from "../../../models/growdever.model";
import { GrowdeverEntity } from "../../../shared/database/entities/growdever.entity";

export class GrowdeverRepository {
  private _repository = DatabaseConnection.connection.getRepository(GrowdeverEntity);

  private mapToModel(entity: GrowdeverEntity): Growdever {
    return Growdever.create(entity.nome, entity.email, entity.uuid);
  }

  public async create(growdever: Growdever): Promise<Growdever> {
    const growdeverEntity = this._repository.create({
      uuid: growdever.uuid,
      nome: growdever.nome,
      email: growdever.email,
    });

    const result = await this._repository.save(growdeverEntity);

    return this.mapToModel(result);
  }
}
