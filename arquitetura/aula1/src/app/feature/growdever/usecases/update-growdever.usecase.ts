import { Growdever } from "../../../models/growdever.model";
import { GrowdeverRepository } from "../repositories/growdever.repository";

interface UpdateGrowdeverDTO {
  nome: string;
  email: string;
}

export class UpdateGrowdeverUseCase {
  constructor(private repository: GrowdeverRepository) {}

  public async execute(id: string, data: UpdateGrowdeverDTO): Promise<Growdever> {
    // outro processamento ou validação

    return await this.repository.update(id, Growdever.create(data.nome, data.email));
  }
}
