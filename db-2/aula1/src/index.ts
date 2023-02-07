import express from "express";
import appRoutes from "./routes";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

appRoutes(app);

console.log(process.env.PORT);

app.listen(process.env.PORT || 8080, () => console.log("API RODANDO"));
