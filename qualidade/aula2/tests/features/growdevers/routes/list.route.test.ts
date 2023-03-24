import { DatabaseConnection, RedisConnection } from "../../../../src/main/database";
import { ListGrowdeversUseCase } from "../../../../src/app/features/growdever/usecases/list-growdevers.usecase";
import { GrowdeverRepository } from "../../../../src/app/features/growdever/repositories/growdever.repository";
import { CacheRepository } from "../../../../src/app/shared/database/repositories/cache.repository";
import { Growdever } from "../../../../src/app/models/growdever.model";
import { createServer } from "../../../../src/main/config/server.config";
import request from "supertest";
import { Endereco } from "../../../../src/app/models/endereco.model";

describe("List growdevers route test", () => {
  // crio um novo obj growdever
  const growdever = new Growdever("PADRAO", 1, 12, [], new Endereco("1", "2", "RS"));

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
    // simulo para próximas chamadas ao "list", para devolver uma lista com o meu growdever
    // jest.spyOn(ListGrowdeversUseCase.prototype, "execute").mockResolvedValue([growdever.toJson()]);
  });

  // criar o nosso servidor
  const server = createServer();

  test("Deve retornar status 200 se a listagem for feita com sucesso", async () => {
    jest.spyOn(CacheRepository.prototype, "get").mockResolvedValue(null);
    const growdevRepository = new GrowdeverRepository();
    await growdevRepository.create(growdever);

    const result = await request(server).get("/growdever").send();

    console.log(result.body);

    expect(result).toBeDefined();
    expect(result.statusCode).toBe(200);
    expect(result.body).toHaveProperty("ok");
    expect(result.body.ok).toBeTruthy();
    expect(result.body).toHaveProperty("message");
    expect(result.body).toHaveProperty("data");
    expect(result.body.message).toBe("Growdevers successfully listed");
    expect((result.body.data as any[]).length).toBeGreaterThan(1);
  });
});
