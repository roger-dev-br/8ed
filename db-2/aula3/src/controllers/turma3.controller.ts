import { Request, Response } from "express";
import { Turma3Repository } from "../repositories/turma3.repository";

export class Turma3Controlller {
  async create(req: Request, res: Response) {
    const { name, students } = req.body;

    const repository = new Turma3Repository();

    const turma = await repository.create(name, students);

    return res.json(turma);
  }

  async getByUUID(req: Request, res: Response) {
    const { uuid } = req.params;

    const repository = new Turma3Repository();

    const turma = await repository.getByUUID(uuid);

    return res.json(turma);
  }
}
