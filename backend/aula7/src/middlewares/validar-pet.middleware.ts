import { NextFunction, Request, Response } from "express";
import { pet } from "../services";

export function validaPet(req: Request, res: Response, next: NextFunction) {
  const { nome, raca } = req.body;

  const petValido = pet.validarPet({
    nome,
    raca,
  });

  if (!petValido.sucesso) {
    return res.json(petValido);
  }

  next();
}
