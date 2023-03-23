import { AvaliacaoRepository } from "../repositories/avaliacao.repository";

export class ListAvaliacoesUseCase {
    constructor(private repository: AvaliacaoRepository) {}

    public async execute() {
        const result = await this.repository.list();
        return result.map((item) => item?.toJson());
    }
}
