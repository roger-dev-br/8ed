import { Express } from "express";
import { growdeverRoutes } from "../../app/feature/growdever/routes/growdever.routes";

export const makeRoutes = (app: Express) => {
  app.use("/growdever", growdeverRoutes);
};
