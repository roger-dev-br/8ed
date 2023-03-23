import { Request, Response } from "express";
import { AddSkillUseCase } from "../usecases/add-skill.usecase";
import { GrowdeverRepository } from "../../growdever/repositories/growdever.repository";
import { ListSkillsUseCase } from "../usecases/list-skills.usecase";

export class SkillsController {
    public async listSkills(req: Request, res: Response) {
        try {
            const { id } = req.params;

            const usecase = new ListSkillsUseCase(new GrowdeverRepository());
            const result = await usecase.execute(id);

            return res.status(200).send({
                ok: true,
                data: result,
            });
        } catch (error: any) {
            return res.status(500).send({
                ok: false,
                message: error.toString(),
            });
        }
    }

    public async createSkill(req: Request, res: Response) {
        try {
            const { skill } = req.body;
            const { id } = req.params;

            if (!skill) {
                return res.status(400).send({
                    ok: false,
                    message: "Skill not provided",
                });
            }

            const usecase = new AddSkillUseCase(new GrowdeverRepository());
            const result = await usecase.execute({ id, skill });

            return res.send({
                ok: true,
                data: result,
            });
        } catch (error: any) {
            return res.status(500).send({
                ok: false,
                message: error.toString(),
            });
        }
    }
}
