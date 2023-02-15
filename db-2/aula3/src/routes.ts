import { Express } from "express";
import { Growdever3Controlller } from "./controllers/growdever3.controller";
import { Turma3Controlller } from "./controllers/turma3.controller";

export default (app: Express) => {
  app.get("/", (request, response) => response.send("ESTÁ FUNCIONANDO"));

  const growdeverController = new Growdever3Controlller();
  app.post("/growdever3", growdeverController.create);
  app.get("/growdever3/:uuid", growdeverController.getByUUID);
  app.get("/growdever3", growdeverController.getAll);
  app.put("/growdever3/:uuid", growdeverController.update);

  const turmaController = new Turma3Controlller();
  app.post("/turma3", turmaController.create);
  app.get("/turma3/:uuid", turmaController.getByUUID);
};
