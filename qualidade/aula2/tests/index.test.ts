import { GrowdeverRepository } from "../src/app/features/growdever/repositories/growdever.repository";
import { ListGrowdeversUseCase } from "../src/app/features/growdever/usecases/list-growdevers.usecase";
import { CacheRepository } from "../src/app/shared/database/repositories/cache.repository";
import { DatabaseConnection, RedisConnection } from "../src/main/database";

describe.skip("Testes básicos", () => {
    // test('should <...> if/when <...>', () => {
    //    ...
    // });

    test("should return 2 if when sum 1 and 1", () => {
        const result = 1 + 1;
        console.log("O resultado foi " + result);

        expect(result).toBe(2);
    });

    beforeAll(async () => {
        await DatabaseConnection.connect();
        await RedisConnection.connect();
    });

    afterAll(async () => {
        await RedisConnection.destroy();
        return await DatabaseConnection.destroy();
    });

    beforeEach(() => {
        jest.resetAllMocks();
    });

    test("should test coverage", async () => {
        const sut = new ListGrowdeversUseCase(new GrowdeverRepository(), new CacheRepository());
        const result = await sut.execute();

        expect(result).toBeDefined();
        expect(result.length).toBeGreaterThan(1);
    });
});
