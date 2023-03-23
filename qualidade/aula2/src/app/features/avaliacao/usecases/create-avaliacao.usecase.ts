import { Avaliacao } from "../../../models/avaliacao.model";
import { GrowdeverRepository } from "../../growdever/repositories/growdever.repository";
import { AvaliacaoRepository } from "../repositories/avaliacao.repository";

interface CreateAvaliacaoDTO {
    modulo: string;
    nota: number;
    idGrowdever: string;
}

export class CreateAvaliacaoUseCase {
    constructor(
        private repository: AvaliacaoRepository,
        private growdeverRepository: GrowdeverRepository
    ) {}

    public async execute(data: CreateAvaliacaoDTO) {
        // 1- verificar se o growdever existe
        const growdeverResult = await this.growdeverRepository.get(
            data.idGrowdever
        );

        if (!growdeverResult) {
            return null;
        }

        // 2- criar uma avaliação (model)
        const avaliacao = new Avaliacao(
            data.modulo,
            data.nota,
            growdeverResult
        );

        // 3 - salvar a avaliação no BD
        const result = await this.repository.create(avaliacao);

        return result?.toJson();
    }
}
