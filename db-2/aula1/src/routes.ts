import { Express } from "express";
import { GrowdeverController } from "./controllers/growdever.controller";

export default (app: Express) => {
  app.get("/", (request, response) => response.send("ESTÁ FUNCIONANDO"));

  const growdeverController = new GrowdeverController();
  app.get("/growdevers/:id", growdeverController.getById);
};
