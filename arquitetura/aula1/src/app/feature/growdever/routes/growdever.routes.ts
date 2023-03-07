import { Router } from "express";
import { GrowdeverController } from "../controllers/growdever.controller";
import { createGrowdeverValidator } from "../validators/create-growdever.validator";

const growdeverRoutes = Router();

growdeverRoutes.post("/", [createGrowdeverValidator], new GrowdeverController().create);

growdeverRoutes.put(":id", [], new GrowdeverController().update);

export { growdeverRoutes };
