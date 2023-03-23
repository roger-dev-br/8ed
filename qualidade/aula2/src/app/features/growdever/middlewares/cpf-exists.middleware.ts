import { GetGrowdeverByCpfUseCase } from "./../usecases/get-by-cpf.usecase";
import { NextFunction, Request, Response } from "express";
import { GrowdeverController } from "../controllers/growdever.controller";
import { GrowdeverRepository } from "../repositories/growdever.repository";

export const cpfExistsMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const { cpf } = req.body;

    const usecase = new GetGrowdeverByCpfUseCase(new GrowdeverRepository());
    const growdever = await usecase.execute(cpf);

    if (growdever) {
        return res.status(400).send({
            ok: false,
            message: "Growdever already exists",
        });
    }

    next();
};
