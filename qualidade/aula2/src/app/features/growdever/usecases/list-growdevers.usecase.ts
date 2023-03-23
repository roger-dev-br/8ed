import { Growdever } from "../../../models/growdever.model";
import { CacheRepository } from "../../../shared/database/repositories/cache.repository";
import { GrowdeverRepository } from "../repositories/growdever.repository";

/**
 * Lista todos os growdevers da base de dados.
 * Se a lista está em cache, então retorna o cache.
 */
export class ListGrowdeversUseCase {
    /** Chave onde a lista de growdevers é salva no cache do Redis */
    private cacheKey = "growdevers";

    constructor(
        private repository: GrowdeverRepository,
        private cacheRepository: CacheRepository
    ) {}

    public async execute(): Promise<any[]> {
        // 1 - Busca a lista no cache (Redis)
        // const cached = await this.cacheRepository.get(this.cacheKey);

        // // Se há cache, retorna o valor que foi salvo
        // if (cached) {
        //     return cached as any[];
        // }

        // 2 - Se não há cache, vai até o repo do Postgres
        const growdevers = await this.repository.list();
        const result = growdevers.map((item) => item.toJson());

        // 3 - Salva o resultado em cache para não precisar
        // consultar o Postgres novamente
        // await this.cacheRepository.set(this.cacheKey, result);

        return result;
    }
}
