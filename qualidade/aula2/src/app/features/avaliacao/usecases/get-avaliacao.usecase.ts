import { AvaliacaoRepository } from "../repositories/avaliacao.repository";

export class GetAvaliacaoUseCase {
    constructor(private repository: AvaliacaoRepository) {}

    public async execute(id: string) {
        const result = await this.repository.get(id);
        return result?.toJson();
    }
}
