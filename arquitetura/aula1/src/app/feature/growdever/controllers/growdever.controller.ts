import { Response, Request } from "express";
import { HttpHelper } from "../../../shared/util/http.helper";
import { GrowdeverRepository } from "../repositories/growdever.repository";
import { CreateGrowdeverUseCase } from "../usecases/create-growdever.usecase";

export class GrowdeverController {
  public async create(req: Request, res: Response) {
    try {
      const { nome, email } = req.body;

      const useCase = new CreateGrowdeverUseCase(new GrowdeverRepository());

      const result = await useCase.execute({
        nome,
        email,
      });

      return HttpHelper.sucess(res, result, "OK", 201);
    } catch (error: any) {
      return HttpHelper.serverError(res, error);
    }
  }
}
