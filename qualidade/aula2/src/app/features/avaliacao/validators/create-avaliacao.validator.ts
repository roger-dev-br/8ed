import { NextFunction, Request, Response } from "express";
import { HttpHelper } from "../../../shared/util/http.helper";

export const createAvaliacaoValidator = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { modulo, nota, idGrowdever } = req.body;

        if (!modulo) {
            return res.status(400).send({
                ok: false,
                message: "Modulo não foi informado",
            });
        }

        if (!nota) {
            return res.status(400).send({
                ok: false,
                message: "Nota não foi informada",
            });
        }

        if (!idGrowdever) {
            return res.status(400).send({
                ok: false,
                message: "Growdever (idGrowdever) não foi informado",
            });
        }

        return next();
    } catch (error: any) {
        return HttpHelper.serverError(res, error);
    }
};
