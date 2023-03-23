import Redis from "ioredis";
import "dotenv/config";

import { Growdever } from "../../app/models/growdever.model";
import { redisEnv } from "../../app/envs/redis.env";

export async function exampleRedis() {
    const redis = new Redis({
        host: redisEnv.host,
        port: redisEnv.port,
        username: redisEnv.username,
        password: redisEnv.password,
    });

    // Faz o get e já imprime no console
    console.log(await redis.get("chave1"));

    // Armazena o get em uma const
    const chave2 = await redis.get("teste2");

    // Verifica se a chave existe ou se é null
    if (chave2 === null) {
        console.log("chave2 é null");
    } else {
        console.log(chave2);
    }

    // Cria uma chave mais complexa no set
    // É preciso usar JSON.stringify
    const user = new Growdever("José", 13245, 15, ["redis", "nodejs"]);
    await redis.set("user", JSON.stringify(user.toJson()));

    // Busca a chave criada acima novamente e remonta o objeto complexo
    const cachedUser = await redis.get("user");
    if (cachedUser) {
        const grow = JSON.parse(cachedUser);
        const cachedGrowdever = Growdever.create(
            grow.nome,
            grow.idade,
            grow.cpf,
            grow.id,
            grow.skills
        );
        console.log(cachedGrowdever);
    }
}
