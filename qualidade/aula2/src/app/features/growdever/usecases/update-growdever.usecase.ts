import { GrowdeverRepository } from "../repositories/growdever.repository";

interface UpdateGrowdeverDTO {
    id: string;
    nome?: string;
    idade?: number;
}

export class UpdateGrowdeverUseCase {
    constructor(private repository: GrowdeverRepository) {}

    public async execute(data: UpdateGrowdeverDTO) {
        const growdever = await this.repository.get(data.id);
        if (!growdever) {
            return null;
        }

        const result = await this.repository.update(data);

        return result?.toJson();
    }
}
