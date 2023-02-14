import { Aula3Repository } from "../repositories/aula3-respository";
import { Request, Response } from "express";
import config from "../database/ormconfig";

export class Aula3Controller {
  async criar(req: Request, res: Response) {
    const { descricao, quantidade } = req.body;

    console.log(config);

    const repository = new Aula3Repository();
    const salvo = await repository.criar(descricao, quantidade);

    return res.status(201).json(salvo);
  }
}
