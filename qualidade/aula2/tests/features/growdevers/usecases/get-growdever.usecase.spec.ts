import { DatabaseConnection, RedisConnection } from "../../../../src/main/database";
import { GetGrowdeverUseCase } from "../../../../src/app/features/growdever/usecases/get-growdever.usecase";
import { GrowdeverRepository } from "../../../../src/app/features/growdever/repositories/growdever.repository";
import { Growdever } from "../../../../src/app/models/growdever.model";

describe("Get growdever usecase test", () => {
  beforeAll(async () => {
    await DatabaseConnection.connect();
    await RedisConnection.connect();
  });

  afterAll(async () => {
    await RedisConnection.destroy();
    await DatabaseConnection.destroy();
  });

  const makeSut = () => {
    return new GetGrowdeverUseCase(new GrowdeverRepository());
  };

  test("Deveria retorna null se o growdever não existir", async () => {
    jest.spyOn(GrowdeverRepository.prototype, "get").mockResolvedValueOnce(null);

    const sut = makeSut();
    const result = await sut.execute("id-invalido");

    expect(result).toBeNull();
  });

  test("Deveria retornar um JSON de Growdever válido se o ID existir", async () => {
    const growdever = new Growdever("Aluno 1", 12312, 12, []);

    jest.spyOn(GrowdeverRepository.prototype, "get").mockResolvedValueOnce(growdever);
    const sut = makeSut();
    const result = await sut.execute("id-valido");

    expect(result).not.toBeNull();
    expect(result).toHaveProperty("id");
    expect(result).not.toHaveProperty("cpf");
    expect(result!.id).toBe(growdever.id);
  });
});
