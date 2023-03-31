import { DatabaseConnection } from "../../../../main/database";
import { Project } from "../../../models/project.model";
import { ProjectEntity } from "../../../shared/database/entities/project.entity";

export class ProjectRepository {
  private _repository = DatabaseConnection.connection.getRepository(ProjectEntity);

  public async create(model: Project): Promise<Project> {
    const entity = this._repository.create(model);

    const result = await this._repository.save(entity);

    return this.mapEntityToModel(result);
  }

  private mapEntityToModel(result: ProjectEntity): Project {
    return new Project(result.id, result.descricao, result.tecnologia, result.ativo, result.idGrowdever);
  }
}
