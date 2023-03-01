import { Response } from "express";

export class HttpHelper {
  public static sucess(res: Response, data: any, message?: string, code?: number) {
    return res.status(code ?? 200).send({
      ok: true,
      data,
      message,
    });
  }

  public static serverError(res: Response, message?: string, code?: number) {
    return res.status(code ?? 500).send({
      ok: false,
      message,
    });
  }
}
