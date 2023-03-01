import { NextFunction, Request, Response } from "express";

export const createGrowdeverValidator = (req: Request, res: Response, next: NextFunction) => {
  const { nome, email } = req.body;

  if (!nome) {
    return res.status(400).send({
      ok: false,
      message: "Nome não informado",
    });
  }

  if (!email) {
    return res.status(400).send({
      ok: false,
      message: "E-mail não informado",
    });
  }

  next();
};
