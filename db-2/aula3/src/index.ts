import express from "express";
import appRoutes from "./routes";
import cors from "cors";
import { pgHelper } from "./database/pg-helper";

const app = express();

app.use(express.json());
app.use(cors());

appRoutes(app);

console.log(process.env.PORT);

pgHelper
  .connect()
  .then(() => {
    app.listen(process.env.PORT || 8080, () => console.log("API RODANDO"));
  })
  .catch((err) => console.log(err));
