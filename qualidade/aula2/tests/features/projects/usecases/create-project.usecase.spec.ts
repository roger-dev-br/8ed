import { GrowdeverRepository } from "../../../../src/app/features/growdever/repositories/growdever.repository";
import { CreateGrowdeverUseCase } from "../../../../src/app/features/growdever/usecases/create-growdever.usecase";
import { GetGrowdeverUseCase } from "../../../../src/app/features/growdever/usecases/get-growdever.usecase";
import { ProjectRepository } from "../../../../src/app/features/project/repositories/project.repository";
import { Endereco } from "../../../../src/app/models/endereco.model";
import { Growdever } from "../../../../src/app/models/growdever.model";
import { Project } from "../../../../src/app/models/project.model";
import { DatabaseConnection, RedisConnection } from "../../../../src/main/database";
import { CreateProjectUseCase } from "../../../../src/app/features/project/usecases/create-project.usecase";

describe("Create Project Use Case", () => {
  beforeAll(async () => {
    await DatabaseConnection.connect();
    await RedisConnection.connect();
  });

  afterAll(async () => {
    await RedisConnection.destroy();
    await DatabaseConnection.destroy();
  });

  const makeSut = () => {
    return new CreateProjectUseCase(new ProjectRepository(), new GetGrowdeverUseCase(new GrowdeverRepository()));
  };

  const criarGrowdever = () => {
    return new Growdever("Teste", 18, 122, [], new Endereco("1", "1", "", ""));
  };

  test("Criar um Projeto", async () => {
    const sut = makeSut();

    const growdever = criarGrowdever();

    // simular que o create growdever teve sucesso
    jest.spyOn(CreateGrowdeverUseCase.prototype, "execute").mockResolvedValue(growdever);

    // simular que o create do projeto teve sucesso
    jest
      .spyOn(ProjectRepository.prototype, "create")
      .mockResolvedValue(new Project("1", "PADRAO", "NODE", "S", growdever.id));

    // simular que no get Growdever retornou um objeto
    jest.spyOn(GetGrowdeverUseCase.prototype, "execute").mockResolvedValue(growdever);

    const result = await sut.execute({
      descricao: "Projeto Teste",
      tecnologia: "Node",
      ativo: "S",
      idGrowdever: growdever.id,
    });

    expect(result).toBeDefined();
    expect(result).toHaveProperty("id");
  });

  test("Criar um Projeto com um growdever Inválido", async () => {
    const sut = makeSut();

    // simular que no get Growdever retornou um objeto
    jest.spyOn(GetGrowdeverUseCase.prototype, "execute").mockResolvedValue(null);

    const result = await sut.execute({
      descricao: "Projeto Teste",
      tecnologia: "Node",
      ativo: "S",
      idGrowdever: "invalido",
    });

    expect(result).toEqual(new Error("growdever não encontrado"));
  });

  test("Não Permitir no maid de 2 projetos em aberto por Growdever", async () => {
    const sut = makeSut();

    const growdever = criarGrowdever();

    // simular que no get Growdever retornou um objeto
    jest.spyOn(GetGrowdeverUseCase.prototype, "execute").mockResolvedValue(growdever);

    // simular que existe 3 projetos ativos
    jest.spyOn(CreateProjectUseCase.prototype, "podeAtivarProjeto").mockResolvedValue(false);

    const result = await sut.execute({
      descricao: "Projeto Teste",
      tecnologia: "Node",
      ativo: "S",
      idGrowdever: "invalido",
    });

    expect(result).toEqual(new Error("numero maximo de projetos excedido"));
  });
});
