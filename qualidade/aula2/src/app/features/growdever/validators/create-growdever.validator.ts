import { NextFunction, Request, Response } from "express";
import { HttpHelper } from "../../../shared/util/http.helper";

export const createGrowdeverValidator = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { nome, cpf, idade, skills, endereco } = req.body;

        if (!nome) {
            return res.status(400).send({
                ok: false,
                message: "Nome not provided",
            });
        }

        if (!idade) {
            return res.status(400).send({
                ok: false,
                message: "Idade not provided",
            });
        }

        if (!cpf) {
            return res.status(400).send({
                ok: false,
                message: "CPF not provided",
            });
        }

        if (endereco) {
            if (!endereco.rua) {
                return res.status(400).send({
                    ok: false,
                    message: "endereco.rua not provided",
                });
            }

            if (!endereco.cidade) {
                return res.status(400).send({
                    ok: false,
                    message: "endereco.cidade not provided",
                });
            }

            if (!endereco.uf) {
                return res.status(400).send({
                    ok: false,
                    message: "endereco.uf not provided",
                });
            }
        }

        return next();
    } catch (error: any) {
        return HttpHelper.serverError(res, error);
    }
};
