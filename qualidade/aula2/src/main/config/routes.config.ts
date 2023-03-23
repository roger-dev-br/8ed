import { Express } from "express";
import { avaliacaoRoutes } from "../../app/features/avaliacao/routes/avaliacao.routes";
import { growdeverRoutes } from "../../app/features/growdever/routes/growdever.routes";

export const makeRoutes = (app: Express) => {
    app.use("/growdever", growdeverRoutes);
    app.use("/avaliacao", avaliacaoRoutes);
};
