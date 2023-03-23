import { GrowdeverRepository } from "../repositories/growdever.repository";

export class GetGrowdeverUseCase {
    constructor(private repository: GrowdeverRepository) {}

    public async execute(id: string) {
        const result = await this.repository.get(id);

        if (!result) {
            return null;
        }

        return result.toJson();
    }
}
