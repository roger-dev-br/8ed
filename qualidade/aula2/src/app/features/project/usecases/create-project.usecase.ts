import { Project } from "../../../models/project.model";
import { GetGrowdeverUseCase } from "../../growdever/usecases/get-growdever.usecase";
import { ProjectRepository } from "../repositories/project.repository";

export interface CreateProjectDTO {
  descricao: string;
  tecnologia: string;
  ativo: string;
  idGrowdever: string;
}

export class CreateProjectUseCase {
  MAX_PROJETOS_ABERTO = 2;

  constructor(private repository: ProjectRepository, private getGrowdeverUseCase: GetGrowdeverUseCase) {}

  public async execute(data: CreateProjectDTO) {
    // desestruturar o DTO
    const { descricao, tecnologia, ativo, idGrowdever } = data;

    // Validar se o growdever existe
    const growdever = await this.getGrowdeverUseCase.execute(idGrowdever);
    if (!growdever) {
      return new Error("growdever não encontrado");
    }

    // Validar a quantidade máxima de projetos ativos
    const podeAtivar = await this.podeAtivarProjeto(idGrowdever);
    if (!podeAtivar) {
      return new Error("numero maximo de projetos excedido");
    }

    // crio o model a partir do DTO
    const projeto = Project.create(descricao, tecnologia, ativo, idGrowdever);
    // envio o dto para o Repositório
    return await this.repository.create(projeto);
  }

  // criar um use case AtivarProjetoUseCase -> que no execute retorna true ou false
  public async podeAtivarProjeto(id: string): Promise<boolean> {
    const projetosAtivos = await this.repository.quantidadeProjetosAtivos(id);

    return projetosAtivos < this.MAX_PROJETOS_ABERTO;
  }
}
