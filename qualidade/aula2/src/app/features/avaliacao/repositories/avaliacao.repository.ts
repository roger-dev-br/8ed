import { DatabaseConnection } from "../../../../main/database";
import { Avaliacao } from "../../../models/avaliacao.model";
import { AvaliacaoEntity } from "../../../shared/database/entities/avaliacao.entity";
import { GrowdeverRepository } from "../../growdever/repositories/growdever.repository";

export class AvaliacaoRepository {
    private _repository =
        DatabaseConnection.connection.getRepository(AvaliacaoEntity);

    public async list() {
        const result = await this._repository.find({
            relations: {
                growdever: true,
            },
        });

        return result.map((item) => {
            return this.mapEntityToModel(item);
        });
    }

    public async get(id: string) {
        const result = await this._repository.findOneBy({
            id,
        });

        return this.mapEntityToModel(result);
    }

    public async create(avaliacao: Avaliacao) {
        const avaliacaoEntity = this._repository.create({
            id: avaliacao.id,
            modulo: avaliacao.modulo,
            nota: avaliacao.nota,
            id_growdever: avaliacao.growdever.id,
        });

        await this._repository.save(avaliacaoEntity);

        const savedEntity = await this._repository.findOneBy({
            id: avaliacao.id,
        });

        return this.mapEntityToModel(savedEntity);
    }

    public mapEntityToModel(avaliacao: AvaliacaoEntity | null) {
        if (!avaliacao) {
            return null;
        }

        const growdeverRepository = new GrowdeverRepository();
        const growdever = growdeverRepository.mapEntityToModel(
            avaliacao.growdever
        );

        return Avaliacao.create(
            avaliacao.id,
            avaliacao.modulo,
            avaliacao.nota,
            growdever
        );
    }
}
