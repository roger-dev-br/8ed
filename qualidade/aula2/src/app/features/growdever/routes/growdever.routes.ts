import { Router } from "express";

import { GrowdeverController } from "../controllers/growdever.controller";
import { cpfExistsMiddleware } from "../middlewares/cpf-exists.middleware";
import { cpfValidatorMiddleware } from "../../../shared/middlewares/cpf-validator.middleware";
import { logGetMiddleware } from "../../../shared/middlewares/log-get.middleware";
import { skillsRoutes } from "../../skills/routes/skills.routes";
import { createGrowdeverValidator } from "../validators/create-growdever.validator";

const growdeverRoutes = Router();

growdeverRoutes.get("/", [logGetMiddleware], new GrowdeverController().list);

growdeverRoutes.get("/:id", new GrowdeverController().get);

growdeverRoutes.post(
    "/",
    [createGrowdeverValidator, cpfExistsMiddleware],
    new GrowdeverController().create
);

growdeverRoutes.put("/:id", new GrowdeverController().update);

growdeverRoutes.use("/:id/skills", skillsRoutes);

export { growdeverRoutes };
