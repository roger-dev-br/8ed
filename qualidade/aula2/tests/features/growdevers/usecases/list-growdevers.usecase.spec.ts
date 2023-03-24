import { DatabaseConnection, RedisConnection } from "../../../../src/main/database";
import { ListGrowdeversUseCase } from "../../../../src/app/features/growdever/usecases/list-growdevers.usecase";
import { GrowdeverRepository } from "../../../../src/app/features/growdever/repositories/growdever.repository";
import { CacheRepository } from "../../../../src/app/shared/database/repositories/cache.repository";
import { Growdever } from "../../../../src/app/models/growdever.model";

describe("List growdevers usecase test", () => {
  beforeAll(async () => {
    await DatabaseConnection.connect();
    await RedisConnection.connect();
  });

  afterAll(async () => {
    await RedisConnection.destroy();
    await DatabaseConnection.destroy();
  });

  beforeEach(() => {
    // limpo os mocks anteriores
    jest.clearAllMocks();

    // crio um novo obj growdever
    const growdever = new Growdever("PADRAO", 1, 12, []);
    // simulo para próximas chamadas ao "list", para devolver uma lista com o meu growdever
    jest.spyOn(GrowdeverRepository.prototype, "list").mockResolvedValue([growdever]);
  });

  const makeSut = () => {
    const cache = new CacheRepository();
    const repository = new GrowdeverRepository();
    const usecase = new ListGrowdeversUseCase(repository, cache);

    return {
      sut: usecase,
      repository,
      cache,
    };
  };

  test("Deveria retornar uma lista válida se existir mais 1 ou mais growdevers", async () => {
    const { sut } = makeSut();
    jest.spyOn(CacheRepository.prototype, "get").mockResolvedValue(null);

    const result = await sut.execute();

    expect(result).toBeDefined();
    expect(result.length).toBeGreaterThan(0);
    expect(result[0].nome).toBe("PADRAO");
  });

  test("Deveria retornar uma lista vazia quando não existirem growdevers", async () => {
    const { sut } = makeSut();
    jest.spyOn(GrowdeverRepository.prototype, "list").mockResolvedValueOnce([]);
    jest.spyOn(CacheRepository.prototype, "get").mockResolvedValue(null);
    jest.spyOn(CacheRepository.prototype, "set").mockResolvedValue();

    const result = await sut.execute();
    expect(result).toBeDefined();
    expect(result.length).toBe(0);
  });
});
