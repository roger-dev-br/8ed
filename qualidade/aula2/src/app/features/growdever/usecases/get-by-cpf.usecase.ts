import { GrowdeverRepository } from "../repositories/growdever.repository";

export class GetGrowdeverByCpfUseCase {
    constructor(private repository: GrowdeverRepository) {}

    public async execute(cpf: number) {
        const result = await this.repository.findByCpf(cpf);

        return result?.toJson();
    }
}
