import { v4 as createUuid } from "uuid";
import { DatabaseConnection, RedisConnection } from "../../../../src/main/database";
import { ProjectEntity } from "../../../../src/app/shared/database/entities/project.entity";
import { Growdever } from "../../../../src/app/models/growdever.model";
import { Endereco } from "../../../../src/app/models/endereco.model";
import { CreateGrowdeverUseCase } from "../../../../src/app/features/growdever/usecases/create-growdever.usecase";
import { GrowdeverRepository } from "../../../../src/app/features/growdever/repositories/growdever.repository";

export class CreateProjectUseCase {
  constructor(private repository: ProjectRepository) {}

  public async execute(data: CreateProjectDTO): Promise<Project> {
    const { descricao, tecnologia, ativo, idGrowdever } = data;
    const projeto = Project.create(descricao, tecnologia, ativo, idGrowdever);

    const result = await this.repository.create(projeto);

    return result;
  }
}

interface CreateProjectDTO {
  descricao: string;
  tecnologia: string;
  ativo: string;
  idGrowdever: string;
}

export class Project {
  constructor(
    public id: string,
    public descricao: string,
    public tecnologia: string,
    public ativo: string,
    public idGrowdever: string
  ) {}

  public static create(descricao: string, tecnologia: string, ativo: string, idGrowdever: string): Project {
    return new Project(createUuid(), descricao, tecnologia, ativo, idGrowdever);
  }
}

export class ProjectRepository {
  private _repository = DatabaseConnection.connection.getRepository(ProjectEntity);

  public async create(projeto: Project): Promise<Project> {
    const entity = this._repository.create({
      id: projeto.id,
      descricao: projeto.descricao,
      tecnologia: projeto.tecnologia,
      ativo: projeto.ativo,
      idGrowdever: projeto.idGrowdever,
    });

    const result = await this._repository.save(entity);

    return this.mapEntityToModel(result);
  }

  private mapEntityToModel(result: ProjectEntity): Project {
    return new Project(result.id, result.descricao, result.tecnologia, result.ativo, result.idGrowdever);
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

  const criarGrowdever = async (): Promise<any> => {
    const growdever = new Growdever("PADRAO", 1, 12, [], new Endereco("1", "2", "RS"));
    const useCase = new CreateGrowdeverUseCase(new GrowdeverRepository());
    return await useCase.execute(growdever);
  };

  test("Criar um projeto", async () => {
    const sut = makeSut();

    expect.assertions(3);

    const savedGrowdever = await criarGrowdever();

    const result = await sut.execute({
      descricao: "Projeto Teste",
      tecnologia: "NojeJS",
      ativo: "S",
      idGrowdever: savedGrowdever.id,
    });

    expect(result).toBeDefined();
    expect(result).toHaveProperty("id");
    expect(result.id).toBeDefined();
  });
});
