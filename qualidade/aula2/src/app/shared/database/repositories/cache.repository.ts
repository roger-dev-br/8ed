import { RedisConnection } from "../../../../main/database/redis.connection";

/**
 * Repositório centralizado para gestão do cache
 * no Redis.
 */
export class CacheRepository {
    /**
     * Propriedade que define a conexão ao Redis
     */
    private redis = RedisConnection.connection;

    /**
     * Cria um novo par chave-valor na database do Redis.
     * Realiza um stringify dos dados antes de salvar.
     * Não há retorno (void).
     * @param key chave a ser criada na database
     * @param value valor a ser atribuído na nova chave
     */
    public async set(key: string, value: any) {
        await this.redis.set(key, JSON.stringify(value));
    }

    /**
     * Busca os dados de uma chave armazenada na database do Redis.
     * @param key chave a ser buscada na database
     * @returns o valor encontrado ou null; caso exista valor, retorna com JSON.parse
     */
    public async get<T>(key: string): Promise<T | null> {
        const result = await this.redis.get(key);

        if (!result) {
            return null;
        }

        return JSON.parse(result);
    }

    /**
     * Deleta uma chave da database do Redis.
     * @param key chave a ser deletada da database
     * @returns o número de chaves afetadas
     */
    public async delete(key: string) {
        return await this.redis.del(key);
    }
}
