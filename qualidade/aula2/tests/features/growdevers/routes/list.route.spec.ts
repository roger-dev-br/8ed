import { CreateGrowdeverUseCase } from "../../../../src/app/features/growdever/usecases/create-growdever.usecase";
import { createServer } from "../../../../src/main/config/server.config";
import request from "supertest";
import { GetGrowdeverByCpfUseCase } from "../../../../src/app/features/growdever/usecases/get-by-cpf.usecase";
import { Growdever } from "../../../../src/app/models/growdever.model";
import { DatabaseConnection, RedisConnection } from "../../../../src/main/database";
import { ListGrowdeversUseCase } from "../../../../src/app/features/growdever/usecases/list-growdevers.usecase";

const growdeverTest = new Growdever("nome", 12345, 20, ["node"]);

describe("Testes para a rota de criação de um growdever na API", () => {
    beforeAll(async () => {
        // Necessário mesmo sendo unitário
        // pois as rotas criam controllers,
        // que criam usecases que por sua vez
        // criam os repositories (aí vai precisar das connections)
        await DatabaseConnection.connect();
        await RedisConnection.connect();
    });

    afterAll(async () => {
        await DatabaseConnection.destroy();
        RedisConnection.destroy();
    });

    beforeEach(() => {
        jest.clearAllMocks();

        // Mock padrão - o growdever não existe na base
        jest.spyOn(ListGrowdeversUseCase.prototype, "execute").mockResolvedValue([growdeverTest.toJson()]);
    });

    const server = createServer();

    test("deve retornar 200 se a listagem for feita com sucesso", async () => {
        const result = await request(server).get("/growdever").send();

        expect(result.statusCode).toBe(200);
        expect(result.body).toHaveProperty("ok");
        expect(result.body).toHaveProperty("message");
        expect(result.body).toHaveProperty("data");
        expect(result.body.ok).toEqual(true);
    });

    test("deve retornar 500 se o usecase retornar uma exceção", async () => {
        jest.spyOn(ListGrowdeversUseCase.prototype, "execute").mockImplementation(() => {
            throw new Error("Test exception");
        });

        const result = await request(server).get("/growdever").send();

        expect(result.statusCode).toBe(500);
        expect(result.body).toHaveProperty("ok");
        expect(result.body).toHaveProperty("message");
        expect(result.body.ok).toEqual(false);
        expect(result.body.message).toEqual(new Error("Test exception").toString());
    });
});
