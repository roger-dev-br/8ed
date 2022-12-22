import express, { Express } from "express";
import cors from "cors";
import { pet } from "./services";
import { validaPet } from "./middlewares/validar-pet.middleware";
import { existePet } from "./middlewares/existe-pet.middleware";

// cria uma instancia do express que é o servidor
const server: Express = express();

// libera as requisições de origens diversas
server.use(cors());

// habilitar o recebimento de JSON no corpo de requisições
server.use(express.json());

// Configura a porta onde o servidor vai "escutar" as requisições
server.listen(3001, () => {
  console.log("Servidor OK");
});

/*
server.get("/pets", (req, res) => {
  pet.obtemPets(req, res);
});
*/
server.get("/pets", pet.obtemPets);
server.get("/pets/:id", existePet, pet.obterPetPorId);
server.put("/pets/:id", existePet, pet.atualizarPet);
server.post("/pets", validaPet, pet.criarPet);
