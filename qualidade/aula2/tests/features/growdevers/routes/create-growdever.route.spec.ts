import { CreateGrowdeverUseCase } from "../../../../src/app/features/growdever/usecases/create-growdever.usecase";
import { createServer } from "../../../../src/main/config/server.config";
import request from "supertest";
import { GetGrowdeverByCpfUseCase } from "../../../../src/app/features/growdever/usecases/get-by-cpf.usecase";
import { Growdever } from "../../../../src/app/models/growdever.model";
import { DatabaseConnection, RedisConnection } from "../../../../src/main/database";

describe("Rota de criar um growdever", () => {
  // crio um novo obj growdever
  const growdever = new Growdever("PADRAO", 1, 12, []);

  beforeAll(async () => {
    await DatabaseConnection.connect();
    await RedisConnection.connect();
  });

  afterAll(async () => {
    await RedisConnection.destroy();
    await DatabaseConnection.destroy();
  });

  // criar o nosso servidor
  const server = createServer();

  test("Deveria retornar erro 400 ao tentar inserir sem o nome", async () => {
    const result = await request(server).post("/growdever").send({
      cpf: 1,
      idade: 12,
      skills: [],
    });

    expect(result).toBeDefined();
    expect(result.statusCode).toBe(400);
    expect(result.body.message).toBe("Nome not provided");
  });

  test("Deveria retornar erro 400 ao tentar inserir sem a idade", async () => {
    const result = await request(server).post("/growdever").send({
      cpf: 1,
      nome: "Roger",
      skills: [],
    });

    expect(result).toBeDefined();
    expect(result.statusCode).toBe(400);
    expect(result.body.message).toBe("Idade not provided");
  });

  test("deve retornar 400 se o growdever já existe com o mesmo CPF", async () => {
    jest.spyOn(GetGrowdeverByCpfUseCase.prototype, "execute").mockResolvedValue(growdever);

    const result = await request(server).post("/growdever").send({
      nome: "Roger",
      cpf: 1,
      idade: 41,
    });

    expect(result).toBeDefined();
    expect(result.statusCode).toBe(400);
  });
});
