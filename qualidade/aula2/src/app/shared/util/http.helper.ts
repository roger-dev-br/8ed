import { Response } from "express";

export class HttpHelper {
    public static success(
        res: Response,
        data: any,
        message?: string,
        code?: number
    ) {
        return res.status(code ?? 200).send({
            ok: true,
            data,
            message,
        });
    }

    public static serverError(res: Response, message?: any, code?: number) {
        return res.status(code ?? 500).send({
            ok: false,
            message: message.toString(),
        });
    }

    public static notProvidedError(
        res: Response,
        field: string,
        code?: number
    ) {
        return res.status(code ?? 400).send({
            ok: false,
            message: `${field} was not provided`,
        });
    }

    public static notFoundError(res: Response, entity: string) {
        return res.status(404).send({
            ok: false,
            message: `${entity} was not found`,
        });
    }
}
