import { UpdateGrowdeverUseCase } from "./../usecases/update-growdever.usecase";
import { CreateGrowdeverUseCase } from "./../usecases/create-growdever.usecase";
import { GetGrowdeverUseCase } from "./../usecases/get-growdever.usecase";
import { Request, Response } from "express";
import { GrowdeverRepository } from "../repositories/growdever.repository";
import { ListGrowdeversUseCase } from "../usecases/list-growdevers.usecase";
import { HttpHelper } from "../../../shared/util/http.helper";
import { CacheRepository } from "../../../shared/database/repositories/cache.repository";

export class GrowdeverController {
    public async list(_: Request, res: Response) {
        try {
            const usecase = new ListGrowdeversUseCase(
                new GrowdeverRepository(),
                new CacheRepository()
            );
            const result = await usecase.execute();

            return res.status(200).send({
                ok: true,
                message: "Growdevers successfully listed",
                data: result,
            });
        } catch (error: any) {
            return HttpHelper.serverError(res, error);
        }
    }

    public async get(req: Request, res: Response) {
        try {
            const { id } = req.params;

            const usecase = new GetGrowdeverUseCase(new GrowdeverRepository());
            const result = await usecase.execute(id);

            if (!result) {
                return res.status(404).send({
                    ok: false,
                    message: "Deu ruim! O Growdever não existe",
                });
            }

            return res.status(200).send({
                ok: true,
                message: "Growdever successfully obtained",
                data: result,
            });
        } catch (error: any) {
            return HttpHelper.serverError(res, error);
        }
    }

    public async create(req: Request, res: Response) {
        try {
            const { nome, cpf, idade, skills, endereco } = req.body;

            const usecase = new CreateGrowdeverUseCase(
                new GrowdeverRepository()
            );
            const result = await usecase.execute({
                nome,
                cpf,
                idade,
                skills,
                endereco,
            });

            return HttpHelper.success(
                res,
                result,
                "Growdever successfully created",
                201
            );
        } catch (error: any) {
            return HttpHelper.serverError(res, error);
        }
    }

    public async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { nome, idade } = req.body;

            const usecase = new UpdateGrowdeverUseCase(
                new GrowdeverRepository()
            );
            const result = await usecase.execute({ id, nome, idade });

            if (!result) {
                return HttpHelper.notFoundError(res, "Growdever");
            }

            return HttpHelper.success(
                res,
                result,
                "Growdever atualizado com sucesso"
            );
        } catch (error: any) {
            return HttpHelper.serverError(res, error);
        }
    }
}
