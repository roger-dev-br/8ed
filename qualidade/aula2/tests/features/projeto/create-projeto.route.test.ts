import { Projeto } from "./../../../src/app/models/projeto.model";
import { GrowdeverRepository } from "./../../../src/app/features/growdever/repositories/growdever.repository";
import { GrowdeverEntity } from "./../../../src/app/shared/database/entities/growdever.entity";
import { ProjetoEntity } from "./../../../src/app/shared/database/entities/projeto.entity";
import { EnderecoEntity } from "./../../../src/app/shared/database/entities/endereco.entity";
import { AvaliacaoEntity } from "./../../../src/app/shared/database/entities/avaliacao.entity";
import { Endereco } from "./../../../src/app/models/endereco.model";
import { Avaliacao } from "./../../../src/app/models/avaliacao.model";
import { createServer } from "./../../../src/main/config/server.config";
import { DatabaseConnection, RedisConnection } from "../../../src/main/database";
import { Growdever } from "../../../src/app/models/growdever.model";
import request from "supertest";
import { Request, Response, Router } from "express";
import { Entity, EntityManager } from "typeorm";

class Result {
    public static ok(data: any, code?: number) {
        return {
            ok: true,
            data,
            code: code ?? 200,
        };
    }

    public static error(message: string, code?: number) {
        return {
            ok: false,
            message,
            code: code ?? 400,
        };
    }
}

class ProjetoRepository {
    private repository = DatabaseConnection.connection.getRepository(ProjetoEntity);

    public async listByGrowdever(idGrowdever: string) {
        const result = await this.repository.findBy({
            idGrowdever,
        });

        return result.map((item) => this.mapEntityToModel(item));
    }

    public async create(projeto: Projeto) {
        const projetoEntity = this.repository.create({
            id: projeto.id,
            idGrowdever: projeto.growdever.id,
            nome: projeto.nome,
            indAtivo: projeto.indAtivo,
        });

        await this.repository.save(projetoEntity);

        const result = await this.repository.findOneBy({
            id: projeto.id,
        });

        return this.mapEntityToModel(result!);
    }

    private mapEntityToModel(entity: ProjetoEntity) {
        const growdever = new GrowdeverRepository().mapEntityToModel(entity.growdever);

        return Projeto.create(entity.id, entity.nome, entity.indAtivo, growdever);
    }
}

interface CreateProjetoDTO {
    idGrowdever: string;
    nome: string;
}

class CreateProjetoUseCase {
    constructor(private growdeverRepository: GrowdeverRepository, private repository: ProjetoRepository) {}

    public async execute(data: CreateProjetoDTO) {
        const growdever = await this.growdeverRepository.get(data.idGrowdever);
        if (!growdever) {
            return Result.error("Growdever não encontrado", 404);
        }

        const projects = await this.repository.listByGrowdever(data.idGrowdever);
        if (projects.length >= 2) {
            return Result.error("Growdever já possui 2 projetos", 400);
        }

        const projeto = new Projeto(data.nome, true, growdever);

        const result = await this.repository.create(projeto);

        return Result.ok(result.toJson());
    }
}

class ProjetoController {
    public async create(req: Request, res: Response) {
        const { nome, idGrowdever } = req.body;

        if (!nome) {
            return res.status(400).send({
                ok: false,
                message: "Nome não foi informado",
            });
        }

        if (!idGrowdever) {
            return res.status(400).send({
                ok: false,
                message: "Id do Growdever não foi informado",
            });
        }

        const usecase = new CreateProjetoUseCase(new GrowdeverRepository(), new ProjetoRepository());
        const result = await usecase.execute({
            idGrowdever,
            nome,
        });

        if (!result.ok) {
            return res.status(result.code).send(result);
        }

        return res.status(201).send(result);
    }
}

const projetoRoutes = () => {
    const router: Router = Router();

    router.post("/", new ProjetoController().create);

    return router;
};

