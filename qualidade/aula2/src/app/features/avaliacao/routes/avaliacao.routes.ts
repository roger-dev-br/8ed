import { Router } from "express";
import { AvaliacaoController } from "../controllers/avaliacao.controller";

const avaliacaoRoutes = Router();

avaliacaoRoutes.get("/", new AvaliacaoController().list);
avaliacaoRoutes.get("/:id", new AvaliacaoController().get);
avaliacaoRoutes.post("/", new AvaliacaoController().create);

export { avaliacaoRoutes };
