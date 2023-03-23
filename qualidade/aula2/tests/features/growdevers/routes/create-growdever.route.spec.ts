import { CreateGrowdeverUseCase } from "./../../../../src/app/features/growdever/usecases/create-growdever.usecase";
import { createServer } from "./../../../../src/main/config/server.config";
import request from "supertest";
import { GetGrowdeverByCpfUseCase } from "../../../../src/app/features/growdever/usecases/get-by-cpf.usecase";
import { Growdever } from "../../../../src/app/models/growdever.model";
import { DatabaseConnection, RedisConnection } from "../../../../src/main/database";

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
        jest.spyOn(GetGrowdeverByCpfUseCase.prototype, "execute").mockResolvedValue(undefined);

        // Mock padrão - o growdever é criado com sucesso
        jest.spyOn(CreateGrowdeverUseCase.prototype, "execute").mockResolvedValue(growdeverTest.toJson());
    });

    const server = createServer();

    test("deve retornar 400 se o campo nome não for informado", async () => {
        const result = await request(server).post("/growdever").send({});
        expect(result.statusCode).toBe(400);
    });

    test("deve retornar 400 se o campo idade não for informado", async () => {
        const result = await request(server).post("/growdever").send({
            nome: "teste",
        });
        expect(result.statusCode).toBe(400);
    });

    test("deve retornar 400 se o campo cpf não for informado", async () => {
        const result = await request(server).post("/growdever").send({
            nome: "teste",
            idade: 20,
        });
        expect(result.statusCode).toBe(400);
    });

    test("deve retornar 400 se o campo rua do endereço não for informado", async () => {
        const result = await request(server).post("/growdever").send({
            nome: "teste",
            idade: 20,
            cpf: 12345,
            endereco: {},
        });
        expect(result.statusCode).toBe(400);
    });

    test("deve retornar 400 se o campo cidade do endereço não for informado", async () => {
        const result = await request(server)
            .post("/growdever")
            .send({
                nome: "teste-nome",
                idade: 20,
                cpf: 12345,
                endereco: {
                    rua: "teste-rua",
                },
            });
        expect(result.statusCode).toBe(400);
    });

    test("deve retornar 400 se o campo uf do endereço não for informado", async () => {
        const result = await request(server)
            .post("/growdever")
            .send({
                nome: "teste-nome",
                idade: 20,
                cpf: 12345,
                endereco: {
                    rua: "teste-rua",
                    cidade: "teste-cidade",
                },
            });
        expect(result.statusCode).toBe(400);
    });

    test("deve retornar 400 se o growdever já existe com o mesmo CPF", async () => {
        jest.spyOn(GetGrowdeverByCpfUseCase.prototype, "execute").mockResolvedValue(growdeverTest.toJson());

        const result = await request(server).post("/growdever").send({
            nome: "teste-nome",
            idade: 20,
            cpf: 12345,
        });

        expect(result.statusCode).toBe(400);
        expect(result.body).toHaveProperty("ok");
        expect(result.body).toHaveProperty("message");
        expect(result.body.ok).toEqual(false);
        expect(result.body.message).toEqual("Growdever already exists");
    });

    test("deve retornar 201 se o novo growdever for criado com sucesso", async () => {
        const result = await request(server).post("/growdever").send({
            nome: "teste-nome",
            idade: 20,
            cpf: 12345,
        });

        expect(result.statusCode).toBe(201);
        expect(result.body).toHaveProperty("ok");
        expect(result.body).toHaveProperty("message");
        expect(result.body).toHaveProperty("data");
        expect(result.body.ok).toEqual(true);
        expect(result.body.message).toEqual("Growdever successfully created");
    });

    test("deve retornar 500 se o usecase retornar uma exceção", async () => {
        jest.spyOn(CreateGrowdeverUseCase.prototype, "execute").mockImplementation(() => {
            throw new Error("Test exception");
        });

        const result = await request(server).post("/growdever").send({
            nome: "teste-nome",
            idade: 20,
            cpf: 12345,
        });

        expect(result.statusCode).toBe(500);
        expect(result.body).toHaveProperty("ok");
        expect(result.body).toHaveProperty("message");
        expect(result.body.ok).toEqual(false);
        expect(result.body.message).toEqual(new Error("Test exception").toString());
    });
});
