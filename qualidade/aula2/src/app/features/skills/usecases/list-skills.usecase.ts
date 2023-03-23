import { GrowdeverRepository } from "../../growdever/repositories/growdever.repository";

export class ListSkillsUseCase {
    constructor(private repository: GrowdeverRepository) {}

    public async execute(id: string) {
        const result = await this.repository.get(id);

        return result?.toJson().skills;
    }
}
