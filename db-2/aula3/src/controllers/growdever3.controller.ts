import { Request, Response } from "express";
import { Growdever3Repository } from "../repositories/growdever3.repository";

export class Growdever3Controlller {
  async create(req: Request, res: Response) {
    const { name } = req.body;

    const repository = new Growdever3Repository();

    const growdever = await repository.createGrowdever(name);

    return res.json(growdever);
  }

  async getByUUID(req: Request, res: Response) {
    const repository = new Growdever3Repository();
    const { uuid } = req.params;

    try {
      const growdever = await repository.getGrowdeverByUUID(uuid);
      if (!growdever) {
        return res.status(404).json({});
      }

      return res.status(200).json(growdever);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  async getAll(req: Request, res: Response) {
    const repository = new Growdever3Repository();

    try {
      const growdevers = await repository.getAll();
      return res.status(200).json(growdevers);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  async update(req: Request, res: Response) {
    const repository = new Growdever3Repository();
    const { uuid } = req.params;
    const { name } = req.body;

    try {
      await repository.updateGrowdever(uuid, name);
      return res.status(200).json({});
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}