describe("Testes da feature projeto usando TDD", () => {
    beforeAll(async () => {
        await DatabaseConnection.connect();
        await RedisConnection.connect();

        db = DatabaseConnection.connection.manager;
        app = createServer();

        jest.setTimeout(15000);

        app.use("/projeto", projetoRoutes());
    });

    afterAll(async () => {
        await DatabaseConnection.destroy();
        await RedisConnection.destroy();
    });

    beforeEach(async () => {
        // Limpa os dados das tabelas abaixo
        await db.clear(ProjetoEntity);
        await db.clear(AvaliacaoEntity);
        await db.clear(EnderecoEntity);
        await db.clear(GrowdeverEntity);
    });

    let app: any;
    let db: EntityManager;

    const createGrowdever = async (growdever?: Growdever) => {
        growdever = growdever ?? new Growdever("teste", 12345, 20, ["nodejs"]);

        const growdeverEntity = db.create(GrowdeverEntity, {
            id: growdever.id,
            cpf: growdever.cpf,
            idade: growdever.idade,
            nome: growdever.nome,
            skills: growdever.skills.join(","),
        });

        await db.save(growdeverEntity);

        return growdever;
    };

    const createProject = async (growdever: Growdever) => {
        const project = new Projeto("teste", true, growdever);

        const projectEntity = db.create(ProjetoEntity, {
            idGrowdever: project.growdever.id,
            id: project.id,
            nome: project.nome,
            indAtivo: project.indAtivo,
        });

        await db.save(projectEntity);

        return project;
    };

    const assertErrorWithMessage = (result: request.Response, code: number = 400, message?: string) => {
        expect(result).toBeDefined();
        expect(result).not.toBeNull();
        expect(result).toHaveProperty("body.ok", false);
        expect(result).toHaveProperty("statusCode", code);

        if (message) {
            expect(result).toHaveProperty("body.message", message);
        }
    };

    const assertSuccess = (result: request.Response, code: number = 200, message?: string) => {
        expect(result).toBeDefined();
        expect(result).not.toBeNull();
        expect(result).toHaveProperty("body.ok", true);
        expect(result).toHaveProperty("statusCode", code);

        if (message) {
            expect(result).toHaveProperty("body.message", message);
        }
    };

    test("deve retornar 400 se o nome do projeto não for informado", async () => {
        const body = {};

        const result = await request(app).post("/projeto").send(body);

        assertErrorWithMessage(result, 400, "Nome não foi informado");
    });

    test("deve retornar 400 se o id do growdever do projeto não for informado", async () => {
        const body = {
            nome: "Teste",
        };

        const result = await request(app).post("/projeto").send(body);

        assertErrorWithMessage(result, 400, "Id do Growdever não foi informado");
    });

    test("deve retornar 404 se o growdever não estiver cadastrado", async () => {
        const body = {
            nome: "Teste",
            idGrowdever: "abc-123",
        };

        const result = await request(app).post("/projeto").send(body);

        assertErrorWithMessage(result, 404, "Growdever não encontrado");
    });

    test("deve retornar 400 se o growdever possuir 2 ou mais projetos", async () => {
        const growdever = await createGrowdever();
        await createProject(growdever);
        await createProject(growdever);

        const body = {
            nome: "Teste",
            idGrowdever: growdever.id,
        };

        const result = await request(app).post("/projeto").send(body);

        assertErrorWithMessage(result, 400, "Growdever já possui 2 projetos");
    });

    test("deve retornar 201 se projeto for criado com sucesso", async () => {
        const growdever = await createGrowdever();

        const body = {
            nome: "Teste",
            idGrowdever: growdever.id,
        };

        const result = await request(app).post("/projeto").send(body);

        assertSuccess(result, 201);

        const projeto = result.body.data;
        expect(projeto).toHaveProperty("nome", body.nome);
        expect(projeto).toHaveProperty("growdever.id", growdever.id);
    });
});
