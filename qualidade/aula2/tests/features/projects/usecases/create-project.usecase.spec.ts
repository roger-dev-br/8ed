import { GrowdeverRepository } from "../../../../src/app/features/growdever/repositories/growdever.repository";
import { CreateGrowdeverUseCase } from "../../../../src/app/features/growdever/usecases/create-growdever.usecase";
import { ProjectRepository } from "../../../../src/app/features/project/repositories/project.repository";
import { Endereco } from "../../../../src/app/models/endereco.model";
import { Growdever } from "../../../../src/app/models/growdever.model";
import { Project } from "../../../../src/app/models/project.model";
import { DatabaseConnection, RedisConnection } from "../../../../src/main/database";

export interface CreateProjectDTO {
  descricao: string;
  tecnologia: string;
  ativo: string;
  idGrowdever: string;
}

export class CreateProjectUseCase {
  constructor(private repository: ProjectRepository) {}

  public async execute(data: CreateProjectDTO) {
    // desestruturar o DTO
    const { descricao, tecnologia, ativo, idGrowdever } = data;
    // crio o model a partir do DTO
    const projeto = Project.create(descricao, tecnologia, ativo, idGrowdever);
    // envio o dto para o Repositório
    return await this.repository.create(projeto);
  }
}

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
    return new CreateProjectUseCase(new ProjectRepository());
  };

  const criarGrowdever = () => {
    return new Growdever("Teste", 18, 122, [], new Endereco("1", "1", "", ""));
  };

  test("Criar um Projeto", async () => {
    const sut = makeSut();

    const growdever = criarGrowdever();

    jest.spyOn(CreateGrowdeverUseCase.prototype, "execute").mockResolvedValue(growdever);
    jest
      .spyOn(ProjectRepository.prototype, "create")
      .mockResolvedValue(new Project("1", "PADRAO", "NODE", "S", growdever.id));

    const result = await sut.execute({
      descricao: "Projeto Teste",
      tecnologia: "Node",
      ativo: "S",
      idGrowdever: growdever.id,
    });
  });
});
