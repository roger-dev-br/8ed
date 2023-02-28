import { runServer } from "./main/server";
import { DatabaseConnection } from "./main/database/typeorm.connection";

// 1 Conectar ao DB, se sucesso subir a API
Promise.all([DatabaseConnection.connect()])
  .then(runServer)
  .catch((error: any) => {
    console.log("Erro ao iniciar");
    console.log(error);
  });
