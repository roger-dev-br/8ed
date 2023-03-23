import { Growdever } from "../../../models/growdever.model";
import { Endereco } from "./../../../models/endereco.model";
import { GrowdeverRepository } from "../repositories/growdever.repository";

interface CreateGrowdeverDTO {
    nome: string;
    cpf: number;
    idade: number;
    skills?: string[];
    endereco?: CreateEnderecoDTO;
}

interface CreateEnderecoDTO {
    rua: string;
    cidade: string;
    uf: string;
    complemento?: string;
}

export class CreateGrowdeverUseCase {
    constructor(private repository: GrowdeverRepository) {}

    public async execute(data: CreateGrowdeverDTO) {
        let endereco = undefined;

        if (data.endereco) {
            endereco = new Endereco(
                data.endereco.rua,
                data.endereco.cidade,
                data.endereco.uf,
                data.endereco.complemento
            );
        }

        const growdever = new Growdever(data.nome, data.cpf, data.idade, data.skills, endereco);

        const result = await this.repository.create(growdever);

        return result.toJson();
    }
}
