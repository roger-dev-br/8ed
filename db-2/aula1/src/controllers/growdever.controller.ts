import { Request, Response } from "express";
import { GrowdeverRepository } from "../repositories/growdever";

export class GrowdeverController {
  async getById(request: Request, response: Response) {
    const { id } = request.params;

    const repository = new GrowdeverRepository();

    const growdever = await repository.getGrowdeverByUid(Number(id));

    if (!growdever) {
      return response.status(404).json({ error: "Growdever não encontrado" });
    }

    return response.status(200).json(growdever.toJson());
  }
}
