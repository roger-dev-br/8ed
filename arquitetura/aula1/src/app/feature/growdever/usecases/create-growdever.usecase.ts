import { Growdever } from "../../../models/growdever.model";
import { GrowdeverRepository } from "../repositories/growdever.repository";

interface CreateGrowdeverDTO {
  nome: string;
  email: string;
}

export class CreateGrowdeverUseCase {
  constructor(private repository: GrowdeverRepository) {}

  public async execute(data: CreateGrowdeverDTO): Promise<Growdever> {
    const growdever = Growdever.create(data.nome, data.email);
    return await this.repository.create(growdever);
  }
}
