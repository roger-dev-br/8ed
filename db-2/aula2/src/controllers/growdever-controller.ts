import { Request, Response } from "express";
import { Growdever } from "../models/growdever";
import { GrowdeverRepository } from "../repositories/growdever-repository";

export class GrowdeverController {
  async obtemPorCodigo(req: Request, res: Response) {
    // /growdevers/1
    const { id } = req.params;

    // crio uma instancia do Repositorio que é o responsavel
    // por acessar o banco de dados
    const repository = new GrowdeverRepository();
    // Consulta o ID no banco de dados
    const growdever = await repository.obterGrowdeverPorCodigo(Number(id));
    if (!growdever) {
      return res.status(404).json({ erro: "Growdever not found" });
    }

    return res.status(200).json(growdever.toJson());
  }

  async obtemTodosGrowdevers(req: Request, res: Response) {
    const repository = new GrowdeverRepository();
    const growdevers = await repository.obterTodosGrowdevers();

    return res.status(200).json(growdevers.map((growdever) => growdever.toJson()));
  }

  async criarGrowdever(req: Request, res: Response) {
    const { name } = req.body;

    const repository = new GrowdeverRepository();
    await repository.criarGrowdever(Growdever.create(name));

    return res.status(201).json({});
  }

  async atualizarGrowdever(req: Request, res: Response) {
    const { name } = req.body;
    const { id } = req.params;

    const repository = new GrowdeverRepository();
    await repository.atualizarGrowdever(Growdever.create(name, Number(id)));

    return res.status(200).json({});
  }

  async removerGrowdever(req: Request, res: Response) {
    const { id } = req.params;
    const repository = new GrowdeverRepository();
    await repository.removerGrowdever(Number(id));

    return res.status(200).json({});
  }
}
