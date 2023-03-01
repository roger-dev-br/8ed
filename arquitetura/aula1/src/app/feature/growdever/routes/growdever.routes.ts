import { Router } from "express";
import { GrowdeverController } from "../controllers/growdever.controller";
import { createGrowdeverValidator } from "../validators/create-growdever.validator";

const growdeverRoutes = Router();

growdeverRoutes.post("/", [createGrowdeverValidator], new GrowdeverController().create);

export { growdeverRoutes };
