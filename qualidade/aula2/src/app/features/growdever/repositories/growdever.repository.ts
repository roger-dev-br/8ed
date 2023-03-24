import { EnderecoRepository } from "../../endereco/repositories/endereco.repository";
import { GrowdeverEntity } from "../../../shared/database/entities/growdever.entity";
import { DatabaseConnection } from "../../../../main/database";
import { Growdever } from "../../../models/growdever.model";
import { Endereco } from "../../../models/endereco.model";

interface UpdateGrowdeverDTO {
  id: string;
  nome?: string;
  idade?: number;
  skills?: string[];
}

export class GrowdeverRepository {
  private _repository = DatabaseConnection.connection.getRepository(GrowdeverEntity);

  public async list() {
    const result = await this._repository.find({
      relations: {
        avaliacoes: true,
      },
    });

    return result.map((item) => this.mapEntityToModel(item));
  }

  public async get(id: string) {
    const result = await this._repository.findOneBy({
      id,
    });

    if (!result) {
      return null;
    }

    return this.mapEntityToModel(result);
  }

  public async create(growdever: Growdever) {
    const growdeverEntity = this._repository.create({
      id: growdever.id,
      cpf: growdever.cpf,
      idade: growdever.idade,
      nome: growdever.nome,
      skills: growdever.skills.join(","),
    });

    if (growdever.endereco) {
      const enderecoRepository = new EnderecoRepository();
      const result = await enderecoRepository.create(growdever.endereco);

      growdeverEntity.id_endereco = result.id;
    }

    const result = await this._repository.save(growdeverEntity);

    return this.mapEntityToModel(result);
  }

  public async update(data: UpdateGrowdeverDTO) {
    const result = await this._repository.update(
      {
        id: data.id,
      },
      {
        nome: data.nome,
        idade: data.idade,
        skills: data.skills?.join(","),
      }
    );

    return await this.get(data.id);
  }

  public async delete(data: UpdateGrowdeverDTO) {
    await this._repository.delete({
      id: data.id,
    });

    return true;
  }

  public async findByCpf(cpf: number) {
    const result = await this._repository.findOneBy({
      cpf,
    });

    if (!result) {
      return null;
    }

    return this.mapEntityToModel(result);
  }

  public mapEntityToModel(growdever: GrowdeverEntity) {
    let endereco = undefined;

    if (growdever.endereco) {
      endereco = Endereco.create(
        growdever.endereco.id,
        growdever.endereco.rua,
        growdever.endereco.cidade,
        growdever.endereco.uf,
        growdever.endereco.complemento
      );
    }

    return Growdever.create(
      growdever.nome,
      growdever.idade,
      growdever.cpf,
      growdever.id,
      growdever.skills?.split(",") ?? [],
      endereco
    );
  }
}
