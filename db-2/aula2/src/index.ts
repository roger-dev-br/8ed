import express from "express";
import appRoutes from "./routes";
import { pgHelper } from "./database/pg-helper";
import cors from "cors";

import "reflect-metadata";

const app = express();

app.use(express.json());
app.use(cors());

appRoutes(app);

pgHelper
  .connect()
  .then(() => {
    app.listen(process.env.PORT || 8080, () => {
      console.log("Servidor Rodando na porta", process.env.PORT);
    });
  })
  .catch((error) => console.log(error));
