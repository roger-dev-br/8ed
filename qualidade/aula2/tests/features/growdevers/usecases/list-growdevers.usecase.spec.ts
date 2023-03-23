import { GrowdeverRepository } from "../../../../src/app/features/growdever/repositories/growdever.repository";
import { ListGrowdeversUseCase } from "../../../../src/app/features/growdever/usecases/list-growdevers.usecase";
import { Growdever } from "../../../../src/app/models/growdever.model";
import { CacheRepository } from "../../../../src/app/shared/database/repositories/cache.repository";
import { DatabaseConnection, RedisConnection } from "../../../../src/main/database";

describe("List growdevers usecase unit tests", () => {
    beforeAll(async () => {
        await DatabaseConnection.connect();
        await RedisConnection.connect();
    });

    afterAll(async () => {
        RedisConnection.destroy();
        await DatabaseConnection.destroy();
        return;
    });

    beforeEach(() => {
        jest.clearAllMocks();

        const grow = new Growdever("BEFORE ALL TEST", 1999923, 12, []);
        jest.spyOn(GrowdeverRepository.prototype, "list").mockResolvedValue([grow]);
    });

    const makeSut = () => {
        const repository = new GrowdeverRepository();
        const cache = new CacheRepository();

        const usecase = new ListGrowdeversUseCase(repository, cache);
        return { sut: usecase, repository, cache };
    };

    test("should return a valid list if there are more than 0 growdevers", async () => {
        const { sut } = makeSut();
        jest.spyOn(CacheRepository.prototype, "get").mockResolvedValue(null);

        const result = await sut.execute();
        expect(result).toBeDefined();
        expect(result.length).toBeGreaterThan(0);
    });

    test("should return an empty list if there is not any growdever", async () => {
        const { sut, repository, cache } = makeSut();

        const grow = new Growdever("abc", 123, 12, []);

        jest.spyOn(GrowdeverRepository.prototype, "list").mockResolvedValue([]);
        jest.spyOn(CacheRepository.prototype, "get").mockResolvedValue(null);

        const result = await sut.execute();
        expect(result).toBeDefined();
        expect(result.length).toEqual(0);
    });
});
