import { Request, Response } from "express";
import { lista } from "../data/pet.data";
import { IPet, IResposta } from "../interfaces";
import { v4 as uuid } from "uuid";

class Pet {
  obtemPets(req: Request, res: Response) {
    res.json({
      sucesso: true,
      dados: lista,
    } as IResposta);
  }

  obterPetPorId(req: Request, res: Response) {
    const { id } = req.params;
    const pet = lista.find((f) => f.id === id);

    res.status(200).json({
      sucesso: true,
      dados: pet,
    } as IResposta);
  }

  criarPet(req: Request, res: Response) {
    const { nome, raca } = req.body;

    const novoPet = {
      id: uuid(),
      nome,
      raca,
    } as IPet;

    lista.push(novoPet);

    res.status(201).json({
      sucesso: true,
      dados: novoPet,
    } as IResposta);
  }

  validarPet(pet: IPet): IResposta {
    if (!pet.nome) {
      return {
        sucesso: false,
        mensagem: "Nome é obrigatorio",
        dados: null,
      };
    }

    if (!pet.raca) {
      return {
        sucesso: false,
        mensagem: "Raça é obrigatoria",
        dados: null,
      };
    }

    return {
      sucesso: true,
      dados: null,
    };
  }

  atualizarPet(req: Request, res: Response) {
    const { id } = req.params;
    const { nome, raca } = req.body;

    const pet = lista.find((f) => f.id === id);

    pet!.nome = nome;
    pet!.raca = raca;

    res.status(200).json({
      sucesso: true,
      dados: pet,
    } as IResposta);
  }
}

const pet = new Pet();
export { pet };
