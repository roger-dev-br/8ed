import { Response, Request } from "express";
import { GrowdeverRepository } from "../repositories/growdever.repository";

export class GrowdeverController {
  async create(request: Request, response: Response) {
    const { name, cpf, birth, skills, address } = request.body;

    const repository = new GrowdeverRepository();

    await repository.createGrowdever({});

    return response.json({});
  }
}
