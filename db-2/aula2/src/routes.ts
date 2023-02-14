import { Express } from "express";
import { Aula3Controller } from "./controllers/aula3-controller";
import { GrowdeverController } from "./controllers/growdever-controller";

export default (app: Express) => {
  const growdeverController = new GrowdeverController();

  app.get("/growdevers", growdeverController.obtemTodosGrowdevers);
  app.get("/growdevers/:id", growdeverController.obtemPorCodigo);
  app.post("/growdevers", growdeverController.criarGrowdever);
  app.put("/growdevers/:id", growdeverController.atualizarGrowdever);
  app.delete("/growdevers/:id", growdeverController.removerGrowdever);

  const aula3Controller = new Aula3Controller();
  app.post("/aula3", aula3Controller.criar);
};
