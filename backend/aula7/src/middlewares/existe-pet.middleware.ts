import { NextFunction, Request, Response } from "express";
import { lista } from "../data/pet.data";
import { IResposta } from "../interfaces";

export function existePet(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;

  const pet = lista.find((f) => f.id === id);
  if (!pet) {
    return res.status(404).json({
      sucesso: false,
      mensagem: "Pet não encontrado",
      dados: null,
    } as IResposta);
  }

  next();
}
