import { Express } from "express";
import { Growdever3Controlller } from "./controllers/growdever3.controller";

export default (app: Express) => {
  app.get("/", (request, response) => response.send("ESTÁ FUNCIONANDO"));

  const growdeverController = new Growdever3Controlller();
  app.post("/growdever3", growdeverController.create);
  app.get("/growdever3/:uuid", growdeverController.getByUUID);
  app.get("/growdever3", growdeverController.getAll);
  app.put("/growdever3/:uuid", growdeverController.update);
};
