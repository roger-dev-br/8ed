import { Request, Response } from "express";
import { AvaliacaoRepository } from "../repositories/avaliacao.repository";
import { GrowdeverRepository } from "../../growdever/repositories/growdever.repository";
import { CreateAvaliacaoUseCase } from "../usecases/create-avaliacao.usecase";
import { HttpHelper } from "../../../shared/util/http.helper";
import { ListAvaliacoesUseCase } from "../usecases/list-avalicacoes.usecase";
import { GetAvaliacaoUseCase } from "../usecases/get-avaliacao.usecase";

export class AvaliacaoController {
    public async list(_: Request, res: Response) {
        try {
            const usecase = new ListAvaliacoesUseCase(
                new AvaliacaoRepository()
            );
            const result = await usecase.execute();

            return HttpHelper.success(res, result);
        } catch (error: any) {
            return HttpHelper.serverError(res, error);
        }
    }

    public async get(req: Request, res: Response) {
        try {
            const { id } = req.params;

            const usecase = new GetAvaliacaoUseCase(new AvaliacaoRepository());
            const result = await usecase.execute(id);

            if (!result) {
                return HttpHelper.notFoundError(res, "Avaliacao");
            }

            return HttpHelper.success(res, result);
        } catch (error: any) {
            return HttpHelper.serverError(res, error);
        }
    }

    public async create(req: Request, res: Response) {
        try {
            const usecase = new CreateAvaliacaoUseCase(
                new AvaliacaoRepository(),
                new GrowdeverRepository()
            );
            const result = usecase.execute({ ...req.body });

            return HttpHelper.success(
                res,
                result,
                "Avaliacao criada com sucesso",
                201
            );
        } catch (error: any) {
            return HttpHelper.serverError(res, error);
        }
    }
}
