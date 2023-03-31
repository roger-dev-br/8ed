import { Endereco } from "../../../../src/app/models/endereco.model";
import { Growdever } from "../../../../src/app/models/growdever.model";
import { CreateGrowdeverUseCase } from "../../../../src/app/features/growdever/usecases/create-growdever.usecase";
import { GrowdeverRepository } from "../../../../src/app/features/growdever/repositories/growdever.repository";
import { ProjectRepository } from "../../../../src/app/features/project/repositories/project.repository";
import { DatabaseConnection, RedisConnection } from "../../../../src/main/database";
import { Project } from "../../../../src/app/models/project.model";

describe("Project Repository", () => {
  beforeAll(async () => {
    await DatabaseConnection.connect();
    await RedisConnection.connect();
  });

  afterAll(async () => {
    await RedisConnection.destroy();
    await DatabaseConnection.destroy();
  });

  const makeSut = () => {
    return new ProjectRepository();
  };

  const criarGrowdever = async () => {
    const growdever = new Growdever("Teste", 18, 122, [], new Endereco("1", "1", "", ""));
    const useCase = new CreateGrowdeverUseCase(new GrowdeverRepository());

    return await useCase.execute(growdever);
  };

  test("Criar um novo projeto", async () => {
    expect.assertions(3);

    const sut = makeSut();

    const growdever = await criarGrowdever();

    const projeto = Project.create("Teste", "Node", "S", growdever.id);

    const result = await sut.create(projeto);

    expect(result).toBeDefined();
    expect(result).toHaveProperty("id");
    expect(result.id).toBeDefined();
  });
});
